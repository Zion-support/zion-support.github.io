/* eslint-disable */
 export type QuoteRequestSteps = "service" | "details" | "timeline" | "budget" | "summary";
<<<<<<< HEAD
const [autoFillLoading, setAutoFillLoading] = useState (false);"
const [autoFillOpen, setAutoFillOpen] = useState (false);""
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 const [isSubmitting, setIsSubmitting] = useState (false);
const [autoFillLoading, setAutoFillLoading] = useState (false);"
const [autoFillOpen, setAutoFillOpen] = useState (false);""
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 return;";""
>>>>>>> origin/resolved-merge-conflicts
}setCurrentStep ("details");""
break;";""
}case "details" : setCurrentStep ("timeline");""
break;";""
case "timeline" : setCurrentStep ("budget");""
break;";""
case "budget" : setCurrentStep ("summary");
break;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 default: break ;"
>>>>>>> origin/resolved-merge-conflicts
}""
};";""
case "timeline": setCurrentStep ("details");""
break;";""
case "budget": setCurrentStep ("timeline");""
break;";""
case "summary": setCurrentStep ("budget");
break;
}
};
const handleSubmit = async () => {;"
  setIsSubmitting (true);""
try {";""
  //In a real application,  you would send the data to your backend logDebug ("Submitting form data:", {;
  data: formData ;
});
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13 //Simulate API call await new Promise (resolve => setTimeout (resolve, 1500) );
>>>>>>> origin/resolved-merge-conflicts
}finally {;
  setIsSubmitting (false) ;
}
};
const handleAutoFill = async (description: string) => {;
  setAutoFillLoading (true);
try {;
  updateFormData ({;
  projectDescription: description;
serviceType: category;"
serviceCategory: category;""
specificItem: itemId ? {";""
  id: itemId,  title: "AI Selected Item", category ;
}: formData.specificItem;
timeline: timeline || formData.timeline;
}finally {;
  setAutoFillLoading (false) ;
}
};
const renderStepContent = () => {;
  switch (currentStep) {;
  default: return null;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 ;"
>>>>>>> origin/resolved-merge-conflicts
}""
};";""
<GradientHeading>Request a Quote</GradientHeading> <p className="text-zion-slate-light mt-4" > Tell us about your project and we'll create a customized quote for you </p> <div className="inline-flex items-center bg-zion-blue-dark py-1 px-3 rounded-full mt-3 border border-zion-purple/20" > <Sparkles className="h-4 w-4 text-zion-cyan mr-1" /> <span className="text-sm text-white" >AI-powered matching</span> </div> <Button) ";""
}Auto Fill with AI </Button> </div> <Button variant="outline" onClick={;""
  handleBack ";""
}className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10" > Back </Button>) ;"
}<Button onClick={;""
  handleNext ";""
}className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white" > Continue </Button>) : (<Button </Button>) ;
}</div> </CardContent> </Card> </div> <AutoFillModal open= {;
  autoFillOpen ;
}onOpenChange= {;
  setAutoFillOpen ;
}onSubmit= {;
  handleAutoFill ;
}loading= {;
  autoFillLoading ;'"
}/> </div>) ;'"'"
}'"'"'"