<<<<<<< HEAD:temp_exclude/src.disabled/src/utils/resourceMonitor.ts
<<<<<<< HEAD:temp_exclude/src.disabled/src/utils/resourceMonitor.ts
<<<<<<< HEAD:temp_exclude/src.disabled/src/utils/resourceMonitor.ts
<<<<<<< HEAD:backup-merge-conflicts/resourceMonitor.ts.backup


=======
>>>>>>> origin/main
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:src.disabled/src/utils/resourceMonitor.ts
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2:src.disabled/src/utils/resourceMonitor.ts
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c:src.disabled/src/utils/resourceMonitor.ts
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src.disabled/src/utils/resourceMonitor.ts
interface ResourceError {;
  "url": string;
  type: 'script' | 'stylesheet' | 'image' | 'font' | 'other';
  error: string;
  timestamp: number}
class ResourceMonitor {;"
  private "errors": ResourceError[] = [];
  private isMonitoring = false;
  private retryAttempts = new Map<string, number>();
  private maxRetries = 3;
  start() {;
    if(this.isMonitoring) return;
    this.isMonitoring = true;
    this.setupErrorListeners();
    this.setupResourceObservers();
    this.monitorCriticalResources();
    // console.log('🔍 Resource Monitor started')}
  stop() {;
    this.isMonitoring = false;
    // console.log('🔍 Resource Monitor stopped')}
  private setupErrorListeners() {;
<<<<<<< HEAD:temp_exclude/src.disabled/src/utils/resourceMonitor.ts
    // Listen for script loading errors;
    window.addEventListener(';
=======
    // Listen for script loading errors;'
    window && window.addEventListener(';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src.disabled/src/utils/resourceMonitor.ts
      'error',
      event => {;
        if (event.target && event.target !== window) {;
          if(url) {;
            this.handleResourceError();
              url,
<<<<<<< HEAD:temp_exclude/src.disabled/src/utils/resourceMonitor.ts
              this.getResourceType(target),
              event.error?.message || 'Unknown error';
=======
              this && this.getResourceType(target),'
              event && event.error?.message || 'Unknown error';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src.disabled/src/utils/resourceMonitor.ts
            )}
        }
      },
      true;
<<<<<<< HEAD:temp_exclude/src.disabled/src/utils/resourceMonitor.ts
    );
    // Listen for unhandled promise rejections';
    window.addEventListener('unhandledrejection', event => {;
      if();
        event.reason &&';
        typeof event.reason === 'string' &&';
        event.reason.includes('MIME');
      ) {;
        this.handleResourceError(';
          'unknown',other',
          `MIME type "error": ${event.reason}`;
=======
    );'
    // Listen for unhandled promise rejections';'
    window && window.addEventListener('unhandledrejection', event => {;
      if();'
        event && event.reason &&';'
        typeof event && event.reason === 'string' &&';'
        event && event.reason.includes('MIME');
      ) {;'
        this && this.handleResourceError(';'
          'unknown',other',"
          `MIME type "error": ${event && event.reason}`;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src.disabled/src/utils/resourceMonitor.ts
        )}
    })}
  private setupResourceObservers() {;
    // Monitor DOM changes for new resources;
<<<<<<< HEAD:temp_exclude/src.disabled/src/utils/resourceMonitor.ts
    if(window.MutationObserver) {;
              this.monitorElement(element)}
          })})});
      observer.observe(document.head, { "childList": true, "subtree": true });
      observer.observe(document.body, { "childList": true, "subtree": true })}
  }
  private monitorElement("element": HTMLElement) {;
    // Monitor scripts';
    if(element.tagName === 'SCRIPT' && element.src) {;
      this.monitorScript(element as HTMLScriptElement)}
    // Monitor stylesheets';
    if(element.tagName === 'LINK' && element.rel === 'stylesheet') {;
      this.monitorStylesheet(element as HTMLLinkElement)}
  }
  private monitorScript("script": anyHTMLScriptElement) {;
    script.addEventListener('error', () => {;
      this.handleResourceError(script.src,script',Script loading failed')})}
  private monitorStylesheet("link": anyHTMLLinkElement) {;
    link.addEventListener('error', () => {;
      this.handleResourceError();
        link.href,stylesheet',Stylesheet loading failed';
      )})}
  private monitorCriticalResources() {;
    // Monitor critical CSS and JS files;
    criticalResources.forEach(resource => {;
      this.checkResourceHealth(resource)})}
  private async checkResourceHealth("url": string) {;
    try {;
      if(!response.ok) {;
        this.handleResourceError();
          url,other',";
          "HTTP ${response.status}: ${response.statusText}";
        );
        return}
      if(!contentType) {;
        this.handleResourceError(url,other',No content-type header');
        return}
      // Check for MIME type issues';
      if(url.endsWith('.js') && !contentType.includes('javascript')) {;
        this.handleResourceError(url, 'script', "Incorrect MIME "type": ${contentType} (expected javascript)")} else if(url.endsWith('.css') && !contentType.includes('css')) {;
        this.handleResourceError(url, 'stylesheet', "Incorrect MIME "type": ${contentType} (expected css)")}
        this.handleResourceError();
          url,script',";
          `Incorrect MIME "type": ${contentType} (expected javascript)`;
        )} else if(url.endsWith('.css') && !contentType.includes('css')) {;
        this.handleResourceError();
          url,stylesheet',";
          "Incorrect MIME "type": ${contentType} (expected css)";
        )}
    } catch(error) {;
'";
      this.handleResourceError(url,other', `Fetch "error": ${error}`)}
=======
    if(window && window.MutationObserver) {;
              this && this.monitorElement(element)}
          })})});"
      observer && observer.observe(document && document.head, { "childList": true, "subtree": true });"
      observer && observer.observe(document && document.body, { "childList": true, "subtree": true })}
  }"
  private monitorElement("element": HTMLElement) {;'
    // Monitor scripts';'
    if(element && element.tagName === 'SCRIPT' && element && element.src) {;
      this && this.monitorScript(element as HTMLScriptElement)}'
    // Monitor stylesheets';'
    if(element && element.tagName === 'LINK' && element && element.rel === 'stylesheet') {;
      this && this.monitorStylesheet(element as HTMLLinkElement)}
  }"
  private monitorScript("script": anyHTMLScriptElement) {;'
    script && script.addEventListener('error', () => {;'
      this && this.handleResourceError(script && script.src,script',Script loading failed')})}"
  private monitorStylesheet("link": anyHTMLLinkElement) {;'
    link && link.addEventListener('error', () => {;
      this && this.handleResourceError();'
        link && link.href,stylesheet',Stylesheet loading failed';
      )})}
  private monitorCriticalResources() {;
    // Monitor critical CSS and JS files;
    criticalResources && criticalResources.forEach(resource => {;
      this && this.checkResourceHealth(resource)})}"
  private async checkResourceHealth("url": string) {;
    try {;
      if(!response && response.ok) {;
        this && this.handleResourceError();'"
          url,other',";"
          "HTTP ${response && response.status}: ${response && response.statusText}";
        );
        return}
      if(!contentType) {;'
        this && this.handleResourceError(url,other',No content-type header');
        return}'
      // Check for MIME type issues';'
      if(url && url.endsWith('.js') && !contentType && contentType.includes('javascript')) {;'"
        this && this.handleResourceError(url, 'script', "Incorrect MIME "type": ${contentType} (expected javascript)")} else if(url && url.endsWith('.css') && !contentType && contentType.includes('css')) {;'"
        this && this.handleResourceError(url, 'stylesheet', "Incorrect MIME "type": ${contentType} (expected css)")}
        this && this.handleResourceError();'"
          url,script',";"`
          `Incorrect MIME "type": ${contentType} (expected javascript)`;'
        )} else if(url && url.endsWith('.css') && !contentType && contentType.includes('css')) {;
        this && this.handleResourceError();'"
          url,stylesheet',";"
          "Incorrect MIME "type": ${contentType} (expected css)";
        )}
    } catch(error) {;'"
'";'"`
      this && this.handleResourceError(url,other', `Fetch "error": ${error}`)}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src.disabled/src/utils/resourceMonitor.ts
  }
  private handleResourceError();"
    "url": string,'"
    "type": ResourceError['type'],"
    "error": string;
  ) {;
    const resourceError: ResourceError = {;
      url,
      type,
<<<<<<< HEAD:temp_exclude/src.disabled/src/utils/resourceMonitor.ts
      error,
      "timestamp": Date.now()};
    this.errors.push(resourceError);
    // console.error('🚨 Resource "Error": ', resourceError);
=======
      error,"
      "timestamp": Date && Date.now()};
    this && this.errors.push(resourceError);
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src.disabled/src/utils/resourceMonitor.ts
    // Attempt to retry loading;
    this.attemptRetry(url, type);
    // Report to analytics/monitoring service;
<<<<<<< HEAD:temp_exclude/src.disabled/src/utils/resourceMonitor.ts
    this.reportError(resourceError)}
  private attemptRetry("url": string, "type": ResourceError['type']) {;
    if(attempts >= this.maxRetries) {;
";
      // console.warn("Max retry attempts reached for ${url}");
=======
    this && this.reportError(resourceError)}'"
  private attemptRetry("url": string, "type": ResourceError['type']) {;
    if(attempts >= this && this.maxRetries) {;"
";"
      // console && console.warn("Max retry attempts reached for ${url}");
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src.disabled/src/utils/resourceMonitor.ts
      return}
    this.retryAttempts.set(url, attempts + 1);
    setTimeout();
      () => {;
<<<<<<< HEAD:temp_exclude/src.disabled/src/utils/resourceMonitor.ts
        this.retryResource(url, type)},
      Math.pow(2, attempts) * 1000;
    ); // Exponential backoff}
  private retryResource("url": string, "type": ResourceError['type']) {;
";
    // console.log(`🔄 Retrying resource: ${url} (attempt ${this.retryAttempts.get(url)})`);
    if(type === 'script') {;
      this.loadScript(url)} else if(type === 'stylesheet') {;
      this.loadStylesheet(url)}
  }
  private loadScript("src": string) {;
    script.src = src;
    script.async = true;
    script.onload = () => {;
";
      // console.log("✅ Script loaded successfully: ${src}");
      this.retryAttempts.delete(src)};
    script.onerror = () => {;
";
      // console.error(`❌ Script retry "failed": ${src}`)};
    document.head.appendChild(script)}
  private loadStylesheet("href": string) {;
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = () => {;
";
      // console.log("✅ Stylesheet loaded successfully: ${href}");
      this.retryAttempts.delete(href)};
    link.onerror = () => {;
";
      // console.error(`❌ Stylesheet retry "failed": ${href}`)};
    document.head.appendChild(link)}
  private reportError("error": ResourceError) {;
    // In production, send to monitoring service';
    if(process.env.NODE_ENV === 'production') {;
      // "Example": Sentry, LogRocket, etc.';
      // console.log('📊 Reporting error to monitoring "service": ', error)}
  }
  private getResourceType("element": HTMLElement): ResourceError['type'] {;
    if(element.tagName === 'SCRIPT') return 'script';
    if(';
      element.tagName === 'LINK' &&';
      (element as HTMLLinkElement).rel === 'stylesheet';
    );
      return 'stylesheet';
    if(element.tagName === 'IMG') return 'image';
    if(';
      element.tagName === 'LINK' &&';
=======
        this && this.retryResource(url, type)},
      Math && Math.pow(2, attempts) * 1000;
    ); // Exponential backoff}'"
  private retryResource("url": string, "type": ResourceError['type']) {;"
";'
    if(type === 'script') {;'
      this && this.loadScript(url)} else if(type === 'stylesheet') {;
      this && this.loadStylesheet(url)}
  }"
  private loadScript("src": string) {;
    script && script.src = src;
    script && script.async = true;
    script && script.onload = () => {;"
";
    document && document.head.appendChild(script)}"
  private loadStylesheet("href": string) {;'
    link && link.rel = 'stylesheet';
    link && link.href = href;
    link && link.onload = () => {;"
";
    document && document.head.appendChild(link)}"
  private reportError("error": ResourceError) {;'
    // In production, send to monitoring service';'
    if(process && process.env.NODE_ENV === 'production') {;'"
      // "Example": Sentry, LogRocket, etc.';
  }'"
  private getResourceType("element": HTMLElement): ResourceError['type'] {;'
    if(element && element.tagName === 'SCRIPT') return 'script';'
    if(';'
      element && element.tagName === 'LINK' &&';'
      (element as HTMLLinkElement).rel === 'stylesheet';
    );'
      return 'stylesheet';'
    if(element && element.tagName === 'IMG') return 'image';'
    if(';'
      element && element.tagName === 'LINK' &&';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src.disabled/src/utils/resourceMonitor.ts
      (element as HTMLLinkElement).rel === 'preload';
    );'
      return 'font';'
    return 'other'}
  getErrors(): ResourceError[] {;
    return [...this.errors]}
  clearErrors() {;
    this.errors = [];
    this.retryAttempts.clear()}
  getErrorSummary() {;
    this.errors.forEach(error => {;
      summary.byType[error.type] = (summary.byType[error.type] || 0) + 1});
    return summary}
}
// Create singleton instance;
export default resourceMonitor;'`
'`;
<<<<<<< HEAD:temp_exclude/src.disabled/src/utils/resourceMonitor.ts
<<<<<<< HEAD:temp_exclude/src.disabled/src/utils/resourceMonitor.ts
<<<<<<< HEAD:temp_exclude/src.disabled/src/utils/resourceMonitor.ts
<<<<<<< HEAD:backup-merge-conflicts/resourceMonitor.ts.backup
interface ResourceError {; url: string; type: 'script' | 'stylesheet' | 'image' | 'font' | 'other'; error: string; timestamp: number} class ResourceMonitor {; private errors: ResourceError[] = []; private isMonitoring = false; private retryAttempts = new Map<string,number>(); private maxRetries = 3; start() {; if(this.isMonitoring) return; this.isMonitoring = true; this.setupErrorListeners(); this.setupResourceObservers(); this.monitorCriticalResources(); stop() {; this.isMonitoring = false; private setupErrorListeners() {; window.addEventListener('; 'error',event => {; if (event.target && event.target !== window) {; if(url) {; this.handleResourceError(); url,this.getResourceType(target),event.error?.message || 'Unknown error'; )} } },true; ); window.addEventListener('unhandledrejection',event => {; if(); event.reason &&'; typeof event.reason === 'string' &&'; event.reason.includes('MIME'); ) {; this.handleResourceError('; 'unknown',other',`MIME type error: ${event.reason}`; )} })} private setupResourceObservers() {; if(window.MutationObserver) {; this.monitorElement(element)} })})}); observer.observe(document.head,{ childList: true,subtree: true }); observer.observe(document.body,{ childList: true,subtree: true })} } private monitorElement(element: HTMLElement) {; if(element.tagName === 'SCRIPT' && element.src) {; this.monitorScript(element as HTMLScriptElement)} if(element.tagName === 'LINK' && element.rel === 'stylesheet') {; this.monitorStylesheet(element as HTMLLinkElement)} } private monitorScript(script: anyHTMLScriptElement) {; script.addEventListener('error',() => {; this.handleResourceError(script.src,script',Script loading failed')})} private monitorStylesheet(link: anyHTMLLinkElement) {; link.addEventListener('error',() => {; this.handleResourceError(); link.href,stylesheet',Stylesheet loading failed'; )})} private monitorCriticalResources() {; ; criticalResources.forEach(resource => {; this.checkResourceHealth(resource)})} private async checkResourceHealth(url: string) {; try {; if(!response.ok) {; this.handleResourceError(); url,other',`; `HTTP ${response.status}: ${response.statusText}`; ); return} if(!contentType) {; this.handleResourceError(url,other',No content-type header'); return} if(url.endsWith('.js') && !contentType.includes('javascript')) {; this.handleResourceError(url,'script',`Incorrect MIME type: ${contentType} (expected javascript)`)} else if(url.endsWith('.css') && !contentType.includes('css')) {; this.handleResourceError(url,'stylesheet',`Incorrect MIME type: ${contentType} (expected css)`)} this.handleResourceError(); url,script',`; `Incorrect MIME type: ${contentType} (expected javascript)`; )} else if(url.endsWith('.css') && !contentType.includes('css')) {; this.handleResourceError(); url,stylesheet',`; `Incorrect MIME type: ${contentType} (expected css)`; )} } catch(error) {; '`; this.handleResourceError(url,other',`Fetch error: ${error}`)} } private handleResourceError(); url: string,type: ResourceError['type'],error: string; ) {; const resourceError: ResourceError = {; url,type,error,timestamp: Date.now()}; this.errors.push(resourceError); this.attemptRetry(url,type); this.reportError(resourceError)} private attemptRetry(url: string,type: ResourceError['type']) {; if(attempts >= this.maxRetries) {; `; return} this.retryAttempts.set(url,attempts + 1); setTimeout(); () => {; this.retryResource(url,type)},Math.pow(2,attempts) * 1000; )} private retryResource(url: string,type: ResourceError['type']) {; `; if(type === 'script') {; this.loadScript(url)} else if(type === 'stylesheet') {; this.loadStylesheet(url)} } private loadScript(src: string) {; script.src = src; script.async = true; script.onload = () => {; `; this.retryAttempts.delete(src)}; script.onerror = () => {; `; document.head.appendChild(script)} private loadStylesheet(href: string) {; link.rel = 'stylesheet'; link.href = href; link.onload = () => {; `; this.retryAttempts.delete(href)}; link.onerror = () => {; `; document.head.appendChild(link)} private reportError(error: ResourceError) {; if(process.env.NODE_ENV === 'production') {} } private getResourceType(element: HTMLElement): ResourceError['type'] {; if(element.tagName === 'SCRIPT') return 'script'; if('; element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'stylesheet'; ); return 'stylesheet'; if(element.tagName === 'IMG') return 'image'; if('; element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'preload'; ); return 'font'; return 'other'} getErrors(): ResourceError[] {; return [...this.errors]} clearErrors() {; this.errors = []; this.retryAttempts.clear()} getErrorSummary() {; ; this.errors.forEach(error => {; summary.byType[error.type] = (summary.byType[error.type] || 0) + 1}); return summary} } export default resourceMonitor; '`;
interface ResourceError {; url: string; type: 'script' | 'stylesheet' | 'image' | 'font' | 'other'; error: string; timestamp: number} class ResourceMonitor {; private errors: ResourceError[] = []; private isMonitoring = false; private retryAttempts = new Map<string,number>(); private maxRetries = 3; start() {; if(this.isMonitoring) return; this.isMonitoring = true; this.setupErrorListeners(); this.setupResourceObservers(); this.monitorCriticalResources(); stop() {; this.isMonitoring = false; private setupErrorListeners() {; window.addEventListener('; 'error',event => {; if (event.target && event.target !== window) {; if(url) {; this.handleResourceError(); url,this.getResourceType(target),event.error?.message || 'Unknown error'; )} } },true; ); window.addEventListener('unhandledrejection',event => {; if(); event.reason &&'; typeof event.reason === 'string' &&'; event.reason.includes('MIME'); ) {; this.handleResourceError('; 'unknown',other',`MIME type error: ${event.reason}`; )} })} private setupResourceObservers() {; if(window.MutationObserver) {; this.monitorElement(element)} })})}); observer.observe(document.head,{ childList: true,subtree: true }); observer.observe(document.body,{ childList: true,subtree: true })} } private monitorElement(element: HTMLElement) {; if(element.tagName === 'SCRIPT' && element.src) {; this.monitorScript(element as HTMLScriptElement)} if(element.tagName === 'LINK' && element.rel === 'stylesheet') {; this.monitorStylesheet(element as HTMLLinkElement)} } private monitorScript(script: anyHTMLScriptElement) {; script.addEventListener('error',() => {; this.handleResourceError(script.src,script',Script loading failed')})} private monitorStylesheet(link: anyHTMLLinkElement) {; link.addEventListener('error',() => {; this.handleResourceError(); link.href,stylesheet',Stylesheet loading failed'; )})} private monitorCriticalResources() {; ; criticalResources.forEach(resource => {; this.checkResourceHealth(resource)})} private async checkResourceHealth(url: string) {; try {; if(!response.ok) {; this.handleResourceError(); url,other',`; `HTTP ${response.status}: ${response.statusText}`; ); return} if(!contentType) {; this.handleResourceError(url,other',No content-type header'); return} if(url.endsWith('.js') && !contentType.includes('javascript')) {; this.handleResourceError(url,'script',`Incorrect MIME type: ${contentType} (expected javascript)`)} else if(url.endsWith('.css') && !contentType.includes('css')) {; this.handleResourceError(url,'stylesheet',`Incorrect MIME type: ${contentType} (expected css)`)} this.handleResourceError(); url,script',`; `Incorrect MIME type: ${contentType} (expected javascript)`; )} else if(url.endsWith('.css') && !contentType.includes('css')) {; this.handleResourceError(); url,stylesheet',`; `Incorrect MIME type: ${contentType} (expected css)`; )} } catch(error) {; '`; this.handleResourceError(url,other',`Fetch error: ${error}`)} } private handleResourceError(); url: string,type: ResourceError['type'],error: string; ) {; const resourceError: ResourceError = {; url,type,error,timestamp: Date.now()}; this.errors.push(resourceError); this.attemptRetry(url,type); this.reportError(resourceError)} private attemptRetry(url: string,type: ResourceError['type']) {; if(attempts >= this.maxRetries) {; `; return} this.retryAttempts.set(url,attempts + 1); setTimeout(); () => {; this.retryResource(url,type)},Math.pow(2,attempts) * 1000; )} private retryResource(url: string,type: ResourceError['type']) {; `; if(type === 'script') {; this.loadScript(url)} else if(type === 'stylesheet') {; this.loadStylesheet(url)} } private loadScript(src: string) {; script.src = src; script.async = true; script.onload = () => {; `; this.retryAttempts.delete(src)}; script.onerror = () => {; `; document.head.appendChild(script)} private loadStylesheet(href: string) {; link.rel = 'stylesheet'; link.href = href; link.onload = () => {; `; this.retryAttempts.delete(href)}; link.onerror = () => {; `; document.head.appendChild(link)} private reportError(error: ResourceError) {; if(process.env.NODE_ENV === 'production') {} } private getResourceType(element: HTMLElement): ResourceError['type'] {; if(element.tagName === 'SCRIPT') return 'script'; if('; element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'stylesheet'; ); return 'stylesheet'; if(element.tagName === 'IMG') return 'image'; if('; element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'preload'; ); return 'font'; return 'other'} getErrors(): ResourceError[] {; return [...this.errors]} clearErrors() {; this.errors = []; this.retryAttempts.clear()} getErrorSummary() {; ; this.errors.forEach(error => {; summary.byType[error.type] = (summary.byType[error.type] || 0) + 1}); return summary} } export default resourceMonitor; '`;

interface ResourceError {; url: string; type: 'script' | 'stylesheet' | 'image' | 'font' | 'other'; error: string} timestamp: 'number'} class ResourceMonitor {; private errors: 'ResourceError[] = []; private isMonitoring = false; private retryAttempts = new Map<string',number>(); private maxRetries = 3; start() {; if(this.isMonitoring) return; this.isMonitoring = true; this.setupErrorListeners(); this.setupResourceObservers(); this.monitorCriticalResources(); stop() {; this.isMonitoring = false; private setupErrorListeners() {; window.addEventListener('; 'error',; event => {; if (event.target && event.target !== window) {; if(url) {; this.handleResourceError(); url,; this.getResourceType(target),; event.error?.message || 'Unknown error'; )} } },; true; ); window.addEventListener('unhandledrejection',event => {; if(); event.reason &&'; typeof event.reason === 'string' &&'; event.reason.includes('MIME'); ) {; this.handleResourceError('; 'unknown',other',; `MIME type error: ${event.reason}`; )} })} private setupResourceObservers() {; if(window.MutationObserver) {; this.monitorElement(element)} })})}); observer.observe(document.head,{ childList: 'true',subtree: 'true' }); observer.observe(document.body,{ childList: 'true',subtree: 'true' })} } private monitorElement(element: HTMLElement) {; if(element.tagName === 'SCRIPT' && element.src) {; this.monitorScript(element as HTMLScriptElement)} if(element.tagName === 'LINK' && element.rel === 'stylesheet') {; this.monitorStylesheet(element as HTMLLinkElement)} } private monitorScript(script: anyHTMLScriptElement) {; script.addEventListener('error',() => {; this.handleResourceError(script.src,script',Script loading failed')})} private monitorStylesheet(link: anyHTMLLinkElement) {; link.addEventListener('error',() => {; this.handleResourceError(); link.href,stylesheet',Stylesheet loading failed'; )})} private monitorCriticalResources() {; ; criticalResources.forEach(resource => {; this.checkResourceHealth(resource)})} private async checkResourceHealth(url: string) {; try {; if(!response.ok) {; this.handleResourceError(); url,other',`; `HTTP ${response.status}: ${response.statusText}`; ); return} if(!contentType) {; this.handleResourceError(url,other',No content-type header'); return} if(url.endsWith('.js') && !contentType.includes('javascript')) {; this.handleResourceError(url,'script',`Incorrect MIME type: ${contentType} (expected javascript)`)} else if(url.endsWith('.css') && !contentType.includes('css')) {; this.handleResourceError(url,'stylesheet',`Incorrect MIME type: ${contentType} (expected css)`)} this.handleResourceError(); url,script',`; `Incorrect MIME type: ${contentType} (expected javascript)`; )} else if(url.endsWith('.css') && !contentType.includes('css')) {; this.handleResourceError(); url,stylesheet',`; `Incorrect MIME type: ${contentType} (expected css)`; )} } catch(error) {; '`; this.handleResourceError(url,other',`Fetch error: ${error}`)} } private handleResourceError(); url: 'string',; type: ResourceError['type'],; error: string; ) {; const resourceError: ResourceError = {; url,; type,; error,; timestamp: Date.now()}; this.errors.push(resourceError); this.attemptRetry(url,type); this.reportError(resourceError)} private attemptRetry(url: 'string',type: ResourceError['type']) {; if(attempts >= this.maxRetries) {; `; return} this.retryAttempts.set(url,attempts + 1); setTimeout(); () => {; this.retryResource(url,type)},; Math.pow(2,attempts) * 1000; )} private retryResource(url: 'string',type: ResourceError['type']) {; `; if(type === 'script') {; this.loadScript(url)} else if(type === 'stylesheet') {; this.loadStylesheet(url)} } private loadScript(src: string) {; script.src = src; script.async = true; script.onload = () => {; `; this.retryAttempts.delete(src)}; script.onerror = () => {; `; document.head.appendChild(script)} private loadStylesheet(href: string) {; link.rel = 'stylesheet'; link.href = href; link.onload = () => {; `; this.retryAttempts.delete(href)}; link.onerror = () => {; `; document.head.appendChild(link)} private reportError(error: ResourceError) {; if(process.env.NODE_ENV === 'production') {} } private getResourceType(element: HTMLElement): ResourceError['type'] {; if(element.tagName === 'SCRIPT') return 'script'; if('; element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'stylesheet'; ); return 'stylesheet'; if(element.tagName === 'IMG') return 'image'; if('; element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'preload'; ); return 'font'; return 'other'} getErrors(): ResourceError[] {; return [...this.errors]} clearErrors() {; this.errors = []; this.retryAttempts.clear()} getErrorSummary() {; ; this.errors.forEach(error => {; summary.byType[error.type] = (summary.byType[error.type] || 0) + 1}); return summary} } export default resourceMonitor; '`;
<<<<<<< HEAD:temp_exclude/src.disabled/src/utils/resourceMonitor.ts
<<<<<<< HEAD:temp_exclude/src.disabled/src/utils/resourceMonitor.ts
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> main
>>>>>>> main
=======
interface ResourceError {; url: string; type: 'script' | 'stylesheet' | 'image' | 'font' | 'other'; error: string} timestamp: 'number'} class ResourceMonitor {; private errors: 'ResourceError[] = []; private isMonitoring = false; private retryAttempts = new Map<string',number>(); private maxRetries = 3; start() {; if(this.isMonitoring) return; this.isMonitoring = true; this.setupErrorListeners(); this.setupResourceObservers(); this.monitorCriticalResources(); stop() {; this.isMonitoring = false; private setupErrorListeners() {; window.addEventListener('; 'error',; event => {; if (event.target && event.target !== window) {; if(url) {; this.handleResourceError(); url,; this.getResourceType(target),; event.error?.message || 'Unknown error'; )} } },; true; ); window.addEventListener('unhandledrejection',event => {; if(); event.reason &&'; typeof event.reason === 'string' &&'; event.reason.includes('MIME'); ) {; this.handleResourceError('; 'unknown',other',; `MIME type error: ${event.reason}`; )} })} private setupResourceObservers() {; if(window.MutationObserver) {; this.monitorElement(element)} })})}); observer.observe(document.head,{ childList: 'true',subtree: 'true' }); observer.observe(document.body,{ childList: 'true',subtree: 'true' })} } private monitorElement(element: HTMLElement) {; if(element.tagName === 'SCRIPT' && element.src) {; this.monitorScript(element as HTMLScriptElement)} if(element.tagName === 'LINK' && element.rel === 'stylesheet') {; this.monitorStylesheet(element as HTMLLinkElement)} } private monitorScript(script: anyHTMLScriptElement) {; script.addEventListener('error',() => {; this.handleResourceError(script.src,script',Script loading failed')})} private monitorStylesheet(link: anyHTMLLinkElement) {; link.addEventListener('error',() => {; this.handleResourceError(); link.href,stylesheet',Stylesheet loading failed'; )})} private monitorCriticalResources() {; ; criticalResources.forEach(resource => {; this.checkResourceHealth(resource)})} private async checkResourceHealth(url: string) {; try {; if(!response.ok) {; this.handleResourceError(); url,other',`; `HTTP ${response.status}: ${response.statusText}`; ); return} if(!contentType) {; this.handleResourceError(url,other',No content-type header'); return} if(url.endsWith('.js') && !contentType.includes('javascript')) {; this.handleResourceError(url,'script',`Incorrect MIME type: ${contentType} (expected javascript)`)} else if(url.endsWith('.css') && !contentType.includes('css')) {; this.handleResourceError(url,'stylesheet',`Incorrect MIME type: ${contentType} (expected css)`)} this.handleResourceError(); url,script',`; `Incorrect MIME type: ${contentType} (expected javascript)`; )} else if(url.endsWith('.css') && !contentType.includes('css')) {; this.handleResourceError(); url,stylesheet',`; `Incorrect MIME type: ${contentType} (expected css)`; )} } catch(error) {; '`; this.handleResourceError(url,other',`Fetch error: ${error}`)} } private handleResourceError(); url: 'string',; type: ResourceError['type'],; error: string; ) {; const resourceError: ResourceError = {; url,; type,; error,; timestamp: Date.now()}; this.errors.push(resourceError); this.attemptRetry(url,type); this.reportError(resourceError)} private attemptRetry(url: 'string',type: ResourceError['type']) {; if(attempts >= this.maxRetries) {; `; return} this.retryAttempts.set(url,attempts + 1); setTimeout(); () => {; this.retryResource(url,type)},; Math.pow(2,attempts) * 1000; )} private retryResource(url: 'string',type: ResourceError['type']) {; `; if(type === 'script') {; this.loadScript(url)} else if(type === 'stylesheet') {; this.loadStylesheet(url)} } private loadScript(src: string) {; script.src = src; script.async = true; script.onload = () => {; `; this.retryAttempts.delete(src)}; script.onerror = () => {; `; document.head.appendChild(script)} private loadStylesheet(href: string) {; link.rel = 'stylesheet'; link.href = href; link.onload = () => {; `; this.retryAttempts.delete(href)}; link.onerror = () => {; `; document.head.appendChild(link)} private reportError(error: ResourceError) {; if(process.env.NODE_ENV === 'production') {} } private getResourceType(element: HTMLElement): ResourceError['type'] {; if(element.tagName === 'SCRIPT') return 'script'; if('; element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'stylesheet'; ); return 'stylesheet'; if(element.tagName === 'IMG') return 'image'; if('; element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'preload'; ); return 'font'; return 'other'} getErrors(): ResourceError[] {; return [...this.errors]} clearErrors() {; this.errors = []; this.retryAttempts.clear()} getErrorSummary() {; ; this.errors.forEach(error => {; summary.byType[error.type] = (summary.byType[error.type] || 0) + 1}); return summary} } export default resourceMonitor; '`;
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c:src.disabled/src/utils/resourceMonitor.ts
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:src.disabled/src/utils/resourceMonitor.ts
interface ResourceError {; url: string; type: 'script' | 'stylesheet' | 'image' | 'font' | 'other'; error: string; timestamp: number} class ResourceMonitor {; private errors: ResourceError[] = []; private isMonitoring = false; private retryAttempts = new Map<string,number>(); private maxRetries = 3; start() {; if(this.isMonitoring) return; this.isMonitoring = true; this.setupErrorListeners(); this.setupResourceObservers(); this.monitorCriticalResources(); stop() {; this.isMonitoring = false; private setupErrorListeners() {; window.addEventListener('; 'error',event => {; if (event.target && event.target !== window) {; if(url) {; this.handleResourceError(); url,this.getResourceType(target),event.error?.message || 'Unknown error'; )} } },true; ); window.addEventListener('unhandledrejection',event => {; if(); event.reason &&'; typeof event.reason === 'string' &&'; event.reason.includes('MIME'); ) {; this.handleResourceError('; 'unknown',other',`MIME type error: ${event.reason}`; )} })} private setupResourceObservers() {; if(window.MutationObserver) {; this.monitorElement(element)} })})}); observer.observe(document.head,{ childList: true,subtree: true }); observer.observe(document.body,{ childList: true,subtree: true })} } private monitorElement(element: HTMLElement) {; if(element.tagName === 'SCRIPT' && element.src) {; this.monitorScript(element as HTMLScriptElement)} if(element.tagName === 'LINK' && element.rel === 'stylesheet') {; this.monitorStylesheet(element as HTMLLinkElement)} } private monitorScript(script: anyHTMLScriptElement) {; script.addEventListener('error',() => {; this.handleResourceError(script.src,script',Script loading failed')})} private monitorStylesheet(link: anyHTMLLinkElement) {; link.addEventListener('error',() => {; this.handleResourceError(); link.href,stylesheet',Stylesheet loading failed'; )})} private monitorCriticalResources() {; ; criticalResources.forEach(resource => {; this.checkResourceHealth(resource)})} private async checkResourceHealth(url: string) {; try {; if(!response.ok) {; this.handleResourceError(); url,other',`; `HTTP ${response.status}: ${response.statusText}`; ); return} if(!contentType) {; this.handleResourceError(url,other',No content-type header'); return} if(url.endsWith('.js') && !contentType.includes('javascript')) {; this.handleResourceError(url,'script',`Incorrect MIME type: ${contentType} (expected javascript)`)} else if(url.endsWith('.css') && !contentType.includes('css')) {; this.handleResourceError(url,'stylesheet',`Incorrect MIME type: ${contentType} (expected css)`)} this.handleResourceError(); url,script',`; `Incorrect MIME type: ${contentType} (expected javascript)`; )} else if(url.endsWith('.css') && !contentType.includes('css')) {; this.handleResourceError(); url,stylesheet',`; `Incorrect MIME type: ${contentType} (expected css)`; )} } catch(error) {; '`; this.handleResourceError(url,other',`Fetch error: ${error}`)} } private handleResourceError(); url: string,type: ResourceError['type'],error: string; ) {; const resourceError: ResourceError = {; url,type,error,timestamp: Date.now()}; this.errors.push(resourceError); this.attemptRetry(url,type); this.reportError(resourceError)} private attemptRetry(url: string,type: ResourceError['type']) {; if(attempts >= this.maxRetries) {; `; return} this.retryAttempts.set(url,attempts + 1); setTimeout(); () => {; this.retryResource(url,type)},Math.pow(2,attempts) * 1000; )} private retryResource(url: string,type: ResourceError['type']) {; `; if(type === 'script') {; this.loadScript(url)} else if(type === 'stylesheet') {; this.loadStylesheet(url)} } private loadScript(src: string) {; script.src = src; script.async = true; script.onload = () => {; `; this.retryAttempts.delete(src)}; script.onerror = () => {; `; document.head.appendChild(script)} private loadStylesheet(href: string) {; link.rel = 'stylesheet'; link.href = href; link.onload = () => {; `; this.retryAttempts.delete(href)}; link.onerror = () => {; `; document.head.appendChild(link)} private reportError(error: ResourceError) {; if(process.env.NODE_ENV === 'production') {} } private getResourceType(element: HTMLElement): ResourceError['type'] {; if(element.tagName === 'SCRIPT') return 'script'; if('; element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'stylesheet'; ); return 'stylesheet'; if(element.tagName === 'IMG') return 'image'; if('; element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'preload'; ); return 'font'; return 'other'} getErrors(): ResourceError[] {; return [...this.errors]} clearErrors() {; this.errors = []; this.retryAttempts.clear()} getErrorSummary() {; ; this.errors.forEach(error => {; summary.byType[error.type] = (summary.byType[error.type] || 0) + 1}); return summary} } export default resourceMonitor; '`;
interface ResourceError {; url: string; type: 'script' | 'stylesheet' | 'image' | 'font' | 'other'; error: string; timestamp: number} class ResourceMonitor {; private errors: ResourceError[] = []; private isMonitoring = false; private retryAttempts = new Map<string,number>(); private maxRetries = 3; start() {; if(this.isMonitoring) return; this.isMonitoring = true; this.setupErrorListeners(); this.setupResourceObservers(); this.monitorCriticalResources(); stop() {; this.isMonitoring = false; private setupErrorListeners() {; window.addEventListener('; 'error',event => {; if (event.target && event.target !== window) {; if(url) {; this.handleResourceError(); url,this.getResourceType(target),event.error?.message || 'Unknown error'; )} } },true; ); window.addEventListener('unhandledrejection',event => {; if(); event.reason &&'; typeof event.reason === 'string' &&'; event.reason.includes('MIME'); ) {; this.handleResourceError('; 'unknown',other',`MIME type error: ${event.reason}`; )} })} private setupResourceObservers() {; if(window.MutationObserver) {; this.monitorElement(element)} })})}); observer.observe(document.head,{ childList: true,subtree: true }); observer.observe(document.body,{ childList: true,subtree: true })} } private monitorElement(element: HTMLElement) {; if(element.tagName === 'SCRIPT' && element.src) {; this.monitorScript(element as HTMLScriptElement)} if(element.tagName === 'LINK' && element.rel === 'stylesheet') {; this.monitorStylesheet(element as HTMLLinkElement)} } private monitorScript(script: anyHTMLScriptElement) {; script.addEventListener('error',() => {; this.handleResourceError(script.src,script',Script loading failed')})} private monitorStylesheet(link: anyHTMLLinkElement) {; link.addEventListener('error',() => {; this.handleResourceError(); link.href,stylesheet',Stylesheet loading failed'; )})} private monitorCriticalResources() {; ; criticalResources.forEach(resource => {; this.checkResourceHealth(resource)})} private async checkResourceHealth(url: string) {; try {; if(!response.ok) {; this.handleResourceError(); url,other',`; `HTTP ${response.status}: ${response.statusText}`; ); return} if(!contentType) {; this.handleResourceError(url,other',No content-type header'); return} if(url.endsWith('.js') && !contentType.includes('javascript')) {; this.handleResourceError(url,'script',`Incorrect MIME type: ${contentType} (expected javascript)`)} else if(url.endsWith('.css') && !contentType.includes('css')) {; this.handleResourceError(url,'stylesheet',`Incorrect MIME type: ${contentType} (expected css)`)} this.handleResourceError(); url,script',`; `Incorrect MIME type: ${contentType} (expected javascript)`; )} else if(url.endsWith('.css') && !contentType.includes('css')) {; this.handleResourceError(); url,stylesheet',`; `Incorrect MIME type: ${contentType} (expected css)`; )} } catch(error) {; '`; this.handleResourceError(url,other',`Fetch error: ${error}`)} } private handleResourceError(); url: string,type: ResourceError['type'],error: string; ) {; const resourceError: ResourceError = {; url,type,error,timestamp: Date.now()}; this.errors.push(resourceError); this.attemptRetry(url,type); this.reportError(resourceError)} private attemptRetry(url: string,type: ResourceError['type']) {; if(attempts >= this.maxRetries) {; `; return} this.retryAttempts.set(url,attempts + 1); setTimeout(); () => {; this.retryResource(url,type)},Math.pow(2,attempts) * 1000; )} private retryResource(url: string,type: ResourceError['type']) {; `; if(type === 'script') {; this.loadScript(url)} else if(type === 'stylesheet') {; this.loadStylesheet(url)} } private loadScript(src: string) {; script.src = src; script.async = true; script.onload = () => {; `; this.retryAttempts.delete(src)}; script.onerror = () => {; `; document.head.appendChild(script)} private loadStylesheet(href: string) {; link.rel = 'stylesheet'; link.href = href; link.onload = () => {; `; this.retryAttempts.delete(href)}; link.onerror = () => {; `; document.head.appendChild(link)} private reportError(error: ResourceError) {; if(process.env.NODE_ENV === 'production') {} } private getResourceType(element: HTMLElement): ResourceError['type'] {; if(element.tagName === 'SCRIPT') return 'script'; if('; element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'stylesheet'; ); return 'stylesheet'; if(element.tagName === 'IMG') return 'image'; if('; element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'preload'; ); return 'font'; return 'other'} getErrors(): ResourceError[] {; return [...this.errors]} clearErrors() {; this.errors = []; this.retryAttempts.clear()} getErrorSummary() {; ; this.errors.forEach(error => {; summary.byType[error.type] = (summary.byType[error.type] || 0) + 1}); return summary} } export default resourceMonitor; '`;

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src.disabled/src/utils/resourceMonitor.ts



>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:src.disabled/src/utils/resourceMonitor.ts

=======
interface ResourceError {; url: string; type: 'script' | 'stylesheet' | 'image' | 'font' | 'other'; error: string} timestamp: 'number'} class ResourceMonitor {; private errors: 'ResourceError[] = []; private isMonitoring = false; private retryAttempts = new Map<string',number>(); private maxRetries = 3; start() {; if(this.isMonitoring) return; this.isMonitoring = true; this.setupErrorListeners(); this.setupResourceObservers(); this.monitorCriticalResources(); stop() {; this.isMonitoring = false; private setupErrorListeners() {; window.addEventListener('; 'error',; event => {; if (event.target && event.target !== window) {; if(url) {; this.handleResourceError(); url,; this.getResourceType(target),; event.error?.message || 'Unknown error'; )} } },; true; ); window.addEventListener('unhandledrejection',event => {; if(); event.reason &&'; typeof event.reason === 'string' &&'; event.reason.includes('MIME'); ) {; this.handleResourceError('; 'unknown',other',; `MIME type error: ${event.reason}`; )} })} private setupResourceObservers() {; if(window.MutationObserver) {; this.monitorElement(element)} })})}); observer.observe(document.head,{ childList: 'true',subtree: 'true' }); observer.observe(document.body,{ childList: 'true',subtree: 'true' })} } private monitorElement(element: HTMLElement) {; if(element.tagName === 'SCRIPT' && element.src) {; this.monitorScript(element as HTMLScriptElement)} if(element.tagName === 'LINK' && element.rel === 'stylesheet') {; this.monitorStylesheet(element as HTMLLinkElement)} } private monitorScript(script: anyHTMLScriptElement) {; script.addEventListener('error',() => {; this.handleResourceError(script.src,script',Script loading failed')})} private monitorStylesheet(link: anyHTMLLinkElement) {; link.addEventListener('error',() => {; this.handleResourceError(); link.href,stylesheet',Stylesheet loading failed'; )})} private monitorCriticalResources() {; ; criticalResources.forEach(resource => {; this.checkResourceHealth(resource)})} private async checkResourceHealth(url: string) {; try {; if(!response.ok) {; this.handleResourceError(); url,other',`; `HTTP ${response.status}: ${response.statusText}`; ); return} if(!contentType) {; this.handleResourceError(url,other',No content-type header'); return} if(url.endsWith('.js') && !contentType.includes('javascript')) {; this.handleResourceError(url,'script',`Incorrect MIME type: ${contentType} (expected javascript)`)} else if(url.endsWith('.css') && !contentType.includes('css')) {; this.handleResourceError(url,'stylesheet',`Incorrect MIME type: ${contentType} (expected css)`)} this.handleResourceError(); url,script',`; `Incorrect MIME type: ${contentType} (expected javascript)`; )} else if(url.endsWith('.css') && !contentType.includes('css')) {; this.handleResourceError(); url,stylesheet',`; `Incorrect MIME type: ${contentType} (expected css)`; )} } catch(error) {; '`; this.handleResourceError(url,other',`Fetch error: ${error}`)} } private handleResourceError(); url: 'string',; type: ResourceError['type'],; error: string; ) {; const resourceError: ResourceError = {; url,; type,; error,; timestamp: Date.now()}; this.errors.push(resourceError); this.attemptRetry(url,type); this.reportError(resourceError)} private attemptRetry(url: 'string',type: ResourceError['type']) {; if(attempts >= this.maxRetries) {; `; return} this.retryAttempts.set(url,attempts + 1); setTimeout(); () => {; this.retryResource(url,type)},; Math.pow(2,attempts) * 1000; )} private retryResource(url: 'string',type: ResourceError['type']) {; `; if(type === 'script') {; this.loadScript(url)} else if(type === 'stylesheet') {; this.loadStylesheet(url)} } private loadScript(src: string) {; script.src = src; script.async = true; script.onload = () => {; `; this.retryAttempts.delete(src)}; script.onerror = () => {; `; document.head.appendChild(script)} private loadStylesheet(href: string) {; link.rel = 'stylesheet'; link.href = href; link.onload = () => {; `; this.retryAttempts.delete(href)}; link.onerror = () => {; `; document.head.appendChild(link)} private reportError(error: ResourceError) {; if(process.env.NODE_ENV === 'production') {} } private getResourceType(element: HTMLElement): ResourceError['type'] {; if(element.tagName === 'SCRIPT') return 'script'; if('; element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'stylesheet'; ); return 'stylesheet'; if(element.tagName === 'IMG') return 'image'; if('; element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'preload'; ); return 'font'; return 'other'} getErrors(): ResourceError[] {; return [...this.errors]} clearErrors() {; this.errors = []; this.retryAttempts.clear()} getErrorSummary() {; ; this.errors.forEach(error => {; summary.byType[error.type] = (summary.byType[error.type] || 0) + 1}); return summary} } export default resourceMonitor; '`;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2:src.disabled/src/utils/resourceMonitor.ts
interface ResourceError {; url: string; type: 'script' | 'stylesheet' | 'image' | 'font' | 'other'; error: string; timestamp: number} class ResourceMonitor {; private errors: ResourceError[] = []; private isMonitoring = false; private retryAttempts = new Map<string,number>(); private maxRetries = 3; start() {; if(this.isMonitoring) return; this.isMonitoring = true; this.setupErrorListeners(); this.setupResourceObservers(); this.monitorCriticalResources(); stop() {; this.isMonitoring = false; private setupErrorListeners() {; window.addEventListener('; 'error',event => {; if (event.target && event.target !== window) {; if(url) {; this.handleResourceError(); url,this.getResourceType(target),event.error?.message || 'Unknown error'; )} } },true; ); window.addEventListener('unhandledrejection',event => {; if(); event.reason &&'; typeof event.reason === 'string' &&'; event.reason.includes('MIME'); ) {; this.handleResourceError('; 'unknown',other',`MIME type error: ${event.reason}`; )} })} private setupResourceObservers() {; if(window.MutationObserver) {; this.monitorElement(element)} })})}); observer.observe(document.head,{ childList: true,subtree: true }); observer.observe(document.body,{ childList: true,subtree: true })} } private monitorElement(element: HTMLElement) {; if(element.tagName === 'SCRIPT' && element.src) {; this.monitorScript(element as HTMLScriptElement)} if(element.tagName === 'LINK' && element.rel === 'stylesheet') {; this.monitorStylesheet(element as HTMLLinkElement)} } private monitorScript(script: anyHTMLScriptElement) {; script.addEventListener('error',() => {; this.handleResourceError(script.src,script',Script loading failed')})} private monitorStylesheet(link: anyHTMLLinkElement) {; link.addEventListener('error',() => {; this.handleResourceError(); link.href,stylesheet',Stylesheet loading failed'; )})} private monitorCriticalResources() {; ; criticalResources.forEach(resource => {; this.checkResourceHealth(resource)})} private async checkResourceHealth(url: string) {; try {; if(!response.ok) {; this.handleResourceError(); url,other',`; `HTTP ${response.status}: ${response.statusText}`; ); return} if(!contentType) {; this.handleResourceError(url,other',No content-type header'); return} if(url.endsWith('.js') && !contentType.includes('javascript')) {; this.handleResourceError(url,'script',`Incorrect MIME type: ${contentType} (expected javascript)`)} else if(url.endsWith('.css') && !contentType.includes('css')) {; this.handleResourceError(url,'stylesheet',`Incorrect MIME type: ${contentType} (expected css)`)} this.handleResourceError(); url,script',`; `Incorrect MIME type: ${contentType} (expected javascript)`; )} else if(url.endsWith('.css') && !contentType.includes('css')) {; this.handleResourceError(); url,stylesheet',`; `Incorrect MIME type: ${contentType} (expected css)`; )} } catch(error) {; '`; this.handleResourceError(url,other',`Fetch error: ${error}`)} } private handleResourceError(); url: string,type: ResourceError['type'],error: string; ) {; const resourceError: ResourceError = {; url,type,error,timestamp: Date.now()}; this.errors.push(resourceError); this.attemptRetry(url,type); this.reportError(resourceError)} private attemptRetry(url: string,type: ResourceError['type']) {; if(attempts >= this.maxRetries) {; `; return} this.retryAttempts.set(url,attempts + 1); setTimeout(); () => {; this.retryResource(url,type)},Math.pow(2,attempts) * 1000; )} private retryResource(url: string,type: ResourceError['type']) {; `; if(type === 'script') {; this.loadScript(url)} else if(type === 'stylesheet') {; this.loadStylesheet(url)} } private loadScript(src: string) {; script.src = src; script.async = true; script.onload = () => {; `; this.retryAttempts.delete(src)}; script.onerror = () => {; `; document.head.appendChild(script)} private loadStylesheet(href: string) {; link.rel = 'stylesheet'; link.href = href; link.onload = () => {; `; this.retryAttempts.delete(href)}; link.onerror = () => {; `; document.head.appendChild(link)} private reportError(error: ResourceError) {; if(process.env.NODE_ENV === 'production') {} } private getResourceType(element: HTMLElement): ResourceError['type'] {; if(element.tagName === 'SCRIPT') return 'script'; if('; element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'stylesheet'; ); return 'stylesheet'; if(element.tagName === 'IMG') return 'image'; if('; element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'preload'; ); return 'font'; return 'other'} getErrors(): ResourceError[] {; return [...this.errors]} clearErrors() {; this.errors = []; this.retryAttempts.clear()} getErrorSummary() {; ; this.errors.forEach(error => {; summary.byType[error.type] = (summary.byType[error.type] || 0) + 1}); return summary} } export default resourceMonitor; '`;


'`
interface ResourceError {; url: string; type: 'script' | 'stylesheet' | 'image' | 'font' | 'other'; error: string; timestamp: number} class ResourceMonitor {; private errors: ResourceError[] = []; private isMonitoring = false; private retryAttempts = new Map<string,number>(); private maxRetries = 3; start() {; if(this.isMonitoring) return; this.isMonitoring = true; this.setupErrorListeners(); this.setupResourceObservers(); this.monitorCriticalResources(); stop() {; this.isMonitoring = false; private setupErrorListeners() {; window.addEventListener('; 'error',event => {; if (event.target && event.target !== window) {; if(url) {; this.handleResourceError(); url,this.getResourceType(target),event.error?.message || 'Unknown error'; )} } },true; ); window.addEventListener('unhandledrejection',event => {; if(); event.reason &&'; typeof event.reason === 'string' &&'; event.reason.includes('MIME'); ) {; this.handleResourceError('; 'unknown',other',`MIME type error: ${event.reason}`; )} })} private setupResourceObservers() {; if(window.MutationObserver) {; this.monitorElement(element)} })})}); observer.observe(document.head,{ childList: true,subtree: true }); observer.observe(document.body,{ childList: true,subtree: true })} } private monitorElement(element: HTMLElement) {; if(element.tagName === 'SCRIPT' && element.src) {; this.monitorScript(element as HTMLScriptElement)} if(element.tagName === 'LINK' && element.rel === 'stylesheet') {; this.monitorStylesheet(element as HTMLLinkElement)} } private monitorScript(script: anyHTMLScriptElement) {; script.addEventListener('error',() => {; this.handleResourceError(script.src,script',Script loading failed')})} private monitorStylesheet(link: anyHTMLLinkElement) {; link.addEventListener('error',() => {; this.handleResourceError(); link.href,stylesheet',Stylesheet loading failed'; )})} private monitorCriticalResources() {; ; criticalResources.forEach(resource => {; this.checkResourceHealth(resource)})} private async checkResourceHealth(url: string) {; try {; if(!response.ok) {; this.handleResourceError(); url,other',`; `HTTP ${response.status}: ${response.statusText}`; ); return} if(!contentType) {; this.handleResourceError(url,other',No content-type header'); return} if(url.endsWith('.js') && !contentType.includes('javascript')) {; this.handleResourceError(url,'script',`Incorrect MIME type: ${contentType} (expected javascript)`)} else if(url.endsWith('.css') && !contentType.includes('css')) {; this.handleResourceError(url,'stylesheet',`Incorrect MIME type: ${contentType} (expected css)`)} this.handleResourceError(); url,script',`; `Incorrect MIME type: ${contentType} (expected javascript)`; )} else if(url.endsWith('.css') && !contentType.includes('css')) {; this.handleResourceError(); url,stylesheet',`; `Incorrect MIME type: ${contentType} (expected css)`; )} } catch(error) {; '`; this.handleResourceError(url,other',`Fetch error: ${error}`)} } private handleResourceError(); url: string,type: ResourceError['type'],error: string; ) {; const resourceError: ResourceError = {; url,type,error,timestamp: Date.now()}; this.errors.push(resourceError); this.attemptRetry(url,type); this.reportError(resourceError)} private attemptRetry(url: string,type: ResourceError['type']) {; if(attempts >= this.maxRetries) {; `; return} this.retryAttempts.set(url,attempts + 1); setTimeout(); () => {; this.retryResource(url,type)},Math.pow(2,attempts) * 1000; )} private retryResource(url: string,type: ResourceError['type']) {; `; if(type === 'script') {; this.loadScript(url)} else if(type === 'stylesheet') {; this.loadStylesheet(url)} } private loadScript(src: string) {; script.src = src; script.async = true; script.onload = () => {; `; this.retryAttempts.delete(src)}; script.onerror = () => {; `; document.head.appendChild(script)} private loadStylesheet(href: string) {; link.rel = 'stylesheet'; link.href = href; link.onload = () => {; `; this.retryAttempts.delete(href)}; link.onerror = () => {; `; document.head.appendChild(link)} private reportError(error: ResourceError) {; if(process.env.NODE_ENV === 'production') {} } private getResourceType(element: HTMLElement): ResourceError['type'] {; if(element.tagName === 'SCRIPT') return 'script'; if('; element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'stylesheet'; ); return 'stylesheet'; if(element.tagName === 'IMG') return 'image'; if('; element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'preload'; ); return 'font'; return 'other'} getErrors(): ResourceError[] {; return [...this.errors]} clearErrors() {; this.errors = []; this.retryAttempts.clear()} getErrorSummary() {; ; this.errors.forEach(error => {; summary.byType[error.type] = (summary.byType[error.type] || 0) + 1}); return summary} } export default resourceMonitor; '`;
<<<<<<< HEAD:temp_exclude/src.disabled/src/utils/resourceMonitor.ts
<<<<<<< HEAD:temp_exclude/src.disabled/src/utils/resourceMonitor.ts

=======
interface ResourceError {; url: string; type: 'script' | 'stylesheet' | 'image' | 'font' | 'other'; error: string; timestamp: number} class ResourceMonitor {; private errors: ResourceError[] = []; private isMonitoring = false; private retryAttempts = new Map<string,number>(); private maxRetries = 3; start() {; if(this.isMonitoring) return; this.isMonitoring = true; this.setupErrorListeners(); this.setupResourceObservers(); this.monitorCriticalResources(); stop() {; this.isMonitoring = false; private setupErrorListeners() {; window.addEventListener('; 'error',event => {; if (event.target && event.target !== window) {; if(url) {; this.handleResourceError(); url,this.getResourceType(target),event.error?.message || 'Unknown error'; )} } },true; ); window.addEventListener('unhandledrejection',event => {; if(); event.reason &&'; typeof event.reason === 'string' &&'; event.reason.includes('MIME'); ) {; this.handleResourceError('; 'unknown',other',`MIME type error: ${event.reason}`; )} })} private setupResourceObservers() {; if(window.MutationObserver) {; this.monitorElement(element)} })})}); observer.observe(document.head,{ childList: true,subtree: true }); observer.observe(document.body,{ childList: true,subtree: true })} } private monitorElement(element: HTMLElement) {; if(element.tagName === 'SCRIPT' && element.src) {; this.monitorScript(element as HTMLScriptElement)} if(element.tagName === 'LINK' && element.rel === 'stylesheet') {; this.monitorStylesheet(element as HTMLLinkElement)} } private monitorScript(script: anyHTMLScriptElement) {; script.addEventListener('error',() => {; this.handleResourceError(script.src,script',Script loading failed')})} private monitorStylesheet(link: anyHTMLLinkElement) {; link.addEventListener('error',() => {; this.handleResourceError(); link.href,stylesheet',Stylesheet loading failed'; )})} private monitorCriticalResources() {; ; criticalResources.forEach(resource => {; this.checkResourceHealth(resource)})} private async checkResourceHealth(url: string) {; try {; if(!response.ok) {; this.handleResourceError(); url,other',`; `HTTP ${response.status}: ${response.statusText}`; ); return} if(!contentType) {; this.handleResourceError(url,other',No content-type header'); return} if(url.endsWith('.js') && !contentType.includes('javascript')) {; this.handleResourceError(url,'script',`Incorrect MIME type: ${contentType} (expected javascript)`)} else if(url.endsWith('.css') && !contentType.includes('css')) {; this.handleResourceError(url,'stylesheet',`Incorrect MIME type: ${contentType} (expected css)`)} this.handleResourceError(); url,script',`; `Incorrect MIME type: ${contentType} (expected javascript)`; )} else if(url.endsWith('.css') && !contentType.includes('css')) {; this.handleResourceError(); url,stylesheet',`; `Incorrect MIME type: ${contentType} (expected css)`; )} } catch(error) {; '`; this.handleResourceError(url,other',`Fetch error: ${error}`)} } private handleResourceError(); url: string,type: ResourceError['type'],error: string; ) {; const resourceError: ResourceError = {; url,type,error,timestamp: Date.now()}; this.errors.push(resourceError); this.attemptRetry(url,type); this.reportError(resourceError)} private attemptRetry(url: string,type: ResourceError['type']) {; if(attempts >= this.maxRetries) {; `; return} this.retryAttempts.set(url,attempts + 1); setTimeout(); () => {; this.retryResource(url,type)},Math.pow(2,attempts) * 1000; )} private retryResource(url: string,type: ResourceError['type']) {; `; if(type === 'script') {; this.loadScript(url)} else if(type === 'stylesheet') {; this.loadStylesheet(url)} } private loadScript(src: string) {; script.src = src; script.async = true; script.onload = () => {; `; this.retryAttempts.delete(src)}; script.onerror = () => {; `; document.head.appendChild(script)} private loadStylesheet(href: string) {; link.rel = 'stylesheet'; link.href = href; link.onload = () => {; `; this.retryAttempts.delete(href)}; link.onerror = () => {; `; document.head.appendChild(link)} private reportError(error: ResourceError) {; if(process.env.NODE_ENV === 'production') {} } private getResourceType(element: HTMLElement): ResourceError['type'] {; if(element.tagName === 'SCRIPT') return 'script'; if('; element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'stylesheet'; ); return 'stylesheet'; if(element.tagName === 'IMG') return 'image'; if('; element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'preload'; ); return 'font'; return 'other'} getErrors(): ResourceError[] {; return [...this.errors]} clearErrors() {; this.errors = []; this.retryAttempts.clear()} getErrorSummary() {; ; this.errors.forEach(error => {; summary.byType[error.type] = (summary.byType[error.type] || 0) + 1}); return summary} } export default resourceMonitor; '`;
<<<<<<< HEAD:temp_exclude/src.disabled/src/utils/resourceMonitor.ts
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD:temp_exclude/src.disabled/src/utils/resourceMonitor.ts
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:src.disabled/src/utils/resourceMonitor.ts
=======
interface ResourceError {; url: string; type: 'script' | 'stylesheet' | 'image' | 'font' | 'other'; error: string} timestamp: 'number'} class ResourceMonitor {; private errors: 'ResourceError[] = []; private isMonitoring = false; private retryAttempts = new Map<string',number>(); private maxRetries = 3; start() {; if(this.isMonitoring) return; this.isMonitoring = true; this.setupErrorListeners(); this.setupResourceObservers(); this.monitorCriticalResources(); stop() {; this.isMonitoring = false; private setupErrorListeners() {; window.addEventListener('; 'error',; event => {; if (event.target && event.target !== window) {; if(url) {; this.handleResourceError(); url,; this.getResourceType(target),; event.error?.message || 'Unknown error'; )} } },; true; ); window.addEventListener('unhandledrejection',event => {; if(); event.reason &&'; typeof event.reason === 'string' &&'; event.reason.includes('MIME'); ) {; this.handleResourceError('; 'unknown',other',; `MIME type error: ${event.reason}`; )} })} private setupResourceObservers() {; if(window.MutationObserver) {; this.monitorElement(element)} })})}); observer.observe(document.head,{ childList: 'true',subtree: 'true' }); observer.observe(document.body,{ childList: 'true',subtree: 'true' })} } private monitorElement(element: HTMLElement) {; if(element.tagName === 'SCRIPT' && element.src) {; this.monitorScript(element as HTMLScriptElement)} if(element.tagName === 'LINK' && element.rel === 'stylesheet') {; this.monitorStylesheet(element as HTMLLinkElement)} } private monitorScript(script: anyHTMLScriptElement) {; script.addEventListener('error',() => {; this.handleResourceError(script.src,script',Script loading failed')})} private monitorStylesheet(link: anyHTMLLinkElement) {; link.addEventListener('error',() => {; this.handleResourceError(); link.href,stylesheet',Stylesheet loading failed'; )})} private monitorCriticalResources() {; ; criticalResources.forEach(resource => {; this.checkResourceHealth(resource)})} private async checkResourceHealth(url: string) {; try {; if(!response.ok) {; this.handleResourceError(); url,other',`; `HTTP ${response.status}: ${response.statusText}`; ); return} if(!contentType) {; this.handleResourceError(url,other',No content-type header'); return} if(url.endsWith('.js') && !contentType.includes('javascript')) {; this.handleResourceError(url,'script',`Incorrect MIME type: ${contentType} (expected javascript)`)} else if(url.endsWith('.css') && !contentType.includes('css')) {; this.handleResourceError(url,'stylesheet',`Incorrect MIME type: ${contentType} (expected css)`)} this.handleResourceError(); url,script',`; `Incorrect MIME type: ${contentType} (expected javascript)`; )} else if(url.endsWith('.css') && !contentType.includes('css')) {; this.handleResourceError(); url,stylesheet',`; `Incorrect MIME type: ${contentType} (expected css)`; )} } catch(error) {; '`; this.handleResourceError(url,other',`Fetch error: ${error}`)} } private handleResourceError(); url: 'string',; type: ResourceError['type'],; error: string; ) {; const resourceError: ResourceError = {; url,; type,; error,; timestamp: Date.now()}; this.errors.push(resourceError); this.attemptRetry(url,type); this.reportError(resourceError)} private attemptRetry(url: 'string',type: ResourceError['type']) {; if(attempts >= this.maxRetries) {; `; return} this.retryAttempts.set(url,attempts + 1); setTimeout(); () => {; this.retryResource(url,type)},; Math.pow(2,attempts) * 1000; )} private retryResource(url: 'string',type: ResourceError['type']) {; `; if(type === 'script') {; this.loadScript(url)} else if(type === 'stylesheet') {; this.loadStylesheet(url)} } private loadScript(src: string) {; script.src = src; script.async = true; script.onload = () => {; `; this.retryAttempts.delete(src)}; script.onerror = () => {; `; document.head.appendChild(script)} private loadStylesheet(href: string) {; link.rel = 'stylesheet'; link.href = href; link.onload = () => {; `; this.retryAttempts.delete(href)}; link.onerror = () => {; `; document.head.appendChild(link)} private reportError(error: ResourceError) {; if(process.env.NODE_ENV === 'production') {} } private getResourceType(element: HTMLElement): ResourceError['type'] {; if(element.tagName === 'SCRIPT') return 'script'; if('; element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'stylesheet'; ); return 'stylesheet'; if(element.tagName === 'IMG') return 'image'; if('; element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'preload'; ); return 'font'; return 'other'} getErrors(): ResourceError[] {; return [...this.errors]} clearErrors() {; this.errors = []; this.retryAttempts.clear()} getErrorSummary() {; ; this.errors.forEach(error => {; summary.byType[error.type] = (summary.byType[error.type] || 0) + 1}); return summary} } export default resourceMonitor; '`;
>>>>>>> main
>>>>>>> main
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c:src.disabled/src/utils/resourceMonitor.ts
interface ResourceError {; url: string; type: 'script' | 'stylesheet' | 'image' | 'font' | 'other'; error: string; timestamp: number} class ResourceMonitor {; private errors: ResourceError[] = []; private isMonitoring = false; private retryAttempts = new Map<string,number>(); private maxRetries = 3; start() {; if(this.isMonitoring) return; this.isMonitoring = true; this.setupErrorListeners(); this.setupResourceObservers(); this.monitorCriticalResources(); stop() {; this.isMonitoring = false; private setupErrorListeners() {; window.addEventListener('; 'error',event => {; if (event.target && event.target !== window) {; if(url) {; this.handleResourceError(); url,this.getResourceType(target),event.error?.message || 'Unknown error'; )} } },true; ); window.addEventListener('unhandledrejection',event => {; if(); event.reason &&'; typeof event.reason === 'string' &&'; event.reason.includes('MIME'); ) {; this.handleResourceError('; 'unknown',other',`MIME type error: ${event.reason}`; )} })} private setupResourceObservers() {; if(window.MutationObserver) {; this.monitorElement(element)} })})}); observer.observe(document.head,{ childList: true,subtree: true }); observer.observe(document.body,{ childList: true,subtree: true })} } private monitorElement(element: HTMLElement) {; if(element.tagName === 'SCRIPT' && element.src) {; this.monitorScript(element as HTMLScriptElement)} if(element.tagName === 'LINK' && element.rel === 'stylesheet') {; this.monitorStylesheet(element as HTMLLinkElement)} } private monitorScript(script: anyHTMLScriptElement) {; script.addEventListener('error',() => {; this.handleResourceError(script.src,script',Script loading failed')})} private monitorStylesheet(link: anyHTMLLinkElement) {; link.addEventListener('error',() => {; this.handleResourceError(); link.href,stylesheet',Stylesheet loading failed'; )})} private monitorCriticalResources() {; ; criticalResources.forEach(resource => {; this.checkResourceHealth(resource)})} private async checkResourceHealth(url: string) {; try {; if(!response.ok) {; this.handleResourceError(); url,other',`; `HTTP ${response.status}: ${response.statusText}`; ); return} if(!contentType) {; this.handleResourceError(url,other',No content-type header'); return} if(url.endsWith('.js') && !contentType.includes('javascript')) {; this.handleResourceError(url,'script',`Incorrect MIME type: ${contentType} (expected javascript)`)} else if(url.endsWith('.css') && !contentType.includes('css')) {; this.handleResourceError(url,'stylesheet',`Incorrect MIME type: ${contentType} (expected css)`)} this.handleResourceError(); url,script',`; `Incorrect MIME type: ${contentType} (expected javascript)`; )} else if(url.endsWith('.css') && !contentType.includes('css')) {; this.handleResourceError(); url,stylesheet',`; `Incorrect MIME type: ${contentType} (expected css)`; )} } catch(error) {; '`; this.handleResourceError(url,other',`Fetch error: ${error}`)} } private handleResourceError(); url: string,type: ResourceError['type'],error: string; ) {; const resourceError: ResourceError = {; url,type,error,timestamp: Date.now()}; this.errors.push(resourceError); this.attemptRetry(url,type); this.reportError(resourceError)} private attemptRetry(url: string,type: ResourceError['type']) {; if(attempts >= this.maxRetries) {; `; return} this.retryAttempts.set(url,attempts + 1); setTimeout(); () => {; this.retryResource(url,type)},Math.pow(2,attempts) * 1000; )} private retryResource(url: string,type: ResourceError['type']) {; `; if(type === 'script') {; this.loadScript(url)} else if(type === 'stylesheet') {; this.loadStylesheet(url)} } private loadScript(src: string) {; script.src = src; script.async = true; script.onload = () => {; `; this.retryAttempts.delete(src)}; script.onerror = () => {; `; document.head.appendChild(script)} private loadStylesheet(href: string) {; link.rel = 'stylesheet'; link.href = href; link.onload = () => {; `; this.retryAttempts.delete(href)}; link.onerror = () => {; `; document.head.appendChild(link)} private reportError(error: ResourceError) {; if(process.env.NODE_ENV === 'production') {} } private getResourceType(element: HTMLElement): ResourceError['type'] {; if(element.tagName === 'SCRIPT') return 'script'; if('; element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'stylesheet'; ); return 'stylesheet'; if(element.tagName === 'IMG') return 'image'; if('; element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'preload'; ); return 'font'; return 'other'} getErrors(): ResourceError[] {; return [...this.errors]} clearErrors() {; this.errors = []; this.retryAttempts.clear()} getErrorSummary() {; ; this.errors.forEach(error => {; summary.byType[error.type] = (summary.byType[error.type] || 0) + 1}); return summary} } export default resourceMonitor; '`;
interface ResourceError {; url: string; type: 'script' | 'stylesheet' | 'image' | 'font' | 'other'; error: string; timestamp: number} class ResourceMonitor {; private errors: ResourceError[] = []; private isMonitoring = false; private retryAttempts = new Map<string,number>(); private maxRetries = 3; start() {; if(this.isMonitoring) return; this.isMonitoring = true; this.setupErrorListeners(); this.setupResourceObservers(); this.monitorCriticalResources(); stop() {; this.isMonitoring = false; private setupErrorListeners() {; window.addEventListener('; 'error',event => {; if (event.target && event.target !== window) {; if(url) {; this.handleResourceError(); url,this.getResourceType(target),event.error?.message || 'Unknown error'; )} } },true; ); window.addEventListener('unhandledrejection',event => {; if(); event.reason &&'; typeof event.reason === 'string' &&'; event.reason.includes('MIME'); ) {; this.handleResourceError('; 'unknown',other',`MIME type error: ${event.reason}`; )} })} private setupResourceObservers() {; if(window.MutationObserver) {; this.monitorElement(element)} })})}); observer.observe(document.head,{ childList: true,subtree: true }); observer.observe(document.body,{ childList: true,subtree: true })} } private monitorElement(element: HTMLElement) {; if(element.tagName === 'SCRIPT' && element.src) {; this.monitorScript(element as HTMLScriptElement)} if(element.tagName === 'LINK' && element.rel === 'stylesheet') {; this.monitorStylesheet(element as HTMLLinkElement)} } private monitorScript(script: anyHTMLScriptElement) {; script.addEventListener('error',() => {; this.handleResourceError(script.src,script',Script loading failed')})} private monitorStylesheet(link: anyHTMLLinkElement) {; link.addEventListener('error',() => {; this.handleResourceError(); link.href,stylesheet',Stylesheet loading failed'; )})} private monitorCriticalResources() {; ; criticalResources.forEach(resource => {; this.checkResourceHealth(resource)})} private async checkResourceHealth(url: string) {; try {; if(!response.ok) {; this.handleResourceError(); url,other',`; `HTTP ${response.status}: ${response.statusText}`; ); return} if(!contentType) {; this.handleResourceError(url,other',No content-type header'); return} if(url.endsWith('.js') && !contentType.includes('javascript')) {; this.handleResourceError(url,'script',`Incorrect MIME type: ${contentType} (expected javascript)`)} else if(url.endsWith('.css') && !contentType.includes('css')) {; this.handleResourceError(url,'stylesheet',`Incorrect MIME type: ${contentType} (expected css)`)} this.handleResourceError(); url,script',`; `Incorrect MIME type: ${contentType} (expected javascript)`; )} else if(url.endsWith('.css') && !contentType.includes('css')) {; this.handleResourceError(); url,stylesheet',`; `Incorrect MIME type: ${contentType} (expected css)`; )} } catch(error) {; '`; this.handleResourceError(url,other',`Fetch error: ${error}`)} } private handleResourceError(); url: string,type: ResourceError['type'],error: string; ) {; const resourceError: ResourceError = {; url,type,error,timestamp: Date.now()}; this.errors.push(resourceError); this.attemptRetry(url,type); this.reportError(resourceError)} private attemptRetry(url: string,type: ResourceError['type']) {; if(attempts >= this.maxRetries) {; `; return} this.retryAttempts.set(url,attempts + 1); setTimeout(); () => {; this.retryResource(url,type)},Math.pow(2,attempts) * 1000; )} private retryResource(url: string,type: ResourceError['type']) {; `; if(type === 'script') {; this.loadScript(url)} else if(type === 'stylesheet') {; this.loadStylesheet(url)} } private loadScript(src: string) {; script.src = src; script.async = true; script.onload = () => {; `; this.retryAttempts.delete(src)}; script.onerror = () => {; `; document.head.appendChild(script)} private loadStylesheet(href: string) {; link.rel = 'stylesheet'; link.href = href; link.onload = () => {; `; this.retryAttempts.delete(href)}; link.onerror = () => {; `; document.head.appendChild(link)} private reportError(error: ResourceError) {; if(process.env.NODE_ENV === 'production') {} } private getResourceType(element: HTMLElement): ResourceError['type'] {; if(element.tagName === 'SCRIPT') return 'script'; if('; element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'stylesheet'; ); return 'stylesheet'; if(element.tagName === 'IMG') return 'image'; if('; element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'preload'; ); return 'font'; return 'other'} getErrors(): ResourceError[] {; return [...this.errors]} clearErrors() {; this.errors = []; this.retryAttempts.clear()} getErrorSummary() {; ; this.errors.forEach(error => {; summary.byType[error.type] = (summary.byType[error.type] || 0) + 1}); return summary} } export default resourceMonitor; '`;
<<<<<<< HEAD:temp_exclude/src.disabled/src/utils/resourceMonitor.ts
<<<<<<< HEAD:temp_exclude/src.disabled/src/utils/resourceMonitor.ts
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
<<<<<<< HEAD:temp_exclude/src.disabled/src/utils/resourceMonitor.ts
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:src.disabled/src/utils/resourceMonitor.ts
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:src.disabled/src/utils/resourceMonitor.ts
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2:src.disabled/src/utils/resourceMonitor.ts
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c:src.disabled/src/utils/resourceMonitor.ts
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:src.disabled/src/utils/resourceMonitor.ts
=======

'`
interface ResourceError {; url: string; type: 'script' | 'stylesheet' | 'image' | 'font' | 'other'; error: string; timestamp: number} class ResourceMonitor {; private errors: ResourceError[] = []; private isMonitoring = false; private retryAttempts = new Map<string,number>(); private maxRetries = 3; start() {; if(this.isMonitoring) return; this.isMonitoring = true; this.setupErrorListeners(); this.setupResourceObservers(); this.monitorCriticalResources(); stop() {; this.isMonitoring = false; private setupErrorListeners() {; window.addEventListener('; 'error',event => {; if (event.target && event.target !== window) {; if(url) {; this.handleResourceError(); url,this.getResourceType(target),event.error?.message || 'Unknown error'; )} } },true; ); window.addEventListener('unhandledrejection',event => {; if(); event.reason &&'; typeof event.reason === 'string' &&'; event.reason.includes('MIME'); ) {; this.handleResourceError('; 'unknown',other',`MIME type error: ${event.reason}`; )} })} private setupResourceObservers() {; if(window.MutationObserver) {; this.monitorElement(element)} })})}); observer.observe(document.head,{ childList: true,subtree: true }); observer.observe(document.body,{ childList: true,subtree: true })} } private monitorElement(element: HTMLElement) {; if(element.tagName === 'SCRIPT' && element.src) {; this.monitorScript(element as HTMLScriptElement)} if(element.tagName === 'LINK' && element.rel === 'stylesheet') {; this.monitorStylesheet(element as HTMLLinkElement)} } private monitorScript(script: anyHTMLScriptElement) {; script.addEventListener('error',() => {; this.handleResourceError(script.src,script',Script loading failed')})} private monitorStylesheet(link: anyHTMLLinkElement) {; link.addEventListener('error',() => {; this.handleResourceError(); link.href,stylesheet',Stylesheet loading failed'; )})} private monitorCriticalResources() {; ; criticalResources.forEach(resource => {; this.checkResourceHealth(resource)})} private async checkResourceHealth(url: string) {; try {; if(!response.ok) {; this.handleResourceError(); url,other',`; `HTTP ${response.status}: ${response.statusText}`; ); return} if(!contentType) {; this.handleResourceError(url,other',No content-type header'); return} if(url.endsWith('.js') && !contentType.includes('javascript')) {; this.handleResourceError(url,'script',`Incorrect MIME type: ${contentType} (expected javascript)`)} else if(url.endsWith('.css') && !contentType.includes('css')) {; this.handleResourceError(url,'stylesheet',`Incorrect MIME type: ${contentType} (expected css)`)} this.handleResourceError(); url,script',`; `Incorrect MIME type: ${contentType} (expected javascript)`; )} else if(url.endsWith('.css') && !contentType.includes('css')) {; this.handleResourceError(); url,stylesheet',`; `Incorrect MIME type: ${contentType} (expected css)`; )} } catch(error) {; '`; this.handleResourceError(url,other',`Fetch error: ${error}`)} } private handleResourceError(); url: string,type: ResourceError['type'],error: string; ) {; const resourceError: ResourceError = {; url,type,error,timestamp: Date.now()}; this.errors.push(resourceError); this.attemptRetry(url,type); this.reportError(resourceError)} private attemptRetry(url: string,type: ResourceError['type']) {; if(attempts >= this.maxRetries) {; `; return} this.retryAttempts.set(url,attempts + 1); setTimeout(); () => {; this.retryResource(url,type)},Math.pow(2,attempts) * 1000; )} private retryResource(url: string,type: ResourceError['type']) {; `; if(type === 'script') {; this.loadScript(url)} else if(type === 'stylesheet') {; this.loadStylesheet(url)} } private loadScript(src: string) {; script.src = src; script.async = true; script.onload = () => {; `; this.retryAttempts.delete(src)}; script.onerror = () => {; `; document.head.appendChild(script)} private loadStylesheet(href: string) {; link.rel = 'stylesheet'; link.href = href; link.onload = () => {; `; this.retryAttempts.delete(href)}; link.onerror = () => {; `; document.head.appendChild(link)} private reportError(error: ResourceError) {; if(process.env.NODE_ENV === 'production') {} } private getResourceType(element: HTMLElement): ResourceError['type'] {; if(element.tagName === 'SCRIPT') return 'script'; if('; element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'stylesheet'; ); return 'stylesheet'; if(element.tagName === 'IMG') return 'image'; if('; element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'preload'; ); return 'font'; return 'other'} getErrors(): ResourceError[] {; return [...this.errors]} clearErrors() {; this.errors = []; this.retryAttempts.clear()} getErrorSummary() {; ; this.errors.forEach(error => {; summary.byType[error.type] = (summary.byType[error.type] || 0) + 1}); return summary} } export default resourceMonitor; '`;


'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src.disabled/src/utils/resourceMonitor.ts
