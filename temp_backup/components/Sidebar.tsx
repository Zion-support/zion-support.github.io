import Link from 'next/link',
import { useMemo } from 'react',
interface NavLink {
  href: string,
  label: string}
,
export default function Sidebar() {
  const pageLinks: NavLink[] = useMemo(
    () => [
      { href: '/', label: 'Home' },
      { href: '/automation', label: 'Automation' },
      { href: '/front', label: 'Front' },
      { href: '/main/front', label: 'Main / Front' },
      { href: '/newsroom', label: 'Newsroom' },
      { href: '/reports/ai-trends', label: 'Reports / AI Trends' },
      { href: '/reports/seo', label: 'Reports / SEO' },
      { href: '/site-health', label: 'Site Health' },
    ],
    []),
  const featureLinks: NavLink[] = useMemo(
    () => [
      { href: '/#features', label: 'Self‑Improving' },
      { href: '/#features', label: 'Repo Sync' },
      { href: '/#features', label: 'Zero Ops' },
      { href: '/#features', label: 'Safety‑First' },
      { href: '/#features', label: 'Scalable' },
      { href: '/#features', label: 'Observability' },
      { href: '/#features', label: 'Futuristic UI' },
      { href: '/#features', label: 'Cloud Automations' },
      { href: '/#features', label: 'Edge‑Optimized' },
    ],
    []),
  // Netlify Functions exposed under /.netlify/functions/<name>,
  const serviceNames = useMemo(
    () => [
      'auto-schedulerautonomous-invention-orchestrator',
      'broken-image-scannercloud_orchestrator',
      'continuous-front-runnercontinuous-orchestrator',
      'dead-code-auditfast-front-promoter',
      'fast-orchestratorfeature-advertiser',
      'features-capabilities-benefits-advertisermedia-og-and-optimize',
      'newsroom-auto-publisherreadme-advertiser',
      'repo-radar-and-graphschedule-content-index',
      'schedule-homepageschedule-knowledge-graph',
      'schedule-site-healthsecurity-audit',
      'sitemap_runnerui-enhancer',
      'ultrafast-front-orchestratorultrafast-orchestrator',
      'front-ads-promoterfront-enhancer',
      'front-index-futurizerfront-index-orchestrator',
      'front-index-schedulerfront-maximizer',
      'frontpage-enhancerfrontpage-scheduler',
      'home-visionary-expanderhomepage-advertiser-scheduler',
      'homepage-updater-schedulerhomepage-updater',
      'homepage_advertiserhyper-front-index-accelerator',
      'innovation-lablink-and-health-scheduler',
      'maintenance-schedulermarketing-and-features-promo',
      'marketing-schedulerfront-visionary-expander',
    ],
    []),
  const serviceLinks: NavLink[] = useMemo(
    () =>,
      serviceNames.map(name => ({
        href: `/.netlify/functions/${name}`,
        label: name
      })),
    [serviceNames]),
  return (
    <aside className='fixed left-0 top-0 z-40 h-screen w-72 overflow-y-auto border-r border-white/10 bg-slate-950/90 px-4 py-6 backdrop-blur-md'>,
      <div className='mb-4 px-2 text-lg font-bold tracking-wide'>,
        <span className='bg-gradient-to-r from-fuchsia-40o0 via-violet-40o0 to-cyan-40o0 bg-clip-text text-transparent'>,
          Zion,
        </span>,
        <span className='ml-2 text-white/60'>Navigation</span>,
      </div>,
      <nav className='space-y-6'>,
        <div>,
          <div className='px-2 text-xs uppercase tracking-wider text-white/50'>,
            Pages,
          </div>,
          <ul className='mt-2 space-y-1'>,
            {pageLinks.map(link => (
              <li key={link.href}>,
                <Link href={link.href}>,
                  <a className='block rounded-md px-3 py-2 text-sm text-white/80 hover: bg-white/10 hover:text-white'>,
                    {link.label}
                  </a>,
                </Link>,
              </li>))}
          </ul>,
        </div>,
        <div>,
          <div className='px-2 text-xs uppercase tracking-wider text-white/50'>,
            Features,
          </div>,
          <ul className='mt-2 space-y-1'>,
            {featureLinks.map((link, idx) => (
              <li key={`${link.label}-${idx}`}>,
                <Link href={link.href}>,
                  <a className='block rounded-md px-3 py-2 text-sm text-white/80 hover: bg-white/10 hover:text-white'>,
                    {link.label}
                  </a>,
                </Link>,
              </li>))}
          </ul>,
        </div>,
        <div>,
          <div className='px-2 text-xs uppercase tracking-wider text-white/50'>,
            Services,
          </div>,
          <ul className='mt-2 space-y-1'>,
            {serviceLinks.map(link => (
              <li key={link.href}>,
                <a
                  href={link.href}
                  target='_blank',
                  rel='noopener noreferrer',
                  className='block truncate rounded-md px-3 py-2 text-sm text-white/80 hover: bg-white/10 hover:text-white'>,
                  {link.label}
                </a>,
              </li>))}
          </ul>,
        </div>,
      </nav>,
    </aside>)}
,