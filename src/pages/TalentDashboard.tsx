
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/
import Link from 'next/
import { SEO } from '@/components/
import { ProtectedRoute } from '@/components/
import { SuggestedJobs } from '@/components/jobs/
import { useAuth } from '@/hooks/
 from '@/components/ui/
import { Avatar } from '@/components/ui/
import { Badge } from '@/components/ui/
import { TalentOnboardingSteps } from '@/components/onboarding/
import { AdvancedOnboardingSteps } from '@/components/onboarding/
import { useOnboardingStatus } from '@/hooks/
import { MyApplications } from '@/components/jobs/
import { ProjectOfferBanner } from '@/components/projects/
import { UpcomingInterviewsCard } from '@/components/interviews/