Table;

import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,;
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

import React from "react";
import {
  Table;
origin/cursor/automate-test-improve-and-merge-code-2533
  TableBody;
  TableCell;
  TableHead;
  TableHeader;

  Table
  TableBody
  TableCell
  TableHead
  TableHeader
  TableRow} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Search } from 'lucide-react'import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"

import React from "react";
import {

import React from "react",
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,


  TableRow} from "@/components/ui/table",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Download, FileText, Search } from 'lucide-react'


import { Input } from "@/components/ui/input",
import { toast } from "@/hooks/use-toast",



export function InvoiceHistory() {
  // Mock invoice data
}
  );



}
;

  );

};";
<Input type="search" placeholder="Search invoices..." className="w-[200px] md:w-[300px] pl-9" /> </div> </div> <div className="rounded-md border" > <Table> <TableHeader> <TableRow> <TableHead>Invoice Number</TableHead> <TableHead>Date</TableHead> <TableHead>Billing Period</TableHead> <TableHead>Amount</TableHead> <TableHead>Status</TableHead> <TableHead className="text-right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {;
  invoices.map ( (invoice) => (<TableRow key= {;
  invoice.id ";
}> > <Download className="h-3.5 w-3.5" /> PDF </Button> <Button variant="outline" size="sm" className="h-8 gap-1" > <FileText className="h-3.5 w-3.5" /> View </Button> </div> </TableCell> </TableRow>) ) ";
}</TableBody> </Table> </div> <div className="flex items-center justify-between" > <Button variant="outline" size="sm" > Previous </Button> <div className="text-sm text-muted-foreground" > Showing 1 - 6 of 12 invoices </div> <Button variant="outline" size="sm" > Next </Button> </div> </div>) ;
}"
  )
}
origin/cursor/automate-test-improve-and-merge-code-2533
