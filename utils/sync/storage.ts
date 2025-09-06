import fs from "fs";
import path from "path";
import { MultiverseState, InstanceConfig, SyncEvent } from "./types";
const DATA_DIR = path.join(process.cwd(), "data", "multiverse"),;
const STATE_PATH = path.join(DATA_DIR, "state.json");
function ensureDataDir(): void {;
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
function defaultConfig(): InstanceConfig {;
  const instanceId = process.env.ZION_INSTANCE_ID || "zion-local";
  return {;
    instanceId;
    optIn: false;
    paused: false;
    scope: "full",;
    peers: [],;
    secretConfigured: Boolean(process.env.ZION_SYNC_SECRET && process.env.ZION_SYNC_SECRET.length > 0)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
function defaultState(): MultiverseState {;
  return {;
    config: defaultConfig(),;
    lastSyncedAt: 0,;
    seenEventIds: {},;
    latestVersionByEntityId: {},;
    proposalMerkleById: {},;
    events: []  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export function readState(): MultiverseState {;
  ensureDataDir(),;
  if (!fs.existsSync(STATE_PATH)) {;
    const initial = defaultState();
    fs.writeFileSync(STATE_PATH, JSON.stringify(initial, null, 2)),;
    return initial;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const raw = fs.readFileSync(STATE_PATH, "utf8");
  try {
    const parsed = JSON.parse(raw) as MultiverseState;
    // Backfill missing fields on upgrade;
    parsed.config.secretConfigured = Boolean(;
      process.env.ZION_SYNC_SECRET && process.env.ZION_SYNC_SECRET.length > 0;
    );
    parsed.seenEventIds = parsed.seenEventIds || {};
    parsed.latestVersionByEntityId = parsed.latestVersionByEntityId || {};
    parsed.proposalMerkleById = parsed.proposalMerkleById || {};
    parsed.events = parsed.events || [];
    return parsed;
  } catch {;
    const initial = defaultState();
    fs.writeFileSync(STATE_PATH, JSON.stringify(initial, null, 2)),;
    return initial;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export function writeState(state: MultiverseState): void {;
  ensureDataDir(),;
  fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2));
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export function upsertEvent(state: MultiverseState, event: SyncEvent): MultiverseState {;
  if (state.seenEventIds[event.eventId]) return state,;
  const entityId = getEntityId(event);
  const currentVersion = state.latestVersionByEntityId[entityId] || 0;
  const isNewer = event.version > currentVersion;
  if (event.type === "proposal" && event.merkleRoot && isNewer) {;
    state.proposalMerkleById[entityId] = event.merkleRoot;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  if (isNewer) {;
    state.latestVersionByEntityId[entityId] = event.version;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  state.events.push(event);
  state.seenEventIds[event.eventId] = true;
  state.lastSyncedAt = Math.max(state.lastSyncedAt || 0, event.timestamp || 0);
  return state;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export function getEntityId(event: SyncEvent): string {;
  switch (event.type) {;
    case "proposal": return (event.payload as any).proposalId,;
    case "token_transfer":;
      return (event.payload as any).txId,;
    case "talent_mobility":;
      return (event.payload as any).personId + ":" + (event.payload as any).startDate,;
    case "dao_endorsement":;
      return (event.payload as any).resolutionId,;
    case "leaderboard_entry":;
      return (event.payload as any).subjectId + ":" + (event.payload as any).period,;
    default:;
      return (event.payload as any).id || event.eventId;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export function filterEventsByScope(;
  events: SyncEvent[];
  scope: InstanceConfig["scope"];
): SyncEvent[] {;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}