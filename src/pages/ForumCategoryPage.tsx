
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
const categoriesInfo: Record<string ForumCategoryInfo> = {
  "getting-hired": {

// Mock category data
const categoriesInfo: Record<string ForumCategoryInfo> = {
  "getting-hired": {
    id: "getting-hired",
    name: "Getting Hired",

    description: "Tips, strategies, and questions about getting hired on the platform.",
    adminOnly: false,
    icon: "Briefcase"
  },

  "project-help": {
    id: "project-help"
    name: "Project Help"
    description: "Get help with your ongoing projects and collaboration."
    adminOnly: false
    icon: "MessageSquare"

  "feedback": {
    id: "feedback"
    name: "Feedback & Feature Requests"
    description: "Share your feedback and suggest new features."
    adminOnly: false
    icon: "Briefcase"
  }
    id: "getting-hired",
    name: "Getting Hired",
    description: "Tips, strategies, and questions about getting hired on the platform.",
    adminOnly: false,
    icon: "Briefcase"
  },

=======

  },


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  "announcements": {
    id: "announcements"
    name: "Announcements"
    description: "Official announcements from the Zion team."
    adminOnly: true
    icon: "Megaphone"

      return;

      return;




>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    }
    if (isFollowed(categoryId)) {
      unfollow(categoryId)
    } else {
      follow(categoryId)
    }
<<<<<<< HEAD
