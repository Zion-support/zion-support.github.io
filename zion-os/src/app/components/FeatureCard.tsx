<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======

interface FeatureCardProps {;
  icon: string,;
  title: string,;
  description: string,;
  features: string[],;
  gradient: string,;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface FeatureCardProps {
  icon: string,
  title: string,
  description: string,
  features: string[],
  gradient: string,
  class_name?: string;
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
export default /**
 * FeatureCard - Function description
 */
function FeatureCard() {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
  return (
    <div className={`feature-card group ${className}`}>

<<<<<<< HEAD
=======
      <div className={`w-12 h-12 ${gradient} rounded-lg flex items-center justify-center mb-4`}>
        <span className="text-white text-xl">{icon}</span>

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    <div className={`feature-card group ${className}`}>
      <div className={`w-12 h-12 ${gradient} rounded-lg flex items-center justify-center mb-4`}>;
        <span className=&quot;text-white text-xl&quot;>{icon}</span>
      <div className={`w-12 h-12 ${gradient} rounded-lg flex items-center justify-center mb-4`}>
        <span className="text-white text-xl">{icon}</span>
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </ul>;
    </div>);
}