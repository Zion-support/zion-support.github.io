/* eslint-disable */
 interface InteractiveFeaturesProps {;
  className?: string;
style?: React.CSSProperties ;
}export function InteractiveFeatures ({;
  className, style ;
}: InteractiveFeaturesProps) {;
  const [openIndex, setOpenIndex] = React.useState<number | null> (null);
const handleToggle = (index: number) => {;
  setOpenIndex ( (prev) => (prev === index ? null : index) ) ;
};
return (<section className= {;
  cn ("py-16 bg-zion-blue-dark", className) ;"
}style= {;""
  style ";""
}> <div className="container mx-auto px-4" > <div className="text-center mb-8" > <h2 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2" > text-zion-slate-light text-lg max-w-2xl mx-auto" > Hover or click a card to learn more about what Zion offers </p> </div> </CardDescription> </div> </CardHeader> <div </Link> </Button> </CardContent> </div> </Card>) ) ;
}</div> </div> </section>) ;"
}export default InteractiveFeatures;""
"""