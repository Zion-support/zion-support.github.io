<<<<<<< HEAD:src/pages/ForumCategoryPage.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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

// Mock category data
const categoriesInfo: Record<string ForumCategoryInfo> = {
  "getting-hired": {
    id: "getting-hired",
    name: "Getting Hired",
    description: "Tips, strategies, and questions about getting hired on the platform.",
    adminOnly: false,
    icon: "Briefcase"
  },
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  "project-help": {
    id: "project-help",
    name: "Project Help",
    description: "Get help with your ongoing projects and collaboration.",
    adminOnly: false,
    icon: "MessageSquare"
  },
  "ai-tools": {
    id: "ai-tools",
    name: "AI Tools Discussion",
    description: "Discuss AI tools, frameworks, and best practices.",
    adminOnly: false,
    icon: "Code"
  },
  "feedback": {
    id: "feedback",
    name: "Feedback & Feature Requests",
    description: "Share your feedback and suggest new features.",
    adminOnly: false,
    icon: "FileText"
  },
  "announcements": {
    id: "announcements",
    name: "Announcements",
    description: "Official announcements from the Zion team.",
    adminOnly: true,
    icon: "Megaphone"
  }
=======
"feedback": {
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
"feedback": {

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/ForumCategoryPage.tsx
    id: "feedback"
    name: "Feedback & Feature Requests"
    description: "Share your feedback and suggest new features."
    adminOnly: false
    icon: "FileText"

<<<<<<< HEAD:src/pages/ForumCategoryPage.tsx
<<<<<<< HEAD

  },


=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

  },



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/ForumCategoryPage.tsx
  "announcements": {
    id: "announcements"
    name: "Announcements"
    description: "Official announcements from the Zion team."
    adminOnly: true
    icon: "Megaphone"
<<<<<<< HEAD:src/pages/ForumCategoryPage.tsx
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/ForumCategoryPage.tsx
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


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======


<<<<<<< HEAD:src/pages/ForumCategoryPage.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/ForumCategoryPage.tsx
  user}: {
  categoryId: string,
  category: ForumCategoryInfo,
  IconComponent: React.ComponentType<any>,
  user: any
}) {
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  const [searchQuery, setSearchQuery] = useState(""),
  const { featuredPosts, recentPosts } = useCommunity(),

  // Filter posts by category from context data
  const categoryPosts = [
    ...featuredPosts.filter(post => post.categoryId === categoryId),

<<<<<<< HEAD:src/pages/ForumCategoryPage.tsx
<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/ForumCategoryPage.tsx
    ...recentPosts.filter(post => post.categoryId === categoryId)
  ].filter((post, index, self) => 
    // Remove duplicates by id
    index === self.findIndex(p => p.id === post.id)
<<<<<<< HEAD:src/pages/ForumCategoryPage.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  ),
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

=======



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/ForumCategoryPage.tsx
  // Apply search filter
  const filteredPosts = searchQuery 
    ? categoryPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )

<<<<<<< HEAD:src/pages/ForumCategoryPage.tsx
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/ForumCategoryPage.tsx
  const handleFollow = () => {
    if (!user) {
      toast({ title: 'Login required', description: 'Please sign in to follow this category' }),

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    : categoryPosts,

  const canCreatePost = user && (!category.adminOnly || user.userType === 'admin' || user.role === 'admin'),
  const { isFollowed, follow, unfollow } = useFollowedCategories(),
  const { toast } = useToast(),

<<<<<<< HEAD:src/pages/ForumCategoryPage.tsx
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======




>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/ForumCategoryPage.tsx
  const handleFollow = () => {
    if (!user) {
      toast({ title: 'Login required', description: 'Please sign in to follow this category' }),
      return
<<<<<<< HEAD
=======

import React from 'react';
import { logInfo } from '@/utils/productionLogger';
import { MessageSquare, Briefcase, Code, FileText, Megaphone, Search } from 'lucide-react';
import { logInfo } from '@/utils/productionLogger';

<<<<<<< HEAD:src/pages/ForumCategoryPage.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/ForumCategoryPage.tsx
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
<<<<<<< HEAD:src/pages/ForumCategoryPage.tsx
<<<<<<< HEAD
  },;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  },;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/ForumCategoryPage.tsx
  "project-help": {;
    id: "project-help",;
    name: "Project Help",;
    description: "Get help with your ongoing projects and collaboration.",;
    adminOnly: false,;
    icon: "MessageSquare";
<<<<<<< HEAD:src/pages/ForumCategoryPage.tsx
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/ForumCategoryPage.tsx
  },;
  "ai-tools": {;
    id: "ai-tools",;
    name: "AI Tools Discussion",;
    description: "Discuss AI tools, frameworks, and best practices.",;
    adminOnly: false,;
    icon: "Code";
  },;
<<<<<<< HEAD:src/pages/ForumCategoryPage.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/ForumCategoryPage.tsx
  "feedback": {;
    id: "feedback",;
    name: "Feedback & Feature Requests",;
    description: "Share your feedback and suggest new features.",;
    adminOnly: false,;
    icon: "FileText";
<<<<<<< HEAD:src/pages/ForumCategoryPage.tsx
<<<<<<< HEAD
  },;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  },;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/ForumCategoryPage.tsx
  "announcements": {;
    id: "announcements",;
    name: "Announcements",;
    description: "Official announcements from the Zion team.",;
    adminOnly: true,;
    icon: "Megaphone";
  }
<<<<<<< HEAD:src/pages/ForumCategoryPage.tsx
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/ForumCategoryPage.tsx
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
<<<<<<< HEAD
<<<<<<< HEAD
      return;
    }
    if (isFollowed(categoryId)) {;
      unfollow(categoryId);
    } else {;
      follow(categoryId);
    }
  },;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
      return;




<<<<<<< HEAD:src/pages/ForumCategoryPage.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/ForumCategoryPage.tsx
    }
    if (isFollowed(categoryId)) {
      unfollow(categoryId)
    } else {
      follow(categoryId)
    }
<<<<<<< HEAD:src/pages/ForumCategoryPage.tsx

<<<<<<< HEAD
  };

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  logInfo('CategoryContent - categoryId:', { data: categoryId }),;
  logInfo('CategoryContent - categoryPosts:', { data: categoryPosts }),;
  logInfo('CategoryContent - filteredPosts:', { data: filteredPosts }),;
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  const category = categoryId ? categoriesInfo[categoryId] : null;
  const IconComponent = category ? iconMap[category && category.icon as keyof typeof iconMap] : null;

}
<<<<<<< HEAD
=======
import React from "react";
import MainLayout from "../components/layout/MainLayout";

const ForumCategoryPage: React.FC = () => {
  return (
    <MainLayout title="Forum - Zion Tech Group" description="Community forum for discussions and support.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Forum</h1>
        <p className="text-lg">This is the Forum page. Content coming soon.</p>
      </div>
    </MainLayout>
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115
  );
};

<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD


  )
}



  );
};

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
  );
}
<<<<<<< HEAD
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
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/ForumCategoryPage.tsx
  useEffect(() => {;
    // Add a small delay to ensure router is ready;
    if (categoryId && category) {;
      logInfo('ForumCategoryPage - categoryId changed:', { data: categoryId });
    }
  }, [categoryId, category]);
  if (!categoryId || !category) {;
    return <NotFound />;
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
;
  if (!IconComponent) {;
    return <NotFound />;
  }
;
  return (;
    <>;
      <SEO;
        title={`${category.name} | Community Forum | Zion AI Marketplace`}
        description={category.description}
        keywords={`community, forum, ${category.name.toLowerCase()}, discussion`}
        canonical={`https://app.ziontechgroup.com/community/category/${categoryId}`}
      />;
      <CategoryContent;
        categoryId={categoryId}
        category={category}
        IconComponent={IconComponent}
        user={user}
      />;
    </>;
  );
}
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
<<<<<<< HEAD:src/pages/ForumCategoryPage.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
export default ForumCategoryPage;
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115
=======
  );

}
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
=======
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


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/ForumCategoryPage.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import CreatePostButton from '@/components/community/CreatePostButton';
import { Input } from '@/components/ui/input';
import { SEO } from '@/components/SEO';
import PostCard from '@/components/community/PostCard';
import { PostListSkeleton } from '@/components/community/PostCardSkeleton';
import { ForumCategoryInfo, ForumPost } from '@/types/community';
import { usePostsByCategory } from '@/hooks/usePostsByCategory';
import NotFound from './NotFound';
import { useAuth } from '@/hooks/useAuth';
import { useCommunity } from '@/context';
import { useToast } from '@/hooks/use-toast';
import { useFollowedCategories } from '@/hooks/useFollowedCategories';
import { logInfo } from '@/utils/productionLogger';
import { MessageSquare, Briefcase, Code, FileText, Megaphone, Search } from 'lucide-react'
// Mock category data
const categoriesInfo: Record<string, ForumCategoryInfo> = {
  "getting-hired": {
  );

}, [categoryId, category]);";
This category is only accessible to administrators. </p> <Button asChild> <Link href=" /community" >Back to Community</Link> </Button> </div> </div> return (<> <SEO title= {;
  `$ {;
  category.name ;
}| Community Forum | Zion AI Marketplace` ;
}description= {;
  category.description ;
}keywords= {;
  `community,  forum, $ {;
  category.name.toLowerCase () ;
}, discussion` ;
}canonical= {;
  `https://app.ziontechgroup.com/community/category/$ {;
  categoryId ;
}` ;
}/> <CategoryContent categoryId= {;
  categoryId ;
}category= {;
  category ;
}IconComponent= {;
  IconComponent ;
}user= {;
  user ;
}/> </>) ;
}'"
  )
}
<<<<<<< HEAD:src/pages/ForumCategoryPage.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/ForumCategoryPage.tsx
