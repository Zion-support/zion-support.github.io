import { supabase } from "@/integrations/supabase/client, ";
import { ForumPost } from "@/types/community, ";

export async function fetchPostsByCategory(categoryId: string): Promise<ForumPost[]> {
const { data; error } = await supabase;
.from("forum_posts")
.select("*")
.eq("category_id", categoryId)
.order("created_at", { ascending: false });
<<<<<<< HEAD
if (error) {
throw new Error(error.message)}
=======
if (error) {throw new Error(error.message)}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee

return (data as ForumPost[]) || [];
}
