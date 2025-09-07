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
          className="text-center mb-8"><h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
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
  // Error state
  if (error) {
    return (
      <div className="container py-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Unable to load talents</h2>
          <p className="text-muted-foreground">{error}</p>
          <Button onClick={refresh}>Try Again</Button>
        </div>
      </div>
    )
  }

  // Main render
  return (
    <div className="container py-8">
      {/* Header */}
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}><h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          AI & IT Talent Directory
        </h1>
        <p className="text-muted-foreground text-lg">
          Connect with world-class professionals specializing in AI, machine learning, and modern technology
        </p>
      </motion.div>

      {/* Market Insights */}
      {marketStats && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}><TalentMarketInsights stats={marketStats} />
        </motion.div>
      )}

      {/* Filter Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}><TalentFilterControls
          sortBy={sortBy}
          setSortBy={setSortBy}
          filterSpecialization={filterSpecialization}
          setFilterSpecialization={setFilterSpecialization}
          filterAvailability={filterAvailability}
          setFilterAvailability={setFilterAvailability}
          specializations={specializations}
          showRecommended={showRecommended}
          setShowRecommended={setShowRecommended}
          loading={isFetching}
        />
      </motion.div>

      {/* Talent Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}><AnimatePresence mode="popLayout">
          {talents.map((talent, index) => (
            <motion.div
              key={talent.id}
              ref={index === talents.length - 1 ? lastElementRef : null}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: Math.min(index * 0.03, 0.5) }}
              whileHover={{ scale: 1.02 }}><TalentCard
                talent={talent}
                onHire={() => router.push(`/hire/${talent.id}`)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Loading More Indicator */}
      {(isFetching || loading) && (
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}><TalentLoadingGrid count={4} />
        </motion.div>
      )}

      {hasMore && (
        <div className="text-center mt-8">
          {isFetching ? (
            <Spinner className="mx-auto h-6 w-6" />
          ) : (
            <Button onClick={loadMore}>Load More</Button>
          )}
          {total !== undefined && (
            <p className="mt-2 text-sm text-muted-foreground">
              Showing {talents.length} of {total} professionals
            </p>
          )}
        </div>
      )}

      {/* End of Results */}
      {!hasMore && talents.length > 0 && (
        <motion.div
          className="text-center mt-12 py-8 border-t"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}><div className="text-muted-foreground text-lg mb-2">
            🎉 You've explored all available talents!
          </div>
          <div className="text-sm text-muted-foreground">
            Showing {talents.length} {total && `of ${total}`} AI and technology professionals
          </div>
        </motion.div>
      )}

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}><ArrowUp className="h-5 w-5 text-primary-foreground" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
;
=======
    let filteredTalents = allTalents
    }
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
