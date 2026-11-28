'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const tmp = require('node:os').tmpdir();
const path = require('node:path');
const workflow = fs.readFileSync(path.join(__dirname, '../../.github/workflows/apps-release-confidence-gate.yml'),'utf8');
const script = workflow.split('          script: |\n')[1].split('\n      - name: Upload confidence report')[0].replace(/^ {12}/gm,'');
const runGate = new (Object.getPrototypeOf(async function () {}).constructor)('github','context','core','require',script);
const sha = 'a'.repeat(40), now = Date.now(), old = new Date(now - 3*60*60*1000).toISOString(),
      start = new Date(now - 2*60*60*1000).toISOString(), done = new Date(now - 1*60*60*1000).toISOString(),
      id = 45898439584, repoId = 987989249, digest = 'sha256:'+'b'.repeat(64);
process.env.GITHUB_REPOSITORY_ID = String(repoId);
const step = (name, completed_at = done, conclusion = 'success') => ({name,status:'completed',conclusion,completed_at});
const job = (name, idn, steps) => ({name,id:idn,run_id:id,run_attempt:1,head_sha:sha,started_at:start,completed_at:done,status:'completed',conclusion:'success',steps});
const publisher = {id,head_sha:sha,head_branch:'main',run_attempt:1,status:'completed',conclusion:'success',html_url:'https://github.com/zion/repo/actions/runs/'+id};
const publication = job('deploy / publish',1,[step('Deploy canonical artifact',old)]);
const proofJob = job('drift / audit',2,[step('Upload immutable deployment drift receipt'),step('Record verified canonical drift PASS')]);
const artifact = {id:5,name:'canonical-drift-'+id+'-1-'+sha,digest,size_in_bytes:250,expired:false,created_at:done,
  workflow_run:{id,head_sha:sha,head_branch:'main',repository_id:repoId,head_repository_id:repoId}};
const advisory = {...publisher,id:999,updated_at:done};

async function evaluate({run=publisher, jobs=[publication,proofJob], artifacts=[artifact], ambiguous=null}={}) {
  const steps = {};
  let gateFail = false, detachedDriftQueries = 0;
  const summary = {addHeading(){return this},addTable(){return this},addRaw(){return this},async write(){}};
  const core = {setOutput:(key,value)=>{steps[key]=value},setFailed:()=>{gateFail=true},summary};
  const actions = {
    listWorkflowRuns:async ({workflow_id}) => {
      if (workflow_id==='apps-deployed-source-drift.yml') detachedDriftQueries++;
      return {data:{workflow_runs:workflow_id==='static-deploy.yml'?[run,...(ambiguous?[ambiguous]:[])]:workflow_id==='gh-pages.yml'?[]:[advisory]}};
    },
    listWorkflowRunsForRepo:async()=>({data:{workflow_runs:[]}}),
    listJobsForWorkflowRun:()=>{}, listWorkflowRunArtifacts:()=>{}
  };
  const paginate=async (method, args)=>{
    if (ambiguous && args.run_id===ambiguous.id && method===actions.listJobsForWorkflowRun) return [{name:'unknown past job'}];
    assert.equal(args.run_id,id);
    return method===actions.listJobsForWorkflowRun ? jobs : artifacts;
  };
  const root = fs.mkdtempSync(path.join(tmp,'canonical-drift-gate-'));
  const scopedFs = {
    mkdirSync:(p,options)=>fs.mkdirSync(path.join(root,p),options),
    writeFileSync:(p,...args)=>fs.writeFileSync(path.join(root,p),...args)
  };
  try {
    await runGate({rest:{actions},paginate},{repo:{owner:'Zion-support',repo:'zion-support.github.io'},serverUrl:'https://github.com'},core,
      (name)=>{assert.equal(name,'fs');return scopedFs;});
  } finally {
    fs.rmSync(root,{recursive:true,force:true});
  }
  return {state:steps.report ? JSON.parse(steps.report).signals.drift.state : steps.status, evidence:steps.deployment_evidence ? JSON.parse(steps.deployment_evidence) : null, gateFail, detachedDriftQueries};
}

test('accept exact same-run receipt only',async()=>{
  const r=await evaluate();
  assert.equal(r.state,'PASS');assert.equal(r.gateFail,false);assert.equal(r.detachedDriftQueries,0);
});
test('recency without exact publisher proof never passes',async()=>{
  const r=await evaluate({jobs:[publication]});
  assert.equal(r.state,'MISSING');assert.equal(r.gateFail,true);assert.equal(r.detachedDriftQueries,0);
});
test('failed post-deploy comparison does not hide already executed deploy',async()=>{
  const r=await evaluate({run:{...publisher,conclusion:'failure'},jobs:[publication,{...proofJob,conclusion:'failure'}]});
  assert.equal(r.state,'FAIL');assert.equal(r.evidence.run_id,id);assert.equal(r.gateFail,true);
});
test('completed deployment is visible while attached audit runs',async()=>{
  const recently=new Date(now-300000).toISOString();
  const r=await evaluate({run:{...publisher,status:'in_progress',conclusion:null},
    jobs:[{...publication,steps:[step('Deploy canonical artifact',recently)]},{...proofJob,status:'in_progress',conclusion:null}]});
  assert.equal(r.state,'PENDING');assert.equal(r.evidence.run_id,id);assert.equal(r.gateFail,false);
});
test('skipped PASS step cannot certify continue-on-error compare',async()=>{
  const r=await evaluate({jobs:[publication,{...proofJob,steps:[...proofJob.steps.slice(0,1),step('Record verified canonical drift PASS',done,'skipped')]}]});
  assert.equal(r.state,'FAIL');
});
test('wrong job source SHA or bound run cannot pass',async()=>{
  assert.equal((await evaluate({jobs:[publication,{...proofJob,head_sha:'b'.repeat(40)}]})).state,'FAIL');
  assert.equal((await evaluate({jobs:[publication,{...proofJob,run_id:id-1}]})).state,'FAIL');
});
test('a drift job from another retry attempt never certifies the deploy',async()=>{
  assert.equal((await evaluate({jobs:[publication,{...proofJob,run_attempt:2}]})).state,'FAIL');
});
test('a publish job from another retry attempt or run never proves deployment',async()=>{
  for (const job of [{...publication,run_attempt:2},{...publication,run_id:id-1}]) {
    const r=await evaluate({jobs:[job,proofJob]});
    assert.equal(r.state,'FAIL');assert.equal(r.evidence,null);assert.equal(r.gateFail,true);
  }
});
test('ambiguity among publisher drift jobs is fatal',async()=>{
  assert.equal((await evaluate({jobs:[publication,proofJob,{...proofJob,id:6}]})).state,'FAIL');
});
for (const [name, make] of [
  ['wrong attempt',()=>[{...artifact,name:artifact.name.replace('-1-','-2-')}]],
  ['wrong branch',()=>[{...artifact,workflow_run:{...artifact.workflow_run,head_branch:'feature'}}]],
  ['wrong artifact SHA',()=>[{...artifact,workflow_run:{...artifact.workflow_run,head_sha:'b'.repeat(40)}}]],
  ['wrong repository',()=>[{...artifact,workflow_run:{...artifact.workflow_run,repository_id:1,head_repository_id:1}}]],
  ['expired artifact',()=>[{...artifact,expired:true}]],
  ['missing digest',()=>[{...artifact,digest:null}]],
  ['duplicate exact-name artifact',()=>[artifact,{...artifact,id:6}]],
  ['stale artifact',()=>[{...artifact,created_at:new Date(now-4*60*60*1000).toISOString()}]]
]) {
  test('rejects '+name,async()=>{const r=await evaluate({artifacts:make()});assert.equal(r.state,'MISSING');assert.equal(r.gateFail,true)});
}

test('older incomplete metadata does not hide newer exact deployment',async()=>{
  const r=await evaluate({ambiguous:{...publisher,id:id-1,conclusion:'failure',
    updated_at:new Date(now-4*60*60*1000).toISOString()}});
  assert.equal(r.state,'PASS');assert.equal(r.evidence.run_id,id);
});
test('newer unverified publish fails closed without accepting older result',async()=>{
  await assert.rejects(evaluate({ambiguous:{...publisher,id:id+1,conclusion:'failure',
    updated_at:done}}),/Potentially newer deployment outcome is unverified/);
});

test('ambiguous newer running publication cannot certify the old result',async()=>{
  const r=await evaluate({ambiguous:{...publisher,id:id+1,status:'in_progress',conclusion:null,updated_at:done}});
  assert.equal(r.state,'PENDING');assert.equal(r.evidence,null);
});
