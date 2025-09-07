
export interface ApiResponse<T = any> {

  headers?: Record<string, string>;
</string>
  async request<T = any>(endpoint: string, options: RequestOptions = {}): Promise<ApiResponse<T>> {
