import React, { useState } from 'react';
import { SERVICE_CATEGORIES;
  ALL_SERVICES;
  AI_SERVICES;
  IT_SERVICES;
  MICRO_SAAS_SERVICES;
  CYBERSECURITY_SERVICES;
  DATA_ANALYTICS_SERVICES;
  CLOUD_SOLUTIONS
 } from '@/data/servicesData';
import { ServiceCategory, ServiceSolution  } from '@/types/services';
export function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const filteredServices = null;
  return (
    <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
      {/* Service Image */}
      <div className='h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden'>
        <img
          src={service.images[0]}
          alt={service.title}
          className='w-full h-full object-cover'
        />
        <div className='absolute top-4 right-4'>
          <span className='bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold'>            {service.category}
          </span>
        </div>
        {service.aiScore && (
          <div className='absolute bottom-4 left-4'>
            <span className='bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>              AI Score: {service.aiScore}      {/* Service Image */}
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
        <img 
          src={service.images[0]} 
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
            {service.category}
          </span>
        </div>
        {service.aiScore && (
          <div className='absolute bottom-4 left-4'>
            <span className='bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>          <div className="absolute bottom-4 left-4">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              AI Score: {service.aiScore}
            </span>
          </div>
        )}
      </div>

      {/* Service Content */}
      <div className='p-6'>
        <div className='flex items-start justify-between mb-3'>
          <h3 className='text-xl font-bold text-gray-900 mb-2'>
            {service.title}
          </h3>
          <div className='flex items-center gap-1'>
            <span className='text-yellow-500'>⭐</span>
            <span className='text-sm font-medium'>
              {service.provider.rating}
            </span>
            <span className='text-gray-500 text-sm'>
              ({service.provider.reviewCount})
            </span>
          </div>
        </div>

        <p className='text-gray-600 mb-4 line-clamp-3'>{service.description}</p>

        {/* Provider Info */}
        <div className='flex items-center gap-3 mb-4'>
          <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center'>
            <span className='text-blue-600 font-semibold text-sm'>              {service.provider.name.charAt(0)}
            </span>
          </div>
          <div>          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>

        {/* Provider Info */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-semibold text-sm">
              {service.provider.name.charAt(0)}
            </span>
          </div>
          <div>
            <p className='font-medium text-gray-900'>{service.provider.name}</p>
            <p className='text-sm text-gray-500'>{service.provider.location}</p>
          </div>
          {service.provider.verified && (
            <span className='text-blue-600 text-sm'>✓ Verified</span>          )}
        </div>

        {/* Pricing */}            <p className="font-medium text-gray-900">{service.provider.name}</p>
            <p className="text-sm text-gray-500">{service.provider.location}</p>
          </div>
          {service.provider.verified && (
            <span className="text-blue-600 text-sm">✓ Verified</span>
        </div>

        {/* Pricing */}
        <div className='bg-gray-50 rounded-lg p-4 mb-4'>
          <div className='text-center'>
            <div className='text-2xl font-bold text-gray-900'>
              {popularPlan.currency}
              {popularPlan.price}
              <span className='text-sm font-normal text-gray-500'>                /{popularPlan.period}
              </span>
            </div>
            {popularPlan.popular && (
              <span className='bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium'>                Most Popular        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              {popularPlan.currency}{popularPlan.price}
              <span className="text-sm font-normal text-gray-500">
              </span>
            </div>
            {popularPlan.popular && (
              <span className='bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium'>              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                Most Popular
              </span>
            )}
          </div>
        </div>

        {/* Features Preview */}
        <div className='mb-4'>
          <h4 className='font-semibold text-gray-900 mb-2'>Key Features:</h4>
          <div className='flex flex-wrap gap-2'>
            {service.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className='bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs'              >            {service.features.slice(0, 3).map((feature, index) => (
              <span 
                key={index}
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
              >
                {feature}
              </span>
            ))}
            {service.features.length > 3 && (
              <span className='text-gray-500 text-xs'>                +{service.features.length - 3} more              <span className="text-gray-500 text-xs">
                +{service.features.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className='flex gap-2'>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className='flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors'          >        <div className="flex gap-2">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            {showDetails ? 'Hide Details' : 'View Details'}
          </button>
          <a
            href={`tel:+13024640950`}
            className='bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors'          >            className="bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            Call Now
          </a>
        </div>

        {/* Detailed Information */}
        {showDetails && (
          <div className='mt-6 pt-6 border-t border-gray-200'>
            <div className='space-y-4'>
              {/* Benefits */}
              <div>
                <h4 className='font-semibold text-gray-900 mb-2'>Benefits:</h4>
                <ul className='list-disc list-inside text-sm text-gray-600 space-y-1'>                  {service.benefits.slice(0, 3).map((benefit, index) => (          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="space-y-4">
              {/* Benefits */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>

              {/* Use Cases */}
              <div>
                <h4 className='font-semibold text-gray-900 mb-2'>Use Cases:</h4>
                <div className='flex flex-wrap gap-2'>
                  {service.useCases.slice(0, 3).map((useCase, index) => (
                    <span
                      key={index}
                      className='bg-green-100 text-green-800 px-2 py-1 rounded text-xs'                    >                  {service.useCases.slice(0, 3).map((useCase, index) => (
                    <span 
                      key={index}
                      className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className='font-semibold text-gray-900 mb-2'>
                  Technologies:
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {service.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className='bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs'                    >                  {service.technologies.slice(0, 4).map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deployment & Support */}
              <div className='grid grid-cols-2 gap-4 text-sm'>
                <div>
                  <span className='font-medium text-gray-900'>Deployment:</span>
                  <p className='text-gray-600'>{service.deploymentTime}</p>
                </div>
                <div>
                  <span className='font-medium text-gray-900'>Support:</span>
                  <p className='text-gray-600'>
                    {service.support.slice(0, 2).join(', ')}
                  </p>                </div>                <div>
                  <span className="font-medium text-gray-900">Deployment:</span>
                  <p className="text-gray-600">{service.deploymentTime}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Support:</span>
                  <p className="text-gray-600">{service.support.slice(0, 2).join(', ')}</p>
                </div>
              </div>

              {/* All Pricing Plans */}
              <div>
                <h4 className='font-semibold text-gray-900 mb-2'>
                  Pricing Plans:
                </h4>
                <div className='space-y-2'>
                  {Object.entries(service.pricing).map(([plan, details]) => (
                    <div
                      key={plan}
                      className='flex justify-between items-center text-sm'
                    >
                      <span className='capitalize font-medium'>{plan}</span>
                      <span className='text-gray-600'>
                        {details.currency}
                        {details.price}/{details.period}                      </span>                    <div key={plan} className="flex justify-between items-center text-sm">
                      <span className="capitalize font-medium">{plan}</span>
                      <span className="text-gray-600">
                        {details.currency}{details.price}/{details.period}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className='bg-blue-50 rounded-lg p-4 text-center'>
                <p className='text-sm text-blue-800 mb-2'>
                  Ready to get started with {service.title}?
                </p>
                <div className='flex gap-2 justify-center'>
                  <a
                    href={`tel:+13024640950`}
                    className='bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors'                  >                  Ready to get started with {service.title}?
                </p>
                <div className="flex gap-2 justify-center">
                  <a
                    href={`tel:+13024640950`}
                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    📞 Call +1 302 464 0950
                  </a>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
                    className='bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors'                  >                    className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors"
                  >
                    ✉️ Email Inquiry
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
);  )
}
