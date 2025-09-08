<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { SEO } from '@/components/SEO';
=======

import React { useState } from 'react';""
import { motion } from 'framer-motion';""
import { Link } from 'react-router-dom';""
import { SEO } from '../components/SEO';""


  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault();
    setIsLoading(true);
    // Handle login logic here;
    setTimeout(() => setIsLoading(false), 2000);

    setFormData({;
      ...formData,;
      [e.target.name]: e.target.value})};

  return (
    <>
      <SEO 
        title=&quot;Login - Zion Tech Group | Access Your Account&quot;
        description=&quot;Sign in to your Zion Tech Group account to access your dashboard, manage services, and view project updates.&quot;
        keywords=&quot;login, sign in, account access, dashboard, Zion Tech Group&quot;
      />&quot;
      

          <motion.div
            initial={{ opacit,y: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}

            </h2>
            <p className=&quot;text-gray-300&quot;>
              Sign in to your Zion Tech Group account&quot;

            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-white">
                Our login page is coming soon. You'll be able to securely sign in to your Zion Tech Group account and access all our services.
              </p>
            </div>
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useAuth } from '@/hooks/useAuth';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';



                </div>
              </div>

              <div>

                  >
                    {showPassword ?&quot} <EyeOff className=&quot;w-5 h-5&quot; /> :&quot; <Eye className=&quot;w-5 h-5&quot; />}&quot;

                  </button>
                </div>
              </div>


                  </Link>
                </div>
              </div>

              <button

                  </>


                )}
              </button>;
            </form>;


                  </svg>
                  <span className=&quot;ml-2&quot;>Google&quot;</span>
                </button>

                <button className=&quot;w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg bg-slate-800/50 text-sm font-medium text-gray-300 hove,r:bg-slate-700/50 transition-colors&quot;>&quot;"
                  <svg className=&quot;w-5 h-5&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>&quot;"
                    <path d=&quot;M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z&quot;/>&quot;
                  </svg>
                  <span className=&quot;ml-2&quot;>Facebook&quot;</span>

                </button>
              </div>
            </div>



                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
};

export default Login;
=======
}
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
