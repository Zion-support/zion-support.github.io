<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<h3 className='text-xl font-bold'>{formattedRating}</h3>;
          <div className='flex items-center'>;
            <div className='flex mr-2'>;
              {[1, 2, 3, 4, 5].map((i) => (<Star;
                  key={i}
                  className={`h-4 w-4 ${i <= Math.round(averageRating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300';
import { Star  } from 'lucide-react';
import { Progress } from '@/components/ui/progress',interface ReviewStatsProps  {averageRating: number,totalReviews: number,ratingDistribution?: Record<number number>;
}export function ReviewStats() {// Format the average rating to one decimal place;
  const formattedRating = averageRating.toFixed(1),// Calculate percentages for distribution if available;
  const getPercentage = (count: number) => {if (totalReviews === 0) return 0;
    return (count / totalReviews) * 100;
  }return (<div className='bg-card border rounded-lg p-4'>;
      <div className='flex items-center justify-between mb-4'>;
        <div>;
          <h3 className='text-xl font-bold'>{formattedRating}</h3>;
          <div className='flex items-center'>;
            <div className='flex mr-2'>;
              {[1, 2, 3, 4, 5].map((i) => (<Star;
                  key={i}
                  className={`h-4 w-4 ${;
<<<<<<< HEAD

<h3 className='text-xl font-bold'>{formattedRating}</h3>
          <div className='flex items-center'>
<div className='flex items-center'>
            <div className='flex mr-2'>
=======
                  className={`h-4 w-4 ${

<h3 className=text-xl font-bold">{formattedRating}</h3>
          <div className="flex items-center>
<div className=flex items-center">
            <div className="flex mr-2>
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<div className="flex items-center">
            <div className="flex mr-2">
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${

<<<<<<< HEAD


=======
<<<<<<< HEAD
import { Star } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Star } from lucide-react';
import { Progress } from '@/components/ui/progress;
>>>>>>> origin/resolved-merge-conflicts

interface ReviewStatsProps {
  averageRating: number;
                  className={`h-4 w-4 ${i <= Math.round(averageRating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300';import { Progress  } from '@/components/ui/progress';
interface ReviewStatsProps  {averageRating: number;
  totalReviews: number;
  ratingDistribution?: Record<number, number>;
export function ReviewStats() {// Format the average rating to one decimal place;
  const formattedRating = null;
  return (
    <div className='bg-card border rounded-lg p-4'>
      <div className='flex items-center justify-between mb-4'>
        <div>
          <h3 className='text-xl font-bold'>{formattedRating}</h3>
          <div className='flex items-center'>
            <div className='flex mr-2'>
              {[1, 2, 3, 4, 5].map(i => (                <Star
                  key = {i,}
                  className={`h-4 w-4 ${
                    i <= Math.round(averageRating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
origin/cursor/automate-test-improve-and-merge-code-2533
  return (<div className='bg-card border rounded-lg p-4'>;
      <div className='flex items-center justify-between mb-4'>;
        <div>;
          <h3 className='text-xl font-bold'>{formattedRating}</h3>;
          <div className='flex items-center'>;
            <div className='flex mr-2'>;
              {[1, 2, 3, 4, 5].map(i => (                <Star;
                  key = {i}
                  className={`h-4 w-4 ${i <= Math.round(averageRating)? 'fill-yellow-400 text-yellow-400';
                      : 'text-gray-300';
                  }`}
                />;
              ))}
            </div>
<span className='text-sm text-muted-foreground'>
              {totalReviews} {totalReviews === 1 ? 'review' : 'reviews'}
origin/cursor/automate-test-improve-and-merge-code-2533
                  }`}
                />
              ))}
            </div>


            <span className='text-sm text-muted-foreground'>


              {totalReviews} {totalReviews === 1 ? 'review' : 'reviews'}

<<<<<<< HEAD
                    i <= Math.round(averageRating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
import { Star } from 'lucide-react';
import { Progress } from '@/components/ui/progress',;
interface ReviewStatsProps {;
  averageRating: number,;
  totalReviews: number,;
=======
                    i <= Math.round(averageRating) ? "fill-yellow-400 text-yellow-400 : text-gray-300"
import { Progress } from "@/components/ui/progress,
interface ReviewStatsProps {
  averageRating: number,
  totalReviews: number,
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    i <= Math.round(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
import { Star } from 'lucide-react';
import { Progress } from "@/components/ui/progress",;
interface ReviewStatsProps {;
  averageRating: number,;
  totalReviews: number,;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
  ratingDistribution?: Record<number number>;
}
;
export function ReviewStats({ averageRating, totalReviews, ratingDistribution }: ReviewStatsProps) {;
  // Format the average rating to one decimal place;
  const formattedRating = averageRating.toFixed(1),;
  // Calculate percentages for distribution if available;
  const getPercentage = (count: number) => {;
    if (totalReviews === 0) return 0;
    return (count / totalReviews) * 100
};
  return (;
    <div className='bg-card border rounded-lg p-4'>;
      <div className='flex items-center justify-between mb-4'>;
        <div>;
          <h3 className='text-xl font-bold'>{formattedRating}</h3>;
          <div className='flex items-center'>;
            <div className='flex mr-2'>;
              {[1, 2, 3, 4, 5].map((i) => (;
                <Star;
                  key={i}
                  className={`h-4 w-4 ${;

                    i <= Math.round(averageRating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300';

              {totalReviews} {totalReviews === 1 ? 'review' : 'reviews'}

<span className='text-sm text-muted-foreground'>
              {totalReviews} {totalReviews === 1 ? 'review' : 'reviews'}
origin/cursor/automate-test-improve-and-merge-code-2533
            </span>
          </div>
        </div>
      </div>
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
{ratingDistribution && (
        <div className='space-y-2'>
          {[5, 4, 3, 2, 1].map(rating => (
            <div key={rating} className='flex items-center gap-2'>
              <div className='w-6 text-sm text-right'>{rating}</div>
              <Star className='h-3 w-3 text-yellow-400' />
              <Progress
                value={getPercentage(ratingDistribution[rating] || 0)}
                className='h-2'
              />
              <div className='w-8 text-xs text-muted-foreground'>
                {ratingDistribution[rating] || 0}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

      {ratingDistribution && (
        <div className='space-y-2'>
          {[5, 4, 3, 2, 1].map((rating) => (

            <div key={rating} className='flex items-center gap-2'>
              <div className='w-6 text-sm text-right'>{rating}</div>
              <Star className='h-3 w-3 text-yellow-400' />
              <Progress
                value = {getPercentage(ratingDistribution[rating] |0),}
                className='h-2'
              />

              <div className='w-8 text-xs text-muted-foreground'>
                {ratingDistribution[rating] || 0}

{ratingDistribution && (
        <div className='space-y-2'>
          {[5, 4, 3, 2, 1].map(rating => (
            <div key={rating} className='flex items-center gap-2'>
              <div className='w-6 text-sm text-right'>{rating}</div>
              <Star className='h-3 w-3 text-yellow-400' />
              <Progress
                value={getPercentage(ratingDistribution[rating] || 0)}
                className='h-2'
              />
              <div className='w-8 text-xs text-muted-foreground'>
                {ratingDistribution[rating] || 0}
origin/cursor/automate-test-improve-and-merge-code-2533
              </div>
            </div>
<<<<<<< HEAD


=======
<<<<<<< HEAD
import { Star } from 'lucide-react';
import { Progress } from '@/components/ui/ progress';
import { Progress  } from '@/components/ui/ progress';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Star } from 'lucide-react';
import { Progress } from '@/components / ui / progress';
import { Progress  } from '@/components / ui / progress';
interface ReviewStatsProps {
  average_rating: number;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Progress } from '@/components/ui/ progress;
import { Progress  } from @/components/ui/ progress';
>>>>>>> origin/resolved-merge-conflicts
interface ReviewStatsProps {
  average_rating: number;
            </div>;
            <span className='text-sm text-muted-foreground'>;
              {totalReviews} {totalReviews === 1 ? 'review' : 'reviews'}<span className='text-sm text-muted-foreground'>;
              {totalReviews} {totalReviews === 1 ? 'review' : 'reviews'}</span>;
          </div>;
        </div>;
      </div>;
      {ratingDistribution && (<div className='space-y-2'>;
          {[5, 4, 3, 2, 1].map((rating) => (<div key={rating} className='flex items-center gap-2'>;
              <div className='w-6 text-sm text-right'>{rating}</div>;
              <Star className='h-3 w-3 text-yellow-400' />;
              <Progress;
                value = {getPercentage(ratingDistribution[rating] |0)}
                className='h-2';
              />;
              <div className='w-8 text-xs text-muted-foreground'>;
                {ratingDistribution[rating] || 0}{ratingDistribution && (<div className='space-y-2'>;
          {[5, 4, 3, 2, 1].map(rating => (<div key={rating} className='flex items-center gap-2'>;
              <div className='w-6 text-sm text-right'>{rating}</div>;
              <Star className='h-3 w-3 text-yellow-400' />;
              <Progress;
                value={getPercentage(ratingDistribution[rating] || 0)}
                className='h-2';
              />;
              <div className='w-8 text-xs text-muted-foreground'>;
                {ratingDistribution[rating] || 0}</div>;
            </div>;
import { Progress  } from '@/components / ui / progress';
import { Progress   } from '@/components / ui / progress';
interface ReviewStatsProps  {average_rating: number;
=======
import { Star } from 'lucide-react';
import { Progress } from '@/components / ui / progress';
import { Progress  } from '@/components / ui / progress';
interface ReviewStatsProps {
  average_rating: number;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
  total_reviews: number;
  rating_distribution?: Record < number, number>;
export /**
 * ReviewStats - Function description
 */
function ReviewStats() {
  // Format the average rating to one decimal place;
  const formatted_rating = average_rating.to_fixed (1);
  // Calculate percentages for distribution if available;
  const get_percentage = (count: number) =>: any {
    // Check condition
if (return 0) {
  $2
}
    return (count / total_reviews) * 100;
  }
<<<<<<< HEAD


=======
<<<<<<< HEAD
  return (<div className='bg - card border rounded - lg p - 4'>;
      <div className='flex items - center justify - between mb - 4'>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
  return (<div className=bg - card border rounded - lg p - 4'>;
      <div className='flex items - center justify - between mb - 4>;
=======
=======
=======
<<<<<<< HEAD
  return (<div className=bg - card border rounded - lg p - 4'>;
      <div className='flex items - center justify - between mb - 4>;
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (
    <div className='bg - card border rounded - lg p - 4'>;
      <div className='flex items - center justify - between mb - 4'>;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <div>;
          <h3 className='text - xl font - bold'>{formatted_rating}</h3>;
          <div className='flex items - center'>;
            <div className='flex mr - 2'>;
              {[1, 2, 3, 4, 5].map (index => (                <Star;
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  key = {i }
<<<<<<< HEAD
                  className={`h - 4 w - 4 ${i <= Math.round (average_rating)? 'fill - yellow - 400 text - yellow - 400';
                      : 'text - gray - 300'                  }`}
=======
                  className={`h - 4 w - 4 ${i <= Math.round (average_rating)? 'fill - yellow - 400 text - yellow - 400;
                      : text - gray - 300'                  }`}
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  key = {i, }
                  className={`h - 4 w - 4 ${
                    i <= Math.round (average_rating);
                      ? 'fill - yellow - 400 text - yellow - 400';
                      : 'text - gray - 300'                  }`}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                />))}
            </div>;
            <span className='text - sm text - muted - foreground'>;
              {total_reviews} {total_reviews === 1 ? 'review' : 'reviews'}            </span>;
          </div>;
        </div>;
      </div>;
                    i <= Math.round (average_rating) ? 'fill - yellow - 400 text - yellow - 400' : 'text - gray - 300';
                  }`}
                />))}
            </div>;
            <span className='text - sm text - muted - foreground'>;
              {total_reviews} {total_reviews === 1 ? 'review' : 'reviews'}            <span className='text - sm text - muted-foreground'>;
              {total_reviews} {total_reviews === 1 ? 'review' : 'reviews'}
            </span>;
          </div>;
        </div>;
      </div>;

      {ratingDistribution && (
        <div className='space-y-2'>
          {[5, 4, 3, 2, 1].map((rating) => (

            <div key={rating} className='flex items-center gap-2'>
              <div className='w-6 text-sm text-right'>{rating}</div>
              <Star className='h-3 w-3 text-yellow-400' />
              <Progress 

          ))}
        </div>;
      )}
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
    </div>
=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
<<<<<<< HEAD
    </div>
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

    </div>;
  );

}</div>) ;
}</div>) ;
<<<<<<< HEAD


=======
<<<<<<< HEAD
}'
origin/cursor/automate-test-improve-and-merge-code-2533
      )}</div>;
  )}</div>)}</div>)}'}{rating_distribution && (<div className='space - y-2'>;
          {[5, 4, 3, 2, 1].map (rating => (<div key={rating} className='flex items - center gap - 2'>;
              <div className='w - 6 text - sm text - right'>{rating}</div>;
              <Star className='h - 3 w - 3 text - yellow - 400' />;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}"
origin/cursor/automate-test-improve-and-merge-code-2533
      )}</div>;
  )}</div>)}</div>)}}{rating_distribution && (<div className='space - y-2>;
          {[5, 4, 3, 2, 1].map (rating => (<div key={rating} className=flex items - center gap - 2'>;
              <div className='w - 6 text - sm text - right>{rating}</div>;
              <Star className=h - 3 w - 3 text - yellow - 400' />;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}"}

      {rating_distribution && (
        <div className='space - y-2'>;
          {[5, 4, 3, 2, 1].map (rating => (
            <div key={rating} className='flex items - center gap - 2'>;
              <div className='w - 6 text - sm text - right'>{rating}</div>;
              <Star className='h - 3 w - 3 text - yellow - 400' />;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <Progress;
                value={get_percentage (rating_distribution[rating] || 0)}
                className='h - 2'        <div className='space-y-2'>;
          {[5, 4, 3, 2, 1].map ((rating, ) => (
            <div key={rating} className='flex items - center gap-2'>;
              <div className='w - 6 text - sm text-right'>{rating}</div>;
              <Star className='h - 3 w - 3 text - yellow-400' />;
              <Progress;
                value = {get_percentage (rating_distribution[rating] || 0), }
                className='h-2';
              />;
              <div className='w - 8 text - xs text - muted - foreground'>                {rating_distribution[rating] || 0}              <div className='w - 8 text - xs text - muted-foreground'>;
                {rating_distribution[rating] || 0}
              </div>;
            </div>))}
        </div>)}
<<<<<<< HEAD


=======
<<<<<<< HEAD
    </div>)}</div>)}</div>)}'}</div>)}</div>)}'}</div>;
  )}</div>;
  )}</div>)}</div>)}';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    </div>)}</div>)}</div>)}"}}</div>)}</div>)}"}</div>;
    </div>)}</div>)}</div>)}}}</div>)}</div>)}"}</div>;
  )}</div>;
  )}</div>)}</div>)}";
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
    </div>);
}</div>);
}</div>);
}'}

}</div>) ;
}</div>) ;
}'};

    </div>;
  );
}
;

    </div>
  );
}</div>) ;
}</div>) ;
<<<<<<< HEAD
}'
origin/cursor/automate-test-improve-and-merge-code-2533
=======
}"
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/resolved-merge-conflicts
