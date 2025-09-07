/* eslint-disable */
 interface MobileHeaderProps {;
  title: string;
showBack?: boolean;
showNotifications?: boolean;
showSettings?: boolean;
className?: string;
onNotificationsClick?: () => void;
onSettingsClick?: () => void ;
}export function MobileHeader ({;
  title;
showBack = false;
showNotifications = false;
showSettings = false;
className;
onNotificationsClick;
onSettingsClick ;
}: MobileHeaderProps) {;
  const router = useRouter ();
return (<header className= {;
  cn ("sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border";""
className) ";""
}> <div className="flex items-center justify-between h-14 px-4" > <div className="flex items-center" > {";""
  showBack && (<Button variant="ghost" size="icon" className="mr-2" () => router.back () ";""
}> <ChevronLeft className="h-5 w-5" /> <span className="sr-only" >Back</span> </Button>) ";""
}<Button variant="ghost" size="icon" onClick={;""
  onNotificationsClick ";""
}> <Bell className="h-5 w-5" /> <span className="sr-only" >Notifications</span> </Button>) ;""
}{";""
  showSettings && (<Button variant="ghost" size="icon" onClick={;""
  onSettingsClick ";""
}> <Settings className="h-5 w-5" /> <span className="sr-only" >Settings</span> </Button>) ;"
}</div> </div> </header>) ;""
}"""