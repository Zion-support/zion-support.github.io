"use strict";
const fs=require("node:fs"), vm=require("node:vm"),path=require("node:path");
const sourcePath=process.argv[2];
const source=fs.readFileSync(sourcePath,"utf8");
let fixture={audits:{},categories:{performance:{score:0.9}}};
const sandbox={module:{exports:{}},process:{argv:["node","test","--url","http://localhost:3000"],exit(){throw Error("unexpected exit")}}, console:{log(){},error(){}},Date,JSON,Object,Number,Infinity};
sandbox.require=(name)=>{if(name==="fs")return {readFileSync(){return JSON.stringify(fixture)}};if(name==="path")return path;if(name==="child_process")return {execSync(){throw Error("FORBIDDEN network/child execution")}};throw Error("unexpected require "+name)};
vm.runInNewContext(source.slice(0,source.lastIndexOf("\nmain().catch"))+"\nmodule.exports={parseReport,compare,checkHardLimits};",sandbox);
const api=sandbox.module.exports,results=[];
function test(name,run){try{if(!run())throw Error("assertion false");results.push({name,status:"pass"})}catch(e){results.push({name,status:"fail",error:e.message})}}
function compare(cur,base){return api.compare(cur,{metrics:base})}
function parse(audits){fixture={audits,categories:{performance:{score:0.9}}};return api.parseReport("fixture")}
test("LCP milliseconds converted to seconds",()=>parse({"largest-contentful-paint":{numericValue:2000}}).lcp===2);
test("CLS remains dimensionless",()=>parse({"cumulative-layout-shift":{numericValue:0.5}}).cls===0.5);
test("CLS hard limit detects0.5",()=>api.checkHardLimits(parse({"cumulative-layout-shift":{numericValue:0.5}})).some(x=>x.startsWith("CLS")));
test("absent metric null",()=>parse({}).lcp===null);
test("missing numericValue null",()=>parse({"largest-contentful-paint":{}}).lcp===null);
test("negative latency null",()=>parse({"largest-contentful-paint":{numericValue:-1}}).lcp===null);
test("zero metric preserved",()=>parse({"cumulative-layout-shift":{numericValue:0}}).cls===0);
test("worsening LCP flagged",()=>!compare({lcp:2.4},{lcp:2}).ok);
test("improving LCP allowed",()=>compare({lcp:1.5},{lcp:2}).ok);
test("small LCP increase allowed",()=>compare({lcp:2.1},{lcp:2}).ok);
test("worsening CLS flagged",()=>!compare({cls:0.2},{cls:0.1}).ok);
test("improving CLS allowed",()=>compare({cls:0.05},{cls:0.1}).ok);
test("score drop flagged",()=>!compare({performance:70},{performance:90}).ok);
test("score rise allowed",()=>compare({performance:95},{performance:80}).ok);
test("zero baseline rising latency flagged",()=>!compare({cls:0.01},{cls:0}).ok);
test("zero baseline stays zero allowed",()=>compare({cls:0},{cls:0}).ok);
test("missing optional metrics tolerated",()=>compare({lcp:1,fid:null,ttfb:null},{lcp:1}).ok);
test("legacy overall score baseline supported",()=>!compare({performance:70},{overall:90}).ok);
console.log(JSON.stringify({source:sourcePath,tests:results.length,passed:results.filter(x=>x.status==="pass").length,failed:results.filter(x=>x.status==="fail").length,results},null,2));
process.exitCode=results.some(x=>x.status==="fail")?1:0;
