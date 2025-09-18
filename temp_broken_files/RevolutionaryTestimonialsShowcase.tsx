StarQuoteTrendingUpUsersAwardZap

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "CTO",
    company: "TechCorp Global",
    industry: "Technology",
    rating: 5,
    content: "Zion Tech 'Group', 's AI solutions transformed our entire operation. We achieved 300% ROI within the first year. Their expertise in automation is unmatched.",
    results: "300% ROI in 12 months",
    image: "/images/testimonials/sarah-chen.jpg",
    featured: true
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "VP of Operations",
    company: "Manufacturing Solutions Inc",
    industry: "Manufacturing",
    rating: 5,
    content: "The predictive maintenance system they implemented saved us $2M annually. Our downtime reduced by 80% and efficiency increased by 45%.",
    results: "$2M annual savings",
    image: "/images/testimonials/michael-rodriguez.jpg",
    featured: true
  },
  {
    id: 3,
    name: "Dr. Emily Watson",
    title: "Chief Medical Officer",
    company: "Regional Health Network",
    industry: "Healthcare",
    rating: 5,
    content: "Their AI diagnostic platform revolutionized our patient care. Diagnosis accuracy improved to 98% and processing time reduced by 90%.",
    results: "98% diagnosis accuracy",
    image: "/images/testimonials/emily-watson.jpg",
    featured: false
  },
  {
    id: 4,
    name: "James Park",
    title: "Head of Digital Innovation",
    company: "Financial Services Group",
    industry: "Finance",
    rating: 5,
    content: "Zion Tech 'Group', 's fraud detection system is incredible. We reduced false positives by 85% while catching 99.7% of actual fraud attempts.",
    results: "99.7% fraud detection",
    image: "/images/testimonials/james-park.jpg",
    featured: false
  },
  {
    id: 5,
    name: "Lisa Thompson",
    title: "CEO",
    company: "RetailMax Chain",
    industry: "Retail",
    rating: 5,
    content: "The AI-powered inventory optimization transformed our supply chain. We reduced costs by 35% and improved customer satisfaction by 60%.",
    results: "35% cost reduction",
    image: "/images/testimonials/lisa-thompson.jpg",
    featured: false
  },
  {
    id: 6,
    name: "David Kim",
    title: "Director of IT",
    company: "Logistics Pro",
    industry: "Logistics",
    rating: 5,
    content: "Their route optimization AI reduced our delivery times by 40% and fuel costs by 25%. The ROI was visible within 3 months of implementation.",
    results: "40% faster delivery",
    image: "/images/testimonials/david-kim.jpg",
    featured: false
  }
];

const stats = [
  { label: "Client Satisfaction"value: "98%"icon: Star },
  { label: "Average ROI"value: "250%"icon: TrendingUp },
  { label: "Projects Completed"value: "500+"icon: Award },
  { label: "Global Clients"value: "50+"icon: Users }
];

export default function RevolutionaryTestimonialsShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full px-6 py-2 mb-6">
            <Star className="w-4 h-4 mr-2 text-white" />
            <span className="text-sm font-semibold text-white">CLIENT SUCCESS STORIES</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say About Us
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            'Don', 't just take our word for it. Hear from industry leaders 'who', 've transformed their businesses 
            with our AI solutions and achieved extraordinary results.
          </p>
        </div>

        {/* Stats */}
        <div
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((statindex) => (
            <div
              key={stat.label}
              whileInView={{ opacity: 1scale: 1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl"
            >
              <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Testimonials */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {testimonials.filter(testimonial => testimonial.featured).map((testimonialindex) => (
            <div
              key={testimonial.id}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-200" />
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              {/* Content */}
              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              {/* Result Badge */}
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Zap className="w-4 h-4 mr-2" />
                {testimonial.results}
              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.name.split(' ').map(n => n[0]).join(', ')}
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}{testimonial.company}</div>
                  <div className="text-xs text-blue-600">{testimonial.industry}</div>
                </div>
              </div>
            </div>
          ))}
        {/* Additional Testimonials Grid */}
        <div
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.filter(testimonial => !testimonial.featured).map((testimonialindex) => (
            <div
              key={testimonial.id}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              {/* Content */}
              <blockquote className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.content}"
              {/* Result */}
              <div className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                {testimonial.results}
              {/* Author */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                  {testimonial.name.split(' ').map(n => n[0]).join(', ')}
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                  <div className="text-xs text-gray-600">{testimonial.title}</div>
                  <div className="text-xs text-blue-600">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Join Our Success Stories?
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            'Let', 's discuss how we can help you achieve similar results. 
            Our team is ready to transform your business with cutting-edge AI solutions.
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Users className="w-5 h-5 mr-2" />
              Schedule a Consultation
            <button className="border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors flex items-center justify-center">
              <Award className="w-5 h-5 mr-2" />
              View All Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


export default RevolutionaryTestimonialsShowcase;
import React from "react";

const function RevolutionaryTestimonialsShowcase() { = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">function RevolutionaryTestimonialsShowcase() {</h1>
          <p className="text-xl opacity-90">Coming soon - Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default function RevolutionaryTestimonialsShowcase() {;
