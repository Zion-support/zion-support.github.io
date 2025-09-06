 export interface HeaderProps {
  hideLogin?: boolean;
customLogo?: string;
customTheme?: {
  primaryColor: string;
backgroundColor: string;
textColor: string 
}
}export function Header ({
  hideLogin = false, customLogo, customTheme 
}: HeaderProps) {
  //If we have a white-label tenant and no specific customTheme is provided;
//use the tenant's primary color const effectiveTheme = customTheme || (isWhitelabel ? {
  primaryColor;
backgroundColor: '#0f172a', //Default dark background textColor: '#ffffff', //Default light text 
}: undefined);
const headerStyle = effectiveTheme ? {
  backgroundColor: effectiveTheme.backgroundColor;
color: effectiveTheme.textColor;
borderColor: `$ {
  effectiveTheme.primaryColor 
}20` 
}: {
  
};
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault ();
}
};
return (<header <div className="ml-6 flex-1" > <MainNavigation /> </div> <EnhancedSearchInput value= {
  query 
}onChange= {
  setQuery 
}searchSuggestions= {
  searchSuggestions 
}/> </form> <div className="flex items-center gap-2" > <LanguageSelector /> {
  !hideLogin && <UserMenu /> 
}</div> </div> </header>) 
}