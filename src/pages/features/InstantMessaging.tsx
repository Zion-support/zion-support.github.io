import React from "react";
import Header from "@/components/Header";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function InstantMessaging() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <Header />
      <SEO title="Instant Messaging" description="Real-time messaging" />
      <div className="container mx-auto px-4 py-12">
        <GradientHeading>Instant Messaging</GradientHeading>
        <p className="text-zion-cyan text-center mt-4">
          Messaging features coming soon...
        </p>
      </div>
    </div>
  );
}