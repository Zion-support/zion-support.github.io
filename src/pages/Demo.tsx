import React, { useState } from 'react';
                  </label>
                  <input type="text",
  id="company",
  name="company",
  required
                    value={formData.company}
                    onChange={handleInputChange}
  );
};

export default Component;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Mail, Phone, CheckCircle, Star, Play } from 'lucide-react'';
;
const Demo: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',';,';,
    lastName: '',';,';,
    email: '',';,';,
    phone: '',';,';,
    company: '',';,';,
    useCase: '',';,';,
    preferredTime: '',';,';,
    timeZone: '',';,';,
    message: '',';,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>)  => {,,
  const { name, value } = e.target;
    setFormData(prev: > ({,
      ...prev
      [name]: value
    }));
  };

  const handleSubmit: (e: React.FormEvent)  => {,,
  e.preventDefault();
    // Handle form submission here
    console.log('Demo request submitted: ', formData);';,';,
    setIsSubmitted(true);
  };

  const useCases: [,
    'AI Automation',';';
    'Cybersecurity Solutions',';';
    'Cloud Infrastructure',';';
    'Data Analytics',';';
    'DevOps Services',';';
    'Digital Transformation',';';
    'Other
  ];

  const timeSlots: [,
    '9: 00 AM - 10:00 AM',';,';,
    '10: 00 AM - 11:00 AM',';,';,
    '11: 00 AM - 12:00 PM',';,';,
    '1: 00 PM - 2:00 PM',';,';,
    '2: 00 PM - 3:00 PM',';,';,
    '3: 00 PM - 4:00 PM',';,';,
    '4: 00 PM - 5:00 PM',';,
  ];

  if (isSubmitted) {
    return (
      <>
        <Helmet >
          <title >Demo Request Submitted - Zion Tech Group</title>
          <meta name="description", content ="Thank you for requesting a demo. We'll contact you soon to schedule your personalized demonstration." />
          <meta name="description" content="Thank you for requesting a demo. We'll contact you soon to schedule your personalized demonstration." />
        </Helmet>

        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <CheckCircle className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            </div>
            <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Demo Request Submitted!
            </h1>
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Thank you for your interest in our solutions. Our team will contact you within 24 hours to schedule your personalized demonstration.
            </p>
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <Link to="/",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <CheckCircle className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            </div>
            <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Demo Request Submitted!
            </h1>
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Thank you for your interest in our solutions. Our team will contact you within 24 hours to schedule your personalized demonstration.
            </p>
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <Link to="/",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                Return to Home
              </Link>
              <Link to="/contact",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                Contact Us Directly
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet >
        <title >Request a Demo - Zion Tech Group</title>
        <meta name="description", content="Schedule a personalized demonstration of our AI and IT solutions. See how our technology can transform your business." />
        <meta name="keywords", content ="demo, demonstration, AI solutions, technology showcase, business transformation" />
        <link rel="canonical", href ="https://ziontechgroup.com/demo" />
        <meta name="description" content="Schedule a personalized demonstration of our AI and IT solutions. See how our technology can transform your business." />
        <meta name="keywords", content="demo, demonstration, AI solutions, technology showcase, business transformation" />
        <link rel="canonical", href ="https://ziontechgroup.com/demo" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        {/* Hero Section */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Request a Demo
              </h1>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  See our AI and IT solutions in action. Schedule a personalized demonstration tailored to your business needs.
              </p>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Clock className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  30-minute session
                </div>
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <User className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Expert presenter
                </div>
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Star className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        {/* Hero Section */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Request a Demo
              </h1>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  See our AI and IT solutions in action. Schedule a personalized demonstration tailored to your business needs.
              </p>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Clock className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  30-minute session
                </div>
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <User className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Expert presenter
                </div>
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Star className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Customized demo
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Form */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Schedule Your Demo
                </h2>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Schedule Your Demo
                </h2>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Fill out the form below and we'll contact you to schedule your personalized demonstration.';';
                </p>
              </div>

              <form onSubmit={handleSubmit} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <div >
                    <label htmlFor: "firstName", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
              <form onSubmit={handleSubmit} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                {/* Personal Information */}
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <div >
                    <label htmlFor: "firstName", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  First Name *
                    </label>
                    <input type="text",
  id="firstName",
  name="firstName",
  value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  </div>
                  <div >
                    <label htmlFor: "lastName", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
                      className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  </div>
                  <div >
                    <label htmlFor: "lastName", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Last Name *
                    </label>
                    <input type="text",
  id="lastName",
  name="lastName",
  value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  </div>
                </div>

                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <div >
                    <label htmlFor: "email", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <div >
                    <label htmlFor: "email", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Email Address *
                    </label>
                    <input type="email",
  id="email",
  name="email",
  value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  </div>
                  <div >
                    <label htmlFor: "phone", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
                      className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  </div>
                  <div >
                    <label htmlFor: "phone", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Phone Number
                    </label>
                    <input type="tel",
  id="phone",
  name="phone",
  value={formData.phone}
                      onChange={handleInputChange}
                      className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  </div>
                </div>

                <div >
                  <label htmlFor: "company", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
                  <label htmlFor: "company", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Company *
                  </label>
                  <input type="text",
  id="company",
  name="company",
  value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                </div>

                <div >
                  <label htmlFor: "useCase", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
                  <label htmlFor: "useCase", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Primary Use Case
                  </label>
                  <select id="useCase",
  name="useCase",
  value={formData.useCase}
                    onChange={handleInputChange}
                    className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    <option value: ">Select a use case</option>", {useCases.map((useCase)  => (
                      <option key="{useCase} value={useCase}">
                        {useCase}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <div >
                    <label htmlFor: "preferredTime", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <div >
                    <label htmlFor: "preferredTime", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Preferred Time Slot
                    </label>
                    <select id="preferredTime",
  name="preferredTime",
  value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <option value: ">Select a time</option>", {timeSlots.map((time)  => (
                        <option key="{time} value={time}">
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div >
                    <label htmlFor: "timeZone", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
                    <label htmlFor: "timeZone", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Time Zone
                    </label>
                    <select id="timeZone",
  name="timeZone",
  value={formData.timeZone}
                      onChange={handleInputChange}
                      className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <option value: ">Select time zone</option>", <option value: "EST", >Eastern Time (EST)</h3>
                      <option value: "CST", >Central Time (CST)</h3>
                      <option value: "MST", >Mountain Time (MST)</h3>
                      <option value: "PST", >Pacific Time (PST)</h3>
                      <option value: "GMT", >Greenwich Mean Time (GMT)</h3>
                      <option value: "CET", >Central European Time (CET)</h3>
                      <option value: "IST", >India Standard Time (IST)</h3>
                      <option value: "JST", >Japan Standard Time (JST)</h3>
                    </select>
                  </div>
                </div>

                <div >
                  <label htmlFor: "message", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
                  <label htmlFor: "message", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Additional Information
                  </label>
                  <textarea id="message",
  name="message",
  value={formData.message}
                    onChange={handleInputChange}
                    rows: {4}
                    placeholder="Tell us about your specific needs, challenges, or questions...",
                    className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                </div>

                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <button type="submit",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    <Play className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
                    placeholder="Tell us about your specific needs, challenges, or questions...",
                    className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                </div>

                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <button type="submit",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    <Play className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Request Demo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Why Schedule a Demo?
              </h2>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Why Schedule a Demo?
              </h2>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  See firsthand how our solutions can transform your business
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <User className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Personalized Experience
                </h3>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <User className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Personalized Experience
                </h3>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Our experts tailor the demonstration to your specific industry and use cases.
                </p>
              </div>

              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <CheckCircle className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Real-World Examples
                </h3>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <CheckCircle className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Real-World Examples
                </h3>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  See our solutions in action with real business scenarios and case studies.
                </p>
              </div>

              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Mail className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Expert Q&A
                </h3>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Mail className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Expert Q&A
                </h3>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Get answers to your specific questions from our technical experts.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Component;