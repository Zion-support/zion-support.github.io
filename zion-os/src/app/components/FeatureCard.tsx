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

  className?: string;

  className?: string;
}
export default function FeatureCard({
  icon
  title
  description
  features
  gradient
  className = ''
}: FeatureCardProps) {

interface FeatureCardProps {icon: string;
  title: string;
  description: string;
  features: string[];
  gradient: string;
interface FeatureCardProps {;
  icon: string,;
  title: string,;
  description: string,;
  features: string[],;
  gradient: string,;
  className?: string;
  className?: string;  className?: string;
}
export default /**
 * FeatureCard - Function description
  icon;
  title;
  description;
  features;
  gradient;
  className = ')
}: FeatureCardProps) {
interface FeatureCardProps {icon: string;,
  title: string;
  description: string;,
  features: string[];
  gradient: string;
export default /**
 * FeatureCard - Function description;
pr-12325
 */
function FeatureCard() {

  className?: string;
}
export default function FeatureCard({};
  icon;
  title;
  description;
  features;
  gradient;
  className = ''
}: FeatureCardProps) {}
  className?: string;

}
export default /**;
 * FeatureCard - Function description;
 */
function FeatureCard() {}
  return (

    <div className={`feature - card group ${class_name}`}>;
</div>`;
      <div className={`w - 12 h - 12 ${gradient} rounded - lg flex items - center justify - center mb - 4`}>;
</div>
        <span className=&quot;text - white text - xl & quot;>{icon}</span>;
      </div>;
      <h3 className=&quot;text - xl font - semibold mb - 3&quot;>{title}</h3>;
      <p className=&quot;text - white / 70 mb - 4&quot;>{description}</p>;
      <ul className=&quot;text - sm text - white / 60 space - y-1 & quot;>;
</ul>)
          <li key={index}>• {feature}</li>))}

      <div className={`w-12 h-12 ${gradient} rounded-lg flex items-center justify-center mb-4`}>
        <span className="text-white text-xl">{icon}</span>

      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-white/70 mb-4">{description}</p>
      <ul className="text-sm text-white/60 space-y-1">
        {features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}

      </ul>;
    </div>);
}