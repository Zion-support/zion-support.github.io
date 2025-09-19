import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
const ComprehensiveServices2034: React.FC = () => {,
              </p>,
            </div>,
          </div>,
        </div>,
        {/* Service Categories Navigation */,}
        <div className="container mx-auto px-4 py-16">,
          <div className="flex flex-wrap justify-center gap-4 mb-16">,
            {serviceCategories.map((category, index) => (,
              <button,
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-4 rounded-2xl text-xl font-bold transition-all duration-300 ${,
                  activeCategory === category.id,
                    ? `bg-gradient-to-r ${category.color} text-white shadow-2xl scale-105`,
                    : 'bg-white/10 text-white/70 hover: bg-white/20 hover:text-white',}`}
              >,
                {category.icon} {category.name}
              </button>,
            ))}
      </div>,
    </>,
  );
};
export default ComprehensiveServices2034;