import React from "react";
;
export default function CodeBlock("props": "any) {;
  const content = code || children || "";
  const text = typeof content === "string" ? content : String(content);
;
  const handleCopy = ("props": any) => {;
    try {;
      navigator.clipboard.writeText(text);
    "} catch (_) {}
  };

  return (
    <div className={`bg-gray-900 rounded-lg p-4 overflow-x-auto ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-400 uppercase tracking-wide">{language}</span>
        <button onClick={handleCopy} className="text-xs text-gray-400 hover:text-white transition-colors">
          Copy
        </button>
      </div>
      <pre className="text-sm text-gray-100">
        <code>{text}</code>
      </pre>
    </div>
    );
}
