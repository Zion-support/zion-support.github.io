"use client";
import React{ useState } from 'react';
CalendarClockUsersZapCheckCircleArrowRightX
interface DemoFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  role: string;
  companySize: string;
  industry: string;
  interests: string[];
  preferredDate: string;
  preferredTime: string;
  message: string;
}
const industries = [
  ', 'Technology', 'Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Education', 'Government', 'Other'
];
const companySizes = [
  '1-10 employees'11-50 employees'51-200 employees'201-1000 employees'1000+ employees'
];
const interests = [
  'AI 'Automation', 'Cybersecurity'Cloud 'Solutions', 'Data 'Analytics', 'Digital 'Transformation', 'Process Optimization'
];
const timeSlots = [
  '9:00 AM'10:00 AM'11:00 AM'1:00 PM'2:00 PM'3:00 PM'4:00 PM'
};



export default function InteractiveDemoRequest() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<DemoFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    role: '',
    companySize: '',
    industry: '',
    interests: [],
    preferredDate: '',
    preferredTime: '',
    message: ''
  });
  const [isSubmittedsetIsSubmitted] = useState(false);
  const handleInputChange = (field: keyof DemoFormDatavalue: string | string[]) => {
    setFormData(prev => ({ ...prev[field]: value }));
  };
  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interestsinterest]
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Demo request submitted:'formData);
    setIsSubmitted(true);
  };
  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };
  return (
    <>
      {/* Floating Demo Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center z-50"
      >
        <Calendar className="w-5 h-5 mr-2" />
        Request Demo
      </button>

      {/* Modal */}
      <div>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">Schedule Your Free Demo</h2>
                    <p className="text-blue-100 mt-1">See how our AI solutions can transform your business</p>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex space-x-2">
                    {[123].map((step) => (
                      <div
                        key={step}
                        className={`flex-1 h-2 rounded-full ${
                          step <= currentStep ? 'bg-white' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  <div className="flex justify-between mt-2 text-sm">
                    <span>Personal Info</span>
                    <span>Business Details</span>
                    <span>Schedule</span>
              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                {isSubmitted ? (
                  <div
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Demo Request Submitted!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for your interest. Our team will contact you within 24 hours to schedule your demo.
                    <button
                      onClick={() => setIsOpen(false)}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                      {/* Step 1: Personal Information */}
                      {currentStep === 1 && (
                        <div
                          key="step1"
                          className="space-y-6"
                        >
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                              <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => handleInputChange(', 'name', 'e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="John Doe"
                              />
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                              <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => handleInputChange(', 'email', 'e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="john@company.com"
                              />
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                              <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleInputChange(', 'phone', 'e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="+1 (555) 123-4567"
                              />
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Role *</label>
                              <input
                                type="text"
                                required
                                value={formData.role}
                                onChange={(e) => handleInputChange(', 'role', 'e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="CTOCEOetc."
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      {/* Step 2: Business Details */}
                      {currentStep === 2 && (
                        <div
                          key="step2"
                          className="space-y-6"
                        >
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Details</h3>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                            <input
                              type="text"
                              required
                              value={formData.company}
                              onChange={(e) => handleInputChange(', 'company', 'e.target.value)}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Your Company"
                            />
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Company Size *</label>
                              <select
                                required
                                value={formData.companySize}
                                onChange={(e) => handleInputChange(', 'companySize', 'e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              >
                                <option value="">Select size</option>
                                {companySizes.map(size => (
                                  <option key={size} value={size}>{size}</option>
                                ))}
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Industry *</label>
                              <select
                                required
                                value={formData.industry}
                                onChange={(e) => handleInputChange(', 'industry', 'e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              >
                                <option value="">Select industry</option>
                                {industries.map(industry => (
                                  <option key={industry} value={industry}>{industry}</option>
                                ))}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Areas of Interest</label>
                            <div className="grid grid-cols-2 gap-2">
                              {interests.map(interest => (
                                <button
                                  key={interest}
                                  type="button"
                                  onClick={() => handleInterestToggle(interest)}
                                  className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    formData.interests.includes(interest)
                                      ? 'bg-blue-100 text-blue-700 border-2 border-blue-300'
                                      : 'bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-gray-300'
                                  }`}
                                >
                                  {interest}
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                      {/* Step 3: Schedule */}
                      {currentStep === 3 && (
                        <div
                          key="step3"
                          className="space-y-6"
                        >
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">Schedule Your Demo</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                              <input
                                type="date"
                                required
                                value={formData.preferredDate}
                                onChange={(e) => handleInputChange(', 'preferredDate', 'e.target.value)}
                                min={new Date().toISOString().split('T')[0]}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
                              <select
                                required
                                value={formData.preferredTime}
                                onChange={(e) => handleInputChange(', 'preferredTime', 'e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              >
                                <option value="">Select time</option>
                                {timeSlots.map(time => (
                                  <option key={time} value={time}>{time}</option>
                                ))}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
                            <textarea
                              value={formData.message}
                              onChange={(e) => handleInputChange(', 'message', 'e.target.value)}
                              rows={4}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Tell us about your specific needs or questions..."
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </form>
                )}
              {/* Footer */}
              {!isSubmitted && (
                <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
                  {currentStep > 1 && (
                    <button
                      onClick={prevStep}
                      className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      Back
                  )}
                  <div className="flex-1" />
                  {currentStep < 3 ? (
                    <button
                      onClick={nextStep}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center"
                    >
                      Next
                      <ArrowRight className="w-4 h-4 ml-2" />
                  ) : (
                    <button
                      onClick={handleSubmit}
                      className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Demo
                  )}
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );



export default InteractiveDemoRequest;
