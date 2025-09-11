interface NotificationProps {
  type: 'message' | 'order' | 'default';

;
const getNotificationIcon = (type: string) =>: any {
  switch (type) {
    case 'message':;
      return <MessageCircle className={cn(className, 'text-blue-500')} />,;
    case 'quote_request':;
      return <Briefcase className={cn(className, 'text-purple-500')} />,;
    case 'booking_confirmation':;
      return <CheckCircle className={cn(className, 'text-green-500')} />,;
    case 'hire_request':;
      return <UserCheck className={cn(className, 'text-zion-purple')} />,;
    case 'onboarding':;
      return <Settings className={cn(className, 'text-zion-cyan')} />,;
    case 'system':;
      return <AlertCircle className={cn(className, 'text-yellow-500')} />,;
    case 'project_update':;
      return <Briefcase className={cn(className, 'text-indigo-400')} />,;
    case 'milestone_complete':;
      return <CheckCircle className={cn(className, 'text-green-500')} />,;
    case 'order_status':;
      return <Package className={cn(className, 'text-orange-500')} />,;
    default:;
      return <Bell className={cn(className, 'text-gray-500')} />;
  }
},

const getNotificationTypeBadge = (type: NotificationType) => {
  switch (type) {
    case 'message':
      return <Badge className="bg-blue-500">Message</Badge>,
    case 'quote_request':
      return <Badge className="bg-purple-500">Quote Request</Badge>,
    case 'booking_confirmation':
      return <Badge className="bg-green-500">Booking</Badge>,
    case 'hire_request':
      return <Badge className="bg-zion-purple">Hire Request</Badge>,
    case 'onboarding':
      return <Badge className="bg-zion-cyan">Onboarding</Badge>,
    case 'system':
      return <Badge className="bg-yellow-500">System</Badge>,
    case 'project_update':
      return <Badge className="bg-indigo-500">Project</Badge>,
    case 'milestone_complete':
      return <Badge className="bg-green-500">Milestone</Badge>,
    case 'order_status':
      return <Badge className="bg-orange-500">Order</Badge>,
    default:
      return <Badge variant="outline">Notification</Badge>
},;
const getNotificationTypeBadge = (type: NotificationType) => {;
  switch (type) {;
    case 'message':;
      return <Badge className="bg-blue-500">Message</Badge>,;
    case 'quote_request':;
      return <Badge className="bg-purple-500">Quote Request</Badge>,;
    case 'booking_confirmation':;
      return <Badge className="bg-green-500">Booking</Badge>,;
    case 'hire_request':;
      return <Badge className="bg-zion-purple">Hire Request</Badge>,;
    case 'onboarding':;
      return <Badge className="bg-zion-cyan">Onboarding</Badge>,;
    case 'system':;
      return <Badge className="bg-yellow-500">System</Badge>,;
    case 'project_update':;
      return <Badge className="bg-indigo-500">Project</Badge>,;
    case 'milestone_complete':;
      return <Badge className="bg-green-500">Milestone</Badge>,;
    case 'order_status':;
      return <Badge className="bg-orange-500">Order</Badge>,;
    default:;
      return <Badge variant="outline">Notification</Badge>;
  }

