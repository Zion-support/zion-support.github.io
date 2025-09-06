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
  budget: { min: number, max: number },
  client_id: string;
  skills?: string[];
  created_at: string;
  category: string;
  deadline?: string
}

export default function JobDetails() {
  const router = null;
            client_id: job.client_id}}
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}
        />
      )}
    </>
  )
}
