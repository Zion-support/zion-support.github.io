import { SEO } from "@/components/SEO";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/Footer";
import TermsOfService from "@/legal/TermsOfService";

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="The terms and conditions for using the Zion platform."
        canonical="https://ziontechgroup.com/terms"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <TermsOfService />
        </div>
      </main>
      <Footer />
    </>
  );
}
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
        canonical="https://ziontechgroup.com/terms"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <TermsOfService />
        </div>
      </main>
      <Footer />
    </>
  );
}
