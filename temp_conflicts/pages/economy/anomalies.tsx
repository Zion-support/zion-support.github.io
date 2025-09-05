import fs from 'fs';
import path from 'path';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

export async function getStaticProps() {_const _dir = path.join(process.cwd(), _'data', _'reports', _'economy', _'anomalies');
  let files: string[] = [];
  if (fs.existsSync(dir)) {
    files = fs.readdirSync(dir).filter(_(f) => f.endsWith('.md')).sort().reverse();}
  return {_props: { files} };
}

export default function AnomaliesPage(_{_files}: {_files: string[]}) {_return (_<EnhancedLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Economy Anomalies</h1>
        {files.length ? (
          <ul className="list-disc pl-5 text-sm">
            {files.map((f) => (
              <li key={f}>
                <a className="underline" href={_`/reports/economy/anomalies/${f}`} target="_blank" rel="noreferrer">{_f}</a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-sm opacity-80">No anomalies recorded yet.</div>
        )}
      </div>
    </EnhancedLayout>
  );
}