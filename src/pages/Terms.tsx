import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

const Terms: React.FC = () => {
  return (
    <>
      <SEO 
        title="Terms of Service - Zion Tech Group" 
        description="Read the terms and conditions governing your use of Zion Tech Group's marketplace platform." 
        keywords="terms of service, terms and conditions, Zion Tech Group, user agreement"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <GradientHeading 
              title="Terms of Service"
              subtitle="Last updated: January 1, 2024"
              className="text-center mb-12"
            />
            
            <div className="prose prose-invert max-w-none">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              
              <h2>2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only.
              </p>
              
              <h2>3. Disclaimer</h2>
              <p>
                The materials on Zion Tech Group's website are provided on an 'as is' basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              
              <h2>4. Limitations</h2>
              <p>
                In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group's website, even if Zion Tech Group or a Zion Tech Group authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
              
              <h2>5. Accuracy of Materials</h2>
              <p>
                The materials appearing on Zion Tech Group's website could include technical, typographical, or photographic errors. Zion Tech Group does not warrant that any of the materials on its website are accurate, complete, or current.
              </p>
              
              <h2>6. Links</h2>
              <p>
                Zion Tech Group has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Zion Tech Group of the site.
              </p>
              
              <h2>7. Modifications</h2>
              <p>
                Zion Tech Group may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
              
              <h2>8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Terms;
