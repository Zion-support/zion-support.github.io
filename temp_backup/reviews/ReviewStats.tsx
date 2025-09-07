/* eslint-disable */
 interface ReviewStatsProps {;
  averageRating: number;
totalReviews: number;
ratingDistribution?: Record<number number> ;
}export function ReviewStats ({;
  averageRating,  totalReviews, ratingDistribution ;
}: ReviewStatsProps) {;
  //Format the average rating to one decimal place const formattedRating = averageRating.toFixed (1);
//Calculate percentages for distribution if available const getPercentage = (count: number) => {;
  if (totalReviews === 0) return 0;
return (count / totalReviews) * 100 ;
};
return (<div className="bg-card border rounded-lg p-4" > <div className="flex items-center justify-between mb-4" > <div> <h3 className="text-xl font-bold" > {;""
  formattedRating ";""
}</h3> <div className="flex items-center" > <div className="flex mr-2" > {;
  [1, 2, 3,  4, 5].map ( (i) => (<Star key= {;
  i ;"
}className= {;""
  `h-4 w-4 $ {";""
  i <= Math.round (averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300" ;"`
}` ;""
}/>) ) ";""
}</div> <span className="text-sm text-muted-foreground" > {;"
  totalReviews ;""
}{";""
  totalReviews === 1 ? "review" : "reviews" ;
}
}</div>) ;"
}</div>) ;""
}"""`