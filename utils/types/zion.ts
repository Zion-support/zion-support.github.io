<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export type GovernanceMode = "Admin" | "DAO" | "Hybrid";
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


export interface Branding {;

export interface Branding {;

  logoUrl?: string,;
  primaryColor?: string,;
  secondaryColor?: string,;
export type GovernanceMode = "Admin" | "DAO" | "Hybrid";





export interface Branding {logoUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;}
  subdomain?: string;}
}
export interface DeployModules {marketplace: boolean;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export interface Branding {;
  logoUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
  subdomain?: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




export interface Branding {;


<<<<<<< HEAD
=======

export interface Branding {;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======




export interface Branding {;


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  logoUrl?: string,;
  primaryColor?: string,;
  secondaryColor?: string,;
  subdomain?: string;
<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }


<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======








>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
;
export interface DeployModules {;
  marketplace: boolean;


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a





<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======






>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  // Bonus;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
  // Bonus;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31










  globalMap?: boolean,;
  franchiseOnboarding?: boolean,;
  referralAmbassadors?: boolean,;
  grantPortal?: boolean,;
  trailer?: boolean,;
  bookStore?: boolean;
<<<<<<< HEAD
  } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  globalMap?: boolean;
  franchiseOnboarding?: boolean;
  referralAmbassadors?: boolean;
  grantPortal?: boolean;
  trailer?: boolean;
  bookStore?: boolean;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
<<<<<<< HEAD
=======
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }


  globalMap?: boolean;
  franchiseOnboarding?: boolean;
  referralAmbassadors?: boolean;
  grantPortal?: boolean;
  trailer?: boolean;
  bookStore?: boolean;







}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface DeployInput {instanceName: string;
  defaultLanguage: string;
  deploymentRegion: string;
  tokenActivation: boolean;
  governanceMode: GovernanceMode;
  branding: Branding;
  modules: DeployModules;
  requestedRoutes?: string[];
}
<<<<<<< HEAD
export interface DeployLogEntry {timestamp: string;"
  level: "info" | "warn" | "error";
  action: string;
  details?: Record<string unknown> | string;
}"
=======
export interface DeployLogEntry {timestamp: string;
  level: "info" | "warn" | "error";
  action: string;
  details?: Record<string unknown> | string;
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface GeneratedAsset {kind: "file" | "page" | "config" | "job" | "event";
  path: string;
  description?: string;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  // Bonus;}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  // Bonus;}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  // Bonus;}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
export interface DeployInput {;
  instanceName: string;
  defaultLanguage: string;
  deploymentRegion: string;
  tokenActivation: boolean;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
governanceMode: GovernanceMode;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
}
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  governanceMode: GovernanceMode,;
  branding: Branding,;
  modules: DeployModules,;
  requestedRoutes?: string[];
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface DeployLogEntry {};
  timestamp: string;"
  level: "info" | "warn" | "error",;
  action: string;
  details?: Record<string, unknown> | string;
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface GeneratedAsset {;"
  kind: "file" | "page" | "config" | "job" | "event",;
  path: string;
  description?: string;
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
;
export interface DeployResult {;
  success: boolean;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a




;
export interface DeployResult {;
  success: boolean;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
;
export interface DeployResult {;
  success: boolean;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======






;
export interface DeployResult {;
  success: boolean;

export interface DeployResult {;
  success: boolean;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  instanceSlug: string;
  configPath: string;
  assets: GeneratedAsset[];
  logs: DeployLogEntry[];
  summary: string;
  version: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934






"
export type GovernanceMode = "Admin" | "DAO" | "Hybrid",
export interface Branding {}
  logo_url?: string,
  primary_color?: string,
  secondary_color?: string,;
  subdomain?: string;




  } catch (error) {"
    console.error("Error:", error);"
=======













export type GovernanceMode = "Admin" | "DAO" | "Hybrid",
export interface Branding {
  logo_url?: string,
  primary_color?: string,
  secondary_color?: string,
  subdomain?: string;




  } catch (error) {
    console.error("Error:", error);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return res.status(500).json({ error: "Internal server error" });
  }



<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface DeployModules {
=======
export interface DeployModules {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
  zion_brain: boolean,;
  // Bonus;
  global_map?: boolean,
  franchise_onboarding?: boolean,
  referral_ambassadors?: boolean,
  grant_portal?: boolean,
  trailer?: boolean,
  book_store?: boolean;
}
export interface DeployInput {}
  instance_name: string,
  default_language: string,
  deployment_region: string,
  token_activation: boolean,
  governance_mode: GovernanceMode,
  branding: Branding,
  modules: DeployModules,;
  requested_routes?: string[];
}
export interface DeployLogEntry {}
  timestamp: string,"
  level: "info" | "warn" | "error",
  action: string,;
  details?: Record < string unknown> | string;
}
export interface GeneratedAsset {"
  kind: "file" | "page" | "config" | "job" | "event",
  path: string,;
  description?: string;
}
<<<<<<< HEAD
export interface DeployResult {}
=======
export interface DeployResult {


  logoUrl?: string,;
  primaryColor?: string,;

  secondaryColor?: string,;
  } catch (error) {
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"

  }


;
export interface DeployModules {;
  marketplace: boolean;,
  gpt: boolean;
  academy: boolean;,
  token: boolean;
  dao: boolean;,
  nationBuilder: boolean;
  launchKit: boolean;,
  bookBuilder: boolean;
  roadmapWhitepaper: boolean;,
  apiDocsWiki: boolean;
  zionBrain: boolean;
  // Bonus;




  globalMap?: boolean,;
  franchiseOnboarding?: boolean,;
  referralAmbassadors?: boolean,;
  grantPortal?: boolean,;

  trailer?: boolean,;
  bookStore?: boolean;
  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"

  }

export interface DeployInput {instanceName: string;,
  defaultLanguage: string;
  deploymentRegion: string;,
  tokenActivation: boolean;
  governanceMode: GovernanceMode;,
  branding: Branding;
  modules: DeployModules;
  requestedRoutes?: string[];
  modules: DeployModules;}
  requestedRoutes?: string[];}
}

export interface DeployLogEntry {timestamp: string;,"
  level: "info" | "warn" | "error";"
  action: string;
  details?: Record<string unknown> | string;
</string>
  details?: Record<string, unknown> | string;
  details?: Record < string unknown> | string;
export interface GeneratedAsset {
  // TODO: Implement
}"
  kind: "file" | "page" | "config" | "job" | "event","
  path: string,
  description?: string;
export interface DeployResult {
  // TODO: Implement
pr-12325

}
export interface DeployResult {
  // TODO: Implement
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  success: boolean,
  instance_slug: string,
  config_path: string,
  assets: GeneratedAsset[],
  logs: DeployLogEntry[],
<<<<<<< HEAD
  summary: string,;
  version: string;
=======
  summary: string,}
  version: string;}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
export interface AccessControlConfig {";
  allowed_roles: ("Founder" | "Superadmin" | "DAOMultisig")[];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  adminKeyConfigured: boolean;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  adminKeyConfigured: boolean;



}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
;
export interface AccessControlConfig {;
  allowedRoles: ("Founder" | "Superadmin" | "DAOMultisig")[];
  adminKeyConfigured: boolean;
<<<<<<< HEAD
}
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  } catch (error) {
    console.error("Error:", error);
=======

  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  adminKeyConfigured: boolean;

}
export interface AccessControlConfig {allowedRoles: ("Founder" | "Superadmin" | "DAOMultisig")[];
export interface AccessControlConfig {

  // TODO: Implement
  allowed_roles: ("Founder" | "Superadmin" | "DAOMultisig")[];",
  adminKeyConfigured: boolean;

export interface AccessControlConfig {allowedRoles: ("Founder" | "Superadmin" | "DAOMultisig")[];",
  adminKeyConfigured: boolean;
  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"

  }


}



}
}
;
export interface AccessControlConfig {;
  allowedRoles: ("Founder" | "Superadmin" | "DAOMultisig")[];
  adminKeyConfigured: boolean;





  } catch (error) {
    console.error("Error:", error);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"

  }
}
}






<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}

"
pr-12325
  adminKeyConfigured: boolean;
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  adminKeyConfigured: boolean;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  adminKeyConfigured: boolean;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
