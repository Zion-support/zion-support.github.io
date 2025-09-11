

=======

export interface Branding {;
<<<<<<< HEAD

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  logoUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
  subdomain?: string;
<<<<<<< HEAD
=======
=======

export interface Branding {;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  logoUrl?: string,;
  primaryColor?: string,;
  secondaryColor?: string,;
  subdomain?: string;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
;
export interface DeployModules {;
  marketplace: boolean;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  globalMap?: boolean,;
  franchiseOnboarding?: boolean,;
  referralAmbassadors?: boolean,;
  grantPortal?: boolean,;
  trailer?: boolean,;
<<<<<<< HEAD
  bookStore?: boolean;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

<<<<<<< HEAD
  globalMap?: boolean;
  franchiseOnboarding?: boolean;
  referralAmbassadors?: boolean;
  grantPortal?: boolean;
  trailer?: boolean;
  bookStore?: boolean;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
;
export interface DeployInput {;
  instanceName: string;
  defaultLanguage: string;
  deploymentRegion: string;
  tokenActivation: boolean;


}
<<<<<<< HEAD
export interface DeployResult {success: boolean;
  globalMap?: boolean,;
  franchiseOnboarding?: boolean,;
  referralAmbassadors?: boolean,;
  grantPortal?: boolean,;
  trailer?: boolean,;
  bookStore?: boolean;
=======
  bookStore?: boolean;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface DeployInput {;
  instanceName: string;
  defaultLanguage: string;
  deploymentRegion: string;
  tokenActivation: boolean;
<<<<<<< HEAD
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
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
;
export interface DeployResult {;
  success: boolean;
=======
;
export interface DeployResult {;
  success: boolean;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  instanceSlug: string;
  configPath: string;
  assets: GeneratedAsset[];
  logs: DeployLogEntry[];
  summary: string;
  version: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export type GovernanceMode = "Admin" | "DAO" | "Hybrid",
export interface Branding {
  logo_url?: string,
  primary_color?: string,
  secondary_color?: string,
  subdomain?: string;
<<<<<<< HEAD


=======
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }



<<<<<<< HEAD
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  adminKeyConfigured: boolean;



}
<<<<<<< HEAD
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
