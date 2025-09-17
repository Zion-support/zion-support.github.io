---
title: "Agent Runbooks: Incident Response for LLM Agents"
createdAt: "2025-09-16T19:00:00.000Z"
tags:
  - operations
  - reliability
  - agents
source: "Zion AI Lab"
---

Operating agentic systems in production requires crisp, repeatable response patterns when things go wrong. This guide outlines practical runbooks for diagnosing and mitigating incidents involving tools, routing, memory, and guardrails.

Key scenarios:

- Tool timeout storms and degraded dependencies
- Hallucination spikes under specific prompts or contexts
- Escalating cost curves from poorly routed requests
- PII leakage prevention with runtime redaction and trace reviews

Response checklist:

1. Freeze release channels and switch to safe routes
2. Capture and tag traces for affected spans
3. Run targeted evals to reproduce and isolate regressions
4. Apply guardrail policies and budget caps
5. Document remediation and add regression tests to gates

Adopt these runbooks to reduce MTTR and improve trust for mission‑critical agent workflows.

