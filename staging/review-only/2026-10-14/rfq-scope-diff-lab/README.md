# RFQ Scope Diff Lab

Find missing assets, changed serials and commercial gaps before signing a quote.

**Candidate project-site URL (NOT live until repository and GitHub Pages are configured):** https://ziontechgroup.com/rfq-scope-diff-lab/

## Architecture
- Static HTML/CSS/ECMAScript modules; no npm runtime dependencies, no external AI API, no credentials, no cookies.
- The analysis is **explainable rules and calculations**, not hosted LLM inference or a compliance certification.
- Data stays in the browser memory; nothing is automatically sent to Zion or anyone else.
- Designed to complement existing Zion App Network applications with a distinct specialized workflow.

## Test
`npm test` and `npm run check`. Host root with `python3 -m http.server 8080` to run locally.

## Per-repository publish (owner action needed)
1. Create the **public** `Zion-support/rfq-scope-diff-lab` repository (the currently connected GitHub actions cannot create repositories).
2. Copy the contents of this folder to that repository's root and commit to `main` after code review.
3. Settings > Pages: publish from `main` / `(root)` (or reviewed Actions workflow); enable **Enforce HTTPS** when available. Do not add a per-repo `CNAME`; the account site already uses `ziontechgroup.com`.
4. Verify GET/HTTP 200, HTTPS certificate, correct app content and deep link at https://ziontechgroup.com/rfq-scope-diff-lab/. Project paths inherit the site domain in GitHub Pages when eligible. Verify actual account settings before public claims.
5. Then publish the coordinated homepage/network navigation integration; no broken pre-launch links.

## Safety and release
These source files are **release candidates only** until tests, owner review, GitHub Pages, HTTPS and public GET readback pass. No GitHub Actions checks, security review, or actual online deployment are represented by this README. The main-site CI/release hold must not be bypassed.
