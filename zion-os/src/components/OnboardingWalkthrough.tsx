"use client";

import { useState, useEffect, createContext, useContext } from "react";

interface WalkthroughStep {
  id: string;
  title: string;
  description: string;
  target: string;
  position: 'top' | 'bottom' | 'left' | 'right';
}

interface WalkthroughContextType {
  currentStep: number;
  steps: WalkthroughStep[];
  isActive: boolean;
  startWalkthrough: () => void;
  nextStep: () => void;
  previousStep: () => void;
  skipWalkthrough: () => void;
}

const WalkthroughContext = createContext<WalkthroughContextType | undefined>(undefined);

export function WalkthroughProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const steps: WalkthroughStep[] = [
    {
      id: 'welcome',
      title: 'Welcome to Zion OS',
      description: 'Let us show you around the platform',
      target: '.welcome-section',
      position: 'bottom'
    },
    {
      id: 'features',
      title: 'Key Features',
      description: 'Explore our powerful features',
      target: '.features-section',
      position: 'top'
    }
  ];

  const startWalkthrough = () => {
    setIsActive(true);
    setCurrentStep(0);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsActive(false);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const skipWalkthrough = () => {
    setIsActive(false);
  };

  return (
    <WalkthroughContext.Provider value={{
      currentStep,
      steps,
      isActive,
      startWalkthrough,
      nextStep,
      previousStep,
      skipWalkthrough
    }}>
      {children}
    </WalkthroughContext.Provider>
  );
}

export function useWalkthrough() {
  const context = useContext(WalkthroughContext);
  if (context === undefined) {
    throw new Error('useWalkthrough must be used within a WalkthroughProvider');
  }
  return context;
}

export function useWalkthroughTarget(targetId: string) {
  const { currentStep, steps, isActive } = useWalkthrough();
  const currentStepData = steps[currentStep];
  
  return {
    isTarget: isActive && currentStepData?.target === targetId,
    step: currentStepData
  };
}

export default function OnboardingWalkthrough() {
  const { currentStep, steps, isActive, nextStep, previousStep, skipWalkthrough } = useWalkthrough();

  if (!isActive) return null;

  const currentStepData = steps[currentStep];

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
        <h3 className="text-lg font-semibold mb-2">{currentStepData.title}</h3>
        <p className="text-gray-600 mb-4">{currentStepData.description}</p>
        <div className="flex justify-between">
          <button
            onClick={previousStep}
            disabled={currentStep === 0}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <div className="flex space-x-2">
            <button
              onClick={skipWalkthrough}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded"
            >
              Skip
            </button>
            <button
              onClick={nextStep}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}