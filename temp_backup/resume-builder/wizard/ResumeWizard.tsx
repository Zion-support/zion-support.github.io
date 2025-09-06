/* eslint-disable */
 const [activeTab, setActiveTab] = useState ('basic-info');
const [showNewResumeForm, setShowNewResumeForm] = useState (false);
//Use the extracted hook for progress calculation ;
}
};
}
};
<AlertTitle>Error</AlertTitle> <AlertDescription> {;
  error ;
}</AlertDescription> </Alert>) ;
}
}if (showNewResumeForm) {;
  return (<CreateResumeForm onCreateResume= {;
  handleCreateNewResume ;
}onCancel= {;
  () => setShowNewResumeForm (false) ;
}isLoading= {;
  isLoading ;
}/>) ;
}> <FilePlus className="h-4 w-4" /> Create New </Button> </div> </div> <Card> </div> <Tabs value= {;
  activeTab ;
}onValueChange= {;
  setActiveTab ;
}> <ResumeSteps steps= {;
  RESUME STEPS ;
}activeTab= {;
  activeTab ;
}onChange= {;
  setActiveTab ;
}/> {;
  resume && (<ResumeStepContent activeTab= {;
  activeTab ;
}resume= {;
  resume as Resume ;
}onNextStep= {;
  nextStep ;
}onPrevStep= {;
  prevStep ;
}/>) ;'"
}</Tabs> </CardContent> </Card> </div>) ;'"'"
}'"'"'"