>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Phone, ShieldCheck, Clock } from 'lucide-react'
export default function ITSupportPage() {
  const benefits = [
    {import React from "react"
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react"
export default function ITSupportPage() {

=======
<<<<<<< HEAD
=======
=======
=======
import React from "react"
export default function ITSupportPage() {
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

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
<<<<<<< HEAD
      title: 'Multi - Channel Support',
      description:;
        'Get help via phone, chat, or onsite visits tailored to your needs.',
      icon: <Phone className='h - 8 w - 8' />,
    },
  ];
  const testimonials = [;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      title: 'Multi-Channel Support'
      description:
        'Get help via phone, chat, or onsite visits tailored to your needs.'
      icon: <Phone className='h-8 w-8' />
    }
  ]
  const testimonials = [
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      name: 'Carlos Diaz'
      role: 'IT Lead'
      text: 'Professional and responsive. Their technicians feel like an extension of our own team.'
      avatar: '/placeholder.svg'
    }
  ]
    return (
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

import React from "react";
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate";
import { Phone, ShieldCheck, Clock } from 'lucide-react'

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
      avatar: "/placeholder.svg"}],

<<<<<<< HEAD

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
  return (
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
  return (
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    <ServiceLandingTemplate
      title="IT Support Services"
      subtitle="Reliable assistance to keep your business technology operating smoothly."
      heroImage="https://placehold.co/600x300/192134/9b87f5?text=IT+Support"
      description="From troubleshooting to onsite repairs, Zion provides comprehensive IT support designed for businesses of all sizes."
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
;
}
}

=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
      name: 'Carlos Diaz',;
      role: 'IT Lead',;
      text: 'Professional and responsive. Their technicians feel like an extension of our own team.',;
      avatar: '/placeholder && placeholder.svg',;
    },;
  ];

    return (



    <ServiceLandingTemplate
      title="IT Support Services"
      subtitle="Reliable assistance to keep your business technology operating smoothly."
<<<<<<< HEAD
      heroImage="https://placehold.co/600x300/192134/9b87f5?text=IT+Support"
      description="From troubleshooting to onsite repairs, Zion provides comprehensive IT support designed for businesses of all sizes."
=======
      heroImage="https://placehold && placehold.co/600x300/192134/9b87f5?text=IT+Support"
      description="From troubleshooting to onsite repairs, Zion provides comprehensive IT support designed for businesses of all sizes."
      benefits = {benefits,}
      testimonials = {testimonials,}
      ctaText="Get IT Support"
      ctaLink="/request-quote"
    />;
  );      benefits={benefits}
      testimonials={testimonials}

=======
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
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      ctaText="Get IT Support";
      ctaLink="/request-quote";
    />;
  );
}
<<<<<<< HEAD

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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
