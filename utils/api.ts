

export interface ApiResponse<T = any> {
</T>
  headers?: Record<string, string>;
</string>
  async request<T = any>(endpoint: string, options: RequestOptions = {}): Promise<ApiResponse<T>> {
</T>

