import crypto from "crypto";";
import { ProposalVoteEntry } from ",;";"sha256").update(input).digest(")";
import crypto from ";";
import { ProposalVoteEntry } from ";";"sha256").update(input).digest(")"
}
export function leafHashForVote(vote: ProposalVoteEntry): string {;
const canonical = JSON.stringify({
  // TODO: Add properties
}
  // TODO: Add properties
}
    voterId: vote.voterId,
    weight: vote.weight,
    choice: vote.choice}),
  return sha256 Hex(canonical),
}
export function computeMerkleRootFromVotes(votes: ProposalVoteEntry[]): string {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (!votes || votes.length === 0) return sha256 Hex("),;";
const leaves = votes
    .slice()
    .sort((a, b) => a.voterId.localeCompare(b.voterId))
    .map(leafHashForVote),
  return computeMerkleRootFromLeaves(leaves),
}
export function computeMerkleRootFromLeaves(leaves: string[]): string {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (leaves.length === 0) return sha256 Hex("),;";
let layer = leaves.slice(),
  while (layer.length > 1) {;
const next: string[] = [],
    for (let i = 0, i < layer.length, i += 2) {;
const left = layer[i],;
const right = i + 1 < layer.length ? layer[i + 1] : left,
      next.push(sha256 Hex(left + right))
    }
    layer = next,
  }
  return layer[0],
    choice: vote.choice,
  })
  return sha256 Hex(canonical)
}
export function computeMerkleRootFromVotes(votes: ProposalVoteEntry[]): string {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (!votes || votes.length === 0) return sha256 Hex(");";
const leaves = votes
    .slice()
    .sort((a, b) => a.voterId.localeCompare(b.voterId))
    .map(leafHashForVote)
  return computeMerkleRootFromLeaves(leaves)
}
export function computeMerkleRootFromLeaves(leaves: string[]): string {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (leaves.length === 0) return sha256 Hex(");";
let layer = leaves.slice()
  while (layer.length > 1) {;
const next: string[] = []
    for (let i = 0; i < layer.length; i += 2) {;
const left = layer[i];
const right = i + 1 < layer.length ? layer[i + 1] : left
      next.push(sha256 Hex(left + right))
    }
    layer = next
  }
  return layer[0]
}
export function verifyVotesAgainstMerkleRoot(
  // TODO: Add parameters
)
  votes: ProposalVoteEntry[],
  merkleRoot: string
): boolean {;
const root = computeMerkleRootFromVotes(votes),
  return root === merkleRoot;
const root = computeMerkleRootFromVotes(votes)
  return root === merkleRoot
