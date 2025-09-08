/* eslint-disable */
 interface AIMatchingResultsProps {;
  matches: MatchResultItem[];
onSelectMatch?: (match: MatchResultItem) => void;
isLoading?: boolean;
projectDescription?: string;
serviceType?: string ;
}export function AIMatchingResults ({;
  matches;
onSelectMatch;
isLoading = false;
projectDescription = "";";""
serviceType: serviceType = "" ;
}: AIMatchingResultsProps) {;
  //Group matches by category const categories = {;"
  all: matches;""
if (isLoading) {";""
  return (<div className=" space-y-4"> <Skeleton className=" h-10 w-full"/> <div className=" space-y-3"> <Skeleton className=" h-[120px] w-full"/> <Skeleton className=" h-[120px] w-full"/> <Skeleton className=" h-[120px] w-full"/> </div> </div>) ;""
}if (matches.length === 0) {";""
  return (<Card className=" bg-zion-blue-dark border-zion-blue-light text-center p-6"> <CardContent className=" pt-6"> <BarChart3 className=" h-12 w-12 mx-auto text-zion-slate-light mb-3"/> <p className=" text-white font-medium mb-2">No matches found</p> <p className=" text-zion-slate-light text-sm mb-4"> projectDescription && (<div className=" bg-zion-blue-light/20 p-3 rounded-md text-left"> <p className=" text-xs text-zion-slate-light">Your search:</p> <p className=" text-sm text-white"> {;
  projectDescription ;"
}</p> </div>) ;""
}</CardContent> </Card>) ";""
}return () : (<AvatarFallback className=" bg-zion-purple/20"> <CategoryIcon className=" h-6 w-6 text-zion-purple"/> </AvatarFallback>) ";""
}</Avatar> <div className=" flex-1"> <div className=" flex justify-between"> <div> </div> </div>) ;"
}</div> </Badge>) ) ;""
}</div> </div> </div> </div> </div> </Card>) ";""
}) ) : (<div className="text-center py-8 text-zion-slate-light"> No {;
  tab ;
}matches found. </div>) ;
}</TabsContent>) ) ;"
}</Tabs> </div>) ;""
}"""