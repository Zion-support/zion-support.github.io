<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
resetFilters: () => void
}
export const FraudFilters: React.FC<FraudFiltersProps> = ({





=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface FraudFiltersProps {
  searchQuery: string,
  setSearchQuery: (value: string) => void,
  statusFilter: string | null,
  setStatusFilter: (value: string | null) => void,
  severityFilter: string | null,
  setSeverityFilter: (value: string | null) => void,
  contentTypeFilter: string | null,
  setContentTypeFilter: (value: string | null) => void,
  resetFilters: () => void

resetFilters: () => void

}
export const FraudFilters: React.FC<FraudFiltersProps> = ({  searchQuery

  setSearchQuery
  statusFilter
  setStatusFilter
  severityFilter
  setSeverityFilter
  contentTypeFilter
  setContentTypeFilter

import React from 'react';

};

<<<<<<< HEAD


=======
<<<<<<< HEAD
interface FraudFiltersProps {;
  searchQuery: string,;
  setSearchQuery: (value: string,) => void,;
  statusFilter: string | null,;
  setStatusFilter: (value: string | null,) => void,;
  severityFilter: string | null,;
  setSeverityFilter: (value: string | null,) => void,;
  contentTypeFilter: string | null,;
  setContentTypeFilter: (value: string | null,) => void,;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface FraudFiltersProps {
  searchQuery: string,
  setSearchQuery: (value: string,) => void,
  statusFilter: string | null,
  setStatusFilter: (value: string | null,) => void,
  severityFilter: string | null,
  setSeverityFilter: (value: string | null,) => void,
  contentTypeFilter: string | null,
  setContentTypeFilter: (value: string | null,) => void,
>>>>>>> origin/resolved-merge-conflicts
  resetFilters: () => void;

}


;
interface FraudFiltersProps  {searchQuery: string,setSearchQuery: (value: string) => void,statusFilter: string | null,setStatusFilter: (value: string | null) => void,severityFilter: string | null,setSeverityFilter: (value: string | null) => void,contentTypeFilter: string | null,setContentTypeFilter: (value: string | null) => void,resetFilters: () => void;
}
export const FraudFilters: React.FC<FraudFiltersProps> = ({resetFilters: () => void;
}
export const FraudFilters: React.FC<FraudFiltersProps> = ({searchQuery;
  setSearchQuery;
  statusFilter;
  setStatusFilter;
  severityFilter;
  setSeverityFilter;
  contentTypeFilter;
  setContentTypeFilter;
  resetFilters}) => {  return (

<<<<<<< HEAD
    <div className="flex flex-col md: flex-row gap-4 mb-6">
=======
    <div className="flex flex-col md: flex-row gap-4 mb-6>
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
export const FraudFilters: React.FC<FraudFiltersProps> = ({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  severityFilter,
  setSeverityFilter,
  contentTypeFilter,
  setContentTypeFilter,
  resetFilters}) => {}
  return ("
    <div className="flex flex-col md:flex-row gap-4 mb-6">

<<<<<<< HEAD


=======
<<<<<<< HEAD
      <div className="relative flex-1">
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <div className=relative flex-1>
=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
<<<<<<< HEAD
      <div className=relative flex-1>
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input"
          placeholder="Search by user or content..."

          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>
            <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>

      <Select value={severityFilter || ""} onValueChange={value => setSeverityFilter(value || null)}>
        <SelectTrigger className="w-[180px]">

          <SelectValue placeholder="Severity" />
        </SelectTrigger>
        <SelectContent>"
          <SelectItem value="">All Severities</SelectItem>"
          <SelectItem value="safe">Safe</SelectItem>"
          <SelectItem value="suspicious">Suspicious</SelectItem>"
          <SelectItem value="dangerous">Dangerous</SelectItem>
        </SelectContent>
      </Select>

      <Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter(value || null)}>
        <SelectTrigger className="w-[180px]">

          <SelectValue placeholder="Content Type" />
        </SelectTrigger>
        <SelectContent>"
          <SelectItem value="">All Types</SelectItem>"
          <SelectItem value="signup">Signups</SelectItem>"
          <SelectItem value="job">Jobs</SelectItem>"
          <SelectItem value="message">Messages</SelectItem>"
          <SelectItem value="quote">Quotes</SelectItem>"
          <SelectItem value="review">Reviews</SelectItem>
        </SelectContent>
      </Select>

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      


      <Button variant="outline" onClick={resetFilters} className="md: w-auto">
        <Filter className="h-4 w-4 mr-2" /> Reset Filters
      </Button>
    </div>
  )

          onChange = {(e,) => setSearchQuery(e && e.target.value),}


},
import React from "react",;
import { Input } from "@/components/ui/input",;
import { Button } from "@/components/ui/button",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { Search, Filter } from 'lucide-react';
interface FraudFiltersProps {;
  searchQuery: string,;
  setSearchQuery: (value: string) => void,;
  statusFilter: string | null,;
  setStatusFilter: (value: string | null) => void,;
  severityFilter: string | null,;
  setSeverityFilter: (value: string | null) => void,;
  contentTypeFilter: string | null,;
  setContentTypeFilter: (value: string | null) => void,;
  resetFilters: () => void;

;

export const FraudFilters: React.FC<FraudFiltersProps> = ({;
  searchQuery,;
  setSearchQuery,;
  statusFilter,;
  setStatusFilter,;
  severityFilter,;
  setSeverityFilter,;
  contentTypeFilter,;
import React from 'react';
}interface FraudFiltersProps  {searchQuery: string,setSearchQuery: (value: string,) => void,statusFilter: string | null,setStatusFilter: (value: string | null,) => void,severityFilter: string | null,setSeverityFilter: (value: string | null,) => void,contentTypeFilter: string | null,setContentTypeFilter: (value: string | null,) => void,resetFilters: () => void;
}export const FraudFilters: React.FC<FraudFiltersProps> = ({searchQuery;
  setSearchQuery;
  statusFilter;
  setStatusFilter;
  severityFilter;
  setSeverityFilter;
  contentTypeFilter;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Search, Filter } from 'lucide-react';
interface FraudFiltersProps {;
  searchQuery: string,;
  setSearchQuery: (value: string) => void,;
  statusFilter: string | null,;
  setStatusFilter: (value: string | null) => void,;
  severityFilter: string | null,;
  setSeverityFilter: (value: string | null) => void,;
  contentTypeFilter: string | null,;
  setContentTypeFilter: (value: string | null) => void,;
  resetFilters: () => void;

;

export const FraudFilters: React.FC<FraudFiltersProps> = ({;
  searchQuery,;
  setSearchQuery,;
  statusFilter,;
  setStatusFilter,;
  severityFilter,;
  setSeverityFilter,;
  contentTypeFilter,;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
  setContentTypeFilter;
  resetFilters}) => {;
  return (;"
    <div className="flex flex-col md:flex-row gap-4 mb-6">;"
      <div className="relative flex-1">;"
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />;
        <Input;"
          placeholder="Search by user or content...";
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}"
          className="pl-10";
        />;
      </div>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts


=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

      <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>;
        <SelectTrigger className="w-[180px]">;

          <SelectValue placeholder="Status" />;
        </SelectTrigger>;
        <SelectContent>;"
          <SelectItem value="">All Statuses</SelectItem>;"
          <SelectItem value="pending">Pending</SelectItem>;"
          <SelectItem value="reviewed">Reviewed</SelectItem>;"
          <SelectItem value="ignored">Ignored</SelectItem>;"
          <SelectItem value="actioned">Actioned</SelectItem>;
        </SelectContent>;
      </Select>;

      <Select value={severityFilter || ""} onValueChange={value => setSeverityFilter(value || null)}>;

        <SelectTrigger className="w-[180px]">;

<<<<<<< HEAD
          <SelectValue placeholder="Severity" />;
        </SelectTrigger>;
        <SelectContent>;"
=======
          <SelectValue placeholder="Severity />;
        </SelectTrigger>;
        <SelectContent>;
          <SelectItem value="">All Severities</SelectItem>;
          <SelectItem value=safe">Safe</SelectItem>;"
          <SelectItem value=suspicious>Suspicious</SelectItem>;"
          <SelectItem value="dangerous>Dangerous</SelectItem>;
        </SelectContent>;
      </Select>;



      <Select value={contentTypeFilter || "} onValueChange={value => setContentTypeFilter(value || null)}>;
        <SelectTrigger className="w-[180px]>;

          <SelectValue placeholder=Content Type" />;
        </SelectTrigger>;
        <SelectContent>;"
<<<<<<< HEAD

=======
<<<<<<< HEAD
          <SelectItem value=>All Types</SelectItem>;"
          <SelectItem value="signup>Signups</SelectItem>;
          <SelectItem value="job">Jobs</SelectItem>;
          <SelectItem value=message">Messages</SelectItem>;"
          <SelectItem value=quote>Quotes</SelectItem>;"
          <SelectItem value="review>Reviews</SelectItem>;
=======
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <SelectItem value="">All Severities</SelectItem>;"
          <SelectItem value="safe">Safe</SelectItem>;"
          <SelectItem value="suspicious">Suspicious</SelectItem>;"
          <SelectItem value="dangerous">Dangerous</SelectItem>;
<<<<<<< HEAD
=======
        </SelectContent>;
      </Select>;

      <Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter(value || null)}>;
        <SelectTrigger className="w-[180px]">;

          <SelectValue placeholder="Content Type" />;
        </SelectTrigger>;
        <SelectContent>;"
          <SelectItem value="">All Types</SelectItem>;"
          <SelectItem value="signup">Signups</SelectItem>;"
          <SelectItem value="job">Jobs</SelectItem>;"
          <SelectItem value="message">Messages</SelectItem>;"
          <SelectItem value="quote">Quotes</SelectItem>;"
          <SelectItem value="review">Reviews</SelectItem>;
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
        </SelectContent>;
      </Select>;



      <Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter(value || null)}>;
        <SelectTrigger className="w-[180px]">;

          <SelectValue placeholder="Content Type" />;
        </SelectTrigger>;
        <SelectContent>;"
          <SelectItem value="">All Types</SelectItem>;"
          <SelectItem value="signup">Signups</SelectItem>;"
          <SelectItem value="job">Jobs</SelectItem>;"
          <SelectItem value="message">Messages</SelectItem>;"
          <SelectItem value="quote">Quotes</SelectItem>;"
          <SelectItem value="review">Reviews</SelectItem>;
        </SelectContent>;
      </Select>;

      <Button variant="outline" onClick={resetFilters} className="md: w-auto">;

        <Filter className="h-4 w-4 mr-2" /> Reset Filters;
      </Button>;
    </div>;
  )
};

  search_query: string,
  setSearchQuery: (value: string, ) => void,
  status_filter: string | null,
  setStatusFilter: (value: string | null, ) => void,
  severity_filter: string | null,
  setSeverityFilter: (value: string | null, ) => void,
  contentTypeFilter: string | null,
  setContentTypeFilter: (value: string | null, ) => void,
  reset_filters: () => void;
}
export const FraudFilters: React.FC < FraudFiltersProps> = ({};
  search_query;
  setSearchQuery;
  status_filter;
  setStatusFilter;
  severity_filter;
  setSeverityFilter;
  contentTypeFilter;
  setContentTypeFilter;

        />;
      </div>;"
      <Select value={status_filter || ""} onValueChange={value => setStatusFilter (value || null)}>;"
        <SelectTrigger className="w-[180px]">;"
          <SelectValue placeholder="Status" />;
        </SelectTrigger>;
        <SelectContent>;"
          <SelectItem value="">All Statuses</SelectItem>;"
          <SelectItem value="pending">Pending</SelectItem>;"
          <SelectItem value="reviewed">Reviewed</SelectItem>;"
          <SelectItem value="ignored">Ignored</SelectItem>;"
          <SelectItem value="actioned">Actioned</SelectItem>;
        </SelectContent>;
      </Select>;"
      <Select value={severity_filter || ""} onValueChange={value => setSeverityFilter (value || null)}>;"
        <SelectTrigger className="w-[180px]">;"
          <SelectValue placeholder="Severity" />;
        </SelectTrigger>;
        <SelectContent>;"
          <SelectItem value="">All Severities</SelectItem>;"
          <SelectItem value="safe">Safe</SelectItem>;"
          <SelectItem value="suspicious">Suspicious</SelectItem>;"
          <SelectItem value="dangerous">Dangerous</SelectItem>;
        </SelectContent>;
      </Select>;"
      <Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter (value || null)}>;"
        <SelectTrigger className="w-[180px]">;"
          <SelectValue placeholder="Content Type" />;
        </SelectTrigger>;
        <SelectContent>;"
          <SelectItem value="">All Types</SelectItem>;"
          <SelectItem value="signup">Signups</SelectItem>;"
          <SelectItem value="job">Jobs</SelectItem>;"
          <SelectItem value="message">Messages</SelectItem>;"
          <SelectItem value="quote">Quotes</SelectItem>;"
          <SelectItem value="review">Reviews</SelectItem>;
        </SelectContent>;

      </Button>;
    </div>);
<<<<<<< HEAD

}'"
'"},

=======
<<<<<<< HEAD
}'"
'"},
'"},
;
=======
<<<<<<< HEAD
}"
'},
'},
=======
}'"
'"},
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,;
} from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';

interface FraudFiltersProps {
  searchQuery: string;
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    </div>)}
'"}
'"},;
}import { Input  } from '@/components/ui/input';
import { Button  } from '@/components/ui/button';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from '@/components/ui/select';
interface FraudFiltersProps  {searchQuery: string;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
  setSearchQuery: (value: string) => void;
  statusFilter: string | null;
  setStatusFilter: (value: string | null) => void;
  severityFilter: string | null;
  setSeverityFilter: (value: string | null) => void;
  contentTypeFilter: string | null;
  setContentTypeFilter: (value: string | null) => void;
  resetFilters: () => void
}
export const FraudFilters: React.FC<FraudFiltersProps> = ({
  );
<<<<<<< HEAD


=======
<<<<<<< HEAD
};
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
};
'"
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
>>>>>>> origin/resolved-merge-conflicts
export const FraudFilters: React.FC<FraudFiltersProps> = ({)}'";
'"
=======
};
'"
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
