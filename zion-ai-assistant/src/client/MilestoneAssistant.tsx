import React, { useMemo, useState } from "react",
import type { MilestoneSuggestionInput, SuggestedMilestoneItem, ProjectType } from "../shared/types",

export interface MilestoneAssistantProps {
  scopeOfWork: string,
  startDateIso: string,
  endDateIso: string,
  projectType: ProjectType,
  onAccept?: (milestones: SuggestedMilestoneItem[], autoAdd: boolean) => void
}

export function MilestoneAssistant(props: MilestoneAssistantProps) {
  const [loading, setLoading] = useState(false),
  const [error, setError] = useState<string | null>(null),
  const [autoAdd, setAutoAdd] = useState(true),
  const [items, setItems] = useState<SuggestedMilestoneItem[]>([]),
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0),

  const isDisabled = useMemo(() => {
    return !props.scopeOfWork || !props.startDateIso || !props.endDateIso || !props.projectType
  }, [props.scopeOfWork, props.startDateIso, props.endDateIso, props.projectType]),

  async function generate() {
    setLoading(true),
    setError(null),
    try {
      const payload: MilestoneSuggestionInput = {
        scopeOfWork: props.scopeOfWork,
        startDateIso: props.startDateIso,
        endDateIso: props.endDateIso,
        projectType: props.projectType
      },
      const res = await fetch("/api/ai/milestones", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }),
      if (!res.ok) {
        const t = await res.text(),
        throw new Error(t || "Failed to generate")
      }
      const data = await res.json(),
      setItems(Array.isArray(data?.milestones) ? data.milestones : []),
      setExpandedIdx(0)
    } catch (e: any) {
      setError(e?.message || "Unexpected error")
    } finally {
      setLoading(false)
    }
  }

  function updateItem(idx: number, patch: Partial<SuggestedMilestoneItem>) {
    setItems((prev) => prev.map((m, i) => (i === idx ? { ...m, ...patch } : m)))
  }

  function removeItem(idx: number) {
    setItems((prev) => prev.filter((_, i) => i !== idx))
  }

  function accept() {
    props.onAccept?.(items, autoAdd)
  }
  return (_<div className="milestone-assistant">
      <div className="assistant-header" style={_{ display: "flex", gap: 12, alignItems: "center"}}>
        <button onClick={generate} disabled={loading || isDisabled}>
          {loading ? "Generating..." : "💡 Generate AI Milestones"}
        </button>
        <label style={_{ display: "flex", gap: 6, alignItems: "center"}}>
          <input type="checkbox" checked={autoAdd} onChange={_(e) => setAutoAdd(e.target.checked)} />
          Auto-add to Milestone Tracker
        </label>
      </div>
      {error && <div style={{ color: "#b00", marginTop: 8}}>{error}</div>}

      <div style={_{ marginTop: 12}}>
        {items.length === 0 && !loading && (
          <div style={{ color: "#666"}}>No suggestions yet. Click "Generate" above.</div>
        )}
        {items.map(_(item, idx) => (_<div key={idx} className="milestone-item" style={_{ border: "1px solid #ddd", borderRadius: 8, marginBottom: 8}}>
            <div,
className="milestone-summary"
              style={_{ padding: 12, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center"}}
              onClick={_() => setExpandedIdx(expandedIdx === idx ? null : idx)}
            >
              <div style={_{ display: "flex", gap: 8, alignItems: "center"}}>
                <span style={_{ fontWeight: 600}}>{item.title || `Milestone ${idx + 1}`}</span>
                <span style={_{ background: "#eef7ff", color: "#1677ff", padding: "2px 6px", borderRadius: 4, fontSize: 12}}>
                  AI Suggested
                </span>
              </div>
              <div style={_{ fontSize: 12, color: "#555"}}>
                Due: {new Date(item.suggestedDueDateIso).toLocaleDateString()} · ~{item.estimatedEffortHours}h
              </div>
            </div>
            {expandedIdx === idx && (_<div className="milestone-details" style={{ padding: 12, display: "grid", gap: 8}}>
                <div style={_{ display: "grid", gap: 6}}>
                  <label>Title</label>
                  <input,
value={item.title}
                    onChange={_(e) => updateItem(idx, _{ title: e.target.value})}
                    placeholder="Title"
                  />
                </div>
                <div style={_{ display: "grid", gap: 6}}>
                  <label>Description</label>
                  <textarea,
value={item.description}
                    onChange={_(e) => updateItem(idx, _{ description: e.target.value})}
                    rows={3}
                    placeholder="Description"
                  />
                </div>
                <div style={_{ display: "grid", gap: 6}}>
                  <label>Suggested due date</label>
                  <input,
type="date"
                    value={item.suggestedDueDateIso.slice(0, 10)}
                    onChange={_(e) => updateItem(idx, _{ suggestedDueDateIso: new Date(e.target.value).toISOString()})}
                  />
                </div>
                <div style={_{ display: "grid", gap: 6}}>
                  <label>Estimated effort (hours)</label>
                  <input,
type="number"
                    min={1}
                    value={item.estimatedEffortHours}
                    onChange={_(e) => updateItem(idx, _{ estimatedEffortHours: Math.max(1, parseInt(e.target.value || "0", 10))})}
                  />
                </div>
                <div style={_{ display: "flex", justifyContent: "space-between", marginTop: 8}}>
                  <button onClick={_() => removeItem(idx)} style={_{ color: "#b00"}}>Remove</button>
                  <button onClick={accept}>Accept</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MilestoneAssistant,