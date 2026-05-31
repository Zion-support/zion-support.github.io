import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tools Regex Generator | Zion Tech Group',
  description: 'Tools Regex Generator — Zion Tech Group delivers cutting-edge technology solutions.',
};

export default function RegexGeneratorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Regex Generator</h1>
      <p className="mb-4">Generate regular expressions from natural language and test them with live examples.</p>
      <div className="border rounded-lg p-6">
        <p className="text-slate-500">Tool implementation coming soon.</p>
      </div>
    </div>
  );
}