import React from "react",
import { useAuth } from "@/hooks/useAuth",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from 'lucide-react'


return <OnboardingTracker steps={steps} />



    {
      id: "skills,
      label: Add your top skills",
      completed: onboardingStatus.skillsAdded,

      link: "/profile/skills",


    {
      id: "availability,
      label: Set your availability",
      completed: onboardingStatus.availabilitySet,
      link: "/profile/availability,

      id: match",
      label: "Receive your first job match,
      completed: onboardingStatus.matchReceived,


