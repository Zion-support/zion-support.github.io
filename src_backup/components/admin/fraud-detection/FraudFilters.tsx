<<<<<<< HEAD:src_backup/components/admin/fraud-detection/FraudFilters.tsx
<<<<<<< HEAD:src/components/admin/fraud-detection/FraudFilters.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { Search, Filter } from 'lucide-react'

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/fraud-detection/FraudFilters.tsx
resetFilters: () => void
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}
export const FraudFilters: React.FC<FraudFiltersProps> = ({  searchQuery
=======

<<<<<<< HEAD:src/components/admin/fraud-detection/FraudFilters.tsx
=======




>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/fraud-detection/FraudFilters.tsx
  searchQuery
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  setSearchQuery
  statusFilter
  setStatusFilter
  severityFilter
  setSeverityFilter
  contentTypeFilter
  setContentTypeFilter
<<<<<<< HEAD:src/components/admin/fraud-detection/FraudFilters.tsx
<<<<<<< HEAD
import React from 'react'
=======
=======
resetFilters: () => void;
}
export const FraudFilters: React.FC<FraudFiltersProps> = ({};
  searchQuery;
  setSearchQuery;
  statusFilter;
  setStatusFilter;
  severityFilter;
  setSeverityFilter;
  contentTypeFilter;
  setContentTypeFilter;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/fraud-detection/FraudFilters.tsx
import React from 'react';
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/fraud-detection/FraudFilters.tsx
};

interface FraudFiltersProps {;
  searchQuery: string,;
  setSearchQuery: (value: string,) => void,;
  statusFilter: string | null,;
  setStatusFilter: (value: string | null,) => void,;
  severityFilter: string | null,;
  setSeverityFilter: (value: string | null,) => void,;
  contentTypeFilter: string | null,;
  setContentTypeFilter: (value: string | null,) => void,;
  resetFilters: () => void;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}

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

=======

<<<<<<< HEAD:src/components/admin/fraud-detection/FraudFilters.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

<<<<<<< HEAD:src_backup/components/admin/fraud-detection/FraudFilters.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/fraud-detection/FraudFilters.tsx
      <div className="relative flex-1">
=======
"
      <div className="relative flex-1">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/fraud-detection/FraudFilters.tsx
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input"
          placeholder="Search by user or content..."
<<<<<<< HEAD:src/components/admin/fraud-detection/FraudFilters.tsx
<<<<<<< HEAD
<<<<<<< HEAD
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>
=======
          value = {searchQuery,}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>
            <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>
=======
          value = {searchQuery,}

=======
          value = {searchQuery,}



      
<<<<<<< HEAD:src_backup/components/admin/fraud-detection/FraudFilters.tsx


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/fraud-detection/FraudFilters.tsx
      <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        <SelectTrigger className="w-[180px]">
=======
"
      <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>"
        <SelectTrigger className="w-[180px]">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/fraud-detection/FraudFilters.tsx
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>"
          <SelectItem value="">All Statuses</SelectItem>"
          <SelectItem value="pending">Pending</SelectItem>"
          <SelectItem value="reviewed">Reviewed</SelectItem>"
          <SelectItem value="ignored">Ignored</SelectItem>"
          <SelectItem value="actioned">Actioned</SelectItem>
        </SelectContent>
      </Select>
<<<<<<< HEAD
=======

<<<<<<< HEAD

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      
<<<<<<< HEAD:src_backup/components/admin/fraud-detection/FraudFilters.tsx

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      <Select value={severityFilter || ""} onValueChange={value => setSeverityFilter(value || null)}>
        <SelectTrigger className="w-[180px]">
=======
"
      <Select value={severityFilter || ""} onValueChange={value => setSeverityFilter(value || null)}>"
        <SelectTrigger className="w-[180px]">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/fraud-detection/FraudFilters.tsx
          <SelectValue placeholder="Severity" />
        </SelectTrigger>
        <SelectContent>"
          <SelectItem value="">All Severities</SelectItem>"
          <SelectItem value="safe">Safe</SelectItem>"
          <SelectItem value="suspicious">Suspicious</SelectItem>"
          <SelectItem value="dangerous">Dangerous</SelectItem>
        </SelectContent>
      </Select>
<<<<<<< HEAD
=======

<<<<<<< HEAD

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      
<<<<<<< HEAD:src_backup/components/admin/fraud-detection/FraudFilters.tsx

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      <Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter(value || null)}>
        <SelectTrigger className="w-[180px]">
=======
"
      <Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter(value || null)}>"
        <SelectTrigger className="w-[180px]">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/fraud-detection/FraudFilters.tsx
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

<<<<<<< HEAD:src/components/admin/fraud-detection/FraudFilters.tsx
<<<<<<< HEAD
<<<<<<< HEAD

      
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

      

<<<<<<< HEAD:src_backup/components/admin/fraud-detection/FraudFilters.tsx


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/fraud-detection/FraudFilters.tsx
      <Button variant="outline" onClick={resetFilters} className="md: w-auto">
        <Filter className="h-4 w-4 mr-2" /> Reset Filters
=======
"
      <Button variant="outline" onClick={resetFilters} className="md: w-auto">"
        <Filter className="h-4 w-4 mr-2" /> Reset Filters;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/fraud-detection/FraudFilters.tsx
      </Button>
    </div>
  )
<<<<<<< HEAD
=======

          onChange = {(e,) => setSearchQuery(e && e.target.value),}

<<<<<<< HEAD:src_backup/components/admin/fraud-detection/FraudFilters.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
},
import React from "react",;
import { Input } from "@/components/ui/input",;
import { Button } from "@/components/ui/button",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
=======

},"
import React from "react",;"
import { Input } from "@/components/ui/input",;"
import { Button } from "@/components/ui/button",;"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/fraud-detection/FraudFilters.tsx
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
<<<<<<< HEAD:src/components/admin/fraud-detection/FraudFilters.tsx
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/fraud-detection/FraudFilters.tsx

<<<<<<< HEAD:src_backup/components/admin/fraud-detection/FraudFilters.tsx
}
=======
}'"
'"},
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/fraud-detection/FraudFilters.tsx
;
<<<<<<< HEAD
=======

<<<<<<< HEAD:src/components/admin/fraud-detection/FraudFilters.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/fraud-detection/FraudFilters.tsx
export const FraudFilters: React.FC<FraudFiltersProps> = ({;
  searchQuery,;
  setSearchQuery,;
  statusFilter,;
  setStatusFilter,;
  severityFilter,;
  setSeverityFilter,;
  contentTypeFilter,;
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
<<<<<<< HEAD:src_backup/components/admin/fraud-detection/FraudFilters.tsx

<<<<<<< HEAD:src/components/admin/fraud-detection/FraudFilters.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/fraud-detection/FraudFilters.tsx
      <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>;
        <SelectTrigger className="w-[180px]">;
=======
"
      <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>;"
        <SelectTrigger className="w-[180px]">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/fraud-detection/FraudFilters.tsx
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
<<<<<<< HEAD:src_backup/components/admin/fraud-detection/FraudFilters.tsx
<<<<<<< HEAD:src/components/admin/fraud-detection/FraudFilters.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/fraud-detection/FraudFilters.tsx
      <Select value={severityFilter || ""} onValueChange={value => setSeverityFilter(value || null)}>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <SelectTrigger className="w-[180px]">;
=======
"
      <Select value={severityFilter || ""} onValueChange={value => setSeverityFilter(value || null)}>;"
        <SelectTrigger className="w-[180px]">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/fraud-detection/FraudFilters.tsx
          <SelectValue placeholder="Severity" />;
        </SelectTrigger>;
        <SelectContent>;"
          <SelectItem value="">All Severities</SelectItem>;"
          <SelectItem value="safe">Safe</SelectItem>;"
          <SelectItem value="suspicious">Suspicious</SelectItem>;"
          <SelectItem value="dangerous">Dangerous</SelectItem>;
        </SelectContent>;
      </Select>;
<<<<<<< HEAD:src_backup/components/admin/fraud-detection/FraudFilters.tsx

<<<<<<< HEAD:src/components/admin/fraud-detection/FraudFilters.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/fraud-detection/FraudFilters.tsx
      <Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter(value || null)}>;
        <SelectTrigger className="w-[180px]">;
=======
"
      <Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter(value || null)}>;"
        <SelectTrigger className="w-[180px]">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/fraud-detection/FraudFilters.tsx
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
<<<<<<< HEAD:src_backup/components/admin/fraud-detection/FraudFilters.tsx
<<<<<<< HEAD:src/components/admin/fraud-detection/FraudFilters.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/fraud-detection/FraudFilters.tsx
      <Button variant="outline" onClick={resetFilters} className="md: w-auto">;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
"
      <Button variant="outline" onClick={resetFilters} className="md: w-auto">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/fraud-detection/FraudFilters.tsx
        <Filter className="h-4 w-4 mr-2" /> Reset Filters;
      </Button>;
    </div>;
  )
};
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

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
<<<<<<< HEAD:src_backup/components/admin/fraud-detection/FraudFilters.tsx
  reset_filters}) => {  return (
    <div className="flex flex - col md: flex - row gap - 4 mb-6">;
      <div className="relative flex-1">;
        <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - gray-400" />;
        <Input;
          placeholder="Search by user or content...";
          value = {search_query, }
          on_change = {(e, ) => setSearchQuery (e.target.value), }
          className="pl-10";
=======
  reset_filters}) => {  return ("
    <div className="flex flex - col md: flex - row gap - 4 mb - 6">;"
      <div className="relative flex - 1">;"
        <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - gray - 400" />;
        <Input;"
          placeholder="Search by user or content...";
          value = {search_query, }
          on_change = {(e, ) => setSearchQuery (e.target.value), }"
          className="pl - 10";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/fraud-detection/FraudFilters.tsx
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
<<<<<<< HEAD:src_backup/components/admin/fraud-detection/FraudFilters.tsx
      </Select>;
      <Button variant="outline" on_click={reset_filters} className="md: w-auto">;
        <Filter className="h - 4 w - 4 mr-2" /> Reset Filters;
=======
      </Select>;"
      <Button variant="outline" on_click={reset_filters} className="md: w - auto">;"
        <Filter className="h - 4 w - 4 mr - 2" /> Reset Filters;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/fraud-detection/FraudFilters.tsx
      </Button>;
    </div>);
}'"
'"},
<<<<<<< HEAD:src_backup/components/admin/fraud-detection/FraudFilters.tsx
}
<<<<<<< HEAD:src/components/admin/fraud-detection/FraudFilters.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
'"},
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
}
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/fraud-detection/FraudFilters.tsx
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
};
'"
<<<<<<< HEAD:src/components/admin/fraud-detection/FraudFilters.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/fraud-detection/FraudFilters.tsx
=======
}'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/fraud-detection/FraudFilters.tsx
