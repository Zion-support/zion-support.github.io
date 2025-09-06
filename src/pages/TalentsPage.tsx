<<<<<<< HEAD
<<<<<<< HEAD
import { useRouter  } from 'next/router';
import { useState, useEffect, useCallback, useMemo  } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
import { ArrowUp, Filter, SortAsc, Users, TrendingUp, Star, Verified, MapPin } from 'lucide-react'
import { useInfiniteScrollPagination  } from '@/hooks/useInfiniteScroll';
import { generateAITalents, getTalentMarketStats, getRecommendedTalents  } from '@/utils/talentAutoFeedAlgorithm';
import { TALENT_PROFILES  } from '@/data/talentData';
import { TalentProfile  } from '@/types/talent';
import { SkeletonCard  } from '@/components/ui/skeleton';
import { Button  } from '@/components/ui/button';
import { Badge  } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';
import Spinner from '@/components/ui/spinner';
// Market insights component for talents
const TalentMarketInsights: React.FC<{ stats: any }> = ({ stats }) => (
  <Card className;
  // Loading state
  if (loading && talents.length === 0) {
    return (
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
            Connect with world-class AI and technology professionals
          </p>
        </motion.div>
        <TalentLoadingGrid />
      </div>
    )
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD

    let filteredTalents = allTalents
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    let filteredTalents = allTalents;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
}
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

=======
;
    let filtered_talents = all_talents;
    }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
