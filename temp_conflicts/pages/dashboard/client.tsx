import React, {_useEffect, _useMemo, _useState} from "react";

type TalentSuggestion = {_id: string;
  match_type?: "talent_for_job" | string;
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
  status?: "new" | "viewed" | "applied" | "declined" | "pending" | string | null;
  score?: number;
  created_at?: string;};

interface JobGroup {_jobId: string;
  jobTitle: string;
  suggestions: TalentSuggestion[];}

const _SUGGESTION_TABLE_ENV =
  process.env.NEXT_PUBLIC_AI_MATCHES_TABLE || "ai_matches";

const _MAX_SUGGESTIONS_PER_JOB = 5;

const _badge = (
  <span className="ml-2 inline-flex items-center rounded-full bg-indigo-600/10 px-2 py-0.5 text-xs font-medium text-indigo-600 ring-1 ring-inset ring-indigo-600/20">
    Matched by AI
  </span>
);

function InviteModal(_{_open, _onClose, _talent, _jobTitle}: {_open: boolean;
  onClose: () => void;
  talent: TalentSuggestion | null;
  jobTitle: string | null;}) {_if (!open || !talent) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Invite to apply</h3>
          <button onClick={onClose} className="rounded p-1 hover:bg-gray-100">
            ✕
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            {_/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={_talent.talent_photo_url || "/default-avatar.svg"}
              alt={_talent.talent_name}
              className="h-10 w-10 rounded-full object-cover ring-2 ring-indigo-500/20"
            />
            <div>
              <div className="font-medium">{_talent.talent_name}</div>
              {_talent.talent_title && (
                <div className="text-xs text-gray-500">{talent.talent_title}</div>
              )}
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Job
            </label>
            <input
              value={_jobTitle || ""}
              readOnly
              className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Message (optional)
            </label>
            <textarea
              placeholder="Share context or request a quote..."
              className="h-28 w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div className="flex items-center justify-end gap-2">
            <button
              onClick={_onClose}
              className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={_onClose}
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              Send Invite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ClientDashboardSuggestedTalents() {_const [userId, _setUserId] = useState<string | null>(null);
  const [loading, _setLoading] = useState(true);
  const [groups, _setGroups] = useState<JobGroup[]>([]);
  const [inviteOpen, _setInviteOpen] = useState(false);
  const [inviteTalent, _setInviteTalent] = useState<TalentSuggestion | null>(
    null
  );
  const [inviteJobTitle, _setInviteJobTitle] = useState<string | null>(null);

  useEffect__(() => {
    let _mounted = true;

    async function init() {
      try {
        const { data} = await supabase.auth.getUser();
        const _currentUserId = data.user?.id || null;
        if (!mounted) return;
        setUserId(currentUserId);
        if (!currentUserId) {_setGroups([]);
          setLoading(false);
          return;}
        await fetchSuggestions(currentUserId);
        setupRealtime(currentUserId);
      } finally {_if (mounted) setLoading(false);}
    }

    init();
    return () => {_mounted = false;};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _fetchSuggestions = async (_currentUserId: string) => {_setLoading(true);
    const { data, _error} = await supabase
      .from<TalentSuggestion>(SUGGESTION_TABLE_ENV)
      .select(
        [
          "id",
          "match_type",
          "job_id",
          "job_title",
          "client_id",
          "talent_id",
          "talent_name",
          "talent_title",
          "talent_photo_url",
          "summary",
          "skills",
          "hourly_rate",
          "status",
          "score",
          "created_at"].join(",")
      )
      .eq("client_id", currentUserId)
      .or("match_type.eq.talent_for_job,match_type.is.null")
      .order("score", {_ascending: false})
      .order("created_at", {_ascending: false});

    if (error) {_// fail softly
      setGroups([]);
      setLoading(false);
      return;}

    const _grouped = groupByJob(data || []);
    setGroups(grouped);
    setLoading(false);
  };

  const _setupRealtime = (_currentUserId: string) => {_const _channel = supabase
      .channel(`ai-matches-client-${currentUserId}`)
      .on(_"postgres_changes", _{_event: "INSERT", _schema: "public", _table: SUGGESTION_TABLE_ENV, _filter: `client_id=eq.${currentUserId}`}, _() => fetchSuggestions(currentUserId)
      )
      .subscribe();

    // Optional: listen for updates to status
    supabase
      .channel(`ai-matches-client-upd-${_currentUserId}`)
      .on(_"postgres_changes", _{_event: "UPDATE", _schema: "public", _table: SUGGESTION_TABLE_ENV, _filter: `client_id=eq.${currentUserId}`}, _() => fetchSuggestions(currentUserId)
      )
      .subscribe();

    return () => {_supabase.removeChannel(channel);};
  };

  const _groupByJob = (rows: TalentSuggestion[]): JobGroup[] => {_const _byJob = new Map<string, _JobGroup>();
    for (const row of rows) {
      const _key = row.job_id;
      if (!key) continue;
      const _group = byJob.get(key) || {
        jobId: key, _jobTitle: row.job_title || "Untitled Job", _suggestions: []};
      if (group.suggestions.length < MAX_SUGGESTIONS_PER_JOB) {_group.suggestions.push(row);}
      byJob.set(key, group);
    }
    return Array.from(byJob.values());
  };

  const _content = useMemo__(() => {_if (loading) {
      return (
        <div className="space-y-4">
          <div className="h-6 w-40 animate-pulse rounded bg-gray-200" />
          <div className="flex gap-4 overflow-x-auto pb-2">
            {Array.from({ length: 3}).map(_(_, _i) => (
              <div
                key={_i}
                className="h-48 w-72 min-w-[18rem] animate-pulse rounded-xl bg-gray-100"
              />
            ))}
          </div>
        </div>
      );
    }

    if (!userId) {_return (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800">
          Please sign in to view AI-suggested talents for your jobs.
        </div>
      );}

    if (!groups.length) {_return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600">
          <div className="mb-1 text-lg font-medium">
            No suggestions yet — check back soon or explore manually
          </div>
          <div className="text-sm">
            Our AI will populate matches as candidates align with your jobs.
          </div>
        </div>
      );}

    return (_<div className="space-y-10">
        {_groups.map((group) => (_<section key={group.jobId} className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">
              {_group.jobTitle}
            </h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
              <AnimatePresence initial={_false}>
                {_group.suggestions.map((s) => (
                  <motion.div
                    key={s.id}
                    initial={_{ opacity: 0, _y: 10}}
                    animate={_{ opacity: 1, _y: 0}}
                    exit={_{ opacity: 0, _y: 10}}
                    transition={_{ duration: 0.2}}
                    className="relative min-w-[18rem] max-w-xs flex-1 rounded-2xl border border-indigo-100 bg-white p-4 shadow-sm ring-1 ring-transparent hover:shadow-md"
                  >
                    <div className="absolute right-3 top-3">{_badge}</div>
                    <div className="flex items-center gap-3">
                      {_/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={_s.talent_photo_url || "/default-avatar.svg"}
                        alt={_s.talent_name}
                        className="h-12 w-12 rounded-full object-cover ring-2 ring-indigo-500/10"
                      />
                      <div>
                        <div className="font-medium text-gray-900">
                          {_s.talent_name}
                        </div>
                        {_s.talent_title && (
                          <div className="text-xs text-gray-500">
                            {s.talent_title}
                          </div>
                        )}
                      </div>
                    </div>
                    {_s.summary && (
                      <p className="mt-3 line-clamp-3 text-sm text-gray-600">
                        {s.summary}
                      </p>
                    )}
                    {_!!s.skills?.length && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {s.skills.slice(0, _6).map(_(skill) => (
                          <span
                            key={skill}
                            className="rounded-full bg-indigo-50 px-2 py-0.5 text-xs text-indigo-700 ring-1 ring-inset ring-indigo-200"
                          >
                            {_skill}
                          </span>
                        ))}
                        {_s.skills.length > 6 && (
                          <span className="text-xs text-gray-400">
                            +{s.skills.length - 6} more
                          </span>
                        )}
                      </div>
                    )}
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-sm text-gray-700">
                        {_s.hourly_rate ? `$${s.hourly_rate}/hr` : "Rate N/A"}
                      </div>
                      <button
                        onClick={_() => {
                          setInviteTalent(s);
                          setInviteJobTitle(group.jobTitle);
                          setInviteOpen(true);}}
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

  return (_<div className="mx-auto max-w-6xl space-y-6 px-4 py-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Suggested Talents</h1>
        <p className="text-sm text-gray-600">
          Top AI-picked candidates for your open jobs.
        </p>
      </div>
      {_content}

      <InviteModal
        open={_inviteOpen}
        onClose={_() => setInviteOpen(false)}
        talent={_inviteTalent}
        jobTitle={_inviteJobTitle}
      />
    </div>
  );
}