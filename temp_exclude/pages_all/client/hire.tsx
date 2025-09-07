import { useState } from "react";
import FeedbackModal from "../../components/ui/FeedbackModal";
export default function ClientHirePage() {
  const [talentSlug, setTalentSlug] = useState($2);
  const [startDateIso, setStartDateIso] = useState<string>(new Date().toISOString().slice(0, 10)),
  const [scopeSummary, setScopeSummary] = useState($2);
  const [termsType, setTermsType] = useState($2);
  const [hourlyRateUsd, setHourlyRateUsd] = useState($2);
  const [fixedAmountUsd, setFixedAmountUsd] = useState($2);
  const [agreementUrl, setAgreementUrl] = useState($2);
  const [loading, setLoading] = useState($2);
  const [result, setResult] = useState<any | null>(null),
  const [showFeedback, setShowFeedback] = useState($2);
  async function sendOffer() {
    setLoading($2);
    setResult($2);
    const paymentTerms =
      termsType === "hourly"
        ? { type: "hourly", hourlyRateUsd }
        : termsType === "fixed"
        ? { type: "fixed", fixedAmountUsd }
        : { type: "milestone", milestones: [] },

    const res = await fetch("/api/marketplace/offers", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-demo-user-role": "client", "x-demo-user-id": "client-1" },
      body: JSON.stringify({ talentSlug, startDateIso, scopeSummary, paymentTerms, agreementUrl })}),
    const json = await res.json($2);
    setLoading($2);
    if (!json.ok) {
      alert(json.error || "Failed to send offer")
    } else {
      setResult($2);
      setShowFeedback(true)
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-xl font-semibold">Hire Talent</h1>

      <div className="space-y-4 border rounded p-4">
        <div>
          <label className="block text-sm font-medium">Talent</label>
          <input value={talentSlug} onChange={(e) => setTalentSlug(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Start date</label>
          <input type="date" value={startDateIso} onChange={(e) => setStartDateIso(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Scope summary</label>
          <input value={scopeSummary} onChange={(e) => setScopeSummary(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Payment terms</label>
          <select value={termsType} onChange={(e) => setTermsType(e.target.value)} className="w-full border rounded px-3 py-2">
            <option value="hourly">Hourly</option>
            <option value="fixed">Fixed</option>
            <option value="milestone">Milestone</option>
          </select>
        </div>

        {termsType === "hourly" && (
          <div>
            <label className="block text-sm font-medium">Hourly rate (USD)</label>
            <input type="number" value={hourlyRateUsd} onChange={(e) => setHourlyRateUsd(Number(e.target.value))} className="w-full border rounded px-3 py-2" />
          </div>
        )}

        {termsType === "fixed" && (
          <div>
            <label className="block text-sm font-medium">Fixed amount (USD)</label>
            <input type="number" value={fixedAmountUsd} onChange={(e) => setFixedAmountUsd(Number(e.target.value))} className="w-full border rounded px-3 py-2" />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium">Agreement URL (optional)</label>
          <input value={agreementUrl} onChange={(e) => setAgreementUrl(e.target.value)} placeholder="https://..." className="w-full border rounded px-3 py-2" />
        </div>

        <div className="flex justify-end">
          <button onClick={sendOffer} disabled={loading} className="px-4 py-2 rounded bg-indigo-600 text-white">
            {loading ? "Sending…" : "Send Offer to Confirm"}
          </button>
        </div>
      </div>

      {result && (
        <div className="border rounded p-4 bg-emerald-50">
          <div className="font-medium">Offer sent</div>
          <div className="text-sm">Offer ID: {result.id}</div>
        </div>
      )}

      <FeedbackModal
        isOpen={showFeedback}
        onClose={() => setShowFeedback(false)}
        defaultContext={{ actionType: 'listing_publish', metadata: { talentSlug } }}
        userHeaders={{ 'x-demo-user-role': 'clientx-demo-user-id': 'client-1' }}
      />
    </div>
  )
}