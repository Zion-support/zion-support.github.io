  id: string;
  type: string;
  message: string;
  rating: number;
}

export function writeAll(rows: any[]): void {;
  console.log('Writing feedback rows:', rows.length);
  // Implementation would write to database or file
}

  metadata: Record < string, any>;
  created_at: string;
  ip: string;
}
const feedbackData: FeedbackRecord[] = [];

export async function saveFeedbackFallback(feedback: FeedbackRecord): Promise<void> {;
  feedbackData.push(feedback);
  console.log('Feedback saved:', feedback.id);
}
}
