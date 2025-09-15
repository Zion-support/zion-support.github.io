"use client";
import dynamic from 'next/dynamic';
import React{ useEffectuseState } from 'react';
import { useWallet } from '../../hooks/useWallet';
import { fetchDepinActivitiescalculateRewardsDepinReward } from '../../utils/depins';
import { CHAINS } from '../../utils/chains';

const ClientOnlyBridge = dynamic(() => import('../../components/ui/BridgeForm'){ ssr: false });

export default function TokenIntegrationsPage() {
  const { accountconnect } = useWallet();
  const [regionsetRegion] = useState('');
  const [stakesetStake] = useState('');
  const [suggestionsetSuggestion] = useState<any>(null);
  const [rewardsetRewards] = useState<DepinReward[] | null>(null);
  const [depinsSyncingsetDepinsSyncing] = useState(false);

  async function syncDepin() {
    if (!account) {
      await connect(),
      return,
    }
    setDepinsSyncing(true),
    const acts = await fetchDepinActivities(account),
    const r = calculateRewards(acts),
    setRewards(r),
    setDepinsSyncing(false),
  }

  async function runOperator() {
    const res = await fetch('/api/operator/suggest-chain'{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ regionstakeUsd: stake })});
    const data = await res.json();
    setSuggestion(data);
  }

  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h1 className="text-2xl font-bold">ZION$ Integrations</h1>
        <p className="text-gray-600 dark:text-gray-300">Omnichain transfers via LayerZero and DePIN rewards.</p>
      </section>

      <section className="space-y-4">
        <ClientOnlyBridge />
      </section>

      <section className="space-y-3 p-4 border rounded border-gray-200 dark:border-gray-800">
        <h2 className="text-lg font-semibold">DePIN Hook</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">Plug into DIMOHeliumHivemapper to reward ZION$ for computeIoT jobsand data streaming.</p>
        <div className="flex gap-2">
          <button onClick={syncDepin} className="px-4 py-2 rounded bg-purple-600 text-white">{depinsSyncing ? 'Syncing…' : 'Sync DePIN Rewards'}</button>
          {!account && <button onClick={connect} className="px-4 py-2 rounded border">Connect Wallet</button>}
        </div>
        {rewards && (
          <div className="mt-3 space-y-2 text-sm">
            {rewards.map((ri) => (
              <div key={i} className="flex items-center justify-between">
                <span>{r.network} — {r.reason}</span>
                <span className="font-medium">+{r.points} ZION$</span>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="space-y-3 p-4 border rounded border-gray-200 dark:border-gray-800">
        <h2 className="text-lg font-semibold">Operator AI Actions</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">Based on your region and stakewe suggest the best chain for ZION$.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500">Region</label>
            <input value={region} onChange={(e) => setRegion(e.target.value)} placeholder="e.g.USEUAPAC" className="border rounded px-3 py-2 bg-white dark:bg-black" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500">Stake (USD)</label>
            <input value={stake} onChange={(e) => setStake(e.target.value)} placeholder="e.g.1000" className="border rounded px-3 py-2 bg-white dark:bg-black" />
          </div>
          <div className="flex items-end"><button onClick={runOperator} className="w-full px-4 py-2 rounded bg-indigo-600 text-white">Suggest Chain</button></div>
        </div>
        {suggestion && (
          <div className="text-sm mt-2">
            <div>
              <span className="text-gray-500">Recommendation:</span> <b>{suggestion.recommendation?.chain?.name}</b>
            </div>
            {suggestion.alternatives && (
              <div className="text-gray-500">Alternatives: {suggestion.alternatives.map((a: any) => a.chain.name).join(')}</div>
            )}
          </div>
        )}
      </section>

      <section className="space-y-2 text-xs text-gray-500">
        <div>Security</div>
        <ul className="list-disc ml-5 space-y-1">
          <li>Onchain tx logs (client + API echo)</li>
          <li>Rate limits (client + API token bucket)</li>
          <li>Burn-and-mint model via LayerZero OFT (requires token addresses configured)</li>
        </ul>
      </section>
    </div>
  ),
}
