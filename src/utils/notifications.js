// Basic notification utilities for the Dashboard component
export const createTestNotification = async (userId) => {
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 100));
    return { success: true, id: `test-${Date.now()}` };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
export const createOnboardingNotification = async ({ userId, missingMilestone, userRole }) => {
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 100));
    return { success: true, id: `onboarding-${Date.now()}` };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
export const createSystemNotification = async ({ userId, title, message }) => {
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 100));
    return { success: true, id: `system-${Date.now()}` };
  } catch (error) {
    return { success: false, error: error.message };
  }
};