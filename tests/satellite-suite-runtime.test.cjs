'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const out=process.env.SATELLITE_PREVIEW||path.join(__dirname,'..','preview');
const langs=['en','pt','es','fr','de'];
const slugs=['mcp-trust-boundary-studio','agent-canary-release-lab','field-spares-custody-kit'];
const custodyIds=['scope','engineer','serial','custody','terms','client','po','zion'];
const valid=()=>({...Object.fromEntries(custodyIds.map(k=>[k,true])),ticket:'TEST-ONLY',asset:'OLD',part:'NEW',movement:'0',sla:'0',base:'100',travel:'0',freight:'0',tax:'0'});
const root=path.join(__dirname,'..');
const original=require(path.join(root,'public/field-spares-custody-kit/app.js'));
for(const lang of langs){
 const dir=path.join(out,'assets/satellite-suite',lang);
 for(const slug of slugs)test(lang+' '+slug+' JavaScript parses',()=>new vm.Script(fs.readFileSync(path.join(dir,slug+'.js'),'utf8')));
 const localized=require(path.join(dir,'field-spares-custody-kit.js'));
 test(lang+' custody semantics preserved for valid/invalid/missing evidence',()=>{
  const cases=[valid(),{...valid(),po:false},{...valid(),base:''},{...valid(),base:'-1'},{...valid(),ticket:''},{...valid(),base:'0'},{...valid(),base:'12.123'},null,undefined];
  for(const c of cases){let a=original.evaluate(c),b=localized.evaluate(c);assert.equal(a.score,b.score);assert.equal(a.reviewReady,b.reviewReady);assert.equal(b.authorized,false);assert.deepEqual(a.financial,b.financial);assert.deepEqual(a.missing,b.missing);}
 });
 test(lang+' exact monetary rounding in 10000 positive cent cases',()=>{
  for(let c=1;c<=10000;c++){const v={...valid(),base:(c/100).toFixed(2)},a=original.evaluate(v),b=localized.evaluate(v);assert.deepEqual(a.financial,b.financial);assert.ok(b.financial.minimumSellCents*100>=c*140);}
 });
 test(lang+' localized status/messages and machine guards remain explicit',()=>{
  const d=localized.evaluate({...valid(),po:false});assert.equal(d.authorized,false);assert.ok(d.missing.includes('po'));if(lang!=='en')assert.notEqual(d.status,original.evaluate({...valid(),po:false}).status);
 });
}
