/* eslint-disable */
 export function EnhancedNewsletterForm () {;
  const [email, setEmail] = useState ("");
const [isSubmitting,  setIsSubmitting] = useState (false);
const [isSubmitted, setIsSubmitted] = useState (false);
const {;
  toast ;
}= useToast ();
const EMAIL REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
}setIsSubmitting (true);
try {;
  const data = await res.json () .catch ( () => ({;
}) );
//Handle different success statuses if (data.status === 'already subscribed') {;
}finally {;
  setIsSubmitting (false) ;'"
}'"'"
};'";'"'"
w-full max-w-lg mx-auto bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6" > <div className="flex items-center mb-4" > <div className="p-2 bg-zion-purple/20 rounded-full text-zion-cyan mr-3" > <Mail className="h-6 w-6" /> </div> <div> <h3 className="text-lg font-bold text-white" >Stay Updated</h3> <p className="text-zion-slate-light text-sm" >Get exclusive offers, trending AI news, and early access to best deals</p> </div> </div> <div className="text-center p-4 rounded-lg bg-zion-purple/20 border border-zion-purple/40"> <p className="text-white font-medium">Thank you for subscribing!</p> <p className="text-zion-slate-light mt-1">We'll keep you updated with the latest from Zion.</p> ;
}</div>) ) ;'"
}</div> <span>Join 10, 000+ tech professionals who already subscribe</span> </div> </div>) ;'"'"
}'"'"'"