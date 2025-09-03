<<<<<<< HEAD
    firstName: '', lastName: '',""
    email: '', company: '',""
    phone: '', service: '',
""
=======
<<<<<<< HEAD
ursor/automate-test-fix-improve-and-merge-code-48f3;
<<<<<<< HEAD
  return (    <>;
      <SEO title='Contact - Zion Tech Group' />'      <div className='min-h-screen bg-white py-20'>'        <div className='max-w-4xl mx-auto px-4'>'          <h1 className='text-4xl font-bold text-gray-900 mb-8'>Contact</h1>'          <p className='text-lg text-gray-600'>Content coming soon...</p>'        </div>'      </div>;
</>)}
;
export default function Contact() {;
  const [formData, setFormData] = useState({;
    firstName: ',;
    lastName: ',;
    email: ',;
    company: ',;
    phone: ',;
    service: ',;
    message: '});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
    const { name, value } = e.target;
    setFormData(prev => ({;
      ...prev,;
      [name]: value}))}
=======
  return (    <>
      <SEO title=&apos;Contact - Zion Tech Group&apos; />&apos;&apos;'      <div className=&apos;min-h-screen bg-white py-20&apos;>'&apos;&apos;        <div className=&apos;max-w-4xl mx-auto px-4&apos;>'&apos;&apos;          <h1 className=&apos;text-4xl font-bold text-gray-900 mb-8&apos;>Contact&apos;</h1>&apos;&apos;'          <p className=&apos;text-lg text-gray-600&apos;>Content coming soon...&apos;</p>&apos;&apos;'        </div>&apos;&apos;'      </div>
</>)}
;
<<<<<<< HEAD
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
=======
export default function Contact() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '',
    email: '', company: '',
    phone: '', service: '',
    message: ''})
<<<<<<< HEAD
  const [isSubmitting, setIsSubmitting] = useState(false)
=======
  const [isSubmitting, setIsSubmitting] = useState(false);
>>>>>>> main
>>>>>>> main
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {}
    const;const;const { name, value } = e.target;
    setFormData(prev => ({
      ...prev, [name]: value}))}
>>>>>>> main
;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission;
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    // Reset form after success;
    setTimeout(() => {;
      setSubmitSuccess(false);
<<<<<<< HEAD
      setFormData({ firstName: '', lastName: '',
=======
<<<<<<< HEAD
      setFormData({;
        firstName: ',;
        lastName: ',;
        email: ',;
        company: ',;
        phone: ',;
        service: ',;
        message: '})}, 5000)}
;
  const services = [;
    'AI & Machine Learning',;
    'Cloud & DevOps',;
    'Cybersecurity',;
    'Digital Transformation',;
    'Financial Solutions',;
    'Manufacturing Solutions',;
    'Other';
  ];
  const contactMethods = [;
    {;
      icon: '📍',;
      title: 'Office Address',;
      details: '364 E Main St STE 1008, Middletown DE 19709',;
      link: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'},;
    {;
      icon: '📧',;
      title: 'Email',;
      details: 'kleber@ziontechgroup.com',;
      link: 'mailto:kleber@ziontechgroup.com'},;
    {;
      icon: '📱',;
      title: 'Phone',;
      details: '+1 (302) 464-0950',;
      link: 'tel:+13024640950'},;
    {;
      icon: '🌐',;
      title: 'Website',;
      details: 'ziontechgroup.com',;
      link: 'https://ziontechgroup.com'}
  ];
  const officeHours = [;
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },;
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM EST' },;
    { day: 'Sunday', hours: 'Closed' }
  ];
  return(;
    <div className='min-h-screen bg-white'>;
      <Header />;
      {/* Hero Section */}
      <section className='pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='text-center'>;
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>;
              Get In Touch;
            </h1>;
            <p className='text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto'>;
              Ready to transform your business? Let's discuss how our technology solutions;
              can drive innovation and growth for your organization.;
            </p>;
          </div>;
        </div>;
      </section>;
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>;
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>;
          {/* Contact Form */}
          <div>;
            <h2 className='text-3xl font-bold text-gray-900 mb-8'>Send us a Message</h2>;
            {submitSuccess ? (;
              <div className='bg-green-50 border border-green-200 rounded-lg p-6 mb-8'>;
                <div className='flex items-center'>;
                  <svg className='w-6 h-6 text-green-500 mr-3' fill='currentColor' viewBox='0 0 20 20'>;
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />;
                  </svg>;
                  <div>;
                    <h3 className='text-lg font-semibold text-green-800'>Message Sent Successfully!</h3>;
                    <p className='text-green-700'>We'll get back to you within 24 hours.</p>;
                  </div>;
                </div>;
              </div>;
            ) : null}
            <form onSubmit={handleSubmit} className='space-y-6'>;
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>;
                <div>;
                  <label htmlFor='firstName' className='block text-sm font-medium text-gray-700 mb-2'>;
                    First Name *;
                  </label>;
                  <input;
                    type='text';
                    id='firstName';
                    name='firstName';
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required;
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'/>;
                </div>;
                <div>;
                  <label htmlFor='lastName' className='block text-sm font-medium text-gray-700 mb-2'>;
                    Last Name *;
                  </label>;
                  <input;
                    type='text';
                    id='lastName';
                    name='lastName';
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required;
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'/>;
                </div>;
              </div>;
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>;
                <div>;
                  <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>;
                    Email Address *;
                  </label>;
                  <input;
                    type='email';
                    id='email';
                    name='email';
                    value={formData.email}
                    onChange={handleInputChange}
                    required;
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'/>;
                </div>;
                <div>;
                  <label htmlFor='phone' className='block text-sm font-medium text-gray-700 mb-2'>;
                    Phone Number;
                  </label>;
                  <input;
                    type='tel';
                    id='phone';
                    name='phone';
                    value={formData.phone}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'/>;
                </div>;
              </div>;
              <div>;
                <label htmlFor='company' className='block text-sm font-medium text-gray-700 mb-2'>;
                  Company Name;
                </label>;
                <input;
                  type='text';
                  id='company';
                  name='company';
                  value={formData.company}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'/>;
              </div>;
              <div>;
                <label htmlFor='service' className='block text-sm font-medium text-gray-700 mb-2'>;
                  Service of Interest;
                </label>;
                <select;
                  id='service';
                  name='service';
                  value={formData.service}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'>;
                  <option value='>Select a service</option>;
                  {services.map((service, index) => (;
                    <option key={index} value={service}>;
=======
      setFormData({
<<<<<<< HEAD
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
=======
        firstName: '', lastName: '',
>>>>>>> main
        email: '', company: '',
        phone: '', service: '',
        message: ''})}, 5000)}
;
  const services = [
    'AI & Machine Learning', 'Cloud & DevOps',
    'Cybersecurity', 'Digital Transformation',
    'Financial Solutions', 'Manufacturing Solutions',
    'Other';
  ];
  const contactMethods = [
    { icon: '📍', title: 'Office Address',
      details: '364 E Main St STE 1008, Middletown DE 19709',
      link: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'}, { icon: '📧',
      title: 'Email', details: 'kleber@ziontechgroup.com',
      link: 'mailto:kleber@ziontechgroup.com'}, { icon: '📱',
      title: 'Phone', details: '+1 (302) 464-0950', link: 'tel:+13024640950'},
    { icon: '🌐', title: 'Website',
      details: 'ziontechgroup.com', link: 'https://ziontechgroup.com'}
<<<<<<< HEAD
  ]
=======
  ];
>>>>>>> main
>>>>>>> main
  const officeHours = [
    { day: &apos;Monday - Friday&apos;, hours: &apos;9:00 AM - ,6:00 PM EST&apos; },
    { day: &apos;Saturday&apos;, hours: &apos;10:00 AM - ,4:00 PM EST&apos; },
    { day: &apos;Sunday&apos;, hours: &apos;Closed&apos; }
  ]
  return(&apos;
    <div className=&apos;min-h-screen bg-white&apos;>&apos;'
      <Header />
      {/* Hero Section */}
<<<<<<< HEAD
      <section className=&apos;pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50&apos;>&apos;'
        <div className=&apos;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&apos;>&apos;'
          <div className=&apos;text-center&apos;>&apos;'
            <h1 className=&apos;text-4xl md:text-6xl font-bold text-gray-900 mb-6&apos;>
              Get In Touch&apos;
            </h1>
            <;<p className=&apos;text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto&apos;>
              Ready to transform your business? Let&apos;s discuss how our technology solutions;
              can drive innovation and growth for your organization.&apos;
=======
      <section className='pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50'>
        <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
              Get In Touch
            </h1>
            <p className='text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto'>
<<<<<<< HEAD
              Ready to transform your business? Let's discuss how our technology solutions'
=======
              Ready to transform your business? Let&apos;s discuss how our technology solutions;'
>>>>>>> main
              can drive innovation and growth for your organization.
>>>>>>> main
            </p>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      <div className=&apos;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&apos;>&apos;'
        <div className=&apos;grid grid-cols-1 l,g:grid-cols-2 gap-16&apos;>
          {/* Contact Form */}&apos;
=======
      <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          {/* Contact Form */}
>>>>>>> main
          <div>
            <h2 className=&apos;text-3xl font-bold text-gray-900 mb-8&apos;>Send us a Message&apos;</h2>
            {submitSuccess ? (}
              <div className=&apos;bg-green-50 border border-green-200 rounded-lg p-6 mb-8&apos;>&apos;'
                <div className=&apos;flex items-center&apos;>&apos;'
                  <svg className=&apos;w-6 h-6 text-green-500 mr-3&apos; fill=&apos;currentColor&apos; viewBox=&apos;0 0 20 20&apos;>&apos;'
                    <path fillRule=&apos;evenodd&apos; d=&apos;M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z&apos; clipRule=&apos;evenodd&apos; />&apos;
                  </svg>
                  <div>
<<<<<<< HEAD
                    <h3 className=&apos;text-lg font-semibold text-green-800&apos;>Message Sent Successfully!&apos;</h3>
                    <p className=&apos;text-green-700&apos;>We&apos;ll get back to you within 24 hours.&apos;</p>
=======
                    <h3 className='text-lg font-semibold text-green-800'>Message Sent Successfully!</h3>
                    <p className='text-green-700'>We&apos;ll get back to you within 24 hours.</p>'
>>>>>>> main
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
<<<<<<< HEAD
                    className=&apos;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focu,s:border-transparent&apos;/>&apos;&apos;
=======
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent'/>
>>>>>>> main
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
<<<<<<< HEAD
                    className=&apos;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent&apos;/>&apos;&apos;
=======
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent'/>
>>>>>>> main
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
<<<<<<< HEAD
                    className=&apos;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focu,s:border-transparent&apos;/>&apos;&apos;
=======
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent'/>
>>>>>>> main
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
<<<<<<< HEAD
                    className=&apos;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focu,s:border-transparent&apos;/>&apos;&apos;
=======
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent'/>
>>>>>>> main
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
<<<<<<< HEAD
                  className=&apos;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focu,s:border-transparent&apos;/>&apos;&apos;
=======
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent'/>
>>>>>>> main
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
<<<<<<< HEAD
                  className=&apos;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focu,s:border-transparent&apos;>&apos;'
                  <option value=&apos;&apos;>Select a service&apos;&apos;</option>
                  {services.map((service, index) => (}
=======
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent'>
                  <option value=''>Select a service</option>
                  {services.map((service, index) => (
>>>>>>> main
                    <option key={index} value={service}>
>>>>>>> main
                      {service}
                    </option>;
                  ))}
<<<<<<< HEAD
                </select>;
              </div>;
              <div>;
                <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>;
                  Message *;
                </label>;
                <textarea;
                  id='message';
                  name='message';
=======
                </select>
              </div>
              <div>
                <label htmlFor=&apos;message&apos; className=&apos;block text-sm font-medium text-gray-700 mb-2&apos;>
                  Message *&apos;
                </label>
                <textarea
                  id=&apos;message';
                  name=&apos;message';
>>>>>>> main
                  value={formData.message}
                  onChange={handleInputChange}
                  required;
                  rows={6}
<<<<<<< HEAD
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent';
                  placeholder='Tell us about your project, goals, or how we can help...'/>;
              </div>;
              <button;
                type='submit';
                disabled={isSubmitting}
                className='w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-4 px-8 rounded-lg transition-colors'>{isSubmitting ? 'Sending Message...' : 'Send Message'}
              </button>;
            </form>;
          </div>;
          {/* Contact Information */}
          <div>;
            <h2 className='text-3xl font-bold text-gray-900 mb-8'>Contact Information</h2>;
            <div className='space-y-8'>;
              {/* Contact Methods */}
              <div>;
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>Get in Touch</h3>;
                <div className='space-y-4'>;
                  {contactMethods.map((method, index) => (;
                    <div key={index} className='flex items-start space-x-4'>;
                      <div className='text-2xl'>{method.icon}</div>;
                      <div>;
                        <h4 className='font-medium text-gray-900'>{method.title}</h4>;
                        <a;
                          href={method.link}
                          target={method.link.startsWith('http') ? '_blank' : '_self'}
                          rel={method.link.startsWith('http') ? 'noopener noreferrer' : '}
                          className='text-blue-600 hover:text-blue-700 hover:underline'>{method.details}
                        </a>;
                      </div>;
                    </div>;
=======
<<<<<<< HEAD
                  className=&apos;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focu,s:border-transparent';
                  placeholder=&apos;Tell us about your project, goals, or how we can help...&apos;/>&apos;&apos;
=======
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent';
                  placeholder='Tell us about your project, goals, or how we can help...'/>
>>>>>>> main
              </div>
              <button
                type=&apos;submit';
                disabled={isSubmitting}
<<<<<<< HEAD
                className=&apos;w-full bg-blue-600 hover:bg-blue-700 disable,d:bg-blue-400 text-white font-semibold py-4 px-8 rounded-lg transition-colors&apos;>{isSubmitting ? &apos;Sending Message...&apos; : &apos;Send Message&apos;}&apos;'
=======
                className='w-full bg-blue-600 hover: bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-4 px-8 rounded-lg transition-colors'>{isSubmitting ? 'Sending Message...' : 'Send Message'}
>>>>>>> main
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
>>>>>>> main
                  ))}
                </div>;
              </div>;
              {/* Office Hours */}
<<<<<<< HEAD
              <div>;
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>Office Hours</h3>;
                <div className='space-y-2'>;
                  {officeHours.map((schedule, index) => (;
                    <div key={index} className='flex justify-between'>;
                      <span className='text-gray-600'>{schedule.day}</span>;
                      <span className='font-medium text-gray-900'>{schedule.hours}</span>;
                    </div>;
=======
              <div>
                <h3 className=&apos;text-xl font-semibold text-gray-900 mb-4&apos;>Office Hours&apos;</h3>
                <div className=&apos;space-y-2&apos;>
                  {officeHours.map((schedule, index) => (&apos;}
                    <div key={index} className=&apos;flex justify-between&apos;>&apos;'
                      <span className=&apos;text-gray-600&apos;>{schedule.day}&apos;</span>
                      <span className=&apos;font-medium text-gray-900&apos;>{schedule.hours}&apos;</span>
                    </div>
>>>>>>> main
                  ))}
                </div>;
              </div>;
              {/* Quick Links */}
<<<<<<< HEAD
              <div>;
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>Quick Links</h3>;
                <div className='space-y-2'>;
                  <Link to='/services' className='block text-blue-600 hover:text-blue-700 hover:underline'>;
                    View Our Services;
                  </Link>;
                  <Link to='/case-studies' className='block text-blue-600 hover:text-blue-700 hover:underline'>;
                    Case Studies;
                  </Link>;
                  <Link to='/about' className='block text-blue-600 hover:text-blue-700 hover:underline'>;
                    About Zion Tech Group;
                  </Link>;
                  <Link to='/pricing' className='block text-blue-600 hover:text-blue-700 hover:underline'>;
                    Pricing Information;
                  </Link>;
                </div>;
              </div>;
              {/* Emergency Support */}
              <div className='bg-blue-50 border border-blue-200 rounded-lg p-6'>;
                <h3 className='text-lg font-semibold text-blue-900 mb-2'>Need Immediate Support?</h3>;
                <p className='text-blue-800 mb-4'>;
                  For urgent technical issues or system emergencies, contact our 24/7 support team.;
                </p>;
                <a;
                  href='tel:+13024640950';
                  className='inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors'>;
                  <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>;
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />;
                  </svg>;
                  Call Now;
                </a>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      <Footer />;
    </div>;
  )}
=======
              <div>
<<<<<<< HEAD
                <h3 className=&apos;text-xl font-semibold text-gray-900 mb-4&apos;>Quick Links&apos;</h3>
                <div className=&apos;space-y-2&apos;>&apos;'
                  <Link to=&apos;/services&apos; className=&apos;block text-blue-600 hover:text-blue-700 hover:underline&apos;>
                    View Our Services&apos;
=======
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>Quick Links</h3>
                <div className='space-y-2'>
                  <Link to='/services' className='block text-blue-600 hover: text-blue-700 hover:underline'>
                    View Our Services
>>>>>>> main
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
<<<<<<< HEAD
                  href=&apos;tel:+13024640950';
                  className=&apos;inline-flex items-center bg-blue-600 hove,r:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors&apos;>&apos;'
                  <svg className=&apos;w-4 h-4 mr-2&apos; fill=&apos;none&apos; stroke=&apos;currentColor&apos; viewBox=&apos;0 0 24 24&apos;>&apos;'
                    <path strokeLinecap=&apos;round&apos; strokeLinejoin=&apos;round&apos; strokeWidth={2} d=&apos;M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z&apos; />&apos;
=======
                  href='tel: +13024640950';
                  className='inline-flex items-center bg-blue-600 hover: bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors'>
                  <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
>>>>>>> main
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
=======
<<<<<<< HEAD
    firstName: '', lastName: '',
    email: '', company: '',
    phone: '', service: '',
=======
 import Head from 'next / head' export default React.memo(function Contact () { return (<> <Head> <title > Contact - Zion Tech Group</title> <meta name='description' content='Get in touch with Zion Tech Group' / /" > </Head> <main className='min - h-screen bg - white'> <div className='max - w-7xl mx - auto px - 4 sm: px - 6 lg:px - 8 py - 20'> <div className='text - center mb - 16'> <h1 className='text - 4xl font - bold text - gray - 900 mb - 6'> Contact Us </h1> <p className='text - xl text - gray - 600 max - w-3xl mx - auto'> Get in touch with our team. </p> </div> <div className='grid md:grid - cols - 2 gap - 12'> <div> <h2 className='text - 2xl font - semibold text - gray - 900 mb - 6'>Contact Information</h2> <div className='space - y-4'> <div> <h3 className='text - lg font - semibold text - gray - 900 mb - 2'>Phone</h3> <p className='text - gray - 600'>+1 302 464 0950</p> </div> <div> <h3 className='text - lg font - semibold text - gray - 900 mb - 2'>Email</h3> <p className='text - gray - 600'>kleber@ziontechgroup.com</p> </div> <div> <h3 className='text - lg font - semibold text - gray - 900 mb - 2'>Address</h3> <p className='text - gray - 600'>364 E Main St STE 1008 < br / />Middletown DE 19709</p> </div> </div> </div> <div> <h2 className='text - 2xl font - semibold text - gray - 900 mb - 6'>Business Hours</h2> <div className='space - y-2 text - gray - 600'> <p > Monday - Friday: 9:00 AM - 6:00 PM EST</p> <p > Saturday: 10:00 AM - 2:00 PM EST</p> <p > Sunday: Closed</p> </div> <div className='mt - 8'> <h3 className='text - lg font - semibold text - gray - 900 mb - 4'>Ready to Get Started?</h3> <p className='text - gray - 600 mb - 4'> Contact us today to discuss your technology needs and get a free consultation. </p> <a href='mailto:kleber@ziontechgroup.com' className='inline - block bg - blue - 600 text - white px - 6 py - 3 rounded - lg hover:bg - blue - 700 transition - colors'" > Send Email </a> </div> </div> </div> </div> </main> </>) }''""
 import Head  from 'next / head';export default React.memo(function Contact () { return (<> <Head> <title > Contact - Zion Tech Group</title> <meta name='description' content='Get in touch with Zion Tech Group' / /" > </Head> <main className='min - h-screen bg - white'> <div className='max - w-7xl mx - auto px - 4 sm: px - 6 lg:px - 8 py - 20'> <div className='text - center mb - 16'> <h1 className='text - 4xl font - bold text - gray - 900 mb - 6'> Contact Us </h1> <p className='text - xl text - gray - 600 max - w-3xl mx - auto'> Get in touch with our team. </p> </div> <div className='grid md:grid - cols - 2 gap - 12'> <div> <h2 className='text - 2xl font - semibold text - gray - 900 mb - 6'>Contact Information</h2> <div className='space - y-4'> <div> <h3 className='text - lg font - semibold text - gray - 900 mb - 2'>Phone</h3> <p className='text - gray - 600'>+1 302 464 0950</p> </div> <div> <h3 className='text - lg font - semibold text - gray - 900 mb - 2'>Email</h3> <p className='text - gray - 600'>kleber@ziontechgroup.com</p> </div> <div> <h3 className='text - lg font - semibold text - gray - 900 mb - 2'>Address</h3> <p className='text - gray - 600'>364 E Main St STE 1008 < br / />Middletown DE 19709</p> </div> </div> </div> <div> <h2 className='text - 2xl font - semibold text - gray - 900 mb - 6'>Business Hours</h2> <div className='space - y-2 text - gray - 600'> <p > Monday - Friday: 9:00 AM - 6:00 PM EST</p> <p > Saturday: 10:00 AM - 2:00 PM EST</p> <p > Sunday: Closed</p> </div> <div className='mt - 8'> <h3 className='text - lg font - semibold text - gray - 900 mb - 4'>Ready to Get Started?</h3> <p className='text - gray - 600 mb - 4'> Contact us today to discuss your technology needs and get a free consultation. </p> <a href='mailto:kleber@ziontechgroup.com' className='inline - block bg - blue - 600 text - white px - 6 py - 3 rounded - lg hover:bg - blue - 700 transition - colors'" > Send Email </a> </div> </div> </div> </div> </main> </>) }''
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
