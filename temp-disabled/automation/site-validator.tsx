import type { GetStaticProps } from 'next';

type Broken ={ url: string; page: string; status: number };
interface Report { generatedAt: string; pagesScanned: number; brokenLinks: Broken[]; pagesWithOgIssues: number; ogIssues: { page: string; missing: string[] }[] }

type Props ={ report: Report | null };

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
