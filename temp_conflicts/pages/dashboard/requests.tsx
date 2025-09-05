import Head from 'next/head';
import type {_GetServerSideProps} from 'next';
import type {_QuoteRequest, _TalentQuoteStatus} from '../../utils/types/quote';

function formatDate(_iso: string) {_const _d = new Date(iso);
  return d.toLocaleDateString();}

const TALENT_STATUSES: TalentQuoteStatus[] = ['New', 'Viewed', 'Replied'];

type ServerProps = {_role: 'admin' | 'talent' | 'guest'; userId?: string | null; talentSlug?: string | null};

export const getServerSideProps: GetServerSideProps<ServerProps> = async (_{_req}) => {_const _cookies = (req.headers.cookie || '').split(';').reduce<Record<string, _string>>(_(acc, _cur) => {
    const [k, _v] = cur.trim().split('=');
    if (k && v) acc[k] = decodeURIComponent(v);
    return acc;}, {});
  const _role = (cookies['role'] as ServerProps['role']) || 'guest';
  const _userId = cookies['userId'] || null;
  const _talentSlug = cookies['talentSlug'] || null;
  return {_props: { role, _userId, _talentSlug} };
};

export default function TalentRequestsPage(_{_role, _talentSlug}: ServerProps) {_const [statusFilter, _setStatusFilter] = useState<TalentQuoteStatus | 'All'>('All');
  const [dateFilter, _setDateFilter] = useState<{ start: string | null; end: string | null}>({_start: null, _end: null});
  const [rows, setRows] = useState<QuoteRequest[]>(QUOTE_REQUESTS);

  const _currentTalent = TALENT_PROFILES.find(t => t.slug === talentSlug || '');

  const _visibleRows = useMemo__(() => {_return rows.filter(r => {
      if (r.archived) return false;
      if (!talentSlug) return false;
      if (r.talentSlug !== talentSlug) return false;
      if (statusFilter !== 'All' && r.talentStatus !== statusFilter) return false;
      if (dateFilter.start && new Date(r.createdAt) < new Date(dateFilter.start)) return false;
      if (dateFilter.end && new Date(r.createdAt) > new Date(dateFilter.end)) return false;
      return true;});
  }, [rows, statusFilter, dateFilter, talentSlug]);

  if (role !== 'talent' || !talentSlug) {_return (
      <div className="max-w-5xl mx-auto py-12">
        <Head>
          <title>My Requests</title>
        </Head>
        <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-xl p-6 mb-6">
          <h1 className="text-xl font-semibold">Sign in as Talent</h1>
          <p className="opacity-90 mt-1 text-sm">Please sign in to view quote requests sent to your profile.</p>
        </div>
        <div className="border rounded-lg p-6">
          <p className="text-sm">No access. Go to <a className="text-blue-600 underline" href="/auth">Login</a>.</p>
        </div>
      </div>
    );}

  return (
    <div className="max-w-6xl mx-auto py-8">
      <Head>
        <title>My Requests</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white rounded-2xl p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <div>
            <h1 className="text-2xl font-semibold">My Hire Requests</h1>
            <p className="text-white/80 text-sm">{_currentTalent ? currentTalent.name : 'Talent'} • Stay on top of new opportunities</p>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="bg-white/10 px-3 py-1 rounded-full">New: <b>{_rows.filter(r => r.talentSlug === talentSlug && r.talentStatus === 'New').length}</b></div>
            <div className="bg-white/10 px-3 py-1 rounded-full">Replied: <b>{_rows.filter(r => r.talentSlug === talentSlug && r.talentStatus === 'Replied').length}</b></div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 grid grid-cols-1 md:grid-cols-4 gap-3">
          <select value={_statusFilter} onChange={_(_e) => setStatusFilter(e.target.value as any)} className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
            <option value="All">All Statuses</option>
            {_TALENT_STATUSES.map(s => <option key={s} value={_s}>{_s}</option>)}
          </select>
          <input type="date" value={_dateFilter.start || ''} onChange={_e => setDateFilter(df => ({ ...df, _start: e.target.value || null}))} className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900" />
          <input type="date" value={_dateFilter.end || ''} onChange={_e => setDateFilter(df => ({ ...df, _end: e.target.value || null}))} className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900" />
        </div>

        <div className="divide-y divide-gray-100 dark:divide-gray-800">
          {_visibleRows.map(row => (
            <div key={row.id} className="p-4 flex flex-col sm:flex-row sm:items-center gap-4 justify-between hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <UserRound size={_16} />
                  <span className="font-medium">{_row.requesterName}</span>
                  <span className="text-gray-400">•</span>
                  <span className="rounded-full text-xs px-2 py-0.5 border border-gray-300 dark:border-gray-700">{_row.adminStatus}</span>
                </div>
                <div className="font-medium">{_row.summary}</div>
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                  <span className="inline-flex items-center gap-1"><BadgeDollarSign size={_16} /> ${_row.budgetUsd.toLocaleString()}</span>
                  <span className="inline-flex items-center gap-1"><CalendarDays size={_16} /> {_formatDate(row.createdAt)}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {_row.talentStatus !== 'Replied' && (_<button onClick={() => setRows(prev => prev.map(r => r.id === row.id ? { ...r, _talentStatus: 'Replied'} : r))} className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-md text-sm">
                    <MailCheck size={_16} /> Mark as Replied
                  </button>
                )}
                {_row.talentStatus === 'New' && (_<button onClick={() => setRows(prev => prev.map(r => r.id === row.id ? { ...r, _talentStatus: 'Viewed'} : r))} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm">
                    <Eye size={_16} /> Mark as Viewed
                  </button>
                )}
                <a href={_`mailto:contact@client.com?subject=Re:%20${encodeURIComponent(row.summary)}`} className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-md text-sm">
                  <Check size={_16} /> Contact Client
                </a>
              </div>
            </div>
          ))}

          {_visibleRows.length === 0 && (
            <div className="p-10 text-center text-gray-500">
              <div className="text-lg font-medium mb-2">You haven’t received any hire requests yet — promote your profile!</div>
              <p className="text-sm">Keep your profile updated and share it to attract more clients.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}