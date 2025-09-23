export async function createTestNotification(userId: string) {
  return { success: true, userId };
}

export async function createOnboardingNotification(args: { userId: string; missingMilestone: string; userRole: string; }) {
  return { success: true, ...args };
}

export async function createSystemNotification(args: { userId: string; title: string; message: string; actionUrl?: string; actionText?: string; }) {
  return { success: true, ...args };
}

