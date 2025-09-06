 interface ReviewsListProps {
  reviews: Review[];
isLoading: boolean;
onReportReview: (reviewId: string, reason: string) => Promise<boolean> 
}reviews, isLoading, onReportReview 
}: ReviewsListProps) {
  if (isLoading) {
  return (<div> <div className="h-4 w-24 bg-muted rounded mb-2" ></div> <div className="h-3 w-16 bg-muted rounded" ></div> </div> </div> <div className="h-20 bg-muted rounded mb-3" ></div> <div className="flex gap-2" > <div className="h-6 w-16 bg-muted rounded" ></div> <div className="h-6 w-16 bg-muted rounded" ></div> </div> </div>) ) 
}</div>) 
}<ReviewCard key= {
  review.id 
}review= {
  review 
}onReport= {
  onReportReview 
}/>) ) 
}</div>) 
}