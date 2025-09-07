/* eslint-disable */
 interface ProjectReviewSectionProps {;
  project: Project ;
}export function ProjectReviewSection ({;
  project ;
}: ProjectReviewSectionProps) {;
  const {;
  user ;
}= useAuth ();
const {;
  reviews, userReview,  isLoading, reportReview ;
}= useReviews (project.id);
const [isReviewModalOpen, setIsReviewModalOpen] = useState (false);
const clientProfile = project?.talent profile;
const talentProfile = project.talent profile;
//Determine who the current user needs to review const revieweeId = isClient ? project.talent id : project.client id;
const revieweeName = isClient ? talentProfile?.full name || "Talent" : clientProfile?.full name || "Client";";""
mt-6"> <CardHeader> <CardTitle className=" flex items-center gap-2"> <Star className=" h-5 w-5 text-yellow-400"/> Reviews </CardTitle> <CardDescription> Reviews are visible once the project is completed and both parties submit feedback </CardDescription> </CardHeader> <CardContent> {";""
  canLeaveReview ? (<div className=" bg-muted/20 rounded-lg p-4 text-center"> <h3 className=" font-medium mb-2">Share your experience</h3> <p className=" text-sm text-muted-foreground mb-3"> Your review will help build a trustworthy community </p> <Button onClick={;
  () => setIsReviewModalOpen (true) ;
}> Leave Review </Button> </div> Edit Review </Button>) ;
}</div>) : null ;
}</div>) ;
}<ReviewsList reviews= {;
  reviews ;
}isLoading= {;
  isLoading ;"
}onReportReview= {;""
  reportReview ";""
}/> </div>) : (<div className=" bg-muted/20 rounded-lg p-6 text-center"> <h3 className=" font-medium mb-2">Reviews will be available once the project is completed</h3> <p className=" text-sm text-muted-foreground" > After the project is marked as completed, both parties will be able to leave reviews </p> </div>) ;
}</CardContent> {;
  /* Review Modal */ ;
}{;
  (isClient || isTalent) && (<LeaveReviewModal projectId= {;
  project.id ;
}revieweeId= {;
  revieweeId ;
}revieweeName= {;
  revieweeName ;
}isOpen= {;
  isReviewModalOpen ;
}onClose= {;
  () => setIsReviewModalOpen (false) ;
}/>) ;"
}</Card>) ;""
}"""