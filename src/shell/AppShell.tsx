import React from 'react';

export default function AppShell(): JSX.Element {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-800 p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-2xl font-bold mb-3">Zion Tech Group</h1>
        <p className="text-gray-600">App shell for SPA build. Visit the Next.js site at <a className="text-purple-600 underline" href="/">/</a>.</p>
      </div>
    </div>
  );
}

