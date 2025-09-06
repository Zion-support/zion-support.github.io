use client'
import { useState, useEffect } from 'react'
 from 'lucide-react'
  status: any
    features: ['marketplace', 'zion_gpt', 'kyc_aml', 'dao_voting'
    vertical: any
    features: ['academy', 'zion_gpt', 'incubator_grants'
    vertical: any
    features: ['marketplace', 'onchain_contracts', 'web3_login'
    vertical: any
  >('all'
      case 'completed'
        return 'text-green-400'
      case 'deploying'
        return 'text-blue-400'
      case 'pending'
        return 'text-yellow-400'
      case 'failed'
        return 'text-red-400'
      case 'paused'
        return 'text-orange-400'
        return 'text-gray-400'
      case 'completed'
        return 
    deployment => filter = = 'all'
  const filter = 'all'
  const filteredDeployments = deployments.filter(deployment => filter = = 'all'
    