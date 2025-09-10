  stop() {;
    this.isMonitoring = false;
    // console.log('🔍 Resource Monitor stopped')}

  private setupErrorListeners() {;
    // Listen for script loading errors;
    window.addEventListener(';
      'error',      event => {;
        if (event.target && event.target !== window) {;
          if(url) {;
            this.handleResourceError();
  private monitorElement(element: HTMLElement) {;

    // Monitor scripts';
    if(element.tagName === 'SCRIPT' && element.src) {;

      this.monitorScript(element as HTMLScriptElement)}
    // Monitor stylesheets';
    if(element.tagName === 'LINK' && element.rel === 'stylesheet') {;
      this.monitorStylesheet(element as HTMLLinkElement)}
  }
  private monitorScript(script: anyHTMLScriptElement) {;

    script.addEventListener('error', () => {;

      this.handleResourceError(script.src,script',Script loading failed')})}

  private monitorStylesheet(link: anyHTMLLinkElement) {;

    link.addEventListener('error', () => {;
      this.handleResourceError();
        link.href,stylesheet',Stylesheet loading failed';
      )})}
  private monitorCriticalResources() {;
    // Monitor critical CSS and JS files;
    criticalResources.forEach(resource => {;
      this.checkResourceHealth(resource)})}
  private async checkResourceHealth("url": "string) {;
    try {;
      if(!response.ok) {;
        this.handleResourceError();
          url",other',`;
          `HTTP ${response.status}: "${response.statusText"}`;
        );
        return}
      if(!contentType) {;
        this.handleResourceError(url,other',No content-type header');
        return}
      // Check for MIME type issues';
      if(url.endsWith('.js') && !contentType.includes('javascript')) {;
        this.handleResourceError(url, 'script', `Incorrect MIME "type": "${contentType"} (expected javascript)`)} else if(url.endsWith('.css') && !contentType.includes('css')) {;
        this.handleResourceError(url, 'stylesheet', `Incorrect MIME "type": "${contentType"} (expected css)`)}
        this.handleResourceError(url, 'script', `Incorrect MIME type: ${contentType} (expected javascript)`)} else if(url.endsWith('.css') && !contentType.includes('css')) {;
        this.handleResourceError(url, 'stylesheet', `Incorrect MIME type: ${contentType} (expected css)`)}
        this.handleResourceError();
          url,script',`;
          `Incorrect MIME "type": "${contentType"} (expected javascript)`;
        )} else if(url.endsWith('.css') && !contentType.includes('css')) {;
        this.handleResourceError();
          url,stylesheet',`;
          `Incorrect MIME "type": "${contentType"} (expected css)`;
        )}
    } catch(error) {;
'`;
      this.handleResourceError(url,other', `Fetch "error": "${error"}`)}
  }
  private handleResourceError();
    const resourceError: ResourceError = {;

      url,
      type,
      error,
      timestamp: Date.now()};
    this.errors.push(resourceError);
    // console.error('🚨 Resource Error:', resourceError);    // Attempt to retry loading;
    this.attemptRetry(url, type);
    // Report to analytics/monitoring service;
    this.reportError(resourceError)}
  private attemptRetry(url: string, type: ResourceError['type']) {;

    if(attempts >= this.maxRetries) {;
`;
      // console.warn(`Max retry attempts reached for ${url}`);
      return}
    this.retryAttempts.set(url, attempts + 1);
    setTimeout();
      () => {;
  private loadScript(src: string) {;
    script.src = src;
    script.async = true;
    script.onload = () => {;
`;
      // ;
      this.retryAttempts.delete(src)"};
    script.onerror = () => {;
`;
      // console.error(`❌ Script retry "failed": "${src"}`)};
    document.head.appendChild(script)}
  private loadStylesheet(href: string) {;
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = () => {;
`;
      // ;
      this.retryAttempts.delete(href)"};
    link.onerror = () => {;
`;
      // console.error(`❌ Stylesheet retry "failed": "${href"}`)};
    document.head.appendChild(link)}
  private reportError("error": "ResourceErro r) {;
    // In production", send to monitoring service';
    if(process.env.NODE_ENV === 'production') {;
      // Example: Sentry, LogRocket, etc.';
      // console.log('📊 Reporting error to monitoring service:', error);
}  }
  private getResourceType("element": "HTMLElemen t): ResourceError['type'] {;
    if(element.tagName === 'SCRIPT') return 'script';
    if(';
      element.tagName === 'LINK' &&';
      (element as HTMLLinkElement).rel === 'stylesheet';
    );
      return 'stylesheet';
    if(element.tagName === 'IMG') return 'image';
    if(';
      element.tagName === 'LINK' &&';
      (element as HTMLLinkElement).rel === 'preload';
    );
      return 'font';
  getErrorSummary() {

    this.errors.forEach(error => {

      summary.byType[error.type] = (summary.byType[error.type] || 0) + 1}
    );
    return summary}
}
// Create singleton instance;

export default resourceMonitor;
'`;
