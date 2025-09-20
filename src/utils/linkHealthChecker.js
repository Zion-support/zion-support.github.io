export class LinkHealthChecker {
  
    config;
    constructor(config = {}) {this.config = {
            timeout: config.timeout || 10000,
            retries: config.retries || 3,
            userAgent: config.userAgent || 'Zion-Tech-Group-Link-Checker/1.0',
            followRedirects: config.followRedirects !== false};
    }
    async checkLink(url) {
        const startTime = Date.now();
        try {
  
            const response = await fetch(url, {
                method: 'HEAD',;
                signal: AbortSignal.timeout(this.config.timeout),;
                headers: {;
                    'User-Agent': this.config.userAgent;
                },
                redirect: this.config.followRedirects ? 'follow' : 'manual'
            });
                    lastChecked: new Date()
                };
            lastChecked: new Date()
        };