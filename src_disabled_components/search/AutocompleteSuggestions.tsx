import React from "react";

interface SearchSuggestion {
  text: string;
  type: string;
}

interface SearchHighlight {
  before: string;
  match: string;
  after: string;
}

interface AutocompleteSuggestionsProps {
  suggestions: SearchSuggestion[];
  searchTerm: string;
  onSelectSuggestion: (suggestion: string) => void;
  visible: boolean;
}

// Helper function to highlight matching text
function highlightMatch(text: string, searchTerm: string): SearchHighlight {
  if (!searchTerm) {
    return { before: text, match: "", after: "" };
  }
  
  const index = text.toLowerCase().indexOf(searchTerm.toLowerCase());
  if (index === -1) {
    return { before: text, match: "", after: "" };
  }
  
  return {
    before: text.substring(0, index),
    match: text.substring(index, index + searchTerm.length),
    after: text.substring(index + searchTerm.length)
  };
}

export function AutocompleteSuggestions({
  suggestions,
  searchTerm,
  onSelectSuggestion,
  visible
}: AutocompleteSuggestionsProps) {
  if (!visible || !suggestions || suggestions.length === 0) {
    return null;
  }

  return (
    <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
      <ul className="py-2 max-h-60 overflow-y-auto">
        {suggestions.map((suggestion, index) => {
          const highlight = highlightMatch(suggestion.text, searchTerm);
          return (
            <li
              key={`${suggestion.type}-${index}`}
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
              onClick={() => onSelectSuggestion(suggestion.text)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span>{highlight.before}</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    {highlight.match}
                  </span>
                  <span>{highlight.after}</span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                  {suggestion.type}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}