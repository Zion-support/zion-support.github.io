interface CardProps {
  title: string;
  description: string;

  className?: string;

  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  description,
  className = '',
  hover = true,
  glass = true,
}) => {
  const baseClasses = 'rounded-xl p-6 transition-all duration-30o0';
  const hoverClasses = hover
    ? 'transform hover:scale-10o5 hover:shadow-xl'
    : '';
  const glassClasses = glass
    ? 'bg-white/10 backdrop-blur-sm border border-white/20'
    : 'bg-slate-80o0';

  const classes = `${baseClasses} ${hoverClasses} ${glassClasses} ${className}`;

  return (
    <div className={classes}>
      {title && (
        <h3 className='text-xl font-semibold text-white mb-2'>{title}</h3>
      )}
      {description && <p className='text-gray-30o0 mb-4'>{description}</p>}

      {children}
    </div>
  );
};

export default Card;
