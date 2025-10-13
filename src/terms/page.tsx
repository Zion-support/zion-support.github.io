'use client'';
import React from 'react';';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, ArrowRight, Globe, User, Mail, Phone, Calendar, Lock, Database, Server, Key } from 'lucide-react';';';
export default function TermsPage() {;
const lastUpdated = 'January 1, 2024';';
const sections = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: 'Acceptance of Terms','
      icon: CheckCircle,
      content: 'By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: 'Use License','
      icon: Key,
      content: 'Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: 'Service Availability','
      icon: Server,
      content: 'We strive to maintain 99.9% uptime for our services, but we do not guarantee uninterrupted access and reserve the right to modify or discontinue services.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: 'User Responsibilities','
      icon: User,
      content: 'Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: 'Intellectual Property','
      icon: FileText,
      content: 'All content, trademarks, and intellectual property on our website are owned by Zion Tech Group and protected by applicable copyright and trademark laws.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: 'Limitation of Liability','
      icon: Shield,
      content: 'In no event shall Zion Tech Group be liable for any damages arising out of the use or inability to use our services.''
    }
  ];
const prohibitedUses = [
  // TODO: Add items
]
  // TODO: Add items
]
    'Violating any applicable laws or regulations','
    'Transmitting malicious code or harmful content','
    'Attempting to gain unauthorized access to our systems','
    'Interfering with the proper functioning of our services','
    'Using our services for illegal or unauthorized purposes','
    'Impersonating another person or entity','
    'Collecting user information without consent','
    'Engaging in any form of harassment or abuse''
  ];
const serviceLevels = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      service: 'AI Services','
      uptime: '99.9%','
      support: '24/7','
      response: '1 hour''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      service: 'IT Infrastructure','
      uptime: '99.95%','
      support: '24/7','
      response: '30 minutes''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      service: 'Cloud Services','
      uptime: '99.9%','
      support: '24/7','
      response: '1 hour''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      service: 'Support Services','
      uptime: 'N/A','
      support: 'Business Hours','
      response: '4 hours''
    }
  ]
  return (
  // TODO: Add parameters
)
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"relative py-20 lg: py-32 overflow-hidden"
<div className="
<div className="container mx-auto px-4 relative z-10"max-w-4 xl mx-auto text-center"
<h1 className="
              Terms of Service,

            <p className="text-xl lg:text-2 xl text-gray-300 mb-8 leading-relaxed"flex flex-wrap justify-center gap-4"
<div className="
<Scale className="w-5 h-5 text-cyan-400"text-white font-medium"
              <div className="
<Shield className="w-5 h-5 text-purple-400"text-white font-medium"
              <div className="
<CheckCircle className="w-5 h-5 text-green-400"text-white font-medium"
      {/* Last Updated */}
      <section className="
<div className="container mx-auto px-4"max-w-4 xl mx-auto"
<div className="
<p className="text-gray-300"text-sm text-gray-400 mt-2"
                These terms may be updated from time to time. Continued use of our services constitutes acceptance of any changes.
      {/* Key Terms */}
      <section className="
<div className="container mx-auto px-4"max-w-6 xl mx-auto"
<h2 className="
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"bg-slate-800/50 rounded-lg p-6"
<div className="
<section.icon className="w-8 h-8 text-cyan-400"text-xl font-bold text-white"
                  <p className="
              ))}
      {/* Prohibited Uses */}
      <section className="py-20 bg-slate-800/50"container mx-auto px-4"
<div className="
<h2 className="text-3 xl font-bold text-white mb-8 text-center"text-gray-300 mb-8 text-center"
              You may not use our services for any unlawful purpose or to solicit others to perform unlawful acts.
            <div className="
              {prohibitedUses.map((use, index) => (
  // TODO: Add parameters
)
                <div key={index} className="flex items-start space-x-3"w-5 h-5 text-red-400 mt-1 flex-shrink-0"
<span className="
              ))}
      {/* Service Level Agreements */}
      <section className="py-20"container mx-auto px-4"
<div className="
<h2 className="text-3 xl font-bold text-white mb-12 text-center"overflow-x-auto"
<table className="
<thead>
<tr className="bg-slate-700/50"px-6 py-4 text-left text-white font-semibold"
                    <th className="
                    <th className="px-6 py-4 text-left text-white font-semibold"px-6 py-4 text-left text-white font-semibold"
                <tbody>
                  {serviceLevels.map((level, index) => (
  // TODO: Add parameters
)
                    <tr key={index} className="
<td className="px-6 py-4 text-white font-medium"px-6 py-4 text-cyan-400"
                      <td className="
                      <td className="px-6 py-4 text-green-400"py-20 bg-slate-800/50"
<div className="
<div className="max-w-4 xl mx-auto"text-3 xl font-bold text-white mb-8 text-center"
            <div className="
<div className="bg-slate-800/50 rounded-lg p-6"text-xl font-bold text-white mb-3"
                <p className="
                  Services are billed monthly or annually as agreed upon in your service contract.
                  Payment is due within 30 days of invoice date.
              <div className="bg-slate-800/50 rounded-lg p-6"text-xl font-bold text-white mb-3"
                <p className="
                  Refunds are provided at our discretion and are subject to the terms of your specific service agreement.
                  No refunds for services already delivered.
              <div className="bg-slate-800/50 rounded-lg p-6"text-xl font-bold text-white mb-3"
                <p className="
                  Late payments may result in service suspension. A late fee of 1.5% per month may be applied to overdue accounts.
      {/* Termination */}
      <section className="py-20"container mx-auto px-4"
<div className="
<h2 className="text-3 xl font-bold text-white mb-8 text-center"space-y-6"
<div className="
<h3 className="text-xl font-bold text-white mb-3"text-gray-300"
                  You may terminate your account at any time by providing 30 days written notice.
                  Data will be provided in a standard format upon request.
              <div className="
<h3 className="text-xl font-bold text-white mb-3"text-gray-300"
                  We may terminate your account immediately if you violate these terms or engage in prohibited activities.
                  We will provide reasonable notice when possible.
              <div className="
<h3 className="text-xl font-bold text-white mb-3"text-gray-300"
                  Upon termination, your right to use our services ceases immediately.
                  We will retain your data for 90 days after termination for recovery purposes.
      {/* Governing Law */}
      <section className="
<div className="container mx-auto px-4"max-w-4 xl mx-auto text-center"
<h2 className="
            <p className="text-xl text-gray-300 mb-8"grid grid-cols-1 md:grid-cols-3 gap-6"
<div className="
<Globe className="w-5 h-5 text-cyan-400"text-white"
              <div className="
<Scale className="w-5 h-5 text-cyan-400"text-white"
              <div className="
<FileText className="w-5 h-5 text-cyan-400"text-white"
      {/* Contact Information */}
      <section className="
<div className="container mx-auto px-4"max-w-4 xl mx-auto text-center"
<h2 className="
            <p className="text-xl text-gray-300 mb-8"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
<div className="
<Mail className="w-5 h-5 text-cyan-400"text-white"
              <div className="
<Phone className="w-5 h-5 text-cyan-400"text-white"
              <div className="
<Globe className="w-5 h-5 text-cyan-400"text-white"
            <$2 />
              href=""
              className="
<Mail className="w-5 h-5 mr-2"
              Contact Us

          </div></div>
</section></div>
  ),
}
  </a></h1>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></span>
</span></span>
</span></span>
</span></span>
</span></span>
</span></p>
</p></p>
</p></p>
</p></p>
</p></p>
</p></p>
</p></p>
</h2></h2>
</h2></h2>
</h2></h2>
</h2></h3>
</h3></h3>
</h3></h3>
</h3></h3>
</section></section>
</section></section>
</section></section>
</section></section>
</section>