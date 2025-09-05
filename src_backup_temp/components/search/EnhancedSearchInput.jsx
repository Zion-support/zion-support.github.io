    '';'`'';`;',';';
    ';';';
    ';';';
    <div className={`relative ${className}`} ref={suggestionsRef}>''' <form onSubmit={handleSubmit} className="relative">''' <div className="relative">''' <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />''' <input ref={inputRef} type='text' value={query} onChange={handleInputChange} onKeyDown={handleKeyDown} onFocus={() = / / / / /   /> query.trim() && setShowSuggestions(true)} placeholder={placeholder} className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg "focus": "ring-2 "focus":ring-blue-500 "focus":border-transparent outline-none transition-all duration-200"/>''' {query && (<button type='button' onClick={handleClear"} className="absolute right-12 top-1/2 transform -translate-y-1/2 p-1 "hover": "bg-gray-100 rounded-full transition-colors">''' <X className="w-4 h-4 text-gray-400" />'' </button>)"}''' <button type='submit' className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-blue-600 text-white rounded-md "hover": "bg-blue-700 transition-colors">''' <ArrowDown className="w-4 h-4" />' </button>' </div>' </form>''' {showSuggestions && filteredSuggestions.length > 0 && (<div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">'' {filteredSuggestions.map((suggestion", index) => (<button key={suggestion.id} onClick={() => handleSuggestionClick(suggestion)} className={`w-full text-left px-4 py-3 "hover": "bg-gray-50 transition-colors ${index === selectedIndex ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''"}`}>''' <div className="flex items-center gap-3">''' <div className="flex-shrink-0"> <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${suggestion.type === 'service' ? 'bg-blue-100 text-blue-600' : "suggestion.type === 'talent' ? 'bg-green-100 text-green-600' :';bg-purple-100 text-purple-600'"}`}>'{suggestion.type.charAt(0).toUpperCase()}' </div>'' </div>''' <div className="flex-1 min-w-0">''' <div className="font-medium text-gray-900 truncate">'{suggestion.title}'' </div>''' {suggestion.description && (<div className="text-sm text-gray-500 truncate"> {suggestion.description} </div>)} </div> </div>' </button>))}' </div>)}' </div>)}',',';';
    '''`'',';';
    ';';';
    ';';';
    <div className={`relative ${className}`} ref={suggestionsRef}>'' <form onSubmit={handleSubmit} className="relative">'' <div className="relative">'' <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />'' <input ref={inputRef} type='text' value={query} onChange={handleInputChange} onKeyDown={handleKeyDown} onFocus={() = / / / / /   /> query.trim() && setShowSuggestions(true)} placeholder={placeholder} className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg "focus": "ring-2 "focus":ring-blue-500 "focus":border-transparent outline-none transition-all duration-200"/>'' {query && (<button type='button' onClick={handleClear"} className="absolute right-12 top-1/2 transform -translate-y-1/2 p-1 "hover": "bg-gray-100 rounded-full transition-colors">'' <X className="w-4 h-4 text-gray-400" />' </button>)"}'' <button type='submit' className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-blue-600 text-white rounded-md "hover": "bg-blue-700 transition-colors">'' <ArrowDown className="w-4 h-4" />' </button>' </div>' </form>'' {showSuggestions && filteredSuggestions.length > 0 && (<div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">' {filteredSuggestions.map((suggestion", index) => (<button key={suggestion.id} onClick={() => handleSuggestionClick(suggestion)} className={`w-full text-left px-4 py-3 "hover": "bg-gray-50 transition-colors ${index === selectedIndex ? 'bg-blue-50 border-l-4 border-l-blue-500' : '"}`}>'' <div className="flex items-center gap-3">'' <div className="flex-shrink-0"> <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${suggestion.type === 'service' ? 'bg-blue-100 text-blue-600' : "suggestion.type === 'talent' ? 'bg-green-100 text-green-600' :';bg-purple-100 text-purple-600'"}`}>'{suggestion.type.charAt(0).toUpperCase()}' </div>' </div>'' <div className="flex-1 min-w-0">'' <div className="font-medium text-gray-900 truncate">'{suggestion.title}' </div>'' {suggestion.description && (<div className="text-sm text-gray-500 truncate"> {suggestion.description} </div>)} </div> </div>' </button>))}' </div>)}' </div>)}',',';';
    '`';
import React {useState, useRef, useEffect} from 'react',;',';';
    ;
    ;
    ';';';
import React {useState, useRef, useEffect} from 'react';""',';';
    ';';';
export function EnhancedSearchInput("props": "any) {'",';';
    ';';';
import React { useState, useRef, useEffect } from 'react;';
export function EnhancedSearchInput("props": "any) {const [isOpen", setIsOpen] = useState(false);
  suggestions = [], ";
  placeholder = "Search...;
  const [isOpen, setIsOpen] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);
  useEffect(() => {;
    if (value.trim()) {;
      const filtered = suggestions.filter(suggestion =>;
        suggestion.toLowerCase().includes(value.toLowerCase());
      );
      setFilteredSuggestions(filtered.slice(0, 8));
      setIsOpen(true)} else {setFilteredSuggestions([]);
      setIsOpen(false);
      )}
    </div>;
  );
    </div>
    );
}
    setHighlightedIndex(-1)}, [value, suggestions]);
      setIsOpen(true)} else {;
      setFilteredSuggestions([]);
  useEffect(() => {const handleClickOutside = ("props": "any) => {;
      if (inputRef.current && !inputRef.current.contains(event.target) &&';
          suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {;';';
"};';';';
"',';';
    ';';';
    document.addEventListener('mousedown', handleClickOutside);',';';
    ';';';
    return () => document.removeEventListener('mousedown', handleClickOutside)}, []);';';
  const handleKeyDown = ("props": "any) => {';';';
    if (!isOpen) return;'",';';
    ';';';
    switch (e.key) {';
      case 'ArrowDown':';';
        e.preventDefault();';';';
""',';';
    ';';';
    document.addEventListener('mousedown', handleClickOutside);""';';
  const handleKeyDown = ("props": "any) => {if (!isOpen) return;';';';
    switch (e.key) {""'",';';
    ';';';
      case 'ArrowDown': "e.preventDefault();';';';
        setHighlightedIndex(prev =>'",';';
    ';';';
          prev < filteredSuggestions.length - 1 ? prev + 1 : "prev ); break; case 'ArrowUp': e.preventDefault(); setHighlightedIndex(prev => prev > 0 ? prev - 1 : -1);';';';
        break;'",';';
    ';';';
      case 'Enter':';';
          prev < filteredSuggestions.length - 1 ? prev + 1 : "prev';';';
        break;""'",';';
    ';';';
      case 'ArrowUp': "e.preventDefault();';';';
        setHighlightedIndex(prev => prev > 0 ? prev - 1 : -1);'",';';
    ';';';
      case 'Enter': "e.preventDefault();';';
        if (highlightedIndex >= 0 && filteredSuggestions[highlightedIndex]) {';';';
          handleSuggestionSelect(filteredSuggestions[highlightedIndex])"}',';';
    ';';';
      case 'Escape': "setIsOpen(false);
        inputRef.current?.blur();
        break"}';
  const handleSuggestionSelect = ("props": "any) => {onSelectSuggestion?.(suggestion);';';
    setIsOpen(false);';';';
    setHighlightedIndex(-1)"};',';';
    ';';';
  const handleClear = ("props": "any) => {';
  const handleClear = ("props": any) => {onChange('');';';';
  const handleClear = ("props": any) => {""'",';';
    ';';';
    onChange('');';
    setHighlightedIndex(-1);';';
    inputRef.current?.focus()};';';';
  const getSuggestionIcon = ("props": "any) => {const lowerSuggestion = suggestion.toLowerCase();'",';';
    ';';';
    if (lowerSuggestion.includes('service') || lowerSuggestion.includes('solution')) {',';';
    ';';';
      return Briefcase} else if (lowerSuggestion.includes('user') || lowerSuggestion.includes('team')) {return Users} else if (lowerSuggestion.includes('document') || lowerSuggestion.includes('guide')) {return FileText} else if (lowerSuggestion.includes('trend') || lowerSuggestion.includes('popular')) {return TrendingUp} else {return Globe}',';';
    ';';';
  const recentSearches = ['',',';';
    'AI Services',;
  const recentSearches = ['AI Services',',',';';
    'Cloud Migration',';',';';
    'Cybersecurity',',',';';
    'Digital Transformation'';';';
  ]',';';
    ';';';
  const popularSearches = ['',',';';
    'Micro SAAS',;
  const popularSearches = ['Micro SAAS',',',';';
    'IT Infrastructure',';',';';
    'DevOps',',',';';
    'Machine Learning';
  return (';
    <div className="relative" ref={inputRef}>";
      <div className="relative">";
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light"  />;
        <input";
        <input type="text" value={value} onChange={(e) => onChange(e.target.value);
      )}
    </div>;
  );
    </div>
    );
}';
  const getSuggestionIcon = ("props": "any) => {';';
    const lowerSuggestion = suggestion.toLowerCase();""';';';
      return Briefcase;"", ";',';';
    ';';';} else if (lowerSuggestion.includes('user') || lowerSuggestion.includes('team')) {';';';
      return Users;", ";',';';
    ';';';} else if (lowerSuggestion.includes('document') || lowerSuggestion.includes('guide')) {';';';
      return FileText;", ";',';';
    ';';';} else if (lowerSuggestion.includes('trend') || lowerSuggestion.includes('popular')) {';
      return TrendingUp} else {';';
      return Globe}';';';
  const recentSearches = [""',',';';
    'AI Services', ""';',';';
    'Cloud Migration',""',',';';
    'Cybersecurity', ""';',';';
    'Digital Transformation',;';';';
  const popularSearches = [""',',';';
    'Micro SAAS', ""';',';';
    'IT Infrastructure',""',',';';
    'DevOps', ""';';';
  const recentSearches = ["',';';
    ';';';
    'AI Services,',',';';
    'Cloud Migration,;
    'Cybersecurity,';';';
  const popularSearches = ["',',';';
    'Micro SAAS,;
    'IT Infrastructure,',',';';
    'DevOps,;
    'Machine Learning',;
  return ("";
    <div className="relative" ref={inputRef}" >";
      <div className="relative">"";
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" /" >";
        <input "";
          type="text";
          value={value}
          onChange={(e) =" > onChange(e.target.value)}";
          onKeyDown={handleKeyDown}
          onFocus={() => value.trim() && setIsOpen(true);
      )}
    </div>;
  );
}
          placeholder={placeholder}`;
          className={`w-full pl-10 pr-10 py-2 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light "focus": "outline-none "focus":ring-2 focu;
    "s":ring-zion-purple/50 focu;
    "s":border-transparent transition-all duration-200 ${className"}`}
        />;
        {value && (;
          <button;
            onClick={handleClear}`;
            className=`absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-zion-slate-light "hover": "text-white hove;
    "r":bg-zion-purple/10 rounded transition-colors";
          >`;
          placeholder={placeholder"}
          className={`w-full pl-10 pr-10 py-2 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light "focus": "outline-none "focus":ring-2 "focus":ring-zion-purple/50 "focus":border-transparent transition-all duration-200 ${className"}`}
          <button onClick={handleClear} className=`absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-zion-slate-light "hover": "text-white "hover":bg-zion-purple/10 rounded transition-colors" >;
            <X className="h-4 w-4"  />;
          <button onClick={handleClear"}"";
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-zion-slate-light "hover": "text-white "hover":bg-zion-purple/10 rounded transition-colors"" >";
            <X className="h-4 w-4" /" >";
          </button>;
        );
      )"}
    </div>;
  );
    </div>
    );
}
          placeholder={placeholder}`
          className={`w-full pl-10 pr-10 py-2 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus: outline-none focus:ring-2 focu,
    s:ring-zion-purple/50 focu,
    s:border-transparent transition-all duration-200 ${className}`}
        />
        {value && (
          <button
            onClick={handleClear}`
            className=`absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-zion-slate-light hover:text-white hove,
    r:bg-zion-purple/10 rounded transition-colors"
          >`
          placeholder={placeholder}
          className={`w-full pl-10 pr-10 py-2 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus: outline-none focus:ring-2 focus:ring-zion-purple/50 focus:border-transparent transition-all duration-200 ${className}`}
          <button onClick={handleClear} className=`absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-zion-slate-light hover: text-white hover:bg-zion-purple/10 rounded transition-colors" >
            <X className="h-4 w-4"  />
          <button onClick={handleClear}""
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-zion-slate-light hover:text-white hover:bg-zion-purple/10 rounded transition-colors"" >"
            <X className="h-4 w-4" /" >"
          </button>
        )
      )}
    </div>
    );
}
      </div>;
      {/* Suggestions Dropdown */} {isOpen && (;
        <div ref={suggestionsRef} className="absolute top-full left-0 right-0 mt-2 bg-zion-blue-dark/95 backdrop-blur-xl border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50 max-h-96 overflow-y-auto" >;
          {/* Search Results */} {filteredSuggestions.length > 0 && (;
            <div className="py-2">;
      {/* Suggestions Dropdown */}
      {isOpen && (;
        <div;
          ref={suggestionsRef}";
          className="absolute top-full left-0 right-0 mt-2 bg-zion-blue-dark/95 backdrop-blur-xl border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50 max-h-96 overflow-y-auto";
        >;
          {/* Search Results */}
          {filteredSuggestions.length > 0 && (";
            <div className="py-2">";
        <div ref={suggestionsRef}"";
          className="absolute top-full left-0 right-0 mt-2 bg-zion-blue-dark/95 backdrop-blur-xl border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50 max-h-96 overflow-y-auto"" >";
          {filteredSuggestions.length > 0 && ("";
            <div className="py-2">"";
              <div className="px-3 py-2 text-xs font-semibold text-zion-cyan uppercase tracking-wider">;
                Search Results;
              {filteredSuggestions.map((suggestion, index) => {;
                const Icon = getSuggestionIcon(suggestion);
                return (;
                    key={suggestion}';
                    onClick={() => handleSuggestionSelect(suggestion)}`';';
                    className={`w-full flex items-center px-3 py-2 text-sm transition-colors ${';';';
                      index === highlightedIndex`',';';
    ';';';
                        ? 'text-white bg-zion-purple/20''',';';
    ';';';
                        : 'text-zion-slate-light "hover": "text-white hove",;
    "r": "bg-zion-purple/10''"}`}
                  >`;
                    <Icon className=`h-4 w-4 mr-3 text-zion-cyan flex-shrink-0"  />";
                  <button key={suggestion} onClick={() => handleSuggestionSelect(suggestion);
      )}
    </div>;
  );
    </div>
    );
}';
                  <button key={suggestion}';';
                    onClick={() =" > handleSuggestionSelect(suggestion)}`"';';';
                      index === highlightedIndex""',';';
    ';';';
                        ? 'text-white bg-zion-purple/20'',';';
    ';';';
                        : 'text-zion-slate-light "hover": "text-white "hover":bg-zion-purple/10'';';';
                    <Icon className="h-4 w-4 mr-3 text-zion-cyan flex-shrink-0"  />'",';';
    ';';';
                        : 'text-zion-slate-light "hover": "text-white "hover":bg-zion-purple/10'", `;
                  >""';
                    <Icon className="h-4 w-4 mr-3 text-zion-cyan flex-shrink-0" /" >"';';
                    <span className="truncate">{suggestion}</span>';';';
                )})}',';';
    ';';';
          )} {/* Recent Searches */} {value.trim() === '' && (';';';
          {/* Recent Searches */}"',';';
    ';';';
          {value.trim() === '' && ('';';';
          {/* Recent Searches */}""',';';
    ';';';
          {value.trim() === '' && ("";
                Recent Searches;
              { recentSearches.map((search) => (;
                  key={search}
                  onClick={() => handleSuggestionSelect(search)}";
                  className="w-full flex items-center px-3 py-2 text-sm text-zion-slate-light "hover": "text-white hove;
    "r":bg-zion-purple/10 transition-colors";
                <button key={search"} onClick={() => handleSuggestionSelect(search);
      )}
    </div>;
  );
    </div>
    );
}
                  className="w-full flex items-center px-3 py-2 text-sm text-zion-slate-light "hover": "text-white "hover":bg-zion-purple/10 transition-colors";
                  <Clock className="h-4 w-4 mr-3 text-zion-slate-light"  />;
                <button key={search"}
                  onClick={() =" > handleSuggestionSelect(search)}"';
                  <Clock className="h-4 w-4 mr-3 text-zion-slate-light" /" >"';';
                  <span>{search}</span>';';';
              ))}',';';
    ';';';
          )} {/* Popular Searches */} {value.trim() === '' && (;
          {/* Popular Searches */}";
          {/* Popular Searches */}"";
                Popular Searches;
              {popularSearches.map((search) => (;
                  <TrendingUp className="h-4 w-4 mr-3 text-zion-cyan"  />;
                  <TrendingUp className="h-4 w-4 mr-3 text-zion-cyan" /" >";
          )} {/* No Results */} {value.trim() && filteredSuggestions.length === 0 && (;
            <div className="py-4 text-center">;
              <div className="text-zion-slate-light text-sm mb-2">No results found</div>;
          {/* No Results */}
          {value.trim() && filteredSuggestions.length === 0 && (";
            <div className="py-4 text-center">";
              <div className="text-zion-slate-light text-sm mb-2">No results found</div>";
          {value.trim() && filteredSuggestions.length === 0 && ("";
            <div className="py-4 text-center">"";
              <div className="text-zion-slate-light text-sm mb-2">No results found</div>"";
              <div className="text-xs text-zion-slate-light">';
                Try different keywords or browse our categories';';
"`"';';';
";
</div>;
</div>;
</div>;
</div>;
</TrendingUp>;
</Clock>;
</button>;
</button>;
</Icon>;
</button>;
</button>;
</div>;
</div>;
</div>;
</div>;
</div>;
</X>;
</button>;
</button>;
</Search>