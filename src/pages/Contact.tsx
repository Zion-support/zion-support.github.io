ursor/automate-test-fix-improve-and-merge-code-48f3;
  return (    <>
      <SEO title=&apos;Contact - Zion Tech Group&apos; />&apos;&apos;'      <div className=&apos;min-h-screen bg-white py-20&apos;>'&apos;&apos;        <div className=&apos;max-w-4xl mx-auto px-4&apos;>'&apos;&apos;          <h1 className=&apos;text-4xl font-bold text-gray-900 mb-8&apos;>Contact&apos;</h1>&apos;&apos;'          <p className=&apos;text-lg text-gray-600&apos;>Content coming soon...&apos;</p>&apos;&apos;'        </div>&apos;&apos;'      </div>
</>)}
;
export default function Contact() {}
  const [formData, setFormData] = useState(;{
    firstName: &apos;&apos;,
    lastName: &apos;&apos;,
    email: &apos;&apos;,
    company: &apos;&apos;,
    phone: &apos;&apos;,
    service: &apos;&apos;,
    message: &apos;&apos;})&apos;&apos;
  const;const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {}
    const;const;const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value}))}
;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission;
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    // Reset form after success;
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        firstName: &apos;&apos;,
        lastName: &apos;&apos;,
        email: &apos;&apos;,
        company: &apos;&apos;,
        phone: &apos;&apos;,
        service: &apos;&apos;,
        message: &apos;&apos;})}, 5000)}
;&apos;&apos;
  const services = [
    &apos;AI & Machine Learning&apos;,
    &apos;Cloud & DevOps&apos;,
    &apos;Cybersecurity&apos;,
    &apos;Digital Transformation&apos;,
    &apos;Financial Solutions&apos;,
    &apos;Manufacturing Solutions&apos;,
    &apos;Other';
  ];&apos;&apos;
  const contactMethods = [
    {
      icon: &apos;📍&apos;,
      title: &apos;Office Address&apos;,
      details: &apos;364 E Main St STE 1008, Middletown DE 19709&apos;,
      link: &apos;http,s://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709&apos;},
    {
      icon: &apos;📧&apos;,
      title: &apos;Email&apos;,
      details: &apos;kleber@ziontechgroup.com&apos;,
      link: &apos;mailt,o:kleber@ziontechgroup.com&apos;},
    {
      icon: &apos;📱&apos;,
      title: &apos;Phone&apos;,
      details: &apos;+1 (302) 464-0950&apos;,
      link: &apos;te,l:+13024640950&apos;},
    {
      icon: &apos;🌐&apos;,
      title: &apos;Website&apos;,
      details: &apos;ziontechgroup.com&apos;,
      link: &apos;http,s://ziontechgroup.com&apos;}
  ];&apos;
  const officeHours = [
    { day: &apos;Monday - Friday&apos;, hours: &apos;9:00 AM - ,6:00 PM EST&apos; },
    { day: &apos;Saturday&apos;, hours: &apos;10:00 AM - ,4:00 PM EST&apos; },
    { day: &apos;Sunday&apos;, hours: &apos;Closed&apos; }
  ]
  return(&apos;
    <div className=&apos;min-h-screen bg-white&apos;>&apos;'
      <Header />
      {/* Hero Section */}
      <section className=&apos;pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50&apos;>&apos;'
        <div className=&apos;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&apos;>&apos;'
          <div className=&apos;text-center&apos;>&apos;'
            <h1 className=&apos;text-4xl md:text-6xl font-bold text-gray-900 mb-6&apos;>
              Get In Touch&apos;
            </h1>
            <;<p className=&apos;text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto&apos;>
              Ready to transform your business? Let&apos;s discuss how our technology solutions;
              can drive innovation and growth for your organization.&apos;
            </p>
          </div>
        </div>
      </section>
      <div className=&apos;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&apos;>&apos;'
        <div className=&apos;grid grid-cols-1 l,g:grid-cols-2 gap-16&apos;>
          {/* Contact Form */}&apos;
          <div>
            <h2 className=&apos;text-3xl font-bold text-gray-900 mb-8&apos;>Send us a Message&apos;</h2>
            {submitSuccess ? (}
              <div className=&apos;bg-green-50 border border-green-200 rounded-lg p-6 mb-8&apos;>&apos;'
                <div className=&apos;flex items-center&apos;>&apos;'
                  <svg className=&apos;w-6 h-6 text-green-500 mr-3&apos; fill=&apos;currentColor&apos; viewBox=&apos;0 0 20 20&apos;>&apos;'
                    <path fillRule=&apos;evenodd&apos; d=&apos;M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z&apos; clipRule=&apos;evenodd&apos; />&apos;
                  </svg>
                  <div>
                    <h3 className=&apos;text-lg font-semibold text-green-800&apos;>Message Sent Successfully!&apos;</h3>
                    <p className=&apos;text-green-700&apos;>We&apos;ll get back to you within 24 hours.&apos;</p>
                  </div>
                </div>
              </div>
            ) : null}
            <form onSubmit={handleSubmit} className=&apos;space-y-6&apos;>&apos;'
              <div className=&apos;grid grid-cols-1 md:grid-cols-2 gap-6&apos;>&apos;'
                <div>
                  <label htmlFor=&apos;firstName&apos; className=&apos;block text-sm font-medium text-gray-700 mb-2&apos;>
                    First Name *&apos;
                  </label>
                  <input
                    type=&apos;text';
                    id=&apos;firstName';
                    name=&apos;firstName';
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required;
                    className=&apos;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focu,s:border-transparent&apos;/>&apos;&apos;
                </div>
                <div>
                  <label htmlFor=&apos;lastName&apos; className=&apos;block text-sm font-medium text-gray-700 mb-2&apos;>
                    Last Name *&apos;
                  </label>
                  <input
                    type=&apos;text';
                    id=&apos;lastName';
                    name=&apos;lastName';
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required;
                    className=&apos;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent&apos;/>&apos;&apos;
                </div>
              </div>
              <div className=&apos;grid grid-cols-1 m,d:grid-cols-2 gap-6&apos;>&apos;'
                <div>
                  <label htmlFor=&apos;email&apos; className=&apos;block text-sm font-medium text-gray-700 mb-2&apos;>
                    Email Address *&apos;
                  </label>
                  <input
                    type=&apos;email';
                    id=&apos;email';
                    name=&apos;email';
                    value={formData.email}
                    onChange={handleInputChange}
                    required;
                    className=&apos;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focu,s:border-transparent&apos;/>&apos;&apos;
                </div>
                <div>
                  <label htmlFor=&apos;phone&apos; className=&apos;block text-sm font-medium text-gray-700 mb-2&apos;>
                    Phone Number&apos;
                  </label>
                  <input
                    type=&apos;tel';
                    id=&apos;phone';
                    name=&apos;phone';
                    value={formData.phone}
                    onChange={handleInputChange}
                    className=&apos;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focu,s:border-transparent&apos;/>&apos;&apos;
                </div>
              </div>
              <div>
                <label htmlFor=&apos;company&apos; className=&apos;block text-sm font-medium text-gray-700 mb-2&apos;>
                  Company Name&apos;
                </label>
                <input
                  type=&apos;text';
                  id=&apos;company';
                  name=&apos;company';
                  value={formData.company}
                  onChange={handleInputChange}
                  className=&apos;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focu,s:border-transparent&apos;/>&apos;&apos;
              </div>
              <div>
                <label htmlFor=&apos;service&apos; className=&apos;block text-sm font-medium text-gray-700 mb-2&apos;>
                  Service of Interest&apos;
                </label>
                <select
                  id=&apos;service';
                  name=&apos;service';
                  value={formData.service}
                  onChange={handleInputChange}
                  className=&apos;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focu,s:border-transparent&apos;>&apos;'
                  <option value=&apos;&apos;>Select a service&apos;&apos;</option>
                  {services.map((service, index) => (}
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor=&apos;message&apos; className=&apos;block text-sm font-medium text-gray-700 mb-2&apos;>
                  Message *&apos;
                </label>
                <textarea
                  id=&apos;message';
                  name=&apos;message';
                  value={formData.message}
                  onChange={handleInputChange}
                  required;
                  rows={6}
                  className=&apos;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focu,s:border-transparent';
                  placeholder=&apos;Tell us about your project, goals, or how we can help...&apos;/>&apos;&apos;
              </div>
              <button
                type=&apos;submit';
                disabled={isSubmitting}
                className=&apos;w-full bg-blue-600 hover:bg-blue-700 disable,d:bg-blue-400 text-white font-semibold py-4 px-8 rounded-lg transition-colors&apos;>{isSubmitting ? &apos;Sending Message...&apos; : &apos;Send Message&apos;}&apos;'
              </button>
            </form>
          </div>
          {/* Contact Information */}
          <div>
            <h2 className=&apos;text-3xl font-bold text-gray-900 mb-8&apos;>Contact Information&apos;</h2>
            <div className=&apos;space-y-8&apos;>
              {/* Contact Methods */}&apos;
              <div>
                <h3 className=&apos;text-xl font-semibold text-gray-900 mb-4&apos;>Get in Touch&apos;</h3>
                <div className=&apos;space-y-4&apos;>
                  {contactMethods.map((method, index) => (&apos;}
                    <div key={index} className=&apos;flex items-start space-x-4&apos;>&apos;'
                      <div className=&apos;text-2xl&apos;>{method.icon}&apos;</div>
                      <div>
                        <h4 className=&apos;font-medium text-gray-900&apos;>{method.title}&apos;</h4>
                        <a
                          href={method.link}
                          target={method.link.startsWith(&apos;http&apos;) ? &apos;_blank&apos; : &apos;_self&apos;}
                          rel={method.link.startsWith(&apos;http&apos;) ? &apos;noopener noreferrer&apos; : &apos;&apos;}
                          className=&apos;text-blue-600 hover:text-blue-700 hove,r:underline&apos;>{method.details}&apos;&apos;
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Office Hours */}
              <div>
                <h3 className=&apos;text-xl font-semibold text-gray-900 mb-4&apos;>Office Hours&apos;</h3>
                <div className=&apos;space-y-2&apos;>
                  {officeHours.map((schedule, index) => (&apos;}
                    <div key={index} className=&apos;flex justify-between&apos;>&apos;'
                      <span className=&apos;text-gray-600&apos;>{schedule.day}&apos;</span>
                      <span className=&apos;font-medium text-gray-900&apos;>{schedule.hours}&apos;</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Quick Links */}
              <div>
                <h3 className=&apos;text-xl font-semibold text-gray-900 mb-4&apos;>Quick Links&apos;</h3>
                <div className=&apos;space-y-2&apos;>&apos;'
                  <Link to=&apos;/services&apos; className=&apos;block text-blue-600 hover:text-blue-700 hover:underline&apos;>
                    View Our Services&apos;
                  </Link>
                  <Link to=&apos;/case-studies&apos; className=&apos;block text-blue-600 hover:text-blue-700 hover:underline&apos;>
                    Case Studies&apos;
                  </Link>
                  <Link to=&apos;/about&apos; className=&apos;block text-blue-600 hover:text-blue-700 hover:underline&apos;>
                    About Zion Tech Group&apos;
                  </Link>
                  <Link to=&apos;/pricing&apos; className=&apos;block text-blue-600 hover:text-blue-700 hove,r:underline&apos;>
                    Pricing Information&apos;
                  </Link>
                </div>
              </div>
              {/* Emergency Support */}
              <div className=&apos;bg-blue-50 border border-blue-200 rounded-lg p-6&apos;>&apos;'
                <h3 className=&apos;text-lg font-semibold text-blue-900 mb-2&apos;>Need Immediate Support?&apos;</h3>
                <p className=&apos;text-blue-800 mb-4&apos;>
                  For urgent technical issues or system emergencies, contact our 24/7 support team.&apos;
                </p>
                <a
                  href=&apos;tel:+13024640950';
                  className=&apos;inline-flex items-center bg-blue-600 hove,r:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors&apos;>&apos;'
                  <svg className=&apos;w-4 h-4 mr-2&apos; fill=&apos;none&apos; stroke=&apos;currentColor&apos; viewBox=&apos;0 0 24 24&apos;>&apos;'
                    <path strokeLinecap=&apos;round&apos; strokeLinejoin=&apos;round&apos; strokeWidth={2} d=&apos;M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z&apos; />&apos;
                  </svg>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )}