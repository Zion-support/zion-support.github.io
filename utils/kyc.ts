

export interface KycProfile {
  user_id: string;

  role: KycRole;
  fullLegalName?: string;
  business_name?: string;
  businessRegistrationNumber?: string;
  country?: string;
  dateOfBirth?: string;
  documents: KycDocumentMeta[];
  status: 'in_progress' | 'submitted' | 'approved' | 'rejected';
  aml_status: 'unknown' | 'clear' | 'match' | 'review';
  flags?: string[];
  risk_score?: number;
  created_at: string;
  lastUpdatedAt: string;
  audit_trail: Array<{
    at: string;
    by: string;
    action: string;


    details?: any

  }>;


    return ['government_id', 'proof_of_address'];
  } else {
    return ['business_registration', 'proof_of_address', 'beneficial_ownership'];
  }
}




    return ['bank_statement', 'utility_bill'];
  } else {
    return ['bank_statement', 'utility_bill', 'tax_certificate'];
  }
}
  const missing: string[] = [];
  
  if (!profile && profile.fullLegalName && !profile && profile.businessName) {
    missing && missing.push('name')
  }
  if (!profile && profile.country) {
    missing && missing.push('country');

  }
  
  if (profile && profile.role === 'individual' && !profile && profile.dateOfBirth) {
    missing && missing.push('dateOfBirth');
  }
  return { ok: missing && missing.length === 0, missing };  
  if (profile && profile.role === 'enterprise' && !profile && profile.businessRegistrationNumber) {
    missing && missing.push('businessRegistrationNumber');

  }


  if (profile.role === 'client' && !profile.dateOfBirth) {
    missing.push('dateOfBirth');
  }


  if (profile.role === 'enterprise' && !profile.businessRegistrationNumber) {
    missing.push('businessRegistrationNumber');
  if (profile && profile.role === 'individual' && !profile && profile.dateOfBirth) {
    missing && missing.push('dateOfBirth');
  }
  return { ok: missing && missing.length === 0, missing };  
  if (profile && profile.role === 'enterprise' && !profile && profile.businessRegistrationNumber) {
    missing && missing.push('businessRegistrationNumber');
  }
  return {


    ok: missing && missing.length === 0,

    missing

  }

}

  kind: "document" | 'government_id_back' | 'selfie' | 'business_registration' | 'tax_certificate' | 'proof_of_address';
  url: string;
  uploadedAt: string;
  status: 'pending' | 'approved' | 'rejected';


}


  userId: string;
  role: KycRole;
  fullLegalName?: string;
  businessName?: string;
  businessRegistrationNumber?: string;
  country?: string;
  dateOfBirth?: string;
  documents: KycDocumentMeta[];
  status: "in_progress" | "submitted" | "approved" | "rejected";
  amlStatus: "unknown" | "clear" | "match" | "review";
  flags?: string[];
  riskScore?: number;
  createdAt: string;
  lastUpdatedAt: string;
  auditTrail: Array<{
    at: string;
    by: string;
    action: string;

    details?: any
  }>;
}

}






