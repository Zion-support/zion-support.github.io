---
title: Zero‑Downtime Agent Releases — A Practical Checklist
author: Zion AI Lab
createdAt: 2025-09-17T04:00:00.000Z
tags:
  - release
  - evals
  - operations
source: Zion AI Lab
---

# Zero‑Downtime Agent Releases — A Practical Checklist

A concise, battle‑tested checklist for releasing agents safely:

## Before

- Align SLIs/SLOs with product and risk teams
- Add preflight evals and policy checks for high‑risk tools
- Prepare feature flags and traffic splitting

## During

- Start with a 1–5% canary; compare control vs. treatment
- Enforce budget, quota, and safety caps
- Roll back automatically on SLO violations

## After

- Record evidence bundles (traces, configs, versions)
- Ship postmortems and capture learnings

Use this as a template to standardize reliable autonomy deployments.

