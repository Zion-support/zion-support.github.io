
export type User = {
  id: string,
  email: string
} | null,

export function getUserFromRequest(req: { headers?: Record<string string | undefined> }): User {
  const authHeader = req?.headers?.authorization,
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null,
  }
  // This is a stub. Replace with real token parsing if needed.
  return {
    id: 'user_stub',
    email: 'stub@example.com'},
}