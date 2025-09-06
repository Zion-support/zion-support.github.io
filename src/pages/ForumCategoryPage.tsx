import React from 'react';
import { logInfo } from '@/utils/productionLogger';
import { MessageSquare, Briefcase, Code, FileText, Megaphone, Search } from 'lucide-react';
import { logInfo } from '@/utils/productionLogger';
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
  const category = categoryId ? categoriesInfo[categoryId] : null;
  const IconComponent = category ? iconMap[category && category.icon as keyof typeof iconMap] : null;

}
  );
}
