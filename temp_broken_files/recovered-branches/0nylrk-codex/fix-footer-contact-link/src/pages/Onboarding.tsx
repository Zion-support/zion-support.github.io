 export default function Onboarding () {
  const {
  user, updateProfile, isLoading 
}= useAuth ();
const [currentStep, setCurrentStep] = useState (0);
case "talent": return "jobSeeker";
case "client": return "employer";
default: 
}
};
//Direct to specific registration page based on user type if (type === "serviceProvider") {
  navigate ('/service-onboarding');
return 
}else if (type === "talent") {
  navigate ('/talent-onboarding');
return 
}? "/client-dashboard" : "/talent-dashboard";
}
};
if (!user) {
  navigate ('/login');
return null;
}min-h-screen bg-zion-blue py-12 px-4"> <div className=" max-w-4xl mx-auto"> <div className=" text-center mb-12"> <h1 className=" text-4xl font-bold text-white mb-4"> Welcome to Zion </h1> <p className=" text-zion-slate-light text-xl"> Complete your profile to get started </p> </div> />) ) 
}</Steps> </div>) : (<ProfileSetup onComplete= {
  handleProfileComplete 
}userType= {
  userType! 
}/>) 
}<Button variant=" outline"className=" w-full border-zion-blue-light text-white hover:bg-zion-blue-light" onClick= {
  () => setCurrentStep (0) 
}> Back to Role Selection </Button> </div>) 
}</div> </div> </div> <Footer /> </>) 
}