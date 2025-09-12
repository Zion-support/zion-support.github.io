  const totalPages = itemsPerPage
    ? Math.ceil(filteredListings.length / itemsPerPage)
    : 1;

  const paginatedListings = itemsPerPage
    ? filteredListings.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : filteredListings;

  useEffect(() => {setCurrentPage(1);}, [searchQuery, selectedCategory, currentPriceFilter, selectedRating]);

  const handleRequestQuote = (props: any) => {
    setIsLoading(true);
    const listing = allListings.find(item => item.id === listingId);
    ;
    setTimeout(() => {;
      setIsLoading(false);
      if (listing) {
        toast({
          title: "Quote Requested",
          description: `Your quote request for ${listing.title} has been sent.`
        }
    );

        navigate("/request-quote", {
          state: {
            serviceType: categorySlug,
            specificItem: {
              id: listing.id,
              title: listing.title,
              category: listing.category,
              image: listing.images?.[0]
            }
          }
        }
    );
      }
    }, 500);
  };

  return (
        <div className="min-h-screen bg-blue-900 py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
          <p className="text-xl text-blue-200">{description}</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">;
          <div className="grid grid-cols-1 "md": "grid-cols-4 gap-4 mb-6">;
            <div className="relative">;
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"  />;
              <Input;
                placeholder="Search listings...";
                value={searchQuery"}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10";
              />;
            </div>;
            ;
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>;
              <SelectTrigger>;
                <SelectValue placeholder="Category"  />;
              </SelectTrigger>;
              <SelectContent>;
                <SelectItem value="all">All Categories</SelectItem>;
                {categoryFilters?.map((filter) => (;
                  <SelectItem key={filter.value} value={filter.value}>;
                    {filter.label}
                  </SelectItem>;
                ))}
              </SelectContent>;
            </Select>;

            <Select value={selectedRating?.toString() || ""} onValueChange={(value) => setSelectedRating(value ? parseInt(value) : "null)"}>;
              <SelectTrigger>;
                <SelectValue placeholder="Rating"  />;
              </SelectTrigger>;
              <SelectContent>;
                <SelectItem value="">Any Rating</SelectItem>;
                <SelectItem value="4">4+ Stars</SelectItem>;
                <SelectItem value="3">3+ Stars</SelectItem>;
                <SelectItem value="2">2+ Stars</SelectItem>;
              </SelectContent>;
            </Select>;

            <div className="flex gap-2">;
              <Button;
                variant={view === "grid" ? "default" : "outline"}
                size="sm";
                onClick={() => setView("grid")}
              >;
                <LayoutGrid className="w-4 h-4"  />;
              </Button>;
              <Button;
                variant={view === "list" ? "default" : "outline"}
                size="sm";
                onClick={() => setView("list")}
              >;
                <List className="w-4 h-4"  />;
              </Button>;
            </div>;
          </div>;

          {/* Price Range Slider */}
          <div className="space-y-2">;
            <label className="text-sm font-medium text-white">Price Range</label>;
            <div className="flex gap-4 items-center">;
              <span className="text-white">${currentPriceFilter[0]}</span>;
              <input;
                type="range";
                min={priceRange.min}
                max={priceRange.max}
                value={currentPriceFilter[1]}
                onChange={(e) => setCurrentPriceFilter([currentPriceFilter[0], parseInt(e.target.value)])}
                className="flex-1";
              />;
              <span className="text-white">${currentPriceFilter[1]}</span>;
            </div>;
          </div>;
        </div>;

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {paginatedListings.map((listing) => (
            <div key={listing.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="aspect-square bg-gray-300 rounded-lg mb-4"></div>
              <h3 className="text-lg font-semibold text-white mb-2">{listing.title}
              <p className="text-gray-300 text-sm mb-3 line-clamp-2">{listing.description}</p>
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-bold text-white">${listing.price}</span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current"  />
                  <span className="text-white text-sm">{listing.rating || 0}</span>
                </div>
              </div>
              <Button 
                onClick={() => handleRequestQuote(listing.id)}
                disabled={isLoading}
                className="w-full";
              >;
                {isLoading ? "Requesting..." : "Request Quote"}
              </Button>;
            </div>;
          ))}
        </div>;

        {/* Pagination */}
        {totalPages > 1 && (;
          <div className="flex justify-center mt-8">;
            <div className="flex gap-2">;
              {Array.from({ "length": "totalPages "}, (_, i) => (;
                <Button;
                  key={i + 1}
                  variant={currentPage === i + 1 ? "default" : "outline"}
                  onClick={() => setCurrentPage(i + 1)}
                >;
                  {i + 1}
                </Button>;
              ))}
            </div>;
          </div>;
        )}
      </div>
    </div>
    );
}
import React,{useState,useEffect} from "react"; import {useNavigate} from "react-router-dom"; import {Button} from "@/components/ui/button"; import {Input} from "@/components/ui/input"; import {Select,SelectValue,SelectTrigger,SelectContent,SelectItem} from "@/components/ui/select"; import {Skeleton} from "@/components/ui/skeleton"; import {Search,Filter,LayoutGrid,List,Star} from "lucide-react"; import {toast} from "@/hooks/use-toast"; export function DynamicListingPage(props: any) { const navigate = useNavigate(); const [searchQuery,setSearchQuery] = useState(""); const [selectedCategory,setSelectedCategory] = useState("all"); const [view,setView] = useState("grid"); const [isLoading,setIsLoading] = useState(false); const [priceRange,setPriceRange] = useState(initialPrice); const [currentPage,setCurrentPage] = useState(1); const [selectedRating,setSelectedRating] = useState(null); const [currentPriceFilter,setCurrentPriceFilter] = useState([0,initialPrice.max]); const itemsPerPage = 12; useEffect(() => { const listingsWithPrice = allListings.filter(l => l.price !== null); if (listingsWithPrice.length > 0) { const max = Math.max(...listingsWithPrice.map(l => l.price || 0)); setPriceRange({ min: 0,max }); setCurrentPriceFilter([0,max])} },[allListings]); const handleSliderChange = (props: any) => {setCurrentPriceFilter([values[0],values[1]])}; const filteredListings = allListings.filter(listing => {const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) || listing.description.toLowerCase().includes(searchQuery.toLowerCase()); const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory; const matchesPrice = listing.price >= currentPriceFilter[0] && listing.price <= currentPriceFilter[1]; const matchesRating = selectedRating === null || (listing.rating !== null && listing.rating >= selectedRating); return matchesSearch && matchesCategory && matchesPrice && matchesRating}); const totalPages = itemsPerPage ? Math.ceil(filteredListings.length / itemsPerPage) : 1; const paginatedListings = itemsPerPage ? filteredListings.slice((currentPage - 1) * itemsPerPage,currentPage * itemsPerPage) : filteredListings; useEffect(() => {setCurrentPage(1)},[searchQuery,selectedCategory,currentPriceFilter,selectedRating]); const handleRequestQuote = (props: any) => { setIsLoading(true); const listing = allListings.find(item => item.id === listingId); setTimeout(() => { setIsLoading(false); if (listing) { toast({ title: "Quote Requested",description: `Your quote request for ${listing.title} has been sent.` }); navigate("/request-quote",{ state: { serviceType: categorySlug,specificItem: { id: listing.id,title: listing.title,category: listing.category,image: listing.images?.[0] } } })} },500)}; return ( <div className="min-h-screen bg-blue-900 py-12 px-4"> <div className="container mx-auto"> <div className="text-center mb-12"> <h1 className="text-4xl font-bold text-white mb-4">{title}</h1> <p className="text-xl text-blue-200">{description}</p> </div> {} <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8"> <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"> <div className="relative"> <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" /> <Input placeholder="Search listings..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" /> </div> <Select value={selectedCategory} onValueChange={setSelectedCategory}> <SelectTrigger> <SelectValue placeholder="Category" /> </SelectTrigger> <SelectContent> <SelectItem value="all">All Categories</SelectItem> {categoryFilters?.map((filter) => ( <SelectItem key={filter.value} value={filter.value}> {filter.label} </SelectItem> ))} </SelectContent> </Select> <Select value={selectedRating?.toString() || ""} onValueChange={(value) => setSelectedRating(value ? parseInt(value) : null)}> <SelectTrigger> <SelectValue placeholder="Rating" /> </SelectTrigger> <SelectContent> <SelectItem value="">Any Rating</SelectItem> <SelectItem value="4">4+ Stars</SelectItem> <SelectItem value="3">3+ Stars</SelectItem> <SelectItem value="2">2+ Stars</SelectItem> </SelectContent> </Select> <div className="flex gap-2"> <Button variant={view === "grid" ? "default" : "outline"} size="sm" onClick={() => setView("grid")} > <LayoutGrid className="w-4 h-4" /> </Button> <Button variant={view === "list" ? "default" : "outline"} size="sm" onClick={() => setView("list")} > <List className="w-4 h-4" /> </Button> </div> </div> {} <div className="space-y-2"> <label className="text-sm font-medium text-white">Price Range</label> <div className="flex gap-4 items-center"> <span className="text-white">${currentPriceFilter[0]}</span> <input type="range" min={priceRange.min} max={priceRange.max} value={currentPriceFilter[1]} onChange={(e) => setCurrentPriceFilter([currentPriceFilter[0],parseInt(e.target.value)])} className="flex-1" /> <span className="text-white">${currentPriceFilter[1]}</span> </div> </div> </div> {} <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"> {paginatedListings.map((listing) => ( <div key={listing.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:border-white/40 transition-all duration-300"> <div className="aspect-square bg-gray-300 rounded-lg mb-4"></div> <h3 className="text-lg font-semibold text-white mb-2">{listing.title}</h3> <p className="text-gray-300 text-sm mb-3 line-clamp-2">{listing.description}</p> <div className="flex items-center justify-between mb-3"> <span className="text-2xl font-bold text-white">${listing.price}</span> <div className="flex items-center gap-1"> <Star className="w-4 h-4 text-yellow-400 fill-current" /> <span className="text-white text-sm">{listing.rating || 0}</span> </div> </div> <Button onClick={() => handleRequestQuote(listing.id)} disabled={isLoading} className="w-full" > {isLoading ? "Requesting..." : "Request Quote"} </Button> </div> ))} </div> {} {totalPages > 1 && ( <div className="flex justify-center mt-8"> <div className="flex gap-2"> {Array.from({ length: totalPages },(_,i) => ( <Button key={i + 1} variant={currentPage === i + 1 ? "default" : "outline"} onClick={() => setCurrentPage(i + 1)} > {i + 1} </Button> ))} </div> </div> )} </div> </div> )}