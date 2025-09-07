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
<<<<<<< HEAD
  //In a real app, this would make an API call to remove the member toast ({;
};
  //In a real app, this would make an API call to resend the invitation toast ({;"
  ;""
};";""
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 const handleRemoveMember = (memberId: number) => {;
  //In a real app, this would make an API call to remove the member toast ({;
};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 const handleResendInvite = (memberEmail: string) => {;
  //In a real app, this would make an API call to resend the invitation toast ({;"
  ;""
};";""
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 <DialogTrigger asChild> <Button className=" gap-2"> <UserPlus className=" h-4 w-4"/> Add Team Member </Button> </DialogTrigger> <DialogContent> <DialogHeader> <DialogTitle>Add Team Member</DialogTitle> <DialogDescription> Send an invitation to join your workspace. They'll receive an email with instructions. </DialogDescription> </DialogHeader> <div className=" grid gap-4 py-4"> <div className=" grid grid-cols-4 items-center gap-4"> <Label htmlFor=" email"className=" text-right"> Email </Label> <Input /> </div> <div className=" grid grid-cols-4 items-center gap-4"> <Label htmlFor=" role"className=" text-right"> Role </Label> <select id=" role"className=" col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"> <option value=" admin">Admin</option> <option value=" recruiter">Recruiter</option> <option value=" manager">Manager</option> <option value=" viewer">Viewer</option> </select> </div> </div> <DialogFooter> Cancel </Button> <Button onClick={;""
>>>>>>> origin/resolved-merge-conflicts
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