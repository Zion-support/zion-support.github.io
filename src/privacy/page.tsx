'use client'';
import React from 'react';';
import { Shield, Lock, Eye, Database, User, Mail, Phone, Calendar, CheckCircle, ArrowRight, Globe, Server, Key, FileText, AlertTriangle } from 'lucide-react';';';
export default function PrivacyPage() {;
const lastUpdated = 'January 1, 2024';';
const dataTypes = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      category: 'Personal Information','
      icon: User,
      description: 'Name, email address, phone number, company information','
      examples: ['Contact forms', 'Newsletter signups', 'Account creation']'
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      category: 'Usage Data','
      icon: Eye,
      description: 'Website interactions, pages visited, time spent','
      examples: ['Analytics data', 'User behavior', 'Performance metrics']'
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      category: 'Technical Data','
      icon: Server,
      description: 'IP address, browser type, device information','
      examples: ['Log files', 'Error reports', 'System diagnostics']'
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      category: 'Communication Data','
      icon: Mail,
      description: 'Messages, emails, support tickets','
      examples: ['Contact forms', 'Support requests', 'Email correspondence']'
    }
  ];
const rights = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: 'Right to Access','
      description: 'Request a copy of your personal data','
      icon: Eye
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: 'Right to Rectification','
      description: 'Correct inaccurate or incomplete data','
      icon: FileText
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: 'Right to Erasure','
      description: 'Request deletion of your personal data','
      icon: Database
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: 'Right to Portability','
      description: 'Receive your data in a structured format','
      icon: ArrowRight
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: 'Right to Object','
      description: 'Object to processing of your data','
      icon: AlertTriangle
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: 'Right to Restrict','
      description: 'Limit how we process your data','
      icon: Lock
    }
  ];
const securityMeasures = [
  // TODO: Add items
]
  // TODO: Add items
]
    'SSL/TLS encryption for data transmission','
    'Regular security audits and penetration testing','
    'Access controls and authentication systems','
    'Data backup and disaster recovery procedures','
    'Employee training on data protection','
    'Incident response and breach notification procedures''
  ]
  return (
  // TODO: Add parameters
)
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"relative py-20 lg: py-32 overflow-hidden"
<div className="
<div className="container mx-auto px-4 relative z-10"max-w-4 xl mx-auto text-center"
<h1 className="
              Privacy Policy,

            <p className="text-xl lg:text-2 xl text-gray-300 mb-8 leading-relaxed"flex flex-wrap justify-center gap-4"
<div className="
<Shield className="w-5 h-5 text-cyan-400"text-white font-medium"
              <div className="
<Lock className="w-5 h-5 text-purple-400"text-white font-medium"
              <div className="
<CheckCircle className="w-5 h-5 text-green-400"text-white font-medium"
      {/* Last Updated */}
      <section className="
<div className="container mx-auto px-4"max-w-4 xl mx-auto"
<div className="
<p className="text-gray-300"text-sm text-gray-400 mt-2"
                This privacy policy may be updated from time to time. We will notify you of any changes.
      {/* Introduction */}
      <section className="
<div className="container mx-auto px-4"max-w-4 xl mx-auto"
<h2 className="
            <div className="prose prose-lg prose-invert max-w-none"text-gray-300 mb-6"
                Zion Tech Group (" "our,"us") is committed to protecting your privacy and personal information. "text-gray-300 mb-6"
                By using our website or services, you agree to the collection and use of information in accordance with
                this policy. If you do not agree with the terms of this Privacy Policy, please do not access the site.
      {/* Information We Collect */}
      <section className="
<div className="container mx-auto px-4"max-w-6 xl mx-auto"
<h2 className="
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"bg-slate-800/50 rounded-lg p-6"
<div className="
<type.icon className="w-8 h-8 text-cyan-400"text-xl font-bold text-white"
                  <p className="
                  <div className="space-y-2"text-sm font-semibold text-cyan-400"
                    <ul className="
                      {type.examples.map((example, exampleIndex) => (
  // TODO: Add parameters
)
                        <li key={exampleIndex} className="text-sm text-gray-400 flex items-center"w-3 h-3 text-green-400 mr-2 flex-shrink-0"
                          {example}
                      ))}
              ))}
      {/* How We Use Your Information */}
      <section className="
<div className="container mx-auto px-4"max-w-4 xl mx-auto"
<h2 className="
            <div className="space-y-6"bg-slate-800/50 rounded-lg p-6"
<h3 className="
                <p className="text-gray-300"bg-slate-800/50 rounded-lg p-6"
<h3 className="
                <p className="text-gray-300"bg-slate-800/50 rounded-lg p-6"
<h3 className="
                <p className="text-gray-300"bg-slate-800/50 rounded-lg p-6"
<h3 className="
                <p className="text-gray-300"bg-slate-800/50 rounded-lg p-6"
<h3 className="
                <p className="text-gray-300"py-20 bg-slate-800/50"
<div className="
<div className="max-w-4 xl mx-auto"text-3 xl font-bold text-white mb-8 text-center"
            <p className="
              We implement appropriate technical and organizational measures to protect your personal information.
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"flex items-center space-x-3"
<CheckCircle className="
<span className="text-gray-300"py-20"
<div className="
<div className="max-w-6 xl mx-auto"text-3 xl font-bold text-white mb-12 text-center"
            <div className="
              {rights.map((right, index) => (
  // TODO: Add parameters
)
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center"w-12 h-12 text-cyan-400 mx-auto mb-4"
<h3 className="
                  <p className="text-gray-300 text-sm"py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20"
<div className="
<div className="max-w-4 xl mx-auto text-center"text-3 xl font-bold text-white mb-6"
            <p className="
              If you have any questions about this Privacy Policy or our data practices, please contact us.
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"flex items-center justify-center space-x-3"
<Mail className="
<span className="text-white"flex items-center justify-center space-x-3"
<Phone className="
<span className="text-white"flex items-center justify-center space-x-3"
<Globe className="
<span className="text-white"/contact""bg-cyan-500 text-white px-8 py-3 rounded-lg font-bold hover: bg-cyan-600 transition-colors inline-flex items-center"
<Mail className="
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
</p></h2>
</h2></h2>
</h2></h2>
</h2></h3>
</h3></h3>
</h3></h3>
</h3></h3>
</h4></ul>
</li></section>
</section></section>
</section></section>
</section></section>