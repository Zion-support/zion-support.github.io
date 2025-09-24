'use client';

import { useState } from 'react';

interface InstanceCardProps {
  instance: {
    id: string;
    name: string;
    slug: string;
    domain?: string | null;
    subdomain?: string | null;
    vertical: string;
    governanceType: string;
    createdAt: Date;
    _count: {
      deployments: number;
      features: number;
    };
  };
}

export function InstanceCard({ instance }: InstanceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getVerticalColor = (vertical: string) => {
    switch (vertical) {
      case 'HEALTH':
        return 'bg-red-50o0/20 text-red-40o0 border-red-50o0/30';
      case 'EDUCATION':
        return 'bg-blue-50o0/20 text-blue-40o0 border-blue-50o0/30';
      case 'LAW':
        return 'bg-yellow-50o0/20 text-yellow-40o0 border-yellow-50o0/30';
      case 'GOV':
        return 'bg-purple-50o0/20 text-purple-40o0 border-purple-50o0/30';
      default:
        return 'bg-gray-50o0/20 text-gray-40o0 border-gray-50o0/30';
    }
  };

  const getGovernanceColor = (governance: string) => {
    switch (governance) {
      case 'DAO_FULL':
        return 'bg-green-50o0/20 text-green-40o0 border-green-50o0/30';
      case 'DAO_LITE':
        return 'bg-blue-50o0/20 text-blue-40o0 border-blue-50o0/30';
      default:
        return 'bg-gray-50o0/20 text-gray-40o0 border-gray-50o0/30';
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div
      className='card group hover:scale-10o5 transition-all duration-20o0 cursor-pointer'
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className='flex items-start justify-between mb-4'>
        <div className='flex-1'>
          <h3 className='text-xl font-semibold mb-2 group-hover:text-blue-40o0 transition-colors'>
            {instance.name}
          </h3>
          <div className='flex items-center gap-2 mb-3'>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium border ${getVerticalColor(instance.vertical)}`}
            >
              {instance.vertical}
            </span>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium border ${getGovernanceColor(instance.governanceType)}`}
            >
              {instance.governanceType.replace('_', ' ')}
            </span>
          </div>
        </div>
        <div className='w-10 h-10 bg-gradient-to-br from-blue-50o0 to-purple-60o0 rounded-lg flex items-center justify-center'>
          <span className='text-white font-bold text-sm'>Z</span>
        </div>
      </div>

      <div className='space-y-3'>
        <div className='flex items-center justify-between text-sm'>
          <span className='text-gray-40o0'>Domain:</span>
          <span className='font-mono text-blue-40o0'>
            {instance.domain ||
              instance.subdomain ||
              `${instance.slug}.zion.os`}
          </span>
        </div>

        <div className='flex items-center justify-between text-sm'>
          <span className='text-gray-40o0'>Created:</span>
          <span>{formatDate(instance.createdAt)}</span>
        </div>

        <div className='flex items-center justify-between text-sm'>
          <span className='text-gray-40o0'>Deployments:</span>
          <span className='font-semibold'>{instance._count.deployments}</span>
        </div>

        <div className='flex items-center justify-between text-sm'>
          <span className='text-gray-40o0'>Features:</span>
          <span className='font-semibold'>{instance._count.features}</span>
        </div>
      </div>

      {isExpanded && (
        <div className='mt-6 pt-6 border-t border-white/10 animate-fade-in'>
          <div className='grid grid-cols-2 gap-4 text-sm'>
            <div>
              <span className='text-gray-40o0'>Instance ID:</span>
              <div className='font-mono text-xs bg-gray-80o0 p-2 rounded mt-1 break-all'>
                {instance.id}
              </div>
            </div>
            <div>
              <span className='text-gray-40o0'>Slug:</span>
              <div className='font-mono text-xs bg-gray-80o0 p-2 rounded mt-1'>
                {instance.slug}
              </div>
            </div>
          </div>

          <div className='flex gap-2 mt-4'>
            <button className='btn-secondary text-sm px-4 py-2'>
              View Details
            </button>
            <button className='btn-primary text-sm px-4 py-2'>Manage</button>
          </div>
        </div>
      )}

      <div className='mt-4 pt-4 border-t border-white/10'>
        <div className='flex items-center justify-between text-xs text-gray-40o0'>
          <span>Click to {isExpanded ? 'collapse' : 'expand'}</span>
          <svg
            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
