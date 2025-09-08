/* eslint-disable */
 function MarketplaceErrorFallback ({;
  error, resetErrorBoundary ;
}: MarketplaceErrorFallbackProps) {;
  const handleRetry = async () => {;
  try {;
  //Re-call SWR mutate ('*') to refresh all cached data ;
}
};
</AlertDescription> </Alert> <div className="flex flex-col space-y-2" > <Button > <RefreshCcw className="mr-2 h-4 w-4" /> Retry </Button> <Button > Reload Page </Button> </div> <a > contact support </Link> </div> </div> </div>) ;
}export function MarketplaceErrorBoundary ({;
  children ;
}: MarketplaceErrorBoundaryProps) {;
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {;
  //Log boundary errors to Sentry return (<ErrorBoundary FallbackComponent= {;
  MarketplaceErrorFallback ;
}onError= {;
  handleError ;
}> {;
  children ;'"
}</ErrorBoundary>) ;'"'"
}'"'"'"