import type { GetStaticProps } from 'next',
type Item ={ source: string, title: string, url: string, date?: string, summary?: string };
type Props ={ items: Item[] };
export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
}}