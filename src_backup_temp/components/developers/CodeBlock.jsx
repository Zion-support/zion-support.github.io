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
