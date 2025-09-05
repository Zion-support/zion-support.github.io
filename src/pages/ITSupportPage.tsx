<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate",
=======
import React from &quot;react&quot;;
import { ServiceLandingTemplate } from &quot;@/components/services/ServiceLandingTemplate&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { Phone, ShieldCheck, Clock } from 'lucide-react'
=======
import React from "react";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default function ITSupportPage() {_const _benefits = [
    {
<<<<<<< HEAD
      title: &quot;24/7 Assistance&quot;,
      description: &quot;Our experts are available around the clock to keep your systems running.&quot;,
      icon: <Clock className=&quot;h-8 w-8&quot; />},
    {
      title: &quot;Certified Professionals&quot;,
      description: &quot;Work with seasoned technicians experienced in modern IT infrastructures.&quot;,
      icon: <ShieldCheck className=&quot;h-8 w-8&quot; />},
    {
<<<<<<< HEAD
      title: "Multi-Channel Support",
      description: "Get help via phone, chat, or onsite visits tailored to your needs.",
      icon: <Phone className="h-8 w-8" />}],
=======
      title: &quot;Multi-Channel Support&quot;,
      description: &quot;Get help via phone, chat, or onsite visits tailored to your needs.&quot;,
      icon: <Phone className=&quot;h-8 w-8&quot; />}];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const testimonials = [
    {
      name: &quot;Lisa Wong&quot;,
      role: &quot;Operations Manager&quot;,
      text: &quot;Zion's support team resolved our network outage within hours and saved us from a major downtime.&quot;,
      avatar: &quot;/placeholder.svg&quot;},
    {
<<<<<<< HEAD
      name: "Carlos Diaz",
      role: "IT Lead",
      text: "Professional and responsive. Their technicians feel like an extension of our own team.",
      avatar: "/placeholder.svg"}],
=======
      name: &quot;Carlos Diaz&quot;,
      role: &quot;IT Lead&quot;,
      text: &quot;Professional and responsive. Their technicians feel like an extension of our own team.&quot;,
      avatar: &quot;/placeholder.svg&quot;}];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <ServiceLandingTemplate
      title=&quot;IT Support Services&quot;
      subtitle=&quot;Reliable assistance to keep your business technology operating smoothly.&quot;
      heroImage=&quot;https://placehold.co/600x300/192134/9b87f5?text=IT+Support&quot;
      description=&quot;From troubleshooting to onsite repairs, Zion provides comprehensive IT support designed for businesses of all sizes.&quot;
      benefits={benefits}
      testimonials={testimonials}
      ctaText=&quot;Get IT Support&quot;
      ctaLink=&quot;/request-quote&quot;
=======
      title: "24/7 Assistance", _description: "Our experts are available around the clock to keep your systems running.", _icon: <Clock className="h-8 w-8" />},
    {_title: "Certified Professionals", _description: "Work with seasoned technicians experienced in modern IT infrastructures.", _icon: <ShieldCheck className="h-8 w-8" />},
    {_title: "Multi-Channel Support", _description: "Get help via phone, _chat, _or onsite visits tailored to your needs.", _icon: <Phone className="h-8 w-8" />}];

  const _testimonials = [
    {_name: "Lisa Wong", _role: "Operations Manager", _text: "Zion's support team resolved our network outage within hours and saved us from a major downtime.", _avatar: "/placeholder.svg"},
    {_name: "Carlos Diaz", _role: "IT Lead", _text: "Professional and responsive. Their technicians feel like an extension of our own team.", _avatar: "/placeholder.svg"}];

  return (
    <ServiceLandingTemplate
      title="IT Support Services"
      subtitle="Reliable assistance to keep your business technology operating smoothly."
      heroImage="https://placehold.co/600x300/192134/9b87f5?text=IT+Support"
      description="From troubleshooting to onsite repairs, Zion provides comprehensive IT support designed for businesses of all sizes."
      benefits={_benefits}
      testimonials={_testimonials}
      ctaText="Get IT Support"
      ctaLink="/request-quote"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    />
  )
}
