<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import React, { useMemo, useState } from './react';,
import type { MilestoneSuggestionInput, SuggestedMilestoneItem, ProjectType } from "../shared / types",
export interface MilestoneAssistantProps {}
  scopeOfWork: string,
  startDateIso: string,
  endDateIso: string,;
  project_type: ProjectType,;
  on_accept?: (milestones: SuggestedMilestoneItem[], auto_add: boolean) => void;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useMemo, useState } from "react",;
=======

"
import React, { useMemo, useState } from "react",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import type { MilestoneSuggestionInput, SuggestedMilestoneItem, ProjectType } from "../shared/types",;
export interface MilestoneAssistantProps {;
  scopeOfWork: string,;
  startDateIso: string,;
  endDateIso: string,;
  projectType: ProjectType,;
  onAccept?: (milestones: SuggestedMilestoneItem[], autoAdd: boolean) => void;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
<<<<<<< HEAD
;
export function MilestoneAssistant(props: MilestoneAssistantProps) {;
  const [loading, setLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const [autoAdd, setAutoAdd] = useState(true),;
  const [items, setItems] = useState<SuggestedMilestoneItem[]>([]),;
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0),;
  const isDisabled = useMemo(() => {;
    return !props.scopeOfWork || !props.startDateIso || !props.endDateIso || !props.projectType;
  }, [props.scopeOfWork, props.startDateIso, props.endDateIso, props.projectType]),;
  async function generate() {;
    setLoading(true),;
    setError(null),;
    try {;
      const payload: MilestoneSuggestionInput = {;
        scopeOfWork: props.scopeOfWork,;
        startDateIso: props.startDateIso,;
        endDateIso: props.endDateIso,;
        projectType: props.projectType;
      },;
      const res = await fetch("/api/ai/milestones", {;
        method: "POST",;
        headers: { "Content-Type": "application/json" },;
        body: JSON.stringify(payload);
      }),;
      if (!res.ok) {;
        const t = await res.text(),;
        throw new Error(t || "Failed to generate");
      }
      const data = await res.json(),;
      setItems(Array.isArray(data?.milestones) ? data.milestones : []);
      setExpandedIdx(0);
    } catch (e: any) {;
      setError(e?.message || "Unexpected error");
    } finally {;
      setLoading(false);
    }
  }
;
  function updateItem(idx: number, patch: Partial<SuggestedMilestoneItem>) {;
    setItems((prev) => prev.map((m, i) => (i === idx ? { ...m, ...patch } : m)));
  }
;
  function removeItem(idx: number) {;
    setItems((prev) => prev.filter((_, i) => i !== idx));
  }
;
  function accept() {;
    props.onAccept?.(items, autoAdd);
=======
export /**;
 * MilestoneAssistant - Function description;
 */
function MilestoneAssistant() {}
  const [loading, set_loading] = useState (false),
  const [error, set_error] = useState < string | null>(null),
  const [auto_add, setAutoAdd] = useState (true),
  const [items, set_items] = useState < SuggestedMilestoneItem[]>([]),
  const [expanded_idx, setExpandedIdx] = useState < number | null>(0),
  const is_disabled = useMemo (() => {}
    return !props.scopeOfWork || !props.startDateIso || !props.endDateIso || !props.project_type;
  }, [props.scopeOfWork, props.startDateIso, props.endDateIso, props.project_type]),
  async /**
 * generate - Function description;
 */
function generate() {}
    set_loading (true),
    set_error (null),
    try {}
      const payload: MilestoneSuggestionInput = {}
        scopeOfWork: props.scopeOfWork,
        startDateIso: props.startDateIso,
        endDateIso: props.endDateIso,
        project_type: props.project_type;
      },"
      const res = await fetch ("/api / ai / milestones", {"
        method: "POST","
        headers: { "Content - Type": "application / json" },
        body: JSON.stringify (payload);
      }),
      // Check condition;
if ( {) {}
  $2;
}
        const t = await res.text (),"
        throw new Error (t || "Failed to generate");
      }
      const data = await res.json (),
      set_items (Array.is_array (data?.milestones) ? data.milestones : []);
      setExpandedIdx (0);
    } catch (e: any) {"
      set_error (e?.message || "Unexpected error");
    } finally {}
      set_loading (false);
    }
  }
  /**
 * update_item - Function description;
 */
function update_item() {}
    set_items ((prev) => prev.map ((m, i) => (index === idx ? { ...m, ...patch } : m)));
  }
  /**
 * remove_item - Function description;
 */
function remove_item() {}
    set_items ((prev) => prev.filter ((_, i) => i !== idx));
  }
  /**
 * accept - Function description;
 */
function accept() {}
    props.on_accept?.(items, auto_add);
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }
<<<<<<< HEAD
=======




;
<<<<<<< HEAD
export function MilestoneAssistant(props: MilestoneAssistantProps) {;
  const [loading, setLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const [autoAdd, setAutoAdd] = useState(true),;
  const [items, setItems] = useState<SuggestedMilestoneItem[]>([]),;
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0),;
  const isDisabled = useMemo(() => {;
    return !props.scopeOfWork || !props.startDateIso || !props.endDateIso || !props.projectType;
  }, [props.scopeOfWork, props.startDateIso, props.endDateIso, props.projectType]),;
  async function generate() {;
    setLoading(true),;
    setError(null),;
    try {;
      const payload: MilestoneSuggestionInput = {;
        scopeOfWork: props.scopeOfWork,;
        startDateIso: props.startDateIso,;
        endDateIso: props.endDateIso,;
        projectType: props.projectType;
      },;
      const res = await fetch("/api/ai/milestones", {;
        method: "POST",;
        headers: { "Content-Type": "application/json" },;
        body: JSON.stringify(payload);
      }),;
      if (!res.ok) {;
        const t = await res.text(),;
        throw new Error(t || "Failed to generate");
      }
      const data = await res.json(),;
      setItems(Array.isArray(data?.milestones) ? data.milestones : []);
      setExpandedIdx(0);
    } catch (e: any) {;
      setError(e?.message || "Unexpected error");
    } finally {;
      setLoading(false);
    }
  }
;
  function updateItem(idx: number, patch: Partial<SuggestedMilestoneItem>) {;
    setItems((prev) => prev.map((m, i) => (i === idx ? { ...m, ...patch } : m)));
  }
;
  function removeItem(idx: number) {;
    setItems((prev) => prev.filter((_, i) => i !== idx));
  }
;
  function accept() {;
    props.onAccept?.(items, autoAdd);
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
  return (;
    <div className="milestone-assistant">;
=======
  return (;"
    <div className="milestone-assistant">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <div className="assistant-header" style={{ display: "flex", gap: 12, alignItems: "center" }}>;
        <button onClick={generate} disabled={loading || isDisabled}>;




<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          {loading ? "Generating..." : "💡 Generate AI Milestones"}
        </button>;
        <label style={{ display: "flex", gap: 6, alignItems: "center" }}>;
          <input type="checkbox" checked={autoAdd} onChange={(e) => setAutoAdd(e.target.checked)} />;
          Auto-add to Milestone Tracker;
=======


"
          {loading ? "Generating..." : "💡 Generate AI Milestones"}
        </button>;"
        <label style={{ display: "flex", gap: 6, align_items: "center" }}>;"
          <input type="checkbox" checked={auto_add} on_change={(e) => setAutoAdd (e.target.checked)} />;
          Auto - add to Milestone Tracker;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        </label>;
<<<<<<< HEAD
<<<<<<< HEAD
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      {error && <div style={{ color: "#b00", marginTop: 8 }}>{error}</div>}

;







      <div style={{ marginTop: 12 }}>;
        {items.length === 0 && !loading && (;"
          <div style={{ color: "#666" }}>No suggestions yet. Click "Generate" above.</div>;
        )}
        {items.map((item, idx) => (;"
          <div key={idx} className="milestone-item" style={{ border: "1px solid #ddd", borderRadius: 8, marginBottom: 8 }}>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



"
      {error && <div style={{ color: "#b00", margin_top: 8 }}>{error}</div>}
      <div style={{ margin_top: 12 }}>;
        {items.length === 0 && !loading && ("
          <div style={{ color: "#666" }}>No suggestions yet. Click "Generate" above.</div>)}
        {items.map ((item, idx) => ("
          <div key={idx} className="milestone - item" style={{ border: "1px solid #ddd", border_radius: 8, margin_bottom: 8 }}>;






            <div;"
              className="milestone - summary";"
              style={{ padding: 12, cursor: "pointer", display: "flex", justify_content: "space - between", align_items: "center" }}
              on_click={() => setExpandedIdx (expanded_idx === idx ? null : idx)}
            >;


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      </div>;            <div;
              className="milestone-summary";
              style={{ padding: 12, cursor: "pointer", display: "flex", justify_content: "space - between", align_items: "center" }}
              on_click={() => setExpandedIdx (expanded_idx === idx ? null : idx)}
            >;
                <span style={{ background: "#eef7ff", color: "#1677ff", padding: "2px 6px", borderRadius: 4, fontSize: 12 }}>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      </div>;            <div;
              className="milestone-summary";
              style={{ padding: 12, cursor: "pointer", display: "flex", justify_content: "space - between", align_items: "center" }}
              on_click={() => setExpandedIdx (expanded_idx === idx ? null : idx)}
            >;
                <span style={{ background: "#eef7ff", color: "#1677ff", padding: "2px 6px", borderRadius: 4, fontSize: 12 }}>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            <div;
              className="milestone-summary";
=======


            <div;"
              className="milestone-summary";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              style={{ padding: 12, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
            >;"
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                <span style={{ fontWeight: 600 }}>{item.title || `Milestone ${idx + 1}`}</span>;
                <span style={{ background: "#eef7ff", color: "#1677ff", padding: "2px 6px", borderRadius: 4, fontSize: 12 }}>;
                  AI Suggested;
                </span>;
              </div>;
              <div style={{ fontSize: 12, color: "#555" }}>;
                Due: {new Date(item.suggestedDueDateIso).toLocaleDateString()} · ~{item.estimatedEffortHours}h;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                <span style={{ fontWeight: 600 }}>{item.title || `Milestone ${idx + 1}`}</span>;

                <span style={{ background: "#eef7ff", color: "#1677ff", padding: "2px 6px", borderRadius: 4, fontSize: 12 }}>;
                <span style={{ background: "#eef7ff", color: "#1677ff", padding: "2px 6px", borderRadius: 4, fontSize: 12 }}>;
              <div style={{ display: "flex", gap: 8, align_items: "center" }}>;
                <span style={{ font_weight: 600 }}>{item.title || `Milestone ${idx + 1}`}</span>;
<<<<<<< HEAD
<<<<<<< HEAD
=======


                <span style={{ fontWeight: 600 }}>{item.title || `Milestone ${idx + 1}`}</span>;

"
                <span style={{ background: "#eef7ff", color: "#1677ff", padding: "2px 6px", borderRadius: 4, fontSize: 12 }}>;




"
                <span style={{ background: "#eef7ff", color: "#1677ff", padding: "2px 6px", borderRadius: 4, fontSize: 12 }}>;
"
              <div style={{ display: "flex", gap: 8, align_items: "center" }}>;`
                <span style={{ font_weight: 600 }}>{item.title || `Milestone ${idx + 1}`}</span>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <span style={{ background: "#eef7ff", color: "#1677ff", padding: "2px 6px", border_radius: 4, font_size: 12 }}>;


                  AI Suggested;
                </span>;
              </div>;"
              <div style={{ font_size: 12, color: "#555" }}>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              </div>;
            </div>;
<<<<<<< HEAD
            {expandedIdx === idx && (;
              <div className="milestone-details" style={{ padding: 12, display: "grid", gap: 8 }}>;
=======
            {expanded_idx === idx && ("
              <div className="milestone - details" style={{ padding: 12, display: "grid", gap: 8 }}>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <div style={{ display: "grid", gap: 6 }}>;
                  <label>Title</label>;
                  <input;
                    value={item.title}
<<<<<<< HEAD
                    onChange={(e) => updateItem(idx, { title: e.target.value })}
=======
                    on_change={(e) => update_item (idx, { title: e.target.value })}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    placeholder="Title";
                  />;
                </div>;"
                <div style={{ display: "grid", gap: 6 }}>;
                  <label>Description</label>;
                  <textarea;
                    value={item.description}
<<<<<<< HEAD
                    onChange={(e) => updateItem(idx, { description: e.target.value })}
=======
                    on_change={(e) => update_item (idx, { description: e.target.value })}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { useMemo, useState } from "react",;
import type { MilestoneSuggestionInput, SuggestedMilestoneItem, ProjectType } from "../shared/types",;
;
export interface MilestoneAssistantProps {;
  scopeOfWork:string,;
  startDateIso:string,;
  endDateIso:string,;
  projectType:ProjectType,;
  onAccept?:(milestones:SuggestedMilestoneItem[], autoAdd:boolean) => void;
}
;
export function MilestoneAssistant(props:MilestoneAssistantProps) {;
  const [loading, setLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const [autoAdd, setAutoAdd] = useState(true),;
  const [items, setItems] = useState<SuggestedMilestoneItem[]>([]),;
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0),;
;
  const isDisabled = useMemo(() => {;
    return !props.scopeOfWork || !props.startDateIso || !props.endDateIso || !props.projectType,;
  }, [props.scopeOfWork, props.startDateIso, props.endDateIso, props.projectType]),;
;
  async function generate() {;
    setLoading(true),;
    setError(null),;
    try {;
      const payload:MilestoneSuggestionInput = {;
        scopeOfWork:props.scopeOfWork,;
        startDateIso:props.startDateIso,;
        endDateIso:props.endDateIso,;
        projectType:props.projectType;
      },;
      const res = await fetch("/api/ai/milestones", {;
        method:"POST",;
        headers:{ "Content-Type":"application/json" },;
        body:JSON.stringify(payload);
      }),;
      if (!res.ok) {;
        const t = await res.text(),;
        throw new Error(t || "Failed to generate"),;
      }
      const data = await res.json(),;
      setItems(Array.isArray(data?.milestones) ? data.milestones :[]),;
      setExpandedIdx(0),;
    } catch (e:any) {;
      setError(e?.message || "Unexpected error");
    } finally {;
      setLoading(false),;
    }
  }
;
  function updateItem(idx:number, patch:Partial<SuggestedMilestoneItem>) {;
    setItems((prev) => prev.map((m, i) => (i === idx ? { ...m, ...patch } m))),;
  }
;
  function removeItem(idx:number) {;
    setItems((prev) => prev.filter((_, i) => i !== idx)),;
  }
;
  function accept() {;
    props.onAccept?.(items, autoAdd),;
  }
;
  return (;
    <div className="milestone-assistant">;
      <div className="assistant-header" style={{ display:"flex", gap:12, alignItems:"center" }}>;
        <button onClick={generate} disabled={loading || isDisabled}>;
          {loading ? "Generating..." :"💡 Generate AI Milestones"}
        </button>;
        <label style={{ display:"flex", gap:6, alignItems:"center" }}>;
          <input type="checkbox" checked={autoAdd} onChange={(e) => setAutoAdd(e.target.checked)} />;
          Auto-add to Milestone Tracker;
        </label>;
      </div>;
      {error && <div style={{ color:"#b00", marginTop:8 }}>{error}</div>}
;
      <div style={{ marginTop:12 }}>;
        {items.length === 0 && !loading && (;
          <div style={{ color:"#666" }}>No suggestions yet. Click "Generate" above.</div>;
        )}
        {items.map((item, idx) => (;
          <div key={idx} className="milestone-item" style={{ border:"1px solid #ddd", borderRadius:8, marginBottom:8 }}>;
            <div;
              className="milestone-summary";
              style={{ padding:12, cursor:"pointer", display:"flex", justifyContent:"space-between", alignItems:"center" }}
              onClick={() => setExpandedIdx(expandedIdx === idx ? null :idx)}
            >;
              <div style={{ display:"flex", gap:8, alignItems:"center" }}>;
                <span style={{ fontWeight:600 }}>{item.title || `Milestone ${idx + 1}`}</span>;
                <span style={{ background:"#eef7ff", color:"#1677ff", padding:"2px 6px", borderRadius:4, fontSize:12 }}>;
                  AI Suggested;
                </span>;
              </div>;
              <div style={{ fontSize:12, color:"#555" }}>;
                Due:{new Date(item.suggestedDueDateIso).toLocaleDateString()} · ~{item.estimatedEffortHours}h;
              </div>;
            </div>;
            {expandedIdx === idx && (;
              <div className="milestone-details" style={{ padding:12, display:"grid", gap:8 }}>;
                <div style={{ display:"grid", gap:6 }}>;
                  <label>Title</label>;
                  <input;
                    value={item.title}
                    onChange={(e) => updateItem(idx, { title:e.target.value })}
                    placeholder="Title";
                  />;
                </div>;
                <div style={{ display:"grid", gap:6 }}>;
                  <label>Description</label>;
                  <textarea;
                    value={item.description}
                    onChange={(e) => updateItem(idx, { description:e.target.value })}
                <span style={{ fontWeight: 600 }}>{item.title |`Milestone ${idx + 1}`}</span>;
                <span style={{ fontWeight: 600 }}>{item.title || `Milestone ${idx + 1}`}</span>;
                <span style={{ background: "#eef7ff", color: "#1677ff", padding: "2px 6px", borderRadius: 4, fontSize: 12 }}>;
                  AI Suggested;
                </span>;
              </div>;
              <div style={{ fontSize: 12, color: "#555" }}>;
                Due: {new Date(item.suggestedDueDateIso).toLocaleDateString()} · ~{item.estimatedEffortHours}h;
              </div>;
            </div>;
            {expandedIdx === idx && (;
              <div className="milestone-details" style={{ padding: 12, display: "grid", gap: 8 }}>;
                <div style={{ display: "grid", gap: 6 }}>;
                  <label>Title</label>;
                  <input;
                    value={item.title}
                    onChange={(e) => updateItem(idx, { title: e.target.value })}
                    placeholder="Title";
                  />;
                </div>;
                <div style={{ display: "grid", gap: 6 }}>;
                  <label>Description</label>;
                  <textarea;
                    value={item.description}
                    onChange={(e) => updateItem(idx, { description: e.target.value })}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    rows={3}
=======





                    rows={3}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    placeholder="Description";
                  />;
                </div>;


"
                <div style={{ display: "grid", gap: 6 }}>;
                  <label>Suggested due date</label>;
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                <span style={{ background: "#eef7ff", color: "#1677ff", padding: "2px 6px", border_radius: 4, font_size: 12 }}>;                <div style={{ display: "grid", gap: 6 }}>;
                  <label > Suggested due date</label>;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                  <input;
=======
                  <input;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    type="date";
                    value={item.suggestedDueDateIso.slice(0, 10)}
                    onChange={(e) => updateItem(idx, { suggestedDueDateIso: new Date(e.target.value).toISOString() })}
                  />;
                </div>;"
                <div style={{ display: "grid", gap: 6 }}>;
<<<<<<< HEAD
                  <label>Estimated effort (hours)</label>;
=======
                  <label > Estimated effort (hours)</label>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
                <div style={{ display:"grid", gap:6 }}>;
                <div style={{ display: "grid", gap: 6 }}>;
                  <label>Suggested due date</label>;
                  <input;
                    type="date";
                    value={item.suggestedDueDateIso.slice(0, 10)}
                    onChange={(e) => updateItem(idx, { suggestedDueDateIso: new Date(e.target.value).toISOString() })}
                  />;
                </div>;
                <div style={{ display: "grid", gap: 6 }}>;
                  <label>Estimated effort (hours)</label>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  <input;
                    type="number";
                    min={1}
                    value={item.estimatedEffortHours}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======





                  <input;"
                    type="number";
                    min={1}
                    value={item.estimatedEffortHours}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



"
                    on_change={(e) => update_item (idx, { estimatedEffortHours: Math.max (1, parse_int (e.target.value || "0", 10)) })}

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    onChange={(e) => updateItem(idx, { estimatedEffortHours: Math.max(1, parseInt(e.target.value || "0", 10)) })}






                  />;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                </div>;
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>;
                  <button onClick={() => removeItem(idx)} style={{ color: "#b00" }}>Remove</button>;
                  <button onClick={accept}>Accept</button>;
                </div>;
              </div>;
            )}
          </div>;
        ))}
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
=======
<<<<<<< HEAD
    </div>);
<<<<<<< HEAD
<<<<<<< HEAD
}


;


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export default MilestoneAssistant;
;

=======
export default MilestoneAssistant;
;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export default MilestoneAssistant;
}> <button onClick= {
  generate 
}disabled= {
  loading || isDisabled 
}> {
  loading ? "Generating..." : "💡 Generate AI Milestones" 
}</button> <label style= {
  {
  display: "flex", gap: 6, alignItems: "center" 
}
}> <input type="checkbox" checked= {
  autoAdd 
}onChange= {
  (e) => setAutoAdd (e.target.checked) 
}/> Auto-add to Milestone Tracker </label> </div> {
  error && <div style= {
  {
  color: "#b00", marginTop: 8 
}
}> {
  error 
}</div> 
}<div style= {
  {
  marginTop: 12 
}
}> {
  items.length === 0 && !loading && (<div style= {
  {
  color: "#666" 
}
}>No suggestions yet. Click "Generate" above.</div>) 
}{
  items.map ( (item, idx) => (<div key= {
  idx 
}className="milestone-item" style= {
  {
  border: "1px solid #ddd", borderRadius: 8, marginBottom: 8 
}
}> <div className="milestone-summary" style= {
  {
  padding: 12, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" 
}
}onClick= {
  () => setExpandedIdx (expandedIdx === idx ? null : idx) 
}> <div style= {
  {
  display: "flex", gap: 8, alignItems: "center" 
}
}> <span style= {
  {
  fontWeight: 600 
}
}> {
  item.title || `Milestone $ {
  idx + 1 
}` 
}</span> <span style= {
  {
  background: "#eef7ff", color: "#1677ff", padding: "2px 6px", borderRadius: 4, fontSize: 12 
}
}> AI Suggested </span> </div> <div style= {
  {
  fontSize: 12, color: "#555" 
}
}> Due: {
  new Date (item.suggestedDueDateIso) .toLocaleDateString () 
}· ~ {
  item.estimatedEffortHours 
}h </div> </div> {
  expandedIdx === idx && (<div className="milestone-details" style= {
  {
  padding: 12, display: "grid", gap: 8 
}
}> <div style= {
  {
  display: "grid", gap: 6 
}
}> <label>Title</label> <input value= {
  item.title 
}onChange= {
  (e) => updateItem (idx, {
  title: e.target.value 
}) 
}placeholder="Title" /> </div> <div style= {
  {
  display: "grid", gap: 6 
}
}> <label>Description</label> <textarea value= {
  item.description 
}onChange= {
  (e) => updateItem (idx, {
  description: e.target.value 
}) 
}rows= {
  3 
}placeholder="Description" /> </div> <div style= {
  {
  display: "grid", gap: 6 
}
}> <label>Suggested due date</label> <input type="date" value= {
  item.suggestedDueDateIso.slice (0, 10) 
}onChange= {
  (e) => updateItem (idx, {
  suggestedDueDateIso: new Date (e.target.value) .toISOString () 
}) 
}/> </div> <div style= {
  {
  display: "grid", gap: 6 
}
}> <label>Estimated effort (hours) </label> <input type="number" min= {
  1 
}value= {
  item.estimatedEffortHours 
}onChange= {
  (e) => updateItem (idx, {
  estimatedEffortHours: Math.max (1, parseInt (e.target.value || "0", 10) ) 
}) 
}/> </div> <div style= {
  {
  display: "flex", justifyContent: "space-between", marginTop: 8 
}
}> <button onClick= {
  () => removeItem (idx) 
}style= {
  {
  color: "#b00" 
}
}>Remove</button> <button onClick= {
  accept 
}>Accept</button> </div> </div>) 
}</div>) ) 
}</div> </div>) 
}export default MilestoneAssistant;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  );
}
;
export default MilestoneAssistant;
=======
                </div>;"
                <div style={{ display: "flex", justify_content: "space - between", margin_top: 8 }}>;"
                  <button on_click={() => remove_item (idx)} style={{ color: "#b00" }}>Remove</button>;
                  <button on_click={accept}>Accept</button>;
                </div>;
              </div>)}
          </div>))}
      </div>;


;




export default MilestoneAssistant;

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
