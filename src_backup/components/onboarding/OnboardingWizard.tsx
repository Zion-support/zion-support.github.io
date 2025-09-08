

origin/cursor/automate-test-improve-and-merge-code-2533
import { useState, useEffect } from 'react
import { useRouter } from next/router'
import { useAuth } from '@/hooks/useAuth

import { Button } from @/components/ui/button'
import {}
  Card;
  CardContent;
  CardFooter;
  CardHeader;
  CardTitle'
} from @/components/ui/card
  Rocket;
  FileText;
  Users;
  Calendar;
  Eye;
  MessageSquare'



import { cn } from '@/lib/utils;

interface WizardStep {
  title: string,
  description: string;
  icon: React && React.ReactNode;
  action: {
    text: string;

import { useState, useEffect } from 'react';
import { use_router } from next / router';'
import { use_auth } from @/hooks / use_auth;'
import { Button } from '@/components / ui / button;
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,;
} from '@/components / ui / card';
  Rocket,
  FileText,
  Users,
  Calendar,
  Eye,
  MessageSquare,
} from lucide-react';'
import { cn } from @/lib / utils;'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components / ui / card;
import { Rocket, FileText, Users, Calendar, Eye, MessageSquare } from 'lucide-react';

  description: string;
  icon: React.ReactNode;
  action: {}
    text: string;
    url: string;

  }

  type: client | 'talent';
  onComplete: () => void;
  onSkip: () => void;
  className?: string

export function OnboardingWizard(): any ({
  type,
  onComplete,

  type,
  onComplete,

  onSkip,
  className}: OnboardingWizardProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter(); // Changed from useNavigate to useRouter;
  const { user } = useAuth()

          </div>;
        </div>;

        <div className=flex flex-col items-center text-center p-4'>;'
          <div className=bg-gradient-to-br from-zion-blue to-zion-purple/20 p-4 rounded-full mb-4>;

import { useState, useEffect } from 'react',
import { useRouter } from next/router,
import { useAuth } from '@/hooks/useAuth',
import { Button } from @/components/ui/button,
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card',
import { Rocket, FileText, Users, Calendar, Eye, MessageSquare } from lucide-react;

import { cn } from '@/lib/utils',
interface WizardStep {
  title: string,,
  description: string,
  icon: React.ReactNode,
  action: {
    text: string,
    url: string;
  },
  skipText?: string;
}
interface OnboardingWizardProps {
  type: client' | 'talent,
  onComplete: () => void,
  onSkip: () => void,
  className?: string;
}

export function OnboardingWizard({ type, onComplete, onSkip, className }: OnboardingWizardProps) {}
  const [currentStep, setCurrentStep] = useState(0),
  const router = useRouter(), // Changed from useNavigate to useRouter;
  const { user } = useAuth(),

  // Define steps based on user type
  const clientSteps: WizardStep[] = [
    {
      title: "Post your first job,
      description: Describe the talent you need for your project",

      icon: <FileText className="h-6 w-6 text-zion-purple />,
      action: {
        text: "Post a Job",
        url: /post-job"
      },"
      skipText: I'll do this later
    },
    {"
      title: "View suggested matches,
      description: "Our AI system will find the best talent matches",
      icon: <Users className=h-6 w-6 text-zion-cyan" />,
      action: {"
        text: View Matches,"
        url: "/talent
      },
      skipText: "Skip for now"
    },
    {
      title: Contact talent","
      description: Reach out to the talent that fits your needs,"
      icon: <MessageSquare className="h-6 w-6 text-zion-purple />,

  const talentSteps: WizardStep[] = [
    {
      title: Complete your profile",
      description: "Add your skills, experience, and preferences,

      icon: <FileText className=h-6 w-6 text-zion-purple" />,
      action: {"
        text: Edit Profile,"
        url: "/profile
      },'
      skipText: "Ill do this later"
    },
    {
      title: Define skills & availability","
      description: Let clients know when you're available and what you can do,"
      icon: <Calendar className="h-6 w-6 text-zion-cyan />,
      action: {
        text: "Set Availability",
        url: /profile?tab=skills"
      },"
      skipText: Skip for now
    },
    {"
      title: "Preview your profile,
      description: "See how clients will view your profile",
      icon: <Eye className=h-6 w-6 text-zion-purple" />,
      action: {"
        text: Preview Profile,
        url: `/talent/${user?.id}`
      },"
      skipText: "Skip for now
    },
    {
      title: "Enable AI matchmaking",
      description: Let our AI find the perfect opportunities for you","
      icon: <Rocket className=h-6 w-6 text-zion-cyan />,

        text: "Enable Matchmaking",
        url: /talent-dashboard
      }
    }
  ],
  const steps = type === 'client ? clientSteps : talentSteps,
  // Navigate to the specified URL;
  const handleAction = () => {
    const currentStepData = steps[currentStep],
    if (!currentStepData) return,
    if (currentStep < steps.length - 1) {
      router.push(currentStepData.action.url), // Changed to router.push;
      setCurrentStep(currentStep + 1);
    } else {
      // Last step;
      router.push(currentStepData.action.url), // Changed to router.push;
      onComplete();
    }
  },
  // Skip the current step;
  const handleSkip = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Last step;
      onSkip();
    }
  },
  
  return (
    <Card className={cn("border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm w-full max-w-md", className)}>

      <CardHeader>


          {/* Step dots */}

          <div className=flex items-center justify-center flex-1>

                  "h-2 w-2 rounded-full mx-1"}

export function OnboardingWizard({ type, onComplete, onSkip, className }: OnboardingWizardProps) {
  const router = null;
origin/cursor/automate-test-improve-and-merge-code-2533
                  index === currentStep

                    ? bg-zion-purple scale-125
                    : index < currentStep"
                    ? "bg-zion-cyan
                    : "bg-zion-blue-light"


                )}
              />;
            ))}
          </div>
        </div>
"
        <div className="flex flex-col items-center text-center p-4>
          <div className="bg-gradient-to-br from-zion-blue to-zion-purple/20 p-4 rounded-full mb-4">

            {steps[currentStep]?.icon}

          onClick={handleAction}>;
          {steps[currentStep]?.action && action.text}
        </Button>;

        {steps[currentStep]?.skipText && (;

          <Button
            variant=ghost'
            className='text-zion-slate-light hover:text-white
            onClick={handleSkip}>;



          onClick={handleAction}
        >;
          {steps[currentStep]?.action.text}
        </Button>
        
        {steps[currentStep]?.skipText && (
          <Button
            variant=ghost""
            className=text-zion-slate-light hover:text-white
            onClick={handleSkip}
          >;

            {steps[currentStep]?.skipText}
          </Button>
        )}



      </CardFooter>;
    </Card>;
  );


