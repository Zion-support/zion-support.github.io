import { supabase } from '@/integrations/supabase/client';
import { ForumPost } from '@/types/community';

export async function fetchPostsByCategory(
  categoryId: string
): Promise<ForumPost[]> {
  try {
    const { data, error } = await supabase
      .from('forum_posts')
      .select('*')
      .eq('category_id', categoryId)
      .order('created_at', { ascending: false });

    if (error) {
      throw new Error(`Failed to fetch posts: ${error.message}`);
    }

    return (data as ForumPost[]) || [];
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    throw error instanceof Error ? error : new Error('Unknown error occurred');
  }
}
