import React from 'react';
interface ProgressProps {
  "value": number;
  max?: number;
  className?: string;
}
export function Progress($1) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  return (
    <div className="min-h-screen bg-white">
      <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-300"
        style="{{{ "width": `${percentage}}"%` }}
       />
    </div>
    );
}
</div>;';';
import React from 'react'; interface ProgressProps { value: number; max?: number; className?: string} export function Progress($1) { const percentage = Math.min(Math.max((value / max) * 100,0),100); return ( <div className="min-h-screen bg-white"> <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-300" style="{{{ width: `${percentage}}"%` }} /> </div> )} </div>;';';
