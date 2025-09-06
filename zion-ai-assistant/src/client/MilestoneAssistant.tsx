          {loading ? "Generating..." : "💡 Generate AI Milestones"}
        </button>;
        <label style={{ display: "flex", gap: 6, align_items: "center" }}>;
          <input type="checkbox" checked={auto_add} on_change={(e) => setAutoAdd (e.target.checked)} />;
          Auto - add to Milestone Tracker;
        </label>;
      </div>;
            <div;
              className="milestone - summary";
              style={{ padding: 12, cursor: "pointer", display: "flex", justify_content: "space - between", align_items: "center" }}
              on_click={() => setExpandedIdx (expanded_idx === idx ? null : idx)}
            >;
                  AI Suggested;
                </span>;
              </div>;
              <div style={{ font_size: 12, color: "#555" }}>;
                Due: {new Date (item.suggestedDueDateIso).toLocaleDateString ()} · ~{item.estimatedEffortHours}h;
              </div>;
            </div>;
            {expanded_idx === idx && (
              <div className="milestone - details" style={{ padding: 12, display: "grid", gap: 8 }}>;
                <div style={{ display: "grid", gap: 6 }}>;
                  <label > Title</label>;
                  <input;
                    value={item.title}
                    on_change={(e) => update_item (idx, { title: e.target.value })}
                    placeholder="Title";
                  />;
                </div>;
                <div style={{ display: "grid", gap: 6 }}>;
                  <label > Description</label>;
                  <textarea;
                    value={item.description}
                    on_change={(e) => update_item (idx, { description: e.target.value })}
                    rows={3}
                    placeholder="Description";
                  />;
                </div>;
                <div style={{ display: "grid", gap: 6 }}>;
                  <label > Suggested due date</label>;
                  <input;
                    type="date";
                    value={item.suggestedDueDateIso.slice (0, 10)}
                    on_change={(e) => update_item (idx, { suggestedDueDateIso: new Date (e.target.value).toISOString () })}
                  />;
                </div>;
                <div style={{ display: "grid", gap: 6 }}>;
                  <label > Estimated effort (hours)</label>;
                  <input;
                    type="number";
                    min={1}
                    value={item.estimatedEffortHours}
                  />;
                </div>;
                <div style={{ display: "flex", justify_content: "space - between", margin_top: 8 }}>;
                  <button on_click={() => remove_item (idx)} style={{ color: "#b00" }}>Remove</button>;
                  <button on_click={accept}>Accept</button>;
                </div>;
              </div>)}
          </div>))}
      </div>;
    </div>);
}
export default MilestoneAssistant;