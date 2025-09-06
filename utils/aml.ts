// Mock AML utility
export interface AmlResult {
  status: 'clear' | 'match' | 'review';
  details?: any;
}

export function getAmlProvider() {
  return {
    async checkPerson(data: { fullLegalName: string; country: string; dob?: string }): Promise<AmlResult> {
      // Mock implementation
      return {
        status: Math.random() > 0.1 ? 'clear' : 'review',
        details: { checked: true }
      };
    },
    async checkBusiness(data: { businessName: string; country: string }): Promise<AmlResult> {
      // Mock implementation
      return {
        status: Math.random() > 0.1 ? 'clear' : 'review',
        details: { checked: true }
      };
    }
  };
}