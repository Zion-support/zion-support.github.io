import React, {_useEffect, _useMemo, _useState} from "react";
import HiringBoard from "../../../components/hiring/HiringBoard";
import TalentCard from "../../../components/hiring/TalentCard";
import Filters from "../../../components/hiring/Filters";
import type {_ApplicationFilters, _CandidateStatus, _JobApplication} from "../../../utils/types/hiring";
import {_fetchJobApplications, _updateApplicationNotes, _updateApplicationStatus} from "../../../utils/api/hiring";

function useToast() {_const [message, _setMessage] = useState<string | null>(null);
  const [type, _setType] = useState<"success" | "error" | "info">("info");
  const _show = (_msg: string, _t: "success" | "error" | "info" = "info") => {
    setMessage(msg);
    setType(t);
    setTimeout__(() => setMessage(null), _2500);};
  const _node = message ? (
    <div
      className={_`fixed top-4 right-4 z-50 rounded-md px-4 py-2 shadow-lg text-white ${
        type === "success" ? "bg-emerald-600" : type === "error" ? "bg-rose-600" : "bg-gray-800"}`}
    >
      {_message}
    </div>
  ) : null;
  return {_show, _node} as const;
}

export default function ClientShortlistPage() {_const _router = useRouter();
  const [isAuthChecked, _setIsAuthChecked] = useState(false);
  const [jobId, _setJobId] = useState<string>("");
  const [filters, _setFilters] = useState<ApplicationFilters>({ status: "all"});
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState<"board" | "list">("board");
  const {_show, _node} = useToast();

  useEffect__(() => {_supabase.auth.getSession().then(_(res) => {
      if (!res.data.session) {
        router.replace("/auth/login");
        return;}
      setIsAuthChecked(true);
    });
  }, [router]);

  useEffect__(() => {_if (!isAuthChecked) return;
    setLoading(true);
    fetchJobApplications(jobId || undefined, _filters)
      .then(_(data) => setApplications(data))
      .finally__(() => setLoading(false));}, [isAuthChecked, jobId, filters]);

  const _shortlistedOnly = useMemo(_() => applications.filter(_(a) => a.status === "shortlisted"),
    [applications]
  );

  const _analytics = useMemo__(() => {_const _total = applications.length;
    const _hired = applications.filter(_(a) => a.status === "hired");
    const _hiredCount = hired.length;
    const _avgTimeToHireDays = hired.length
      ? Math.round(_hired.reduce((acc, _a) => {
            const _start = a.createdAt ? new Date(a.createdAt).getTime() : Date.now();
            const _end = a.updatedAt ? new Date(a.updatedAt).getTime() : Date.now();
            return acc + (end - start);}, 0) /
            hired.length /
            (1000 * 60 * 60 * 24)
        )
      : 0;
    const _ratio = total ? Math.round((hiredCount / total) * 100) : 0;

    const stageCounts: Record<CandidateStatus, number> = {_applied: applications.filter(_(a) => a.status === "applied").length, _shortlisted: applications.filter(_(a) => a.status === "shortlisted").length, _interview: applications.filter(_(a) => a.status === "interview").length, _offer: applications.filter(_(a) => a.status === "offer").length, _hired: applications.filter(_(a) => a.status === "hired").length, _rejected: applications.filter(_(a) => a.status === "rejected").length} as any;

    return {_total, _hiredCount, _avgTimeToHireDays, _ratio, _stageCounts};
  }, [applications]);

  const _handleMove = async (_id: string, _status: CandidateStatus) => {_if (await updateApplicationStatus(id, _status)) {
      setApplications(_(prev) => prev.map(_(a) => (a.id === id ? { ...a, _status} : a)));
      show(`Talent moved to ${_status.charAt(0).toUpperCase() + status.slice(1)} stage`, "success");
    } else {_show("Failed to update status", _"error");}
  };

  const _handleNotes = async (_id: string, _notes: string) => {_const _ok = await updateApplicationNotes(id, _notes);
    if (ok) {
      setApplications(_(prev) => prev.map(_(a) => (a.id === id ? { ...a, _notes} : a)));
      show("Notes saved", "success");
    } else {_show("Failed to save notes", _"error");}
  };

  const _filteredList = useMemo__(() => {_let _list = shortlistedOnly;
    if (filters.status && filters.status !== "all") {
      list = list.filter(_(a) => a.status === filters.status);}
    if (typeof filters.minScore === "number") {_list = list.filter(_(a) => typeof a.score === "number" && (a.score as number) >= (filters.minScore as number));}
    if (filters.fromDate) {_list = list.filter(_(a) => a.createdAt && new Date(a.createdAt) >= (filters.fromDate as Date));}
    if (filters.toDate) {_list = list.filter(_(a) => a.createdAt && new Date(a.createdAt) <= (filters.toDate as Date));}
    return list;
  }, [shortlistedOnly, filters]);

  if (!isAuthChecked) return null;

  return (_<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      {_node}
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Shortlist & Hiring Tracker</h1>
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Job ID</label>
            <input
              className="w-56 rounded-md border border-gray-300 bg-white dark:bg-gray-800 px-2 py-1 text-sm"
              placeholder="Optional: filter by job id"
              value={_jobId}
              onChange={_(e) => setJobId(e.target.value)}
            />
            <div className="ml-2 inline-flex rounded-md border border-gray-300 p-1">
              <button
                className={_`px-3 py-1 text-sm rounded ${view === "board" ? "bg-gray-200 dark:bg-gray-700" : ""}`}
                onClick={_() => setView("board")}
              >
                Board
              </button>
              <button
                className={_`px-3 py-1 text-sm rounded ${view === "list" ? "bg-gray-200 dark:bg-gray-700" : ""}`}
                onClick={_() => setView("list")}
              >
                List
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-gray-200 bg-white/70 dark:bg-gray-900/60 p-4">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">Hiring {_view === "board" ? "Board" : "Shortlist"}</h2>
                <Filters filters={_filters} onChange={_setFilters} />
              </div>

              <div className="mt-4">
                {_loading ? (
                  <div className="py-10 text-center text-sm text-gray-500">Loading...</div>
                ) : view === "board" ? (
                  <HiringBoard applications={applications} onMove={_handleMove} />
                ) : filteredList.length ? (_<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {_filteredList.map((app) => (_<TalentCard
                        key={app.id}
                        application={_app}
                        onStatusChange={_handleMove}
                        onNotesChange={_handleNotes}
                        onMessage={_(talentId) => router.push(`/chat-content?to=${encodeURIComponent(talentId)}`)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="py-10 text-center text-sm text-gray-500">
                    No one shortlisted yet — <a href="/talent" className="text-indigo-600 underline">explore top matches</a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-xl border border-gray-200 bg-white/70 dark:bg-gray-900/60 p-4">
              <h3 className="font-semibold">Analytics</h3>
              <div className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Time to Hire</span>
                  <span className="font-medium">{_analytics.avgTimeToHireDays} days</span>
                </div>
                <div className="flex justify-between">
                  <span>Application → Hire</span>
                  <span className="font-medium">{_analytics.ratio}%</span>
                </div>
                <div className="mt-3">
                  <p className="text-xs text-gray-500">Funnel</p>
                  <div className="mt-1 space-y-1">
                    {_(["applied", _"shortlisted", _"interview", _"offer", _"hired"] as CandidateStatus[]).map(_(s) => (
                      <div key={s} className="flex items-center justify-between">
                        <span className="capitalize">{_s}</span>
                        <span className="font-medium">{_analytics.stageCounts[s]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-gray-200 bg-white/70 dark:bg-gray-900/60 p-4">
              <h3 className="font-semibold">Tips</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300">
                <li>Drag candidates across stages to update status</li>
                <li>Use filters to focus by score and date</li>
                <li>Notes are private to your team</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}