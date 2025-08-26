
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import CreatePostButton from "@/components/community/CreatePostButton";
import { Input } from "@/components/ui/input";
import { SEO } from "@/components/SEO";
import PostCard from "@/components/community/PostCard";
import { ForumCategoryInfo } from "@/types/community";
import { usePostsByCategory } from "@/hooks/usePostsByCategory";
import NotFound from "./NotFound";
import { useAuth } from "@/hooks/useAuth";
import {
  MessageSquare,
  Briefcase,
  Code,
  FileText,
  Megaphone,
  Search
} from "@/components/icons";

// Mock category data
const categoriesInfo: Record<string, ForumCategoryInfo> = {
  "getting-hired": {
    id: "getting-hired",
    name: "Getting Hired",
    description: "Tips, strategies, and questions about getting hired on the platform.",
    postCount: 45,
    adminOnly: false,
    icon: "Briefcase"
  },
  "project-help": {
    id: "project-help",
    name: "Project Help",
    description: "Get help with your ongoing projects and collaboration.",
    postCount: 67,
    adminOnly: false,
    icon: "MessageSquare"
  },
  "ai-tools": {
    id: "ai-tools",
    name: "AI Tools Discussion",
    description: "Discuss AI tools, frameworks, and best practices.",
    postCount: 89,
    adminOnly: false,
    icon: "Code"
  },
  "feedback": {
    id: "feedback",
    name: "Feedback & Feature Requests",
    description: "Share your feedback and suggest new features.",
    postCount: 23,
    adminOnly: false,
    icon: "FileText"
  },
  "announcements": {
    id: "announcements",
    name: "Announcements",
    description: "Official announcements from the Zion team.",
    postCount: 12,
    adminOnly: true,
    icon: "Megaphone"
  }
};


const iconMap = {
  "Briefcase": Briefcase,
  "MessageSquare": MessageSquare,
  "Code": Code,
  "FileText": FileText,
  "Megaphone": Megaphone
};

function CategoryContent({
  categoryId,
  category,
  IconComponent,
  user,
}: {
  categoryId: string;
  category: ForumCategoryInfo;
  IconComponent: React.ComponentType<any>;
  user: any;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    posts = [],
    loading,
  } = usePostsByCategory(categoryId);
  const errorMessage = null;

  const filteredPosts = searchQuery
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : posts;

  const canCreatePost =
    categoryId !== "announcements" || (user?.userType === "admin" || user?.role === "admin");

  return (
    <AppLayout>
      <SEO
        title={`${category.name} | Community Forum | Zion AI Marketplace`}
        description={category.description}
        keywords={`community, forum, ${category.id}, discussion, AI marketplace, questions, answers`}
        canonical={`https://app.ziontechgroup.com/community/category/${category.id}`}
      />

      <Suspense fallback={<div className="text-center py-16">Loading...</div>}>
        <CategoryContent
          categoryId={categoryId}
          category={category}
          IconComponent={IconComponent}
          user={user}
        />
      </Suspense>
    </>
  );
}
