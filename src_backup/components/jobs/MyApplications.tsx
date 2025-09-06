<<<<<<< HEAD:src/components/jobs/MyApplications.tsx
<<<<<<< HEAD
<<<<<<< HEAD
      default:        return <Badge variant="outline">{status}</Badge>
=======
<<<<<<< HEAD
      default:
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
default:
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/MyApplications.tsx

        return <Badge variant="outline">{status}</Badge>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    }
<<<<<<< HEAD:src_backup/components/jobs/MyApplications.tsx

<<<<<<< HEAD
import { useState } from "react",
import { useJobApplications } from "@/hooks/useJobApplications",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Loader2, MessageSquare, ExternalLink } from 'lucide-react'
import { formatDistanceToNow } from "date-fns",
import Link from "next/link",
import { ApplicationStatus } from "@/types/jobs",
export function MyApplications() {
  const { applications, isLoading, error } = useJobApplications(),
  
  const getStatusBadge = (status: ApplicationStatus) => {
    switch (status) {
      case "new": return <Badge variant="secondary">New</Badge>,
      case "viewed":
        return <Badge variant="outline">Viewed</Badge>,
      case "shortlisted":
        return <Badge className="bg-blue-100 text-blue-800">Shortlisted</Badge>,
      case "interview":
        return <Badge className="bg-purple-100 text-purple-800">Interview</Badge>,
      case "hired":
        return <Badge className="bg-green-100 text-green-800">Hired</Badge>,
      case "rejected":
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>,
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  },
  
  if (isLoading) {
=======
import {ApplicationStatus} from "@/types/jobs";
<<<<<<< HEAD:src/components/jobs/MyApplications.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/MyApplications.tsx
import { useState } from 'react';
import { useJobApplications } from '@/hooks/useJobApplications';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Loader2, MessageSquare, ExternalLink } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';
import { ApplicationStatus } from '@/types/jobs';

import { useState } from "react",
import { useJobApplications } from "@/hooks/useJobApplications",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Loader2, MessageSquare, ExternalLink } from 'lucide-react'
import { formatDistanceToNow } from "date-fns",
import Link from "next/link";
import { ApplicationStatus } from "@/types/jobs";
export function MyApplications() {
  const { applications, isLoading, error } = useJobApplications();
  const getStatusBadge = null;
  if (isLoading) {
<<<<<<< HEAD:src/components/jobs/MyApplications.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/MyApplications.tsx
    return (
      <div className="flex justify-center items-center p-8">
=======
"
import {ApplicationStatus} from "@/types/jobs";
    return ("
      <div className="flex justify-center items-center p-8">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/MyApplications.tsx
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }
<<<<<<< HEAD:src_backup/components/jobs/MyApplications.tsx
  
  if (error) {
    return (
=======
  if (error) {}
    return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/MyApplications.tsx
      <div className="text-center p-6 border rounded-md bg-red-50 text-red-800">
        <p>{error}</p>
      </div>
    )
  }
<<<<<<< HEAD:src_backup/components/jobs/MyApplications.tsx
  
  if (applications.length === 0) {
    return (
      <Card className="bg-muted/30">
        <CardContent className="pt-6 text-center">
=======
  if (applications.length === 0) {}
    return ("
      <Card className="bg-muted/30">"
        <CardContent className="pt-6 text-center">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/MyApplications.tsx
          <p className="text-muted-foreground">
            You haven't submitted any applications yet.
          </p>"
          <Button className="mt-4" asChild>"
            <Link href="/jobs">Browse Jobs</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }
<<<<<<< HEAD:src_backup/components/jobs/MyApplications.tsx
  
  return (
=======
  return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/MyApplications.tsx
    <div className="grid gap-4 md:grid-cols-2">
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {applications.map((application) => (

<<<<<<< HEAD:src_backup/components/jobs/MyApplications.tsx
        <Card key={application.id}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

        <Card key={application.id}>"
          <CardHeader className="pb-2">"
            <div className="flex justify-between items-start">"
              <CardTitle className="text-lg">
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/MyApplications.tsx
                {application.job?.title || "Unknown Job"}

              </CardTitle>
              {getStatusBadge(application.status)}
            </div>"
            <p className="text-sm text-muted-foreground">
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}
            </p>
          </CardHeader>
          <CardContent>"
            <div className="space-y-3">
              {application.cover_letter && ("
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
<<<<<<< HEAD:src_backup/components/jobs/MyApplications.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState } from "react",;
import { useJobApplications } from "@/hooks/useJobApplications",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Loader2, MessageSquare, ExternalLink } from 'lucide-react';
import { formatDistanceToNow } from "date-fns",;
import Link from "next/link",;
import { ApplicationStatus } from "@/types/jobs",;
export function MyApplications() {;
  const { applications, isLoading, error } = useJobApplications(),;
  const getStatusBadge = (status: ApplicationStatus) => {;
    switch (status) {;
<<<<<<< HEAD:src/components/jobs/MyApplications.tsx
<<<<<<< HEAD
      case "new": return <Badge variant="secondary">New</Badge>,;
      case "viewed":;
        return <Badge variant="outline">Viewed</Badge>,;
      case "shortlisted":;
        return <Badge className="bg-blue-100 text-blue-800">Shortlisted</Badge>,;
      case "interview":;
        return <Badge className="bg-purple-100 text-purple-800">Interview</Badge>,;
      case "hired":;
        return <Badge className="bg-green-100 text-green-800">Hired</Badge>,;
      case "rejected":;
=======
      case "new": return <Badge variant="secondary">New</Badge>;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/MyApplications.tsx
=======
"
import { useState } from "react",;"
import { useJobApplications } from "@/hooks/useJobApplications",;"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Badge } from "@/components/ui/badge",;"
import { Button } from "@/components/ui/button",;'
import { Loader2, MessageSquare, ExternalLink } from 'lucide-react';"
import { formatDistanceToNow } from "date-fns",;"
import Link from "next/link",;"
import { ApplicationStatus } from "@/types/jobs",;
export function MyApplications() { return null; }
  const { applications, isLoading, error } = useJobApplications();

  const getStatusBadge = (status: ApplicationStatus,) => {;
    switch (status) {;"
      case "new": return <Badge variant="secondary">New</Badge>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/MyApplications.tsx
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>;
      default:;"
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  if (isLoading) {;
<<<<<<< HEAD:src_backup/components/jobs/MyApplications.tsx
<<<<<<< HEAD:src/components/jobs/MyApplications.tsx
    return (;
=======
      case "new": return <Badge variant="secondary">New</Badge>;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
    return (

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/MyApplications.tsx
      <div className="flex justify-center items-center p-8">;
=======
    return ("
      <div className="flex justify-center items-center p-8">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/MyApplications.tsx
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    );
  }
<<<<<<< HEAD
;
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  if (error) {;
<<<<<<< HEAD:src_backup/components/jobs/MyApplications.tsx
    return (;
=======

    return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/MyApplications.tsx
      <div className="text-center p-6 border rounded-md bg-red-50 text-red-800">;
        <p>{error}</p>;
      </div>;
    );
  }
<<<<<<< HEAD
<<<<<<< HEAD
;
  if (applications.length === 0) {;
    return (;
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

  if (applications && applications.length === 0) {;

<<<<<<< HEAD:src_backup/components/jobs/MyApplications.tsx
    return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <Card className="bg-muted/30">;
        <CardContent className="pt-6 text-center">;
          <p className="text-muted-foreground">;
=======
    return ("
      <Card className="bg-muted/30">;"
        <CardContent className="pt-6 text-center">;"
          <p className="text-muted-foreground">;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/MyApplications.tsx
            You haven't submitted any applications yet.;
          </p>;"
          <Button className="mt-4" asChild>;"
            <Link href="/jobs">Browse Jobs</Link>;
          </Button>;
        </CardContent>;
      </Card>;
    );
  }
;
  return (;"
    <div className="grid gap-4 md:grid-cols-2">;
      {applications.map((application) => (;
        <Card key={application.id}>;"
          <CardHeader className="pb-2">;"
            <div className="flex justify-between items-start">;"
              <CardTitle className="text-lg">;"
                {application.job?.title || "Unknown Job"}
              </CardTitle>;
              {getStatusBadge(application.status)}
            </div>;"
            <p className="text-sm text-muted-foreground">;
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}
            </p>;
          </CardHeader>;
          <CardContent>;"
            <div className="space-y-3">;
              {application.cover_letter && (;"
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">;

                  {application.cover_letter}
                </p>;
              )}
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/jobs/MyApplications.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
              "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/MyApplications.tsx
              <div className="flex justify-between items-center">
                <Button "
                  variant="outline" "
                  size="sm" 
<<<<<<< HEAD:src_backup/components/jobs/MyApplications.tsx
<<<<<<< HEAD:src/components/jobs/MyApplications.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/MyApplications.tsx
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/MyApplications.tsx
                  className="text-xs"
                  asChild;
                >
                  <Link href={`/jobs/${application.job_id}`}>"
                    <ExternalLink className="h-3 w-3 mr-1" /> View Job;
                  </Link>
                </Button>
<<<<<<< HEAD
                
=======

  return ("
    <div className="grid gap-4 md:grid-cols-2">;
      {applications && applications.map((application,) => (;
        <Card key={application && application.id}>;"
          <CardHeader className="pb-2">;"
            <div className="flex justify-between items-start">;"
              <CardTitle className="text-lg">;"
                {application && application.job?.title || "Unknown Job"}
              </CardTitle>;
              {getStatusBadge(application && application.status)}
            </div>;"
            <p className="text-sm text-muted-foreground">;
              Applied {formatDistanceToNow(new Date(application && application.created_at), { addSuffix: true })}
            </p>;
          </CardHeader>;
          <CardContent>;"
            <div className="space-y-3">;
              {application && application.cover_letter && (;"
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">;
                  {application && application.cover_letter}
                </p>;
              )}
"
              <div className="flex justify-between items-center">;
                <Button"
                  variant="outline" "
                  size="sm" "
                  className="text-xs"
                  asChild>;`
                  <Link href={`/jobs/${application && application.job_id}`}>;"
                    <ExternalLink className="h-3 w-3 mr-1" /> View Job;
                  </Link>;
                </Button>;

<<<<<<< HEAD:src_backup/components/jobs/MyApplications.tsx
                <Button

<<<<<<< HEAD
                

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                <Button 
                  variant="default" 
                  size="sm"
                  className="text-xs"
                  asChild
                >
                  <Link href={`/messages?jobId=${application.job_id}`}>
                    <MessageSquare className="h-3 w-3 mr-1" /> Contact Client
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
=======
                <Button;
                <Button;
"
                  variant="default" "
                  size="sm""
                  className="text-xs"
                  asChild>;`
                  <Link href={`/messages?jobId=${application && application.job_id}`}>;"
                    <MessageSquare className="h-3 w-3 mr-1" /> Contact Client;
                  </Link>;
                </Button>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/MyApplications.tsx
      ))}
<<<<<<< HEAD:src/components/jobs/MyApplications.tsx
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
  );
}
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

    </div>;
  );
}

  },
  // Check condition;
if ( {) {}
  $2;
}
    return ("
      <div className="flex justify - center items - center p - 8">;"
        <Loader2 className="h - 8 w - 8 animate - spin text - primary" />;
      </div>);
  }
  // Check condition;
if ( {) {}
  $2;
}
    return ("
      <div className="text - center p - 6 border rounded - md bg - red - 50 text - red - 800">;
        <p>{error}</p>;
      </div>);
  }
  // Check condition;
if ( {) {}
  $2;
}
    return ("
      <Card className="bg - muted / 30">;"
        <CardContent className="pt - 6 text - center">;"
          <p className="text - muted - foreground">;'
            You haven't submitted any applications yet.;
          </p>;"
          <Button className="mt - 4" as_child>;"
            <Link href="/jobs">Browse Jobs</Link>;
          </Button>;
        </CardContent>;
      </Card>);
  }
  return ("
    <div className="grid gap - 4 md:grid - cols - 2">;
      {applications.map ((application, ) => (
        <Card key={application.id}>;"
          <CardHeader className="pb - 2">;"
            <div className="flex justify - between items - start">;"
              <CardTitle className="text - lg">;"
                {application.job?.title || "Unknown Job"}
              </CardTitle>;
              {getStatusBadge (application.status)}
            </div>;"
            <p className="text - sm text - muted - foreground">;
              Applied {formatDistanceToNow (new Date (application.created_at), { add_suffix: true })}
            </p>;
          </CardHeader>;
          <CardContent>;"
            <div className="space - y-3">;
              {application.cover_letter && ("
                <p className="text - sm text - muted - foreground line - clamp - 2 mb - 2">;
                  {application.cover_letter}
                </p>)}"
              <div className="flex justify - between items - center">;
                <Button;"
                  variant="outline";"
                  size="sm";"
                  className="text - xs";
                  as_child;
                >;`
                  <Link href={`/jobs/${application.job_id}`}>;"
                    <ExternalLink className="h - 3 w - 3 mr - 1" /> View Job;
                  </Link>;
                </Button>;
                <Button;"
                  variant="default";"
                  size="sm";"
                  className="text - xs";
                  as_child;
                >;`
                  <Link href={`/messages?job_id=${application.job_id}`}>;"
                    <MessageSquare className="h - 3 w - 3 mr - 1" /> Contact Client;
                  </Link>;
                </Button>;
              </div>;
            </div>;
          </CardContent>;
        </Card>))}
    </div>);
}

    </div>;
  );
}
;

    </div>;
  );

}
<<<<<<< HEAD:src_backup/components/jobs/MyApplications.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
<<<<<<< HEAD
=======

                  {application.cover_letter}
                </p>
              )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/MyApplications.tsx
    </div>
  );

};
<p> {;
  error ;
}</p> </div>) ";
}You haven't submitted any applications yet. </p> <Button className="mt-4" asChild> <Link href="/jobs" >Browse Jobs</Link> </Button> </CardContent> </Card> </CardTitle> {;
  getStatusBadge (application.status) ;
}</div> {;
  application.cover letter ;
}</p>) ";
}<div className="flex justify-between items-center" > <Button variant="outline" size="sm" className="text-xs" asChild > </Link> </Button> <Button variant="default" size="sm" className="text-xs" asChild > </Link> </Button> </div> </div> </CardContent> </Card>) ) ;
}</div>) ;
}'"
<<<<<<< HEAD:src/components/jobs/MyApplications.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/MyApplications.tsx
=======
;'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/MyApplications.tsx
