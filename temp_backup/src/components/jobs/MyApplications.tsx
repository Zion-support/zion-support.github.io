/* eslint-disable */
 export function MyApplications () {;
  const {;
  applications,  isLoading, error ;
}= useJobApplications ();
const getStatusBadge = (status: ApplicationStatus) => {;
  switch (status) {;
  case "viewed": return <Badge variant="outline">Viewed</Badge>;";""
case "shortlisted": return <Badge className="bg-blue-100 text-blue-800">Shortlisted</Badge>;";""
case "interview": return <Badge className="bg-purple-100 text-purple-800">Interview</Badge>;";""
case "hired": return <Badge className="bg-green-100 text-green-800">Hired</Badge>;";""
case "rejected": return <Badge className="bg-red-100 text-red-800">Rejected</Badge>;";""
default: return <Badge variant="outline"> {;
  status ;
}</Badge> ;
}
};
<p> {;"
  error ;""
}</p> </div>) ";""
}You haven't submitted any applications yet. </p> <Button className="mt-4" asChild> <Link href="/jobs" >Browse Jobs</Link> </Button> </CardContent> </Card> </CardTitle> {;
  getStatusBadge (application.status) ;
}</div> {;"
  application.cover letter ;""
}</p>) ";""
}<div className="flex justify-between items-center" > <Button variant="outline" size="sm" className="text-xs" asChild > </Link> </Button> <Button variant="default" size="sm" className="text-xs" asChild > </Link> </Button> </div> </div> </CardContent> </Card>) ) ;'"
}</div>) ;'"'"
}'"'"'"