import React from "react";

export default function ITSupportPage() {_const _benefits = [
    {
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
    />
  );
}
