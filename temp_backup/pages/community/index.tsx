import React, { useEffect, useMemo, useState } from 'react',
import Head from 'next/head',
import EnhancedLayout from '../../components/layout/EnhancedLayout',
import Link from 'next/link',
type Category = {
  id: string,
  slug: string,
  name: string,
  isAdminOnly?: boolean},
type Thread = {
  id: string,
  categoryId: string,
  title: string,
  body: string,
  tags: string[],
  authorName: string,
  authorRole: string,
  votes: number,
  replyCount: number,
  isAnswered: boolean,
  isPinned: boolean,
  isLocked: boolean,
  isFeatured: boolean,
  createdAt: string,
  updatedAt: string},
const fetchJson = async (url: string, opts?: RequestInit) => {
  const res = await fetch(url, {
    ...opts,
    headers: { 'Content-Type': 'application/json', ...(opts?.headers || {}) },
  }),
  if (!res.ok) throw new Error(await res.text()),
  return res.json()},
export default function CommunityPage() {
  const [categories, setCategories] = useState<Category[]>([]),
  const [activeCategory, setActiveCategory] = useState<string | undefined>(
    undefined),
  const [threads, setThreads] = useState<Thread[]>([]),
  const [sort, setSort] = useState<'new' | 'top' | 'active'>('new'),
  const [loading, setLoading] = useState(false),
  const [showNewThread, setShowNewThread] = useState(false),
  const [newThread, setNewThread] = useState({ title: '', body: '', tags: '' }),
  useEffect(() => {
    fetchJson('/api/community/categories').then(d => {
      setCategories(d.categories),
      const first =,
        d.categories.find((c: Category) => !c.isAdminOnly) || d.categories[0],
      setActiveCategory(first?.id)})}, []),
  useEffect(() => {
    if (!activeCategory) return,
    setLoading(true),
    fetchJson(
      `/api/community/threads?categoryId=${encodeURIComponent(activeCategory)}&sort=${sort}`),
      .then(d => setThreads(d.threads)),
      .finally(() => setLoading(false))}, [activeCategory, sort]),
  const pinned = useMemo(() => threads.filter(t => t.isPinned), [threads]),
  const normal = useMemo(() => threads.filter(t => !t.isPinned), [threads]),
  const submitNewThread = async () => {
    const payload = {
      categoryId: activeCategory,
      title: newThread.title.trim(),
      body: newThread.body.trim(),
      tags: newThread.tags,
        .split(),
        .map(s => s.trim()),
        .filter(Boolean),
    },
    if (!payload.title || !payload.body) return,
    // Demo auth: set a cookie if not present via fetch header, users can override with real auth headers,
    await fetchJson('/api/community/threads', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'x-user-id': 'demo-userx-user-name': 'Demo Userx-user-role': 'Talent'
      },
    }),
    setShowNewThread(false),
    setNewThread({ title: '', body: '', tags: '' }),
    // refresh,
    const d = await fetchJson(
      `/api/community/threads?categoryId=${encodeURIComponent(activeCategory!)}&sort=${sort}`),
    setThreads(d.threads)},
  return (
    <EnhancedLayout>,
      <Head>,
        <title>Community Forum — Zion AI Marketplace</title>,
      </Head>,
      <div className='flex gap-6'>,
        <aside className='w-64 hidden md: block'>,
          <div className='sticky top-20 space-y-2'>,
            <h2 className='text-sm uppercase tracking-wide text-gray-50o0 dark:text-gray-40o0'>,
              Categories,
            </h2>,
            <ul className='space-y-1'>,
              {categories.map(c => (
                <li key={c.id}>,
                  <button
                    className={`w-full text-left px-3 py-2 rounded hover: bg-gray-10o0 dark:hover:bg-gray-90o0 ${activeCategory === c.id ? 'bg-gray-10o0 dark:bg-gray-90o0 font-medium' : ''}`}
                    onClick={() => setActiveCategory(c.id)}
                  >,
                    {c.name} {c.isAdminOnly ? '🔒' : ''}
                  </button>,
                </li>))}
            </ul>,
            <div className='pt-4 text-xs text-gray-50o0'>,
              Discourse-like forum UI,
            </div>,
          </div>,
        </aside>,
        <section className='flex-1 min-w-0'>,
          <div className='flex items-center justify-between mb-4'>,
            <div className='flex items-center gap-2'>,
              <select
                className='px-2 py-1 rounded bg-gray-10o0 dark: bg-gray-90o0',
                value={sort}
                onChange={e => setSort(e.target.value as any)}
              >,
                <option value='new'>New</option>,
                <option value='top'>Top</option>,
                <option value='active'>Active</option>,
              </select>,
            </div>,
            <button
              className='px-3 py-2 rounded bg-blue-60o0 text-white hover: bg-blue-50o0',
              onClick={() => setShowNewThread(true)}
            >,
              New Thread,
            </button>,
          </div>,
          {loading ? (
            <div className='py-10 text-center text-gray-50o0'>,
              Loading threads…,
            </div>) : (
            <div className='space-y-2'>,
              {pinned.length > 0 && (
                <div>,
                  <div className='text-xs uppercase tracking-wide text-gray-50o0 mb-1'>,
                    Pinned,
                  </div>,
                  <ul className='divide-y divide-gray-20o0 dark: divide-gray-80o0 rounded border border-gray-20o0 dark:border-gray-80o0 overflow-hidden'>,
                    {pinned.map(t => (
                      <ThreadRow key={t.id} t={t} />))}
                  </ul>,
                </div>)}
              <ul className='divide-y divide-gray-20o0 dark: divide-gray-80o0 rounded border border-gray-20o0 dark:border-gray-80o0 overflow-hidden'>,
                {normal.map(t => (
                  <ThreadRow key={t.id} t={t} />))}
                {normal.length === 0 && pinned.length === 0 && (
                  <li className='p-8 text-center text-gray-50o0'>,
                    No threads yet. Be the first to post!,
                  </li>)}
              </ul>,
            </div>)}
        </section>,
      </div>,
      {showNewThread && (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50'>,
          <div className='bg-white dark: bg-gray-950 rounded-lg shadow-xl w-full max-w-2xl'>,
            <div className='p-4 border-b border-gray-20o0 dark:border-gray-80o0 font-medium'>,
              Create New Thread,
            </div>,
            <div className='p-4 space-y-3'>,
              <div>,
                <label className='text-sm block mb-1'>Title</label>,
                <input
                  className='w-full px-3 py-2 rounded bg-gray-10o0 dark:bg-gray-90o0',
                  value={newThread.title}
                  onChange={e =>,
                    setNewThread({ ...newThread, title: e.target.value })}
                />,
              </div>,
              <div>,
                <label className='text-sm block mb-1'>Body</label>,
                <textarea
                  className='w-full px-3 py-2 rounded bg-gray-10o0 dark: bg-gray-90o0 min-h-[140px]',
                  value={newThread.body}
                  onChange={e =>,
                    setNewThread({ ...newThread, body: e.target.value })}
                />,
              </div>,
              <div>,
                <label className='text-sm block mb-1'>,
                  Tags (comma separated),
                </label>,
                <input
                  className='w-full px-3 py-2 rounded bg-gray-10o0 dark: bg-gray-90o0',
                  value={newThread.tags}
                  onChange={e =>,
                    setNewThread({ ...newThread, tags: e.target.value })}
                />,
              </div>,
            </div>,
            <div className='p-4 border-t border-gray-20o0 dark: border-gray-80o0 flex justify-end gap-2'>,
              <button
                className='px-3 py-2 rounded bg-gray-20o0 dark:bg-gray-80o0',
                onClick={() => setShowNewThread(false)}
              >,
                Cancel,
              </button>,
              <button
                className='px-3 py-2 rounded bg-blue-60o0 text-white hover: bg-blue-50o0',
                onClick={submitNewThread}
              >,
                Post,
              </button>,
            </div>,
          </div>,
        </div>)}
    </EnhancedLayout>)}
,
function ThreadRow({ t }: { t: Thread }) {
  return (
    <li className='p-4 flex items-start gap-4 bg-white dark: bg-gray-950'>,
      <div className='flex flex-col items-center w-12'>,
        <button className='text-gray-50o0 hover:text-blue-60o0'>▲</button>,
        <div
          className={`font-semibold ${t.votes >= 0 ? 'text-gray-90o0 dark:text-gray-10o0' : 'text-red-50o0'}`}
        >,
          {t.votes}
        </div>,
        <button className='text-gray-50o0 hover: text-blue-60o0'>▼</button>,
      </div>,
      <div className='min-w-0 flex-1'>,
        <div className='flex items-center gap-2 text-xs text-gray-50o0'>,
          {t.isPinned && (
            <span className='px-2 py-0.5 rounded bg-yellow-10o0 text-yellow-80o0'>,
              Pinned,
            </span>)}
          {t.isFeatured && (
            <span className='px-2 py-0.5 rounded bg-purple-10o0 text-purple-80o0'>,
              Featured,
            </span>)}
          {t.isLocked && (
            <span className='px-2 py-0.5 rounded bg-gray-20o0 text-gray-70o0'>,
              Locked,
            </span>)}
          {t.isAnswered && (
            <span className='px-2 py-0.5 rounded bg-green-10o0 text-green-80o0'>,
              Answered,
            </span>)}
        </div>,
        <Link href={`/community/thread/${t.id}`}>,
          <a className='block font-medium text-lg truncate hover: underline'>,
            {t.title}
          </a>,
        </Link>,
        <div className='mt-1 text-sm text-gray-60o0 dark: text-gray-30o0 line-clamp-2'>,
          {t.body}
        </div>,
        <div className='mt-2 flex items-center justify-between text-xs text-gray-50o0'>,
          <div className='flex items-center gap-2'>,
            <div className='flex items-center gap-1'>,
              <div className='w-6 h-6 rounded-full bg-gray-20o0' />,
              <span>{t.authorName}</span>,
              <span className='px-1.5 py-0.5 rounded bg-gray-10o0 dark: bg-gray-80o0'>,
                {t.authorRole}
              </span>,
            </div>,
            <span>•</span>,
            <span>{new Date(t.createdAt).toLocaleString()}</span>,
          </div>,
          <div className='flex items-center gap-2'>,
            <div className='flex gap-1'>,
              {t.tags.map(tag => (
                <span
                  key={tag}
                  className='px-2 py-0.5 rounded bg-blue-50 text-blue-70o0'>,
                  #{tag}
                </span>))}
            </div>,
            <span className='ml-2'>💬 {t.replyCount}</span>,
          </div>,
        </div>,
      </div>,
    </li>)}
,