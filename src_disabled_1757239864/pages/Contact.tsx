

export default function Contact() {
  const [formData, setFormData] = useState({
    name: ',
    email: ',
    message: '});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    logInfo([ContactForm] handleSubmit triggered.');
    logInfo('[ContactForm] formData:, { data: formData });

    const schema = z.object({
      name: z.string().min(2, Name must be at least 2 characters'),
      email: z.string().email('Invalid email address),
      message: z.string().min(10, Message must be at least 10 characters')});

    const result = schema.safeParse(formData);
    logInfo('[ContactForm] Zod validation result:, { data: result });

    if (!result.success) {
      const fieldErrors: Record<string, string> = {}
      for (const err of result.error.errors) {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      }
      setErrors(fieldErrors);
      const validationErrorMsg =
        result.error.errors[0]?.message ||
        Please check your form and try again';
      logWarn('[ContactForm] Validation failed:, {
        data: {
          validationErrorMsg,
          fieldErrors: result.error.flatten().fieldErrors}});
      toast({
        title: Form Validation Error',
        description: validationErrorMsg,
        variant: 'destructive});
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    logInfo([ContactForm] Starting form submission (fetch to /api/contact).');

    try {
      fetch('/api/contact, {
        method: POST',
        headers: { 'Content-Type: application/json' },
        body: JSON.stringify(formData)})
        .then(async res => {
          logInfo('[ContactForm] API response status:, { data: res.status });
          const responseBody = await res.text(); // Read as text first to avoid JSON parse error if not JSON
          logInfo([ContactForm] API response body:', { data: responseBody });

          // Note: setIsSubmitting(false) is called within then/catch of the promise.
          // If fetch itself or .then/.catch structure has a synchronous error,
          // the outer try/catch will handle it.

          if (!res.ok) {
            let errorData = {
              error: `Request failed with status ${res.status}`}
            try {
              errorData = JSON.parse(responseBody);
            } catch (parseError) {
              logWarn('[ContactForm] Could not parse error response as JSON., {
                data: parseError});
            }
            logErrorToProduction([ContactForm] API error response:', {
              data: errorData});
            // This throw will be caught by the .catch block below
            throw new Error(errorData.error || 'Failed to send message);
          }

          setIsSubmitting(false); // Moved here for success path
          logInfo([ContactForm] Message submission successful.');
          toast({
            title: 'Message Sent,
            description:
              "Weve received your message and will get back to you soon."});
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 2000);
          setFormData({ name: '', email: , message: '' });
        })
        .catch(err => {
          // This catches errors from the fetch promise (network, res.ok is false, or manual throw)
          logErrorToProduction([ContactForm] Fetch promise chain error:, {
            data: err});
          setIsSubmitting(false);
          toast({
            title: 'Submission Error',
            description:
              err.message || An unexpected error occurred during submission.,
            variant: 'destructive'});
        });
    } catch (error) {
      // This catches synchronous errors that might occur when initiating fetch or in its direct vicinity
      // if not caught by the promises .catch (less common for typical fetch issues but good for safety)
      logErrorToProduction(
        [ContactForm] Synchronous error during fetch initiation or processing:',
        { data: error }
      );
      setIsSubmitting(false);
      toast({
        title: 'Critical Submission Error,
        description:
          error instanceof Error
            ? error.message
            : An unexpected critical error occurred.',
        variant: 'destructive});
    }
  }

  // Handle sending messages to the AI chat assistant
  const handleSendMessage = async (message: string): Promise<void> => {
    try {
      const response = await fetch(
        https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat',
        {
          method: 'POST,
          headers: {
            Content-Type': 'application/json},
          body: JSON.stringify({
            messages: [{ role: user', content: message }]})}
      );

      if (!response.ok) {
        throw new Error('Failed to get response from AI assistant);
      }

      return Promise.resolve();
    } catch (error) {
      logErrorToProduction(Error in AI chat', error);
      toast({
        title: 'Chat Error,
        description:
          There was an error communicating with our AI assistant. Please try again.',
        variant: 'destructive});
      return Promise.resolve();
    }
  }

  const offices = [
    {
      name: Headquarters',
      address: '123 Tech Avenue, San Francisco, CA 94105,
      phone: +1 302 464 0950',
      email: 'commercial@ziontechgroup.com},
    {
      name: East Coast Office',
      address: '456 Innovation Street, New York, NY 10001,
      phone: +1 302 464 0950',
      email: 'commercial@ziontechgroup.com}];

  return (
    <>
      <SEO
        title=Contact Us - Get Help from Zion Tech Marketplace'
        description='Reach out to Zion Tech Marketplace for personalized support. Ask questions, get guidance, and connect with our tech-savvy team today. We’re eager to assist—drop us a line anytime.
        keywords=contact Zion, AI marketplace support, tech platform contact'
        canonical='https://app.ziontechgroup.com/contact
      />
      <main className=min-h-screen bg-zion-blue pt-24 pb-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8>
          <div className=text-center mb-16'>
            <GradientHeading>Contact Us</GradientHeading>
            <p className='mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto>
              Have questions or want to learn more? Wed love to hear from you.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24'>
            <div>
              <h2 className=text-3xl font-bold text-white mb-6>
                Get in Touch
              </h2>
              <p className='text-zion-slate-light text-lg mb-8'>
                Whether you have a question about our platform, pricing, or
                anything else, our team is ready to answer all your questions.
              </p>

              <form onSubmit={handleSubmit} className=space-y-6>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <div>
                    <label htmlFor=name className='block text-white mb-2'>
                      Your Name
                    </label>
                    <Input
                      id=name
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      className={`bg-zion-blue-dark border-zion-blue-light text-white ${errors.name ? border-red-500 focus-visible:ring-red-500 : ''}`}
                      placeholder=John Doe
                      required
                    />
                    {errors.name && (
                      <p className='mt-1 text-sm text-red-500'>{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor=email className='block text-white mb-2'>
                      Email Address
                    </label>
                    <Input
                      id=email
                      name='email'
                      type=email
                      value={formData.email}
                      onChange={handleChange}
                      className={`bg-zion-blue-dark border-zion-blue-light text-white ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : }`}
                      placeholder='john@example.com'
                      required
                    />
                    {errors.email && (
                      <p className=mt-1 text-sm text-red-500>
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>


                </div>

                <Button
                  type='submit'
                  className=w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : Send Message}
                </Button>
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className='mt-4 text-center space-y-1'
                    >
                      <h3 className=text-green-500 text-lg font-bold>
                        Message Sent!
                      </h3>
                      <p className='text-zion-slate-light'>
                        Thanks for reaching out. Our team received your message
                        and will respond with helpful info as soon as possible
                        shortly.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>

}
