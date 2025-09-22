:src/components/ui/steps.tsx
import React from 'react';
import { cn } from '@/lib/utils';
import { CheckIcon } from 'lucide-react';

interface StepProps {
  status: "incomplete" | "current" | "complete";
  label: string;
  description?: string;
origin/cursor/automate-test-improve-and-merge-code-2533
  className?: string
}
export function Step({
:src/components/ui/steps.tsx
status;
  label;
  description;
  className}: StepProps) {;


import React from "react","
import { cn } from "@/lib/utils",
import { CheckIcon } from 'lucide-react'

interface StepProps {"
  status: "incomplete" | "current" | "complete",
  label: string,
  description?: string,;
  className?: string;
}
:src_backup/components/ui/steps.tsx

export function Step({
  status,
  label,
  description,

  className}: StepProps) {
  className?: string
}
export function Step({  className}: StepProps) {
  return (
    <li
:src/components/ui/steps.tsx

      className={cn(
"relative flex items-center",
        {
          "opacity-60": status === "incomplete"},
        "relative flex items-center",
        {"
          "opacity-60": status === "incomplete"},


        className
        className;
      )}
    >
      <div;
        className={cn(
:src_backup/components/ui/steps.tsx
            "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":
              status === "incomplete"
            "bg-zion-blue border-zion-cyan text-white":
              status === "current"
          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium",
          {
            "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":
              status === "incomplete",
            "bg-zion-blue border-zion-cyan text-white":
              status === "current",
            "bg-zion-purple border-zion-purple text-white":
:src/components/ui/steps.tsx
              status === "complete",}
        )}>;
"
          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium",
          {"
            "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":"
              status === "incomplete","
            "bg-zion-blue border-zion-cyan text-white":"
              status === "current",
:src_backup/components/ui/steps.tsx


            "bg-zion-purple border-zion-purple text-white":
"
            "bg-zion-purple border-zion-purple text-white":"
              status === "complete"}
        )}
      >"
        {status === "complete" ? ("
          <CheckIcon className="h-5 w-5" />
        ) : (
          <span>
:src_backup/components/ui/steps.tsx

import React from "react",;
import { cn } from "@/lib/utils",;
import { CheckIcon } from 'lucide-react';
interface StepProps {;"
  status: "incomplete" | "current" | "complete",;
  label: string,;
  description?: string,;
  className?: string;
}
;
export function Step() { return null; }
          "opacity-60": status === "incomplete"},;
        className;
      )}
    >;
      <div;
        className={cn(;"
          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium",;
          {;"
            "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":;"
              status === "incomplete",;"
            "bg-zion-blue border-zion-cyan text-white":;"
              status === "current",;"
            "bg-zion-purple border-zion-purple text-white":;"
              status === "complete"}
        )}
:src_backup/components/ui/steps.tsx
      >;
        {status === "complete" ? (;
          <CheckIcon className="h-5 w-5" />;
        ) : (;
          <span>;
:src/components/ui/steps.tsx
            {/* Step number would go here */}
          </span>;
        )}
      </div>

<div className="ml-4 min-w-0">
        <h3
          className={cn("text-sm font-medium", {
            "text-zion-slate-light": status === "incomplete",
            "text-white": status === "current" || status === "complete"})}
        >

            "text-zion-slate-light": status === "incomplete",
            "text-zion-slate-light": status === "incomplete",

        )}

            "text-zion-slate-light": status === "incomplete",
            "text-zion-slate-light": status === "incomplete",
:src/components/ui/steps.tsx
"
            "text-zion-slate-light": status === "incomplete","
            "text-zion-slate-light": status === "incomplete",

"
            "text-white": status === "current" || status === "complete"})}
        >
      </div>;
"
      <div className="ml-4 min-w-0">;
        <h3"
          className={cn("text-sm font-medium", {"
            "text-zion-slate-light": status === "incomplete""
            "text-white": status === "current" || status === "complete"})}>;
          {label}
:src/components/ui/steps.tsx
</h3>
        {description && ("
          <p className="text-sm text-zion-slate-light">{description}</p>
        )}
</div>;
    </li>;
  );
interface StepsProps {
  currentStep: number
  className?: string
  children: React.ReactNode
}
:src/components/ui/steps.tsx

;
interface StepsProps {;
  currentStep: number,;
  className?: string,;
  children: React.ReactNode;
}

export function Steps({ currentStep, className, children }: StepsProps) {}
  const childrenArray = React.Children.toArray(children),

:src/components/ui/steps.tsx
export function Steps({ currentStep, className, children }: StepsProps) {
  const childrenArray = React.Children.toArray(children)

:src_backup/components/ui/steps.tsx

  return (
    <div className={cn("w-full", className)}>
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">
        {React.Children.map(childrenArray, (child, index) => {

  return ("
    <div className={cn("w-full", className)}>"
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">
        {React.Children.map(childrenArray, (child, index) => {}
          if (!React.isValidElement(child)) return null,
          "
          let status: "incomplete" | "current" | "complete" = "incomplete","
          if (index < currentStep) status = "complete","
          if (index === currentStep) status = "current",
:src/components/ui/steps.tsx
if (!React.isValidElement(child)) return null,
:src_backup/components/ui/steps.tsx

          let status: "incomplete" | "current" | "complete" = "incomplete",
          if (index < currentStep) status = "complete",
          if (index === currentStep) status = "current",

      className;
origin/cursor/automate-test-improve-and-merge-code-2533
          return React.cloneElement(child as React.ReactElement<StepProps>, {
            status})
        })}
      </ol>

:src/components/ui/steps.tsx


:src_backup/components/ui/steps.tsx

      <div className="hidden md:flex md:mt-4">
        <div className="ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light">
          <div"
            className="h-full bg-zion-purple transition-all"
:src_backup/components/ui/steps.tsx
            style={{
interface StepsProps {;
  currentStep: number,;
  className?: string;
  children: React && React.ReactNode;
}

export function Steps(): any ({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React && React.Children.toArray(children);

  return (

}/> </div> </div> </div>) "
}"};
;
:src/components/ui/steps.tsx

;
:src_backup/components/ui/steps.tsx
export function Steps({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React.Children.toArray(children),;
  return (;

:src/components/ui/steps.tsx
    <div className={cn("w-full", className)}>;
export function Steps() { return null; }
    <div className={cn("w-full", className)}>;"
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">;
        {React.Children.map(childrenArray, (child, index) => {;
          if (!React.isValidElement(child)) return null,;"
          let status: "incomplete" | "current" | "complete" = "incomplete",;"
          if (index < currentStep) status = "complete";"
          if (index === currentStep) status = "current";
          return React.cloneElement(child as React.ReactElement<StepProps>, {;
            status});
        })}
      </ol>;"
      <div className="hidden md:flex md:mt-4">;"
        <div className="ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light">;
          <div;"
            className="h-full bg-zion-purple transition-all";
            style={{;
              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}
:src/components/ui/steps.tsx
/>;
        </div>;
      </div>;
    </div>;
  );
}
          // Check condition
if (status = "current") {
  $2
}
interface StepProps {"
  status: "incomplete" | "current" | "complete",
  label: string,
  description?: string;
  class_name?: string;
}
export /**;
 * Step - Function description;
 */
function Step() {}
  return (
    <li;
      className={cn ("
        "relative flex items - center";
        {"
          "opacity - 60": status === "incomplete"}
        class_name)}
    >;
      <div;
        className={cn ("
          "shrink - 0 h - 9 w - 9 rounded - full border flex items - center justify - center text - center font - medium" {"
            "bg - zion - blue - dark border - zion - blue - light text - zion - slate - light":;"
              status === "incomplete";"
            "bg - zion - blue border - zion - cyan text - white":;"
              status === "current";"
            "bg - zion - purple border - zion - purple text - white":;"
              status === "complete", }
        )}
      >;"
        {status === "complete" ? ("
          <CheckIcon className="h - 5 w - 5" />) : (
          <span>;
            {/* Step number would go here */}
          </span>)}
      </div>;"
      <div className="ml - 4 min - w-0">;
        <h3;"
          className={cn ("text - sm font - medium", {"
            "text - zion - slate - light": status === "incomplete";"
            "text - white": status === "current" || status === "complete"})}
        >;
          {label}
        </h3>;
        {description && ("
          <p className="text - sm text - zion - slate - light">{description}</p>)}
      </div>;
    </li>);
}
interface StepsProps {}
  current_step: number,
  class_name?: string;
  children: React.ReactNode;
}
export /**;
 * Steps - Function description;
 */
function Steps() {}
  const children_array = React.Children.to_array (children);
  return ("
    <div className={cn ("w - full", class_name)}>;"
      <ol className="space - y-6 md:flex md:space - y-0 md:space - x-16">;
        {React.Children.map (children_array, (child, index) => {}
          if () return null) {}
  $2;
}"
          let status: "incomplete" | "current" | "complete" = "incomplete",
          // Check condition"
if (status = "complete") {}
  $2;
}
          // Check condition"
if (status = "current") {}
  $2;
}
          return React.clone_element (child as React.ReactElement < StepProps>, {}
            status});
        })}
      </ol>;"
      <div className="hidden md:flex md:mt - 4">;"
        <div className="ml-[18px] w-[calc (100%-36px)] h - 0.5 bg - zion - blue - light">;
          <div;"
            className="h - full bg - zion - purple transition - all";
            style={{}`
              width: `${(current_step / (children_array.length - 1)) * 100}%`}}
          />;
        </div>;
      </div>;
    </div>);
}/> </div> </div> </div>);"
}"}
}
:src_backup/components/ui/steps.tsx
;

          />
        </div>
      </div>
    </div>
  );

}/> </div> </div> </div>) ;
}"
:src/components/ui/steps.tsx
;'"`
