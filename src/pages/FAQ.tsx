<<<<<<< HEAD
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react'; const FAQ = () => { return ( <div className="min-h-screen bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div className="text-center mb-12"> <h1 className="text-4xl font-bold text-gray-900 mb-4"> Frequently Asked Questions </h1> <p className="text-xl text-gray-600"> Find answers to common questions about our services. </p> </div> <div className="max-w-3xl mx-auto space-y-6"> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">What services do you offer?</h3> <p className="text-gray-600">We offer AI solutions,cybersecurity,cloud services,and digital transformation solutions.</p> </div> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">How can I get started?</h3> <p className="text-gray-600">Contact us through our contact form or request a quote to get started with our services.</p> </div> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer support?</h3> <p className="text-gray-600">Yes,we provide comprehensive support for all our services and solutions.</p> </div> </div> </div> </div> )}; export default FAQ;

<<<<<<< HEAD
import React from 'react'; const FAQ = () =>: any { return ( <div className="min - h-screen bg - gray - 50"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12"> <div className="text - center mb - 12"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 4"> Frequently Asked Questions </h1> <p className="text - xl text - gray - 600"> Find answers to common questions about our services. </p> </div> <div className="max - w-3xl mx - auto space - y-6"> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">What services do you offer?</h3> <p className="text - gray - 600">We offer AI solutions, cybersecurity, cloud services, and digital transformation solutions.</p> </div> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">How can I get started?</h3> <p className="text - gray - 600">Contact us through our contact form or request a quote to get started with our services.</p> </div> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Do you offer support?</h3> <p className="text - gray - 600">Yes, we provide comprehensive support for all our services and solutions.</p> </div> </div> </div> </div> )} export default FAQ;
import React from 'react'; const FAQ = () => { return ( <div className="min-h-screen bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div className="text-center mb-12"> <h1 className="text-4xl font-bold text-gray-900 mb-4"> Frequently Asked Questions </h1> <p className="text-xl text-gray-600"> Find answers to common questions about our services. </p> </div> <div className="max-w-3xl mx-auto space-y-6"> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">What services do you offer?</h3> <p className="text-gray-600">We offer AI solutions,cybersecurity,cloud services,and digital transformation solutions.</p> </div> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">How can I get started?</h3> <p className="text-gray-600">Contact us through our contact form or request a quote to get started with our services.</p> </div> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer support?</h3> <p className="text-gray-600">Yes,we provide comprehensive support for all our services and solutions.</p> </div> </div> </div> </div> )}; export default FAQ;
import React from 'react'; const FAQ = () =>: any { return ( <div className="min - h-screen bg - gray - 50"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12"> <div className="text - center mb - 12"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 4"> Frequently Asked Questions </h1> <p className="text - xl text - gray - 600"> Find answers to common questions about our services. </p> </div> <div className="max - w-3xl mx - auto space - y-6"> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">What services do you offer?</h3> <p className="text - gray - 600">We offer AI solutions, cybersecurity, cloud services, and digital transformation solutions.</p> </div> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">How can I get started?</h3> <p className="text - gray - 600">Contact us through our contact form or request a quote to get started with our services.</p> </div> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Do you offer support?</h3> <p className="text - gray - 600">Yes, we provide comprehensive support for all our services and solutions.</p> </div> </div> </div> </div> )} export default FAQ;
=======
import React from 'react'; const FAQ = () =>: any { return ( <div className="min - h-screen bg - gray - 50"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12"> <div className="text - center mb - 12"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 4"> Frequently Asked Questions </h1> <p className="text - xl text - gray - 600"> Find answers to common questions about our services. </p> </div> <div className="max - w-3xl mx - auto space - y-6"> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">What services do you offer?</h3> <p className="text - gray - 600">We offer AI solutions, cybersecurity, cloud services, and digital transformation solutions.</p> </div> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">How can I get started?</h3> <p className="text - gray - 600">Contact us through our contact form or request a quote to get started with our services.</p> </div> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Do you offer support?</h3> <p className="text - gray - 600">Yes, we provide comprehensive support for all our services and solutions.</p> </div> </div> </div> </div> )} export default FAQ;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'What services does Zion Tech Group provide?',
      answer: 'We provide comprehensive IT services, AI solutions, cloud computing, cybersecurity, digital transformation, and data analytics services.'
    },
    {
      question: 'How can I contact your support team?',
      answer: 'You can reach us at +1 302 464 0950 or email us at kleber@ziontechgroup.com. We also have a support portal available 24/7.'
    },
    {
      question: 'Do you offer custom solutions?',
      answer: 'Yes, we specialize in creating custom technology solutions tailored to your specific business needs and requirements.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary depending on scope and complexity. We provide detailed project plans during the consultation phase.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Find answers to common questions about our services and solutions.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
