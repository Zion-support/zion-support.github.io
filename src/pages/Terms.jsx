import React from 'react';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Users } from 'lucide-react';

export default function Terms() {
  const sections = [
    {
      icon: Users,
      title: "Acceptance of Terms",
      content: "By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
      icon: Shield,
      title: "Use License",
      content: "Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title."
    },
    {
      icon: AlertTriangle,
      title: "Disclaimer",
      content: "The materials on Zion Tech Group's website are provided on an 'as is' basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
    },
    {
      icon: Scale,
      title: "Limitations",
      content: "In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group's website."
    },
    {
      icon: FileText,
      title: "Accuracy of Materials",
      content: "The materials appearing on Zion Tech Group's website could include technical, typographical, or photographic errors. Zion Tech Group does not warrant that any of the materials on its website are accurate, complete, or current."
    },
    {
      icon: CheckCircle,
      title: "Modifications",
      content: "Zion Tech Group may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our services.
            </p>
            <div className="mt-8 text-sm text-gray-400">
              Last Updated: January 15, 2024
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </main>
      <Footer />
    </>);
}


export { Terms };

export { Terms };

export { Terms };

export { Terms };

export { Terms };
=======
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms of Service ("Terms") govern your use of Zion Tech Group's website and services. 
              By accessing or using our services, you agree to be bound by these Terms. If you disagree 
              with any part of these terms, then you may not access the service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {sections.map((section, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <section.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of 
              Delaware, United States, and you irrevocably submit to the exclusive jurisdiction of the 
              courts in that state or location.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="space-y-2">
                <p><strong>Email:</strong> legal@ziontechgroup.com</p>
                <p><strong>Phone:</strong> +1 (302) 464-0950</p>
                <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Important:</strong> These terms may be updated from time to time. 
                  We will notify users of any material changes by posting the new terms on this page. 
                  Your continued use of our services after any such changes constitutes your acceptance 
                  of the new terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> main
