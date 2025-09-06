    }
  ];
  const process = [{
      \"step\": \'01\',
      \"title\": \'Discovery & Planning\',
      \"description\": \'We start by understanding your business needs, goals, and technical requirements.\'
    },
    {
      \"step\": \'02\',
      \"title\": \'Design & Architecture\',
      \"description\": \'Our team creates detailed technical specifications and system architecture.\'
    },
    {
      \"step\": \'03\',
      \"title\": \'Development & Testing\',
      \"description\": \'We build your solution using agile methodologies with continuous testing.\'
    },
    {
      \"step\": \'04\',
      \"title\": \'Deployment & Support\',
      \"description\": \'We deploy your solution and provide ongoing support and maintenance.\'
    }
  ];
  return (
    <MainLayout
      title=\"Our Services - Zion Tech Group\"
      description=\"Explore our comprehensive range of technology services including AI development, cloud solutions, web development, mobile apps, and more.\"
    >
      {/* Hero Section */}
      <section className=\"bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20\">
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">
          <div className=\"text-center\">
            <h1 className=\"text-5xl font-bold mb-6\">Our Services</h1>
            <p className=\"text-xl max-w-3xl mx-auto\">
              Comprehensive technology solutions designed to transform your business 
              and drive digital innovation across all industries.
            </p>
          </div>
        </div>
      </section>
      {/* Services Grid */}
                        {feature}
                      </li>
                    ))}
                  <Link
                    href={service.href}
                    className=\"text-blue-600 \"hover\": text-blue-700 font-medium flex items-center\"
                  >
                    Learn More
                    <ArrowRight className=\"ml-1 h-4 w-4\" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
                <Link
                  href=\"/contact\"
                  className=\"block w-full bg-blue-600 \"hover\": bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold text-center transition-colors\"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href=\"/about\"
                  className=\"block w-full bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 px-6 rounded-lg font-semibold text-center transition-colors\"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className=\"py-20 bg-blue-600 text-white\">
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8 text-center\">
          <h2 className=\"text-4xl font-bold mb-6\">
            Ready to Transform Your Business?
          </h2>
          <p className=\"text-xl mb-8 max-w-3xl mx-auto\">
            Join hundreds of businesses that have already transformed their operations 
            with our innovative technology solutions.
          </p>
          <div className=\"flex flex-col sm:flex-row gap-4 justify-center\">
            <Link
              href=\"/contact\"
              className=\"bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors\"
            >
              Start Your Project
            </Link>
            <Link
              href=\"/case-studies\"
              className=\"bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors\"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
export default Services;
