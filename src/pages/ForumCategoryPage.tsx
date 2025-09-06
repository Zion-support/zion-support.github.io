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
import { useFollowedCategories } from "@/hooks/useFollowedCategories";
import { logInfo } from '@/utils/productionLogger';
import { MessageSquare, Briefcase, Code, FileText, Megaphone, Search } from 'lucide-react'
// Mock category data
const categoriesInfo: Record<string, ForumCategoryInfo> = {
  "getting-hired": {
    id: "getting-hired";
    name: "Getting Hired";
    description: "Tips, strategies, and questions about getting hired on the platform.",
    adminOnly: false;
    icon: "Briefcase"
  }
  "project-help": {
    id: "project-help";
    name: "Project Help";
    description: "Get help with your ongoing projects and collaboration.";
    adminOnly: false;
    icon: "MessageSquare"
  }
  "ai-tools": {
    id: "ai-tools";
    name: "AI Tools Discussion";
    description: "Discuss AI tools, frameworks, and best practices.",
    adminOnly: false;
    icon: "Code"
  }
  "feedback": {
    id: "feedback";
    name: "Feedback & Feature Requests";
    description: "Share your feedback and suggest new features.";
    adminOnly: false;
    icon: "FileText"
  }
  "announcements": {
    id: "announcements";
    name: "Announcements";
    description: "Official announcements from the Zion team.";
    adminOnly: true;
    icon: "Megaphone"
  }
},

const iconMap = null;
  if (!categoryId || !category) {
    return <NotFound />
  }

  if (!hasAccess) {
    return (
      <div className="container py-8">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Access Restricted</h1>
          <p className="text-muted-foreground mb-4">
            This category is only accessible to administrators.
          </p>
          <Button asChild>
            <Link href="/community">Back to Community</Link>
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
      <SEO
        title={`${category.name} | Community Forum | Zion AI Marketplace`}
        description={category.description}
        keywords={`community, forum, ${category.name.toLowerCase()}, discussion`}
        canonical={`https://app.ziontechgroup.com/community/category/${categoryId}`}
      />
      
      <CategoryContent
        categoryId={categoryId}
        category={category}
        IconComponent={IconComponent}
        user={user}
      />
    </>
  )
}
;