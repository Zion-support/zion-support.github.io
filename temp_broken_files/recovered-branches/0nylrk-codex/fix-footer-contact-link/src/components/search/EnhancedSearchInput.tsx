 interface EnhancedSearchInputProps {
  value: string;
onChange: (value: string) => void;
placeholder?: string;
searchSuggestions: SearchSuggestion[] 
}export function EnhancedSearchInput ({
  value;
onChange;
placeholder = "Search...";
searchSuggestions 
}: EnhancedSearchInputProps) {
  const [isFocused, setIsFocused] = useState (false);
const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]> ([]);
const inputRef = useRef<HTMLInputElement> (null);
const containerRef = useRef<HTMLDivElement> (null);
if (!value) {
  //Show recent searches when input is empty const filtered = searchSuggestions.filter (suggestion => suggestion.text.toLowerCase () .includes (value.toLowerCase () ) );
//Sort suggestions to prioritize those that start with the search term setFilteredSuggestions (filtered.slice (0, 8) ), //Limit to 8 suggestions 
}, [value, searchSuggestions]);
//Handle clicks outside the component to close suggestions useEffect ( () => {
  function handleClickOutside (event: MouseEvent) {
  if (containerRef.current && !containerRef.current.contains (event.target as Node) ) {
  
}<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" /> <Input onClick= {
  () => onChange ('') 
}> <X className="h-4 w-4" /> </button>) 
}</div> <AutocompleteSuggestions suggestions= {
  filteredSuggestions 
}searchTerm= {
  value 
}onSelectSuggestion= {
  handleSelectSuggestion 
}visible= {
  isFocused 
}/> </div>) 
}