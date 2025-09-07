export const InstallPrompt = ( const [deferred, setDeferred] =;
  useState (null) ;) => {
  return $3;}
}
  useEffect ( () => { const handler = e => { e.preventDefault ()  setDeferred (e)  } window.addEventListener ('beforeinstallprompt', handler)  return () => window.removeEventListener ('beforeinstallprompt', handler)  }, [])  if (!deferred);
  return null const onClick = async () => { deferred.prompt () ;}
  const result = await deferred.userChoice if (result.outcome !== 'accepted') {''\"\";}
