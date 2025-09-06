
  className?: string;

}
export default /**
 * FeatureCard - Function description
 */
function FeatureCard() {
  return (

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