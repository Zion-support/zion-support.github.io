<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

interface FeatureCardProps {;
  icon: string,;
  title: string,;
  description: string,;
  features: string[],;
  gradient: string,;


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

interface FeatureCardProps {
  icon: string,
  title: string,
  description: string,
  features: string[],
  gradient: string,
  class_name?: string;
<<<<<<< HEAD
=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  className?: string;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
export default /**
 * FeatureCard - Function description
 */
function FeatureCard() {
<<<<<<< HEAD
<<<<<<< HEAD

  return (
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
  return (
    <div className={`feature-card group ${className}`}>

      <div className={`w-12 h-12 ${gradient} rounded-lg flex items-center justify-center mb-4`}>
        <span className="text-white text-xl">{icon}</span>

=======
  return (
      <div className={`w-12 h-12 ${gradient} rounded-lg flex items-center justify-center mb-4`}>
        <span className="text-white text-xl">{icon}</span>

    <div className={`feature-card group ${className}`}>
      <div className={`w-12 h-12 ${gradient} rounded-lg flex items-center justify-center mb-4`}>;
        <span className=&quot;text-white text-xl&quot;>{icon}</span>
      <div className={`w-12 h-12 ${gradient} rounded-lg flex items-center justify-center mb-4`}>
        <span className="text-white text-xl">{icon}</span>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-white/70 mb-4">{description}</p>
      <ul className="text-sm text-white/60 space-y-1">
        {features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      </ul>;
    </div>);
}
