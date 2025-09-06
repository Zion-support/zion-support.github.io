<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import React, { useMemo, useState } from './react';,
import type { MilestoneSuggestionInput, SuggestedMilestoneItem, ProjectType } from "../shared / types",
export interface MilestoneAssistantProps {
  scopeOfWork: string,
  startDateIso: string,
  endDateIso: string,
  project_type: ProjectType,
  on_accept?: (milestones: SuggestedMilestoneItem[], auto_add: boolean) => void;
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======

import React, { useMemo, useState } from "react";
import type { MilestoneSuggestionInput, SuggestedMilestoneItem, ProjectType } from "../shared/types";
export interface MilestoneAssistantProps {scopeOfWork: string;
  startDateIso: string;
  endDateIso: string;
  projectType: ProjectType;
  onAccept?: (milestones: SuggestedMilestoneItem[], autoAdd: boolean) => void;
}
export function MilestoneAssistant(props: MilestoneAssistantProps) {const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [autoAdd, setAutoAdd] = useState(true);
  const [items, setItems] = useState<SuggestedMilestoneItem[]>([]);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);
  const isDisabled = useMemo(() => {;
    return !props.scopeOfWork |!props.startDateIso |!props.endDateIso |!props.projectType;
  }, [props.scopeOfWork, props.startDateIso, props.endDateIso, props.projectType]);
  async function generate() {setLoading(true);
    setError(null);
    try {;
      const payload: MilestoneSuggestionInput = {;
        scopeOfWork: props.scopeOfWork;
        startDateIso: props.startDateIso;
        endDateIso: props.endDateIso;
        projectType: props.projectType;
      }
      const res = await fetch("/api/ai/milestones", {method: "POST";
        headers: { "Content-Type": "application/json" }
        body: JSON.stringify(payload);
      });
      if (!res.ok) {const t = await res.text();
        throw new Error(t |"Failed to generate");
      }
      const data = await res.json();
      setItems(Array.isArray(data?.milestones) ? data.milestones : []);
      setExpandedIdx(0);
    } catch (e: any) {setError(e?.message |"Unexpected error");
    } finally {setLoading(false);
    }
  }
  function updateItem(idx: number, patch: Partial<SuggestedMilestoneItem>) {setItems((prev) => prev.map((m, i) => (i === idx ? { ...m, ...patch } : m)));
  }
  function removeItem(idx: number) {setItems((prev) => prev.filter((_, i) => i !== idx));
  }
  function accept() {props.onAccept?.(items, autoAdd);
  }
  return (;
    <div className="milestone-assistant">;
      <div className="assistant-header" style={{ display: "flex", gap: 12, alignItems: "center" }}>;
        <button onClick={generate} disabled={loading |isDisabled}>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useMemo, useState } from "react",;
import type { MilestoneSuggestionInput, SuggestedMilestoneItem, ProjectType } from "../shared/types",;
export interface MilestoneAssistantProps {;
  scopeOfWork: string,;
  startDateIso: string,;
  endDateIso: string,;
  projectType: ProjectType,;
  onAccept?: (milestones: SuggestedMilestoneItem[], autoAdd: boolean) => void;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
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
  }
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
}
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
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
  return (;
    <div className="milestone-assistant">;
      <div className="assistant-header" style={{ display: "flex", gap: 12, alignItems: "center" }}>;
        <button onClick={generate} disabled={loading || isDisabled}>;
<<<<<<< HEAD
<<<<<<< HEAD


=======
  return (
    <div className="milestone - assistant">;
      <div className="assistant - header" style={{ display: "flex", gap: 12, align_items: "center" }}>;
        <button on_click={generate} disabled={loading || is_disabled}>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
          {loading ? "Generating..." : "💡 Generate AI Milestones"}
        </button>;
        <label style={{ display: "flex", gap: 6, alignItems: "center" }}>;
          <input type="checkbox" checked={autoAdd} onChange={(e) => setAutoAdd(e.target.checked)} />;
          Auto-add to Milestone Tracker;
        </label>;
      </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {error && <div style={{ color: "#b00", marginTop: 8 }}>{error}</div>}

;


<<<<<<< HEAD
=======
;


          {loading ? "Generating..." : "💡 Generate AI Milestones"}
        </button>;
        <label style={{ display: "flex", gap: 6, alignItems: "center" }}>;
          <input type="checkbox" checked={autoAdd} onChange={(e) => setAutoAdd(e.target.checked)} />;
          Auto-add to Milestone Tracker;
        </label>;
      </div>;
      {error && <div style={{ color: "#b00", marginTop: 8 }}>{error}</div>}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      <div style={{ marginTop: 12 }}>;
        {items.length === 0 && !loading && (;
          <div style={{ color: "#666" }}>No suggestions yet. Click "Generate" above.</div>;
        )}
        {items.map((item, idx) => (;
          <div key={idx} className="milestone-item" style={{ border: "1px solid #ddd", borderRadius: 8, marginBottom: 8 }}>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      {error && <div style={{ color: "#b00", margin_top: 8 }}>{error}</div>}
      <div style={{ margin_top: 12 }}>;
        {items.length === 0 && !loading && (
          <div style={{ color: "#666" }}>No suggestions yet. Click "Generate" above.</div>)}
        {items.map ((item, idx) => (
          <div key={idx} className="milestone - item" style={{ border: "1px solid #ddd", border_radius: 8, margin_bottom: 8 }}>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
            <div;
              className="milestone - summary";
              style={{ padding: 12, cursor: "pointer", display: "flex", justify_content: "space - between", align_items: "center" }}
              on_click={() => setExpandedIdx (expanded_idx === idx ? null : idx)}
            >;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <div;
              className="milestone-summary";
              style={{ padding: 12, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
            >;
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                <span style={{ fontWeight: 600 }}>{item.title || `Milestone ${idx + 1}`}</span>;


                <span style={{ background: "#eef7ff", color: "#1677ff", padding: "2px 6px", borderRadius: 4, fontSize: 12 }}>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                <span style={{ background: "#eef7ff", color: "#1677ff", padding: "2px 6px", borderRadius: 4, fontSize: 12 }}>;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <div style={{ display: "flex", gap: 8, align_items: "center" }}>;
                <span style={{ font_weight: 600 }}>{item.title || `Milestone ${idx + 1}`}</span>;
                <span style={{ background: "#eef7ff", color: "#1677ff", padding: "2px 6px", border_radius: 4, font_size: 12 }}>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                  AI Suggested;
                </span>;
              </div>;
              <div style={{ font_size: 12, color: "#555" }}>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
                    onChange={(e) => updateItem(idx, { description: e.target.value })}
=======
                    on_change={(e) => update_item (idx, { description: e.target.value })}
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
                    placeholder="Description";
                  />;
                </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
                <div style={{ display:"grid", gap:6 }}>;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                <div style={{ display: "grid", gap: 6 }}>;
                  <label>Suggested due date</label>;
                  <input;
                    type="date";
                    value={item.suggestedDueDateIso.slice(0, 10)}
                    onChange={(e) => updateItem(idx, { suggestedDueDateIso: new Date(e.target.value).toISOString() })}
                  />;
                </div>;
                <div style={{ display: "grid", gap: 6 }}>;
<<<<<<< HEAD
                  <label>Estimated effort (hours)</label>;
=======
                  <label > Estimated effort (hours)</label>;
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
                  <input;
                    type="number";
                    min={1}
                    value={item.estimatedEffortHours}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

                    on_change={(e) => update_item (idx, { estimatedEffortHours: Math.max (1, parse_int (e.target.value || "0", 10)) })}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                    on_change={(e) => update_item (idx, { estimatedEffortHours: Math.max (1, parse_int (e.target.value || "0", 10)) })}


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    onChange={(e) => updateItem(idx, { estimatedEffortHours: Math.max(1, parseInt(e.target.value || "0", 10)) })}

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======
                    on_change={(e) => update_item (idx, { estimatedEffortHours: Math.max (1, parse_int (e.target.value || "0", 10)) })}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                  />;
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
    </div>;
=======
<<<<<<< HEAD
    </div>);
<<<<<<< HEAD
<<<<<<< HEAD
}


;


export default MilestoneAssistant;
=======
                    onChange={(e) => updateItem(idx, { estimatedEffortHours:Math.max(1, parseInt(e.target.value || "0", 10)) })}
                  />;
                </div>;
                <div style={{ display:"flex", justifyContent:"space-between", marginTop:8 }}>;
                  <button onClick={() => removeItem(idx)} style={{ color:"#b00" }}>Remove</button>;
                  <button onClick={accept}>Accept</button>;
                </div>;
              </div>;            )}
                    onChange={(e) => updateItem(idx, { estimatedEffortHours: Math.max(1, parseInt(e.target.value |"0", 10)) })}
                    onChange={(e) => updateItem(idx, { estimatedEffortHours: Math.max(1, parseInt(e.target.value || "0", 10)) })}
                  />;
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
    </div>;
=======
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

;


<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export default MilestoneAssistant;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
export default MilestoneAssistant;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
