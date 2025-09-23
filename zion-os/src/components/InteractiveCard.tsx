import React from "react";

interface InteractiveCardProps {
  title: string;
  description?: string;
}

export default function InteractiveCard({ title, description }: InteractiveCardProps) {
  return (
    <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      {description ? <p className="text-white/70 text-sm">{description}</p> : null}
    </div>
  );
}

