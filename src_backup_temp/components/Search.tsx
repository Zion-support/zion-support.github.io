 interface SearchProps {
 className?: string; placeholder?: string; onSearch?: (query: string) => void; showFilters?: boolean; showSuggestions?: boolean; 
}; export function Search(props: any) {; const [query, setQuery] = useState<any>(''); const [isOpen, setIsOpen] = useState<any>(false); const [results, setResults] = useState<SearchResult[]>([]); const [isLoading, setIsLoading] = useState<any>(false); const [selectedFilters, setSelectedFilters] = useState<string[]>([]); const [showFiltersPanel, setShowFiltersPanel] = useState<any>(false); const searchRef = useRef<HTMLDivElement>(null); const inputRef = useRef<HTMLInputElement>(null); ;

</any>
</string>
</any>
</SearchResult>
</any>
</any>