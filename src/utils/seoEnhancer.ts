/**
 * SEO Enhancer;
 * Basic SEO optimization utilities;
 */
interface SEOConfig {
  title: string,
  description: string
  keywords: string[]
  canonicalUrl: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  structuredData?: unknown
  robots?: string
  language?: string
  author?: string
  publisher?: string
  lastModified?: string
}
class SEOEnhancer {
  private config: SEOConfig
  constructor(config: SEOConfig) {
    this.config = config
    this.init()
  private init(): void {
    <SEOConfig>): void {
    this.config = { ...this.config, ...newConfig }
    this.updateMetaTags()
export default SEOEnhancer