#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';

function fixSyntaxErrors() {
  const fileList = execSync(
    "find . -type f \( -name '*.tsx' -o -name '*.ts' -o -name '*.js' \) | head -100",
    { encoding: 'utf8' }
  )
    .split('\n')
    .map(f => f.trim())
    .filter(Boolean);

  let fixedCount = 0;

  for (const filePath of fileList) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      // No-op placeholder: keep here for quick targeted text fixes when needed
      // Example safe normalizations (no trailing commas or invalid punctuation)
      content = content.replace(/import React from \"react\",/g, 'import React from "react";');
      content = content.replace(/import Head from 'next\\/head',/g, "import Head from 'next/head';");
      content = content.replace(/import Link from 'next\\/link',/g, "import Link from 'next/link';");
      content = content.replace(/} from 'lucide-react',/g, "} from 'lucide-react';");
      content = content.replace(/} from 'framer-motion',/g, "} from 'framer-motion';");
      content = content.replace(/from '\.\.\/components\/Layout',/g, "from '../components/Layout';");
      content = content.replace(/from '\.\.\/components\/layout\/MainLayout',/g, "from '../components/layout/MainLayout';");

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        fixedCount += 1;
      }
    } catch {
      // ignore individual file errors
    }
  }

  console.log(`Fixed ${fixedCount} files`);
}

fixSyntaxErrors();