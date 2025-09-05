import { useState, useEffect } from "react",
import Link from "next/link",
import { useRouter } from "next/router",
import { Suspense } from "react",
import { Button } from "@/components/ui/button",
import CreatePostButton from "@/components/community/CreatePostButton",
import { Input } from "@/components/ui/input",
import { SEO } from "@/components/SEO",
import PostCard from "@/components/community/PostCard",
import { PostListSkeleton } from "@/components/community/PostCardSkeleton",
import { ForumCategoryInfo, ForumPost } from "@/types/community",
import { usePostsByCategory } from "@/hooks/usePostsByCategory",
import NotFound from "./NotFound",
import { useAuth } from "@/hooks/useAuth",
import { useCommunity } from "@/context",
import { useToast } from "@/hooks/use-toast",
import { useFollowedCategories } from "@/hooks/useFollowedCategories",
import { logInfo } from '@/utils/productionLogger',
import { MessageSquare, Briefcase, Code, FileText, Megaphone, Search } from 'lucide-react'

// Mock category data,
const categoriesInfo: Record<string ForumCategoryInfo> = {
  "getting-hired": {
    id: "getting-hired",
    name: "Getting Hired",
    description: "Tips, strategies, and questions about getting hired on the platform.",    adminOnly: false,
    icon: &quot;Briefcase&quot
  },
  &quot;project-help&quot;: {
    id: &quot;project-help&quot;,
    name: &quot;Project Help&quot;,
    description: &quot;Get help with your ongoing projects and collaboration.&quot;,
    adminOnly: false,
    icon: &quot;MessageSquare&quot
  },
  &quot;ai-tools&quot;: {
    id: &quot;ai-tools&quot;,
    name: &quot;AI Tools Discussion&quot;,
    description: &quot;Discuss AI tools, frameworks, and best practices.&quot;,
    adminOnly: false,
    icon: &quot;Code&quot
  },
  &quot;feedback&quot;: {
    id: &quot;feedback&quot;,
    name: &quot;Feedback & Feature Requests&quot;,
    description: &quot;Share your feedback and suggest new features.&quot;,
    adminOnly: false,
    icon: &quot;FileText&quot
  },
  &quot;announcements&quot;: {
    id: &quot;announcements&quot;,
    name: &quot;Announcements&quot;,
    description: &quot;Official announcements from the Zion team.&quot;,
    adminOnly: true,
    icon: &quot;Megaphone&quot
  }
},

const iconMap = {
  "Briefcase": Briefcase,
  "MessageSquare": MessageSquare,
  "Code": Code,
  "FileText": FileText,
  "Megaphone": Megaphone
},
function CategoryContent({
  categoryId,
  category,
  IconComponent,
  user}: {
  categoryId: string,
  category: ForumCategoryInfo,
  IconComponent: React.ComponentType<any>,
  user: any
}) {
  const [searchQuery, setSearchQuery] = useState(""),
  const { featuredPosts, recentPosts } = useCommunity(),
import Link from "next/link";
import CreatePostButton from "@/components/community/CreatePostButton";
import PostCard from "@/components/community/PostCard";
import NotFound from "./NotFound";

// Mock category data,
const categoriesInfo: Record<string, ForumCategoryInfo> = {_"getting-hired": {
    id: "getting-hired", name: "Getting Hired", description: "Tips, strategies, and questions about getting hired on the platform.", adminOnly: false, icon: "Briefcase"},
  "project-help": {id: "project-help", name: "Project Help", description: "Get help with your ongoing projects and collaboration.", adminOnly: false, icon: "MessageSquare"},
  "ai-tools": {id: "ai-tools", name: "AI Tools Discussion", description: "Discuss AI tools, frameworks, and best practices.", adminOnly: false, icon: "Code"},
  "feedback": {id: "feedback", name: "Feedback & Feature Requests", description: "Share your feedback and suggest new features.", adminOnly: false, icon: "FileText"},
  "announcements": {id: "announcements", name: "Announcements", description: "Official announcements from the Zion team.", adminOnly: true, icon: "Megaphone"}
};

const iconMap = {_"Briefcase": Briefcase, _"MessageSquare": MessageSquare, _"Code": Code, _"FileText": FileText, _"Megaphone": Megaphone};

function CategoryContent(_{categoryId, category, IconComponent, user}: {categoryId: string,
  category: ForumCategoryInfo,
  IconComponent: React.ComponentType<any>;
  user: unknown}) {const [searchQuery, setSearchQuery] = useState("");
  const { featuredPosts, recentPosts} = useCommunity();

  // Filter posts by category from context data,
const categoryPosts = [
    ...featuredPosts.filter(post => post.categoryId === categoryId),
    ...recentPosts.filter(post => post.categoryId === categoryId)
  ].filter(_(post, index, self) => 
    // Remove duplicates by id,
index === self.findIndex(p => p.id === post.id)
  ),

  // Apply search filter,
const filteredPosts = searchQuery 
    ? categoryPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : categoryPosts,

  const canCreatePost = user && (!category.adminOnly || user.userType === 'admin' || user.role === 'admin'),
  const { isFollowed, follow, unfollow } = useFollowedCategories(),
  const { toast } = useToast(),

  const handleFollow = () => {
    if (!user) {
      toast({ title: 'Login required', description: 'Please sign in to follow this category' }),
      return
    }
    if (isFollowed(categoryId)) {
      unfollow(categoryId)
    } else {
      follow(categoryId)
    }
  },

  logInfo('CategoryContent - categoryId:', { data: categoryId }),
  logInfo('CategoryContent - categoryPosts:', { data: categoryPosts }),
  logInfo('CategoryContent - filteredPosts:', { data: filteredPosts }),
  return (
    <div className="container py-8">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/community" className="text-sm text-muted-foreground hover:text-foreground">
          Forum
        </Link>
        <span className="text-muted-foreground">/</span>
        <span className="font-medium">{category.name}</span>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-zion-purple/10 rounded-full">
            <IconComponent className="h-8 w-8 text-zion-purple" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{category.name}</h1>
            <p className="text-muted-foreground mt-1">{category.description}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {canCreatePost && <CreatePostButton categoryId={categoryId} />}
          <Button,
variant={isFollowed(categoryId) ? 'outline' : 'default'}
            onClick={handleFollow}
          >
            {isFollowed(categoryId) ? 'Following' : 'Follow'}
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground&quot; />
          <Input,
placeholder=&quot;Search posts in this category..."
            className="pl-10"
            value={searchQuery}
            onChange={_(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-4">
        {filteredPosts.length > 0 ? (filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))
        ) : searchQuery ? (_<div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No posts found</h3>
            <p className="text-muted-foreground mb-4&quot;>
              Try adjusting your search terms or browse all posts in this category.
            </p>
            <Button variant=&quot;outline&quot; onClick={() => setSearchQuery("&quot;)}>              Clear Search
            </Button>
          </div>
        ) : (
          <div className=&quot;text-center py-12&quot;>
            <h3 className=&quot;text-lg font-medium mb-2&quot;>No posts yet</h3>
            <p className=&quot;text-muted-foreground mb-4&quot;>
              Be the first to start a conversation in this category.
            </p>
            {canCreatePost ? (
              <CreatePostButton categoryId={categoryId} />
            ) : (
              <Button disabled>
                Create Post
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default function ForumCategoryPage() {
  const router = useRouter(),
  const { categoryId } = router.query as { categoryId: string },
  const { user } = useAuth(),

  // Check if the category exists and user has access,
const category = categoryId ? categoriesInfo[categoryId] : null,
  const IconComponent = category ? iconMap[category.icon as keyof typeof iconMap] : null,
  // Check access for admin-only categories,
const hasAccess = category && (
    !category.adminOnly || 
    (user && (user.userType === 'admin' || user.role === 'admin'))
  ),

  useEffect_(() => {_// Add a small delay to ensure router is ready,
if (categoryId && category) {
      logInfo('ForumCategoryPage - categoryId changed:', { data: categoryId })    }
  }, [categoryId, category]),

  if (!categoryId || !category) {
    return <NotFound />
  }

  if (!hasAccess) {
    return (
      <div className=&quot;container py-8&quot;>
        <div className=&quot;text-center py-12&quot;>
          <h1 className=&quot;text-2xl font-bold mb-4&quot;>Access Restricted</h1>
          <p className=&quot;text-muted-foreground mb-4&quot;>            This category is only accessible to administrators.
          </p>
          <Button asChild>
            <Link href=&quot;/community&quot;>Back to Community</Link>
          </Button>
        </div>
      </div>
    )
  }

  if (!IconComponent) {
    return <NotFound />
  }
  return (
    <>
      <SEO,
title={_`${category.name} | Community Forum | Zion AI Marketplace`}
        description={category.description}
        keywords={_`community, forum, _${category.name.toLowerCase()}, discussion`}
        canonical={_`https://app.ziontechgroup.com/community/category/${categoryId}`}
      />
      
      <CategoryContent,
categoryId={categoryId}
        category={category}
        IconComponent={IconComponent}
        user={user}
      />
    </>
  )
}
