<<<<<<< HEAD:src/components/admin/quotes/QuotesTable.tsx
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  isLoading: boolean,
  updateStatus: (id: string, status: QuoteStatus) => void,
  toggleArchive: (id: string, isArchived: boolean) => void,
  deleteQuote: (id: string) => void,
  onViewDetails: (quote: QuoteRequest) => void
<<<<<<< HEAD
}
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/quotes/QuotesTable.tsx
}

}
export const QuotesTable: React.FC<QuotesTableProps> = ({  quotes
=======

<<<<<<< HEAD:src/components/admin/quotes/QuotesTable.tsx
=======



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/quotes/QuotesTable.tsx
  quotes
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  isArchived = false
  isLoading
  updateStatus
  toggleArchive

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export const QuotesTable: React.FC<QuotesTableProps> = ({
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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

<<<<<<< HEAD:src/components/admin/quotes/QuotesTable.tsx
=======



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/quotes/QuotesTable.tsx
  deleteQuote,
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx
  onViewDetails
}) => {
=======
  onViewDetails;
},) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
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
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx
                {isArchived 
                  ? "No archived quote requests found." 
=======
                {isArchived"
                  ? "No archived quote requests found.""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
                  : "No quote requests found."}
              </TableCell>
            </TableRow>
          ) : (
            quotes.map(quote => (
<<<<<<< HEAD:src/components/admin/quotes/QuotesTable.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/quotes/QuotesTable.tsx


<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <TableRow 
                key={quote.id}


<<<<<<< HEAD:src/components/admin/quotes/QuotesTable.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/quotes/QuotesTable.tsx
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
<<<<<<< HEAD:src/components/admin/quotes/QuotesTable.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/quotes/QuotesTable.tsx
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
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx
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
=======
}, ) => {}
  return ("
    <div className="overflow - x-auto">;
      <Table>;
        <TableHeader>;"
          <TableRow className="border - zion - blue - light hover:bg - zion - blue">;"
            <TableHead className="text - zion - slate - light">Talent</TableHead>;"
            <TableHead className="text - zion - slate - light">Requester</TableHead>;"
            <TableHead className="text - zion - slate - light">Project</TableHead>;"
            <TableHead className="text - zion - slate - light">Budget</TableHead>;"
            <TableHead className="text - zion - slate - light">Date</TableHead>;"
            <TableHead className="text - zion - slate - light">Status</TableHead>;"
            <TableHead className="text - zion - slate - light">Actions</TableHead>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
          </TableRow>;
        </TableHeader>;
        <TableBody>;
          {is_loading ? (
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx
            <TableRow>;
              <TableCell col_span={7} className="text - center py - 10 text - zion - slate-light">;
                Loading quote requests...;
              </TableCell>;
            </TableRow>) : quotes.length === 0 ? (
            <TableRow>;
              <TableCell col_span={7} className="text - center py - 10 text - zion - slate-light">;
                {is_archived;
                  ? "No archived quote requests found.";
=======
            <TableRow>;"
              <TableCell col_span={7} className="text - center py - 10 text - zion - slate - light">;
                Loading quote requests...;
              </TableCell>;
            </TableRow>) : quotes.length === 0 ? (
            <TableRow>;"
              <TableCell col_span={7} className="text - center py - 10 text - zion - slate - light">;
                {is_archived;"
                  ? "No archived quote requests found.";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
                  : "No quote requests found."}
              </TableCell>;
            </TableRow>) : (
            quotes.map (quote => (
              <TableRow;
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx
                key = {quote.id, }
                className="border - zion - blue - light hover:bg - zion-blue";
              >;
                <TableCell className="text-white">;
                  {quote.talent_name || 'Unknown Talent'}
                </TableCell>;
<<<<<<< HEAD
=======
                key = {quote.id, }"
                className="border - zion - blue - light hover:bg - zion - blue";
              >;"
                <TableCell className="text - white">;'
                  {quote.talent_name || 'Unknown Talent'}
                </TableCell>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
                <TableCell className="text - white">;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                <TableCell className="text-white">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                  {quote.requester_name}
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx
                </TableCell>;
                <TableCell className="text-white">;
                  <div className="font-medium">{quote.project_name}</div>;
                  <div className="text - sm text - zion - slate - light truncate max-w-[200px]">;
=======
                </TableCell>;"
                <TableCell className="text - white">;"
                  <div className="font - medium">{quote.project_name}</div>;"
                  <div className="text - sm text - zion - slate - light truncate max - w-[200px]">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
                    {quote.project_summary}
<<<<<<< HEAD
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

<<<<<<< HEAD

<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx
<<<<<<< HEAD:src/components/admin/quotes/QuotesTable.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/quotes/QuotesTable.tsx
                    >
                      <Eye className="h-4 w-4" />
=======
                    >"
                      <Eye className="h-4 w-4" />"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
                      <span className="sr-only">View Details</span>
                    </Button>

<<<<<<< HEAD:src/components/admin/quotes/QuotesTable.tsx
<<<<<<< HEAD
<<<<<<< HEAD

                    
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

                    



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/quotes/QuotesTable.tsx
                    {isArchived ? (
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                      <>
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => toggleArchive(quote.id, false)}
                        >
                          <Archive className="h-4 w-4" />
                          <span className="sr-only">Unarchive</span>
                        </Button>
<<<<<<< HEAD
                        <Button 
                          variant="ghost" 
=======
                        <Button
=======
                        <Button"
                          variant="ghost""
                          size="icon"
                          onClick = {(,) => toggleArchive(quote.id, false),}
                        >"
                          <Archive className="h-4 w-4" />"
                          <span className="sr-only">Unarchive</span>
                        </Button>
                        <Button"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
                          variant="ghost"

<<<<<<< HEAD:src/components/admin/quotes/QuotesTable.tsx
<<<<<<< HEAD
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/quotes/QuotesTable.tsx
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
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx
  DropdownMenuTrigger ;
} from "@/components/ui/dropdown-menu";import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge";
import type { QuoteRequest, QuoteStatus } from "@/types/quotes";
import {formatDate} from "@/utils/dateUtils";
<<<<<<< HEAD:src/components/admin/quotes/QuotesTable.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/quotes/QuotesTable.tsx
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
<<<<<<< HEAD:src/components/admin/quotes/QuotesTable.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/quotes/QuotesTable.tsx
                          <DropdownMenuItem 
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                            onClick={() => {
                              if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {
                                deleteQuote(quote.id)
<<<<<<< HEAD:src/components/admin/quotes/QuotesTable.tsx
<<<<<<< HEAD
<<<<<<< HEAD
                              }
                            }}
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx
<<<<<<< HEAD:src/components/admin/quotes/QuotesTable.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx
}) => {;
  return (;
=======
},) => {;
  return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
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
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx
          ) : quotes.length === 0 ? (;
            <TableRow>;
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">;
                {isArchived;
                  ? "No archived quote requests found.";
=======
          ) : quotes && quotes.length === 0 ? (;
            <TableRow>;"
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">;
                {isArchived ;"
                  ? "No archived quote requests found." ;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
                  : "No quote requests found."}
              </TableCell>;
            </TableRow>;
          ) : (;
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx
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
=======
            quotes && quotes.map(quote => (;
              <TableRow;
                key = {quote && quote.id,}"
                className="border-zion-blue-light hover:bg-zion-blue">;"
                <TableCell className="text-white">;'
                  {quote && quote.talent_name || 'Unknown Talent'}
                </TableCell>;"
                <TableCell className="text-white">;
                  {quote && quote.requester_name}
                </TableCell>;"
                <TableCell className="text-white">;"
                  <div className="font-medium">{quote && quote.project_name}</div>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
                  <div className="text-sm text-zion-slate-light truncate max-w-[200px]">;
                    {quote.project_summary}
                  </div>;
                </TableCell>;"
                <TableCell className="text-white">;
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx
                  {quote.budget_display ||;
                  (quote.budget_min && quote.budget_max;
                   ? `$${quote.budget_min} - $${quote.budget_max}`;
                   : quote.budget_min;
                     ? `$${quote.budget_min}`;
=======
                  {quote && quote.budget_display || ;
                  (quote && quote.budget_min && quote && quote.budget_max ;
                   ? `$${quote && quote.budget_min} - $${quote && quote.budget_max}` ;
                   : quote && quote.budget_min ;`
                     ? `$${quote && quote.budget_min}` ;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
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
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx
                    <Button;
                      variant="ghost";
                      size="icon";
                      onClick={() => onViewDetails(quote)}
                    >;
                      <Eye className="h-4 w-4" />;
=======
                    <Button"
                      variant="ghost" "
                      size="icon" 
                      onClick = {() => onViewDetails(quote),}
                    >;"
                      <Eye className="h-4 w-4" />;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
                      <span className="sr-only">View Details</span>;
                    </Button>;
<<<<<<< HEAD:src/components/admin/quotes/QuotesTable.tsx
<<<<<<< HEAD
                    {isArchived ? (;
                      <>;
                        <Button;
                          variant="ghost";
                          size="icon";
                          onClick={() => toggleArchive(quote.id, false)}
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

                    {isArchived ? (;
                      <>;
                        <Button"
                          variant="ghost" "
                          size="icon"
                          onClick = {(,) => toggleArchive(quote && quote.id, false),}
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/quotes/QuotesTable.tsx
                        >;
                          <Archive className="h-4 w-4" />;
                          <span className="sr-only">Unarchive</span>;
                        </Button>;
<<<<<<< HEAD:src/components/admin/quotes/QuotesTable.tsx
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
=======
                        <Button
                          variant="ghost" 
                          size="icon"
=======
                        >;"
                          <Archive className="h-4 w-4" />;"
                          <span className="sr-only">Unarchive</span>;
                        </Button>;
                        <Button"
                          variant="ghost" "
                          size="icon""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
                          className="text-red-500"
                          onClick = {() => {;'
                            if (window && window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {;
                              deleteQuote(quote && quote.id);
                            ,}
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/quotes/QuotesTable.tsx
                          }}
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx
                        >;
                          <Trash2 className="h-4 w-4" />;
=======

                        >;"
                          <Trash2 className="h-4 w-4" />;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
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
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx
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
=======
                        </DropdownMenuTrigger>;"
                        <DropdownMenuContent align="end">;'
                          <DropdownMenuItem onClick={(,) => updateStatus(quote && quote.id, 'new')}>;
                            Mark as New;
                          </DropdownMenuItem>;'
                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'in_review')}>;
                            Mark as In Review;
                          </DropdownMenuItem>;'
                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'responded')}>;
                            Mark as Responded;
                          </DropdownMenuItem>;'
                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'accepted')}>;
                            Mark as Accepted;
                          </DropdownMenuItem>;'
                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'closed')}>;
                            Mark as Closed;
                          </DropdownMenuItem>;
                          <DropdownMenuItem onClick={() => toggleArchive(quote && quote.id, true)}>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
                            <Archive className="h-4 w-4 mr-2" />;
                            Archive;
                          </DropdownMenuItem>;
                          <DropdownMenuItem;
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx
                            onClick={() => {;
                              if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {;
                                deleteQuote(quote.id);
                              }
                            }}
=======
                            onClick = {() => {;'
                              if (window && window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {;
                                deleteQuote(quote && quote.id);
                              };                            }}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
                            className="text-red-500";
                          >;"
                            <Trash2 className="h-4 w-4 mr-2" />;
                            Delete;
                          </DropdownMenuItem>;
                        </DropdownMenuContent>;
                      </DropdownMenu>;
<<<<<<< HEAD
=======

<<<<<<< HEAD:src/components/admin/quotes/QuotesTable.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/quotes/QuotesTable.tsx
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

<<<<<<< HEAD
  )
=======
  );
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                  </div>;
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx
                </TableCell>;
              </TableRow>;
            ));
          )}
=======
                  </div>;
                </TableCell>;
                <TableCell className="text-white">;
=======
                </TableCell>;"
                <TableCell className="text - white">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
                  {quote.budget_display ||;
                  (quote.budget_min && quote.budget_max;`
                  ? `$${quote.budget_min} - $${quote.budget_max}`;
                  : quote.budget_min;`
                    ? `$${quote.budget_min}`;'
                    : 'Not specified')}
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx
                </TableCell>;
                <TableCell className="text-white">;
=======
                </TableCell>;"
                <TableCell className="text - white">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
                  {format_date (quote.created_at)}
                </TableCell>;
                <TableCell>;
                  <QuoteStatusBadge status={quote.status} />;
                </TableCell>;
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx
                <TableCell>;
                  <div className="flex items - center gap-2">;
                    <Button;
                      variant="ghost";
                      size="icon";
                      on_click = {() => onViewDetails (quote), }
                    >;
                      <Eye className="h - 4 w-4" />;
                      <span className="sr-only">View Details</span>;
=======
                <TableCell>;"
                  <div className="flex items - center gap - 2">;
                    <Button;"
                      variant="ghost";"
                      size="icon";
                      on_click = {() => onViewDetails (quote), }
                    >;"
                      <Eye className="h - 4 w - 4" />;"
                      <span className="sr - only">View Details</span>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
                    </Button>;
                    {is_archived ? (
                      <>;
                        <Button;"
                          variant="ghost";"
                          size="icon";
                          on_click = {(, ) => toggle_archive (quote.id, false), }
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx
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
=======
                        >;"
                          <Archive className="h - 4 w - 4" />;"
                          <span className="sr - only">Unarchive</span>;
                        </Button>;
                        <Button;"
                          variant="ghost";"
                          size="icon";"
                          className="text - red - 500";
                          on_click = {() => {}
                            if () {) {}
  $2;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
}
                              delete_quote (quote.id);
                            , }
                          }}
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx
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
=======
                        >;"
                          <Trash2 className="h - 4 w - 4" />;"
                          <span className="sr - only">Delete</span>;
                        </Button>;
                      </>) : (
                      <DropdownMenu>;
                        <DropdownMenuTrigger as_child>;"
                          <Button variant="ghost" size="icon" aria - label="More actions">;"
                            <MoreHorizontal className="h - 4 w - 4" />;"
                            <span className="sr - only">Actions</span>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
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
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx
                          <DropdownMenuItem on_click={() => toggle_archive (quote.id, true)}>;
                            <Archive className="h - 4 w - 4 mr-2" />;
=======
                          <DropdownMenuItem on_click={() => toggle_archive (quote.id, true)}>;"
                            <Archive className="h - 4 w - 4 mr - 2" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
                            Archive;
                          </DropdownMenuItem>;
                          <DropdownMenuItem;
                            on_click = {() => {}
                              if () {) {}
  $2;
}
                                delete_quote (quote.id);
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx
                              } }}
                            className="text - red-500";
                          >;
                            <Trash2 className="h - 4 w - 4 mr-2" />;
=======
                              } }}"
                            className="text - red - 500";
                          >;"
                            <Trash2 className="h - 4 w - 4 mr - 2" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
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
<<<<<<< HEAD
    </div>;
  );
};
=======
    </div>);
<<<<<<< HEAD:src_backup/components/admin/quotes/QuotesTable.tsx
}
<<<<<<< HEAD:src/components/admin/quotes/QuotesTable.tsx
<<<<<<< HEAD
'";
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD:src/components/admin/quotes/QuotesTable.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/quotes/QuotesTable.tsx
=======
}'"
'";'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/admin/quotes/QuotesTable.tsx
