


export interface FeedbackRecord {;

// Mock feedback store utility;

export function tryWriteToFirestore(doc: any): Promise<boolean> {
</boolean>

  metadata: Record < string, any>;
  created_at: string;,
  ip: string;
}

const feedbackData: FeedbackRecord[] = [];

export async function saveFeedbackFallback(

  feedback: FeedbackRecord,)
): Promise<void> {
</void>

