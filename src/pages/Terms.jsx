import React from 'react';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Users } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';

export default function Terms() {
  const termsSections = [
    {
      icon: FileText,
      title: "Service Agreement",
      description: "Terms governing the use of our platform and services"
    },
    {
      icon: Scale,
      title: "Legal Framework",
      description: "Legal terms and conditions for all users"
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "How we protect and handle your data"
    },
    {
      icon: AlertTriangle,
      title: "User Responsibilities",
      description: "Your obligations when using our services"
    },
    {
      icon: CheckCircle,
      title: "Compliance",
      description: "Regulatory compliance and standards"
    },
    {
      icon: Users,
      title: "Community Guidelines",
      description: "Rules for community interaction and behavior"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Terms of Service - Zion Tech Group" 
        description="Terms and conditions for using Zion Tech Group's AI marketplace and technology services." 
        keywords="terms of service, legal, agreement, conditions" 
        canonical="https://ziontechgroup.com/terms"
      />
      
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
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>modify or copy the materials</li>
            <li>use the materials for any commercial purpose or for any public display</li>
            <li>attempt to reverse engineer any software contained on the website</li>
            <li>remove any copyright or other proprietary notations from the materials</li>
          </ul>

          <h2>3. Service Availability</h2>
          <p>
            We strive to maintain high availability of our services, but we do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
          </p>

          <h2>4. User Accounts</h2>
          <p>
            When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
          </p>

          <h2>5. Prohibited Uses</h2>
          <p>You may not use our service:</p>
          <ul>
            <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
            <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
            <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
            <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
            <li>To submit false or misleading information</li>
          </ul>

          <h2>6. Content</h2>
          <p>
            Our service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content that you post to the service, including its legality, reliability, and appropriateness.
          </p>

          <h2>7. Privacy Policy</h2>
          <p>
            Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.
          </p>

          <h2>8. Termination</h2>
          <p>
            We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
          </p>

          <h2>9. Disclaimer</h2>
          <p>
            The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, this Company excludes all representations, warranties, conditions and terms relating to our website and the use of this website.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms shall be interpreted and governed by the laws of the United States, without regard to its conflict of law provisions.
          </p>

          <h2>11. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
          </p>

          <h2>12. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <ul>
            <li>Email: legal@ziontechgroup.com</li>
            <li>Phone: +1 (302) 464-0950</li>
            <li>Address: Zion Tech Group, Legal Department</li>
          </ul>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}