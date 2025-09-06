#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Starting ultimate final fixer...');

// Fix specific remaining issues
const fixes = [
  {
    file: '/workspace/data/api-docs/v1.ts',
    replacements: [
      {
        from: /versions: \['v1'\]\}\]\}\]\s*\}\s*\]/,
        to: "versions: ['v1']}]}]\n    }\n  ]"
      }
    ]
  },
  {
    file: '/workspace/lib/integrations/connectors.ts',
    replacements: [
      {
        from: /id: uuidv4\(\);/,
        to: "id: uuidv4(),"
      },
      {
        from: /timestamp: Date\.now\(\);/,
        to: "timestamp: Date.now(),"
      },
      {
        from: /providerId: connection\.providerId;/,
        to: "providerId: connection.providerId,"
      },
      {
        from: /level: 'info';/,
        to: "level: 'info',"
      }
    ]
  },
  {
    file: '/workspace/pages/api/analytics/events/track.ts',
    replacements: [
      {
        from: /name;/,
        to: "name,"
      },
      {
        from: /page;/,
        to: "page,"
      },
      {
        from: /userType;/,
        to: "userType,"
      },
      {
        from: /properties;/,
        to: "properties,"
      }
    ]
  },
  {
    file: '/workspace/pages/api/applications.ts',
    replacements: [
      {
        from: /id: uuidv4\(\);/,
        to: "id: uuidv4(),"
      },
      {
        from: /jobId: String\(jobId\);/,
        to: "jobId: String(jobId),"
      }
    ]
  }
];

fixes.forEach(({ file, replacements }) => {
  try {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8');
      let changed = false;
      
      replacements.forEach(({ from, to }) => {
        const newContent = content.replace(from, to);
        if (newContent !== content) {
          content = newContent;
          changed = true;
        }
      });
      
      if (changed) {
        fs.writeFileSync(file, content);
        console.log(`✅ Fixed ${path.basename(file)}`);
      }
    }
  } catch (error) {
    console.log(`⚠️ Could not fix ${path.basename(file)}:`, error.message);
  }
});

// Create missing adminAuth utility
const adminAuthPath = '/workspace/utils/adminAuth.ts';
if (!fs.existsSync(adminAuthPath)) {
  const adminAuthContent = `import type { NextApiRequest } from 'next';

export interface AdminUser {
  id: string;
  email: string;
  role: 'admin' | 'super_admin';
}

export function parseAdminFromRequest(req: NextApiRequest): AdminUser | null {
  // Mock implementation - in real app, this would parse JWT or session
  const authHeader = req.headers.authorization;
  if (!authHeader) return null;
  
  const token = authHeader.replace('Bearer ', '');
  if (token === 'admin-token') {
    return { id: 'admin-1', email: 'admin@zion.os', role: 'admin' };
  }
  
  return null;
}

export function ensureAdmin(user: AdminUser | null): void {
  if (!user || (user.role !== 'admin' && user.role !== 'super_admin')) {
    const error = new Error('Admin access required') as any;
    error.statusCode = 403;
    throw error;
  }
}
`;
  fs.writeFileSync(adminAuthPath, adminAuthContent);
  console.log('✅ Created adminAuth utility');
}

console.log('🎉 Ultimate final fixing completed!');