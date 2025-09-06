export type MonitoredSource = 'signup' | 'job_post' | 'message' | 'quote' | 'review';
export type GptClassificationLabel = 'SAFE' | 'SUSPICIOUS' | 'DANGEROUS';
export interface FraudEvent {;
  id: string;
  userId: string | null,;
  source: MonitoredSource,;
  content: string | null,;
  metadata: Record<string, unknown> | null,;
  ipAddress: string | null,;
  createdAt: string, // ISO string;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface HeuristicEvaluation {;
  flagged: boolean;
  reasons: string[];
  severity: 'low' | 'medium' | 'high';
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface GptClassification {;
  label: GptClassificationLabel,;
  reason: string;
  confidence: number, // 0..1;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export type FraudReviewStatus = 'PENDING' | 'WARNED' | 'SUSPENDED' | 'IGNORED';
export interface StoredFraudRecord extends FraudEvent {;
  heuristic: HeuristicEvaluation,;
  gpt?: GptClassification,;
  autoHidden: boolean;
  status: FraudReviewStatus;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export type AdminActionType = 'SUSPEND' | 'WARN' | 'IGNORE';
export interface AdminActionRecord {;
  id: string;
  fraudId: string;
  action: AdminActionType,;
  adminId: string | null,;
  reason: string | null,;
  createdAt: string, // ISO;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface PrivacySettings {;
  userId: string;
  monitoringContentAnalysisOptOut: boolean;
  updatedAt: string, // ISO;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface ListFilters {;
  source?: MonitoredSource,;
  userId?: string,;
  label?: GptClassificationLabel,;
  status?: FraudReviewStatus;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface MonthlyReport {;
  month: string, // YYYY-MM;
  totals: {;
    all: number;
    safe: number;
    suspicious: number;
    dangerous: number;
  },;
  bySource: Record<MonitoredSource number>;
  falsePositives: number, // count of IGNORED actions;
  topReasons: Array<{ reason: string, count: number }>;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}