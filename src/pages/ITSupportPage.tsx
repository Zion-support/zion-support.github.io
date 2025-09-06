<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { Phone, ShieldCheck, Clock } from 'lucide-react'
=======
import React from "react";
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate";
>>>>>>> import { Phone, ShieldCheck, Clock } from 'lucide-react'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react";
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate";
import React from 'react'
import { ServiceLandingTemplate } from '@/components/services/ServiceLandingTemplate'
import React from "react",
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate",
import { Phone, ShieldCheck, Clock } from 'lucide-react'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export default function ITSupportPage() {
  const benefits = [
    {import React from "react"
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate"
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
    {
      name: 'Lisa Wong'
      role: 'Operations Manager'
      text: "Zion's support team resolved our network outage within hours and saved us from a major downtime."
      avatar: '/placeholder.svg'
    }
    {
      name: 'Carlos Diaz'
      role: 'IT Lead'
      text: 'Professional and responsive. Their technicians feel like an extension of our own team.'
      avatar: '/placeholder.svg'
    }
  ]
    return (

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate",
=======
import React from "react";
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { Phone, ShieldCheck, Clock } from 'lucide-react'

<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export default function ITSupportPage() {
  const benefits = [
    {
      title: "24/7 Assistance",
      description: "Our experts are available around the clock to keep your systems running.",
      icon: <Clock className="h-8 w-8" />},
    {
      title: "Certified Professionals",
      description: "Work with seasoned technicians experienced in modern IT infrastructures.",
      icon: <ShieldCheck className="h-8 w-8" />},
    {
      title: "Multi-Channel Support",
      description: "Get help via phone, chat, or onsite visits tailored to your needs.",
      icon: <Phone className="h-8 w-8" />}],

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
  return (
<<<<<<< HEAD
=======
>>>>>>>     <ServiceLandingTemplate
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

    <ServiceLandingTemplate
>>>>>>>       title="IT Support Services"
      subtitle="Reliable assistance to keep your business technology operating smoothly."
      heroImage="https://placehold.co/600x300/192134/9b87f5?text=IT+Support"
      description="From troubleshooting to onsite repairs, Zion provides comprehensive IT support designed for businesses of all sizes."
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      benefits={benefits}
      testimonials={testimonials}
      ctaText="Get IT Support"
      ctaLink="/request-quote"
    />
  )
import React from "react",;
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate",;
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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

    return (



=======
      avatar: "/placeholder.svg"}],

  return (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    <ServiceLandingTemplate
      title="IT Support Services"
      subtitle="Reliable assistance to keep your business technology operating smoothly."
      heroImage="https://placehold.co/600x300/192134/9b87f5?text=IT+Support"
      description="From troubleshooting to onsite repairs, Zion provides comprehensive IT support designed for businesses of all sizes."
      benefits = {benefits,}
      testimonials = {testimonials,};
      ctaText="Get IT Support";
      ctaLink="/request-quote";
    />;
  );      benefits={benefits}
      testimonials={testimonials}
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      ctaText="Get IT Support";
      ctaLink="/request-quote";
    />;
  );
}
<<<<<<< HEAD
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
