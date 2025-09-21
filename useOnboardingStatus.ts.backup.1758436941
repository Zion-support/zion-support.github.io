import { useState, useEffect } from "react";

export function useOnboardingStatus() {
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check onboarding status from localStorage
    const status = localStorage.getItem("onboarding-completed");
    setIsOnboarded(status === "true");
    setIsLoading(false);
  }, []);

  const completeOnboarding = () => {
    localStorage.setItem("onboarding-completed", "true");
    setIsOnboarded(true);
  };

  return {
    isOnboarded,
    isLoading,
    completeOnboarding
  };
}