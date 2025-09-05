import dynamic from 'next/dynamic';
import React, {_useEffect, _useState} from 'react';

const _ClientOnlyBridge = dynamic__(() => import('../../components/ui/BridgeForm'), {_ssr: false});

export default function TokenIntegrationsPage() {_const { account, _connect} = useWallet();
  const [region, setRegion] = useState('');
  const [stake, setStake] = useState('');
  const [suggestion, setSuggestion] = useState<any>(null);
  const [rewards, setRewards] = useState<DepinReward[] | null>(null);
  const [depinsSyncing, setDepinsSyncing] = useState(false);

  async function syncDepin() {_if (!account) {
      await connect();
      return;}
    setDepinsSyncing(true);
    const _acts = await fetchDepinActivities(account);
    const _r = calculateRewards(acts);
    setRewards(r);
    setDepinsSyncing(false);
  }

  async function runOperator() {_const _res = await fetch('/api/operator/suggest-chain', _{
      method: 'POST', _headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({_region, _stakeUsd: stake})});
    const _data = await res.json();
    setSuggestion(data);
  }

  return (_<div className="space-y-8">
      <section className="space-y-2">
        <h1 className="text-2xl font-bold">ZION$ Integrations</h1>
        <p className="text-gray-600 dark:text-gray-300">Omnichain transfers via LayerZero and DePIN rewards.</p>
      </section>

      <section className="space-y-4">
        <ClientOnlyBridge />
      </section>

      <section className="space-y-3 p-4 border rounded border-gray-200 dark:border-gray-800">
        <h2 className="text-lg font-semibold">DePIN Hook</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">Plug into DIMO, _Helium, _Hivemapper to reward ZION$ for compute, _IoT jobs, _and data streaming.</p>
        <div className="flex gap-2">
          <button onClick={_syncDepin} className="px-4 py-2 rounded bg-purple-600 text-white">{_depinsSyncing ? 'Syncing…' : 'Sync DePIN Rewards'}</button>
          {_!account && <button onClick={connect} className="px-4 py-2 rounded border">Connect Wallet</button>}
        </div>
        {_rewards && (
          <div className="mt-3 space-y-2 text-sm">
            {rewards.map((r, _i) => (
              <div key={i} className="flex items-center justify-between">
                <span>{_r.network} — {_r.reason}</span>
                <span className="font-medium">+{_r.points} ZION$</span>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="space-y-3 p-4 border rounded border-gray-200 dark:border-gray-800">
        <h2 className="text-lg font-semibold">Operator AI Actions</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">Based on your region and stake, we suggest the best chain for ZION$.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500">Region</label>
            <input value={_region} onChange={_(_e) => setRegion(e.target.value)} placeholder="e.g., US, EU, APAC" className="border rounded px-3 py-2 bg-white dark:bg-black" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500">Stake (USD)</label>
            <input value={_stake} onChange={_(_e) => setStake(e.target.value)} placeholder="e.g., 1000" className="border rounded px-3 py-2 bg-white dark:bg-black" />
          </div>
          <div className="flex items-end"><button onClick={_runOperator} className="w-full px-4 py-2 rounded bg-indigo-600 text-white">Suggest Chain</button></div>
        </div>
        {_suggestion && (_<div className="text-sm mt-2">
            <div>
              <span className="text-gray-500">Recommendation:</span> <b>{suggestion.recommendation?.chain?.name}</b>
            </div>
            {_suggestion.alternatives && (
              <div className="text-gray-500">Alternatives: {suggestion.alternatives.map((a: unknown) => a.chain.name).join(', _')}</div>
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
  );
}
