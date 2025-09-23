import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface NewsletterSignupProps {
  className?: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      if (email.includes('@')) {
        setStatus('success');
        setMessage('Thank you for subscribing! Check your email for confirmation.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage('Please enter a valid email address.');
      }
    }, 1000);
  };

  return (
    <div className={`bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white ${className}`}>
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-3xl font-bold mb-4">Stay Updated with Latest Tech</h3>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Get exclusive access to our latest research, breakthrough technologies, and industry insights. 
          Join 10,000+ tech leaders who trust our updates.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              required
              disabled={status === 'loading'}
            />
          </div>
          <motion.button
            type="submit"
            disabled={status === 'loading'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <div className="w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Subscribe</span>
              </>
            )}
          </motion.button>
        </div>

        {message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center space-x-2 text-sm ${
              status === 'success' ? 'text-green-300' : 'text-red-300'
            }`}
          >
            {status === 'success' ? (
              <CheckCircle className="w-4 h-4" />
            ) : (
              <AlertCircle className="w-4 h-4" />
            )}
            <span>{message}</span>
          </motion.div>
        )}
      </form>

      <div className="text-center mt-6">
        <p className="text-sm opacity-75">
          No spam, unsubscribe at any time. We respect your privacy.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;