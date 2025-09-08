<<<<<<< HEAD


=======
<<<<<<< HEAD
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }static getDerivedStateFromError(error) {return { hasError: true }componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:, error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
>>>>>>> origin/resolved-merge-conflicts
    }return this.props.children;
  }
}import React, { useState, useEffect, useMemo } from 'react';
import { useRouter  } from 'next/router';
import {Search,Filter,X,SortAsc,SortDesc,GridIcon,List,Loader2} from 'lucide-react';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Badge  } from '@/components/ui/badge';
  Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from '@/components/ui/select';
import { Checkbox  } from '@/components/ui/checkbox';
import { Slider  } from '@/components/ui/slider';
import { Separator  } from '@/components/ui/separator';
  Sheet,SheetContent,SheetHeader,SheetTitle,SheetTrigger} from '@/components/ui/sheet';
import { EnhancedSearchInput  } from './EnhancedSearchInput';
import { generateSearchSuggestions  } from '@/data/marketplaceData';
import { logErrorToProduction, logInfo  } from '@/utils/productionLogger';
interface SearchResult  {interface SearchResult  {import { use_router  } from 'next / router';
import { Search,Filter,X,SortAsc,SortDesc,GridIcon,List,Loader2;
  Loader2;
 } from 'lucide-react';
import { Button  } from '@/components / ui / button';
import { Input  } from '@/components / ui / input';
import { Badge  } from '@/components / ui / badge';
  Select,SelectContent,SelectItem,SelectTrigger,SelectValue;
  SelectValue;
} from '@/components / ui / select';
import { Checkbox  } from '@/components / ui / checkbox';
import { Slider  } from '@/components / ui / slider';
import { Separator  } from '@/components / ui / separator';
  Sheet,SheetContent,SheetHeader,SheetTitle,SheetTrigger;
} from '@/components / ui / sheet';
import { generateSearchSuggestions  } from '@/data / marketplace_data';
import { logErrorToProduction, log_info  } from '@/utils / production_logger';
  SheetTrigger;
} from '@/components / ui / sheet';
  Search;
  Filter;
  X;
  SortAsc;
  SortDesc;
  GridIcon;
  List;
  Loader2;
} from 'lucide-react';
  Select;
  SelectContent;
  SelectItem;
  SelectTrigger;
  SelectValue;
} from '@/components/ui/select';
  Sheet;
  SheetContent;
  SheetHeader;
  SheetTitle;
  SheetTrigger;
} from '@/components/ui/sheet';
import { EnhancedSearchInput } from './EnhancedSearchInput';
import { generateSearchSuggestions } from '@/data/marketplaceData';
import { logErrorToProduction, logInfo } from '@/utils/productionLogger';
import React, { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
<<<<<<< HEAD
=======
import { EnhancedSearchInput } from ./EnhancedSearchInput';
import { generateSearchSuggestions } from '@/data/marketplaceData;
import { logErrorToProduction, logInfo } from @/utils/productionLogger';
import React, { useState, useEffect, useMemo } from 'react
import { useRouter } from next/router'
>>>>>>> origin/resolved-merge-conflicts
import {
  Search
  Filter
  X
  SortAsc
  SortDesc
  GridIcon
  List
  Loader2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
  Select
  SelectContent
  SelectItem
  SelectTrigger
  SelectValue
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import { Separator } from '@/components/ui/separator'
  Sheet
  SheetContent
  SheetHeader
  SheetTitle
  SheetTrigger
} from '@/components/ui/sheet'
import { EnhancedSearchInput } from './EnhancedSearchInput'
import { generateSearchSuggestions } from '@/data/marketplaceData'
import { logErrorToProduction, logInfo } from '@/utils/productionLogger'
import { logErrorToProduction, log_info } from '@/utils/ production_logger';
origin/cursor/automate-test-improve-and-merge-code-2533
interface SearchResult {
<<<<<<< HEAD
class ErrorBoundary extends React.Component {
=======
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
class ErrorBoundary extends React.Component {
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
  constructor(props) {

    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {}
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {}
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {}
    if (this.state.hasError) {}
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }

import React, { useState, useEffect, useMemo } from 'react';

import { useRouter } from 'next/router';
import {;
  Search,;
  Filter,;
  X,;
  SortAsc,;
  SortDesc,;
  GridIcon,;
  List,;
  Loader2,;'
} from 'lucide-react';'
import { Button } from '@/components/ui/button';'
import { Input } from '@/components/ui/input';'
import { Badge } from '@/components/ui/badge';
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue,;'
} from '@/components/ui/select';'
import { Checkbox } from '@/components/ui/checkbox';'
import { Slider } from '@/components/ui/slider';'
import { Separator } from '@/components/ui/separator';
import {;
  Sheet,;
  SheetContent,;
  SheetHeader,;
  SheetTitle,;
  SheetTrigger,;'
} from '@/components/ui/sheet';'
import { EnhancedSearchInput } from './EnhancedSearchInput';'
import { generateSearchSuggestions } from '@/data/marketplaceData';'
import { logErrorToProduction, logInfo } from '@/utils/productionLogger';

  id: string;
  title: string;
  description: string;'
  type: 'product' | 'talent' | 'blog' | 'service';
  category?: string;
  url?: string;
  image?: string;
  price?: number;
  currency?: string;
  rating?: number;
  tags?: string[];

  date?: string;

interface SearchFilters {;

  types: string[];
  category: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;

  sort: string;

interface SearchResponse {;

  results: SearchResult[];
  totalCount: number;
  page: number;
  limit: number;
  query: string;

    return <span className={className}>{text}</span>;
  }

    new RegExp(`(${searchTerm && searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  );

  return (
    <span className={className}>
      {parts.map((part, index) => 
        part.toLowerCase() === searchTerm.toLowerCase() ? (
          <mark key={index} className='bg-yellow-200 text-black px-1 rounded'>

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  query: string;hasMore: boolean;hasMore: boolean;// Highlight search terms in text;
const HighlightText: React.FC<{text: string;
  searchTerm: string;
  className?: string;
}> = ({ text, searchTerm, className = '' }) => {  if (!searchTerm && searchTerm.trim()) {}// Highlight search terms in text;
const HighlightText: React.FC<{ text: string, searchTerm: string, className?: string }> = ({text,searchTerm,className = '';
}) => {if (!searchTerm.trim()) {return <span className={className}>{text}</span>;
  }const parts = text && text.split(new RegExp(`(${searchTerm && searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'))return (<span className={className}>;
      {parts.map((part, index) =>;
        part.toLowerCase() === searchTerm.toLowerCase() ? (<mark key={index} className='bg-yellow-200 text-black px-1 rounded'>;
            {part}
          </mark>;
        ) : (part;
        ))}date?: string;
interface SearchFilters  {types: string[];
  category: string;
  min_price: number;
  max_price: number;
  min_rating: number;
  sort: string;
interface SearchResponse  {results: SearchResult[];
  total_count: number;
  page: number;
  limit: number;
  query: string;
  has_more: boolean;
// Highlight search terms in text;
const HighlightText: React.FC<{text: string;
  search_term: string;
  class_name?: string;
}> = ({ text, search_term, class_name = '' }) => {  if () {) {$2;
}
// Search Result Card Component;
const SearchResultCard: React.FC<{result: SearchResult;
  searchTerm: string;
  viewMode: 'grid' | 'list';
}> = ({ result, searchTerm, viewMode }) => {const router = useRouter()const handleClick = () => {if (result.url) {router.push(result.url)}
  }</span>;
  )}// Search Result Card Component;
const SearchResultCard: React.FC<{result: SearchResult;
  searchTerm: string;
  viewMode: 'grid' | 'list';
}> = ({ result, searchTerm, viewMode }) => {const router = useRouter()const handleClick = () => {if (result && result.url) {router && router.push(result && result.url)}
  }const cardClass =;
    viewMode === 'grid';
      ? 'bg-card border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer';
      : 'bg-card border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer flex gap-4';return (<div onClick={handleClick} className={cardClass}>;
      {result.image && (<div className={viewMode === 'grid' ? 'mb-3' : 'flex-shrink-0'}>;
          <img;
            src={result.image}
            alt={result.title}
            className={viewMode === 'grid';
                ? 'w-full h-48 object-cover rounded';
                : 'w-20 h-20 object-cover rounded';
            }          />;
        </div>;
      )}</span>;
  )},// Search Result Card Component;
const SearchResultCard: React.FC<{result: SearchResult,searchTerm: string,viewMode: 'grid' | 'list';
}> = ({ result, searchTerm, viewMode }) => {const router = useRouter()const router = useRouter()const handleClick = () => {if (result.url) {router.push(result.url)}
  },const cardClass = viewMode === 'grid';
    ? 'bg-card border rounded-lg p-4 hover: shadow-lg transition-shadow cursor-pointer';
    : 'bg-card border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer flex gap-4',return (<div onClick={handleClick} className={cardClass}>;
      {result.image && (<div className={viewMode === 'grid' ? 'mb-3' : 'flex-shrink-0'}>;
          <img;
            src={result.image}alt={result.title}
            className={viewMode === 'grid' ? 'w-full h-48 object-cover rounded' : 'w-20 h-20 object-cover rounded'}
          />;
        </div>;
      )}<div className='flex-1'>;
        <div className='flex items-start justify-between mb-2'>;
          <div>;
            <h3 className='font-semibold text-lg mb-1'>;
              <HighlightText text={result.title} searchTerm={searchTerm} />;
            </h3>;
            <Badge variant='secondary' className='text-xs'>;
  const card_class =;
    view_mode === 'grid';
      ? 'bg - card border rounded - lg p - 4 hover:shadow - lg transition - shadow cursor - pointer';
      : 'bg - card border rounded - lg p - 4 hover:shadow - lg transition - shadow cursor - pointer flex gap - 4';
  return (<div on_click={handle_click} className={card_class}>;
      {result.image && (<div className={view_mode === 'grid' ? 'mb - 3' : 'flex - shrink - 0'}>;
          <img;
            src={result.image}
            alt={result.title}
            className={view_mode === 'grid';
                ? 'w - full h - 48 object - cover rounded';
                : 'w - 20 h - 20 object - cover rounded';
            }          />;
        </div>)}
      <div className='flex - 1'>;
        <div className='flex items - start justify - between mb - 2'>;
          <div>;
            <h3 className='font - semibold text - lg mb - 1'>;
              <HighlightText text={result.title} search_term={search_term} />;
            </h3>;
            <Badge variant='secondary' className='text - xs'>;
              {result.type}
            </Badge>;
          </div>;
<<<<<<< HEAD
          {result.price && (<div className='flex-1'>;
=======
          {result.price && (<div className=flex-1>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
            {part}

      )}

    </span>;
  );
},;
// Search Result Card Component;
const SearchResultCard: React.FC<{;
  result: SearchResult,;
  searchTerm: string,;'
  viewMode: 'grid' | 'list';
}> = ({ result, searchTerm, viewMode }) => {;
  const router = useRouter(),;
  const handleClick = () => {;
    if (result.url) {;
      router.push(result.url);
    }
  },
'
  const cardClass = viewMode === 'grid' '
    ? 'bg-card border rounded-lg p-4 hover: shadow-lg transition-shadow cursor-pointer''
    : 'bg-card border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer flex gap-4',

  return (
    <div onClick={handleClick} className={cardClass}>
      {result.image && (''
        <div className={viewMode === 'grid' ? 'mb-3' : 'flex-shrink-0'}>
          <img;
            src={result.image} 
            alt={result.title}''
            className={viewMode === 'grid' ? 'w-full h-48 object-cover rounded' : 'w-20 h-20 object-cover rounded'}
          />

        </div>
      )}
      '
      <div className='flex-1'>'
        <div className='flex items-start justify-between mb-2'>

              {result.type}
            </Badge>
          </div>
          {result.price && (

        <div className='flex items-start justify-between mb-2'>;
          <div>;'
            <h3 className='font-semibold text-lg mb-1'>;
              <HighlightText text={result && result.title} searchTerm={searchTerm} />;
            </h3>;'
            <Badge variant='secondary' className='text-xs'>;
              {result && result.type}
            </Badge>;
          </div>;
          {result && result.price && (;'
            <div className='text-right'>;'
              <span className='font-bold text-primary'>;'
                {result && result.currency === 'USD' ? '$' : ''}
                {result && result.price}
              </span>;'
              {result && result.type === 'talent' && (;'
                <span className='text-sm text-muted-foreground'>/hr</span>;

              )}
            </div>;
          )}
'
                <span className='text - sm text - muted - foreground'>/hr</span>)}

                {result.currency === 'USD' ? '$' : ''}{result.price}
              </span>''
              {result.type === 'talent' && <span className='text-sm text-muted-foreground'>/hr</span>}
            </div>
          )}
        </div>

        <p className='text-muted-foreground mb-3 line-clamp-2'>
          <HighlightText text={result.description} searchTerm={searchTerm} />
        </p>
'
        <div className='flex items-center justify-between'>'
          <div className='flex gap-2 flex-wrap'>
            {result.category && ('
              <Badge variant='outline' className='text-xs'>
  },;'
  const cardClass = viewMode === 'grid';'
    ? 'bg-card border rounded-lg p-4 hover: shadow-lg transition-shadow cursor-pointer';'
    : 'bg-card border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer flex gap-4',;
  return (;
    <div onClick={handleClick} className={cardClass}>;
      {result.image && (;''
        <div className={viewMode === 'grid' ? 'mb-3' : 'flex-shrink-0'}>;
          <img;
            src={result.image} ;
            alt={result.title}''
            className={viewMode === 'grid' ? 'w-full h-48 object-cover rounded' : 'w-20 h-20 object-cover rounded'}
          />;

        </div>;

              </Badge>;
            )}

              <Badge key={index} variant='outline' className='text-xs'>
                <HighlightText text={tag} searchTerm={searchTerm} />
              </Badge>
            ))}
          </div>

          {result.rating && (
            <div className='flex items-center gap-1'>
              <span className='text-yellow-500'>★</span>

              <span className='text-sm'>{result.rating.toFixed(1)}</span>
            </div>
          )}
        </div>;
      </div>;
    </div>;
  );

},;
// Filter Sidebar Component;
const FilterSidebar: React.FC<{;
  filters: SearchFilters,;
  onFiltersChange: (filters: SearchFilters) => void,;
  availableCategories: string[];
}> = ({ filters, onFiltersChange, availableCategories }) => {;
  const typeOptions = [;'
    { id: 'product', label: 'Products' },;'
    { id: 'talent', label: 'Talent' },;'
    { id: 'service', label: 'Services' },;'
    { id: 'blog', label: 'Blog Posts' }
  ],

  const handleTypeChange = (typeId: string, checked: boolean) => {}
    const newTypes = checked;
      ? [...filters.types, typeId]
      : filters.types.filter(t => t !== typeId),
    
    onFiltersChange({ ...filters, types: newTypes })
  },

  const handlePriceChange = (values: number[]) => {}
    onFiltersChange({}
      ...filters, 
      minPrice: values[0] ?? 0, 
      maxPrice: values[1] ?? 10000;
    })
  },

  return (
    <div className='space-y-6'>
      <div>
        <h3 className='font-semibold mb-3'>Content Type</h3>
        <div className='space-y-2'>
          {typeOptions.map(option => (
            <div key={option.id} className='flex items-center space-x-2'>
              <Checkbox
                id={option.id}
                checked={filters.types.includes(option.id)}

                onCheckedChange={(checked) => handleTypeChange(option.id, !!checked)}
              />'
              <label htmlFor={option.id} className='text-sm'>

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  )}// Filter Sidebar Component;
const FilterSidebar: React.FC<{filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  availableCategories: string[];
}> = ({ filters, onFiltersChange, availableCategories }) => {  const typeOptions = [;
    { id: 'product', label: 'Products' },{ id: 'talent', label: 'Talent' },{ id: 'service', label: 'Services' },{ id: 'blog', label: 'Blog Posts' }];const handleTypeChange = (typeId: string, checked: boolean) => {const newTypes = checked      ? [...filters && filters.types, typeId];
      : filters && filters.types.filter(t => t !== typeId)onFiltersChange({ ...filters, types: newTypes })},// Filter Sidebar Component;
const FilterSidebar: React.FC<{filters: SearchFilters,onFiltersChange: (filters: SearchFilters) => void,availableCategories: string[];
}> = ({ filters, onFiltersChange, availableCategories }) => {const typeOptions = [;
    { id: 'product', label: 'Products' },{ id: 'talent', label: 'Talent' },{ id: 'service', label: 'Services' },{ id: 'blog', label: 'Blog Posts' }
  ],const handleTypeChange = (typeId: string, checked: boolean) => {const newTypes = checked;
      ? [...filters.types, typeId];
      : filters.types.filter(t => t !== typeId),onFiltersChange({ ...filters, types: newTypes })},const handlePriceChange = (values: number[]) => {onFiltersChange({...filters,minPrice: values[0] ?? 0,maxPrice: values[1] ?? 10000;
    })},return (id={option.id}
                checked={filters.types.includes(option.id)}onCheckedChange={(checked) => handleTypeChange(option.id, !!checked)}
              />;
              <label htmlFor={option.id} className='text-sm'>;
                {option.label}
              </label>;
            </div>;
          ))}</div>;
      </div>;<Separator />;<div>;
        <h3 className='font-semibold mb-3'>Category</h3>;
        <Select;
          value={filters && filters.category}
          onValueChange={value =>;
            onFiltersChange({...filters,category: value === 'all' ? '' : value})<div className='space - y-6'>;
      <div>;
        <h3 className='font - semibold mb - 3'>Content Type</h3>;
        <div className='space - y-2'>;
          {type_options.map (option => (<div key={option.id} className='flex items - center space - x-2'>;
              <Checkbox;
                id={option.id}
                checked={filters.types.includes (option.id)}
                onCheckedChange={checked =>;
                  handleTypeChange (option.id, !!checked)}              />;
              <label html_for={option.id} className='text - sm'>;
                {option.label}
              </label>;
            </div>))}
        </div>;
      </div>;
      <Separator />;
      <div>;
        <h3 className='font - semibold mb - 3'>Category</h3>;
        <Select;
          value={filters.category}
          onValueChange={value =>;
            onFiltersChange ({...filters,category: value === 'all' ? '' : value;
              category: value === 'all' ? '' : value;
            })}
        >          <SelectTrigger>;
            <SelectValue placeholder='All Categories' />;
          </SelectTrigger>;
          <SelectContent>;
            <SelectItem value='all'>All Categories</SelectItem>;<h3 className='font-semibold mb-3'>Category</h3>;
        <Select value={filters.category} onValueChange={(value) =>;
          onFiltersChange({ ...filters, category: value === 'all' ? '' : value })}>;
          <SelectTrigger>;
            <SelectValue placeholder='All Categories' />;
          </SelectTrigger>;
          <SelectContent>;
            <SelectItem value='all'>All Categories</SelectItem>;
            {availableCategories.map(category => (<SelectItem key={category} value={category}>;
                {category}
              </SelectItem>;
            ))}</SelectContent>;
        </Select>;
      </div>;<Separator />;<div>;
        <h3 className='font-semibold mb-3'>Price Range</h3>;
        <div className='px-2'>;<Slider;
            value={[filters && filters.minPrice, filters && filters.maxPrice]}
            {available_categories.map (category => (<SelectItem key={category} value={category}>;
                {category}
              </SelectItem>))}
          </SelectContent>;
        </Select>;
      </div>;
      <Separator />;
      <div>;
        <h3 className='font - semibold mb - 3'>Price Range</h3>;
        <div className='px - 2'>;
          <Slider;
            value={[filters.min_price, filters.max_price]}
            onValueChange={handlePriceChange}
            min={0}
            max={10000}
            step={50}className='mb-2';
          />;
          <div className='flex justify-between text-sm text-muted-foreground'>;
            <span>${filters.minPrice}</span>;
            <span>${filters.maxPrice}</span>;
          </div>;
        </div>;
      </div>;
      <Separator />;
      <div>;
<<<<<<< HEAD
            className='mb-2'          />;
=======
            className=mb-2          />;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                {option.label}
              </label>;
            </div>;
          ))}

        <h3 className='font-semibold mb-3'>Category</h3>
        <Select value={filters.category} onValueChange={(value) => '
          onFiltersChange({ ...filters, category: value === 'all' ? '' : value })
        }>
          <SelectTrigger>'
            <SelectValue placeholder='All Categories' />

          </SelectTrigger>
          <SelectContent>'
            <SelectItem value='all'>All Categories</SelectItem>
            {availableCategories.map(category => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>;
            ))}
          </SelectContent>
        </Select>
      </div>

            onValueChange={handlePriceChange}
            min={0}
            max={10000}
            step={50}

            className='mb-2'
          />
          <div className='flex justify-between text-sm text-muted-foreground'>

            className='mb-2'
          />'
          <div className='flex justify-between text-sm text-muted-foreground'>

            <span>${filters.minPrice}</span>
            <span>${filters.maxPrice}</span>
          </div>
        </div>
      </div>

      <Separator />

      <div>

          <div className='flex justify-between text-sm text-muted-foreground'>;
            <span>${filters && filters.minPrice}</span>;
            <span>${filters && filters.maxPrice}</span>;
          </div>;
        </div>;
      </div>;

      <Separator />;

      <div>;'
        <h3 className='font-semibold mb-3'>Minimum Rating</h3>;

        <Select;
          value={filters && filters.minRating.toString()}
          onValueChange={value =>;
            onFiltersChange({ ...filters, minRating: parseFloat(value) });
          }

        <h3 className='font-semibold mb-3'>Minimum Rating</h3>
        <Select value={filters.minRating.toString()} onValueChange={(value) => 
          onFiltersChange({ ...filters, minRating: parseFloat(value) })
        }>
          <SelectTrigger>

            <SelectValue />
          </SelectTrigger>

          </SelectContent>
        </Select>
      </div>
    </div>
  )

          <div className='flex justify - between text - sm text - muted - foreground'>;
            <span>${filters.min_price}</span>;
            <span>${filters.max_price}</span>;
          </div>;
        </div>;
      </div>;
      <Separator />;
      <div>;'
        <h3 className='font - semibold mb - 3'>Minimum Rating</h3>;
        <Select;
          value={filters.min_rating.to_string ()}
          onValueChange={value =>;
            onFiltersChange ({ ...filters, min_rating: parse_float (value) });
          }
        >          <SelectTrigger>;
            <SelectValue />;
          </SelectTrigger>;
          <SelectContent>;'
            <SelectItem value='0'>Any Rating</SelectItem>;'
            <SelectItem value='1'>1+ Stars</SelectItem>;'
            <SelectItem value='2'>2+ Stars</SelectItem>;'
            <SelectItem value='3'>3+ Stars</SelectItem>;'
            <SelectItem value='4'>4+ Stars</SelectItem>;'
            <SelectItem value='4.5'>4.5+ Stars</SelectItem>;
          </SelectContent>;
        </Select>;
      </div>;
    </div>);

}
// No Results Component;

},

// No Results Component;
const NoResultsState: React.FC<{ searchTerm: string, onNewSearch: (term: string) => void }> = ({}
  searchTerm, 
  onNewSearch;
}) => {}
  const suggestions = ['
    'AI & Machine Learning','
    'Web Development','
    'Mobile App Development','
    'Data Analysis','
    'UI/UX Design','
    'Blockchain Development'
  ],

  return (
    <div className='text-center py-12'>
      <div className='mb-6'>
        <Search className='mx-auto h-16 w-16 text-muted-foreground mb-4' />
        <h2 className='text-2xl font-semibold mb-2'>No results found</h2>
        <p className='text-muted-foreground mb-6'>
          We couldn't find anything matching '{searchTerm}'. Try adjusting your
          search or filters.

        </p>
      </div>

      <div className='max-w-md mx-auto space-y-4'>
        <div>'
          <h3 className='font-semibold mb-3'>Search Suggestions:</h3>'
          <div className='flex flex-wrap gap-2 justify-center'>
            {suggestions.map((suggestion, index) => (
              <Button;
                key={index}'
                variant='outline''
                size='sm''
            className='mb-2';
          />;'
          <div className='flex justify-between text-sm text-muted-foreground'>;
            <span>${filters.minPrice}</span>;
            <span>${filters.maxPrice}</span>;
          </div>;
        </div>;
      </div>;
      <Separator />;
      <div>;'
        <h3 className='font-semibold mb-3'>Minimum Rating</h3>;
        <Select value={filters.minRating.toString()} onValueChange={(value) =>;
          onFiltersChange({ ...filters, minRating: parseFloat(value) });
        }>;
          <SelectTrigger>;
            <SelectValue />;
          </SelectTrigger>;

          </SelectContent>;
        </Select>;
      </div>;
    </div>;
  );
};

// No Results Component;

                size='sm';
                onClick={() => onNewSearch(suggestion)}
              >;

                {suggestion}
              </Button>;
            ))}

        <div className='text-sm text-muted-foreground'>
          <p>Tips for better results: </p>'
          <ul className='mt-2 space-y-1'>

            <li>• Try different keywords</li>
            <li>• Check your spelling</li>
            <li>• Use fewer filters</li>
            <li>• Search for broader terms</li>
          </ul>
        </div>
      </div>
    </div>
  )

},
;
// Main Search Results Page Component;
export const SearchResultsPage: React.FC = () => {}
  const router = useRouter(),'
  const [searchTerm, setSearchTerm] = useState(''),
  const [results, setResults] = useState<SearchResult[]>([]),
  const [loading, setLoading] = useState(false),
  const [totalCount, setTotalCount] = useState(0),
  const [currentPage, setCurrentPage] = useState(1),
  const [hasMore, setHasMore] = useState(false),'
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [showFilters, setShowFilters] = useState(false),

  const [filters, setFilters] = useState<SearchFilters>({}
    types: [],'
    category: '',
    minPrice: 0,
    maxPrice: 10000,
    minRating: 0,
    sort: 'relevance'
  }),

  // Sync search term with URL
  useEffect((,) => {
    if (router.isReady && router.query.q) {

  const [search_term, setSearchTerm] = useState ('');
  const [results, set_results] = useState < SearchResult[]>([]);
  const [loading, set_loading] = useState (false);
  const [total_count, setTotalCount] = useState (0);
  const [current_page, setCurrentPage] = useState (1);
  const [has_more, setHasMore] = useState (false);'
  const [view_mode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [show_filters, setShowFilters] = useState (false);
  const [filters, set_filters] = useState < SearchFilters>({}
    types: [],'
    category: '',
    min_price: 0,
    max_price: 10000,
    min_rating: 0,'
    sort: 'relevance',
  });
  const suggestions = generateSearchSuggestions ();
  // Extract available categories from results for filter;
  const available_categories = useMemo (() => {}
    const categories = new Set < string>();    results.for_each (result => {}
      if (categories.add (result.category)) {}
  $2;
}
    });
    return Array.from (categories).sort ();
  }, [results]);
  // Sync search term with URL;
  useEffect ((, ) => {}
    // Check condition;
if ( {) {}
  $2;
}
      const url_term = router.query.q as string;
      setSearchTerm (url_term);
    }
  }, [router.is_ready, router.query.q]);
  // Search function;
  const perform_search = async (
    term: string,
    page: number = 1,
    new_filters?: SearchFilters) => {    if () {) {}
  $2;
}
      set_results ([]);
      setTotalCount (0);
      return;
    }
<<<<<<< HEAD


=======
<<<<<<< HEAD
        <div className='text-sm text-muted-foreground'>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <div className="text-sm text-muted-foreground>;
>>>>>>> origin/resolved-merge-conflicts
          <p>Tips for better results: </p>;
          <ul className='mt-2 space-y-1'>;<div className='text-sm text-muted-foreground'>;
          <p>Tips for better results:</p>;
          <ul className='mt-2 space-y-1'>;
        <div className='text-sm text-muted-foreground'>;
          <p>Tips for better results: </p>;
<<<<<<< HEAD
          <ul className='mt-2 space-y-1'>;
=======
          <ul className=mt-2 space-y-1">;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
    set_loading (true);
    try {}
      const search_filters = new_filters || filters;
      const params = new URLSearchParams ({}
        query: term,
        page: page.to_string (),'
        limit: '20',
      });
      // Check condition;
if ( {) {}
  $2;
}'
        params.append ('type', search_filters.types.join (', '));

      }
      if (searchFilters.category) {'
        params.append('category', searchFilters.category)
      }
      if (searchFilters.minPrice > 0) {'
        params.append('minPrice', searchFilters.minPrice.toString())
      }
      if (searchFilters.maxPrice < 10000) {'
        params.append('maxPrice', searchFilters.maxPrice.toString())
      }
      if (searchFilters.minRating > 0) {'
        params.append('minRating', searchFilters.minRating.toString())
      }'
      if (searchFilters.sort !== 'relevance') {'
        params.append('sort', searchFilters.sort)
      }
`
      const response = await fetch (`/api / search?${params}`);
      const data: SearchResponse = await response.json ();
      // Check condition;
if ( {) {}
  $2;
}
        set_results (data.results);

      } else {}
        setResults(prev => [...prev, ...data.results])
      }

      setTotalCount (data.total_count);
      setCurrentPage (data.page);
      setHasMore (data.has_more);'
      log_info ('Search completed', {}
        term,
        result_count: data.results.length,
        total_count: data.total_count,
      });

    } catch (error) {'
      logErrorToProduction('Search failed', { data: error })
      setResults([])
      setTotalCount(0)
    } finally {}
      setLoading(false)
    }
  }
  // Search when term or filters change;
  useEffect((,) => {}
    if (searchTerm.trim()) {}
      performSearch(searchTerm, 1, filters)
      setCurrentPage(1)
    }

  }, [search_term, filters]);
  // Handle search input;
  const handle_search = (term: string) =>: any {}
    setSearchTerm (term);`
    router.push (`/search?q=${encodeURIComponent (term)}`, undefined, {}
      shallow: true,
    });

  }
  // Handle filter changes;
  const handleFiltersChange = (newFilters: SearchFilters) => {}
    setFilters(newFilters)
  }
  // Load more results;
  const loadMore = () => {}
    if (hasMore && !loading) {}
      performSearch(searchTerm, currentPage + 1)
    }
  }

  const activeFiltersCount = null;
    filters.types.length +
    (filters.category ? 1 : 0) +
    (filters.minPrice > 0 || filters.maxPrice < 10000 ? 1 : 0) +

    (filters.minRating > 0 ? 1 : 0)

          </div>;

        <div className='text-sm text-muted-foreground'>;
          <p>Tips for better results: </p>;'
          <ul className='mt-2 space-y-1'>;

            <li>• Try different keywords</li>;
            <li>• Check your spelling</li>;
            <li>• Use fewer filters</li>;
            <li>• Search for broader terms</li>;
          </ul>;
        </div>;
      </div>;
    </div>;
  );

  const [filters, setFilters] = useState<SearchFilters>({;
    types: [],;'
    category: '',;
    minPrice: 0,;
    maxPrice: 10000,;

    sort: 'relevance';
  }),;
  const suggestions = generateSearchSuggestions(),;
  // Extract available categories from results for filter;
  const availableCategories = useMemo(() => {;
    const categories = new Set<string>(),;
    results.forEach(result => {;
      if (result.category) categories.add(result.category);
    }),;
    return Array.from(categories).sort();
  }, [results]),;
  // Sync search term with URL;
  useEffect(() => {;
    if (router.isReady && router.query.q) {;
      const urlTerm = router.query.q as string,;
      setSearchTerm(urlTerm);
    }
  }, [router.isReady, router.query.q]),;
  // Search function;
  const performSearch = async (term: string, page: number = 1, newFilters?: SearchFilters) => {;
    if (!term.trim()) {;
      setResults([]),;
      setTotalCount(0),;
      return;
    }
;
    setLoading(true),;
    try {;
      const searchFilters = newFilters || filters,;
      const params = new URLSearchParams({;
        query: term,;
        page: page.toString(),;'
        limit: '20';
      }),;
      if (searchFilters.types.length > 0) {;'
        params.append('type', searchFilters.types.join());
      }
      if (searchFilters.category) {;'
        params.append('category', searchFilters.category);
      }
      if (searchFilters.minPrice > 0) {;'
        params.append('minPrice', searchFilters.minPrice.toString());
      }
      if (searchFilters.maxPrice < 10000) {;'
        params.append('maxPrice', searchFilters.maxPrice.toString());
      }
      if (searchFilters.minRating > 0) {;'
        params.append('minRating', searchFilters.minRating.toString());
      }'
      if (searchFilters.sort !== 'relevance') {;'
        params.append('sort', searchFilters.sort);
      }
;`
      const response = await fetch(`/api/search?${params}`),;
      const data: SearchResponse = await response.json(),;
      if (page === 1) {;
        setResults(data.results);
      } else {;
        setResults(prev => [...prev, ...data.results]);
      }
;
      setTotalCount(data.totalCount),;
      setCurrentPage(data.page),;
      setHasMore(data.hasMore),;'
      logInfo('Search completed', {;
        term,;
        resultCount: data.results.length,;
        totalCount: data.totalCount;
      });
    } catch (error) {;'
      logErrorToProduction('Search failed', { data: error }),;
      setResults([]),;

      setTotalCount(0);
    } finally {;
      setLoading(false);
    }

  // Load more results;
  const loadMore = () => {;
    if (hasMore && !loading) {;
      performSearch(searchTerm, currentPage + 1);
    }

  // Active filters count

  const activeFiltersCount = filters.types.length + 
    (filters.category ? 1 : 0) + 
    (filters.minPrice > 0 || filters.maxPrice < 10000 ? 1 : 0) +
    (filters.minRating > 0 ? 1 : 0),

    <div className='container mx-auto px-4 py-6'>
      {/* Search Header */}'
      <div className='mb-6'>'
        <div className='flex gap-4 mb-4'>'
          <div className='flex-1'>

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  )}// Main Search Results Page Component;
export const SearchResultsPage: React.FC = () => {const router = useRouter()const [searchTerm, setSearchTerm] = useState('')const [results, setResults] = useState<SearchResult[]>([])const [loading, setLoading] = useState(false)const [totalCount, setTotalCount] = useState(0)const [currentPage, setCurrentPage] = useState(1)const [hasMore, setHasMore] = useState(false)const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')const [showFilters, setShowFilters]  = useState(false)},// Main Search Results Page Component;
export const SearchResultsPage: React.FC = () => {const router = useRouter(),const [searchTerm, setSearchTerm] = useState(''),const [results, setResults] = useState<SearchResult[]>([]),const [loading, setLoading] = useState(false),const [totalCount, setTotalCount] = useState(0),const [currentPage, setCurrentPage] = useState(1),const [hasMore, setHasMore] = useState(false),const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),const [showFilters, setShowFilters] = useState(false),const [filters, setFilters] = useState<SearchFilters>({types: [],category: '',minPrice: 0,maxPrice: 10000,minRating: 0,sort: 'relevance'})const suggestions  = generateSearchSuggestions()// Extract available categories from results for filter;
  const availableCategories = useMemo(() => {const categories = new Set<string>()results && results.forEach(result => {if (result && result.category) categories && categories.add(result && result.category)})return Array && Array.from(categories).sort()}, [results])// Sync search term with URL;
  useEffect((,) => {if (router && router.isReady && router && router.query.q) {const urlTerm = router && router.query.q as string;
      setSearchTerm(urlTerm)}
  }, [router && router.isReady, router && router.query.q])// Search function;
  const performSearch = async (term: string,page: number = 1,newFilters?: SearchFilters;
  ) => {    if (!term && term.trim()) {setResults([])setTotalCount(0)return;
    }setLoading(true)try {const searchFilters = newFilters || filters;
      const params = new URLSearchParams({query: term,page: page && page.toString(),limit: '20'})if (searchFilters && searchFilters.types.length > 0) {params && params.append('type', searchFilters && searchFilters.types.join(','))}
      if (searchFilters && searchFilters.category) {params && params.append('category', searchFilters && searchFilters.category)}
      if (searchFilters && searchFilters.minPrice > 0) {params && params.append('minPrice', searchFilters && searchFilters.minPrice.toString())}
      if (searchFilters && searchFilters.maxPrice < 10000) {params && params.append('maxPrice', searchFilters && searchFilters.maxPrice.toString())}
      if (searchFilters && searchFilters.minRating > 0) {params && params.append('minRating', searchFilters && searchFilters.minRating.toString())}
      if (searchFilters && searchFilters.sort !== 'relevance') {params && params.append('sort', searchFilters && searchFilters.sort)}const response = await fetch(`/api/search?${params}`)const data: SearchResponse  = await response && response.json()if (page === 1) {setResults(data && data.results)} else {setResults(prev => [...prev, ...data && data.results])}setTotalCount(data && data.totalCount)setCurrentPage(data && data.page)setHasMore(data && data.hasMore)logInfo('Search completed', {term,resultCount: data && data.results.length,totalCount: data && data.totalCount})} catch (error) {logErrorToProduction('Search failed', { data: error })setResults([])sort: 'relevance';
  }),const suggestions = generateSearchSuggestions(),// Extract available categories from results for filter;
  const availableCategories = useMemo(() => {const categories = new Set<string>(),results.forEach(result => {if (result.category) categories.add(result.category)}),return Array.from(categories).sort()}, [results]),// Sync search term with URL;
  useEffect(() => {if (router.isReady && router.query.q) {const urlTerm = router.query.q as string,setSearchTerm(urlTerm)}
  }, [router.isReady, router.query.q]),// Search function;
  const performSearch = async (term: string, page: number = 1, newFilters?: SearchFilters) => {if (!term.trim()) {setResults([]),setTotalCount(0),return;
    }setLoading(true),try {const searchFilters = newFilters || filters,const params = new URLSearchParams({query: term,page: page.toString(),limit: '20';
      }),if (searchFilters.types.length > 0) {params.append('type', searchFilters.types.join())}
      if (searchFilters.category) {params.append('category', searchFilters.category)}
      if (searchFilters.minPrice > 0) {params.append('minPrice', searchFilters.minPrice.toString())}
      if (searchFilters.maxPrice < 10000) {params.append('maxPrice', searchFilters.maxPrice.toString())}
      if (searchFilters.minRating > 0) {params.append('minRating', searchFilters.minRating.toString())}
      if (searchFilters.sort !== 'relevance') {params.append('sort', searchFilters.sort)}const response = await fetch(`/api/search?${params}`),const data: SearchResponse = await response.json(),if (page === 1) {setResults(data.results)} else {setResults(prev => [...prev, ...data.results])}setTotalCount(data.totalCount),setCurrentPage(data.page),setHasMore(data.hasMore),logInfo('Search completed', {term,resultCount: data.results.length,totalCount: data.totalCount;
      })} catch (error) {logErrorToProduction('Search failed', { data: error }),setResults([]),setTotalCount(0)} finally {setLoading(false)}
  }// Search when term or filters change;
  useEffect((,) => {if (searchTerm && searchTerm.trim()) {performSearch(searchTerm, 1, filters)setCurrentPage(1)}
  }, [searchTerm, filters])// Handle search input;
  const handleSearch = (term: string) => {setSearchTerm(term)router && router.push(`/search?q=${encodeURIComponent(term)}`, undefined, {shallow: true})}// Handle filter changes;
  const handleFiltersChange = (newFilters: SearchFilters) => {setFilters(newFilters)},// Search when term or filters change;
  useEffect(() => {if (searchTerm.trim()) {performSearch(searchTerm, 1, filters),setCurrentPage(1)}
  }, [searchTerm, filters]),// Handle search input;
  const handleSearch = (term: string) => {setSearchTerm(term),router.push(`/search?q=${encodeURIComponent(term)}`, undefined, { shallow: true })},// Handle filter changes;
  const handleFiltersChange = (newFilters: SearchFilters) => {setFilters(newFilters)},// Load more results;
  const loadMore = () => {if (hasMore && !loading) {performSearch(searchTerm, currentPage + 1)}
  }
  }// Active filters count;
  const activeFiltersCount =;
    filters && filters.types.length +;
    (filters && filters.category ? 1 : 0) +;
    (filters && filters.minPrice > 0 || filters && filters.maxPrice < 10000 ? 1 : 0) +;
    (filters && filters.minRating > 0 ? 1 : 0)},// Active filters count;
  const activeFiltersCount = filters.types.length +;
    (filters.category ? 1 : 0) +;
    (filters.minPrice > 0 || filters.maxPrice < 10000 ? 1 : 0) +;
    (filters.minRating > 0 ? 1 : 0),return (<div className='container mx-auto px-4 py-6'>;
      {/* Search Header */}
      <div className='mb-6'>;
        <div className='flex gap-4 mb-4'>;
          <div className='flex-1'>;
    <div className='container mx-auto px-4 py-6'>;
      {/* Search Header */}
      <div className='mb-6'>;
        <div className='flex gap-4 mb-4'>;
          <div className='flex-1'>;
            <EnhancedSearchInput;
              value={searchTerm}
              onChange={setSearchTerm}
              onSelectSuggestion={suggestion => handleSearch(suggestion.text)}
              searchSuggestions={suggestions}placeholder='Search products, talent, services, and more...';
            />;
          </div>;
          <Button onClick={() => handleSearch(searchTerm)} disabled={!searchTerm.trim()}>;
            <Search className='h-4 w-4' />;
          </Button>;
        </div>;
        {searchTerm && (<div className='flex items-center justify-between'>;
            <div>;
              <h1 className='text-2xl font-bold'>Search Results</h1>;
              <p className='text-muted-foreground'>;
                {loading ? 'Searching...' : `${totalCount} results for '${searchTerm}'`}
          <div className='flex items-center justify-between'>;
            <div>;
              <h1 className='text-2xl font-bold'>Search Results</h1>;
              <p className='text-muted-foreground'>;
                {loading;
                  ? 'Searching...';
                  : `${totalCount} results for '${searchTerm}'`}
              </p>;
            </div>;
            disabled={!searchTerm && searchTerm.trim()}
          >;
            <Search className='h-4 w-4' />;
          </Button>;
        </div>;{searchTerm && (<div className='flex items-center justify-between'>;
            <div>;
              <h1 className='text-2xl font-bold'>Search Results</h1>;
              <p className='text-muted-foreground'>;
                {loading;
                  ? 'Searching...';
                  : `${totalCount} results for '${searchTerm}'`}
              </p>;
            </div>;<div className='flex items-center gap-2'>;{/* Sort Options */}
              <Select;
                value={filters.sort}
                onValueChange={value => setFilters({ ...filters, sort: value })}<div className='flex items-center gap-2'>;
              {/* Sort Options */}
              <Select value={filters.sort} onValueChange={(value) =>;
                setFilters({ ...filters, sort: value })}>;
                <SelectTrigger className='w-40'>;
                  <SelectValue />;
                </SelectTrigger>;
                <SelectContent>;
                  <SelectItem value='relevance'>Relevance</SelectItem>;
                  <SelectItem value='price_asc'>Price: Low to High</SelectItem>;
                  <SelectItem value='price_desc'>Price: High to Low</SelectItem>;
                  <SelectItem value='rating'>Highest Rated</SelectItem>;
                  <SelectItem value='relevance'>Relevance</SelectItem>;
                  <SelectItem value='price_asc'>Price: Low to High</SelectItem>;
                  <SelectItem value='price_desc'>Price: High to Low</SelectItem>;
                  <SelectItem value='rating'>Highest Rated</SelectItem>;
                </SelectContent>;
              </Select>;
              >;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
              value={searchTerm}
              onChange={setSearchTerm}
              onSelectSuggestion={(suggestion) => handleSearch(suggestion.text)}
              searchSuggestions={suggestions}

              placeholder='Search products, talent, services, and more...'
            />

          </div>
          <Button onClick={() => handleSearch(searchTerm)} disabled={!searchTerm.trim()}>'
            <Search className='h-4 w-4' />
          </Button>
        </div>

              </p>
            </div>

            <div className='flex items-center gap-2'>
              {/* Sort Options */}
              <Select value={filters.sort} onValueChange={(value) => 
                setFilters({ ...filters, sort: value })
              }>'
                <SelectTrigger className='w-40'>
                  <SelectValue />

                </SelectTrigger>

                <SelectTrigger className='w-40'>                  <SelectValue />;
  // Active filters count;
  const activeFiltersCount =;
    filters.types.length +;
    (filters.category ? 1 : 0) +;
    (filters.min_price > 0 || filters.max_price < 10000 ? 1 : 0) +;
    (filters.min_rating > 0 ? 1 : 0);
  return ('
    <div className='container mx - auto px - 4 py - 6'>;
      {/* Search Header */}'
      <div className='mb - 6'>;'
        <div className='flex gap - 4 mb - 4'>;'
          <div className='flex - 1'>;
            <EnhancedSearchInput;
              value={search_term}
              on_change={setSearchTerm}
              onSelectSuggestion={suggestion => handle_search (suggestion.text)}
              search_suggestions={suggestions}'
              placeholder='Search products, talent, services, and more...'            />;
          </div>;
          <Button;
            on_click={() => handle_search (search_term)}
            disabled={!search_term.trim ()}
          >;'
            <Search className='h - 4 w - 4' />;
          </Button>;
        </div>;
        {search_term && ('
          <div className='flex items - center justify - between'>;
            <div>;'
              <h1 className='text - 2xl font - bold'>Search Results</h1>;'
              <p className='text - muted - foreground'>;
                {loading;'
                  ? 'Searching...';'`
                  : `${total_count} results for '${search_term}'`}
              </p>;
            </div>;'
            <div className='flex items - center gap - 2'>;
              {/* Sort Options */}
              <Select;
                value={filters.sort}
                onValueChange={value => set_filters ({ ...filters, sort: value })}
              >;'
                <SelectTrigger className='w - 40'>                  <SelectValue />;
                </SelectTrigger>;
                <SelectContent>;'
                  <SelectItem value='relevance'>Relevance</SelectItem>;'
                  <SelectItem value='price_asc'>Price: Low to High</SelectItem>;'
                  <SelectItem value='price_desc'>Price: High to Low</SelectItem>;'
                  <SelectItem value='rating'>Highest Rated</SelectItem>;
                </SelectContent>;
              </Select>;

                  onClick={() => setViewMode('grid')}
                >'
                  <GridIcon className='h-4 w-4' />
                </Button>
                <Button'
                  variant={viewMode === 'list' ? 'default' : 'ghost'}'
                  size='sm''
                  onClick={() => setViewMode('list')}
                >'
                  <List className='h-4 w-4' />

                </Button>
              </div>'
                  onClick={() => setViewMode('list')}                >;'
                  <List className='h-4 w-4' />;
                </Button>;
              </div>;

              {/* Mobile Filter Toggle */}

              <Sheet open={showFilters} onOpenChange={setShowFilters}>
                <SheetTrigger asChild>'
                  <Button variant='outline' className='lg:hidden'>'
                    <Filter className='h-4 w-4 mr-2' />`
                    Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
                  </Button>
                </SheetTrigger>'
                <SheetContent side='left' className='w-80'>
                  <SheetHeader>
                    <SheetTitle>Search Filters</SheetTitle>
                  </SheetHeader>'
                  <div className='mt-6'>

                      filters={filters}
                      onFiltersChange={handleFiltersChange}
                      availableCategories={availableCategories}
                    />;
                  </div>;
                </SheetContent>;
              </Sheet>;
            </div>;
          </div>;

        )}
      </div>

      {searchTerm && (
        <div className='flex gap-6'>
          {/* Desktop Filters Sidebar */}
<<<<<<< HEAD


=======
<<<<<<< HEAD
            </div>;</div>;)}</div>;{searchTerm && (<div className='flex gap-6'>;{/* Desktop Filters Sidebar */}
          <div className='hidden lg:block w-64 flex-shrink-0'>;
            <div className='bg-card border rounded-lg p-4 sticky top-4'>;
              <div className='flex items-center justify-between mb-4'>;
                <h2 className='font-semibold'>Filters</h2>;
                {activeFiltersCount > 0 && (<div className='hidden lg:block w-64 flex-shrink-0'>;
            <div className='bg-card border rounded-lg p-4 sticky top-4'>;
              <div className='flex items-center justify-between mb-4'>;
                <h2 className='font-semibold'>Filters</h2>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </div>;</div>;)}</div>;{searchTerm && (<div className=flex gap-6'>;{/* Desktop Filters Sidebar */}
          <div className='hidden lg:block w-64 flex-shrink-0>;
            <div className=bg-card border rounded-lg p-4 sticky top-4'>;
              <div className='flex items-center justify-between mb-4>;
                <h2 className=font-semibold'>Filters</h2>;
                {activeFiltersCount > 0 && (<div className="hidden lg:block w-64 flex-shrink-0>;
            <div className=bg-card border rounded-lg p-4 sticky top-4">;
              <div className="flex items-center justify-between mb-4>;
                <h2 className=font-semibold">Filters</h2>;
>>>>>>> origin/resolved-merge-conflicts
                {activeFiltersCount > 0 && (<Button;
                    onClick={() =>;
                      setFilters({types: [],category: '',minPrice: 0,maxPrice: 10000,minRating: 0,sort: 'relevance'})}                  >;
                    Clear All;
                  </Button>;)}
              </div>;
              <FilterSidebar;
                filters = {filters}
                onFiltersChange = {handleFiltersChange}
                availableCategories = {availableCategories}
                filters = {filters}
                onFiltersChange = {handleFiltersChange}
<<<<<<< HEAD
                availableCategories = {availableCategories}variant='ghost';
                    size='sm';
                    onClick={() => setFilters({types: [],category: '',minPrice: 0,maxPrice: 10000,minRating: 0,sort: 'relevance';
=======
                availableCategories = {availableCategories}variant="ghost;
                    size=sm";
                    onClick={() => setFilters({types: [],category: ',minPrice: 0,maxPrice: 10000,minRating: 0,sort: relevance';
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

                    size='sm'
                    onClick={() => setFilters({}
                      types: [],'
                      category: '',
                      minPrice: 0,
                      maxPrice: 10000,
                      minRating: 0,'
                      sort: 'relevance'
                    })}
                  >;
                    Clear All;
                  </Button>;
                )}
              </div>;
              <FilterSidebar;
                filters={filters}
                onFiltersChange={handleFiltersChange}
                availableCategories={availableCategories}
              />;
            </div>;
          </div>;
          {/* Main Content */}

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </div>;{/* Main Content */}</div>;{/* Load More Button */}
                {hasMore && ({hasMore && (<div className='text-center'>;
                    <Button;
                      onClick={loadMore}
                      disabled={loading}
                      variant='outline'>;
                      {loading ? (<>;
                          <Loader2 className='h-4 w-4 mr-2 animate-spin' />;
                          Loading...;
                        </>;
                      ) : ('Load More Results';
          <div className='flex-1'>;
            {loading && results.length === 0 ? (<div className='flex justify-center py-12'>;
                <Loader2 className='h-8 w-8 animate-spin' />;
              </div>;
            ) : results.length === 0 && searchTerm ? (<NoResultsState;
                searchTerm={searchTerm}onNewSearch={handleSearch}
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                {hasMore && (

              <NoResultsState 
                searchTerm={searchTerm} 
                onNewSearch={handleSearch}
              />;
            ) : (;
              <>;
                {/* Results Grid/List */}
<<<<<<< HEAD


=======
<<<<<<< HEAD
                <div className={viewMode === 'grid';
                  ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6';
                  : 'space-y-4 mb-6';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <div className={viewMode === grid';
                  ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6;
                  : space-y-4 mb-6";
>>>>>>> origin/resolved-merge-conflicts
                }>;
                  {results.map((result) => (<SearchResultCard;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <div className={viewMode === 'grid' 
                  ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6"
                  : "space-y-4 mb-6"
                }>
                  {results.map((result) => (
                    <SearchResultCard
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      key={`${result.type}-${result.id}`}
                      result={result}
                      searchTerm={searchTerm}
                      viewMode={viewMode}
                    />;
                  ))}
                </div>;
                {/* Load More Button */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
                {hasMore && (<div className='text-center'>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                {hasMore && (<div className="text-center>;
>>>>>>> origin/resolved-merge-conflicts
                    <Button;
                      onClick={loadMore}disabled={loading}
                      variant='outline';
                    >;
                      {loading ? (<>;
                          <Loader2 className='h-4 w-4 mr-2 animate-spin' />;
                          Loading...;
                        </>;
<<<<<<< HEAD
                      ) : ('Load More Results';
=======
                      ) : ('Load More Results;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                {hasMore && (
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Loading...
                        </>
                      ) : (
                        'Load More Results'
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      )}
                    </Button>;
                  </div>;
                )}
              </>;
            )}
          </div>;
        </div>;
      )}

setCurrentPage (data.page);
setHasMore (data.hasMore);
//Active filters count const activeFiltersCount = filters.types.length + (filters.category ? 1 : 0) + (filters.minPrice > 0 || filters.maxPrice < 10000 ? 1 : 0) + (filters.minRating > 0 ? 1 : 0);'

}> <SelectTrigger className='w-40' > <SelectValue /> </SelectTrigger> <SelectContent> <SelectItem value='relevance' >Relevance</SelectItem> <SelectItem value='price asc' >Price: Low to High</SelectItem> <SelectItem value='price desc' >Price: High to Low</SelectItem> <SelectItem value='rating' >Highest Rated</SelectItem> </SelectContent> </Select> > <GridIcon className='h-4 w-4' /> </Button> <Button > <List className='h-4 w-4' /> </Button> </div> {
  /* Mobile Filter Toggle */
}<Sheet open= {
  showFilters
}onOpenChange= {
  setShowFilters '
}> <SheetTrigger asChild> </Button> </SheetTrigger> <SheetContent side='left' className='w-80' > <SheetHeader> <SheetTitle>Search Filters</SheetTitle> </SheetHeader> <div className='mt-6' > <FilterSidebar filters= {
  filters
}onFiltersChange= {
  handleFiltersChange
}availableCategories= {
  availableCategories
}/> </div> </SheetContent> </Sheet> </div> </div>) '
}</div> <Button variant='ghost' size='sm' onClick={
  () => setFilters ({'
  types: [], category: '', minPrice: 0, maxPrice: 10000,  minRating: 0, sort: 'relevance'
})
}> Clear All </Button>)
}</div> <FilterSidebar filters= {
  filters
}onFiltersChange= {
  handleFiltersChange
}availableCategories= {
  availableCategories
}/> </div> </div> </div>) : results.length === 0 && searchTerm ? (<NoResultsState searchTerm= {
  searchTerm
}onNewSearch= {
  handleSearch
}/> <SearchResultCard key= {
  `$ {
  result.type
}-$ {
  result.id
}`
}result= {
  result
}searchTerm= {
  searchTerm
}viewMode= {
  viewMode
}/>) )
}</div> > {''
  loading ? (<> <Loader2 className='h-4 w-4 mr-2 animate-spin' /> Loading... </>) : ('Load More Results')
}</Button> </div>)
}</>)
}</div> </div>)
}</div>)
}
export default SearchResultsPage
''

export default SearchResultsPage, ;
export default SearchResultsPage;

    </div>;
  );
};

export default SearchResultsPage;

          </div>)}
      </div>;
      {search_term && (
        <div className='flex gap - 6'>;
          {/* Desktop Filters Sidebar */}
          <div className='hidden lg:block w - 64 flex - shrink - 0'>;
            <div className='bg - card border rounded - lg p - 4 sticky top - 4'>;
              <div className='flex items - center justify - between mb - 4'>;
                <h2 className='font - semibold'>Filters</h2>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                {activeFiltersCount > 0 && (<Button;
                    variant='ghost';
                    size='sm';
                    on_click={() =>;
                      set_filters ({types: [],category: '',min_price: 0,max_price: 10000,min_rating: 0,sort: 'relevance';
                      })}                  >;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                {activeFiltersCount > 0 && (
                  <Button;
                    variant='ghost';
                    size='sm';
                    on_click={() =>;
                      set_filters ({
                        types: [],
                        category: '',
                        min_price: 0,
                        max_price: 10000,
                        min_rating: 0,
                        sort: 'relevance',
                      });
                    }                  >;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    Clear All;
                  </Button>)}
              </div>;
              <FilterSidebar;
                filters = {filters, }
                onFiltersChange = {handleFiltersChange, }
                available_categories = {available_categories, }
              />;
            </div>;
          </div>;
          {/* Main Content */}
<<<<<<< HEAD


=======
<<<<<<< HEAD
          <div className='flex - 1'>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <div className=flex - 1>;
>>>>>>> origin/resolved-merge-conflicts
            {loading && results.length === 0 ? (<div className='flex justify - center py - 12'>;
                <Loader2 className='h - 8 w - 8 animate - spin' />;
              </div>) : results.length === 0 && search_term ? (<NoResultsState;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <div className='flex - 1'>;
            {loading && results.length === 0 ? (
              <div className='flex justify - center py - 12'>;
                <Loader2 className='h - 8 w - 8 animate - spin' />;
              </div>) : results.length === 0 && search_term ? (
              <NoResultsState;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                search_term={search_term}
                onNewSearch={handle_search}              />) : (
              <>;
                {/* Results Grid / List */}
                <div;
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
                  className={view_mode === 'grid';
<<<<<<< HEAD
                      ? 'grid grid - cols - 1 md:grid - cols - 2 xl:grid - cols - 3 gap - 4 mb - 6';
=======
                      ? grid grid - cols - 1 md:grid - cols - 2 xl:grid - cols - 3 gap - 4 mb - 6;
=======
=======
=======
<<<<<<< HEAD
                  className={view_mode === 'grid';
                      ? grid grid - cols - 1 md:grid - cols - 2 xl:grid - cols - 3 gap - 4 mb - 6;
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  className={
                    view_mode === 'grid';
                      ? 'grid grid - cols - 1 md:grid - cols - 2 xl:grid - cols - 3 gap - 4 mb - 6';
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      : 'space - y-4 mb - 6';
                  }
                >;
                  {results.map (result => (                    <SearchResultCard;
                      key={`${result.type}-${result.id}`}
                      result = {result, }
                      search_term = {search_term, }
                      view_mode = {view_mode, }
                    />))}
                </div>;
                {/* Load More Button */}
<<<<<<< HEAD


=======
<<<<<<< HEAD
                {has_more && (<div className='text - center'>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
                {has_more && (
                  <div className='text - center'>;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                {has_more && (<div className=text - center>;
=======
                {has_more && (
                  <div className='text - center'>;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    <Button;
                      on_click={load_more}
                      disabled={loading}
                      variant='outline'                    >;
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
                      {loading ? (<>;
<<<<<<< HEAD
                          <Loader2 className='h - 4 w - 4 mr - 2 animate - spin' />;
=======
                          <Loader2 className=h - 4 w - 4 mr - 2 animate - spin />;
=======
=======
=======
<<<<<<< HEAD
                      {loading ? (<>;
                          <Loader2 className=h - 4 w - 4 mr - 2 animate - spin />;
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      {loading ? (
                        <>;
                          <Loader2 className='h - 4 w - 4 mr - 2 animate - spin' />;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                          Loading...;
                        </>) : (
                        'Load More Results')}
                    </Button>;
                  </div>)}
              </>)}
          </div>;
        </div>)}
    </div>);
}
export default SearchResultsPage;
  suggestion;
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}</Button>) );
}</div> </div> <li>• Try different keywords</li> <li>• Check your spelling</li> <li>• Use fewer filters</li> <li>• Search for broader terms</li> </ul> </div> </div> </div>);
}
//Main Search Results Page Component setTotalCount (data.total_count);
setCurrentPage (data.page);
setHasMore (data.has_more);
//Active filters count const activeFiltersCount = filters.types.length + (filters.category ? 1 : 0) + (filters.min_price > 0 || filters.max_price < 10000 ? 1 : 0) + (filters.min_rating > 0 ? 1 : 0);";
}> <SelectTrigger className="w - 40" > <SelectValue /> </SelectTrigger> <SelectContent> <SelectItem value="relevance" >Relevance</SelectItem> <SelectItem value="price asc" >Price: Low to High</SelectItem> <SelectItem value="price desc" >Price: High to Low</SelectItem> <SelectItem value="rating" >Highest Rated</SelectItem> </SelectContent> </Select> > <GridIcon className="h - 4 w - 4" /> </Button> <Button > <List className="h - 4 w - 4" /> </Button> </div> {
  /* Mobile Filter Toggle */;
}<Sheet open= {
  show_filters;
}onOpenChange= {
  setShowFilters ";
}> <SheetTrigger as_child> </Button> </SheetTrigger> <SheetContent side="left" className="w - 80" > <SheetHeader> <SheetTitle > Search Filters</SheetTitle> </SheetHeader> <div className="mt - 6" > <FilterSidebar filters= {
  filters;
}onFiltersChange= {
  handleFiltersChange;
}available_categories= {
  available_categories;
}/> </div> </SheetContent> </Sheet> </div> </div>) ";
}</div> <Button variant="ghost" size="sm" on_click={
  () => set_filters ({';
  types: [], category: '', min_price: 0, max_price: 10000,  min_rating: 0, sort: 'relevance';
});
}> Clear All </Button>);
}</div> <FilterSidebar filters= {
  filters;
}onFiltersChange= {
  handleFiltersChange;
}available_categories= {
  available_categories;
}/> </div> </div> </div>) : results.length === 0 && search_term ? (<NoResultsState search_term= {
  search_term;
}onNewSearch= {
  handle_search;
}/> <SearchResultCard key= {
  `$ {
  result.type;
}-$ {
  result.id;
}`;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}</Button>) )}</div> </div> <li>• Try different keywords</li> <li>• Check your spelling</li> <li>• Use fewer filters</li> <li>• Search for broader terms</li> </ul> </div> </div> </div>)}
//Main Search Results Page Component setTotalCount (data.total_count)setCurrentPage (data.page)setHasMore (data.has_more)//Active filters count const activeFiltersCount = filters.types.length + (filters.category ? 1 : 0) + (filters.min_price > 0 || filters.max_price < 10000 ? 1 : 0) + (filters.min_rating > 0 ? 1 : 0)';
}> <SelectTrigger className='w - 40' > <SelectValue /> </SelectTrigger> <SelectContent> <SelectItem value='relevance' >Relevance</SelectItem> <SelectItem value='price asc' >Price: Low to High</SelectItem> <SelectItem value='price desc' >Price: High to Low</SelectItem> <SelectItem value='rating' >Highest Rated</SelectItem> </SelectContent> </Select> > <GridIcon className='h - 4 w - 4' /> </Button> <Button > <List className='h - 4 w - 4' /> </Button> </div> {/* Mobile Filter Toggle */;
}<Sheet open= {show_filters;
}onOpenChange= {setShowFilters ';
}> <SheetTrigger as_child> </Button> </SheetTrigger> <SheetContent side='left' className='w - 80' > <SheetHeader> <SheetTitle > Search Filters</SheetTitle> </SheetHeader> <div className='mt - 6' > <FilterSidebar filters= {filters;
}onFiltersChange= {handleFiltersChange;
}available_categories= {available_categories;
}/> </div> </SheetContent> </Sheet> </div> </div>) ';
}</div> <Button variant='ghost' size='sm' on_click={() => set_filters ({';
  types: [], category: '', min_price: 0, max_price: 10000,  min_rating: 0, sort: 'relevance';
})}> Clear All </Button>)}</div> <FilterSidebar filters= {filters;
}onFiltersChange= {handleFiltersChange;
}available_categories= {available_categories;
}/> </div> </div> </div>) : results.length === 0 && search_term ? (<NoResultsState search_term= {search_term;
}onNewSearch= {handle_search;
}/> <SearchResultCard key= {`$ {result.type;
}-$ {result.id;
}`;
}result= {result;
}search_term= {search_term;
}view_mode= {view_mode;
<<<<<<< HEAD
}/>) )}</div> > {'';
  loading ? (<> <Loader2 className='h - 4 w - 4 mr - 2 animate - spin' /> Loading... </>) : ('Load More Results')}</Button> </div>)}</>)}</div> </div>)}</div>)}
=======
}/>) )}</div> > {";
  loading ? (<> <Loader2 className=h - 4 w - 4 mr - 2 animate - spin /> Loading... </>) : ('Load More Results')}</Button> </div>)}</>)}</div> </div>)}</div>)}
=======
}</Button>) );
}</div> </div> <li>• Try different keywords</li> <li>• Check your spelling</li> <li>• Use fewer filters</li> <li>• Search for broader terms</li> </ul> </div> </div> </div>);
}
//Main Search Results Page Component setTotalCount (data.total_count);
setCurrentPage (data.page);
setHasMore (data.has_more);
//Active filters count const activeFiltersCount = filters.types.length + (filters.category ? 1 : 0) + (filters.min_price > 0 || filters.max_price < 10000 ? 1 : 0) + (filters.min_rating > 0 ? 1 : 0);";
}> <SelectTrigger className="w - 40" > <SelectValue /> </SelectTrigger> <SelectContent> <SelectItem value="relevance" >Relevance</SelectItem> <SelectItem value="price asc" >Price: Low to High</SelectItem> <SelectItem value="price desc" >Price: High to Low</SelectItem> <SelectItem value="rating" >Highest Rated</SelectItem> </SelectContent> </Select> > <GridIcon className="h - 4 w - 4" /> </Button> <Button > <List className="h - 4 w - 4" /> </Button> </div> {
  /* Mobile Filter Toggle */;
}<Sheet open= {
  show_filters;
}onOpenChange= {
  setShowFilters ";
}> <SheetTrigger as_child> </Button> </SheetTrigger> <SheetContent side="left" className="w - 80" > <SheetHeader> <SheetTitle > Search Filters</SheetTitle> </SheetHeader> <div className="mt - 6" > <FilterSidebar filters= {
  filters;
}onFiltersChange= {
  handleFiltersChange;
}available_categories= {
  available_categories;
}/> </div> </SheetContent> </Sheet> </div> </div>) ";
}</div> <Button variant="ghost" size="sm" on_click={
  () => set_filters ({';
  types: [], category: '', min_price: 0, max_price: 10000,  min_rating: 0, sort: 'relevance';
});
}> Clear All </Button>);
}</div> <FilterSidebar filters= {
  filters;
}onFiltersChange= {
  handleFiltersChange;
}available_categories= {
  available_categories;
}/> </div> </div> </div>) : results.length === 0 && search_term ? (<NoResultsState search_term= {
  search_term;
}onNewSearch= {
  handle_search;
}/> <SearchResultCard key= {
  `$ {
  result.type;
}-$ {
  result.id;
}`;
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}result= {
  result;
}search_term= {
  search_term;
}view_mode= {
  view_mode;
}/>) );
}</div> > {'";
  loading ? (<> <Loader2 className="h - 4 w - 4 mr - 2 animate - spin" /> Loading... </>) : ('Load More Results');
}</Button> </div>);
}</>);
}</div> </div>);
}</div>);
}
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
export default SearchResultsPage;
'';
export default SearchResultsPage,
export default SearchResultsPage,