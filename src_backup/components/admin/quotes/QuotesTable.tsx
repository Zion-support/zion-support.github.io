

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


:src/components/admin/quotes/QuotesTable.tsx
              <TableRow
                key = {quote.id,}


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


                    






                          variant="ghost"

                          variant=ghost


:src/components/admin/quotes/QuotesTable.tsx
                          <DropdownMenuItem
                            onClick = {() => {
                              if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {
                                deleteQuote(quote.id)
                              } }


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
'"


;
export const QuotesTable: React.FC<QuotesTableProps> = ({;

;
export const QuotesTable: React.FC<QuotesTableProps> = ({
  isLoading: boolean,updateStatus: (id: string, status: QuoteStatus) => void,toggleArchive: (id: string, isArchived: boolean) => void,deleteQuote: (id: string) => void,onViewDetails: (quote: QuoteRequest) => void;
}
export const QuotesTable: React.FC<QuotesTableProps> = ({}
export const QuotesTable: React.FC<QuotesTableProps> = ({quotes;
  isArchived = false;
  isLoading;
  updateStatus;
  toggleArchive;
  quotes,isArchived = false,isLoading,updateStatus,toggleArchive,deleteQuote,onViewDetails;
},) => {return (<div className="overflow-x-auto">;


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
                          }


                    )}
                      </DropdownMenu>;)}
                  </div>;
                </TableCell>;
              </TableRow>;
            )))})}'";</TableBody>;
      </Table>;
    </div>;
  )}'";
                              delete_quote (quote.id) }
                          }


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

'";
