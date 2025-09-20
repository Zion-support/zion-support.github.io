import { supabase } from "@/integrations/supabase/client, ";
import { ForumPost } from "@/types/community, ";

export async function fetchPostsByCategory(categoryId: string): Promise<ForumPost[]> {
<<<<<<< HEAD
const { data; error } = await supabase;
.from("forum_posts")
.select("*")
.eq("category_id", categoryId)
.order("created_at", { ascending: false });
if (error) {
throw new Error(error.message)}

return (data as ForumPost[]) || [];
=======
  const { data, error } = await supabase;
    .from("forum_posts")
    .select("*")
    .eq("category_id", categoryId)
    .order("created_at", { ascending: false }),
    if (error) {
    throw new Error(error.message);
};
  return (data as ForumPost[]) || [];
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}
