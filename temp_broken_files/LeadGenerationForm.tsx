
interface LeadGenerationFormProps {
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'compact' | 'modal';
  onSuccess?: (data: any) => void;
}
const LeadGenerationForm: React.FC<LeadGenerationFormProps> = ({
  title = "Get Your Free AI Consultation",
  subtitle = "Discover how our AI solutions can transform your business",
  variant = 'default',
  onSuccess
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    message: '',
    interests: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const industries = [
    'Technology', 'Healthcare', 'Finance', 'Manufacturing', 
    'Retail', 'Education', 'Government', 'Other'
  ];
  const interests = [
    'AI & Machine Learning',
    'Quantum Computing',
    'Neural Interfaces',
    'Automation',
    'Data Analytics',
    'Custom Development'
  ];
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      onSuccess?.(formData);
    }, 2000);
  };
  if (isSubmitted) {
    return (
      <div
        className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center text-white"
      >
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-3xl font-bold mb-4">Thank You!</h3>
        <p className="text-xl opacity-90 mb-6">
          Your consultation request has been submitted. Our AI experts will contact you within 24 hours.
        </p>
        <div className="bg-white/20 rounded-lg p-4">
          <p className="text-sm">
            📧 Check your email for confirmation and next steps
          </p>
        </div>
      </div>
    );
  }
  const containerClasses = variant === 'compact' 
    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6'
    : variant === 'modal'
    ? 'bg-white rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto'
    : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8';
  const textColor = variant === 'modal' ? 'text-gray-900' : 'text-white';
const LeadGenerationForm: React.FC = () => {
  return (
    <div
      whileInView={{ opacity: 1, y: 0 }}
      className={containerClasses}
    >
      <div className="text-center mb-8">
        <h2 className={`text-3xl font-bold mb-4 ${textColor}`}>
          {title}
        </h2>
        <p className={`text-lg opacity-90 ${textColor}`}>
          {subtitle}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className={`block text-sm font-semibold mb-2 ${textColor}`}>
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className={`w-full px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 backdrop-blur-sm ${textColor} placeholder-gray-300 focus:outline-none focus:border-white/50 transition-colors`}
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className={`block text-sm font-semibold mb-2 ${textColor}`}>
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={`w-full px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 backdrop-blur-sm ${textColor} placeholder-gray-300 focus:outline-none focus:border-white/50 transition-colors`}
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className={`block text-sm font-semibold mb-2 ${textColor}`}>
              Company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 backdrop-blur-sm ${textColor} placeholder-gray-300 focus:outline-none focus:border-white/50 transition-colors`}
              placeholder="Your company name"
            />
          </div>
          <div>
            <label className={`block text-sm font-semibold mb-2 ${textColor}`}>
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 backdrop-blur-sm ${textColor} placeholder-gray-300 focus:outline-none focus:border-white/50 transition-colors`}
              placeholder="Your phone number"
            />
          </div>
        </div>
        <div>
          <label className={`block text-sm font-semibold mb-2 ${textColor}`}>
            Industry
          </label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 backdrop-blur-sm ${textColor} focus:outline-none focus:border-white/50 transition-colors`}
          >
            <option value="">Select your industry</option>
            {industries.map(industry => (
              <option key={industry} value={industry} className="text-gray-900">
                {industry}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={`block text-sm font-semibold mb-2 ${textColor}`}>
            Areas of Interest
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {interests.map(interest => (
              <button
                key={interest}
                type="button"
                onClick={() => handleInterestToggle(interest)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  formData.interests.includes(interest)
                    ? 'bg-white text-indigo-600'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {interest}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className={`block text-sm font-semibold mb-2 ${textColor}`}>
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className={`w-full px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 backdrop-blur-sm ${textColor} placeholder-gray-300 focus:outline-none focus:border-white/50 transition-colors resize-none`}
            placeholder="Tell us about your project or specific needs..."
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white text-indigo-600 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Get Free Consultation →'}
        </button>
        <p className={`text-sm text-center opacity-75 ${textColor}`}>
          🔒 Your information is secure and will never be shared
        </p>
      </form>
import React from "react";
    </div>
  );
};

const LeadGenerationForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">LeadGenerationForm</h1>
          <p className="text-xl opacity-90">Coming soon - Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );

export default LeadGenerationForm;
