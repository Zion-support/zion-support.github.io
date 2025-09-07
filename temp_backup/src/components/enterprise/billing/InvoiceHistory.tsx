/* eslint-disable */
 import {;
  Table;
TableBody;
TableCell;
TableHead;
TableHeader;
export function InvoiceHistory () {;
  //Mock invoice data const invoices = [ {;
  id: "INV-1234";";""
date: "May 1,  2025";";""
amount: "$1, 999.00";";""
status: "paid";";""
period: "May 2025" ;"
};""
{";""
  id: "INV-1233";";""
date: "Apr 1,  2025";";""
amount: "$1, 999.00";";""
status: "paid";";""
period: "Apr 2025" ;"
};""
{";""
  id: "INV-1232";";""
date: "Mar 1,  2025";";""
amount: "$1, 999.00";";""
status: "paid";";""
period: "Mar 2025" ;"
};""
{";""
  id: "INV-1231";";""
date: "Feb 1,  2025";";""
amount: "$1, 999.00";";""
status: "paid";";""
period: "Feb 2025" ;"
};""
{";""
  id: "INV-1230";";""
date: "Jan 1,  2025";";""
amount: "$1, 999.00";";""
status: "paid";";""
period: "Jan 2025" ;
};"
{;""
  //In a real app, this would trigger a download of the invoice PDF toast ({";""
  default: return <Badge variant="outline" > {;
  status ;
}</Badge>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 ;"
>>>>>>> origin/resolved-merge-conflicts
}""
};";""
<Input type="search" placeholder="Search invoices..." className="w-[200px] md:w-[300px] pl-9" /> </div> </div> <div className="rounded-md border" > <Table> <TableHeader> <TableRow> <TableHead>Invoice Number</TableHead> <TableHead>Date</TableHead> <TableHead>Billing Period</TableHead> <TableHead>Amount</TableHead> <TableHead>Status</TableHead> <TableHead className="text-right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {;"
  invoices.map ( (invoice) => (<TableRow key= {;""
  invoice.id ";""
}> > <Download className="h-3.5 w-3.5" /> PDF </Button> <Button variant="outline" size="sm" className="h-8 gap-1" > <FileText className="h-3.5 w-3.5" /> View </Button> </div> </TableCell> </TableRow>) ) ";""
}</TableBody> </Table> </div> <div className="flex items-center justify-between" > <Button variant="outline" size="sm" > Previous </Button> <div className="text-sm text-muted-foreground" > Showing 1 - 6 of 12 invoices </div> <Button variant="outline" size="sm" > Next </Button> </div> </div>) ;""
}"""