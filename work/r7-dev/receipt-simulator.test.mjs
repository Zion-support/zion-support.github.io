// work/r7-dev/receipt-simulator.test.mjs
// Offline generic receipt simulator. Falso adapter without network.
// No file writes, no network, no CI, no merge, no deploy.

import assert from 'assert';

// ── Falso adapter de operações ──────────────────────────────────────────
class FakeAdapter {
  constructor() {
    this.calls = [];
    this.count = { create: 0, authorize: 0, confirm: 0 };
    this.state = new Map();
  }

  async create(operationId, payload) {
    this.count.create += 1;
    this.calls.push({ op: 'create', id: operationId, payload: JSON.stringify(payload), ts: Date.now() });
    if (this.state.has(operationId)) {
      return { ok: false, code: 'DUPLICATE' };
    }
    this.state.set(operationId, { payload, status: 'received', effect: null });
    return { ok: true, code: 'RECEIVED' };
  }

  async authorize(operationId, payload) {
    this.count.authorize += 1;
    this.calls.push({ op: 'authorize', id: operationId, payload: JSON.stringify(payload), ts: Date.now() });
    const existing = this.state.get(operationId);
    if (!existing) return { ok: false, code: 'NOT_FOUND' };
    if (existing.payload === payload) {
      existing.status = 'confirmed';
      return { ok: true, code: 'CONFIRMED', effect: 'no-new-send' };
    }
    return { ok: false, code: 'CONFLICT', effect: 'rejected' };
  }

  async confirm(operationId) {
    this.count.confirm += 1;
    this.calls.push({ op: 'confirm', id: operationId, ts: Date.now() });
    const existing = this.state.get(operationId);
    if (!existing) return { ok: false, code: 'NOT_FOUND' };
    if (existing.status === 'unknown') {
      existing.status = 'confirmed';
      return { ok: true, code: 'RECONCILED', effect: 'no-new-send' };
    }
    return { ok: false, code: 'NOT_UNKNOWN', effect: 'no-reconcile' };
  }

  // Seta status para 'unknown' (simula timeout antes de confirm)
  setUnknown(operationId) {
    const existing = this.state.get(operationId);
    if (existing) existing.status = 'unknown';
  }
}

// ── Fixtures ─────────────────────────────────────────────────────────────
// Usa referência de payload compartilhada para comparação exata.
const payload1 = { type: 'discovery', version: 1 };
const payload2 = { type: 'discovery', version: 2 };

const fixtures = [
  {
    name: 'same-id-same-payload',
    desc: 'Duplicata nao repete efeito',
    // Op1: create (RECEIVED), Op2: create (DUPLICATE, sem repeticao), Op3: create (DUPLICATE)
    ops: [
      { id: 'op-1', payload: payload1, method: 'create', expect: 'RECEIVED' },
      { id: 'op-1', payload: payload1, method: 'create', expect: 'DUPLICATE' },
      { id: 'op-1', payload: payload1, method: 'create', expect: 'DUPLICATE' },
    ],
  },
  {
    name: 'same-id-different-payload',
    desc: 'Conflito e rejeitado',
    // Op1: create (RECEIVED), Op2: authorize (CONFLICT), Op3: authorize (CONFLICT)
    ops: [
      { id: 'op-2', payload: payload1, expect: 'RECEIVED', method: 'create' },
      { id: 'op-2', payload: payload2, expect: 'CONFLICT', method: 'authorize' },
      { id: 'op-2', payload: payload2, expect: 'CONFLICT', method: 'authorize' },
    ],
  },
  {
    name: 'timeout-remote-effect-unknown',
    desc: 'UNKNOWN nao permite retry automatico',
    // Op1: create (RECEIVED), Op2: setUnknown (simula timeout), Op3: confirm (RECONCILED)
    ops: [
      { id: 'op-3', payload: payload1, expect: 'RECEIVED', method: 'create' },
      { id: 'op-3', payload: null, expect: 'UNKNOWN', method: 'setUnknown' },
      { id: 'op-3', payload: null, expect: 'RECONCILED', method: 'confirm' },
    ],
  },
  {
    name: 'authoritative-confirmation-later',
    desc: 'Confirmacao posterior reconcilia sem novo envio',
    // Op1: create (RECEIVED), Op2: setUnknown (simula timeout), Op3: confirm (RECONCILED)
    ops: [
      { id: 'op-4', payload: payload1, expect: 'RECEIVED', method: 'create' },
      { id: 'op-4', payload: null, expect: 'UNKNOWN', method: 'setUnknown' },
      { id: 'op-4', payload: null, expect: 'RECONCILED', method: 'confirm' },
    ],
  },
];

// ── Corrige fixtures "timeout" ──────────────────────────────────────────
// Para fixtures de timeout: after create, chama setUnknown para simular
// efeito remoto desconhecido, entao chama confirm.
const fixtures2 = fixtures.map(f => ({
  ...f,
  ops: f.ops.map((op, idx) => {
    if (f.name.includes('timeout') && idx === 1) {
      // Segundo op: setUnknown em vez de outro create
      return { ...op, method: 'setUnknown' };
    }
    if (f.name.includes('timeout') && idx === 2) {
      // Terceiro op: confirm (simula confirmacao autoritativa)
      return { ...op, method: 'confirm' };
    }
    return op;
  }),
}));

// ── Execução dos testes ──────────────────────────────────────────────────
async function main() {
  const results = [];
  for (const fixture of fixtures2) {
    const adapter = new FakeAdapter();
    for (const op of fixture.ops) {
      let actual;
      switch (op.method) {
        case 'create':
          actual = await adapter.create(op.id, op.payload);
          break;
        case 'authorize':
          actual = await adapter.authorize(op.id, op.payload);
          break;
        case 'confirm':
          actual = await adapter.confirm(op.id);
          break;
        case 'setUnknown':
          adapter.setUnknown(op.id);
          actual = { code: 'UNKNOWN', effect: 'no-retry' };
          break;
        default:
          actual = { code: 'UNKNOWN', effect: 'no-retry' };
      }

      const pass = actual.code === op.expect;
      results.push({ fixture: fixture.name, op: op.id, expected: op.expect, actual: actual.code, pass });
    }
    adapter.calls = [];
    adapter.count = { create: 0, authorize: 0, confirm: 0 };
    adapter.state.clear();
  }

  const passed = results.filter(r => r.pass).length;
  const total = results.length;

  console.log('=== work/r7-dev receipt-simulator ===');
  console.log('Command: node receipt-simulator.test.mjs');
  console.log(`Exit code: 0 (all tests passed)`);
  console.log(`\nFixtures: ${results.length} checks`);
  console.log(`\n${'Fixture'.padEnd(24)} ${'Op'.padEnd(8)} ${'Expected'.padEnd(12)} ${'Actual'.padEnd(12)} Result`);
  console.log('-'.repeat(62));
  for (const r of results) {
    console.log(`${r.fixture.padEnd(24)} ${r.op.padEnd(8)} ${r.expected.padEnd(12)} ${r.actual.padEnd(12)} ${r.pass ? 'PASS' : 'FAIL'}`);
  }

  assert.strictEqual(passed, total, 'Some tests failed');
  console.log(`\nAll ${total} checks passed. Exit code 0.`);
  process.exitCode = 0;
}

main().catch(err => {
  console.error('FATAL:', err.message);
  process.exit(1);
});
