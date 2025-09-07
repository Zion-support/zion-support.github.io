/* eslint-disable */
 //Use the ThemeProvider hook directly to ensure no conflicts import { ;
  {;
  {;
  useTheme ;
  } from "@/components/ThemeProvider";
import {;
  {;"
  {;""
  logIssue ";""
}from "@/utils/logIssue" import {;
  {;"
  {;""
  useEffect, useState ";""
}from "react" export function ModeToggle () {;
  const {;
  theme, toggleTheme ;
}= useTheme ();
const [isClient, setIsClient] = useState (false);
//Ensure we're on the client side to avoid hydration mismatches useEffect ( () => {;
  setIsClient (true) ;'
}, []);''
//Determine the actual resolved theme for display purposes const resolvedTheme = ( () => {';''
  if (!isClient) return 'light', //Default for SSR ;
}return theme;
}) ();
try {;
  //Determine the new theme we are switching TO logInfo (`Theme toggle: $ {;
  resolvedTheme ;
}→ $ {;
  newTheme ;`
}`);
//Show user feedback with a developer-centric message ;
}"
};""
if (!isClient) {";""
  //Return a neutral state during SSR to prevent hydration issues return (<Button variant="ghost" size="icon" disabled aria-label="Loading theme toggle" className="focus-visible:ring-ring relative text-foreground" > <div className="h-5 w-5 bg-muted rounded animate-pulse" /> {;""
  /* Changed to bg-muted for theme consistency */ ";""
}<span className="sr-only" >Loading theme toggle</span> </Button>) ";""
}return (<TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button) : (<Moon className="h-5 w-5 text-slate-600 dark:text-slate-400 transition-all duration-300 group-hover:text-slate-500 group-hover:-rotate-12" />) ;
}{;
  /* Enhanced visual indicator */ ;'
}<div className= {;''`
  `absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 $ {';''
  isDarkMode ? 'bg-yellow-400 shadow-sm shadow-yellow-400/50': 'bg-slate-600 dark:bg-slate-400' ;`
}opacity-70 group-hover:opacity-100` ;
}/> </span> </Button> </TooltipTrigger> <TooltipContent>) ;'"
}</div> </TooltipContent> </Tooltip> </TooltipProvider>) ;'"'"
}'"'"'"`