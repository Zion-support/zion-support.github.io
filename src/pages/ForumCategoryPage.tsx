import { useState,,, useEffect,,  } from "react",
import Link from "next/link",
import { useRouter,,  } from "next/router",
import { Suspense,,  } from "react",
import { Button,,  } from "@/components/ui/button",
import CreatePostButton from "@/components/community/CreatePostButton",
import { Input,,  } from "@/components/ui/input",
import { SEO,,  } from "@/components/SEO",
import PostCard from "@/components/community/PostCard",
import { PostListSkeleton,,  } from "@/components/community/PostCardSkeleton",
import { ForumCategoryInfo,,, ForumPost,,  } from "@/types/community",
import { usePostsByCategory,,  } from "@/hooks/usePostsByCategory",
import NotFound from "./NotFound",
import { useAuth,,  } from "@/hooks/useAuth",
import { useCommunity,,  } from "@/context",
import { useToast,,  } from "@/hooks/use-toast",
import { useFollowedCategories,,  } from "
import import { logInfo,,  } from '@/utils/productionLogger';
import { MessageSquare,,, Briefcase,,, Code,,, FileText,,, Megaphone,,, Search,,  } from 'lucide-react'
// Mock category data,
const categoriesInfo: Record<string ForumCategoryInfo> = {
  "getting-hired": {
  )
}