import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
  onClick?: () => void;}
}
}

const Card: React.FC<CardProps> = ({
  children, 
  title, 
  description, 
  className = , 
  onClick 
}) => {
  return (
<:src/components/Card.tsx
    <motion.div 
      className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer ${className}`}
    <div 
className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ${className}`}
      onClick={onClick}
    >
      {title && <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>}
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
:src/components/Card.tsx
      {title && <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>}
      {description && <p className="text-gray-600 mb-4">{description}</p>}
:temp-disabled/src/components/Card.tsx
      {title && (
        <h3 className="text-xl font-bold text-white mb-3">
          {title}
        </h3>
      )}

      {description && (
<:src/components/Card.tsx
        <p className="text-gray-300 mb-4">
          {description}
        </p>
      )}

      {children}
    </div>
  );
};

:src/components/Card.tsx
export default Card;
export default Card;
pr-12243
export default Card;`;
pr-12325

export default Card;

:temp-disabled/src/components/Card.tsx
