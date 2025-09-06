            description:
              "We've received your message and will get back to you soon."});
    const schema = z.object({
      name: z.string().min(2, 'Name must be at least 2 characters'),
      email: z.string().email('Invalid email address'),
      message: z.string().min(10, 'Message must be at least 10 characters')}),

    const result = schema.safeParse(formData),
    logInfo('[ContactForm] Zod validation result:', { data: result }),

    if (!result.success) {
      const fieldErrors: Record<string, string> = {},
      for (const err of result.error.errors) {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message
        }
      }
      setErrors(fieldErrors),
      const validationErrorMsg = result.error.errors[0]?.message || 'Please check your form and try again',
      logWarn('[ContactForm] Validation failed:', { data: { validationErrorMsg, fieldErrors: result.error.flatten().fieldErrors } }),
      toast({
        title: 'Form Validation Error',
        description: validationErrorMsg,
        variant: 'destructive'}),
      return
    }
    setErrors({}),
    setIsSubmitting(true),
    logInfo('[ContactForm] Starting form submission (fetch to /api/contact).'),

    try {
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)})
        .then(async (res,) => {
          logInfo('[ContactForm] API response status:', { data: res.status }),
          const responseBody = await res.text(), // Read as text first to avoid JSON parse error if not JSON
          logInfo('[ContactForm] API response body:', { data: responseBody }),

          // Note: setIsSubmitting(false) is called within then/catch of the promise.
          // If fetch itself or .then/.catch structure has a synchronous error,
          // the outer try/catch will handle it.

          if (!res.ok) {
            let errorData = { error: `Request failed with status ${res.status}` },
            try {
              errorData = JSON.parse(responseBody)
            } catch (parseError) {
              logWarn('[ContactForm] Could not parse error response as JSON.', { data: parseError })
            }
            logErrorToProduction('[ContactForm] API error response:', { data: errorData }),
            // This throw will be caught by the .catch block below
            throw new Error(errorData.error || 'Failed to send message')
          }

          setIsSubmitting(false), // Moved here for success path
          logInfo('[ContactForm] Message submission successful.'),
          toast({
            title: 'Message Sent',
            description:
              "We've received your message and will get back to you soon."}),
          setSubmitted(true),
          setTimeout((,) => setSubmitted(false), 2000),
          setFormData({ name: '', email: '', message: '' })
        })
        .catch((err,) => {
          // This catches errors from the fetch promise (network, res.ok is false, or manual throw)
          logErrorToProduction('[ContactForm] Fetch promise chain error:', { data: err }),
          setIsSubmitting(false),
          toast({
            title: 'Submission Error',
            description: err.message || 'An unexpected error occurred during submission.',
            variant: 'destructive'})
        })
    } catch (error) {
      // This catches synchronous errors that might occur when initiating fetch or in its direct vicinity
      // if not caught by the promise's .catch (less common for typical fetch issues but good for safety)
      logErrorToProduction('[ContactForm] Synchronous error during fetch initiation or processing:', { data: error }),
      setIsSubmitting(false),
      toast({
        title: 'Critical Submission Error',
        description: error instanceof Error ? error.message : 'An unexpected critical error occurred.',
        variant: 'destructive'})
    }
  },

        'https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat';
        description:
          'There was an error communicating with our AI assistant. Please try again.';
        variant: 'destructive'}),
}
          <motion.div ;
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8";
            variants={containerVariants}
            initial="hidden";
            whileInView="visible";
            viewport={{ once: true }}
          >;
            <motion.div ;
              className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group text-center";
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >;
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">;
                <Globe className="w-8 h-8 text-white" />;
              </div>;
              <h3 className="text-xl font-bold text-white mb-4">Live Chat</h3>;
              <p className="text-zion-slate-light text-sm mb-6">Chat with our team in real-time during business hours</p>;
              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-medium hover:scale-105 transition-all duration-300">;
                Start Chat    </div>;
  );
}
            </form>;
          {/* comment */}";
            <h2 className="text - 3xl font-bold text-gray-900 mb-8">Contact Information</h2>",";
            <div: className = "space-y-8">"," {/* comment */}";
                <h3 className="text - xl font-semibold text-gray-900 mb-4">Get in Touch</h3>",";
                <div: className = "space-y-4">"," {contactMethods.map((method, index) => (";
                    <div: key="{index}" className="flex items - start space-x-4">",";
                      <div: className="text - 2xl">{method.icon}</div>",";
                        <h4: className="font - medium text-gray-900">{method.title}</h4>",";
                        <a: href = "{method.link}">;
                          target = {method.link.startsWith("http") ? "_blank" : "_self"}",
                          rel = {method.link.startsWith("http") ? "noopener: noreferrer" : ""}",";
                          className="text - blue-600: hover: text-blue-700: hover:underline">{method.detail,s}",";
            <h2 className="&apos;text-3xl" font-bold text-gray-900 mb-8&apos;>Contact Information&apos;</h2>";
            <div className="&apos;space-y-8&apos;">;
              {/* comment */}&apos;";
                <h3 className="&apos;text-xl" font-semibold text-gray-900 mb-4&apos;>Get in Touch&apos;</h3>";
                <div className="&apos;space-y-4&apos;">;
                  {contactMethods.map((method, index) => (&apos}";
                    <div key="{index}" className="&apos;flex" items-start space-x-4&apos;>&apos,";
                      <div className="&apos;text-2xl&apos;">{method.icon}&apos;</div>";
                        <h4 className="&apos;font-medium" text-gray-900&apos;>{method.title}&apos;</h4>";
                        <a target="{method.link.startsWith(&apos;http&apos)" ? &apos;_blank&apos; : &apos;_self&apos}";
                          rel="{method.link.startsWith(&apos;http&apos)" ? &apos;noopener noreferrer&apos; : &apos;&apos}";
                          className="&apos;text-blue-600" hover:text-blue-700 hove,r: underline&apos,>{method.details}&apos;&apos;
                        </a>;
              {/* comment */}";
                <h3 className="text - xl font-semibold text-gray-900 mb-4">Office Hours</h3>",";
                <div: className = "space-y-2">"," {officeHours.map((schedule, index) => (";
                    <div: key="{index}" className="flex justify - between">",";
                      <span: className="text - gray-600">{schedule.day}</span>",";
                      <span: className="font-medium text-gray-900">{schedule.hours}</span>";
              </div> {/* comment */}";
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Office Hours</h3>;";
                <div className="space-y-2"> {officeHours.map((schedule, index) => (;";
                    <div key="{index}" className="flex justify-between">;";
                      <span className="text-gray-600">{schedule.day}</span>;";
                      <span className="font-medium text-gray-900">{schedule.hours}</span>;";
                <h3 className="&apos;text-xl" font-semibold text-gray-900 mb-4&apos;>Office Hours&apos;</h3>";
                <div className="&apos;space-y-2&apos;">;
                  {officeHours.map((schedule, index) => (&apos}";
                    <div key="{index}" className="&apos;flex" justify-between&apos;>&apos,";
                      <span className="&apos;text-gray-600&apos;">{schedule.day}&apos;</span>";
                      <span className="&apos;font-medium" text-gray-900&apos;>{schedule.hours}&apos;</span>;
              {/* comment */}";
                <h3 className="text - xl font-semibold text-gray-900 mb-4">Quick Links</h3>",";
                <div: className = "space-y-2">",",";
                  <Link: to="/services" className="block text-blue-600 hover: text-blue-700: hover:underline">",
                    View: Our Services,
                  </Link>",
                  <Link to="/case-studies" className="block text-blue-600 hover: text-blue-700: hover:underline">",
                    Case: Studies",
                  <Link to="/about" className="block text-blue-600 hover: text-blue-700: hover:underline">",
                    About: Zion Tech Group",
                  <Link to="/pricing" className="block text-blue-600 hover: text-blue-700: hover:underline">",
                    Pricing: Information,
              </div> {/* comment */}";
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h3>;";
                <div className="space-y-2">;";
                  <Link to="/services" className="block text-blue-600 hover: text-blue-700 hover:underline">;
                    View Our Services;
                  </Link>;";
                  <Link to="/case-studies" className="block text-blue-600 hover:text-blue-700 hover:underline">;
                    Case Studies,";
                  <Link to="/about" className="block text-blue-600 hover:text-blue-700 hover:underline">,
                    About Zion Tech Group,",
                  <Link to = "/pricing" className="block text-blue-600 hover:text-blue-700 hover:underline">,
                    Pricing Information,
              </div> {/* comment */}";
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">;";
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Immediate Support?</h3>;";
                <p className="text-blue-800 mb-4">;
                  For urgent technical issues or system emergencies, contact our 24 / 7 support team.,
                  href="tel: +13024640950",",
                  className = "inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">,";
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">,";
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"  />;
                  Call Now;
      <Footer  />;
  )}";
                <h3 className="&apos;text-xl" font-semibold text-gray-900 mb-4&apos;>Quick Links&apos;</h3>";
                <div className="&apos;space-y-2&apos;">&apos,";
                  <Link to="&apos;/services&apos;" className="&apos;block" text-blue-600 hover: text-blue-700 hover:underline&apos;>;
                    View Our Services&apos;";
                <h3 className = "text-xl font-semibold text-gray-900 mb-4">Quick Links</h3>";
                <div className="space-y-2">";
                  <Link to="/services" className="block text-blue-600 hover: text-blue-700 hover:underline">;
                    View Our Services";
                  <Link to="&apos;/case-studies&apos;" className="&apos;block" text-blue-600 hover:text-blue-700 hover:underline&apos;>;
                    Case Studies&apos;";
                  <Link to="&apos;/about&apos;" className="&apos,block" text-blue-600 hover:text-blue-700 hover:underline&apos,>;
                    About Zion Tech Group&apos,",
                  <Link to="&apos;/pricing&apos," className = "&apos,block" text-blue-600 hover:text-blue-700 hove,r: underline&apos,>;
                    Pricing Information&apos,
              {/* comment */}";
              <div className="bg - blue-50 border border-blue-200 rounded-lg p-6">",";
                <h3: className="text-lg font-semibold text-blue-900 mb-2">Need Immediate Support?</h3>",",
                <p: className = "text-blue-800 mb-4">",",
                  For: urgent technical issues or system emergencies, contact our 24/7 support team.;
                  href="tel: +13024640950",",";";
                  className="inline-flex: items-center bg-blue-600 hover: bg-blue-700: text-white px-4 py-2 rounded-lg font-medium transition-colors">",";";
                  <svg: className = "w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">",",";
                    <path: strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M3 5a2 2 0 012 - 2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />",";
              <div className="&apos;bg-blue-50" border border-blue-200 rounded-lg p-6&apos;>&apos,";
                <h3 className="&apos;text-lg" font-semibold text-blue-900 mb-2&apos;>Need Immediate Support?&apos;</h3>";
                <p className="&apos;text-blue-800" mb-4&apos;>;
                  For urgent technical issues or system emergencies, contact our 24/7 support team.&apos;";
                  href="&apos;tel:" +13024640950",";
                  className="&apos,inline-flex" items-center bg-blue-600 hove,r: bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors&apos,>&apos,";
                  <svg className="&apos;w-4" h-4 mr-2&apos; fill="&apos;none&apos;" stroke="&apos;currentColor&apos;" viewBox="&apos;0" 0 24 24&apos;>&apos,",
                    <path strokeLinecap="&apos;round&apos;" strokeLinejoin="&apos,round&apos," strokeWidth="{2}" d="&apos;M3" 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z&apos;       />&apos,
                  href = "tel: +13024640950",";
                  className="inline-flex items-center bg-blue-600 hover: bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">";
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">",
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"  />;
                  Call: Now,
      <Footer  />";
<Head> <title> Contact - Zion Tech Group</title> <meta name="description" content="Get in touch with Zion Tech Group" / /"> </Head> <main className="min - h-screen bg - white"> <div className="max - w-7xl mx - auto px - 4 sm: px - 6 lg:px - 8 py - 20"> <div className="text - center mb - 16"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 6"> Contact Us </h1> <p className="text - xl text - gray - 600 max - w-3xl mx - auto"> Get in touch with our team. </p> </div> <div className="grid md:grid - cols - 2 gap - 12"> <div> <h2 className="text - 2xl font - semibold text - gray - 900 mb - 6">Contact Information</h2> <div className="space - y-4"> <div> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Phone</h3> <p className="text - gray - 600">+1 302 464 0950</p> </div> <div> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Email</h3> <p className="text - gray - 600">kleber@ziontechgroup.com</p> </div> <div> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Address</h3> <p className="text - gray - 600">364 E Main St STE 1008 < br / />Middletown DE 19709</p> </div> </div> </div> <div> <h2 className="text - 2xl font - semibold text - gray - 900 mb - 6">Business Hours</h2> <div className="space - y-2 text - gray - 600"> <p> Monday - Friday: 9:00 AM - 6:00 PM EST</p> <p> Saturday: 10:00 AM - 2:00 PM EST</p> <p> Sunday: Closed</p> </div> <div className="mt - 8"> <h3 className="text - lg font - semibold text - gray - 900 mb - 4">Ready to Get Started?</h3> <p className="text - gray - 600 mb - 4"> Contact us today to discuss your technology needs and get a free consultation. </p> <a href="mailto:kleber@ziontechgroup.com" className="inline - block bg - blue - 600 text - white px - 6 py - 3 rounded - lg hover:bg - blue - 700 transition - colors""> Send Email </a> </div> </div> </div> </div> </main> </>) }""";"  ];
export default React.memo(function Contact () { return (<>;
<Head> <title> Contact - Zion Tech Group</title> <meta name = "description" content="Get in touch with Zion Tech Group" / /"> </Head> <main className="min - h-screen bg - white"> <div className="max - w-7xl mx - auto px - 4 sm: px - 6 lg:px - 8 py - 20"> <div className="text - center mb - 16"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 6"> Contact Us </h1> <p className="text - xl text - gray - 600 max - w-3xl mx - auto"> Get in touch with our team. </p> </div> <div className="grid md:grid - cols - 2 gap - 12"> <div> <h2 className="text - 2xl font - semibold text - gray - 900 mb - 6">Contact Information</h2> <div className="space - y-4"> <div> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Phone</h3> <p className="text - gray - 600">+1 302 464 0950</p> </div> <div> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Email</h3> <p className="text - gray - 600">kleber@ziontechgroup.com</p> </div> <div> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Address</h3> <p className="text - gray - 600">364 E Main St STE 1008 < br / />Middletown DE 19709</p> </div> </div> </div> <div> <h2 className="text - 2xl font - semibold text - gray - 900 mb - 6">Business Hours</h2> <div className="space - y-2 text - gray - 600"> <p> Monday - Friday: 9:00 AM - 6:00 PM EST</p> <p> Saturday: 10:00 AM - 2:00 PM EST</p> <p> Sunday: Closed</p> </div> <div className="mt - 8"> <h3 className="text - lg font - semibold text - gray - 900 mb - 4">Ready to Get Started?</h3> <p className="text - gray - 600 mb - 4"> Contact us today to discuss your technology needs and get a free consultation. </p> <a href="mailto:kleber@ziontechgroup.com" className="inline - block bg - blue - 600 text - white px - 6 py - 3 rounded - lg hover:bg - blue - 700 transition - colors""> Send Email </a> </div> </div> </div> </div> </main> </>) }"'";
))))))))))))
}
