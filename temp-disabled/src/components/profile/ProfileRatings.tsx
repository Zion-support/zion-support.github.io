<<<<<<< HEAD:temp-disabled/src/components/profile/ProfileRatings.tsx
:src/components/profile/ProfileRatings.tsx
  userId: string;
  averageRating?: number;
  ratingCount?: number
   averageRating?: number;
   ratingCount?: number} export function ProfileRatings({ userId, averageRating = 0, ratingCount = 0 }: ProfileRatingsProps) { const { reviews, isLoading, fetchUserReviews, reportReview } = useReviews() const [ratingDistribution, setRatingDistribution] = useState<Record <number, number" >>({})"
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
}

export function ProfileRatings({ userId, averageRating;
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <ReviewStats
            averageRating={averageRating}
            totalReviews={ratingCount}
            ratingDistribution={ratingDistribution}          />
        </div>
<div className='md:w-2/3'>
          <Tabs defaultValue='all'>
            <TabsList className='mb-4'>
              <TabsTrigger value='all'>
                All Reviews ({reviews.length})
              </TabsTrigger>
              <TabsTrigger value='positive'>Positive</TabsTrigger>
              <TabsTrigger value='critical'>Critical</TabsTrigger>
            </TabsList>

            <TabsContent value='all'>
              <ReviewsList
                reviews={reviews}
                isLoading={isLoading}
                onReportReview={reportReview}              />
            </TabsContent>
            <TabsContent value='positive'>
              <ReviewsList
                reviews={reviews.filter(r => r.rating >= 4)}                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>
<TabsContent value='positive'>
              <ReviewsList
                reviews={reviews.filter(r => r.rating >= 4)}
                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>
<TabsContent value='critical'>
              <ReviewsList
                reviews={reviews.filter(r => r.rating < 4)}
                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}, [reviews]);
//Fetch reviews when component mounts return (<div className="space-y-6" > <div className="flex flex-col md:flex-row gap-6" > <div className="md:w-1/3" > <ReviewStats averageRating= {;
  averageRating ;
}totalReviews= {;
  ratingCount ;
}ratingDistribution= {;
  ratingDistribution ";
}/> </div> </TabsList> <TabsContent value="all" > <ReviewsList reviews= {;
  reviews ;
}isLoading= {;
  isLoading ;
}onReportReview= {;
  reportReview ";
}/> </TabsContent> <TabsContent value="positive" > <ReviewsList reviews= {;
  reviews.filter ( (r) => r.rating >= 4) ;
}isLoading= {;
  isLoading ;
}onReportReview= {;
  reportReview ";
}/> </TabsContent> <TabsContent value="critical" > <ReviewsList reviews= {;
  reviews.filter ( (r) => r.rating < 4) ;
}isLoading= {;
  isLoading ;
}onReportReview= {;
  reportReview ;
}/> </TabsContent> </Tabs> </div> </div> </div>) ;
}"

:temp-disabled/src/components/profile/ProfileRatings.tsx
=======
<<<<<<< HEAD
import { useState, useEffect } from 'react'
import { useState, useEffect } from 'react'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/ProfileRatings.tsx
}

      })

<<<<<<< HEAD:temp-disabled/src/components/profile/ProfileRatings.tsx
import { useState, useEffect } from "react";""
import { Star } from 'lucide-react
import { ReviewStats } from "@/components/reviews/ReviewStats";""
import { ReviewsList } from "@/components/reviews/ReviewsList";""
import { useReviews } from "@/hooks/useReviews";""
import { Button } from "@/components/ui/button";""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";"
=======
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { Star } from 'lucide-react'
import { ReviewStats } from "@/components/reviews/ReviewStats",
import { ReviewsList } from "@/components/reviews/ReviewsList",
import { useReviews } from "@/hooks/useReviews",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
=======
import { useState, useEffect } from "react";
import { Star } from 'lucide-react'
import { ReviewStats } from "@/components/reviews/ReviewStats";
import { ReviewsList } from "@/components/reviews/ReviewsList";
import { useReviews } from "@/hooks/useReviews";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/ProfileRatings.tsx
interface ProfileRatingsProps {
  // TODO: Implement
  userId: string,
  averageRating?: number;
  ratingCount?: number;


export function ProfileRatings({ userId, averageRating = 0, ratingCount = 0 }: ProfileRatingsProps) { const { reviews, isLoading, fetchUserReviews, reportReview  } = useReviews(),
  const [ ratingDistribution, setRatingDistribution ] = useState<Record<number, number>>({}),

      const distribution: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
</number>
        if (review.rating >= 1 && review.rating <= 5) {
          distribution[ review.rating ] = (distribution[review.rating] || 0) + 1;
      });
      

      setRatingDistribution(distribution)


  }, [reviews]);

  // Fetch reviews when component mounts;
  useEffect(() => {;
    fetchUserReviews(userId);
  }, [userId]);


<<<<<<< HEAD:temp-disabled/src/components/profile/ProfileRatings.tsx
  return ("
    <div className='space-y-6'>
</div>
      <div className='flex flex-col md:flex-row gap-6'>
        <div className='md:w-1/3'>          <ReviewStats;
</div>)
  const [ratingDistribution, setRatingDistribution] = useState<Record<number number>>({}),;

      const distribution: Record<number number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },;
        if (review.rating >= 1 && review.rating <= 5) {;
          distribution[review.rating] = (distribution[review.rating] || 0) + 1;
      }),;
      setRatingDistribution(distribution);
  }, [reviews]),
  
  // Fetch reviews when component mounts;
  useEffect(() => {
    fetchUserReviews(userId)
  }, [userId]),
  
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/ProfileRatings.tsx
  return (
    <div className="space-y-6">"
</div>"
      <div className="flex flex-col md:flex-row gap-6">"
        <div className="md:w-1/3">"
          <ReviewStats;
            averageRating={averageRating}
            totalReviews={ratingCount}
            <TabsContent value='all'>              <ReviewsList

            ratingDistribution={ratingDistribution}
          />
<<<<<<< HEAD:temp-disabled/src/components/profile/ProfileRatings.tsx

        "
        <div className="md:w-2/3">"
          <Tabs defaultValue="all">"
            <TabsList className="mb-4">"
)"
              <TabsTrigger value="all">All Reviews ({reviews.length})""
              <TabsTrigger value="positive">Positive""
              <TabsTrigger value="critical">Critical"
            <TabsContent value="all">"

              <ReviewsList;
                reviews={reviews}
                isLoading={isLoading}
                onReportReview={reportReview}              />
=======
        </div>
        
        <div className="md:w-2/3">
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Reviews ({reviews.length})</TabsTrigger>
              <TabsTrigger value="positive">Positive</TabsTrigger>
              <TabsTrigger value="critical">Critical</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
                reviews={reviews}
                isLoading={isLoading}
                onReportReview={reportReview}              />
            </TabsContent>
            <TabsContent value='positive'>
              <ReviewsList
                reviews={reviews.filter(r => r.rating >= 4)}                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>
            <TabsContent value='critical'>
              <ReviewsList
                reviews={reviews.filter(r => r.rating < 4)}                isLoading={isLoading}                reviews={reviews.filter((r) => r.rating >= 4)}
            <TabsContent value="positive">
              <ReviewsList
            ratingDistribution={ratingDistribution}
          />
        </div>
        
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
interface ProfileRatingsProps {

  userId: string
averageRating?: number
ratingCount?: number
}export function ProfileRatings ({
  userId,  averageRating = 0, ratingCount = 0
}: ProfileRatingsProps) {
  const {
  reviews, isLoading,  fetchUserReviews, reportReview
}= useReviews ()
const [ratingDistribution, setRatingDistribution] = useState<Record<number number>> ({
})
//Calculate rating distribution useEffect ( () => {
  if (reviews.length > 0) {
  const distribution: Record<number number> = {
  1: 0, 2: 0, 3: 0,  4: 0, 5: 0
}
reviews.forEach ( (review) => {
  if (review.rating >= 1 && review.rating <= 5) {
  distribution[review.rating] = (distribution[review.rating] |0) + 1
export function ProfileRatings({
  userId
  averageRating = 0
  ratingCount = 0
}: ProfileRatingsProps) {
  const { reviews, isLoading, fetchUserReviews, reportReview } = useReviews()
  const [ratingDistribution, setRatingDistribution] = useState<
    Record<number, number>
  >({})
  // Calculate rating distribution
  useEffect((,) => {
    if (reviews.length > 0) {
      const distribution: Record<number, number> = {
        1: 0
        2: 0
        3: 0
        4: 0
        5: 0
      }
      reviews.forEach(review => {        if (review.rating >= 1 && review.rating <= 5) {
          distribution[review.rating] = (distribution[review.rating] |0) + 1
        }
      })
      setRatingDistribution(distribution)
    }
  }, [reviews])
  // Fetch reviews when component mounts
  useEffect(() => {
    fetchUserReviews(userId)
  }, [userId])
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div className='space-y-6'>
      <div className='flex flex-col md:flex-row gap-6'>
        <div className='md:w-1/3'>          <ReviewStats
<<<<<<< HEAD
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
  useEffect(() => {
    fetchUserReviews(userId)
  }, [userId])
  return (
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  return (
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",

interface ProfileRatingsProps {
  userId: string,
  averageRating?: number,
  ratingCount?: number
import { useState, useEffect } from "react",;
import { Star } from 'lucide-react';
import { ReviewStats } from "@/components/reviews/ReviewStats",;
import { ReviewsList } from "@/components/reviews/ReviewsList",;
import { useReviews } from "@/hooks/useReviews",;
import { Button } from "@/components/ui/button",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
interface ProfileRatingsProps {;
  userId: string,;
  averageRating?: number,;
  ratingCount?: number;
}
;
export function ProfileRatings({ userId, averageRating = 0, ratingCount = 0 }: ProfileRatingsProps) {;
  const { reviews, isLoading, fetchUserReviews, reportReview } = useReviews(),;
  const [ratingDistribution, setRatingDistribution] = useState<Record<number number>>({}),;
  // Calculate rating distribution;
  useEffect(() => {;
    if (reviews.length > 0) {;
      const distribution: Record<number number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },;
      reviews.forEach((review) => {;
        if (review.rating >= 1 && review.rating <= 5) {;
          distribution[review.rating] = (distribution[review.rating] || 0) + 1;
        }
      }),;
      setRatingDistribution(distribution);
    }
  }, [reviews]),
  
  // Fetch reviews when component mounts
  useEffect(() => {
    fetchUserReviews(userId)
  }, [userId]),
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <ReviewStats
            averageRating={averageRating}
            totalReviews={ratingCount}
<<<<<<< HEAD
            ratingDistribution={ratingDistribution}          />
        </div>
        <div className='md:w-2/3'>
          <Tabs defaultValue='all'>
            <TabsList className='mb-4'>
              <TabsTrigger value='all'>
                All Reviews ({reviews.length})
              </TabsTrigger>
              <TabsTrigger value='positive'>Positive</TabsTrigger>
              <TabsTrigger value='critical'>Critical</TabsTrigger>
            </TabsList>
            <TabsContent value='all'>              <ReviewsList
            <TabsContent value='all'>              <ReviewsList        
=======


            ratingDistribution={ratingDistribution}
          />
        </div>
        
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="md:w-2/3">
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Reviews ({reviews.length})</TabsTrigger>
              <TabsTrigger value="positive">Positive</TabsTrigger>
              <TabsTrigger value="critical">Critical</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
<<<<<<< HEAD
=======

              <ReviewsList

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                reviews={reviews}
                isLoading={isLoading}
                onReportReview={reportReview}              />
            </TabsContent>
<<<<<<< HEAD
                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>
            <TabsContent value='critical'>
              <ReviewsList
                reviews={reviews.filter(r => r.rating < 4)}                reviews={reviews.filter((r) => r.rating < 4)}
=======


            ratingDistribution={ratingDistribution}          />;
        </div>;

        <div className='md:w-2/3'>;
          <Tabs defaultValue='all'>;
            <TabsList className='mb-4'>;
              <TabsTrigger value='all'>;
                All Reviews ({reviews && reviews.length});
              </TabsTrigger>;
              <TabsTrigger value='positive'>Positive</TabsTrigger>;
              <TabsTrigger value='critical'>Critical</TabsTrigger>;
            </TabsList>;

            <TabsContent value='all'>              <ReviewsList
        <div className="md:w-2/3">;
          <Tabs defaultValue="all">;
            <TabsList className="mb-4">;
              <TabsTrigger value="all">All Reviews ({reviews && reviews.length})</TabsTrigger>;
              <TabsTrigger value="positive">Positive</TabsTrigger>;
              <TabsTrigger value="critical">Critical</TabsTrigger>;
            </TabsList>;

            <TabsContent value="all">;
                reviews={reviews}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/ProfileRatings.tsx

            
        </div>;"
        <div className='md:w-2/3'>;
          <Tabs defaultValue='all'>;

            <TabsList className='mb-4'>;

              <TabsTrigger value='all'>;

              ;
              <TabsTrigger value='positive'>Positive;
              <TabsTrigger value='critical'>Critical;
            <TabsContent value='all'>              <ReviewsList;

        <div className="md:w-2/3">;"
          <Tabs defaultValue="all">;"
            <TabsList className="mb-4">;"
              <TabsTrigger value="all">All Reviews ({reviews && reviews.length});""
              <TabsTrigger value="positive">Positive;""
              <TabsTrigger value="critical">Critical;"
            ;"
            <TabsContent value="all">;"
            <TabsContent value="positive">"

                reviews={reviews.filter((r) => r.rating >= 4)}
<<<<<<< HEAD:temp-disabled/src/components/profile/ProfileRatings.tsx
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                isLoading={isLoading}
                onReportReview={reportReview}              />;
            </TabsContent>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/ProfileRatings.tsx

            <TabsContent value='positive'>;

                reviews={reviews && reviews.filter(r => r && r.rating >= 4)}                isLoading={isLoading}

            <TabsContent value='critical'>;

                reviews={reviews && reviews.filter(r => r && r.rating < 4)}                isLoading={isLoading}                reviews={reviews && reviews.filter((r) => r && r.rating >= 4)}


            <TabsContent value="positive">;"

                reviews={reviews && reviews.filter((r) => r && r.rating >= 4)}

<<<<<<< HEAD:temp-disabled/src/components/profile/ProfileRatings.tsx



=======
<<<<<<< HEAD
            
            <TabsContent value="critical">
                reviews={reviews.filter((r) => r.rating < 4)}
                onReportReview={reportReview}
  reportReview
}/> </TabsContent> </Tabs> </div> </div> </div>)
}"}
            <TabsContent value='positive'>
              <ReviewsList
                reviews={reviews.filter(r => r.rating >= 4)}                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>
            <TabsContent value='critical'>
              <ReviewsList
                reviews={reviews.filter(r => r.rating < 4)}                isLoading={isLoading}                reviews={reviews.filter((r) => r.rating >= 4)}
            
            <TabsContent value="positive">
              <ReviewsList
            ratingDistribution={ratingDistribution}
          />
        </div>
        
        <div className="md:w-2/3">
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Reviews ({reviews.length})</TabsTrigger>
              <TabsTrigger value="positive">Positive</TabsTrigger>
              <TabsTrigger value="critical">Critical</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <ReviewsList
                reviews={reviews}
                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>
            
            <TabsContent value="positive">
              <ReviewsList
                reviews={reviews.filter((r) => r.rating >= 4)}
                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>
            <TabsContent value='critical'>
              <ReviewsList
                reviews={reviews.filter(r => r.rating < 4)}                reviews={reviews.filter((r) => r.rating < 4)}
            
            <TabsContent value="critical">
              <ReviewsList
=======

            
            <TabsContent value="positive">
              <ReviewsList
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/ProfileRatings.tsx
                reviews={reviews.filter((r) => r.rating < 4)}


                reviews={reviews && reviews.filter(r => r && r.rating < 4)}                reviews={reviews && reviews.filter((r) => r && r.rating < 4)}


            <TabsContent value="critical">;"

                reviews={reviews && reviews.filter((r) => r && r.rating < 4)}

}/>   </div> </div> </div>) ;
const [rating_distribution, setRatingDistribution] = useState < Record < number number>> ({)
//Calculate rating distribution useEffect ( () => {
  // Check condition;
if ( {) {
  $2;
  const distribution: Record < number number> = {,
  1: 0, 2: 0, 3: 0,  4: 0, 5: 0;
reviews.for_each ( (review) => {
  // Check condition;
export /**
 * ProfileRatings - Function description;
 */
function ProfileRatings() {
  const { reviews, is_loading, fetchUserReviews, report_review } = use_reviews ();
  const [rating_distribution, setRatingDistribution] = useState<;
    Record < number, number>;
  >({});
  // Calculate rating distribution;
  useEffect ((, ) => {
    // Check condition;
      const distribution: Record < number, number> = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      reviews.for_each (review => {        // Check condition;)
      setRatingDistribution (distribution);
  // Fetch reviews when component mounts;
  useEffect (() => {
    fetchUserReviews (user_id);
  }, [user_id]);
    <div className='space - y-6'>;
      <div className='flex flex - col md:flex - row gap - 6'>;
        <div className='md:w - 1/3'>          <ReviewStats;
    <div className="space - y-6">;"
      <div className="flex flex - col md:flex - row gap - 6">;"
        <div className="md:w - 1/3">;"
            average_rating={average_rating}
            total_reviews={rating_count}
            rating_distribution={rating_distribution}          />;

        <div className='md:w - 2/3'>;
          <Tabs default_value='all'>;

            <TabsList className='mb - 4'>;



        <div className="md:w - 2/3">;"
          <Tabs default_value="all">;"
            <TabsList className="mb - 4">;"
              <TabsTrigger value="all">All Reviews ({reviews.length});""


                reviews={reviews.filter (r => r.rating >= 4)}                is_loading={is_loading}


                reviews={reviews.filter (r => r.rating < 4)}                is_loading={is_loading}                reviews={reviews.filter ((r) => r.rating >= 4)}


                reviews={reviews.filter ((r) => r.rating >= 4)}


                reviews={reviews.filter (r => r.rating < 4)}                reviews={reviews.filter ((r) => r.rating < 4)}


                reviews={reviews.filter ((r) => r.rating < 4)}
:src/components/profile/ProfileRatings.tsx

        </div>;
</ReviewsList>

            </TabsContent>;
          </Tabs>;
        </div>;
      </div>;
<<<<<<< HEAD
    </div>;
  );
}
;
}
;
=======

:temp-disabled/src/components/profile/ProfileRatings.tsx
    </div>);"
//Fetch reviews when component mounts return (<div className="space - y-6" > <div className="flex flex - col md:flex - row gap - 6" > <div className="md:w - 1/3" > <ReviewStats average_rating= {"
}/> </div>  <TabsContent value="all" > <ReviewsList reviews= {"
}/>  <TabsContent value="positive" > <ReviewsList reviews= {"
}/>  <TabsContent value="critical" > <ReviewsList reviews= {"
)
  reviews.filter ( (r) => r.rating < 4);
}is_loading= {
  is_loading;
}onReportReview= {
  report_review;
<<<<<<< HEAD:temp-disabled/src/components/profile/ProfileRatings.tsx
:src/components/profile/ProfileRatings.tsx
}/>   </div> </div> </div>);"
pr-12325
}/> </TabsContent> </Tabs> </div> </div> </div>);"

:temp-disabled/src/components/profile/ProfileRatings.tsx
=======
}/> </TabsContent> </Tabs> </div> </div> </div>);
}"}
}
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/ProfileRatings.tsx
