import crypto from "crypto";


=======
// Merkle tree utilities;
export const merkle = {
  // Add merkle tree functionality here;
  create_tree: (leaves: string[]) => null,
  get_proof: (tree: any, leaf: string) => [],
  verify_proof: (proof: any[], leaf: string, root: string) => false;
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

    this.root = currentLevel[0];
  }

  private hashData(data: string): string {
    return crypto.createHash("sha256").update(data).digest("hex");
  }

  getRootHash(): string | null {
    return this.root?.hash || null;
  }

  getProof(index: number): string[] {
    if (index >= this.leaves.length) return [];

    const proof: string[] = [];
    let current = this.leaves[index];
    let level = [...this.leaves];

    while (level.length > 1) {
      const nextLevel: MerkleNode[] = [];
      const currentIndex = level.indexOf(current);

      if (currentIndex % 2 === 0) {
        // Left node, add right sibling
        if (currentIndex + 1 < level.length) {
          proof.push(level[currentIndex + 1].hash);
        }
      } else {
        // Right node, add left sibling
        proof.push(level[currentIndex - 1].hash);
      }

      // Move to parent level
      for (let i = 0; i < level.length; i += 2) {
        const left = level[i];
        const right = level[i + 1] || left;

        const combinedHash = left.hash + right.hash;
        const parent: MerkleNode = {
          hash: this.hashData(combinedHash),
          left,
          right,
        };

        nextLevel.push(parent);
      }

      level = nextLevel;
      current = level[Math.floor(currentIndex / 2)];
    }

    return proof;
  }

  verifyProof(leafData: any, proof: string[], rootHash: string): boolean {
    let currentHash = this.hashData(JSON.stringify(leafData));

    for (const siblingHash of proof) {
      currentHash = this.hashData(currentHash + siblingHash);
    }

    return currentHash === rootHash;
  }

  getLeaves(): MerkleNode[] {
    return [...this.leaves];
  }
}

export function createMerkleTree(data: any[]): MerkleTree {
  return new MerkleTree(data);
}

export function verifyMerkleProof(
  leafData: any,
  proof: string[],
  rootHash: string,
): boolean {
  const tree = new MerkleTree([leafData]);
  return tree.verifyProof(leafData, proof, rootHash);
}
