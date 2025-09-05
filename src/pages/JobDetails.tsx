import React, {_useState, _useEffect} from 'react';
import useJobDetails from '@/hooks/useJobDetails';

interface Job {_id: string;
  title: string;
  description: string;
  company_name?: string;
  budget: { min: number; max: number};
  client_id: string;
  skills?: string[];
  created_at: string;
  category: string;
  deadline?: string;
}

export default function JobDetails() {_const _router = useRouter(); // Init router
  const { jobId: rawJobId} = router.query; // Get jobId from query
  const _jobId = typeof rawJobId === 'string' ? rawJobId : undefined;
  const {_job, _isLoading, _error} = useJobDetails(jobId) as {_job: Job | undefined, _isLoading: boolean, _error: unknown};
  const {_user, _isAuthenticated} = useAuth();
  // navigate is now router
  const {_isWhitelabel, _brandName} = useWhitelabel();
  
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const _formatBudget = (_budget: unknown) => {_if (!budget) return "Not specified";
    return `$${budget.min} - $${_budget.max}`;
  };

  if (isLoading) {_return <JobDetailsSkeleton />;}

  if (error || !job) {_return (_<>
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
          <p className="mb-8">The job you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => router.push('/careers')}>View All Jobs</Button>
        </div>
      </>
    );
  }

  const _handleApply = () => {_if (!isAuthenticated) {
      toast.error("Please log in to apply for this job");
      router.push(`/login?redirect=${encodeURIComponent(`/jobs/${jobId || ''}`)}`); // Added null check for jobId
      return;
    }

    if (user?.userType !== "talent" && user?.userType !== "admin" && user?.userType !== "client") {_toast.error("Only job seekers can apply for jobs");
      return;}
    
    setIsApplyModalOpen(true);
  };

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
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button 
            variant="outline" 
            size="sm"
            onClick={_() => router.push('/careers')}
          >
            ← Back to Jobs
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl mb-2">{_job.title}</CardTitle>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>Posted {_formatDistanceToNow(new Date(job.created_at), _{ addSuffix: true})}</span>
                    </div>
                  </div>
                  <Badge>{_job.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Job Description</h3>
                  <div className="whitespace-pre-wrap">
                    {_job.description}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-3">Required Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {_job.skills?.map(_(skill: string, _i: number) => (
                      <Badge key={i} variant="secondary">
                        {_skill}
                      </Badge>
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
                    <p className="font-medium">{_formatBudget(job.budget)}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="mt-1 h-5 w-5 text-muted-foreground" />
                  <div className="ml-3">
                    <p className="text-sm text-muted-foreground">Deadline</p>
                    <p className="font-medium">
                      {_job.deadline ? new Date(job.deadline).toLocaleDateString() : "Flexible"}
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
                
                {_!isOwnJob && (
                  <Button 
                    className="w-full mt-4" 
                    onClick={handleApply}
                    disabled={_isOwnJob}
                  >
                    Apply Now
                  </Button>
                )}
                
                {_isOwnJob && (
                  <div className="text-center p-2 bg-muted rounded-md mt-4">
                    <p className="text-sm text-muted-foreground">This is your job posting</p>
                  </div>
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
            id: job.id, _title: job.title, _description: job.description, _company_name: job.company_name ?? "Company", _budget: formatBudget(job.budget), _client_id: job.client_id}}
          isOpen={_isApplyModalOpen}
          onClose={_() => setIsApplyModalOpen(false)}
        />
      )}
    </>
  );
}
