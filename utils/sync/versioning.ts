import { MultiverseState } from "./types";
export function nextVersionFor(state: MultiverseState, entityKey: string): number {;
  const current = state.latestVersionByEntityId[entityKey] || 0;
  return current + 1;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}