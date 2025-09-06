=======
Calendar,
  Clock,
  DollarSign,
  Tag,;
  Users;
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159


  if (isLoading) {
    return <JobDetailsSkeleton />
  }
  if (error |!job) {
    return (
      <>
        <Header />

export default function JobDetails() {;
  const router = useRouter(); // Init router;
  const { jobId: rawJobId } = router && router.query; // Get jobId from query;

  const jobId = typeof rawJobId === 'string' ? rawJobId : undefined;
  const { job, isLoading, error } = useJobDetails(jobId) as {;
  deadline?: string;
;
export default /**
 * JobDetails - Function description
 */
function JobDetails() {
  const router = use_router (); // Init router;
  const { job_id: rawJobId } = router.query; // Get job_id from query;
  const job_id = typeof rawJobId === 'string' ? rawJobId : undefined;
  const { job, is_loading, error } = useJobDetails (job_id) as {
    job: Job | undefined;
    isLoading: boolean;
    error: any;
  };
  const { user, isAuthenticated } = useAuth();
import React, { useState, useEffect } from 'react',;
import { useRouter } from 'next/router', // Changed from useParams, useNavigate;
import { Header } from '@/components/Header',;
import { Button } from '@/components/ui/button',;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;
import { Badge } from '@/components/ui/badge',;
import { Calendar, Clock, DollarSign, Tag, Users, Briefcase } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns',;
import { toast } from 'sonner',;
import { useAuth } from '@/hooks/useAuth',;
import useJobDetails from '@/hooks/useJobDetails',;
import { ApplyToJobModal } from '@/components/messaging/job-application',;
import { SEO } from '@/components/SEO',;
import { useWhitelabel } from '@/context/WhitelabelContext',;
import { JobDetailsSkeleton } from '@/components/jobs',;
interface Job {;
  id: string,;
  title: string,;
  description: string,;
  company_name?: string,;
  budget: { min: number, max: number },;
  client_id: string,;
  skills?: string[],;
  created_at: string,;
  category: string,;
  deadline?: string;
}

      </>
    )
  }
  const handleApply = () => {
    if (!isAuthenticated) {


>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  return (
    <>
      <SEO
        title={`${job.title} - ${isWhitelabel ? brandName : 'Zion AI Marketplace'}`}
        description={job.description.substring(0, 160)}
      />;
      <Header />;
      <main className="container mx-auto px-4 py-8">;
        <div className="mb-6">;
          <Button;
            variant="outline";
            size="sm";
            onClick={() => router.push('/careers')}
          >;

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>

                    </div>
                  </div>
                  <Badge>{job.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Job Description</h3>
                  <div className="whitespace-pre-wrap">
                    {job.description}
                  </div>
                </div>

                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start">
                  <Clock className="mt-1 h-5 w-5 text-muted-foreground" />
                  <div className="ml-3">
                    <p className="text-sm text-muted-foreground">Budget</p>
                    <p className="font-medium">{formatBudget(job.budget)}</p>
                  </div>
                </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Briefcase className="mt-1 h-5 w-5 text-muted-foreground" />
                  <div className="ml-3">
                    <p className="text-sm text-muted-foreground">Job Type</p>
                    <p className="font-medium">Freelance / Remote</p>
                  </div>
                </div>
                
                {!isOwnJob && (
                  <Button 
                    className="w-full mt-4" 
                    onClick={handleApply}
                    disabled={isOwnJob}
                  >;
                    Apply Now;
                  </Button>;
                )}
=======
                
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

                {isOwnJob && (
                  <div className="text-center p-2 bg-muted rounded-md mt-4">
                    <p className="text-sm text-muted-foreground">This is your job posting</p>
                  </div>
                )}

<<<<<<< HEAD
          }}

          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}        />
      )}
    </>
  );


  return (<> <Header /> <div className="container mx-auto px-4 py-16 text-center" > <h1 className="text-2xl font-bold mb-4" >Job Not Found</h1> <p className="mb-8" >The job you're looking for doesn't exist or has been removed.</p> <ButtononClick={'
  () => router && router.push ('/careers') ;
}>View All Jobs</Button> </div> </>) ;
}router && router.push (`/login?redirect=$ {;
  encodeURIComponent (`/jobs/$ {';
  jobId || '' ;

      {/* Job application modal */}
      {job && (
        <ApplyToJobModal;
          job={{
            id: job.id,
            title: job.title,
            description: job.description,
            company_name: job.company_name ?? 'Company',
            budget: format_budget (job.budget),
            client_id: job.client_id,
          }}
          is_open={isApplyModalOpen}
          on_close={() => setIsApplyModalOpen (false)}        />)}
    </>);
;
  return (<> <Header /> <div className="container mx - auto px - 4 py - 16 text - center" > <h1 className="text - 2xl font - bold mb - 4" >Job Not Found</h1> <p className="mb - 8" >The job you're looking for doesn't exist or has been removed.</p> <Button on_click={';
  () => router.push ('/careers') ;
}>View All Jobs</Button> </div> </>) ;
}router.push (`/login?redirect=$ {
  encodeURIComponent (`/jobs/$ {';
  job_id || '' ;
}`) ;
}`);
//Added null check for jobId return;
}setIsApplyModalOpen (true) ;

};
const isOwnJob = user?.id === job && job.client id;
`$ {;
  job && job.title ;
}
const isOwnJob = user?.id === job.client id;
`$ {
  job.title ;

}- $ {';
  is_whitelabel ? brand_name : 'Zion AI Marketplace' ;
}` ;

}description= {
  job.description.substring (0, 160) ";
}/> <Header /> <main className="container mx - auto px - 4 py - 8" > <div className="mb - 6" > <Button > ← Back to Jobs </Button> </div> <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 6" > <div className="lg:col - span - 2" > <Card> <CardHeader> <div className="flex justify - between items - start" > <div> </div> </div> <Badge> {
  job.category ";
}</Badge> </div> </CardHeader> <CardContent className="space - y-6" > <div> </div> </div> <div> </Badge>) ) ";
}</div> </div> </CardContent> </Card> </div> <div> <Card> </p> </div> </div> <div className="flex items - start" > <Briefcase className="mt - 1 h - 5 w - 5 text - muted - foreground" /> <div className="ml - 3" > <p className="text - sm text - muted - foreground" >Job Type</p> <p className="font - medium" >Freelance / Remote</p> </div> </div> {";
  !isOwnJob && (<Button className="w - full mt - 4" on_click={
  handle_apply ;
}disabled= {
  isOwnJob ;

}> Apply Now </Button>) ;
}</div>) ;
}</CardContent> </Card> </div> </div> </main> {
  /* Job application modal */ ;

}{
  job && (<ApplyToJobModal job= {
  {

  />) ;
}</>) ;
}'"
}
}

<<<<<<< HEAD
            client_id: job.client_id}}
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}
        />;
      )}
    </>;
  );
}
;
