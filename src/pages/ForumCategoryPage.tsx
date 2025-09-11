<<<<<<< HEAD
<<<<<<< HEAD
import { logInfo } from '@/utils/productionLogger'
import { MessageSquare, Briefcase, Code, FileText, Megaphone, Search } from 'lucide-react'
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


// Mock category data
const categoriesInfo: Record<string ForumCategoryInfo> = {
  "getting-hired": {


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
  "project-help": {
    id: "project-help"
    name: "Project Help"
    description: "Get help with your ongoing projects and collaboration."
    adminOnly: false
    icon: "MessageSquare"
  }
  "ai-tools": {
    id: "ai-tools"
    name: "AI Tools Discussion"
    description: "Discuss AI tools, frameworks, and best practices."
    adminOnly: false
    icon: "Code"
  }
  },
  "ai-tools": {
    id: "ai-tools",
    name: "AI Tools Discussion",
    description: "Discuss AI tools, frameworks, and best practices.",
    adminOnly: false,
    icon: "Code"
  },
  "feedback": {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
"feedback": {
    id: "feedback"
    name: "Feedback & Feature Requests"
    description: "Share your feedback and suggest new features."
    adminOnly: false
    icon: "FileText"
<<<<<<< HEAD
<<<<<<< HEAD
  }
ursor/fix-website-loading-errors-and-merge-6662
  }
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },


  "announcements": {
<<<<<<< HEAD
=======
    id: "announcements"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    name: "Announcements"
    description: "Official announcements from the Zion team."
    adminOnly: true
    icon: "Megaphone"
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
const iconMap = {
  "Briefcase": Briefcase
  "MessageSquare": MessageSquare
  "Code": Code
  "FileText": FileText
  "Megaphone": Megaphone
<<<<<<< HEAD
}
function CategoryContent({
  categoryId
  category
  IconComponent
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  category: ForumCategoryInfo
  IconComponent: React.ComponentType<any>
  user: any
}) {
<<<<<<< HEAD
  const [searchQuery, setSearchQuery] = useState("")
  const { featuredPosts, recentPosts } = useCommunity()
  // Filter posts by category from context data
  const categoryPosts = [
    ...featuredPosts.filter(post => post.categoryId === categoryId)
    ...recentPosts.filter(post => post.categoryId === categoryId)
  ].filter((post, index, self,) =>
    // Remove duplicates by id
    index === self.findIndex(p => p.id === post.id)
  )
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [searchQuery, setSearchQuery] = useState(""),
  const { featuredPosts, recentPosts } = useCommunity(),

  // Filter posts by category from context data
  const categoryPosts = [
    ...featuredPosts.filter(post => post.categoryId === categoryId),
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    ...recentPosts.filter(post => post.categoryId === categoryId)
  ].filter((post, index, self) => 
    // Remove duplicates by id
    index === self.findIndex(p => p.id === post.id)
<<<<<<< HEAD
  ].filter((post, index, self) => 
    // Remove duplicates by id
    index === self.findIndex(p => p.id === post.id)
  ),

  ),

  )
  ),
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  // Apply search filter
    ? categoryPosts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) |
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) |
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
<<<<<<< HEAD
    : categoryPosts
  const canCreatePost = user && (!category.adminOnly |user.userType === 'admin' |user.role === 'admin')
  const { isFollowed, follow, unfollow } = useFollowedCategories()
  const { toast } = useToast()
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleFollow = () => {
    if (!user) {
      toast({ title: 'Login required', description: 'Please sign in to follow this category' }),

    : categoryPosts,

  const canCreatePost = user && (!category.adminOnly || user.userType === 'admin' || user.role === 'admin'),
  const { isFollowed, follow, unfollow } = useFollowedCategories(),
  const { toast } = useToast(),

<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleFollow = () => {
    if (!user) {
      toast({ title: 'Login required', description: 'Please sign in to follow this category' })
      return


import React from 'react';
import { logInfo } from '@/utils/productionLogger';
import { MessageSquare, Briefcase, Code, FileText, Megaphone, Search } from 'lucide-react';
import { logInfo } from '@/utils/productionLogger';


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
  },;
  "project-help": {;
    id: "project-help",;
    name: "Project Help",;
    description: "Get help with your ongoing projects and collaboration.",;
    adminOnly: false,;
    icon: "MessageSquare";
  },;
  "ai-tools": {;
    id: "ai-tools",;
    name: "AI Tools Discussion",;
    description: "Discuss AI tools, frameworks, and best practices.",;
    adminOnly: false,;
    icon: "Code";
  },;
  "feedback": {;
    id: "feedback",;
    name: "Feedback & Feature Requests",;
    description: "Share your feedback and suggest new features.",;
    adminOnly: false,;
    icon: "FileText";
  },;
  "announcements": {;
    id: "announcements",;
    name: "Announcements",;
    description: "Official announcements from the Zion team.",;
    adminOnly: true,;
    icon: "Megaphone";
  }
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
<<<<<<< HEAD
      return;
=======




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
    if (isFollowed(categoryId)) {
      unfollow(categoryId)
    } else {
      follow(categoryId)
    }
<<<<<<< HEAD
  )
}
  }
  logInfo('CategoryContent - categoryId:', { data: categoryId })
  logInfo('CategoryContent - categoryPosts:', { data: categoryPosts })
  logInfo('CategoryContent - filteredPosts:', { data: filteredPosts })
  const category = categoryId ? categoriesInfo[categoryId] : null
  const IconComponent = category ? iconMap[category.icon as keyof typeof iconMap] : null
}

  )
}
  },;
  logInfo('CategoryContent - categoryId:', { data: categoryId }),;
  logInfo('CategoryContent - categoryPosts:', { data: categoryPosts }),;
  logInfo('CategoryContent - filteredPosts:', { data: filteredPosts }),;
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

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search posts in this category..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))
        ) : searchQuery ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No posts found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or browse all posts in this category.
            </p>
            <Button variant="outline" onClick={() => setSearchQuery("")}>
              Clear Search
            </Button>
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No posts yet</h3>
            <p className="text-muted-foreground mb-4">
              Be the first to start a conversation in this category.
            </p>
            {canCreatePost ? (
              <CreatePostButton categoryId={categoryId} />
            ) : (
              <Button disabled>
                Create Post
              </Button>
            )}
          </div>;
        )}
      </div>;
    </div>;
=======

  };

  logInfo('CategoryContent - categoryId:', { data: categoryId }),;
  logInfo('CategoryContent - categoryPosts:', { data: categoryPosts }),;
  logInfo('CategoryContent - filteredPosts:', { data: filteredPosts }),;
  const category = categoryId ? categoriesInfo[categoryId] : null;
  const IconComponent = category ? iconMap[category && category.icon as keyof typeof iconMap] : null;

}
  );

}
<<<<<<< HEAD


  )
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



  );
};

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
<<<<<<< HEAD
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast ({ title: 'Login required', description: 'Please sign in to follow this category' }),
      return;
    }
    if () {) {
  $2
}
      unfollow (category_id);
    } else {
      follow (category_id);
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
=======
}
function CategoryContent({
  categoryId
  category
  IconComponent
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



    ...recentPosts.filter(post => post.categoryId === categoryId)
  ].filter((post, index, self) => 
    // Remove duplicates by id
    index === self.findIndex(p => p.id === post.id)


  // Apply search filter
  const filteredPosts = searchQuery
    ? categoryPosts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) |
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) |
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )


  const handleFollow = () => {
    if (!user) {
      toast({ title: 'Login required', description: 'Please sign in to follow this category' }),

    : categoryPosts,

  const canCreatePost = user && (!category.adminOnly || user.userType === 'admin' || user.role === 'admin'),
  const { isFollowed, follow, unfollow } = useFollowedCategories(),
  const { toast } = useToast(),




  const handleFollow = () => {
    if (!user) {
      toast({ title: 'Login required', description: 'Please sign in to follow this category' })
      return


import React from 'react';
import { logInfo } from '@/utils/productionLogger';
import { MessageSquare, Briefcase, Code, FileText, Megaphone, Search } from 'lucide-react';
import { logInfo } from '@/utils/productionLogger';


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
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
  },;
  "project-help": {;
    id: "project-help",;
    name: "Project Help",;
    description: "Get help with your ongoing projects and collaboration.",;
    adminOnly: false,;
    icon: "MessageSquare";
  },;
  "ai-tools": {;
    id: "ai-tools",;
    name: "AI Tools Discussion",;
    description: "Discuss AI tools, frameworks, and best practices.",;
    adminOnly: false,;
    icon: "Code";
  },;
  "feedback": {;
    id: "feedback",;
    name: "Feedback & Feature Requests",;
    description: "Share your feedback and suggest new features.",;
    adminOnly: false,;
    icon: "FileText";
  },;
  "announcements": {;
    id: "announcements",;
    name: "Announcements",;
    description: "Official announcements from the Zion team.",;
    adminOnly: true,;
    icon: "Megaphone";
  }
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



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    }
    if (isFollowed(categoryId)) {;
      unfollow(categoryId);
    } else {;
      follow(categoryId);
    }

  };

  logInfo('CategoryContent - categoryId:', { data: categoryId }),;
  logInfo('CategoryContent - categoryPosts:', { data: categoryPosts }),;
  logInfo('CategoryContent - filteredPosts:', { data: filteredPosts }),;
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
<<<<<<< HEAD
;
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      toast ({ title: 'Login required', description: 'Please sign in to follow this category' }),
      return;
    }
    if () {) {
  $2
}
      unfollow (category_id);
    } else {
      follow (category_id);
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
