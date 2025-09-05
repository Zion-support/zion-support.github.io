import fs from 'fs';
import path from 'path';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'data', 'reports', 'economy', 'anomalies');
  let files: string[] = [];
  if (fs.existsSync(dir)) {
    files = fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort().reverse();
  }
  return { props: { files } };
}

export default function AnomaliesPage({ files }: { files: string[] }) {
  return (
    <EnhancedLayout>
      <div className=&quot;space-y-6&quot;>
        <h1 className=&quot;text-2xl font-semibold&quot;>Economy Anomalies</h1>
        {files.length ? (
          <ul className=&quot;list-disc pl-5 text-sm&quot;>
            {files.map((f) => (
              <li key={f}>
                <a className=&quot;underline&quot; href={`/reports/economy/anomalies/${f}`} target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>{f}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className=&quot;text-sm opacity-80&quot;>No anomalies recorded yet.</div>
        )}
      </div>
    </EnhancedLayout>
  );
}