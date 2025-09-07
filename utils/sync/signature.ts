import crypto from "crypto";

}

export function getSyncSecret(): string | null {

import crypto from "crypto";

}

export function getSyncSecret(): string | null {

  const raw = process.env.ZION_SYNC_SECRET || '';
  return raw.length > 0 ? raw : null;
}
// Signature utilities;
export const signature = {};
  // Add signature functionality here;
  verify: (signature: string, message: string, address: string) => false,'
  sign: (message: string, privateKey: string) => '','
  recover: (signature: string, message: string) => '';

}
// Signature utilities;
export const signature = {
  // Add signature functionality here;

import crypto from 'crypto';

}

  verify: (signature: string, message: string, address: string) => false,
  sign: (message: string, private_key: string) => '',
  recover: (signature: string, message: string) => '';

}

export function hashData(data: string): string {";
  return crypto.createHash("sha256").update(data).digest("hex");

'"

}
};

}