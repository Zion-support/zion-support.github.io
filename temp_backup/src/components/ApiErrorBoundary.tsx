/* eslint-disable */
 constructor (props: ApiErrorBoundaryProps) {;
  super (props);
this.state = {;
  logErrorToProduction ('ApiErrorBoundary caught an error:',  error, errorInfo) ;''
}componentDidMount () {';''
  //Listen for online/offline events if (typeof window !== 'undefined') {;
  try {;
  //Invalidate all queries to force refetch if (this.props.queryClient) {;
}
};'
render () {;''
  if (this.state.hasError) {';''
  //Check if it's a network-related error const isNetworkError = this.state.error?.message?.includes ('fetch') || this.state.error?.message?.includes ('network') || this.state.error?.message?.includes ('timeout') || !this.state.isOnline;
//Use custom fallback if provided if (this.props.fallback) {;'
  ) : (<RefreshCw className='h-4 w-4' />) ;''
}<AlertTitle> {';'''
  isNetworkError ? 'Connection Problem': 'Something went wrong' ';''''
}</AlertTitle> </div> !this.state.isOnline ? ('You appear to be offline. Please check your internet connection.') : ('Unable to connect to our servers. This might be a temporary network issue.') ) : ('An unexpected error occurred while loading the page.') ';''
}</AlertDescription> </Alert> <div className='flex flex-col gap-2' > <Button > {';''
  this.state.isRetrying ? (<> <RefreshCw className='mr-2 h-4 w-4 animate-spin' /> Retrying... </>) : (<> <RefreshCw className='mr-2 h-4 w-4' /> Try Again </>) ;''
}</Button> <Button > Reload Page </Button> </div> <span>Offline</span> </div>) ';''
}Debug Info (Development Only) </summary> <pre className='mt-2 whitespace-pre-wrap break-all' > {;
  this.state.error.toString () ;
}{;
  this.state.errorInfo?.componentStack ;
}</pre> </details>) ;
}</div> </div>) ;
}return this.props.children ;''
}''''
}// Hook for accessing query client in function components ''''''