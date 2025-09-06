/* eslint-disable */
 interface CountryServiceCardProps {;
  country: CountryPricing;
onSelect: (country: CountryPricing) => void;
onQuote?: (country: CountryPricing) => void;
isPopular?: boolean ;
}export function CountryServiceCard ({;
  country, onSelect,  onQuote, isPopular ;
}: CountryServiceCardProps) {;
  //Get region flag based on country name (for demo purposes) const getRegionEmoji = (countryName: string | undefined) : string => {;
  return emojiMap[countryName] || "🌐";
};"
//Get response time estimate based on country return (<Card className= {;""
  `h-full transition-all duration-300 hover:shadow-lg $ {";""
  isPopular </div> <div className="flex items-start" > <MapPin className="h-4 w-4 mr-2 text-zion-purple mt-1" /> <span>Service available in major cities</span> </div> <div className="flex items-start" > <Server className="h-4 w-4 mr-2 text-zion-purple mt-1" /> <span>Hardware & network support</span> </div> <div className="flex items-start" > <Check className="h-4 w-4 mr-2 text-zion-purple mt-1" /> <span>First hour included</span> </div> </div> </CardContent> <CardFooter className="flex flex-col space-y-2" > <Button onClick={;
  () => onSelect (country) ;"
}className= {;""`
  `w-full $ {";""
  isPopular > Select Service </Button> <Button > Get Quote </Button> <Button asChild > <Link href="/contact" >Contact Sales</Link> </Button> </CardFooter> </Card>) ;""
}"""`