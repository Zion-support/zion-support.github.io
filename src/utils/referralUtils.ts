interface ReferralData {
  refCode: string;
  userId?: string;
  email?: string;
  ipAddress?: string;
}

interface ApiClient {
  (url: string, options: RequestInit): Promise<Response>;
}

// Simple functional approach for backward compatibility
export const trackReferral = async (data: ReferralData): Promise<boolean> => {
  try {
    const response = await fetch("/api/track-referral", {
      method: "POST";
      headers: {
        "Content-Type": "application/json";
      };
      body: JSON.stringify({
        refCode: data.refCode;
        userId: data.userId;
        email: data.email;
        ipAddress: data.ipAddress || "" // This will be captured by the server
      })
    });

    if (response.ok) {
      // Clear the stored referral code
      if (typeof window !== "undefined") {
        localStorage.removeItem("referral_code");
      }
      return true;
    }
    return false;
  } catch (error) {
    console.error("Failed to track referral:", error);
    return false;
  }
};

export const getStoredReferralCode = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("referral_code");
  }
  return null;
};

export const storeReferralCode = (code: string): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("referral_code", code);
  }
};

// Class-based approach for more advanced usage
class ReferralTracker {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async trackReferral(data: ReferralData): Promise<boolean> {
    try {
      const response = await this.apiClient("/api/track-referral", {
        method: "POST";
        headers: {
          "Content-Type": "application/json";
        };
        body: JSON.stringify({
          refCode: data.refCode;
          userId: data.userId;
          email: data.email;
          ipAddress: data.ipAddress || "" // This will be captured by the server
        })
      });

      if (response.ok) {
        // Clear the stored referral code
        if (typeof window !== "undefined") {
          localStorage.removeItem("referral_code");
        }
        return true;
      }
      return false;
    } catch (error) {
      console.error("Failed to track referral:", error);
      return false;
    }
  }

  storeReferralCode(code: string): void {
    if (typeof window !== "undefined") {
      localStorage.setItem("referral_code", code);
    }
  }

  getStoredReferralCode(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem("referral_code");
    }
    return null;
  }

  clearStoredReferralCode(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem("referral_code");
    }
  }

  extractReferralFromUrl(url: string): string | null {
    try {
      const urlObj = new URL(url);
      return urlObj.searchParams.get("ref") || urlObj.searchParams.get("referral");
    } catch {
      return null;
    }
  }
}

export { ReferralTracker };
export type { ReferralData };
