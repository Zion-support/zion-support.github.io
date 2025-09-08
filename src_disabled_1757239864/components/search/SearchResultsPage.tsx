
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
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
  Loader2,;
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue,;
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import {;
  Sheet,;
  SheetContent,;
  SheetHeader,;
  SheetTitle,;
  SheetTrigger,;
} from '@/components/ui/sheet';
import { EnhancedSearchInput } from './EnhancedSearchInput';
import { generateSearchSuggestions } from '@/data/marketplaceData';
import { logErrorToProduction, logInfo } from '@/utils/productionLogger';
interface SearchResult {;
import React, { useState, useEffect, useMemo } from 'react';
import { use_router } from 'next / router';
import {
  Search,
  Filter,
  X,
  SortAsc,
  SortDesc,
  GridIcon,
  List,
  Loader2,
} from 'lucide-react';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Badge } from '@/components / ui / badge';
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components / ui / select';
import { Checkbox } from '@/components / ui / checkbox';
import { Slider } from '@/components / ui / slider';
import { Separator } from '@/components / ui / separator';
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components / ui / sheet';
import { EnhancedSearchInput } from './EnhancedSearchInput';
import { generateSearchSuggestions } from '@/data / marketplace_data';
import { logErrorToProduction, log_info } from '@/utils / production_logger';

  category?: string;
  url?: string;
  image?: string;
  price?: number;
  currency?: string;
  rating?: number;
  tags?: string[];


    <span className={className}>
      {parts.map((part, index) => 
        part.toLowerCase() === searchTerm.toLowerCase() ? (
          <mark key={index} className="bg-yellow-200 text-black px-1 rounded">




  const handleClick = () => {
    if (result.url) {
      router.push(result.url)
    }

  }


        <p className="text-muted-foreground mb-3 line-clamp-2">
          <HighlightText text={result.description} searchTerm={searchTerm} />
        </p>

        <div className="flex items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            {result.category && (
              <Badge variant="outline" className="text-xs">

  },;
  const cardClass = viewMode === 'grid';
    ? "bg-card border rounded-lg p-4 hover: shadow-lg transition-shadow cursor-pointer";
    : "bg-card border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer flex gap-4",;
  return (;
    <div onClick={handleClick} className={cardClass}>;
      {result.image && (;
        <div className={viewMode === 'grid' ? "mb-3" : "flex-shrink-0"}>;
          <img;
            src={result.image} ;
            alt={result.title}
            className={viewMode === 'grid' ? "w-full h-48 object-cover rounded" : "w-20 h-20 object-cover rounded"}
          />;

              <Badge key={index} variant="outline" className="text-xs">
                <HighlightText text={tag} searchTerm={searchTerm} />
              </Badge>
            ))}
          </div>
          
          {result.rating && (
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">★</span>
              <span className="text-sm">{result.rating.toFixed(1)}</span>
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
  const typeOptions = [;
    { id: 'product', label: 'Products' },;
    { id: 'talent', label: 'Talent' },;
    { id: 'service', label: 'Services' },;
    { id: 'blog', label: 'Blog Posts' }
  ],


  const handleTypeChange = (typeId: string, checked: boolean) => {
    const newTypes = checked 
      ? [...filters.types, typeId]

      : filters.types.filter(t => t !== typeId),
    
    onFiltersChange({ ...filters, types: newTypes })
  },


  const handlePriceChange = (values: number[]) => {
    onFiltersChange({ 
      ...filters, 
      minPrice: values[0] ?? 0, 
      maxPrice: values[1] ?? 10000 
    })

  },



                {option.label}
              </label>
            </div>
          ))}


        <h3 className="font-semibold mb-3">Category</h3>
        <Select value={filters.category} onValueChange={(value) => 
          onFiltersChange({ ...filters, category: value === 'all' ? '' : value })
        }>
          <SelectTrigger>
            <SelectValue placeholder="All Categories" />


          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {availableCategories.map(category => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}


            onValueChange={handlePriceChange}
            min={0}
            max={10000}
            step={50}


        <h3 className="font-semibold mb-3">Minimum Rating</h3>
        <Select value={filters.minRating.toString()} onValueChange={(value) => 
          onFiltersChange({ ...filters, minRating: parseFloat(value) })
        }>
          <SelectTrigger>



            <SelectValue />

          <SelectContent>
            <SelectItem value="0">Any Rating</SelectItem>
            <SelectItem value="1">1+ Stars</SelectItem>
            <SelectItem value="2">2+ Stars</SelectItem>
            <SelectItem value="3">3+ Stars</SelectItem>
            <SelectItem value="4">4+ Stars</SelectItem>
            <SelectItem value="4.5">4.5+ Stars</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )



// No Results Component
const NoResultsState: React.FC<{ searchTerm: string, onNewSearch: (term: string) => void }> = ({ 
  searchTerm, 
  onNewSearch 
}) => {
  const suggestions = [

    "AI & Machine Learning",
    "Web Development",
    "Mobile App Development",
    "Data Analysis",
    "UI/UX Design",
    "Blockchain Development"
  ],




  return (
    <div className="text-center py-12">
      <div className="mb-6">
        <Search className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-semibold mb-2">No results found</h2>
        <p className="text-muted-foreground mb-6">
          We couldn't find anything matching "{searchTerm}". Try adjusting your search or filters.
        </p>
      </div>



      <div className="max-w-md mx-auto space-y-4">
        <div>
          <h3 className="font-semibold mb-3">Search Suggestions:</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"

            className="mb-2";
          />;
          <div className="flex justify-between text-sm text-muted-foreground">;
            <span>${filters.minPrice}</span>;
            <span>${filters.maxPrice}</span>;
          </div>;
        </div>;
      </div>;
      <Separator />;
      <div>;
        <h3 className="font-semibold mb-3">Minimum Rating</h3>;
        <Select value={filters.minRating.toString()} onValueChange={(value) =>;
          onFiltersChange({ ...filters, minRating: parseFloat(value) });
        }>;
          <SelectTrigger>;

            <li>• Use fewer filters</li>
            <li>• Search for broader terms</li>
          </ul>
        </div>
      </div>
    </div>
  )


  
  const [filters, setFilters] = useState<SearchFilters>({
    types: [],
    category: '',
    minPrice: 0,
    maxPrice: 10000,
    minRating: 0,



  // Sync search term with URL
  useEffect(() => {
    if (router.isReady && router.query.q) {


      }
      if (searchFilters.category) {
        params.append('category', searchFilters.category)
      }
      if (searchFilters.minPrice > 0) {
        params.append('minPrice', searchFilters.minPrice.toString())
      }
      if (searchFilters.maxPrice < 10000) {
        params.append('maxPrice', searchFilters.maxPrice.toString())
      }
      if (searchFilters.minRating > 0) {
        params.append('minRating', searchFilters.minRating.toString())
      }
      if (searchFilters.sort !== 'relevance') {
        params.append('sort', searchFilters.sort)
      }


      setTotalCount(0)
    } finally {
      setLoading(false)
    }

  }
  // Search when term or filters change
  useEffect((,) => {
    if (searchTerm.trim()) {
      performSearch(searchTerm, 1, filters)
      setCurrentPage(1)
    }

  // Load more results
  const loadMore = () => {
    if (hasMore && !loading) {
      performSearch(searchTerm, currentPage + 1)
    }

  }


  // Active filters count
  const activeFiltersCount = filters.types.length + 
    (filters.category ? 1 : 0) + 
    (filters.minPrice > 0 || filters.maxPrice < 10000 ? 1 : 0) +

    (filters.minRating > 0 ? 1 : 0),


  return (
    <div className="container mx-auto px-4 py-6">
      {/* Search Header */}
      <div className="mb-6">
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <EnhancedSearchInput
              value={searchTerm}
              onChange={setSearchTerm}

              onSelectSuggestion={suggestion => handleSearch(suggestion.text)}
              searchSuggestions={suggestions}

          </div>
          <Button onClick={() => handleSearch(searchTerm)} disabled={!searchTerm.trim()}>
            <Search className="h-4 w-4" />
          </Button>
        </div>


        {searchTerm && (
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Search Results</h1>
              <p className="text-muted-foreground">
                {loading ? 'Searching...' : `${totalCount} results for "${searchTerm}"`}
              </p>
            </div>



            <div className="flex items-center gap-2">
              {/* Sort Options */}
              <Select value={filters.sort} onValueChange={(value) => 
                setFilters({ ...filters, sort: value })
              }>
                <SelectTrigger className="w-40">
                  <SelectValue />




                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="price_asc">Price: Low to High</SelectItem>
                  <SelectItem value="price_desc">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>

              >;
                <SelectTrigger className='w-40'>                  <SelectValue />;
  // Active filters count;
  const activeFiltersCount =;
    filters.types.length +;
    (filters.category ? 1 : 0) +;
    (filters.min_price > 0 || filters.max_price < 10000 ? 1 : 0) +;
    (filters.min_rating > 0 ? 1 : 0);
  return (
    <div className='container mx - auto px - 4 py - 6'>;
      {/* Search Header */}
      <div className='mb - 6'>;
        <div className='flex gap - 4 mb - 4'>;
          <div className='flex - 1'>;
            <EnhancedSearchInput;
              value={search_term}
              on_change={setSearchTerm}
              onSelectSuggestion={suggestion => handle_search (suggestion.text)}
              search_suggestions={suggestions}
              placeholder='Search products, talent, services, and more...'            />;
          </div>;
          <Button;
            on_click={() => handle_search (search_term)}
            disabled={!search_term.trim ()}
          >;
            <Search className='h - 4 w - 4' />;
          </Button>;
        </div>;
        {search_term && (
          <div className='flex items - center justify - between'>;
            <div>;
              <h1 className='text - 2xl font - bold'>Search Results</h1>;
              <p className='text - muted - foreground'>;
                {loading;
                  ? 'Searching...';
                  : `${total_count} results for "${search_term}"`}
              </p>;
            </div>;
            <div className='flex items - center gap - 2'>;
              {/* Sort Options */}
              <Select;
                value={filters.sort}
                onValueChange={value => set_filters ({ ...filters, sort: value })}
              >;
                <SelectTrigger className='w - 40'>                  <SelectValue />;
                </SelectTrigger>;
                <SelectContent>;
                  <SelectItem value='relevance'>Relevance</SelectItem>;
                  <SelectItem value='price_asc'>Price: Low to High</SelectItem>;
                  <SelectItem value='price_desc'>Price: High to Low</SelectItem>;
                  <SelectItem value='rating'>Highest Rated</SelectItem>;
                </SelectContent>;
              </Select>;


                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <GridIcon className="h-4 w-4" />
                </Button>
                <Button

              <Sheet open={showFilters} onOpenChange={setShowFilters}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Search Filters</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterSidebar


          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-card border rounded-lg p-4 sticky top-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Filters</h2>
                {activeFiltersCount > 0 && (
                  <Button


                    variant="ghost"
                    size="sm"
                    onClick={() => setFilters({
                      types: [],
                      category: '',
                      minPrice: 0,
                      maxPrice: 10000,
                      minRating: 0,
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

                  <div className="text-center">
                    <Button 
                      onClick={loadMore} 
                      disabled={loading}
                      variant="outline"
                    >


                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Loading...
                        </>
                      ) : (
                        'Load More Results'
                      )}
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}


