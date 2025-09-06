import React from 'react';
  return (
    <Layout
      title="Cybersecurity Services - Zion Tech Group"
      description="Comprehensive cybersecurity services to protect your business from threats. Advanced security solutions, compliance, and 24/7 monitoring."
      keywords="cybersecurity, security services, data protection, threat monitoring, compliance, security audit"
    >
      <div className="min-h-screen bg-white">
        {/* Hero Section */}

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}

        {/* CTA Section */}
  );
}