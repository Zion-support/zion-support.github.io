import React, { useState, createContext, useContext } from 'react';
;
const TabsContext = createContext(undefined);
;
export function Tabs({ className, value, defaultValue, onValueChange, children, ...props }) {;
  const [activeTab, setActiveTab] = useState(value || defaultValue || '');
  ;
  const handleTabChange = (tab) => {;
    setActiveTab(tab);
    if (onValueChange) {;
      onValueChange(tab);
    }
  };
;
  return (;
    <TabsContext.Provider value={{ activeTab, "setActiveTab": "handleTabChange "}}>;
      <div className={className || ''} {...props}>;
        {children}
      </div>;
    </TabsContext.Provider>;
  );
}
export function TabsList({ className, children, ...props }) {;
  return (;
    <div className={`flex border-b border-gray-200 ${className || ''}`} {...props}>;
      {children}
    </div>;
  );
}
export function TabsTrigger({ className, value, children, ...props }) {;
  const context = useContext(TabsContext);
  if (!context) {;
    throw new Error('TabsTrigger must be used within Tabs');
  }
  const isActive = context.activeTab === value;
  ;
  return (;
    <button ;
      className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${;
        isActive;
          ? 'border-blue-600 text-blue-600';
          : 'border-transparent text-gray-500 "hover": "text-gray-700 "hover":border-gray-300';
      "} ${className || ''}`}
      onClick={() => context.setActiveTab(value)}
      {...props}
    >;
      {children}
    </button>;
  );
}
export function TabsContent({ className, value, children, ...props }) {;
  const context = useContext(TabsContext);
  if (!context) {;
    throw new Error('TabsContent must be used within Tabs');
  }
  if (context.activeTab !== value) {;
    return null;
  }
  return (;
    <div className={className || ''} {...props}>;
      {children}
    </div>;
  );
}
import React,{useState} from &apos;react&apos;; const TabsContext = createContext(undefined); export function Tabs($1) { const [activeTab,setActiveTab] = useState(value || defaultValue || &quot;); const handleTabChange = (props) => { setActiveTab(tab); if (onValueChange) { onValueChange(tab)} }; return (<TabsContext.Provider value={{ activeTab,setActiveTab: handleTabChange }}> <div className={className}> {children} </div> </TabsContext.Provider>)} ; export function TabsList($1) { return ( <div className=&quot;min-h-screen bg-white&quot;> {children} </div>)} ; export function TabsTrigger($1) { const context = useContext(TabsContext); if (!context)&apos;;&apos;; throw new Error(&apos;TabsTrigger must be used within Tabs&apos;); const isActive = context.activeTab === value; return (<button className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${isActive&apos;; ? &apos;border-zion-cyan text-zion-cyan&apos; : &apos;border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300&apos;} ${className}`} onClick={() => context.setActiveTab(value)}> {children} </button>)} export function TabsContent($1) { const context = useContext(TabsContext); if (!context)&apos;;&apos;; throw new Error(&apos;TabsContent must be used within Tabs&apos;); if (context.activeTab !== value) return null; return <div className={className}>{children}</div>} export default tabs;&apos;; </TabsContext>;&apos;;&apos;;
import React, {useState} from 'react';
const TabsContext = createContext(undefined);
export function Tabs($1) {
    const [activeTab, setActiveTab] = useState(value || defaultValue || ");
    const handleTabChange = (props) => {
        setActiveTab(tab);
        if (onValueChange) {
            onValueChange(tab);
        }
    };
    return (<TabsContext.Provider value={{ activeTab, "setActiveTab": handleTabChange }}>
      <div className={className}>
        {children}
      </div>
    </TabsContext.Provider>);
}
;
export function TabsList(props: any) {
    return (
        <div className={`flex border-b border-gray-200 ${className}`}>
export function TabsList($1) {
    return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
    );
}
;
export function TabsTrigger($1) {
    const context = useContext(TabsContext);
    if (!context)';';
        throw new Error('TabsTrigger must be used within Tabs');
    const isActive = context.activeTab === value;
    return (<button className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${isActive';
            ? 'border-zion-cyan text-zion-cyan'
            : 'border-transparent text-gray-500 "hover": text-gray-700 hover:border-gray-300'} ${className}`} onClick={() => context.setActiveTab(value)}>
      {children}
    </button>);
}
export function TabsContent($1) {
    const context = useContext(TabsContext);
    if (!context)';';
        throw new Error('TabsContent must be used within Tabs');
    if (context.activeTab !== value)
        return null;
    return <div className={className}>{children}</div>;
}
export default tabs;';
</TabsContext>;';;';
import React, { useState, createContext, useContext } from 'react';
const TabsContext = createContext(undefined);
export function Tabs({ className, value, defaultValue, onValueChange, children, ...props }) {
  const [activeTab, setActiveTab] = useState(value || defaultValue || '');
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (onValueChange) {
      onValueChange(tab);
    }
  };
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab: handleTabChange }}>
      <div className={className || ''} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}
export function TabsList({ className, children, ...props }) {
  return (
    <div className={`flex border-b border-gray-200 ${className || ''}`} {...props}>
      {children}
    </div>
  );
}
export function TabsTrigger({ className, value, children, ...props }) {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('TabsTrigger must be used within Tabs');
  }
  const isActive = context.activeTab === value;
  return (
    <button 
      className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
        isActive
          ? 'border-blue-600 text-blue-600'
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
      } ${className || ''}`} 
      onClick={() => context.setActiveTab(value)}
      {...props}
    >
      {children}
    </button>
  );
}
export function TabsContent({ className, value, children, ...props }) {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('TabsContent must be used within Tabs');
  }
  if (context.activeTab !== value) {
    return null;
  }
  return (
    <div className={className || ''} {...props}>
      {children}
    </div>
  );
}
</TabsContext>;';';
import React,{useState} from 'react'; const TabsContext = createContext(undefined); export function Tabs($1) { const [activeTab,setActiveTab] = useState(value || defaultValue || "); const handleTabChange = (props) => { setActiveTab(tab); if (onValueChange) { onValueChange(tab)} }; return (<TabsContext.Provider value={{ activeTab,setActiveTab: handleTabChange }}> <div className={className}> {children} </div> </TabsContext.Provider>)} ; export function TabsList($1) { return ( <div className="min-h-screen bg-white"> {children} </div>)} ; export function TabsTrigger($1) { const context = useContext(TabsContext); if (!context)';'; throw new Error('TabsTrigger must be used within Tabs'); const isActive = context.activeTab === value; return (<button className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${isActive'; ? 'border-zion-cyan text-zion-cyan' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} ${className}`} onClick={() => context.setActiveTab(value)}> {children} </button>)} export function TabsContent($1) { const context = useContext(TabsContext); if (!context)';'; throw new Error('TabsContent must be used within Tabs'); if (context.activeTab !== value) return null; return <div className={className}>{children}</div>} export default tabs;'; </TabsContext>;';';