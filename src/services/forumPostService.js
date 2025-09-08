import { supabase } from '@/integrations/supabase/client';
export async function fetchPostsByCategory(categoryId) {
    const { data, error } = await supabase
        .from('forum_posts')
        .select('*')
        .eq('category_id', categoryId)
        .order('created_at', { ascending: false });
    if (error) {
        throw new Error(error.message);
    }
    return data || [];
}
