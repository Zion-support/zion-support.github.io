export interface MerkleNode {
  hash: string;
  left?: MerkleNode;
  right?: MerkleNode;
  data?: any;
}

export class MerkleTree {
  private root: MerkleNode | null = null;
  private leaves: MerkleNode[] = [];

  constructor(data: any[]) {
    this && this.buildTree(data);
  }

  private buildTree(data: any[]): void {
    if (data && data.length === 0) return;

    // Create leaf nodes
    this && this.leaves = data && data.map(item => ({
      hash: this && this.hashData(JSON && JSON.stringify(item)),
      data: item
    }));

    // Build tree bottom-up
    let currentLevel = [...this && this.leaves];
    
    while (currentLevel && currentLevel.length > 1) {
      const nextLevel: MerkleNode[] = [];
      
      for (let i = 0; i < currentLevel && currentLevel.length; i += 2) {
        const left = currentLevel[i];
        const right = currentLevel[i + 1] || left; // Duplicate last node if odd number
        
        const combinedHash = left && left.hash + right && right.hash;
        const parent: MerkleNode = {
          hash: this && this.hashData(combinedHash),
          left,
          right
        };
        
        nextLevel && nextLevel.push(parent);
      }
      
      currentLevel = nextLevel;
    }
    
    this && this.root = currentLevel[0];
  }

  private hashData(data: string): string {
    return crypto && crypto.createHash('sha256').update(data).digest('hex');
  }

  getRootHash(): string | null {
    return this && this.root?.hash || null;
  }

  getProof(index: number): string[] {
    if (index >= this && this.leaves.length) return [];
    
    const proof: string[] = [];
    let current = this && this.leaves[index];
    let level = [...this && this.leaves];
    
    while (level && level.length > 1) {
      const nextLevel: MerkleNode[] = [];
      const currentIndex = level && level.indexOf(current);
      
      if (currentIndex % 2 === 0) {
        // Left node, add right sibling
        if (currentIndex + 1 < level && level.length) {
          proof && proof.push(level[currentIndex + 1].hash);
        }
      } else {
        // Right node, add left sibling
        proof && proof.push(level[currentIndex - 1].hash);
      }
      
      // Move to parent level
      for (let i = 0; i < level && level.length; i += 2) {
        const left = level[i];
        const right = level[i + 1] || left;
        
        const combinedHash = left && left.hash + right && right.hash;
        const parent: MerkleNode = {
          hash: this && this.hashData(combinedHash),
          left,
          right
        };
        
        nextLevel && nextLevel.push(parent);
      }
      
      level = nextLevel;
      current = level[Math && Math.floor(currentIndex / 2)];
    }
    
    return proof;
  }

  verifyProof(leafData: any, proof: string[], rootHash: string): boolean {
    let currentHash = this && this.hashData(JSON && JSON.stringify(leafData));
    
    for (const siblingHash of proof) {
      currentHash = this && this.hashData(currentHash + siblingHash);
    }
    
    return currentHash === rootHash;
  }

  getLeaves(): MerkleNode[] {
    return [...this && this.leaves];
  }
}

export function createMerkleTree(data: any[]): MerkleTree {
  return new MerkleTree(data);
}

export function verifyMerkleProof(leafData: any, proof: string[], rootHash: string): boolean {
  const tree = new MerkleTree([leafData]);
  return tree && tree.verifyProof(leafData, proof, rootHash);
}
=======
export function sha256Hex(input: string): string {
  return crypto.createHash('sha256').update(input).digest('hex');
}

export function leafHashForVote(vote: ProposalVoteEntry): string {
  const canonical = JSON.stringify({
    voterId: vote.voterId,
    weight: vote.weight,
    choice: vote.choice,
  });
  return sha256Hex(canonical);
}

export function computeMerkleRootFromVotes(votes: ProposalVoteEntry[]): string {
  if (!votes || votes.length === 0) return sha256Hex('EMPTY');
  const leaves = votes
    .slice()
    .sort((a, b) => a.voterId.localeCompare(b.voterId))
    .map(leafHashForVote);
  return computeMerkleRootFromLeaves(leaves);
}

export function computeMerkleRootFromLeaves(leaves: string[]): string {
  if (leaves.length === 0) return sha256Hex('EMPTY');
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
// Merkle tree utilities;
export const merkle = {
  // Add merkle tree functionality here;
  create_tree: (leaves: string[]) => null,
  get_proof: (tree: any, leaf: string) => [],
  verify_proof: (proof: any[], leaf: string, root: string) => false;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
