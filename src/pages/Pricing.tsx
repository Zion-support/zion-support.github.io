import React from 'react';

export default function Pricing() {
  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <h1 className="text-3xl font-bold mb-4">Pricing</h1>
      <ul className="grid gap-4 max-w-2xl">
        <li className="p-4 bg-gray-900 border border-gray-800 rounded">Starter - $299/mo</li>
        <li className="p-4 bg-gray-900 border border-gray-800 rounded">Professional - $599/mo</li>
        <li className="p-4 bg-gray-900 border border-gray-800 rounded">Enterprise - Custom</li>
      </ul>
    </div>
  );
}
