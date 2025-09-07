<<<<<<< HEAD:temp-disabled/src/components/reviews/ReviewStats.tsx

<h3 className="text-xl font-bold">{formattedRating}</h3>""
          <div className="flex items-center">"
</div>"
            <div className="flex mr-2">"
</div>
                <Star;
                  key={i}
                  className={`h-4 w-4 ${"
                    i <= Math.round(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"""
import { Star } from 'lucide-react';''
import { Progress } from "@/components/ui/progress",;"
=======
<<<<<<< HEAD
  const formattedRating = null;
import { Star } from 'lucide-react'
import { Progress } from "@/components/ui/progress",
interface ReviewStatsProps {
  averageRating: number,
  totalReviews: number,
  ratingDistribution?: Record<number number>
}

export function ReviewStats({ averageRating, totalReviews, ratingDistribution }: ReviewStatsProps) {
  // Format the average rating to one decimal place
  const formattedRating = averageRating.toFixed(1),
  
  // Calculate percentages for distribution if available
  const getPercentage = (count: number) => {
    if (totalReviews === 0) return 0,
    return (count / totalReviews) * 100
  },
import { Star } from 'lucide-react'
import { Progress } from "@/components/ui/progress";
interface ReviewStatsProps {
  averageRating: number;
  totalReviews: number;
  ratingDistribution?: Record<number, number>
export function ReviewStats({
  averageRating
  totalReviews
  ratingDistribution
}: ReviewStatsProps) {
  // Format the average rating to one decimal place
  const formattedRating = null;
  const formattedRating = averageRating.toFixed(1)
  // Calculate percentages for distribution if available
  const getPercentage = (count: number) => {
    if (totalReviews === 0) return 0
    return (count / totalReviews) * 100
  }

import { Star } from 'lucide-react'
import { Progress } from "@/components/ui/progress",
interface ReviewStatsProps {
  averageRating: number,
  totalReviews: number,
  ratingDistribution?: Record<number number>
}

export function ReviewStats({ averageRating, totalReviews, ratingDistribution }: ReviewStatsProps) {
  // Format the average rating to one decimal place
  const formattedRating = averageRating.toFixed(1),
  
  // Calculate percentages for distribution if available
  const getPercentage = (count: number) => {
    if (totalReviews === 0) return 0,
    return (count / totalReviews) * 100
  },
  
  return (
    <div className="bg-card border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
  
    <div className="bg-card border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className='text-xl font-bold'>{formattedRating}</h3>
          <div className='flex items-center'>
            <div className='flex mr-2'>
              {[1, 2, 3, 4, 5].map(i => (                <Star
                  key = {i,}
                  className={`h-4 w-4 ${
                    i <= Math.round(averageRating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'                  }`}
                />
              ))}
            </div>
            <span className='text-sm text-muted-foreground'>
              {totalReviews} {totalReviews === 1 ? 'review' : 'reviews'}            </span>
          </div>
        </div>
      </div>
                    i <= Math.round(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          <h3 className="text-xl font-bold">{formattedRating}</h3>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
<h3 className="text-xl font-bold">{formattedRating}</h3>
          <div className="flex items-center">
            <div className="flex mr-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i <= Math.round(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
import { Star } from 'lucide-react';
import { Progress } from "@/components/ui/progress",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/reviews/ReviewStats.tsx
interface ReviewStatsProps {;
  averageRating: number,;
  totalReviews: number,;
  ratingDistribution?: Record<number number>;
<<<<<<< HEAD:temp-disabled/src/components/reviews/ReviewStats.tsx
</Star>"
    <div className="bg-card border rounded-lg p-4">;"
</div>"
      <div className="flex items-center justify-between mb-4">;"
</div>
        <div>;
</div>"
          <h3 className="text-xl font-bold">{formattedRating}</h3>;""
          <div className="flex items-center">;"
</div>"
            <div className="flex mr-2">;"
</div>
                <Star;
                  key={i}
                  className={`h-4 w-4 ${;"
                    i <= Math.round(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300";"
=======
}
;
export function ReviewStats({ averageRating, totalReviews, ratingDistribution }: ReviewStatsProps) {;
  // Format the average rating to one decimal place;
  const formattedRating = averageRating.toFixed(1),;
  // Calculate percentages for distribution if available;
  const getPercentage = (count: number) => {;
    if (totalReviews === 0) return 0;
    return (count / totalReviews) * 100;
  };
  return (;
    <div className="bg-card border rounded-lg p-4">;
      <div className="flex items-center justify-between mb-4">;
        <div>;
          <h3 className="text-xl font-bold">{formattedRating}</h3>;
          <div className="flex items-center">;
            <div className="flex mr-2">;
              {[1, 2, 3, 4, 5].map((i) => (;
                <Star;
                  key={i}
                  className={`h-4 w-4 ${;
                    i <= Math.round(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300";



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/reviews/ReviewStats.tsx
                  }`}
                />
</Star>
            </div>

<<<<<<< HEAD:temp-disabled/src/components/reviews/ReviewStats.tsx
"
            <span className="text-sm text-muted-foreground">"
</span>
            </span>
          </div>
        </div>
      </div>"
        <div className="space-y-2">"
</div>"
            <div key={rating} className="flex items-center gap-2">"
</div>"
              <div className="w-6 text-sm text-right">{rating}</div>""
              <Star className="h-3 w-3 text-yellow-400" />"
</Star>
              <Progress;
                value = {getPercentage(ratingDistribution[rating] |0),}"
                className="h-2""
              />
</Progress>
"
              <div className="w-8 text-xs text-muted-foreground">"
</div>
              </div>
            </div>
=======
<<<<<<< HEAD
            <span className="text-sm text-muted-foreground">


            <span className='text-sm text-muted-foreground'>
              {totalReviews} {totalReviews === 1 ? 'review' : 'reviews'}            <span className="text-sm text-muted-foreground">
            <span className="text-sm text-muted-foreground">
              {totalReviews} {totalReviews === 1 ? "review" : "reviews"}
=======

            <span className="text-sm text-muted-foreground">


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {totalReviews} {totalReviews === 1 ? "review" : "reviews"}
            </span>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      {ratingDistribution && (
        <div className='space-y-2'>
          {[5, 4, 3, 2, 1].map(rating => (
            <div key={rating} className='flex items-center gap-2'>
              <div className='w-6 text-sm text-right'>{rating}</div>
              <Star className='h-3 w-3 text-yellow-400' />
              <Progress
                value={getPercentage(ratingDistribution[rating] |0)}
                className='h-2'        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating,) => (
=======

      
      {ratingDistribution && (
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div key={rating} className="flex items-center gap-2">
              <div className="w-6 text-sm text-right">{rating}</div>
              <Star className="h-3 w-3 text-yellow-400" />
              <Progress
                value = {getPercentage(ratingDistribution[rating] |0),}
                className="h-2"
              />
<<<<<<< HEAD
=======

              <div className="w-8 text-xs text-muted-foreground">
                {ratingDistribution[rating] || 0}

              </div>
            </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Star } from 'lucide-react';
import { Progress } from '@/components / ui / progress';
import { Progress  } from '@/components / ui / progress';
interface ReviewStatsProps {
  average_rating: number;
  total_reviews: number;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/reviews/ReviewStats.tsx
  rating_distribution?: Record < number, number>;
export /**
 * ReviewStats - Function description;
 */
function ReviewStats() {
  // Format the average rating to one decimal place;
  const formatted_rating = average_rating.to_fixed (1);
  // Calculate percentages for distribution if available;
  const get_percentage = (count: number) =>: any {
  // TODO: Implement
}
    // Check condition;
if (return 0) {
  $2;
}
    return (count / total_reviews) * 100;
  }
  return ("
    <div className='bg - card border rounded - lg p - 4'>;'
</div>'
      <div className='flex items - center justify - between mb - 4'>;'
</div>
        <div>;
</div>'
          <h3 className='text - xl font - bold'>{formatted_rating}</h3>;''
          <div className='flex items - center'>;'
</div>'
            <div className='flex mr - 2'>;'
</div>
              {[1, 2, 3, 4, 5].map (index => (                <Star;
                  key = {i, }
                  className={`h - 4 w - 4 ${)
                    i <= Math.round (average_rating);'
                      ? 'fill - yellow - 400 text - yellow - 400';''
                      : 'text - gray - 300'                  }`}'
                />))}
</Star>
            </div>;'
            <span className='text - sm text - muted - foreground'>;'
</span>'
              {total_reviews} {total_reviews === 1 ? 'review' : 'reviews'}            </span>;'
          </div>;
        </div>;
      </div>;'
                    i <= Math.round (average_rating) ? "fill - yellow - 400 text - yellow - 400" : "text - gray - 300";"
                  }`}
                />))}
            </div>;"
            <span className='text - sm text - muted - foreground'>;'
</span>'
              {total_reviews} {total_reviews === 1 ? 'review' : 'reviews'}            <span className="text - sm text - muted - foreground">;"
</span>
            </span>;
          </div>;
        </div>;
<<<<<<< HEAD:temp-disabled/src/components/reviews/ReviewStats.tsx
      </div>;"
        <div className="space-y-2">"
</div>"
            <div key={rating} className="flex items-center gap-2">"
</div>"
              <div className="w-6 text-sm text-right">{rating}</div>""
              <Star className="h-3 w-3 text-yellow-400" />"
</Star>
              <Progress;
=======
      </div>;


              <div className='w-8 text-xs text-muted-foreground'>                {ratingDistribution[rating] |0}              <div className="w-8 text-xs text-muted-foreground">
                {ratingDistribution[rating] |0}
              </div>
            </div>


      
      {ratingDistribution && (
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
<<<<<<< HEAD
                value = {getPercentage(ratingDistribution[rating] || 0),}
                className="h-2" 
              />
              <div className='w-8 text-xs text-muted-foreground'>                {ratingDistribution[rating] || 0}              <div className="w-8 text-xs text-muted-foreground">
                {ratingDistribution[rating] || 0}
              </div>
            </div>
                value={getPercentage(ratingDistribution[rating] || 0)} 
                className="h-2" 
              />
              <div className="w-8 text-xs text-muted-foreground">
                {ratingDistribution[rating] || 0}
              </div>;
            </div>;
        </div>
      )}
}</div>)
}</div>)
}"}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


            <div key={rating} className="flex items-center gap-2">
              <div className="w-6 text-sm text-right">{rating}</div>
              <Star className="h-3 w-3 text-yellow-400" />
              <Progress 


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/reviews/ReviewStats.tsx
          ))}
        </div>;
</Progress>
    </div>;
}</div>) ;
}</div>) ;"
        <div className='space - y-2'>;'
</div>'
            <div key={rating} className='flex items - center gap - 2'>;'
</div>'
              <div className='w - 6 text - sm text - right'>{rating}</div>;''
              <Star className='h - 3 w - 3 text - yellow - 400' />;'
</Star>
              <Progress;
                value={get_percentage (rating_distribution[rating] || 0)}'
                className='h - 2'        <div className="space - y-2">;"
</Progress>"
            <div key={rating} className="flex items - center gap - 2">;"
</div>"
              <div className="w - 6 text - sm text - right">{rating}</div>;""
              <Star className="h - 3 w - 3 text - yellow - 400" />;"
</Star>
              <Progress;
                value = {get_percentage (rating_distribution[rating] || 0), }"
                className="h - 2";"
              />;
</Progress>"
              <div className='w - 8 text - xs text - muted - foreground'>                {rating_distribution[rating] || 0}              <div className="w - 8 text - xs text - muted - foreground">;"
</div>
              </div>;
            </div>))}
        </div>)}
    </div>);
}</div>);
}</div>);
<<<<<<< HEAD:temp-disabled/src/components/reviews/ReviewStats.tsx
=======
}"}
          ))}
        </div>
      )}
    </div>
  )
}</div>)
}</div>)
}"}
}</div>) ;
}</div>) ;
}"};
    </div>;
  );
}
;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/reviews/ReviewStats.tsx
}</div>) ;
}</div>) ;
    </div>;"

<<<<<<< HEAD:temp-disabled/src/components/reviews/ReviewStats.tsx
=======
    </div>;
  );
}
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/reviews/ReviewStats.tsx
