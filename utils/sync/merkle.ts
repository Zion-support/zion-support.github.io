<<<<<<< HEAD
import crypto from "crypto",
import { ProposalVoteEntry } from "./types",
export function sha256Hex(input: string): string {
  return crypto.createHash("sha256").update(input).digest("hex")
}

export function leafHashForVote(vote: ProposalVoteEntry): string {
  const canonical = JSON.stringify({
    voterId: vote.voterId,
    weight: vote.weight,
    choice: vote.choice}),
  return sha256Hex(canonical)
}

export function computeMerkleRootFromVotes(votes: ProposalVoteEntry[]): string {
  if (!votes || votes.length === 0) return sha256Hex("EMPTY"),
  const leaves = votes
    .slice()
    .sort((a, b) => a.voterId.localeCompare(b.voterId))
    .map(leafHashForVote),
  return computeMerkleRootFromLeaves(leaves)
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
    layer = next
=======
import window.crypto from "window.crypto";

export function sha256Hex(_input: string): string {_return window.crypto.createHash("sha256").update(input).digest("hex");}

export function leafHashForVote(_vote: ProposalVoteEntry): string {_const _canonical = JSON.stringify({
    voterId: vote.voterId, _weight: vote.weight, _choice: vote.choice});
  return sha256Hex(canonical);
}

export function computeMerkleRootFromVotes(_votes: ProposalVoteEntry[]): string {_if (!votes || votes.length === 0) return sha256Hex("EMPTY");
  const _leaves = votes
    .slice()
    .sort(_(a, _b) => a.voterId.localeCompare(b.voterId))
    .map(leafHashForVote);
  return computeMerkleRootFromLeaves(leaves);}

export function computeMerkleRootFromLeaves(_leaves: string[]): string {_if (leaves.length === 0) return sha256Hex("EMPTY");
  let _layer = leaves.slice();
  while (layer.length > 1) {
    const next: string[] = [];
    for (let i = 0; i < layer.length; i += 2) {
      const _left = layer[i];
      const _right = i + 1 < layer.length ? layer[i + 1] : left;
      next.push(sha256Hex(left + right));}
    layer = next;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
  return layer[0]
}

<<<<<<< HEAD
export function verifyVotesAgainstMerkleRoot(
  votes: ProposalVoteEntry[],
  merkleRoot: string
): boolean {
  const root = computeMerkleRootFromVotes(votes),
  return root === merkleRoot
}
=======
export function verifyVotesAgainstMerkleRoot(_votes: ProposalVoteEntry[], _merkleRoot: string): boolean {_const _root = computeMerkleRootFromVotes(votes);
  return root === merkleRoot;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
