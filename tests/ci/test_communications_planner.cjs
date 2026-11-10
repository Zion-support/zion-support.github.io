'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const runtimePath = path.resolve(__dirname, '../../public/assets/js/communications-planner.js');
const source = fs.readFileSync(runtimePath, 'utf8');
const maxFieldLength = 300;
const downloadDelayMs = 1000;
const config = { fields: ['Process', 'Owner'], title: 'Pilot', next: 'Review', route: '/next/' };

function setup(valid = true) {
  const handlers = new Map();
  const state = { values: ['sample', 'team'], prevented: 0, clicks: 0, blobs: [], revoked: [], timers: [] };
  const form = {
    reportValidity: () => valid,
    addEventListener: (event, handler) => handlers.set(event, handler),
  };
  const output = { textContent: '' };
  const result = { hidden: true };
  const link = { click() { state.clicks += 1; } };
  const nodes = new Map([
    ['pilot-form', form], ['pilot-config', { textContent: JSON.stringify(config) }],
    ['pilot-text', output], ['pilot-result', result],
    ['pilot-download', { addEventListener: (event, handler) => handlers.set(event, handler) }],
  ]);
  class FormDataFixture {
    constructor(input) { assert.equal(input, form); }
    get(key) { return state.values[Number(key.slice(1))]; }
  }
  class BlobFixture {
    constructor(parts, options) { this.parts = parts; this.type = options.type; }
  }
  const context = Object.fromEntries([
    ['document', {
      getElementById: id => nodes.get(id),
      createElement(tag) { assert.equal(tag, 'a'); return link; },
    }],
    ['FormData', FormDataFixture], ['Blob', BlobFixture],
    ['URL', {
      createObjectURL(blob) { state.blobs.push(blob); return 'blob:fixture'; },
      revokeObjectURL(url) { state.revoked.push(url); },
    }],
    ['setTimeout', (callback, delay) => state.timers.push({ callback, delay })],
  ]);
  vm.runInNewContext(source, context);
  return {
    state, output, result, link,
    submit() { handlers.get('submit')({ preventDefault() { state.prevented += 1; } }); },
    download() { handlers.get('click')(); },
  };
}

test('missing form exits without requesting configuration or other browser APIs', () => {
  const requested = [];
  vm.runInNewContext(source, { document: { getElementById(id) { requested.push(id); return null; } } });
  assert.deepEqual(requested, ['pilot-form']);
});

test('invalid form and empty cleaned fields do not reveal or download a report', () => {
  for (const valid of [false, true]) {
    const fixture = setup(valid);
    fixture.state.values = ['\u0000\n ', 'team'];
    fixture.download();
    fixture.submit();
    fixture.download();
    assert.equal(fixture.state.prevented, 1);
    assert.equal(fixture.result.hidden, true);
    assert.equal(fixture.output.textContent, '');
    assert.equal(fixture.state.blobs.length, 0);
    assert.equal(fixture.state.clicks, 0);
  }
});

test('valid fields are cleaned, truncated and rendered as literal text', () => {
  const fixture = setup();
  fixture.state.values = [' \u0000<img src=x onerror=alert(1)>\n ', 'x'.repeat(maxFieldLength + 1)];
  fixture.submit();
  assert.equal(fixture.state.prevented, 1);
  assert.equal(fixture.result.hidden, false);
  assert.equal(fixture.output.textContent,
    'Pilot\n\nProcess: <img src=x onerror=alert(1)>\nOwner: ' + 'x'.repeat(maxFieldLength) + '\n\nReview\n/next/');
});

test('download contains the current report and revokes its URL only after the timer', () => {
  const fixture = setup();
  fixture.submit();
  fixture.download();
  assert.equal(fixture.state.blobs.length, 1);
  assert.equal(fixture.state.blobs[0].parts[0], fixture.output.textContent);
  assert.equal(fixture.state.blobs[0].type, 'text/plain;charset=utf-8');
  assert.equal(fixture.link.href, 'blob:fixture');
  assert.equal(fixture.link.download, 'zion-communications-pilot.txt');
  assert.equal(fixture.state.clicks, 1);
  assert.deepEqual(fixture.state.revoked, []);
  assert.equal(fixture.state.timers[0].delay, downloadDelayMs);
  fixture.state.timers[0].callback();
  assert.deepEqual(fixture.state.revoked, ['blob:fixture']);
});

test('empty submission retains the previous valid report and a later valid submission replaces it', () => {
  const fixture = setup();
  fixture.submit();
  const previous = fixture.output.textContent;
  fixture.state.values = ['', 'team'];
  fixture.submit();
  assert.equal(fixture.output.textContent, previous);
  fixture.download();
  assert.equal(fixture.state.blobs[0].parts[0], previous);
  fixture.state.values = ['updated', 'new owner'];
  fixture.submit();
  fixture.download();
  assert.equal(fixture.state.blobs[1].parts[0], 'Pilot\n\nProcess: updated\nOwner: new owner\n\nReview\n/next/');
});
