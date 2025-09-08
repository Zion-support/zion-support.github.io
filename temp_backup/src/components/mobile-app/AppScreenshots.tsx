/* eslint-disable */
 export const AppScreenshots: React.FC = () => {;
  const scrollContainerRef = useRef<HTMLDivElement> (null);
const scroll = (direction: "left" | "right") => {;
  if (scrollContainerRef.current) {;
  const scrollAmount = 300;
scrollContainerRef.current.scrollBy ({;"
}""
};";""
Take a visual tour through the Zion app's intuitive interface. </p> </div> <div className="relative" > <Button > <ChevronLeft className="h-6 w-6" /> </Button> <div > {;"
  mockScreenshots.map ( (screenshot) => (<div key= {;""
  screenshot.id ";""
}className="flex-shrink-0 w-60 h-[500px] snap-center rounded-xl overflow-hidden border-2 border-zion-purple/30" > <img /> </div>) ) ";""
}</div> <Button > <ChevronRight className="h-6 w-6" /> </Button> </div> </div> </section>) ;'"
};'"'"
'"'"'"