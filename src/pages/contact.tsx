import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Shield, 
  Award, 
  Users, 
  Zap 
} from 'lucide-react';

const Contact: Reac t.FC = () => {
  return (<>
      <SEO title="Contact - Zion Tech Group"  />
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact</h1>
          <p className="text-lg text-gray-600">Content coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;