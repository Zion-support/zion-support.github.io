

class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }static getDerivedStateFromError(error) {return { hasError: true }componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:, error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
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
class ErrorBoundary extends React.Component {


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
          {result.price && (<div className='flex-1'>;


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
            className='mb-2'          />;


        <div className='text-sm text-muted-foreground'>;
        <div className="text-sm text-muted-foreground>;
          <p>Tips for better results: </p>;
          <ul className='mt-2 space-y-1'>;<div className='text-sm text-muted-foreground'>;
          <p>Tips for better results:</p>;
          <ul className='mt-2 space-y-1'>;
        <div className='text-sm text-muted-foreground'>;
          <p>Tips for better results: </p>;
          <ul className='mt-2 space-y-1'>;


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


            </div>;</div>;)}</div>;{searchTerm && (<div className='flex gap-6'>;{/* Desktop Filters Sidebar */}
          <div className='hidden lg:block w-64 flex-shrink-0'>;
            <div className='bg-card border rounded-lg p-4 sticky top-4'>;
              <div className='flex items-center justify-between mb-4'>;
                <h2 className='font-semibold'>Filters</h2>;
                {activeFiltersCount > 0 && (<div className='hidden lg:block w-64 flex-shrink-0'>;
            <div className='bg-card border rounded-lg p-4 sticky top-4'>;
              <div className='flex items-center justify-between mb-4'>;
                <h2 className='font-semibold'>Filters</h2>;
            </div>;</div>;)}</div>;{searchTerm && (<div className=flex gap-6'>;{/* Desktop Filters Sidebar */}
          <div className='hidden lg:block w-64 flex-shrink-0>;
            <div className=bg-card border rounded-lg p-4 sticky top-4'>;
              <div className='flex items-center justify-between mb-4>;
                <h2 className=font-semibold'>Filters</h2>;
                {activeFiltersCount > 0 && (<div className="hidden lg:block w-64 flex-shrink-0>;
            <div className=bg-card border rounded-lg p-4 sticky top-4">;
              <div className="flex items-center justify-between mb-4>;
                <h2 className=font-semibold">Filters</h2>;
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
                availableCategories = {availableCategories}variant='ghost';
                    size='sm';
                    onClick={() => setFilters({types: [],category: '',minPrice: 0,maxPrice: 10000,minRating: 0,sort: 'relevance';


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


                <div className={viewMode === 'grid';
                  ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6';
                  : 'space-y-4 mb-6';
                <div className={viewMode === grid';
                  ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6;
                  : space-y-4 mb-6";
                }>;
                  {results.map((result) => (<SearchResultCard;
                {hasMore && (<div className='text-center'>;
                {hasMore && (<div className="text-center>;
                    <Button;
                      onClick={loadMore}disabled={loading}
                      variant='outline';
                    >;
                      {loading ? (<>;
                          <Loader2 className='h-4 w-4 mr-2 animate-spin' />;
                          Loading...;
                        </>;
                      ) : ('Load More Results';


                {activeFiltersCount > 0 && (<Button;
                    variant='ghost';
                    size='sm';
                    on_click={() =>;
                      set_filters ({types: [],category: '',min_price: 0,max_price: 10000,min_rating: 0,sort: 'relevance';
                      })}                  >;


          <div className='flex - 1'>;
          <div className=flex - 1>;
            {loading && results.length === 0 ? (<div className='flex justify - center py - 12'>;
                <Loader2 className='h - 8 w - 8 animate - spin' />;
              </div>) : results.length === 0 && search_term ? (<NoResultsState;


                  className={view_mode === 'grid';
                      ? 'grid grid - cols - 1 md:grid - cols - 2 xl:grid - cols - 3 gap - 4 mb - 6';
                  className={view_mode === 'grid';
                      ? grid grid - cols - 1 md:grid - cols - 2 xl:grid - cols - 3 gap - 4 mb - 6;


                {has_more && (<div className='text - center'>;
                {has_more && (<div className=text - center>;


                      {loading ? (<>;
                          <Loader2 className='h - 4 w - 4 mr - 2 animate - spin' />;
                      {loading ? (<>;
                          <Loader2 className=h - 4 w - 4 mr - 2 animate - spin />;


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
}/>) )}</div> > {'';
  loading ? (<> <Loader2 className='h - 4 w - 4 mr - 2 animate - spin' /> Loading... </>) : ('Load More Results')}</Button> </div>)}</>)}</div> </div>)}</div>)}
