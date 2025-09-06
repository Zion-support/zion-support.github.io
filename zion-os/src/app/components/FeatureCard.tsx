interface FeatureCardProps {;
  icon: string,;
  title: string,;
  description: string,;
  features: string[],;
  gradient: string,;
  className?: string;
}
export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  features, 
  gradient, 
  className = '' 
}: FeatureCardProps) {
  return (
    <div className={`feature-card group ${className}`}>
      <div className={`w-12 h-12 ${gradient} rounded-lg flex items-center justify-center mb-4`}>
        <span className=&quot;text-white text-xl&quot;>{icon}</span>
      </div>
      <h3 className=&quot;text-xl font-semibold mb-3&quot;>{title}</h3>
      <p className=&quot;text-white/70 mb-4&quot;>{description}</p>
      <ul className=&quot;text-sm text-white/60 space-y-1&quot;>
        {features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>;
    </div>;
  );
}