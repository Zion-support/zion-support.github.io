
import { Link } from 'react-router-dom';


export default function SimplePage()   {const location = useLocation();
  
  // Generate page title and content based on the current path
  const getPageInfo = (pathname) => {

            description: 'End-to-end business transformation services to modernize your operations',
            link: '/services/transformation'
          }
        ]
      },

            description: 'E-commerce and omnichannel retail solutions',
            link: '/solutions/retail'
          }
        ]
      },

            description: 'From startup to industry leader - our journey of innovation and growth',
            link: '/about/history'
          }
        ]
      },

            description: 'Explore partnership opportunities with Zion Tech Group',
            link: '/partners'
          }
        ]
      },

            description: 'Thought leadership and expert perspectives on technology',
            link: '/blog/expert'
          }
        ]
      },

            description: 'Opportunities for professional development and advancement',
            link: '/careers/growth'
          }
        ]
      },

            description: 'See how our partners have grown with us',
            link: '/partners/success'
          }
        ]
      }
    };


      subtitle: 'The page you\'re looking for doesn\'t exist',

            link: '/partners/success' }
        ] }
    };


      description: 'We couldn\'t find the page you requested. Please check the URL or navigate back to our homepage.',
      sections: [] }};


  const pageInfo = getPageInfo(location.pathname);""
  const breadcrumbs = location.pathname.split('/').filter(Boolean);


            <Home className="h-4 w-4 mr-1" />

            Home
          </Link>

              <span className="capitalize">{crumb}</span>
            </div>
          ))}
        </nav>
      </div>


            <p className="text-xl md:text-2xl text-zion-cyan mb-6">

              {pageInfo.subtitle}

            <p className="text-lg text-zion-slate-light leading-relaxed">
              {pageInfo.description}
            </p>
          </div>
        </div>
      </section>


                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {section.title}
                  </h3>""
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {section.description}
                  </p>


                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>""
            <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Contact our team today to discuss how we can help you achieve your technology goals


                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>

