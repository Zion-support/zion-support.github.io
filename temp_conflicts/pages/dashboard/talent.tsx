import React, { useEffect, useMemo, useState } from &quot;react&quot;;
import { supabase } from &quot;../../utils/supabase/client&quot;;
import { AnimatePresence, motion } from &quot;framer-motion&quot;;

type JobSuggestion = {
  id: string;
  match_type?: &quot;job_for_talent&quot; | string;
  job_id: string;
  job_title: string;
  client_name?: string;
  client_id?: string;
  talent_id: string;
  summary?: string;
  skills?: string[];
  budget_min?: number | null;
  budget_max?: number | null;
  duration?: string | null;
  status?: &quot;new&quot; | &quot;viewed&quot; | &quot;applied&quot; | &quot;declined&quot; | &quot;pending&quot; | string | null;
  score?: number;
  created_at?: string;
  updated_at?: string;
};

const SUGGESTION_TABLE_ENV =
  process.env.NEXT_PUBLIC_AI_MATCHES_TABLE || &quot;ai_matches&quot;;

export default function TalentDashboardSuggestedJobs() {
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [suggestions, setSuggestions] = useState<JobSuggestion[]>([]);

  useEffect(() => {
    let mounted = true;
    async function init() {
      try {
        const { data } = await supabase.auth.getUser();
        const currentUserId = data.user?.id || null;
        if (!mounted) return;
        setUserId(currentUserId);
        if (!currentUserId) {
          setSuggestions([]);
          setLoading(false);
          return;
        }
        await fetchSuggestions(currentUserId);
        setupRealtime(currentUserId);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    init();
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchSuggestions = async (currentUserId: string) => {
    setLoading(true);
    const { data, error } = await supabase
      .from<JobSuggestion>(SUGGESTION_TABLE_ENV)
      .select(
        [
          &quot;id&quot;,
          &quot;match_type&quot;,
          &quot;job_id&quot;,
          &quot;job_title&quot;,
          &quot;client_name&quot;,
          &quot;client_id&quot;,
          &quot;talent_id&quot;,
          &quot;summary&quot;,
          &quot;skills&quot;,
          &quot;budget_min&quot;,
          &quot;budget_max&quot;,
          &quot;duration&quot;,
          &quot;status&quot;,
          &quot;score&quot;,
          &quot;created_at&quot;,
          &quot;updated_at&quot;].join(&quot;,&quot;)
      )
      .eq(&quot;talent_id&quot;, currentUserId)
      .or(&quot;match_type.eq.job_for_talent,match_type.is.null&quot;)
      .order(&quot;score&quot;, { ascending: false })
      .order(&quot;created_at&quot;, { ascending: false });

    if (error) {
      setSuggestions([]);
      setLoading(false);
      return;
    }

    setSuggestions(data || []);
    setLoading(false);
  };

  const setupRealtime = (currentUserId: string) => {
    const channel = supabase
      .channel(`ai-jobs-talent-${currentUserId}`)
      .on(
        &quot;postgres_changes&quot;,
        {
          event: &quot;INSERT&quot;,
          schema: &quot;public&quot;,
          table: SUGGESTION_TABLE_ENV,
          filter: `talent_id=eq.${currentUserId}`},
        () => fetchSuggestions(currentUserId)
      )
      .subscribe();

    supabase
      .channel(`ai-jobs-talent-upd-${currentUserId}`)
      .on(
        &quot;postgres_changes&quot;,
        {
          event: &quot;UPDATE&quot;,
          schema: &quot;public&quot;,
          table: SUGGESTION_TABLE_ENV,
          filter: `talent_id=eq.${currentUserId}`},
        () => fetchSuggestions(currentUserId)
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  };

  const newMatches = useMemo(
    () => (suggestions || []).filter((s) => (s.status || &quot;new&quot;) === &quot;new&quot;),
    [suggestions]
  );
  const viewedMatches = useMemo(
    () => (suggestions || []).filter((s) => (s.status || &quot;new&quot;) !== &quot;new&quot;),
    [suggestions]
  );

  const handleApply = async (s: JobSuggestion) => {
    await supabase
      .from(SUGGESTION_TABLE_ENV)
      .update({ status: &quot;applied&quot; })
      .eq(&quot;id&quot;, s.id);
    await fetchSuggestions(userId as string);
  };

  const handleDecline = async (s: JobSuggestion) => {
    await supabase
      .from(SUGGESTION_TABLE_ENV)
      .update({ status: &quot;declined&quot; })
      .eq(&quot;id&quot;, s.id);
    await fetchSuggestions(userId as string);
  };

  const Section = ({
    title,
    items,
    highlightNew}: {
    title: string;
    items: JobSuggestion[];
    highlightNew?: boolean;
  }) => (
    <section className=&quot;space-y-3&quot;>
      <h2 className=&quot;text-lg font-semibold text-gray-900&quot;>{title}</h2>
      <div className=&quot;grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3&quot;>
        <AnimatePresence initial={false}>
          {items.map((s) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className={`relative rounded-2xl border bg-white p-4 shadow-sm hover:shadow-md ${
                highlightNew && (s.status || &quot;new&quot;) === &quot;new&quot;
                  ? &quot;border-emerald-200 ring-1 ring-emerald-200&quot;
                  : &quot;border-gray-200&quot;
              }`}
            >
              {(s.status || &quot;new&quot;) === &quot;new&quot; && (
                <span className=&quot;absolute right-3 top-3 inline-flex items-center rounded-full bg-emerald-600/10 px-2 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20&quot;>
                  New Match
                </span>
              )}
              <div className=&quot;mb-2 text-sm text-gray-500&quot;>
                {s.client_name || &quot;Client&quot;}
              </div>
              <h3 className=&quot;text-base font-medium text-gray-900&quot;>
                {s.job_title}
              </h3>
              {s.summary && (
                <p className=&quot;mt-2 line-clamp-3 text-sm text-gray-600&quot;>
                  {s.summary}
                </p>
              )}
              {!!s.skills?.length && (
                <div className=&quot;mt-3 flex flex-wrap gap-1&quot;>
                  {s.skills.slice(0, 6).map((skill) => (
                    <span
                      key={skill}
                      className=&quot;rounded-full bg-gray-50 px-2 py-0.5 text-xs text-gray-700 ring-1 ring-inset ring-gray-200&quot;
                    >
                      {skill}
                    </span>
                  ))}
                  {s.skills.length > 6 && (
                    <span className=&quot;text-xs text-gray-400&quot;>
                      +{s.skills.length - 6} more
                    </span>
                  )}
                </div>
              )}
              <div className=&quot;mt-4 flex flex-wrap items-center justify-between gap-2 text-sm text-gray-700&quot;>
                <div>
                  {s.budget_min || s.budget_max ? (
                    <span>
                      {s.budget_min ? `$${s.budget_min}` : "&quot;}
                      {s.budget_min && s.budget_max ? &quot;–&quot; : "&quot;}
                      {s.budget_max ? `$${s.budget_max}` : "&quot;} budget
                    </span>
                  ) : (
                    <span>Budget N/A</span>
                  )}
                </div>
                <div>{s.duration || &quot;Duration N/A"}</div>
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
                  className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700&quot;
                >
                  Apply Now
                </button>
              </div>
              {(s.status && s.status !== &quot;new") && (
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
  );

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
      );
    }

    if (!userId) {
      return (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800">
          Please sign in to view AI-suggested jobs.
        </div>
      );
    }

    return (
      <div className="space-y-10&quot;>
        <Section title=&quot;New Matches&quot; items={newMatches} highlightNew />
        <Section title=&quot;Previously Viewed" items={viewedMatches} />
      </div>
    );
  }, [loading, newMatches, userId, viewedMatches]);

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
  );
}