/* eslint-disable */
 import {;
  Table;
TableBody;
TableCell;
TableHead;
TableHeader;
type DisputesListProps = {;
  disputes: Dispute[];
isLoading: boolean ;
};
export function DisputesList ({;
  disputes, isLoading ;
}: DisputesListProps) {;
  const filteredDisputes = statusFilter === "all" const getStatusBadgeVariant = (status: DisputeStatus) => {;
  switch (status) {;
}"
};""
if (isLoading) {";""
  return (<div className="space-y-4" > <div className="flex gap-2 mb-4" > {";""
  ["All", "Open", "Under Review",  "Resolved", "Closed" ].map ( (status) => (<Skeleton key= {;""
  status ";""
}className="h-10 w-24" /> ";""
}</div> <div className="border rounded-md" > <Table> <TableHeader> <TableRow> <TableHead>Case ID</TableHead> <TableHead>Project</TableHead> <TableHead>Parties</TableHead> <TableHead>Created</TableHead> <TableHead>Status</TableHead> <TableHead className="text-right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {;"
  [...Array (5) ].map ( (, i) => (<TableRow key= {;""
  i ";""
}> <TableCell><Skeleton className="h-4 w-24" /></TableCell> <TableCell><Skeleton className="h-4 w-40" /></TableCell> <TableCell><Skeleton className="h-4 w-32" /></TableCell> <TableCell><Skeleton className="h-4 w-24" /></TableCell> <TableCell><Skeleton className="h-6 w-20" /></TableCell> <TableCell className="text-right" ><Skeleton className="h-9 w-20 ml-auto" /></TableCell> </TableRow>) ) ;""
}</TableBody> </Table> </div> </div>) ";""
}> All </Button> <Button > Open </Button> <Button > Under Review </Button> <Button > Resolved </Button> <Button > Closed </Button> </div> <div className="border rounded-md overflow-hidden" > <Table> <TableHeader> <TableRow> <TableHead>Case ID</TableHead> <TableHead>Project</TableHead> <TableHead>Parties</TableHead> <TableHead>Created</TableHead> <TableHead>Status</TableHead> <TableHead className="text-right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {;"
  filteredDisputes.map ( (dispute) => (<TableRow key= {;""
  dispute.id ";""
}> </TableCell> <TableCell> <div className="flex flex-col text-sm" > <span> </span> </div> </TableCell> <TableCell> {;
  formatDistanceToNow (new Date (dispute.created at), {;
  addSuffix: true ;
}) ;
}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) ) ;"
}</TableBody> </Table> </div> </div>) ;""
}"""