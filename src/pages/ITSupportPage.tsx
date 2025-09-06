<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate";
import React from 'react';
import { ServiceLandingTemplate } from '@/components / services / ServiceLandingTemplate';
import { Phone, ShieldCheck, Clock } from 'lucide-react';
export default /**
 * ITSupportPage - Function description
 */
function ITSupportPage() {
  const benefits = [;
    {import React from './react';
import { ServiceLandingTemplate  } from '@/components / services / ServiceLandingTemplate';
import React from './react';
export default /**
 * ITSupportPage - Function description
 */
function ITSupportPage() {
  const benefits = [;
=======
import { Phone, ShieldCheck, Clock } from 'lucide-react'
export default function ITSupportPage() {
  const benefits = [
    {import React from "react"
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate"

  const benefits = [
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    {
      title: '24/7 Assistance'
      description:
        'Our experts are available around the clock to keep your systems running.'
      icon: <Clock className='h-8 w-8' />
    }
    {
      title: 'Certified Professionals'
      description:
        'Work with seasoned technicians experienced in modern IT infrastructures.'
      icon: <ShieldCheck className='h-8 w-8' />
    }
    {
<<<<<<< HEAD
      title: 'Multi - Channel Support',
      description:;
        'Get help via phone, chat, or onsite visits tailored to your needs.',
      icon: <Phone className='h - 8 w - 8' />,
    },
  ];
  const testimonials = [;

=======
import { Phone, ShieldCheck, Clock } from 'lucide-react'
import React from "react";
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate";
import React from "react";
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate";
import React from 'react'
import { ServiceLandingTemplate } from '@/components/services/ServiceLandingTemplate'
import React from "react",
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate",
import { Phone, ShieldCheck, Clock } from 'lucide-react'
export default function ITSupportPage() {
  const benefits = [
    {import React from "react"
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate"

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

import React from "react"
export default function ITSupportPage() {

  const benefits = [
    {
      title: '24/7 Assistance'
      description:
        'Our experts are available around the clock to keep your systems running.'
      icon: <Clock className='h-8 w-8' />
    }
    {
      title: 'Certified Professionals'
      description:
        'Work with seasoned technicians experienced in modern IT infrastructures.'
      icon: <ShieldCheck className='h-8 w-8' />
    }
    {
      title: 'Multi-Channel Support'
      description:
        'Get help via phone, chat, or onsite visits tailored to your needs.'
      icon: <Phone className='h-8 w-8' />
    }
  ]
  const testimonials = [
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    {
      name: 'Lisa Wong'
      role: 'Operations Manager'
      text: "Zion's support team resolved our network outage within hours and saved us from a major downtime."
      avatar: '/placeholder.svg'
    }
    {
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      name: 'Carlos Diaz'
      role: 'IT Lead'
      text: 'Professional and responsive. Their technicians feel like an extension of our own team.'
      avatar: '/placeholder.svg'
    }
  ]
    return (

<<<<<<< HEAD
import React from "react",
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from "react";
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate";
import { Phone, ShieldCheck, Clock } from 'lucide-react'

export default function ITSupportPage() {
  const benefits = [
    {
      title: "24/7 Assistance",
      description: "Our experts are available around the clock to keep your systems running.",
      icon: <Clock className = "h-8 w-8" />},
    {
      title: "Certified Professionals",
      description: "Work with seasoned technicians experienced in modern IT infrastructures.",
      icon: <ShieldCheck className = "h-8 w-8" />},
    {
      title: "Multi-Channel Support",
      description: "Get help via phone, chat, or onsite visits tailored to your needs.";
      icon: <Phone className = "h-8 w-8" />}],
  const testimonials = [
    {
      name: "Lisa Wong",
      role: "Operations Manager",
      text: "Zion's support team resolved our network outage within hours and saved us from a major downtime.",
      avatar: "/placeholder.svg"},
    {
      name: "Carlos Diaz",
      role: "IT Lead",
      text: "Professional and responsive. Their technicians feel like an extension of our own team.",
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
import { ServiceLandingTemplate } from '@/components/services/ServiceLandingTemplate';
import { Phone, ShieldCheck, Clock } from 'lucide-react';
export default function ITSupportPage() {;
  const benefits = [;
    {import React from "react";
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate";
import { Phone, ShieldCheck, Clock } from 'lucide-react';

import React from "react";
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate";

  return (
    <ServiceLandingTemplate
<<<<<<< HEAD
      title="IT Support Services"
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      subtitle="Reliable assistance to keep your business technology operating smoothly."
      heroImage="https://placehold.co/600x300/192134/9b87f5?text=IT+Support"
      description="From troubleshooting to onsite repairs, Zion provides comprehensive IT support designed for businesses of all sizes."
;
}
}

      benefits={benefits}
      testimonials={testimonials}
      ctaText="Get IT Support"
      ctaLink="/request-quote"
    />
  )
import React from "react",;
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate",;
import { Phone, ShieldCheck, Clock } from 'lucide-react';
export default function ITSupportPage() {;
  const benefits = [;
    {;
      name: 'Carlos Diaz',;
      role: 'IT Lead',;
      text: 'Professional and responsive. Their technicians feel like an extension of our own team.',;
      avatar: '/placeholder && placeholder.svg',;
    },;
  ];

    return (
<<<<<<< HEAD



<<<<<<< HEAD
=======
      avatar: "/placeholder.svg"}],

  return (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <ServiceLandingTemplate
      title="IT Support Services"
      subtitle="Reliable assistance to keep your business technology operating smoothly."
      heroImage="https://placehold.co/600x300/192134/9b87f5?text=IT+Support"
      description="From troubleshooting to onsite repairs, Zion provides comprehensive IT support designed for businesses of all sizes."
<<<<<<< HEAD
=======
      benefits = {benefits,}
      testimonials = {testimonials,};
      ctaText="Get IT Support";
      ctaLink="/request-quote";
    />;
  );      benefits={benefits}
      testimonials={testimonials}
      ctaText="Get IT Support"
      ctaLink="/request-quote"
    />
  )
}
;
}
}
      benefits={benefits}
      testimonials={testimonials}
      ctaText="Get IT Support"
      ctaLink="/request-quote"
    />
  )
import React from "react",;
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate",;
import { Phone, ShieldCheck, Clock } from 'lucide-react';
export default function ITSupportPage() {;
  const benefits = [;
    {;
      title: "24/7 Assistance",;
      description: "Our experts are available around the clock to keep your systems running.",;
      icon: <Clock className="h-8 w-8" />},;
    {;
      title: "Certified Professionals",;
      description: "Work with seasoned technicians experienced in modern IT infrastructures.",;
      icon: <ShieldCheck className="h-8 w-8" />},;
    {;
      title: "Multi-Channel Support",;
      description: "Get help via phone, chat, or onsite visits tailored to your needs.",;
      icon: <Phone className="h-8 w-8" />}],;
  const testimonials = [;
    {;
      name: "Lisa Wong",;
      role: "Operations Manager",;
      text: "Zion's support team resolved our network outage within hours and saved us from a major downtime.",;
      avatar: "/placeholder.svg"},;
    {;
      name: "Carlos Diaz",;
      role: "IT Lead",;
      text: "Professional and responsive. Their technicians feel like an extension of our own team.";
      avatar: "/placeholder.svg"}];
  return (;
    <ServiceLandingTemplate;
      title="IT Support Services";
      subtitle="Reliable assistance to keep your business technology operating smoothly.";
      heroImage="https://placehold.co/600x300/192134/9b87f5?text=IT+Support";
      description="From troubleshooting to onsite repairs, Zion provides comprehensive IT support designed for businesses of all sizes.";
      benefits={benefits}
      testimonials={testimonials}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      ctaText="Get IT Support";
      ctaLink="/request-quote";
    />;
  );
}
;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
