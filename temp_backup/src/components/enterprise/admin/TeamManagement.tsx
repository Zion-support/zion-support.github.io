/* eslint-disable */
 import {;
  Table;
TableBody;
TableCell;
TableHead;
TableHeader;
import {;
  Dialog;
DialogContent;
DialogDescription;
DialogFooter;
DialogHeader;
DialogTitle;
//In a real app, this would make an API call to add the member if (!newMemberEmail) {;
  toast ({;
  setNewMemberEmail ("");
setIsAddingMember (false);
};
  //In a real app, this would make an API call to remove the member toast ({;
};
  //In a real app, this would make an API call to resend the invitation toast ({;"
  ;""
};";""
  handleAddMember ";""
}>Send Invitation</Button> </DialogFooter> </DialogContent> </Dialog> </div> <div className=" rounded-md border"> <Table> <TableHeader> <TableRow> <TableHead>Name</TableHead> <TableHead>Role</TableHead> <TableHead>Status</TableHead> <TableHead>Last Active</TableHead> <TableHead className=" text-right">Actions</TableHead> </TableRow> </TableHeader> <TableBody> {;"
  teamMembers.map ( (member) => (<TableRow key= {;""
  member.id ";""
}> <TableCell> .join ("") ;
}</span> </div> <div> </div> </div> </div> </TableCell> <TableCell> {;
  member.role ;
}</TableCell> <TableCell> <Badge > {;
  member.status ;"
}</Badge> </TableCell> <TableCell> {;""
  member.lastActive ";""
}</TableCell> <TableCell className="text-right"> onClick={;""
  () => handleResendInvite (member.email) ";""
}> <Mail className="h-4 w-4 mr-1"/> Resend </Button> className="text-destructive hover:text-destructive"onClick={;""
  () => handleRemoveMember (member.id) ";""
}> <Trash className="h-4 w-4" /> </Button>) ;
}</div> </TableCell> </TableRow>) ) ;'"
}</TableBody> </Table> </div> </div>) ;'"'"
}'"'"'"