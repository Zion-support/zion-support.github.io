import { useState, useMemo } from "react";
import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Globe, Search, ArrowUpDown } from 'lucide-react'
import { Button } from "@/components/ui/button";

export function ITServicePricingTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState<{

    key: keyof CountryPricing, direction: "ascending" | "descending",
  }>({
    key: "country",
    direction: "ascending"}),
    key: keyof CountryPricing, direction: ascending" | "descending}>({
    key: country",
    direction: "ascending}),

import { useState, useMemo  } from 'react';
import {onsiteServicePricing,CountryPricing} from '@/data/onsiteServicePricing';
import { Input  } from '@/components/ui/input';
  Table,TableBody,TableCell,TableHead,TableHeader,TableRow} from '@/components/ui/table';
import { Globe, Search, ArrowUpDown  } from 'lucide-react';
import { Button  } from '@/components/ui/button';
export function ITServicePricingTable() {const [searchQuery, setSearchQuery] = useState('')const [sortConfig, setSortConfig]  = useState<{import { useState, useMemo } from "react",import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",import { Input } from "@/components/ui/input",import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow  } from '@/components/ui/table';
export function ITServicePricingTable() {const [searchQuery, setSearchQuery] = useState("")const [sortConfig, setSortConfig] = useState<{key: keyof CountryPricing;
    direction: 'ascending' | 'descending';
  }>({key: 'country',direction: 'ascending'})const sortedData = useMemo(() => {let filteredData = [...onsiteServicePricing];
import { useState, useMemo  } from react';
import {onsiteServicePricing,CountryPricing} from '@/data/onsiteServicePricing;
import { Input  } from @/components/ui/input';
  Table,TableBody,TableCell,TableHead,TableHeader,TableRow} from '@/components/ui/table;
import { Globe, Search, ArrowUpDown  } from lucide-react';
import { Button  } from '@/components/ui/button;
export function ITServicePricingTable() {const [searchQuery, setSearchQuery] = useState(')const [sortConfig, setSortConfig]  = useState<{import { useState, useMemo } from react",import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing,import { Input } from @/components/ui/input",import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow  } from '@/components/ui/table;
export function ITServicePricingTable() {const [searchQuery, setSearchQuery] = useState(")const [sortConfig, setSortConfig] = useState<{key: keyof CountryPricing;
    direction: ascending' | 'descending;
  }>({key: country',direction: 'ascending})const sortedData = useMemo(() => {let filteredData = [...onsiteServicePricing];
    // Filter by search query;
    if (searchQuery) {filteredData = filteredData && filteredData.filter(item =>;
        item && item.country.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()))const sortedData = null;
import { onsiteServicePricing;
  CountryPricing;
 } from '@/data/onsiteServicePricing';
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow;
} from '@/components/ui/table';
export function ITServicePricingTable() {const [searchQuery, setSearchQuery] = useState('')const [sortConfig, setSortConfig] = useState<{key: keyof CountryPricing;
    direction: 'ascending' | 'descending';
  }>({key: 'country';
    direction: 'ascending';
  })const sortedData = useMemo(() => {let filteredData = [...onsiteServicePricing];
    // Filter by search query;
    if (searchQuery) {filteredData = filteredData.filter(item =>;
        item.country.toLowerCase().includes(searchQuery.toLowerCase()))}// Sort data;
    filteredData && filteredData.sort((a, b,) => {if (a[sortConfig && sortConfig.key] < b[sortConfig && sortConfig.key]) {return sortConfig && sortConfig.direction === 'ascending' ? -1 : 1;
      }const handleSort = (key: keyof CountryPricing) => {setSortConfig({key,direction:;
        sortConfig.key === key && sortConfig.direction === "ascending";
          ? "descending";
          : "ascending"})},const handleSort = (key: keyof CountryPricing,) => {setSortConfig({key,direction:;
        sortConfig && sortConfig.key === key && sortConfig && sortConfig.direction === 'ascending';
          ? 'descending';
          : 'ascending'})}key;
      direction:;
        sortConfig.key === key && sortConfig.direction === 'ascending';
          ? 'descending';
          : 'ascending';
    })}return (return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    }),return filteredData;
  }, [onsiteServicePricing, searchQuery, sortConfig]),const handleSort = (key: keyof CountryPricing) => {setSortConfig({key,direction:;
        sortConfig.key === key && sortConfig.direction === "ascending";
          ? "descending";
          : "ascending"})},return (<div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4 w-full">;
      <div className="flex items-center mb-6">;
        <div className="relative flex-1">;
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;
          <Input;
            placeholder="Search by country...";
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-zion-blue border-zion-blue-light focus:border-zion-purple text-white";
          />;
        </div>;
      </div>;
      <div className="rounded-md border border-zion-blue-light overflow-hidden">;
        <Table>;
          <TableHeader className='bg-zion-blue'>;
            <TableRow>;
            onChange={e => setSearchQuery(e && e.target.value)}
            className='pl-10 bg-zion-blue border-zion-blue-light focus:border-zion-purple text-white'          />;
        </div>;
      </div>;<div className='rounded-md border border-zion-blue-light overflow-hidden'>;
        <Table>;
          <TableHeader className='bg-zion-blue'>;
            <TableRow>;
              <TableHead className='text-zion-cyan font-medium'>;<Button;
                  variant='ghost';
                  onClick={() => handleSort('country')}
                  className='hover:bg-zion-blue-dark p-0 flex items-center space-x-1 text-zion-cyan hover:text-zion-cyan-light'                >;
              <TableHead className="text-zion-cyan font-medium">;
                <Button;
                  variant="ghost";
        return sortConfig.direction === "ascending" ? 1 : -1,
      }

        sortConfig.key === key && sortConfig.direction === "ascending" 
          ? "descending" 
          : "ascending"})

        sortConfig.key === key && sortConfig.direction === "ascending" 
          ? "descending",
          : "ascending"})
        sortConfig.key === key && sortConfig.direction === "ascending 
          ? descending",
          : "ascending})
                  variant="ghost",
                  onClick={() => handleSort("country")}
                  className="hover:bg-zion-blue-dark p-0 flex items-center space-x-1 text-zion-cyan hover:text-zion-cyan-light"


                  className="hover:bg-zion-blue-dark p-0 flex items-center space-x-1 text-zion-cyan hover:text-zion-cyan-light";
                  className="hover:bg-zion-blue-dark p-0 flex items-center space-x-1 text-zion-cyan hover:text-zion-cyan-light;
                >;
                  <span>Country</span>;
                  <ArrowUpDown className="h-4 w-4" />;
                </Button>;
              </TableHead>;
              </TableHead>;
              <TableHead className='text-right text-zion-cyan font-medium'>;
                <Button;
                  variant='ghost';
                  onClick={() => handleSort('pricePerIncident')}
                  className='hover:bg-zion-blue-dark p-0 flex items-center justify-end space-x-1 w-full text-zion-cyan hover:text-zion-cyan-light'                >;
                  <span>Price Per Incident</span>;
                  <ArrowUpDown className='h-4 w-4' />;
                </Button>;
              </TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody className='bg-zion-blue-dark'>;
            {sortedData.length > 0 ? (sortedData.map(item => (<TableRow;
                  key={item.country}
                  className='border-b border-zion-blue-light hover:bg-zion-blue/50';
                >;
                  <TableCell className='flex items-center space-x-2'>;
                    <Globe className='h-4 w-4 text-zion-purple' />;
                    <span className='text-white'>{item.country}</span>;
                  </TableCell>;
                  <TableCell className='text-right font-medium text-white'>;
                    ${item.pricePerIncident.toFixed(2)}                  </TableCell>;
                </TableRow>;
              ))) : (<TableRow>;
                <TableCell;
              <TableHead className="text-right text-zion-cyan font-medium">



          <TableBody className="bg-zion-blue-dark">
          <TableBody className="bg-zion-blue-dark>
            {sortedData.length > 0 ? (
              sortedData.map((item) => (,
                <TableRow key={item.country} className="border-b border-zion-blue-light hover:bg-zion-blue/50">
                  <TableCell className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-zion-purple" />,
                    <span className="text-white">{item.country}</span>
                  </TableCell>
                  <TableCell className="text-right font-medium text-white">${item.pricePerIncident.toFixed(2)}</TableCell>


                  className='text-center py-10 text-zion-slate-light';
                  className=text-center py-10 text-zion-slate-light';
                >;
                  No countries match your search;
                </TableCell>;
              </TableRow>;


          </TableBody>;
        </Table>;
      </div>;
    </div>;
  )
  )
}
;
