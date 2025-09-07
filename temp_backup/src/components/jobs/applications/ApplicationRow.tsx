/* eslint-disable */
 interface ApplicationRowProps {;
  application: JobApplication;
processingId: string | null;
onViewApplication: (applicationId: string) => Promise<void>;
onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>;
onViewScore: (application: JobApplication) => void ;
}export function ApplicationRow ({;
  application;
processingId;
onViewApplication;
onStatusChange;
onViewScore ;
}: ApplicationRowProps) {;
  application.id ;
}> <TableCell> />) : (<User className="h-5 w-5 text-gray-400" />) ;"
}</AvatarPrimitive> <div> </div> </div> </div> </TableCell> <TableCell> </div> </TableCell> <TableCell> <StatusBadge status= {;""
  application.status ";""
}/> </TableCell> <TableCell> <Button </Button>) : (<span className="text-muted-foreground text-sm" >No resume</span>) ";""
}</TableCell> <TableCell className="text-right" > <ApplicationActions application= {;
  application ;
}processingId= {;
  processingId ;
}onViewApplication= {;
  onViewApplication ;
}onStatusChange= {;
  onStatusChange ;"
}/> </TableCell> </TableRow>) ;""
}"""