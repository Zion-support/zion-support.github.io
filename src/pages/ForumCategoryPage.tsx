import { logInfo } from '@/utils/productionLogger'
import { MessageSquare, Briefcase, Code, FileText, Megaphone, Search } from 'lucide-react'
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

    id: "getting-hired"
    name: "Getting Hired"
// Mock category data
const categoriesInfo: Record<string ForumCategoryInfo> = {
  "getting-hired": {
    id: "getting-hired",
    name: "Getting Hired",
    description: "Tips, strategies, and questions about getting hired on the platform."
    adminOnly: false
    icon: "Briefcase"
  }
    id: "getting-hired",
    name: "Getting Hired",
    description: "Tips, strategies, and questions about getting hired on the platform.",
    adminOnly: false,
    icon: "Briefcase"
  },


  },


import { log_info } from '@/utils / production_logger';
import { MessageSquare, Briefcase, Code, FileText, Megaphone, Search } from 'lucide-react';
// Mock category data;
const categories_info: Record < string, ForumCategoryInfo> = {
  "getting - hired": {
    id: "getting - hired",
    name: "Getting Hired",
    description: "Tips, strategies, and questions about getting hired on the platform.";
    admin_only: false,
    icon: "Briefcase";
  categoryId,
  category,
  IconComponent,


    ...recentPosts.filter(post => post.categoryId === categoryId)
  ].filter((post, index, self,) =>
    // Remove duplicates by id
    index === self.findIndex(p => p.id === post.id)
  )
  )


  const handleFollow = () => {
    if (!user) {
      toast({ title: 'Login required', description: 'Please sign in to follow this category' }),



import React from 'react';
import { logInfo } from '@/utils/productionLogger';
import { MessageSquare, Briefcase, Code, FileText, Megaphone, Search } from 'lucide-react';
import { logInfo } from '@/utils/productionLogger';


ursor/fix-website-loading-errors-and-merge-6662
;
