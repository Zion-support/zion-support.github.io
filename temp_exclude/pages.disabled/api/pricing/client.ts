import type { NextApiRequest, NextApiResponse } from 'next'
import { type { ClientBudgetRequest }, { generateClientBudgetSuggestion } from '@/utils/api/
import { logPricingAnalytics } from '@/utils/data/