 import React from 'react';
//Use the centralized icon wrapper to avoid missing icons export const getTypeIcon = (type: NotificationType) => {
  switch (type) {
  case 'message': 
}
};
interface NotificationItemProps {
  notification: Notification;
onMarkAsRead: (id: string) => Promise<void>;
onDismiss: (id: string) => Promise<void> 
}export const NotificationItem: React.FC<NotificationItemProps> = ({
  notification;
onMarkAsRead;
onDismiss 
}) => {
  const navigate = useNavigate ();
if (!notification.read) {
  ) 
}> <div className="flex items-start gap-2"> <div className="text-xl"> {
  getTypeIcon (notification.type) 
}</div> <div className="flex-1"> <div className="flex justify-between items-center mb-1"> </p> {
  notification.action url && notification.action text && (<Button variant="link" size="sm" className="text-zion-cyan p-0 h-auto" onClick= {
  handleClick 
}> {
  notification.action text 
}<ChevronRight className="h-3 w-3 ml-1" /> </Button>) 
}</div> </div> </div> ghost"size=" icon"className="h-6 w-6"> <Check className="h-3.5 w-3.5 text-green-400"/> </Button> </TooltipTrigger> <TooltipContent> <p>Mark as read</p> </TooltipContent> </Tooltip> </TooltipProvider> <TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button variant=" ghost"size=" icon"className="h-6 w-6"> <Trash2 className="h-3.5 w-3.5 text-red-400" /> </Button> </TooltipTrigger> <TooltipContent> <p>Dismiss</p> </TooltipContent> </Tooltip> </TooltipProvider> </div> </div>) 
};
