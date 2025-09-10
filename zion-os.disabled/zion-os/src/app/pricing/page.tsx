        ctaLink: "mailto:kleber@ziontechgroup.com";
      }
    ];
  }

  const filteredServices = selectedCategory === "All";
    ? servicePricing;
    : servicePricing.filter(service => service.category === selectedCategory);
  return (;"
    <div className="space-y-8">;"
      <div className="text-center space-y-4">;"
        <h1 className="text-4xl font-bold">Pricing & Plans</h1>;"
        <p className="text-xl opacity-80 max-w-3xl mx-auto">;
"use client",

  name: string,
  price: string,
  period: string,
  description: string,
  features: string[],
  popular?: boolean,
  cta: string,
  cta_link: string;
