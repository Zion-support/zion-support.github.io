

resetFilters: () => void
}
export const FraudFilters: React.FC<FraudFiltersProps> = ({







interface FraudFiltersProps {;
  searchQuery: string,;
  setSearchQuery: (value: string,) => void,;
  statusFilter: string | null,;
  setStatusFilter: (value: string | null,) => void,;
  severityFilter: string | null,;
  setSeverityFilter: (value: string | null,) => void,;
  contentTypeFilter: string | null,;
  setContentTypeFilter: (value: string | null,) => void,;
interface FraudFiltersProps {
  searchQuery: string,
  setSearchQuery: (value: string,) => void,
  statusFilter: string | null,
  setStatusFilter: (value: string | null,) => void,
  severityFilter: string | null,
  setSeverityFilter: (value: string | null,) => void,
  contentTypeFilter: string | null,
  setContentTypeFilter: (value: string | null,) => void,
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

    <div className="flex flex-col md: flex-row gap-4 mb-6">


      <div className="relative flex-1">
      <div className=relative flex-1>
      <div className=relative flex-1>



      


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




          <SelectValue placeholder="Severity" />;
        </SelectTrigger>;
        <SelectContent>;"

          <SelectItem value=>All Types</SelectItem>;"
          <SelectItem value="signup>Signups</SelectItem>;
          <SelectItem value="job">Jobs</SelectItem>;
          <SelectItem value=message">Messages</SelectItem>;"
          <SelectItem value=quote>Quotes</SelectItem>;"
          <SelectItem value="review>Reviews</SelectItem>;


}'"
'"},

}'"
'"},
'"},
;
}"
'},
'},


    </div>)}
'"}
'"},;
}import { Input  } from '@/components/ui/input';
import { Button  } from '@/components/ui/button';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from '@/components/ui/select';
interface FraudFiltersProps  {searchQuery: string;


};
}
export const FraudFilters: React.FC<FraudFiltersProps> = ({)}'";
'"
