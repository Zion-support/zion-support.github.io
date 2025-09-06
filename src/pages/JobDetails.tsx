  Clock,
  DollarSign,
  Tag,;
  Users;
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


  return (
    <>
      <SEO 
        title={`${job.title} - ${isWhitelabel ? brandName : 'Zion AI Marketplace'}`}
        description={job.description.substring(0, 160)}
      />
      <Header />

                
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
                  <div className="text-center p-2 bg-muted rounded-md mt-4">
                    <p className="text-sm text-muted-foreground">This is your job posting</p>
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
