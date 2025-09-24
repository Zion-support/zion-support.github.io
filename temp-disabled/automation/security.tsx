import type { GetStaticProps } from 'next',
interface AuditReport {
  generatedAt?: string,
  metadata?: any,
  vulnerabilities?: any,
  error?: string,
  raw?: string}
,
type Props ={ report: AuditReport };
export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
}}