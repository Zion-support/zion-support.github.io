"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const {evaluate, parseMoney, mount} = require("../public/field-spares-custody-kit/app.js");
const controls = ["scope", "engineer", "serial", "custody", "terms", "client", "po", "zion"];
function valid(overrides = {}) {
  return {...Object.fromEntries(controls.map(id => [id, true])), ticket: "WO-EXAMPLE", asset: "ASSET-1", part: "PART-2", movement: "0", sla: "0", base: "100", travel: "0", freight: "0", tax: "0", ...overrides};
}
test("zero costs and blank references cannot clear the checklist", () => {
  const d = evaluate(valid({ticket: "", asset: " ", part: "", base: "0"}));
  assert.equal(d.reviewReady, false); assert.match(d.status, /^HOLD/);
  assert.ok(d.score < 100); assert.equal(d.financial, null); assert.equal(d.authorized, false);
});
for (const raw of ["", " ", "-1", "NaN", "Infinity", "1e3", "0x10", "1,20", "12.345", "100000000.01", "100000001", null, undefined, 100, false]) {
  test("invalid amount is not coerced to zero: " + String(raw), () => {
    assert.equal(parseMoney(raw), null);
    const d = evaluate(valid({travel: raw}));
    assert.equal(d.financial, null); assert.equal(d.reviewReady, false); assert.equal(d.scenario.travel, null);
  });
}
for (const id of controls) {
  test("missing control blocks owner review: " + id, () => {
    const d = evaluate(valid({[id]: false}));
    assert.equal(d.reviewReady, false); assert.equal(d.authorized, false); assert.ok(d.missing.includes(id));
  });
}
for (const id of ["ticket", "asset", "part"]) {
  test("missing or excessive reference blocks: " + id, () => {
    for (const value of ["", "   ", "x".repeat(121), 123]) {
      const d = evaluate(valid({[id]: value})); assert.equal(d.reviewReady, false); assert.ok(d.missing.includes(id));
    }
  });
}
test("truthy strings do not assert evidence", () => {
  assert.equal(evaluate(valid({po: "true", zion: 1})).reviewReady, false);
});
test("valid data permits review only, never authorization", () => {
  const d = evaluate(valid());
  assert.equal(d.reviewReady, true); assert.equal(d.score, 100); assert.equal(d.authorized, false);
  assert.match(d.status, /OWNER REVIEW/); assert.equal(d.financial.allInCents, 10000);
  assert.equal(d.financial.minimumSellCents, 14000); assert.equal(d.financial.assumptionsUnverified, true);
});
test("known additional cost is included exactly once", () => {
  const d = evaluate(valid({base: "100", travel: "5", freight: "1.25", tax: "2.50"}));
  assert.equal(d.financial.allInCents, 10875); assert.equal(d.financial.minimumSellCents, 15225);
});
test("integer-cent floor never undercuts 1.40x, including tiny values", () => {
  for (let cents = 1; cents <= 10000; cents++) {
    const d = evaluate(valid({base: (cents / 100).toFixed(2)}));
    assert.ok(d.financial.minimumSellCents * 100 >= cents * 140);
    assert.ok((d.financial.minimumSellCents - 1) * 100 < cents * 140);
  }
});
test("upper supported values remain safe integers", () => {
  const d = evaluate(valid({base: "100000000", travel: "100000000", freight: "100000000", tax: "100000000"}));
  assert.equal(d.financial.minimumSellCents, 56000000000);
  assert.ok(Number.isSafeInteger(d.financial.minimumSellCents));
});
test("unknown choices and malformed inputs fail closed", () => {
  for (const input of [null, undefined, {}, [], "bad"]) assert.equal(evaluate(input).reviewReady, false);
  for (const value of ["3", "", "-1", "00", 0]) assert.equal(evaluate(valid({movement: value})).reviewReady, false);
});
function dom() {
  const ids = ["lab", "score", "status", "findings", "extra", "notice", "copy", "export", ...controls, "ticket", "asset", "part", "base", "travel", "freight", "tax", "movement", "sla"];
  const nodes = {};
  for (const id of ids) nodes[id] = {value: ["movement", "sla"].includes(id) ? "0" : "", checked: false, events: {}, children: [], attrs: {},
    addEventListener(type, handler) {this.events[type] = handler;}, setAttribute(k, v) {this.attrs[k] = v;}, setCustomValidity(v) {this.validityMessage = v;},
    replaceChildren() {this.children = [];}, append(node) {this.children.push(node);}};
  return {nodes, document: {getElementById: id => nodes[id], createElement: () => ({}), body: {append() {}}}};
}
test("browser adapter initializes unknown costs and blocks form submission", () => {
  const {nodes, document} = dom(); const ui = mount(document);
  assert.equal(nodes.base.value, ""); assert.equal(nodes.base.step, "0.01"); assert.equal(nodes.ticket.required, true);
  for (const [id, value] of Object.entries(valid())) {
    if (controls.includes(id)) nodes[id].checked = value; else nodes[id].value = value;
  }
  assert.equal(ui.render().reviewReady, true);
  nodes.base.value = ""; nodes.lab.events.input();
  assert.match(nodes.status.textContent, /^HOLD/); assert.equal(nodes.base.attrs["aria-invalid"], "true");
  let stopped = false; nodes.lab.events.submit({preventDefault() {stopped = true;}}); assert.equal(stopped, true);
});
test("missing application markup throws instead of displaying completion", () => {
  assert.throws(() => mount({getElementById: () => null}), /Incomplete/);
});
