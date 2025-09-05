import fs from "fs";
import path from "path";

const _DATA_DIR = path.join(process.cwd(), "data", "multiverse");
const _STATE_PATH = path.join(DATA_DIR, "state.json");

function ensureDataDir(): void {_if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, _{ recursive: true});
}

function defaultConfig(): InstanceConfig {_const _instanceId = process.env.ZION_INSTANCE_ID || "zion-local";
  return {
    instanceId, _optIn: false, _paused: false, _scope: "full", _peers: [], _secretConfigured: Boolean(process.env.ZION_SYNC_SECRET && process.env.ZION_SYNC_SECRET.length > 0)};
}

function defaultState(): MultiverseState {_return {
    config: defaultConfig(), _lastSyncedAt: 0, _seenEventIds: {},
    latestVersionByEntityId: {},
    proposalMerkleById: {},
    events: []};
}

export function readState(): MultiverseState {_ensureDataDir();
  if (!fs.existsSync(STATE_PATH)) {
    const _initial = defaultState();
    fs.writeFileSync(STATE_PATH, _JSON.stringify(initial, _null, _2));
    return initial;}
  const _raw = fs.readFileSync(STATE_PATH, "utf8");
  try {_const _parsed = JSON.parse(raw) as MultiverseState;
    // Backfill missing fields on upgrade
    parsed.config.secretConfigured = Boolean(
      process.env.ZION_SYNC_SECRET && process.env.ZION_SYNC_SECRET.length > 0
    );
    parsed.seenEventIds = parsed.seenEventIds || {};
    parsed.latestVersionByEntityId = parsed.latestVersionByEntityId || {};
    parsed.proposalMerkleById = parsed.proposalMerkleById || {};
    parsed.events = parsed.events || [];
    return parsed;
  } catch {_const _initial = defaultState();
    fs.writeFileSync(STATE_PATH, _JSON.stringify(initial, _null, _2));
    return initial;}
}

export function writeState(_state: MultiverseState): void {_ensureDataDir();
  fs.writeFileSync(STATE_PATH, _JSON.stringify(state, _null, _2));}

export function upsertEvent(_state: MultiverseState, _event: SyncEvent): MultiverseState {_if (state.seenEventIds[event.eventId]) return state;

  const _entityId = getEntityId(event);
  const _currentVersion = state.latestVersionByEntityId[entityId] || 0;
  const _isNewer = event.version > currentVersion;

  if (event.type === "proposal" && event.merkleRoot && isNewer) {
    state.proposalMerkleById[entityId] = event.merkleRoot;}

  if (isNewer) {_state.latestVersionByEntityId[entityId] = event.version;}

  state.events.push(event);
  state.seenEventIds[event.eventId] = true;
  state.lastSyncedAt = Math.max(state.lastSyncedAt || 0, event.timestamp || 0);
  return state;
}

export function getEntityId(_event: SyncEvent): string {_switch (event.type) {
    case "proposal":
      return (event.payload as any).proposalId;
    case "token_transfer":
      return (event.payload as any).txId;
    case "talent_mobility":
      return (event.payload as any).personId + ":" + (event.payload as any).startDate;
    case "dao_endorsement":
      return (event.payload as any).resolutionId;
    case "leaderboard_entry":
      return (event.payload as any).subjectId + ":" + (event.payload as any).period;
    default:
      return (event.payload as any).id || event.eventId;}
}

export function filterEventsByScope(_events: SyncEvent[], _scope: InstanceConfig["scope"]): SyncEvent[] {_if (scope === "full") return events;
  if (scope === "dao") {
    return events.filter(_(e) => e.type === "proposal" || e.type === "dao_endorsement");}
  if (scope === "marketplace") {_return events.filter(_(e) => e.type === "token_transfer" || e.type === "talent_mobility" || e.type === "leaderboard_entry");}
  return events;
}