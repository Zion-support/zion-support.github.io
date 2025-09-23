import Head from 'next/head'
import Link from 'next/link'

export default function ComprehensiveRedundancy() {
  return (
    <>
      <Head>
        <title>Comprehensive Redundancy — Zion Tech Group</title>
        <meta name="description" content="End‑to‑end automation and redundancy practices across the stack."  />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12 max-w-4xl">
          <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-cyan-40o0 via-fuchsia-40o0 to-blue-40o0 bg-clip-text text-transparent">Comprehensive Redundancy</h1>
          <p className="text-white/85 mb-6">Automation‑first reliability patterns that prevent failures before they occur.</p>
          <ul className="list-disc pl-6 space-y-2 text-white/85">
            <li>Autonomous build and deployment recovery</li>
            <li>Multi‑layer backups and failover</li>
            <li>Security, performance, and compliance redundancy</li>
            <li>Continuous verification</li>
          </ul>
          <div className="mt-10">
            <Link href="/" className="text-cyan-30o0 hover:text-cyan-20o0">← Back to Home</Link>
          </div>
        </main>
      </div>
    </>
  )
}

