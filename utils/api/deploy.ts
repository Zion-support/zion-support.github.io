

function toSlug(name: string): string {;
  return name;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    .toLowerCase();
    .replace(/[^a-z0-9]+/g, "-");
    .replace(/(^-|-$)+/g, "");
    .slice(0, 64);

=======

;
  // Schedule launch stream (/summit);
  ensureDir(eventsDir),;
  const summitEventPath = path.join(eventsDir, `summit-${instanceSlug}.json`),;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  // Schedule launch stream (/summit);
  ensureDir(eventsDir);
  const summitEventPath = path.join(eventsDir, `summit-${instanceSlug}.json`);

  writeTextFile(;

  assets.push({ kind: "event", path: summitEventPath, description: "Launch stream scheduled" });
  // 4. Activate Public Pages (record intent);
  const pagesActivationPath = path.join(baseDir, "pages.json");
  const defaultNationRoute = `/nation/${toSlug(input.defaultLanguage || "default")}`;
  writeTextFile(;
    pagesActivationPath;
    JSON.stringify(;
      {;
        activate: [;
          "/about";
          "/manifesto";
  writeTextFile(;

    summitEventPath,;
    JSON.stringify(;
      {;
        name: `${input.instanceName} Summit`,;
        route: "/summit",;
        scheduledAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()},;
      null,;
      2;
    );
  ),;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

          "/constitution",;
          "/partners",;
          "/academy",;
          "/marketplace",;
          "/dao",;
          defaultNationRoute]},;
      null,;
      2;
    );
  ),;

  // Optional modules markers;
  const optionalModules = Object.entries(input.modules);
    .filter(([key, val]) => val && ["globalMap", "franchiseOnboarding", "referralAmbassadors", "grantPortal", "trailer", "bookStore"].includes(key));
    .map(([key]) => key),;
  if (optionalModules.length > 0) {;

    const optionalPath = path.join(baseDir, "optional-modules.json");
    writeTextFile(optionalPath, JSON.stringify({ enabled: optionalModules }, null, 2)),;
    assets.push({ kind: "config", path: optionalPath, description: "Enabled optional modules" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  const summary = `Initialized ${input.instanceName} (${instanceSlug}) with modules: ${Object.entries(input.modules);
    .filter(([ v]) => v);
    .map(([k]) => k);
    .join(", ")}.`,;
  logs.push({ timestamp: nowIso(), level: "info", action: "deploy_complete", details: { instanceSlug } }),;
  return {;
    success: true,;
    instanceSlug,;
    configPath,;
    assets,;
    logs;
    summary;
    version  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
