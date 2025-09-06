<<<<<<< HEAD:src_backup/components/quotes/QuoteRequestCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react",
import { format } from "date-fns",
import { 
  Card,
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription
} from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge",
import { Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon } from 'lucide-react'
import type { QuoteRequest } from "@/types/quotes",
=======
import React from "react"
import {format} from "date-fns"
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
=======
import React from "react""
import {format} from "date-fns""
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card""
import {Button} from "@/components/ui/button""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/quotes/QuoteRequestCard.tsx
import {QuoteStatusBadge} from "@/components/quotes/QuoteStatusBadge"
import {Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon} from 'lucide-react'"
import type { QuoteRequest } from "@/types/quotes"
<<<<<<< HEAD:src_backup/components/quotes/QuoteRequestCard.tsx
=======
import React from "react";
import { format } from "date-fns";
import { 
  Card;
  CardContent;
  CardHeader;
  CardTitle;
  CardDescription
} from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge";
import { Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon } from 'lucide-react'
import type { QuoteRequest } from "@/types/quotes";
type QuoteRequestCardProps = any;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
type QuoteRequestCardProps = {
  quote: QuoteRequest
  onViewDetails: (quote: QuoteRequest) => void
  onMarkAsResponded?: (id: string) => void
  onToggleArchive: (id: string, isArchived: boolean) => void
}
export const QuoteRequestCard: React.FC<QuoteRequestCardProps> = ({
<<<<<<< HEAD


=======
type QuoteRequestCardProps = {};
  quote: QuoteRequest;
  onViewDetails: (quote: QuoteRequest) => void;
  onMarkAsResponded?: (id: string) => void;
  onToggleArchive: (id: string, isArchived: boolean) => void;
}
export const QuoteRequestCard: React.FC<QuoteRequestCardProps> = ({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/quotes/QuoteRequestCard.tsx
  quote,
  onViewDetails,
  quote,
  onViewDetails,


<<<<<<< HEAD:src_backup/components/quotes/QuoteRequestCard.tsx
  onMarkAsResponded,
=======
  quote
  onViewDetails
  onMarkAsResponded
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  onToggleArchive
},) => {
  // Format date for display
  const formatDate = (dateString: string,) => {
<<<<<<< HEAD
import React from './react';
import { format } from './date - fns';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { QuoteStatusBadge } from '@/components / quotes / QuoteStatusBadge';
import {Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon} from 'lucide-react';
import type { QuoteRequest } from "@/types / quotes";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
type QuoteRequestCardProps = {
  quote: QuoteRequest,
  onViewDetails: (quote: QuoteRequest) => void,
  onMarkAsResponded?: (id: string) => void,
  onToggleArchive: (id: string, isArchived: boolean) => void
},

export const QuoteRequestCard: React.FC<QuoteRequestCardProps> = ({
  quote,
  onViewDetails,
  onMarkAsResponded,
  onToggleArchive
}) => {
  // Format date for display
  const formatDate = (dateString: string) => {
    try {
=======
  onMarkAsResponded,;
  onToggleArchive;
},) => {}
  // Format date for display;
  const formatDate = (dateString: string,) => {'
import React from './react';'
import { format } from './date - fns';'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components / ui / card';'
import { Button } from '@/components / ui / button';'
import { QuoteStatusBadge } from '@/components / quotes / QuoteStatusBadge';'
import {Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon} from 'lucide-react';"
import type { QuoteRequest } from "@/types / quotes";
type QuoteRequestCardProps = {}
  quote: QuoteRequest,
  onViewDetails: (quote: QuoteRequest) => void,
  onMarkAsResponded?: (id: string) => void,
  onToggleArchive: (id: string, is_archived: boolean) => void;
}
export const QuoteRequestCard: React.FC < QuoteRequestCardProps> = ({};
  quote;
  onViewDetails;
  onMarkAsResponded,
  onToggleArchive;
}, ) => {}
  // Format date for display;
  const format_date = (date_string: string, ) =>: any {}
    try {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/quotes/QuoteRequestCard.tsx
      return format(new Date(dateString), 'PP')
    } catch (e) {}
"
import React from "react";"
import {format} from "date-fns";"
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card";"
import {Button} from "@/components/ui/button";"
import {QuoteStatusBadge} from "@/components/quotes/QuoteStatusBadge";'
import {Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon} from 'lucide-react';"
import type { QuoteRequest } from "@/types/quotes";
type QuoteRequestCardProps = {;
  quote: QuoteRequest,;
  onViewDetails: (quote: QuoteRequest) => void,;
  onMarkAsResponded?: (id: string) => void,;
  onToggleArchive: (id: string, isArchived: boolean) => void;
};
export const QuoteRequestCard: React.FC<QuoteRequestCardProps> = ({;
  quote;
  onViewDetails;
  onMarkAsResponded,;
  onToggleArchive;
},) => {;
  // Format date for display;
  const formatDate = (dateString: string,) => {;
    try {;'
      return format(new Date(dateString), 'PP');
    } catch (e) {;
      return dateString;

    }
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  },

  return (
<<<<<<< HEAD
=======
    try {
      return format(new Date(dateString), 'PP')
    } catch (e) {
      return dateString
    }
  }
  return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    <Card key={quote.id} className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-white">{quote.project_name}</CardTitle>
            <CardDescription className="text-zion-slate-light">
              {formatDate(quote.created_at)}
            </CardDescription>
          </div>
          <QuoteStatusBadge status={quote.status} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-zion-slate-light mb-3">
          <span className="text-white font-medium">From: </span>
          {quote.requester_name}
        </div>
<<<<<<< HEAD
=======


<<<<<<< HEAD:src_backup/components/quotes/QuoteRequestCard.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        
        <p className="text-white line-clamp-3 mb-4">{quote.project_summary}</p>
        
=======
        <p className="text-white line-clamp-3 mb-4">{quote.project_summary}</p>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-3">
          <CalendarIcon className="h-4 w-4" />
          <span>Timeline: {quote.timeline}</span>
        </div>
<<<<<<< HEAD
        


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        "
        <p className="text-white line-clamp-3 mb-4">{quote.project_summary}</p>
        

"
        <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-3">"
          <CalendarIcon className="h-4 w-4" />
          <span>Timeline: {quote.timeline}</span>
        </div>
"
    <Card key={quote && quote.id} className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;

        

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/quotes/QuoteRequestCard.tsx
        <div className="flex justify-between items-center mt-4">
          <Button"
            variant="outline""
            size="sm"
<<<<<<< HEAD:src_backup/components/quotes/QuoteRequestCard.tsx
<<<<<<< HEAD
            onClick={() => onViewDetails(quote)}
=======
            onClick = {() => onViewDetails(quote),}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
            onClick={() => onViewDetails(quote)}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/quotes/QuoteRequestCard.tsx
            className="flex items-center gap-1"
          >"
            <Eye className="h-4 w-4" />
            View Details;
          </Button>
<<<<<<< HEAD

          
<<<<<<< HEAD:src_backup/components/quotes/QuoteRequestCard.tsx
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <div className="flex items-center">
=======
"
          <div className="flex items-center">'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/quotes/QuoteRequestCard.tsx
            {quote.status !== 'responded' && onMarkAsResponded && (
              <Button"
                variant="ghost""
                size="sm"
<<<<<<< HEAD:src_backup/components/quotes/QuoteRequestCard.tsx
<<<<<<< HEAD
                onClick={() => onMarkAsResponded(quote.id)}
=======
                onClick = {(,) => onMarkAsResponded(quote.id),}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                onClick={() => onMarkAsResponded(quote.id)}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/quotes/QuoteRequestCard.tsx
                className="flex items-center gap-1"
              >"
                <MessageSquare className="h-4 w-4" />
                Mark Responded;
              </Button>
            )}
<<<<<<< HEAD

            

            <Button"
              variant="ghost""
              size="sm"
<<<<<<< HEAD:src_backup/components/quotes/QuoteRequestCard.tsx
              onClick={() => onToggleArchive(quote.id, !quote.is_archived)}
=======
            <Button
              variant="ghost"
              size="sm"
              onClick = {() => onToggleArchive(quote.id, !quote.is_archived),}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
              onClick={() => onToggleArchive(quote.id, !quote.is_archived)}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/quotes/QuoteRequestCard.tsx
              className="flex items-center gap-1"
            >
              {quote.is_archived ? ("
                <RefreshCw className="h-4 w-4" />
              ) : ("
                <ArchiveIcon className="h-4 w-4" />
<<<<<<< HEAD
<<<<<<< HEAD
=======

  );
};"
"};
};
<<<<<<< HEAD:src_backup/components/quotes/QuoteRequestCard.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react",;
=======
"
import React from "react",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/quotes/QuoteRequestCard.tsx
import { format } from "date-fns",;
import {;
  Card,;
  CardContent,;
  CardHeader,;
  CardTitle,;
  CardDescription;"
} from "@/components/ui/card",;"
import { Button } from "@/components/ui/button",;"
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge",;'
import { Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon } from 'lucide-react';"
import type { QuoteRequest } from "@/types/quotes",;
type QuoteRequestCardProps = {;
  quote: QuoteRequest,;
  onViewDetails: (quote: QuoteRequest) => void,;
  onMarkAsResponded?: (id: string) => void,;
  onToggleArchive: (id: string, isArchived: boolean) => void;
},;
export const QuoteRequestCard: React.FC<QuoteRequestCardProps> = ({;
  quote,;
  onViewDetails,;
  onMarkAsResponded,;
  onToggleArchive;
}) => {;
  // Format date for display;
  const formatDate = (dateString: string) => {;
    try {;'
      return format(new Date(dateString), 'PP');
    } catch (e) {;
      return dateString;
    }
  };
  return (;"
    <Card key={quote.id} className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;"
      <CardHeader className="pb-2">;"
        <div className="flex justify-between items-start">;
<<<<<<< HEAD:src_backup/components/quotes/QuoteRequestCard.tsx
          <div>;
            <CardTitle className="text-white">{quote.project_name}</CardTitle>;
=======
          <div>;"
            <CardTitle className="text-white">{quote && quote.project_name}</CardTitle>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/quotes/QuoteRequestCard.tsx
            <CardDescription className="text-zion-slate-light">;
              {formatDate(quote.created_at)}
            </CardDescription>;
          </div>;
          <QuoteStatusBadge status={quote.status} />;
        </div>;
      </CardHeader>;
      <CardContent>;"
        <div className="text-sm text-zion-slate-light mb-3">;"
          <span className="text-white font-medium">From: </span>;
          {quote.requester_name}
        </div>;
<<<<<<< HEAD:src_backup/components/quotes/QuoteRequestCard.tsx
        <p className="text-white line-clamp-3 mb-4">{quote.project_summary}</p>;
        <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-3">;
=======
"
        <p className="text-white line-clamp-3 mb-4">{quote && quote.project_summary}</p>;
"
        <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-3">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/quotes/QuoteRequestCard.tsx
          <CalendarIcon className="h-4 w-4" />;
          <span>Timeline: {quote.timeline}</span>;
        </div>;
<<<<<<< HEAD:src_backup/components/quotes/QuoteRequestCard.tsx
        <div className="flex justify-between items-center mt-4">;
          <Button;
            variant="outline";
            size="sm";
            onClick={() => onViewDetails(quote)}
=======
"
        <div className="flex justify-between items-center mt-4">;
          <Button"
            variant="outline""
            size="sm"
            onClick = {() => onViewDetails(quote),}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/quotes/QuoteRequestCard.tsx
            className="flex items-center gap-1";
          >;"
            <Eye className="h-4 w-4" />;
            View Details;
          </Button>;
<<<<<<< HEAD:src_backup/components/quotes/QuoteRequestCard.tsx
          <div className="flex items-center">;
            {quote.status !== 'responded' && onMarkAsResponded && (;
              <Button;
                variant="ghost";
                size="sm";
                onClick={() => onMarkAsResponded(quote.id)}
                className="flex items-center gap-1";
              >;
                <MessageSquare className="h-4 w-4" />;
                Mark Responded;
              </Button>;
            )}
;
            <Button;
              variant="ghost";
              size="sm";
              onClick={() => onToggleArchive(quote.id, !quote.is_archived)}
              className="flex items-center gap-1";
            >;
              {quote.is_archived ? (;
=======
"
          <div className="flex items-center">;'
            {quote && quote.status !== 'responded' && onMarkAsResponded && (;

              <Button"
                variant="ghost""
                size="sm"
                onClick={() => onMarkAsResponded(quote.id)}"
                className="flex items-center gap-1"
              >"
                <MessageSquare className="h-4 w-4" />
                Mark Responded;
              </Button>
            )}



            <Button"
              variant="ghost""
              size="sm"
              onClick = {() => onToggleArchive(quote && quote.id, !quote && quote.is_archived),}"
              className="flex items-center gap-1";
            >;
              {quote && quote.is_archived ? (;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/quotes/QuoteRequestCard.tsx
                <RefreshCw className="h-4 w-4" />;
              ) : (;"
                <ArchiveIcon className="h-4 w-4" />;
              )}
            </Button>;
          </div>;
        </div>;
      </CardContent>;
    </Card>;
  );
<<<<<<< HEAD
};
=======
};

      return date_string;
    }
  }
  return ("
    <Card key={quote.id} className="bg - zion - blue - dark border border - zion - blue - light overflow - hidden">;"
      <CardHeader className="pb - 2">;"
        <div className="flex justify - between items - start">;
          <div>;"
            <CardTitle className="text - white">{quote.project_name}</CardTitle>;"
            <CardDescription className="text - zion - slate - light">;
              {format_date (quote.created_at)}
            </CardDescription>;
          </div>;
          <QuoteStatusBadge status={quote.status} />;
        </div>;
      </CardHeader>;
      <CardContent>;"
        <div className="text - sm text - zion - slate - light mb - 3">;"
          <span className="text - white font - medium">From: </span>;
          {quote.requester_name}
        </div>;"
        <p className="text - white line - clamp - 3 mb - 4">{quote.project_summary}</p>;"
        <div className="flex items - center gap - 2 text - sm text - zion - slate - light mb - 3">;"
          <CalendarIcon className="h - 4 w - 4" />;
          <span > Timeline: {quote.timeline}</span>;
        </div>;"
        <div className="flex justify - between items - center mt - 4">;
          <Button;"
            variant="outline";"
            size="sm";
            on_click = {() => onViewDetails (quote), }"
            className="flex items - center gap - 1";
          >;"
            <Eye className="h - 4 w - 4" />;
            View Details;
          </Button>;"
          <div className="flex items - center">;'
            {quote.status !== 'responded' && onMarkAsResponded && (
              <Button;"
                variant="ghost";"
                size="sm";
                on_click = {(, ) => onMarkAsResponded (quote.id), }"
                className="flex items - center gap - 1";
              >;"
                <MessageSquare className="h - 4 w - 4" />;
                Mark Responded;
              </Button>)}
            <Button;"
              variant="ghost";"
              size="sm";
              on_click = {() => onToggleArchive (quote.id, !quote.is_archived), }"
              className="flex items - center gap - 1";
            >;
              {quote.is_archived ? ("
                <RefreshCw className="h - 4 w - 4" />) : ("
                <ArchiveIcon className="h - 4 w - 4" />)}
            </Button>;
          </div>;
        </div>;
      </CardContent>;
    </Card>);
}"
"},
<<<<<<< HEAD:src_backup/components/quotes/QuoteRequestCard.tsx
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/quotes/QuoteRequestCard.tsx
