/* eslint-disable */
 import { ;
  {;
  {;
  Form;
FormControl;
FormField;
FormItem;
FormLabel;
import {;
  Select;
SelectContent;
SelectItem;
SelectTrigger;
import {;
  FileText ;
  } from "lucide-react";
const formSchema = z.object ({;"
  reason code: z.string () .min (1, {;""
  message: "Please select a reason for the dispute" ;
});
description: z.string () attachments: z.array (z.any () ) .optional () ;
});
}
};
const removeFile = (index: number) => {;
  async function onSubmit (values: z.infer<typeof formSchema>) {;
  try {;
  setIsSubmitting (true);
const dispute = await createDispute ({;
  project id: projectId;
milestone id: milestoneId;
reason code: values.reason code;
description: values.description ;
});
//Future enhancement: Upload attachments //For now we just log the files that would be uploaded if (files.length > 0) {;
}
}finally {;"
  setIsSubmitting (false) ;""
}";""
}return (<div className="space-y-6" > <div className="flex items-center space-x-2" > <FileText className="h-5 w-5 text-primary" /> <h2 className="text-xl font-semibold" >Report an Issue</h2> </div> <FormItem> <FormLabel>Reason for dispute</FormLabel> <Select onValueChange= {;
  field.onChange ;"
}defaultValue= {;""
  field.value ";""
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select a reason" /> </SelectTrigger> </FormControl> <SelectContent> {;
  Object.entries (disputeReasonLabels) .map ( ([value, label]) => (<SelectItem key= {;
  value ;
}value= {;
  value ;
}> {;
  label ;
}</SelectItem>) ) ;"
}</SelectContent> </Select> <FormMessage /> </FormItem>) ;""
}/> <FormField <FormItem> <FormLabel>Describe the issue in detail</FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) ";""
}/> <FormItem> <FormLabel>Attachments (optional) </FormLabel> <FormControl> <div className="space-y-4" > <Input type="file" multiple > Remove </Button> </li>) ) ;
}</ul> </div>) ;"
}</div> </FormControl> <FormMessage /> </FormItem> </Button> </div> </form> </Form> </div>) ;""
}'"'"'"