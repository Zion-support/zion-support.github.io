/* eslint-disable */
import React from 'react';'
//Use the centralized icon wrapper to avoid missing icons export const getTypeIcon = (type: NotificationType) => {;''
  switch (type) {';''
  case 'message': ;
}
};
interface NotificationItemProps {;
  notification: Notification;
onMarkAsRead: (id: string) => Promise<void>;
onDismiss: (id: string) => Promise<void> ;
}export const NotificationItem: React.FC<NotificationItemProps> = ({;
  notification;
onMarkAsRead;
onDismiss ;
}) => {;'
  const router = useRouter (), //Changed from useNavigate to useRouter if (!notification.read) {;''
  addSuffix: true ';''
}) : 'Just now' ;
}</p> {;
  notification.action url && notification.action text && (<Button variant='link' size='sm' className='text-zion-cyan p-0 h-auto' onClick={;'
  handleClick ;''
}> </Button>) ';''
}</div> </div> </div> h-3.5 w-3.5 text-green-400'/> </Button> </TooltipTrigger> <TooltipContent> <p>Mark as read</p> </TooltipContent> </Tooltip> </TooltipProvider> <TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button > <Trash2 className=' h-3.5 w-3.5 text-red-400' /> </Button> </TooltipTrigger> <TooltipContent> <p>Dismiss</p> </TooltipContent> </Tooltip> </TooltipProvider> </div> </div>) ;''
};''''
''''''