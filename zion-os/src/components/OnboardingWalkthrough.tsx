"use client",

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
interface WalkthroughStep {
  id: string,
  title: string,
  description: string,
  target?: string,
  position: "top" | "bottom" | "left" | "right"
}

const walkthroughSteps: WalkthroughStep[] = [
  {
    id: "welcome",
    title: "Welcome to Zion OS! 🚀",
    description: "Let's take a quick tour to help you get started with launching your digital economy.",
    position: "bottom"
  },
  {
    id: "launch-wizard",
    title: "Launch Wizard",
    description: "Start here to create a new instance with marketplace, governance, and identity tools.",
    target: "launch-wizard-card",
    position: "right"
  },
  {
    id: "admin-panel",
    title: "Admin Panel",
    description: "Manage your deployed instances, API keys, and governance settings from here.",
    target: "admin-instances-card",
    position: "left"
  },
  {
    id: "navigation",
    title: "Navigation",
    description: "Use the top navigation to quickly access different sections of the platform.",
    target: "nav-menu",
    position: "bottom"
  },
  {
    id: "complete",
    title: "You're All Set! 🎉",
    description: "You now know the basics. Start building your digital economy or explore more features.",
    position: "top"
  }
],

export function OnboardingWalkthrough() {
  const [currentStep, setCurrentStep] = useState($2);
  const [isVisible, setIsVisible] = useState($2);
  const [isCompleted, setIsCompleted] = useState($2);
  const { user, completeOnboarding } = useAuth($2);
  useEffect(() => {
    // Show walkthrough for new users who haven't completed onboarding
    if (user && !user.onboardingCompleted) {
      setIsVisible(true)
    }
  }, [user]),

  const handleNext = $2;
  const handlePrevious = $2;
  const handleSkip = () => {
    setIsVisible($2);
    setIsCompleted(true)
  },

  const handleComplete = async () => {
    try {
      await completeOnboarding($2);
      setIsVisible($2);
      setIsCompleted(true)
    } catch (error) {
      console.error("Failed to complete onboarding:", error)
    }
  },

  const currentStepData = $2;
  if (!isVisible || isCompleted) {
    return null
  }

  return (
    <>
      {/* Overlay */}
      <div className = $2;
            left: 0,
            right: 0,
            bottom: 0}}
        >
          <div
            className = $2;
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "300px",
              height: "200px"}}
          />
        </div>
      )}
    </>
  )
}

// Hook to add data attributes for walkthrough targeting
export function useWalkthroughTarget(id: string) {
  return {
    "data-walkthrough-target": id,
    id}
}