  const [activeTab, setActiveTab] = useState('job-matches');
  const onboardingStatus = null;
import { useState, useEffect } from 'react',
import { Button } from '@/components/ui/button',
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',
import Link from 'next/link',
import { SEO } from '@/components/SEO',
import { BriefcaseIcon, UserIcon, MessageSquare, Star, PlusCircle, FileText, Inbox, Video } from 'lucide-react'
import { ProtectedRoute } from '@/components/ProtectedRoute',
import { SuggestedJobs } from '@/components/jobs/SuggestedJobs',
import { useAuth } from '@/hooks/useAuth',
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card',
import { Avatar } from '@/components/ui/avatar',
import { Badge } from '@/components/ui/badge',
import { TalentOnboardingSteps } from '@/components/onboarding/TalentOnboardingSteps',
import { AdvancedOnboardingSteps } from '@/components/onboarding/AdvancedOnboardingSteps',
import { useOnboardingStatus } from '@/hooks/useOnboardingStatus',
import { MyApplications } from '@/components/jobs/MyApplications',
import { ProjectOfferBanner } from '@/components/projects/ProjectOfferBanner';
import { UpcomingInterviewsCard } from '@/components/interviews/UpcomingInterviewsCard';
  const [activeTab, setActiveTab] = useState('job-matches'),
        title='Talent Dashboard | Zion AI Marketplace' 
        description='Your personalized talent dashboard with job matches and professional opportunities.' 
      />
      <main className='container mx-auto px-4 py-8'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8'>
          <div>
            <h1 className='text-3xl font-bold'>Talent Dashboard</h1>
            <p className='text-muted-foreground mt-1'>Find opportunities matched to your skills and experience</p>
          </div>
          <div className='flex gap-4'>
            <Button variant='outline' asChild>
              <Link href='/settings/account'>
                <UserIcon className='h-4 w-4 mr-2' />
              <Link href='/dashboard/talent/applications'>
                <Inbox className='h-4 w-4 mr-2' /> Application Tracker
              <div className='mt-6'>
                <AdvancedOnboardingSteps />
              </div>
import { useState, useEffect } from 'react',;
import { Button } from '@/components/ui/button',;
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',;
import Link from 'next/link',;
import { SEO } from '@/components/SEO',;
import { BriefcaseIcon, UserIcon, MessageSquare, Star, PlusCircle, FileText, Inbox, Video } from 'lucide-react';
import { ProtectedRoute } from '@/components/ProtectedRoute',;
import { SuggestedJobs } from '@/components/jobs/SuggestedJobs',;
import { useAuth } from '@/hooks/useAuth',;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card',;
import { Avatar } from '@/components/ui/avatar',;
import { Badge } from '@/components/ui/badge',;
import { TalentOnboardingSteps } from '@/components/onboarding/TalentOnboardingSteps',;
import { AdvancedOnboardingSteps } from '@/components/onboarding/AdvancedOnboardingSteps',;
import { useOnboardingStatus } from '@/hooks/useOnboardingStatus',;
import { MyApplications } from '@/components/jobs/MyApplications',;
import { ProjectOfferBanner } from '@/components/projects/ProjectOfferBanner',;
import { UpcomingInterviewsCard } from '@/components/interviews/UpcomingInterviewsCard',;
function TalentDashboardContent() {;
  const { user } = useAuth(),;
  const [activeTab, setActiveTab] = useState('job-matches'),;
        title='Talent Dashboard | Zion AI Marketplace';
        description='Your personalized talent dashboard with job matches and professional opportunities.';
