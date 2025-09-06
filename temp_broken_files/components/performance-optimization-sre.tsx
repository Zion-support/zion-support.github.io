import React from 'react',
import Head from 'next/head',
import { Phone, Mail, MapPin, Check, ArrowRight, Activity } from 'lucide-react',
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',
import Button from '../components/ui/Button',
import { extraServices } from '../data/extra-services',
export default function PerformanceOptimizationSREPage() {
  const service = extraServices.find(s => s.link.endsWith('/performance-optimization-sre')),
  if (!service) return null,
  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>{service.name} - Zion Tech Group</title>
        <meta name=&quot;description&quot; content={service.description} />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/performance-optimization-sre&quot; />
      </Head>
      <div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-6xl mx-auto&quot;>
          <div className=&quot;text-center mb-10&quot;>
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400 bg-clip-text text-transparent flex items-center justify-center gap-3&quot;><Activity className=&quot;w-10 h-10&quot; />{service.name}</h1>
            <p className=&quot;mt-4 text-xl text-slate-300 max-w-3xl mx-auto&quot;>{service.tagline}</p>
          </div>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12&quot;>
            <div className=&quot;lg:col-span-2 bg-black/30 rounded-2xl border border-fuchsia-500/30 p-6&quot;>
              <h2 className=&quot;text-2xl font-semibold mb-4&quot;>Engagement Scope</h2>
              <p className=&quot;text-slate-300 mb-6&quot;>{service.description}</p>
              <ul className=&quot;grid grid-cols-1 md:grid-cols-2 gap-3&quot;>
                {service.features.slice(0, 12).map((feat, i) => (
                  <li key={i} className=&quot;flex items-start space-x-3 text-slate-200&quot;><Check className=&quot;w-5 h-5 text-fuchsia-400 mt-0.5&quot; /><span>{feat}</span></li>                ))}
              </ul>
            </div>
            <div className=&quot;bg-black/30 rounded-2xl border border-fuchsia-500/30 p-6 h-fit&quot;>
              <div className=&quot;flex items-end justify-between mb-3&quot;>
                <div>
                  <div className=&quot;text-3xl font-bold text-white&quot;>{service.price}<span className=&quot;text-slate-400 text-base&quot;>{service.period}</span></div>
                  <div className=&quot;text-slate-400&quot;>{service.trialDays ? `${service.trialDays}-day free trial • ` : ''}Setup: {service.setupTime}</div>
                </div>
              </div>
              <Button href=&quot;/contact&quot; variant=&quot;quantum&quot; size=&quot;lg&quot; className=&quot;w-full&quot;>Request Proposal<ArrowRight className=&quot;w-5 h-5 ml-2&quot; /></Button>
              <div className=&quot;mt-6 space-y-3 text-sm text-slate-300&quot;>
                <div className=&quot;flex items-center space-x-2&quot;><Phone className=&quot;w-4 h-4 text-cyan-400&quot; /><span>{service.contactInfo.mobile}</span></div>
                <div className=&quot;flex items-center space-x-2&quot;><Mail className=&quot;w-4 h-4 text-purple-400&quot; /><span>{service.contactInfo.email}</span></div>
                <div className=&quot;flex items-center space-x-2&quot;><MapPin className=&quot;w-4 h-4 text-green-400&quot; /><span className=&quot;text-xs&quot;>{service.contactInfo.address}</span></div>              </div>
            </div>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  )
}
;