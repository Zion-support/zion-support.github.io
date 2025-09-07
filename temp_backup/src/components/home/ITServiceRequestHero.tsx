/* eslint-disable */
 export function ITServiceRequestHero () {;
  const [name, setName] = useState ("");";""
const [email, setEmail] = useState ("");";""
const [phone, setPhone] = useState ("");";""
const [company, setCompany] = useState ("");";""
const [location, setLocation] = useState ("");";""
const [details,  setDetails] = useState ("");
const [isSubmitting, setIsSubmitting] = useState (false);
const {;
  toast ;
}= useToast ();
const {;
  t ;
}= useTranslation ();
return;
}
}
}catch (err: any) {;
  logErrorToProduction (err);
toast ({;
}finally {;
  setIsSubmitting (false) ;"
}""
};";""
py-16 md:py-24 border-b border-zion-purple/20 bg-[radial-gradient (#0f172a, #020617) ]" > <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center" > <div className="md:h-full md:flex md:flex-col md:items-center md:justify-center" > <GradientHeading className="mb-6 text-4xl md:text-5xl text-center" > 24x7 Global IT Onsite Services </GradientHeading> <p className="text-lg text-zion-slate-light mb-8 max-w-md text-center" > Worldwide coverage and rapid dispatch of certified technicians. </p> </div> <div className="bg-zion-blue-light p-6 rounded-lg shadow-lg w-full max-w-md md:ml-auto" > <div className="flex flex-col md:flex-row items-center gap-4" > <Image <Input type="email" value= {;
  email ;"
}onChange= {;""
  (e) => setEmail (e.target.value) ";""
}className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white" required /> <p className="text-xs text-zion-slate-light" > {";""
  t ('onsite form.email helper', "We'll confirm your request here.") ;
}</p> <Input value= {;
  phone ;"
}onChange= {;""
  (e) => setPhone (e.target.value) ";""
}className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white" /> <Input value= {;
  company ;"
}onChange= {;""
  (e) => setCompany (e.target.value) ";""
}className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white" /> <Input value= {;
  location ;"
}onChange= {;""
  (e) => setLocation (e.target.value) ";""
}className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white" required /> <Textarea value= {;
  details ;"
}onChange= {;""
  (e) => setDetails (e.target.value) ";""
}className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white min-h-[80px]" /> <Button type="submit" disabled= {;""
  isSubmitting ";""
}className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-3 px-6 transition-transform hover:scale-105" > {";""
  isSubmitting && (<Loader2 className="mr-2 h-4 w-4 animate-spin" /> ;'"
}Request Service </Button> </form> </div> ;'"'"
}'"'"'"