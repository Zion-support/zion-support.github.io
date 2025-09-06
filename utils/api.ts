 Define RequestInit if not available
interface File extends Blob {
  name: string;
  last_modified: number;

interface Blob {
  size: number;
  type: string;
  slice (start?: number, end?: number, content_type?: string): Blob;

interface FormData {
  append (name: string, value: string | Blob): void;
  delete (name: string): void;
  get (name: string): string | File | null;
  get_all (name: string): (string | File)[];
  has (name: string): boolean;
  set (name: string, value: string | Blob): void;

interface URLSearchParams {
  append (name: string, value: string): void;
  delete (name: string): void;
  get (name: string): string | null;
  get_all (name: string): string[];
  has (name: string): boolean;
  set (name: string, value: string): void;
  to_string (): string;

type BodyInit = string | Blob | ArrayBuffer | FormData | URLSearchParams;
type RequestCache = 'default' | 'no - store' | 'reload' | 'no - cache' | 'force - cache' | 'only - if - cached'
type RequestCredentials = 'omit' | 'same - origin' | 'include'
type RequestMode = 'navigate' | 'same-origin' | 'no-cors' | 'cors'
type RequestRedirect = 'follow' | 'error' | 'manual'
type ReferrerPolicy = 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https: any
declare global { interface RequestInit { timeout?: number} interface ApiResponse<T = unknown> { data?: T; error?: string; success: boolean} interface RequestOptions extends RequestInit { timeout?: number} class ApiClient { private baseUrl: string; private defaultTimeout: number; constructor(baseUrl: string = '',defaultTimeout: number = 10000) { this.baseUrl = baseUrl; this.defaultTimeout = defaultTimeout} private async request<T>( endpoint: string,options: RequestOptions = {} ): Promise<ApiResponse<T>{ const { timeout = this.defaultTimeout,...fetchOptions } = options; try { const controller = new AbortController(); const timeoutId = setTimeout() => controller.abort(),timeout); const response = await fetch(`${this.baseUrl}${endpoint}`,{ ...fetchOptions,signal: controller.signal,headers: { 'Content-Type': any
declare global { interface RequestInit { timeout?: number} interface ApiResponse<T = unknown> { data?: T; error?: string; success: boolean} interface RequestOptions extends RequestInit { timeout?: number} class ApiClient { private baseUrl: string; private defaultTimeout: number; constructor(baseUrl: string = '',defaultTimeout: number = 10000) { this.baseUrl = baseUrl; this.defaultTimeout = defaultTimeout} private async request<T>( endpoint: string,options: RequestOptions = {} ): Promise<ApiResponse<T>{ const { timeout = this.defaultTimeout,...fetchOptions } = options; try { const controller = new AbortController(); const timeoutId = setTimeout() => controller.abort(),timeout); const response = await fetch(`${this.baseUrl}${endpoint}`,{ ...fetchOptions,signal: controller.signal,headers: { 'Content-Type': any