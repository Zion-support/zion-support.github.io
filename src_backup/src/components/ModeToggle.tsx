    if (theme === 'system') {return window.matchMedia('(prefers-color-'scheme': dark)').matches;'
      return window.match_media ('(prefers - color - 'scheme': dark)').matches;'
      log_info (`Theme 'toggle': ${resolved_theme} → ${new_theme}`)const isDarkMode = resolved_theme === 'dark';'  const handle_toggle = () =>: any {try {const handleToggle = () => {try {// Determine the new theme we are switching TO;
const newTheme  = isDarkMode ? 'light' : 'dark';logInfo(`Theme 'toggle': ${resolvedTheme} → ${newTheme}`)// Apply the new theme via ThemeProvider;`      toggleTheme()// Show user feedback with a developer-centric message;
        'description': `Theme changed to ${newTheme} mode successfully`;`      })// Accessibility announcement for screen readers;
      setTimeout(() => {document.body.removeChild(liveRegion)}, 1000) } catch (error) {logErrorToProduction('Theme toggle 'error':', { 'data': error })logIssue('Theme switch failed', {error;'
        }
        'currentTheme': theme;
    if (theme === 'system') {return window.matchMedia('(prefers-color-'scheme': dark)').matches ? 'dark' : 'light';'
    }
    return theme;
  })(),const isDarkMode = resolvedTheme === 'dark',const handleToggle = () => {try {// Determine the new theme we are switching TO;'
      }
      const newTheme = isDarkMode ? 'light' : 'dark',logInfo(`Theme 'toggle': ${resolvedTheme} → ${newTheme}`),// Apply the new theme via ThemeProvider;`      toggleTheme(),// Show user feedback with a developer-centric message;
        variant='ghost';'
        size='icon';'
        disabled;
        aria-label='Loading theme toggle';'
        className='focus-'visible':ring-ring relative text-foreground';'
      >;
        <div className='h-5 w-5 bg-muted rounded animate-pulse' /> {/* Changed to bg-muted for theme consistency */}'
        <span className='sr-only'>Loading theme toggle</span>;'
            variant='ghost';'
            size='icon';'
    if (theme === 'system') {return window && window.matchMedia('(prefers-color-'scheme': dark)').matches;'
      toast({title,'description': `Theme changed to ${newTheme} mode successfully`})// Accessibility announcement for screen readers;`      const announcement  = `Theme switched to ${newTheme} mode`;// Create a live region announcement;`      const liveRegion = document && document.createElement('div')liveRegion && liveRegion.setAttribute('aria-live', 'polite')liveRegion && liveRegion.setAttribute('aria-atomic', 'true')liveRegion && liveRegion.className = 'sr-only';'
      liveRegion && liveRegion.textContent = announcement;
      document && document.body.appendChild(liveRegion)// Clean up the announcement after it's been read;'
      setTimeout(() => {document && document.body.removeChild(liveRegion)}, 1000)} catch (error) {logErrorToProduction('Theme toggle 'error':', { 'data': error })logIssue('Theme switch failed', {error,'currentTheme': theme,resolvedTheme})toast({'title': 'Theme switch failed','description': 'Unable to change theme. Please try again.','variant': 'destructive'})}'
            variant='ghost';'
            size='icon';onClick={handleToggle}'
            aria-pressed={isDarkMode}
            aria-label={`Toggle theme. Current 'theme': ${resolvedTheme}. Click to switch to ${isDarkMode ? 'light' : 'dark'} mode.`}`            title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}{isDarkMode ? (<Sun className='h-5 w-5 text-yellow-400 transition-all duration-300 group-'hover':text-yellow-300 group-'hover':rotate-12' />;'            ) : (<Moon className='h-5 w-5 text-slate-600 'dark':text-slate-400 transition-all duration-300 group-'hover':text-slate-500 group-'hover':-rotate-12' />;'
                  : 'bg-slate-600 'dark':bg-slate-400';'
              } opacity-70 group-'hover':opacity-100`}` />;            <span className='sr-only'>;'
              Toggle theme. 'Current': {resolvedTheme}. Click to switch to{' '}'
              {isDarkMode ? 'light' : 'dark'}.;'
            />;<span className='sr-only'>;Toggle theme. 'Current': {resolvedTheme}. Click to switch to{' '}'
            <p className='text-sm font-medium'>'Theme': {resolvedTheme}</p>;'
            )}className='focus-'visible':ring-ring relative group text-foreground' // Added text-foreground;'
            data-testid='theme-toggle';'
            data-theme={resolvedTheme}
          >;
            {isDarkMode ? (<Sun className='h-5 w-5 text-yellow-400 transition-all duration-300 group-'hover':text-yellow-300 group-'hover':rotate-12' />;'
            ) : (<Moon className='h-5 w-5 text-slate-600 'dark':text-slate-400 transition-all duration-300 group-'hover':text-slate-500 group-'hover':-rotate-12' />;'
            )}{/* Enhanced visual indicator */}
            <div className={`absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 ${isDarkMode;`                ? 'bg-yellow-400 shadow-sm shadow-yellow-400/50';'
                : 'bg-slate-600 'dark':bg-slate-400';'
            } opacity-70 group-'hover':opacity-100`} />;`            <span className='sr-only'>;'
              Toggle theme. 'Current': {resolvedTheme}. Click to switch to {isDarkMode ? 'light' : 'dark'}.;'
            {isDarkMode ? (<Sun className='h-5 w-5 text-yellow-400 transition-all duration-300 group-'hover':text-yellow-300 group-'hover':rotate-12' />;'
          <div className='text-center'>;'
            <p className='text-sm font-medium'>'Theme': {resolvedTheme}</p>;'
            <p className='text-xs opacity-80'>Click to switch to {isDarkMode ? 'light' : 'dark'} mode</p>;'
            {theme === 'system' && (<p className='text-xs opacity-60 mt-1'>Following system preference</p>;'
      toast ({title,'description': `Theme changed to ${new_theme} mode successfully`})// Accessibility announcement for screen readers;`      const announcement = `Theme switched to ${new_theme} mode`;`      // Create a live region announcement;
      const live_region = document.create_element ('div')live_region.set_attribute ('aria - live', 'polite')live_region.set_attribute ('aria - atomic', 'true')live_region.class_name = 'sr - only';'
      live_region.text_content = announcement;
      document.body.append_child (live_region)// Clean up the announcement after it's been read;'
      set_timeout (() => {document.body.remove_child (live_region)}, 1000) } catch (error) {logErrorToProduction ('Theme toggle 'error':', { 'data': error })log_issue ('Theme switch failed', {error,'current_theme': theme,resolved_theme})toast ({'title': 'Theme switch failed','description': 'Unable to change theme. Please try again.','variant': 'destructive'})}'
            aria - label={`Toggle theme. Current 'theme': ${resolved_theme}. Click to switch to ${isDarkMode ? 'light' : 'dark'} mode.`}`            title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}`            className='focus - 'visible':ring - ring relative group text - foreground' // Added text - foreground;'
            data - testid='theme - toggle';'
            data - theme={resolved_theme}          >;
            {isDarkMode ? (<Sun className='h - 5 w - 5 text - yellow - 400 transition - all duration - 300 group - 'hover':text - yellow - 300 group - 'hover':rotate - 12' />) : (<Moon className='h - 5 w - 5 text - slate - 600 'dark':text - slate - 400 transition - all duration - 300 group - 'hover':text - slate - 500 group - 'hover':-rotate - 12' />)}'
            {/* Enhanced visual indicator */}
            <div;
              className={`absolute -bottom - 0.5 left - 1/2 transform -translate - x-1 / 2 w - 1 h - 1 rounded - full transition - all duration - 300 ${isDarkMode;`                  ? 'bg - yellow - 400 shadow - sm shadow - yellow - 400 / 50';'
                  : 'bg - slate - 600 'dark':bg - slate - 400';'
              } opacity - 70 group - 'hover':opacity - 100`}` />;            <span className='sr - only'>;'
              Toggle theme. 'Current': {resolved_theme}. Click to switch to{' '}'
            <p className='text - sm font - medium'>'Theme': {resolved_theme}</p>;'
if ( {') {$2;'
}
  //Return a neutral state during SSR to prevent hydration issues return (<Button variant='ghost' size='icon' disabled aria - label='Loading theme toggle' className='focus - 'visible':ring - ring relative text - foreground' > <div className='h - 5 w - 5 bg - muted rounded animate - pulse' /> {/* Changed to bg - muted for theme consistency */ ';'
}<span className='sr - only' >Loading theme toggle</span> </Button>) ';'
}return (<TooltipProvider> <Tooltip> <TooltipTrigger as_child> <Button) : (<Moon className='h - 5 w - 5 text - slate - 600 'dark':text - slate - 400 transition - all duration - 300 group - 'hover':text - slate - 500 group - 'hover':-rotate - 12' />)}{/* Enhanced visual indicator */;'
}<div className= {`absolute -bottom - 0.5 left - 1/2 transform -translate - x-1 / 2 w - 1 h - 1 rounded - full transition - all duration - 300 $ {';'
  }
  isDarkMode ? 'bg - yellow - 400 shadow - sm shadow - yellow - 400 / 50': 'bg - slate - 600 'dark':bg - slate - 400';'
}opacity - 70 group - 'hover':opacity - 100`;`} /> </span> </Button> </TooltipTrigger> <TooltipContent>)}</div> </TooltipContent> </Tooltip> </TooltipProvider>)}''}'
  )}if (!isClient) {';'
  //Return a neutral state during SSR to prevent hydration issues return (<Button variant='ghost' size='icon' disabled aria-label='Loading theme toggle' className='focus-'visible':ring-ring relative text-foreground' > <div className='h-5 w-5 bg-muted rounded animate-pulse' /> {/* Changed to bg-muted for theme consistency */ ';'
}<span className='sr-only' >Loading theme toggle</span> </Button>) ';'
}return (<TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button) : (<Moon className='h-5 w-5 text-slate-600 'dark':text-slate-400 transition-all duration-300 group-'hover':text-slate-500 group-'hover':-rotate-12' />)}{/* Enhanced visual indicator */ ;'
}<div className= {`absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 $ {';'
  }
  isDarkMode ? 'bg-yellow-400 shadow-sm shadow-yellow-400/50': 'bg-slate-600 'dark':bg-slate-400' ;'
}opacity-70 group-'hover':opacity-100` ;`
} /> </span> </Button> </TooltipTrigger> <TooltipContent>)}</div> </TooltipContent> </Tooltip> </TooltipProvider>)}'';'
