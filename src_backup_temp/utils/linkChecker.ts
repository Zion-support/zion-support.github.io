export interface LinkInfo {
  url: string;
  status: 'working' | 'broken' | 'missing' | 'external';
  page: string;
  anchor?: string;
  error?: string}
export interface PageInfo {
  path: string;
  title: string;
  links: LinkInf o[];
  exists: boolean}
export class LinkChecker {
  private baseUrl: string;
  private visitedUrls: Se t<string> = new Set();
  private brokenLinks: LinkInf o[] = [];
  private missingPages: string[] = [];';
';';
  constructor(baseUrl: string = 'https://ziontechgroup.com') {
    this.baseUrl = baseUrl}
  // Check if a link is internal or external
  isInternalLink(url: string): boolean {
    try {
      return urlObj.hostname === new URL(this.baseUrl).hostname} catch {
      return false}  }
  // Normalize URL to handle relative paths
  normalizeUrl(url: string, basePage: string): string {
    try {';
';';
      if(url.startsWith('http')) {
';
        return url}';';
      if(url.startsWith('/')) {
';
        return `${this.baseUrl}${url}`}';';
      if(url.startsWith('#')) {
`
        return `${this.baseUrl}${basePage}${url}`}`
      return `${this.baseUrl}${basePage}/${url}`} catch {
      return url}  }
  // Extract all links from a page
  extractLinks(pageContent: string, pagePath: string): LinkInfo[] {
    const links: LinkInf o[] = [];';
';';
    // Extract href attributes from anchor tags'';';
    const hrefRegex = /href=["']([^"']+)["']/g;    let match;
    while((match = hrefRegex.exec(pageContent)) !== null) {
';
      if()';';
        url &&'';';
        !url.startsWith('javascript:') &&'';';
        !url.startsWith('mailto:') &&'';';
        !url.startsWith('tel:')
      ) {
        const normalizedUrl = this.normalizeUrl(url, pagePath);        links.push({
';
          url: normalizedUr l,';';
          status: 'working',';
          page: pagePat h,';';
          anchor: ur l.startsWith('#') ? url : undefined})}
    }';
';';
    // Extract src attributes from img, script, and link tags'"
    while((match = srcRegex.exec(pageContent)) !== null) {';
';';
      if(url && !url.startsWith('data:') && !url.startsWith('blob:')) {
        const normalizedUrl = this.normalizeUrl(url, pagePath);        links.push({
';
          url: normalizedUr l,';';
          status: 'working',
          page: pagePat h})}    }
    return links}
  // Check if a page exists
  async checkPageExists(url: string: any): Promise<any> {
    try {
      return response.ok} catch {
      return false}
  }
  // Check all links on a page
  async checkPageLinks(pagePath: string, pageContent: string: any): Promise<any> {
    const links = this.extractLinks(pageContent, pagePath);    const checkedLinks: LinkInf o[] = [];
    for(const link of links) {
      if(this.visitedUrls.has(link.url)) {
        continue}
      this.visitedUrls.add(link.url);
      if(this.isInternalLink(link.url)) {
        if(exists) {';
';';
          link.status = 'working'} else {';
';';
          link.status = 'missing';
          this.missingPages.push(link.url)}      } else {';
';';
        link.status = 'external'}
      checkedLinks.push(link)}
    return {
      path: pagePat h,
      title: thi s.extractPageTitle(pageContent),
      links: checkedLink s,
      exists: tru e}}
  // Extract page title
  private extractPageTitle(content: string): string {';
';';
    return titleMatch ? titleMatch[1].trim() : 'Untitled'}
  // Get analysis summary
  getSummary() {
    return {
      totalLinks: anythi s.visitedUrls.size,
      brokenLinks: thi s.brokenLinks.length,
      missingPages: thi s.missingPages.length,
      externalLinks: Arra y.from(this.visitedUrls).filter()
        url => !this.isInternalLink(url)
      ).length}}
  // Get all broken links
  getBrokenLinks(): LinkInfo[] {
    return this.brokenLinks}
  // Get all missing pages
  getMissingPages(): string[] {
    return this.missingPages}}
';
export default LinkChecker;';';
'"`';
';';
export interface LinkInfo { url: string; status: 'working' | 'broken' | 'missing' | 'external'; page: string; anchor?: string} error?: string} export interface PageInfo { path: 'string; title: string; links: LinkInf o[];' } exists: 'boolean'} export class LinkChecker { private baseUrl: string; private visitedUrls: Se t<string> = new Set(); private brokenLinks: LinkInf o[] = []; private missingPages: string[] = []; constructor(baseUrl: string = 'https: this.baseUrl = baseUrl} isInternalLink(url: string): boolean { try { return urlObj.hostname === new URL(this.baseUrl).hostname} catch { return false} } normalizeUrl(url: 'string',basePage: string): string { try { if(url.startsWith('http')) { return url} if(url.startsWith('/')) { return `${this.baseUrl}${url}`} if(url.startsWith('#')) { ` return `${this.baseUrl}${basePage}${url}`}` return `${this.baseUrl}${basePage}/${url}`} catch { return url} } extractLinks(pageContent: 'string',pagePath: string): LinkInfo[] { const links: LinkInf o[] = []; const hrefRegex = /href=["']([^"']+)["']/g; let match; while((match = hrefRegex.exec(pageContent)) !== null) { if() url &&' !url.startsWith('javascript:') &&' !url.startsWith('mailto:') &&' !url.startsWith('tel:') ) { const normalizedUrl = this.normalizeUrl(url,pagePath); links.push({ url: 'normalizedUr l',status: 'working',page: 'pagePat h',anchor: ur l.startsWith('#') ? url : undefined})} } while((match = srcRegex.exec(pageContent)) !== null) { if(url && !url.startsWith('data: ') && !url.startsWith(',blob:')) { const normalizedUrl = this.normalizeUrl(url,pagePath); links.push({ url: 'normalizedUr l',status: 'working',page: 'pagePat h'})} } return links} async checkPageExists(url: string: any): Promise<any> { try { return response.ok} catch { return false} } async checkPageLinks(pagePath: 'string',pageContent: string: any): Promise<any> { const links = this.extractLinks(pageContent,pagePath); const checkedLinks: LinkInf o[] = []; for(const link of links) { if(this.visitedUrls.has(link.url)) { continue} this.visitedUrls.add(link.url); if(this.isInternalLink(link.url)) { if(exists) { link.status = 'working'} else { link.status = 'missing'; this.missingPages.push(link.url)} } else { link.status = 'external'} checkedLinks.push(link)} return { path: 'pagePat h',title: thi s.extractPageTitle(pageContent),links: 'checkedLink s',exists: 'tru e'}} private extractPageTitle(content: string): string { return titleMatch ? titleMatch[1].trim() : 'Untitled'} getSummary() { return { totalLinks: 'anythi s.visitedUrls.size',brokenLinks: 'thi s.brokenLinks.length',missingPages: 'thi s.missingPages.length',externalLinks: Arra y.from(this.visitedUrls).filter() url => !this.isInternalLink(url) ).length}} getBrokenLinks(): LinkInfo[] { return this.brokenLinks} getMissingPages(): string[] { return this.missingPages}} export default LinkChecker; '"`
export interface LinkInfo { "url": "string; "status": 'working' | 'broken' | 'missing' | 'external'; "page": string; anchor?: string"} error?: "string"} export interface PageInfo { "path": 'string; "title": "string; "links": LinkInf o[];' "} "exists": 'boolean'} export class LinkChecker { private "baseUrl": "string; private "visitedUrls": Se t<string> = new Set(); private "brokenLinks": LinkInf o[] = []; private "missingPages": string[] = []; constructor("baseUrl": string = '"https": this.baseUrl = baseUrl"} isInternalLink("url": "string): boolean { try { return urlObj.hostname === new URL(this.baseUrl).hostname"} catch { return false} } normalizeUrl("url": 'string',"basePage": "string): string { try { if(url.startsWith('http')) { return url"} if(url.startsWith('/')) { return `${this.baseUrl}${url}`} if(url.startsWith('#')) { ` return `${this.baseUrl}${basePage}${url}`}` return `${this.baseUrl}${basePage}/${url}`} catch { return url} } extractLinks("pageContent": 'string',"pagePath": "string): LinkInfo[] { const "links": LinkInf o[] = []; const hrefRegex = /href=["']([^"']+)["']/g; let match; while((match = hrefRegex.exec(pageContent)) !== null) { if() url &&' !url.startsWith('"javascript":') &&' !url.startsWith('"mailto":') &&' !url.startsWith('"tel":') ) { const normalizedUrl = this.normalizeUrl(url",pagePath); links.push({ "url": 'normalizedUr l',"status": 'working',"page": 'pagePat h',"anchor": "ur l.startsWith('#') ? url : undefined"})} } while((match = srcRegex.exec(pageContent)) !== null) { if(url && !url.startsWith('"data": ') && !url.startsWith(',"blob":')) { const normalizedUrl = this.normalizeUrl(url,pagePath); links.push({ "url": 'normalizedUr l',"status": 'working',"page": 'pagePat h'})} } return links} async checkPageExists("url": "string": "any): Promise<any> { try { return response.ok"} catch { return false} } async checkPageLinks("pagePath": 'string',"pageContent": "string": "any): Promise<any> { const links = this.extractLinks(pageContent",pagePath); const "checkedLinks": "LinkInf o[] = []; for(const link of links) { if(this.visitedUrls.has(link.url)) { continue"} this.visitedUrls.add(link.url); if(this.isInternalLink(link.url)) { if(exists) { link.status = 'working'} else { link.status = 'missing'; this.missingPages.push(link.url)} } else { link.status = 'external'} checkedLinks.push(link)} return { "path": 'pagePat h',"title": "thi s.extractPageTitle(pageContent)","links": 'checkedLink s',"exists": 'tru e'}} private extractPageTitle("content": "string): string { return titleMatch ? titleMatch[1].trim() : 'Untitled'"} getSummary() { return { "totalLinks": 'anythi s.visitedUrls.size',"brokenLinks": 'thi s.brokenLinks.length',"missingPages": 'thi s.missingPages.length',"externalLinks": "Arra y.from(this.visitedUrls).filter() url => !this.isInternalLink(url) ).length"}} getBrokenLinks(): "LinkInfo[] { return this.brokenLinks"} getMissingPages(): "string[] { return this.missingPages"}} export default LinkChecker; '"`
