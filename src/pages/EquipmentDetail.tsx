<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { useParams } from 'react-router-dom';
import { SEO } from '@/components/SEO';

const EquipmentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
=======

>>>>>>> origin/cursor/build-and-fix-errors-c9ef
=======
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Clock, DollarSign, Users, MapPin, Phone, Mail } from 'lucide-react';
>>>>>>> origin/cursor/build-and-fix-errors-e276

  return (
    <>
      <SEO 
        title="Equipment Details - Zion Tech Group"
        description="View detailed information about our equipment"
        canonical={`https://ziontechgroup.com/equipment/${id}`}
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Equipment Details
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              View detailed information about our equipment
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-white">
                Equipment ID: {id}
              </p>
              <p className="text-white mt-4">
                Our equipment detail page is coming soon. You'll be able to view comprehensive information about each piece of equipment.
=======
import React from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function EquipmentDetail() {
  return (
    <>
      <SEO
        title="Equipment Details - Zion Tech Group"
        description="View detailed information about tech equipment and rental options."
        canonical="https://ziontechgroup.com/equipment"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <GradientHeading>Equipment Details</GradientHeading>
            <p className="text-xl text-zion-slate-light mt-6 max-w-3xl mx-auto">
              Detailed information about our tech equipment and rental options.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-zion-blue-light rounded-lg p-8 border border-zion-blue-lighter">
              <h2 className="text-2xl font-bold text-white mb-6">Coming Soon</h2>
              <p className="text-zion-slate-light mb-6">
                Equipment detail pages are currently under development.
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

export default EquipmentDetail;
=======
      </main>
      <Footer />
    </>
  );
}
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
