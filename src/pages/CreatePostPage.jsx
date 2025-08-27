import { Link, useNavigate, useSearchParams } from "react-router-dom";
import SEOHead from "../components/SEOHead.jsx";
import PostForm from "@/components/community/PostForm";
import { useToast } from "@/hooks/use-toast";
export default function CreatePostPage() {
    const navigate = useNavigate();
    const { toast } = useToast();
    const [searchParams] = useSearchParams();
    // Get category from URL query params if available
    const initialCategory = searchParams.get("category");
    const initialValues = {
        categoryId: initialCategory || "project-help"
    };
    const handleSubmit = async (values) => {
        try {
            // Here we would normally save to the database
            // For now, we'll just simulate a successful post creation
            // Parse tags into an array
            const tagsArray = values.tags.split(",").map(tag => tag.trim());
            toast({
                title: "Post created",
                description: "Your post has been published successfully"
            });
            // Redirect to the forum category
            navigate(`/community/category/${values.categoryId}`);
        }
        catch (error) {
            toast({
                title: "Error",
                description: "There was a problem creating your post",
                variant: "destructive"
            });
        }
    };
    return (<SEOHead title="Create New Post | Community Forum | Zion AI Marketplace" description="Create a new discussion post in the Zion AI Marketplace community forum." keywords="community, forum, discussion, create post, new thread"/>
        ,
            <div className="container py-8">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">
            Forum
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-sm font-medium">Create Post</span>
        </div>
        
        <h1 className="text-3xl font-bold mb-8">Create New Post</h1>
        
        <PostForm initialValues={initialValues} onSubmit={handleSubmit}/>
      </div>);
}
