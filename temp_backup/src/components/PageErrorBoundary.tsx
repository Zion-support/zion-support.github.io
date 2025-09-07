/* eslint-disable */
 function PageErrorFallback ({;
  error,  resetErrorBoundary, pageName ;
}: PageErrorFallbackProps) {;
  const isAuthConfigError = error?.message?.includes ('Auth0') || error?.message?.includes ('AUTH0') || error?.message?.includes ('authentication') || error?.message?.includes ('environment');'
const handleRefresh = () => {;''
  if (resetErrorBoundary) {';''
  ? 'This page cannot load due to missing authentication configuration' : 'An unexpected error occurred while loading this page' ;
}</p> </div> <div> <h3 className="font-semibold text-yellow-800 mb-1" >Configuration Required</h3> <p className="text-yellow-700 text-sm" > This application requires Auth0 authentication to be properly configured. Please contact your system administrator. </p> </div> </div> </div>) ";""
}Technical Details </summary> <pre className="mt-2 text-sm text-gray-600 whitespace-pre-wrap break-all overflow-auto" > {;"
  error.message ;""
}</pre> </details>) ";""
}> <RefreshCw className="w-4 h-4 mr-2" /> Try Again </button> <Link href="/" className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors" > <Home className="w-4 h-4 mr-2" /> Go Home </Link> </div> Marketplace </Link> <Link href="/talent" className="text-blue-600 hover:underline" > Talent </Link> <Link href="/services" className="text-blue-600 hover:underline" > Services </Link> <Link href="/about" className="text-blue-600 hover:underline" > About </Link> </div> </div> </div> <div className="bg-gray-800 text-white rounded-lg p-6 text-center"> <p className="mb-3">Need help? Contact our support team</p> <div className="flex flex-col sm: flex-row gap-3 justify-center"> mailto:support@zion.tech"className=" text-blue-400 hover:underline"> support@zion.tech </Link> <Link href=" /status"className=" text-blue-400 hover:underline" > Service Status </Link> </div> </div> </div> </div>) ;
}return (<ErrorBoundary FallbackComponent= {;
  FallbackComponent ;
}onError= {;
  handleError ;
}onReset= {;'
  () => {;''
  //Reset any application state if needed logInfo (`Resetting error boundary for $ {';''
  pageName || 'page' ;`
}`) ;
}
}> {;
  children ;'"
}</ErrorBoundary>) ;'"'"
}'"'"'"`