import type { GetStaticProps } from 'next',
interface Node { id: string, tokens: string[] }
interface Edge { source: string, target: string, weight: number, terms: string[] }
interface Report { generatedAt: string, nodes: Node[], edges: Edge[], topTerms: { term: string, count: number }[] }
,
type Props ={ report: Report | null };
export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
}}