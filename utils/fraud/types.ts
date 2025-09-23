
// Fraud detection types
export type AdminActionType =
  | 'ban_user'
  | 'suspend_user'
  | 'flag_content'
  | 'remove_content'
  | 'investigate'
  | 'dismiss'
  | 'escalate';




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

  id: string;
  case_id: string;
  type: AdminActionType;



;

export interface AdminAction {

  id: string;
  case_id: string;
  type: AdminActionType;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


  admin_id: string;
  reason: string,
  details: Record < string, any>;
  created_at: string;
  executed_at?: string;
  status: 'pending' | 'executed' | 'failed',



}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

export interface FraudDetectionResult {
  is_fraud: boolean;



  isFraud: boolean;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  confidence: number;
  reasons: string[];




export interface FraudDetectionConfig {


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


  enabled: boolean;
  rules: {
    suspiciousActivity: {
      enabled: boolean;


      threshold: number,
    }
    fake_profile: {
      enabled: boolean;
      threshold: number,
    }
    payment_fraud: {
      enabled: boolean;
      threshold: number,
    }
    spam: {
      enabled: boolean;
      threshold: number,
    }
  }
  auto_actions: {
    enabled: boolean;
    actions: AdminActionType[];




  }




}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements


