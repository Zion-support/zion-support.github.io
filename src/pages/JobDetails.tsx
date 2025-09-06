<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router'; // Changed from useParams, useNavigate
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  Calendar
  Clock
  DollarSign
  Tag
  Users
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
Calendar,
  Clock,
  DollarSign,
  Tag,;
  Users;


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  Briefcase;
import {;
  Calendar,;
  Clock,;
  DollarSign,;
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  Calendar,
  Clock,
  DollarSign,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  Tag,;
<<<<<<< HEAD
  Users;
  Briefcase;
=======
  Users,;
  Briefcase,;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
} from 'lucide-react';import { formatDistanceToNow } from 'date-fns';
import { toast } from 'sonner';
import { useAuth } from '@/hooks/useAuth';

import useJobDetails from '@/hooks/useJobDetails';
import { ApplyToJobModal  } from '@/components/messaging/job-application';
import { SEO  } from '@/components/SEO';
import { useWhitelabel  } from '@/context/WhitelabelContext';
import { JobDetailsSkeleton } from '@/components/jobs';
<<<<<<< HEAD
interface Job {;
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

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
    is_loading: boolean;
    error: any;
  }


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

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD

=======
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  deadline?: string;

export default function JobDetails() {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const router = useRouter(); // Init router
  const { jobId: rawJobId } = router.query; // Get jobId from query
  const jobId = typeof rawJobId === 'string' ? rawJobId : undefined;
  const { job, isLoading, error } = useJobDetails(jobId) as {
    job: Job | undefined;
    isLoading: boolean;
<<<<<<< HEAD
=======
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
  const router = useRouter(); // Init router
  const { jobId: rawJobId } = router.query; // Get jobId from query
  const jobId = typeof rawJobId === 'string' ? rawJobId : undefined;
  const { job, isLoading, error } = useJobDetails(jobId) as {
    job: Job | undefined;
    isLoading: boolean;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const router = useRouter(), // Init router
  const { jobId: rawJobId } = router.query, // Get jobId from query
  const jobId = typeof rawJobId === 'string' ? rawJobId : undefined,
  const { job, isLoading, error } = useJobDetails(jobId) as { job: Job | undefined, isLoading: boolean, error: any },
  const { user, isAuthenticated } = useAuth(),
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  // navigate is now router
  const { isWhitelabel, brandName } = useWhitelabel(),
  
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),

  const formatBudget = (budget: any) => {
    if (!budget) return "Not specified",
    return `$${budget.min} - $${budget.max}`
  },

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  if (isLoading) {
=======
>>>>>>>   if (isLoading) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    return <JobDetailsSkeleton />
ursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  if (isLoading) {
    return <JobDetailsSkeleton />;
>>>>>>>   }
  if (error |!job) {


  const formatBudget = (budget: any) => {;
    if (!budget) return 'Not specified';
    return `$${budget && budget.min} - $${budget && budget.max}`;
  };
  if (isLoading) {;
    return <JobDetailsSkeleton />;
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  if (isLoading) {
    return <JobDetailsSkeleton />
  }
  if (error |!job) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    return (
      <>
        <Header />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

      </>
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <div className='container mx-auto px-4 py-16 text-center'>
          <h1 className='text-2xl font-bold mb-4'>Job Not Found</h1>
          <p className='mb-8'>
            The job you're looking for doesn't exist or has been removed.
          </p>
          <Button onClick={() => router.push('/careers')}>View All Jobs</Button>        </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>       </>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    )
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
          <p className="mb-8">The job you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => router.push('/careers')}>View All Jobs</Button>
        </div>
      </>
    )
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  }
  const handleApply = () => {
    if (!isAuthenticated) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
  return (
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      toast.error('Please log in to apply for this job');
      router.push(
        `/login?redirect=${encodeURIComponent(`/jobs/${jobId |''}`)}`
      ); // Added null check for jobId
=======
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      return;
    }
<<<<<<< HEAD

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
=======
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
      toast.error("Please log in to apply for this job"),
      router.push(`/login?redirect=${encodeURIComponent(`/jobs/${jobId || ''}`)}`), // Added null check for jobId
      return
    }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

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


  const isOwnJob = user?.id === job.client_id,
  const handleApplySuccess = async (appliedJobId: string) => {
    toast.success('Application submitted successfully!');
    setIsApplyModalOpen(false);
<<<<<<< HEAD
  }
  const isOwnJob = user?.id === job.client_id;

  const isOwnJob = user?.id === job.client_id,
  const handleApplySuccess = async (appliedJobId: string) => {
    toast.success('Application submitted successfully!');
    setIsApplyModalOpen(false);
  };
  const isOwnJob = user?.id === job.client_id;
>>>>>>> 
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  };
  const isOwnJob = user?.id === job.client_id;

  const isOwnJob = user?.id === job.client_id,

  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <>
      <SEO 
        title={`${job.title} - ${isWhitelabel ? brandName : 'Zion AI Marketplace'}`}
        description={job.description.substring(0, 160)}
      />
      <Header />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>             <Card>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <Card>
>>>>>>>               <CardHeader>
                <div className='flex justify-between items-start'>
                  <div>
<<<<<<< HEAD

=======
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    <CardTitle className='text-2xl mb-2'>{job.title}</CardTitle>
                    <div className='flex items-center text-muted-foreground'>
                      <Calendar className='mr-2 h-4 w-4' />
                      <span>
                        Posted{' '}
                        {formatDistanceToNow(new Date(job.created_at), {
                          addSuffix: true
                        })}
                      </span>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>Posted {formatDistanceToNow(new Date(job.created_at), { addSuffix: true })}</span>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    </div>
                  </div>
                  <Badge>{job.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
<<<<<<< HEAD
                <div>
                  <h3 className="font-semibold text-lg mb-3">Job Description</h3>
                  <div className="whitespace-pre-wrap">
                    {job.description}
                  </div>
                </div>
<<<<<<< HEAD

                    ))}
=======
                <div>
                  <h3 className='font-semibold text-lg mb-3'>
                    Job Description
<<<<<<< HEAD
=======
                <div>
                  <h3 className="font-semibold text-lg mb-3">Job Description</h3>
                  <div className="whitespace-pre-wrap">
                    {job.description}
                  </div>
                </div>
                <div>
                  <h3 className='font-semibold text-lg mb-3'>
                    Required Skills
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </h3>
                  <div className='flex flex-wrap gap-2'>
                    {job.skills?.map((skill: string, i: number) => (
                      <Badge key={i} variant='secondary'>                        {skill}
                      </Badge>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                     ))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
                  </h3>
                  <div className='whitespace-pre-wrap'>{job.description}</div>
                </div>

            onClick={() => router && router.push('/careers')}          >;

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                
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
<<<<<<< HEAD
                  <h3 className="font-semibold text-lg mb-3">Required Skills</h3>;
                  <div className="flex flex-wrap gap-2">;
                    {job.skills?.map((skill: string, i: number) => (;
                      <Badge key={i} variant="secondary">;
                        {skill}
=======
                  <h3 className='font-semibold text-lg mb-3'>;
                    Required Skills;
                  </h3>;
                  <div className='flex flex-wrap gap-2'>;
                    {job && job.skills?.map((skill: string, i: number) => (;
                      <Badge key={i} variant='secondary'>                        {skill}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                      </Badge>;
                    ))}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
          
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
          
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <div>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start">
                  <DollarSign className="mt-1 h-5 w-5 text-muted-foreground" />
                  <div className="ml-3">
                    <p className="text-sm text-muted-foreground">Budget</p>
                    <p className="font-medium">{formatBudget(job.budget)}</p>
<<<<<<< HEAD
                  </div>
                </div>

<<<<<<< HEAD
=======
>>>>>>>           <div>
ursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                    ))}


          


<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          <div>
>>>>>>>             <Card>
              <CardContent className='pt-6 space-y-4'>
                <div className='flex items-start'>
                  <DollarSign className='mt-1 h-5 w-5 text-muted-foreground' />
                  <div className='ml-3'>
                    <p className='text-sm text-muted-foreground'>Budget</p>
                    <p className='font-medium'>{formatBudget(job.budget)}</p>
                  </div>
                </div>
                
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                <div className="flex items-start">
                  <Clock className="mt-1 h-5 w-5 text-muted-foreground" />
                  <div className="ml-3">
                    <p className="text-sm text-muted-foreground">Deadline</p>
                    <p className="font-medium">
                      {job.deadline ? new Date(job.deadline).toLocaleDateString() : "Flexible"}
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
                  <Button 
                    className="w-full mt-4" 
                    onClick={handleApply}
=======
                  <Button
                    className='w-full mt-4'
                    onClick={handleApply}
                    disabled={isOwnJob}                  >
                    Apply Now
                  </Button>
                )}

<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    disabled={isOwnJob}
                  >;
                    Apply Now;
                  </Button>;
                )}
                
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                {isOwnJob && (
=======
                
>>>>>>>                 {isOwnJob && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  <div className="text-center p-2 bg-muted rounded-md mt-4">
                    <p className="text-sm text-muted-foreground">This is your job posting</p>
                  </div>
                )}
<<<<<<< HEAD
<<<<<<< HEAD

=======
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
              </CardContent>;
            </Card>;
          </div>;
        </div>;
      </main>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      {/* Job application modal */}
      {job && (
        <ApplyToJobModal
          job={{
<<<<<<< HEAD

=======
            id: job.id
            title: job.title
            description: job.description
            company_name: job.company_name ?? 'Company'
            budget: formatBudget(job.budget)
            client_id: job.client_id
            id: job.id,
            title: job.title,
            description: job.description,
            company_name: job.company_name ?? "Company",
            budget: formatBudget(job.budget),
            client_id: job.client_id,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
>>>>>>>       {/* Job application modal */}
      {job && (
        <ApplyToJobModal
          job={{
            id: job.id
            title: job.title
            description: job.description
            company_name: job.company_name ?? 'Company'
            budget: formatBudget(job.budget)
            client_id: job.client_id
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

=======
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {isOwnJob && (
                  <div className="text-center p-2 bg-muted rounded-md mt-4">
                    <p className="text-sm text-muted-foreground">This is your job posting</p>
                  </div>
                )}
<<<<<<< HEAD


                {isOwnJob && (;
                  <div className='text-center p-2 bg-muted rounded-md mt-4'>;
                    <p className='text-sm text-muted-foreground'>;
                      This is your job posting;
                    </p>;
                  </div>;
                )}
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

<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              </CardContent>;
            </Card>;
          </div>;
        </div>;
      </main>;
<<<<<<< HEAD



<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      {/* Job application modal */}
      {job && (
        <ApplyToJobModal
          job={{
<<<<<<< HEAD

            id: job && job.id,
            title: job && job.title,
            description: job && job.description,
            company_name: job && job.company_name ?? 'Company',
            budget: formatBudget(job && job.budget),
            client_id: job && job.client_id,

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          }}

          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}        />
      )}
    </>
  );
<<<<<<< HEAD


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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  return (<> <Header /> <div className="container mx-auto px-4 py-16 text-center" > <h1 className="text-2xl font-bold mb-4" >Job Not Found</h1> <p className="mb-8" >The job you're looking for doesn't exist or has been removed.</p> <Button onClick={';
  () => router.push ('/careers') ;
}>View All Jobs</Button> </div> </>) ;
}router.push (`/login?redirect=$ {encodeURIComponent (`/jobs/$ {';
  jobId |'' ;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
}`) ;
}`);
//Added null check for jobId return;
}setIsApplyModalOpen (true) ;
<<<<<<< HEAD

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

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  />) ;
}</>) ;
}'"
}
<<<<<<< HEAD
}
<<<<<<< HEAD


}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>>             id: job.id,
            title: job.title,
            description: job.description,
            company_name: job.company_name ?? "Company",
            budget: formatBudget(job.budget),

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            id: job.id,
            title: job.title,
            description: job.description,
            company_name: job.company_name ?? "Company",
            budget: formatBudget(job.budget),
;
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======



}

            id: job.id,
            title: job.title,
            description: job.description,
            company_name: job.company_name ?? "Company",
            budget: formatBudget(job.budget),
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
