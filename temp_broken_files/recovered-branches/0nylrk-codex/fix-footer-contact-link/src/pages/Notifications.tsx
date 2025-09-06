 
}
};
const getNotificationTypeBadge = (type: NotificationType) => {
  switch (type) {
  case 'message': 
}
};
const NotificationCard: React.FC< {
  notification: {
  id: string;
title: string;
message: string;
type: NotificationType;
read: boolean;
created at: string;
action url?: string;
action text?: string 
};
onMarkAsRead: (id: string) => Promise<void>;
onDismiss: (id: string) => Promise<void> 
}> = ({
  notification, onMarkAsRead, onDismiss 
}) => {
  const navigate = useNavigate ();
if (!notification.read) {
  ) 
}</div> </div> onClick= {
  () => onMarkAsRead (notification.id) 
}> <Check className="h-4 w-4 text-green-400" /> <span className="sr-only" >Mark as read</span> </Button>) 
}<Button > <Trash2 className="h-4 w-4 text-red-400" /> <span className="sr-only" >Dismiss</span> </Button> </div> </div> {
  notification.action url && notification.action text && (<Button variant="outline" size="sm" className="mt-1 text-zion-cyan border-zion-cyan hover:bg-zion-cyan hover:text-black" onClick= {
  handleAction 
}> </Button>) 
}</div> </div> </div>) 
};
return (<> <SEO title="Notifications | Zion AI Marketplace" description="View and manage your notifications on the Zion AI Marketplace." /> <AppHeader /> <main className="container mx-auto px-4 py-8 min-h-screen" > <div className="flex justify-between items-center mb-6" > <div>) 
}</h1> <p className="text-muted-foreground" >Stay updated with the latest activities and reminders</p> </div> onClick= {
  () => markAllAsRead () 
}> <Check className="mr-2 h-4 w-4" /> Mark all as read </Button>) 
}</div> </div>) : filteredNotifications.length === 0 ? (<div className="text-center py-12 bg-muted rounded-lg" > <Bell className="mx-auto h-12 w-12 text-muted-foreground mb-3 opacity-30" /> <h3 className="text-xl font-medium" >No notifications found</h3> <p className="text-muted-foreground mt-1" > {
  filter === 'all' ? "You don't have any notifications yet" : `You don't have any $ {
  filter 
}notifications` 
}</p> </div>) : (<div> {
  filteredNotifications.map (notification => (<NotificationCard key= {
  notification.id 
}notification= {
  notification 
}onMarkAsRead= {
  markAsRead 
}onDismiss= {
  dismissNotification 
}/>) ) 
}</div>) 
}</TabsContent> </Tabs> </div> </main> <Footer /> </>) 
}