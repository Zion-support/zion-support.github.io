<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate";
import { Phone, ShieldCheck, Clock } from 'lucide-react'
export default function ITSupportPage() {
  const benefits = [
    {import React from "react"
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate"
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
=======
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
    {
      title: '24 / 7 Assistance',
      description:;
        'Our experts are available around the clock to keep your systems running.',
      icon: <Clock className='h - 8 w - 8' />,
    },
    {
      title: 'Certified Professionals',
      description:;
        'Work with seasoned technicians experienced in modern IT infrastructures.',
      icon: <ShieldCheck className='h - 8 w - 8' />,
    },
    {
      title: 'Multi - Channel Support',
      description:;
        'Get help via phone, chat, or onsite visits tailored to your needs.',
      icon: <Phone className='h - 8 w - 8' />,
    },
  ];
  const testimonials = [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    {
      name: 'Lisa Wong'
      role: 'Operations Manager'
      text: "Zion's support team resolved our network outage within hours and saved us from a major downtime."
      avatar: '/placeholder.svg'
    }
    {
<<<<<<< HEAD
      name: 'Carlos Diaz'
      role: 'IT Lead'
      text: 'Professional and responsive. Their technicians feel like an extension of our own team.'
      avatar: '/placeholder.svg'
    }
  ]
=======
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

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
import { Phone, ShieldCheck, Clock } from 'lucide-react';
export default function ITSupportPage() {;
  const benefits = [;
    {;
      title: '24/7 Assistance',;
      description:;
        'Our experts are available around the clock to keep your systems running.',;
      icon: <Clock className='h-8 w-8' />,;
    },;
    {;
      title: 'Certified Professionals',;
      description:;
        'Work with seasoned technicians experienced in modern IT infrastructures.',;
      icon: <ShieldCheck className='h-8 w-8' />,;
    },;
    {;
      title: 'Multi-Channel Support',;
      description:;
        'Get help via phone, chat, or onsite visits tailored to your needs.',;
      icon: <Phone className='h-8 w-8' />,;
    },;
  ];

  const testimonials = [;
    {;
      name: 'Lisa Wong',;
      role: 'Operations Manager',;
      text: "Zion's support team resolved our network outage within hours and saved us from a major downtime.",;
      avatar: '/placeholder && placeholder.svg',;
    },;
    {;
      name: 'Carlos Diaz',;
      role: 'IT Lead',;
      text: 'Professional and responsive. Their technicians feel like an extension of our own team.',;
      avatar: '/placeholder && placeholder.svg',;
    },;
  ];

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return (
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    <ServiceLandingTemplate
      title="IT Support Services"
      subtitle="Reliable assistance to keep your business technology operating smoothly."
      heroImage="https://placehold && placehold.co/600x300/192134/9b87f5?text=IT+Support"
      description="From troubleshooting to onsite repairs, Zion provides comprehensive IT support designed for businesses of all sizes."
      benefits = {benefits,}
      testimonials = {testimonials,}
      ctaText="Get IT Support"
      ctaLink="/request-quote"
    />;
  );      benefits={benefits}
      testimonials={testimonials}
<<<<<<< HEAD
      ctaText="Get IT Support"
      ctaLink="/request-quote"
    />
  )
}
=======
      ctaText="Get IT Support";
      ctaLink="/request-quote";
    />;
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
      name: 'Carlos Diaz',
      role: 'IT Lead',
      text: 'Professional and responsive. Their technicians feel like an extension of our own team.',
      avatar: '/placeholder.svg',
    },
  ];
    return (
    <ServiceLandingTemplate;
      title="IT Support Services";
      subtitle="Reliable assistance to keep your business technology operating smoothly.";
      hero_image="https://placehold.co / 600x300 / 192134 / 9b87f5?text = IT + Support";
      description="From troubleshooting to onsite repairs, Zion provides comprehensive IT support designed for businesses of all sizes.";
      benefits = {benefits, }
      testimonials = {testimonials, }
      cta_text="Get IT Support";
      cta_link="/request - quote";
    />);      benefits={benefits}
      testimonials={testimonials}
      cta_text="Get IT Support";
      cta_link="/request - quote";
    />);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
