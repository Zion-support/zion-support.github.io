import React, { useEffect } from 'react';
import type { GetStaticProps } from 'next';
import content from '../../../data/docs/content.json';

export type Section = {
  id: string;
  title: string;
  html?: string;
  code?: { language?: string; content: string }[];
};

type DocsContent = {
  title: string;
  sections: Section[];
};

type PageProps = {
  docs: DocsContent;
};

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  return {
    props: {
      docs: content as DocsContent}};
};

export default function PrintDocs({ docs }: PageProps) {
  useEffect(() => {
    const id = setTimeout(() => window.print(), 500);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className=&quot;p-8 max-w-4xl mx-auto&quot;>
      <h1 className=&quot;text-3xl font-bold mb-6&quot;>{docs.title}</h1>
      <div className=&quot;space-y-8&quot;>
        {docs.sections.map((s) => (
          <section key={s.id}>
            <h2 className=&quot;text-2xl font-semibold mb-2&quot;>{s.title}</h2>
            {s.html && <div dangerouslySetInnerHTML={{ __html: s.html }} />}
            {s.code && s.code.map((c, i) => (
              <pre key={i} className=&quot;mt-4 p-4 bg-gray-100 text-xs whitespace-pre-wrap&quot;>{c.content}</pre>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}