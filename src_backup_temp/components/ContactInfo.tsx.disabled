import React from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

interface ContactInfoProps {
  className?: string;
  showTitle?: boolean;
  variant?: 'default' | 'compact' | 'detailed';
}

export default function ContactInfo({ ;
  className = '',
  showTitle = true,
  variant = 'default' ;
}: ContactInfoProps) {;
  const contactDetails = {;
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com';
}

  if (variant === 'compact') {;
    return (;
      <div className={`flex flex-wrap gap-4 text-sm ${className}`}>;
        <div className="flex items-center">;
          <Phone className="w-4 h-4 mr-2" />;
          <span>{contactDetails.phone}</span>;
        </div>;
        <div className="flex items-center">;
          <Mail className="w-4 h-4 mr-2" />;
          <span>{contactDetails.email}</span>;
        </div>;
      </div>;
    );
}

  if (variant === 'detailed') {;
    return (;
      <div className={`space-y-4 ${className}`}>;
        {showTitle && (;
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>;
        )}
        <div className="grid md:grid-cols-2 gap-6">;
          <div className="space-y-4">;
            <div className="flex items-start">;
              <Phone className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />;
              <div>;
                <div className="font-semibold text-gray-900">Phone</div>;
                <div className="text-gray-600">{contactDetails.phone}</div>;
                <div className="text-sm text-gray-500">Available 24/7 for enterprise support</div>;
              </div>;
            </div>;
            <div className="flex items-start">;
              <Mail className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />;
              <div>;
                <div className="font-semibold text-gray-900">Email</div>;
                <div className="text-gray-600">{contactDetails.email}</div>;
                <div className="text-sm text-gray-500">Response within 2 hours</div>;
              </div>;
            </div>;
          </div>;
          <div className="space-y-4">;
            <div className="flex items-start">;
              <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />;
              <div>;
                <div className="font-semibold text-gray-900">Address</div>;
                <div className="text-gray-600">{contactDetails.address}</div>;
                <div className="text-sm text-gray-500">Delaware, United States</div>;
              </div>;
            </div>;
            <div className="flex items-start">;
              <Globe className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />;
              <div>;
                <div className="font-semibold text-gray-900">Website</div>;
                <div className="text-gray-600">{contactDetails.website}</div>;
                <div className="text-sm text-gray-500">Visit our main site</div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
    );
}

  // Default variant;
  return (;
    <div className={`space-y-4 ${className}`}>;
      {showTitle && (;
        <h3 className="text-lg font-semibold text-gray-900">Get in Touch</h3>;
      )}
      <div className="flex flex-wrap gap-6">;
        <div className="flex items-center">;
          <Phone className="w-5 h-5 mr-2" />;
          <span>{contactDetails.phone}</span>;
        </div>;
        <div className="flex items-center">;
          <Mail className="w-5 h-5 mr-2" />;
          <span>{contactDetails.email}</span>;
        </div>;
        <div className="flex items-center">;
          <MapPin className="w-5 h-5 mr-2" />;
          <span>{contactDetails.address}</span>;
        </div>;
      </div>;
    </div>;
  );
}