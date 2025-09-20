              </p>,
            </div>,
            {/* Service Categories */}
            <div,
              className="space-y-4",
            >,
              <h3 className="text-lg font-semibold text-white mb-4">Service Categories</h3>,
              <div className="grid grid-cols-2 gap-4">,
                {categories.map((categoryindex) => (,
                  <div,
                    key={index}
                    className="bg-white/5 rounded-lg p-4 hover: bg-white/10 transition-all duration-300",
                  >,
                    <div className="flex items-center space-x-3">,
                      <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">,
                        <category.icon className="h-5 w-5 text-white" />,
                      <div>,
                        <div className="text-white font-medium">{category.name,}</div>,
                        <div className="text-gray-400 text-sm">{category.count} services</div>,
                      </div>,
                    </div>,
                  </div>,
                ))}
              </div>,
            </div>,
            {/* Key Benefits */}
            <div,
              className="space-y-3",
            >,
              <h3 className="text-lg font-semibold text-white mb-4">Why Choose Our Services</h3>,
              <div className="space-y-2">,
                {[,
                  "Expert AI professionals with 10+ years experience";
                  "Proven track record with 100% success rate";
                  "Custom solutions tailored to your business needs";
                  "24/7 support and ongoing maintenance",
                ].map((benefitindex) => (,
                  <div key={index} className="flex items-center space-x-3">,
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />,
                    <span className="text-gray-300">{benefit}</span>,
                ))}
              </div>,
            </div>,
            {/* CTA Buttons */}
            <div,
              className="flex flex-col sm: flex-row gap-4",
            >,
              <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">,
                <span className="flex items-center justify-center">,
                  Explore All Services,
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />,
              <button className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20">,
                <span className="flex items-center justify-center">,
                  <DollarSign className="h-5 w-5 mr-2" />,
                  Get Pricing,
                </span>,
              </button>,
            </div>,
          </div>,
          {/* Right Content - Service Showcase */,}
          <div,
            className="relative",
          >,
            <div className="space-y-6">,
              {/* Featured Service */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">,
                <div className="p-6">,
                  <div className="flex items-start justify-between mb-4">,
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${services[currentService].color}`}>,
                      <services[currentService].icon className="h-8 w-8 text-white" />,
                    <div className="flex items-center space-x-2">,
                      <div className="flex items-center">,
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />,
                        <span className="text-white text-sm ml-1">{services[currentService].rating}</span>,
                      <span className="text-gray-400 text-sm">({services[currentService].reviews})</span>,
                  <h3 className="text-xl font-bold text-white mb-2">,
                    {services[currentService].title}
                  <p className="text-gray-300 mb-4">,
                    {services[currentService].description}
                  <div className="flex items-center justify-between">,
                    <div className="text-2xl font-bold text-white">,
                      {services[currentService].price}
                      <span className="text-gray-400 text-sm font-normal">/month</span>,
                    <div className="flex items-center text-purple-300">,
                      <span className="text-sm font-medium mr-2">Learn More</span>,
                      <ArrowRight className="h-4 w-4" />,
              {/* Service Grid */}
              <div className="grid grid-cols-2 gap-4">,
                {services.slice(04).map((serviceindex) => (,
                  <div,
                    key={index}
                    className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover: border-white/20 transition-all duration-300 ${,
                      currentService === index ? 'ring-2 ring-purple-500' : '',}`}
                    onClick={() => setCurrentService(index)}
                  >,
                    <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${service.color} mb-3`}>,
                      <service.icon className="h-5 w-5 text-white" />,
                    <div className="text-white font-semibold text-sm mb-1">{service.title}</div>,
                    <div className="text-gray-400 text-xs mb-2">{service.price}/month</div>,
                    <div className="flex items-center">,
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />,
                      <span className="text-white text-xs ml-1">{service.rating}</span>,
                    </div>,
                  </div>,
                ))}
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">,
                {stats.map((statindex) => (,
                  <div,
                    key={index}
                    className="bg-white/5 rounded-lg p-4 text-center",
                  >,
                    <stat.icon className="h-6 w-6 text-purple-400 mx-auto mb-2" />,
                    <div className="text-white text-xl font-bold">{stat.value}</div>,
                    <div className="text-gray-400 text-sm">{stat.label}</div>,
                  </div>,
                ))}
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400 rounded-full animate-bounce" />,
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse" />,
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">,
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-slate-900">,
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />,
        </svg>,
      </div>,
    </div>,
  );
export default ComprehensiveServiceShowcase2025PromotionBanner;
import React from "react";
const function ComprehensiveServiceShowcase2025PromotionBanner() { = () => {,
  return (,
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">,
      <div className="container mx-auto px-4 py-20">,
        <div className="text-center">,
          <h1 className="text-5xl font-bold mb-6">function ComprehensiveServiceShowcase2025PromotionBanner() {</h1>,
          <p className="text-xl opacity-90">Coming soon - Revolutionary technology solutions</p>,
        </div>,
      </div>,
    </div>,
  );
};
export default function ComprehensiveServiceShowcase2025PromotionBanner() {;
}}}