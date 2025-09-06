<<<<<<< HEAD

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD

import { useRouter } from 'next/router'; // Changed from useParams, useNavigate
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
<<<<<<< HEAD
import {
  Calendar
  Clock
  DollarSign
  Tag
  Users
  Briefcase;
=======
import {;
  Calendar,;
  Clock,;
  DollarSign,;
  Tag,;
  Users,;
  Briefcase,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
} from 'lucide-react';import { formatDistanceToNow } from 'date-fns';
import { toast } from 'sonner';
import { useAuth } from '@/hooks/useAuth';

import useJobDetails from '@/hooks/useJobDetails';
import { ApplyToJobModal  } from '@/components/messaging/job-application';
import { SEO  } from '@/components/SEO';
import { useWhitelabel  } from '@/context/WhitelabelContext';
import { JobDetailsSkeleton } from '@/components/jobs';
interface Job {;
=======
import { use_router } from 'next / router'; // Changed from use_params, use_navigate;
import { Header } from '@/components / Header';
import { Button } from '@/components / ui / button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import {
  Calendar,
  Clock,
  DollarSign,
  Tag,
  Users,
  Briefcase,
} from 'lucide-react';import { formatDistanceToNow } from 'date - fns';
import { toast } from 'sonner';
import { use_auth } from '@/hooks / use_auth';
import useJobDetails from '@/hooks / useJobDetails';
import { ApplyToJobModal } from '@/components / messaging / job - application';
import { SEO } from '@/components / SEO';
import { use_whitelabel } from '@/context / WhitelabelContext';
import { JobDetailsSkeleton } from '@/components / jobs';
interface Job {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  id: string;
  title: string;
  description: string;
  company_name?: string;
<<<<<<< HEAD

  budget: { min: number; max: number }

=======
  budget: { min: number; max: number }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  client_id: string;
  skills?: string[];
  created_at: string;
  category: string;
<<<<<<< HEAD

<<<<<<< HEAD
  deadline?: string;
export default function JobDetails() {
  const router = useRouter(); // Init router
  const { jobId: rawJobId } = router.query; // Get jobId from query
=======
export default function JobDetails() {;
  const router = useRouter(); // Init router;
  const { jobId: rawJobId } = router && router.query; // Get jobId from query;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const jobId = typeof rawJobId === 'string' ? rawJobId : undefined;
  const { job, isLoading, error } = useJobDetails(jobId) as {;
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    job: Job | undefined;
    is_loading: boolean;
    error: any;
  }
<<<<<<< HEAD
  const { user, isAuthenticated } = useAuth();
  // navigate is now router;
  const { isWhitelabel, brandName } = useWhitelabel();
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
<<<<<<< HEAD
  const formatBudget = (budget: any) => {
    if (!budget) return 'Not specified';
    return `$${budget.min} - $${budget.max}`;
  }
  if (isLoading) {
    return <JobDetailsSkeleton />;
  }
  if (error |!job) {
=======

  const formatBudget = (budget: any) => {;
    if (!budget) return 'Not specified';
    return `$${budget && budget.min} - $${budget && budget.max}`;
  };
  if (isLoading) {;
    return <JobDetailsSkeleton />;
  }

  if (error || !job) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
  const handleApply = () => {
    if (!isAuthenticated) {
      toast.error('Please log in to apply for this job');
      router.push(
        `/login?redirect=${encodeURIComponent(`/jobs/${jobId |''}`)}`
      ); // Added null check for jobId
      return;
    }
    if (
      user?.userType !== 'talent' &&
      user?.userType !== 'admin' &&
      user?.userType !== 'client'
    ) {
      toast.error('Only job seekers can apply for jobs');
=======

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      return;
    }
    setIsApplyModalOpen(true);
<<<<<<< HEAD
  }
  const handleApplySuccess = async (appliedJobId: string) => {
    toast.success('Application submitted successfully!');
    setIsApplyModalOpen(false);
  }
  const isOwnJob = user?.id === job.client_id;
=======
  };

  const handleApplySuccess = async (appliedJobId: string) => {;
    toast && toast.success('Application submitted successfully!');
    setIsApplyModalOpen(false);
  };
  const isOwnJob = user?.id === job && job.client_id;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
            onClick={() => router.push('/careers')}          >
            ← Back to Jobs
          </Button>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          <div className='lg:col-span-2'>
            <Card>
              <CardHeader>
                <div className='flex justify-between items-start'>
                  <div>
                    <CardTitle className='text-2xl mb-2'>{job.title}</CardTitle>
                    <div className='flex items-center text-muted-foreground'>
                      <Calendar className='mr-2 h-4 w-4' />
                      <span>
                        Posted{' '}
                        {formatDistanceToNow(new Date(job.created_at), {
                          addSuffix: true
                        })}
                      </span>
                    </div>
                  </div>
                  <Badge>{job.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div>
                  <h3 className='font-semibold text-lg mb-3'>
                    Job Description
                  </h3>
                  <div className='whitespace-pre-wrap'>{job.description}</div>
                </div>
                <div>
                  <h3 className='font-semibold text-lg mb-3'>
                    Required Skills
                  </h3>
                  <div className='flex flex-wrap gap-2'>
                    {job.skills?.map((skill: string, i: number) => (
=======
            onClick={() => router && router.push('/careers')}          >;
            ← Back to Jobs;
          </Button>;
        </div>;

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>;
          <div className='lg:col-span-2'>;
            <Card>;
              <CardHeader>;
                <div className='flex justify-between items-start'>;
                  <div>;
                    <CardTitle className='text-2xl mb-2'>{job && job.title}</CardTitle>;
                    <div className='flex items-center text-muted-foreground'>;
                      <Calendar className='mr-2 h-4 w-4' />;
                      <span>;
                        Posted{' '}
                        {formatDistanceToNow(new Date(job && job.created_at), {;
                          addSuffix: true,;
                        })}
                      </span>;
                    </div>;
                  </div>;
                  <Badge>{job && job.category}</Badge>;
                </div>;
              </CardHeader>;
              <CardContent className='space-y-6'>;
                <div>;
                  <h3 className='font-semibold text-lg mb-3'>;
                    Job Description;
                  </h3>;
                  <div className='whitespace-pre-wrap'>{job && job.description}</div>;
                </div>;

                <div>;
                  <h3 className='font-semibold text-lg mb-3'>;
                    Required Skills;
                  </h3>;
                  <div className='flex flex-wrap gap-2'>;
                    {job && job.skills?.map((skill: string, i: number) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                      <Badge key={i} variant='secondary'>                        {skill}
                      </Badge>;
                    ))}
<<<<<<< HEAD
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardContent className='pt-6 space-y-4'>
                <div className='flex items-start'>
                  <DollarSign className='mt-1 h-5 w-5 text-muted-foreground' />
                  <div className='ml-3'>
                    <p className='text-sm text-muted-foreground'>Budget</p>
                    <p className='font-medium'>{formatBudget(job.budget)}</p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <Clock className='mt-1 h-5 w-5 text-muted-foreground' />
                  <div className='ml-3'>
                    <p className='text-sm text-muted-foreground'>Deadline</p>
                    <p className='font-medium'>
                      {job.deadline
                        ? new Date(job.deadline).toLocaleDateString()
                        : 'Flexible'}
                    </p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <Briefcase className='mt-1 h-5 w-5 text-muted-foreground' />
                  <div className='ml-3'>
                    <p className='text-sm text-muted-foreground'>Job Type</p>
                    <p className='font-medium'>Freelance / Remote</p>
                  </div>
                </div>
                {!isOwnJob && (
=======
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
          </div>;

          <div>;
            <Card>;
              <CardContent className='pt-6 space-y-4'>;
                <div className='flex items-start'>;
                  <DollarSign className='mt-1 h-5 w-5 text-muted-foreground' />;
                  <div className='ml-3'>;
                    <p className='text-sm text-muted-foreground'>Budget</p>;
                    <p className='font-medium'>{formatBudget(job && job.budget)}</p>;
                  </div>;
                </div>;

                <div className='flex items-start'>;
                  <Clock className='mt-1 h-5 w-5 text-muted-foreground' />;
                  <div className='ml-3'>;
                    <p className='text-sm text-muted-foreground'>Deadline</p>;
                    <p className='font-medium'>;
                      {job && job.deadline;
                        ? new Date(job && job.deadline).toLocaleDateString();
                        : 'Flexible'}
                    </p>;
                  </div>;
                </div>;

                <div className='flex items-start'>;
                  <Briefcase className='mt-1 h-5 w-5 text-muted-foreground' />;
                  <div className='ml-3'>;
                    <p className='text-sm text-muted-foreground'>Job Type</p>;
                    <p className='font-medium'>Freelance / Remote</p>;
                  </div>;
                </div>;

                {!isOwnJob && (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  <Button
                    className='w-full mt-4'
                    onClick={handleApply}
                    disabled={isOwnJob}>;
                    Apply Now;
                  </Button>;
                )}
<<<<<<< HEAD
                {isOwnJob && (
                  <div className='text-center p-2 bg-muted rounded-md mt-4'>
                    <p className='text-sm text-muted-foreground'>
                      This is your job posting
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
=======

                {isOwnJob && (;
                  <div className='text-center p-2 bg-muted rounded-md mt-4'>;
                    <p className='text-sm text-muted-foreground'>;
                      This is your job posting;
                    </p>;
                  </div>;
                )}
=======
  const { user, is_authenticated } = use_auth ();
  // navigate is now router;
  const { is_whitelabel, brand_name } = use_whitelabel ();
;
  const [isApplyModalOpen, setIsApplyModalOpen] = useState (false);
;
  const format_budget = (budget: any) =>: any {
    // Check condition
if (return 'Not specified') {
  $2
}
    return `$${budget.min} - $${budget.max}`;
  }
  // Check condition
if ( {) {
  $2
}
    return <JobDetailsSkeleton />;
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <>;
        <Header />;
        <div className='container mx - auto px - 4 py - 16 text - center'>;
          <h1 className='text - 2xl font - bold mb - 4'>Job Not Found</h1>;
          <p className='mb - 8'>;
            The job you're looking for doesn't exist or has been removed.;
          </p>;
          <Button on_click={() => router.push ('/careers')}>View All Jobs</Button>        </div>;
      </>);
  }
  const handle_apply = () =>: any {
    // Check condition
if ( {) {
  $2
}
      toast.error ('Please log in to apply for this job');
      router.push (
        `/login?redirect=${encodeURIComponent (`/jobs/${job_id || ''}`)}`); // Added null check for job_id;
      return;
    }
    // Check condition
if ( {) {
  $2
}
      toast.error ('Only job seekers can apply for jobs');
      return;
    }
    setIsApplyModalOpen (true);
  }
;
  const handleApplySuccess = async (appliedJobId: string) => {
    toast.success ('Application submitted successfully!');
    setIsApplyModalOpen (false);
  }
  const isOwnJob = user?.id === job.client_id;
;
  return (
    <>;
      <SEO;
        title={`${job.title} - ${is_whitelabel ? brand_name : 'Zion AI Marketplace'}`}
        description = {job.description.substring (0, 160), }
      />;
      <Header />;
      <main className='container mx - auto px - 4 py - 8'>;
        <div className='mb - 6'>;
          <Button;
            variant='outline';
            size='sm';
            on_click={() => router.push ('/careers')}          >;
            ← Back to Jobs;
          </Button>;
        </div>;
        <div className='grid grid - cols - 1 lg:grid - cols - 3 gap - 6'>;
          <div className='lg:col - span - 2'>;
            <Card>;
              <CardHeader>;
                <div className='flex justify - between items - start'>;
                  <div>;
                    <CardTitle className='text - 2xl mb - 2'>{job.title}</CardTitle>;
                    <div className='flex items - center text - muted - foreground'>;
                      <Calendar className='mr - 2 h - 4 w - 4' />;
                      <span>;
                        Posted{' '}
                        {formatDistanceToNow (new Date (job.created_at), {
                          add_suffix: true,
                        })}
                      </span>;
                    </div>;
                  </div>;
                  <Badge>{job.category}</Badge>;
                </div>;
              </CardHeader>;
              <CardContent className='space - y-6'>;
                <div>;
                  <h3 className='font - semibold text - lg mb - 3'>;
                    Job Description;
                  </h3>;
                  <div className='whitespace - pre - wrap'>{job.description}</div>;
                </div>;
                <div>;
                  <h3 className='font - semibold text - lg mb - 3'>;
                    Required Skills;
                  </h3>;
                  <div className='flex flex - wrap gap - 2'>;
                    {job.skills?.map ((skill: string, index: number) => (
                      <Badge key={i} variant='secondary'>                        {skill}
                      </Badge>))}
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
          </div>;
          <div>;
            <Card>;
              <CardContent className='pt - 6 space - y-4'>;
                <div className='flex items - start'>;
                  <DollarSign className='mt - 1 h - 5 w - 5 text - muted - foreground' />;
                  <div className='ml - 3'>;
                    <p className='text - sm text - muted - foreground'>Budget</p>;
                    <p className='font - medium'>{format_budget (job.budget)}</p>;
                  </div>;
                </div>;
                <div className='flex items - start'>;
                  <Clock className='mt - 1 h - 5 w - 5 text - muted - foreground' />;
                  <div className='ml - 3'>;
                    <p className='text - sm text - muted - foreground'>Deadline</p>;
                    <p className='font - medium'>;
                      {job.deadline;
                        ? new Date (job.deadline).toLocaleDateString ();
                        : 'Flexible'}
                    </p>;
                  </div>;
                </div>;
                <div className='flex items - start'>;
                  <Briefcase className='mt - 1 h - 5 w - 5 text - muted - foreground' />;
                  <div className='ml - 3'>;
                    <p className='text - sm text - muted - foreground'>Job Type</p>;
                    <p className='font - medium'>Freelance / Remote</p>;
                  </div>;
                </div>;
                {!isOwnJob && (
                  <Button;
                    className='w - full mt - 4';
                    on_click={handle_apply}
                    disabled={isOwnJob}                  >;
                    Apply Now;
                  </Button>)}
                {isOwnJob && (
                  <div className='text - center p - 2 bg - muted rounded - md mt - 4'>;
                    <p className='text - sm text - muted - foreground'>;
                      This is your job posting;
                    </p>;
                  </div>)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              </CardContent>;
            </Card>;
          </div>;
        </div>;
      </main>;
<<<<<<< HEAD

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Job application modal */}
      {job && (;
        <ApplyToJobModal
          job={{
<<<<<<< HEAD
            id: job.id
            title: job.title
            description: job.description
            company_name: job.company_name ?? 'Company'
            budget: formatBudget(job.budget)
            client_id: job.client_id
=======
            id: job && job.id,
            title: job && job.title,
            description: job && job.description,
            company_name: job && job.company_name ?? 'Company',
            budget: formatBudget(job && job.budget),
            client_id: job && job.client_id,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          }}

          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}        />;
      )}
    </>;
  );
<<<<<<< HEAD
  return (<> <Header /> <div className="container mx-auto px-4 py-16 text-center" > <h1 className="text-2xl font-bold mb-4" >Job Not Found</h1> <p className="mb-8" >The job you're looking for doesn't exist or has been removed.</p> <Button onClick={';
  () => router.push ('/careers') ;
}>View All Jobs</Button> </div> </>) ;
}router.push (`/login?redirect=$ {encodeURIComponent (`/jobs/$ {';
  jobId |'' ;
=======

  return (<> <Header /> <div className="container mx-auto px-4 py-16 text-center" > <h1 className="text-2xl font-bold mb-4" >Job Not Found</h1> <p className="mb-8" >The job you're looking for doesn't exist or has been removed.</p> <ButtononClick={'
  () => router && router.push ('/careers') ;
}>View All Jobs</Button> </div> </>) ;
}router && router.push (`/login?redirect=$ {;
  encodeURIComponent (`/jobs/$ {';
  jobId || '' ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}`) ;
}`);
//Added null check for job_id return;
}setIsApplyModalOpen (true) ;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
};
const isOwnJob = user?.id === job && job.client id;
`$ {;
  job && job.title ;
=======
}
const isOwnJob = user?.id === job.client id;
`$ {
  job.title ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}- $ {';
  is_whitelabel ? brand_name : 'Zion AI Marketplace' ;
}` ;
<<<<<<< HEAD
}description= {;
  job && job.description.substring (0, 160) ";
}/> <Header /> <main className="container mx-auto px-4 py-8" > <div className="mb-6" > <Button > ← Back to Jobs </Button> </div> <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" > <div className="lg:col-span-2" > <Card> <CardHeader> <div className="flex justify-between items-start" > <div> </div> </div> <Badge> {;
  job && job.category ";
}</Badge> </div> </CardHeader> <CardContent className="space-y-6" > <div> </div> </div> <div> </Badge>) ) ";
}</div> </div> </CardContent> </Card> </div> <div> <Card> </p> </div> </div> <div className="flex items-start" > <Briefcase className="mt-1 h-5 w-5 text-muted-foreground" /> <div className="ml-3" > <p className="text-sm text-muted-foreground" >Job Type</p> <p className="font-medium" >Freelance / Remote</p> </div> </div> {";
  !isOwnJob && (<ButtonclassName="w-full mt-4" onClick={
  handleApply 
}disabled= {
  isOwnJob 
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}> Apply Now </Button>) ;
}</div>) ;
}</CardContent> </Card> </div> </div> </main> {
  /* Job application modal */ ;
<<<<<<< HEAD
}{;
  job && (<ApplyToJobModaljob= {
  {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
}{
  job && (<ApplyToJobModal job= {
  {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  />) ;
}</>) ;
}'";
}
<<<<<<< HEAD
}
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
