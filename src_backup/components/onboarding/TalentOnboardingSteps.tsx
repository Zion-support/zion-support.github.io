<<<<<<< HEAD:src_backup/components/onboarding/TalentOnboardingSteps.tsx
return <OnboardingTracker steps={steps} />
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/onboarding/TalentOnboardingSteps.tsx

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
=======
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/onboarding/TalentOnboardingSteps.tsx
