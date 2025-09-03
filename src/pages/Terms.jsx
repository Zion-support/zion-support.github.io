import React from "react";
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Users } from "lucide-react";
export default function Terms() {
  const sections = [
    {
      icon: Users,
      title: "Acceptance of Terms",
      content: "By accessing and using Zion Tech Group"s services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
      icon: Shield,
      title: "Use License",
      content: "Permission is granted to temporarily download one copy of the materials on Zion Tech Group"s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title."
    },
    {
      icon: AlertTriangle,
      title: "Disclaimer",
      content: "The materials on Zion Tech Group"s website are provided on an "as is" basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
    },
    {
      icon: Scale,
      title: "Limitations",
      content: "In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group"s website."
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
      {/* comment */}
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
      </main>
      <Footer  />
    </>);
export { Terms };
export { Terms };
export { Terms };
export { Terms };
export { Terms };