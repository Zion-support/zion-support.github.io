<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/admin/quotes/QuotesTable.tsx
import React from "react";
import { Eye, MoreHorizontal, Archive, Trash2 } from 'lucide-react'
import { 
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow 
} from "@/components/ui/table",
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu",
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge";
import type { QuoteRequest, QuoteStatus } from "@/types/quotes";
import { formatDate } from "@/utils/dateUtils";
interface QuotesTableProps {
  quotes: QuoteRequest[];
  isArchived?: boolean;
  isLoading: boolean;
  updateStatus: (id: string, status: QuoteStatus) => void;
  toggleArchive: (id: string, isArchived: boolean) => void;
  deleteQuote: (id: string) => void;
  onViewDetails: (quote: QuoteRequest) => void
  quotes
  isArchived = false
import React from "react"
import { Eye, MoreHorizontal, Archive, Trash2 } from 'lucide-react'import {
  Table
  TableBody
  TableCell
  TableHead
  TableHeader
  TableRow
} from "@/components/ui/table"; import { Button } from "@/components/ui/button"
import {
  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"; import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge"
import type { QuoteRequest, QuoteStatus } from "@/types/quotes"
import {formatDate} from "@/utils/dateUtils"
interface QuotesTableProps {
  quotes: QuoteRequest[]
  isArchived?: boolean
  isLoading: boolean
  updateStatus: (id: string, status: QuoteStatus,) => void
  toggleArchive: (id: string, isArchived: boolean,) => void
  deleteQuote: (id: string,) => void
  onViewDetails: (quote: QuoteRequest,) => void
import React from "react",
import { Eye, MoreHorizontal, Archive, Trash2 } from 'lucide-react'
import { 
  Table,
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table",
import { Button } from "@/components/ui/button",
import { 
  DropdownMenu,
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu",
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge",
import type { QuoteRequest, QuoteStatus } from "@/types/quotes",
import { formatDate } from "@/utils/dateUtils",
interface QuotesTableProps {
  quotes: QuoteRequest[],
  isArchived?: boolean,
  isLoading: boolean,
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba
isLoading: boolean,
  updateStatus: (id: string, status: QuoteStatus) => void,
  toggleArchive: (id: string, isArchived: boolean) => void,
  deleteQuote: (id: string) => void,
  onViewDetails: (quote: QuoteRequest) => void

}

}
export const QuotesTable: React.FC<QuotesTableProps> = ({  quotes

  isArchived = false
  isLoading
  updateStatus
  toggleArchive

  quotes,
  isArchived = false,
  isLoading,
  updateStatus,
  toggleArchive,

  deleteQuote,

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>"
          <TableRow className="border-zion-blue-light hover:bg-zion-blue">"
            <TableHead className="text-zion-slate-light">Talent</TableHead>"
            <TableHead className="text-zion-slate-light">Requester</TableHead>"
            <TableHead className="text-zion-slate-light">Project</TableHead>"
            <TableHead className="text-zion-slate-light">Budget</TableHead>"
            <TableHead className="text-zion-slate-light">Date</TableHead>"
            <TableHead className="text-zion-slate-light">Status</TableHead>"
            <TableHead className="text-zion-slate-light">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>"
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">
                Loading quote requests...
              </TableCell>
            </TableRow>
          ) : quotes.length === 0 ? (
            <TableRow>"
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">

                  : "No quote requests found."}
              </TableCell>
            </TableRow>
          ) : (
            quotes.map(quote => (
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/admin/quotes/QuotesTable.tsx
              <TableRow
<<<<<<< HEAD
                key = {quote.id,}
=======
                key = {quote.id}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

                className="border-zion-blue-light hover:bg-zion-blue"

              >
                <TableCell className="text-white">
                  {quote.talent_name || 'Unknown Talent'}
                </TableCell>

                <TableCell className="text-white">

  quotes;
  is_archived = false;'
import React from './react';'
import { Eye, MoreHorizontal, Archive, Trash2 } from 'lucide-react'import {};
  Table;
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow;'
} from '@/components / ui / table'; import { Button  } from '@/components / ui / button';
import {};
  DropdownMenu;
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger;'
} from '@/components / ui / dropdown - menu'; import { QuoteStatusBadge  } from '@/components / quotes / QuoteStatusBadge';"
import type { QuoteRequest, QuoteStatus } from "@/types / quotes";'
import { format_date } from '@/utils / date_utils';
interface QuotesTableProps {}
  quotes: QuoteRequest[],
  is_archived?: boolean;
  is_loading: boolean,
  update_status: (id: string, status: QuoteStatus, ) => void,
  toggle_archive: (id: string, is_archived: boolean, ) => void,
  delete_quote: (id: string, ) => void,
  onViewDetails: (quote: QuoteRequest, ) => void;
}
export const QuotesTable: React.FC < QuotesTableProps> = ({};
  quotes;
  is_archived = false;
  is_loading;
  update_status;
  toggle_archive;
  delete_quote,
  onViewDetails;

          </TableRow>;
        </TableHeader>;
        <TableBody>;
          {is_loading ? (

                  : "No quote requests found."}
              </TableCell>;
            </TableRow>) : (
            quotes.map (quote => (
              <TableRow;

                <TableCell className="text - white">;

                  {quote.requester_name}

                    {quote.project_summary}
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/admin/quotes/QuotesTable.tsx
                  </div>
                </TableCell>
                <TableCell className="text-white">
                  {quote.budget_display |
                  (quote.budget_min && quote.budget_max
                   ? `$${quote.budget_min} - $${quote.budget_max}`
                   : quote.budget_min
                     ? `$${quote.budget_min}`
                     : 'Not specified')}
                </TableCell>
                <TableCell className="text-white">
                  {formatDate(quote.created_at)}
                </TableCell>
                <TableCell>
                  <QuoteStatusBadge status={quote.status} />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick = {() => onViewDetails(quote),}
                    >
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View Details</span>
                    </Button>
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba

                    <Button 
                      variant="ghost" 

                      size="icon" 
                      onClick={() => onViewDetails(quote)}

                      <span className="sr-only">View Details</span>
                    </Button>

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
                    {isArchived ? (

                      <>

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
                          variant="ghost"
=======
                          variant=ghost
=======
=======
=======
<<<<<<< HEAD

                          variant=ghost
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                          variant="ghost"
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

  quotes;
  isArchived = false;"
import React from "react";'
import { Eye, MoreHorizontal, Archive, Trash2 } from 'lucide-react'import { ;
  Table;
  TableBody, ;
  TableCell, ;
  TableHead, ;
  TableHeader, ;
  TableRow ;"
} from "@/components/ui/table";import { Button } from "@/components/ui/button";
import { ;
  DropdownMenu;
  DropdownMenuContent, ;
  DropdownMenuItem, ;

                          size="icon"

                          className="text-red-500"
                          onClick={() => {'
                            if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {}
                              deleteQuote(quote.id)
                            }
                          }
                        >"
                          <Trash2 className="h-4 w-4" />"
                          <span className="sr-only">Delete</span>
                        </Button>
                      </>
                    ) : (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>"
                          <Button variant="ghost" size="icon" aria-label="More actions">"
                            <MoreHorizontal className="h-4 w-4" />"
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>"
                        <DropdownMenuContent align="end">'
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'new')}>
                            Mark as New;
                          </DropdownMenuItem>'
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'in_review')}>
                            Mark as In Review;
                          </DropdownMenuItem>'
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'responded')}>
                            Mark as Responded;
                          </DropdownMenuItem>'
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'accepted')}>
                            Mark as Accepted;
                          </DropdownMenuItem>'
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'closed')}>
                            Mark as Closed;
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => toggleArchive(quote.id, true)}>"
                            <Archive className="h-4 w-4 mr-2" />
                            Archive;
                          </DropdownMenuItem>
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/admin/quotes/QuotesTable.tsx
                          <DropdownMenuItem
                            onClick = {() => {
                              if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {
                                deleteQuote(quote.id)
<<<<<<< HEAD
                              } }
=======
                              } }}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

                          <DropdownMenuItem 

                            onClick={() => {
                              if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {
                                deleteQuote(quote.id)

                            className="text-red-500"
                          >"
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete;
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/admin/quotes/QuotesTable.tsx
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}
<<<<<<< HEAD
'"
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

import React from "react",;

import { Eye, MoreHorizontal, Archive, Trash2 } from 'lucide-react';
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow;"
} from "@/components/ui/table",;"
import { Button } from "@/components/ui/button",;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger;"
} from "@/components/ui/dropdown-menu",;"
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge",;"
import type { QuoteRequest, QuoteStatus } from "@/types/quotes",;"
import { formatDate } from "@/utils/dateUtils",;
interface QuotesTableProps {;
  quotes: QuoteRequest[],;
  isArchived?: boolean,;
  isLoading: boolean,;
  updateStatus: (id: string, status: QuoteStatus) => void,;
  toggleArchive: (id: string, isArchived: boolean) => void,;
  deleteQuote: (id: string) => void,;
  onViewDetails: (quote: QuoteRequest) => void;
}
<<<<<<< HEAD


=======
<<<<<<< HEAD
;
export const QuotesTable: React.FC<QuotesTableProps> = ({;

;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export const QuotesTable: React.FC<QuotesTableProps> = ({
>>>>>>> origin/resolved-merge-conflicts
  isLoading: boolean,updateStatus: (id: string, status: QuoteStatus) => void,toggleArchive: (id: string, isArchived: boolean) => void,deleteQuote: (id: string) => void,onViewDetails: (quote: QuoteRequest) => void;
}
export const QuotesTable: React.FC<QuotesTableProps> = ({}
export const QuotesTable: React.FC<QuotesTableProps> = ({quotes;
  isArchived = false;
  isLoading;
  updateStatus;
  toggleArchive;
  quotes,isArchived = false,isLoading,updateStatus,toggleArchive,deleteQuote,onViewDetails;
<<<<<<< HEAD
},) => {return (<div className="overflow-x-auto">;
=======
},) => {return (<div className=overflow-x-auto">;
  quotes,
  isArchived = false,
  isLoading,
  updateStatus,
  toggleArchive,
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;
export const QuotesTable: React.FC<QuotesTableProps> = ({;
>>>>>>> origin/resolved-merge-conflicts
  quotes,;
  isArchived = false,;
  isLoading,;
  updateStatus,;
  toggleArchive,;
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
  deleteQuote;
  onViewDetails;

    <div className="overflow-x-auto">;
      <Table>;
        <TableHeader>;"
          <TableRow className="border-zion-blue-light hover:bg-zion-blue">;"
            <TableHead className="text-zion-slate-light">Talent</TableHead>;"
            <TableHead className="text-zion-slate-light">Requester</TableHead>;"
            <TableHead className="text-zion-slate-light">Project</TableHead>;"
            <TableHead className="text-zion-slate-light">Budget</TableHead>;"
            <TableHead className="text-zion-slate-light">Date</TableHead>;"
            <TableHead className="text-zion-slate-light">Status</TableHead>;"
            <TableHead className="text-zion-slate-light">Actions</TableHead>;
          </TableRow>;
        </TableHeader>;
        <TableBody>;
          {isLoading ? (;
            <TableRow>;"
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">;
                Loading quote requests...;
              </TableCell>;
            </TableRow>;

                  : "No quote requests found."}
              </TableCell>;
            </TableRow>;
          ) : (;

                  <div className="text-sm text-zion-slate-light truncate max-w-[200px]">;
                    {quote.project_summary}
                  </div>;
                </TableCell>;"
                <TableCell className="text-white">;

                     : 'Not specified')}
                </TableCell>;"
                <TableCell className="text-white">;
                  {formatDate(quote.created_at)}
                </TableCell>;
                <TableCell>;
                  <QuoteStatusBadge status={quote.status} />;
                </TableCell>;
                <TableCell>;"
                  <div className="flex items-center gap-2">;

                      <span className="sr-only">View Details</span>;
                    </Button>;

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                        >;
                          <Archive className="h-4 w-4" />;
                          <span className="sr-only">Unarchive</span>;
                        </Button>;
                        <Button
                          variant="ghost" 
                          size="icon"
                          className="text-red-500"
                          onClick = {() => {;
                            if (window && window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {;
                              deleteQuote(quote && quote.id);
                            ,}
                          }

                        >;
                    </Button>;{isArchived ? (<>;
                        <Button;
                          variant="ghost";
                          size="icon";
                          onClick = {(,) => toggleArchive(quote && quote.id, false)}>;
                          <Archive className="h-4 w-4" />;
                          <span className="sr-only">Unarchive</span>;
                        </Button>;<Button;
                          variant="ghost";
                          size="icon";
                          className="text-red-500";
                          onClick = {() => {if (window && window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {deleteQuote(quote && quote.id)}
                          }>;
                          <Trash2 className="h-4 w-4" />;
                          <span className="sr-only">Delete</span>;
                        </Button>;
                      </>;
                    ) : (<DropdownMenu>;
                        <DropdownMenuTrigger asChild>;
                          <Button variant="ghost" size="icon" aria-label="More actions">;
                            <MoreHorizontal className="h-4 w-4" />;
                            <span className="sr-only">Actions</span>;
                          </Button>;
                        </DropdownMenuTrigger>;
                        <DropdownMenuContent align="end">;
                          <DropdownMenuItem onClick={(,) => updateStatus(quote && quote.id, 'new')}>;
                            Mark as New;
                          </DropdownMenuItem>;
                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'in_review')}>;
                            Mark as In Review;
                          </DropdownMenuItem>;
                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'responded')}>;
                            Mark as Responded;
                          </DropdownMenuItem>;
                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'accepted')}>;
                            Mark as Accepted;
                          </DropdownMenuItem>;
                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'closed')}>;
                            Mark as Closed;
                          </DropdownMenuItem>;
                          <DropdownMenuItem onClick={() => toggleArchive(quote && quote.id, true)}>;
<<<<<<< HEAD
                          }
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                          }}
>>>>>>> origin/resolved-merge-conflicts

                          <span className="sr-only">Delete</span>;
                        </Button>;
                      </>;
                    ) : (;
                      <DropdownMenu>;
                        <DropdownMenuTrigger asChild>;"
                          <Button variant="ghost" size="icon" aria-label="More actions">;"
                            <MoreHorizontal className="h-4 w-4" />;"
                            <span className="sr-only">Actions</span>;
                          </Button>;

                            <Archive className="h-4 w-4 mr-2" />;
                            Archive;
                          </DropdownMenuItem>;
                          <DropdownMenuItem;

                            className="text-red-500";
                          >;"
                            <Trash2 className="h-4 w-4 mr-2" />;
                            Delete;
                          </DropdownMenuItem>;
                        </DropdownMenuContent>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    )}
                      </DropdownMenu>;)}
                  </div>;
                </TableCell>;
              </TableRow>;
            )))})}'";</TableBody>;
      </Table>;
    </div>;
<<<<<<< HEAD
  )}'";
=======
  )}";
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      </DropdownMenu>;

                    )}

                  </div>;
                </TableCell>;
              </TableRow>;
            ));
          )}

};

'";

        </TableBody>;
      </Table>;
    </div>;
  )
};
'"
'"

                  </div>;

                  {quote.budget_display ||;
                  (quote.budget_min && quote.budget_max;`
                  ? `$${quote.budget_min} - $${quote.budget_max}`;
                  : quote.budget_min;`
                    ? `$${quote.budget_min}`;'
                    : 'Not specified')}

                  {format_date (quote.created_at)}
                </TableCell>;
                <TableCell>;
                  <QuoteStatusBadge status={quote.status} />;
                </TableCell>;

                    </Button>;
                    {is_archived ? (
                      <>;
                        <Button;"
                          variant="ghost";"
                          size="icon";
                          on_click = {(, ) => toggle_archive (quote.id, false), }

}
<<<<<<< HEAD
                              delete_quote (quote.id) }
                          }
=======
                              delete_quote (quote.id);
                            , }
                          }}
>>>>>>> origin/resolved-merge-conflicts

                          </Button>;
                        </DropdownMenuTrigger>;"
                        <DropdownMenuContent align="end">;'
                          <DropdownMenuItem on_click={(, ) => update_status (quote.id, 'new')}>;
                            Mark as New;
                          </DropdownMenuItem>;'
                          <DropdownMenuItem on_click={() => update_status (quote.id, 'in_review')}>;
                            Mark as In Review;
                          </DropdownMenuItem>;'
                          <DropdownMenuItem on_click={() => update_status (quote.id, 'responded')}>;
                            Mark as Responded;
                          </DropdownMenuItem>;'
                          <DropdownMenuItem on_click={() => update_status (quote.id, 'accepted')}>;
                            Mark as Accepted;
                          </DropdownMenuItem>;'
                          <DropdownMenuItem on_click={() => update_status (quote.id, 'closed')}>;
                            Mark as Closed;
                          </DropdownMenuItem>;

                            Archive;
                          </DropdownMenuItem>;
                          <DropdownMenuItem;
                            on_click = {() => {}
                              if () {) {}
  $2;
}
                                delete_quote (quote.id);

                            Delete;
                          </DropdownMenuItem>;
                        </DropdownMenuContent>;
                      </DropdownMenu>)}
                  </div>;
                </TableCell>;
              </TableRow>)))}

        </TableBody>;
      </Table>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    </div>)}'";Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow;
} from "@/components/ui/table",import { Button  } from '@/components/ui/button';
  DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger;
} from "@/components/ui/dropdown-menu",import { QuoteStatusBadge  } from '@/components/quotes/QuoteStatusBadge';
import { formatDate  } from '@/utils/dateUtils';
interface QuotesTableProps  {quotes: QuoteRequest[];
  isArchived?: boolean;
  isLoading: boolean;
  updateStatus: (id: string, status: QuoteStatus) => void;
  toggleArchive: (id: string, isArchived: boolean) => void;
  deleteQuote: (id: string) => void;
  onViewDetails: (quote: QuoteRequest) => void;
  quotes;
  isArchived = false;
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow;
} from "@/components/ui/table"; import { Button  } from '@/components/ui/button';
  DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger;
} from "@/components/ui/dropdown-menu"; import { QuoteStatusBadge  } from '@/components/quotes/QuoteStatusBadge';
interface QuotesTableProps  {quotes: QuoteRequest[];
  isArchived?: boolean;
  isLoading: boolean;
  updateStatus: (id: string, status: QuoteStatus,) => void;
  toggleArchive: (id: string, isArchived: boolean,) => void;
  deleteQuote: (id: string,) => void;
  onViewDetails: (quote: QuoteRequest,) => void;
}
export const QuotesTable: React.FC<QuotesTableProps> = ({
origin/cursor/automate-test-improve-and-merge-code-2533
export const QuotesTable: React.FC<QuotesTableProps> = ({

<<<<<<< HEAD
'";
=======
';
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

import React from "react";
import { Eye, MoreHorizontal, Archive, Trash2 } from 'lucide-react'
import { 
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow 
} from "@/components/ui/table",
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu",
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge";
import type { QuoteRequest, QuoteStatus } from "@/types/quotes";
import { formatDate } from "@/utils/dateUtils";
interface QuotesTableProps {
  quotes: QuoteRequest[];
  isArchived?: boolean;
  isLoading: boolean;
  updateStatus: (id: string, status: QuoteStatus) => void;
  toggleArchive: (id: string, isArchived: boolean) => void;
  deleteQuote: (id: string) => void;
  onViewDetails: (quote: QuoteRequest) => void
  quotes
  isArchived = false
import React from "react"
import { Eye, MoreHorizontal, Archive, Trash2 } from 'lucide-react'import {
  Table
  TableBody
  TableCell
  TableHead
  TableHeader
  TableRow
} from "@/components/ui/table"; import { Button } from "@/components/ui/button"
import {
  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"; import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge"
import type { QuoteRequest, QuoteStatus } from "@/types/quotes"
import {formatDate} from "@/utils/dateUtils"
interface QuotesTableProps {
  quotes: QuoteRequest[]
  isArchived?: boolean
  isLoading: boolean
  updateStatus: (id: string, status: QuoteStatus,) => void
  toggleArchive: (id: string, isArchived: boolean,) => void
  deleteQuote: (id: string,) => void
  onViewDetails: (quote: QuoteRequest,) => void
}
export const QuotesTable: React.FC<QuotesTableProps> = ({