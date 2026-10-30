#!/usr/bin/env python3
"""Offline source-freshness and publication-wiring regressions.

Execute the actual inline GitHub-script guards with a controlled main-ref API.
The queue fixture models GitHub's documented single/max pending behavior; it
does not claim to run the hosted scheduler or certify a live deployment.
"""
import json
import re
import subprocess
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
WORKFLOWS = ROOT / '.github/workflows'
NAMES = ('gh-pages.yml', 'static-deploy.yml', 'deploy-on-push.yml')
A = 'a' * 40
B = 'b' * 40


def job(source, name):
    match = re.search(r'(?ms)^  ' + re.escape(name) + r':\n(.*?)(?=^  [\w-]+:\n|\Z)', source)
    if not match:
        raise AssertionError('Missing job: ' + name)
    return match.group(1)


def scripts(source):
    # Read literal script blocks without adding a YAML dependency to CI.
    found = []
    for match in re.finditer(r'(?m)^( +)script: \|\n', source):
        indent = len(match.group(1)) + 2
        lines = []
        for line in source[match.end():].splitlines():
            if line and not line.startswith(' ' * indent):
                break
            lines.append(line[indent:])
        found.append('\n'.join(lines).rstrip() + '\n')
    return found


HARNESS = r'''
const fs = require('node:fs');
const input = JSON.parse(fs.readFileSync(0, 'utf8'));
const outputs = {}, notices = [], summaries = [], calls = [];
const core = {
  setOutput: (key, value) => { outputs[key] = value; },
  notice: value => notices.push(value),
  summary: {
    addHeading(value) { summaries.push(value); return this; },
    addRaw(value) { summaries.push(value); return this; },
    async write() {}
  }
};
const context = {eventName: input.event, repo: {owner: 'fixture', repo: 'pages'}};
const github = {rest: {git: {async getRef(args) {
  calls.push(args);
  if (JSON.stringify(args) !== JSON.stringify({owner:'fixture',repo:'pages',ref:'heads/main'})) {
    throw new Error('Unexpected authoritative-ref request');
  }
  if (input.apiError) throw new Error('Synthetic unavailable GitHub API');
  return {data: {object: {sha: input.main}}};
}}}};
if (input.candidate === null) delete process.env.PAGES_CANDIDATE_SHA;
else process.env.PAGES_CANDIDATE_SHA = input.candidate;
const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
(async () => {
  let error = null;
  try { await new AsyncFunction('github', 'context', 'core', input.script)(github, context, core); }
  catch (e) { error = e.message; }
  process.stdout.write(JSON.stringify({outputs, notices, summaries, calls, error}));
})();
'''


class PublisherFreshnessTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.sources = {name: (WORKFLOWS / name).read_text() for name in NAMES}
        cls.guards = [(name, i, script) for name in NAMES
                      for i, script in enumerate(scripts(cls.sources[name]))]
        if len(cls.guards) != 4:
            raise AssertionError('Expected early/final guards in both automatic publishers')

    def run_guard(self, script, event='push', candidate=A, main=A, api_error=False):
        result = subprocess.run(['node', '-e', HARNESS], input=json.dumps({
            'script': script, 'event': event, 'candidate': candidate,
            'main': main, 'apiError': api_error}), text=True, capture_output=True)
        self.assertEqual(result.returncode, 0, result.stderr)
        return json.loads(result.stdout)

    def each_guard(self):
        for name, index, script in self.guards:
            yield self.subTest(workflow=name, gate=index), script

    def test_current_push_and_workflow_run_can_publish(self):
        for case, script in self.each_guard():
            with case:
                for event in ('push', 'workflow_run'):
                    result = self.run_guard(script, event=event)
                    self.assertIsNone(result['error'])
                    self.assertEqual(result['outputs'], {'publish': 'true', 'state': 'current'})
                    self.assertEqual(len(result['calls']), 1)

    def test_late_old_workflow_run_is_superseded_not_published(self):
        for case, script in self.each_guard():
            with case:
                result = self.run_guard(script, event='workflow_run', candidate=A, main=B)
                self.assertIsNone(result['error'])
                self.assertEqual(result['outputs'], {'publish': 'false', 'state': 'superseded'})
                self.assertIn('Publication skipped.', ' '.join(result['notices']))
                self.assertIn(A, ' '.join(result['summaries']))
                self.assertIn(B, ' '.join(result['summaries']))

    def test_main_advancing_during_build_is_rechecked_before_deploy(self):
        for name in ('gh-pages.yml', 'deploy-on-push.yml'):
            with self.subTest(workflow=name):
                early, final = scripts(self.sources[name])
                self.assertEqual(self.run_guard(early, candidate=A, main=A)['outputs']['publish'], 'true')
                self.assertEqual(self.run_guard(final, candidate=A, main=B)['outputs']['publish'], 'false')
                final_position = self.sources[name].index('name: Recheck source immediately before deployment')
                deploy_position = self.sources[name].index('uses: actions/deploy-pages@v4')
                tail = self.sources[name][final_position:deploy_position]
                self.assertIn("if: steps.deploy-source.outputs.publish == 'true'", tail)
                self.assertNotIn('run: ', tail)

    def test_intentional_manual_source_is_preserved_without_main_lookup(self):
        for case, script in self.each_guard():
            with case:
                result = self.run_guard(script, event='workflow_dispatch', candidate=A, main=B, api_error=True)
                self.assertIsNone(result['error'])
                self.assertEqual(result['outputs'], {'publish': 'true', 'state': 'manual'})
                self.assertEqual(result['calls'], [])
        for name in ('gh-pages.yml', 'static-deploy.yml'):
            self.assertIn("    if: github.ref == 'refs/heads/main'\n", self.sources[name])
        self.assertNotIn("if: github.ref == 'refs/heads/main'", self.sources['deploy-on-push.yml'])

    def test_api_failure_or_invalid_sha_fails_closed(self):
        for case, script in self.each_guard():
            with case:
                for args in ({'api_error': True}, {'candidate': None}, {'candidate': 'main'},
                             {'candidate': 'a' * 39}, {'main': None}, {'main': 'malformed'},
                             {'event': 'pull_request'}):
                    result = self.run_guard(script, **args)
                    self.assertIsNotNone(result['error'], args)
                    self.assertNotEqual(result['outputs'].get('publish'), 'true')

    def test_all_three_share_production_group_and_keep_pending_current_run(self):
        groups = []
        for name, source in self.sources.items():
            if name == 'deploy-on-push.yml':
                block = re.search(r'(?ms)^    concurrency:\n(.*?)(?=^    \S)', job(source, 'deploy')).group(1)
                indent = '      '
            else:
                block = re.search(r'(?ms)^concurrency:\n(.*?)(?=^jobs:)', source).group(1)
                indent = '  '
            group = re.search(r'(?m)^' + indent + r'group: (.+)$', block).group(1)
            groups.append(group.replace('${{ github.ref }}', 'refs/heads/main'))
            self.assertRegex(block, r'(?m)^' + indent + r'cancel-in-progress: false$')
            self.assertRegex(block, r'(?m)^' + indent + r'queue: max$')
        self.assertEqual(len(set(groups)), 1)
        self.assertEqual(groups[0], 'zion-production-pages-refs/heads/main')
        # Documented scheduler model: a late old run cannot evict the pending
        # current release. The default single-pending setting is the control.
        def enqueue(pending, item, mode):
            return (pending + [item])[:100] if mode == 'max' else [item]
        pending = []
        for item in ('current-push', 'late-old-workflow-run'):
            pending = enqueue(pending, item, 'max')
        self.assertEqual(pending, ['current-push', 'late-old-workflow-run'])
        self.assertEqual(enqueue(['current-push'], 'late-old-workflow-run', 'single'),
                         ['late-old-workflow-run'])

    def test_diagnostic_build_and_smoke_do_not_hold_production_lock(self):
        source = self.sources['deploy-on-push.yml']
        self.assertNotRegex(source, r'(?m)^concurrency:')
        for name in ('source-gate', 'build', 'smoke-tests'):
            self.assertNotRegex(job(source, name), r'(?m)^    concurrency:')
        deploy = job(source, 'deploy')
        self.assertRegex(deploy, r'(?m)^    concurrency:$')
        self.assertIn('Recheck source immediately before deployment', deploy)
        self.assertIn('uses: actions/deploy-pages@v4', deploy)
        self.assertNotIn('run: npm run build', deploy)
        self.assertNotIn('Post-deploy smoke test', deploy)
        # The two original single-job publishers retain their workflow locks.
        for name in ('gh-pages.yml', 'static-deploy.yml'):
            self.assertRegex(self.sources[name], r'(?m)^concurrency:$')
            self.assertNotRegex(job(self.sources[name], 'deploy'), r'(?m)^    concurrency:')

    def test_same_head_publishers_share_one_render_pipeline(self):
        expected = ['bash scripts/prepare-pages-out.sh',
                    'node scripts/render-productivity-release.cjs out',
                    'node scripts/render-field-evidence-release.cjs out',
                    'python3 scripts/assert-no-private-ops.py out']
        for name, source in self.sources.items():
            with self.subTest(workflow=name):
                positions = [source.index('run: ' + command) for command in expected]
                self.assertEqual(positions, sorted(positions))
                self.assertLess(positions[-1], source.index('uses: actions/upload-pages-artifact@'))
                self.assertLess(source.index('uses: actions/upload-pages-artifact@'),
                                source.index('uses: actions/deploy-pages@'))
                for script in scripts(source):
                    self.assertEqual(self.run_guard(script)['outputs']['publish'], 'true')

    def test_stale_cancelled_or_failed_deployment_cannot_report_success(self):
        source = self.sources['deploy-on-push.yml']
        deploy = job(source, 'deploy')
        smoke = job(source, 'smoke-tests')
        self.assertIn("published: ${{ steps.deployment.outcome == 'success' }}", deploy)
        self.assertIn("    if: needs.deploy.outputs.published == 'true'\n", smoke)
        self.assertIn('needs: [build, deploy]', smoke)
        self.assertIn('Write deploy status (completed)', smoke)
        published_expression = re.search(r'published: \$\{\{ (.+) \}\}', deploy).group(1)
        smoke_expression = re.search(r'(?m)^    if: (.+)$', smoke).group(1)
        expression_harness = r'''
const fs = require('node:fs');
const input = JSON.parse(fs.readFileSync(0, 'utf8'));
const steps = {deployment: {outcome: input.outcome}};
const published = new Function('steps', 'return ' + input.published)(steps);
const needs = {deploy: {outputs: {published: String(published)}}};
const smoke = new Function('needs', 'return ' + input.smoke)(needs);
process.stdout.write(JSON.stringify({published, smoke}));
'''
        for outcome in ('skipped', 'cancelled', 'failure', None, 'success'):
            result = subprocess.run(['node', '-e', expression_harness], input=json.dumps({
                'outcome': outcome, 'published': published_expression,
                'smoke': smoke_expression}), text=True, capture_output=True)
            self.assertEqual(result.returncode, 0, result.stderr)
            self.assertEqual(json.loads(result.stdout), {
                'published': outcome == 'success', 'smoke': outcome == 'success'})
        # No always()/continue-on-error override on the deploy action or smoke job.
        action = deploy[deploy.index('    - name: Deploy to GitHub Pages'):]
        self.assertNotIn('always()', action)
        self.assertNotIn('continue-on-error:', action)
        self.assertNotRegex(smoke, r'(?m)^    (if:.*always\(|continue-on-error:)')

    def test_source_gate_is_self_contained_and_pinned_sha_contract_unchanged(self):
        source = self.sources['deploy-on-push.yml']
        gate = job(source, 'source-gate')
        self.assertNotIn('actions/checkout', gate)
        expression = "${{ github.event_name == 'workflow_run' && github.event.workflow_run.head_sha || github.sha }}"
        self.assertIn('PAGES_CANDIDATE_SHA: ' + expression, gate)
        build = job(source, 'build')
        self.assertIn('needs: source-gate', build)
        self.assertIn("if: needs.source-gate.outputs.publish == 'true'", build)
        self.assertIn('ref: ' + expression, build)
        self.assertIn('sha: ${{ steps.resolve-sha.outputs.sha }}', build)
        self.assertIn('PAGES_CANDIDATE_SHA: ${{ needs.build.outputs.sha }}', job(source, 'deploy'))
        self.assertIn('ref: ${{ needs.build.outputs.sha }}', job(source, 'smoke-tests'))
        self.assertIn('python3 tests/ci/test_pages_publisher_freshness.py', build)

    def test_early_stale_continuous_run_skips_all_artifact_steps(self):
        source = self.sources['gh-pages.yml']
        for name in ('Checkout', 'Guard main ref', 'Prepare pages from public/',
                     'Gate reviewed five-language productivity rendering',
                     'Render field evidence release (adds data-field-evidence-release markers)',
                     'Reject private operational files in final Pages artifact',
                     'Upload Pages artifact', 'Recheck source immediately before deployment'):
            match = re.search(r'(?ms)^      - name: ' + re.escape(name) + r'\n(.*?)(?=^      - |\Z)', source)
            self.assertIsNotNone(match, name)
            self.assertIn("if: steps.release-source.outputs.publish == 'true'", match.group(1))
            self.assertNotIn('continue-on-error:', match.group(1))
            self.assertNotIn('always()', match.group(1))


if __name__ == '__main__':
    unittest.main()
