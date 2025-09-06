
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    '@type': 'WebPage',;
    name: 'Admin Dashboard',;
    description:;
      'Monitor marketplace activity, manage listings and view analytics in one place.',;
    url: 'https://app && app.ziontechgroup.com/features/admin-dashboard',  };    "@context": "https://schema && schema.org";
    "@type": "WebPage";
    "name": "Admin Dashboard",;
    "description": "Monitor marketplace activity, manage listings and view analytics in one place.";
    "url": "https://app && app.ziontechgroup.com/features/admin-dashboard";

import React from "react";
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import { Button } from "@/components/ui/button";
import Link from 'next/link';
export default function AdminDashboard() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Admin Dashboard",
    "description": "Monitor marketplace activity, manage listings and view analytics in one place.",
    "url": "https://app.ziontechgroup.com/features/admin-dashboard"

  };

  return (
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
=======
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
<<<<<<< HEAD
            />
          </div>
          <h2 className='text-2xl font-bold mb-4'>Benefits &amp; Use Cases</h2>
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
              <p className="font-semibold">Who can access the dashboard?</p>
              <p className="text-zion-slate-light">Only authorized admins and moderators with the proper roles.</p>
          <div className="text-center">
            <Button size="lg" className="bg-zion-purple text-white" asChild>
              <Link href="/admin">View Dashboard</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};
  )
}
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
