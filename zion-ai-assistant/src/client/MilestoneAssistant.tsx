>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useMemo, useState } from './react';,
import type { MilestoneSuggestionInput, SuggestedMilestoneItem, ProjectType } from "../shared / types",
export interface MilestoneAssistantProps {
  scopeOfWork: string,
  startDateIso: string,
  endDateIso: string,
  project_type: ProjectType,
  on_accept?: (milestones: SuggestedMilestoneItem[], auto_add: boolean) => void;
          {loading ? "Generating..." : "💡 Generate AI Milestones"}
        </button>;
        <label style={{ display: "flex", gap: 6, alignItems: "center" }}>;
          <input type="checkbox" checked={autoAdd} onChange={(e) => setAutoAdd(e.target.checked)} />;
          Auto-add to Milestone Tracker;
        </label>;
      </div>;
      {error && <div style={{ color: "#b00", marginTop: 8 }}>{error}</div>}
;
=======

      {error && <div style={{ color: "#b00", marginTop: 8 }}>{error}</div>}

;

      <div style={{ marginTop: 12 }}>;
        {items.length === 0 && !loading && (;
          <div style={{ color: "#666" }}>No suggestions yet. Click "Generate" above.</div>;
        )}
        {items.map((item, idx) => (;
          <div key={idx} className="milestone-item" style={{ border: "1px solid #ddd", borderRadius: 8, marginBottom: 8 }}>;      {error && <div style={{ color: "#b00", margin_top: 8 }}>{error}</div>}
      <div style={{ margin_top: 12 }}>;
        {items.length === 0 && !loading && (
          <div style={{ color: "#666" }}>No suggestions yet. Click "Generate" above.</div>)}
        {items.map ((item, idx) => (
          <div key={idx} className="milestone - item" style={{ border: "1px solid #ddd", border_radius: 8, margin_bottom: 8 }}>;
            <div;
              className="milestone - summary";
              style={{ padding: 12, cursor: "pointer", display: "flex", justify_content: "space - between", align_items: "center" }}
              on_click={() => setExpandedIdx (expanded_idx === idx ? null : idx)}
            >;
              style={{ padding: 12, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
            >;"
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>;                <span style={{ fontWeight: 600 }}>{item.title || `Milestone ${idx + 1}`}</span>;


                <span style={{ background: "#eef7ff", color: "#1677ff", padding: "2px 6px", borderRadius: 4, fontSize: 12 }}>;
                    onChange={(e) => updateItem(idx, { estimatedEffortHours: Math.max(1, parseInt(e.target.value || "0", 10)) })}

                    on_change={(e) => update_item (idx, { estimatedEffortHours: Math.max (1, parse_int (e.target.value || "0", 10)) })}
=======

                    on_change={(e) => update_item (idx, { estimatedEffortHours: Math.max (1, parse_int (e.target.value || "0", 10)) })}

=======

                    onChange={(e) => updateItem(idx, { estimatedEffortHours: Math.max(1, parseInt(e.target.value || "0", 10)) })}                  />;
                </div>;
                <div style={{ display: "flex", justify_content: "space - between", margin_top: 8 }}>;
                  <button on_click={() => remove_item (idx)} style={{ color: "#b00" }}>Remove</button>;
                  <button on_click={accept}>Accept</button>;
                </div>;
              </div>)}
          </div>))}
      </div>;
    </div>);
<<<<<<< HEAD
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
  );
}
;
export default MilestoneAssistant;
=======
export default MilestoneAssistant;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
