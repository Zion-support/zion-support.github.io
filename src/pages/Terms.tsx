
ursor/automate-test-improve-and-merge-code-646c
import React from 'react'; const Terms = () =>: any { return ( <div className="min - h-screen bg - gray - 50"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12"> <div className="text - center mb - 12"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 4"> Terms of Service </h1> <p className="text - xl text - gray - 600"> Terms and conditions for using our services. </p> </div> <div className="max - w-3xl mx - auto prose prose - lg"> <h2 > Acceptance of Terms</h2> <p > By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.</p> <h2 > Use License</h2> <p > Permission is granted to temporarily download one copy of the materials on our website for personal, non - commercial transitory viewing only.</p> <h2 > Disclaimer</h2> <p > The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.</p> <h2 > Limitations</h2> <p > In no event shall our company or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.</p> </div> </div> </div> )} export default Terms;
import React from 'react'; const Terms = () => { return ( <div className="min-h-screen bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div className="text-center mb-12"> <h1 className="text-4xl font-bold text-gray-900 mb-4"> Terms of Service </h1> <p className="text-xl text-gray-600"> Terms and conditions for using our services. </p> </div> <div className="max-w-3xl mx-auto prose prose-lg"> <h2>Acceptance of Terms</h2> <p>By accessing and using our services,you accept and agree to be bound by the terms and provision of this agreement.</p> <h2>Use License</h2> <p>Permission is granted to temporarily download one copy of the materials on our website for personal,non-commercial transitory viewing only.</p> <h2>Disclaimer</h2> <p>The materials on our website are provided on an 'as is' basis. We make no warranties,expressed or implied,and hereby disclaim and negate all other warranties.</p> <h2>Limitations</h2> <p>In no event shall our company or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.</p> </div> </div> </div> )}; export default Terms;

import React from "react";
const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {" "}
        <div className="text-center mb-12">
          {" "}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {" "}
            Terms of Service{" "}
          </h1>{" "}
          <p className="text-xl text-gray-600">
            {" "}
            Terms and conditions for using our services.{" "}
          </p>{" "}
        </div>{" "}
        <div className="max-w-3xl mx-auto prose prose-lg">
          {" "}
          <h2>Acceptance of Terms</h2>{" "}
          <p>
            By accessing and using our services,you accept and agree to be bound
            by the terms and provision of this agreement.
          </p>{" "}
          <h2>Use License</h2>{" "}
          <p>
            Permission is granted to temporarily download one copy of the
            materials on our website for personal,non-commercial transitory
            viewing only.
          </p>{" "}
          <h2>Disclaimer</h2>{" "}
          <p>
            The materials on our website are provided on an 'as is' basis. We
            make no warranties,expressed or implied,and hereby disclaim and
            negate all other warranties.
          </p>{" "}
          <h2>Limitations</h2>{" "}
          <p>
            In no event shall our company or its suppliers be liable for any
            damages arising out of the use or inability to use the materials on
            our website.
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Terms;
>>>>>>> main
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Terms: React.FC = () => {
  return (
    <>
      <SEO title="Terms of Service" description="Terms of Service page" url="/terms" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        <main className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Terms of Service</h1>
            <p className="text-xl text-gray-300">Coming soon...</p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Terms;
ursor/integrate-build-improve-and-re-verify-9d47
ursor/automate-test-improve-and-merge-code-646c
