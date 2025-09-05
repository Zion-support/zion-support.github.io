interface FeatureCardProps {_icon: string;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  className?: string;}

export default function FeatureCard(_{_icon, _title, _description, _features, _gradient, _className = ''}: FeatureCardProps) {_return (_<div className={`feature-card group ${className}`}>
      <div className={_`w-12 h-12 ${gradient} rounded-lg flex items-center justify-center mb-4`}>
        <span className="text-white text-xl">{_icon}</span>
      </div>
      <h3 className="text-xl font-semibold mb-3">{_title}</h3>
      <p className="text-white/70 mb-4">{_description}</p>
      <ul className="text-sm text-white/60 space-y-1">
        {_features.map((feature, _index) => (
          <li key={index}>• {_feature}</li>
        ))}
      </ul>
    </div>
  );
}