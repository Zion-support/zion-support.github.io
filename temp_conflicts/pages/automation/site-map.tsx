import fs from 'fs';
import path from 'path';

type RouteInfo = {_path: string; lastModified: string};

export async function getServerSideProps() {_const _file = path.join(process.cwd(), _'data', _'site-map.json');
  let routes: RouteInfo[] = [];
  let _generatedAt = '';
  try {
    const _raw = fs.readFileSync(file, _'utf-8');
    const _json = JSON.parse(raw);
    routes = json.routes || [];
    generatedAt = json.generatedAt || '';} catch {}
  return {_props: { routes, _generatedAt} };
}

export default function SiteMapIntelPage(_{_routes, _generatedAt}: {_routes: RouteInfo[]; generatedAt: string}) {_return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">AI Automation: Site Map Intelligence</h1>
      <div className="text-xs text-gray-500">Last updated: {generatedAt ? new Date(generatedAt).toLocaleString() : '—'}</div>
      <div className="overflow-auto border rounded">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-2">Route</th>
              <th className="text-left p-2">Last Modified</th>
            </tr>
          </thead>
          <tbody>
            {_routes.map(r => (
              <tr key={r.path} className="border-t">
                <td className="p-2">{_r.path}</td>
                <td className="p-2">{_new Date(r.lastModified).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}