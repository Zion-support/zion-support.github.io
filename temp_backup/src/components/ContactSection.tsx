/* eslint-disable */
 import {;
  {;
  {;
  Mail ;
}from 'lucide-react' export function ContactSection () {;
  const [formData,  setFormData] = useState ({;
  const [errors, setErrors] = useState< {;
  name?: string;
email?: string;
subject?: string;
message?: string ;
}> ({;
});
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {;
  const {;
  name, value ;
}= e.target;
setFormData ( (prev) => ({;
  ...prev, [name]: value ;
}) );
setErrors ( (prev) => ({;
  ...prev, [name]: undefined ;
}) ) ;
};
const handleSubmit = (e: React.FormEvent) => {;
  e.preventDefault ();
const schema = z.object ({;
  const result = schema.safeParse (formData);
if (!result.success) {;
  const fieldErrors: Record<string string> = {;
};
for (const err of result.error.errors) {;
  if (err.path[0]) {;
  fieldErrors[err.path[0] as string] = err.message ;
}
}setErrors (fieldErrors);
toast ({;
  return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 ;
}setErrors ({;
});
setIsSubmitting (true);
}) .catch ( (err) => {;
  setIsSubmitting (false);
toast ({;
  title: "Submission Error";
description: err.message;"
});""
};";""
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 return (<section className="py-20 bg-zion-blue" id="contact" > <div className="container mx-auto px-4 sm:px-6 lg:px-8" > <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" > <div> <GradientHeading>Get In Touch</GradientHeading> <p className="mt-4 text-zion-slate-light text-xl mb-8" > We have the equipment, the parts, and the maintenance services ready for you — right now. Contact us today. </p> <div className="flex items-center mb-6" > <div className="mr-4 p-2 bg-zion-purple/20 rounded-full text-zion-cyan" > <Mail className="h-6 w-6" /> </div> <div> <p className="text-white font-semibold" >Email Us</p> <a href="mailto:commercial@ziontechgroup.com" className="text-zion-cyan hover:text-zion-purple transition-colors" > commercial@ziontechgroup.com </Link> </div> </div> <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white" > Request Commercial Proposal </Button> </div> <div> <label htmlFor="name" className="block text-sm font-medium text-zion-slate-light mb-1" > Name </label> <Input) ";""
}</div> <div> <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-1" > Email </label> <Input) ";""
}</div> </div> <div> <label htmlFor="subject" className="block text-sm font-medium text-zion-slate-light mb-1" > Subject </label> <Input) ";"'"
}</div> <div> <label htmlFor="message" className="block text-sm font-medium text-zion-slate-light mb-1" > Message </label> <Textarea) ;''
}</div> <div> <Button > {';''
  isSubmitting ? 'Sending...' : 'Send Message' ;
}</Button>) ;'"
}</div> </form> </div> </div> </div> </div> </section>) ;'"'"
}'"'"'"