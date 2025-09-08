import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { UserTypeSelection } from "@/components/onboarding/UserTypeSelection";
import { ProfileSetup } from "@/components/onboarding/ProfileSetup";
import { Steps, Step } from "@/components/ui/steps";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
export default function Onboarding() {
  const { user, updateProfile, isLoading } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [userType, setUserType] = useState(null as ("serviceProvider" | "talent" | "client" | null));
  const navigate = useNavigate();

  // Convert our user types to match what's expected in the database
  const mapUserTypeToDatabase = (type: "serviceProvider" | "talent" | "client") => {
    switch (type) {
      case "serviceProvider":
        return "creator";
      case "talent":
        return "jobSeeker";
      case "client":
        return "employer";
      default:
        return "buyer";
    }
  };

  const handleUserTypeSelect = (type: "serviceProvider" | "talent" | "client") => {
    setUserType(type);
    
    // Direct to specific registration page based on user type
    if (type === "serviceProvider") {
      navigate('/service-onboarding');
      return;
    } else if (type === "talent") {
      navigate('/talent-onboarding');
      return;
    }
    
    // Continue with the onboarding flow for clients
    setCurrentStep(1);
  };

  const handleProfileComplete = async (data: { displayName: string, bio: string, headline: string }) => {
    if (!user || !userType) {
      toast({
        title: "Authentication Error",
        description: "Your session may have expired. Please log in again.",
        variant: "destructive",
      });
      navigate('/login');
      return;
    }
    
    const dbUserType = mapUserTypeToDatabase(userType);
    
    try {
      await updateProfile({ 
        id: user.id,
        displayName: data.displayName,
        bio: data.bio, // This is now valid since we added bio to UserDetails
        userType: dbUserType,
        headline: data.headline,
        profileComplete: true
      });
      
      <div className="min-h-screen bg-zion-blue py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Welcome to Zion
            </h1>
            <p className="text-zion-slate-light text-xl">
              Complete your profile to get started
            </p>
          </div>

          <div className="mb-12">
            <Steps currentStep={currentStep} className="max-w-xl mx-auto">
              {steps.map((step, index) => (<Step key={index} status={currentStep > index
                ? "complete"
                : currentStep === index
                    ? "current"
                    : "incomplete"} label={step.label} description={step.description}/>))}
            </Steps>
          </div>

          <div className="bg-zion-blue-dark rounded-xl p-8 shadow-lg border border-zion-blue-light">
            {currentStep === 0 ? (<UserTypeSelection onSelect={handleUserTypeSelect} selectedType={userType}/>) : (<ProfileSetup onComplete={handleProfileComplete} userType={userType}/>)}

            {currentStep === 1 && (<div className="mt-6">
                <Button variant="outline" className="w-full border-zion-blue-light text-white hover:bg-zion-blue-light" onClick={() => setCurrentStep(0)}>
                  Back to Role Selection
                </Button>
              </div>)}
          </div>
        </div>
      </div>
      
    </React.Fragment>)}
