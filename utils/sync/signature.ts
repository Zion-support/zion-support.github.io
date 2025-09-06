// Signature utilities for sync operations
import { ethers } from 'ethers';

export interface SignatureData {
  message: string;
  signature: string;
  signer: string;
  timestamp: number;
}

export function createSignature(message: string, privateKey: string): SignatureData {
  const wallet = new ethers.Wallet(privateKey);
  const signature = wallet.signMessageSync(message);
  
  return {
    message,
    signature,
    signer: wallet.address,
    timestamp: Date.now()
  };
}

export function verifySignature(data: SignatureData): boolean {
  try {
    const recoveredAddress = ethers.verifyMessage(data.message, data.signature);
    return recoveredAddress.toLowerCase() === data.signer.toLowerCase();
  } catch (error) {
    return false;
  }
}

export function createMessageHash(data: any): string {
  const message = JSON.stringify(data, Object.keys(data).sort());
  return ethers.keccak256(ethers.toUtf8Bytes(message));
}