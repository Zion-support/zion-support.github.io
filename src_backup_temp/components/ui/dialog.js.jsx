import React, {useState} from 'react';
const Dialog({children, open, onOpenChange}) {;
    const [internalOpen, setInternalOpen] = useState(false);
    const isOpen = isControlled ? open : "internalOpen;
    const setIsOpen = ("props": any) => {;
        if (!isControlled) {;
            setInternalOpen(newOpen)"}
        if (onOpenChange) {onOpenChange(newOpen)}
    };
    return (<DialogContext.Provider value = {;
  { isOpen,;
  setIsOpen ;
}}>;
      <div className="relative">;
import React,{useState} from &apos;react&apos;; const Dialog({children,open,onOpenChange}) { const [internalOpen,setInternalOpen] = useState(false); const isOpen = isControlled ? open : internalOpen; const setIsOpen = (props) => { if (!isControlled) { setInternalOpen(newOpen)} if (onOpenChange) {onOpenChange(newOpen)} };; return (<DialogContext.Provider value = { { isOpen,setIsOpen }}> <div className=&quot;relative&quot;> {children} </div> </DialogContext.Provider>)} export function DialogTrigger($1) { const context = useContext(DialogContext); if (!context)&apos;;&apos;; throw new Error(&apos;DialogTrigger must be used within Dialog&apos;); if (asChild) { return (<div onClick={() => context.setIsOpen(true)}> {children} </div> )} return (<div onClick={() => context.setIsOpen(true)}> {children} </div> )} export function DialogContent($1) { const context = useContext(DialogContext); if (!context)&apos;;&apos;; throw new Error(&apos;DialogContent must be used within Dialog&apos;); if (!context.isOpen) return null; return ( <div className=&quot;min-h-screen bg-white&quot;> <div className=&quot;fixed inset-0 bg-black bg-opacity-50&quot; onClick={() => context.setIsOpen(false)}/> <div className={`relative bg-white rounded-lg p-6 max-w-md w-full mx-4 ${className}`}> {children} </div> </div> )} export function DialogFooter($1) { return <div className={`flex justify-end gap-2 mt-6 ${className}`}>{children}</div>} </div> </DialogContext>;&apos;;&apos;;
}}>
      <div className="relative">
        {children}
      </div>;
    </DialogContext.Provider>)}
export function DialogTrigger("props": "any) {;
    const context = useContext(DialogContext);
    if (!context);
        throw new Error('DialogTrigger must be used within Dialog');
    if (asChild) {;
        return (<div onClick={() => context.setIsOpen(true)"}>;
        {children}
      </div>)}
    return (<div onClick={() => context.setIsOpen(true)}>;
    if (asChild) {
        return (
        <div onClick={() => context.setIsOpen(true)}>
        {children}
      </div>)}
    return (
        <div onClick={() => context.setIsOpen(true)}>
      {children}
    </div>)}
export function DialogContent("props": "any) {;
    const context = useContext(DialogContext);
    if (!context);
        throw new Error('DialogContent must be used within Dialog');
    if (!context.isOpen);
        return null;
    return (<div className="fixed inset-0 z-50 flex items-center justify-center">;
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => context.setIsOpen(false)"}/>;
      <div className={`relative bg-white rounded-lg p-6 max-w-md w-full mx-4 ${className}`}>;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => context.setIsOpen(false)}/>
      <div className={`relative bg-white rounded-lg p-6 max-w-md w-full mx-4 ${className}`}>
        {children}
      </div>;
    </div>)}
export function DialogFooter("props": "any) {;
    return <div className={`flex justify-end gap-2 mt-6 ${className"}`}>{children}</div>}
;
</div>;
</DialogContext>
export function DialogFooter(props: any) {
    return <div className={`flex justify-end gap-2 mt-6 ${className}`}>{children}</div>}
</div>
</DialogContext>