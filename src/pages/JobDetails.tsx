  Clock,
  DollarSign,
  Tag,;
  Users;
  Briefcase;
} from 'lucide-react';import { formatDistanceToNow } from 'date-fns';
import { toast } from 'sonner';
import { useAuth } from '@/hooks/useAuth';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router', // Changed from useParams, useNavigate
import { Header  } from '@/components/Header';
import { Button  } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';
import { Badge  } from '@/components/ui/badge';
import { Calendar, Clock, DollarSign, Tag, Users, Briefcase } from 'lucide-react'
import { formatDistanceToNow  } from 'date-fns';
import { toast  } from 'sonner';
import { useAuth  } from '@/hooks/useAuth';
origin/cursor/automate-test-improve-and-merge-code-2533
import useJobDetails from '@/hooks/useJobDetails';
import { ApplyToJobModal  } from '@/components/messaging/job-application';
import { SEO  } from '@/components/SEO';
import { useWhitelabel  } from '@/context/WhitelabelContext';
import { JobDetailsSkeleton } from '@/components/jobs';
interface Job {
  id: string;
  title: string;
  description: string;
  company_name?: string;

  budget: { min: number; max: number }

  budget: { min: number, max: number },
origin/cursor/automate-test-improve-and-merge-code-2533
  client_id: string;
  skills?: string[];
  created_at: string;
  category: string;

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

  deadline?: string;
export default function JobDetails() {
  // navigate is now router
  const { isWhitelabel, brandName } = useWhitelabel(),
  
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),


  const formatBudget = (budget: any) => {
    if (!budget) return "Not specified",
    return `$${budget.min} - $${budget.max}`
  },


  if (isLoading) {
    return <JobDetailsSkeleton />;
  }
  if (error |!job) {


  const formatBudget = (budget: any) => {;
    if (!budget) return 'Not specified';
    return `$${budget && budget.min} - $${budget && budget.max}`;
  };
  if (isLoading) {;
    return <JobDetailsSkeleton />;
    return (
      <>
        <Header />

        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
          <p className="mb-8">The job you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => router.push('/careers')}>View All Jobs</Button>
        </div>


      </>
    )
  }

  if (error || !job) {;
    return (
      <>;
        <Header />;
        <div className='container mx-auto px-4 py-16 text-center'>;
          <h1 className='text-2xl font-bold mb-4'>Job Not Found</h1>;
          <p className='mb-8'>;
            The job you're looking for doesn't exist or has been removed.;
          </p>;
          <Button onClick={() => router && router.push('/careers')}>View All Jobs</Button>        </div>;
      </>;
    );
  }


  const handleApply = () => {;
    if (!isAuthenticated) {;
      toast && toast.error('Please log in to apply for this job');
      router && router.push(;
        `/login?redirect=${encodeURIComponent(`/jobs/${jobId || ''}`)}`;
      ); // Added null check for jobId;
      return;
    }

    if (;
      user?.userType !== 'talent' &&;
      user?.userType !== 'admin' &&;
      user?.userType !== 'client';
    ) {;
      toast && toast.error('Only job seekers can apply for jobs');

      return;
    }
    setIsApplyModalOpen(true);

  };

  const handleApplySuccess = async (appliedJobId: string) => {;
    toast && toast.success('Application submitted successfully!');
    setIsApplyModalOpen(false);
  };
  const isOwnJob = user?.id === job && job.client_id;


  return (
    <>;
      <SEO
        title={`${job && job.title} - ${isWhitelabel ? brandName : 'Zion AI Marketplace'}`}
        description = {job && job.description.substring(0, 160),}
      />;
      <Header />;
      <main className='container mx-auto px-4 py-8'>;
        <div className='mb-6'>;
          <Button
            variant='outline'
            size='sm'


      toast.error("Please log in to apply for this job"),
      router.push(`/login?redirect=${encodeURIComponent(`/jobs/${jobId || ''}`)}`), // Added null check for jobId
      return
    }

    if (user?.userType !== "talent" && user?.userType !== "admin" && user?.userType !== "client") {
      toast.error("Only job seekers can apply for jobs"),
      return
    }
    
    setIsApplyModalOpen(true)
  },

  const handleApplySuccess = async (appliedJobId: string) => {
    toast.success("Application submitted successfully!"),
    setIsApplyModalOpen(false)
  },




  if (isLoading) {
    return <JobDetailsSkeleton />
  }
  if (error |!job) {
    return (
      <>
        <Header />
      </>
    )
  }
  const handleApply = () => {
    if (!isAuthenticated) {

  return (
    <>
      <SEO 
        title={`${job.title} - ${isWhitelabel ? brandName : 'Zion AI Marketplace'}`}
        description={job.description.substring(0, 160)}
      />
      <Header />
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
                  <DollarSign className="mt-1 h-5 w-5 text-muted-foreground" />
                  <div className="ml-3">
                    <p className="text-sm text-muted-foreground">Budget</p>
                    <p className="font-medium">{formatBudget(job.budget)}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="mt-1 h-5 w-5 text-muted-foreground" />
                  <div className="ml-3">
                    <p className="text-sm text-muted-foreground">Deadline</p>
                    <p className="font-medium">
                      {job.deadline ? new Date(job.deadline).toLocaleDateString() : "Flexible"}
                    </p>
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



                {isOwnJob && (
                  <div className='text-center p-2 bg-muted rounded-md mt-4'>
                    <p className='text-sm text-muted-foreground'>
                      This is your job posting
                    </p>
                  </div>
                )}
              </CardContent>;
            </Card>;
          </div>;
        </div>;
      </main>;



      {/* Job application modal */}
      {job && (;
        <ApplyToJobModal
          job={{
          }}

  deadline?: string
}

export default function JobDetails() {
  const router = null;
            client_id: job.client_id}}
origin/cursor/automate-test-improve-and-merge-code-2533
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}        />;
      )}
    </>;
  );
  return (<> <Header /> <div className="container mx-auto px-4 py-16 text-center" > <h1 className="text-2xl font-bold mb-4" >Job Not Found</h1> <p className="mb-8" >The job you're looking for doesn't exist or has been removed.</p> <Button onClick={';
  () => router.push ('/careers') ;
}>View All Jobs</Button> </div> </>) ;
}router.push (`/login?redirect=$ {encodeURIComponent (`/jobs/$ {';
  jobId |'' ;
}`) ;
}`);
//Added null check for job_id return;
}setIsApplyModalOpen (true) ;
}
const isOwnJob = user?.id === job.client id;
`$ {job.title ;
}- $ {';
  isWhitelabel ? brandName : 'Zion AI Marketplace' ;
}` ;
}description= {job.description.substring (0, 160) ";
}/> <Header /> <main className="container mx-auto px-4 py-8" > <div className="mb-6" > <Button > ← Back to Jobs </Button> </div> <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" > <div className="lg:col-span-2" > <Card> <CardHeader> <div className="flex justify-between items-start" > <div> </div> </div> <Badge> {job.category ";
}</Badge> </div> </CardHeader> <CardContent className="space-y-6" > <div> </div> </div> <div> </Badge>) ) ";
}</div> </div> </CardContent> </Card> </div> <div> <Card> </p> </div> </div> <div className="flex items-start" > <Briefcase className="mt-1 h-5 w-5 text-muted-foreground" /> <div className="ml-3" > <p className="text-sm text-muted-foreground" >Job Type</p> <p className="font-medium" >Freelance / Remote</p> </div> </div> {";
  !isOwnJob && (<Button className="w-full mt-4" onClick={handleApply ;
}disabled= {isOwnJob ;
}> Apply Now </Button>) ;
}</div>) ;
}</CardContent> </Card> </div> </div> </main> {/* Job application modal */ ;
}{job && (<ApplyToJobModal job= {;
  {;
  />) ;
}</>) ;
}'";
}
}
            client_id: job.client_id}}
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}
        />;
      )}
    </>;
  );
}
;
}'"
origin/cursor/automate-test-improve-and-merge-code-2533
