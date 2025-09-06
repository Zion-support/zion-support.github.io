<<<<<<< HEAD
  "project-help": {
    id: "project-help"
    name: "Project Help"
    description: "Get help with your ongoing projects and collaboration."
    adminOnly: false
    icon: "MessageSquare"
  "feedback": {
=======
"feedback": {
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    id: "feedback"
    name: "Feedback & Feature Requests"
    description: "Share your feedback and suggest new features."
    adminOnly: false
    icon: "FileText"


<<<<<<< HEAD
=======
  },


>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  "announcements": {
    id: "announcements"
    name: "Announcements"
    description: "Official announcements from the Zion team."
    adminOnly: true
    icon: "Megaphone"
<<<<<<< HEAD


=======
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


>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  user}: {
  categoryId: string
  category: ForumCategoryInfo
  IconComponent: React.ComponentType<any>
  user: any
}) {



  const [searchQuery, setSearchQuery] = useState(""),
  const { featuredPosts, recentPosts } = useCommunity(),

  // Filter posts by category from context data
  const categoryPosts = [
    ...featuredPosts.filter(post => post.categoryId === categoryId),
<<<<<<< HEAD
=======



>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    ...recentPosts.filter(post => post.categoryId === categoryId)
  ].filter((post, index, self) => 
    // Remove duplicates by id
    index === self.findIndex(p => p.id === post.id)

<<<<<<< HEAD
=======

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  // Apply search filter
  const filteredPosts = searchQuery
    ? categoryPosts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) |
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) |
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
<<<<<<< HEAD
=======


>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  const handleFollow = () => {
    if (!user) {
      toast({ title: 'Login required', description: 'Please sign in to follow this category' }),

    : categoryPosts,

  const canCreatePost = user && (!category.adminOnly || user.userType === 'admin' || user.role === 'admin'),
  const { isFollowed, follow, unfollow } = useFollowedCategories(),
  const { toast } = useToast(),

<<<<<<< HEAD
=======



>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  const handleFollow = () => {
    if (!user) {
      toast({ title: 'Login required', description: 'Please sign in to follow this category' })
      return


import React from 'react';
import { logInfo } from '@/utils/productionLogger';
import { MessageSquare, Briefcase, Code, FileText, Megaphone, Search } from 'lucide-react';
import { logInfo } from '@/utils/productionLogger';
<<<<<<< HEAD
=======


>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import { useState, useEffect } from "react",;
import Link from "next/link",;
import { useRouter } from "next/router",;
import { Suspense } from "react",;
import { Button } from "@/components/ui/button",;
import CreatePostButton from "@/components/community/CreatePostButton",;
import { Input } from "@/components/ui/input",;
import { SEO } from "@/components/SEO",;
import PostCard from "@/components/community/PostCard",;
import { PostListSkeleton } from "@/components/community/PostCardSkeleton",;
import { ForumCategoryInfo, ForumPost } from "@/types/community",;
import { usePostsByCategory } from "@/hooks/usePostsByCategory",;
import NotFound from "./NotFound",;
import { useAuth } from "@/hooks/useAuth",;
import { useCommunity } from "@/context",;
import { useToast } from "@/hooks/use-toast",;
import { useFollowedCategories } from "@/hooks/useFollowedCategories",;
import { logInfo } from '@/utils/productionLogger',;
import { MessageSquare, Briefcase, Code, FileText, Megaphone, Search } from 'lucide-react';
// Mock category data;
const categoriesInfo: Record<string ForumCategoryInfo> = {;
  "getting-hired": {;
    id: "getting-hired",;
    name: "Getting Hired",;
    description: "Tips, strategies, and questions about getting hired on the platform.",;
    adminOnly: false,;
    icon: "Briefcase";
<<<<<<< HEAD
=======
  },;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  "project-help": {;
    id: "project-help",;
    name: "Project Help",;
    description: "Get help with your ongoing projects and collaboration.",;
    adminOnly: false,;
    icon: "MessageSquare";
<<<<<<< HEAD
=======
  },;
  "ai-tools": {;
    id: "ai-tools",;
    name: "AI Tools Discussion",;
    description: "Discuss AI tools, frameworks, and best practices.",;
    adminOnly: false,;
    icon: "Code";
  },;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  "feedback": {;
    id: "feedback",;
    name: "Feedback & Feature Requests",;
    description: "Share your feedback and suggest new features.",;
    adminOnly: false,;
    icon: "FileText";
<<<<<<< HEAD
=======
  },;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  "announcements": {;
    id: "announcements",;
    name: "Announcements",;
    description: "Official announcements from the Zion team.",;
    adminOnly: true,;
    icon: "Megaphone";
  }
<<<<<<< HEAD
      return;
=======
},;
const iconMap = {;
  "Briefcase": Briefcase,;
  "MessageSquare": MessageSquare,;
  "Code": Code,;
  "FileText": FileText,;
  "Megaphone": Megaphone;
},;
function CategoryContent({;
  categoryId,;
  category,;
  IconComponent,;
  user}: {;
  categoryId: string,;
  category: ForumCategoryInfo,;
  IconComponent: React.ComponentType<any>,;
  user: any;
}) {;
  const [searchQuery, setSearchQuery] = useState(""),;
  const { featuredPosts, recentPosts } = useCommunity(),;
  // Filter posts by category from context data;
  const categoryPosts = [;
    ...featuredPosts.filter(post => post.categoryId === categoryId),;
    ...recentPosts.filter(post => post.categoryId === categoryId);
  ].filter((post, index, self) =>;
    // Remove duplicates by id;
    index === self.findIndex(p => p.id === post.id);
  ),;
  // Apply search filter;
  const filteredPosts = searchQuery;
    ? categoryPosts.filter(post =>;
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      );
    : categoryPosts,;
  const canCreatePost = user && (!category.adminOnly || user.userType === 'admin' || user.role === 'admin'),;
  const { isFollowed, follow, unfollow } = useFollowedCategories(),;
  const { toast } = useToast(),;
  const handleFollow = () => {;
    if (!user) {;
      toast({ title: 'Login required', description: 'Please sign in to follow this category' }),;
      return;




>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    }
    if (isFollowed(categoryId)) {
      unfollow(categoryId)
    } else {
      follow(categoryId)
    }
<<<<<<< HEAD
  );
}
;
export default function ForumCategoryPage() {;
  const router = useRouter(),;
  const { categoryId } = router.query as { categoryId: string },;
  const { user } = useAuth(),;
  // Check if the category exists and user has access;
  const category = categoryId ? categoriesInfo[categoryId] : null,;
  const IconComponent = category ? iconMap[category.icon as keyof typeof iconMap] : null,;
  // Check access for admin-only categories;
  const hasAccess = category && (;
    !category.adminOnly ||;
    (user && (user.userType === 'admin' || user.role === 'admin'));
  );
  logInfo('CategoryContent - categoryId:', { data: categoryId }),;
  logInfo('CategoryContent - categoryPosts:', { data: categoryPosts }),;
  logInfo('CategoryContent - filteredPosts:', { data: filteredPosts }),;
<<<<<<< HEAD
=======
  return (;
    <div className="container py-8">;
      <div className="flex items-center gap-3 mb-6">;
        <Link href="/community" className="text-sm text-muted-foreground hover:text-foreground">;
          Forum;
        </Link>;
        <span className="text-muted-foreground">/</span>;
        <span className="font-medium">{category.name}</span>;
      </div>;
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">;
        <div className="flex items-center gap-4">;
          <div className="p-3 bg-zion-purple/10 rounded-full">;
            <IconComponent className="h-8 w-8 text-zion-purple" />;
          </div>;
          <div>;
            <h1 className="text-3xl font-bold">{category.name}</h1>;
            <p className="text-muted-foreground mt-1">{category.description}</p>;
          </div>;
        </div>;
        <div className="flex items-center gap-2">;
          {canCreatePost && <CreatePostButton categoryId={categoryId} />}
          <Button;
            variant={isFollowed(categoryId) ? 'outline' : 'default'}
            onClick={handleFollow}
          >;
            {isFollowed(categoryId) ? 'Following' : 'Follow'}
          </Button>
        </div>
      </div>

/**
 * CategoryContent - Function description
 */
function CategoryContent() {
  const [search_query, setSearchQuery] = useState ("");
  const { featured_posts, recent_posts } = use_community ();
  // Filter posts by category from context data;
  const category_posts = [;
    ...featured_posts.filter (post => post.category_id === category_id);
    ...recent_posts.filter (post => post.category_id === category_id);
  ].filter ((post, index, self, ) =>;
    // Remove duplicates by id;
    index === self.find_index (p => p.id === post.id));
  // Apply search filter;
  const filtered_posts = search_query;
    ? category_posts.filter (post =>;
        post.title.toLowerCase ().includes (search_query.toLowerCase ()) ||;
        post.content.toLowerCase ().includes (search_query.toLowerCase ()) ||;
        post.tags.some (tag => tag.toLowerCase ().includes (search_query.toLowerCase ())));
    : category_posts;
  const canCreatePost = user && (!category.admin_only || user.user_type === 'admin' || user.role === 'admin');
  const { is_followed, follow, unfollow } = useFollowedCategories ();
  const { toast } = use_toast ();
  const handle_follow = () =>: any {
    // Check condition
if ( {) {
  $2
}
      toast ({ title: 'Login required', description: 'Please sign in to follow this category' }),
      return;
    }
    if () {) {
  $2
}
      unfollow (category_id);
    } else {
      follow (category_id);
  useEffect(() => {;
    // Add a small delay to ensure router is ready;
    if (categoryId && category) {;
      logInfo('ForumCategoryPage - categoryId changed:', { data: categoryId });
    }
  }
  log_info ('CategoryContent - category_id:', { data: category_id }),
  log_info ('CategoryContent - category_posts:', { data: category_posts }),
  log_info ('CategoryContent - filtered_posts:', { data: filtered_posts }),
  const category = category_id ? categories_info[category_id] : null;
  const IconComponent = category ? icon_map[category.icon as keyof typeof icon_map] : null;
}
  );
}
;
=======

  };

  logInfo('CategoryContent - categoryId:', { data: categoryId }),;
  logInfo('CategoryContent - categoryPosts:', { data: categoryPosts }),;
  logInfo('CategoryContent - filteredPosts:', { data: filteredPosts }),;
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
  const category = categoryId ? categoriesInfo[categoryId] : null;
  const IconComponent = category ? iconMap[category && category.icon as keyof typeof iconMap] : null;

}
  );

}
<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
