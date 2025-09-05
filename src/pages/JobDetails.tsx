<<<<<<< HEAD
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
;
interface Job {;
  id:string,;
  title:string,;
  description:string,;
  company_name?:string,;
  budget:{ min:number, max:number },;
  client_id:string,;
  skills?:string[],;
  created_at:string,;
  category:string,;
  deadline?:string;
}
;
export default function JobDetails() {;
  const router = useRouter(), // Init router;
  const { jobId:rawJobId } = router.query, // Get jobId from query;
  const jobId = typeof rawJobId === 'string' ? rawJobId :undefined,;
  const { job, isLoading, error } = useJobDetails(jobId) as { job:Job | undefined, isLoading:boolean, error:any },;
  const { user, isAuthenticated } = useAuth(),;
  // navigate is now router;
  const { isWhitelabel, brandName } = useWhitelabel(),;
  ;
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),;
;
  const formatBudget = (budget:any) => {;
    if (!budget) return "Not specified",;
    return `$${budget.min} - $${budget.max}`,;
  },;
;
  if (isLoading) {;
    return <JobDetailsSkeleton />,;
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
    ),;
  }
;
  const handleApply = () => {;
    if (!isAuthenticated) {;
      toast.error("Please log in to apply for this job"),;
      router.push(`/login?redirect=${encodeURIComponent(`/jobs/${jobId || ''}`)}`), // Added null check for jobId;
      return,;
    }
;
    if (user?.userType !== "talent" && user?.userType !== "admin" && user?.userType !== "client") {;
      toast.error("Only job seekers can apply for jobs"),;
      return,;
    }
    ;
    setIsApplyModalOpen(true),;
  },;
;
  const handleApplySuccess = async (appliedJobId:string) => {;
    toast.success("Application submitted successfully!"),;
    setIsApplyModalOpen(false);
  },;
;
;
  const isOwnJob = user?.id === job.client_id,;
;
  return (;
    <>;
      <SEO ;
        title={`${job.title} - ${isWhitelabel ? brandName :'Zion AI Marketplace'}`}
        description={job.description.substring(0, 160)}
      />;
      <Header />;
      <main className="container mx-auto px-4 py-8">;
        <div className="mb-6">;
          <Button ;
            variant="outline" ;
            size="sm";
            onClick={() => router.push('/careers')}
          >;
            ← Back to Jobs;
          </Button>;
        </div>;
        ;
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;
          <div className="lg:col-span-2">;
            <Card>;
              <CardHeader>;
                <div className="flex justify-between items-start">;
                  <div>;
                    <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>;
                    <div className="flex items-center text-muted-foreground">;
                      <Calendar className="mr-2 h-4 w-4" />;
                      <span>Posted {formatDistanceToNow(new Date(job.created_at), { addSuffix:true })}</span>;
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
                ;
                <div>;
                  <h3 className="font-semibold text-lg mb-3">Required Skills</h3>;
                  <div className="flex flex-wrap gap-2">;
                    {job.skills?.map((skill:string, i:number) => (;
                      <Badge key={i} variant="secondary">;
                        {skill}
                      </Badge>;
                    ))}
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
          </div>;
          ;
          <div>;
            <Card>;
              <CardContent className="pt-6 space-y-4">;
                <div className="flex items-start">;
                  <DollarSign className="mt-1 h-5 w-5 text-muted-foreground" />;
                  <div className="ml-3">;
                    <p className="text-sm text-muted-foreground">Budget</p>;
                    <p className="font-medium">{formatBudget(job.budget)}</p>;
                  </div>;
                </div>;
                ;
                <div className="flex items-start">;
                  <Clock className="mt-1 h-5 w-5 text-muted-foreground" />;
                  <div className="ml-3">;
                    <p className="text-sm text-muted-foreground">Deadline</p>;
                    <p className="font-medium">;
                      {job.deadline ? new Date(job.deadline).toLocaleDateString() :"Flexible"}
                    </p>;
                  </div>;
                </div>;
                ;
                <div className="flex items-start">;
                  <Briefcase className="mt-1 h-5 w-5 text-muted-foreground" />;
                  <div className="ml-3">;
                    <p className="text-sm text-muted-foreground">Job Type</p>;
                    <p className="font-medium">Freelance / Remote</p>;
                  </div>;
                </div>;
                ;
                {!isOwnJob && (;
                  <Button ;
                    className="w-full mt-4" ;
                    onClick={handleApply}
                    disabled={isOwnJob}
                  >;
                    Apply Now;
                  </Button>;
                )}
                ;
                {isOwnJob && (;
                  <div className="text-center p-2 bg-muted rounded-md mt-4">;
                    <p className="text-sm text-muted-foreground">This is your job posting</p>;
                  </div>;
                )}
              </CardContent>;
            </Card>;
          </div>;
        </div>;
      </main>;
      ;
      {/* Job application modal */}
      {job && (;
        <ApplyToJobModal;
          job={{;
            id:job.id,;
            title:job.title,;
            description:job.description,;
            company_name:job.company_name ?? "Company",;
            budget:formatBudget(job.budget),;
            client_id:job.client_id}}
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}
        />;
      )}
    </>;
  ),;
=======
import React, { useState, useEffect } from 'react',
import { useRouter } from 'next/router', // Changed from useParams, useNavigate
import { Header } from '@/components/Header',
import { Button } from '@/components/ui/button',
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',
import { Badge } from '@/components/ui/badge',
import { Calendar, Clock, DollarSign, Tag, Users, Briefcase } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns',
import { toast } from 'sonner',
import { useAuth } from '@/hooks/useAuth',
import useJobDetails from '@/hooks/useJobDetails',
import { ApplyToJobModal } from '@/components/messaging/job-application',
import { SEO } from '@/components/SEO',
import { useWhitelabel } from '@/context/WhitelabelContext',
import { JobDetailsSkeleton } from '@/components/jobs',
interface Job {
  id: string,
  title: string,
  description: string,
  company_name?: string,
  budget: { min: number, max: number },
  client_id: string,
  skills?: string[],
  created_at: string,
  category: string,
  deadline?: string
}

export default function JobDetails() {
  const router = useRouter(), // Init router
  const { jobId: rawJobId } = router.query, // Get jobId from query
  const jobId = typeof rawJobId === 'string' ? rawJobId : undefined,
  const { job, isLoading, error } = useJobDetails(jobId) as { job: Job | undefined, isLoading: boolean, error: any },
  const { user, isAuthenticated } = useAuth(),
  // navigate is now router
  const { isWhitelabel, brandName } = useWhitelabel(),  
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false),

  const formatBudget = (budget: any) => {
    if (!budget) return "Not specified",
    return `$${budget.min} - $${budget.max}`
  },  };

  if (isLoading) {
    return <JobDetailsSkeleton />
  }
  if (error || !job) {_return (_<>
        <Header />
        <div className=&quot;container mx-auto px-4 py-16 text-center&quot;>
          <h1 className=&quot;text-2xl font-bold mb-4&quot;>Job Not Found</h1>
          <p className=&quot;mb-8&quot;>The job you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => router.push('/careers')}>View All Jobs</Button>
        </div>
      </>
    )
  }

  const handleApply = () => {
    if (!isAuthenticated) {
      toast.error("Please log in to apply for this job"),
      router.push(`/login?redirect=${encodeURIComponent(`/jobs/${jobId || ''}`)}`), // Added null check for jobId
      return
    }

    if (user?.userType !== "talent" && user?.userType !== "admin" && user?.userType !== "client") {
      toast.error("Only job seekers can apply for jobs"),
      return      router.push(`/login?redirect=${encodeURIComponent(`/jobs/${jobId || ''}`)}`); // Added null check for jobId
      return;
    }

    if (user?.userType !== &quot;talent&quot; && user?.userType !== &quot;admin&quot; && user?.userType !== &quot;client&quot;) {
      toast.error(&quot;Only job seekers can apply for jobs&quot;);
      return;
    }    
    setIsApplyModalOpen(true)
  },

  const handleApplySuccess = async (appliedJobId: string) => {
    toast.success("Application submitted successfully!"),
    setIsApplyModalOpen(false)
  },

  const isOwnJob = user?.id === job.client_id,
  const _handleApplySuccess = async (_appliedJobId: string) => {_toast.success("Application submitted successfully!");
    setIsApplyModalOpen(false);};

  const _isOwnJob = user?.id === job.client_id;

  return (
    <>
      <SEO 
        title={_`${job.title} - ${_isWhitelabel ? brandName : 'Zion AI Marketplace'}`}
        description={_job.description.substring(0, _160)}
      />
      <Header />
      <main className=&quot;container mx-auto px-4 py-8&quot;>
        <div className=&quot;mb-6&quot;>
          <Button 
            variant=&quot;outline&quot; 
            size=&quot;sm&quot;
            onClick={() => router.push('/careers')}          >
            ← Back to Jobs
          </Button>
        </div>
        
        <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-6&quot;>
          <div className=&quot;lg:col-span-2&quot;>
            <Card>
              <CardHeader>
                <div className=&quot;flex justify-between items-start&quot;>
                  <div>
                    <CardTitle className=&quot;text-2xl mb-2&quot;>{job.title}</CardTitle>
                    <div className=&quot;flex items-center text-muted-foreground&quot;>
                      <Calendar className=&quot;mr-2 h-4 w-4&quot; />
                      <span>Posted {formatDistanceToNow(new Date(job.created_at), { addSuffix: true })}</span>                    </div>
                  </div>
                  <Badge>{_job.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className=&quot;space-y-6&quot;>
                <div>
                  <h3 className=&quot;font-semibold text-lg mb-3&quot;>Job Description</h3>
                  <div className=&quot;whitespace-pre-wrap&quot;>
                    {job.description}                  </div>
                </div>
                
                <div>
                  <h3 className=&quot;font-semibold text-lg mb-3&quot;>Required Skills</h3>
                  <div className=&quot;flex flex-wrap gap-2&quot;>
                    {job.skills?.map((skill: string, i: number) => (
                      <Badge key={i} variant=&quot;secondary&quot;>
                        {skill}                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardContent className=&quot;pt-6 space-y-4&quot;>
                <div className=&quot;flex items-start&quot;>
                  <DollarSign className=&quot;mt-1 h-5 w-5 text-muted-foreground&quot; />
                  <div className=&quot;ml-3&quot;>
                    <p className=&quot;text-sm text-muted-foreground&quot;>Budget</p>
                    <p className=&quot;font-medium&quot;>{formatBudget(job.budget)}</p>
                  </div>
                </div>
                
                <div className=&quot;flex items-start&quot;>
                  <Clock className=&quot;mt-1 h-5 w-5 text-muted-foreground&quot; />
                  <div className=&quot;ml-3&quot;>
                    <p className=&quot;text-sm text-muted-foreground&quot;>Deadline</p>
                    <p className=&quot;font-medium&quot;>
                      {job.deadline ? new Date(job.deadline).toLocaleDateString() : &quot;Flexible&quot;}                    </p>
                  </div>
                </div>
                
                <div className=&quot;flex items-start&quot;>
                  <Briefcase className=&quot;mt-1 h-5 w-5 text-muted-foreground&quot; />
                  <div className=&quot;ml-3&quot;>
                    <p className=&quot;text-sm text-muted-foreground&quot;>Job Type</p>
                    <p className=&quot;font-medium&quot;>Freelance / Remote</p>
                  </div>
                </div>
                
                {_!isOwnJob && (
                  <Button 
                    className=&quot;w-full mt-4&quot; 
                    onClick={handleApply}
                    disabled={_isOwnJob}
                  >
                    Apply Now
                  </Button>
                )}
                
                {isOwnJob && (
                  <div className=&quot;text-center p-2 bg-muted rounded-md mt-4&quot;>
                    <p className=&quot;text-sm text-muted-foreground&quot;>This is your job posting</p>                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      {_/* Job application modal */}
      {_job && (
        <ApplyToJobModal
          job={{
            id: job.id,
            title: job.title,
            description: job.description,
            company_name: job.company_name ?? &quot;Company&quot;,
            budget: formatBudget(job.budget),
            client_id: job.client_id}}
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}        />
      )}
    </>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
