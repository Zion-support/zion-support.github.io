:src/components/admin/quotes/QuotesTable.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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
  updateStatus: (id: string, status: QuoteStatus) => void,
  toggleArchive: (id: string, isArchived: boolean) => void,
  deleteQuote: (id: string) => void,
  onViewDetails: (quote: QuoteRequest) => void
}

}

}
export const QuotesTable: React.FC<QuotesTableProps> = ({  quotes
=======

:src/components/admin/quotes/QuotesTable.tsx
  quotes
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  isArchived = false
  isLoading
  updateStatus
  toggleArchive

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export const QuotesTable: React.FC<QuotesTableProps> = ({
=======
export const QuotesTable: React.FC<QuotesTableProps> = ({};
  quotes;
  isArchived = false;
  isLoading;
  updateStatus;
  toggleArchive;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
  quotes,
  isArchived = false,
  isLoading,
  updateStatus,
  toggleArchive,

:src/components/admin/quotes/QuotesTable.tsx
  deleteQuote,
:src_backup/components/admin/quotes/QuotesTable.tsx
  onViewDetails
}) => {
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
:src_backup/components/admin/quotes/QuotesTable.tsx
                {isArchived 
                  ? "No archived quote requests found."
                  : "No quote requests found."}
              </TableCell>
            </TableRow>
          ) : (
            quotes.map(quote => (
:src/components/admin/quotes/QuotesTable.tsx
<<<<<<< HEAD
<<<<<<< HEAD

:src_backup/components/admin/quotes/QuotesTable.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <TableRow 
                key={quote.id}

<<<<<<< HEAD:src/components/admin/quotes/QuotesTable.tsx
                className="border-zion-blue-light hover:bg-zion-blue"
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              >
                <TableCell className="text-white">
                  {quote.talent_name || 'Unknown Talent'}
                </TableCell>
=======
              <TableRow;
                key={quote.id}

"
                className="border-zion-blue-light hover:bg-zion-blue"
              >"
                <TableCell className="text-white">
                  {quote.talent_name |'Unknown Talent'}
                </TableCell>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
                <TableCell className="text-white">
:src/components/admin/quotes/QuotesTable.tsx
<<<<<<< HEAD
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
:src_backup/components/admin/quotes/QuotesTable.tsx
}, ) => {
  return (
    <div className="overflow-x-auto">;
      <Table>;
        <TableHeader>;
          <TableRow className="border - zion - blue - light hover:bg - zion-blue">;
            <TableHead className="text - zion - slate-light">Talent</TableHead>;
            <TableHead className="text - zion - slate-light">Requester</TableHead>;
            <TableHead className="text - zion - slate-light">Project</TableHead>;
            <TableHead className="text - zion - slate-light">Budget</TableHead>;
            <TableHead className="text - zion - slate-light">Date</TableHead>;
            <TableHead className="text - zion - slate-light">Status</TableHead>;
            <TableHead className="text - zion - slate-light">Actions</TableHead>;
          </TableRow>;
        </TableHeader>;
        <TableBody>;
          {is_loading ? (
:src_backup/components/admin/quotes/QuotesTable.tsx
            <TableRow>;
              <TableCell col_span={7} className="text - center py - 10 text - zion - slate-light">;
                Loading quote requests...;
              </TableCell>;
            </TableRow>) : quotes.length === 0 ? (
            <TableRow>;
              <TableCell col_span={7} className="text - center py - 10 text - zion - slate-light">;
                {is_archived;
                  ? "No archived quote requests found.";
                  : "No quote requests found."}
              </TableCell>;
            </TableRow>) : (
            quotes.map (quote => (
              <TableRow;
:src_backup/components/admin/quotes/QuotesTable.tsx
                key = {quote.id, }
                className="border - zion - blue - light hover:bg - zion-blue";
              >;
                <TableCell className="text-white">;
                  {quote.talent_name || 'Unknown Talent'}
                </TableCell>;
<<<<<<< HEAD
                <TableCell className="text - white">;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  {quote.requester_name}
:src_backup/components/admin/quotes/QuotesTable.tsx
                </TableCell>;
                <TableCell className="text-white">;
                  <div className="font-medium">{quote.project_name}</div>;
                  <div className="text - sm text - zion - slate - light truncate max-w-[200px]">;
                    {quote.project_summary}
</div>
                </TableCell>
                <TableCell className="text-white">
                  {quote.budget_display || 
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                    <Button 
                      variant="ghost" 
=======
                    <Button "
                      variant="ghost" "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
                      size="icon" 
                      onClick={() => onViewDetails(quote)}

=======

:src_backup/components/admin/quotes/QuotesTable.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                    >
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View Details</span>
                    </Button>

:src/components/admin/quotes/QuotesTable.tsx
<<<<<<< HEAD
                    {isArchived ? (
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                      <>
:src_backup/components/admin/quotes/QuotesTable.tsx
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => toggleArchive(quote.id, false)}
                        >
                          <Archive className="h-4 w-4" />
                          <span className="sr-only">Unarchive</span>
                        </Button>
<Button 
                          variant="ghost"
                          variant="ghost"

:src/components/admin/quotes/QuotesTable.tsx
<<<<<<< HEAD
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
:src_backup/components/admin/quotes/QuotesTable.tsx
  DropdownMenuTrigger ;
} from "@/components/ui/dropdown-menu";import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge";
import type { QuoteRequest, QuoteStatus } from "@/types/quotes";
import {formatDate} from "@/utils/dateUtils";
<<<<<<< HEAD:src/components/admin/quotes/QuotesTable.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                          size="icon"
=======
  DropdownMenuTrigger ;"
} from "@/components/ui/dropdown-menu";import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge";"
import type { QuoteRequest, QuoteStatus } from "@/types/quotes";"
import {formatDate} from "@/utils/dateUtils";"
                          size="icon""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
                          className="text-red-500"
                          onClick={() => {'
                            if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {}
                              deleteQuote(quote.id)
                            }
                          }}
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
:src/components/admin/quotes/QuotesTable.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/quotes/QuotesTable.tsx
                          <DropdownMenuItem 
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                            onClick={() => {
                              if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {
                                deleteQuote(quote.id)
:src/components/admin/quotes/QuotesTable.tsx
<<<<<<< HEAD
                              }
                            }}
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/quotes/QuotesTable.tsx
=======
                          <DropdownMenuItem;
                            onClick={() => {'
                              if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {}
                                deleteQuote(quote.id)
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
                            className="text-red-500"
                          >"
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete;
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
:src_backup/components/admin/quotes/QuotesTable.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/quotes/QuotesTable.tsx
import React from "react",;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
"
import React from "react",;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
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
;
export const QuotesTable: React.FC<QuotesTableProps> = ({;
  quotes,;
  isArchived = false,;
  isLoading,;
  updateStatus,;
  toggleArchive,;
  deleteQuote;
  onViewDetails;
:src_backup/components/admin/quotes/QuotesTable.tsx
}) => {;
  return (;
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
:src_backup/components/admin/quotes/QuotesTable.tsx
          ) : quotes.length === 0 ? (;
            <TableRow>;
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">;
                {isArchived;
                  ? "No archived quote requests found.";
                  : "No quote requests found."}
              </TableCell>;
            </TableRow>;
          ) : (;
:src_backup/components/admin/quotes/QuotesTable.tsx
            quotes.map(quote => (;
              <TableRow;
                key={quote.id}
                className="border-zion-blue-light hover:bg-zion-blue";
              >;
                <TableCell className="text-white">;
                  {quote.talent_name || 'Unknown Talent'}
                </TableCell>;
                <TableCell className="text-white">;
                  {quote.requester_name}
                </TableCell>;
                <TableCell className="text-white">;
                  <div className="font-medium">{quote.project_name}</div>;
                  <div className="text-sm text-zion-slate-light truncate max-w-[200px]">;
                    {quote.project_summary}
                  </div>;
                </TableCell>;"
                <TableCell className="text-white">;
:src_backup/components/admin/quotes/QuotesTable.tsx
                  {quote.budget_display ||;
                  (quote.budget_min && quote.budget_max;
                   ? `$${quote.budget_min} - $${quote.budget_max}`;
                   : quote.budget_min;
                     ? `$${quote.budget_min}`;
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
:src_backup/components/admin/quotes/QuotesTable.tsx
                    <Button;
                      variant="ghost";
                      size="icon";
                      onClick={() => onViewDetails(quote)}
                    >;
                      <Eye className="h-4 w-4" />;
                      <span className="sr-only">View Details</span>;
                    </Button>;
:src/components/admin/quotes/QuotesTable.tsx
{isArchived ? (;
                      <>;
                        <Button;
                          variant="ghost";
                          size="icon";
                          onClick={() => toggleArchive(quote.id, false)}
                        >;
                          <Archive className="h-4 w-4" />;
                          <span className="sr-only">Unarchive</span>;
                        </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
                        <Button;
                          variant="ghost";
                          size="icon";
                          className="text-red-500";
                          onClick={() => {;
                            if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {;
                              deleteQuote(quote.id);
                            }
                          className="text-red-500"
                          onClick = {() => {;'
                            if (window && window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {;
                              deleteQuote(quote && quote.id);
                            ,}
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/quotes/QuotesTable.tsx
                          }}
:src_backup/components/admin/quotes/QuotesTable.tsx
                        >;
                          <Trash2 className="h-4 w-4" />;
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
:src_backup/components/admin/quotes/QuotesTable.tsx
                        </DropdownMenuTrigger>;
                        <DropdownMenuContent align="end">;
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'new')}>;
                            Mark as New;
                          </DropdownMenuItem>;
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'in_review')}>;
                            Mark as In Review;
                          </DropdownMenuItem>;
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'responded')}>;
                            Mark as Responded;
                          </DropdownMenuItem>;
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'accepted')}>;
                            Mark as Accepted;
                          </DropdownMenuItem>;
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'closed')}>;
                            Mark as Closed;
                          </DropdownMenuItem>;
                          <DropdownMenuItem onClick={() => toggleArchive(quote.id, true)}>;
                            <Archive className="h-4 w-4 mr-2" />;
                            Archive;
                          </DropdownMenuItem>;
                          <DropdownMenuItem;
:src_backup/components/admin/quotes/QuotesTable.tsx
                            onClick={() => {;
                              if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {;
                                deleteQuote(quote.id);
                              }
                            }}
                            className="text-red-500";
                          >;"
                            <Trash2 className="h-4 w-4 mr-2" />;
                            Delete;
                          </DropdownMenuItem>;
                        </DropdownMenuContent>;
                      </DropdownMenu>;
                    )}
=======

                    )}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                  </div>;
                </TableCell>;
              </TableRow>;
            ));
          )}

)
};
=======
};'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
'";

        </TableBody>;
      </Table>;
    </div>;
  )
};
'"
'"

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  </div>;
:src_backup/components/admin/quotes/QuotesTable.tsx
                </TableCell>;
              </TableRow>;
            ));
          )}
                  {quote.budget_display ||;
                  (quote.budget_min && quote.budget_max;`
                  ? `$${quote.budget_min} - $${quote.budget_max}`;
                  : quote.budget_min;`
                    ? `$${quote.budget_min}`;'
                    : 'Not specified')}
:src_backup/components/admin/quotes/QuotesTable.tsx
                </TableCell>;
                <TableCell className="text-white">;
                  {format_date (quote.created_at)}
                </TableCell>;
                <TableCell>;
                  <QuoteStatusBadge status={quote.status} />;
                </TableCell>;
:src_backup/components/admin/quotes/QuotesTable.tsx
                <TableCell>;
                  <div className="flex items - center gap-2">;
                    <Button;
                      variant="ghost";
                      size="icon";
                      on_click = {() => onViewDetails (quote), }
                    >;
                      <Eye className="h - 4 w-4" />;
                      <span className="sr-only">View Details</span>;
                    </Button>;
                    {is_archived ? (
                      <>;
                        <Button;"
                          variant="ghost";"
                          size="icon";
                          on_click = {(, ) => toggle_archive (quote.id, false), }
:src_backup/components/admin/quotes/QuotesTable.tsx
                        >;
                          <Archive className="h - 4 w-4" />;
                          <span className="sr-only">Unarchive</span>;
                        </Button>;
                        <Button;
                          variant="ghost";
                          size="icon";
                          className="text - red-500";
                          on_click = {() => {
                            if () {) {
  $2
}
                              delete_quote (quote.id);
                            , }
                          }}
:src_backup/components/admin/quotes/QuotesTable.tsx
                        >;
                          <Trash2 className="h - 4 w-4" />;
                          <span className="sr-only">Delete</span>;
                        </Button>;
                      </>) : (
                      <DropdownMenu>;
                        <DropdownMenuTrigger as_child>;
                          <Button variant="ghost" size="icon" aria - label="More actions">;
                            <MoreHorizontal className="h - 4 w-4" />;
                            <span className="sr-only">Actions</span>;
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
:src_backup/components/admin/quotes/QuotesTable.tsx
                          <DropdownMenuItem on_click={() => toggle_archive (quote.id, true)}>;
                            <Archive className="h - 4 w - 4 mr-2" />;
                            Archive;
                          </DropdownMenuItem>;
                          <DropdownMenuItem;
                            on_click = {() => {}
                              if () {) {}
  $2;
}
                                delete_quote (quote.id);
:src_backup/components/admin/quotes/QuotesTable.tsx
                              } }}
                            className="text - red-500";
                          >;
                            <Trash2 className="h - 4 w - 4 mr-2" />;
                            Delete;
                          </DropdownMenuItem>;
                        </DropdownMenuContent>;
                      </DropdownMenu>)}
                  </div>;
                </TableCell>;
              </TableRow>)))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        </TableBody>;
      </Table>;
</div>;
  );
};
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
'";

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/quotes/QuotesTable.tsx

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
:src/components/admin/quotes/QuotesTable.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}'"
'";'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
