
import { useState } from "react";
import CreatePostButton from "@/components/community/CreatePostButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SEO } from "@/components/SEO";
<<<<<<< HEAD
<<<<<<< HEAD
// import ForumCategories from "@/components/community/ForumCategories";
=======
=======
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
<<<<<<< HEAD
import ForumCategories from "@/components/community/ForumCategories";
=======
// import ForumCategories from "@/components/community/ForumCategories";
>>>>>>> origin/main
<<<<<<< HEAD
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
=======
// import ForumCategories from "@/components/community/ForumCategories";
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
import PostCard from "@/components/community/PostCard";
import { useAuth } from "@/hooks/useAuth";
import { ForumPost } from "@/types/community";

// Mock data for featured posts
const featuredPosts: ForumPost[] = [
  {
    id: "1",
    title: "Best practices for AI model fine-tuning",
    content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...",
    authorId: "user1",
    authorName: "Alex Johnson",
    authorAvatar: "https://i.pravatar.cc/150?img=3",
    authorRole: "Verified Talent",
    categoryId: "ai-tools",
    tags: ["machine-learning", "fine-tuning", "gpt"],
    createdAt: "2025-04-01T12:00:00Z",
    updatedAt: "2025-04-01T12:00:00Z",
    upvotes: 48,
    downvotes: 2,
    replyCount: 12,
    isAnswered: true,
    isFeatured: true
  },
  {
    id: "2",
    title: "How to build an effective AI talent profile?",
    content: "I'm looking to improve my profile to get more client attention. What are the key elements I should focus on?",
    authorId: "user2",
    authorName: "Sarah Chen",
    authorAvatar: "https://i.pravatar.cc/150?img=5",
    categoryId: "getting-hired",
    tags: ["profile", "tips", "hiring"],
    createdAt: "2025-04-03T09:15:00Z",
    updatedAt: "2025-04-03T09:15:00Z",
    upvotes: 32,
    downvotes: 0,
    replyCount: 8,
    isPinned: true,
    isFeatured: true
  }
];

// Mock data for recent posts
const recentPosts: ForumPost[] = [
  {
    id: "3",
    title: "Looking for feedback on my automated testing approach",
    content: "I've set up a CI/CD pipeline with the following testing strategy...",
    authorId: "user3",
    authorName: "Michael Wong",
    categoryId: "project-help",
    tags: ["testing", "automation", "ci-cd"],
    createdAt: "2025-04-10T14:30:00Z",
    updatedAt: "2025-04-10T14:30:00Z",
    upvotes: 5,
    downvotes: 0,
    replyCount: 2
  },
  {
    id: "4",
    title: "Feature request: Team collaboration tools",
    content: "It would be really helpful if we could have built-in tools for team collaboration...",
    authorId: "user4",
    authorName: "Emma Davis",
    categoryId: "feedback",
    tags: ["feature-request", "teams", "collaboration"],
    createdAt: "2025-04-09T18:45:00Z",
    updatedAt: "2025-04-09T18:45:00Z",
    upvotes: 12,
    downvotes: 1,
    replyCount: 3
  },
  {
    id: "5",
    title: "How to handle client scope creep?",
    content: "I'm working on a project where the client keeps adding requirements...",
    authorId: "user5",
    authorName: "David Lin",
    categoryId: "project-help",
    tags: ["client-management", "scope", "projects"],
    createdAt: "2025-04-08T10:20:00Z",
    updatedAt: "2025-04-08T10:20:00Z",
    upvotes: 24,
    downvotes: 0,
    replyCount: 7,
    isAnswered: true
  }
];

export default function CommunityPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("categories");
  
  return (
    <>
      <SEO
        title="Community Forum | Zion AI Marketplace"
        description="Join the Zion AI Marketplace community forum. Ask questions, share knowledge, and connect with other AI professionals."
        keywords="community, forum, discussion, AI marketplace, questions, answers"
        canonical="https://app.ziontechgroup.com/community"
      />
      
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Community Forum</h1>
            <p className="text-muted-foreground mt-2">
              Join the conversation, ask questions, and share your knowledge
            </p>
          </div>
          
          <CreatePostButton />
        </div>
        
<<<<<<< HEAD
<<<<<<< HEAD
        {/* <Tabs defaultValue="categories" value={activeTab} onValueChange={setActiveTab} className="mb-8">
=======
=======
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
<<<<<<< HEAD
        <Tabs defaultValue="categories" value={activeTab} onValueChange={setActiveTab} className="mb-8">
=======
        {/* <Tabs defaultValue="categories" value={activeTab} onValueChange={setActiveTab} className="mb-8">
>>>>>>> origin/main
<<<<<<< HEAD
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
=======
        {/* <Tabs defaultValue="categories" value={activeTab} onValueChange={setActiveTab} className="mb-8">
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
          <TabsList className="mb-6">
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
          </TabsList>
          
          <TabsContent value="categories">
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="text-center py-8">
              <p className="text-muted-foreground">Forum categories coming soon...</p>
            </div>
=======
=======
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
<<<<<<< HEAD
            <ForumCategories />
=======
            <div className="text-center py-8">
              <p className="text-muted-foreground">Forum categories coming soon...</p>
            </div>
>>>>>>> origin/main
<<<<<<< HEAD
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
=======
            <div className="text-center py-8">
              <p className="text-muted-foreground">Forum categories coming soon...</p>
            </div>
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
          </TabsContent>
          
          <TabsContent value="featured">
            <div className="space-y-4">
              {featuredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="recent">
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </TabsContent>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        </Tabs>
=======
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
<<<<<<< HEAD
        </Tabs>
=======
=======
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
        </Tabs> */}
        
        <div className="mb-8">
          <div className="flex space-x-4 mb-6">
            <button 
              className={`px-4 py-2 rounded ${activeTab === 'categories' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('categories')}
            >
              Categories
            </button>
            <button 
              className={`px-4 py-2 rounded ${activeTab === 'featured' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('featured')}
            >
              Featured
            </button>
            <button 
              className={`px-4 py-2 rounded ${activeTab === 'recent' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('recent')}
            >
              Recent
            </button>
          </div>
          
          {activeTab === 'categories' && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Forum categories coming soon...</p>
            </div>
          )}
          
          {activeTab === 'featured' && (
            <div className="space-y-4">
              {featuredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
          
          {activeTab === 'recent' && (
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
>>>>>>> origin/main
=======
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
      </div>
    </>
  );
}
