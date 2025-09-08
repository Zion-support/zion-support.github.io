/* eslint-disable */
 export const CreateResumeForm = ({;
  onCreateResume;
onCancel;
isLoading ;
}: CreateResumeFormProps) => {;
  const [newResumeTitle, setNewResumeTitle] = useState ('');
const handleSubmit = async () => {;
  if (!newResumeTitle.trim () ) return;
await onCreateResume (newResumeTitle) ;
};
w-full max-w-2xl mx-auto"> <CardContent className=" py-8"> <div className=" text-center"> <h2 className=" text-2xl font-bold mb-2">Create New Resume</h2> <p className=" text-muted-foreground mb-6">Give your resume a title to get started</p> <div className=" flex gap-2 max-w-md mx-auto" > <input /> <Button onClick={;
  handleSubmit ;
}disabled= {;
  !newResumeTitle.trim () || isLoading ;
}> Create </Button> </div> <Button > Cancel </Button> </div> </CardContent> </Card>) ;'"
};'"'"
'"'"'"