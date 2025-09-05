import fs from &quot;fs&quot;;
import path from &quot;path&quot;;
import { MultiverseState, InstanceConfig, SyncEvent } from &quot;./types&quot;;

const DATA_DIR = path.join(process.cwd(), &quot;data&quot;, &quot;multiverse&quot;);
const STATE_PATH = path.join(DATA_DIR, &quot;state.json&quot;);

function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
}

function defaultConfig(): InstanceConfig {
  const instanceId = process.env.ZION_INSTANCE_ID || &quot;zion-local&quot;;
  return {
    instanceId,
    optIn: false,
    paused: false,
    scope: &quot;full&quot;,
    peers: [],
    secretConfigured: Boolean(process.env.ZION_SYNC_SECRET && process.env.ZION_SYNC_SECRET.length > 0)};
}

function defaultState(): MultiverseState {
  return {
    config: defaultConfig(),
    lastSyncedAt: 0,
    seenEventIds: {},
    latestVersionByEntityId: {},
    proposalMerkleById: {},
    events: []};
}

export function readState(): MultiverseState {
  ensureDataDir();
  if (!fs.existsSync(STATE_PATH)) {
    const initial = defaultState();
    fs.writeFileSync(STATE_PATH, JSON.stringify(initial, null, 2));
    return initial;
  }
  const raw = fs.readFileSync(STATE_PATH, &quot;utf8&quot;);
  try {
    const parsed = JSON.parse(raw) as MultiverseState;
    // Backfill missing fields on upgrade
    parsed.config.secretConfigured = Boolean(
      process.env.ZION_SYNC_SECRET && process.env.ZION_SYNC_SECRET.length > 0
    );
    parsed.seenEventIds = parsed.seenEventIds || {};
    parsed.latestVersionByEntityId = parsed.latestVersionByEntityId || {};
    parsed.proposalMerkleById = parsed.proposalMerkleById || {};
    parsed.events = parsed.events || [];
    return parsed;
  } catch {
    const initial = defaultState();
    fs.writeFileSync(STATE_PATH, JSON.stringify(initial, null, 2));
    return initial;
  }
}

export function writeState(state: MultiverseState): void {
  ensureDataDir();
  fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2));
}

export function upsertEvent(state: MultiverseState, event: SyncEvent): MultiverseState {
  if (state.seenEventIds[event.eventId]) return state;

  const entityId = getEntityId(event);
  const currentVersion = state.latestVersionByEntityId[entityId] || 0;
  const isNewer = event.version > currentVersion;

  if (event.type === &quot;proposal&quot; && event.merkleRoot && isNewer) {
    state.proposalMerkleById[entityId] = event.merkleRoot;
  }

  if (isNewer) {
    state.latestVersionByEntityId[entityId] = event.version;
  }

  state.events.push(event);
  state.seenEventIds[event.eventId] = true;
  state.lastSyncedAt = Math.max(state.lastSyncedAt || 0, event.timestamp || 0);
  return state;
}

export function getEntityId(event: SyncEvent): string {
  switch (event.type) {
    case &quot;proposal&quot;:
      return (event.payload as any).proposalId;
    case &quot;token_transfer&quot;:
      return (event.payload as any).txId;
    case &quot;talent_mobility&quot;:
      return (event.payload as any).personId + &quot;:&quot; + (event.payload as any).startDate;
    case &quot;dao_endorsement&quot;:
      return (event.payload as any).resolutionId;
    case &quot;leaderboard_entry&quot;:
      return (event.payload as any).subjectId + &quot;:&quot; + (event.payload as any).period;
    default:
      return (event.payload as any).id || event.eventId;
  }
}

export function filterEventsByScope(
  events: SyncEvent[],
  scope: InstanceConfig[&quot;scope&quot;]
): SyncEvent[] {
  if (scope === &quot;full&quot;) return events;
  if (scope === &quot;dao&quot;) {
    return events.filter((e) => e.type === &quot;proposal&quot; || e.type === &quot;dao_endorsement&quot;);
  }
  if (scope === &quot;marketplace&quot;) {
    return events.filter((e) => e.type === &quot;token_transfer&quot; || e.type === &quot;talent_mobility&quot; || e.type === &quot;leaderboard_entry&quot;);
  }
  return events;
}