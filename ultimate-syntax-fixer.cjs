#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Starting ultimate syntax fixer...');

// Fix the v1.ts file structure - ultimate fix
function fixV1ApiDocs() {
  const filePath = '/workspace/data/api-docs/v1.ts';
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the structure by properly closing all brackets
    content = content.replace(
      /versions: \['v1'\]\}\]\}\]\s*\}\s*\]\s*\};/,
      "versions: ['v1']}]}]\n    }\n  ]\n};"
    );
    
    // Alternative fix if the above doesn't work
    content = content.replace(
      /versions: \['v1'\]\}\]\}\]\s*\}\s*\]/,
      "versions: ['v1']}]}]\n    }\n  ]"
    );
    
    fs.writeFileSync(filePath, content);
    console.log('✅ Fixed v1.ts structure');
  } catch (error) {
    console.log('⚠️ Could not fix v1.ts:', error.message);
  }
}

// Fix pitch generate file
function fixPitchGenerate() {
  const filePath = '/workspace/pages/api/admin/pitch/generate.ts';
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix syntax errors
    content = content.replace(
      /if \(!body\) return '',/,
      "if (!body) return '';"
    );
    
    fs.writeFileSync(filePath, content);
    console.log('✅ Fixed pitch generate syntax');
  } catch (error) {
    console.log('⚠️ Could not fix pitch generate:', error.message);
  }
}

// Fix pitch rewrite file
function fixPitchRewrite() {
  const filePath = '/workspace/pages/api/admin/pitch/rewrite.ts';
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix syntax errors
    content = content.replace(
      /if \(!slide\) return res\.status\(400\)\.json\(\{ error: 'Missing slide' \}\),/,
      "if (!slide) return res.status(400).json({ error: 'Missing slide' });"
    );
    
    fs.writeFileSync(filePath, content);
    console.log('✅ Fixed pitch rewrite syntax');
  } catch (error) {
    console.log('⚠️ Could not fix pitch rewrite:', error.message);
  }
}

// Fix tokens config file
function fixTokensConfig() {
  const filePath = '/workspace/pages/api/admin/tokens/config.ts';
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix syntax errors
    content = content.replace(
      /const body = req\.body \|\| \{\},/,
      "const body = req.body || {};"
    );
    
    content = content.replace(
      /const updated = \{ \.\.\.current, \.\.\.body \},/,
      "const updated = { ...current, ...body };"
    );
    
    content = content.replace(
      /return res\.status\(200\)\.json\(updated\)/,
      "return res.status(200).json(updated);"
    );
    
    fs.writeFileSync(filePath, content);
    console.log('✅ Fixed tokens config syntax');
  } catch (error) {
    console.log('⚠️ Could not fix tokens config:', error.message);
  }
}

// Fix tokens index file
function fixTokensIndex() {
  const filePath = '/workspace/pages/api/admin/tokens/index.ts';
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix syntax errors
    content = content.replace(
      /const \{ userId \} = req\.query,/,
      "const { userId } = req.query;"
    );
    
    content = content.replace(
      /res\.status\(200\)\.json\(\{ transactions: filtered \}\)/,
      "res.status(200).json({ transactions: filtered });"
    );
    
    fs.writeFileSync(filePath, content);
    console.log('✅ Fixed tokens index syntax');
  } catch (error) {
    console.log('⚠️ Could not fix tokens index:', error.message);
  }
}

// Run all fixes
fixV1ApiDocs();
fixPitchGenerate();
fixPitchRewrite();
fixTokensConfig();
fixTokensIndex();

console.log('🎉 Ultimate syntax fixing completed!');