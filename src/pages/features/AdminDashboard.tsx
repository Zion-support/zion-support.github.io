<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
import React from 'react'
import { Header } from '@/components/Header'
import { SEO } from '@/components/SEO'
import { GradientHeading } from '@/components/GradientHeading'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
export default function AdminDashboard() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',;
    name: 'Admin Dashboard',;
    description:;
      'Monitor marketplace activity, manage listings and view analytics in one place.';
    url: 'https://app.ziontechgroup.com/features/admin-dashboard',  };    "@context": "https://schema.org"
    "@type": "WebPage"
    "name": "Admin Dashboard",
    "description": "Monitor marketplace activity, manage listings and view analytics in one place."
    "url": "https://app.ziontechgroup.com/features/admin-dashboard"
  }
  return (
    <>
      <SEO
        title='Admin Dashboard'
        description='Gain insight into your marketplace with powerful administration tools.'
        keywords='admin dashboard, analytics, manage listings'
        canonical='https://app.ziontechgroup.com/features/admin-dashboard'
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
import React from "react",
import { Header } from "@/components/Header",
import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import Link from 'next/link';
export default function AdminDashboard() {

  const schema = {
    '@context': 'https://schema.org'
    '@type': 'WebPage'
    name: 'Admin Dashboard'
    description:
      'Monitor marketplace activity, manage listings and view analytics in one place.'
    url: 'https://app.ziontechgroup.com/features/admin-dashboard',  };    "@context": "https://schema.org"
    "@type": "WebPage"
    "name": "Admin Dashboard"
    "description": "Monitor marketplace activity, manage listings and view analytics in one place."
    "url": "https://app.ziontechgroup.com/features/admin-dashboard"
  }
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
import React from 'react';
import { Header } from '@/components/Header';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
}

export default function AdminDashboard() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Admin Dashboard',
    description:
      'Monitor marketplace activity, manage listings and view analytics in one place.',
    url: 'https://app.ziontechgroup.com/features/admin-dashboard',
  };

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
=======
import { Button } from "@/components/ui/button",
import Link from 'next/link',
export default function AdminDashboard() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Admin Dashboard",
    "description": "Monitor marketplace activity, manage listings and view analytics in one place.",
    "url": "https://app.ziontechgroup.com/features/admin-dashboard"
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  return (
    <>
      <SEO
<<<<<<< HEAD
        title='Admin Dashboard'
        description='Gain insight into your marketplace with powerful administration tools.'
        keywords='admin dashboard, analytics, manage listings'
        canonical='https://app.ziontechgroup.com/features/admin-dashboard'
=======
        title="Admin Dashboard"
        description="Gain insight into your marketplace with powerful administration tools."
        keywords="admin dashboard, analytics, manage listings"
        canonical="https://app.ziontechgroup.com/features/admin-dashboard"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
      <Header />
      <main className="bg-background text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <GradientHeading className="mb-4 text-center">Admin Dashboard</GradientHeading>
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">
            Visualize user activity, manage orders and keep your marketplace running smoothly.
          </p>
          <div className="relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden">
            <img
              src="https: //placehold.co/800x400"
              alt="Screenshot of admin dashboard"
              className="object-cover"
            />
          </div>
<<<<<<< HEAD
          <h2 className='text-2xl font-bold mb-4'>Benefits &amp; Use Cases</h2>
<<<<<<< HEAD
          <ul className='list-disc list-inside space-y-2 mb-8 text-zion-slate-light'>            <li>Track sales and service metrics in real time.</li>
            <li>Approve or remove listings with a few clicks.</li>
            <li>Assign roles and permissions to your team.</li>
          </ul>      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
      <Header />
      <main className="bg-background text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <GradientHeading className="mb-4 text-center">Admin Dashboard</GradientHeading>
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">
            Visualize user activity, manage orders and keep your marketplace running smoothly.
          </p>
          <div className="relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden">
            <img
              src="https: //placehold.co/800x400"
              alt="Screenshot of admin dashboard"
              className="object-cover"
            />
          </div>
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>
          <ul className="list-disc list-inside space-y-2 mb-8 text-zion-slate-light">
=======
          <ul className='list-disc list-inside space-y-2 mb-8 text-zion-slate-light'>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            <li>Track sales and service metrics in real time.</li>
            <li>Approve or remove listings with a few clicks.</li>
            <li>Assign roles and permissions to your team.</li>
          </ul>
<<<<<<< HEAD
          <h2 className='text-2xl font-bold mb-4'>
            Frequently Asked Questions
          </h2>
          <div className='space-y-4 mb-12'>
            <div>
              <p className='font-semibold'>Who can access the dashboard?</p>
              <p className='text-zion-slate-light'>
                Only authorized admins and moderators with the proper roles.
              </p>
            </div>
            <div>
              <p className='font-semibold'>Can I export reports?</p>
              <p className='text-zion-slate-light'>
                Yes, you can export data to CSV for further analysis.
              </p>
            </div>
          </div>
          <div className='text-center'>
            <Button size='lg' className='bg-zion-purple text-white' asChild>
<<<<<<< HEAD
              <Link href='/admin'>View Dashboard</Link>            </Button>            <div>
=======
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-12">
            <div>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <p className="font-semibold">Who can access the dashboard?</p>
              <p className="text-zion-slate-light">Only authorized admins and moderators with the proper roles.</p>
            </div>
            <div>
              <p className="font-semibold">Can I export reports?</p>
              <p className="text-zion-slate-light">Yes, you can export data to CSV for further analysis.</p>
            </div>
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-zion-purple text-white" asChild>
              <Link href="/admin">View Dashboard</Link>
=======
              <Link href='/admin'>View Dashboard</Link>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            </Button>
          </div>
        </div>
      </main>
    </>
<<<<<<< HEAD
<<<<<<< HEAD
  )
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
  );
};
=======
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",;
import { Header } from "@/components/Header",;
import { SEO } from "@/components/SEO",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Button } from "@/components/ui/button",;
import Link from 'next/link',;
export default function AdminDashboard() {;
  const schema = {;
    "@context": "https://schema.org",;
    "@type": "WebPage",;
    "name": "Admin Dashboard",;
    "description": "Monitor marketplace activity, manage listings and view analytics in one place.";
    "url": "https://app.ziontechgroup.com/features/admin-dashboard";
  };
  return (;
    <>;
      <SEO;
        title="Admin Dashboard";
        description="Gain insight into your marketplace with powerful administration tools.";
        keywords="admin dashboard, analytics, manage listings";
        canonical="https://app.ziontechgroup.com/features/admin-dashboard";
      />;
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script;
        type="application/ld+json";
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>;
      <Header />;
      <main className="bg-background text-white py-12">;
        <div className="container mx-auto px-4 md:px-6">;
          <GradientHeading className="mb-4 text-center">Admin Dashboard</GradientHeading>;
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">;
            Visualize user activity, manage orders and keep your marketplace running smoothly.;
          </p>;
          <div className="relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden">;
            <img;
              src="https: //placehold.co/800x400";
              alt="Screenshot of admin dashboard";
              className="object-cover";
            />;
          </div>;
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>;
          <ul className="list-disc list-inside space-y-2 mb-8 text-zion-slate-light">;
            <li>Track sales and service metrics in real time.</li>;
            <li>Approve or remove listings with a few clicks.</li>;
            <li>Assign roles and permissions to your team.</li>;
          </ul>;
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>;
          <div className="space-y-4 mb-12">;
            <div>;
              <p className="font-semibold">Who can access the dashboard?</p>;
              <p className="text-zion-slate-light">Only authorized admins and moderators with the proper roles.</p>;
            </div>;
            <div>;
              <p className="font-semibold">Can I export reports?</p>;
              <p className="text-zion-slate-light">Yes, you can export data to CSV for further analysis.</p>;
            </div>;
          </div>;
          <div className="text-center">;
            <Button size="lg" className="bg-zion-purple text-white" asChild>;
              <Link href="/admin">View Dashboard</Link>;
            </Button>;
          </div>;
        </div>;
      </main>;
    </>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
