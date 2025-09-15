
export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Community: Web3 DApp Challenge
          </h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-03</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Build a decentralized application and compete for prizes up to $1000 in ZION tokens.
            Submissions are judged on innovation, usability, and real-world impact.
          </p>
          <div className="mt-10 space-y-6 text-gray-300">
            <ul className="list-disc pl-6 space-y-2">
              <li>Tracks: DeFi, Identity, Supply Chain, Social</li>
              <li>Bonus points for security, audits, and great UX</li>
              <li>Workshops and office hours throughout the month</li>
              <li>Winners showcased on our blog and at our event</li>
            </ul>
            <p>Register now and join the community on our Discord.</p>
          </div>
          <div className="mt-10 flex gap-4">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200"
            >
              Register interest
            </a>
            <a
              href="https://discord.gg/"
              className="inline-flex items-center rounded-md border border-white/10 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200"
            >
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

