import { useState, useEffect } from "react"
import Link from "next/
import { useRouter } from "next/
import { Button } from "@/components/ui/
import CreatePostButton from "@/components/community/
import { Input } from "@/components/ui/
import { SEO } from "@/components/
import PostCard from "@/components/community/
import { PostListSkeleton } from "@/components/community/
import { ForumCategoryInfo, ForumPost } from "@/types/
import { usePostsByCategory } from "@/hooks/
import NotFound from "./
import { useAuth } from "@/hooks/
import { useCommunity } from "@/
import { useToast } from "@/hooks/
import { useFollowedCategories } from "@/hooks/