<<<<<<< HEAD
export default function ItSolutionsPage() {
	return (
		<div className="min-h-screen py-20 px-4">
			<div className="max-w-5xl mx-auto">
				<h1 className="text-3xl font-bold mb-4">IT Solutions</h1>
				<p className="text-zinc-500">Managed IT, cloud, and infrastructure services.</p>
			</div>
		</div>
	);
}


=======
"use client";

import { useState } from "react";

interface ITService {
  id: string;
  name: string;
  description: string;
  deliverables: string[];
  timeline: string;
  pricing: string;
  startingPrice: number;
  contactLink: string;
  icon: string;
  features: string[];
  technologies: string[];
  industries: string[];
}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-7047










<<<<<<< HEAD
=======
      {/* CTA Section */}
      <div className="text-center space-y-6 py-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg border border-white/10">
        <h2 className="text-3xl font-bold">Ready to Modernize Your IT Infrastructure?</h2>
        <p className="text-xl opacity-80 max-w-2xl mx-auto">
          Let's discuss how our IT solutions can transform your technology landscape, 
          enhance security, and drive operational efficiency. Get in touch for a comprehensive IT assessment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=IT%20Solutions%20Consultation"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold text-lg"
          >
            Schedule IT Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border border-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all font-semibold text-lg"
          >
            Call: +1 302 464 0950
          </a>
        </div>
      </div>

      {/* Back to Services */}
      <div className="text-center">
        <a
          href="/services"
          className="inline-block px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all font-semibold"
        >
          ← Back to All Services
        </a>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-7047
