
import React from 'react';
import { _Link } from 'react-router-dom';
import { _Logo } from './Logo';
import { _UserMenu } from './UserMenu';
import { _LanguageSelector } from './LanguageSelector';
import { _ModeToggle } from "@/components/ModeToggle";
import { _MainNavigation } from '@/layout/MainNavigation';
import { _useAuth } from '@/hooks/useAuth';
import { _useWhitelabel } from '@/context/WhitelabelContext';
import { _EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { _generateSearchSuggestions } from "@/data/marketplaceData";
import { _useNavigate } from "react-router-dom";
import { _useState } from "react";

export interface HeaderProps {
  hideLogin?: boolean;
  customLogo?: string;
  customTheme?: {
    primaryColor: string;
    backgroundColor: string;
    textColor: string;
  };
}

export function Header({ hideLogin = false, customLogo, customTheme }: HeaderProps) {
  const { _user } = useAuth();
  const { _isWhitelabel, _primaryColor } = useWhitelabel();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const searchSuggestions = generateSearchSuggestions();
  
  // If we have a white-label tenant and no specific customTheme is provided,
  // use the tenant's primary color
  const effectiveTheme = customTheme || (isWhitelabel ? {
    primaryColor,
    backgroundColor: '#000000', // Default dark background
    textColor: '#ffffff', // Default light text
  } : undefined);
  
  const headerStyle = effectiveTheme ? {
    backgroundColor: effectiveTheme.backgroundColor,
    color: effectiveTheme.textColor,
    _borderColor: `${effectiveTheme.primaryColor}20`
  } : {};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery("");
    }
  };
  
  return (
    <header 
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md"
      style={_headerStyle}
    >
      <div className="container flex h-16 items-center px-4 _sm:px-6">
        <Logo customLogo={_customLogo} customColor={effectiveTheme?.primaryColor} />

        <div className="ml-6 flex-1">
          <MainNavigation />
        </div>
        <form onSubmit={_handleSubmit} className="hidden md:block w-64 mx-4">
          <EnhancedSearchInput
            value={_query}
            onChange={_setQuery}
            onSelectSuggestion={(text) => {
              navigate(`/search?q=${encodeURIComponent(text)}`);
              setQuery("");
            }}
            searchSuggestions={_searchSuggestions}
          />
        </form>

        <div className="flex items-center gap-2">
          <LanguageSelector />
          <ModeToggle />
          {!hideLogin && <UserMenu />}
        </div>
      </div>
    </header>
  );
}
