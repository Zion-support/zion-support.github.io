import React from 'react';
import SEOHead from "@/components/SEOHead";
import { GradientHeading } from "@/components/GradientHeading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, CheckCircle, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
export default function EnterpriseDemo() {
    return (<>
      <SEOHead title="Enterprise Demo - Zion Tech Group" description="Schedule a personalized demo of Zion's enterprise solutions for AI hiring, talent management, and marketplace services." keywords="enterprise demo, AI hiring demo, talent management demo, Zion enterprise" canonical="https://ziontechgroup.com/enterprise/demo"/>
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <GradientHeading>Enterprise Demo</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Experience how Zion's AI-powered platform can transform your talent acquisition and marketplace operations
            </p>
          </div>







