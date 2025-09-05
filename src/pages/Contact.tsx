 
}setErrors ({
  
});
setIsSubmitting (true);
logInfo ('[ContactForm] Starting form submission (fetch to /api/contact) .');
try {
  fetch ('/api/contact', {
  method: 'POST', headers: {
  'Content-Type': 'application/json' 
};
body: JSON.stringify (formData) 
}) //Note: setIsSubmitting (false) is called within then/catch of the promise. //If fetch itself or .then/.catch structure has a synchronous error;
//the outer try/catch will handle it. //This throw will be caught by the .catch block below throw new Error (errorData.error || 'Failed to send message') 
}
}) .catch ( (err) => {
  //This catches errors from the fetch promise (network, res.ok is false, or manual throw) logErrorToProduction ('[ContactForm] Fetch promise chain error:', {
  data: err 
});
setIsSubmitting (false);
toast ({
  title: 'Submission Error';
description: err.message || 'An unexpected error occurred during submission.';
variant: 'destructive' 
}) 
}) 
}catch (error) {
  //This catches synchronous errors that might occur when initiating fetch or in its direct vicinity //if not caught by the promise's .catch (less common for typical fetch issues but good for safety) logErrorToProduction ('[ContactForm] Synchronous error during fetch initiation or processing:', {
  data: error 
});
setIsSubmitting (false);
toast ({
  title: 'Critical Submission Error';
description: error instanceof Error ? error.message : 'An unexpected critical error occurred.';
variant: 'destructive' 
}) 
}
};
//Handle sending messages to the AI chat assistant const handleSendMessage = async (message: string) : Promise<void> => {
  try {
  const response = await fetch ('https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat', {
  method: 'POST', headers: {
  'Content-Type': 'application/json' 
};
}
};
return (<> <SEO title="Contact Us - Get Help from Zion Tech Marketplace" description="Reach out to Zion Tech Marketplace for personalized support. Ask questions, get guidance, and connect with our tech-savvy team today. We’re eager to assist—drop us a line anytime." keywords="contact Zion, AI marketplace support, tech platform contact" canonical="https://app.ziontechgroup.com/contact" /> <main className="min-h-screen bg-zion-blue pt-24 pb-20" > <div className="container mx-auto px-4 sm:px-6 lg:px-8" > <div className="text-center mb-16" > <GradientHeading>Contact Us</GradientHeading> <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto" > Have questions or want to learn more? We'd love to hear from you. </p> </div> <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24" > <div> <h2 className="text-3xl font-bold text-white mb-6" > Get in Touch </h2> <p className="text-zion-slate-light text-lg mb-8" > Whether you have a question about our platform, pricing, or anything else, our team is ready to answer all your questions. </p> <div> <label htmlFor="name" className="block text-white mb-2" > Your Name </label> <Input) 
}</div> <div> <label htmlFor="email" className="block text-white mb-2" > Email Address </label> <Input {
  errors.email 
}</p>) 
}</div> </div> <div> <label htmlFor="message" className="block text-white mb-2" > Message </label> <Textarea {
  errors.message 
}</p>) 
}</div> <Button > {
  isSubmitting ? 'Sending...' : 'Send Message' 
}</Button> <AnimatePresence> {
  submitted && (<motion.div > <h3 className="text-green-500 text-lg font-bold" > Message Sent! </h3> <p className="text-zion-slate-light" > Thanks for reaching out. Our team received your message and will respond with helpful info as soon as possible shortly. </p> </motion.div>) 
}</AnimatePresence> </form> </div> <div> <TooltipProvider> <Tooltip> <TooltipTrigger asChild> <h2 className="text-3xl font-bold text-white mb-6" > Our Offices </h2> </TooltipTrigger> <TooltipContent> We list several offices so you can connect with the team closest to your region for faster support. </TooltipContent> </Tooltip> </TooltipProvider> <Card key= {
  index 
}className="bg-zion-blue-dark border border-zion-blue-light p-6" > </span> </div> <div className="flex items-center" > <Mail className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" /> <a </div> </div> </Card>) ) 
}</div> <div className="mt-8 bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden" > <iframe ></iframe> </div> <div className="mt-8" > <Card className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 p-6" > <div className="flex items-center" > <div className="bg-zion-purple/20 p-3 rounded-full mr-4" > <MessageSquare className="h-6 w-6 text-zion-purple" /> </div> <div> <h3 className="text-white text-lg font-bold" > Live AI Support </h3> <p className="text-zion-slate-light" > Get instant answers to your questions </p> </div> </div> <Button > Chat With Our AI Assistant </Button> </Card> </div> </div> </div> <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center" > <h2 className="text-3xl font-bold text-white mb-6" > Need immediate assistance? </h2> <p className="text-zion-slate-light text-lg mb-8 max-w-3xl mx-auto" > Our customer support team is available 24/7 to help you with any questions. </p> <div className="flex flex-col sm:flex-row justify-center gap-4" > <Button > <MessageSquare className="mr-2 h-5 w-5" /> Chat With AI </Button> <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10" asChild > <a href="mailto:support@ziontechgroup.com" > <Mail className="mr-2 h-5 w-5" /> Email Support </Link> </Button> </div> </div> Zion blog </Link> {
  ' ' 
}for additional insights. </p> </div> </div> </main> {
  /* Chat Assistant Modal */ 
}{
  isChatOpen && (<ChatAssistant isOpen= {
  isChatOpen 
}/>) 
}</>) 
}