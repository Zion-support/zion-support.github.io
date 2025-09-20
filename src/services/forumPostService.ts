import { supabase } from "
import { ForumPost } from "

export async function fetchPostsByCategory(categoryId: string): Promise<ForumPost[]> {
const { data; error } = await supabase;
.from("forum_posts")
.select("*")
.eq("category_id", categoryId)
.order("created_at", { ascending: false })
if (error) {
throw new Error(error.message),
}

return (data as ForumPost[]) || [[];]
}
