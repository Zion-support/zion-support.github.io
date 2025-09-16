



>>>>>>> origin/feature/merge-conflicts-and-improvements


=======
import type { NextApiRequest } from 'next';

export function extractClientIp(req: NextApiRequest): string | null {
  const xff = (req.headers['x-forwarded-for'] as string) || '';
  const ip = xff.split(',')[0]?.trim() || (req.headers['x-real-ip'] as string) || (req.socket?.remoteAddress ?? null);
  if (!ip) return null;
  if (ip.startsWith('::ffff:')) return ip.substring(7);
  return ip;
}
<<<<<<< HEAD
>>>>>>> origin/auto/autonomy-17186719616
=======
export function getClientIp(req: any): string {

export function getClientIp(req: any): string {;


import type { NextApiRequest } from 'next';
  
  if (forwarded) {
    return Array && Array.isArray(forwarded) ? forwarded[0] : forwarded && forwarded.split(',')[0].trim();
  }
  
  return remoteAddress || 'unknown';
export function getClientIp(req: any): string {


  const forwarded = req.headers['x-forwarded-for'];
  const remoteAddress = req.socket?.remoteAddress;
  if (forwarded) {
    return Array.isArray(forwarded) ? forwarded[0] : forwarded.split(',')[0].trim();
  }





}

  // Check IP reputation
  async getIpReputation(ip: string): Promise<IpReputation | null> {
    if (!this.isValidIp(ip)) {
      return null;
    }

    // Check cache first
    const cached = this.cache.get(`reputation_${ip}`);
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.data;
    }

    try {
      // Mock reputation check - in production, integrate with real reputation services
      const reputation = await this.checkMockReputation(ip);
      
      // Cache the result
      this.cache.set(`reputation_${ip}`, { data: reputation, timestamp: Date.now() });
      
      return reputation;
    } catch (error) {
      console.error('Error checking IP reputation:', error);
      return null;
    }
  }

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
export function extractClientIp(req: NextApiRequest): string | null {import type { NextApiRequest } from 'next';
export function extractClientIp(req: NextApiRequest): string | null {const xff  = (req.headers['x-forwarded-for'] as string) |'';export function extractClientIp(req: NextApiRequest): string | null {const xff = (req.headers['x-forwarded-for'] as string) || '';
  const ip =;
    xff.split(',')[0]?.trim() |;
    (req.headers['x-real-ip'] as string) |;
    (req.socket?.remoteAddress ?? null)if (!ip) return null;
  if (ip.startsWith("::ffff:")) return ip.substring(7)(req.socket?.remoteAddress ?? null)if (!ip) return null;
  if (ip.startsWith('::ffff:')) return ip.substring(7)return ip;
}
export function getClientIp(req: any): string {export function getClientIp(req: any): string {export function getClientIp(req: any): string {}
export function getClientIp(req: any): string {export function getClientIp(req: any): string {if (forwarded) {return Array && Array.isArray(forwarded) ? forwarded[0] : forwarded && forwarded.split(',')[0].trim()}return remoteAddress || 'unknown';
export function getClientIp(req: any): string {const forwarded = req.headers['x-forwarded-for'];
  const remoteAddress = req.socket?.remoteAddress;
  if (forwarded) {return Array.isArray(forwarded) ? forwarded[0] : forwarded.split(',')[0].trim()}return remoteAddress |'unknown';ursor/fix-website-loading-errors-and-merge-6662;
  return remoteAddress |'unknown';
}// Check IP reputation;
  async getIpReputation(ip: string): Promise<IpReputation | null> {if (!this.isValidIp(ip)) {return null;
    }// Check cache first;
    const cached = this.cache.get(`reputation_${ip}`)if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {return cached.data;
    }try {// Mock reputation check - in production, integrate with real reputation services;
      const reputation  = await this.checkMockReputation(ip)// Cache the result;
      this.cache.set(`reputation_${ip}`, { data: reputation, timestamp: Date.now() })return reputation;
    } catch (error) {console.error('Error checking IP reputation:', error)return null;
    }
  }private async checkMockReputation(ip: string): Promise<IpReputation> {// Mock reputation data - in production, integrate with real services;
    const mockData = {'127.0.0.1': {reputation: 'good' as const,score: 10,sources: ['internal'],details: {isProxy: false,isVpn: false,isTor: false,isBot: false,isSpam: false,isMalicious: false,isBlacklisted: false;
        }
      },'192.168.1.1': {reputation: 'neutral' as const,score: 50,sources: ['local'],details: {isProxy: false,isVpn: false,isTor: false,isBot: false,isSpam: false,isMalicious: false,isBlacklisted: false;
        }
      }
    }const data = mockData[ip as keyof typeof mockData] || {reputation: 'neutral' as const,score: 50,sources: ['unknown'],details: {isProxy: Math.random() > 0.8,isVpn: Math.random() > 0.9,isTor: Math.random() > 0.95,isBot: Math.random() > 0.7,isSpam: Math.random() > 0.85,isMalicious: Math.random() > 0.95,isBlacklisted: Math.random() > 0.9;
      }
    }return {ip,reputation: data.reputation,score: data.score,sources: data.sources,lastUpdated: new Date().toISOString(),details: data.details;
    }}// Validate IP address;
  isValidIp(ip: string): boolean {if (!ip || ip === 'unknown') return false;// IPv4 validation;
    const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (ipv4Regex.test(ip)) return true;// IPv6 validation (simplified)const ipv6Regex = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    if (ipv6Regex.test(ip)) return true;return false;
  }// Check if IP is private;
  isPrivateIp(ip: string): boolean {if (!this.isValidIp(ip)) return false;// Private IP ranges;
    const privateRanges = [;
      /^10\./,                    // 10.0.0.0/8;
      /^172\.(1[6-9]|2[0-9]|3[0-1])\./, // 172.16.0.0/12;
      /^192\.168\./,              // 192.168.0.0/16;
      /^127\./,                   // 127.0.0.0/8 (loopback)/^169\.254\./,              // 169.254.0.0/16 (link-local)/^::1$/,                    // IPv6 loopback;
      /^fc00:/,                   // IPv6 unique local;
      /^fe80:/                    // IPv6 link-local;
    ];return privateRanges.some(range => range.test(ip))}// Check if IP is likely a proxy/VPN;
  async isProxyOrVpn(ip: string): Promise<boolean> {const reputation = await this.getIpReputation(ip)return reputation?.details.isProxy || reputation?.details.isVpn || false;
  }// Get IP geolocation;
  async getGeolocation(ip: string): Promise<GeolocationResult | null> {if (!this.isValidIp(ip)) {return null;
    }try {const response = await fetch(`http://ip-api.com/json/${ip}`)const data  = await response.json()if (data.status === 'fail') {return null;
      }return {ip: data.query,latitude: data.lat,longitude: data.lon,country: data.country,countryCode: data.countryCode,region: data.region,regionName: data.regionName,city: data.city,zip: data.zip,timezone: data.timezone,isp: data.isp,org: data.org,as: data.as,query: data.query;
      }} catch (error) {console.error('Error fetching geolocation:', error)return null;
    }
  }// Clear cache;
  clearCache(): void {this.cache.clear()}// Get cache stats;
  getCacheStats(): { size: number; entries: string[] } {return {size: this.cache.size,entries: Array.from(this.cache.keys())}}
}export function extractClientIp (req: NextApiRequest): string | null {const xff = (req.headers['x - forwarded - for'] as string) || '';
  const ip =;
    xff.split (', ')[0]?.trim () ||;
    (req.headers['x - real - ip'] as string) ||;
    (req.socket?.remote_address ?? null)// Check condition;
if (return null) {$2;
}
  if () return ip.substring (7)) {$2;
}
  return ip;
}
export function getClientIp (req: any): string {const forwarded = req.headers['x - forwarded - for'];
  const remote_address  = req.socket?.remote_address;// Check condition;
if ( {) {$2;
}
    return Array.is_array (forwarded) ? forwarded[0] : forwarded.split (', ')[0].trim ()}
  return remote_address || 'unknown';
}
}
>>>>>>> origin/merge-pr-12271
