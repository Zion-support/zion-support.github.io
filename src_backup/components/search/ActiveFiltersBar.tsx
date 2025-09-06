
import React from 'react';

export default ActiveFiltersBar; import React from 'react'
import { X } from 'lucide-react'
import { Button  } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
interface SearchFilters {
  types: string[];
  category: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;
  sort: string
}
interface ActiveFiltersBarProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  onClearAll: () => void;
  className?: string
}
export const ActiveFiltersBar: React.FC<ActiveFiltersBarProps> = ({
origin/cursor/automate-test-improve-and-merge-code-2533
