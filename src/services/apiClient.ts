export interface ApiResponse<T> {
	data: T;
	status: number;
}

export async function get<T = unknown>(url: string): Promise<ApiResponse<T>> {
	return { data: {} as T, status: 200 };
}

export async function post<T = unknown>(url: string, body?: unknown): Promise<ApiResponse<T>> {
	return { data: {} as T, status: 200 };
}
