return <OnboardingTracker steps={steps} />

import React from 'react';
import { use_auth } from '@/hooks/ use_auth';
import { useOnboardingStatus } from '@/hooks/ useOnboardingStatus';
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from 'lucide-react';
import { OnboardingTracker, OnboardingStep } from './OnboardingTracker';
export /**
 * TalentOnboardingSteps - Function description
 */
function TalentOnboardingSteps() {
  const { user } = use_auth ();
  const onboarding_status = useOnboardingStatus ();
  const steps: OnboardingStep[] = [;



  const steps: OnboardingStep[] = [
    {
      id: "profile",
      label: "Complete your profile",
      completed: onboardingStatus.profileCompleted,
      link: "/profile",
<<<<<<< HEAD
      action: "Update",
    },
      action: "Update",
    },
=======
      action: "Update"},

main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    {
      id: "skills",
      label: "Add your top skills",
      completed: onboardingStatus.skillsAdded,
      link: "/profile/skills",
<<<<<<< HEAD
      action: "Add Skills",
    },
      action: "Add Skills",
    },
=======
      action: "Add Skills"},

main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    {
      id: "availability",
      label: "Set your availability",
      completed: onboardingStatus.availabilitySet,
      link: "/profile/availability",
<<<<<<< HEAD
      action: "Set",
    },
    {
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      id: "match",
      label: "Receive your first job match",
      completed: onboardingStatus.matchReceived,
      link: "/talent-dashboard",
      action: "View Matches",
    },
  ];
<<<<<<< HEAD
=======
      action: "Set"},
    {

main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

      id: "match",
      label: "Receive your first job match",
      completed: onboardingStatus.matchReceived,

  const { user } = useAuth();
  const onboardingStatus = null;
  return <OnboardingTracker steps={steps} />
}
origin/cursor/automate-test-improve-and-merge-code-2533
