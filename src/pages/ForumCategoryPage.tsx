<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { logInfo } from '@/utils/productionLogger'
import { MessageSquare, Briefcase, Code, FileText, Megaphone, Search } from 'lucide-react'
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
// Mock category data
const categoriesInfo: Record<string ForumCategoryInfo> = {
  "getting-hired": {
<<<<<<< HEAD

    id: "getting-hired"
    name: "Getting Hired"
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
// Mock category data
const categoriesInfo: Record<string ForumCategoryInfo> = {
  "getting-hired": {
    id: "getting-hired",
    name: "Getting Hired",
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    description: "Tips, strategies, and questions about getting hired on the platform."
    adminOnly: false
    icon: "Briefcase"
  }
=======
<<<<<<< HEAD
    id: "getting-hired",
    name: "Getting Hired",
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    description: "Tips, strategies, and questions about getting hired on the platform.",
    adminOnly: false,
    icon: "Briefcase"
  },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  "project-help": {
    id: "project-help"
    name: "Project Help"
    description: "Get help with your ongoing projects and collaboration."
    adminOnly: false
    icon: "MessageSquare"
<<<<<<< HEAD
  }
  "ai-tools": {
    id: "ai-tools"
    name: "AI Tools Discussion"
    description: "Discuss AI tools, frameworks, and best practices."
    adminOnly: false
    icon: "Code"
  }
=======
  },
  "ai-tools": {
    id: "ai-tools",
    name: "AI Tools Discussion",
    description: "Discuss AI tools, frameworks, and best practices.",
    adminOnly: false,
    icon: "Code"
  },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  "feedback": {
    id: "feedback"
    name: "Feedback & Feature Requests"
    description: "Share your feedback and suggest new features."
    adminOnly: false
    icon: "FileText"


  },
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  "announcements": {
    id: "announcements"
    name: "Announcements"
    description: "Official announcements from the Zion team."
    adminOnly: true
    icon: "Megaphone"
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
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  user}: {
  categoryId: string
  category: ForumCategoryInfo
  IconComponent: React.ComponentType<any>
  user: any
}) {
<<<<<<< HEAD



=======
<<<<<<< HEAD
  const [searchQuery, setSearchQuery] = useState("")
  const { featuredPosts, recentPosts } = useCommunity()
  // Filter posts by category from context data
  const categoryPosts = [
    ...featuredPosts.filter(post => post.categoryId === categoryId)
<<<<<<< HEAD
    ...recentPosts.filter(post => post.categoryId === categoryId)
  ].filter((post, index, self,) =>
    // Remove duplicates by id
    index === self.findIndex(p => p.id === post.id)
  )
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
  const [searchQuery, setSearchQuery] = useState(""),
  const { featuredPosts, recentPosts } = useCommunity(),

  // Filter posts by category from context data
  const categoryPosts = [
    ...featuredPosts.filter(post => post.categoryId === categoryId),
<<<<<<< HEAD



=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    ...recentPosts.filter(post => post.categoryId === categoryId)
  ].filter((post, index, self) => 
    // Remove duplicates by id
    index === self.findIndex(p => p.id === post.id)
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
  ),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
  )
=======
  ),

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  // Apply search filter
  const filteredPosts = searchQuery
    ? categoryPosts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) |
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) |
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
<<<<<<< HEAD


  const handleFollow = () => {
    if (!user) {
      toast({ title: 'Login required', description: 'Please sign in to follow this category' }),

=======
<<<<<<< HEAD
    : categoryPosts
  const canCreatePost = user && (!category.adminOnly |user.userType === 'admin' |user.role === 'admin')
  const { isFollowed, follow, unfollow } = useFollowedCategories()
  const { toast } = useToast()
<<<<<<< HEAD
=======
  const handleFollow = () => {
    if (!user) {
      toast({ title: 'Login required', description: 'Please sign in to follow this category' }),
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
    : categoryPosts,

  const canCreatePost = user && (!category.adminOnly || user.userType === 'admin' || user.role === 'admin'),
  const { isFollowed, follow, unfollow } = useFollowedCategories(),
  const { toast } = useToast(),

<<<<<<< HEAD



=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  const handleFollow = () => {
    if (!user) {
      toast({ title: 'Login required', description: 'Please sign in to follow this category' })
      return
<<<<<<< HEAD


import React from 'react';
import { logInfo } from '@/utils/productionLogger';
import { MessageSquare, Briefcase, Code, FileText, Megaphone, Search } from 'lucide-react';
import { logInfo } from '@/utils/productionLogger';
=======

=======

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import { MessageSquare, Briefcase, Code, FileText, Megaphone, Search } from 'lucide-react';
// Mock category data;
const categoriesInfo: Record<string, ForumCategoryInfo> = {;
  "getting-hired": {;
    id: "getting-hired",;
    name: "Getting Hired",;
    description: "Tips, strategies, and questions about getting hired on the platform.";
    adminOnly: false,;
    icon: "Briefcase";
  };
  "project-help": {;
    id: "project-help",;
    name: "Project Help",;
    description: "Get help with your ongoing projects and collaboration.",;
    adminOnly: false,;
    icon: "MessageSquare";
  };
  "ai-tools": {;
    id: "ai-tools",;
    name: "AI Tools Discussion",;
    description: "Discuss AI tools, frameworks, and best practices.";
    adminOnly: false,;
    icon: "Code";
  };
  "feedback": {;
    id: "feedback",;
    name: "Feedback & Feature Requests",;
    description: "Share your feedback and suggest new features.",;
    adminOnly: false,;
    icon: "FileText";
  };
  "announcements": {;
    id: "announcements",;
    name: "Announcements",;
    description: "Official announcements from the Zion team.",;
    adminOnly: true,;
    icon: "Megaphone";
  }
};

const iconMap = {;
  "Briefcase": Briefcase;
  "MessageSquare": MessageSquare;
  "Code": Code;
  "FileText": FileText;
  "Megaphone": Megaphone;
};

function CategoryContent(): any ({;
  categoryId;
  category;
  IconComponent;
  user}: {;
  categoryId: string,;
  category: ForumCategoryInfo,;
  IconComponent: React && React.ComponentType<any>,;
  user: any;
}) {;
  const [searchQuery, setSearchQuery] = useState("");
  const { featuredPosts, recentPosts } = useCommunity();

  // Filter posts by category from context data;
  const categoryPosts = [;
    ...featuredPosts && featuredPosts.filter(post => post && post.categoryId === categoryId);
    ...recentPosts && recentPosts.filter(post => post && post.categoryId === categoryId);
  ].filter((post, index, self,) => ;
    // Remove duplicates by id;
    index === self && self.findIndex(p => p && p.id === post && post.id);
  );

  // Apply search filter;
  const filteredPosts = searchQuery ;
    ? categoryPosts && categoryPosts.filter(post => ;
        post && post.title.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
        post && post.content.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
        post && post.tags.some(tag => tag && tag.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()));
      );
    : categoryPosts;

  const canCreatePost = user && (!category && category.adminOnly || user && user.userType === 'admin' || user && user.role === 'admin');
  const { isFollowed, follow, unfollow } = useFollowedCategories();
  const { toast } = useToast();

  const handleFollow = () => {;
    if (!user) {;
      toast({ title: 'Login required', description: 'Please sign in to follow this category' }),;
      return;
<<<<<<< HEAD




    }
    if (isFollowed(categoryId)) {;
      unfollow(categoryId);
    } else {;
      follow(categoryId);
    }

  };

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
    if (isFollowed(categoryId)) {
      unfollow(categoryId)
    } else {
      follow(categoryId)
    }
<<<<<<< HEAD
  }
  logInfo('CategoryContent - categoryId:', { data: categoryId })
  logInfo('CategoryContent - categoryPosts:', { data: categoryPosts })
  logInfo('CategoryContent - filteredPosts:', { data: filteredPosts })
  const category = categoryId ? categoriesInfo[categoryId] : null
  const IconComponent = category ? iconMap[category.icon as keyof typeof iconMap] : null
}
<<<<<<< HEAD

  )
}
=======
  );
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  },;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
=======


=======

  );
};

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
