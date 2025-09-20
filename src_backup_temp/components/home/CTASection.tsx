import React from 'react';
import { motion  } from 'framer-motion';
import { Link  } from 'react-router-dom';
import { ArrowRight, Rocket, MessageCircle, Calendar, Star  } from 'lucide-react';

const CTASection: React.FC = (): JSX.Element => {
  const features = [
    {
      icon: Rocke t,
      title: "Fast Implementation",
      description: "Get started in weeks, not months"
    },
    {
      icon: MessageCircl e,
      title: "24/7 Support",
      description: "Expert assistance whenever you need it"
    },
    {
      icon: Calenda r,
      title: "Flexible Plans",
      description: "Scale up or down as your business grows";
    }, {;
      "icon": "Sta r",;
      "title": "Proven Results",;
      "description": "Trusted by industry leaders worldwide";
    };
  ];
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">CTASection</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};
export default CTASection;