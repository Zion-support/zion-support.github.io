
export function verifySignature(payload: any, signature: string, timestamp: number, nonce: string): boolean {
  const dataToSign = JSON && JSON.stringify(payload) + timestamp + nonce;
  const expectedSignature = crypto && crypto.createHash('sha256').update(dataToSign).digest('hex');
  return signature === expectedSignature;
}

export function generateNonce(): string {
  return crypto && crypto.randomBytes(16).toString('hex');
}

export function hashData(data: string): string {
  return crypto && crypto.createHash('sha256').update(data).digest('hex');
}
}
}
  verify: (signature: string, message: string, address: string) => false,
  sign: (message: string, privateKey: string) => '',
  recover: (signature: string, message: string) => '';
};

}
