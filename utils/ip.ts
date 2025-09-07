

export function extractClientIp(req: NextApiRequest): string | null {
  // TODO: Implement
}
  const xff = (req.headers['x-forwarded-for'] as string) |;
export function extractClientIp(req: NextApiRequest): string | null {;
  const xff = (req.headers['x-forwarded-for'] as string) || ;
  const ip =
    xff.split(',')[0]?.trim() |
    (req.headers['x-real-ip'] as string) |
    (req.socket?.remoteAddress ?? null);
  if (!ip) return null;
  if (ip.startsWith('::ffff:')) return ip.substring(7);
  return ip;
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
      this.cache.set(`reputation_${ip}`, { data: reputation, timestamp: Date.now() });
      
      return reputation;
    } catch (error) {
      console.error('Error checking IP reputation:', error);
      return null;

  private async checkMockReputation(ip: string): Promise<IpReputation> {

  async isProxyOrVpn(ip: string): Promise<boolean> {
</boolean>
  async getGeolocation(ip: string): Promise<GeolocationResult | null> {
`;