<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router'; // Changed from useParams, useNavigate
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
<<<<<<< HEAD
  Calendar
  Clock
  DollarSign
  Tag
  Users
=======
  Calendar,
  Clock,
  DollarSign,
  Tag,;
  Users;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  Briefcase;
} from 'lucide-react';import { formatDistanceToNow } from 'date-fns';
import { toast } from 'sonner';
import { useAuth } from '@/hooks/useAuth';

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

  client_id: string;
  skills?: string[];
  created_at: string;
  category: string;
<<<<<<< HEAD
=======
  deadline?: string;

export default function JobDetails() {;
  const router = useRouter(); // Init router
  const { jobId: rawJobId } = router.query; // Get jobId from query
  const jobId = typeof rawJobId === 'string' ? rawJobId : undefined;
  const { job, isLoading, error } = useJobDetails(jobId) as {
    job: Job | undefined;
    isLoading: boolean;
    error: any;
  };
  const { user, isAuthenticated } = useAuth();
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

  deadline?: string;
export default function JobDetails() {
<<<<<<< HEAD
  const router = useRouter(); // Init router
  const { jobId: rawJobId } = router.query; // Get jobId from query
  const jobId = typeof rawJobId === 'string' ? rawJobId : undefined;
  const { job, isLoading, error } = useJobDetails(jobId) as {
    job: Job | undefined;
    isLoading: boolean;
    error: any;
  }
  const { user, isAuthenticated } = useAuth();
  // navigate is now router
  const { isWhitelabel, brandName } = useWhitelabel();
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const formatBudget = (budget: any) => {
    if (!budget) return 'Not specified';
    return `$${budget.min} - $${budget.max}`;
  }
=======
  const router = useRouter(), // Init router
  const { jobId: rawJobId } = router.query, // Get jobId from query
  const jobId = typeof rawJobId === 'string' ? rawJobId : undefined,
  const { job, isLoading, error } = useJobDetails(jobId) as { job: Job | undefined, isLoading: boolean, error: any },
  const { user, isAuthenticated } = useAuth(),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  // navigate is now router
  const { isWhitelabel, brandName } = useWhitelabel(),
  
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),

  const formatBudget = (budget: any) => {
    if (!budget) return "Not specified",
    return `$${budget.min} - $${budget.max}`
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  if (isLoading) {
    return <JobDetailsSkeleton />
  }
  if (error |!job) {
    return (
      <>
        <Header />
<<<<<<< HEAD
        <div className='container mx-auto px-4 py-16 text-center'>
          <h1 className='text-2xl font-bold mb-4'>Job Not Found</h1>
          <p className='mb-8'>
            The job you're looking for doesn't exist or has been removed.
          </p>
          <Button onClick={() => router.push('/careers')}>View All Jobs</Button>        </div>
=======
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
          <p className="mb-8">The job you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => router.push('/careers')}>View All Jobs</Button>
        </div>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      </>
    )
  }
  const handleApply = () => {
    if (!isAuthenticated) {
<<<<<<< HEAD
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
      return;
    }
    setIsApplyModalOpen(true);
  }
  const handleApplySuccess = async (appliedJobId: string) => {
    toast.success('Application submitted successfully!');
    setIsApplyModalOpen(false);
  }
  const isOwnJob = user?.id === job.client_id;
=======
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

<<<<<<< HEAD

  const isOwnJob = user?.id === job.client_id,
=======
<<<<<<< HEAD
  const handleApplySuccess = async (appliedJobId: string) => {
    toast.success('Application submitted successfully!');
    setIsApplyModalOpen(false);
  };
  const isOwnJob = user?.id === job.client_id;
=======

  const isOwnJob = user?.id === job.client_id,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <>
      <SEO 
        title={`${job.title} - ${isWhitelabel ? brandName : 'Zion AI Marketplace'}`}
        description={job.description.substring(0, 160)}
      />
      <Header />
<<<<<<< HEAD
      <main className='container mx-auto px-4 py-8'>
        <div className='mb-6'>
          <Button
            variant='outline'
            size='sm'
            onClick={() => router.push('/careers')}          >
            ← Back to Jobs
          </Button>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          <div className='lg:col-span-2'>
=======
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => router.push('/careers')}
          >
            ← Back to Jobs
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
<<<<<<< HEAD
                    <CardTitle className='text-2xl mb-2'>{job.title}</CardTitle>
                    <div className='flex items-center text-muted-foreground'>
                      <Calendar className='mr-2 h-4 w-4' />
                      <span>
                        Posted{' '}
                        {formatDistanceToNow(new Date(job.created_at), {
                          addSuffix: true
                        })}
                      </span>
=======
                    <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>Posted {formatDistanceToNow(new Date(job.created_at), { addSuffix: true })}</span>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
                <div>
                  <h3 className='font-semibold text-lg mb-3'>
                    Required Skills
                  </h3>
                  <div className='flex flex-wrap gap-2'>
                    {job.skills?.map((skill: string, i: number) => (
                      <Badge key={i} variant='secondary'>                        {skill}
                      </Badge>
=======
                
                <div>
                  <h3 className="font-semibold text-lg mb-3">Required Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {job.skills?.map((skill: string, i: number) => (
                      <Badge key={i} variant="secondary">
;
export default function JobDetails() {;
  const router = useRouter(), // Init router;
  const { jobId: rawJobId } = router.query, // Get jobId from query;
  const jobId = typeof rawJobId === 'string' ? rawJobId : undefined,;
  const { job, isLoading, error } = useJobDetails(jobId) as { job: Job | undefined, isLoading: boolean, error: any },;
  const { user, isAuthenticated } = useAuth(),;
  // navigate is now router;
  const { isWhitelabel, brandName } = useWhitelabel(),;
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),;
  const formatBudget = (budget: any) => {;
    if (!budget) return "Not specified",;
    return `$${budget.min} - $${budget.max}`;
  },;
  if (isLoading) {;
    return <JobDetailsSkeleton />;
  }
;
  if (error || !job) {;
    return (;
      <>;
        <Header />;
        <div className="container mx-auto px-4 py-16 text-center">;
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>;
          <p className="mb-8">The job you're looking for doesn't exist or has been removed.</p>;
          <Button onClick={() => router.push('/careers')}>View All Jobs</Button>;
        </div>;
      </>;
    );
  }
;
  const handleApply = () => {;
    if (!isAuthenticated) {;
      toast.error("Please log in to apply for this job"),;
      router.push(`/login?redirect=${encodeURIComponent(`/jobs/${jobId || ''}`)}`), // Added null check for jobId;
      return;
    }
;
    if (user?.userType !== "talent" && user?.userType !== "admin" && user?.userType !== "client") {;
      toast.error("Only job seekers can apply for jobs"),;
      return;
    }
;
    setIsApplyModalOpen(true);
  },;
  const handleApplySuccess = async (appliedJobId: string) => {;
    toast.success("Application submitted successfully!"),;
    setIsApplyModalOpen(false);
  },;
  const isOwnJob = user?.id === job.client_id,;
  return (;
    <>;
      <SEO;
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
            ← Back to Jobs;
          </Button>;
        </div>;
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;
          <div className="lg:col-span-2">;
            <Card>;
              <CardHeader>;
                <div className="flex justify-between items-start">;
                  <div>;
                    <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>;
                    <div className="flex items-center text-muted-foreground">;
                      <Calendar className="mr-2 h-4 w-4" />;
                      <span>Posted {formatDistanceToNow(new Date(job.created_at), { addSuffix: true })}</span>;
                    </div>;
                  </div>;
                  <Badge>{job.category}</Badge>;
                </div>;
              </CardHeader>;
              <CardContent className="space-y-6">;
                <div>;
                  <h3 className="font-semibold text-lg mb-3">Job Description</h3>;
                  <div className="whitespace-pre-wrap">;
                    {job.description}
                  </div>;
                </div>;
                <div>;
                  <h3 className="font-semibold text-lg mb-3">Required Skills</h3>;
                  <div className="flex flex-wrap gap-2">;
                    {job.skills?.map((skill: string, i: number) => (;
                      <Badge key={i} variant="secondary">;
                        {skill}
                      </Badge>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
<<<<<<< HEAD
=======
          
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
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
                  <Button
                    className='w-full mt-4'
                    onClick={handleApply}
                    disabled={isOwnJob}                  >
                    Apply Now
                  </Button>
                )}
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
                
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
                
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                {isOwnJob && (
                  <div className="text-center p-2 bg-muted rounded-md mt-4">
                    <p className="text-sm text-muted-foreground">This is your job posting</p>
                  </div>
                )}
<<<<<<< HEAD
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
=======
              </CardContent>;
            </Card>;
          </div>;
        </div>;
      </main>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {/* Job application modal */}
      {job && (
        <ApplyToJobModal
          job={{
<<<<<<< HEAD
<<<<<<< HEAD
            id: job.id
            title: job.title
            description: job.description
            company_name: job.company_name ?? 'Company'
            budget: formatBudget(job.budget)
            client_id: job.client_id
=======
            id: job.id,
            title: job.title,
            description: job.description,
            company_name: job.company_name ?? "Company",
            budget: formatBudget(job.budget),
<<<<<<< HEAD
            client_id: job.client_id,
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          }}

          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}        />
      )}
    </>
  );
  return (<> <Header /> <div className="container mx-auto px-4 py-16 text-center" > <h1 className="text-2xl font-bold mb-4" >Job Not Found</h1> <p className="mb-8" >The job you're looking for doesn't exist or has been removed.</p> <Button onClick={';
  () => router.push ('/careers') ;
}>View All Jobs</Button> </div> </>) ;
}router.push (`/login?redirect=$ {encodeURIComponent (`/jobs/$ {';
  jobId |'' ;
}`) ;
}`);
//Added null check for jobId return;
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
}'"
}
}
<<<<<<< HEAD
=======
            id: job.id,
            title: job.title,
            description: job.description,
            company_name: job.company_name ?? "Company",
            budget: formatBudget(job.budget),
=======
;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            client_id: job.client_id}}
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}
        />;
      )}
    </>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
