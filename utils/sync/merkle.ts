import crypto from &quot;crypto&quot;;
import { ProposalVoteEntry } from &quot;./types&quot;;

export function sha256Hex(input: string): string {
  return crypto.createHash(&quot;sha256&quot;).update(input).digest(&quot;hex&quot;);
}

export function leafHashForVote(vote: ProposalVoteEntry): string {
  const canonical = JSON.stringify({
    voterId: vote.voterId,
    weight: vote.weight,
    choice: vote.choice});
  return sha256Hex(canonical);
}

export function computeMerkleRootFromVotes(votes: ProposalVoteEntry[]): string {
  if (!votes || votes.length === 0) return sha256Hex(&quot;EMPTY&quot;);
  const leaves = votes
    .slice()
    .sort((a, b) => a.voterId.localeCompare(b.voterId))
    .map(leafHashForVote);
  return computeMerkleRootFromLeaves(leaves);
}

export function computeMerkleRootFromLeaves(leaves: string[]): string {
  if (leaves.length === 0) return sha256Hex(&quot;EMPTY&quot;);
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
}

export function verifyVotesAgainstMerkleRoot(
  votes: ProposalVoteEntry[],
  merkleRoot: string
): boolean {
  const root = computeMerkleRootFromVotes(votes);
  return root === merkleRoot;
}