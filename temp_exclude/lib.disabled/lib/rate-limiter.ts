import {NextApiRequest,, NextApiResponse} from 'next';
interface RateLimitConfig {
  "windowMs": number;
  maxRequests: number, message?: string,'
}
interface RateLimitStore {
  ["key": 'strin,
  g
]: {
    "count": number;
    resetTime: number}
class RateLimiter {
  private "store": RateLimitStore = {}
  private "config": RateLimitConfig;
  constructor(config: RateLimitConfig) {
    this && this.config = config,
    // Clean up expired entries every minute
    setInterval(() => {
      this && this.cleanup()}, 60000)}
  private cleanup() {
    const now = Date && Date.now();
    Object && Object.keys(this && this.store).forEach(key => {
      if (this && this.store[ke,
  y
].resetTime < now) {
        delete this && this.store[ke,
  y
]}
    })}
  private getKey("req": NextApiRequest): string {
    const ip = req && req.headers['x-forwarded-for'] || req && req.connection.remoteAddress || 'unknown';
    return `rate_limit:${ip}`}
  isAllowed("req": NextApiRequest): { allowed: boolean, remaining: number, resetTime: number } {
    const key = this && this.getKey(req);
    const now = Date && Date.now();
    const windowStart = now - this && this.config.windowMs;
    if (!this && this.store[ke,
  y
] || this && this.store[ke,
  y
].resetTime < windowStart) {
      this && this.store[ke,
  y
] = {
        "count": 1,
        "resetTime": now + this && this.config.windowMs
      }
      return {
        "allowed": true,
        "remaining": this && this.config.maxRequests - 1,
        "resetTime": this && this.store[key].resetTime
      }
    if (this && this.store[key].count >= this && this.config.maxRequests) {
      return {
        "allowed": false,
        "remaining": 0,
        "resetTime": this && this.store[key].resetTime
      }
    this && this.store[key].count++;
    return {
      "allowed": true,
      "remaining": this && this.config.maxRequests - this && this.store[key].count,
      "resetTime": this && this.store[key].resetTime
    }
// Create rate limiter instances
export const apiRateLimiter = new RateLimiter({
  "windowMs": '15 * 60 * 1000', // 15 minutes
  "maxRequests": 100,
  "message": 'Too many requests from this IP, please try again later.'
});
export const authRateLimiter = new RateLimiter({
  "windowMs": '15 * 60 * 1000', // 15 minutes
  "maxRequests": 5,
  "message": 'Too many authentication attempts, please try again later.'
});
export const rateLimitMiddleware = ("limiter": RateLimiter) => 
  (req: NextApiRequest, "res": NextApiResponse, "next": Function) => {
    const result = limiter && limiter.isAllowed(req);
    res && res.setHeader('X-RateLimit-Limit', limiter['config'].maxRequests);
    res && res.setHeader('X-RateLimit-Remaining', result && result.remaining);
    res && res.setHeader('X-RateLimit-Reset', new Date(result && result.resetTime).toISOString());
    if (!result && result.allowed) {
      res && res.status(429).json({
        "error": {
          message: limiter['config'].message || 'Rate limit exceeded',
          "retryAfter": Math && Math.ceil((result && result.resetTime - Date && Date.now()) / 1000)
        }
      });
      return}
    next()}
<<<<<<< HEAD
import { NextApiRequest,NextApiResponse } from 'next'; interface RateLimitConfig { windowMs: number, maxRequests: number, message?: string;' } } interface RateLimitStore { [key: 'strin,g ]: { count: 'number, resetTime: number,' } } class RateLimiter { private store: RateLimitStore = {} private config: RateLimitConfig, constructor(config: RateLimitConfig) { this.config = config, setInterval(() => { this.cleanup()},60000)} private cleanup() { const now = Date.now(); Object.keys(this.store).forEach(key => { if (this.store[ke,y ].resetTime < now) { delete this.store[ke,y ]} })} private getKey(req: NextApiRequest): string { const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown'; return `rate_limit:${ip}`} isAllowed(req: NextApiRequest): { allowed: boolean, remaining: number, resetTime: number } { const key = this.getKey(req); const now = Date.now(); const windowStart = now - this.config.windowMs; if (!this.store[ke,y ] || this.store[ke,y ].resetTime < windowStart) { this.store[ke,y ] = { count: '1',resetTime: 'now + this.config.windowMs' } return { allowed: 'true',remaining: 'this.config.maxRequests - 1',resetTime: 'this.store[key].resetTime' } if (this.store[key].count >= this.config.maxRequests) { return { allowed: 'false',remaining: '0',resetTime: 'this.store[key].resetTime' } this.store[key].count++; return { allowed: 'true',remaining: 'this.config.maxRequests - this.store[key].count',resetTime: 'this.store[key].resetTime' } export const apiRateLimiter = new RateLimiter({ windowMs: '15 * 60 * 1000',maxRequests: '100',message: 'Too many requests from this IP,please try again later.' }); export const authRateLimiter = new RateLimiter({ windowMs: '15 * 60 * 1000',maxRequests: '5',message: 'Too many authentication attempts,please try again later.' }); export const rateLimitMiddleware = (limiter: RateLimiter) => (req: NextApiRequest,res: 'NextApiResponse',next: Function) => { const result = limiter.isAllowed(req); res.setHeader('X-RateLimit-Limit',limiter['config'].maxRequests); res.setHeader('X-RateLimit-Remaining',result.remaining); res.setHeader('X-RateLimit-Reset',new Date(result.resetTime).toISOString()); if (!result.allowed) { res.status(429).json({ error: { message: limiter['config'].message || 'Rate limit exceeded',retryAfter: Math.ceil((result.resetTime - Date.now()) / 1000) } }); return} next()}
import { NextApiRequest,NextApiResponse } from 'next'; interface RateLimitConfig { windowMs: number, maxRequests: number, message?: string;' } interface RateLimitStore { [key: 'strin,g ]: { count: number,
    resetTime: number} class RateLimiter { private store: RateLimitStore = {} private config: RateLimitConfig, constructor(config: RateLimitConfig) { this.config = config, setInterval(() => { this.cleanup()},60000)} private cleanup() { const now = Date.now(); Object.keys(this.store).forEach(key => { if (this.store[ke,y ].resetTime < now) { delete this.store[ke,y ]} })} private getKey(req: NextApiRequest): string { const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown'; return `rate_limit:${ip}`} isAllowed(req: NextApiRequest): { allowed: boolean, remaining: number, resetTime: number } { const key = this.getKey(req); const now = Date.now(); const windowStart = now - this.config.windowMs; if (!this.store[ke,y ] || this.store[ke,y ].resetTime < windowStart) { this.store[ke,y ] = { count: 1,resetTime: now + this.config.windowMs } return { allowed: true,remaining: this.config.maxRequests - 1,resetTime: this.store[key].resetTime } if (this.store[key].count >= this.config.maxRequests) { return { allowed: false,remaining: 0,resetTime: this.store[key].resetTime } this.store[key].count++; return { allowed: true,remaining: this.config.maxRequests - this.store[key].count,resetTime: this.store[key].resetTime } export const apiRateLimiter = new RateLimiter({ windowMs: '15 * 60 * 1000',maxRequests: 100,message: 'Too many requests from this IP,please try again later.' }); export const authRateLimiter = new RateLimiter({ windowMs: '15 * 60 * 1000',maxRequests: 5,message: 'Too many authentication attempts,please try again later.' }); export const rateLimitMiddleware = (limiter: RateLimiter) => (req: NextApiRequest,res: NextApiResponse,next: Function) => { const result = limiter.isAllowed(req); res.setHeader('X-RateLimit-Limit',limiter['config'].maxRequests); res.setHeader('X-RateLimit-Remaining',result.remaining); res.setHeader('X-RateLimit-Reset',new Date(result.resetTime).toISOString()); if (!result.allowed) { res.status(429).json({ error: { message: limiter['config'].message || 'Rate limit exceeded',retryAfter: Math.ceil((result.resetTime - Date.now()) / 1000) } }); return} next()}
import { NextApiRequest,NextApiResponse } from 'next'; interface RateLimitConfig { windowMs: number, maxRequests: number, message?: string;' } interface RateLimitStore { [key: 'strin,g ]: { count: number,
    resetTime: number} class RateLimiter { private store: RateLimitStore = {} private config: RateLimitConfig, constructor(config: RateLimitConfig) { this.config = config, setInterval(() => { this.cleanup()},60000)} private cleanup() { const now = Date.now(); Object.keys(this.store).forEach(key => { if (this.store[ke,y ].resetTime < now) { delete this.store[ke,y ]} })} private getKey(req: NextApiRequest): string { const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown'; return `rate_limit:${ip}`} isAllowed(req: NextApiRequest): { allowed: boolean, remaining: number, resetTime: number } { const key = this.getKey(req); const now = Date.now(); const windowStart = now - this.config.windowMs; if (!this.store[ke,y ] || this.store[ke,y ].resetTime < windowStart) { this.store[ke,y ] = { count: 1,resetTime: now + this.config.windowMs } return { allowed: true,remaining: this.config.maxRequests - 1,resetTime: this.store[key].resetTime } if (this.store[key].count >= this.config.maxRequests) { return { allowed: false,remaining: 0,resetTime: this.store[key].resetTime } this.store[key].count++; return { allowed: true,remaining: this.config.maxRequests - this.store[key].count,resetTime: this.store[key].resetTime } export const apiRateLimiter = new RateLimiter({ windowMs: '15 * 60 * 1000',maxRequests: 100,message: 'Too many requests from this IP,please try again later.' }); export const authRateLimiter = new RateLimiter({ windowMs: '15 * 60 * 1000',maxRequests: 5,message: 'Too many authentication attempts,please try again later.' }); export const rateLimitMiddleware = (limiter: RateLimiter) => (req: NextApiRequest,res: NextApiResponse,next: Function) => { const result = limiter.isAllowed(req); res.setHeader('X-RateLimit-Limit',limiter['config'].maxRequests); res.setHeader('X-RateLimit-Remaining',result.remaining); res.setHeader('X-RateLimit-Reset',new Date(result.resetTime).toISOString()); if (!result.allowed) { res.status(429).json({ error: { message: limiter['config'].message || 'Rate limit exceeded',retryAfter: Math.ceil((result.resetTime - Date.now()) / 1000) } }); return} next()}
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { NextApiRequest,NextApiResponse } from 'next'; interface RateLimitConfig { windowMs: number, maxRequests: number, message?: string;' } interface RateLimitStore { [key: 'strin,g ]: { count: number,
    resetTime: number} class RateLimiter { private store: RateLimitStore = {} private config: RateLimitConfig, constructor(config: RateLimitConfig) { this && this.config = config, setInterval(() => { this && this.cleanup()},60000)} private cleanup() { const now = Date && Date.now(); Object && Object.keys(this && this.store).forEach(key => { if (this && this.store[ke,y ].resetTime < now) { delete this && this.store[ke,y ]} })} private getKey(req: NextApiRequest): string { const ip = req && req.headers['x-forwarded-for'] || req && req.connection.remoteAddress || 'unknown'; return `rate_limit:${ip}`} isAllowed(req: NextApiRequest): { allowed: boolean, remaining: number, resetTime: number } { const key = this && this.getKey(req); const now = Date && Date.now(); const windowStart = now - this && this.config.windowMs; if (!this && this.store[ke,y ] || this && this.store[ke,y ].resetTime < windowStart) { this && this.store[ke,y ] = { count: 1,resetTime: now + this && this.config.windowMs } return { allowed: true,remaining: this && this.config.maxRequests - 1,resetTime: this && this.store[key].resetTime } if (this && this.store[key].count >= this && this.config.maxRequests) { return { allowed: false,remaining: 0,resetTime: this && this.store[key].resetTime } this && this.store[key].count++; return { allowed: true,remaining: this && this.config.maxRequests - this && this.store[key].count,resetTime: this && this.store[key].resetTime } export const apiRateLimiter = new RateLimiter({ windowMs: '15 * 60 * 1000',maxRequests: 100,message: 'Too many requests from this IP,please try again later.' }); export const authRateLimiter = new RateLimiter({ windowMs: '15 * 60 * 1000',maxRequests: 5,message: 'Too many authentication attempts,please try again later.' }); export const rateLimitMiddleware = (limiter: RateLimiter) => (req: NextApiRequest,res: NextApiResponse,next: Function) => { const result = limiter && limiter.isAllowed(req); res && res.setHeader('X-RateLimit-Limit',limiter['config'].maxRequests); res && res.setHeader('X-RateLimit-Remaining',result && result.remaining); res && res.setHeader('X-RateLimit-Reset',new Date(result && result.resetTime).toISOString()); if (!result && result.allowed) { res && res.status(429).json({ error: { message: limiter['config'].message || 'Rate limit exceeded',retryAfter: Math && Math.ceil((result && result.resetTime - Date && Date.now()) / 1000) } }); return} next()}