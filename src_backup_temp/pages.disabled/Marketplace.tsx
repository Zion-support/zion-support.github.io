import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Filter, Star, MapPin, Clock } from 'lucide-react';
import { ProductListingCard } from '@/components/ProductListingCard';
import { ENHANCED_SERVICES } from '@/data/enhancedServices';
export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState(");
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const filteredListings = ENHANCED_SERVICES.filter(listing => {
    // Search filter
    if (searchQuery && !listing.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !listing.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    // Category filter
    if (selectedProductTypes.length > 0 && !selectedProductTypes.includes(listing.category)) {
      return false;
    }
    // Rating filter
    if (selectedRating && (!listing.rating || listing.rating < selectedRating)) {
      return false;
    }
    return true;
  });
  const handleFilterChange = ("filterType": string, "value": string) => {
    switch (filterType) {
      case 'productTypes':
        setSelectedProductTypes(prev =>
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
        break;
      case 'locations':
        setSelectedLocations(prev =>
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
        break;
      case 'availability':
        setSelectedAvailability(prev =>
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
        break;
    }
  };
  const clearAllFilters = () => {
    setSearchQuery(");
    setSelectedProductTypes([]);
    setSelectedLocations([]);
    setSelectedAvailability([]);
    setSelectedRating(null);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Marketplace</h1>
          <p className="text-gray-600">Discover and hire the best talent for your projects</p>
        </div>
        <div className="flex flex-col "lg": flex-row gap-6">
          {/* Filters Sidebar */}
          <div className=""lg": w-64 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Search</label>
                  <div className="relative mt-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search listings..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Category</label>
                  <div className="mt-2 space-y-2">
                    {['AI Automation', 'Micro SaaS', 'Web Development', 'Mobile Apps'].map(category => (
                      <label key={category} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={selectedProductTypes.includes(category)}
                          onChange={() => handleFilterChange('productTypes', category)}
                          className="rounded"
                        />
                        <span className="text-sm">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Rating</label>
                  <div className="mt-2 space-y-2">
                    {[4, 3, 2, 1].map(rating => (
                      <label key={rating} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="rating"
                          checked={selectedRating === rating}
                          onChange={() => setSelectedRating(selectedRating === rating ? null : rating)}
                          className="rounded"
                        />
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="text-sm ml-1">& up</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={clearAllFilters}
                  className="w-full"
                >
                  Clear All Filters
                </Button>
              </CardContent>
            </Card>
          </div>
          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600">
                {filteredListings.length} listings found
              </p>
            </div>
            {filteredListings.length > 0 ? (
              <div className="grid gap-6 "md": grid-cols-2 lg:grid-cols-3">
                {filteredListings.map((listing) => (
                  <ProductListingCard
                    key={listing.id}
                    listing={listing}
                    onBook={(listing) => {
                    }}
                    onViewProfile={(listing) => {
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No listings found</h3>
                <p className="text-gray-600 mb-4">
                  We couldn't find any listings matching your filters. Try adjusting your search criteria.
                </p>
                <Button onClick={clearAllFilters} className="bg-blue-600 "hover": bg-blue-700">
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
import React,{ useState } from 'react'; import { Button } from '@/components/ui/button'; import { Input } from '@/components/ui/input'; import { Card,CardContent,CardDescription,CardHeader,CardTitle } from '@/components/ui/card'; import { Search,Filter,Star,MapPin,Clock } from 'lucide-react'; import { ProductListingCard } from '@/components/ProductListingCard'; import { ENHANCED_SERVICES } from '@/data/enhancedServices'; export default function Marketplace() { const [searchQuery,setSearchQuery] = useState("); const [selectedProductTypes,setSelectedProductTypes] = useState<string[]>([]); const [selectedLocations,setSelectedLocations] = useState<string[]>([]); const [selectedAvailability,setSelectedAvailability] = useState<string[]>([]); const [selectedRating,setSelectedRating] = useState<number | null>(null); const filteredListings = ENHANCED_SERVICES.filter(listing => { if (searchQuery && !listing.title.toLowerCase().includes(searchQuery.toLowerCase()) && !listing.description.toLowerCase().includes(searchQuery.toLowerCase())) { return false} if (selectedProductTypes.length > 0 && !selectedProductTypes.includes(listing.category)) { return false} if (selectedRating && (!listing.rating || listing.rating < selectedRating)) { return false} return true}); const handleFilterChange = (filterType: string,value: string) => { switch (filterType) { case 'productTypes': setSelectedProductTypes(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev,value] ); break; case 'locations': setSelectedLocations(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev,value] ); break; case 'availability': setSelectedAvailability(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev,value] ); break} }; const clearAllFilters = () => { setSearchQuery("); setSelectedProductTypes([]); setSelectedLocations([]); setSelectedAvailability([]); setSelectedRating(null)}; return ( <div className="min-h-screen bg-gray-50"> <div className="container mx-auto py-8 px-4"> <div className="mb-8"> <h1 className="text-3xl font-bold text-gray-900 mb-2">Marketplace</h1> <p className="text-gray-600">Discover and hire the best talent for your projects</p> </div> <div className="flex flex-col lg:flex-row gap-6"> {} <div className="lg:w-64 space-y-6"> <Card> <CardHeader> <CardTitle className="flex items-center gap-2"> <Filter className="w-4 h-4" /> Filters </CardTitle> </CardHeader> <CardContent className="space-y-4"> <div> <label className="text-sm font-medium">Search</label> <div className="relative mt-1"> <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" /> <Input placeholder="Search listings..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" /> </div> </div> <div> <label className="text-sm font-medium">Category</label> <div className="mt-2 space-y-2"> {['AI Automation','Micro SaaS','Web Development','Mobile Apps'].map(category => ( <label key={category} className="flex items-center space-x-2"> <input type="checkbox" checked={selectedProductTypes.includes(category)} onChange={() => handleFilterChange('productTypes',category)} className="rounded" /> <span className="text-sm">{category}</span> </label> ))} </div> </div> <div> <label className="text-sm font-medium">Rating</label> <div className="mt-2 space-y-2"> {[4,3,2,1].map(rating => ( <label key={rating} className="flex items-center space-x-2"> <input type="radio" name="rating" checked={selectedRating === rating} onChange={() => setSelectedRating(selectedRating === rating ? null : rating)} className="rounded" /> <div className="flex items-center"> {[...Array(5)].map((_,i) => ( <Star key={i} className={`w-4 h-4 ${ i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300' }`} /> ))} <span className="text-sm ml-1">& up</span> </div> </label> ))} </div> </div> <Button variant="outline" onClick={clearAllFilters} className="w-full" > Clear All Filters </Button> </CardContent> </Card> </div> {} <div className="flex-1"> <div className="mb-6 flex items-center justify-between"> <p className="text-gray-600"> {filteredListings.length} listings found </p> </div> {filteredListings.length > 0 ? ( <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"> {filteredListings.map((listing) => ( <ProductListingCard key={listing.id} listing={listing} onBook={(listing) => { }} onViewProfile={(listing) => { }} /> ))} </div> ) : ( <div className="text-center py-12"> <div className="text-gray-400 mb-4"> <Search className="w-12 h-12 mx-auto" /> </div> <h3 className="text-lg font-medium text-gray-900 mb-2">No listings found</h3> <p className="text-gray-600 mb-4"> We couldn't find any listings matching your filters. Try adjusting your search criteria. </p> <Button onClick={clearAllFilters} className="bg-blue-600 hover:bg-blue-700"> Clear Filters </Button> </div> )} </div> </div> </div> </div> )}