<<<<<<< HEAD
<<<<<<< HEAD
export type GovernanceMode = "Admin" | "DAO" | "Hybrid";

export interface Branding {;

=======


=======

export interface Branding {;

  logoUrl?: string,;
  primaryColor?: string,;
  secondaryColor?: string,;
=======
export type GovernanceMode = "Admin" | "DAO" | "Hybrid";
<<<<<<< HEAD
<<<<<<< HEAD
export interface Branding {logoUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  subdomain?: string;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}
<<<<<<< HEAD
;
export interface DeployModules {;
  marketplace: boolean;

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
export interface DeployModules {marketplace: boolean;
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export interface Branding {;
<<<<<<< HEAD
  logoUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
  subdomain?: string;
=======
  logoUrl?: string,;
  primaryColor?: string,;
  secondaryColor?: string,;
  subdomain?: string;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}
;
export interface DeployModules {;
  marketplace: boolean;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

=======
<<<<<<< HEAD
  globalMap?: boolean;
  franchiseOnboarding?: boolean;
  referralAmbassadors?: boolean;
  grantPortal?: boolean;
  trailer?: boolean;
  bookStore?: boolean;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
;
export interface DeployInput {;
  instanceName: string;
  defaultLanguage: string;
  deploymentRegion: string;
  tokenActivation: boolean;

<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

}
<<<<<<< HEAD
;
export interface DeployResult {;
  success: boolean;
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
export interface DeployResult {success: boolean;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}
;
export interface DeployInput {;
  instanceName: string;
  defaultLanguage: string;
  deploymentRegion: string;
  tokenActivation: boolean;
<<<<<<< HEAD
=======
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}
;
export interface DeployResult {;
  success: boolean;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  instanceSlug: string;
  configPath: string;
  assets: GeneratedAsset[];
  logs: DeployLogEntry[];
  summary: string;
  version: string;
<<<<<<< HEAD

<<<<<<< HEAD
=======
export type GovernanceMode = "Admin" | "DAO" | "Hybrid",
export interface Branding {
  logo_url?: string,
  primary_color?: string,
  secondary_color?: string,
  subdomain?: string;
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
}
export interface AccessControlConfig {allowedRoles: ("Founder" | "Superadmin" | "DAOMultisig")[];
  adminKeyConfigured: boolean;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD

}
=======


}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
export interface AccessControlConfig {;
  allowedRoles: ("Founder" | "Superadmin" | "DAOMultisig")[];
  adminKeyConfigured: boolean;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
