import { Input  } from '@/components/ui/input;
origin/cursor/automate-test-improve-and-merge-code-2533
import { Button } from @/components/ui/button';
import { Input } from '@/components/ui/input,
import { Button } from @/components/ui/button',

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationButton,
  PaginationNext,
  PaginationPrevious} from '@/components/ui/pagination;
import { Tabs, TabsContent, TabsList, TabsTrigger } from @/components/ui/tabs';
import { CountryServiceCard } from '@/components/services/CountryServiceCard;
import { CountryPricing } from @/data/onsiteServicePricing';
import { Input } from '@/components/ui/input
import { Button } from @/components/ui/button'
  Pagination
  PaginationContent
  PaginationItem
  PaginationButton
  PaginationNext
  PaginationPrevious
} from '@/components/ui/pagination
import { Tabs, TabsContent, TabsList, TabsTrigger } from @/components/ui/tabs'
import { CountryServiceCard } from '@/components/services/CountryServiceCard
import { CountryPricing } from @/data/onsiteServicePricing'
interface CountryTabsProps {
  popularCountries: string[];
  filteredCountries: CountryPricing[];
  handleCountrySelect: (country: CountryPricing) => void;
  onQuote?: (country: CountryPricing) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void
export function CountryTabs({
  popularCountries;
  filteredCountries;
  handleCountrySelect;
  onQuote;
  searchQuery;
  setSearchQuery}: CountryTabsProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = null;
                      setCurrentPage(Math.min(totalPages, currentPage + 1))
origin/cursor/automate-test-improve-and-merge-code-2533
                    }}
                  />;
                </PaginationItem>;

              </PaginationContent>;
            </Pagination>;
          </div>;
        )}

      </TabsContent>
    </Tabs>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
