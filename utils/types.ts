export interface Application {
  id: string;
  jobId: string;
  talentSlug: string;
  status: "applied" | "skipped" | "pending";
  createdAtIso: string;
}

export type UserRole = "admin" | "user" | "guest";
