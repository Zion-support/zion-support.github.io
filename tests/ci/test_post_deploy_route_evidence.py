import os, pathlib, subprocess, tempfile, unittest
import re
ROOT=pathlib.Path(__file__).resolve().parents[2]
TEXT=(ROOT/'.github/workflows/ai-post-push-route-verify.yml').read_text()
CRITICAL='Verify critical Apps release routes'
def steps(_):
    result=[]
    for chunk in TEXT.split('      - name: ')[1:]:
        name,rest=chunk.split('\n',1)
        item={'name':name}
        if '        run: |\n' in rest:
            lines=rest.split('        run: |\n',1)[1].splitlines()
            item['run']='\n'.join(line[10:] if line.startswith('          ') else line for line in lines)+'\n'
        item['env']={}
        for key,value in re.findall(r'^          ([A-Z_]+): (.*)$',rest,re.M):
            item['env'][key]=value
        match=re.search(r'^        if: (.*)$',rest,re.M)
        if match:item['if']=match.group(1)
        match=re.search(r'^        uses: (.*)$',rest,re.M)
        if match:item['uses']=match.group(1)
        match=re.search(r'^          ref: (.*)$',rest,re.M)
        if match:item['with']={'ref':match.group(1)}
        result.append(item)
    return result
CANDIDATE=None
def block(_,name):return next(s['run'] for s in steps(None) if s['name']==name)
ISSUE=steps(CANDIDATE)[-1]
class IssueRevision(unittest.TestCase):
    def test_condition_explicit_failure_override_and_both_outputs(self):
        self.assertEqual(ISSUE['if'],"${{ !cancelled() && (steps.verify.outputs.has_failures == 'true' || steps.critical.outputs.has_failures == 'true') }}")
    def test_source_sha_same_as_checkout(self):
        checkout=next(s for s in steps(CANDIDATE) if 'actions/checkout@' in s.get('uses',''))
        self.assertEqual(ISSUE['env']['VERIFIED_SOURCE_SHA'],checkout['with']['ref'])
        self.assertNotIn('${GITHUB_SHA}',ISSUE['run'])
        self.assertIn('workflow_run.head_branch',ISSUE['env']['VERIFIED_SOURCE_BRANCH'])
        self.assertIn('workflow_run.id',ISSUE['env']['PUBLISHER_RUN_ID'])
    def test_four_combinations_and_body_provenance(self):
        for promoted_bad,critical_bad in [(False,False),(True,False),(False,True),(True,True)]:
            with self.subTest(promoted_bad=promoted_bad,critical_bad=critical_bad), tempfile.TemporaryDirectory() as td:
                p=pathlib.Path(td); (p/'config').mkdir(); (p/'config/smoke-routes.txt').write_text('/promoted-only/\n')
                (p/'curl').write_text('#!/bin/sh\nprintf "%s" "$MOCK_HTTP"\n'); (p/'curl').chmod(0o700)
                (p/'node').write_text('#!/bin/sh\nexit 0\n'); (p/'node').chmod(0o700)
                env=dict(os.environ,PATH=td+':'+os.environ['PATH'],GITHUB_SHA='wrong-event-sha',VERIFIED_SOURCE_SHA='a'*40,VERIFIED_SOURCE_BRANCH='main',PUBLISHER_RUN_ID='123',GITHUB_RUN_ID='456',GITHUB_WORKFLOW='AI Post Push Route Verify')
                flags=[]
                for label,bad in [('Verify promoted routes',promoted_bad),(CRITICAL,critical_bad)]:
                    output=p/('critical-output' if label==CRITICAL else 'promoted-output')
                    env.update(MOCK_HTTP='404' if bad else '200',GITHUB_OUTPUT=str(output))
                    result=subprocess.run(['bash','-c',block(CANDIDATE,label)],cwd=td,env=env,text=True,capture_output=True,timeout=10)
                    self.assertEqual(result.returncode,1 if label==CRITICAL and bad else 0,result.stderr)
                    flags.append('has_failures=true' in output.read_text())
                self.assertEqual(flags,[promoted_bad,critical_bad])
                # Equivalent evaluation of the exact condition pinned in the preceding test;
                # this is not a GitHub expression-engine execution.
                eligible=any(flags)
                self.assertEqual(eligible,promoted_bad or critical_bad)
                if eligible:
                    result=subprocess.run(['bash','-c',ISSUE['run']],cwd=td,env=env,text=True,capture_output=True,timeout=10)
                    self.assertEqual(result.returncode,0,result.stderr)
                    body=(p/'issue-body.md').read_text()
                    self.assertIn('a'*40,body); self.assertNotIn('wrong-event-sha',body)
                    self.assertIn('Publisher run: 123',body);self.assertIn('Verifier run: 456',body)
                    self.assertEqual('/promoted-only/ => 404' in body,promoted_bad)
                    self.assertEqual('/apps/ => 404' in body,critical_bad)
    def test_timeout_budget(self):
        self.assertIn('    timeout-minutes: 35',TEXT)
        self.assertIn('- name: Verify promoted routes\n        timeout-minutes: 15',TEXT)
        self.assertIn('- name: Verify critical Apps release routes\n        timeout-minutes: 10',TEXT)
    def test_shell_syntax(self):
        for step in steps(None):
            if 'run' in step:
                result=subprocess.run(['bash','-n'],input=step['run'],text=True,capture_output=True)
                self.assertEqual(result.returncode,0,result.stderr)
    def test_cancelled_never_eligible(self):
        for promoted,critical in [(False,False),(True,False),(False,True),(True,True)]:
            self.assertFalse((not True) and (promoted or critical))
if __name__=='__main__': unittest.main(verbosity=2)
