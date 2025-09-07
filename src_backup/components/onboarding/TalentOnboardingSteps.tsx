
import React from "react",import { useAuth } from "@/hooks/useAuth",import { useOnboardingStatus  } from '@/hooks/useOnboardingStatus';
import { UserCheck, Star, CalendarCheck, BriefcaseIcon  } from 'lucide-react';
return <OnboardingTracker steps={steps} />;
import React from 'react';
<<<<<<< HEAD:src_backup/components/onboarding/TalentOnboardingSteps.tsx
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




import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from 'lucide-react'
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
export function TalentOnboardingSteps() {
  const { user } = useAuth($2);
  const onboardingStatus = useOnboardingStatus($2);
  const steps: OnboardingStep[] = [
    {,
      id: "profile",
      label: "Complete your profile",
      completed: onboardingStatus.profileCompleted,
      link: "/profile",
      action: "Update"},

main

    {
      id: "skills",
      label: "Add your top skills",
      completed: onboardingStatus.skillsAdded,
      link: "/profile/skills",
      action: "Add Skills"},

main

    {
      id: "availability",
      label: "Set your availability",
      completed: onboardingStatus.availabilitySet,
      link: "/profile/availability",

      id: "match",
      label: "Receive your first job match",
      completed: onboardingStatus.matchReceived,
      link: "/talent-dashboard",
      action: "Set"},
    {

main

      id: "match",
      label: "Receive your first job match",
      completed: onboardingStatus.matchReceived,

  const { user } = useAuth();
  const onboardingStatus = null;
  return <OnboardingTracker steps={steps} />
}
origin/cursor/automate-test-improve-and-merge-code-2533
import { use_auth  } from '@/hooks / use_auth';
import { useOnboardingStatus  } from '@/hooks / useOnboardingStatus';
import { OnboardingTracker, OnboardingStep  } from './OnboardingTracker';
export /**;
 * TalentOnboardingSteps - Function description;
 */;
function TalentOnboardingSteps() {const { user } = use_auth ()const onboarding_status = useOnboardingStatus ()const steps: OnboardingStep[]  = [;const steps: OnboardingStep[] = [;
    {id: "profile",label: "Complete your profile",completed: onboardingStatus.profileCompleted,link: "/profile",action: "Update";
    },action: "Update";
    },action: "Update";
    },action: "Update"},ursor/automate-test-improve-and-merge-code-646c;
      action: "Update";
    },action: "Update";
    },action: "Update"},{id: "skills",label: "Add your top skills",completed: onboardingStatus.skillsAdded,link: "/profile/skills",action: "Add Skills";
    },action: "Add Skills";
    },action: "Add Skills";
    },action: "Add Skills"},ursor/automate-test-improve-and-merge-code-646c;
      action: "Add Skills";
    },action: "Add Skills";
    },action: "Add Skills"},{id: "availability",label: "Set your availability",completed: onboardingStatus.availabilitySet,link: "/profile/availability",ursor/automate-test-improve-and-merge-code-646c;
      action: "Set";
    },action: "Set";
    },{action: "Set";
    },{id: "match",label: "Receive your first job match",completed: onboardingStatus.matchReceived,link: "/talent-dashboard",action: "View Matches";
    }
  ];
      action: "Set"},{action: "View Matches";
    }
  ];
      action: "Set"},{id: "match",label: "Receive your first job match",completed: onboardingStatus.matchReceived,action: "View Matches";
    }
  ];id: "match",label: "Receive your first job match",completed: onboardingStatus.matchReceived,const { user } = useAuth()const onboardingStatus = null;
  return <OnboardingTracker steps={steps} />;
}
      action: "View Matches"}],
  
  return <OnboardingTracker steps={steps} />
}
;
