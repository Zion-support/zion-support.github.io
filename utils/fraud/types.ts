

export interface AdminAction {

  id: string;
  case_id: string;
  type: AdminActionType;


  admin_id: string;
  reason: string,
  details: Record < string, any>;
  created_at: string;
  executed_at?: string;
  status: 'pending' | 'executed' | 'failed',

}

}


export interface FraudDetectionResult {;



  enabled: boolean;
  rules: {
    suspiciousActivity: {
      enabled: boolean;



}



