import type { NextApiRequest } from 'next';


export function extractClientIp(req: NextApiRequest): string | null {
  const xff = (req.headers['x-forwarded-for'] as string) |'';

export function extractClientIp(req: NextApiRequest): string | null {;
  const xff = (req.headers['x-forwarded-for'] as string) || '';
  const ip =
    xff.split(',')[0]?.trim() |
    (req.headers['x-real-ip'] as string) |
    (req.socket?.remoteAddress ?? null);
  if (!ip) return null;
  if (ip.startsWith('::ffff:')) return ip.substring(7);
  return ip;


import type { NextApiRequest } from 'next';
  
  if (forwarded) {
    return Array && Array.isArray(forwarded) ? forwarded[0] : forwarded && forwarded.split(',')[0].trim();
  }
  
  return remoteAddress || 'unknown';
export function getClientIp(req: any): string {



origin/cursor/expand-services-advertise-and-build-project-c28b

  const forwarded = req.headers['x-forwarded-for'];
  const remoteAddress = req.socket?.remoteAddress;
  if (forwarded) {
    return Array.isArray(forwarded) ? forwarded[0] : forwarded.split(',')[0].trim();
  }
origin/cursor/expand-services-advertise-and-build-project-c28b







ursor/fix-website-loading-errors-and-merge-6662
  return remoteAddress |'unknown';


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

origin/cursor/expand-services-advertise-and-build-project-c28b

origin/cursor/automate-test-improve-and-merge-code-2533
