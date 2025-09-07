import crypto from "crypto";

<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
// Merkle tree utilities;
export const merkle = {};
=======

import crypto from "crypto";"
// Merkle tree utilities;
export const merkle = {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Add merkle tree functionality here;
  create_tree: (leaves: string[]) => null,
  get_proof: (tree: any, leaf: string) => [],
  verify_proof: (proof: any[], leaf: string, root: string) => false;
}

<<<<<<< HEAD
export class MerkleTree {};
  private root: MerkleNode | null = null;
  private leaves: MerkleNode[] = [];

  constructor(data: any[]) {}
    this.buildTree(data);
  }

  private buildTree(data: any[]): void {}
    if (data.length === 0) return;

    // Create leaf nodes;
    this.leaves = data.map((item) => ({}
=======
export class MerkleTree {
  // TODO: Implement
  private root: MerkleNode | null = null;
  private leaves: MerkleNode[] = [];

  constructor(data: any[]) {
    this.buildTree(data);

  private buildTree(data: any[]): void {
  // TODO: Implement
    if (data.length === 0) return;

<<<<<<< HEAD
    // Create leaf nodes
    this.leaves = data.map((item) => ({
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    // Create leaf nodes;
    this.leaves = data.map((item) => ({)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      hash: this.hashData(JSON.stringify(item)),
      data: item,
    }));

<<<<<<< HEAD
<<<<<<< HEAD
    // Build tree bottom-up;
    let currentLevel = [...this.leaves];

    while (currentLevel.length > 1) {}
      const nextLevel: MerkleNode[] = [];

      for (let i = 0; i < currentLevel.length; i += 2) {}
        const left = currentLevel[i];
        const right = currentLevel[i + 1] || left; // Duplicate last node if odd number;
        const combinedHash = left.hash + right.hash;
        const parent: MerkleNode = {}
=======
    // Build tree bottom-up
=======
    // Build tree bottom-up;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    let currentLevel = [...this.leaves];

    while (currentLevel.length > 1) {
      const nextLevel: MerkleNode[] = [];

      for (let i = 0; i < currentLevel.length; i += 2) {
        const left = currentLevel[i];
        const right = currentLevel[i + 1] || left; // Duplicate last node if odd number;
        const combinedHash = left.hash + right.hash;
<<<<<<< HEAD
        const parent: MerkleNode = {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          hash: this.hashData(combinedHash),
=======
        const parent: MerkleNode = {,
  hash: this.hashData(combinedHash),
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          left,
          right,
        };

        nextLevel.push(parent);

      currentLevel = nextLevel;

    this.root = currentLevel[0];

<<<<<<< HEAD
  private hashData(data: string): string {"
    return crypto.createHash("sha256").update(data).digest("hex");
  }

  getRootHash(): string | null {}
    return this.root?.hash || null;
  }

  getProof(index: number): string[] {}
=======
  private hashData(data: string): string {
  // TODO: Implement
}"
    return crypto.createHash("sha256").update(data).digest("hex");"

  getRootHash(): string | null {
  // TODO: Implement
    return this.root?.hash || null;

  getProof(index: number): string[] {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    if (index >= this.leaves.length) return [];

    const proof: string[] = [];
    let current = this.leaves[index];
    let level = [...this.leaves];

<<<<<<< HEAD
    while (level.length > 1) {}
      const nextLevel: MerkleNode[] = [];
      const currentIndex = level.indexOf(current);

      if (currentIndex % 2 === 0) {}
        // Left node, add right sibling;
        if (currentIndex + 1 < level.length) {}
          proof.push(level[currentIndex + 1].hash);
        }
      } else {}
        // Right node, add left sibling;
        proof.push(level[currentIndex - 1].hash);
      }

      // Move to parent level;
      for (let i = 0; i < level.length; i += 2) {}
=======
    while (level.length > 1) {
      const currentIndex = level.indexOf(current);

      if (currentIndex % 2 === 0) {
        // Left node, add right sibling;
        if (currentIndex + 1 < level.length) {
          proof.push(level[currentIndex + 1].hash);
      } else {
  // TODO: Implement
        // Right node, add left sibling;
        proof.push(level[currentIndex - 1].hash);

      // Move to parent level;
      for (let i = 0; i < level.length; i += 2) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        const left = level[i];
        const right = level[i + 1] || left;

<<<<<<< HEAD
        const combinedHash = left.hash + right.hash;
<<<<<<< HEAD
        const parent: MerkleNode = {}
=======
        const parent: MerkleNode = {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          hash: this.hashData(combinedHash),
          left,
          right,
        };
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


      level = nextLevel;
      current = level[Math.floor(currentIndex / 2)];

    return proof;

<<<<<<< HEAD
  verifyProof(leafData: any, proof: string[], rootHash: string): boolean {}
    let currentHash = this.hashData(JSON.stringify(leafData));

    for (const siblingHash of proof) {}
=======
  verifyProof(leafData: any, proof: string[], rootHash: string): boolean {
  // TODO: Implement
    let currentHash = this.hashData(JSON.stringify(leafData));

    for (const siblingHash of proof) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      currentHash = this.hashData(currentHash + siblingHash);

    return currentHash === rootHash;

<<<<<<< HEAD
  getLeaves(): MerkleNode[] {}
=======
  getLeaves(): MerkleNode[] {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return [...this.leaves];

<<<<<<< HEAD
export function createMerkleTree(data: any[]): MerkleTree {};
=======
export function createMerkleTree(data: any[]): MerkleTree {
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  // TODO: Implement
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return new MerkleTree(data);

export function verifyMerkleProof(
  leafData: any,
  proof: string[],
<<<<<<< HEAD
  rootHash: string,
<<<<<<< HEAD
): boolean {};
  const tree = new MerkleTree([leafData]);
  return tree.verifyProof(leafData, proof, rootHash);
}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
  rootHash: string,)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
): boolean {
  // TODO: Implement
  const tree = new MerkleTree([leafData]);
  return tree.verifyProof(leafData, proof, rootHash);
<<<<<<< HEAD
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
"
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
