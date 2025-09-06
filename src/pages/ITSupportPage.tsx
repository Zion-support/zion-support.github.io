import React from 'react';
import { ServiceLandingTemplate } from '@/components/services/ServiceLandingTemplate';
import { Phone, ShieldCheck, Clock } from 'lucide-react';
export default function ITSupportPage() {
  const benefits = [
    {
=======
import React from "react";
import {ServiceLandingTemplate} from "@/components/services/ServiceLandingTemplate";
import {Phone, ShieldCheck, Clock} from 'lucide-react'

export default function ITSupportPage() {
  const benefits = [
    {
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      title: '24/7 Assistance',
      description:
        'Our experts are available around the clock to keep your systems running.',
      icon: <Clock className='h-8 w-8' />,
    },
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    {
      title: 'Certified Professionals',
      description:
        'Work with seasoned technicians experienced in modern IT infrastructures.',
      icon: <ShieldCheck className='h-8 w-8' />,
    },
    {
      title: 'Multi-Channel Support',
      description:
        'Get help via phone, chat, or onsite visits tailored to your needs.',
      icon: <Phone className='h-8 w-8' />,
    },
  ];

  const testimonials = [
    {
      name: 'Lisa Wong',
      role: 'Operations Manager',
      text: "Zion's support team resolved our network outage within hours and saved us from a major downtime.",
      avatar: '/placeholder.svg',
    },
    {
      name: 'Carlos Diaz',
      role: 'IT Lead',
      text: 'Professional and responsive. Their technicians feel like an extension of our own team.',
      avatar: '/placeholder.svg',
    },
  ];

  
    />
  );
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
