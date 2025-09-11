import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const EquipmentDetail: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  return (
    <>
      <Header />
      <main className='min-h-screen bg-zion-blue py-12 px-4'>
        <div className='container mx-auto'>
          <div className='bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 text-center'>
            <h1 className='text-2xl font-bold text-white mb-2'>
              Equipment Detail
            </h1>
            <p className='text-zion-slate-light'>
              {id ? `ID: ${id}` : 'No equipment selected.'}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EquipmentDetail;
