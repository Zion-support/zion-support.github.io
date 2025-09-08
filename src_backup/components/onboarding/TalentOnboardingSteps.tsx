import React from "react",
import { useAuth } from "@/hooks/useAuth",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from 'lucide-react'

<<<<<<< HEAD

return <OnboardingTracker steps={steps} />


=======
<<<<<<< HEAD
import React from "react",import { useAuth } from "@/hooks/useAuth",import { useOnboardingStatus  } from '@/hooks/useOnboardingStatus';
import { UserCheck, Star, CalendarCheck, BriefcaseIcon  } from 'lucide-react';
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from 'lucide-react'
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
return <OnboardingTracker steps={steps} />

<<<<<<< HEAD
import React from "react,import { useAuth } from @/hooks/useAuth",import { useOnboardingStatus  } from '@/hooks/useOnboardingStatus;
import { UserCheck, Star, CalendarCheck, BriefcaseIcon  } from lucide-react';
>>>>>>> origin/resolved-merge-conflicts
return <OnboardingTracker steps={steps} />;
import React from 'react';
import { use_auth } from '@/hooks/ use_auth';
import { useOnboardingStatus } from '@/hooks/ useOnboardingStatus';
<<<<<<< HEAD
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from 'lucide-react';
import { OnboardingTracker, OnboardingStep } from './OnboardingTracker';
=======
=======
import React from 'react';
import { use_auth } from '@/hooks / use_auth';
import { useOnboardingStatus } from '@/hooks / useOnboardingStatus';

>>>>>>> origin/chore/fix-lint-and-merge
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from 'lucide-react';
import { OnboardingTracker, OnboardingStep } from './OnboardingTracker';
import { use_auth } from @/hooks/ use_auth';
import { useOnboardingStatus } from '@/hooks/ useOnboardingStatus;
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from lucide-react';
import { OnboardingTracker, OnboardingStep } from './OnboardingTracker;
>>>>>>> origin/resolved-merge-conflicts
export /**
 * TalentOnboardingSteps - Function description
 */
function TalentOnboardingSteps() {
  const { user } = use_auth ();
  const onboarding_status = useOnboardingStatus ();
  const steps: OnboardingStep[] = [;

<<<<<<< HEAD



<<<<<<< HEAD
import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from 'lucide-react'
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
=======
import React from "react;
import { useAuth } from @/hooks/useAuth";
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus;
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from lucide-react'
import { OnboardingTracker, OnboardingStep } from ./OnboardingTracker";
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
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
=======
  const steps: OnboardingStep[] = [
    {
      id: "profile",
      label: "Complete your profile",
      completed: onboardingStatus.profileCompleted,
      link: "/profile",
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

    {
      id: "skills",
      label: "Add your top skills",
      completed: onboardingStatus.skillsAdded,
<<<<<<< HEAD
=======
<<<<<<< HEAD
      link: "/profile/skills",
      action: "Add Skills"},
=======
<<<<<<< HEAD
      link: "/profile/skills,
      action: Add Skills"},
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

      link: "/profile/skills",
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

    {
      id: "availability",
      label: "Set your availability",
      completed: onboardingStatus.availabilitySet,
      link: "/profile/availability",

      id: "match",
      label: "Receive your first job match",
      completed: onboardingStatus.matchReceived,
<<<<<<< HEAD
=======
<<<<<<< HEAD
      link: "/talent-dashboard",
      action: "Set"},
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
      link: "/talent-dashboard",
      action: "View Matches"}],
  
  return <OnboardingTracker steps={steps} />
}
;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      link: /talent-dashboard",
      action: "Set},
>>>>>>> origin/resolved-merge-conflicts
    {
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
      id: "match",
      label: "Receive your first job match",
      completed: onboardingStatus.matchReceived,
=======
>>>>>>> origin/chore/fix-lint-and-merge

  const { user } = useAuth();
  const onboardingStatus = null;
  return <OnboardingTracker steps={steps} />
<<<<<<< HEAD
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
<<<<<<< HEAD
;
=======
=======
}
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
