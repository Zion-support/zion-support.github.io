/* eslint-disable */
 const observer = new IntersectionObserver ( ([entry]) => {;
  if (entry && entry.isIntersecting) {;
  return () => observer.disconnect () ;
}, [lazy, priority, isInView]);
//Generate WebP-compatible src const getOptimizedSrc = (originalSrc: string) => {;
  //If it's already optimized or external,  return as-is if (originalSrc.startsWith ('http') || originalSrc.includes ('/ next/image') ) {;'
  //For internal images, Next.js will handle optimization return originalSrc;''
};';''
<defs> <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" style="stop-color:#f3f4f6, stop-opacity:1" /> <stop offset="100%" style="stop-color:#e5e7eb, stop-opacity:1" /> 100%"height=" 100%"fill=" url (#grad) "/> </svg>`) .toString ('base64') ;`
}` ;
};
return (<div ref= {;'
  imgRef ;''
}className= {';''
  cn ('relative overflow-hidden', className) ;
}style= {;
  {;
  width, height ;
}
}> {;
  isInView && !hasError && (<Image src= {;
  getOptimizedSrc (src) ;
}alt= {;
  alt ;
}width= {;
  width ;
}height= {;
  height ;
}priority= {;'
  priority ;''
}blurDataURL= {';''
  placeholder === 'blur'? generateBlurDataURL () : undefined ;
}onLoad= {;
  handleLoad ;
}onError= {;'
  handleError ;''
}className= {';''
  cn ('transition-opacity duration-300', isLoading ? 'opacity-0': 'opacity-100') ;
}{;"
  ...props ;""
}/>) ";""
}/>) : (<div className=" text-gray-400 text-center"> <svg className=" w-8 h-8 mx-auto mb-2"fill=" currentColor"viewBox=" 0 0 20 20"> <path fillRule=" evenodd"d=" M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"clipRule=" evenodd"/> </svg> <span className=" text-xs" >Image not available</span> </div>) ;
}</div>) ;
}) ;
}</div>) ;
}//Higher-order component for easy migration from regular img tags return (<OptimizedImage src= {;
  src ;
}alt= {;
  alt ;
}{;
  ... (otherProps as any) ;
}/>) ;
}'"
}// Utility to preload critical images ;'"'"
}'"'"'"`