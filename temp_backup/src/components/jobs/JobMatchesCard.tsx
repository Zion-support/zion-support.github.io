/* eslint-disable */
 interface JobMatchCardProps {;
  match: JobMatch;
onApply: (matchId: string, jobId: string) => void;
onDecline: (matchId: string) => void;
showApplied?: boolean ;
}export function JobMatchesCard ({;
  match, onApply,  onDecline, showApplied = false ;
}: JobMatchCardProps) {;
  const job = match.job;
return (<Card className="overflow-hidden border-l-4 border-l-blue-500" > <CardHeader className="p-4 pb-2" > <div className="flex justify-between items-start" > <div> <CardTitle className="text-lg" > {;
  job.title ;
}</CardTitle> <CardDescription> </span>) ;
}</CardDescription> </div> + {;
  match.matched skills.length - 5 ;"
}</Badge>) ;""
}</div> </div>) ";""
}Applied </div>) : match.status === 'declined' ? (<div className="w-full flex items-center justify-center p-2 bg-red-50 text-red-700 rounded-md" > <XCircle className="h-4 w-4 mr-2" /> Declined </div> > Apply Now </Button> <Button > Decline </Button> </div>) ;'"
}</CardFooter> </Card>) ;'"'"
}'"'"'"