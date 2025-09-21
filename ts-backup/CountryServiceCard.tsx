import { Globe, Server, Clock, MapPin, Check } from 'lucide-react'
import React from "react";

interface CountryServiceCardProps {
  country: string;
  price: number;
  onSelect: () => void;
  onQuote: () => void;
  isPopular?: boolean;
}

export function CountryServiceCard({
  country,
  price,
  onSelect,
  onQuote,
  isPopular,
}: CountryServiceCardProps) {
  const getResponseTime = (countryName: string) => {
    const times: { [key: string]: string } = {
      'United States': '2-4 hours',
      'United Kingdom': '4-6 hours',
      'Canada': '4-6 hours',
      'Germany': '6-8 hours',
      'Australia': '8-12 hours',
      'France': '6-8 hours',
      'Japan': '8-12 hours',
      'Singapore': '6-8 hours'
    };
    return times[countryName] || '6-12 hours';
  };

  return (
    <div className={`border rounded-lg p-6 ${isPopular ? 'border-purple-500 bg-purple-900/20' : 'border-blue-700 bg-blue-900/20'}`}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <Globe className="h-6 w-6 text-blue-400 mr-2" />
          <h3 className="text-lg font-semibold text-white">{country}</h3>
        </div>
        {isPopular && (
          <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs">
            Popular
          </span>
        )}
      </div>
      
      <div className="mb-4">
        <p className="text-3xl font-bold text-cyan-400 mb-4">
          ${price.toFixed(2)}
        </p>
        <div className="space-y-2 text-gray-300">
          <div className="flex items-start">
            <Clock className="h-4 w-4 mr-2 text-purple-400 mt-1" />
            <span>Typical response time: {getResponseTime(country)}</span>
          </div>
          <div className="flex items-start">
            <MapPin className="h-4 w-4 mr-2 text-purple-400 mt-1" />
            <span>Service available in major cities</span>
          </div>
          <div className="flex items-start">
            <Server className="h-4 w-4 mr-2 text-purple-400 mt-1" />
            <span>Hardware & network support</span>
          </div>
          <div className="flex items-start">
            <Check className="h-4 w-4 mr-2 text-purple-400 mt-1" />
            <span>First hour included</span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col space-y-2">
        <button
          onClick={onSelect}
          className={`w-full py-2 px-4 rounded transition-colors ${
            isPopular
              ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          Select Service
        </button>
        <button
          onClick={onQuote}
          className="w-full py-2 px-4 rounded border border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-colors"
        >
          Get Quote
        </button>
        <button className="w-full py-2 px-4 rounded text-cyan-400 hover:text-purple-400 transition-colors">
          Contact Sales
        </button>
      </div>
    </div>
  )
}