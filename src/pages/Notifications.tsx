interface NotificationProps {
  type: 'message' | 'order' | 'default';
}


export function NotificationBadge({ type }: NotificationProps) {
  switch (type) {
    case 'message':
      return <Badge className="bg-blue-500">Message</Badge>;
    case 'order':
      return <Badge className="bg-orange-500">Order</Badge>;
    default:
      return <Badge variant="outline">Notification</Badge>;
  }
}

export default function NotificationsPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Notifications</h1>
      <p className="text-muted-foreground">Your notifications will appear here.</p>
    </div>
  );
}
;
