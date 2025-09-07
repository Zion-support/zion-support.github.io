        ctaLink: "mailto:kleber@ziontechgroup.com";"
      }
    ];
  }"
  const filteredServices = selectedCategory === "All";"
    ? servicePricing;
    : servicePricing.filter(service => service.category === selectedCategory);
  return (;"
    <div className="space-y-8">;"
</div>"
      <div className="text-center space-y-4">;"
        <h1 className="text-4xl font-bold">Pricing & Plans</h1>;""
        <p className="text-xl opacity-80 max-w-3xl mx-auto">;"
</p>"
    <div className="space - y-8">;"
      <div className="text - center space - y-4">;"
        <h1 className="text - 4xl font - bold">Pricing & Plans</h1>;""
        <p className="text - xl opacity - 80 max - w-3xl mx - auto">;"
</p>
        </p>;
      </div>;"
      <div className="flex justify - center">;"
        <div className="flex flex - wrap gap - 2 bg - zinc - 800 rounded - lg p - 1">;"
</div>
            <button;
              key={category}
              }`}
            >;
</button>)
            </button>))}
        </div>;
      <div className="space - y-12">;"
          <div key={service_index} className="space - y-6">;"
            <div className="text - center space - y-2">;"
              <h2 className="text - 2xl font - bold">{service.service_name}</h2>;""
              <p className="text - lg opacity - 80">{service.description}</p>;"
            <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;"
              <div>;
                <h3 className="text - lg font - semibold mb - 3">Key Features</h3>;""
                <ul className="space - y-2">;"
</ul>"
                    <li key={index} className="flex items - center gap - 2">;"
</li>"
                      <span className="w - 2 h - 2 bg - blue - 500 rounded - full"></span>;"
                    </li>))}
                </ul>;
                <h3 className="text - lg font - semibold mb - 3">Benefits</h3>;""
                      <span className="w - 2 h - 2 bg - green - 500 rounded - full"></span>;"
            <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6">;"
                <div;`;
                    <div className="absolute -top - 3 left - 1/2 transform -translate - x-1 / 2">;"
                      <span className="bg - blue - 500 text - white px - 3 py - 1 rounded - full text - xs font - medium">;"
</span>
                      </span>;
                      <span className="text - 3xl font - bold">{tier.price}</span>;""
                      <span className="text - lg opacity - 80">{tier.period}</span>;"
                    <p className="text - sm opacity - 80">{tier.description}</p>;"
                  <ul className="space - y-3 mt - 6">;"
                      <li key={index} className="flex items - center gap - 2 text - sm">;"
                  </ul>;"
                  <div className="mt - 6">;"
                    <a;`;
</a>
                    </a>;
                </div>))}
      <div className="bg - gradient - to - r from - purple - 600 to - blue - 600 rounded - lg p - 8 text - white">;"
          <h2 className="text - 2xl font - bold">Need Custom Solutions?</h2>;""
          <p className="opacity - 90">;"
          </p>;"
          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 4 text - center">;"
              <h3 className="font - semibold">Custom Development</h3>;""
              <p className="text - sm opacity - 90">Tailored solutions from $5, 000+</p>;"
              <h3 className="font - semibold">Enterprise Solutions</h3>;""
              <p className="text - sm opacity - 90">Custom pricing for large organizations</p>;"
              <h3 className="font - semibold">Consulting Services</h3>;""
              <p className="text - sm opacity - 90">Strategic guidance from $150 / hour</p>;"
          <a;"
            href="mailto:kleber@ziontechgroup.com";""
            className="inline - block px - 6 py - 3 bg - white text - purple - 600 rounded - lg font - semibold hover:bg - gray - 100 transition - colors";"
        <h2 className="text - 2xl font - bold">Questions About Pricing?</h2>;""
        <p className="opacity - 80">;"
        <div className="grid grid - cols - 1 md: grid - cols - 3 gap - 4">;"
            <h3 className="font - semibold">Phone</h3>;""
            <p className="opacity - 80">+1 302 464 0950</p>;"
            <h3 className="font - semibold">Email</h3>;""
            <p className="opacity - 80">kleber@ziontechgroup.com</p>;"
            <h3 className="font - semibold">Address</h3>;""
            <p className="opacity - 80">364 E Main St STE 1008 < br />Middletown DE 19709</p>;"
    </div>);"`;