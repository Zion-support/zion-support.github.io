import { supabase } from "@/integrations/supabase/client, ";
import { ForumPost } from "@/types/community, ";

export async function fetchPostsByCategory(categoryId: string): Promise<ForumPost[]> {
<<<<<<< HEAD
const { data, error } = await supabase;
=======
const { data; error } = await supabase;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
.from("forum_posts")
.select("*")
.eq("category_id", categoryId)
.order("created_at", { ascending: false });
if (error) {throw new Error(error.message)}
<<<<<<< HEAD
=======
if (error) {
throw new Error(error.message)}
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840

return (data as ForumPost[]) || [];
}
