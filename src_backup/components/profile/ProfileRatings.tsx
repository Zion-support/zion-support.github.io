  userId: string;
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
