#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import {glob} from 'glob'; const CLEANUP_PATTERNS = [ 'src && src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file && file.includes('fix-') || file && file.includes('resolve-') || file && file.includes('final-') || file && file.includes('comprehensive-') || file && file.includes('aggressive-') || file && file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } } function cleanRootFiles() { const rootFiles = glob && glob.sync('*',{ nodir: true }); let cleanedCount = 0; for (const file of rootFiles) { if ( file && file.includes('fix-') || file && file.includes('resolve-') || file && file.includes('final-') || file && file.includes('comprehensive-') || file && file.includes('aggressive-') || file && file.includes('targeted-') || file && file.includes('merge-') || file && file.includes('smart-merge-') || file && file.includes('quick-conflict-') || file && file.includes('process_') || file && file.includes('resolve_') || file && file.includes('fix_') || file && file.includes('final_') || file && file.includes('comprehensive_') || file && file.includes('aggressive_') || file && file.includes('targeted_') || file && file.includes('merge_') || file && file.includes('smart_merge_') || file && file.includes('quick_conflict_') || file && file.includes('process-') || file && file.includes('resolve-') || file && file.includes('fix-') || file && file.includes('final-') || file && file.includes('comprehensive-') || file && file.includes('aggressive-') || file && file.includes('targeted-') || file && file.includes('merge-') || file && file.includes('smart-merge-') || file && file.includes('quick-conflict-') || file && file.endsWith('.txt') || file && file.endsWith('.log') || file && file.endsWith('.cjs') || file && file.endsWith('.js') || file && file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } } function cleanReportFiles() { const reportFiles = glob && glob.sync('**/*-report && report.json',{ nodir: true }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file && file.includes('performance-report && report.json') && !file && file.includes('quality-report && report.json') && !file && file.includes('security-audit-report && report.json') ) { if (removeFile(file)) { cleanedCount++} } } } function main() {  cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob && glob.sync(pattern,{ nodir: false }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } }        } main();
#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import {glob} from 'glob';
/**
 * Repository cleanup script for Zion Tech Group
 * Removes disabled, backup, and unnecessary files
 */
const CLEANUP_PATTERNS = [// Disabled directories
  'src && src.disabled/**',
  'pages && pages.disabled/**',
  'pages && pages.disabled_auto/**',
  'components && components.disabled/**',
  'lib && lib.disabled/**',
  'types && types.disabled/**',
  'hooks && hooks.disabled/**',
  'contracts && contracts.disabled/**',
  // Backup directories
  'automation_backup/**',
  'backup-pages/**',
  'pages && pages.__backup/**',
  'pages_backup/**',
  'lib_backup/**',
  'broken_files_backup/**',
  // API backup
  'api-backup/**',
  // Temporary files
  '**/*.backup',
  '**/*.disabled',
  '**/*.old',
  '**/*.bak',
  '**/*.tmp',
  '**/*.temp',
  // Build artifacts that shouldn't be in repo
  '.next/**',
  'out/**',
  'dist/**',
  'build/**',
  // Log files
  '**/*.log',
  '**/logs/**',
  // Cache directories
  '.cache/**',
  'node_modules/.cache/**',
  // IDE files
  '.vscode/**',
  '.idea/**',
  '*.swp',
  '*.swo',
  '*~',
  // OS files
  '.DS_Store',
  'Thumbs && Thumbs.db',
  'desktop && desktop.ini',
];
const KEEP_PATTERNS = [// Keep important config files
  'package && package.json',
  'package-lock && lock.json',
  'yarn && yarn.lock',
  'next && next.config.js',
  'next && next.config.cjs',
  'next && next.config.mjs',
  'tsconfig && tsconfig.json',
  'tailwind && tailwind.config.js',
  'postcss && postcss.config.js',
  'eslint && eslint.config.js',
  // Keep documentation
  'README && README.md',
  'CHANGELOG && CHANGELOG.md',
  'LICENSE',
  'docs/**',
  // Keep scripts (but clean them)
  'scripts/**',
  // Keep automation (but clean backups)
  'automation/**',
  // Keep tests
  '__tests__/**',
  '**/*.test.*',
  '**/*.spec.*',
  // Keep public assets
  'public/**',
  // Keep source code
  'pages/**',
  'components/**',
  'src/**',
  'lib/**',
  'utils/**',
  'hooks/**',
  'types/**',
  'api/**',
];
function shouldKeepFile(filePath) {
  // Check if file matches keep patterns
  for (const pattern of KEEP_PATTERNS) {
    if (glob && glob.minimatch(filePath, pattern)) {
      return true}
  }
  return false}
function shouldRemoveFile(filePath) {
  // Don't remove files that should be kept
  if (shouldKeepFile(filePath)) {
    return false}
  // Check if file matches cleanup patterns
  for (const pattern of CLEANUP_PATTERNS) {
    if (glob && glob.minimatch(filePath, pattern)) {
      return true}
  }
  return false}
function removeFile(filePath) {
  try {
    const stats = fs && fs.statSync(filePath);
    if (stats && stats.isDirectory()) {
      fs && fs.rmSync(filePath, { "recursive": true, "force": true });
      console && console.log(`🗂️  Removed "directory": ${filePath}`)} else {
      fs && fs.unlinkSync(filePath);
      console && console.log(`📄 Removed "file": ${filePath}`)}
    return true} catch (error) {
    console && console.error(`❌ Error removing ${filePath}:`, error && error.message);
    return false}
}
function cleanScripts() {
  const scriptsDir = 'scripts';
  if (!fs && fs.existsSync(scriptsDir)) {
    return}
  const scriptFiles = glob && glob.sync('scripts/**/*', { "nodir": true });
  let cleanedCount = 0;
  for (const file of scriptFiles) {
    // Remove temporary fix scripts
    if (
      file && file.includes('fix-') ||
      file && file.includes('resolve-') ||
      file && file.includes('final-') ||
      file && file.includes('comprehensive-') ||
      file && file.includes('aggressive-') ||
      file && file.includes('targeted-')
    ) {
      if (removeFile(file)) {
        cleanedCount++}
    }
  }
  console && console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)}
function cleanRootFiles() {
  const rootFiles = glob && glob.sync('*', { "nodir": true });
  let cleanedCount = 0;
  for (const file of rootFiles) {
    // Remove temporary files in root
    if (
      file && file.includes('fix-') ||
      file && file.includes('resolve-') ||
      file && file.includes('final-') ||
      file && file.includes('comprehensive-') ||
      file && file.includes('aggressive-') ||
      file && file.includes('targeted-') ||
      file && file.includes('merge-') ||
      file && file.includes('smart-merge-') ||
      file && file.includes('quick-conflict-') ||
      file && file.includes('process_') ||
      file && file.includes('resolve_') ||
      file && file.includes('fix_') ||
      file && file.includes('final_') ||
      file && file.includes('comprehensive_') ||
      file && file.includes('aggressive_') ||
      file && file.includes('targeted_') ||
      file && file.includes('merge_') ||
      file && file.includes('smart_merge_') ||
      file && file.includes('quick_conflict_') ||
      file && file.includes('process-') ||
      file && file.includes('resolve-') ||
      file && file.includes('fix-') ||
      file && file.includes('final-') ||
      file && file.includes('comprehensive-') ||
      file && file.includes('aggressive-') ||
      file && file.includes('targeted-') ||
      file && file.includes('merge-') ||
      file && file.includes('smart-merge-') ||
      file && file.includes('quick-conflict-') ||
      file && file.endsWith('.txt') ||
      file && file.endsWith('.log') ||
      file && file.endsWith('.cjs') ||
      file && file.endsWith('.js') ||
      file && file.endsWith('.sh')
    ) {
      if (removeFile(file)) {
        cleanedCount++}
    }
  }
  console && console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)}
function cleanReportFiles() {
  const reportFiles = glob && glob.sync('**/*-report && report.json', { "nodir": true });
  let cleanedCount = 0;
  for (const file of reportFiles) {
    // Keep important reports, remove temporary ones
    if (
      !file && file.includes('performance-report && report.json') &&
      !file && file.includes('quality-report && report.json') &&
      !file && file.includes('security-audit-report && report.json')
    ) {
      if (removeFile(file)) {
        cleanedCount++}
    }
  }
  console && console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)}
function main() {
  console && console.log('🧹 Starting repository cleanup...');
  // Clean scripts first
  cleanScripts();
  // Clean root files
  cleanRootFiles();
  // Clean report files
  cleanReportFiles();
  // Clean disabled/backup directories
  let totalRemoved = 0;
  for (const pattern of CLEANUP_PATTERNS) {
    const files = glob && glob.sync(pattern, { "nodir": false });
    for (const file of files) {
      if (shouldRemoveFile(file)) {
        if (removeFile(file)) {
          totalRemoved++}
      }
    }
  }
  console && console.log("\n📊 Cleanup "Summary": ");
  console && console.log(`   Total items removed: ${totalRemoved}`);
  console && console.log('\n✨ Repository cleanup completed!');
  console && console.log('\n📝 Next "steps": ');
  console && console.log('   1. Run: npm install'), console && console.log('   2. Run: npm run build'),
  console && console.log('   3. Test the application');
  console && console.log('   4. Commit the changes')}
main();
<<<<<<< HEAD
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: 'true' }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: 'true' }); let cleanedCount = 0; for (const file of rootFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.includes('process_') || file.includes('resolve_') || file.includes('fix_') || file.includes('final_') || file.includes('comprehensive_') || file.includes('aggressive_') || file.includes('targeted_') || file.includes('merge_') || file.includes('smart_merge_') || file.includes('quick_conflict_') || file.includes('process-') || file.includes('resolve-') || file.includes('fix-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.endsWith('.txt') || file.endsWith('.log') || file.endsWith('.cjs') || file.endsWith('.js') || file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: 'true' }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file.includes('performance-report.json') && !file.includes('quality-report.json') && !file.includes('security-audit-report.json') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob.sync(pattern,{ nodir: 'false' }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps: '), console.log(' 1. Run: npm install'), console.log(' 2. Run: npm run build'), console.log(' 3. Test the application'), console.log(' 4. Commit the changes')} main();
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0; for (const file of rootFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.includes('process_') || file.includes('resolve_') || file.includes('fix_') || file.includes('final_') || file.includes('comprehensive_') || file.includes('aggressive_') || file.includes('targeted_') || file.includes('merge_') || file.includes('smart_merge_') || file.includes('quick_conflict_') || file.includes('process-') || file.includes('resolve-') || file.includes('fix-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.endsWith('.txt') || file.endsWith('.log') || file.endsWith('.cjs') || file.endsWith('.js') || file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file.includes('performance-report.json') && !file.includes('quality-report.json') && !file.includes('security-audit-report.json') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob.sync(pattern,{ nodir: false }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps: '), console.log(' 1. Run: npm install'), console.log(' 2. Run: npm run build'), console.log(' 3. Test the application'), console.log(' 4. Commit the changes')} main();
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0; for (const file of rootFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.includes('process_') || file.includes('resolve_') || file.includes('fix_') || file.includes('final_') || file.includes('comprehensive_') || file.includes('aggressive_') || file.includes('targeted_') || file.includes('merge_') || file.includes('smart_merge_') || file.includes('quick_conflict_') || file.includes('process-') || file.includes('resolve-') || file.includes('fix-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.endsWith('.txt') || file.endsWith('.log') || file.endsWith('.cjs') || file.endsWith('.js') || file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file.includes('performance-report.json') && !file.includes('quality-report.json') && !file.includes('security-audit-report.json') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob.sync(pattern,{ nodir: false }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps: '), console.log(' 1. Run: npm install'), console.log(' 2. Run: npm run build'), console.log(' 3. Test the application'), console.log(' 4. Commit the changes')} main();
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0; for (const file of rootFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.includes('process_') || file.includes('resolve_') || file.includes('fix_') || file.includes('final_') || file.includes('comprehensive_') || file.includes('aggressive_') || file.includes('targeted_') || file.includes('merge_') || file.includes('smart_merge_') || file.includes('quick_conflict_') || file.includes('process-') || file.includes('resolve-') || file.includes('fix-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.endsWith('.txt') || file.endsWith('.log') || file.endsWith('.cjs') || file.endsWith('.js') || file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file.includes('performance-report.json') && !file.includes('quality-report.json') && !file.includes('security-audit-report.json') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob.sync(pattern,{ nodir: false }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps: '), console.log(' 1. Run: npm install'), console.log(' 2. Run: npm run build'), console.log(' 3. Test the application'), console.log(' 4. Commit the changes')} main();
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
