import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Learn how Zion Tech Group handles your data and protects your privacy."
        canonical="https://ziontechgroup.com/privacy"
      />
      <Header />
import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
const Privacy: React.FC = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy - Zion Tech Group" 
        description="Learn about how Zion Tech Group collects, uses, and protects your personal information." 
        keywords="privacy policy, data protection, Zion Tech Group, personal information"
        canonical="https://ziontechgroup.com/privacy"
      />
  );
};
export default Privacy;
