/* eslint-disable */
 import {;
  Dialog;
DialogContent;
DialogHeader;
DialogTitle;
interface RaiseDisputeButtonProps {;
  projectId: string;
milestoneId?: string;
return (<> <Button variant= {;
  variant ;
}size= {;
  size ;
}className= {;
  className ;
}onClick={;
  () => setIsDialogOpen (true) ;
}> <ShieldAlert className="h-4 w-4 mr-2" /> Raise Dispute </Button> <DialogHeader> <DialogTitle>Raise a Dispute</DialogTitle> <DialogDescription> Please provide details about the issue you're experiencing with this project. </DialogDescription> </DialogHeader> <DisputeForm projectId= {;
  projectId ;
}milestoneId= {;
  milestoneId ;
}onDisputeCreated= {;
  handleDisputeCreated ;
}onCancel= {;
  () => setIsDialogOpen (false) ;'"
}/> </DialogContent> </Dialog> </>) ;'"'"
}'"'"'"