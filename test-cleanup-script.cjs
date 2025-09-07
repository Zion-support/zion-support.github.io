#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class TestCleanupScript {
  constructor() {
    this.cleanedFiles = [];
    this.failedFiles = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'WARN' ? '⚠️' : '✅';
    console.log(`[${timestamp}] ${prefix} ${message}`);
  }

  async cleanTestFile(filePath) {
    if (!fs.existsSync(filePath)) {
      this.failedFiles.push(filePath);
      return;
    }

    this.log(`Cleaning test file: ${filePath}`);
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      // Clean up common test file issues
      content = this.cleanTestContent(content);
      
      // Write the cleaned content
      fs.writeFileSync(filePath, content, 'utf8');
      
      this.cleanedFiles.push(filePath);
      this.log(`Cleaned: ${filePath}`);
      
    } catch (error) {
      this.failedFiles.push(filePath);
      this.log(`Failed to clean ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  cleanTestContent(content) {
    // Remove duplicate imports and malformed code
    content = content.replace(/import _React from 'react';\s*,/g, '');
    content = content.replace(/import '@testing-library\/jest-dom';\s*';/g, "import '@testing-library/jest-dom';");
    content = content.replace(/const React from "react"/g, 'import React from "react"');
    
    // Fix malformed test structures
    content = content.replace(/describe\('([^']+)'\s*,\s*\(\)\s*=>\s*\{\s*it\s*\(/g, "describe('$1', () => {\n  it(");
    content = content.replace(/test\('([^']+)'\s*,\s*\(\)\s*=>\s*\{\s*render/g, "test('$1', () => {\n    render");
    
    // Remove duplicate closing braces
    content = content.replace(/\}\s*\}\s*\}\s*$/g, '});');
    
    // Fix malformed JSX in test files
    content = content.replace(/<h1>([^<]+)<\/h1>\s*<\/div>\s*\);/g, '');
    
    // Remove unterminated strings and malformed imports
    content = content.replace(/import\s+[^;]+;\s*$/gm, '');
    content = content.replace(/const\s+[^=]+=\s*"[^"]*$/gm, '');
    
    // Fix test structure
    content = content.replace(/describe\('([^']+)'\s*,\s*\(\)\s*=>\s*\{\s*it\s*\(/g, "describe('$1', () => {\n  it(");
    
    return content;
  }

  async processTestFiles() {
    this.log('Starting test file cleanup...');
    
    // Find all test files
    const testFiles = this.findTestFiles();
    
    this.log(`Found ${testFiles.length} test files to clean`);
    
    for (const file of testFiles) {
      await this.cleanTestFile(file);
    }
    
    this.log(`\n=== Test Cleanup Summary ===`);
    this.log(`Files processed: ${testFiles.length}`);
    this.log(`Files cleaned: ${this.cleanedFiles.length}`);
    this.log(`Files failed: ${this.failedFiles.length}`);
  }

  findTestFiles() {
    const files = [];
    const testDirs = ['__tests__', 'components', '.', 'src'];
    
    for (const dir of testDirs) {
      if (fs.existsSync(dir)) {
        files.push(...this.findFilesInDir(dir, ['.test.js', '.test.ts', '.test.tsx', '.test.jsx']));
      }
    }
    
    return files;
  }

  findFilesInDir(dir, extensions) {
    const files = [];
    
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          files.push(...this.findFilesInDir(fullPath, extensions));
        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (extensions.includes(ext)) {
            files.push(fullPath);
          }
        }
      }
    } catch (error) {
      // Skip directories we can't read
    }
    
    return files;
  }
}

// Run the cleanup
const cleaner = new TestCleanupScript();
cleaner.processTestFiles().catch(console.error);