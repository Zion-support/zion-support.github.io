 const getStatusBadge = (status: string) => {
  switch (status) {
  case 'in escrow': return (<Badge variant="warning" className="flex items-center gap-1" > <Clock className="h-3 w-3" /> In Escrow </Badge>);
case 'released': case 'completed': return (<Badge variant="success" className="flex items-center gap-1" > <CheckCircle2 className="h-3 w-3" /> Released </Badge>);
case 'disputed': return (<Badge variant="destructive" className="flex items-center gap-1" > <ShieldAlert className="h-3 w-3" /> Disputed </Badge>);
default: <Table> <TableHeader> <TableRow> <TableHead>Order #</TableHead> <TableHead>Date</TableHead> <TableHead>Total</TableHead> <TableHead>Status</TableHead> <TableHead>View</TableHead> </TableRow> </TableHeader> <TableBody> </TableRow>) ) 
}</TableBody> </Table>) : orders.length === 0 ? (<EmptyState />) : (<Table> <TableHeader> <TableRow> <TableHead>Order #</TableHead> <TableHead>Date</TableHead> <TableHead>Total</TableHead> <TableHead>Status</TableHead> <TableHead>View</TableHead> </TableRow> </TableHeader> <TableBody> {
  orders.map ( (order) => (<TableRow key= {
  order.orderId 
}> > View </Link> </TableCell> </TableRow>) ) 
}</TableBody> </Table>) 
}</div>) 
}