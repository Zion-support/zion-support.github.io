
import React from 'react';''';
import { motion } from 'framer-motion';'';

interface ServiceCardProps {
  // TODO: Implement;
}
  title: string;,;
  description: string;
  icon?: string;
  features?: string[];
  pricing?: string;
  link?: string;}
  className?: string;}
}
;

const ServiceCard: React.FC<ServiceCardProps> = ({
</ServiceCardProps>;
    <motion.div;
      className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 ${className}`}`;

<<<<<<< HEAD
      whileHover={ y: -5 }
      initial={ opacity: 0, y: 20 }
      animate={ opacity: 1, y: 0 }
      transition={ duration: 0.5 }
=======
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
>>>>>>> origin/resolved-merge-conflicts
;
    >;
</motion>'';
        <div className="text-4xl mb-4 text-center">";
</div>;
        </div>";
      <h3 className="text-xl font-semibold mb-3 text-white text-center">{title}</h3>"";
      <p className="text-gray-300 mb-4 text-center">{description}</p>"";
        <ul className="space-y-2">";
</ul>";
            <li key={index} className="flex items-center text-sm text-gray-300">";
</li>";
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>";

            </li>;
        </ul>;

    </motion.div>);

  );
;

export default ServiceCard;";

