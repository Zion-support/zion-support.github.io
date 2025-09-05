import Head from 'next/head';
import Link from 'next/link';

export default function MainFrontIndex() {_const { scrollYProgress} = useScroll();
  const _progressX = useSpring(scrollYProgress, {_stiffness: 90, _damping: 20, _mass: 0.2});
  const [showToTop, setShowToTop] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect__(() => {_const _onScroll = () => setShowToTop(window.scrollY > 400);
    window.addEventListener('scroll', _onScroll, _{ passive: true} as any);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Head>
        <title>Zion — Front Systems Hub | Autonomous Cloud Automations</title>
        <meta name="description" content="Futuristic front experience showcasing Zion's autonomous cloud automations — features, capabilities, and benefits." />
        <meta property="og:title" content="Zion — Front Systems Hub" />
        <meta property="og:description" content="Explore the features, capabilities, and benefits behind our autonomous cloud automations." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
      </Head>
      {_/* Scroll progress bar */}
      <motion.div style={_{ scaleX: progressX}} className="fixed inset-x-0 top-0 z-40 h-0.5 origin-left bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400" />
      {_/* Animated Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {_/* Aurora orbs */}
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" />
        {_/* Subtle animated grid */}
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid" />
        <div className="absolute inset-0 opacity-[0.06] hex-grid" />
        {_/* Star field */}
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
          <div className="twinkle-field absolute inset-0" />
        </div>
        <div className="absolute inset-0 bg-aurora opacity-[0.18]" />
        {_/* Extra futuristic layers */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="absolute h-[52rem] w-[52rem] rounded-full border border-cyan-400/10 animate-[spin_60s_linear_infinite]" />
          <div className="absolute h-[36rem] w-[36rem] rounded-full border border-fuchsia-400/10 animate-[spin_80s_linear_infinite] [animation-direction:reverse]" />
          <div className="absolute h-[24rem] w-[24rem] rounded-full border border-violet-400/10 animate-[spin_100s_linear_infinite]" />
        </div>
        <div className="absolute inset-0 mix-blend-soft-light opacity-[0.07] scanlines" />
        {_/* Neural mesh lines */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_-10%,rgba(34,211,238,0.08),transparent),radial-gradient(600px_400px_at_110%_10%,rgba(168,85,247,0.08),transparent)]" />
        <div className="pointer-events-none absolute inset-0 opacity-20 [background:repeating-linear-gradient(0deg,transparent,transparent_31px,rgba(255,255,255,.06)_32px),repeating-linear-gradient(90deg,transparent,transparent_31px,rgba(255,255,255,.06)_32px)] [mask-image:radial-gradient(ellipse_at_center,black,transparent_65%)]" />
        {_/* Futuristic beams layers */}
        <div className="absolute inset-0 beams-layer beams-45" />
        <div className="absolute inset-0 beams-layer beams--45" />
        <div className="pointer-events-none absolute inset-0 beams opacity-[0.06]" />
      </div>

      {_/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-950/55 border-b border-white/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold tracking-wide">
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <Link href="/"><a className="text-white/80 hover:text-white">Home</a></Link>
            <Link href="#command-center"><a className="text-white/80 hover:text-white">Command</a></Link>
            <Link href="#features"><a className="text-white/80 hover:text-white">Features</a></Link>
            <Link href="#feature-map"><a className="text-white/80 hover:text-white">Map</a></Link>
            <Link href="#suites"><a className="text-white/80 hover:text-white">Suites</a></Link>
            <Link href="#capabilities"><a className="text-white/80 hover:text-white">Capabilities</a></Link>
            <Link href="#use-cases"><a className="text-white/80 hover:text-white">Use Cases</a></Link>
            <Link href="#pillars"><a className="text-white/80 hover:text-white">Pillars</a></Link>
            <Link href="#benefits"><a className="text-white/80 hover:text-white">Benefits</a></Link>
            <Link href="#templates"><a className="text-white/80 hover:text-white">Templates</a></Link>
            <Link href="#demos"><a className="text-white/80 hover:text-white">Demos</a></Link>
            <Link href="#highlights"><a className="text-white/80 hover:text-white">Highlights</a></Link>
            <Link href="#cases"><a className="text-white/80 hover:text-white">Cases</a></Link>
            <Link href="#reports"><a className="text-white/80 hover:text-white">Reports</a></Link>
            <Link href="#roadmap"><a className="text-white/80 hover:text-white">Docs</a></Link>
            <Link href="/automation"><a className="text-white/80 hover:text-white">Automations</a></Link>
          </div>
          <button aria-label="Open menu" onClick={_() => setMobileOpen(true)} className="md:hidden rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/80">Menu</button>
        </nav>
        {_/* Mobile overlay menu */}
        {_mobileOpen && (_<motion.div
            initial={{ opacity: 0}}
            animate={_{ opacity: 1}}
            exit={_{ opacity: 0}}
            className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur"
            onClick={_() => setMobileOpen(false)}
          >
            <motion.div
              initial={_{ y: -20, _opacity: 0}}
              animate={_{ y: 0, _opacity: 1}}
              transition={_{ duration: 0.2}}
              className="mx-auto mt-20 w-[92%] max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-xl"
              onClick={_(_e) => e.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="text-lg font-semibold">Navigate</div>
                <button aria-label="Close menu" onClick={_() => setMobileOpen(false)} className="rounded-md border border-white/15 bg-white/5 px-2 py-1 text-xs">Close</button>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {_[
                  ['Home', _'/'], _['Command', _'#command-center'], _['Features', _'#features'], _['Map', _'#feature-map'], _['Suites', _'#suites'], _['Capabilities', _'#capabilities'], _['Use Cases', _'#use-cases'], _['Pillars', _'#pillars'], _['Benefits', _'#benefits'], _['Templates', _'#templates'], _['Demos', _'#demos'], _['Highlights', _'#highlights'], _['Cases', _'#cases'], _['Reports', _'#reports'], _['Docs', _'#roadmap'], _['Automations', _'/automation']].map(_([label, _href]) => (
                  (href as string).startsWith('#') ? (_<a key={label as string} href={_href as string} onClick={_() => setMobileOpen(false)} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10">{_label as string}</a>
                  ) : (_<Link key={_label as string} href={_href as string}>
                      <a onClick={_() => setMobileOpen(false)} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10">{_label as string}</a>
                    </Link>
                  )
                ))}
              </div>
              <div className="mt-4 flex justify-end">
                <Link href="/automation"><a onClick={_() => setMobileOpen(false)} className="rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2 text-sm font-semibold">Launch Hub</a></Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </header>

      {_/* Hero */}
      <div role="main" className="relative z-10">
        <motion.section
          initial={_{ opacity: 0, _y: 20}}
          animate={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.6}}
          className="mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16 md:pb-24"
        >
          <div className="text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              Front systems hub — tailored view of our autonomous capabilities
            </div>
                        <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              <span className="gradient-text animate-shimmer bg-[length:200%_100%]">Futuristic Front Experience</span>
            </h1>
            <div className="mx-auto mt-3 flex max-w-2xl items-center justify-center gap-2 text-xs text-white/60">
              <a href="#feature-map" className="hover:text-white">Feature Map</a>
              <span aria-hidden>•</span>
              <a href="#capabilities" className="hover:text-white">Capabilities</a>
              <span aria-hidden>•</span>
              <a href="#benefits" className="hover:text-white">Benefits</a>
              <span aria-hidden>•</span>
              <a href="#reports" className="hover:text-white">Integrations</a>
            </div>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-white/80">
              Explore the features, capabilities, and benefits that power Zion's autonomous cloud automations — optimized for your front‑of‑house experience.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/automation"><a className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-shadow">Explore Automations</a></Link>
              <Link href="/automation"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">View Cloud Automations</a></Link>
            </div>

            {_/* Cloud Automations Spotlight */}
            <div className="mx-auto mt-6 max-w-5xl text-left">
              <div className="mb-2 text-xs uppercase tracking-wide text-white/60">Cloud Automations (live)</div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <a className="glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10" href="/.netlify/functions/agent-swarm-orchestrator">Agent Swarm Orchestrator ↗</a>
                <a className="glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/ultra-rapid-sync.yml" target="_blank" rel="noopener">Ultra Rapid Sync →</a>
                <a className="glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/automation-advertiser.yml" target="_blank" rel="noopener">Automation Advertiser →</a>
                <a className="glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/knowledge-graph-radar.yml" target="_blank" rel="noopener">Knowledge Graph & Radar →</a>
                <a className="glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/site-health-guardian.yml" target="_blank" rel="noopener">Site Health Guardian →</a>
                <a className="glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10" href="/.netlify/functions/autonomous-meta-orchestrator">Meta Orchestrator →</a>
                <a className="glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/autonomous-error-guardian.yml" target="_blank" rel="noopener">Autonomous Error Guardian →</a>
                <a className="glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/a11y-contrast-guardian.yml" target="_blank" rel="noopener">A11y & Contrast Guardian →</a>
                <a className="glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/marketing-pulse.yml" target="_blank" rel="noopener">Marketing Pulse →</a>
                <a className="glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/repo-radar-knowledge.yml" target="_blank" rel="noopener">Repo Radar & Knowledge →</a>
              </div>
            </div>

            {_/* Live metrics strip */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {_[
                ['24/7', _'Autonomous'], _['Main', _'Direct Sync'], _['0 Ops', _'Cloud‑Native'], _['Safety', _'Guardrails']].map(_([k, _v]) => (
                <div key={k} className="glow-card rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left">
                  <div className="text-lg font-bold text-white">{_k}</div>
                  <div className="text-xs text-white/70">{_v}</div>
                </div>
              ))}
            </div>

            {_/* Futuristic marquee */}
            <div className="relative mx-auto mt-8 max-w-5xl overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/90 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/90 to-transparent" />
              <div className="marquee">
                <div className="marquee__track">
                  {_[
                    'Autonomous Agents', _'Repo Sync to Main', _'Zero‑Ops Cloud', _'Safety Guardrails', _'A11y + Performance', _'Observability', _'SEO Automation', _'Design Evolution'].flatMap(_(label) => [label, _label]).map(_(label, _idx) => (
                    <span key={`${label}-${_idx}`} className="mx-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs text-white/80 backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> {_label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {_/* Quick Links */}
            <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
              {_[
                ['Automation Hub', _'/automation'], _['SEO Audit', _'/reports/seo'], _['AI Trends', _'/reports/ai-trends'], _['Newsroom', _'/newsroom'], _['Site Health', _'/site-health']].map(_([label, _href]) => (
                <Link key={label as string} href={_href as string}>
                  <a className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 backdrop-blur hover:bg-white/10">{_label as string}</a>
                </Link>
              ))}
            </div>
          </div>
        </motion.section>

                 {_/* Showcase */}
         <motion.section
           id="showcase"
           initial={_{ opacity: 0, _y: 24}}
           whileInView={_{ opacity: 1, _y: 0}}
           viewport={_{ once: true, _amount: 0.2}}
           transition={_{ duration: 0.5}}
           className="mx-auto max-w-7xl px-6 pb-14"
         >
           <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Showcase: Features, Capabilities, Benefits</h2>
           <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Jump into highlighted areas of the platform. Every card links to a deep section or dedicated page.</p>
           <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <Link href="#features">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-2"><Zap className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">Explore Features</h3></div>
                <p className="mt-1 text-sm text-white/75">Self‑improving systems, composable factories, observability and more.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>
            <Link href="#capabilities">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-2"><Cpu className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">Browse Capabilities</h3></div>
                <p className="mt-1 text-sm text-white/75">Design evolution, SEO, a11y, performance, refactors, and policy.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>
            <Link href="#benefits">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-2"><Gauge className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">See Benefits</h3></div>
                <p className="mt-1 text-sm text-white/75">Momentum, quality, safety, and measurable outcomes.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>
            <Link href="#feature-map">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-2"><Globe className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">Feature Map</h3></div>
                <p className="mt-1 text-sm text-white/75">A quick overview of what you can explore right now.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>
            <Link href="#guardrails">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">Guardrails</h3></div>
                <p className="mt-1 text-sm text-white/75">Defense‑in‑depth checks and safety before shipping.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>
            <Link href="/automation">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-2"><Rocket className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">Automation Hub</h3></div>
                <p className="mt-1 text-sm text-white/75">Factories, agents, and live workflows in one place.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>
          </div>
        </motion.section>

        {_/* Auto-Promoted Features (auto-generated) */}
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Link href="/automation"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="text-base font-semibold">Automation Hub</div><div className="mt-1 text-sm text-white/75">Live agents & workflows</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
            <Link href="/site-health"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="text-base font-semibold">Site Health</div><div className="mt-1 text-sm text-white/75">A11y, performance, links</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
            <Link href="/reports/seo"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="text-base font-semibold">AI SEO Auditor</div><div className="mt-1 text-sm text-white/75">On‑site improvements</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
            <Link href="/reports/ai-trends"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="text-base font-semibold">AI Trends Radar</div><div className="mt-1 text-sm text-white/75">Signals powering strategy</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
            <Link href="/newsroom"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="text-base font-semibold">Newsroom</div><div className="mt-1 text-sm text-white/75">Product evolution</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
            <a href="/reports/seo" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="text-base font-semibold">Docs & Guides</div><div className="mt-1 text-sm text-white/75">Technical notes</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div></a>
            <a href="/newsroom" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="text-base font-semibold">AI Changelog</div><div className="mt-1 text-sm text-white/75">Summarized updates</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div></a>
          </div>
        </section>

        {_/* Floating Quick-Nav Dock */}
        <aside className="fixed left-4 top-1/2 z-30 -translate-y-1/2 block">
          <nav aria-label="Quick section navigation" className="space-y-2">
            {_[
              ['#command-center', _'Command'], _['#feature-map', _'Map'], _['#engines', _'Engines'], _['#suites', _'Suites'], _['#capabilities', _'Capabilities'], _['#use-cases', _'Use Cases'], _['#pillars', _'Pillars'], _['#benefits', _'Benefits'], _['#templates', _'Templates'], _['#demos', _'Demos'], _['#highlights', _'Highlights'], _['#cases', _'Cases'], _['#reports', _'Reports'], _['#guardrails', _'Guardrails'], _['#roadmap', _'Docs']].map(_([href, _label]) => (
              <a key={href} href={_href} className="block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75 backdrop-blur-md hover:border-cyan-400/40 hover:text-white">
                {_label}
              </a>
            ))}
          </nav>
        </aside>

        {_/* Engines: Alternative Automation Runtimes */}
        <motion.section
          id="engines"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Autonomous Engines (Beyond GitHub Actions)</h2>

          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">We run outside GitHub Actions using scheduled cloud functions and orchestrators. Explore the engines below.</p>

                    <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
             <a
               href="/.netlify/functions/front-enhancer"
               className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"
             >
               <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
               <div className="text-lg font-semibold">Netlify Scheduled Functions</div>
               <p className="mt-1 text-sm text-white/75">Cron-like cloud jobs that run every 20 minutes to enhance the front experience.</p>
               <div className="mt-3 text-xs text-cyan-300/90">View logs via Netlify →</div>
             </a>
             <a
               href="https://github.com/Zion-Holdings/zion.app/tree/main/automation"
               target="_blank" rel="noopener"
               className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover"
             >
               <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
               <div className="text-lg font-semibold">Local Orchestrators</div>
               <p className="mt-1 text-sm text-white/75">Node-based orchestrators that can run on any scheduler or platform.</p>
               <div className="mt-3 text-xs text-cyan-300/90">Browse orchestration scripts ↗</div>
             </a>
             <a
               href="/automation"
               className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover"
             >
               <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
               <div className="text-lg font-semibold">Autonomous Cloud Orchestrator</div>
               <p className="mt-1 text-sm text-white/75">End-to-end agents launching factories and syncing safe diffs to main.</p>
               <div className="mt-3 text-xs text-cyan-300/90">Open Automation Hub →</div>
             </a>
           </div>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/.netlify/functions/internal-link-graph-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-lg font-semibold">Internal Link Graph</div>
              <p className="mt-1 text-sm text-white/75">Live graph of internal navigation across pages.</p>
              <div className="mt-3 text-xs text-cyan-300/90">Run now →</div>
            </a>
            <a href="/.netlify/functions/robots-enhancer-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-lg font-semibold">Robots.txt Enhancer</div>
              <p className="mt-1 text-sm text-white/75">Ensures sitemap and sensible defaults for crawling.</p>
              <div className="mt-3 text-xs text-cyan-300/90">Run now →</div>
            </a>
            <a href="/.netlify/functions/alt-text-indexer-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-lg font-semibold">Alt Text Indexer</div>
              <p className="mt-1 text-sm text-white/75">Humanized alt suggestions for images across the site.</p>
              <div className="mt-3 text-xs text-cyan-300/90">Run now →</div>
            </a>
            <a href="/.netlify/functions/content-registry-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-lg font-semibold">Content Registry Builder</div>
              <p className="mt-1 text-sm text-white/75">Continuously indexes pages and reports for discovery.</p>
              <div className="mt-3 text-xs text-cyan-300/90">Run now →</div>
            </a>
            <a
              href="/.netlify/functions/autonomous-meta-orchestrator"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover"
            >
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-lg font-semibold">Autonomous Meta Orchestrator</div>
              <p className="mt-1 text-sm text-white/75">Optimizes metadata, changelogs, and docs; commits results every 3m.</p>
              <div className="mt-3 text-xs text-cyan-300/90">Run now ↗</div>
            </a>
            <a
              href="/.netlify/functions/rapid-sync"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover"
            >
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-lg font-semibold">Rapid Sync (2m)</div>
              <p className="mt-1 text-sm text-white/75">High‑frequency repo sync to push autonomous changes quickly.</p>
              <div className="mt-3 text-xs text-cyan-300/90">Run now ↗</div>
            </a>

            <a
              href="/.netlify/functions/content-freshness-runner"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover"
            >
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-lg font-semibold">Content Freshness Audit</div>
              <p className="mt-1 text-sm text-white/75">Scores pages and docs by last update; commits freshness reports.</p>
              <div className="mt-3 text-xs text-cyan-300/90">Open →</div>
            </a>

            <a
              href="/.netlify/functions/docs-link-audit-runner"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover"
            >
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-lg font-semibold">Docs Link Audit</div>
              <p className="mt-1 text-sm text-white/75">Scans docs for broken relative links and commits a CSV report.</p>
              <div className="mt-3 text-xs text-cyan-300/90">Open →</div>
            </a>

            <a
              href="/.netlify/functions/image-dimension-audit-runner"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover"
            >
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-lg font-semibold">Image Dimension Audit</div>
              <p className="mt-1 text-sm text-white/75">Detects missing width/height in images and logs a report.</p>
              <div className="mt-3 text-xs text-cyan-300/90">Open →</div>
            </a>
            <a
              href="/.netlify/functions/autonomous-master-orchestrator"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover"
            >
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-lg font-semibold">Autonomous Master Orchestrator</div>
              <p className="mt-1 text-sm text-white/75">Runs every minute: triggers all cloud functions and syncs to main.</p>
              <div className="mt-3 text-xs text-cyan-300/90">Open ↗</div>
            </a>
          </div>
        </motion.section>

        {_/* Autonomous Innovations */}
        <motion.section
          id="innovations"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Autonomous Innovations</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">New intelligent cloud automations running 24/7 — no human intervention required.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/.netlify/functions/autonomous-content-curator" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-2"><Activity className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">Autonomous Content Curator</h3></div>
              <p className="mt-1 text-sm text-white/75">Curates and promotes highlights on front pages; syncs to main.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
            <a href="/.netlify/functions/revenue-ideas-lab" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-2"><LineChart className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">Revenue Ideas Lab</h3></div>
              <p className="mt-1 text-sm text-white/75">Monetization experiments with safe, automatic repository sync.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
            <a href="/.netlify/functions/autonomous-invention-orchestrator" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-2"><Rocket className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">Autonomous Invention Orchestrator</h3></div>
              <p className="mt-1 text-sm text-white/75">Continuously invents and applies front enhancements.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
          </div>
        </motion.section>

        {_/* Autonomous Cloud Runners */}
        <section id="cloud-runners" className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Autonomous Cloud Runners</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {_[ 
              { title: 'Automation Guardian (10m)', _desc: 'Monitors and auto-heals automations; commits fixes safely.', _href: '/.netlify/functions/automation-guardian-runner'},
              {_title: 'Components Docs Runner (30m)', _desc: 'Regenerates components/docs indexes and README, _then pushes.', _href: '/.netlify/functions/components-docs-runner'}].map(_(tool) => (
              <a key={_tool.title} href={_tool.href} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{_tool.title}</h3>
                <p className="mt-1 text-sm text-white/75">{_tool.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
            ))}
          </div>
        </section>

        {_/* Command Center */}
        <section id="command-center" className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Command Center</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {_[
              { title: 'Automation Hub', _desc: 'Runbooks, _factories, _and live autonomous agents.', _href: '/automation'},
              {_title: 'Site Health', _desc: 'A11y, _performance, _and link‑health dashboards.', _href: '/site-health'},
              {_title: 'SEO Audit', _desc: 'Continuous on‑site SEO scans with proposed diffs.', _href: '/reports/seo'},
              {_title: 'AI Trends', _desc: 'Intelligence signals from the AI/cloud ecosystem.', _href: '/reports/ai-trends'},
              {_title: 'Newsroom', _desc: 'Curated updates and product evolution highlights.', _href: '/newsroom'},
              {_title: 'Cloud Automations', _desc: 'Netlify scheduled functions powering jobs 24/7.', _href: '/automation'},
              {_title: 'Docs', _desc: 'Technical notes and guides for the platform.', _href: '/reports/seo', _external: true},
              {_title: 'AI Changelog', _desc: 'Summarized autonomous changes and highlights.', _href: '/newsroom', _external: true}
            ].map(_(card) => (
              <article key={_card.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 holo tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{_card.title}</h3>
                <p className="mt-1 text-sm text-white/75">{_card.desc}</p>
                {_card.external ? (
                  <a href={card.href} target="_blank" rel="noopener" className="mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline">Open</a>
                ) : (
                  <Link href={_card.href as string}><a className="mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline">Open</a></Link>
                )}
              </article>
            ))}
          </div>
        </section>

        {_/* Netlify Automations */}
        <motion.section
          id="netlify-automations"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Netlify Automations</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Zero‑ops scheduled functions power background tasks that improve the site and ship small, safe diffs to main.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {_[ 
              { label: 'Autonomous Cloud Brain (1m)', _desc: 'Selectively triggers and syncs key pipelines every minute.', _href: '/.netlify/functions/autonomous-cloud-brain'},
              {_label: 'Homepage Advertiser', _desc: 'Curates and updates the home explore section.', _href: '/.netlify/functions/homepage_advertiser'},
              {_label: 'Autonomous Meta Orchestrator', _desc: 'Intelligently triggers cloud functions and syncs to main every minute.', _href: '/.netlify/functions/autonomous-meta-orchestrator'},
              {_label: 'Cloud Orchestrator', _desc: 'Runs fast improvement cycle and git sync.', _href: '/.netlify/functions/cloud_orchestrator'},
              {_label: 'Autonomous Meta Orchestrator (1m)', _desc: 'Curates and triggers critical cloud functions, _then syncs.', _href: '/.netlify/functions/autonomous-meta-orchestrator'},
              {_label: 'Cloud Trigger Hub (2m)', _desc: 'Triggers most functions concurrently, _then rebuilds/stamps.', _href: '/.netlify/functions/cloud-trigger-hub'},
              {_label: 'Sitemap Runner', _desc: 'Keeps sitemap fresh for SEO visibility.', _href: '/.netlify/functions/sitemap_runner'},
              {_label: 'SEO Audit Runner', _desc: 'Analyzes meta and content signals; writes public report.', _href: '/.netlify/functions/seo-audit-runner'},
              {_label: 'AI Trends Radar', _desc: 'Builds AI trends report from curated sources.', _href: '/.netlify/functions/ai-trends-radar-runner'},
              {_label: 'Dependency Auto‑Upgrade', _desc: 'Safely bumps deps and verifies a clean build.', _href: '/.netlify/functions/deps-auto-upgrade-runner'},
              {_label: 'Autonomous Meta Orchestrator', _desc: 'Invents and triggers cloud automations; syncs changes.', _href: '/.netlify/functions/autonomous-meta-orchestrator'},
              {_label: 'Trigger All & Commit', _desc: 'Invokes all functions and triggers a build or commit.', _href: '/.netlify/functions/trigger-all-and-commit'}
            ].map(_(f) => (
              <a key={_f.label} href={_f.href} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-lg font-semibold">{_f.label}</div>
                <div className="mt-1 text-sm text-white/75">{_f.desc}</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Trigger <span aria-hidden>↗</span></div>
              </a>
            ))}
          </div>
        </motion.section>

        {_/* New Cloud Automations */}
        <section className="mx-auto max-w-7xl px-6 pb-14">
          <h3 className="text-center text-xl font-bold tracking-wide text-white/90">New Cloud Automations</h3>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/.netlify/functions/stale-content-auditor-runner" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-lg font-semibold">Stale Content Auditor</div>
              <div className="mt-1 text-sm text-white/75">Finds stale pages/components/docs and publishes a report.</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Trigger <span aria-hidden>↗</span></div>
            </a>

            <a href="/.netlify/functions/autonomous-invention-orchestrator" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-lg font-semibold">Autonomous Invention Orchestrator</div>
              <div className="mt-1 text-sm text-white/75">Invents and curates fresh automations and safely syncs diffs to main.</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Trigger <span aria-hidden>↗</span></div>
            </a>
          </div>
        </section>

        {_/* Feature Spotlight */}
        <motion.section
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Feature Spotlight</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">A quick tour of the most impactful capabilities — each card links to a deep dive.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {_[
              { Icon: Rocket, _title: 'Automation Hub', _desc: 'Factories, _agents, _and live workflows', _href: '/automation'},
              {_Icon: Search, _title: 'AI SEO Auditor', _desc: 'Continuous on‑site SEO improvements', _href: '/reports/seo'},
              {_Icon: Gauge, _title: 'Site Health', _desc: 'A11y, _performance, _and link integrity', _href: '/site-health'},
              {_Icon: Globe, _title: 'AI Trends Radar', _desc: 'Signals that inspire new automations', _href: '/reports/ai-trends'},
              {_Icon: GitBranch, _title: 'Main Sync', _desc: 'Safe, _incremental diffs shipped continuously', _href: '/automation'},
              {_Icon: ShieldCheck, _title: 'Guardrails', _desc: 'Defense‑in‑depth quality gates', _href: '/site-health'}].map(_({_Icon, _title, _desc, _href}) => (
              <Link key={_title} href={_href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <h3 className="text-lg font-semibold">{_title}</h3>
                  </div>
                  <p className="mt-1 text-sm text-white/75">{_desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                </a>
              </Link>
            ))}
          </div>
        </motion.section>

        {_/* AUTO-GENERATED: FRONT_ADS_START */}
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/10 via-violet-600/10 to-cyan-600/10 p-6 backdrop-blur-xl">
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,2.5rem_2.5rem,2.5rem_2.5rem] animate-grid" />
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore Zion Systems</h2>
            <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Discover key features, capabilities, and benefits. Each card links to a dedicated page or live hub.</p>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Link href="/automation"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /><h3 className="text-base font-semibold">Automation Hub</h3><p className="mt-1 text-sm text-white/75">Factories, agents, and live workflows</p><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
              <Link href="/reports/seo"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /><h3 className="text-base font-semibold">AI SEO Auditor</h3><p className="mt-1 text-sm text-white/75">Continuous on‑site SEO improvements</p><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
              <Link href="/site-health"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /><h3 className="text-base font-semibold">Site Health</h3><p className="mt-1 text-sm text-white/75">A11y, performance, and link integrity</p><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
              <Link href="/reports/ai-trends"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /><h3 className="text-base font-semibold">AI Trends Radar</h3><p className="mt-1 text-sm text-white/75">Signals that inspire new automations</p><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
              <Link href="/newsroom"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /><h3 className="text-base font-semibold">Newsroom</h3><p className="mt-1 text-sm text-white/75">Latest autonomous updates</p><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
              <a href="https://github.com/Zion-Holdings/zion.app/actions" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /><h3 className="text-base font-semibold">Live Workflows</h3><p className="mt-1 text-sm text-white/75">Observe pipelines running 24/7</p><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a>
            </div>
          </div>
        </section>
        {_/* AUTO-GENERATED: FRONT_ADS_END */}

        {_/* Outcome Benefits */}
        <motion.section
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Outcome‑Focused Benefits</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Choose an outcome and jump to the relevant systems that make it happen.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {_[
              { label: 'Grow organic traffic', _desc: 'On‑site SEO improvements, _better metadata, _richer links', _href: '/reports/seo'},
              {_label: 'Improve UX quality', _desc: 'A11y fixes, _performance gains, _resilient links', _href: '/site-health'},
              {_label: 'Reduce engineering toil', _desc: 'Automated upgrades, _refactors, _and maintenance', _href: '/automation'},
              {_label: 'Ship faster with confidence', _desc: 'Small safe diffs synced to main', _href: '/automation'},
              {_label: 'Stay compliant & accessible', _desc: 'Policy guardrails and WCAG checks', _href: '/site-health'},
              {_label: 'Learn from market signals', _desc: 'AI + cloud trends to guide strategy', _href: '/reports/ai-trends'}].map(_(b) => (
              <Link key={_b.label} href={_b.href}>
                <a className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-fuchsia-400/30">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                  <span className="text-sm text-white/80"><span className="font-semibold text-white">{_b.label}</span> — {_b.desc} <span className="ml-1 text-cyan-300/90">→</span></span>
                </a>
              </Link>
            ))}
          </div>
        </motion.section>

        {_/* Suites */}
        <motion.section
          id="suites"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Automation Suites</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {_[
              { title: 'Quick Fixes', _desc: 'Build rescue, _sitemap/robots, _security remediation', _href: '/automation'},
              {_title: 'Deep Maintenance', _desc: 'Orchestrated smoke tests and link checks', _href: '/automation'},
              {_title: 'Marketing & SEO', _desc: 'Content factories and on‑site optimizations', _href: '/automation'},
              {_title: 'Content Curation', _desc: 'Homepage promos generated continuously', _href: '/automation'},
              {_title: 'Dependency Upgrades', _desc: 'Minor/patch bumps with safe auto‑merge', _href: '/automation'},
              {_title: 'Live Workflows', _desc: 'Observe pipelines running 24/7', _href: '/site-health', _external: true},
              {_title: 'Site Health', _desc: 'A11y, _performance, _link checks dashboards', _href: '/site-health'},
              {_title: 'AI SEO Auditor', _desc: 'Continuous on‑site audits with safe proposed diffs', _href: '/reports/seo'},
              {_title: 'AI Trends Radar', _desc: 'Signal scanning to inspire new factories', _href: '/reports/ai-trends'}].map(_(suite) => (
              <article key={_suite.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{_suite.title}</h3>
                <p className="mt-1 text-sm text-white/75">{_suite.desc}</p>
                {_suite.href && (
                  suite.external ? (
                    <a href={suite.href} target="_blank" rel="noopener" className="mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline">Open</a>
                  ) : (
                    <Link href={_suite.href}><a className="mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline">Open</a></Link>
                  )
                )}
              </article>
            ))}
          </div>
        </motion.section>

        {_/* Superpowers */}
        <motion.section
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Superpowers</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {_[
              { Icon: Rocket, _title: 'Generative Factories', _desc: 'Spins up domain‑specific automation factories that build for you.'},
              {_Icon: ShieldCheck, _title: 'Safety by Design', _desc: 'Layered validations — type checks, _builds, _a11y, _links, _and more.'},
              {_Icon: GitBranch, _title: 'Main Sync', _desc: 'Small, _reviewable edits committed and pushed continuously.'}].map(_({_Icon, _title, _desc}) => (
              <article key={_title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <Icon className="h-6 w-6 text-cyan-300" />
                <h3 className="mt-3 text-lg font-semibold">{_title}</h3>
                <p className="mt-1 text-sm text-white/75">{_desc}</p>
              </article>
            ))}
          </div>
        </motion.section>

        {_/* Get Started */}
        <motion.section
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Get Started in Minutes</h2>
          <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-4">
            <Link href="/automation">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-2"><Rocket className="h-5 w-5 text-cyan-300" /><span className="text-sm font-semibold">1. Explore Automations</span></div>
                <p className="mt-1 text-xs text-white/75">See live autonomous suites and workflows.</p>
              </a>
            </Link>
            <Link href="/reports/seo">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-2"><Search className="h-5 w-5 text-cyan-300" /><span className="text-sm font-semibold">2. Run SEO Audit</span></div>
                <p className="mt-1 text-xs text-white/75">Get prioritized improvements and artifacts.</p>
              </a>
            </Link>
            <Link href="/site-health">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-2"><Gauge className="h-5 w-5 text-cyan-300" /><span className="text-sm font-semibold">3. Check Site Health</span></div>
                <p className="mt-1 text-xs text-white/75">A11y, performance, and link health dashboards.</p>
              </a>
            </Link>
            <Link href="/reports/ai-trends">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-2"><Globe className="h-5 w-5 text-cyan-300" /><span className="text-sm font-semibold">4. Track AI Trends</span></div>
                <p className="mt-1 text-xs text-white/75">Stay ahead with intelligence signals.</p>
              </a>
            </Link>
          </div>
        </motion.section>

        {_/* Features */}
        <motion.section
          id="features"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Features</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {_[
              { Icon: Zap, _title: 'Self‑Improving', _desc: 'Agents continuously analyze, _invent, _and evolve automations.', _href: '/automation'},
              {_Icon: GitBranch, _title: 'Repo Sync', _desc: 'Changes are committed and pushed automatically to main.', _href: '/automation'},
              {_Icon: Cpu, _title: 'Zero Ops', _desc: 'Runs fully in the cloud—no servers or manual intervention.', _href: '/automation'},
              {_Icon: ShieldCheck, _title: 'Safety‑First', _desc: 'Conservative edits with logs, _reports, _and guardrails.', _href: '/site-health'},
              {_Icon: Gauge, _title: 'Observability', _desc: 'Dashboards, _reports, _and cloud automation artifacts.', _href: '/site-health'},
              {_Icon: Layers, _title: 'Composable Systems', _desc: 'Chain multiple factories into higher‑order workflows.', _href: '/automation'},
              {_Icon: Activity, _title: 'AI SEO Auditor', _desc: 'Continuously scans pages and proposes SEO improvements.', _href: '/reports/seo'},
              {_Icon: Globe, _title: 'AI Trends Radar', _desc: 'Tracks AI and cloud signals to inspire new automations.', _href: '/reports/ai-trends'},
              {_Icon: Search, _title: 'Deep Indexing', _desc: 'Content and code search powering smart linking and PRs.', _href: '/newsroom'},
              {_Icon: BarChart3, _title: 'Live Dashboards', _desc: 'Real‑time quality and impact metrics at a glance.', _href: '/site-health'},
              {_Icon: Activity, _title: 'Health Monitors', _desc: 'A11y, _links, _and performance monitored 24/7.', _href: '/site-health'},
              {_Icon: Globe, _title: 'Intelligence Signals', _desc: 'AI research integrated into product improvements.', _href: '/reports/ai-trends'},
              {_Icon: ShieldCheck, _title: 'Security Scans', _desc: 'Audit dependencies and surface risks with reports.', _href: '/site-health'},
              {_Icon: GitBranch, _title: 'Automated Changelogs', _desc: 'Summarized changes and AI notes published continuously.', _href: '/newsroom'},
              {_Icon: Rocket, _title: 'OG Image Maker', _desc: 'Auto‑generates rich Open Graph images for content.', _href: '/newsroom'},
              {_Icon: ShieldCheck, _title: 'Policy & Compliance', _desc: 'Safety rails and audits applied before shipping.', _href: '/site-health'},
              {_Icon: Layers, _title: 'Factories Library', _desc: 'Reusable building blocks for new automations.', _href: '/automation'},
              {_Icon: Gauge, _title: 'Site Health API', _desc: 'Programmatic access to health signals and artifacts.', _href: '/site-health'},
              {_Icon: Search, _title: 'Link Integrity', _desc: 'Broken links detected and fixed before shipping.', _href: '/site-health'},
              {_Icon: Palette, _title: 'Design System Evolution', _desc: 'Consistent, _modern UI upgrades across the app.', _href: '/newsroom'},
              {_Icon: BarChart3, _title: 'Analytics Exports', _desc: 'Download artifacts and reports for deeper analysis.', _href: '/reports/seo'},
              {_Icon: Search, _title: 'Automated PR Reviews', _desc: 'Bots review diffs for quality, _style, _and policy.', _href: '/automation'},
              {_Icon: Gauge, _title: 'Asset Optimizer', _desc: 'Compresses images and scripts for faster pages.', _href: '/site-health'},
              {_Icon: Layers, _title: 'i18n Readiness', _desc: 'Prepares content and routes for localization.', _href: '/newsroom'},
              {_Icon: Globe, _title: 'Sitemap & Robots', _desc: 'Maintains search‑friendly routing metadata.', _href: '/site-health'},
              {_Icon: Palette, _title: 'Design Tokens', _desc: 'Automates consistent theming and spacing.', _href: '/newsroom'},
              {_Icon: LineChart, _title: 'Experiment Telemetry', _desc: 'Measures impact across experiments and releases.', _href: '/reports/seo'},
              {_Icon: Activity, _title: 'Automated Dependencies', _desc: 'Minor/patch upgrades proposed and merged safely.', _href: '/automation'},
              {_Icon: Search, _title: 'Broken Link Defender', _desc: 'Continuously scans and fixes link integrity issues.', _href: '/site-health'},
              {_Icon: LineChart, _title: 'Experimentation', _desc: 'Automate A/B setups and monitor telemetry automatically.', _href: '/automation'},
              {_Icon: Palette, _title: 'Design Tokens & Theming', _desc: 'Enforce consistent theming, _spacing, _and motion.', _href: '/newsroom'},
              {_Icon: Gauge, _title: 'Image Pipeline', _desc: 'Optimize and transform media assets automatically.', _href: '/site-health'}
            ].map(_({_Icon, _title, _desc, _href}) => (
              <Link key={_title} href={_href}>
                <a className="group glow-card relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:border-cyan-400/30 tilt-on-hover neon-ring">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <h3 className="text-lg font-semibold">{_title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-white/75">{_desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Learn more <Link2 className="h-3.5 w-3.5" /></div>
                </a>
              </Link>
            ))}
          </div>
        </motion.section>

        {_/* Outcomes */}
        <motion.section
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Outcomes</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">
            Tangible, measurable wins delivered by autonomous cloud agents.
          </p>
          <div className="relative mx-auto mt-6 max-w-6xl overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/90 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/90 to-transparent" />
            <div className="marquee">
              <div className="marquee__track">
                {_[
                  { label: 'Accessibility fixes', _href: '/site-health'},
                  {_label: 'Performance boosts', _href: '/site-health'},
                  {_label: 'SEO improvements', _href: '/reports/seo'},
                  {_label: 'Safer main merges', _href: '/automation'},
                  {_label: 'Cleaner codebase', _href: '/automation'},
                  {_label: 'Better content curation', _href: '/newsroom'},
                  {_label: 'Operational visibility', _href: '/site-health'},
                  {_label: 'Experiment velocity', _href: '/automation'}]
                  .flatMap(_(item) => [item, item])
                  .map(_(item, _idx) => (
                    <Link key={_`${item.label}-${_idx}`} href={_item.href}>
                      <a className="mx-3 my-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/80 backdrop-blur hover:bg-white/10">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> {_item.label}
                      </a>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </motion.section>

        {_/* Feature Map */}
        <motion.section
          id="feature-map"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Feature Map</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">
            A fast overview of what you can explore right now across the platform.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {_[
              { label: 'Automation Hub', _desc: 'Live agents & workflows', _href: '/automation'},
              {_label: 'Repo Sync to Main', _desc: 'Safe, _incremental edits', _href: '/automation'},
              {_label: 'Zero‑Ops Cloud', _desc: 'Fully managed execution', _href: '/automation'},
              {_label: 'Safety Guardrails', _desc: 'Defense‑in‑depth checks', _href: '/site-health'},
              {_label: 'Observability', _desc: 'Dashboards & artifacts', _href: '/site-health'},
              {_label: 'Composable Systems', _desc: 'Higher‑order workflows', _href: '/automation'},
              {_label: 'AI SEO Auditor', _desc: 'On‑site improvements', _href: '/reports/seo'},
              {_label: 'AI Trends Radar', _desc: 'Intelligence signals', _href: '/reports/ai-trends'},
              {_label: 'Deep Indexing', _desc: 'Smart linking & PRs', _href: '/newsroom'},
              {_label: 'Live Dashboards', _desc: 'Impact at a glance', _href: '/site-health'},
              {_label: 'Health Monitors', _desc: 'A11y, _perf, _links', _href: '/site-health'},
              {_label: 'Docs & Guides', _desc: 'Technical notes', _href: '/reports/seo', _external: true}].map(_(item) => (
              item.external ? (
                <a key={_item.label} href={_item.href as string} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="text-base font-semibold">{_item.label}</div>
                  <div className="mt-1 text-sm text-white/75">{_item.desc}</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
                </a>
              ) : (
                <Link key={_item.label} href={_item.href as string}>
                  <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                    <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                    <div className="text-base font-semibold">{_item.label}</div>
                    <div className="mt-1 text-sm text-white/75">{_item.desc}</div>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                  </a>
                </Link>
              )
            ))}
          </div>
        </motion.section>

        {_/* AUTO: catalog injection for automated advertising */}
        {_/* AUTO:FRONT_INDEX_DIRECTORY_START */

<section id="auto-catalog" className="mx-auto max-w-7xl px-6 pb-16">
  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Autonomous Catalog</h2>
  <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Auto‑discovered features, _capabilities, _and resources. Kept fresh by in‑repo Node tools.</p>
  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/automation"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Automation Hub</div><div className="mt-1 text-sm text-white/75">Factories, _agents, _and live workflows</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/site-health"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Site Health</div><div className="mt-1 text-sm text-white/75">A11y, _performance, _and link dashboards</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/reports/seo"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">AI SEO Auditor</div><div className="mt-1 text-sm text-white/75">Continuous on‑site SEO improvements</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/reports/ai-trends"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">AI Trends Radar</div><div className="mt-1 text-sm text-white/75">Signals that inspire new automations</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/newsroom"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Newsroom</div><div className="mt-1 text-sm text-white/75">Curated updates and product evolution highlights</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/main/front"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Front Systems Hub</div><div className="mt-1 text-sm text-white/75">Curated, _futuristic front experience</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <a href="/reports/seo" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Docs & Guides</div><div className="mt-1 text-sm text-white/75">Technical notes and architecture</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div></a>
          <a href="/newsroom" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">AI Changelog</div><div className="mt-1 text-sm text-white/75">Summarized autonomous changes</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div></a>
          <a href="/site-health" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Live Pipelines</div><div className="mt-1 text-sm text-white/75">CI logs & artifacts 24/7</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div></a>
          <a href="https://ziontechgroup.com" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Zion Cloud</div><div className="mt-1 text-sm text-white/75">Deployments and cloud platform</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div></a>

  </div>
</section>

/* AUTO:FRONT_INDEX_DIRECTORY_END */}

        {_/* Platform Modules */}
        <motion.section
           id="modules"
           initial={_{ opacity: 0, _y: 24}}
           whileInView={_{ opacity: 1, _y: 0}}
           viewport={_{ once: true, _amount: 0.2}}
           transition={_{ duration: 0.5}}
           className="mx-auto max-w-7xl px-6 pb-16"
         >
           <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Platform Modules</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {_[
              { Icon: Rocket, _title: 'Autonomous Factories', _desc: 'Composable, _domain‑specific automation factories.', _href: '/automation'},
              {_Icon: ShieldCheck, _title: 'Guardrails', _desc: 'Defense‑in‑depth validations and policy enforcement.', _href: '/site-health'},
              {_Icon: Gauge, _title: 'Observability', _desc: 'Dashboards, _artifacts, _and live CI telemetry.', _href: '/site-health'},
              {_Icon: Activity, _title: 'SEO Ops', _desc: 'Continuous audits and safe, _suggested diffs.', _href: '/reports/seo'},
              {_Icon: Globe, _title: 'AI Intelligence', _desc: 'Trends radar to guide new automation ideas.', _href: '/reports/ai-trends'},
              {_Icon: Layers, _title: 'Workflow Composer', _desc: 'Chain factories into higher‑order systems.', _href: '/automation'},
              {_Icon: GitBranch, _title: 'Main Sync Engine', _desc: 'Small, _reviewable edits merged continuously.', _href: '/automation'},
              {_Icon: Cpu, _title: 'Zero‑Ops Runtime', _desc: 'Cloud‑native execution with no servers to manage.', _href: '/automation'},
              {_Icon: BarChart3, _title: 'Impact Analytics', _desc: 'Track outcomes and ROI from automations.', _href: '/site-health'}].map(_({_Icon, _title, _desc, _href}) => (
              <Link key={_title} href={_href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <h3 className="text-lg font-semibold">{_title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-white/75">{_desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <Link2 className="h-3.5 w-3.5" /></div>
                </a>
              </Link>
            ))}
          </div>
        </motion.section>

        {_/* Neural Feature Matrix */}
        <motion.section
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Neural Feature Matrix</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">A denser, at-a-glance atlas of what Zion ships autonomously. Every tile links to the live hub, report, or docs.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {_[
              { label: 'Automation Hub', _desc: 'Factories, _agents, _workflows', _href: '/automation'},
              {_label: 'Main Sync Engine', _desc: 'Safe diffs to main', _href: '/automation'},
              {_label: 'Zero‑Ops Cloud', _desc: 'Run in the cloud, _no servers', _href: '/automation'},
              {_label: 'Guardrails', _desc: 'Policy + safety gates', _href: '/site-health'},
              {_label: 'Site Health', _desc: 'A11y, _performance, _links', _href: '/site-health'},
              {_label: 'AI SEO Auditor', _desc: 'Continuous on‑site SEO', _href: '/reports/seo'},
              {_label: 'AI Trends Radar', _desc: 'Signals powering strategy', _href: '/reports/ai-trends'},
              {_label: 'Content Curation', _desc: 'Promos and deep links', _href: '/newsroom'},
              {_label: 'Factories Library', _desc: 'Composable building blocks', _href: '/automation'},
              {_label: 'Impact Dashboards', _desc: 'Artifacts and telemetry', _href: '/site-health'},
              {_label: 'Link Integrity', _desc: 'Broken links defender', _href: '/site-health'},
              {_label: 'Design Evolution', _desc: 'Futuristic UI upgrades', _href: '/newsroom'},
              {_label: 'Docs & Guides', _desc: 'Technical notes', _href: '/reports/seo', _external: true},
              {_label: 'AI Changelog', _desc: 'Summarized updates', _href: '/newsroom', _external: true},
                             {_label: 'Cloud Automations', _desc: 'Netlify scheduled functions', _href: '/automation'},
               {_label: 'Roadmap & Issues', _desc: "What's next", _href: '//issues', _external: true}
            ].map(_(item) => (
              item.external ? (
                <a key={_item.label} href={_item.href as string} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="text-base font-semibold">{_item.label}</div>
                  <div className="mt-1 text-sm text-white/75">{_item.desc}</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
                </a>
              ) : (
                <Link key={_item.label} href={_item.href as string}>
                  <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring">
                    <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                    <div className="text-base font-semibold">{_item.label}</div>
                    <div className="mt-1 text-sm text-white/75">{_item.desc}</div>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                  </a>
                </Link>
              )
            ))}
          </div>
        </motion.section>

        {_/* Extended Feature Directory */}
        <motion.section
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Extended Feature Directory</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">A broader tour of autonomous capabilities. Each card links to the relevant hub, report, or live workflow.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {_[
              { Icon: GitBranch, _title: 'Automated Changelogs', _desc: 'AI-authored CHANGELOG with continuous updates.', _href: '/newsroom', _external: true},
              {_Icon: Rocket, _title: 'Content Curation', _desc: 'Homepage promos and deep links generated on the fly.', _href: '/newsroom'},
              {_Icon: Search, _title: 'Deep Site Index', _desc: 'Smarter internal linking and content discovery.', _href: '/newsroom'},
              {_Icon: ShieldCheck, _title: 'Policy & Compliance', _desc: 'Safety rails and audits before changes ship.', _href: '/site-health'},
              {_Icon: BarChart3, _title: 'Impact Dashboards', _desc: 'Real-time visibility into outcomes and ROI.', _href: '/site-health'},
              {_Icon: Layers, _title: 'Factories Library', _desc: 'Composable building blocks for new automations.', _href: '/automation'},
              {_Icon: Activity, _title: 'Health Monitors', _desc: 'A11y, _links, _and performance monitored 24/7.', _href: '/site-health'},
              {_Icon: Cpu, _title: 'Zero-Ops Runtime', _desc: 'Fully managed cloud execution with no servers.', _href: '/automation'},
              {_Icon: Globe, _title: 'Intelligence Signals', _desc: 'AI + cloud trend tracking fueling new ideas.', _href: '/reports/ai-trends'}].map(_({_Icon, _title, _desc, _href, _external}) => (
              external ? (
                <a key={_title} href={_href as string} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center gap-3"><Icon className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">{_title}</h3></div>
                  <p className="mt-1 text-sm text-white/75">{_desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
                </a>
              ) : (
                <Link key={_title} href={_href as string}>
                  <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring">
                    <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                    <div className="flex items-center gap-3"><Icon className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">{_title}</h3></div>
                    <p className="mt-1 text-sm text-white/75">{_desc}</p>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                  </a>
                </Link>
              )
            ))}
          </div>
        </motion.section>

        {_/* Capability Deep Links */}
        <motion.section
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-16"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Capability Deep Links</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Jump directly to the systems that deliver each capability.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {_[
              ['SEO Automation', _'On-site scans and safe diffs to improve visibility', _'/reports/seo'], _['Site Health', _'A11y, _performance, _and resilient links at a glance', _'/site-health'], _['Automation Hub', _'Factories and live autonomous workflows', _'/automation'], _['AI Trends Radar', _'Signals inspiring new factories and experiments', _'/reports/ai-trends'], _['Newsroom', _'Curated updates and product evolution highlights', _'/newsroom'], _['Live Pipelines', _'Observe CI pipelines, _logs, _and artifacts', _'/site-health'], _['Documentation', _'Technical notes, _guides, _and changelog', _'/reports/seo'], _['AI Changelog', _'Summarized autonomous changes and highlights', _'/newsroom']].map(_([label, _desc, _href]) => (
              (href as string).startsWith('http') ? (
                <a key={label as string} href={_href as string} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-fuchsia-400/30">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="text-base font-semibold">{_label as string}</div>
                  <div className="mt-1 text-sm text-white/75">{_desc as string}</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
                </a>
              ) : (
                <Link key={_label as string} href={_href as string}>
                  <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-fuchsia-400/30">
                    <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                    <div className="text-base font-semibold">{_label as string}</div>
                    <div className="mt-1 text-sm text-white/75">{_desc as string}</div>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                  </a>
                </Link>
              )
            ))}
          </div>
        </motion.section>

        {_/* Use Cases */}
        <motion.section
          id="use-cases"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Use Cases</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {_[
              { title: 'AI SEO Auditor', _desc: 'Continuously scans pages and proposes SEO improvements with safe diffs.'},
              {_title: 'Design Beautifier', _desc: 'Upgrades UI components with modern, _cohesive visual language.'},
              {_title: 'Content Curator', _desc: 'Surfaces and promotes high‑value content with links and metadata.'},
              {_title: 'Performance Tuner', _desc: 'Optimizes bundles, _images, _and scripts for faster loads.'},
              {_title: 'A11y Guardian', _desc: 'Catches and fixes accessibility issues before they ship.'},
              {_title: 'Growth Experiments', _desc: 'Spins up micro‑experiments and measures impact automatically.'}].map(_(u) => (
              <article key={_u.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-fuchsia-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{_u.title}</h3>
                <p className="mt-1 text-sm text-white/75">{_u.desc}</p>
              </article>
            ))}
          </div>
        </motion.section>

        {_/* Stats */}
        <motion.section
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <div className="neon-divider mx-auto mb-8 h-px w-full max-w-5xl" />
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Live Impact</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {_[
              { label: 'Workflows', _value: '1, _200+', _href: '/site-health', _external: true},
              {_label: 'Commits Synced', _value: '800+', _href: '/automation'},
              {_label: 'Automated Edits', _value: '3, _500+', _href: '/automation'},
              {_label: 'Uptime', _value: '99.95%', _href: '/site-health'},
              {_label: 'A11y Checks', _value: '20k+', _href: '/site-health'},
              {_label: 'SEO Fixes', _value: '4.2k+', _href: '/reports/seo'}].map(_(item) => (
              item.external ? (
                <a key={_item.label} href={_item.href as string} target="_blank" rel="noopener" className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur hover:border-cyan-400/30">
                  <div className="text-2xl font-extrabold tracking-tight">{_item.value}</div>
                  <div className="mt-1 text-xs text-white/70">{_item.label}</div>
                </a>
              ) : (
                <Link key={_item.label} href={_item.href as string}>
                  <a className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur hover:border-cyan-400/30">
                    <div className="text-2xl font-extrabold tracking-tight">{_item.value}</div>
                    <div className="mt-1 text-xs text-white/70">{_item.label}</div>
                  </a>
                </Link>
              )
            ))}
          </div>
        </motion.section>

        {_/* Capabilities */}
        <motion.section
          id="capabilities"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Capabilities</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {_[
              { Icon: Palette, _title: 'Design Evolution', _desc: 'Autonomously beautifies UI with consistent, _futuristic patterns.', _href: '/newsroom'},
              {_Icon: BarChart3, _title: 'Performance & A11y', _desc: 'Optimizes bundles, _assets, _and accessibility with continuous checks.', _href: '/site-health'},
              {_Icon: LineChart, _title: 'Content & SEO', _desc: 'Curates content, _updates promos, _and tunes metadata for reach.', _href: '/reports/seo'},
              {_Icon: Layers, _title: 'Code Quality & Refactors', _desc: 'Lints, _fixes, _and proposes refactors with type‑safety improvements.', _href: '/automation'},
              {_Icon: Gauge, _title: 'Observability & Reports', _desc: 'Artifacts, _dashboards, _and live logs for every automation.', _href: '/site-health'},
              {_Icon: Globe, _title: 'Intelligence Signals', _desc: 'AI + cloud trend tracking to spark new factory ideas.', _href: '/reports/ai-trends'},
              {_Icon: GitBranch, _title: 'Repo Sync to Main', _desc: 'Small, _safe diffs merged continuously for momentum.', _href: '/automation'},
              {_Icon: ShieldCheck, _title: 'Guardrails & Policy', _desc: 'Organization‑wide safety rules enforced automatically.', _href: '/site-health'},
              {_Icon: Cpu, _title: 'Zero‑Ops Cloud', _desc: 'Fully managed cloud execution with no servers to babysit.', _href: '/automation'},
              {_Icon: Activity, _title: 'Automated Dependencies', _desc: 'Minor/patch upgrades proposed and merged safely.', _href: '/automation'},
              {_Icon: Search, _title: 'Broken Link Defender', _desc: 'Continuously scans and fixes link integrity issues.', _href: '/site-health'},
              {_Icon: LineChart, _title: 'Experimentation', _desc: 'Automate A/B setups and monitor telemetry automatically.', _href: '/automation'},
              {_Icon: Palette, _title: 'Design Tokens & Theming', _desc: 'Enforce consistent theming, _spacing, _and motion.', _href: '/newsroom'},
              {_Icon: Gauge, _title: 'Image Pipeline', _desc: 'Optimize and transform media assets automatically.', _href: '/site-health'}].map(_({_Icon, _title, _desc, _href}) => (
              <Link key={_title} href={_href}>
                <a className="relative block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[4rem] bg-cyan-400/10 blur-2xl" />
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <h3 className="text-lg font-semibold">{_title}</h3>
                  </div>
                  <p className="mt-1 text-sm text-white/75">{_desc}</p>
                </a>
              </Link>
            ))}
          </div>
        </motion.section>

        {_/* Why Zion */}
        <motion.section
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Why Zion</h2>
          <div className="mx-auto mt-6 max-w-5xl grid grid-cols-1 gap-4 md:grid-cols-3">
            {_[
              ['🚀', _'Speed', _'Continuous delivery to main with safe, _incremental changes.'], _['🛡️', _'Safety', _'Conservative edits and guardrails keep production stable.'], _['📈', _'Scale', _'Automatically generates new factories as your needs grow.']].map(_([icon, _title, _desc]) => (
              <div key={title as string} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="text-2xl">{_icon as string}</div>
                <div className="mt-2 text-base font-semibold">{_title as string}</div>
                <div className="mt-1 text-sm text-white/75">{_desc as string}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {_/* Value Pillars */}
        <motion.section
          id="pillars"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Value Pillars</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Four pillars that guide every autonomous change — jump into the systems behind each.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {_[
              { Icon: ShieldCheck, _title: 'Security & Safety', _desc: 'Guardrails, _policy, _and quality gates.', _href: '/site-health'},
              {_Icon: Rocket, _title: 'Speed & Momentum', _desc: 'Small diffs shipped continuously.', _href: '/automation'},
              {_Icon: Gauge, _title: 'Quality & Reliability', _desc: 'A11y, _performance, _and link integrity.', _href: '/site-health'},
              {_Icon: Layers, _title: 'Scale & Composability', _desc: 'Factories chained into higher‑order workflows.', _href: '/automation'}].map(_({_Icon, _title, _desc, _href}) => (
              <Link key={_title} href={_href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <h3 className="text-lg font-semibold">{_title}</h3>
                  </div>
                  <p className="mt-1 text-sm text-white/75">{_desc}</p>
                </a>
              </Link>
            ))}
          </div>
        </motion.section>

        {_/* Benefits */}
        <motion.section
          id="benefits"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-20"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Benefits</h2>
          {_/* Benefits ticker */}
          <div className="relative mx-auto mt-4 max-w-5xl overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/90 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/90 to-transparent" />
            <div className="marquee">
              <div className="marquee__track">
                {_[
                  { label: '24/7 autonomous progress', _href: '/automation'},
                  {_label: 'Main branch delivery', _href: '/automation'},
                  {_label: 'A11y & performance wins', _href: '/site-health'},
                  {_label: 'Continuous SEO gains', _href: '/reports/seo'},
                  {_label: 'Transparent artifacts', _href: '/site-health'},
                  {_label: 'Guardrails & policy', _href: '/site-health'},
                  {_label: 'Faster iteration loops', _href: '/newsroom'},
                  {_label: 'Lower operational toil', _href: '/automation'}].flatMap(_(i) => [i, i]).map(_(i, _idx) => (
                  <Link key={_`${i.label}-${_idx}`} href={_i.href}>
                    <a className="mx-3 my-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/80 backdrop-blur hover:bg-white/10">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> {_i.label}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-3 md:grid-cols-2">
            {_[
              '24/7 progress without human intervention', _'Rapid feedback loop with safe, _incremental edits', _'Continuous delivery directly to main branch', _'Fewer regressions via layered checks and reports', _'Higher velocity with automated maintenance', _'Reduced costs via zero‑ops and automated QA', _'Consistent design language and UX quality', _'Transparent artifacts and live workflow logs', _'Faster experiment velocity with measurable impact', _'Improved search visibility via continuous SEO', _'Happier users thanks to performance & a11y wins', _'Lower operational risk through guardrails', _'Improved discoverability via deep indexing and SEO', _'Happier engineers with less toil and more creation', _'Confident shipping through automated guardrails', _'Predictable quality gates and SLOs upheld automatically', _'Auditability for compliance with full traceability', _'Happier teams: less toil, _more product value', _'Automated dependency upgrades and security scans', _'Clear analytics and downloadable artifacts for every run', _'Composable factories accelerate new initiatives'].map(_(b) => (
              <div key={b} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                <span className="text-sm text-white/80">{_b}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {_/* Benefits in Practice */}
        <motion.section
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-16"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Benefits in Practice</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">See where each benefit shows up in the product.</p>
          <div className="mx-auto mt-6 max-w-5xl grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {_[
              { label: '24/7 progress', _desc: 'Agents keep shipping while you sleep', _href: '/automation'},
              {_label: 'Rapid feedback loop', _desc: 'Tight iteration cycles on UX & code', _href: '/newsroom'},
              {_label: 'Main branch delivery', _desc: 'Small, _safe diffs merged continuously', _href: '/site-health', _external: true},
              {_label: 'Fewer regressions', _desc: 'Layered checks catch issues early', _href: '/site-health'},
              {_label: 'Increased reach', _desc: 'Continuous SEO improvements', _href: '/reports/seo'},
              {_label: 'Strategic insights', _desc: 'AI + cloud trend tracking', _href: '/reports/ai-trends'}].map(_(b) => (
              b.external ? (
                <a key={_b.label} href={_b.href as string} target="_blank" rel="noopener" className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md hover:border-cyan-400/30">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                  <span className="text-sm text-white/80"><span className="font-semibold text-white">{_b.label}</span> — {_b.desc} <span className="ml-1 text-cyan-300/90">↗</span></span>
                </a>
              ) : (
                <Link key={_b.label} href={_b.href as string}>
                  <a className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md hover:border-cyan-400/30">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                    <span className="text-sm text-white/80"><span className="font-semibold text-white">{_b.label}</span> — {_b.desc} <span className="ml-1 text-cyan-300/90">→</span></span>
                  </a>
                </Link>
              )
            ))}
          </div>
        </motion.section>

        {_/* Tailored Value by Team */}
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Tailored Value by Team</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {_[
              { title: 'Developers', _desc: 'Code quality, _refactors, _upgrades, _reliability', _href: '/automation'},
              {_title: 'Product', _desc: 'Faster UX improvements, _experiments, _insights', _href: '/newsroom'},
              {_title: 'Marketing', _desc: 'SEO automation, _content curation, _reach', _href: '/reports/seo'},
              {_title: 'Operations', _desc: 'A11y, _performance, _and link‑health dashboards', _href: '/site-health'}].map(_(card) => (
              <Link key={_card.title} href={_card.href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold">{_card.title}</h3>
                  <p className="mt-1 text-sm text-white/75">{_card.desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <Link2 className="h-3.5 w-3.5" /></div>
                </a>
              </Link>
            ))}
          </div>
        </section>

        {_/* Ecosystem & Integrations */}
        <motion.section
          id="reports"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Ecosystem & Integrations</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a href="/site-health" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-2">
                <Rocket className="h-5 w-5 text-cyan-300" />
                <h3 className="text-lg font-semibold">GitHub Actions</h3>
              </div>
              <p className="mt-1 text-sm text-white/75">Live pipelines, logs, and artifacts powering automations.</p>
              <div className="mt-3 text-xs text-cyan-300/90">Open →</div>
            </a>
            <a href="https://www.netlify.com/" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-cyan-300" />
                <h3 className="text-lg font-semibold">Netlify</h3>
              </div>
              <p className="mt-1 text-sm text-white/75">Zero‑ops hosting and functions for maintenance schedules.</p>
              <div className="mt-3 text-xs text-cyan-300/90">Learn more →</div>
            </a>
            <a href="https://supabase.com/" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-cyan-300" />
                <h3 className="text-lg font-semibold">Supabase</h3>
              </div>
              <p className="mt-1 text-sm text-white/75">Realtime data and storage for emerging automation needs.</p>
              <div className="mt-3 text-xs text-cyan-300/90">Explore →</div>
            </a>
            <a href="https://www.framer.com/motion/" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-cyan-300" />
                <h3 className="text-lg font-semibold">Framer Motion</h3>
              </div>
              <p className="mt-1 text-sm text-white/75">Futuristic micro‑interactions and motion design system.</p>
              <div className="mt-3 text-xs text-cyan-300/90">Docs →</div>
            </a>
          </div>
        </motion.section>

        {_/* Quality Gates & Guardrails */}
        <motion.section
          id="guardrails"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-16"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Quality Gates & Guardrails</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {_[
              { title: 'Accessibility', _desc: 'Automated checks and fixes for WCAG compliance.', _href: '/site-health'},
              {_title: 'Link Integrity', _desc: 'Broken links detected before release.', _href: '/site-health'},
              {_title: 'Performance', _desc: 'Budgets enforced and improved continuously.', _href: '/site-health'},
              {_title: 'Safe Diffs', _desc: 'Conservative, _reviewable changes synced to main.', _href: '/automation'}].map(_(g) => (
              <Link key={_g.title} href={_g.href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-fuchsia-400/30">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold">{_g.title}</h3>
                  <p className="mt-1 text-sm text-white/75">{_g.desc}</p>
                </a>
              </Link>
            ))}
          </div>
        </motion.section>

        {_/* Tech */}
        <motion.section
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-16"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md">
            <p className="text-white/70">Powered by modern cloud and AI tooling</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-6">
              {_['Next.js', _'TypeScript', _'Tailwind', _'Framer Motion', _'Supabase', _'Netlify'].map(_(t) => (
                <span key={t} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] glow-pulse">
                  {_t}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        {_/* Quick Start */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Quick Start</h2>
          <div className="mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-4 md:grid-cols-4">
            {_[
              ['Explore', _'Browse live automations', _'/automation'], _['Audit', _'Check site health', _'/site-health'], _['Optimize', _'Run the SEO auditor', _'/reports/seo'], _['Learn', _'Follow AI trends', _'/reports/ai-trends']].map(_([title, _desc, _href]) => (
              <Link key={title as string} href={_href as string}>
                <a className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 text-left backdrop-blur-xl hover:border-cyan-400/30">
                  <div className="text-sm font-semibold text-white">{_title as string}</div>
                  <div className="mt-1 text-xs text-white/70">{_desc as string}</div>
                </a>
              </Link>
            ))}
          </div>
        </section>

        {_/* CTA */}
        <motion.section
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-24"
        >
          <div className="animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl">
            <h3 className="text-2xl font-bold">Ready to build with autonomous cloud agents?</h3>
            <p className="mx-auto mt-2 max-w-2xl text-white/80">Scale development with a tireless fleet of self‑improving automations.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/automation"><a className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover:bg-white">Get Started</a></Link>
              <Link href="/automation"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">View Automations</a></Link>
            </div>
          </div>
        </motion.section>

        {_/* AUTO-GENERATED: FRONT_FUTURIZER_START */}

        <section id="front-futurizer" className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore More — Features, Capabilities, Benefits</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">A quick portal to the most impactful areas across Zion. Every tile and list item links to a live hub, report, or doc.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="text-lg font-semibold">Features</div>
              <ul className="mt-3 space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">Self‑improving autonomous agents</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">Repo sync to main with safe diffs</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">Zero‑ops, cloud‑native runtime</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">Defense‑in‑depth guardrails</span>
            </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="text-lg font-semibold">Capabilities</div>
              <ul className="mt-3 space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">Code quality and refactors</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">A11y and performance tuning</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">Content curation and SEO</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">Observability and analytics</span>
            </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="text-lg font-semibold">Benefits</div>
              <ul className="mt-3 space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">24/7 progress without manual ops</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">Faster feedback with small edits</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">Higher confidence via layered checks</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">Links to hubs, reports, and docs</span>
            </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <Link key="Automation Hub" href="/automation">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Automation Hub</div>
                <div className="mt-1 text-sm text-white/75">Factories, agents, and live workflows</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>

            <Link key="Site Health" href="/site-health">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Site Health</div>
                <div className="mt-1 text-sm text-white/75">A11y, performance, and link integrity</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>

            <Link key="SEO Audit" href="/reports/seo">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">SEO Audit</div>
                <div className="mt-1 text-sm text-white/75">Continuous on‑site improvements and artifacts</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>

            <Link key="AI Trends" href="/reports/ai-trends">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">AI Trends</div>
                <div className="mt-1 text-sm text-white/75">Signals inspiring new factories and experiments</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>

            <Link key="Newsroom" href="/newsroom">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Newsroom</div>
                <div className="mt-1 text-sm text-white/75">Autonomous updates and product evolution</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>

            <a key="Documentation" href="/reports/seo" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-base font-semibold">Documentation</div>
              <div className="mt-1 text-sm text-white/75">Technical notes and guides</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>

            <a key="AI Changelog" href="/newsroom" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-base font-semibold">AI Changelog</div>
              <div className="mt-1 text-sm text-white/75">Summarized autonomous changes and highlights</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>

            <a key="Live Pipelines" href="/site-health" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-base font-semibold">Live Pipelines</div>
              <div className="mt-1 text-sm text-white/75">Observe CI pipelines, logs, and artifacts</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>
          </div>
        </section>
{_/* AUTO-GENERATED: FRONT_FUTURIZER_END */}

{_/* Footer */}
        <footer className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="text-lg font-bold tracking-wide">
                <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-white/70">
                <Link href="/automation"><a>Automations</a></Link>
                <Link href="/newsroom"><a>Newsroom</a></Link>
                <Link href="/site-health"><a>Site Health</a></Link>
                <a href="/" target="_blank" rel="noopener">GitHub</a>
              </div>
            </div>
          </div>
        </footer>

        {_/* AI Agents Gallery */}
        <motion.section
          id="agents"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">AI Agents Gallery</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Meet the autonomous agents powering your outcomes. Each card links to a live system.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {_[
              { Icon: Search, _title: 'AI SEO Auditor', _desc: 'Continuously improves on‑site SEO with safe diffs.', _href: '/reports/seo'},
              {_Icon: Link2, _title: 'Link Healer', _desc: 'Finds and fixes broken links with dashboards.', _href: '/site-health'},
              {_Icon: Palette, _title: 'Design Beautifier', _desc: 'Evolves UI with cohesive, _futuristic patterns.', _href: '/newsroom'},
              {_Icon: Gauge, _title: 'Performance Tuner', _desc: 'Optimizes bundles and runtime for speed.', _href: '/site-health'},
              {_Icon: Layers, _title: 'Factory Composer', _desc: 'Chains automations into higher‑order workflows.', _href: '/automation'},
              {_Icon: GitBranch, _title: 'Main Sync', _desc: 'Ships small, _safe diffs to main continuously.', _href: '/automation'}].map(_({_Icon, _title, _desc, _href}) => (
              <Link key={_title} href={_href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <h3 className="text-lg font-semibold">{_title}</h3>
                  </div>
                  <p className="mt-1 text-sm text-white/75">{_desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                </a>
              </Link>
            ))}
          </div>
        </motion.section>

        {_/* Capabilities Matrix */}
        <motion.section
          id="capability-matrix"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-16"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Capabilities Matrix</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Explore a broader catalog of Zion capabilities. Each tile links to a live hub, report, or workflow.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {_[
              { title: 'Autonomous Agents', _desc: 'Self‑improving cloud workers', _href: '/automation'},
              {_title: 'Repo Sync to Main', _desc: 'Safe, _continuous delivery', _href: '/automation'},
              {_title: 'AI SEO Auditor', _desc: 'On‑site improvements daily', _href: '/reports/seo'},
              {_title: 'AI Trends Radar', _desc: 'Signals for new factories', _href: '/reports/ai-trends'},
              {_title: 'Site Health', _desc: 'A11y, _performance, _links', _href: '/site-health'},
              {_title: 'Guardrails', _desc: 'Defense‑in‑depth quality', _href: '/site-health'},
              {_title: 'Design Evolution', _desc: 'Cohesive futuristic UI', _href: '/newsroom'},
              {_title: 'Observability', _desc: 'Dashboards & artifacts', _href: '/site-health'},
              {_title: 'Analytics', _desc: 'Outcomes & insights', _href: '/site-health'},
              {_title: 'Link Integrity', _desc: 'Broken link healing', _href: '/site-health'},
              {_title: 'Factory Composer', _desc: 'Higher‑order workflows', _href: '/automation'},
              {_title: 'Docs & Changelog', _desc: 'Technical notes & AI log', _href: '/reports/seo', _external: true}].map(_(item) => (
              item.external ? (
                <a key={_item.title} href={_item.href as string} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="text-base font-semibold">{_item.title}</div>
                  <div className="mt-1 text-sm text-white/75">{_item.desc}</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
                </a>
              ) : (
                <Link key={_item.title} href={_item.href as string}>
                  <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                    <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                    <div className="text-base font-semibold">{_item.title}</div>
                    <div className="mt-1 text-sm text-white/75">{_item.desc}</div>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                  </a>
                </Link>
              )
            ))}
          </div>
        </motion.section>

        {_/* Benefits Directory */}
        <motion.section
          id="benefits-directory"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-16"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Benefits Directory</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Outcome‑focused advantages with direct links to the systems that deliver them.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {_[
              { label: '24/7 Progress', _desc: 'Always‑on autonomous delivery', _href: '/automation'},
              {_label: 'Safe Incremental Diffs', _desc: 'Small, _reviewable changes', _href: '/automation'},
              {_label: 'Zero‑Ops Cloud‑Native', _desc: 'No servers to babysit', _href: '/automation'},
              {_label: 'Layered Quality Checks', _desc: 'Guardrails & audits', _href: '/site-health'},
              {_label: 'Faster Iteration Loops', _desc: 'Shorten idea‑to‑impact', _href: '/newsroom'},
              {_label: 'SEO Visibility Gains', _desc: 'Continuous improvements', _href: '/reports/seo'}].map(_(b) => (
              <Link key={_b.label} href={_b.href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
                    <h3 className="text-base font-semibold">{_b.label}</h3>
                  </div>
                  <p className="mt-1 text-sm text-white/75">{_b.desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Explore <span aria-hidden>→</span></div>
                </a>
              </Link>
            ))}
          </div>
        </motion.section>

        {_/* AUTO-GENERATED: FRONT_ADS_START */}

        <section id="auto-ads" className="mx-auto max-w-7xl px-6 pb-16">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Auto‑advertised Highlights</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Link href="/automation"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">Automation Hub</div><div className="mt-1 text-sm text-white/75">Factories, agents, and live workflows</div></a></Link>
            <Link href="/site-health"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">Site Health</div><div className="mt-1 text-sm text-white/75">A11y, performance, and link integrity</div></a></Link>
            <Link href="/reports/seo"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">SEO Audit</div><div className="mt-1 text-sm text-white/75">Continuous on‑site improvements</div></a></Link>
            <Link href="/reports/ai-trends"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">AI Trends</div><div className="mt-1 text-sm text-white/75">Ecosystem intelligence signals</div></a></Link>
            <Link href="/newsroom"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">Newsroom</div><div className="mt-1 text-sm text-white/75">Autonomous updates & evolution</div></a></Link>
            <Link href="/main/front"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">Front Systems Hub</div><div className="mt-1 text-sm text-white/75">Curated futuristic front experience</div></a></Link>
            <Link href="/.netlify/functions/deps-auto-upgrade-runner"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">Deps Auto‑Upgrade</div><div className="mt-1 text-sm text-white/75">Keeps dependencies fresh safely</div></a></Link>
            <Link href="/.netlify/functions/frontpage-advertiser"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">Frontpage Advertiser</div><div className="mt-1 text-sm text-white/75">Refreshes front promos automatically</div></a></Link>
            <a href="https://github.com/Zion-Holdings/zion.app/actions" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">Live Pipelines</div><div className="mt-1 text-sm text-white/75">CI logs & artifacts</div></a>
            <a href="https://github.com/Zion-Holdings/zion.app/tree/main/docs" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">Docs & Guides</div><div className="mt-1 text-sm text-white/75">Technical notes</div></a>
          </div>
        </section>
 {_/* AUTO-GENERATED: FRONT_ADS_END */}
 
        {_/* Feature Highlights (new) */}
        <motion.section
          id="feature-highlights"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Feature Highlights</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Explore deep links across the app that showcase our capabilities and benefits.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {_[
              { title: 'SEO Audit', _desc: 'Continuous on‑site improvements and artifacts.', _href: '/reports/seo'},
              {_title: 'AI Trends', _desc: 'Signals that inspire new automation factories.', _href: '/reports/ai-trends'},
              {_title: 'Site Health', _desc: 'A11y, _performance and link integrity.', _href: '/site-health'},
              {_title: 'Automation Hub', _desc: 'Factories, _agents and live workflows.', _href: '/automation'},
              {_title: 'Newsroom', _desc: 'Autonomous updates and product evolution.', _href: '/newsroom'},
              {_title: 'Front Systems Hub', _desc: 'Futuristic templates, _effects and layouts.', _href: '/main/front'}].map(_(card) => (
              <a key={_card.title} href={_card.href} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{_card.title}</h3>
                <p className="mt-1 text-sm text-white/75">{_card.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            ))}
          </div>
        </motion.section>

        {_/* Reports */}
        <section id="reports" className="mx-auto max-w-7xl px-6 pb-16">
          {_/* existing reports content */}
        </section>

        {_/* New Intelligent Automations */}
        <section id="automations" className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-2xl font-bold tracking-wide text-white/90 text-center">New Intelligent Automations</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {_[
              { title: 'SEO Audit Runner', _href: '/.netlify/functions/seo-audit-runner'},
              {_title: 'AI Trends Radar', _href: '/.netlify/functions/ai-trends-radar-runner'},
              {_title: 'Front Index Directory Builder', _href: '/.netlify/functions/front-index-directory-builder'},
              {_title: 'Revenue Ideas Promoter', _href: '/.netlify/functions/revenue-ideas-promoter'}].map(_(tool) => (
              <a key={_tool.title} href={_tool.href} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 hover:border-cyan-400/30 hover:text-white transition-colors">
                <div className="text-base font-semibold text-white">{_tool.title}</div>
                <div className="mt-1 text-xs text-white/70">Open ↗</div>
              </a>
            ))}
          </div>
        </section>

      </div>
      {_/* Back to top */}
      {_showToTop && (_<button
          onClick={() => window.scrollTo({ top: 0, _behavior: 'smooth'})}
          className="fixed bottom-24 right-4 z-40 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-3 py-2 text-xs font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]"
          aria-label="Scroll to top"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
}

/* AUTO-GENERATED: FRONT_ACTIONS_START */
<section className="mx-auto max-w-7xl px-6 pb-14">
  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">GitHub Actions — Live Automations</h2>
  <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Cloud‑native workflows that maintain, heal, and evolve the repo automatically.</p>
  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/actions-catalog.yml" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Actions Catalog & README</div>
                <div className="mt-1 text-sm text-white/75">Scheduled: */5 * * * *</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/auto-fix.yml" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Autonomous Auto-Fix</div>
                <div className="mt-1 text-sm text-white/75">Scheduled: */30 * * * *</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/automerge-main.yml" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Auto-merge to main</div>
                <div className="mt-1 text-sm text-white/75">On push / schedule</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/autonomous-meta.yml" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Autonomous Meta Factory</div>
                <div className="mt-1 text-sm text-white/75">Scheduled: */30 * * * *</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/ci-self-heal.yml" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">CI Self-Heal</div>
                <div className="mt-1 text-sm text-white/75">On push / schedule</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/ci.yml" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">CI</div>
                <div className="mt-1 text-sm text-white/75">On push / schedule</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/cloud-maintenance.yml" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Cloud Maintenance Automations</div>
                <div className="mt-1 text-sm text-white/75">Scheduled: */30 * * * *</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/cloud-marketing.yml" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Cloud Marketing Automations</div>
                <div className="mt-1 text-sm text-white/75">Scheduled: 0 */6 * * *</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/continuous-improvement.yml" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Continuous Improvement</div>
                <div className="mt-1 text-sm text-white/75">Scheduled: 0 */6 * * *</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/cursor-rules-autoupdate.yml" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Cursor Rules Auto Update</div>
                <div className="mt-1 text-sm text-white/75">Scheduled: 17 */6 * * *</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/dependency-maintenance.yml" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Dependency Maintenance</div>
                <div className="mt-1 text-sm text-white/75">Scheduled: 17 5 * * *</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/diverse-agent-matrix.yml" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Diverse Agent Matrix</div>
                <div className="mt-1 text-sm text-white/75">Scheduled: 7 * * * *</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
  </div>
</section>
/* AUTO-GENERATED: FRONT_ACTIONS_END */
