/* eslint-disable */
 type CarouselApi = ReturnType<typeof useEmblaCarousel>[1] type CarouselOptions = {;
  axis?: 'x' | 'y' [key: string]: unknown ;
}type CarouselPlugin = any type CarouselProps = {;
  opts?: CarouselOptions plugins?: CarouselPlugin type CarouselContextProps = {;
  carouselRef: ReturnType<typeof useEmblaCarousel>[0] api: ReturnType<typeof useEmblaCarousel>[1] scrollPrev: () => void scrollNext: () => void canScrollPrev: boolean canScrollNext: boolean const context = React.useContext (CarouselContext) as CarouselContextProps | null if (!context) {;
  return context as CarouselContextProps ;
}const Carousel = React.forwardRef< HTMLDivElement;
React.HTMLAttributes<HTMLDivElement> & CarouselProps {;
  ... (opts || {;
});
axis: orientation === "horizontal" ? "x" : "y" ;
};
plugins) const [canScrollPrev, setCanScrollPrev] = React.useState (false) const [canScrollNext, setCanScrollNext] = React.useState (false) const onSelect = React.useCallback ( (api: CarouselApi) => {;
  if (!api) {;
  return ;
}setCanScrollPrev (api.canScrollPrev () ) setCanScrollNext (api.canScrollNext () ) ;
}, []) const scrollPrev = React.useCallback ( () => {;
  api?.scrollPrev () ;
}, [api]) const scrollNext = React.useCallback ( () => {;
  api?.scrollNext () ;
}, [api]) ;
};
[scrollPrev, scrollNext]) React.useEffect ( () => {;
  if (!api || !setApi) {;
  return ;
}setApi (api) ;
}, [api, setApi]) React.useEffect ( () => {;"
  if (!api) {;""
  return ";""
}onSelect (api) api.on ("reInit", onSelect) api.on ("select", onSelect) ;
}, [api, onSelect]) return (<CarouselContext.Provider > {;"
  children ;""
}</div> </CarouselContext.Provider>) ";""
}) Carousel.displayName = "Carousel" const CarouselContent = React.forwardRef< HTMLDivElement;
React.HTMLAttributes<HTMLDivElement> > ( ({;
  className, ...props ;
}, ref) => {;
  const {;
  carouselRef, orientation ;
}= useCarousel () return () ;
}{;"
  ...props ;""
}/> </div>) ";""
}) CarouselContent.displayName = "CarouselContent" const CarouselItem = React.forwardRef< HTMLDivElement;
React.HTMLAttributes<HTMLDivElement> > ( ({;
  className, ...props ;
}, ref) => {;
  const {;
  orientation ;
}= useCarousel () return (<div) ;
}{;"
  ...props ;""
}/>) ";""
}) CarouselItem.displayName = "CarouselItem" const CarouselPrevious = React.forwardRef< HTMLButtonElement;
React.ComponentProps<typeof Button>) ;
}disabled= {;
  !canScrollPrev ;
}onClick={;
  scrollPrev ;"
}{;""
  ...props ";""
}> <ArrowLeft className="h-4 w-4" /> <span className="sr-only" >Previous slide</span> </Button>) ";""
}) CarouselPrevious.displayName = "CarouselPrevious" const CarouselNext = React.forwardRef< HTMLButtonElement;
React.ComponentProps<typeof Button>) ;
}disabled= {;
  !canScrollNext ;
}onClick={;
  scrollNext ;"
}{;""
  ...props ";""
}> <ArrowRight className="h-4 w-4" /> <span className="sr-only" >Next slide</span> </Button>) ";""
}) CarouselNext.displayName = "CarouselNext" export {;'"
  type CarouselApi, Carousel, CarouselContent, CarouselItem,  CarouselPrevious, CarouselNext ;'"'"
}'"'"'"