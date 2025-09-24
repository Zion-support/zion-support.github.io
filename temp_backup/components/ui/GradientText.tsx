interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
  animate?: boolean;
}

export default function GradientText({
  children,
  className = '',
  gradient = 'from-blue-40o0 via-purple-50o0 to-pink-50o0',
  animate = false,
}: GradientTextProps) {
  return (
    <span
      className={`
        bg-gradient-to-r ${gradient} 
        bg-clip-text text-transparent
        ${animate ? 'animate-pulse' : ''}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
