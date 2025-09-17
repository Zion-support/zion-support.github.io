"use client";
import React{ useStateuseEffectuseRef } from 'react';

export default function AnimatedSuccessMetrics() {
  const [isVisiblesetIsVisible] = useState(false);
  const [countsetCounts] = useState({
    roi: 0,
    accuracy: 0,
    speed: 0,
    companies: 0
  });
  const ref = useRef(null);

  const metrics = [
    {
      value: 10000,
      suffix: '%',
      label: 'Average ROI',
      description: 'Fortune 500 Companies',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'from-yellow-600/20 to-orange-600/20',
      borderColor: 'border-yellow-500/30'
    },
    {
      value: 99.9,
      suffix: '%',
      label: 'Accuracy Rate',
      description: 'Quantum Neural Networks',
      color: 'from-cyan-400 to-blue-500',
      bgColor: 'from-cyan-600/20 to-blue-600/20',
      borderColor: 'border-cyan-500/30'
    },
    {
      value: 50000,
      suffix: 'x',
      label: 'Faster Processing',
      description: 'vs Traditional AI',
      color: 'from-green-400 to-emerald-500',
      bgColor: 'from-green-600/20 to-emerald-600/20',
      borderColor: 'border-green-500/30'
    },
    {
      value: 500,
      suffix: '+',
      label: 'Companies Transformed',
      description: 'Global Success Stories',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'from-purple-600/20 to-pink-600/20',
      borderColor: 'border-purple-500/30'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }[]);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      metrics.forEach((metricindex) => {
        const targetValue = metric.value;
        const increment = targetValue / steps;
        let currentValue = 0;

        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(timer);
          }

          setCounts(prev => ({
            ...prev,
            [index === 0 ? 'roi' : index === 1 ? 'accuracy' : index === 2 ? 'speed' : 'companies']: currentValue
          }));
        }stepDuration);
      });
    }
  }[isVisible]);

  return (
    <div ref={ref} className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionary Success Metrics
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time data from our AI implementations across Fortune 500 companies worldwide. 
            These numbers represent the future of business transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metricindex) => {
            const currentValue = index === 0 ? counts.roi : 
                               index === 1 ? counts.accuracy : 
                               index === 2 ? counts.speed : counts.companies;
            
            return (
              <div
                key={index}
                className={`relative bg-gradient-to-br ${metric.bgColor} rounded-2xl p-8 border ${metric.borderColor} hover:border-opacity-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group`}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 text-center">
                  {/* Animated Number */}
                  <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-4`}>
                    {index === 1 ? currentValue.toFixed(1) : Math.floor(currentValue).toLocaleString()}
                    <span className="text-3xl">{metric.suffix}</span>
                  </div>
                  
                  {/* Label */}
                  <div className="text-white font-semibold text-lg mb-2">
                    {metric.label}
                  </div>
                  
                  {/* Description */}
                  <div className="text-gray-400 text-sm">
                    {metric.description}
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="mt-6 w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${metric.color} transition-all duration-2000 ease-out`}
                      style={{
                        width: isVisible ? '100%' : '0%'
                      }}
                    ></div>
                  </div>
                </div>

                {/* Floating Particles Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  {[...Array(3)].map((_i) => (
                    <div
                      key={i}
                      className={`absolute w-2 h-2 bg-gradient-to-r ${metric.color} rounded-full opacity-20 animate-pulse`}
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${20 + i * 20}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: '3s'
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-6">
              Global Impact Statistics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">$2.5T+</div>
                <div className="text-gray-300">Total Value Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">50+</div>
                <div className="text-gray-300">Countries Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Continuous Innovation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}