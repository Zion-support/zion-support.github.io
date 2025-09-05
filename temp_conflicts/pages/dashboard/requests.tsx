import { useMemo, useState } from 'react';
import Head from 'next/head';
import type { GetServerSideProps } from 'next';
import { MailCheck, UserRound, CalendarDays, BadgeDollarSign, Eye, Check } from 'lucide-react';
import { QUOTE_REQUESTS } from '../../data/quote-requests';
import type { QuoteRequest, TalentQuoteStatus } from '../../utils/types/quote';
import { TALENT_PROFILES } from '../../data/talent';

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString();
}

const TALENT_STATUSES: TalentQuoteStatus[] = ['New', 'Viewed', 'Replied'];

type ServerProps = { role: 'admin' | 'talent' | 'guest'; userId?: string | null; talentSlug?: string | null };

export const getServerSideProps: GetServerSideProps<ServerProps> = async ({ req }) => {
  const cookies = (req.headers.cookie || '').split(';').reduce<Record<string,string>>((acc, cur) => {
    const [k, v] = cur.trim().split('=');
    if (k && v) acc[k] = decodeURIComponent(v);
    return acc;
  }, {});
  const role = (cookies['role'] as ServerProps['role']) || 'guest';
  const userId = cookies['userId'] || null;
  const talentSlug = cookies['talentSlug'] || null;
  return { props: { role, userId, talentSlug } };
};

export default function TalentRequestsPage({ role, talentSlug }: ServerProps) {
  const [statusFilter, setStatusFilter] = useState<TalentQuoteStatus | 'All'>('All');
  const [dateFilter, setDateFilter] = useState<{ start: string | null; end: string | null }>({ start: null, end: null });
  const [rows, setRows] = useState<QuoteRequest[]>(QUOTE_REQUESTS);

  const currentTalent = TALENT_PROFILES.find(t => t.slug === talentSlug || '');

  const visibleRows = useMemo(() => {
    return rows.filter(r => {
      if (r.archived) return false;
      if (!talentSlug) return false;
      if (r.talentSlug !== talentSlug) return false;
      if (statusFilter !== 'All' && r.talentStatus !== statusFilter) return false;
      if (dateFilter.start && new Date(r.createdAt) < new Date(dateFilter.start)) return false;
      if (dateFilter.end && new Date(r.createdAt) > new Date(dateFilter.end)) return false;
      return true;
    });
  }, [rows, statusFilter, dateFilter, talentSlug]);

  if (role !== 'talent' || !talentSlug) {
    return (
      <div className=&quot;max-w-5xl mx-auto py-12&quot;>
        <Head>
          <title>My Requests</title>
        </Head>
        <div className=&quot;bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-xl p-6 mb-6&quot;>
          <h1 className=&quot;text-xl font-semibold&quot;>Sign in as Talent</h1>
          <p className=&quot;opacity-90 mt-1 text-sm&quot;>Please sign in to view quote requests sent to your profile.</p>
        </div>
        <div className=&quot;border rounded-lg p-6&quot;>
          <p className=&quot;text-sm&quot;>No access. Go to <a className=&quot;text-blue-600 underline&quot; href=&quot;/auth&quot;>Login</Link>.</p>
        </div>
      </div>
    );
  }

  return (
    <div className=&quot;max-w-6xl mx-auto py-8&quot;>
      <Head>
        <title>My Requests</title>
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; />
      </Head>

      <div className=&quot;bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white rounded-2xl p-6 mb-6&quot;>
        <div className=&quot;flex flex-col sm:flex-row sm:items-center gap-4 justify-between&quot;>
          <div>
            <h1 className=&quot;text-2xl font-semibold&quot;>My Hire Requests</h1>
            <p className=&quot;text-white/80 text-sm&quot;>{currentTalent ? currentTalent.name : 'Talent'} • Stay on top of new opportunities</p>
          </div>
          <div className=&quot;flex items-center gap-3 text-sm&quot;>
            <div className=&quot;bg-white/10 px-3 py-1 rounded-full&quot;>New: <b>{rows.filter(r => r.talentSlug === talentSlug && r.talentStatus === 'New').length}</b></div>
            <div className=&quot;bg-white/10 px-3 py-1 rounded-full&quot;>Replied: <b>{rows.filter(r => r.talentSlug === talentSlug && r.talentStatus === 'Replied').length}</b></div>
          </div>
        </div>
      </div>

      <div className=&quot;bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800&quot;>
        <div className=&quot;p-4 border-b border-gray-200 dark:border-gray-800 grid grid-cols-1 md:grid-cols-4 gap-3&quot;>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as any)} className=&quot;px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900&quot;>
            <option value=&quot;All&quot;>All Statuses</option>
            {TALENT_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <input type=&quot;date&quot; value={dateFilter.start || ''} onChange={e => setDateFilter(df => ({ ...df, start: e.target.value || null }))} className=&quot;px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900&quot; />
          <input type=&quot;date&quot; value={dateFilter.end || ''} onChange={e => setDateFilter(df => ({ ...df, end: e.target.value || null }))} className=&quot;px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900&quot; />
        </div>

        <div className=&quot;divide-y divide-gray-100 dark:divide-gray-800&quot;>
          {visibleRows.map(row => (
            <div key={row.id} className=&quot;p-4 flex flex-col sm:flex-row sm:items-center gap-4 justify-between hover:bg-gray-50/60 dark:hover:bg-gray-900/40&quot;>
              <div className=&quot;space-y-1&quot;>
                <div className=&quot;flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300&quot;>
                  <UserRound size={16} />
                  <span className=&quot;font-medium&quot;>{row.requesterName}</span>
                  <span className=&quot;text-gray-400&quot;>•</span>
                  <span className=&quot;rounded-full text-xs px-2 py-0.5 border border-gray-300 dark:border-gray-700&quot;>{row.adminStatus}</span>
                </div>
                <div className=&quot;font-medium&quot;>{row.summary}</div>
                <div className=&quot;flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300&quot;>
                  <span className=&quot;inline-flex items-center gap-1&quot;><BadgeDollarSign size={16} /> ${row.budgetUsd.toLocaleString()}</span>
                  <span className=&quot;inline-flex items-center gap-1&quot;><CalendarDays size={16} /> {formatDate(row.createdAt)}</span>
                </div>
              </div>

              <div className=&quot;flex items-center gap-2&quot;>
                {row.talentStatus !== 'Replied' && (
                  <button onClick={() => setRows(prev => prev.map(r => r.id === row.id ? { ...r, talentStatus: 'Replied' } : r))} className=&quot;inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-md text-sm&quot;>
                    <MailCheck size={16} /> Mark as Replied
                  </button>
                )}
                {row.talentStatus === 'New' && (
                  <button onClick={() => setRows(prev => prev.map(r => r.id === row.id ? { ...r, talentStatus: 'Viewed' } : r))} className=&quot;inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm&quot;>
                    <Eye size={16} /> Mark as Viewed
                  </button>
                )}
                <a href={`mailto:contact@client.com?subject=Re:%20${encodeURIComponent(row.summary)}`} className=&quot;inline-flex items-center gap-2 border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-md text-sm&quot;>
                  <Check size={16} /> Contact Client
                </Link>
              </div>
            </div>
          ))}

          {visibleRows.length === 0 && (
            <div className=&quot;p-10 text-center text-gray-500&quot;>
              <div className=&quot;text-lg font-medium mb-2&quot;>You haven’t received any hire requests yet — promote your profile!</div>
              <p className=&quot;text-sm&quot;>Keep your profile updated and share it to attract more clients.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}