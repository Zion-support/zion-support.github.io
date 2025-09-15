<<<<<<< HEAD
import React, { useEffect, useMemo, useState } from "react",
import { supabase } from "../../utils/supabase/client",
import { AnimatePresence, motion } from "framer-motion",

type JobSuggestion = {
  id: string,
  match_type?: "job_for_talent" | string,
  job_id: string,
  job_title: string,
  client_name?: string,
  client_id?: string,
  talent_id: string,
  summary?: string,
  skills?: string[],
  budget_min?: number | null,
  budget_max?: number | null,
  duration?: string | null,
  status?: "new" | "viewed" | "applied" | "declined" | "pending" | string | null,
  score?: number,
  created_at?: string,
  updated_at?: string
},

const SUGGESTION_TABLE_ENV =
  process.env.NEXT_PUBLIC_AI_MATCHES_TABLE || "ai_matches",

export default function TalentDashboardSuggestedJobs() {
  const [userId, setUserId] = useState<string | null>(null),
  const [loading, setLoading] = useState(true),
  const [suggestions, setSuggestions] = useState<JobSuggestion[]>([]),

  useEffect(() => {
    let mounted = true,
    async function init() {
      try {
        const { data } = await supabase.auth.getUser(),
        const currentUserId = data.user?.id || null,
        if (!mounted) return,
        setUserId(currentUserId),
        if (!currentUserId) {
          setSuggestions([]),
          setLoading(false),
          return,
        }
        await fetchSuggestions(currentUserId),
        setupRealtime(currentUserId),
      } finally {
        if (mounted) setLoading(false),
      }
    }
    init(),
    return () => {
      mounted = false,
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []),

  const fetchSuggestions = async (currentUserId: string) => {
    setLoading(true),
    const { data, error } = await supabase
      .from<JobSuggestion>(SUGGESTION_TABLE_ENV)
      .select(
        [
          "id",
          "match_type",
          "job_id",
          "job_title",
          "client_name",
          "client_id",
          "talent_id",
          "summary",
          "skills",
          "budget_min",
          "budget_max",
          "duration",
          "status",
          "score",
          "created_at",
          "updated_at",
        ].join(",")
      )
      .eq("talent_id", currentUserId)
      .or("match_type.eq.job_for_talent,match_type.is.null")
      .order("score", { ascending: false })
      .order("created_at", { ascending: false }),

    if (error) {
      setSuggestions([]),
      setLoading(false),
      return,
    }

    setSuggestions(data || []),
    setLoading(false),
  },

  const setupRealtime = (currentUserId: string) => {
    const channel = supabase
      .channel(`ai-jobs-talent-${currentUserId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: SUGGESTION_TABLE_ENV,
          filter: `talent_id=eq.${currentUserId}`,
        },
        () => fetchSuggestions(currentUserId)
      )
      .subscribe(),

    supabase
      .channel(`ai-jobs-talent-upd-${currentUserId}`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: SUGGESTION_TABLE_ENV,
          filter: `talent_id=eq.${currentUserId}`,
        },
        () => fetchSuggestions(currentUserId)
      )
      .subscribe(),

    return () => {
      supabase.removeChannel(channel),
    },
  },

  const newMatches = useMemo(
    () => (suggestions || []).filter((s) => (s.status || "new") === "new"),
    [suggestions]
  ),
  const viewedMatches = useMemo(
    () => (suggestions || []).filter((s) => (s.status || "new") !== "new"),
    [suggestions]
  ),

  const handleApply = async (s: JobSuggestion) => {
    await supabase
      .from(SUGGESTION_TABLE_ENV)
      .update({ status: "applied" })
      .eq("id", s.id),
    await fetchSuggestions(userId as string),
  },

  const handleDecline = async (s: JobSuggestion) => {
    await supabase
      .from(SUGGESTION_TABLE_ENV)
      .update({ status: "declined" })
      .eq("id", s.id),
    await fetchSuggestions(userId as string),
  },

  const Section = ({
    title,
    items,
    highlightNew,
  }: {
    title: string;
    items: JobSuggestion[];
    highlightNew?: boolean;
  }) => (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence initial={false}>
          {items.map((s) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className={`relative rounded-2xl border bg-white p-4 shadow-sm hover:shadow-md ${
                highlightNew && (s.status || "new") === "new"
                  ? "border-emerald-200 ring-1 ring-emerald-200"
                  : "border-gray-200"
              }`}
            >
              {(s.status || "new") === "new" && (
                <span className="absolute right-3 top-3 inline-flex items-center rounded-full bg-emerald-600/10 px-2 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                  New Match
                </span>
              )}
              <div className="mb-2 text-sm text-gray-500">
                {s.client_name || "Client"}
              </div>
              <h3 className="text-base font-medium text-gray-900">
                {s.job_title}
              </h3>
              {s.summary && (
                <p className="mt-2 line-clamp-3 text-sm text-gray-600">
                  {s.summary}
                </p>
              )}
              {!!s.skills?.length && (
                <div className="mt-3 flex flex-wrap gap-1">
                  {s.skills.slice(0, 6).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-gray-50 px-2 py-0.5 text-xs text-gray-700 ring-1 ring-inset ring-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                  {s.skills.length > 6 && (
                    <span className="text-xs text-gray-400">
                      +{s.skills.length - 6} more
                    </span>
                  )}
                </div>
              )}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm text-gray-700">
                <div>
                  {s.budget_min || s.budget_max ? (
                    <span>
                      {s.budget_min ? `$${s.budget_min}` : ""}
                      {s.budget_min && s.budget_max ? "–" : ""}
                      {s.budget_max ? `$${s.budget_max}` : ""} budget
                    </span>
                  ) : (
                    <span>Budget N/A</span>
                  )}
                </div>
                <div>{s.duration || "Duration N/A"}</div>
              </div>
              <div className="mt-4 flex items-center justify-end gap-2">
                <button
                  onClick={() => handleDecline(s)}
                  className="rounded-md px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  Decline
                </button>
                <button
                  onClick={() => handleApply(s)}
                  className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
                >
                  Apply Now
                </button>
              </div>
              {(s.status && s.status !== "new") && (
                <div className="mt-2 text-right text-xs text-gray-500">
                  Status: {s.status}
                </div>
              )}
            </motion.div>
          ))}
          {!items.length && (
            <div className="col-span-full rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600">
              No items here yet.
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  ),

  const content = useMemo(() => {
    if (loading) {
      return (
        <div className="space-y-4">
          <div className="h-6 w-40 animate-pulse rounded bg-gray-200" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-48 w-full animate-pulse rounded-xl bg-gray-100"
              />
            ))}
          </div>
        </div>
      ),
    }

    if (!userId) {
      return (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800">
          Please sign in to view AI-suggested jobs.
        </div>
      ),
    }

    return (
      <div className="space-y-10">
        <Section title="New Matches" items={newMatches} highlightNew />
        <Section title="Previously Viewed" items={viewedMatches} />
      </div>
    ),
  }, [loading, newMatches, userId, viewedMatches]),

  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Suggested Jobs</h1>
        <p className="text-sm text-gray-600">
          AI-recommended jobs based on your skills and availability.
        </p>
      </div>
      {content}
    </div>
  ),
=======
import EnhancedCard from '../../components/ui/EnhancedCard';
import EnhancedButton from '../../components/ui/EnhancedButton';
import { useEffect, useState } from 'react';

const STEPS = [
  { key: 'profile', label: 'Profile completed' },
  { key: 'skills', label: 'Skills added' },
  { key: 'availability', label: 'Availability set' },
  { key: 'match', label: 'First match received' },
] as const;

type StepKey = typeof STEPS[number]['key'];

export default function TalentDashboard() {
  const [completed, setCompleted] = useState<Record<StepKey, boolean>>({ profile: false, skills: false, availability: false, match: false });

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem('onboarding.talent');
      if (raw) setCompleted(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try { window.localStorage.setItem('onboarding.talent', JSON.stringify(completed)); } catch {}
  }, [completed]);

  const progress = Math.round((Object.values(completed).filter(Boolean).length / STEPS.length) * 100);

  const toggle = (key: StepKey) => setCompleted((c) => ({ ...c, [key]: !c[key] }));

  return (
    <div className="space-y-4">
      <EnhancedCard>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">Welcome back</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">Complete onboarding to unlock better matches.</p>
          </div>
          <div className="text-sm font-medium">{progress}%</div>
        </div>
        <div className="mt-3 h-2 w-full bg-gray-100 dark:bg-gray-800 rounded">
          <div className="h-2 rounded bg-blue-600" style={{ width: `${progress}%` }} />
        </div>
      </EnhancedCard>

      <EnhancedCard>
        <h2 className="font-semibold mb-2">Checklist</h2>
        <ul className="space-y-2">
          {STEPS.map((s) => (
            <li key={s.key} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full border ${completed[s.key] ? 'bg-emerald-500 text-white border-emerald-500' : 'border-gray-300 dark:border-gray-700'}`}>{completed[s.key] ? '✓' : ''}</span>
                <span className="text-sm">{s.label}</span>
              </div>
              {completed[s.key] ? (
                <button onClick={() => toggle(s.key)} className="text-xs text-gray-500 hover:underline">Undo</button>
              ) : (
                <EnhancedButton onClick={() => toggle(s.key)} variant="secondary" className="text-xs py-1 px-2">{s.key === 'skills' ? 'Add skills' : 'Mark done'}</EnhancedButton>
              )}
            </li>
          ))}
        </ul>
      </EnhancedCard>
    </div>
  );
>>>>>>> origin/auto/autonomy-17186719616
}