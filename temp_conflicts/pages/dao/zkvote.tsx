import { useEffect, useMemo, useState } from 'react'
import { BrowserProvider } from 'ethers'
import dynamic from 'next/dynamic'

// Lazy import to avoid SSR issues
const ReactJson = dynamic(() => import('react-json-view'), { ssr: false }) as any

export default function ZkVotePage() {
  const [account, setAccount] = useState<string>('')
  const [provider, setProvider] = useState<BrowserProvider | null>(null)
  const [identityCommitment, setIdentityCommitment] = useState<string>('')
  const [groupId, setGroupId] = useState<string>('123456789')
  const [optionId, setOptionId] = useState<number>(0)
  const [weight, setWeight] = useState<string>('0')
  const [proof, setProof] = useState<any>(null)
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<any>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      setProvider(new BrowserProvider((window as any).ethereum))
    }
  }, [])

  const connect = async () => {
    if (!provider) return
    const accs = await provider.send('eth_requestAccounts', [])
    setAccount(accs[0])
  }

  const generateIdentity = async () => {
    // Minimal identity: hash of wallet address + salt (for demo only).
    // In production, use @semaphore-protocol/identity to create deterministic ZK identities.
    const salt = Date.now().toString()
    const id = `0x${Buffer.from((account + ':' + salt)).toString('hex')}`
    setIdentityCommitment(id)
  }

  const makeProof = async () => {
    // Placeholder: front-end should use @semaphore-protocol/proof to generate proof from identity.
    // Here we mock a proof shape matching the contract struct for demo and UI plumbing.
    const mock = {
      pA: [0, 0],
      pB: [[0, 0], [0, 0]],
      pC: [0, 0],
      pubSignals: [0, optionId, Number(groupId), 0],
      merkleTreeDepth: 20,
      weight: weight ? BigInt(weight).toString() : '0'
    }
    setProof(mock)
  }

  const submitVote = async () => {
    if (!proof) return
    setSubmitting(true)
    try {
      const res = await fetch('/api/dao/submit-zk-vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ proof, optionId })
      })
      const j = await res.json()
      setResult(j)
    } catch (e:any) {
      setResult({ error: e?.message || 'failed' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className=&quot;max-w-2xl mx-auto p-6 space-y-4&quot;>
      <h1 className=&quot;text-2xl font-semibold&quot;>Zion OS — ZK Vote (Semaphore)</h1>
      <div className=&quot;space-x-2&quot;>
        <button className=&quot;px-3 py-1 rounded bg-black text-white&quot; onClick={connect}>Connect Wallet</button>
        <span className=&quot;text-sm opacity-70&quot;>{account || 'Not connected'}</span>
      </div>

      <div className=&quot;space-y-2&quot;>
        <label className=&quot;block text-sm&quot;>Group ID</label>
        <input className=&quot;w-full border p-2 rounded&quot; value={groupId} onChange={e=>setGroupId(e.target.value)} />
        <label className=&quot;block text-sm&quot;>Option ID</label>
        <input className=&quot;w-full border p-2 rounded&quot; type=&quot;number&quot; value={optionId} onChange={e=>setOptionId(parseInt(e.target.value||'0',10))} />
        <label className=&quot;block text-sm&quot;>Weight (ZION$)</label>
        <input className=&quot;w-full border p-2 rounded&quot; type=&quot;number&quot; value={weight} onChange={e=>setWeight(e.target.value)} />
      </div>

      <div className=&quot;space-x-2&quot;>
        <button className=&quot;px-3 py-1 rounded bg-blue-600 text-white&quot; onClick={generateIdentity}>Generate ZK Identity</button>
        <span className=&quot;text-sm break-all&quot;>{identityCommitment || '—'}</span>
      </div>

      <div className=&quot;space-x-2&quot;>
        <button className=&quot;px-3 py-1 rounded bg-indigo-600 text-white&quot; onClick={makeProof}>Create Proof (mock)</button>
        <button disabled={!proof || submitting} className=&quot;px-3 py-1 rounded bg-green-600 text-white disabled:opacity-50&quot; onClick={submitVote}>Submit Vote</button>
      </div>

      <div>
        <h2 className=&quot;font-medium&quot;>Proof</h2>
        {proof ? <ReactJson name={false} src={proof} collapsed={1} /> : <p className=&quot;text-sm opacity-70&quot;>No proof yet</p>}
      </div>

      <div>
        <h2 className=&quot;font-medium&quot;>Result</h2>
        {result ? <ReactJson name={false} src={result} collapsed={1} /> : <p className=&quot;text-sm opacity-70&quot;>No submission</p>}
      </div>
    </div>
  )
}