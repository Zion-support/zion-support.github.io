// Fraud detection store utilities
export interface FraudStore {
  getFraudData: () => any;
  setFraudData: (data: any) => void;
}

export const fraudStore: FraudStore = {
  getFraudData: () => ({}),
  setFraudData: (data: any) => {}
};