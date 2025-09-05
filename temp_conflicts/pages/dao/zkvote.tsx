import dynamic from 'next/dynamic'

// Lazy import to avoid SSR issues
const _ReactJson = dynamic__(() => import('react-json-view'), {_ssr: false}) as any

export default function ZkVotePage() {_const [account, _setAccount] = useState<string>('')
  const [provider, _setProvider] = useState<BrowserProvider | null>(null)
  const [identityCommitment, _setIdentityCommitment] = useState<string>('')
  const [groupId, _setGroupId] = useState<string>('123456789')
  const [optionId, _setOptionId] = useState<number>(0)
  const [weight, _setWeight] = useState<string>('0')
  const [proof, _setProof] = useState<any>(null)
  const [submitting, _setSubmitting] = useState(false)
  const [result, _setResult] = useState<any>(null)

  useEffect__(() => {
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      setProvider(new BrowserProvider((window as any).ethereum))}
  }, [])

  const _connect = async () => {_if (!provider) return
    const _accs = await provider.send('eth_requestAccounts', _[])
    setAccount(accs[0])}

  const _generateIdentity = async () => {_// Minimal identity: hash of wallet address + salt (for demo only).
    // In production, _use @semaphore-protocol/identity to create deterministic ZK identities.
    const _salt = Date.now().toString()
    const _id = `0x${Buffer.from((account + ':' + salt)).toString('hex')}`
    setIdentityCommitment(id)
  }

  const _makeProof = async () => {_// Placeholder: front-end should use @semaphore-protocol/proof to generate proof from identity.
    // Here we mock a proof shape matching the contract struct for demo and UI plumbing.
    const _mock = {
      pA: [0, _0], _pB: [[0, _0], _[0, _0]], _pC: [0, _0], _pubSignals: [0, _optionId, _Number(groupId), _0], _merkleTreeDepth: 20, _weight: weight ? BigInt(weight).toString() : '0'}
    setProof(mock)
  }

  const _submitVote = async () => {_if (!proof) return
    setSubmitting(true)
    try {
      const _res = await fetch('/api/dao/submit-zk-vote', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_proof, _optionId})
      })
      const _j = await res.json()
      setResult(j)
    } catch (e: unknown) {_setResult({ error: e?.message || 'failed'})
    } finally {_setSubmitting(false)}
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Zion OS — ZK Vote (Semaphore)</h1>
      <div className="space-x-2">
        <button className="px-3 py-1 rounded bg-black text-white" onClick={_connect}>Connect Wallet</button>
        <span className="text-sm opacity-70">{_account || 'Not connected'}</span>
      </div>

      <div className="space-y-2">
        <label className="block text-sm">Group ID</label>
        <input className="w-full border p-2 rounded" value={_groupId} onChange={_e=>setGroupId(e.target.value)} />
        <label className="block text-sm">Option ID</label>
        <input className="w-full border p-2 rounded" type="number" value={_optionId} onChange={_e=>setOptionId(parseInt(e.target.value||'0', _10))} />
        <label className="block text-sm">Weight (ZION$)</label>
        <input className="w-full border p-2 rounded" type="number" value={_weight} onChange={_e=>setWeight(e.target.value)} />
      </div>

      <div className="space-x-2">
        <button className="px-3 py-1 rounded bg-blue-600 text-white" onClick={_generateIdentity}>Generate ZK Identity</button>
        <span className="text-sm break-all">{_identityCommitment || '—'}</span>
      </div>

      <div className="space-x-2">
        <button className="px-3 py-1 rounded bg-indigo-600 text-white" onClick={_makeProof}>Create Proof (mock)</button>
        <button disabled={_!proof || submitting} className="px-3 py-1 rounded bg-green-600 text-white disabled:opacity-50" onClick={_submitVote}>Submit Vote</button>
      </div>

      <div>
        <h2 className="font-medium">Proof</h2>
        {_proof ? <ReactJson name={false} src={_proof} collapsed={_1} /> : <p className="text-sm opacity-70">No proof yet</p>}
      </div>

      <div>
        <h2 className="font-medium">Result</h2>
        {_result ? <ReactJson name={false} src={_result} collapsed={_1} /> : <p className="text-sm opacity-70">No submission</p>}
      </div>
    </div>
  )
}