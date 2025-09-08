

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
    <div className=overflow-x-auto">
      <Table>
        <TableHeader>"
          <TableRow className=border-zion-blue-light hover:bg-zion-blue>"
            <TableHead className="text-zion-slate-light>Talent</TableHead>
            <TableHead className="text-zion-slate-light">Requester</TableHead>
            <TableHead className=text-zion-slate-light">Project</TableHead>"
            <TableHead className=text-zion-slate-light>Budget</TableHead>"
            <TableHead className="text-zion-slate-light>Date</TableHead>
            <TableHead className="text-zion-slate-light">Status</TableHead>
            <TableHead className=text-zion-slate-light">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>"
              <TableCell colSpan={7} className=text-center py-10 text-zion-slate-light>
                Loading quote requests...
              </TableCell>
            </TableRow>
          ) : quotes.length === 0 ? (
            <TableRow>"
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light>

                  : No quote requests found."}
              </TableCell>
            </TableRow>
          ) : (
            quotes.map(quote => (



                className="border-zion-blue-light hover:bg-zion-blue

              >
                <TableCell className=text-white">
                  {quote.talent_name || Unknown Talent'}
                </TableCell>

                <TableCell className="text-white">

  quotes;
  is_archived = false;'
import React from ./react;'
import { Eye, MoreHorizontal, Archive, Trash2 } from 'lucide-reactimport {}
  Table;
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow;
} from '@/components / ui / table'; import { Button  } from @/components / ui / button;
import {}
  DropdownMenu;
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger;'
} from '@/components / ui / dropdown - menu; import { QuoteStatusBadge  } from @/components / quotes / QuoteStatusBadge';
import type { QuoteRequest, QuoteStatus } from "@/types / quotes";'
import { format_date } from @/utils / date_utils;
interface QuotesTableProps {}
  quotes: QuoteRequest[],
  is_archived?: boolean;
  is_loading: boolean,
  update_status: (id: string, status: QuoteStatus, ) => void,
  toggle_archive: (id: string, is_archived: boolean, ) => void,
  delete_quote: (id: string, ) => void,
  onViewDetails: (quote: QuoteRequest, ) => void;
}
export const QuotesTable: React.FC < QuotesTableProps> = ({}
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

                  : No quote requests found.}
              </TableCell>;
            </TableRow>) : (
            quotes.map (quote => (
              <TableRow;

                <TableCell className="text - white">;

                  {quote.requester_name}

                    {quote.project_summary}



                    <Button 
                      variant="ghost" 

                      size=icon 
                      onClick={() => onViewDetails(quote)}

                      <span className="sr-only">View Details</span>
                    </Button>



                    {isArchived ? (

                      <>




  quotes;
  isArchived = false;"
  Table;
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow ;
} from "@/components/ui/table";import { Button } from @/components/ui/button;
  DropdownMenu;
  DropdownMenuContent,
  DropdownMenuItem,

                          size="icon"

                          className=text-red-500
                          onClick={() => {'
                            if (window.confirm(Are you sure you want to delete this quote request? This action cannot be undone.)) {}
                              deleteQuote(quote.id)
                            }
                          }}
                        >"
                          <Trash2 className="h-4 w-4 />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </>
                    ) : (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant=ghost" size="icon aria-label=More actions">"
                            <MoreHorizontal className=h-4 w-4 />"
                            <span className="sr-only>Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">'
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'new)}>
                            Mark as New;
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'in_review')}>
                            Mark as In Review;
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, responded')}>
                            Mark as Responded;
                          </DropdownMenuItem>'
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, accepted)}>
                            Mark as Accepted;
                          </DropdownMenuItem>'
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'closed)}>
                            Mark as Closed;
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => toggleArchive(quote.id, true)}>
                            <Archive className=h-4 w-4 mr-2" />
                            Archive;
                          </DropdownMenuItem>



                          <DropdownMenuItem 

                            onClick={() => {
                              if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.)) {
                                deleteQuote(quote.id)

                            className="text-red-500
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete;
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>




import React from react",

import { Eye, MoreHorizontal, Archive, Trash2 } from 'lucide-react';
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow;"
} from @/components/ui/table,"
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger;
} from "@/components/ui/dropdown-menu",
import { QuoteStatusBadge } from @/components/quotes/QuoteStatusBadge","
import type { QuoteRequest, QuoteStatus } from @/types/quotes,"
interface QuotesTableProps {
  quotes: QuoteRequest[],
  isArchived?: boolean,
  isLoading: boolean,
  updateStatus: (id: string, status: QuoteStatus) => void,
  toggleArchive: (id: string, isArchived: boolean) => void,
  deleteQuote: (id: string) => void,
  onViewDetails: (quote: QuoteRequest) => void;
}


  deleteQuote;
  onViewDetails;

    <div className="overflow-x-auto>;
      <Table>;
        <TableHeader>;
          <TableRow className="border-zion-blue-light hover:bg-zion-blue">;
            <TableHead className=text-zion-slate-light">Talent</TableHead>;"
            <TableHead className=text-zion-slate-light>Requester</TableHead>;"
            <TableHead className="text-zion-slate-light>Project</TableHead>;
            <TableHead className="text-zion-slate-light">Budget</TableHead>;
            <TableHead className=text-zion-slate-light">Date</TableHead>;"
            <TableHead className=text-zion-slate-light>Status</TableHead>;"
            <TableHead className="text-zion-slate-light>Actions</TableHead>;
          </TableRow>;
        </TableHeader>;
        <TableBody>;
          {isLoading ? (;
            <TableRow>;
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">;
                Loading quote requests...;
              </TableCell>;
            </TableRow>;

                  : No quote requests found.}
              </TableCell>;
            </TableRow>;
          ) : (;

                  <div className="text-sm text-zion-slate-light truncate max-w-[200px]">;
                    {quote.project_summary}
                  </div>;
                </TableCell>;
                <TableCell className=text-white">;

                     : Not specified)}
                </TableCell>;"
                <TableCell className=text-white>;
                  {formatDate(quote.created_at)}
                </TableCell>;
                <TableCell>;
                  <QuoteStatusBadge status={quote.status} />;
                </TableCell>;
                <TableCell>;"
                  <div className="flex items-center gap-2>;

                      <span className="sr-only">View Details</span>;
                    </Button>;



                          }}

                          <span className="sr-only>Delete</span>;
                        </Button>;
                      </>;
                    ) : (;
                      <DropdownMenu>;
                        <DropdownMenuTrigger asChild>;
                          <Button variant="ghost" size=icon aria-label="More actions">;
                            <MoreHorizontal className=h-4 w-4" />;"
                            <span className=sr-only>Actions</span>;
                          </Button>;

                            <Archive className="h-4 w-4 mr-2" />;
                            Archive;
                          </DropdownMenuItem>;
                          <DropdownMenuItem;

                            className=text-red-500;
                          >;"
                            <Trash2 className="h-4 w-4 mr-2 />;
                            Delete;
                          </DropdownMenuItem>;
                        </DropdownMenuContent>;


                      </DropdownMenu>;

                    )}

                  </div>;
                </TableCell>;
              </TableRow>;
            ));
          )}

}

'";

        </TableBody>;
      </Table>;
    </div>;
  )
}
'


                  </div>;

                  {quote.budget_display ||;
                  (quote.budget_min && quote.budget_max;`
                  ? `$${quote.budget_min} - $${quote.budget_max}`;
                  : quote.budget_min;`
                    ? `$${quote.budget_min}`;
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
                          variant="ghost;
                          size="icon";
                          on_click = {(, ) => toggle_archive (quote.id, false)}

}
                              delete_quote (quote.id);
                            , }
                          }}

                          </Button>;
                        </DropdownMenuTrigger>;
                        <DropdownMenuContent align=end">;
                          <DropdownMenuItem on_click={(, ) => update_status (quote.id, new')}>;
                            Mark as New;
                          </DropdownMenuItem>;'
                          <DropdownMenuItem on_click={() => update_status (quote.id, in_review)}>;
                            Mark as In Review;
                          </DropdownMenuItem>;'
                          <DropdownMenuItem on_click={() => update_status (quote.id, 'responded)}>;
                            Mark as Responded;
                          </DropdownMenuItem>;
                          <DropdownMenuItem on_click={() => update_status (quote.id, 'accepted')}>;
                            Mark as Accepted;
                          </DropdownMenuItem>;
                          <DropdownMenuItem on_click={() => update_status (quote.id, closed')}>;
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



import React from react";
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow 
} from "@/components/ui/table,
import { Button } from @/components/ui/button";
  DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu,
import { QuoteStatusBadge } from @/components/quotes/QuoteStatusBadge";
import type { QuoteRequest, QuoteStatus } from "@/types/quotes;
import { formatDate } from @/utils/dateUtils";
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
import React from "react
  Table
  TableBody
  TableCell
  TableHead
  TableHeader
  TableRow
} from @/components/ui/table"; import { Button } from "@/components/ui/button
  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuTrigger
} from @/components/ui/dropdown-menu"; import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge
import type { QuoteRequest, QuoteStatus } from @/types/quotes"
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