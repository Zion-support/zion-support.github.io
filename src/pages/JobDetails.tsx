import React { useState useEffect } from 'react';
import useJobDetails from '@/hooks/useJobDetails';
import { ApplyToJobModal } from "@/components/messaging/job-application";
import { SEO } from "@/components/SEO";
import { useWhitelabel } from "@/context/WhitelabelContext";
import { JobDetailsSkeleton } from "@/components/jobs";
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
}
isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}        />
      )}
</>
import React from 'react';

export default function JobDetails() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">JobDetails</h1>
        <p className="text-lg text-gray-600">Coming soon...</p>
      </div>
    </div>
  );
}