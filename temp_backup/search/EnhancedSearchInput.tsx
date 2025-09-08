/* eslint-disable */
 interface EnhancedSearchInputProps {;
  value: string;
onChange: (value: string) => void;
}, 300);
[]);
//Fetch suggestions from API when input value changes useEffect ( () => {;
  if (!debounced) {;
  //Show recent suggestions provided via props when no query entered setFilteredSuggestions ( (searchSuggestions || []) .filter (s => s.type === 'recent') return () => controller.abort () ;
}, [debounced, searchSuggestions]);
//Handle clicks outside the component to close suggestions useEffect ( () => {;
  function handleClickOutside (event: MouseEvent) {;
  if (containerRef.current && !containerRef.current.contains (event.target as Node) ) {;
}
}
}setIsFocused (false);
inputRef.current?.blur ();
setHighlightedIndex (-1) ;
};'
const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {;''
  switch (e.key) {';''
  case 'ArrowDown': if (isFocused && filteredSuggestions.length > 0) {';''
  case 'Escape': e.preventDefault ();
setIsFocused (false);
setHighlightedIndex (-1);
setValueOnFocus (null);
inputRef.current?.blur ();
break;
default: //For other keys (character input), reset enterHandledPostFocus setEnterHandledPostFocus (false);
break ;
}'
};''
> <div className='relative flex items-center w-full' > <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate' /> <Input onClick={';''''
  () => onChange ('') ';''
}aria-label='Clear search' > <X className='h-4 w-4' /> </button>) ;''
}</div> <AutocompleteSuggestions /> </div>) ;''''
}''''''