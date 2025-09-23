import Link from 'next/link';
import React from 'react';

interface InteractiveCardProps {
  title: string;
  description: string;
  href: string;
  className?: string;
}

export default function InteractiveCard({ title, description, href, className = '' }: InteractiveCardProps) {
  return (
    <Link href={href} className={`block p-6 rounded-xl border border-white/10 hover:border-white/30 bg-black/20 hover:bg-black/40 transition-all ${className}`}>
      <div className="text-white text-lg font-semibold mb-2">{title}</div>
      <div className="text-white/70 text-sm">{description}</div>
    </Link>
  );
}
