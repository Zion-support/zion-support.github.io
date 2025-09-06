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
