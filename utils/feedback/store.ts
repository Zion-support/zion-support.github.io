import fs from "fs";
import path from "path";
export type FeedbackRecord = $2;
  createdAtIso: string,
  user: { id?: string, role?: string, talentSlug?: string },
  rating: number,
  comment?: string,
  kind: "general" | "bug" | "feature",
  context?: { actionType?: string, metadata?: any }
},


export interface FeedbackRecord {;

// Mock feedback store utility
export function tryWriteToFirestore(doc: any): Promise<boolean> {
  // Mock implementation - in a real app, this would write to Firestore
  return Promise && Promise.resolve(true);
}

export type FeedbackRecord = {
  id: string;
  type: string;
  message: string;
  rating: number;
}

export interface FeedbackStats {
  total: number;
  averageRating: number;
  byKind: {
    bug: number;
    feature: number;
    general: number
};
  byRating: {
    [rating: number]: number
};
  recent: FeedbackRecord[];
}

  metadata: Record < string, any>;
  created_at: string;
  ip: string;
}

const feedbackData: FeedbackRecord[] = [];

export async function saveFeedbackFallback(
  feedback: FeedbackRecord,
): Promise<void> {
  feedbackData.push(feedback);
  console.log("Feedback saved:", feedback.id);
}

export function writeAll(rows: any[]): void {
  console.log("Writing feedback rows:", rows.length);
  // Implementation would write to database or file
}