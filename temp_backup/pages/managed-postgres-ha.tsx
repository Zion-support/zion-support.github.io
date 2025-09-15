import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';

export default function ManagedPostgresHA() {
	return (
		<div className="relative isolate">
			<section className="px-6 lg:px-10 py-16 lg:py-24">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-3xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Managed Postgres HA</h1>
					<p className="mt-4 text-gray-300 max-w-3xl">Fully managed PostgreSQL with high availability, automated failover, PITR backups, encryption, observability, and performance tuning. Delivered on AWS/GCP/Azure or on-prem Kubernetes.</p>

					<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{ title: 'HA & Failover', desc: 'Multi-AZ replicas, Patroni/pg_auto_failover, health checks, and automated promotion.' },
							{ title: 'Backups & PITR', desc: 'Continuous archiving with WAL-G, object storage retention, and disaster recovery runbooks.' },
							{ title: 'Security', desc: 'TLS everywhere, IAM auth, TDE, row-level security, audit logging, and CIS benchmarks.' },
							{ title: 'Performance', desc: 'Query plans, index advisory, autovacuum tuning, connection pooling (PgBouncer).' },
							{ title: 'Observability', desc: 'pg_stat sampling, Prometheus/Grafana dashboards, slow query alerts, SLOs.' },
							{ title: 'Migrations', desc: 'Minimal-downtime migrations with logical replication and blue/green strategy.' }
						].map((f) => (
							<div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
								<h3 className="text-lg font-semibold text-white">{f.title}</h3>
								<p className="mt-2 text-sm text-gray-300">{f.desc}</p>
							</div>
						))}
					</div>

					<div className="mt-14">
						<h2 className="text-2xl font-semibold">Pricing</h2>
						<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="rounded-2xl border border-emerald-400/30 p-6">
								<h3 className="text-xl font-bold">Starter (2 vCPU)</h3>
								<p className="mt-2 text-gray-300">HA pair + backups, up to ~100 GB.</p>
								<p className="mt-4 text-3xl font-bold">$390<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-cyan-400/30 p-6">
								<h3 className="text-xl font-bold">Growth (4 vCPU)</h3>
								<p className="mt-2 text-gray-300">HA + PITR + metrics, up to ~500 GB.</p>
								<p className="mt-4 text-3xl font-bold">$890<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-blue-400/30 p-6">
								<h3 className="text-xl font-bold">Enterprise</h3>
								<p className="mt-2 text-gray-300">Multi-region, compliance (SOC2/HIPAA), 24/7 SRE.</p>
								<p className="mt-4 text-3xl font-bold">Custom</p>
							</div>
						</div>
						<p className="mt-4 text-sm text-gray-400">Market references: <a className="underline hover:text-cyan-300" href="https://www.crunchydata.com/products/crunchy-bridge" target="_blank" rel="noreferrer">Crunchy Bridge</a>, <a className="underline hover:text-cyan-300" href="https://aiven.io/postgresql" target="_blank" rel="noreferrer">Aiven</a>, <a className="underline hover:text-cyan-300" href="https://cloud.google.com/sql/pricing" target="_blank" rel="noreferrer">Cloud SQL</a>.</p>
					</div>

					<div className="mt-14 flex flex-wrap items-center gap-4">
						<Link href="/contact" className="px-5 py-3 rounded-lg bg-emerald-400 text-black font-semibold">Get a Managed Cluster</Link>
						<a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg border border-white/20">Email: kleber@ziontechgroup.com</a>
						<span className="text-gray-400">Call: +1 302 464 0950</span>
					</div>
				</div>
			</section>
		</div>
	);
=======
import Head from 'next/head';
import { Phone, Mail, MapPin, Check, ArrowRight, Database, Star } from 'lucide-react';
import Layout from '../components/layout/Layout';

import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';

export default function ManagedPostgresHAPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/managed-postgres-ha'));
  if (!service) return null;

  return (
    <Layout>
      <Head>
        <title>{service.name} - Zion Tech Group</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href="https://ziontechgroup.com/managed-postgres-ha" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent flex items-center justify-center gap-3 w-10 h-10"><Database />{service.name}</h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">{service.tagline}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-emerald-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-4">What we manage</h2>
              <p className="text-slate-300 mb-6">{service.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.slice(0, 12).map((feat, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-200 w-5 h-5 text-emerald-400 mt-0.5"><Check /><span>{feat}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl border border-emerald-500/30 p-6 h-fit">
              <div className="flex items-end justify-between mb-3">
                <div>
                  <div className="text-3xl font-bold text-white text-slate-400 text-base">{service.price}<span >{service.period}</span></div>
                  <div className="text-slate-400">{service.trialDays}-day free trial • Setup: {service.setupTime}</div>
                </div>
                <div className="flex items-center text-yellow-400 w-4 h-4 mr-1"><Star />{service.rating.toFixed(1)}</div>
              </div>
              <a href="/contact" className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 w-5 h-5 ml-2">Request Assessment<ArrowRight /></a>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex items-center space-x-2 w-4 h-4 text-cyan-400 hover:text-white"><Phone /><a href={`tel:${service.contactInfo.mobile.replace(/[^+\\d]/g, '')}`} >{service.contactInfo.mobile}</a></div>
                <div className="flex items-center space-x-2 w-4 h-4 text-purple-400 hover:text-white"><Mail /><a href={`mailto:${service.contactInfo.email}`} >{service.contactInfo.email}</a></div>
                <div className="flex items-center space-x-2 w-4 h-4 text-green-400 text-xs hover:text-white"><MapPin /><a href={`https://maps.google.com/?q=${encodeURIComponent(service.contactInfo.address)}`} target="_blank" rel="noopener noreferrer" >{service.contactInfo.address}</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
>>>>>>> origin/auto/autonomy-17186719616
}

