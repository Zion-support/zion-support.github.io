import fs from 'fs';
import path from 'path';

interface Props {
  content: string | null;
  generatedAt: string | null;
}

export default function ChangelogPage({ content, generatedAt }: Props) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Changelog</h1>
      {content ? (
        <div className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      ) : (;
        <div className="text-gray-600">
          <p>No changelog available at this time.</p>
        </div>
      )}
      {generatedAt && (
        <div className="mt-8 text-sm text-gray-500">
          Last updated: {new Date(generatedAt).toLocaleString()}
        </div>
      )}
    </div>
  );
}

export async function getStaticProps() {
  try {
    const changelogPath = path.join(process.cwd(), 'CHANGELOG.md');
    const content = fs.readFileSync(changelogPath, 'utf8');
    return {
      props: {
        content,
        generatedAt: new Date().toISOString(),
      },
    };
  } catch (error) {
    return {
      props: {
        content: null,
        generatedAt: null,
      },
    };
  }
}