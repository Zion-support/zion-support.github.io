 // The context may be undefined if the provider is not mounted. By declaring // the generic as `WhitelabelContextType | null` we get proper type checking // without falling back to an empty object which triggers TS2740 errors. // Cast is used here because the context default is `null` until provided by // `WhitelabelProvider`. The runtime check above guarantees it's defined. return context as WhitelabelContextType 
};
useEffect ( () => {
  if (!isLoading && tenant) {
  setContextValue ({
  return (<WhitelabelContext.Provider value= {
  contextValue 
}> {
  children 
}</WhitelabelContext.Provider>) 
};
