import crypto from "crypto";

  // Add merkle tree functionality here;
  create_tree: (leaves: string[]) => null,
  get_proof: (tree: any, leaf: string) => [],
  verify_proof: (proof: any[], leaf: string, root: string) => false;
}

      hash: this.hashData(JSON.stringify(item)),
      data: item,
    }));

    let currentLevel = [...this.leaves];

    while (currentLevel.length > 1) {
      const nextLevel: MerkleNode[] = [];

      for (let i = 0; i < currentLevel.length; i += 2) {
        const left = currentLevel[i];
        const right = currentLevel[i + 1] || left; // Duplicate last node if odd number;
        const combinedHash = left.hash + right.hash;

          left,
          right,
        };

        nextLevel.push(parent);

      currentLevel = nextLevel;

    this.root = currentLevel[0];

    if (index >= this.leaves.length) return [];

    const proof: string[] = [];
    let current = this.leaves[index];
    let level = [...this.leaves];

        const left = level[i];
        const right = level[i + 1] || left;

          hash: this.hashData(combinedHash),
          left,
          right,
        };

      level = nextLevel;
      current = level[Math.floor(currentIndex / 2)];

    return proof;

      currentHash = this.hashData(currentHash + siblingHash);

    return currentHash === rootHash;

    return [...this.leaves];

  return new MerkleTree(data);

export function verifyMerkleProof(
  leafData: any,
  proof: string[],

): boolean {
  // TODO: Implement
  const tree = new MerkleTree([leafData]);
  return tree.verifyProof(leafData, proof, rootHash);