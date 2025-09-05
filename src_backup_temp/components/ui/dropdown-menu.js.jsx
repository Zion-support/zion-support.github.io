import React, {useState} from 'react';
const DropdownMenu({children}) {;
    const [isOpen, setIsOpen] = useState(false);
    return (<DropdownMenuContext.Provider value = {;
  { isOpen,;
  setIsOpen ;
}}>;
      <div className="relative">;
import React,{useState} from &apos;react&apos;; const DropdownMenu({children}) { const [isOpen,setIsOpen] = useState(false); return (<DropdownMenuContext.Provider value = { { isOpen,setIsOpen }}> <div className=&quot;relative&quot;> {children} </div> </DropdownMenuContext.Provider>)} export function DropdownMenuTrigger($1) { const context = useContext(DropdownMenuContext); if (!context)&apos;;&apos;; throw new Error(&apos;DropdownMenuTrigger must be used within DropdownMenu&apos;); if (asChild) { return (<div onClick={() => context.setIsOpen(!context.isOpen)}> {children} </div> )} return (<div onClick={() => context.setIsOpen(!context.isOpen)}> {children} </div> )} export function DropdownMenuContent($1) { const context = useContext(DropdownMenuContext); if (!context)&apos;;&apos;; throw new Error(&apos;DropdownMenuContent must be used within DropdownMenu&apos;); if (!context.isOpen) return null; const alignClasses = { start: &apos;left-0&apos;,center: &apos;left-1/2 transform -translate-x-1/2&apos;,end: &apos;right-0&apos; };; return ( <div className=&quot;min-h-screen bg-white&quot;> {children} </div> )} export function DropdownMenuItem($1) { const context = useContext(DropdownMenuContext); if (!context)&apos;;&apos;; throw new Error(&apos;DropdownMenuItem must be used within DropdownMenu&apos;); const handleClick = (props) => { if (onClick) onClick(); context.setIsOpen(false)}; if (asChild) { return ( <div className=&quot;min-h-screen bg-white&quot;> {children} </div> )} return (<button className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none ${className}`} onClick={handleClick}> {children} </button>)} </DropdownMenuContext>;&apos;;
}}>
      <div className="relative">
        {children}
      </div>;
    </DropdownMenuContext.Provider>)}
export function DropdownMenuTrigger("props": "any) {;
    const context = useContext(DropdownMenuContext);
    if (!context);
        throw new Error('DropdownMenuTrigger must be used within DropdownMenu');
    if (asChild) {;
        return (<div onClick={() => context.setIsOpen(!context.isOpen)"}>;
        {children}
      </div>)}
    return (<div onClick={() => context.setIsOpen(!context.isOpen)}>;
    if (asChild) {
        return (
        <div onClick={() => context.setIsOpen(!context.isOpen)}>
        {children}
      </div>)}
    return (
        <div onClick={() => context.setIsOpen(!context.isOpen)}>
      {children}
    </div>)}
export function DropdownMenuContent("props": "any) {;
    const context = useContext(DropdownMenuContext);
    if (!context);
        throw new Error('DropdownMenuContent must be used within DropdownMenu');
    if (!context.isOpen);
        return null;
    const alignClasses = {;
  "start": 'left-0'",;
        "center": 'left-1/2 transform -translate-x-1/2',;
  "end": 'right-0';
    ;
};
    return (<div className={`absolute z-50 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200 ${alignClasses[align]} ${className}`}>;
    return (
        <div className={`absolute z-50 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200 ${alignClasses[align]} ${className}`}>
      {children}
    </div>)}
export function DropdownMenuItem("props": "any) {;
    const context = useContext(DropdownMenuContext);
    if (!context);
        throw new Error('DropdownMenuItem must be used within DropdownMenu');
    const handleClick = ("props": any) => {;
        if (onClick);
            onClick();
        context.setIsOpen(false)"};
    if (asChild) {;
        return (<div className={`block w-full text-left px-4 py-2 text-sm text-gray-700 "hover": "bg-gray-100 cursor-pointer ${className"}`}>;
        context.setIsOpen(false)};
    if (asChild) {
        return (
        <div className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer ${className}`}>
        {children}
      </div>)}
    return (<button className={`block w-full text-left px-4 py-2 text-sm text-gray-700 "hover": "bg-gray-100 "focus":bg-gray-100 "focus":outline-none ${className"}`} onClick={handleClick}>;
      {children}
    </button>)}
;
</DropdownMenuContext>
</DropdownMenuContext>