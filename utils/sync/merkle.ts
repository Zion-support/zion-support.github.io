// Merkle tree utilities for sync operations
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

export function createMerkleTree(data: any[]): MerkleNode {
  if (data.length === 0) {
    throw new Error('Cannot create Merkle tree with empty data');
  }

  if (data.length === 1) {
    return {
      hash: createHash(data[0]),
      data: data[0]
    };
  }

  const leaves = data.map(item => ({
    hash: createHash(item),
    data: item
  }));

  let currentLevel = leaves;

  while (currentLevel.length > 1) {
    const nextLevel: MerkleNode[] = [];
    
    for (let i = 0; i < currentLevel.length; i += 2) {
      const left = currentLevel[i];
      const right = currentLevel[i + 1] || left; // Duplicate last node if odd number
      
      const combinedHash = createHash(left.hash + right.hash);
      
      nextLevel.push({
        hash: combinedHash,
        left,
        right
      });
    }
    
    currentLevel = nextLevel;
  }

  return currentLevel[0];
}

export function createMerkleProof(tree: MerkleNode, targetHash: string): MerkleProof | null {
  const path: string[] = [];
  const indices: number[] = [];
  
  function findPath(node: MerkleNode, target: string, index: number): boolean {
    if (node.hash === target) {
      return true;
    }
    
    if (node.left && findPath(node.left, target, index * 2)) {
      path.push(node.right?.hash || '');
      indices.push(1);
      return true;
    }
    
    if (node.right && findPath(node.right, target, index * 2 + 1)) {
      path.push(node.left?.hash || '');
      indices.push(0);
      return true;
    }
    
    return false;
  }
  
  if (findPath(tree, targetHash, 0)) {
    return {
      leaf: targetHash,
      path: path.reverse(),
      indices: indices.reverse(),
      root: tree.hash
    };
  }
  
  return null;
}

export function verifyMerkleProof(proof: MerkleProof): boolean {
  let currentHash = proof.leaf;
  
  for (let i = 0; i < proof.path.length; i++) {
    const siblingHash = proof.path[i];
    const isLeft = proof.indices[i] === 0;
    
    if (isLeft) {
      currentHash = createHash(currentHash + siblingHash);
    } else {
      currentHash = createHash(siblingHash + currentHash);
    }
  }
  
  return currentHash === proof.root;
}

function createHash(data: any): string {
  const json = typeof data === 'string' ? data : JSON.stringify(data);
  // Simple hash function - in production, use crypto.createHash
  let hash = 0;
  for (let i = 0; i < json.length; i++) {
    const char = json.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return hash.toString(16);
}