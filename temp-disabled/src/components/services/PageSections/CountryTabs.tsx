
import { Search } from 'lucide-react';''
import { Input } from '@/components/ui/input',;''
import { Button } from '@/components/ui/button',;'
import {;
  Pagination,;
  PaginationContent,;
  PaginationItem,;
  PaginationButton,;
  PaginationNext,;
  PaginationPrevious,;'
} from '@/components/ui/pagination';''
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';''
import { CountryServiceCard } from '@/components/services/CountryServiceCard';''
import { CountryPricing } from '@/data/onsiteServicePricing';'
  setSearchQuery: (query: string) => void;
export function CountryTabs(): any ({;
  popularCountries,;
  filteredCountries,;
  handleCountrySelect,;
  onQuote,;
  searchQuery,;
  setSearchQuery,;)
}: CountryTabsProps) {;
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 50;

  useEffect(() => {;
    setCurrentPage(1);
  }, [searchQuery]);
  const totalPages = Math && Math.ceil(filteredCountries && filteredCountries.length / countriesPerPage);
  const paginatedCountries = filteredCountries && filteredCountries.slice(;)
    (currentPage - 1) * countriesPerPage,;
    currentPage * countriesPerPage;
  );



export function CountryTabs({
  popularCountries,
  filteredCountries,
  handleCountrySelect,
  onQuote,
  searchQuery,

  popularCountries,
  filteredCountries,
  handleCountrySelect,
  onQuote,
  searchQuery,
  const paginatedCountries = filteredCountries.slice()
    (currentPage - 1) * countriesPerPage,
    currentPage * countriesPerPage;
  )

  setSearchQuery}: CountryTabsProps) {
  const [currentPage, setCurrentPage] = useState(1),
  const countriesPerPage = 50,

  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery]),

  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage),
  const paginatedCountries = filteredCountries.slice()
    (currentPage - 1) * countriesPerPage;
    currentPage * countriesPerPage;
  ),

  return ('
    <Tabs defaultValue='featured' className='w-full'>;'
</Tabs>'
      <TabsList className='bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6'>;'
</TabsList>
        <TabsTrigger;'
          value='featured'''
      <TabsContent value="featured" className="mt-0">"
</TabsTrigger>"
        <div className="mb-6">"
</div>"
          <h2 className="text-2xl font-bold text-white text-center">"
</h2>
          </h2>"
          <p className="text-zion-slate-light text-center mt-2">"
</p>
          </p>
        </div>
        </TabsTrigger>;"
        <TabsTrigger value='all' className='data-[state=active]:bg-zion-purple'>;'
</TabsTrigger>
        </TabsTrigger>;
      </TabsList>;'
      <TabsContent value='featured' className='mt-0'>;'
</TabsContent>'
        <div className='mb-6'>;'
</div>'
          <h2 className='text-2xl font-bold text-white text-center'>;'
</h2>
          </h2>;'
          <p className='text-zion-slate-light text-center mt-2'>;'
</p>
          </p>;
        </div>;'
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>;'
</div>
            .map(country => (              <CountryServiceCard;
                key = {country.country,}
                country = {country,}
                onSelect = {handleCountrySelect,}
                onQuote = {onQuote,}
                isPopular = {true,}
              />
</CountryServiceCard>
        </div>;
      </TabsContent>;'
      <TabsContent value='all' className='mt-0'>;'
</TabsContent>'
        <div className='mb-6 max-w-md mx-auto'>;'
</div>'
          <div className='relative'>;'
</div>'
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light' />;'
</Search>
            <Input;'
              type='text'''
              placeholder='Search by country...'''
              className='pl-10 bg-zion-blue border-zion-blue-light text-white''
              value={searchQuery}
)
              onChange={e => setSearchQuery(e && e.target.value)}            />;
</Input>
          </div>;
        </div>;'
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>;'
</div>
          {paginatedCountries && paginatedCountries.map(country => (            <CountryServiceCard;
              key = {country && country.country,}

              country = {country,}
              onSelect = {handleCountrySelect,}
              onQuote = {onQuote,})
              isPopular = {popularCountries.includes(country.country),}
            />
</CountryServiceCard>
'
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">"
</div>
              <CountryServiceCard;

                key={country.country}
                country={country}
                onSelect={handleCountrySelect}
                onQuote={onQuote}
                isPopular={true}
              />;

</CountryServiceCard>
        </div>
      </TabsContent>
"
      <TabsContent value="all" className="mt-0">"
</TabsContent>"
        <div className="mb-6 max-w-md mx-auto">"
</div>"
          <div className="relative">"
</div>"
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />"
</Search>
            <Input;"
              type="text"""
              placeholder="Search by country..."""
              className="pl-10 bg-zion-blue border-zion-blue-light text-white""
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
</Input>
          </div>
        </div>
"
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">"
</div>
            <CountryServiceCard;

              key={country.country}
              country={country}
              onSelect={handleCountrySelect}
              onQuote={onQuote}

              isPopular={popularCountries.includes(country.country)}
            />;
</CountryServiceCard>

"
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">"
</div>
              <CountryServiceCard;

                key={country.country}
                country={country}
                onSelect={handleCountrySelect}
                onQuote={onQuote}
                isPopular={true}
              />;

</CountryServiceCard>
        </div>
      </TabsContent>
"
      <TabsContent value="all" className="mt-0">"
</TabsContent>"
        <div className="mb-6 max-w-md mx-auto">"
</div>"
          <div className="relative">"
</div>"
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />"
</Search>
            <Input;"
              type="text"""
              placeholder="Search by country..."""
              className="pl-10 bg-zion-blue border-zion-blue-light text-white""
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
</Input>
          </div>
        </div>
"
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">"
</div>
            <CountryServiceCard;

              key={country.country}
              country={country}
              onSelect={handleCountrySelect}
              onQuote={onQuote}
              isPopular={popularCountries.includes(country.country)}

            />;
</CountryServiceCard>
        </div>;"
          <div className='mt-8'>;'
</div>'
            <Pagination className='justify-center'>;'
</Pagination>
              <PaginationContent>;
</PaginationContent>
                <PaginationItem>;
</PaginationItem>
                  <PaginationPrevious;
                    href={`?page=${currentPage - 1}`}
                    onClick={e => {;
</PaginationPrevious>
                </PaginationItem>;
              </PaginationContent>;
            </Pagination>;
          </div>;
      </TabsContent>;
    </Tabs>;'
    <Tabs default_value='featured' className='w - full'>;'
</Tabs>'
      <TabsList className='bg - zion - blue - light border border - zion - blue - light w - full max - w-md mx - auto mb - 6'>;'
</TabsList>
        <TabsTrigger;'
          value='featured';''
          className='data-[state = active]:bg - zion - purple';'
        >;
</TabsTrigger>
        </TabsTrigger>;'
        <TabsTrigger value='all' className='data-[state = active]:bg - zion - purple'>;'
</TabsTrigger>
        </TabsTrigger>;
      </TabsList>;'
      <TabsContent value='featured' className='mt - 0'>;'
</TabsContent>'
        <div className='mb - 6'>;'
</div>'
          <h2 className='text - 2xl font - bold text - white text - center'>;'
</h2>
          </h2>;'
          <p className='text - zion - slate - light text - center mt - 2'>;'
</p>
          </p>;
        </div>;'
        <div className='grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 gap - 6'>;'
</div>
            .map (country => (              <CountryServiceCard;
                key = {country.country, }
                country = {country, }
                on_select = {handleCountrySelect, }
                on_quote = {on_quote, }
                is_popular = {true, })

              />))}
</CountryServiceCard>
        </div>;

      </TabsContent>;'
      <TabsContent value='all' className='mt - 0'>;'
</TabsContent>'
        <div className='mb - 6 max - w-md mx - auto'>;'
</div>'
          <div className='relative'>;'
</div>'
            <Search className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate - light' />;'
</Search>
            <Input;'
              type='text';''
              placeholder='Search by country...';''
              className='pl - 10 bg - zion - blue border - zion - blue - light text - white';'
              value={search_query}
              on_change={e => setSearchQuery (e.target.value)}            />;
</Input>
          </div>;
        </div>;'
        <div className='grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 4 gap - 4'>;'
</div>
          {paginated_countries.map (country => (            <CountryServiceCard;
              key = {country.country, }
              country = {country, }
              on_select = {handleCountrySelect, }
              on_quote = {on_quote, })
              is_popular = {popular_countries.includes (country.country), }
            />))}
</CountryServiceCard>
        </div>;'
          <div className='mt - 8'>;'
</div>'
            <Pagination className='justify - center'>;'
</Pagination>
              <PaginationContent>;
</PaginationContent>
                <PaginationItem>;
</PaginationItem>
                  <PaginationPrevious;
                    href={`?page=${current_page - 1}`}
                    on_click={e => {
</PaginationPrevious>
                </PaginationItem>;
                    <PaginationItem key={page}>;
</PaginationItem>
                      <PaginationButton;
                        page={page}
                        is_active={page === current_page}
                        on_click={e => {
</PaginationButton>
                    </PaginationItem>))}
                <PaginationItem>;
</PaginationItem>
                  <PaginationNext;
                    href={`?page=${current_page + 1}`}
                    on_click={e => {
</PaginationNext>
                </PaginationItem>;
              </PaginationContent>;
            </Pagination>;
          </div>)}
      </TabsContent>;
    </Tabs>));
                </PaginationItem>;
                    <PaginationItem key={page}>;
</PaginationItem>
                      <PaginationButton;
                        page={page}
                        isActive={page === currentPage}


                )}
                <PaginationItem>;
</PaginationButton>
                  <PaginationNext;
                    href={`?page=${currentPage + 1}`}'

