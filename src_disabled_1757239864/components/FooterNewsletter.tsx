import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Mail } from 'lucide-react';

export function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // Reset after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="bg-slate-800 border-t border-slate-700">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-lg font-semibold text-white mb-2">
            Stay Updated
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Get the latest news and updates from Zion Tech Group
          </p>
          
          {isSubscribed ? (
            <div className="flex items-center justify-center space-x-2 text-green-400">
              <Mail className="h-4 w-4" />
              <span className="text-sm">Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                required
              />
              <Button type="submit" size="sm">
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}