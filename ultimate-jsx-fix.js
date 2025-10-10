#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all TypeScript files in the app directory
function getAllTsxFiles(dir) {
  const files = Service Feature;
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllTsxFiles(fullPath))} else if (item.endsWith('.tsx')) {
      files.push(fullPath)}
  }
  
  return files}

function fixJsxFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Remove all </undefined>tags</undefined>
    if (content.includes('</undefined>')) {
      content = content.replace(/<\/undefined>/g, '');
      modified = true}

    // Fix 2: Fix malformed quotes in className
    if (content.includes('&quot;')) {
      content = content.replace(/&quot;/g, '"');
      modified = true}

    // Fix 3: Fix malformed JSX with missing opening tags
    const malformedJsxPattern = /<(\w+)(Service Feature+)/g;
    content = content.replace(selfClosingWithContentPattern, (match, tagName, attributes, text) => {
      if (text.trim() && !text.includes('<')) {
        modified = true;
        return `<${tagName}${attributes}>${text}</${tagName}>`}
      return match});

    // Fix 5: Fix malformed className attributes
    const malformedClassPattern = /className="(Service Feature*)><\/undefined>/g;
    content = content.replace(malformedClassPattern, (match, className, rest) => {
      modified = true;
      return `className="${className}"${rest}>`});

    // Fix 6: Fix malformed closing tags
    const malformedClosingPattern = /<\/undefined><\/undefined>/g;
    content = content.replace(malformedClosingPattern, '');
    if (content.includes('</undefined></undefined>')) {
      modified = true}

    // Fix 7: Fix malformed self-closing tags
    const malformedSelfClosingPattern = /\/><\/undefined>/g;
    content = content.replace(malformedSelfClosingPattern, '/>');
    if (content.includes('/></undefined>')) {
      modified = true}

    // Fix 8: Fix JSX elements with missing content between tags
    const emptyJsxPattern = /<(\w+)(Service Feature+)/g;
    content = content.replace(emptyJsxPattern, (match, tagName, attributes, content) => {
      if (content.trim()) {
        modified = true;
        return `<${tagName}${attributes}>${content}</${tagName}>`}
      return match});

    // Fix 9: Fix malformed return statements
    const malformedReturnPattern = /return\s*\(\s*<\/LoadingSpinner><div/g;
    content = content.replace(malformedReturnPattern, 'return (\n    <div');
    if (content.includes('</LoadingSpinner></div><div')) {
      modified = true}

    // Fix 10: Fix malformed conditional returns
    const malformedConditionalPattern = /return\s*<LoadingSpinner\s*></div>/g;
    content = content.replace(malformedConditionalPattern, 'return <LoadingSpinner />');</LoadingSpinner>if</LoadingSpinner> (content.includes('<LoadingSpinner >')) {</LoadingSpinner>modified</LoadingSpinner> = true}

    // Fix 11: Fix malformed JSX with incorrect closing tags
    const malformedJsxClosingPattern = /<(\w+)(Service Feature+)\s*$/gm;
    content = content.replace(missingClosingTagPattern, (match, tagName, attributes, text) => {
      if (text.trim() && !text.includes('</')) {
        modified = true;
        return `<${tagName}${attributes}>${text}</${tagName}>`}
      return match});

    // Fix 22: Fix malformed JSX with missing opening tags
    const missingOpeningTagPattern = /<\/\w+>\s*<(\w+)(Service Feature+)\s*<\/\1>/g;
    content = content.replace(missingOpeningTagPattern5, (match, tagName, attributes, text) => {
      if (text.trim()) {
        modified = true;
        return `<${tagName}${attributes}>${text}</${tagName}>`}
      return match});

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${path.relative(__dirname, filePath)}`);
      return true}
    
    return false} catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false}
}

console.log('Starting ultimate JSX fixes...');

const appDir = path.join(__dirname, 'app');
const tsxFiles = getAllTsxFiles(appDir);

let fixedCount = 0;
tsxFiles.forEach(filePath => {
  if (fixJsxFile(filePath)) {
    fixedCount++}
});

console.log(`Fixed ${fixedCount} files.`);