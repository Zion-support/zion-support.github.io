'use strict';
const test = require('node:test'), assert = require('node:assert/strict'), path = require('node:path');
const out = process.env.SATELLITE_PREVIEW || path.join(__dirname, '..', 'preview');
const mcpKeys = ['tls','aud','pkce','scope','tenant','approve','audit','secret'];
const canaryKeys = ['baseline','eval','scope','flag','telemetry','rollback','owner','hold'];
const truth = keys => Object.fromEntries(keys.map(id => [id,true]));
const mcpGood = () => ({...truth(mcpKeys), transport:'0', risk:'1'});
const canaryGood = () => ({...truth(canaryKeys), change:'0', impact:'0', users:'1200', threshold:'2'});
const originalMcp = require('../public/mcp-trust-boundary-studio/app.js');
const originalCanary = require('../public/agent-canary-release-lab/app.js');
for (const lang of ['en','pt','es','fr','de']) {
 const mcp = require(path.join(out,'assets/satellite-suite',lang,'mcp-trust-boundary-studio.js'));
 const canary = require(path.join(out,'assets/satellite-suite',lang,'agent-canary-release-lab.js'));
 test(lang+' missing and malformed input cannot clear either review', () => {
  for (const data of [undefined,null,{},[],false,'wrong']) for (const app of [mcp,canary]) {
   const d=app.evaluate(data); assert.equal(d.reviewReady,false); assert.equal(d.authorized,false); assert.ok(d.score<100);
  }
 });
 test(lang+' invalid user counts remain unknown and clear the cohort plan', () => {
  for (const users of ['', ' ', '-1','0','1.5','100000001','1e3','NaN','Infinity',null,1,false]) {
   const d=canary.evaluate({...canaryGood(),users}); assert.equal(d.reviewReady,false); assert.equal(d.scenario.users,null); assert.equal(d.cohorts,null); assert.ok(d.missing.includes('users'));
  }
 });
 test(lang+' invalid thresholds remain unknown and clear the cohort plan', () => {
  for (const threshold of ['', ' ','-1','0','0.01','100.1','1.25','NaN','Infinity','1e1',null,2]) {
   const d=canary.evaluate({...canaryGood(),threshold}); assert.equal(d.reviewReady,false); assert.equal(d.scenario.threshold,null); assert.equal(d.cohorts,null);
  }
 });
 test(lang+' required canary controls all fail closed', () => {
  for (const id of canaryKeys) {
   const d=canary.evaluate({...canaryGood(),[id]:false}); assert.equal(d.reviewReady,false);assert.equal(d.authorized,false);assert.ok(d.missing.includes(id));
  }
 });
 test(lang+' remote write MCP requires all eight controls', () => {
  for (const id of mcpKeys) {const d=mcp.evaluate({...mcpGood(),[id]:false}); assert.equal(d.reviewReady,false);assert.ok(d.missing.includes(id));}
 });
 test(lang+' local read MCP excludes only HTTP OAuth controls and write approval', () => {
  const input={transport:'1',risk:'0',scope:true,tenant:true,audit:true,secret:true};
  const d=mcp.evaluate(input); assert.equal(d.reviewReady,true);assert.equal(d.score,100);assert.equal(d.authorized,false);
  assert.deepEqual(d.notApplicable,['tls','aud','pkce','approve']); assert.deepEqual(d.applicable,['scope','tenant','audit','secret']);
  for(const id of ['scope','tenant','audit','secret'])assert.equal(mcp.evaluate({...input,[id]:false}).reviewReady,false);
 });
 test(lang+' switching to write or remote restores mandatory evidence', () => {
  const data={transport:'1',risk:'0',scope:true,tenant:true,audit:true,secret:true};
  for(const risk of ['1','2'])assert.ok(mcp.evaluate({...data,risk}).missing.includes('approve'));
  const remote=mcp.evaluate({...data,transport:'0'});for(const id of ['tls','aud','pkce'])assert.ok(remote.missing.includes(id));
 });
 test(lang+' choices are enum-validated instead of accepting tampered UI', () => {
  for (const val of ['', '9','-1','00',0,null,false]) {
   for(const id of ['transport','risk'])assert.equal(mcp.evaluate({...mcpGood(),[id]:val}).reviewReady,false);
   for(const id of ['change','impact'])assert.equal(canary.evaluate({...canaryGood(),[id]:val}).reviewReady,false);
  }
 });
 test(lang+' truthy non-booleans never count as an approval', () => {
  for(const v of ['true',1,{},[]]) {
   assert.equal(canary.evaluate({...canaryGood(),hold:v}).reviewReady,false);
   assert.equal(mcp.evaluate({...mcpGood(),approve:v}).reviewReady,false);
  }
 });
 test(lang+' valid boundaries and cohorts are bounded by total users', () => {
  for(const users of ['1','2','99','1200','100000000'])for(const threshold of ['.1','0.1','2','99.9','100']) {
   const d=canary.evaluate({...canaryGood(),users,threshold});assert.equal(d.reviewReady,true);assert.equal(d.score,100);assert.equal(d.authorized,false);
   assert.deepEqual(d.cohorts.map(c=>c.percent),[1,5,25]);
   for(const c of d.cohorts){assert.ok(Number.isSafeInteger(c.users));assert.ok(c.users>=1 && c.users<=Number(users));}
  }
 });
 test(lang+' localized results preserve machine gates and translate new messages', () => {
  for(const [original,local,input] of [[originalMcp,mcp,mcpGood()],[originalCanary,canary,canaryGood()],[originalCanary,canary,{...canaryGood(),users:''}],[originalMcp,mcp,{...mcpGood(),transport:'1',risk:'0',aud:false}]]) {
   const a=original.evaluate(input),b=local.evaluate(input);
   for(const key of ['score','reviewReady','authorized','missing','notApplicable','applicable','cohorts'])assert.deepEqual(a[key],b[key]);
   if(lang!=='en'){assert.notEqual(a.status,b.status);if(a.errors.length)assert.notEqual(a.errors[0].message,b.errors[0].message);}
  }
 });
 test(lang+' a missing DOM cannot silently indicate readiness', () => {
  assert.throws(()=>mcp.mount({getElementById:()=>null}));assert.throws(()=>canary.mount({getElementById:()=>null}));
 });
}
