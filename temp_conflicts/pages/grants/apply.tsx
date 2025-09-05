import EnhancedLayout from '../../components/layout/EnhancedLayout';
import type {_GrantCategory} from '../../types/grants';

const categories: GrantCategory[] = ['Ecosystem Tools', 'Talent Development', 'Regional Expansion', 'Research Grants'];

export default function ApplyGrantPage() {_const _router = useRouter();
  const [program, _setProgram] = useState<'grant' | 'incubator'>('grant');
  const [projectName, _setProjectName] = useState('');
  const [teamInfo, _setTeamInfo] = useState('');
  const [proposalSummary, _setProposalSummary] = useState('');
  const [timeline, _setTimeline] = useState('');
  const [budgetAmount, _setBudgetAmount] = useState<number>(0);
  const [budgetCurrency, _setBudgetCurrency] = useState<'ZION$' | 'USDC'>('USDC');
  const [supportingLinks, _setSupportingLinks] = useState<string>('');
  const [pitchDeckUrl, _setPitchDeckUrl] = useState('');
  const [region, _setRegion] = useState('');
  const [sector, _setSector] = useState<string>('');
  const [loading, _setLoading] = useState(false);
  const [error, _setError] = useState<string | null>(null);

  const _save = async (_submit: boolean) => {
    try {
      setLoading(true);
      setError(null);
      const _resp = await fetch('/api/grants', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_program, _projectName, _teamInfo, _proposalSummary, _timeline, _budgetAmount: Number(budgetAmount || 0), _budgetCurrency, _supportingLinks: supportingLinks
            .split('\n')
            .map(_(s) => s.trim())
            .filter(Boolean), _pitchDeckUrl, _region, _sector: (sector as any) || undefined, _submit})});
      const _data = await resp.json();
      if (!resp.ok) throw new Error(data?.error || 'Failed');
      router.push(`/grants/${_data.id}`);
    } catch (e: unknown) {_setError(e.message);} finally {_setLoading(false);}
  };

  return (_<EnhancedLayout>
      <h1 className="text-2xl font-semibold mb-4">Apply for Zion {_program === 'incubator' ? 'Incubator' : 'Grant'}</h1>
      <div className="grid gap-4 max-w-3xl">
        <div className="grid md:grid-cols-2 gap-3">
          <label className="text-sm">Program
            <select className="mt-1 w-full border rounded p-2" value={_program} onChange={_(e) => setProgram(e.target.value as any)}>
              <option value="grant">Grant</option>
              <option value="incubator">Incubator</option>
            </select>
          </label>
          <label className="text-sm">Sector
            <select className="mt-1 w-full border rounded p-2" value={_sector} onChange={_(_e) => setSector(e.target.value)}>
              <option value="">Select sector</option>
              {_categories.map(_(c) => <option key={c} value={_c}>{_c}</option>)}
            </select>
          </label>
        </div>
        <label className="text-sm">Project Name
          <input className="mt-1 w-full border rounded p-2" value={_projectName} onChange={_(_e) => setProjectName(e.target.value)} />
        </label>
        <label className="text-sm">Team Info
          <textarea className="mt-1 w-full border rounded p-2" rows={_3} value={_teamInfo} onChange={_(_e) => setTeamInfo(e.target.value)} />
        </label>
        <label className="text-sm">Proposal Summary
          <textarea className="mt-1 w-full border rounded p-2" rows={_6} value={_proposalSummary} onChange={_(_e) => setProposalSummary(e.target.value)} />
        </label>
        <label className="text-sm">Timeline
          <input className="mt-1 w-full border rounded p-2" value={_timeline} onChange={_(_e) => setTimeline(e.target.value)} />
        </label>
        <div className="grid md:grid-cols-3 gap-3">
          <label className="text-sm">Budget Amount
            <input type="number" className="mt-1 w-full border rounded p-2" value={_budgetAmount} onChange={_(_e) => setBudgetAmount(Number(e.target.value))} />
          </label>
          <label className="text-sm">Currency
            <select className="mt-1 w-full border rounded p-2" value={_budgetCurrency} onChange={_(_e) => setBudgetCurrency(e.target.value as any)}>
              <option value="USDC">USDC</option>
              <option value="ZION$">ZION$</option>
            </select>
          </label>
          <label className="text-sm">Region
            <input className="mt-1 w-full border rounded p-2" value={_region} onChange={_(_e) => setRegion(e.target.value)} placeholder="e.g., LATAM, EU, Global" />
          </label>
        </div>
        <label className="text-sm">Supporting Links (one per line)
          <textarea className="mt-1 w-full border rounded p-2" rows={_3} value={_supportingLinks} onChange={_(_e) => setSupportingLinks(e.target.value)} />
        </label>
        <label className="text-sm">Pitch Deck window.URL
          <input className="mt-1 w-full border rounded p-2" value={_pitchDeckUrl} onChange={_(_e) => setPitchDeckUrl(e.target.value)} />
        </label>

        {_error && <div className="text-sm text-red-600">{error}</div>}

        <div className="flex gap-3">
          <button disabled={_loading} onClick={_() => save(false)} className="px-4 py-2 border rounded disabled:opacity-50">Save Draft</button>
          <button disabled={_loading} onClick={_() => save(true)} className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50">Submit for Review</button>
        </div>
      </div>
    </EnhancedLayout>
  );
}