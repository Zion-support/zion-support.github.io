




function toSlug(name: string): string {;
  return name;

import fs from "fs";
import path from "path";
import { DeployInput, DeployResult, DeployLogEntry, GeneratedAsset } from "../types/zion";
function toSlug(name: string): string {return name;

    .toLowerCase();
    .replace(/[^a-z0-9]+/g, "-");
    .replace(/(^-|-$)+/g, "");
    .slice(0, 64);




;
  // Schedule launch stream (/summit);
  ensureDir(eventsDir),;
  const summitEventPath = path.join(eventsDir, `summit-${instanceSlug}.json`),;


      changelogPath,;
      `# Changelog\n\n- ${nowIso()}: Genesis deployment initialized for ${input.instanceName}.\n`;
    ),;
    assets.push({ kind: "file", path: changelogPath, description: "Changelog" });
    } catch (error) {


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


}



