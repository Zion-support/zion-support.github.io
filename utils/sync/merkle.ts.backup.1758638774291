<<<<<<< HEAD
import crypto from "crypto",
import { ProposalVoteEntry } from "./types",

export function sha256Hex(input: string): string {
  return crypto.createHash("sha256").update(input).digest("hex")
=======
import crypto from "crypto";
import { ProposalVoteEntry } from "./types";

export function sha256Hex(input: string): string {
  return crypto.createHash("sha256").update(input).digest("hex");
>>>>>>> origin/auto/autonomy-17186719616
}

export function leafHashForVote(vote: ProposalVoteEntry): string {
  const canonical = JSON.stringify({
    voterId: vote.voterId,
    weight: vote.weight,
<<<<<<< HEAD
    choice: vote.choice}),
  return sha256Hex(canonical),
}

export function computeMerkleRootFromVotes(votes: ProposalVoteEntry[]): string {
  if (!votes || votes.length === 0) return sha256Hex("EMPTY"),
  const leaves = votes
    .slice()
    .sort((a, b) => a.voterId.localeCompare(b.voterId))
    .map(leafHashForVote),
  return computeMerkleRootFromLeaves(leaves),
}

export function computeMerkleRootFromLeaves(leaves: string[]): string {
  if (leaves.length === 0) return sha256Hex("EMPTY"),
  let layer = leaves.slice(),
  while (layer.length > 1) {
    const next: string[] = [],
    for (let i = 0, i < layer.length, i += 2) {
      const left = layer[i],
      const right = i + 1 < layer.length ? layer[i + 1] : left,
      next.push(sha256Hex(left + right))
    }
    layer = next,
  }
  return layer[0],
=======
    choice: vote.choice,
  });
  return sha256Hex(canonical);
}

export function computeMerkleRootFromVotes(votes: ProposalVoteEntry[]): string {
  if (!votes || votes.length === 0) return sha256Hex("EMPTY");
  const leaves = votes
    .slice()
    .sort((a, b) => a.voterId.localeCompare(b.voterId))
    .map(leafHashForVote);
  return computeMerkleRootFromLeaves(leaves);
}

export function computeMerkleRootFromLeaves(leaves: string[]): string {
  if (leaves.length === 0) return sha256Hex("EMPTY");
  let layer = leaves.slice();
  while (layer.length > 1) {
    const next: string[] = [];
    for (let i = 0; i < layer.length; i += 2) {
      const left = layer[i];
      const right = i + 1 < layer.length ? layer[i + 1] : left;
      next.push(sha256Hex(left + right));
    }
    layer = next;
  }
  return layer[0];
>>>>>>> origin/auto/autonomy-17186719616
}

export function verifyVotesAgainstMerkleRoot(
  votes: ProposalVoteEntry[],
  merkleRoot: string
): boolean {
<<<<<<< HEAD
  const root = computeMerkleRootFromVotes(votes),
  return root === merkleRoot
=======
  const root = computeMerkleRootFromVotes(votes);
  return root === merkleRoot;
>>>>>>> origin/auto/autonomy-17186719616
}