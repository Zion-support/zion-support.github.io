<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { SEO } from '@/components/SEO';
=======
=======
import { motion } from 'framer-motion';
import { Search, Filter, Star, Clock, DollarSign, Users, MapPin, Phone, Mail } from 'lucide-react';
>>>>>>> origin/cursor/build-and-fix-errors-e276

>>>>>>> origin/cursor/build-and-fix-errors-c9ef

const EquipmentPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Equipment - Zion Tech Group"
        description="Browse our available equipment and hardware"
        canonical="https://ziontechgroup.com/equipment"
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Equipment
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              Browse our available equipment and hardware
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-white">
                Our equipment page is coming soon. You'll be able to browse and rent our available equipment and hardware.
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import React from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function EquipmentPage() {
  return (
    <>
      <SEO
        title="Tech Equipment - Zion Tech Group"
        description="Browse and rent professional tech equipment for your projects."
        canonical="https://ziontechgroup.com/equipment"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <GradientHeading>Tech Equipment</GradientHeading>
            <p className="text-xl text-zion-slate-light mt-6 max-w-3xl mx-auto">
              Access to professional-grade technology equipment for your development and testing needs.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-zion-blue-light rounded-lg p-8 border border-zion-blue-lighter">
              <h2 className="text-2xl font-bold text-white mb-6">Coming Soon</h2>
              <p className="text-zion-slate-light mb-6">
                Our equipment marketplace is currently under development. Soon you'll be able to browse, rent, and purchase professional tech equipment.
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
              </p>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div>
    </>
  );
};

export default EquipmentPage;
=======
      </main>
      <Footer />
    </>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
