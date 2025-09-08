const [topCountries, setTopCountries] = useState<CountryPricing[]>([])interface CountrySelectorProps  {'onCountryChange': ('country': CountryPricing | null,) => void;
interface CountrySelectorProps  {'onCountryChange': ('country': CountryPricing | null) => void;
interface CountrySelectorProps  {'onCountryChange': ('country': CountryPricing | null) => void;
  }
  'selectedCountry': CountryPricing | null;
export function CountrySelector() {const [topCountries, setTopCountries] = useState<CountryPricing[]>([])interface CountrySelectorProps  {'onCountryChange': ('country': CountryPricing | null,) => void;
  }
  'selectedCountry': CountryPricing | null;
      .filter(item => { return popular.includes(item.country)).sort((a, b) => a.country.localeCompare(b.country))const popular = ['United States', 'United Kingdom', 'Canada', 'Germany', 'Australia', 'Japan', 'Singapore'],const top = onsiteServicePricing.filter(item =>; }'
      popular.includes(item.country)).sort((a, b) => a.country.localeCompare(b.country)),setTopCountries(top)}, [])// Handle country selection;
  const handleCountryChange = ('countryName': string) => {import { useState, useEffect  } from 'react';'
import { Globe  } from 'lucide-react';'
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from '@/components/ui/select';'
  CountryPricing,onsiteServicePricing} from '@/data/onsiteServicePricing';interface CountrySelectorProps  {'onCountryChange': ('country': CountryPricing | null) => void;'
  }
  'selectedCountry': CountryPricing | null;export function CountrySelector(): any ({onCountryChange,selectedCountry}: CountrySelectorProps) {const [topCountries, setTopCountries] = useState<CountryPricing[]>([])interface CountrySelectorProps  {'onCountryChange': ('country': CountryPricing | null,) => void,'selectedCountry': CountryPricing | null;
  const handleCountryChange = ('countryName': string) => {const country =;
          </div>        <SelectContent className='bg-zion-blue-dark border-zion-blue-light max-h-80'>;'
          <div className='p-2 border-b border-zion-blue-light'>;'
            <p className='text-sm text-zion-slate-light pb-1'>Popular Countries</p>;'
            {topCountries && topCountries.map((item,) => (<SelectItem key={item && item.country} value={item && item.country} className='text-white'>;'
              ))}          </div>              .map((item) => (.sort((a, b,) => a && a.country.localeCompare(b && b.country)).map((item,) => (<SelectItem key={item && item.country} value={item && item.country} className='text-white'>;'
    </div>;return (<div className='mb-6'>;'
      <h3 className='text-xl font-semibold text-white mb-4 flex items-center'>;'
        <Globe className='mr-2 h-5 w-5 text-zion-cyan' />;'
        {selectedCountry ? `IT Onsite Service in ${selectedCountry.country}` : 'Select Country for IT Onsite Service'}'      </h3>;
      <Select;
        onValueChange={handleCountryChange}value={selectedCountry?.country}
      >;
        <SelectTrigger className='bg-zion-blue border-zion-blue-light text-white'>;'
          <SelectValue placeholder='Select a country' />;'
        </SelectTrigger>;
        <SelectContent className='bg-zion-blue-dark border-zion-blue-light max-h-80'>;'
          <div className='p-2 border-b border-zion-blue-light'>;'
            <p className='text-sm text-zion-slate-light pb-1'>Popular Countries</p>;'
            {topCountries.map((item) => (<SelectItem key={item.country} value={item.country} className='text-white'>;'
          <div className='p-2'>;'
            <p className='text-sm text-zion-slate-light pb-1'>All Countries</p>;'
            {onsiteServicePricing;
              .sort((a, b) => a.country.localeCompare(b.country)).map((item) => (<SelectItem key={item.country} value={item.country} className='text-white'>;'
interface CountrySelectorProps  {'onCountryChange': ('country': CountryPricing | null) => void;
  }
  'selected_country': CountryPricing | null;
export /**;
 * CountrySelector - Function description;
 */;
function CountrySelector() {const [top_countries, setTopCountries] = useState < CountryPricing[]>([])interface CountrySelectorProps  {'onCountryChange': ('country': CountryPricing | null, ) => void,'selected_country': CountryPricing | null;
  const handleCountryChange = ('country_name': string) =>: any {const country =;
          </div>        <SelectContent className='bg - zion - blue - dark border - zion - blue - light max - h-80'>;'
          <div className='p - 2 border - b border - zion - blue - light'>;'
            <p className='text - sm text - zion - slate - light pb - 1'>Popular Countries</p>;'
            {top_countries.map ((item, ) => (<SelectItem key={item.country} value={item.country} className='text - white'>;'
                </SelectItem>))}          </div>              .map ((item) => (.sort ((a, b, ) => a.country.locale_compare (b.country)).map ((item, ) => (<SelectItem key={item.country} value={item.country} className='text - white'>;'
