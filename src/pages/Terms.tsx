import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  return (
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Intellectual Property</h3>
                <p className="text-zion-slate-light leading-relaxed mb-6">
                  All content, software, technology, and intellectual property on our platform remain the exclusive 
                  property of Zion Tech Group and our licensors.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-2" />
                    Software and applications
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-2" />
                    Trademarks and brand assets
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-2" />
                    Patents and proprietary technology
                  </li>
                </ul>
              </div>
        </div>
      </section>
    </div>
  );
};

