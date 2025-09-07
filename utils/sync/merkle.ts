import crypto from "crypto";
import { ProposalVoteEntry } from "./types";
export function sha256Hex(input: string): string {
  return crypto.createHash("sha256").update(input).digest("hex")
}

export function leafHashForVote(vote: ProposalVoteEntry): string {
  const canonical = JSON.stringify($2);
  return sha256Hex(canonical)
}

export function computeMerkleRootFromVotes(votes: ProposalVoteEntry[]): string {
  if (!votes || votes.length === 0) return sha256Hex($2);
  const leaves = votes
    .slice()
    .sort((a, b) => a.voterId.localeCompare(b.voterId))
    .map($2);
  return computeMerkleRootFromLeaves(leaves)
}

export function computeMerkleRootFromLeaves(leaves: string[]): string {
  if (leaves.length === 0) return sha256Hex($2);
  let layer = leaves.slice($2);
  while (layer.length > 1) {
    const next: string[] = [],
    for (let i = 0, i < layer.length, i += 2) {
      const left = $2;
      const right = $2;
      next.push(sha256Hex(left + right))
    }
    layer = $2;
  merkleRoot: string): boolean {
  const root = computeMerkleRootFromVotes($2);
  return root === merkleRoot
}