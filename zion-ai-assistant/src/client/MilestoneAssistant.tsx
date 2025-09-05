import React, { useMemo, useState } from &quot;react&quot;;
import type { MilestoneSuggestionInput, SuggestedMilestoneItem, ProjectType } from &quot;../shared/types&quot;;

export interface MilestoneAssistantProps {
  scopeOfWork: string;
  startDateIso: string;
  endDateIso: string;
  projectType: ProjectType;
  onAccept?: (milestones: SuggestedMilestoneItem[], autoAdd: boolean) => void;
}

export function MilestoneAssistant(props: MilestoneAssistantProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [autoAdd, setAutoAdd] = useState(true);
  const [items, setItems] = useState<SuggestedMilestoneItem[]>([]);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  const isDisabled = useMemo(() => {
    return !props.scopeOfWork || !props.startDateIso || !props.endDateIso || !props.projectType;
  }, [props.scopeOfWork, props.startDateIso, props.endDateIso, props.projectType]);

  async function generate() {
    setLoading(true);
    setError(null);
    try {
      const payload: MilestoneSuggestionInput = {
        scopeOfWork: props.scopeOfWork,
        startDateIso: props.startDateIso,
        endDateIso: props.endDateIso,
        projectType: props.projectType
      };
      const res = await fetch(&quot;/api/ai/milestones&quot;, {
        method: &quot;POST&quot;,
        headers: { &quot;Content-Type&quot;: &quot;application/json&quot; },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const t = await res.text();
        throw new Error(t || &quot;Failed to generate&quot;);
      }
      const data = await res.json();
      setItems(Array.isArray(data?.milestones) ? data.milestones : []);
      setExpandedIdx(0);
    } catch (e: any) {
      setError(e?.message || &quot;Unexpected error&quot;);
    } finally {
      setLoading(false);
    }
  }

  function updateItem(idx: number, patch: Partial<SuggestedMilestoneItem>) {
    setItems((prev) => prev.map((m, i) => (i === idx ? { ...m, ...patch } : m)));
  }

  function removeItem(idx: number) {
    setItems((prev) => prev.filter((_, i) => i !== idx));
  }

  function accept() {
    props.onAccept?.(items, autoAdd);
  }

  return (
    <div className=&quot;milestone-assistant&quot;>
      <div className=&quot;assistant-header&quot; style={{ display: &quot;flex&quot;, gap: 12, alignItems: &quot;center&quot; }}>
        <button onClick={generate} disabled={loading || isDisabled}>
          {loading ? &quot;Generating...&quot; : &quot;💡 Generate AI Milestones&quot;}
        </button>
        <label style={{ display: &quot;flex&quot;, gap: 6, alignItems: &quot;center&quot; }}>
          <input type=&quot;checkbox&quot; checked={autoAdd} onChange={(e) => setAutoAdd(e.target.checked)} />
          Auto-add to Milestone Tracker
        </label>
      </div>
      {error && <div style={{ color: &quot;#b00&quot;, marginTop: 8 }}>{error}</div>}

      <div style={{ marginTop: 12 }}>
        {items.length === 0 && !loading && (
          <div style={{ color: &quot;#666&quot; }}>No suggestions yet. Click &quot;Generate&quot; above.</div>
        )}
        {items.map((item, idx) => (
          <div key={idx} className=&quot;milestone-item&quot; style={{ border: &quot;1px solid #ddd&quot;, borderRadius: 8, marginBottom: 8 }}>
            <div
              className=&quot;milestone-summary&quot;
              style={{ padding: 12, cursor: &quot;pointer&quot;, display: &quot;flex&quot;, justifyContent: &quot;space-between&quot;, alignItems: &quot;center&quot; }}
              onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
            >
              <div style={{ display: &quot;flex&quot;, gap: 8, alignItems: &quot;center&quot; }}>
                <span style={{ fontWeight: 600 }}>{item.title || `Milestone ${idx + 1}`}</span>
                <span style={{ background: &quot;#eef7ff&quot;, color: &quot;#1677ff&quot;, padding: &quot;2px 6px&quot;, borderRadius: 4, fontSize: 12 }}>
                  AI Suggested
                </span>
              </div>
              <div style={{ fontSize: 12, color: &quot;#555&quot; }}>
                Due: {new Date(item.suggestedDueDateIso).toLocaleDateString()} · ~{item.estimatedEffortHours}h
              </div>
            </div>
            {expandedIdx === idx && (
              <div className=&quot;milestone-details&quot; style={{ padding: 12, display: &quot;grid&quot;, gap: 8 }}>
                <div style={{ display: &quot;grid&quot;, gap: 6 }}>
                  <label>Title</label>
                  <input
                    value={item.title}
                    onChange={(e) => updateItem(idx, { title: e.target.value })}
                    placeholder=&quot;Title&quot;
                  />
                </div>
                <div style={{ display: &quot;grid&quot;, gap: 6 }}>
                  <label>Description</label>
                  <textarea
                    value={item.description}
                    onChange={(e) => updateItem(idx, { description: e.target.value })}
                    rows={3}
                    placeholder=&quot;Description&quot;
                  />
                </div>
                <div style={{ display: &quot;grid&quot;, gap: 6 }}>
                  <label>Suggested due date</label>
                  <input
                    type=&quot;date&quot;
                    value={item.suggestedDueDateIso.slice(0, 10)}
                    onChange={(e) => updateItem(idx, { suggestedDueDateIso: new Date(e.target.value).toISOString() })}
                  />
                </div>
                <div style={{ display: &quot;grid&quot;, gap: 6 }}>
                  <label>Estimated effort (hours)</label>
                  <input
                    type=&quot;number&quot;
                    min={1}
                    value={item.estimatedEffortHours}
                    onChange={(e) => updateItem(idx, { estimatedEffortHours: Math.max(1, parseInt(e.target.value || &quot;0&quot;, 10)) })}
                  />
                </div>
                <div style={{ display: &quot;flex&quot;, justifyContent: &quot;space-between&quot;, marginTop: 8 }}>
                  <button onClick={() => removeItem(idx)} style={{ color: &quot;#b00&quot; }}>Remove</button>
                  <button onClick={accept}>Accept</button>
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