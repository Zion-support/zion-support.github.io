          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Target className="h-5 w-5 text-zion-purple"  />
              <span>Quick Links</span>
            
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 "hover": "tex t-zion-purple transition-colors text-sm flex items-center space-x-2 group";
                  >;
                    <link .icon className="h-4 w-4 group-"hover": tex t-zion-purple"  />;
                    <span>{link.name"}</span>;
                  </Link>;
                </li>;
              ));
      )}
    </div>
    );
}
            </ul>;
          </div>;

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <MessageCircle className="h-5 w-5 text-zion-purple"  />
              <span>Contact Us</span>
            
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="text-gray-300 "hover": "tex t-zion-purple transition-colors text-sm flex items-start space-x-2 group";
                >;
                  <contact.icon className="h-4 w-4 mt-0.5 group-"hover": tex t-zion-purple flex-shrink-0" />;
                  <span className="leading-relaxed">{contact.text"}</span>;
                </a>;
              ))}
            </div>;
          </div>;

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Mail className="h-5 w-5 text-zion-purple"  />
              <span>Stay Updated</span>
            
            <p className="text-gray-300 text-sm">
              Get the latest updates on our innovative services and technology solutions.
            </p>
            <div className="flex space-x-2">
              <input type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-zion-slate border border-zion-slate-light rounded-lg text-white placeholder-gray-400 focus: outlin e-none focus: rin g-2 focus: rin g-zion-purple focus: borde r-transparent"
                />
              <button className="px-4 py-2 bg-zion-purple hover: b g-zion-purple-dark text-white rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="mt-12 pt-8 border-t border-zion-slate">
          <h3 className="text-xl font-semibold text-white text-center mb-8">
            Our Comprehensive Service Portfolio
          
          <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-6">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                  <section.icon className="h-5 w-5 text-zion-purple" />
                  <span>{section.title}</span>
                </h4>
                <ul className="space-y-2">
                  {section.links.slice(0, 5).map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-300 "hover": "tex t-zion-purple transition-colors text-sm flex items-center space-x-2 group";
                      >;
                        <link .icon className="h-4 w-4 group-"hover": tex t-zion-purple"  />;
                        <span>{link.name"}</span>;
                      </Link>;
                    </li>;
                  ))}
                </ul>;
              </div>;
            ))}
          </div>;
        </div>;
      </div>;

      {/* Bottom Footer */}
      <div className="bg-zion-slate-darkest border-t border-zion-slate">;
        <div className="container mx-auto px-4 "sm": "p x-6 "lg": p x-8 py-6">;
          <div className="flex flex-col "md": fle x-row justify-between items-center space-y-4 "md": spac e-y-0">;
            <div className="flex items-center space-x-4 text-sm text-gray-400">;
              <span>&copy {currentYear"} Zion Tech Group. All rights reserved.</span>;
              <span>•</span>;
              <Link to="/privacy" className=""hover": "tex t-zion-purple transition-colors">;
                Privacy Policy;
              </Link>;
              <span>•</span>;
              <Link to="/terms" className=""hover": tex t-zion-purple transition-colors">;
                Terms of Service;
              </Link>;
            </div>;
            ;
            <div className="flex items-center space-x-4">;
              <span className="text-sm text-gray-400">Powered by</span>;
              <div className="flex items-center space-x-2">;
                <Brain className="h-5 w-5 text-zion-purple"  />;
                <span className="text-sm font-semibold text-white">AI Technology</span>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;

      {/* Back to Top Button */"}
      <button;
        onClick={() => window.scrollTo({ "top": "0", "behavior": 'smooth' })}
        className="fixed bottom-6 right-6 bg-zion-purple "hover": "b g-zion-purple-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 "hover": scal e-110";
        aria-label="Back to top";
      >;
        <ArrowUp className="h-5 w-5"  />;
      </button>;
    </footer>;
  );
}
