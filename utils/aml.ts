export interface AMLResult {
  status: 'passed' | 'failed' | 'pending';
  riskScore: number;
  flags: string[];
  details: Record<string, any>;
}

export async function checkAML(profile: any): Promise<AMLResult> {
  // Mock AML check - in a real app, this would call external AML services
  const flags: string[] = [];
  let riskScore = 0;

  // Check for common risk factors
  if (profile.fullLegalName) {
    const name = profile.fullLegalName.toLowerCase();
    
    // Check against common high-risk names (simplified)
    const highRiskNames = ['test', 'admin', 'user', 'demo'];
    if (highRiskNames.some(risk => name.includes(risk))) {
      flags.push('suspicious_name');
      riskScore += 30;
    }
  }

  // Check business registration
  if (profile.role === 'business' && profile.businessRegistrationNumber) {
    // Mock validation - in real app, validate against business registries
    if (profile.businessRegistrationNumber.length < 5) {
      flags.push('invalid_registration');
      riskScore += 20;
    }
  }

  // Check for duplicate information
  if (profile.email && profile.email.includes('@test.com')) {
    flags.push('test_email');
    riskScore += 10;
  }

  // Determine status based on risk score
  let status: 'passed' | 'failed' | 'pending' = 'passed';
  if (riskScore >= 50) {
    status = 'failed';
  } else if (riskScore >= 20) {
    status = 'pending';
  }

  return {
    status,
    riskScore,
    flags,
    details: {
      checkedAt: new Date().toISOString(),
      provider: 'mock_aml_service'
    }
  };
}

export async function checkSanctionsList(name: string): Promise<boolean> {
  // Mock sanctions check - in a real app, this would check against OFAC, UN, etc.
  const sanctionsList = ['john doe', 'jane smith']; // Mock list
  return !sanctionsList.includes(name.toLowerCase());
}

export async function checkPEPList(name: string): Promise<boolean> {
  // Mock PEP check - in a real app, this would check against PEP databases
  const pepList = ['politician', 'government']; // Mock list
  return !pepList.some(pep => name.toLowerCase().includes(pep));
}