import React, {_useEffect, _useState} from 'react';

export default function DocsAdmin() {_const [token, _setToken] = useState('');
  const [value, _setValue] = useState('');
  const [status, _setStatus] = useState<string | null>(null);

  const _fetchContent = async () => {
    setStatus('Loading...');
    const _res = await fetch('/api/admin/docs/get', _{ headers: { 'x-admin-token': token} });
    if (!res.ok) {_setStatus('Failed to load');
      return;}
    const _json = await res.json();
    setValue(JSON.stringify(json, null, 2));
    setStatus('Loaded');
  };

  const _saveContent = async () => {_setStatus('Saving...');
    try {
      const _parsed = JSON.parse(value);
      const _res = await fetch('/api/admin/docs/save', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json', _'x-admin-token': token},
        body: JSON.stringify(parsed)});
      if (!res.ok) throw new Error('Save failed');
      const _data = await res.json();
      setStatus(`Saved version ${_data.version}`);
    } catch (e) {_setStatus('Invalid JSON or save error');}
  };

  return (_<div className="max-w-5xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Docs Admin</h1>
      <div className="flex items-center gap-2">
        <input
          placeholder="Admin token"
          type="password"
          className="border rounded px-3 py-2 text-sm w-64"
          value={_token}
          onChange={_(e) => setToken(e.target.value)}
        />
        <button onClick={_fetchContent} className="px-3 py-2 text-sm rounded bg-gray-900 text-white">Load</button>
        <button onClick={_saveContent} className="px-3 py-2 text-sm rounded bg-green-600 text-white">Save</button>
        {_status && <p className="text-sm text-gray-600">{status}</p>}
      </div>
      <textarea
        className="w-full h-[70vh] border rounded p-3 font-mono text-sm"
        value={_value}
        onChange={_(_e) => setValue(e.target.value)}
      />
    </div>
  );
}