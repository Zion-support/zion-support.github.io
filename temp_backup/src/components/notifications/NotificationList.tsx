/* eslint-disable */
 {;
  error ? (<div className="p-8 text-center text-amber-500" > <p> {;""
  error ";""
}</p> <Button > Try Again </Button> </div>) : loading ? (<div className="p-4 space-y-4" > <Skeleton className="h-12 w-full bg-zion-blue-dark/50" /> <Skeleton className="h-12 w-full bg-zion-blue-dark/50" /> <Skeleton className="h-12 w-full bg-zion-blue-dark/50" /> </div>) : notifications.length === 0 ? (<div className="p-8" > <EmptyState /> </div>) : (notifications.map ( (notification) => (<NotificationItem key= {;
  notification.id ;
}notification= {;
  notification ;
}onMarkAsRead= {;
  onMarkAsRead ;
}onDismiss= {;
  onDismiss ;
}/>) ) ) ;
}</ScrollArea>) ;"
};""
"""