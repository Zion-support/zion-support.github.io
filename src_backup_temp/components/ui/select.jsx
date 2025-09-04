export function Select(props: any) {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
}

export function SelectTrigger(props: any) {
  return (
    <button
      className={`flex h-10 w-full items-center justify-between rounded-md border border-white/20 bg-slate-800/50 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function SelectValue(props: any) {
  return <span className="text-sm">{placeholder || 'Select an option'}</span>;
}

export function SelectContent(props: any) {
  return (
    <div className={`
      absolute top-full left-0 right-0 z-50 mt-1 rounded-md border
      border-white/20 bg-slate-800/90 backdrop-blur-sm
      shadow-lg ${className}
    `}>
      {children}
    </div>
  );
}

export function SelectItem(props: any) {
  return (
    <div className={`
      relative flex w-full cursor-pointer select-none items-center
      rounded-sm px-3 py-2 text-sm text-white outline-none
      hover:bg-slate-700/50 focus:bg-slate-700/50
      focus:text-white transition-colors
      ${className}
    `} data-value={value} {...props}>
      {children}
    </div>
  );
}


export default select;