/* eslint-disable */
 interface CountrySelectorProps {;
  onCountryChange: (country: CountryPricing | null) => void;
selectedCountry: CountryPricing | null ;
}export function CountrySelector ({;
  onCountryChange, selectedCountry ;
}: CountrySelectorProps) {;
  const [topCountries,  setTopCountries] = useState<CountryPricing[]> ([]);
//Set top/popular countries useEffect ( () => {;
  const top = onsiteServicePricing.filter (item => popular.includes (item.country) ) .sort ( (a, b) => a.country.localeCompare (b.country) );
setTopCountries (top) ;
}, []);
//Handle country selection const handleCountryChange = (countryName: string) => {;
  const country = onsiteServicePricing.find (item => item.country === countryName) || null;
onCountryChange (country) ;
};
return (<div className="mb-6" > <h3 className="text-xl font-semibold text-white mb-4 flex items-center" > <Globe className="mr-2 h-5 w-5 text-zion-cyan" /> {;"
  selectedCountry ? `IT Onsite Service in $ {;""
  selectedCountry.country ";""`
}` : "Select Country for IT Onsite Service" ;
}handleCountryChange ;"
}value= {;""
  selectedCountry?.country ";""
}> <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white" > <SelectValue placeholder="Select a country" /> </SelectTrigger> </SelectItem>) ) ;"
}</div> </SelectContent> </Select> </div>) ;""
}"""`