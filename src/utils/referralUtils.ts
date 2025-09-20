interface ReferralData {
  refCode: string;
  userId: string;
  email: string;
  ipAddress?: string;
}

export const trackReferral = async (data: ReferralData): Promise<boolean> => {
  try {
    const response = await fetch("/api/track-referral", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refCode: data.refCode,
        userId: data.userId,
        email: data.email,
        ipAddress: data.ipAddress || "" // This will be captured by the server
      })
    });

    if (response.ok) {
      // Clear the stored referral code
      localStorage.removeItem("referral_code");
      return true;
    }
    return false;
  } catch (error) {
    console.error("Failed to track referral:", error);
    return false;
  }
};

export const getStoredReferralCode = (): string | null => {
  return localStorage.getItem("referral_code");
};

export const storeReferralCode = (code: string): void => {
  localStorage.setItem("referral_code", code);
};