// Merkle tree utilities for DAO operations
import crypto from 'crypto';

export interface MerkleNode {
  hash: string;
  left?: MerkleNode;
  right?: MerkleNode;
  data?: any;
}

export interface MerkleProof {
  leaf: string;
  path: string[];
  indices: number[];
  root: string;
}

export class MerkleTree {
  private root: MerkleNode;
  private leaves: string[];

  constructor(data: any[]) {
    this.leaves = data.map(item => this.hashItem(item));
    this.root = this.buildTree(this.leaves);
  }

  private hashItem(item: any): string {
    const jsonString = JSON.stringify(item, Object.keys(item).sort());
    return crypto.createHash('sha256').update(jsonString).digest('hex');
  }

  private hashPair(left: string, right: string): string {
    return crypto.createHash('sha256').update(left + right).digest('hex');
  }

  private buildTree(leaves: string[]): MerkleNode {
    if (leaves.length === 0) {
      throw new Error('Cannot build tree with empty leaves');
    }

    if (leaves.length === 1) {
      return { hash: leaves[0], data: leaves[0] };
    }

    const nodes: MerkleNode[] = leaves.map(leaf => ({ hash: leaf, data: leaf }));
    
    while (nodes.length > 1) {
      const nextLevel: MerkleNode[] = [];
      
      for (let i = 0; i < nodes.length; i += 2) {
        const left = nodes[i];
        const right = nodes[i + 1] || left; // Duplicate last node if odd number
        
        const parent: MerkleNode = {
          hash: this.hashPair(left.hash, right.hash),
          left,
          right
        };
        
        nextLevel.push(parent);
      }
      
      nodes.splice(0, nodes.length, ...nextLevel);
    }

    return nodes[0];
  }

  public getRoot(): string {
    return this.root.hash;
  }

  public getProof(index: number): MerkleProof | null {
    if (index < 0 || index >= this.leaves.length) {
      return null;
    }

    const path: string[] = [];
    const indices: number[] = [];
    let current = this.root;
    let targetIndex = index;

    while (current.left || current.right) {
      if (current.left && current.right) {
        // Internal node
        const leftSize = this.getSubtreeSize(current.left);
        
        if (targetIndex < leftSize) {
          // Go left
          path.push(current.right!.hash);
          indices.push(1); // Right sibling
          current = current.left;
        } else {
          // Go right
          path.push(current.left.hash);
          indices.push(0); // Left sibling
          current = current.right;
          targetIndex -= leftSize;
        }
      } else {
        // Leaf node
        break;
      }
    }

    return {
      leaf: this.leaves[index],
      path,
      indices,
      root: this.root.hash
    };
  }

  private getSubtreeSize(node: MerkleNode): number {
    if (!node.left && !node.right) {
      return 1; // Leaf node
    }
    
    let size = 0;
    if (node.left) size += this.getSubtreeSize(node.left);
    if (node.right) size += this.getSubtreeSize(node.right);
    
    return size;
  }

  public verifyProof(proof: MerkleProof): boolean {
    let currentHash = proof.leaf;
    
    for (let i = 0; i < proof.path.length; i++) {
      const siblingHash = proof.path[i];
      const isRightSibling = proof.indices[i] === 1;
      
      if (isRightSibling) {
        currentHash = this.hashPair(currentHash, siblingHash);
      } else {
        currentHash = this.hashPair(siblingHash, currentHash);
      }
    }
    
    return currentHash === proof.root;
  }

  public addLeaf(item: any): void {
    const newLeaf = this.hashItem(item);
    this.leaves.push(newLeaf);
    this.root = this.buildTree(this.leaves);
  }

  public removeLeaf(index: number): boolean {
    if (index < 0 || index >= this.leaves.length) {
      return false;
    }
    
    this.leaves.splice(index, 1);
    this.root = this.buildTree(this.leaves);
    return true;
  }

  public getLeaves(): string[] {
    return [...this.leaves];
  }

  public getTreeHeight(): number {
    return Math.ceil(Math.log2(this.leaves.length));
  }
}

export function createMerkleTree(data: any[]): MerkleTree {
  return new MerkleTree(data);
}

export function verifyMerkleProof(proof: MerkleProof): boolean {
  const tree = new MerkleTree([]);
  return tree.verifyProof(proof);
}

export function createMerkleProof(tree: MerkleTree, index: number): MerkleProof | null {
  return tree.getProof(index);
}

export function batchVerifyProofs(proofs: MerkleProof[]): boolean[] {
  return proofs.map(proof => verifyMerkleProof(proof));
}

export function createIncrementalMerkleTree(initialData: any[] = []): {
  tree: MerkleTree;
  addItem: (item: any) => void;
  removeItem: (index: number) => boolean;
  getProof: (index: number) => MerkleProof | null;
  getRoot: () => string;
} {
  const tree = new MerkleTree(initialData);
  
  return {
    tree,
    addItem: (item: any) => tree.addLeaf(item),
    removeItem: (index: number) => tree.removeLeaf(index),
    getProof: (index: number) => tree.getProof(index),
    getRoot: () => tree.getRoot()
  };
}