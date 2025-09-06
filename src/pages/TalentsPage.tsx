import { useRouter  } from 'next/router';
import { useState, useEffect, useCallback, useMemo  } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
import { useRouter } from 'next/router',
import { useState, useEffect, useCallback, useMemo } from 'react',
import { motion, AnimatePresence } from 'framer-motion',


;
      {/* Filter Controls */}
      <motion.div;
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >;
        <TalentFilterControls;
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
        />;
      </motion.div>;
      {/* Talent Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <AnimatePresence mode="popLayout">
          {talents.map((talent, index) => (
            <motion.div
              key={talent.id}
              ref={index === talents.length - 1 ? lastElementRef : null}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: Math.min(index * 0.03, 0.5) }}
              whileHover={{ scale: 1.02 }}
            >;
              <TalentCard;
                talent={talent}
                onHire={() => router.push(`/hire/${talent.id}`)}
              />;
            </motion.div>;
          ))}
        </AnimatePresence>;
      </motion.div>;
      {/* Loading More Indicator */}
      {(isFetching || loading) && (
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >;
          <TalentLoadingGrid count={4} />;
        </motion.div>;
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
        </div>;
      )}
;
      {/* End of Results */}
      {!hasMore && talents.length > 0 && (
        <motion.div
          className="text-center mt-12 py-8 border-t"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="text-muted-foreground text-lg mb-2">
            🎉 You've explored all available talents!
          </div>
          <div className="text-sm text-muted-foreground">
            Showing {talents.length} {total && `of ${total}`} AI and technology professionals
          </div>
        </motion.div>
      )}
;
      {/* Scroll to Top Button */}
      <AnimatePresence>;
        {showScrollTop && (;
          <motion.button;
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="h-5 w-5 text-primary-foreground" />
          </motion.button>
        )}
      </AnimatePresence>;
    </div>;
  );
}

;

