import { useRouter } from 'next/router';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUp,
  Filter,
  SortAsc,
  Users,
  TrendingUp,
  Star,
  Verified,
  MapPin,;
} from 'lucide-react';
import { useInfiniteScrollPagination } from '@/hooks/useInfiniteScroll';
  generateAITalents,
  getTalentMarketStats,
  getRecommendedTalents,;
} from '@/utils/talentAutoFeedAlgorithm';
import { TALENT_PROFILES } from '@/data/talentData';
import { TalentProfile } from '@/types/talent';
import { SkeletonCard } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
origin/cursor/automate-test-improve-and-merge-code-2533
import Spinner from '@/components/ui/spinner';
// Market insights component for talents
const TalentMarketInsights: React.FC<{ stats: any }> = ({ stats }) => (
  // Loading state
  if (loading && talents.length === 0) {
    return (
<<<<<<< HEAD
      <div className='container py-8' data-testid='talents-loading'>
        <motion.div
          initial={ opacity: 0, y: 20 }
          animate={ opacity: 1, y: 0 }
          className='text-center mb-8'
        >
          <h1 className='text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent'>
            AI & IT Talent Directory
          </h1>
          <p className='text-muted-foreground text-lg'>
=======
      <div className="container py-8" data-testid="talents-loading">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            AI & IT Talent Directory
          </h1>
          <p className="text-muted-foreground text-lg">
>>>>>>> origin/resolved-merge-conflicts
            Connect with world-class AI and technology professionals
          </p>
        </motion.div>
        <TalentLoadingGrid />
      </div>
    )
  }

  );

}animate= {;
  {;
  opacity: 1, y: 0 ;

}transition= {;
  {;
  delay: 0.2 ;

}> <TalentMarketInsights stats= {;
  marketStats ;
}/> </motion.div>) ;
}{;
  /* Filter Controls */ ;
}<motion.div initial= {;
  {;
  opacity: 0, y: 20 ;

}animate= {;
  {;
  opacity: 1, y: 0 ;

}transition= {;
  {;
  delay: 0.3 ;

}> <TalentFilterControls sortBy= {;
  sortBy ;
}setSortBy= {;
  setSortBy ;
}filterSpecialization= {;
  filterSpecialization ;
}setFilterSpecialization= {;
  setFilterSpecialization ;
}filterAvailability= {;
  filterAvailability ;
}setFilterAvailability= {;
  setFilterAvailability ;
}specializations= {;
  specializations ;
}showRecommended= {;
  showRecommended ;
}setShowRecommended= {;
  setShowRecommended ;
}loading= {;
  isFetching ;
}/> </motion.div> {;
  /* Talent Grid */ ;
}<motion.div <motion.div key= {;
  talent.id ;
}ref= {;
  index === talents.length - 1 ? lastElementRef : null ;
}initial= {;
  {;
  opacity: 0, scale: 0.9 ;

}animate= {;
  {;
  opacity: 1, scale: 1 ;

}exit= {;
  {;
  opacity: 0, scale: 0.9 ;

}transition= {;
  {;
  delay: Math.min (index * 0.03, 0.5) ;

}whileHover= {;
  {;
  scale: 1.02 ;

}> <TalentCard talent= {;
  talent ;
}onHire= {;
  () => router.push (`/hire/$ {;
  talent.id ;
}`) ;
}/> </motion.div>) ) ;
}</AnimatePresence> </motion.div> {;
  /* Loading More Indicator */ ;
}{;
  (isFetching || loading) && (<motion.div > <TalentLoadingGrid count= {;
  4 ;
}/> </motion.div>) ;
<<<<<<< HEAD
}{';
  isFetching ? (<Spinner className=' mx-auto h-6 w-6'/>) : (<Button onClick={;
=======
}{";
  isFetching ? (<Spinner className=" mx-auto h-6 w-6"/>) : (<Button onClick={;
>>>>>>> origin/resolved-merge-conflicts
  loadMore ;
}>Load More</Button>) ;
}</p>) ;
}</div>) ;
}{;
  /* End of Results */ ;
<<<<<<< HEAD
}{'';
  !hasMore && talents.length > 0 && (<motion.div > <div className=' text-muted-foreground text-lg mb-2'> 🎉 You've explored all available talents! </div> </div> </motion.div>) ;
=======
}{'";
  !hasMore && talents.length > 0 && (<motion.div > <div className=" text-muted-foreground text-lg mb-2"> 🎉 You've explored all available talents! </div> </div> </motion.div>) ;
>>>>>>> origin/resolved-merge-conflicts
}{;
  /* Scroll to Top Button */ ;
}<AnimatePresence> {;
  showScrollTop && (<motion.button onClick={;
<<<<<<< HEAD
  scrollToTop ';
}> <ArrowUp className=' h-5 w-5 text-primary-foreground' /> </motion.button>) ;
}</AnimatePresence> </div>) ;
}''
=======
  scrollToTop ";
}> <ArrowUp className=" h-5 w-5 text-primary-foreground" /> </motion.button>) ;
}</AnimatePresence> </div>) ;
}'"
>>>>>>> origin/resolved-merge-conflicts
origin/cursor/automate-test-improve-and-merge-code-2533
