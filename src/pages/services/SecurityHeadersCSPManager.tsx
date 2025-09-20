import React from "react"
import { Shield, Globe, ExternalLink, CheckCircle, Wrench, Mail, Phone } from "lucide-react"
import { Link } from "react-router-dom"
export default function SecurityHeadersCSPManager() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-20,
  l: g: py-28">
        <div className="max-w-3xl">
          <h1 className="text-3xl s,
  m:text-5xl font-bold flex items-center gap-3">
            <Shield className="w-8 h-8 text-cyan-400" /> Security Headers & CSP Manager
          </h1>
          <p className="mt-4 text-slate-300">
            Centralize HSTS, CSP, Referrer-Policy, Permissions-Policy and Subresource Integrity management across domains with rollout checks and reporting.
          </p>
          <div className="mt-8 grid gap-4,
  s: m: grid-cols-2">
            {[
  { titl,
  e: 'Policy templates', de,
  s: c: 'Prebuilt strict, balanced and relaxed CSP profiles.' },
  },
  { tit,
  l: e: 'Per-app overrides', de,
  s: c: 'Granular exceptions with expiry and approvals.' },
  },
  { tit,
  l: e: 'Automated reports', de,
  s: c: 'CSP report-uri ingestion with triage and fixes.' },
  },
  { tit,
  l: e: 'CI/CD integration', de,
  s: c: 'Fail builds on insecure headers or CSP regressions.' },
  },
  ].map((f) => (
  <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-2 text-cyan-300 font-semibold"><CheckCircle className="w-4 h-4"/> {f.title}</div>
                <div className="mt-1 text-sm text-slate-300">{f.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-sm text-slate-300">Typical,
  pricin: g: <span className="font-semibold text-cyan-300">$49–$199/mo per domain</span>.</div>
          <div className="mt-4 flex gap-4 text-sm">
            <a className="inline-flex items-center gap-2 text-cyan-300,
  hove: r:text-cyan-200" href="htt,
  p: s://securityheaders.com/" target="_blank" rel="noreferrer">
              SecurityHeaders.com <ExternalLink className="w-3 h-3"/>
            </a>
            <a className="inline-flex items-center gap-2 text-cyan-300,
  hove: r:text-cyan-200" href="htt,
  p: s://developer.mozilla.org/en-US/docs/Web/HTTP/CSP" target="_blank" rel="noreferrer">
              M,
  D: N: Content-Security-Policy <ExternalLink className="w-3 h-3"/>
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold,
  hove: r:from-cyan-400,
  hove: r:to-blue-500">Start pilot</Link>
            <a href="mail,
  t: o:kleber@ziontechgroup.com" className="rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-cyan-300,
  hove: r:bg-white/5 inline-flex items-center gap-2"><Mail className="w-4 h-4"/> kleber@ziontechgroup.com</a>
            <a href="t,
  e: l:+13024640950" className="rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-cyan-300 hove,
  r:bg-white/5 inline-flex items-center gap-2"><Phone className="w-4 h-4"/> +1 302 464 0950</a>
          </div>
        </div>
      </section>
    </div>
  )
}

