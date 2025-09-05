<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Header } from "@/components/Header",
import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
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
=======
import React from &quot;react&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import Link from 'next/link';

export default function AdminDashboard() {
  const schema = {
    &quot;@context&quot;: &quot;https://schema.org&quot;,
    &quot;@type&quot;: &quot;WebPage&quot;,
    &quot;name&quot;: &quot;Admin Dashboard&quot;,
    &quot;description&quot;: &quot;Monitor marketplace activity, manage listings and view analytics in one place.&quot;,
    &quot;url&quot;: &quot;https://app.ziontechgroup.com/features/admin-dashboard&quot;
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <>
      <SEO
        title=&quot;Admin Dashboard&quot;
        description=&quot;Gain insight into your marketplace with powerful administration tools.&quot;
        keywords=&quot;admin dashboard, analytics, manage listings&quot;
        canonical=&quot;https://app.ziontechgroup.com/features/admin-dashboard&quot;
      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script
        type=&quot;application/ld+json&quot;
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
      <Header />
      <main className=&quot;bg-background text-white py-12&quot;>
        <div className=&quot;container mx-auto px-4 md:px-6&quot;>
          <GradientHeading className=&quot;mb-4 text-center&quot;>Admin Dashboard</GradientHeading>
          <p className=&quot;text-center text-zion-slate-light max-w-3xl mx-auto mb-8&quot;>
            Visualize user activity, manage orders and keep your marketplace running smoothly.
          </p>
          <div className=&quot;relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden&quot;>
            <img
<<<<<<< HEAD
              src="https: //placehold.co/800x400"
              alt="Screenshot of admin dashboard"
              className="object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>
          <ul className="list-disc list-inside space-y-2 mb-8 text-zion-slate-light">
=======
              src=&quot;https://placehold.co/800x400&quot;
              alt=&quot;Screenshot of admin dashboard&quot;
              className=&quot;object-cover&quot;
            />
          </div>
          <h2 className=&quot;text-2xl font-bold mb-4&quot;>Benefits &amp; Use Cases</h2>
          <ul className=&quot;list-disc list-inside space-y-2 mb-8 text-zion-slate-light&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            <li>Track sales and service metrics in real time.</li>
            <li>Approve or remove listings with a few clicks.</li>
            <li>Assign roles and permissions to your team.</li>
          </ul>
          <h2 className=&quot;text-2xl font-bold mb-4&quot;>Frequently Asked Questions</h2>
          <div className=&quot;space-y-4 mb-12&quot;>
            <div>
              <p className=&quot;font-semibold&quot;>Who can access the dashboard?</p>
              <p className=&quot;text-zion-slate-light&quot;>Only authorized admins and moderators with the proper roles.</p>
            </div>
            <div>
              <p className=&quot;font-semibold&quot;>Can I export reports?</p>
              <p className=&quot;text-zion-slate-light&quot;>Yes, you can export data to CSV for further analysis.</p>
            </div>
          </div>
          <div className=&quot;text-center&quot;>
            <Button size=&quot;lg&quot; className=&quot;bg-zion-purple text-white&quot; asChild>
              <Link href=&quot;/admin&quot;>View Dashboard</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  )
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;