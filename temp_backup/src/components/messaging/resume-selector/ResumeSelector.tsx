/* eslint-disable */
 export function ResumeSelector ({;
  onResumeSelected ;
}: ResumeSelectorProps) {;
  const [selectedOption, setSelectedOption] = useState<'recent' | 'select' | 'upload'> ('recent');
const [selectedResume, setSelectedResume] = useState<ResumeOption | null> (null);
const [resumeOptions, setResumeOptions] = useState<ResumeOption[]> ([]);
const [customFile, setCustomFile] = useState<File | null> (null);
const [isLoading,  setIsLoading] = useState (false);
const {;
  resume, fetchResume ;
}= useResume ();
//Fetch resume data when component mounts useEffect ( () => {;
  const loadResumes = async () => {;
  setIsLoading (true);
try {;'
  await fetchResume () ;''
}catch (error) {';''
  logErrorToProduction ('Error loading resumes:', {;
  data: error ;
}) ;
}finally {;
  setIsLoading (false) ;
}
};
}, [fetchResume]);
//Update resume options when resume data changes useEffect ( () => {;
  if (resume) {;
  const options: ResumeOption[] = [ {;
  setResumeOptions (options);
//Pre-select the most recent resume ;'
}''
}, [resume, selectedOption, onResumeSelected]);';''
//Handle radio option change //Check if it's a PDF file if (file.type !== 'application/pdf') {;
  toast ({;
  return;
}//Create a custom resume option setCustomFile (file);
setSelectedResume (customOption);
onResumeSelected (customOption) ;
}
};'
//Handle resume download ;''
}catch (error) {';''
  logErrorToProduction ('Error downloading PDF:', {;
  data: error ;
});
toast ({;
}finally {;
  setIsLoading (false) ;
}'
};''
<<<<<<< HEAD
//Handle 'Generate Resume Now' button const handleGenerateResume = () => {';'''
  window.open ('/dashboard/talent/portfolio blank') ;''
};';''
return (<div className='space-y-4' > <h3 className='text-lg font-medium text-white' >Attach Resume</h3> <RadioGroup value= {;'
  selectedOption ;'''
}onValueChange= {';''''
  (value) => handleOptionChange (value as 'recent'| 'select'| 'upload') ';''
}className='space-y-3' flex items-center space-x-2'> <RadioGroupItem value=' recent'id=' recent'/> <Label htmlFor=' recent'className=' text-white'>Use most recent AI Resume</Label> </div> <div className=' flex items-center space-x-2'> <RadioGroupItem value=' select'id=' select'/> <Label htmlFor=' select'className=' text-white'>Select from saved versions</Label> </div> <div className=' flex items-center space-x-2'> <RadioGroupItem value=' upload'id=' upload'/> <Label htmlFor=' upload'className=' text-white'>Upload a custom resume (PDF) </Label> </div> </RadioGroup> {;'
=======
//Handle "Generate Resume Now" button const handleGenerateResume = () => {';''"
  window.open ('/dashboard/talent/portfolio blank') ;""
};";""
return (<div className="space-y-4" > <h3 className="text-lg font-medium text-white" >Attach Resume</h3> <RadioGroup value= {;'
  selectedOption ;''"
}onValueChange= {';'"'"
  (value) => handleOptionChange (value as 'recent'| 'select'| 'upload') ";""
}className="space-y-3" flex items-center space-x-2"> <RadioGroupItem value=" recent"id=" recent"/> <Label htmlFor=" recent"className=" text-white">Use most recent AI Resume</Label> </div> <div className=" flex items-center space-x-2"> <RadioGroupItem value=" select"id=" select"/> <Label htmlFor=" select"className=" text-white">Select from saved versions</Label> </div> <div className=" flex items-center space-x-2"> <RadioGroupItem value=" upload"id=" upload"/> <Label htmlFor=" upload"className=" text-white">Upload a custom resume (PDF) </Label> </div> </RadioGroup> {;'
>>>>>>> origin/resolved-merge-conflicts
  /* Resume selection options based on radio selection */ ;''
}{';''
  selectedOption === 'recent'&& resume && (<ResumePreviewCard resume= {;
  resume ;
}onDownload= {;
  handleDownloadResume ;
}isLoading= {;
  isLoading ;'
}/>) ;''
}{';''
  selectedOption === 'select'&& (<SelectResumeSection resumeOptions= {;
  resumeOptions ;
}selectedResume= {;
  selectedResume ;
}handleResumeSelect= {;
  handleResumeSelect ;
}handleDownloadResume= {;
  handleDownloadResume ;
}isLoading= {;
  isLoading ;'
}/>) ;''
}{';''
  selectedOption === 'upload' && (<UploadSection customFile= {;
  customFile ;
<<<<<<< HEAD
}onFileUpload= {;'
  handleFileUpload ;''
}/>) ';'''
}> <Plus className=' h-4 w-4 mr-2' /> Generate Resume Now </Button> </div> </div>) ;''''
}''''''
=======
}onFileUpload= {;"
  handleFileUpload ;""
}/>) ";"'"
}> <Plus className=" h-4 w-4 mr-2" /> Generate Resume Now </Button> </div> </div>) ;'"'"
}'"'"'"
>>>>>>> origin/resolved-merge-conflicts
