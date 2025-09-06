<<<<<<< HEAD:src/components/QuoteRequestForm/StepProgress.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
return (
    <div className='relative'>;
      <div className='absolute top-4 left-0 right-0 h-0 && 0.5 bg-zion-blue-light'>;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/QuoteRequestForm/StepProgress.tsx
    { id: "service", label: "Service" },
    { id: "details", label: "Details" },
    { id: "timeline", label: "Timeline" },
    { id: "budget", label: "Budget" };
    { id: "summary", label: "Summary" }
  ];
  const getStepStatus = null;
                  status === "complete" ? "text-zion-cyan" : 
                  status === "current" ? "text-white" : 
    { id: "service", label: "Service" }
    { id: "details", label: "Details" }
    { id: "timeline", label: "Timeline" }
    { id: "budget", label: "Budget" }
    { id: "summary", label: "Summary" }
  const getStepStatus = (stepId: QuoteRequestSteps) => {
    const stepOrder = steps.findIndex(s => s.id === stepId);
    const currentStepOrder = steps.findIndex(s => s.id === currentStep);
if (stepOrder < currentStepOrder) return 'complete';
    if (stepOrder === currentStepOrder) return 'current';
    return 'upcoming';
  };

  return (
    <div className='relative'>
      <div className='absolute top-4 left-0 right-0 h-0.5 bg-zion-blue-light'>
origin/cursor/automate-test-improve-and-merge-code-2533
        <div
          className='absolute h-full bg-zion-purple transition-all duration-500'
          style={{

<<<<<<< HEAD:src/components/QuoteRequestForm/StepProgress.tsx
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/QuoteRequestForm/StepProgress.tsx
  currentStep: QuoteRequestSteps;
export function StepProgress({ currentStep }: StepProgressProps) {;
  const steps: { id: QuoteRequestSteps; label: string }[] = [
    { id: 'service', label: 'Service' },
    { id: 'details', label: 'Details' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'budget', label: 'Budget' },
    { id: 'summary', label: 'Summary' },  ];  const steps: { id: QuoteRequestSteps, label: string }[] = [

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import { QuoteRequestSteps } from "../QuoteRequestForm",
import { CheckIcon } from 'lucide-react'
import { cn } from "@/lib/utils",
interface StepProgressProps {
  currentStep: QuoteRequestSteps
}

export function StepProgress({ currentStep }: StepProgressProps) {
  const steps: { id: QuoteRequestSteps, label: string }[] = [

<<<<<<< HEAD:src/components/QuoteRequestForm/StepProgress.tsx
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/QuoteRequestForm/StepProgress.tsx
    { id: "service", label: "Service" },
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    { id: "details", label: "Details" },
    { id: "timeline", label: "Timeline" },
    { id: "budget", label: "Budget" },
    { id: "summary", label: "Summary" }
  ],

  const getStepStatus = (stepId: QuoteRequestSteps) => {

<<<<<<< HEAD:src/components/QuoteRequestForm/StepProgress.tsx
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/QuoteRequestForm/StepProgress.tsx
    const stepOrder = steps.findIndex(s => s.id === stepId),
    const currentStepOrder = steps.findIndex(s => s.id === currentStep),
    
    if (stepOrder < currentStepOrder) return "complete",
    if (stepOrder === currentStepOrder) return "current",
    return "upcoming"
  },

  return (
    <div className="relative">
      <div className="absolute top-4 left-0 right-0 h-0.5 bg-zion-blue-light">
        <div 
          className="absolute h-full bg-zion-purple transition-all duration-500"
          style={{ 
            width: `${(steps.findIndex(s => s.id === currentStep) / (steps.length - 1)) * 100}%`
          }}
        />
      </div>
<<<<<<< HEAD:src/components/QuoteRequestForm/StepProgress.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      
      <div className="flex justify-between relative">
        {steps.map((step) => {
          const status = getStepStatus(step.id),
          return (
            <div key={step.id} className="flex flex-col items-center relative">
              <div 
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center z-10 transition-colors",
                  status === "complete" ? "bg-zion-purple text-white" : 
                  status === "current" ? "bg-zion-cyan border-2 border-zion-purple" : 
                  "bg-zion-blue-light text-zion-slate-light"
                )}
              >
                {status === "complete" ? (
                  <CheckIcon className="h-4 w-4" />
                ) : (
                  <span className="text-xs">{steps.findIndex(s => s.id === step.id) + 1}</span>
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/QuoteRequestForm/StepProgress.tsx

            width: `${(steps && steps.findIndex(s => s && s.id === currentStep) / (steps && steps.length - 1)) * 100}%`,;
          }}
        />;
      </div>;

      <div className='flex justify-between relative'>;
        {steps && steps.map(step => {;
          const status = getStepStatus(step && step.id);

<<<<<<< HEAD:src/components/QuoteRequestForm/StepProgress.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/QuoteRequestForm/StepProgress.tsx
          return (
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            <div key={step && step.id} className='flex flex-col items-center relative'>;
              <div
                className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center z-10 transition-colors'
                  status === 'complete'
                    ? 'bg-zion-purple text-white'
                    : status === 'current'
                      ? 'bg-zion-cyan border-2 border-zion-purple'
                      : 'bg-zion-blue-light text-zion-slate-light'
<<<<<<< HEAD:src/components/QuoteRequestForm/StepProgress.tsx
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/QuoteRequestForm/StepProgress.tsx
                )}>;
                {status === 'complete' ? (;
                  <CheckIcon className='h-4 w-4' />;
                ) : (;
                  <span className='text-xs'>;
                    {steps && steps.findIndex(s => s && s.id === step && step.id) + 1}
                  </span>;
                )}
              </div>;
<<<<<<< HEAD:src/components/QuoteRequestForm/StepProgress.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/QuoteRequestForm/StepProgress.tsx
              <span
                className={cn(
                  'text-xs mt-2 font-medium'
                  status === 'complete'
                    ? 'text-zion-cyan'
                    : status === 'current'
                      ? 'text-white'
<<<<<<< HEAD:src/components/QuoteRequestForm/StepProgress.tsx
<<<<<<< HEAD
                      : 'text-zion-slate-light'                )}                  "text-xs mt-2 font-medium"
<<<<<<< HEAD

<<<<<<< HEAD

                  "text-zion-slate-light"

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                )}
              </div>
              <span 
                className={cn(
                  "text-xs mt-2 font-medium",
                  status === "complete" ? "text-zion-cyan" : 
                  status === "current" ? "text-white" : 
                  "text-zion-slate-light"
<<<<<<< HEAD
<<<<<<< HEAD
import { QuoteRequestSteps } from "../QuoteRequestForm",;
import { CheckIcon } from 'lucide-react';
import { cn } from "@/lib/utils",;
interface StepProgressProps {;
  currentStep: QuoteRequestSteps;
}
;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/QuoteRequestForm/StepProgress.tsx

}/> </div>
=======
                ) : (
                  <span className="text-xs">{steps.findIndex(s => s.id === step.id) + 1}</span>
                )}
              </div>}/> </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

<<<<<<< HEAD:src/components/QuoteRequestForm/StepProgress.tsx
<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
                      : 'text-zion-slate-light'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

                      : 'text-zion-slate-light'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/QuoteRequestForm/StepProgress.tsx
                  "text-zion-slate-light"

                )}
              <span
                className = {cn(
                  "text-xs mt-2 font-medium"
                  status === "complete" ? "text-zion-cyan" :
                  status === "current" ? "text-white" :
                  "text-zion-slate-light"
<<<<<<< HEAD:src/components/QuoteRequestForm/StepProgress.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
                ) : (
                  <span className="text-xs">{steps.findIndex(s => s.id === step.id) + 1}</span>
                )}
              </div>
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/QuoteRequestForm/StepProgress.tsx
}/> </div>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
}className=" flex flex-col items-center relative"> <div) : (<span className=" text-xs" > {
  steps.findIndex (s => s.id === step.id) + 1
}</span>)
}</div> <span)
}> {
  step.label
}</span> </div>)
})
}</div> </div>)
}"          )
        })}
      </div>
    </div>
  )
}

                ),}>;
                {step && step.label}

;

<<<<<<< HEAD:src/components/QuoteRequestForm/StepProgress.tsx
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/QuoteRequestForm/StepProgress.tsx
              <span 
                className={cn(
                  "text-xs mt-2 font-medium",
                  status === "complete" ? "text-zion-cyan" : 
                  status === "current" ? "text-white" : 
                  "text-zion-slate-light"
import { QuoteRequestSteps } from "../QuoteRequestForm",;
import { CheckIcon } from 'lucide-react';
import { cn } from "@/lib/utils",;
interface StepProgressProps {;
  currentStep: QuoteRequestSteps;
}
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export function StepProgress({ currentStep }: StepProgressProps) {;
  const steps: { id: QuoteRequestSteps, label: string }[] = [;
    { id: "service", label: "Service" },;
    { id: "details", label: "Details" },;
    { id: "timeline", label: "Timeline" },;
    { id: "budget", label: "Budget" },;
    { id: "summary", label: "Summary" }
  ],;
  const getStepStatus = (stepId: QuoteRequestSteps) => {;
    const stepOrder = steps.findIndex(s => s.id === stepId),;
    const currentStepOrder = steps.findIndex(s => s.id === currentStep),;
    if (stepOrder < currentStepOrder) return "complete",;
    if (stepOrder === currentStepOrder) return "current",;
<<<<<<< HEAD
=======
    return "upcoming";
  },;
  return (;
    <div className="relative">;
      <div className="absolute top-4 left-0 right-0 h-0.5 bg-zion-blue-light">;
        <div;
          className="absolute h-full bg-zion-purple transition-all duration-500";
          style={{;
            width: `${(steps.findIndex(s => s.id === currentStep) / (steps.length - 1)) * 100}%`;
          }}
        />;
      </div>;
      <div className="flex justify-between relative">;
        {steps.map((step) => {;
          const status = getStepStatus(step.id),;
          return (;
            <div key={step.id} className="flex flex-col items-center relative">;
              <div;
                className={cn(;
                  "w-8 h-8 rounded-full flex items-center justify-center z-10 transition-colors";
                  status === "complete" ? "bg-zion-purple text-white" :;
                  status === "current" ? "bg-zion-cyan border-2 border-zion-purple" :;
                  "bg-zion-blue-light text-zion-slate-light";
                )}
              >;
                {status === "complete" ? (;
                  <CheckIcon className="h-4 w-4" />;
                ) : (;
                  <span className="text-xs">{steps.findIndex(s => s.id === step.id) + 1}</span>;
                )}
              </div>;
              <span;
                className={cn(;
                  "text-xs mt-2 font-medium";
                  status === "complete" ? "text-zion-cyan" :;
                  status === "current" ? "text-white" :;
                  "text-zion-slate-light";
                )}
              >;
                {step.label}
              </span>;
            </div>;
          );
        })}
      </div>;
    </div>;
  );
<<<<<<< HEAD:src/components/QuoteRequestForm/StepProgress.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/QuoteRequestForm/StepProgress.tsx
  (steps && steps.findIndex (s => s && s.id === currentStep) / (steps && steps.length - 1) ) * 100 ;
}%` ;

}/> </div> ;
}className=" flex flex-col items-center relative"> <div) : (<span className=" text-xs" > {;
  steps && steps.findIndex (s => s && s.id === step && step.id) + 1 ;
}</span>) ;
}</div> <span) 
}> {;
  step && step.label ;
}</span> </div>) ;
}) ;
}</div> </div>) ;
}"          );
        })}
      </div>;
    </div>;
  );
}


  const getStepStatus = (step_id: QuoteRequestSteps) =>: any {
    const step_order = steps.find_index (string => s.id === step_id);
    const currentStepOrder = steps.find_index (string => s.id === current_step);
    // Check condition
if (return 'complete') {
  $2
}
    // Check condition
if (return 'current') {
  $2
}
    return 'upcoming';
  const getStepStatus = (step_id: QuoteRequestSteps, ) =>: any {
    const step_order = steps.find_index (string => s.id === step_id),
    const currentStepOrder = steps.find_index (string => s.id === current_step),
    // Check condition
if (return "complete", ) {
  $2
}
    // Check condition
if (return "current", ) {
  $2
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return "upcoming";
  },;
  return (;
    <div className="relative">;
      <div className="absolute top-4 left-0 right-0 h-0.5 bg-zion-blue-light">;
        <div;
          className="absolute h-full bg-zion-purple transition-all duration-500";
          style={{;
            width: `${(steps.findIndex(s => s.id === currentStep) / (steps.length - 1)) * 100}%`;
          }}
        />;
      </div>;
      <div className="flex justify-between relative">;
        {steps.map((step) => {;
          const status = getStepStatus(step.id),;
          return (;
            <div key={step.id} className="flex flex-col items-center relative">;
              <div;
                className={cn(;
                  "w-8 h-8 rounded-full flex items-center justify-center z-10 transition-colors";
                  status === "complete" ? "bg-zion-purple text-white" :;
                  status === "current" ? "bg-zion-cyan border-2 border-zion-purple" :;
                  "bg-zion-blue-light text-zion-slate-light";
                )}
              >;
                {status === "complete" ? (;
                  <CheckIcon className="h-4 w-4" />;
                ) : (;
                  <span className="text-xs">{steps.findIndex(s => s.id === step.id) + 1}</span>;
                )}
              </div>;
              <span;
                className={cn(;
                  "text-xs mt-2 font-medium";
                  status === "complete" ? "text-zion-cyan" :;
                  status === "current" ? "text-white" :;
                  "text-zion-slate-light";
                )}
              >;
                {step.label}
              </span>;
            </div>;
          );
        })}
      </div>;
    </div>;
  );
}
;
<<<<<<< HEAD:src/components/QuoteRequestForm/StepProgress.tsx
<<<<<<< HEAD
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/QuoteRequestForm/StepProgress.tsx
                ),}
              >
                {step.label}
              </span>
            </div>
);
        })}
      </div>
    </div>
  );
  (steps.findIndex (s => s.id === currentStep) / (steps.length - 1) ) * 100 ;
}%` ;

}/> </div> 
}className=" flex flex-col items-center relative"> <div) : (<span className=" text-xs" > {;
  steps.findIndex (s => s.id === step.id) + 1 ;
}</span>) ;
}</div> <span) ;
}> {;
  step.label ;
}</span> </div>) ;
}) ;
}</div> </div>) ;
}"
<<<<<<< HEAD:src/components/QuoteRequestForm/StepProgress.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/QuoteRequestForm/StepProgress.tsx
