import React, { useEffect, useState } from 'react';

export default function DocsAdmin() {
  const [token, setToken] = useState('');
  const [value, setValue] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const fetchContent = async () => {
    setStatus('Loading...');
    const res = await fetch('/api/admin/docs/get', { headers: { 'x-admin-token': token } });
    if (!res.ok) {
      setStatus('Failed to load');
      return;
    }
    const json = await res.json();
    setValue(JSON.stringify(json, null, 2));
    setStatus('Loaded');
  };

  const saveContent = async () => {
    setStatus('Saving...');
    try {
      const parsed = JSON.parse(value);
      const res = await fetch('/api/admin/docs/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-token': token },
        body: JSON.stringify(parsed)});
      if (!res.ok) throw new Error('Save failed');
      const data = await res.json();
      setStatus(`Saved version ${data.version}`);
    } catch (e) {
      setStatus('Invalid JSON or save error');
    }
  };

  return (
    <div className=&quot;max-w-5xl mx-auto p-6 space-y-4&quot;>
      <h1 className=&quot;text-2xl font-semibold&quot;>Docs Admin</h1>
      <div className=&quot;flex items-center gap-2&quot;>
        <input
          placeholder=&quot;Admin token&quot;
          type=&quot;password&quot;
          className=&quot;border rounded px-3 py-2 text-sm w-64&quot;
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <button onClick={fetchContent} className=&quot;px-3 py-2 text-sm rounded bg-gray-900 text-white&quot;>Load</button>
        <button onClick={saveContent} className=&quot;px-3 py-2 text-sm rounded bg-green-600 text-white&quot;>Save</button>
        {status && <p className=&quot;text-sm text-gray-600&quot;>{status}</p>}
      </div>
      <textarea
        className=&quot;w-full h-[70vh] border rounded p-3 font-mono text-sm&quot;
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}