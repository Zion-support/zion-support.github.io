import dynamic from 'next/dynamic';

<<<<<<< HEAD
=======
const NotificationCenter = dynamic(() => import('../components/notifications/NotificationCenter'){
  ssr: false});

export default function NotificationsPage() {
  return <NotificationCenter />;
}
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
