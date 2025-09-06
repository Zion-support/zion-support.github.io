<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
<<<<<<< HEAD

import React, { useState } from "react",
import { Dispute, DisputeStatus } from "@/types/disputes",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import {
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}
export /**
 * DisputesList - Function description
 */
function DisputesList() {
  const [status_filter, setStatusFilter] = useState < DisputeStatus | 'all'>(
    'all');
  const filtered_disputes =;
    status_filter === 'all';
      ? disputes;
      : disputes.filter (dispute => dispute.status === status_filter);
  const getStatusBadgeVariant = (status: DisputeStatus, ) =>: any {
    switch (status) {
      case 'open':;
        return 'default';
      case 'under_review':;
        return 'secondary';
      case 'resolved':;
        return 'outline'; // Changed from './success'; to "outline";
      case 'closed':;
        return 'outline';
      default:;
        return 'default';
import React, { useState } from './react';
import { Dispute, DisputeStatus  } from '@/types / disputes';
import { Button  } from '@/components / ui / button';
import { Badge  } from '@/components / ui / badge';
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx

import React, { useState } from "react",
import { Dispute, DisputeStatus } from "@/types/disputes",
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
origin/cursor/automate-test-improve-and-merge-code-2533
import {
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow} from "@/components/ui/table",
import Skeleton from "@/components/ui/skeleton",
import { formatDistanceToNow } from "date-fns";
import { ShieldAlert } from 'lucide-react'
import Link from "next/link";
type DisputesListProps = any;
origin/cursor/automate-test-improve-and-merge-code-2533
type DisputesListProps = {

import React, { useState } from 'react';
import { Dispute, DisputeStatus } from '@/types/disputes';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {  Table,  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
  TableRow,;
} from '@/components/ui/table';
import Skeleton from '@/components/ui/skeleton';
import { formatDistanceToNow } from 'date-fns';
import { ShieldAlert } from 'lucide-react';
import Link from 'next/link';
type DisputesListProps = {;
  disputes: Dispute[];
isLoading: boolean 
};

export function DisputesList(): any ({ disputes, isLoading }: DisputesListProps) {;
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | 'all'>(;
    'all';
  );

  const filteredDisputes =;
    statusFilter === 'all';
      ? disputes;
      : disputes && disputes.filter(dispute => dispute && dispute.status === statusFilter);

  const getStatusBadgeVariant = (status: DisputeStatus,) => {;
    switch (status) {;
      case 'open':;
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
        return 'default';
      case 'under_review':;
        return 'secondary';
      case 'resolved':;
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
        return 'outline'; // Changed from "success" to "outline"
      case 'closed':
        return 'outline'
      default:
        return 'default'
import React, { useState } from "react"
import { Dispute, DisputeStatus } from "@/types/disputes"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table
  TableBody
  TableCell
  TableHead
  TableHeader
  TableRow} from "@/components/ui/table"
import Skeleton from "@/components/ui/skeleton"
import { formatDistanceToNow } from "date-fns"
import Link from "next/link"
TableBody,
  TableCell,
  TableHead,
  TableHeader,

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  Table,
=======
import React, { useState } from "react",
import { Dispute, DisputeStatus } from "@/types/disputes",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import {  Table,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

=======
        return 'outline'; // Changed from "success" to "outline";
      case 'closed':;
        return 'outline';
      default:;
        return 'default';


import React, { useState } from "react";
import { Dispute, DisputeStatus } from "@/types/disputes";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
  Table,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
<<<<<<< HEAD
  TableRow} from "@/components/ui/table",
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
import Skeleton from "@/components/ui/skeleton",
import { formatDistanceToNow } from "date-fns",
import { ShieldAlert } from 'lucide-react'
import Link from "next/link",
type DisputesListProps = {
  disputes: Dispute[],
  isLoading: boolean
},

export function DisputesList({ disputes, isLoading }: DisputesListProps) {
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all"),

  const filteredDisputes = statusFilter === "all" 
    ? disputes 
    : disputes.filter(dispute => dispute.status === statusFilter),

  const getStatusBadgeVariant = (status: DisputeStatus) => {
    switch (status) {
      case "open": return "default",
      case "under_review":
        return "secondary",
      case "resolved":
        return "outline", // Changed from "success" to "outline"
      case "closed":
        return "outline",
      default:
        return "default"
    }
  },

<<<<<<< HEAD
  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="flex gap-2 mb-4">
          {["All", "Open", "Under Review", "Resolved", "Closed"].map((status) => (
            <Skeleton key={status} className="h-10 w-24" />
          ))}
        </div>
=======
        return "outline", // Changed from './success'; to "outline";

      case "closed":;
        return "outline";
      default:;
        return "default";


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx

import React, { useState } from "react";
import { Dispute, DisputeStatus } from "@/types/disputes";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {;
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow} from "@/components/ui/table";
import Skeleton from "@/components/ui/skeleton";
import { formatDistanceToNow } from "date-fns";
import { ShieldAlert } from 'lucide-react';
import Link from "next/link";
type DisputesListProps = {;
  disputes: Dispute[],;
  isLoading: boolean;
};

export function DisputesList(): any ({ disputes, isLoading }: DisputesListProps) {;
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all");

  const filteredDisputes = statusFilter === "all" ;
    ? disputes ;
    : disputes && disputes.filter(dispute => dispute && dispute.status === statusFilter);

  const getStatusBadgeVariant = (status: DisputeStatus) => {;
    switch (status) {;
  disputes: Dispute[],
  is_loading: boolean;
}
export /**
 * DisputesList - Function description
 */
function DisputesList() {
  const [status_filter, setStatusFilter] = useState < DisputeStatus | "all">("all");
  const filtered_disputes = status_filter === "all";
    ? disputes;
    : disputes.filter (dispute => dispute.status === status_filter);
  const getStatusBadgeVariant = (status: DisputeStatus) =>: any {
    switch (status) {
      case "open": return "default";
      case "under_review":;
        return "secondary";
      case "resolved":;
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
import Skeleton from "@/components/ui/skeleton",
import { formatDistanceToNow } from "date-fns",
import { ShieldAlert } from 'lucide-react'
import Link from "next/link",
type DisputesListProps = {
  disputes: Dispute[]
  isLoading: boolean
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

        return "outline", // Changed from './success'; to "outline";

      case "closed":;
        return "outline";
      default:;
        return "default";



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
        <div className="border rounded-md">
}
export function DisputesList({ disputes, isLoading }: DisputesListProps) {
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all")
  const filteredDisputes = statusFilter === "all"
    ? disputes
    : disputes.filter(dispute => dispute.status === statusFilter)
  const getStatusBadgeVariant = (status: DisputeStatus) => {
    switch (status) {
      case "open": return "default"
      case "under_review":
        return "secondary"
      case "resolved":
        return "outline", // Changed from "success" to "outline"
      case "closed":
        return "outline"
      default:
        return "default"
    }
  }
  if (isLoading) {
    return (
      <div className='space-y-4'>
        <div className='flex gap-2 mb-4'>
          {['All', 'Open', 'Under Review', 'Resolved', 'Closed'].map(status => (
            <Skeleton key={status} className='h-10 w-24' />          ))}
        </div>
        <div className='border rounded-md'>
origin/cursor/automate-test-improve-and-merge-code-2533
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Case ID</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Parties</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Status</TableHead>
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <TableHead className="text-right">Actions</TableHead>
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
<TableHead className='text-right'>Actions</TableHead>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                <TableHead className="text-right">Actions</TableHead>



<TableHead className='text-right'>Actions</TableHead>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
              </TableRow>
=======
  TableRow} from "@/components/ui/table",              </TableRow>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            </TableHeader>
            <TableBody>
              {[...Array(5)].map((_, i) => (
                <TableRow key={i}>
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-6 w-20" /></TableCell>
                  <TableCell className="text-right"><Skeleton className="h-9 w-20 ml-auto" /></TableCell>
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                </TableRow>
import React, { useState } from "react",;
import { Dispute, DisputeStatus } from "@/types/disputes",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow} from "@/components/ui/table",;
import Skeleton from "@/components/ui/skeleton",;
import { formatDistanceToNow } from "date-fns",;
import { ShieldAlert } from 'lucide-react';
import Link from "next/link",;
type DisputesListProps = {;
  disputes: Dispute[],;
  isLoading: boolean;
},;
export function DisputesList({ disputes, isLoading }: DisputesListProps) {;
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all"),;
  const filteredDisputes = statusFilter === "all";
    ? disputes;
    : disputes.filter(dispute => dispute.status === statusFilter),;
  const getStatusBadgeVariant = (status: DisputeStatus) => {;
    switch (status) {;
      case "open": return "default",;
      case "under_review":;
        return "secondary",;
      case "resolved":;
        return "outline", // Changed from "success" to "outline";
      case "closed":;
        return "outline";
      default:;
        return "default";
    }
  };
  if (isLoading) {;
    return (;
      <div className="space-y-4">;
        <div className="flex gap-2 mb-4">;
          {["All", "Open", "Under Review", "Resolved", "Closed"].map((status) => (;
            <Skeleton key={status} className="h-10 w-24" />;
          ))}
        </div>;
        <div className="border rounded-md">;
          <Table>;
            <TableHeader>;
              <TableRow>;
                <TableHead>Case ID</TableHead>;
                <TableHead>Project</TableHead>;
                <TableHead>Parties</TableHead>;
                <TableHead>Created</TableHead>;
                <TableHead>Status</TableHead>;
                <TableHead className="text-right">Actions</TableHead>;
              </TableRow>;
            </TableHeader>;
            <TableBody>;
              {[...Array(5)].map((_, i) => (;
                <TableRow key={i}>;
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>;
                  <TableCell><Skeleton className="h-4 w-40" /></TableCell>;
                  <TableCell><Skeleton className="h-4 w-32" /></TableCell>;
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>;
                  <TableCell><Skeleton className="h-6 w-20" /></TableCell>;
                  <TableCell className="text-right"><Skeleton className="h-9 w-20 ml-auto" /></TableCell>;
                </TableRow>;
              ))}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
            </TableBody>;
          </Table>;
        </div>;
      </div>;
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
    );
<<<<<<< HEAD
  }

  if (disputes.length === 0) {
    return (
=======



  }

  if (disputes && disputes.length === 0) {;
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
    return (
=======
              ))}    return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <div className='text-center py-12 border rounded-md bg-muted/20'>;
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />;
        <h3 className='text-xl font-medium'>No disputes found</h3>;
        <p className='text-muted-foreground mt-2'>          No active disputes match the selected filter    );
    )
  }

  if (disputes && disputes.length === 0) {;
    return (
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
  }

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      <div className="text-center py-12 border rounded-md bg-muted/20">
=======
  if (disputes.length === 0) {
    return (
  }

  if (disputes.length === 0) {
    return (      <div className="text-center py-12 border rounded-md bg-muted/20">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      <div className='text-center py-12 border rounded-md bg-muted/20'>;
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />;
        <h3 className='text-xl font-medium'>No disputes found</h3>;
        <p className='text-muted-foreground mt-2'>          No active disputes match the selected filter    );
  }


      <div className="text-center py-12 border rounded-md bg-muted/20">
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
        <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-xl font-medium">No disputes found</h3>
        <p className="text-muted-foreground mt-2">
          No active disputes match the selected filter
<<<<<<< HEAD
=======

<<<<<<< HEAD

<<<<<<< HEAD

<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
<TableCell>
                    <Skeleton className='h-4 w-24' />
                  </TableCell>
                  <TableCell>
                    <Skeleton className='h-4 w-40' />
                  </TableCell>
                  <TableCell>
                    <Skeleton className='h-4 w-32' />
                  </TableCell>
                  <TableCell>
                    <Skeleton className='h-4 w-24' />
                  </TableCell>
                  <TableCell>
                    <Skeleton className='h-6 w-20' />
                  </TableCell>
                  <TableCell className='text-right'>
                    <Skeleton className='h-9 w-20 ml-auto' />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
);
  }

  if (disputes.length === 0) {
    return (
<div className='text-center py-12 border rounded-md bg-muted/20'>
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />
        <h3 className='text-xl font-medium'>No disputes found</h3>
        <p className='text-muted-foreground mt-2'>
          No active disputes match the selected filter
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        </p>
      </div>
    )
  }

<<<<<<< HEAD
  return (
    <div className="space-y-4">
=======
  if (disputes && disputes.length === 0) {;
    return (
      <div className='text-center py-12 border rounded-md bg-muted/20'>;
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />;
        <h3 className='text-xl font-medium'>No disputes found</h3>;
        <p className='text-muted-foreground mt-2'>      <div className="text-center py-12 border rounded-md bg-muted/20">;
        <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />;
        <h3 className="text-xl font-medium">No disputes found</h3>;
        <p className="text-muted-foreground mt-2">;
        </p>;
      </div>;
    );
=======
        </p>
      </div>
    )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  }
<<<<<<< HEAD
    <div className='space-y-4'>
=======
=======
origin/cursor/automate-test-improve-and-merge-code-2533
        </p>
      </div>
    )
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
  return (
<div className='space-y-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
      <div className='flex gap-2 mb-4 overflow-x-auto pb-2'>
        <Button
          variant={statusFilter === 'all' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('all')}
          size='sm'
        >
          All
        </Button>
        <Button
variant={statusFilter === 'open' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('open')}
          size='sm'
        >
          Open
        </Button>
        <Button
variant={statusFilter === 'under_review' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('under_review')}
          size='sm'
        >
          Under Review
        </Button>
        <Button
variant={statusFilter === 'resolved' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('resolved')}
          size='sm'
        >
          Resolved
        </Button>
        <Button
variant={statusFilter === 'closed' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('closed')}
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
          size='sm'        >    <div className="space-y-4">
    <div className="space-y-4">
<<<<<<< HEAD



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        </p>
      </div>
    )

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

  if (disputes && disputes.length === 0) {;
    return (
      <div className='text-center py-12 border rounded-md bg-muted/20'>;
        <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />;
        <h3 className='text-xl font-medium'>No disputes found</h3>;
        <p className='text-muted-foreground mt-2'>      <div className="text-center py-12 border rounded-md bg-muted/20">;
        <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />;
        <h3 className="text-xl font-medium">No disputes found</h3>;
        <p className="text-muted-foreground mt-2">;
        </p>;
      </div>;
    );
  }


          size="sm";
        >;
          All;
        </Button>;

        <Button;
          variant={status_filter === "open" ? "default" : "outline"}
          on_click={() => setStatusFilter ("open")}

          size="sm";
          size="sm";
        >;
          Open;
        </Button>;

        <Button;
          variant={status_filter === "under_review" ? "default" : "outline"}
          on_click={() => setStatusFilter ("under_review")}

          size="sm";
          size="sm";
        >;
          Under Review;
        </Button>;

        <Button;
          variant={status_filter === "resolved" ? "default" : "outline"}
          on_click={() => setStatusFilter ("resolved")}

          size="sm";
          size="sm";
        >;
          Resolved;
        </Button>;

    <div className="space-y-4">




>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
=======
    <div className="space-y-4">      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <Button
          variant={statusFilter === "all" ? "default" : "outline"}
          onClick={() => setStatusFilter("all")}
          size="sm"
        >
          All
        </Button>
        <Button
          variant={statusFilter === "open" ? "default" : "outline"}
          onClick={() => setStatusFilter("open")}
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          size="sm"
        >
          Open
        </Button>
        <Button
          variant={statusFilter === "under_review" ? "default" : "outline"}
          onClick={() => setStatusFilter("under_review")}
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          size="sm"
        >
          Under Review
        </Button>
        <Button
          variant={statusFilter === "resolved" ? "default" : "outline"}
          onClick={() => setStatusFilter("resolved")}
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          size="sm"
        >
          Resolved
        </Button>
        <Button
          variant={statusFilter === "closed" ? "default" : "outline"}
          onClick={() => setStatusFilter("closed")}
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          size="sm"
          size='sm'
origin/cursor/automate-test-improve-and-merge-code-2533
        >
          Closed
        </Button>
<<<<<<< HEAD
      </div>

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

      <div className="border rounded-md overflow-hidden">
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======

<div className='border rounded-md overflow-hidden'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======





<div className='border rounded-md overflow-hidden'>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Case ID</TableHead>
              <TableHead>Project</TableHead>
              <TableHead>Parties</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Status</TableHead>
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<<<<<<< HEAD
=======


=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
              <TableHead className="text-right">Actions</TableHead>
<TableHead className='text-right'>Actions</TableHead>
origin/cursor/automate-test-improve-and-merge-code-2533
            </TableRow>
          </TableHeader>
          <TableBody>

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
            {filteredDisputes.map((dispute) => (
              <TableRow key={dispute.id}>
                <TableCell className='font-mono text-xs'>
                  {dispute.id.split('-')[0]}
                </TableCell>
                <TableCell>

<<<<<<< HEAD

                  {dispute.project?.title || 'Unknown Project'}


<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
                </TableCell>
=======
      </div>                </TableCell>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                <TableCell>
                  <div className='flex flex-col text-sm'>
                    <span>
                      Client:{' '}
                      {dispute.client_profile?.display_name |'Unknown Client'}
                    </span>
                    <span>
                      Talent:{' '}
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
                      {dispute.talent_profile?.display_name |'Unknown Talent'}                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  {formatDistanceToNow(new Date(dispute.created_at), {

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDisputes.map((dispute) => (
              <TableRow key={dispute.id}>
                <TableCell className="font-mono text-xs">
                  {dispute.id.split('-')[0]}
                </TableCell>
                <TableCell>
<<<<<<< HEAD
=======

                    addSuffix: true,
                  })}                      Talent: {dispute.talent_profile?.display_name || "Unknown Talent"}

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                  {dispute.project?.title || "Unknown Project"}
                </TableCell>
                <TableCell>
                  <div className="flex flex-col text-sm">
                    <span>
                      Client: {dispute.client_profile?.display_name || "Unknown Client"}
                    </span>
                    <span>
                      Talent: {dispute.talent_profile?.display_name || "Unknown Talent"}
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======



=======
                      {dispute.talent_profile?.display_name || 'Unknown Talent'}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                      {dispute.talent_profile?.display_name || 'Unknown Talent'}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
                    </span>
                  </div>
                </TableCell>
                <TableCell>
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                  {formatDistanceToNow(new Date(dispute.created_at), { addSuffix: true })}
                </TableCell>;
                <TableCell>;
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>;
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

=======

          size="sm";
          size="sm";
        >;
          Closed;
        </Button>;
      </div>;

      <div className='border rounded-md overflow-hidden'>        <Table>      <div className="border rounded-md overflow-hidden">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Case ID</TableHead>;
              <TableHead>Project</TableHead>;
              <TableHead>Parties</TableHead>;
              <TableHead>Created</TableHead>;
              <TableHead>Status</TableHead>;
              <TableHead className='text-right'>Actions</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {filteredDisputes && filteredDisputes.map(dispute => (            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {filteredDisputes && filteredDisputes.map((dispute) => (;
              <TableRow key={dispute && dispute.id}>;
                <TableCell className='font-mono text-xs'>;
                  {dispute && dispute.id.split('-')[0]}

                  {formatDistanceToNow(new Date(dispute.created_at), { addSuffix: true })}

                </TableCell>;
                <TableCell>;
                  {dispute && dispute.project?.title || 'Unknown Project'}
                </TableCell>;
                <TableCell>;
                  <div className='flex flex-col text-sm'>;
                    <span>;
                      Client:{' '}
                      {dispute && dispute.client_profile?.display_name || 'Unknown Client'}

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
                    </span>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                    <span>;
                      Talent:{' '}
                      {dispute && dispute.talent_profile?.display_name || 'Unknown Talent'}                    </span>;
                  </div>;
                </TableCell>;
                <TableCell>;
                  {formatDistanceToNow(new Date(dispute && dispute.created_at), {;
                    addSuffix: true,;
                  })}                      Talent: {dispute && dispute.talent_profile?.display_name || "Unknown Talent"}
        <Button;
          variant={status_filter === "closed" ? "default" : "outline"}
          on_click={() => setStatusFilter ("closed")}
          size="sm";
          size="sm";
        >;
          Closed;
        </Button>;
      </div>;
      <div className='border rounded - md overflow - hidden'>        <Table>      <div className="border rounded - md overflow-hidden">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead > Case ID</TableHead>;
              <TableHead > Project</TableHead>;
              <TableHead > Parties</TableHead>;
              <TableHead > Created</TableHead>;
              <TableHead > Status</TableHead>;
              <TableHead className='text - right'>Actions</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {filtered_disputes.map (dispute => (            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {filtered_disputes.map ((dispute) => (
              <TableRow key={dispute.id}>;
                <TableCell className='font - mono text - xs'>;
                  {dispute.id.split ('-')[0]}
                </TableCell>;
                <TableCell>;
                  {dispute.project?.title || 'Unknown Project'}
                </TableCell>;
                <TableCell>;
                  <div className='flex flex - col text - sm'>;
                    <span>;
                      Client:{' '}
                      {dispute.client_profile?.display_name || 'Unknown Client'}
                    </span>;
                    <span>;
                      Talent:{' '}
                      {dispute.talent_profile?.display_name || 'Unknown Talent'}                    </span>;
                  </div>;
                </TableCell>;
                <TableCell>;
                  {formatDistanceToNow (new Date (dispute.created_at), {
                    add_suffix: true,
                  })}                      Talent: {dispute.talent_profile?.display_name || "Unknown Talent"}
                    </span>;
                  </div>;
                </TableCell>;
                <TableCell>;

                  {formatDistanceToNow(new Date(dispute.created_at), { addSuffix: true })}
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                    {dispute.status.replace('_ ')}
                  </Badge>
                </TableCell>

<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
                <TableCell className="text-right">
                  <Button asChild size="sm">
                    <Link href={`/dashboard/disputes/${dispute.id}`}>View Details</Link>
{formatDistanceToNow(new Date(dispute.created_at), {
                    addSuffix: true,
                  })}
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>
                    {dispute.status.replace('_', ' ')}
                  </Badge>
                </TableCell>
                <TableCell className='text-right'>
                  <Button asChild size='sm'>
                    <Link href={`/dashboard/disputes/${dispute.id}`}>
                      View Details
                    </Link>
origin/cursor/automate-test-improve-and-merge-code-2533
                  </Button>
                </TableCell>
              </TableRow>
            ))}
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          </TableBody>;
        </Table>;
      </div>;
    </div>;
  );
}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx

                  {formatDistanceToNow (new Date (dispute.created_at), {
                    add_suffix: true,
                  })}
                </TableCell>;
                <TableCell>;
                  <Badge variant={getStatusBadgeVariant (dispute.status)}>;
                    {dispute.status.replace ('_', ' ')}
                  </Badge>;
                </TableCell>;
                <TableCell className='text - right'>;
                  <Button as_child size='sm'>;
                    <Link href={`/dashboard / disputes/${dispute.id}`}>;
                      View Details;
                    </Link>                  </Button>                </TableCell>;
                <TableCell>;
                  <Badge variant={getStatusBadgeVariant (dispute.status)}>;
                    {dispute.status.replace ('_ ')}
                  </Badge>;
                </TableCell>;
                <TableCell className="text - right">;
                  <Button as_child size="sm">;
                    <Link href={`/dashboard / disputes/${dispute.id}`}>View Details</Link>;
                  </Button>;
                </TableCell>;
              </TableRow>))}
          </TableBody>;
        </Table>;
      </div>;
    </div>);

<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
// Check condition
if ( {") {
  $2
}
  return (<div className="space-y-4" > <div className="flex gap - 2 mb-4" > {";
  ["All", "Open", "Under Review",  "Resolved", "Closed" ].map ( (status) => (<Skeleton key= {
  status ";
}className="h - 10 w-24" /> ";
}</div> <div className="border rounded-md" > <Table> <TableHeader> <TableRow> <TableHead > Case ID</TableHead> <TableHead > Project</TableHead> <TableHead > Parties</TableHead> <TableHead > Created</TableHead> <TableHead > Status</TableHead> <TableHead className="text-right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  [...Array (5) ].map ( (, i) => (<TableRow key= {

<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
  addSuffix: true 
}) 
}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) ) ;
}</TableBody> </Table> </div> </div>) ;
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
=======
}"};
}
}


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx

          </TableBody>;
        </Table>;
      </div>;
    </div>;
  );
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx


  i ";
}> <TableCell><Skeleton className="h - 4 w - 24" /></TableCell> <TableCell><Skeleton className="h - 4 w - 40" /></TableCell> <TableCell><Skeleton className="h - 4 w - 32" /></TableCell> <TableCell><Skeleton className="h - 4 w - 24" /></TableCell> <TableCell><Skeleton className="h - 6 w - 20" /></TableCell> <TableCell className="text - right" ><Skeleton className="h - 9 w - 20 ml - auto" /></TableCell> </TableRow>) );
}</TableBody> </Table> </div> </div>) ";
}> All </Button> <Button > Open </Button> <Button > Under Review </Button> <Button > Resolved </Button> <Button > Closed </Button> </div> <div className="border rounded - md overflow - hidden" > <Table> <TableHeader> <TableRow> <TableHead > Case ID</TableHead> <TableHead > Project</TableHead> <TableHead > Parties</TableHead> <TableHead > Created</TableHead> <TableHead > Status</TableHead> <TableHead className="text - right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  filtered_disputes.map ( (dispute) => (<TableRow key= {
  dispute.id ";
}> </TableCell> <TableCell> <div className="flex flex - col text - sm" > <span> </span> </div> </TableCell> <TableCell> {
  formatDistanceToNow (new Date (dispute.created at), {
  add_suffix: true;
});
}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) );
}</TableBody> </Table> </div> </div>);
}"}
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
if (isLoading) {";
  return (<div className="space-y-4" > <div className="flex gap-2 mb-4" > {";
  ["All", "Open", "Under Review",  "Resolved", "Closed" ].map ( (status) => (<Skeleton key= {;
  status ";
}className="h-10 w-24" /> ";
}</div> <div className="border rounded-md" > <Table> <TableHeader> <TableRow> <TableHead>Case ID</TableHead> <TableHead>Project</TableHead> <TableHead>Parties</TableHead> <TableHead>Created</TableHead> <TableHead>Status</TableHead> <TableHead className="text-right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {;
  [...Array (5) ].map ( (, i) => (<TableRow key= {;
  i ";
}> <TableCell><Skeleton className="h-4 w-24" /></TableCell> <TableCell><Skeleton className="h-4 w-40" /></TableCell> <TableCell><Skeleton className="h-4 w-32" /></TableCell> <TableCell><Skeleton className="h-4 w-24" /></TableCell> <TableCell><Skeleton className="h-6 w-20" /></TableCell> <TableCell className="text-right" ><Skeleton className="h-9 w-20 ml-auto" /></TableCell> </TableRow>) ) ;
}</TableBody> </Table> </div> </div>) ";
}> All </Button> <Button > Open </Button> <Button > Under Review </Button> <Button > Resolved </Button> <Button > Closed </Button> </div> <div className="border rounded-md overflow-hidden" > <Table> <TableHeader> <TableRow> <TableHead>Case ID</TableHead> <TableHead>Project</TableHead> <TableHead>Parties</TableHead> <TableHead>Created</TableHead> <TableHead>Status</TableHead> <TableHead className="text-right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {;
  filteredDisputes.map ( (dispute) => (<TableRow key= {;
  dispute.id ";
}> </TableCell> <TableCell> <div className="flex flex-col text-sm" > <span> </span> </div> </TableCell> <TableCell> {;
  formatDistanceToNow (new Date (dispute.created at), {;
  addSuffix: true ;
}) ;
}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) ) ;
}</TableBody> </Table> </div> </div>) ;
}"
<<<<<<< HEAD:src/components/disputes/DisputesList.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/disputes/DisputesList.tsx
