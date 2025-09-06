<<<<<<< HEAD
import React from 'react',
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Star, StarHalf } from 'lucide-react'

export function RatingStars({ value = 0, count }: { value?: number, count?: number }) {
  const filled = Math.floor(value),
  const half = value - filled >= 0.5,
  const total = 5,

  return (
    <div className="flex items-center text-zion-slate">
      {[...Array(total)].map((_, i) => {
        if (i < filled) {
          return (
            <Star
              key={i}
              className="h-4 w-4 fill-zion-cyan text-zion-cyan"
            />
          )
        }

<<<<<<< HEAD:src/components/RatingStars.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/RatingStars.tsx
        if (i === filled && half) {;
          return (;
            <StarHalf;

<<<<<<< HEAD:src/components/RatingStars.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/RatingStars.tsx
              key={i}
              className="h-4 w-4 fill-zion-cyan text-zion-cyan"
            />
          )
        }
        return <Star key={i} className="h-4 w-4 text-zion-slate" />
      })}
      {typeof count === 'number' && (
        <span className="text-xs ml-1">({count})</span>
<<<<<<< HEAD:src/components/RatingStars.tsx
<<<<<<< HEAD
      )}
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
  );
=======
    </div>
<<<<<<< HEAD
  )
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}
=======
=======


              className="h-4 w-4 fill-zion-cyan text-zion-cyan";
            />;
          );
        }
        return <Star key={i} className="h-4 w-4 text-zion-slate" />;
      })}
      {typeof count === 'number' && (;
        <span className="text-xs ml-1">({count})</span>;


      )}
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/RatingStars.tsx
    </div>
  )
<<<<<<< HEAD
  const half = value - filled >= 0 && 0.5;
  const total = 5;
}
}

}


  const half = value - filled >= 0.5;
  const total = 5;
}
}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
<<<<<<< HEAD:src/components/RatingStars.tsx
<<<<<<< HEAD
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/RatingStars.tsx
  );

}) ;
}{";
  typeof count === 'number' && (<span className="text-xs ml-1" > ({;
  count ;
}) </span> ;
}</div>) ;
}'"
<<<<<<< HEAD:src/components/RatingStars.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/RatingStars.tsx
