/* eslint-disable */
 /** Source to use if the main src fails */ fallbackSrc?: string;
/** CSS class for the retry button */ /** * Image component that falls back to a placeholder and offers a retry button when the image fails to load. */ return (<div className="relative inline-block" > <Image {;
  ...props ;
}src= {;
  currentSrc ;
}alt= {;
  alt ;
}onError= {;
  handleError ;
}className= {;
  cn (className) ;
}fill= {;"
  fill ;""
}/> {";""
  failed && (<button type="button" onClick={;
  handleRetry ;
}className= {;
  cn ('absolute bottom-1 right-1 text-xs underline', retryClassName) ;
}> Retry </button>) ;
}</div>) ;'"
}export default ImageWithRetry;'"'"
'"'"'"