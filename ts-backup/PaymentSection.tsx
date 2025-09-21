import { MapPin } from 'lucide-react';
import React from "react";

interface CountryPricing {
  name: string;
  code: string;
  currency: string;
  multiplier: number;
}

interface PaymentSectionProps {
  selectedCountry: CountryPricing;
}

export function PaymentSection({ selectedCountry }: PaymentSectionProps) {
  return (
    <div className='text-center'>
      <p className='text-gray-300 mb-2'>Selected Country</p>
      <h4 className='text-xl font-bold text-white mb-2 flex items-center justify-center'>
        <MapPin className='mr-2 h-5 w-5 text-purple-400' />
        {selectedCountry.name}
      </h4>
      <div className='bg-blue-900/50 border border-blue-700 rounded-lg p-6 mb-6'>
        <p className='text-gray-300 mb-2'>Service Fee</p>
        <p className='text-3xl font-bold text-cyan-400'>
          ${(150 * selectedCountry.multiplier).toFixed(2)} {selectedCountry.currency}
        </p>
        <p className='text-sm text-gray-400 mt-2'>
          Per incident • Transportation included
        </p>
      </div>
      <button className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105'>
        Proceed to Payment
      </button>
    </div>
  );
}