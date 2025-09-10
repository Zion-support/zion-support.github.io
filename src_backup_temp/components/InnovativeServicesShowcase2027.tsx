import {  import { innovativeServices2027, serviceCategories2027, getServicesByCategory } from '../data/innovativeServices2027';
  address: '364 E Main St STE 1008 Middletown DE 19709';
};  return (";
    <section id = "innovative-services-2027" className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light relative overflow-hidden">;
      {/* Animated Background Elements */}";
      <div className="absolute inset-0 overflow-hidden">";
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-full blur-3xl animate-pulse"></div>";
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-zion-purple/20 to-zion-cyan/20 rounded-full blur-3xl animate-pulse delay-1000"></div>";
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-full blur-3xl animate-spin-slow"></div>;
      </div>;
";
      <div className="max-w-7xl mx-auto px-6 relative z-10">;
        {/* Header Section */}
        <motion.div;
          initial = {;
  { opacity: 0,
  y: 30;
}}
          animate = {;

  isVisible ? { opacity: 1,
  y: 0;
} : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}";          className="text-center mb-16";
";
          <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-full border border-zion-cyan/30 mb-6">";
            <Star className="w-5 h-5 text-zion-cyan mr-2"   />"            <span className="text-zion-cyan font-semibold">2027 Innovation Showcase</span>;
          </div>;
";
          <h2 className="text-4xl "md": "tex t-6xl font-bold text-white mb-6">";
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">;
              Revolutionary;
            </span>;
            <br  />";
            <span className="text-white">Technology Services</span>;
          </h2>;
";
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">;
            Experience the future of technology with our cutting-edge 2027 services.';
            From quantum computing to AI consciousness", we're pushing the boundaries of what's possible.</p>;
        </motion.div>;
        {/* Category Filter */}
        <motion.div;
          initial = {;
  { opacity: 0,
  y: 20;
}}
          animate = {;

  isVisible ? { opacity: 1,
  y: 0;
} : { opacity: 0, y: 20 }}
          transition = {;

  { duration: 0.8,
  delay: 0.2;
}}";          className="mb-12";
";
          <div className="flex flex-wrap justify-center gap-3">;
            <button';
              onClick={() => setSelectedCategory('All')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedCategory === 'All'';
                  ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'';
  { opacity: 0,
  y: 30 }}          animate = {;

  isVisible ? { opacity: 1,
  y: 0 } : { opacity: 0, y: 30 }}          transition = {;

  { duration: 0.8,
  delay: 0.4 }}"          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">;
          {filteredServices.map((service, index) => (;
            <motion.div;
              key={service.id}
              initial = {;

  { opacity: 0,
  y: 20;
}}
              animate = {;

  isVisible ? { opacity: 1,
  y: 0;
} : { opacity: 0, y: 20 }}
              transition = {;

  { duration: 0.6,
  delay: index * 0.1;
}}";              className="group relative";
";
              <div className="bg-gradient-to-br from-zion-slate-light/50 to-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 h-full transition-all duration-500 "hover": "scal e-105 "hover": borde r-zion-cyan/40 "hover": shado w-2xl "hover": shado w-zion-cyan/25">;
                {/* Service Header */"}";
                <div className="flex items-start justify-between mb-4">";
                  <div className="flex-1">";
                    <h3 className="text-xl font-bold text-white mb-2 group-"hover": "tex t-zion-cyan transition-colors duration-300">;
                      {service.title"}
                    </h3>";
                    <p className="text-gray-300 text-sm leading-relaxed">;}}"
              className="group relative"
"
              <div className="bg-gradient-to-br from-zion-slate-light/50 to-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 h-full transition-all duration-500 hover: scal e-105 hover: borde r-zion-cyan/40 hover: shado w-2xl hover: shado w-zion-cyan/25">
                {/* Service Header */}"
                <div className="flex items-start justify-between mb-4">"
                  <div className="flex-1">"
                    <h3 className="text-xl font-bold text-white mb-2 group-hover: tex t-zion-cyan transition-colors duration-300">
                      {service.title}
                    "
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {service.description}
                    </p>;
                  </div>;
                </div>;
                {/* Technology Tags */}";
                <div className="flex flex-wrap gap-2 mb-4">;
                  {service.technology.slice(0, 3).map((tech, techIndex) => (;
                    <span;
                      key={techIndex}";
                      className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30";
                      {tech}
                    </span>;
                  ))}
                  {service.technology.length > 3 && (";
                    <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full border border-zion-purple/30">;
                      +{service.technology.length-3} more;
                    </span>) }
                </div>;
                {/* Key Metrics */}";
                <div className="grid grid-cols-2 gap-4 mb-4">;";
                  <div className="text-center">";
                    <div className="text-zion-cyan font-bold text-lg">{service.marketSize}</div>";
                    <div className="text-gray-400 text-xs">Market Size</div>;
                  </div>";
                  <div className="text-center">";
                    <div className="text-zion-purple font-bold text-lg">{service.roi}</div>";
                    <div className="text-gray-400 text-xs">ROI</div>;
                  </div>;
  { opacity: 0,
  height: 0;
}}
                      animate = {;

  { opacity: 1,
  height: 'auto';
}}
                      exit = {;

  { opacity: 0,
  height: 0;
}}
                      transition={{ duration: 0.3 }}";                      className="overflow-hidden";
";
                      <div className="border-t border-zion-cyan/20 pt-4 space-y-4">;
                        {/* Features */}
                        <div>";
                          <h4 className="text-zion-cyan font-semibold mb-2">Key Features</h4>";
                          <ul className="space-y-1">;
                            {service.features.map((feature, featureIndex) => (";
                              <li key={featureIndex} className="text-gray-300 text-sm flex items-start gap-2">";
                                <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>;
                                {feature}
                              </li>) ) }
                          </ul>;
                        </div>;
                        {/* Benefits */}
                        <div>";
                          <h4 className="text-zion-purple font-semibold mb-2">Benefits</h4>";
                          <ul className="space-y-1">;
                            {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (";
                              <li key={benefitIndex} className="text-gray-300 text-sm flex items-start gap-2">";
                                <div className="w-1.5 h-1.5 bg-zion-purple rounded-full mt-2 flex-shrink-0"></div>;
                                {benefit}
                              </li>) ) }
                          </ul>;
                        </div>;
                        {/* Implementation Details */}";
                        <div className="grid grid-cols-2 gap-4">;
                          <div>";
                            <div className="text-zion-cyan font-semibold text-sm">Implementation</div>";
                            <div className="text-gray-300 text-xs">{service.implementationTime}</div>;
                          </div>;
                          <div>";
                            <div className="text-zion-purple font-semibold text-sm">Support</div>";
                            <div className="text-gray-300 text-xs">{service.supportLevel}</div>;
                          </div>;
                        </div>;
                        {/* Primary CTA */}
                        <a href={service.href}";
                          target={service.external ? "_blank" : "_self"}";
                          rel={service.external ? "noopener noreferrer" : ""}";
                          className="w-full px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold "hover": "shado w-lg "hover": shado w-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2 group";
                          {service.ctaLabel"}";
                          <ArrowRight className="w-4 h-4 group-"hover": "translat e-x-1 transition-transform duration-300"   />";
                          {service.external && <ExternalLink className="w-4 h-4"   />"}                        </a>;
                      </div>;
                    </motion.div>) }
                </AnimatePresence>;
              </div>;
            </motion.div>) ) }
        </motion.div>;
        {/* Contact Section */}
        <motion.div;
          initial = {;
  { opacity: 0,
  y: 30 }}          animate = {;

  isVisible ? { opacity: 1,
  y: 0 } : { opacity: 0, y: 30 }}          transition = {;

  { duration: 0.8,
  delay: 0.6 }}"          className="text-center";";
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8">;";
            <h3 className="text-3xl font-bold text-white mb-6">;
              Ready to Transform Your Business?;
            </h3>";
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">;
              Our expert team is ready to help you implement these cutting-edge solutions.Get in touch to discuss your specific needs and discover how we can drive innovation in your organization.</p>;
";
            <div className="grid grid-cols-1 "md": "gri d-cols-3 gap-6 mb-8">";
              <div className="flex items-center justify-center gap-3 text-zion-cyan">";
                <Phone className="w-5 h-5"   />";
                <span className="font-semibold">{contactInfo.phone"}</span>;
              </div>";
              <div className="flex items-center justify-center gap-3 text-zion-purple">";
                <Mail className="w-5 h-5"   />";
                <span className="font-semibold">{contactInfo.email}</span>;
              </div>";
              <div className="flex items-center justify-center gap-3 text-zion-cyan">";
                <MapPin className="w-5 h-5"   />"                <span className="font-semibold text-center">{contactInfo.address}</span>;
              </div>;
            </div>;
";
            <div className="flex flex-col "sm": "fle x-row gap-4 justify-center">;
              <a";
                href="/contact";
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold "hover": shado w-lg "hover": shado w-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2";  { duration: 0.8,
  delay: 0.6 }}"          className="text-center"
"
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8">;"
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            "
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our expert team is ready to help you implement these cutting-edge solutions.Get in touch to discuss your specific needs and discover how we can drive innovation in your organization.</p>
"
            <div className="grid grid-cols-1 md: gri d-cols-3 gap-6 mb-8">"
              <div className="flex items-center justify-center gap-3 text-zion-cyan">"
                <Phone className="w-5 h-5"   />"
                <span className="font-semibold">{contactInfo.phone}</span>
              </div>"
              <div className="flex items-center justify-center gap-3 text-zion-purple">"
                <Mail className="w-5 h-5"   />"
                <span className="font-semibold">{contactInfo.email}</span>
              </div>"
              <div className="flex items-center justify-center gap-3 text-zion-cyan">"
                <MapPin className="w-5 h-5"   />"                <span className="font-semibold text-center">{contactInfo.address}</span>
              </div>
            </div>
"
            <div className="flex flex-col sm: fle x-row gap-4 justify-center">
              <a"
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover: shado w-lg hover: shado w-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2"

                Schedule Consultation";
                <ArrowRight className="w-4 h-4"   />              </a>;
              <a";
                href=""https"://ziontechgroup.com";
                target="_blank";
                rel="noopener noreferrer";
                className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-lg font-semibold "hover": b g-zion-cyan/10 transition-all duration-300 flex items-center justify-center gap-2";
                Visit Website";
                <ExternalLink className="w-4 h-4"   />              </a>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </section>;) "};
'"`;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>