// AML (Anti-Money Laundering) utilities
export interface AMLCheck {
  id: string;
  userId: string;
  checkType: 'sanctions' | 'pep' | 'adverse_media' | 'watchlist';
  status: 'pending' | 'passed' | 'failed' | 'error';
  result: any;
  checkedAt: string;
  provider: string;
}

export interface AMLScreeningResult {
  userId: string;
  checks: AMLCheck[];
  overallStatus: 'clean' | 'flagged' | 'error';
  riskScore: number;
  flags: string[];
  screenedAt: string;
}

export interface SanctionsListEntry {
  name: string;
  aliases: string[];
  countries: string[];
  sanctions: string[];
  source: string;
  lastUpdated: string;
}

export interface PEPEntry {
  name: string;
  position: string;
  country: string;
  riskLevel: 'low' | 'medium' | 'high';
  source: string;
  lastUpdated: string;
}

class AMLService {
  private sanctionsList: SanctionsListEntry[] = [];
  private pepList: PEPEntry[] = [];

  constructor() {
    this.loadSanctionsList();
    this.loadPEPList();
  }

  private loadSanctionsList(): void {
    // In a real implementation, this would load from a database or external API
    this.sanctionsList = [
      {
        name: 'John Doe',
        aliases: ['J. Doe', 'Johnny Doe'],
        countries: ['US', 'CA'],
        sanctions: ['OFAC', 'UN'],
        source: 'OFAC',
        lastUpdated: new Date().toISOString()
      }
    ];
  }

  private loadPEPList(): void {
    // In a real implementation, this would load from a database or external API
    this.pepList = [
      {
        name: 'Jane Smith',
        position: 'Minister of Finance',
        country: 'US',
        riskLevel: 'high',
        source: 'PEP Database',
        lastUpdated: new Date().toISOString()
      }
    ];
  }

  async screenUser(userId: string, userData: {
    fullName?: string;
    businessName?: string;
    country?: string;
    dateOfBirth?: string;
  }): Promise<AMLScreeningResult> {
    const checks: AMLCheck[] = [];
    const flags: string[] = [];
    let overallStatus: 'clean' | 'flagged' | 'error' = 'clean';
    let riskScore = 0;

    try {
      // Sanctions screening
      const sanctionsCheck = await this.checkSanctions(userId, userData);
      checks.push(sanctionsCheck);
      
      if (sanctionsCheck.status === 'failed') {
        flags.push('sanctions_match');
        overallStatus = 'flagged';
        riskScore += 50;
      }

      // PEP screening
      const pepCheck = await this.checkPEP(userId, userData);
      checks.push(pepCheck);
      
      if (pepCheck.status === 'failed') {
        flags.push('pep_match');
        overallStatus = 'flagged';
        riskScore += 30;
      }

      // Adverse media screening
      const adverseMediaCheck = await this.checkAdverseMedia(userId, userData);
      checks.push(adverseMediaCheck);
      
      if (adverseMediaCheck.status === 'failed') {
        flags.push('adverse_media');
        overallStatus = 'flagged';
        riskScore += 20;
      }

      // Watchlist screening
      const watchlistCheck = await this.checkWatchlist(userId, userData);
      checks.push(watchlistCheck);
      
      if (watchlistCheck.status === 'failed') {
        flags.push('watchlist_match');
        overallStatus = 'flagged';
        riskScore += 25;
      }

    } catch (error) {
      console.error('AML screening failed:', error);
      overallStatus = 'error';
    }

    return {
      userId,
      checks,
      overallStatus,
      riskScore: Math.min(riskScore, 100),
      flags,
      screenedAt: new Date().toISOString()
    };
  }

  private async checkSanctions(userId: string, userData: any): Promise<AMLCheck> {
    const checkId = `sanctions_${userId}_${Date.now()}`;
    
    try {
      const fullName = userData.fullName || userData.businessName;
      if (!fullName) {
        return {
          id: checkId,
          userId,
          checkType: 'sanctions',
          status: 'error',
          result: { error: 'No name provided' },
          checkedAt: new Date().toISOString(),
          provider: 'internal'
        };
      }

      // Simple name matching (in production, use fuzzy matching)
      const matches = this.sanctionsList.filter(entry => 
        entry.name.toLowerCase().includes(fullName.toLowerCase()) ||
        entry.aliases.some(alias => 
          alias.toLowerCase().includes(fullName.toLowerCase())
        )
      );

      return {
        id: checkId,
        userId,
        checkType: 'sanctions',
        status: matches.length > 0 ? 'failed' : 'passed',
        result: { matches, totalChecked: this.sanctionsList.length },
        checkedAt: new Date().toISOString(),
        provider: 'internal'
      };
    } catch (error) {
      return {
        id: checkId,
        userId,
        checkType: 'sanctions',
        status: 'error',
        result: { error: error.message },
        checkedAt: new Date().toISOString(),
        provider: 'internal'
      };
    }
  }

  private async checkPEP(userId: string, userData: any): Promise<AMLCheck> {
    const checkId = `pep_${userId}_${Date.now()}`;
    
    try {
      const fullName = userData.fullName || userData.businessName;
      if (!fullName) {
        return {
          id: checkId,
          userId,
          checkType: 'pep',
          status: 'error',
          result: { error: 'No name provided' },
          checkedAt: new Date().toISOString(),
          provider: 'internal'
        };
      }

      // Simple name matching
      const matches = this.pepList.filter(entry => 
        entry.name.toLowerCase().includes(fullName.toLowerCase())
      );

      return {
        id: checkId,
        userId,
        checkType: 'pep',
        status: matches.length > 0 ? 'failed' : 'passed',
        result: { matches, totalChecked: this.pepList.length },
        checkedAt: new Date().toISOString(),
        provider: 'internal'
      };
    } catch (error) {
      return {
        id: checkId,
        userId,
        checkType: 'pep',
        status: 'error',
        result: { error: error.message },
        checkedAt: new Date().toISOString(),
        provider: 'internal'
      };
    }
  }

  private async checkAdverseMedia(userId: string, userData: any): Promise<AMLCheck> {
    const checkId = `adverse_media_${userId}_${Date.now()}`;
    
    try {
      // Placeholder implementation
      // In production, this would call external adverse media APIs
      return {
        id: checkId,
        userId,
        checkType: 'adverse_media',
        status: 'passed',
        result: { message: 'No adverse media found' },
        checkedAt: new Date().toISOString(),
        provider: 'internal'
      };
    } catch (error) {
      return {
        id: checkId,
        userId,
        checkType: 'adverse_media',
        status: 'error',
        result: { error: error.message },
        checkedAt: new Date().toISOString(),
        provider: 'internal'
      };
    }
  }

  private async checkWatchlist(userId: string, userData: any): Promise<AMLCheck> {
    const checkId = `watchlist_${userId}_${Date.now()}`;
    
    try {
      // Placeholder implementation
      // In production, this would call external watchlist APIs
      return {
        id: checkId,
        userId,
        checkType: 'watchlist',
        status: 'passed',
        result: { message: 'No watchlist matches found' },
        checkedAt: new Date().toISOString(),
        provider: 'internal'
      };
    } catch (error) {
      return {
        id: checkId,
        userId,
        checkType: 'watchlist',
        status: 'error',
        result: { error: error.message },
        checkedAt: new Date().toISOString(),
        provider: 'internal'
      };
    }
  }

  async getScreeningHistory(userId: string): Promise<AMLScreeningResult[]> {
    // In production, this would query a database
    return [];
  }

  async addToSanctionsList(entry: SanctionsListEntry): Promise<void> {
    this.sanctionsList.push(entry);
  }

  async addToPEPList(entry: PEPEntry): Promise<void> {
    this.pepList.push(entry);
  }
}

export const amlService = new AMLService();