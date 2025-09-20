import React, { useEffect, useMemo, useState } from "react";
import { supabase } from "../../utils/supabase/client";
import { AnimatePresence, motion } from "framer-motion";

type TalentSuggestion = {
  id: string;
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
  created_at?: string;
};

interface JobGroup {
  jobId: string;
  jobTitle: string;
  suggestions: TalentSuggestion[];
}

const SUGGESTION_TABLE_ENV =
  process.env.NEXT_PUBLIC_AI_MATCHES_TABLE || "ai_matches";

const MAX_SUGGESTIONS_PER_JOB = 5;

const badge = (
  <span className="ml-2 inline-flex items-center rounded-full bg-indigo-600/10 px-2 py-0.5 text-xs font-medium text-indigo-600 ring-1 ring-inset ring-indigo-600/20">
    Matched by AI
  </span>
);

function InviteModal({
  open,
  onClose,
  talent,
  jobTitle,
}: {
  open: boolean;
  onClose: () => void;
  talent: TalentSuggestion | null;
  jobTitle: string | null;
}) {
  if (!open || !talent) return null;
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={talent.talent_photo_url || "/default-avatar.svg"}
              alt={talent.talent_name}
              className="h-10 w-10 rounded-full object-cover ring-2 ring-indigo-500/20"
            />
            <div>
              <div className="font-medium">{talent.talent_name}</div>
              {talent.talent_title && (
                <div className="text-xs text-gray-500">{talent.talent_title}</div>
              )}
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Job
            </label>
            <input
              value={jobTitle || ""}
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
              onClick={onClose}
              className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={onClose}
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
    async function load() {
      const res = await fetch("/api/marketplace/offers", {
        headers: { "x-demo-user-role": "client", "x-demo-user-id": "client-1" },
      });
      const json = await res.json();
      if (json.ok) setOffers(json.offers);
    }
    load();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Client Dashboard</h1>
        <Link href="/client/hire" className="px-3 py-2 rounded bg-indigo-600 text-white">Create Offer</Link>
      </div>

      {offers.map((o) => (
        <div key={o.id} className="border rounded p-4 flex items-center justify-between">
          <div>
            <div className="font-medium">Offer to {o.talentSlug}</div>
            <div className="text-sm text-gray-600">{o.scopeSummary} • {o.paymentTerms?.type}</div>
            <div className="text-xs">Status: <span className="px-2 py-0.5 bg-gray-100 rounded">{o.status}</span></div>
          </div>
          <div>
            {o.projectId ? (
              <Link href={`/project/${o.projectId}`} className="px-3 py-1 rounded bg-emerald-600 text-white">Open Project</Link>
            ) : (
              <span className="text-xs text-gray-500">Awaiting talent response</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}