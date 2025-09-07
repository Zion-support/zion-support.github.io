<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

"use client",
import { useState, useEffect  } from './react';,
import { use_auth  } from '@/contexts / AuthContext';,
interface WalkthroughStep {
  id: string,
  title: string,
  description: string,
  target?: string,
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
"use client",;
import { useState, useEffect } from "react",;
import { useAuth } from "@/contexts/AuthContext",;
interface WalkthroughStep {;
  id: string,;
  title: string,;
  description: string,;
  target?: string,;
<<<<<<< HEAD
  position: "top" | "bottom" | "left" | "right";
}
;
const walkthroughSteps: WalkthroughStep[] = [;
  {;
    id: "welcome",;
    title: "Welcome to Zion OS! 🚀",;
    description: "Let's take a quick tour to help you get started with launching your digital economy.",;
    position: "bottom";
  },;
  {;
    id: "launch-wizard",;
    title: "Launch Wizard",;
    description: "Start here to create a new instance with marketplace, governance, and identity tools.",;
    target: "launch-wizard-card",;
    position: "right";
  },;
  {;
    id: "admin-panel",;
    title: "Admin Panel",;
    description: "Manage your deployed instances, API keys, and governance settings from here.",;
    target: "admin-instances-card",;
    position: "left";
  },;
  {;
    id: "navigation",;
    title: "Navigation",;
    description: "Use the top navigation to quickly access different sections of the platform.",;
    target: "nav-menu",;
    position: "bottom";
  },;
  {;
    id: "complete",;
    title: "You're All Set! 🎉",;
    description: "You now know the basics. Start building your digital economy or explore more features.",;
    position: "top";
  }
],;
export function OnboardingWalkthrough() {;
  const [currentStep, setCurrentStep] = useState(0),;
  const [isVisible, setIsVisible] = useState(false),;
  const [isCompleted, setIsCompleted] = useState(false),;
  const { user, completeOnboarding } = useAuth(),;
  useEffect(() => {;
    // Show walkthrough for new users who haven't completed onboarding;
    if (user && !user.onboardingCompleted) {;
      setIsVisible(true);
    }
  }, [user]),;
  const handleNext = () => {;
    if (currentStep < walkthroughSteps.length - 1) {;
      setCurrentStep(currentStep + 1);
    } else {;
      handleComplete();
    }
  },;
  const handlePrevious = () => {;
    if (currentStep > 0) {;
      setCurrentStep(currentStep - 1);
    }
  },;
  const handleSkip = () => {;
    setIsVisible(false),;
    setIsCompleted(true);
  },;
  const handleComplete = async () => {;
    try {;
      await completeOnboarding(),;
      setIsVisible(false),;
      setIsCompleted(true);
    } catch (error) {;
      console.error("Failed to complete onboarding:", error);
    }
  },;
  const currentStepData = walkthroughSteps[currentStep],;
  if (!isVisible || isCompleted) {;
    return null;
  }
;

  return (;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <>;
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={handleSkip} />;
      {/* Walkthrough Modal */}
      <div className="fixed z-50 inset-0 flex items-center justify-center p-4">;
        <div className="bg-zinc-800 rounded-xl border border-zinc-700 max-w-md w-full p-6 shadow-2xl">;
          {/* Progress Bar */}
          <div className="mb-6">;
            <div className="flex justify-between items-center mb-2">;
              <span className="text-sm text-zinc-400">;
                Step {currentStep + 1} of {walkthroughSteps.length}
              </span>;
              <button;
                onClick={handleSkip}
                className="text-zinc-400 hover:text-zinc-300 text-sm";
=======
=======

  position: "top" | "bottom" | "left" | "right";
}
const walkthrough_steps: WalkthroughStep[] = [;
  {
    id: "welcome",
    title: "Welcome to Zion OS! 🚀",
    description: "Let's take a quick tour to help you get started with launching your digital economy.",
    position: "bottom";
  },
  {
    id: "launch - wizard",
    title: "Launch Wizard",
    description: "Start here to create a new instance with marketplace, governance, and identity tools.",
    target: "launch - wizard - card",
    position: "right";
  },
  {
    id: "admin - panel",
    title: "Admin Panel",
    description: "Manage your deployed instances, API keys, and governance settings from here.",
    target: "admin - instances - card",
    position: "left";
  },
  {
    id: "navigation",
    title: "Navigation",
    description: "Use the top navigation to quickly access different sections of the platform.",
    target: "nav - menu",
    position: "bottom";
  },
  {
    id: "complete",
    title: "You're All Set! 🎉",
    description: "You now know the basics. Start building your digital economy or explore more features.",
    position: "top";
  }
],
export /**
 * OnboardingWalkthrough - Function description
 */
function OnboardingWalkthrough() {
  const [current_step, setCurrentStep] = useState (0),
  const [is_visible, setIsVisible] = useState (false),
  const [is_completed, setIsCompleted] = useState (false),
  const { user, complete_onboarding } = use_auth (),
  useEffect (() => {
    // Show walkthrough for new users who haven't completed onboarding;
    // Check condition
if ( {) {
  $2
}
      setIsVisible (true);
    }
  }, [user]),
  const handle_next = () =>: any {
    // Check condition
if ( {) {
  $2
}
      setCurrentStep (current_step + 1);
    } else {
      handle_complete ();
    }
  },
  const handle_previous = () =>: any {
    // Check condition
if ( {) {
  $2
}
      setCurrentStep (current_step - 1);
    }
  },
  const handle_skip = () =>: any {
    setIsVisible (false),
    setIsCompleted (true);
  },
  const handle_complete = async () => {
    try {
      await complete_onboarding (),
      setIsVisible (false),
      setIsCompleted (true);
    } catch (error) {
      console.error ("Failed to complete onboarding:", error);
    }
  },
  const currentStepData = walkthrough_steps[current_step],
  // Check condition
if ( {) {
  $2
}
    return null;
  }

;

  return (;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    <>;
      {/* Overlay */}
      <div className="fixed inset - 0 bg - black / 50 z-40" on_click={handle_skip} />;
      {/* Walkthrough Modal */}
      <div className="fixed z - 50 inset - 0 flex items - center justify - center p-4">;
        <div className="bg - zinc - 800 rounded - xl border border - zinc - 700 max - w-md w - full p - 6 shadow-2xl">;
          {/* Progress Bar */}
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="mb-6">;
=======
    <>;
      {/* Overlay */}
      <div className="fixed inset - 0 bg - black / 50 z-40" on_click={handle_skip} />;
      {/* Walkthrough Modal */}
      <div className="fixed z - 50 inset - 0 flex items - center justify - center p-4">;
        <div className="bg - zinc - 800 rounded - xl border border - zinc - 700 max - w-md w - full p - 6 shadow-2xl">;
          {/* Progress Bar */}
          <div className="mb-6">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            <div className="flex justify - between items - center mb-2">;
              <span className="text - sm text - zinc-400">;
=======
          <div className="mb - 6">;
            <div className="flex justify - between items - center mb - 2">;
              <span className="text - sm text - zinc - 400">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          <div className="mb-6">;
            <div className="flex justify - between items - center mb-2">;
              <span className="text - sm text - zinc-400">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                Step {current_step + 1} of {walkthrough_steps.length}
              </span>;
              <button;
                on_click={handle_skip}
<<<<<<< HEAD
                className="text - zinc - 400 hover:text - zinc - 300 text-sm";
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                className="text - zinc - 400 hover:text - zinc - 300 text - sm";
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  position: "top" | "bottom" | "left" | "right";
}
;
const walkthroughSteps: WalkthroughStep[] = [;
  {;
    id: "welcome",;
    title: "Welcome to Zion OS! 🚀",;
    description: "Let's take a quick tour to help you get started with launching your digital economy.",;
    position: "bottom";
  },;
  {;
    id: "launch-wizard",;
    title: "Launch Wizard",;
    description: "Start here to create a new instance with marketplace, governance, and identity tools.",;
    target: "launch-wizard-card",;
    position: "right";
  },;
  {;
    id: "admin-panel",;
    title: "Admin Panel",;
    description: "Manage your deployed instances, API keys, and governance settings from here.",;
    target: "admin-instances-card",;
    position: "left";
  },;
  {;
    id: "navigation",;
    title: "Navigation",;
    description: "Use the top navigation to quickly access different sections of the platform.",;
    target: "nav-menu",;
    position: "bottom";
  },;
  {;
    id: "complete",;
    title: "You're All Set! 🎉",;
    description: "You now know the basics. Start building your digital economy or explore more features.",;
    position: "top";
  }
],;
export function OnboardingWalkthrough() {;
  const [currentStep, setCurrentStep] = useState(0),;
  const [isVisible, setIsVisible] = useState(false),;
  const [isCompleted, setIsCompleted] = useState(false),;
  const { user, completeOnboarding } = useAuth(),;
  useEffect(() => {;
    // Show walkthrough for new users who haven't completed onboarding;
    if (user && !user.onboardingCompleted) {;
      setIsVisible(true);
    }
  }, [user]),;
  const handleNext = () => {;
    if (currentStep < walkthroughSteps.length - 1) {;
      setCurrentStep(currentStep + 1);
    } else {;
      handleComplete();
    }
  },;
  const handlePrevious = () => {;
    if (currentStep > 0) {;
      setCurrentStep(currentStep - 1);
    }
  },;
  const handleSkip = () => {;
    setIsVisible(false),;
    setIsCompleted(true);
  },;
  const handleComplete = async () => {;
    try {;
      await completeOnboarding(),;
      setIsVisible(false),;
      setIsCompleted(true);
    } catch (error) {;
      console.error("Failed to complete onboarding:", error);
    }
  },;
  const currentStepData = walkthroughSteps[currentStep],;
  if (!isVisible || isCompleted) {;
    return null;
  }
;
  return (;
    <>;
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={handleSkip} />;
      {/* Walkthrough Modal */}
      <div className="fixed z-50 inset-0 flex items-center justify-center p-4">;
        <div className="bg-zinc-800 rounded-xl border border-zinc-700 max-w-md w-full p-6 shadow-2xl">;
          {/* Progress Bar */}
          <div className="mb-6">;
            <div className="flex justify-between items-center mb-2">;
              <span className="text-sm text-zinc-400">;
                Step {currentStep + 1} of {walkthroughSteps.length}
              </span>;
              <button;
                onClick={handleSkip}
                className="text-zinc-400 hover:text-zinc-300 text-sm";
                className="text - zinc - 400 hover:text - zinc - 300 text-sm";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              >;
                Skip tour;
              </button>;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="w-full bg-zinc-700 rounded-full h-2">;
              <div;
                className="bg-blue-500 h-2 rounded-full transition-all duration-300";
                style={{ width: `${((currentStep + 1) / walkthroughSteps.length) * 100}%` }}
=======
            <div className="w - full bg - zinc - 700 rounded - full h-2">;
              <div;
=======
            <div className="w - full bg - zinc - 700 rounded - full h-2">;
              <div;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                className="bg - blue - 500 h - 2 rounded - full transition - all duration-300";
=======

    <>;
      {/* Overlay */}
      <div className="fixed inset - 0 bg - black / 50 z - 40" on_click={handle_skip} />;
      {/* Walkthrough Modal */}"
      <div className="fixed z - 50 inset - 0 flex items - center justify - center p - 4">;"
        <div className="bg - zinc - 800 rounded - xl border border - zinc - 700 max - w-md w - full p - 6 shadow - 2xl">;
          {/* Progress Bar */}"
          <div className="mb - 6">;"
            <div className="flex justify - between items - center mb - 2">;"
              <span className="text - sm text - zinc - 400">;
                Step {current_step + 1} of {walkthrough_steps.length}
              </span>;
              <button;
                on_click={handle_skip}"
                className="text - zinc - 400 hover:text - zinc - 300 text - sm";
              >;
                Skip tour;
              </button>;
            </div>;"
            <div className="w - full bg - zinc - 700 rounded - full h - 2">;
              <div;"
                className="bg - blue - 500 h - 2 rounded - full transition - all duration - 300";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            <div className="w - full bg - zinc - 700 rounded - full h - 2">;
              <div;
                className="bg - blue - 500 h - 2 rounded - full transition - all duration - 300";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                style={{ width: `${((current_step + 1) / walkthrough_steps.length) * 100}%` }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            <div className="w - full bg - zinc - 700 rounded - full h-2">;
              <div;
                className="bg - blue - 500 h - 2 rounded - full transition - all duration-300";
                style={{ width: `${((current_step + 1) / walkthrough_steps.length) * 100}%` }}
            <div className="w-full bg-zinc-700 rounded-full h-2">;
              <div;
                className="bg-blue-500 h-2 rounded-full transition-all duration-300";
                style={{ width: `${((currentStep + 1) / walkthroughSteps.length) * 100}%` }}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              />;
            </div>;
          </div>;
<<<<<<< HEAD
          {/* Step Content */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="text-center mb-6">;
            <h3 className="text-xl font-semibold text-white mb-3">;
              {currentStepData.title}
            </h3>;
            <p className="text-zinc-300 leading-relaxed">;
=======
          <div className="text - center mb-6">;
            <h3 className="text - xl font - semibold text - white mb-3">;
              {currentStepData.title}
            </h3>;
            <p className="text - zinc - 300 leading-relaxed">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          <div className="text - center mb-6">;
            <h3 className="text - xl font - semibold text - white mb-3">;
              {currentStepData.title}
            </h3>;
            <p className="text - zinc - 300 leading-relaxed">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          <div className="text - center mb - 6">;
            <h3 className="text - xl font - semibold text - white mb - 3">;
              {currentStepData.title}
            </h3>;
            <p className="text - zinc - 300 leading - relaxed">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          <div className="text - center mb-6">;
            <h3 className="text - xl font - semibold text - white mb-3">;
              {currentStepData.title}
            </h3>;
            <p className="text - zinc - 300 leading - relaxed">;
          <div className="text-center mb-6">;
            <h3 className="text-xl font-semibold text-white mb-3">;
              {currentStepData.title}
            </h3>;
            <p className="text-zinc-300 leading-relaxed">;
            <p className="text - zinc - 300 leading-relaxed">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              {currentStepData.description}
            </p>;
          </div>;
          {/* Navigation Buttons */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="flex justify-between items-center">;
            <button;
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="px-4 py-2 text-zinc-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors";
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <div className="flex justify - between items-center">;
            <button;
              on_click={handle_previous}
              disabled={current_step === 0}
              className="px - 4 py - 2 text - zinc - 400 hover:text - white disabled:opacity - 50 disabled:cursor - not - allowed transition-colors";
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          {/* Step Content */}"
          <div className="text - center mb - 6">;"
            <h3 className="text - xl font - semibold text - white mb - 3">;
              {currentStepData.title}
            </h3>;"
            <p className="text - zinc - 300 leading - relaxed">;
              {currentStepData.description}
            </p>;
          </div>;
          {/* Navigation Buttons */}"
          <div className="flex justify - between items - center">;
            <button;
              on_click={handle_previous}
              disabled={current_step === 0}"
              className="px - 4 py - 2 text - zinc - 400 hover:text - white disabled:opacity - 50 disabled:cursor - not - allowed transition - colors";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          <div className="flex justify - between items - center">;
=======
          <div className="flex justify - between items-center">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <button;
              on_click={handle_previous}
              disabled={current_step === 0}
              className="px - 4 py - 2 text - zinc - 400 hover:text - white disabled:opacity - 50 disabled:cursor - not - allowed transition - colors";
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          <div className="flex justify-between items-center">;
            <button;
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="px-4 py-2 text-zinc-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors";
              className="px - 4 py - 2 text - zinc - 400 hover:text - white disabled:opacity - 50 disabled:cursor - not - allowed transition-colors";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            >;
              Previous;
            </button>;
            <button;
<<<<<<< HEAD
<<<<<<< HEAD
              onClick={handleNext}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors";
            >;
              {currentStep === walkthroughSteps.length - 1 ? "Complete" : "Next"}
=======
              on_click={handle_next}
              className="px - 6 py - 2 bg - blue - 600 hover:bg - blue - 700 text - white rounded - lg font - medium transition-colors";
            >;
=======
              on_click={handle_next}"
              className="px - 6 py - 2 bg - blue - 600 hover:bg - blue - 700 text - white rounded - lg font - medium transition - colors";
            >;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              {current_step === walkthrough_steps.length - 1 ? "Complete" : "Next"}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              onClick={handleNext}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors";
            >;
              {currentStep === walkthroughSteps.length - 1 ? "Complete" : "Next"}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            </button>;
          </div>;
        </div>;
      </div>;
      {/* Highlight Target Element */}
<<<<<<< HEAD
      {currentStepData.target && (;
        <div;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          className="fixed z-30 pointer-events-none";
=======
<<<<<<< HEAD
=======

          className="fixed z-30 pointer-events-none";

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          style={{;
            top: 0,;
            left: 0,;
            right: 0,;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
      {currentStepData.target && (
        <div;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            bottom: 0}}
        >;
          <div;"
            className="absolute border-2 border-blue-500 rounded-lg shadow-lg bg-blue-500/10";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

          className="fixed z - 30 pointer - events - none";
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0}}
        >;
          <div;
=======

          className="fixed z-30 pointer-events-none";

      {currentStepData.target && (;
        <div;
          className="fixed z-30 pointer-events-none";
          style={{;
            top: 0,;
            left: 0,;
            right: 0,;

            bottom: 0}}
        >;
          <div;
            className="absolute border-2 border-blue-500 rounded-lg shadow-lg bg-blue-500/10";

          className="fixed z - 30 pointer - events - none";
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0}}
        >;
          <div;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            className="absolute border - 2 border - blue - 500 rounded - lg shadow - lg bg - blue - 500 / 10";
            style={{
              top: "50%",
              left: "50%",
              transform: "translate (-50%, -50%)",

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            style={{;
              top: "50%",;
              left: "50%",;
              transform: "translate(-50%, -50%)",;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              width: "300px";
=======

"
              width: "300px";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              height: "200px"}}
          />;
        </div>;
      )}
    </>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    "data-walkthrough-target": id;


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
// Hook to add data attributes for walkthrough targeting;
export function useWalkthroughTarget(id: string) {;
  return {;


    "data-walkthrough-target": id;
<<<<<<< HEAD
=======
=======
export /**
 * useWalkthroughTarget - Function description
 */
function useWalkthroughTarget() {
  return {
    "data - walkthrough - target": id;
=======
export function useWalkthroughTarget(id: string) {return {;
=======
;
// Hook to add data attributes for walkthrough targeting;
export function useWalkthroughTarget(id: string) {;
  return {;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    "data-walkthrough-target": id;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              width: "300px";
              height: "200px"}}
          />;
        </div>)}
    </>);
}
    "data-walkthrough-target": id;
<<<<<<< HEAD
// Hook to add data attributes for walkthrough targeting;    "data-walkthrough-target": id;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    "data-walkthrough-target": id;
// Hook to add data attributes for walkthrough targeting;    "data-walkthrough-target": id;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
// Hook to add data attributes for walkthrough targeting;

;
// Hook to add data attributes for walkthrough targeting;
export function useWalkthroughTarget(id: string) {;
  return {;

    "data-walkthrough-target": id;
export /**
 * useWalkthroughTarget - Function description
 */
function useWalkthroughTarget() {
  return {
    "data - walkthrough - target": id;
export function useWalkthroughTarget(id: string) {return {;
              width: "300px";
              height: "200px"}}
          />;
        </div>;
      )}
    </>;
  );
}
;
// Hook to add data attributes for walkthrough targeting;
export function useWalkthroughTarget(id: string) {;
  return {;
    "data-walkthrough-target": id;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    id}
}
<<<<<<< HEAD
"`
=======
}
// Hook to add data attributes for walkthrough targeting;    "data-walkthrough-target": id;
    id}
}
      <div className="fixed inset - 0 bg - black / 50 z - 40" on_click={handle_skip} />;"
</div>"
      <div className="fixed z - 50 inset - 0 flex items - center justify - center p - 4">;"
        <div className="bg - zinc - 800 rounded - xl border border - zinc - 700 max - w-md w - full p - 6 shadow - 2xl">;"
          <div className="mb - 6">;"
            <div className="flex justify - between items - center mb - 2">;"
              <span className="text - sm text - zinc - 400">;"
</span>
              </span>;
              <button;
                on_click={handle_skip}"
                className="text - zinc - 400 hover:text - zinc - 300 text - sm";"
              >;
</button>
              </button>;
            </div>;"
            <div className="w - full bg - zinc - 700 rounded - full h - 2">;"
</div>
              <div;"
                className="bg - blue - 500 h - 2 rounded - full transition - all duration - 300";"
                style={{ width: `${((current_step + 1) / walkthrough_steps.length) * 100}%` }}
              />;
            </div>;
          <div className="text - center mb - 6">;"
            <h3 className="text - xl font - semibold text - white mb - 3">;"
</h3>
            </h3>;"
            <p className="text - zinc - 300 leading - relaxed">;"
</p>
            </p>;
          <div className="flex justify - between items - center">;"
              on_click={handle_previous}
              disabled={current_step === 0}"
              className="px - 4 py - 2 text - zinc - 400 hover:text - white disabled:opacity - 50 disabled:cursor - not - allowed transition - colors";"
              on_click={handle_next}"
              className="px - 6 py - 2 bg - blue - 600 hover:bg - blue - 700 text - white rounded - lg font - medium transition - colors";"
        <div;
            bottom: 0}}
            className="absolute border-2 border-blue-500 rounded-lg shadow-lg bg-blue-500/10";""
              width: "300px";","
  height: "200px"}}"
        </div>)}
    </>);
}"
    "data-walkthrough-target": id;"
// Hook to add data attributes for walkthrough targeting;"
    id}
}
"`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
