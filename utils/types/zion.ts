

export interface Branding {logoUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
  subdomain?: string;
}
export interface DeployModules {marketplace: boolean;
export interface Branding {;
  logoUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
  subdomain?: string;
  gpt: boolean;
  academy: boolean;
  token: boolean;
  dao: boolean;
  nationBuilder: boolean;
  launchKit: boolean;
  bookBuilder: boolean;
  roadmapWhitepaper: boolean;
  apiDocsWiki: boolean;
  zionBrain: boolean;
  // Bonus;}
;
export interface DeployInput {;
  instanceName: string;
  defaultLanguage: string;
  deploymentRegion: string;
  tokenActivation: boolean;

  governanceMode: GovernanceMode,;
  branding: Branding,;
  modules: DeployModules,;
  requestedRoutes?: string[];
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface DeployLogEntry {
  timestamp: string;
  level: "info" | "warn" | "error",;
  action: string;
  details?: Record<string, unknown> | string;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface GeneratedAsset {;
  kind: "file" | "page" | "config" | "job" | "event",;
  path: string;
  description?: string;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
  instanceSlug: string;
  configPath: string;
  assets: GeneratedAsset[];
  logs: DeployLogEntry[];
  summary: string;
  version: string;
export interface DeployModules {
  marketplace: boolean,
  gpt: boolean,
  academy: boolean,
  token: boolean,
  dao: boolean,
  nationBuilder: boolean,
  launchKit: boolean,
  bookBuilder: boolean,
  roadmapWhitepaper: boolean,
  apiDocsWiki: boolean,
  zionBrain: boolean,
  // Bonus
  globalMap?: boolean,
  franchiseOnboarding?: boolean,
  referralAmbassadors?: boolean,
  grantPortal?: boolean,
  trailer?: boolean,
  bookStore?: boolean
}

export interface DeployInput {
  instanceName: string,
  defaultLanguage: string,
  deploymentRegion: string,
  tokenActivation: boolean,
  governanceMode: GovernanceMode,
  branding: Branding,
  modules: DeployModules,
  requestedRoutes?: string[]
}

export interface DeployLogEntry {
  timestamp: string,
  level: "info" | "warn" | "error",
  action: string,
  details?: Record<string, unknown> | string
}

export interface GeneratedAsset {
  kind: "file" | "page" | "config" | "job" | "event",
  path: string,
  description?: string
}

export interface DeployResult {
  success: boolean,
  instanceSlug: string,
  configPath: string,
  assets: GeneratedAsset[],
  logs: DeployLogEntry[],
  summary: string,
  version: string}

export interface AccessControlConfig {
  allowed_roles: ("Founder" | "Superadmin" | "DAOMultisig")[];
  adminKeyConfigured: boolean;