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
<<<<<<< HEAD
interface FeatureCardProps {icon: string;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  className?: string;
=======
  className?: string;  className?: string;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}
export default /**
 * FeatureCard - Function description
 */
function FeatureCard() {

  return (
<<<<<<< HEAD
    <div className={`feature - card group ${class_name}`}>;
      <div className={`w - 12 h - 12 ${gradient} rounded - lg flex items - center justify - center mb - 4`}>;
        <span className=&quot;text - white text - xl & quot;>{icon}</span>;
      </div>;
      <h3 className=&quot;text - xl font - semibold mb - 3&quot;>{title}</h3>;
      <p className=&quot;text - white / 70 mb - 4&quot;>{description}</p>;
      <ul className=&quot;text - sm text - white / 60 space - y-1 & quot;>;
        {features.map ((feature, index) => (
          <li key={index}>• {feature}</li>))}
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      </ul>;
    </div>);
}
