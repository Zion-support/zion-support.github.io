import React from 'react';

const ResponsibleAutonomyGuide2026: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-white">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Responsible Autonomy Guide (2026)</h1>
      <p className="text-white/80 mb-6">
        Practical steps to ship autonomy safely with evaluation gates and policy-aligned controls.
      </p>
      <div className="space-y-4 text-white/85">
        <p>
          This guide translates governance principles into concrete runtime safeguards for production systems.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Define SLIs/SLOs for agent behaviors</li>
          <li>Preflight checks and staged rollouts</li>
          <li>Kill-switch, canary, rollback mechanics</li>
          <li>Post-release monitoring and scorecards</li>
        </ul>
      </div>
    </div>
  );
};

export default ResponsibleAutonomyGuide2026;

