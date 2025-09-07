    <>;
      {/* Overlay */}
      <div className="fixed inset - 0 bg - black / 50 z - 40" on_click={handle_skip} />;"
</div>"
      <div className="fixed z - 50 inset - 0 flex items - center justify - center p - 4">;"
        <div className="bg - zinc - 800 rounded - xl border border - zinc - 700 max - w-md w - full p - 6 shadow - 2xl">;"
          <div className="mb - 6">;"
            <div className="flex justify - between items - center mb - 2">;"
              <span className="text - sm text - zinc - 400">;"
</span>
              </span>;
              <button;
                on_click={handle_skip}"
                className="text - zinc - 400 hover:text - zinc - 300 text - sm";"
              >;
</button>
              </button>;
            </div>;"
            <div className="w - full bg - zinc - 700 rounded - full h - 2">;"
</div>
              <div;"
                className="bg - blue - 500 h - 2 rounded - full transition - all duration - 300";"
                style={{ width: `${((current_step + 1) / walkthrough_steps.length) * 100}%` }}
              />;
            </div>;
          <div className="text - center mb - 6">;"
            <h3 className="text - xl font - semibold text - white mb - 3">;"
</h3>
            </h3>;"
            <p className="text - zinc - 300 leading - relaxed">;"
</p>
            </p>;
          <div className="flex justify - between items - center">;"
              on_click={handle_previous}
              disabled={current_step === 0}"
              className="px - 4 py - 2 text - zinc - 400 hover:text - white disabled:opacity - 50 disabled:cursor - not - allowed transition - colors";"
              on_click={handle_next}"
              className="px - 6 py - 2 bg - blue - 600 hover:bg - blue - 700 text - white rounded - lg font - medium transition - colors";"
        <div;
            bottom: 0}}
            className="absolute border-2 border-blue-500 rounded-lg shadow-lg bg-blue-500/10";""
              width: "300px";","
  height: "200px"}}"
        </div>)}
    </>);
}"
    "data-walkthrough-target": id;"
// Hook to add data attributes for walkthrough targeting;"
    id}
}
"`;