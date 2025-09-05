import React, {_useMemo, _useState} from "react";
import type {_MilestoneSuggestionInput, _SuggestedMilestoneItem, _ProjectType} from "../shared/types";

export interface MilestoneAssistantProps {_scopeOfWork: string;
  startDateIso: string;
  endDateIso: string;
  projectType: ProjectType;
  onAccept?: (_milestones: SuggestedMilestoneItem[], _autoAdd: boolean) => void;}

export function MilestoneAssistant(_props: MilestoneAssistantProps) {_const [loading, _setLoading] = useState(false);
  const [error, _setError] = useState<string | null>(null);
  const [autoAdd, _setAutoAdd] = useState(true);
  const [items, _setItems] = useState<SuggestedMilestoneItem[]>([]);
  const [expandedIdx, _setExpandedIdx] = useState<number | null>(0);

  const _isDisabled = useMemo__(() => {
    return !props.scopeOfWork || !props.startDateIso || !props.endDateIso || !props.projectType;}, [props.scopeOfWork, props.startDateIso, props.endDateIso, props.projectType]);

  async function generate() {_setLoading(true);
    setError(null);
    try {
      const payload: MilestoneSuggestionInput = {
        scopeOfWork: props.scopeOfWork, _startDateIso: props.startDateIso, _endDateIso: props.endDateIso, _projectType: props.projectType};
      const _res = await fetch("/api/ai/milestones", {_method: "POST", _headers: { "Content-Type": "application/json"},
        body: JSON.stringify(payload)
      });
      if (!res.ok) {_const _t = await res.text();
        throw new Error(t || "Failed to generate");}
      const _data = await res.json();
      setItems(Array.isArray(data?.milestones) ? data.milestones : []);
      setExpandedIdx(0);
    } catch (e: unknown) {_setError(e?.message || "Unexpected error");} finally {_setLoading(false);}
  }

  function updateItem(_idx: number, _patch: Partial<SuggestedMilestoneItem>) {_setItems(_(prev) => prev.map(_(m, _i) => (i === idx ? { ...m, _...patch} : m)));
  }

  function removeItem(_idx: number) {_setItems(_(prev) => prev.filter(_(_, _i) => i !== idx));}

  function accept() {_props.onAccept?.(items, _autoAdd);}

  return (_<div className="milestone-assistant">
      <div className="assistant-header" style={_{ display: "flex", _gap: 12, _alignItems: "center"}}>
        <button onClick={_generate} disabled={_loading || isDisabled}>
          {_loading ? "Generating..." : "💡 Generate AI Milestones"}
        </button>
        <label style={_{ display: "flex", _gap: 6, _alignItems: "center"}}>
          <input type="checkbox" checked={_autoAdd} onChange={_(e) => setAutoAdd(e.target.checked)} />
          Auto-add to Milestone Tracker
        </label>
      </div>
      {_error && <div style={{ color: "#b00", _marginTop: 8}}>{_error}</div>}

      <div style={_{ marginTop: 12}}>
        {_items.length === 0 && !loading && (
          <div style={{ color: "#666"}}>No suggestions yet. Click "Generate" above.</div>
        )}
        {_items.map(_(item, _idx) => (_<div key={idx} className="milestone-item" style={_{ border: "1px solid #ddd", _borderRadius: 8, _marginBottom: 8}}>
            <div
              className="milestone-summary"
              style={_{ padding: 12, _cursor: "pointer", _display: "flex", _justifyContent: "space-between", _alignItems: "center"}}
              onClick={_() => setExpandedIdx(expandedIdx === idx ? null : idx)}
            >
              <div style={_{ display: "flex", _gap: 8, _alignItems: "center"}}>
                <span style={_{ fontWeight: 600}}>{_item.title || `Milestone ${idx + 1}`}</span>
                <span style={_{ background: "#eef7ff", _color: "#1677ff", _padding: "2px 6px", _borderRadius: 4, _fontSize: 12}}>
                  AI Suggested
                </span>
              </div>
              <div style={_{ fontSize: 12, _color: "#555"}}>
                Due: {_new Date(item.suggestedDueDateIso).toLocaleDateString()} · ~{_item.estimatedEffortHours}h
              </div>
            </div>
            {_expandedIdx === idx && (_<div className="milestone-details" style={{ padding: 12, _display: "grid", _gap: 8}}>
                <div style={_{ display: "grid", _gap: 6}}>
                  <label>Title</label>
                  <input
                    value={_item.title}
                    onChange={_(e) => updateItem(idx, _{ title: e.target.value})}
                    placeholder="Title"
                  />
                </div>
                <div style={_{ display: "grid", _gap: 6}}>
                  <label>Description</label>
                  <textarea
                    value={_item.description}
                    onChange={_(_e) => updateItem(idx, _{ description: e.target.value})}
                    rows={_3}
                    placeholder="Description"
                  />
                </div>
                <div style={_{ display: "grid", _gap: 6}}>
                  <label>Suggested due date</label>
                  <input
                    type="date"
                    value={_item.suggestedDueDateIso.slice(0, _10)}
                    onChange={_(_e) => updateItem(idx, _{ suggestedDueDateIso: new Date(e.target.value).toISOString()})}
                  />
                </div>
                <div style={_{ display: "grid", _gap: 6}}>
                  <label>Estimated effort (hours)</label>
                  <input
                    type="number"
                    min={_1}
                    value={_item.estimatedEffortHours}
                    onChange={_(_e) => updateItem(idx, _{ estimatedEffortHours: Math.max(1, _parseInt(e.target.value || "0", _10))})}
                  />
                </div>
                <div style={_{ display: "flex", _justifyContent: "space-between", _marginTop: 8}}>
                  <button onClick={_() => removeItem(idx)} style={_{ color: "#b00"}}>Remove</button>
                  <button onClick={_accept}>Accept</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MilestoneAssistant;