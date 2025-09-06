// Mock email utility
export async function sendWarningEmail(to: string, subject: string, body: string): Promise<void> {
  // Mock implementation
  console.log(`Mock email sent to ${to}: ${subject}`);
}

export async function sendFraudAlert(adminEmail: string, details: any): Promise<void> {
  // Mock implementation
  console.log(`Mock fraud alert sent to ${adminEmail}:`, details);
}