

<<<<<<< HEAD
=======

export interface Branding {;

=======

export interface Branding {;

  logoUrl?: string,;
  primaryColor?: string,;
  secondaryColor?: string,;
export type GovernanceMode = "Admin" | "DAO" | "Hybrid";
export interface Branding {logoUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
  subdomain?: string;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
export interface DeployModules {marketplace: boolean;
export interface Branding {;
  logoUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
  subdomain?: string;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  logoUrl?: string,;
  primaryColor?: string,;
  secondaryColor?: string,;
  subdomain?: string;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
;
export interface DeployModules {;
  marketplace: boolean;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
  // Bonus;


<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  globalMap?: boolean,;
  franchiseOnboarding?: boolean,;
  referralAmbassadors?: boolean,;
  grantPortal?: boolean,;
  trailer?: boolean,;
  bookStore?: boolean;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

<<<<<<< HEAD
=======
  globalMap?: boolean;
  franchiseOnboarding?: boolean;
  referralAmbassadors?: boolean;
  grantPortal?: boolean;
  trailer?: boolean;
  bookStore?: boolean;
}
;
export interface DeployInput {;
  instanceName: string;
  defaultLanguage: string;
  deploymentRegion: string;
  tokenActivation: boolean;


}
export interface DeployResult {success: boolean;
  globalMap?: boolean,;
  franchiseOnboarding?: boolean,;
  referralAmbassadors?: boolean,;
  grantPortal?: boolean,;
  trailer?: boolean,;
  bookStore?: boolean;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
;
export interface DeployInput {;
  instanceName: string;
  defaultLanguage: string;
  deploymentRegion: string;
  tokenActivation: boolean;
<<<<<<< HEAD


=======
  governanceMode: GovernanceMode;
  branding: Branding;
  modules: DeployModules;
  requestedRoutes?: string[];
}
;
export interface DeployLogEntry {;
  timestamp: string;
  level: "info" | "warn" | "error";
  action: string;
  details?: Record<string unknown> | string;
}
;
export interface GeneratedAsset {;
  kind: "file" | "page" | "config" | "job" | "event";
  path: string;
  description?: string;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
;
export interface DeployResult {;
  success: boolean;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  instanceSlug: string;
  configPath: string;
  assets: GeneratedAsset[];
  logs: DeployLogEntry[];
  summary: string;
  version: string;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export type GovernanceMode = "Admin" | "DAO" | "Hybrid",
export interface Branding {
  logo_url?: string,
  primary_color?: string,
  secondary_color?: string,
  subdomain?: string;


  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }



}
export interface DeployModules {
  marketplace: boolean,
  gpt: boolean,
  academy: boolean,
  token: boolean,
  dao: boolean,
  nation_builder: boolean,
  launch_kit: boolean,
  book_builder: boolean,
  roadmap_whitepaper: boolean,
  apiDocsWiki: boolean,
  zion_brain: boolean,
  // Bonus;
  global_map?: boolean,
  franchise_onboarding?: boolean,
  referral_ambassadors?: boolean,
  grant_portal?: boolean,
  trailer?: boolean,
  book_store?: boolean;
}
export interface DeployInput {
  instance_name: string,
  default_language: string,
  deployment_region: string,
  token_activation: boolean,
  governance_mode: GovernanceMode,
  branding: Branding,
  modules: DeployModules,
  requested_routes?: string[];
}
export interface DeployLogEntry {
  timestamp: string,
  level: "info" | "warn" | "error",
  action: string,
  details?: Record < string unknown> | string;
}
export interface GeneratedAsset {
  kind: "file" | "page" | "config" | "job" | "event",
  path: string,
  description?: string;
}
export interface DeployResult {
  success: boolean,
  instance_slug: string,
  config_path: string,
  assets: GeneratedAsset[],
  logs: DeployLogEntry[],
  summary: string,
  version: string;
}
export interface AccessControlConfig {
  allowed_roles: ("Founder" | "Superadmin" | "DAOMultisig")[];
  adminKeyConfigured: boolean;

}
export interface AccessControlConfig {allowedRoles: ("Founder" | "Superadmin" | "DAOMultisig")[];
  adminKeyConfigured: boolean;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }


}

<<<<<<< HEAD
=======
}
;
export interface AccessControlConfig {;
  allowedRoles: ("Founder" | "Superadmin" | "DAOMultisig")[];
  adminKeyConfigured: boolean;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
