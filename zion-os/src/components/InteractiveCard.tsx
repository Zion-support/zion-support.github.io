import React from 'react';

export interface InteractiveCardProps {
  title: string;
  description?: string;
  href?: string;
  className?: string;
}

export function InteractiveCard({ title, description, href, className = '' }: InteractiveCardProps) {
  const Wrapper: React.ElementType = href ? 'a' : 'div';
  const wrapperProps = href ? { href } : {};
  return (
    <Wrapper
      {...wrapperProps}
      className={`group block p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors ${className}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-white font-semibold">{title}</h3>
          {description ? <p className="text-white/70 mt-1">{description}</p> : null}
        </div>
        <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Wrapper>
  );
}

export default InteractiveCard;
