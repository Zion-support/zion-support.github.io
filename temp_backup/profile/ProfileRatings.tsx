/* eslint-disable */
 interface ProfileRatingsProps {;
  userId: string;
averageRating?: number;
ratingCount?: number ;
}export function ProfileRatings ({;
  userId,  averageRating = 0, ratingCount = 0 ;
}: ProfileRatingsProps) {;
  const {;
  reviews, isLoading,  fetchUserReviews, reportReview ;
}= useReviews ();
const [ratingDistribution, setRatingDistribution] = useState<Record<number number>> ({;
});
//Calculate rating distribution useEffect ( () => {;
  if (reviews.length > 0) {;
  const distribution: Record<number number> = {;
  1: 0, 2: 0, 3: 0,  4: 0, 5: 0 ;
};
reviews.forEach ( (review) => {;
  if (review.rating >= 1 && review.rating <= 5) {;
  distribution[review.rating] = (distribution[review.rating] || 0) + 1 ;
}
});
}
}, [reviews]);
//Fetch reviews when component mounts return (<div className="space-y-6" > <div className="flex flex-col md:flex-row gap-6" > <div className="md:w-1/3" > <ReviewStats averageRating= {;
  averageRating ;
}totalReviews= {;
  ratingCount ;"
}ratingDistribution= {;""
  ratingDistribution ";""
}/> </div> </TabsList> <TabsContent value="all" > <ReviewsList reviews= {;
  reviews ;
}isLoading= {;
  isLoading ;"
}onReportReview= {;""
  reportReview ";""
}/> </TabsContent> <TabsContent value="positive" > <ReviewsList reviews= {;
  reviews.filter ( (r) => r.rating >= 4) ;
}isLoading= {;
  isLoading ;"
}onReportReview= {;""
  reportReview ";""
}/> </TabsContent> <TabsContent value="critical" > <ReviewsList reviews= {;
  reviews.filter ( (r) => r.rating < 4) ;
}isLoading= {;
  isLoading ;
}onReportReview= {;
  reportReview ;"
}/> </TabsContent> </Tabs> </div> </div> </div>) ;""
}"""