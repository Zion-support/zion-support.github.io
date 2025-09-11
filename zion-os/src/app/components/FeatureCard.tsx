<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
interface FeatureCardProps {icon: string;
  title: string;
  description: string;
  features: string[];
  gradient: string;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface FeatureCardProps {;
  icon: string,;
  title: string,;
  description: string,;
  features: string[],;
  gradient: string,;


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

interface FeatureCardProps {
  icon: string,
  title: string,
  description: string,
  features: string[],
  gradient: string,
  class_name?: string;
<<<<<<< HEAD
interface FeatureCardProps {icon: string;
  title: string;
  description: string;
  features: string[];
  gradient: string;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface FeatureCardProps {;
  icon: string,;
  title: string,;
  description: string,;
  features: string[],;
  gradient: string,;
  className?: string;
}
export default /**
 * FeatureCard - Function description
 */
function FeatureCard() {
<<<<<<< HEAD
<<<<<<< HEAD
  return (
=======

  return (
  return (
    <div className={`feature-card group ${className}`}>
      <div className={`w-12 h-12 ${gradient} rounded-lg flex items-center justify-center mb-4`}>;
        <span className=&quot;text-white text-xl&quot;>{icon}</span>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className={`w-12 h-12 ${gradient} rounded-lg flex items-center justify-center mb-4`}>
        <span className="text-white text-xl">{icon}</span>

    <div className={`feature-card group ${className}`}>
      <div className={`w-12 h-12 ${gradient} rounded-lg flex items-center justify-center mb-4`}>;
        <span className=&quot;text-white text-xl&quot;>{icon}</span>
      <div className={`w-12 h-12 ${gradient} rounded-lg flex items-center justify-center mb-4`}>
        <span className="text-white text-xl">{icon}</span>
=======

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
  return (
    <div className={`feature-card group ${className}`}>

      <div className={`w-12 h-12 ${gradient} rounded-lg flex items-center justify-center mb-4`}>
        <span className="text-white text-xl">{icon}</span>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-white/70 mb-4">{description}</p>
      <ul className="text-sm text-white/60 space-y-1">
        {features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      </ul>;
    </div>);
}