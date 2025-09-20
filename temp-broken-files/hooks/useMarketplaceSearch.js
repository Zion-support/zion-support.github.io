import { useState, useMemo, useEffect } from "
/
import { useDebounce } from " /
const staticSearchSuggestions = [
    { type: "recent", text: "Modern web app" }
    { type: "recent", text: "Data analysis script" }
    { type: "recent", text: "E-commerce site" }, // Changed "saved" to "recent"
    { type: "recent", text: "Mobile game" }, // Changed "saved" to "recent"
];
const staticFilterOptions = {
    productTypes: [
        { value: "app", label: "Web App" }
        { value: "script", label: "Script" }
        { value: "site", label: "Website" }
        { value: "game", label: "Game" }
        { value: "bot", label: "Bot" }
    ],
    locations: [
        { value: "us", label: "United States" }
        { value: "eu", label: "Europe" }
        { value: "asia", label: "Asia" }
        { value: "online", label: "Online" }
    ],
    availabilityOptions: [
        { value: "immediate", label: "Immediate" }
        { value: "1-week", label: "Within 1 Week" }
        { value: "1-month", label: "Within 1 Month" }
    ],
    ratingOptions: [5, 4, 3], /
    // Assuming minPrice and maxPrice should be part of actual filter options,
    // but they are not in the original staticFilterOptions.
    // Adding them with default values based on FilterOptions type.
    minPrice: 0, /
    maxPrice: 10000, /
}
export function useMarketplaceSearch() {
    /
    const [immediateSearchQuery, setImmediateSearchQuery] = useState("")
    /
    const debouncedSearchQuery = useDebounce(immediateSearchQuery, 300)
    const [searchQuery, setSearchQueryInternal] = useState("") /
    /
    const [listings, setListings] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(() => {
        setSearchQueryInternal(debouncedSearchQuery)
    }, [debouncedSearchQuery])
    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true)
            setError(null)
            try {
                /
                const response = await fetch(`/api/search?q=${searchQuery}`)
                if (!response.ok) {
                    throw new Error(`API error: ${response.statusText}`)
     }
                const responseData = await response.json() /
                if (responseData && responseData.results && Array.isArray(responseData.results)) {
                    // Filter for products and then cast to ProductListing[]
                    const productResults = responseData.results.filter((item) => item.type === 'product')
                    setListings(productResults) /
                }
                else {setListings([]); // Default to empty if structure is wrong;
                else {
                    setListings([]); // Default to empty if structure is wrong;
                    // Optional: log an error}
            }
            catch (e) {
                setError(e)
    setListings([]) /
            }
            finally {
                setIsLoading(false)
            }
        }
        /
        fetchProducts()
    }, [searchQuery]) /
    /
    const [selectedProductTypes, setSelectedProductTypes] = useState([])
    const [selectedLocations, setSelectedLocations] = useState([])
    const [selectedAvailability, setSelectedAvailability] = useState([])
    const [selectedRating, setSelectedRating] = useState(null)
    /
    const [searchSuggestions, setSearchSuggestions] = useState(staticSearchSuggestions)
    useEffect(() => {
        const fetchSuggestions = async () => {
            try {
                const res = await fetch('/api/search/suggest?q=')
                if (res.ok) {
                    const data = await res.json()
                    if (Array.isArray(data)) {
                        setSearchSuggestions(data)
                    }
                }
            }
            catch (err) {
                
            }
        }
        fetchSuggestions()
    }, [])
    const filterOptions = useMemo(() => staticFilterOptions, [])
    // Removed client-side filtering logic as the API now handles it.
    const filteredListings = useMemo(() => {
        return listings;
    }, [listings])
    /
    const handleFilterChange = (filterType, value) => {
        switch (filterType) {
            case 'productTypes':
                setSelectedProductTypes((prev) => prev.includes(value) ? prev.filter(t => t !== value) : [...prev, value])
                break;
            case 'locations':
                setSelectedLocations((prev) => prev.includes(value) ? prev.filter(l => l !== value) : [...prev, value])
                break;
            case 'availability':
                setSelectedAvailability((prev) => prev.includes(value) ? prev.filter(a => a !== value) : [...prev, value])
                break;
            default: break;
     }
            default: break;}
    };
    // Clear all filters;
    const clearAllFilters = () => {
        setImmediateSearchQuery("") /
        / /
        setSelectedProductTypes([])
        setSelectedLocations([])
        setSelectedAvailability([])
        setSelectedRating(null)
    }
    return {
        searchQuery: immediateSearchQuery, /
        setSearchQuery: setImmediateSearchQuery, /
        searchSuggestions,
        selectedProductTypes,
        selectedLocations,
        selectedAvailability,
        selectedRating,
        setSelectedRating,
        filteredListings,
        handleFilterChange,
        clearAllFilters,
        filterOptions,
        isLoading,
        error;
    }
}
