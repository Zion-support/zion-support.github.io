import React from 'react';

interface TechItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  href: string;
}

interface ResponsiveTechGridProps {
  items: TechItem[];
  title: string;
  subtitle: string;
}

const ResponsiveTechGrid: React.FC<ResponsiveTechGridProps> = ({ items, title, subtitle }) => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 text-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl opacity-90">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className={`bg-gradient-to-br ${item.color} backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer`}
          >
            <div className="text-4xl mb-4 text-center">{item.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-center">{item.title}</h3>
            <p className="text-white/80 mb-4 text-center text-sm leading-relaxed">
              {item.description}
            </p>
            <a
              href={item.href}
              className="block w-full bg-white text-slate-900 py-2 rounded-lg hover:bg-white/90 transition-colors font-semibold text-center text-sm"
            >
              Explore →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveTechGrid;