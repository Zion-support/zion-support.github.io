// Mock feedback store utility
export function tryWriteToFirestore(doc: any): Promise<boolean> {
  // Mock implementation - in a real app, this would write to Firestore
  return Promise.resolve(true);
}

export function saveFeedbackFallback(doc: any): void {
  // Mock implementation - in a real app, this would save to a fallback store
  console.log('Feedback saved:', doc);
}