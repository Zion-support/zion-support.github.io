
import { createNotification } from './createNotification';
import { SystemNotificationParams } from './types';

/**
 * Creates a system notification for a user
 */
export async function createSystemNotification(_{
  userId, _title, _message, _actionUrl = null, _actionText = null, sendEmail = false
}: SystemNotificationParams) {
  return createNotification({
    userId,
    title,
    message,
    type: 'system',
    sendEmail,
    actionUrl,
    actionText
  });
}
