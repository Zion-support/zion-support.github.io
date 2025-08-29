import React from 'react';
import { SEO } from '@/components/SEO';

function MicroCRM() {
  return (
    <div className="min-h-screen bg-futuristic text-white">
      <SEO 
        title="Micro CRM for Local Businesses"
        description="Lightweight customer tracking, reminders, invoices, and reviews for local SMBs."
      />
      <section className="container-responsive section-padding">
        <h1 className="heading-responsive text-gradient">Micro CRM</h1>
        <p className="mt-4 max-w-3xl text-zion-slate-light text-responsive">
          Essential CRM without bloat. Track customers, appointments, jobs, and invoices with
          SMS reminders, online payments, and review requests to grow word‑of‑mouth.
        </p>
        <div className="grid-futuristic mt-10">
          <div className="card-futuristic">
            <h2 className="text-xl font-semibold mb-2">Highlights</h2>
            <ul className="list-disc pl-5 space-y-2 text-zion-slate-light">
              <li>Contacts, pipelines, and tasks in one view</li>
              <li>SMS/email appointment reminders and confirmations</li>
              <li>Invoices and online payments with Stripe</li>
              <li>Automated Google review requests after service</li>
              <li>Mobile‑first with offline mode</li>
            </ul>
          </div>
          <div className="card-futuristic">
            <h2 className="text-xl font-semibold mb-2">Pricing</h2>
            <ul className="list-disc pl-5 space-y-2 text-zion-slate-light">
              <li>Solo: $19/mo</li>
              <li>Team: $79/mo up to 10 users</li>
              <li>Business: $199/mo with custom fields and roles</li>
            </ul>
            <a href="/request-quote" className="btn-futuristic mt-4 inline-block">Get started</a>
          </div>
        </div>
        <p className="mt-10 text-sm text-zion-slate-light">
          See details at <a className="text-cyan-400 underline" href="https://ziontechgroup.com/services" target="_blank" rel="noreferrer">ziontechgroup.com/services</a>
        </p>
      </section>
    </div>
  );
}

export default MicroCRM;

