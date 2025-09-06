


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

  return (

    <ServiceLandingTemplate
      title="IT Support Services"
      subtitle="Reliable assistance to keep your business technology operating smoothly."
      heroImage="https://placehold.co/600x300/192134/9b87f5?text=IT+Support"
      description="From troubleshooting to onsite repairs, Zion provides comprehensive IT support designed for businesses of all sizes."
<<<<<<< HEAD
=======

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



    <ServiceLandingTemplate
      title="IT Support Services"
      subtitle="Reliable assistance to keep your business technology operating smoothly."
      heroImage="https://placehold.co/600x300/192134/9b87f5?text=IT+Support"
      description="From troubleshooting to onsite repairs, Zion provides comprehensive IT support designed for businesses of all sizes."
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
