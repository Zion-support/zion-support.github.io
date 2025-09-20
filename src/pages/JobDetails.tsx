import React, { useState, useEffect } from 'react';
import { SEO } from '@/components/SEO';
import { useWhitelabel } from '@/context/WhitelabelContext';
// import { JobDetailsSkeleton } from '@/components/jobs';

interface Job {
  id: string;
  title: string;
  description: string;
  company_name?: string;
  client_id: string;
  skills?: string[];
  created_at: string;
  category: string;
}

const JobDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  // const { job, loading, error } = useJobDetails(id as string);
  const job = null;
  const loading = false;
  const error = null;
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const { isWhitelabel } = useWhitelabel();

  if (loading) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded mb-4"></div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
      </>
    );
  }

  if (error || !job) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
          <p className="mb-8">The job you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => router.push('/careers')}>
            View All Jobs
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title={`${job.title} - ${job.company_name || 'Zion Tech Group'}`}
        description={job.description}
        keywords={job.skills || []}
      />
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
          <p className="text-gray-600 mb-4">{job.company_name}</p>
          <div className="prose max-w-none">
            <p>{job.description}</p>
          </div>
          <Button 
            onClick={() => setIsApplyModalOpen(true)}
            className="mt-8"
          >
            Apply Now
          </Button>
        </div>
      </div>
      {isApplyModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Apply to Job</h2>
            <p className="mb-4">Application form would go here.</p>
            <Button onClick={() => setIsApplyModalOpen(false)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default JobDetails;