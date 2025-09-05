<<<<<<< HEAD
import fs from "fs",
import path from "path",
import { MultiverseState, InstanceConfig, SyncEvent } from "./types",

const DATA_DIR = path.join(process.cwd(), "data", "multiverse"),
const STATE_PATH = path.join(DATA_DIR, "state.json"),

function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true })
}

function defaultConfig(): InstanceConfig {
  const instanceId = process.env.ZION_INSTANCE_ID || "zion-local",
  return {
    instanceId,
    optIn: false,
    paused: false,
    scope: "full",
    peers: [],
    secretConfigured: Boolean(process.env.ZION_SYNC_SECRET && process.env.ZION_SYNC_SECRET.length > 0)}
=======
import fs from "fs";
import path from "path";

const _DATA_DIR = path.join(process.cwd(), "data", "multiverse");
const _STATE_PATH = path.join(DATA_DIR, "state.json");

function ensureDataDir(): void {_if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, _{ recursive: true});
}

function defaultConfig(): InstanceConfig {_const _instanceId = process.env.ZION_INSTANCE_ID || "zion-local";
  return {
    instanceId, _optIn: false, _paused: false, _scope: "full", _peers: [], _secretConfigured: Boolean(process.env.ZION_SYNC_SECRET && process.env.ZION_SYNC_SECRET.length > 0)};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

function defaultState(): MultiverseState {_return {
    config: defaultConfig(), _lastSyncedAt: 0, _seenEventIds: {},
    latestVersionByEntityId: {},
    proposalMerkleById: {},
    events: []}
}

<<<<<<< HEAD
export function readState(): MultiverseState {
  ensureDataDir(),
  if (!fs.existsSync(STATE_PATH)) {
    const initial = defaultState(),
    fs.writeFileSync(STATE_PATH, JSON.stringify(initial, null, 2)),
    return initial
  }
  const raw = fs.readFileSync(STATE_PATH, "utf8"),
  try {
    const parsed = JSON.parse(raw) as MultiverseState,
    // Backfill missing fields on upgrade
    parsed.config.secretConfigured = Boolean(
      process.env.ZION_SYNC_SECRET && process.env.ZION_SYNC_SECRET.length > 0
    ),
    parsed.seenEventIds = parsed.seenEventIds || {},
    parsed.latestVersionByEntityId = parsed.latestVersionByEntityId || {},
    parsed.proposalMerkleById = parsed.proposalMerkleById || {},
    parsed.events = parsed.events || [],
    return parsed
  } catch {
    const initial = defaultState(),
    fs.writeFileSync(STATE_PATH, JSON.stringify(initial, null, 2)),
    return initial
  }
}

export function writeState(state: MultiverseState): void {
  ensureDataDir(),
  fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2))
}

export function upsertEvent(state: MultiverseState, event: SyncEvent): MultiverseState {
  if (state.seenEventIds[event.eventId]) return state,

  const entityId = getEntityId(event),
  const currentVersion = state.latestVersionByEntityId[entityId] || 0,
  const isNewer = event.version > currentVersion,

  if (event.type === "proposal" && event.merkleRoot && isNewer) {
    state.proposalMerkleById[entityId] = event.merkleRoot
  }

  if (isNewer) {
    state.latestVersionByEntityId[entityId] = event.version
  }
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  state.events.push(event),
  state.seenEventIds[event.eventId] = true,
  state.lastSyncedAt = Math.max(state.lastSyncedAt || 0, event.timestamp || 0),
  return state
}

<<<<<<< HEAD
export function getEntityId(event: SyncEvent): string {
  switch (event.type) {
    case "proposal": return (event.payload as any).proposalId,
=======
export function getEntityId(_event: SyncEvent): string {_switch (event.type) {
    case "proposal":
      return (event.payload as any).proposalId;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    case "token_transfer":
      return (event.payload as any).txId,
    case "talent_mobility":
      return (event.payload as any).personId + ":" + (event.payload as any).startDate,
    case "dao_endorsement":
      return (event.payload as any).resolutionId,
    case "leaderboard_entry":
      return (event.payload as any).subjectId + ":" + (event.payload as any).period,
    default:
<<<<<<< HEAD
      return (event.payload as any).id || event.eventId
  }
}

export function filterEventsByScope(
  events: SyncEvent[],
  scope: InstanceConfig["scope"]
): SyncEvent[] {
  if (scope === "full") return events,
  if (scope === "dao") {
    return events.filter((e) => e.type === "proposal" || e.type === "dao_endorsement")
  }
  if (scope === "marketplace") {
    return events.filter((e) => e.type === "token_transfer" || e.type === "talent_mobility" || e.type === "leaderboard_entry")
  }
  return events
=======
      return (event.payload as any).id || event.eventId;}
}

export function filterEventsByScope(_events: SyncEvent[], _scope: InstanceConfig["scope"]): SyncEvent[] {_if (scope === "full") return events;
  if (scope === "dao") {
    return events.filter(_(e) => e.type === "proposal" || e.type === "dao_endorsement");}
  if (scope === "marketplace") {_return events.filter(_(e) => e.type === "token_transfer" || e.type === "talent_mobility" || e.type === "leaderboard_entry");}
  return events;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}