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

  className}: StepProps) {

  return (
    <li

      className={cn(

        "relative flex items-center",
        {"
          "opacity-60": status === "incomplete"},

        className

      )}
    >
      <div;
        className={cn(

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium"          {


=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
            bg-zion-purple border-zion-purple text-white:
=======
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
            "bg-zion-purple border-zion-purple text-white":

              status === "complete",}
        )}>;
"
          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium",
          {"
            "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":"
              status === "incomplete","
            "bg-zion-blue border-zion-cyan text-white":"
              status === "current",

<<<<<<< HEAD

            "bg-zion-purple border-zion-purple text-white":
=======
            "bg-zion-purple border-zion-purple text-white":
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

              status === "complete"}
        )}
      >"
        {status === "complete" ? ("
          <CheckIcon className="h-5 w-5" />
        ) : (
          <span>

import React from "react",;
import { cn } from "@/lib/utils",;

import { CheckIcon } from 'lucide-react';
interface StepProps {;"
  status: "incomplete" | "current" | "complete",;
  label: string,;
  description?: string,;
  className?: string;
}
<<<<<<< HEAD


=======
<<<<<<< HEAD

;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

        {status === "complete" ? (;

          <CheckIcon className="h-5 w-5" />;
        ) : (;
          <span>;

<<<<<<< HEAD



=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc



            {/* Step number would go here */}
          </span>;

          </span>
<<<<<<< HEAD
            "text-zion-slate-light": status === "incomplete",
            "text-zion-slate-light": status === "incomplete",
=======
            text-zion-slate-light": status === "incomplete,
            text-zion-slate-light": status === "incomplete,
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            "text-zion-slate-light": status === "incomplete",
            "text-zion-slate-light": status === "incomplete",
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts

>>>>>>> origin/cursor/delete-old-data-records-6bba
        )}

            "text-zion-slate-light": status === "incomplete",
            "text-zion-slate-light": status === "incomplete",

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

        </h3>
        {description && ("
          <p className="text-sm text-zion-slate-light">{description}</p>
        )}

interface StepsProps {
  currentStep: number
  className?: string
  children: React.ReactNode

}

;
interface StepsProps {;
  currentStep: number,;
  className?: string,;
  children: React.ReactNode;
}

export function Steps({ currentStep, className, children }: StepsProps) {}
  const childrenArray = React.Children.toArray(children),

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
          if (!React.isValidElement(child)) return null,
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


  return (
    <div className={cn("w-full", className)}>
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">
        {React.Children.map(childrenArray, (child, index) => {



          if (!React.isValidElement(child)) return null,
          "
          let status: "incomplete" | "current" | "complete" = "incomplete","
          if (index < currentStep) status = "complete","
          if (index === currentStep) status = "current",
          if (!React.isValidElement(child)) return null,
          
          let status: "incomplete" | "current" | "complete" = "incomplete",
          if (index < currentStep) status = "complete",
          if (index === currentStep) status = "current",
          
      className;
origin/cursor/automate-test-improve-and-merge-code-2533

      className;
          return React.cloneElement(child as React.ReactElement<StepProps>, {
=======
          if (!React.isValidElement(child)) return null,
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          "
          let status: "incomplete" | "current" | "complete" = "incomplete","
          if (index < currentStep) status = "complete","
          if (index === currentStep) status = "current",
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

          if (!React.isValidElement(child)) return null,

            status})
        })}
      </ol>

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      



      <div className="hidden md:flex md:mt-4">
        <div className="ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light">
          <div
            className="h-full bg-zion-purple transition-all"
            style={


<<<<<<< HEAD
interface StepsProps {;
  currentStep: number,;
=======
interface StepsProps {
  currentStep: number,
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface StepsProps {;
  currentStep: number,;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
  className?: string;
  children: React && React.ReactNode;
}

export function Steps(): any ({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React && React.Children.toArray(children);

  return (

}/> </div> </div> </div>) "
}"};
;

;

export function Steps({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React.Children.toArray(children),;
  return (;

<<<<<<< HEAD


=======
<<<<<<< HEAD
    <div className={cn("w-full", className)}>;
        {status === "complete" ? (<CheckIcon className="h-5 w-5" />;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
    <div className={cn("w-full", className)}>;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <div className={cn("w-full, className)}>;
        {status === complete" ? (<CheckIcon className="h-5 w-5 />;
>>>>>>> origin/resolved-merge-conflicts
        ) : (<span>;
interface StepProps  {status: "incomplete" | "current" | "complete",label: string,description?: string,className?: string;
}export function Step() {return (<li;
      className={cn("relative flex items-center",{"opacity-60": status === "incomplete"},className;
      )}
    >;
      <div;
        className={cn("shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium",{"bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":;
              status === "incomplete","bg-zion-blue border-zion-cyan text-white":;
              status === "current","bg-zion-purple border-zion-purple text-white":;
              status === "complete"}
        )}
      >;{status === "complete" ? (<CheckIcon className="h-5 w-5" />;
        ) : (<span>{/* Step number would go here */}</span>;
          </span>;)}"text-zion-slate-light": status === "incomplete","text-zion-slate-light": status === "incomplete","text-white": status === "current" || status === "complete"})}
        >;
      </div>;<div className="ml-4 min-w-0">;
        <h3;
          className={cn("text-sm font-medium", {"text-zion-slate-light": status === "incomplete";
            "text-white": status === "current" || status === "complete"})}>;
          {label}</h3>;
        {description && (<p className="text-sm text-zion-slate-light">{description}</p>;
        )}
      </div>;
    </li>;
  )}interface StepsProps  {currentStep: number;
  className?: string;
  children: React.ReactNode;
}
export function Steps() {const childrenArray  = React.Children.toArray(children)interface StepsProps  {currentStep: number,className?: string,children: React.ReactNode;
}export function Steps() {const childrenArray = React.Children.toArray(children),return (<div className={cn("w-full", className)}>;
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">;
        {React.Children.map(childrenArray, (child, index) => {if (!React.isValidElement(child)) return null,let status: "incomplete" | "current" | "complete" = "incomplete",if (index < currentStep) status = "complete",if (index === currentStep) status = "current",if (!React.isValidElement(child)) return null,let status: "incomplete" | "current" | "complete" = "incomplete",if (index < currentStep) status = "complete",if (index === currentStep) status = "current",className;return React.cloneElement(child as React.ReactElement<StepProps>, {status})})}
      </ol>;
<<<<<<< HEAD
      <div className="hidden md:flex md:mt-4">;
=======
      <div className=hidden md:flex md:mt-4">;
=======
    <div className={cn("w-full", className)}>;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
<<<<<<< HEAD
            style={;
              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}
            style={interface StepsProps  {currentStep: number,className?: string;
=======
            style={{;
            style={{
              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            style={{interface StepsProps  {currentStep: number,className?: string;
>>>>>>> origin/resolved-merge-conflicts
  children: React && React.ReactNode;
}export function Steps(): any ({ currentStep, className, children }: StepsProps) {const childrenArray  = React && React.Children.toArray(children)return (}/> </div> </div> </div>)}"};
export function Steps() {const childrenArray = React.Children.toArray(children),return (<div className={cn("w-full", className)}>;
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">;
        {React.Children.map(childrenArray, (child, index) => {if (!React.isValidElement(child)) return null,let status: "incomplete" | "current" | "complete" = "incomplete",if (index < currentStep) status = "complete";
          if (index === currentStep) status = "current";
          return React.cloneElement(child as React.ReactElement<StepProps>, {status})})}
      </ol>;
      <div className="hidden md:flex md:mt-4">;
        <div className="ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light">;
          <div;
            className="h-full bg-zion-purple transition-all";
            style={width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}/>;
        </div>;
      </div>;
    </div>;
  )}// Check condition;
if (status = "complete") {$2;
}
          // Check condition;
if (status = "current") {$2;
}
<<<<<<< HEAD
interface StepProps  {status: "incomplete" | "current" | "complete",label: string,description?: string;
=======
interface StepProps  {status: incomplete | "current" | complete,label: string,description?: string;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
            style={}`
              width: `${(current_step / (children_array.length - 1)) * 100}%`}
          />;
        </div>;
      </div>;
    </div>);
}/> </div> </div> </div>);"
}"}

}

          />
        </div>
      </div>
    </div>
  );

}/> </div> </div> </div>) ;
}"