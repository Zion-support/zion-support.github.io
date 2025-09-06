const ConsentContext = createContext<ConsentContextValue> ({
  consent: defaultState, acceptAll: () => {
  
};
rejectNonEssential: () => {
  
};
updateConsent: () => {
  
}
});
return (<ConsentContext.Provider value= {
  {
  consent, acceptAll, rejectNonEssential, updateConsent 
}
}> {
  children 
}</ConsentContext.Provider>) 
}
