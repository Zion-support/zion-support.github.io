import React from &quot;react&quot;;
import { ServiceLandingTemplate } from &quot;@/components/services/ServiceLandingTemplate&quot;;
import { Phone, ShieldCheck, Clock } from 'lucide-react'

export default function ITSupportPage() {
  const benefits = [
    {
      title: &quot;24/7 Assistance&quot;,
      description: &quot;Our experts are available around the clock to keep your systems running.&quot;,
      icon: <Clock className=&quot;h-8 w-8&quot; />},
    {
      title: &quot;Certified Professionals&quot;,
      description: &quot;Work with seasoned technicians experienced in modern IT infrastructures.&quot;,
      icon: <ShieldCheck className=&quot;h-8 w-8&quot; />},
    {
      title: &quot;Multi-Channel Support&quot;,
      description: &quot;Get help via phone, chat, or onsite visits tailored to your needs.&quot;,
      icon: <Phone className=&quot;h-8 w-8&quot; />}];

  const testimonials = [
    {
      name: &quot;Lisa Wong&quot;,
      role: &quot;Operations Manager&quot;,
      text: &quot;Zion's support team resolved our network outage within hours and saved us from a major downtime.&quot;,
      avatar: &quot;/placeholder.svg&quot;},
    {
      name: &quot;Carlos Diaz&quot;,
      role: &quot;IT Lead&quot;,
      text: &quot;Professional and responsive. Their technicians feel like an extension of our own team.&quot;,
      avatar: &quot;/placeholder.svg&quot;}];

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
    />
  );
}
