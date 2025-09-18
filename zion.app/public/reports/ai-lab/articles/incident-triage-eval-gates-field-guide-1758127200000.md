# Incident Triage with Evaluation Gates — A Field Guide (2026)

Modern agentic systems demand fast, reliable incident triage. This field guide shows a lightweight, evidence‑first workflow that uses evaluation gates to reduce MTTR while maintaining safety and cost controls.

## Why evaluation gates?

Evaluation gates provide preflight, canary, and post‑release checks that tie model behavior to outcomes you care about. During incidents, these gates become powerful triage signals:

- Preflight: block obviously risky actions before they roll out
- Canary: surface regressions quickly with minimal blast radius
- Post‑release: detect drift and performance regressions in production

## A pragmatic triage workflow

1. Detect: Trigger on SLO breach, policy event, or anomaly in traces
2. Gather: Pull evidence (traces, prompts, tool calls, artifacts)
3. Score: Run targeted evals against the failing scenario
4. Contain: Apply policy controls, roll back, or route to safe mode
5. Fix: Patch with targeted prompts, tools, or routing bands
6. Verify: Re‑run evals, capture evidence, and ship with a canary

## Minimal evidence bundle

- Trace snippet with input, decision points, and tool invocations
- Policy events that explain gated/allowed actions
- Eval scorecards: groundedness, usefulness, safety, cost
- Artifacts: user‑visible outputs, diffs, screenshots

## Rollout pattern

- Start with a single, realistic scenario per incident class
- Add 2‑3 SLIs that map to your reliability goals
- Wire automated rollback with a clear, auditable trail

## Templates

- Incident report: who, what changed, evidence, decision, outcome
- Eval suite: scenarios, rubrics, thresholds, and reviewer guide
- Policy: allowed tools, approvals, and budget bands per risk tier

Adopt this playbook incrementally. Start with one incident class, one scenario, and one guardrail. Improve from evidence.

— Zion AI Lab