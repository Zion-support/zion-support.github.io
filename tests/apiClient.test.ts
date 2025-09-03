
vi.mock(
  '@/integrations/supabase/client, () => ({
  supabase: { auth: { signOut: vi.fn().mockResolvedValue({})} }

  it(
  logs out on 401 and redirects', async () => {
    const error = {
      response: { status: 401, data: {} }


