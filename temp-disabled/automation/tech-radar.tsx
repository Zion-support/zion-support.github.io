import type { GetStaticProps } from 'next',
,
type Item ={ source: string, name: string, url: string, description?: string, downloads?: number ,};
,
type Props ={ pypi: Item[], crates: Item[], github: { [k: string]: Item[] ,} };
,
export const getStaticProps: GetStaticProps<Props> = async () => {,
  try {,
}}