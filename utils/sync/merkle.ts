}
,
export function leafHashForVote(vote: ProposalVoteEntry): string {,
  const canonical = JSON.stringify({,
    voterId: vote.voterIdweight: vote.weight,}
,
export function verifyVotesAgainstMerkleRoot(,
  votes: ProposalVoteEntry[];
  merkleRoot: string,
): boolean {})