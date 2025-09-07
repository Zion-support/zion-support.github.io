<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest } from 'next';
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import type { NextApiRequest } from 'next';
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======



import type { NextApiRequest } from 'next';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> 61d39dd026fe5549161165ead85b131541010508




import type { NextApiRequest } from 'next';
export function extractClientIp(req: NextApiRequest): string | null {
  const xff = (req.headers['x-forwarded-for'] as string) |'';

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export function extractClientIp(req: NextApiRequest): string | null {;
  const xff = (req.headers['x-forwarded-for'] as string) || '';
<<<<<<< HEAD
  const ip = xff.split()[0]?.trim() || (req.headers['x-real-ip'] as string) || (req.socket?.remoteAddress ?? null);
  if (!ip) return null;
  if (ip.startsWith('::ffff: ')) return ip.substring(7);
=======

export function extractClientIp(req: NextApiRequest): string | null {};
  const xff = (req.headers['x-forwarded-for'] as string) |'';

export function extractClientIp(req: NextApiRequest): string | null {;'
  const xff = (req.headers['x-forwarded-for'] as string) || '';
  const ip ='
    xff.split(',')[0]?.trim() |'
=======


export function extractClientIp(req: NextApiRequest): string | null {
  // TODO: Implement
}
  const xff = (req.headers['x-forwarded-for'] as string) |;
export function extractClientIp(req: NextApiRequest): string | null {;
  const xff = (req.headers['x-forwarded-for'] as string) || ;
pr-12325
  const ip =
    xff.split(',')[0]?.trim() |
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    (req.headers['x-real-ip'] as string) |
    (req.socket?.remoteAddress ?? null);
  if (!ip) return null;'
  if (ip.startsWith('::ffff:')) return ip.substring(7);
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return ip;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}
export function getClientIp(req: any): string {};
export function getClientIp(req: any): string {;
<<<<<<< HEAD

=======
=======
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
export function getClientIp(req: any): string {

export function getClientIp(req: any): string {;
<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


import type { NextApiRequest } from 'next';
  
  if (forwarded) {
    return Array && Array.isArray(forwarded) ? forwarded[0] : forwarded && forwarded.split(',')[0].trim();
  }
  
  return remoteAddress || 'unknown';
export function getClientIp(req: any): string {


<<<<<<< HEAD
<<<<<<< HEAD

origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======




'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const forwarded = req.headers['x-forwarded-for'];
  const remoteAddress = req.socket?.remoteAddress;
  if (forwarded) {'
    return Array.isArray(forwarded) ? forwarded[0] : forwarded.split(',')[0].trim();
<<<<<<< HEAD
<<<<<<< HEAD
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
  }
<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a





<<<<<<< HEAD
<<<<<<< HEAD
=======







>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
  return remoteAddress |'unknown';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}

  // Check IP reputation;
  async getIpReputation(ip: string): Promise<IpReputation | null> {}
    if (!this.isValidIp(ip)) {}
      return null;
    }

    // Check cache first;
    const cached = this.cache.get(`reputation_${ip}`);
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {}
      return cached.data;
    }

    try {}
      // Mock reputation check - in production, integrate with real reputation services;
      const reputation = await this.checkMockReputation(ip);
      
<<<<<<< HEAD
      // Cache the result;`
=======
      // Cache the result
export function getClientIp(req: any): string {
  // TODO: Implement
export function getClientIp(req: any): string {;


import type { NextApiRequest } from 'next';
  if (forwarded) {
    return Array && Array.isArray(forwarded) ? forwarded[0] : forwarded && forwarded.split(',')[0].trim();
  
  return remoteAddress || 'unknown';
  // TODO: Implement
  const forwarded = req.headers['x-forwarded-for'];
  const remoteAddress = req.socket?.remoteAddress;
    return Array.isArray(forwarded) ? forwarded[0] : forwarded.split(',')[0].trim();






  // Check IP reputation;
  async getIpReputation(ip: string): Promise<IpReputation | null> {

    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.data;

    try {
  // TODO: Implement
      // Mock reputation check - in production, integrate with real reputation services;
      const reputation = await this.checkMockReputation(ip);
      
      // Cache the result;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      this.cache.set(`reputation_${ip}`, { data: reputation, timestamp: Date.now() });
      
      return reputation;
    } catch (error) {'
      console.error('Error checking IP reputation:', error);
      return null;
    }


  }

<<<<<<< HEAD
  private async checkMockReputation(ip: string): Promise<IpReputation> {
    // Mock reputation data - in production, integrate with real services
    const mockData = {
      '127.0.0.1': {
        reputation: 'good' as const,
        score: 10,
        sources: ['internal'],
        details: {
          isProxy: false,
          isVpn: false,
          isTor: false,
          isBot: false,
          isSpam: false,
          isMalicious: false,
          isBlacklisted: false
        }
      },
      '192.168.1.1': {
        reputation: 'neutral' as const,
        score: 50,
        sources: ['local'],
        details: {
          isProxy: false,
          isVpn: false,
          isTor: false,
          isBot: false,
          isSpam: false,
          isMalicious: false,
          isBlacklisted: false
        }
      }
    };
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD

<<<<<<< HEAD
  // Validate IP address
  isValidIp(ip: string): boolean {
    if (!ip || ip === 'unknown') return false;
    
    // IPv4 validation
    const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (ipv4Regex.test(ip)) return true;
    
    // IPv6 validation (simplified)
    const ipv6Regex = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    if (ipv6Regex.test(ip)) return true;
    
    return false;
  }

  // Check if IP is private
  isPrivateIp(ip: string): boolean {
    if (!this.isValidIp(ip)) return false;
    
    // Private IP ranges
    const privateRanges = [
      /^10\./,                    // 10.0.0.0/8
      /^172\.(1[6-9]|2[0-9]|3[0-1])\./, // 172.16.0.0/12
      /^192\.168\./,              // 192.168.0.0/16
      /^127\./,                   // 127.0.0.0/8 (loopback)
      /^169\.254\./,              // 169.254.0.0/16 (link-local)
      /^::1$/,                    // IPv6 loopback
      /^fc00:/,                   // IPv6 unique local
      /^fe80:/                    // IPv6 link-local
    ];
    
    return privateRanges.some(range => range.test(ip));
  }

  // Check if IP is likely a proxy/VPN
  async isProxyOrVpn(ip: string): Promise<boolean> {
    const reputation = await this.getIpReputation(ip);
    return reputation?.details.isProxy || reputation?.details.isVpn || false;
  }

  // Get IP geolocation
  async getGeolocation(ip: string): Promise<GeolocationResult | null> {
    if (!this.isValidIp(ip)) {
      return null;
    }

    try {
      const response = await fetch(`http://ip-api.com/json/${ip}`);
      const data = await response.json();
      
      if (data.status === 'fail') {
        return null;
      }

      return {
        ip: data.query,
        latitude: data.lat,
        longitude: data.lon,
        country: data.country,
        countryCode: data.countryCode,
        region: data.region,
        regionName: data.regionName,
        city: data.city,
        zip: data.zip,
        timezone: data.timezone,
        isp: data.isp,
        org: data.org,
        as: data.as,
        query: data.query
      };
    } catch (error) {
      console.error('Error fetching geolocation:', error);
      return null;
    }
  }

  // Clear cache
  clearCache(): void {
    this.cache.clear();
  }

  // Get cache stats
  getCacheStats(): { size: number; entries: string[] } {
    return {
      size: this.cache.size,
      entries: Array.from(this.cache.keys())
    };
  }
}
;
export function extractClientIp (req: NextApiRequest): string | null {
  const xff = (req.headers['x - forwarded - for'] as string) || '';
  const ip =;
    xff.split (', ')[0]?.trim () ||;
    (req.headers['x - real - ip'] as string) ||;
    (req.socket?.remote_address ?? null);
  // Check condition
if (return null) {
  $2
}
  if () return ip.substring (7)) {
  $2
}
=======
import type { NextApiRequest } from 'next';
export function extractClientIp(req: NextApiRequest): string | null {;
  const xff = (req.headers['x-forwarded-for'] as string) || '';
  const ip = xff.split()[0]?.trim() || (req.headers['x-real-ip'] as string) || (req.socket?.remoteAddress ?? null);
  if (!ip) return null;
  if (ip.startsWith('::ffff: ')) return ip.substring(7);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return ip;
}
export function getClientIp (req: any): string {
  const forwarded = req.headers['x - forwarded - for'];
  const remote_address = req.socket?.remote_address;
;
  // Check condition
if ( {) {
  $2
}
    return Array.is_array (forwarded) ? forwarded[0] : forwarded.split (', ')[0].trim ();
  }
  return remote_address || 'unknown';
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
origin/cursor/expand-services-advertise-and-build-project-c28b
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
'`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

  private async checkMockReputation(ip: string): Promise<IpReputation> {

  async isProxyOrVpn(ip: string): Promise<boolean> {
</boolean>
  async getGeolocation(ip: string): Promise<GeolocationResult | null> {
`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
