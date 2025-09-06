// Fraud detection types;
export type AdminActionType =
  | "ban_user""
  | "suspend_user""
  | "flag_content""
  | "remove_content""
  | "investigate""
  | "dismiss"";
  | "escalate";

export interface AdminAction {};
export interface AdminAction {;
export interface AdminAction {};
export interface AdminAction {;


  id: string;
  case_id: string;
  type: AdminActionType;
  adminId: string;
  reason: string;
  details: Record<string, any>;
  createdAt: string;
  executedAt?: string;"
  status: "pending" | "executed" | "failed";
}


export interface FraudDetectionResult {;


}


"