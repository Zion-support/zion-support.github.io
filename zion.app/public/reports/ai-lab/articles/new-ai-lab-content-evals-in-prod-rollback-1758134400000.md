---
title: "Evals‑in‑Prod: Rollbacks, Canaries, and Safe Iteration"
createdAt: "2025-09-17T02:00:00.000Z"
tags: ["evals", "reliability", "operations"]
source: "Zion AI Lab"
---

# Evals‑in‑Prod: Rollbacks, Canaries, and Safe Iteration

A practical approach to shipping agent changes safely with objective gates and clear rollback mechanics.

## Release stages

1. Shadow testing: no-user impact, log metrics and diffs
2. Canary rollout: small % with auto rollback on threshold breach
3. Progressive delivery: route-aware splits by segment and risk tier

## Gates and thresholds

- Quality: task success rate, groundedness, and refusal accuracy
- Safety: disallowed tool invocations and policy exception rates
- Cost/Latency: p95 tokens, p95 latency, budget adherence

## Runbooks

- Define rollback owners and triggers
- Capture evidence bundles and evaluation diffs
- Communicate impact and next steps on incidents

Safe iteration is a function of preparation, objective gates, and rapid rollback.

