export default function UpdateGovernanceUpgrades() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <a href="/updates" className="text-blue-400 hover:text-blue-300 text-sm">← Back to Updates</a>
        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">Governance Upgrades: Dual-Vote and Delegates</h1>
        <div className="text-zinc-400 mb-8">2025-09-07</div>
        <div className="prose prose-invert max-w-none">
          <p>Governance now supports dual local/global voting strategies plus delegate workflows.</p>
          <ul>
            <li>Local council and global token-weighted votes per proposal</li>
            <li>Delegate assignment, transparency, and performance stats</li>
            <li>Granular proposal stages and configurable quorum rules</li>
            <li>Notification hooks and audit log exports</li>
          </ul>
          <p>Configure under Admin → Governance. Migration scripts included for existing DAOs.</p>
        </div>
      </div>
    </div>
  );
}

