import crypto from 'crypto';

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