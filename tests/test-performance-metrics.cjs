"use strict";
// Offline contract tests. Synthetic complete reports are not evidence that
// Lighthouse's installed version emits the required FID/TTFB audit IDs.
const fs = require("node:fs");
const vm = require("node:vm");
const path = require("node:path");
const assert = require("node:assert/strict");
const sourcePath = process.argv[2] || path.join(__dirname, "../automation/performance-budget-enforcer.cjs");
const source = fs.readFileSync(sourcePath, "utf8");
const mainOffset = source.lastIndexOf("\nmain().catch");
assert.ok(mainOffset > 0, "Expected explicit main entry point; do not execute audit I/O");
let fixture;
const sandbox = {
  module: { exports: {} },
  process: {
    argv: ["node", "test", "--url", "http://localhost:3000", "--baseline-file", "baseline.json"],
    exit() { throw Error("unexpected exit"); },
  },
  console: { log() {}, error() {} },
};
sandbox.require = (name) => {
  if (name === "fs") return { readFileSync() { return JSON.stringify(fixture); } };
  if (name === "path") return path;
  if (name === "child_process") return {
    execSync() { throw Error("FORBIDDEN network/child execution"); },
    execFileSync() { throw Error("FORBIDDEN network/child execution"); },
  };
  throw Error("unexpected require " + name);
};
vm.runInNewContext(source.slice(0, mainOffset) +
  "\nmodule.exports={parseReport,compare,checkHardLimits,loadBaseline};", sandbox,
  { timeout: 1000, filename: sourcePath });
const api = sandbox.module.exports;
const results = [];
function test(name, run) {
  try { run(); results.push({ name, status: "pass" }); }
  catch (error) { results.push({ name, status: "fail", error: error.message }); }
}
const metrics = { lcp: 2, fid: .1, cls: .1, fcp: 1.5, ttfb: .5, performance: 90 };
const audits = {
  "largest-contentful-paint": { numericValue: 2000 },
  "first-input-delay": { numericValue: 100 },
  "cumulative-layout-shift": { numericValue: .1 },
  "first-contentful-paint": { numericValue: 1500 },
  "time-to-first-byte": { numericValue: 500 },
};
function parse(changes = {}) {
  fixture = { audits: { ...audits, ...changes }, categories: { performance: { score: .9 } } };
  return api.parseReport("fixture");
}
function compare(current = {}, baseline = {}) {
  return api.compare({ ...metrics, ...current }, { metrics: { ...metrics, ...baseline } });
}
test("LCP milliseconds converted to seconds", () => assert.equal(parse().lcp, 2));
test("FID FCP and TTFB milliseconds converted to seconds", () => {
  const parsed = parse();
  assert.equal(parsed.fid, .1); assert.equal(parsed.fcp, 1.5); assert.equal(parsed.ttfb, .5);
});
test("CLS remains dimensionless", () => assert.equal(parse({ "cumulative-layout-shift": { numericValue: .5 } }).cls, .5));
test("CLS hard limit detects 0.5", () => assert.ok(api.checkHardLimits(parse({ "cumulative-layout-shift": { numericValue: .5 } })).some(x => x.startsWith("CLS"))));
test("all hard limits reject violations", () => {
  for (const [key, value] of Object.entries({ lcp: 4.01, fid: .301, cls: .251, fcp: 3.01, ttfb: 2.01 })) {
    assert.equal(api.checkHardLimits({ ...metrics, [key]: value }).length, 1, key);
  }
});
test("hard limits accept boundary values", () => assert.equal(api.checkHardLimits({ lcp: 4, fid: .3, cls: .25, fcp: 3, ttfb: 2, performance: 90 }).length, 0));
test("absent metrics fail closed", () => {
  fixture = { audits: {}, categories: { performance: { score: .9 } } };
  assert.throws(() => api.parseReport("fixture"), /Required audit/);
});
test("each missing required audit fails closed", () => {
  for (const key of Object.keys(audits)) assert.throws(() => parse({ [key]: undefined }), /Required audit/);
});
test("missing numericValue fails closed", () => assert.throws(() => parse({ "largest-contentful-paint": {} }), /Required audit/));
test("negative latency fails closed", () => assert.throws(() => parse({ "largest-contentful-paint": { numericValue: -1 } }), /Required audit/));
test("non-numeric metric fails closed", () => assert.throws(() => parse({ "largest-contentful-paint": { numericValue: "2000" } }), /Required audit/));
test("zero metric preserved", () => assert.equal(parse({ "cumulative-layout-shift": { numericValue: 0 } }).cls, 0));
test("worsening LCP flagged", () => assert.equal(compare({ lcp: 2.4 }).ok, false));
test("improving LCP allowed", () => assert.equal(compare({ lcp: 1.5 }).ok, true));
test("small LCP increase allowed", () => assert.equal(compare({ lcp: 2.1 }).ok, true));
test("worsening CLS flagged", () => assert.equal(compare({ cls: .2 }).ok, false));
test("improving CLS allowed", () => assert.equal(compare({ cls: .05 }).ok, true));
test("score drop flagged", () => assert.equal(compare({ performance: 70 }).ok, false));
test("score rise allowed", () => assert.equal(compare({ performance: 95 }, { performance: 80 }).ok, true));
test("zero baseline rising latency flagged", () => assert.equal(compare({ cls: .01 }, { cls: 0 }).ok, false));
test("zero baseline stays zero allowed", () => assert.equal(compare({ cls: 0 }, { cls: 0 }).ok, true));
test("missing required current metrics rejected in comparisons", () => assert.throws(() => compare({ fid: null, ttfb: null }), /Invalid current metric/));
test("empty current metrics rejected without baseline", () => assert.throws(() => api.compare({}, null), /Invalid current metric/));
test("empty current metrics rejected by hard limits", () => assert.throws(() => api.checkHardLimits({}), /Invalid current metric/));
test("complete current metrics allow hard-limits-only comparison", () => assert.equal(api.compare(metrics, null).ok, true));
test("missing baseline metrics rejected", () => assert.throws(() => api.compare(metrics, { metrics: { lcp: 2 } }), /Invalid baseline metric/));
function legacy(overall = 90) {
  const { performance, ...rest } = metrics;
  return { metrics: { ...rest, overall } };
}
test("legacy overall score baseline supported", () => assert.equal(api.compare({ ...metrics, performance: 70 }, legacy()).ok, false));
test("legacy overall score improvement allowed", () => assert.equal(api.compare({ ...metrics, performance: 95 }, legacy()).ok, true));
test("legacy baseline loading normalizes score without mutation", () => {
  fixture = legacy();
  const loaded = api.loadBaseline();
  assert.equal(loaded.metrics.performance, 90);
  assert.equal(fixture.metrics.performance, undefined);
});
test("legacy zero overall score is preserved", () => {
  fixture = legacy(0);
  assert.equal(api.loadBaseline().metrics.performance, 0);
});
test("legacy alias cannot hide missing timing metrics", () => {
  fixture = { metrics: { overall: 90 } };
  assert.throws(() => api.loadBaseline(), /Invalid baseline metric/);
});
test("legacy alias cannot hide invalid canonical score", () => {
  fixture = { metrics: { ...metrics, performance: null, overall: 90 } };
  assert.throws(() => api.loadBaseline(), /Invalid baseline metric: performance/);
});
test("conflicting legacy and canonical scores rejected", () => {
  fixture = { metrics: { ...metrics, overall: 95 } };
  assert.throws(() => api.loadBaseline(), /Conflicting baseline/);
});
test("matching legacy and canonical scores accepted", () => {
  fixture = { metrics: { ...metrics, overall: 90 } };
  assert.equal(api.loadBaseline().metrics.performance, 90);
});
test("invalid legacy score rejected", () => {
  for (const score of [null, -1, 101, "90"]) {
    fixture = legacy(score);
    assert.throws(() => api.loadBaseline(), /Invalid baseline metric: performance/);
  }
});
console.log(JSON.stringify({
  source: sourcePath, tests: results.length,
  passed: results.filter(x => x.status === "pass").length,
  failed: results.filter(x => x.status === "fail").length, results,
}, null, 2));
process.exitCode = results.some(x => x.status === "fail") ? 1 : 0;
