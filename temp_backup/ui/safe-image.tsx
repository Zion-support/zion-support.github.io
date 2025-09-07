/* eslint-disable */
'use client';
const handleError = () => {;
  if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {;
  //If we have an error and no fallback, show a placeholder if (hasError && (!fallbackSrc || currentSrc === fallbackSrc) ) {;
  return (<div className= {;
  `flex items-center justify-center bg-gray-100 text-gray-400 $ {;
  className ;`
}` ;
}> <ImageIcon className="w-6 h-6" /> </div>) ;
}return (<Image src= {;
  currentSrc ;
}alt= {;
  alt ;
}width= {;
  width ;
}height= {;
  height ;
}className= {;
  className ;
}onError= {;
  handleError ;
}priority= {;
  priority ;
}//Add unoptimized as fallback for problematic images unoptimized= {;
  hasError ;'"
}/>) ;'"'"
}'"'"'"`