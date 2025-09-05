import React, { useEffect, useMemo, useState } from &quot;react&quot;;
import { supabase } from &quot;../../utils/supabase/client&quot;;
import { AnimatePresence, motion } from &quot;framer-motion&quot;;

type TalentSuggestion = {
  id: string;
  match_type?: &quot;talent_for_job&quot; | string;
  job_id: string;
  job_title: string;
  client_id: string;
  talent_id: string;
  talent_name: string;
  talent_title?: string;
  talent_photo_url?: string;
  summary?: string;
  skills?: string[];
  hourly_rate?: number;
  status?: &quot;new&quot; | &quot;viewed&quot; | &quot;applied&quot; | &quot;declined&quot; | &quot;pending&quot; | string | null;
  score?: number;
  created_at?: string;
};

interface JobGroup {
  jobId: string;
  jobTitle: string;
  suggestions: TalentSuggestion[];
}

const SUGGESTION_TABLE_ENV =
  process.env.NEXT_PUBLIC_AI_MATCHES_TABLE || &quot;ai_matches&quot;;

const MAX_SUGGESTIONS_PER_JOB = 5;

const badge = (
  <span className=&quot;ml-2 inline-flex items-center rounded-full bg-indigo-600/10 px-2 py-0.5 text-xs font-medium text-indigo-600 ring-1 ring-inset ring-indigo-600/20&quot;>
    Matched by AI
  </span>
);

function InviteModal({
  open,
  onClose,
  talent,
  jobTitle}: {
  open: boolean;
  onClose: () => void;
  talent: TalentSuggestion | null;
  jobTitle: string | null;
}) {
  if (!open || !talent) return null;
  return (
    <div className=&quot;fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4&quot;>
      <div className=&quot;w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl&quot;>
        <div className=&quot;mb-4 flex items-center justify-between&quot;>
          <h3 className=&quot;text-lg font-semibold&quot;>Invite to apply</h3>
          <button onClick={onClose} className=&quot;rounded p-1 hover:bg-gray-100&quot;>
            ✕
          </button>
        </div>
        <div className=&quot;space-y-4&quot;>
          <div className=&quot;flex items-center gap-3&quot;>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={talent.talent_photo_url || &quot;/default-avatar.svg&quot;}
              alt={talent.talent_name}
              className=&quot;h-10 w-10 rounded-full object-cover ring-2 ring-indigo-500/20&quot;
            />
            <div>
              <div className=&quot;font-medium&quot;>{talent.talent_name}</div>
              {talent.talent_title && (
                <div className=&quot;text-xs text-gray-500&quot;>{talent.talent_title}</div>
              )}
            </div>
          </div>
          <div>
            <label className=&quot;mb-1 block text-sm font-medium text-gray-700&quot;>
              Job
            </label>
            <input
              value={jobTitle || ""}
              readOnly
              className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700&quot;>
              Message (optional)
            </label>
            <textarea
              placeholder=&quot;Share context or request a quote..."
              className="h-28 w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div className="flex items-center justify-end gap-2">
            <button
              onClick={onClose}
              className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={onClose}
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700&quot;
            >
              Send Invite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ClientDashboardSuggestedTalents() {
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [groups, setGroups] = useState<JobGroup[]>([]);
  const [inviteOpen, setInviteOpen] = useState(false);
  const [inviteTalent, setInviteTalent] = useState<TalentSuggestion | null>(
    null
  );
  const [inviteJobTitle, setInviteJobTitle] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function init() {
      try {
        const { data } = await supabase.auth.getUser();
        const currentUserId = data.user?.id || null;
        if (!mounted) return;
        setUserId(currentUserId);
        if (!currentUserId) {
          setGroups([]);
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
      .from<TalentSuggestion>(SUGGESTION_TABLE_ENV)
      .select(
        [
          &quot;id&quot;,
          &quot;match_type&quot;,
          &quot;job_id&quot;,
          &quot;job_title&quot;,
          &quot;client_id&quot;,
          &quot;talent_id&quot;,
          &quot;talent_name&quot;,
          &quot;talent_title&quot;,
          &quot;talent_photo_url&quot;,
          &quot;summary&quot;,
          &quot;skills&quot;,
          &quot;hourly_rate&quot;,
          &quot;status&quot;,
          &quot;score&quot;,
          &quot;created_at&quot;].join(&quot;,&quot;)
      )
      .eq(&quot;client_id&quot;, currentUserId)
      .or(&quot;match_type.eq.talent_for_job,match_type.is.null&quot;)
      .order(&quot;score&quot;, { ascending: false })
      .order(&quot;created_at&quot;, { ascending: false });

    if (error) {
      // fail softly
      setGroups([]);
      setLoading(false);
      return;
    }

    const grouped = groupByJob(data || []);
    setGroups(grouped);
    setLoading(false);
  };

  const setupRealtime = (currentUserId: string) => {
    const channel = supabase
      .channel(`ai-matches-client-${currentUserId}`)
      .on(
        &quot;postgres_changes&quot;,
        {
          event: &quot;INSERT&quot;,
          schema: &quot;public&quot;,
          table: SUGGESTION_TABLE_ENV,
          filter: `client_id=eq.${currentUserId}`},
        () => fetchSuggestions(currentUserId)
      )
      .subscribe();

    // Optional: listen for updates to status
    supabase
      .channel(`ai-matches-client-upd-${currentUserId}`)
      .on(
        &quot;postgres_changes&quot;,
        {
          event: &quot;UPDATE&quot;,
          schema: &quot;public&quot;,
          table: SUGGESTION_TABLE_ENV,
          filter: `client_id=eq.${currentUserId}`},
        () => fetchSuggestions(currentUserId)
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  };

  const groupByJob = (rows: TalentSuggestion[]): JobGroup[] => {
    const byJob = new Map<string, JobGroup>();
    for (const row of rows) {
      const key = row.job_id;
      if (!key) continue;
      const group = byJob.get(key) || {
        jobId: key,
        jobTitle: row.job_title || &quot;Untitled Job",
        suggestions: []};
      if (group.suggestions.length < MAX_SUGGESTIONS_PER_JOB) {
        group.suggestions.push(row);
      }
      byJob.set(key, group);
    }
    return Array.from(byJob.values());
  };

  const content = useMemo(() => {
    if (loading) {
      return (
        <div className="space-y-4">
          <div className="h-6 w-40 animate-pulse rounded bg-gray-200" />
          <div className="flex gap-4 overflow-x-auto pb-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-48 w-72 min-w-[18rem] animate-pulse rounded-xl bg-gray-100"
              />
            ))}
          </div>
        </div>
      );
    }

    if (!userId) {
      return (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800">
          Please sign in to view AI-suggested talents for your jobs.
        </div>
      );
    }

    if (!groups.length) {
      return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600">
          <div className="mb-1 text-lg font-medium">
            No suggestions yet — check back soon or explore manually
          </div>
          <div className="text-sm">
            Our AI will populate matches as candidates align with your jobs.
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-10">
        {groups.map((group) => (
          <section key={group.jobId} className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">
              {group.jobTitle}
            </h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
              <AnimatePresence initial={false}>
                {group.suggestions.map((s) => (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="relative min-w-[18rem] max-w-xs flex-1 rounded-2xl border border-indigo-100 bg-white p-4 shadow-sm ring-1 ring-transparent hover:shadow-md"
                  >
                    <div className="absolute right-3 top-3">{badge}</div>
                    <div className="flex items-center gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={s.talent_photo_url || "/default-avatar.svg"}
                        alt={s.talent_name}
                        className="h-12 w-12 rounded-full object-cover ring-2 ring-indigo-500/10"
                      />
                      <div>
                        <div className="font-medium text-gray-900">
                          {s.talent_name}
                        </div>
                        {s.talent_title && (
                          <div className="text-xs text-gray-500">
                            {s.talent_title}
                          </div>
                        )}
                      </div>
                    </div>
                    {s.summary && (
                      <p className="mt-3 line-clamp-3 text-sm text-gray-600">
                        {s.summary}
                      </p>
                    )}
                    {!!s.skills?.length && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {s.skills.slice(0, 6).map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full bg-indigo-50 px-2 py-0.5 text-xs text-indigo-700 ring-1 ring-inset ring-indigo-200"
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
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-sm text-gray-700&quot;>
                        {s.hourly_rate ? `$${s.hourly_rate}/hr` : &quot;Rate N/A"}
                      </div>
                      <button
                        onClick={() => {
                          setInviteTalent(s);
                          setInviteJobTitle(group.jobTitle);
                          setInviteOpen(true);
                        }}
                        className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
                      >
                        Invite to Apply
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </section>
        ))}
      </div>
    );
  }, [badge, groups, loading, userId]);

  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Suggested Talents</h1>
        <p className="text-sm text-gray-600">
          Top AI-picked candidates for your open jobs.
        </p>
      </div>
      {content}

      <InviteModal
        open={inviteOpen}
        onClose={() => setInviteOpen(false)}
        talent={inviteTalent}
        jobTitle={inviteJobTitle}
      />
    </div>
  );
}