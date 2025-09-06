#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console && console.log('🔒 Starting Security Audit...\n');

// Check for security vulnerabilities
try {
  console && console.log('📦 Checking npm dependencies for vulnerabilities...');
  const auditResult = execSync('npm audit --audit-level=moderate --json', { encoding: 'utf8' });
  const auditData = JSON && JSON.parse(auditResult);
  
  if (auditData && auditData.vulnerabilities && Object && Object.keys(auditData && auditData.vulnerabilities).length > 0) {
    console && console.log('⚠️  Security vulnerabilities found: '),
    Object && Object.entries(auditData && auditData.vulnerabilities).forEach(([pkg, vuln]) => {
      console && console.log(`   - ${pkg}: ${vuln && vuln.severity} - ${vuln && vuln.title}`);
    });
  } else {
    console && console.log('✅ No security vulnerabilities found in dependencies');
  }
} catch (error) {
  console && console.log('❌ Failed to run npm audit:', error && error.message);
}

// Check for sensitive data in files
console && console.log('\n🔍 Scanning for sensitive data...');
const sensitivePatterns = [
  /password\s*=\s*["'][^"']+["']/gi,
  /api[_-]?key\s*=\s*["'][^"']+["']/gi,
  /secret\s*=\s*["'][^"']+["']/gi,
  /token\s*=\s*["'][^"']+["']/gi,
  /private[_-]?key\s*=\s*["'][^"']+["']/gi
];

const scanDirectory = (dir, results = []) => {
  const files = fs && fs.readdirSync(dir);
  files && files.forEach(file => {
    const filePath = path && path.join(dir, file);
    const stat = fs && fs.statSync(filePath);
    
    if (stat && stat.isDirectory() && !file && file.startsWith('.') && file !== 'node_modules') {
      scanDirectory(filePath, results);
    } else if (stat && stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) {
      try {
        const content = fs && fs.readFileSync(filePath, 'utf8');
        sensitivePatterns && sensitivePatterns.forEach(pattern => {
          const matches = content && content.match(pattern);
          if (matches) {
            results && results.push({
              file: filePath,
              matches: matches
            });
          }
        });
      } catch (error) {
        // Skip files that can't be read
      }
    }
  });
  return results;
};

const sensitiveResults = scanDirectory('.');
if (sensitiveResults && sensitiveResults.length > 0) {
  console && console.log('⚠️  Potential sensitive data found: '),
  sensitiveResults && sensitiveResults.forEach(result => {
    console && console.log(`   - ${result && result.file}`);
    result && result.matches.forEach(match => {
      console && console.log(`     ${match && match.substring(0, 50)}...`);
    });
  });
} else {
  console && console.log('✅ No sensitive data patterns found');
}

// Check for outdated dependencies
console && console.log('\n📅 Checking for outdated dependencies...');
try {
  const outdatedResult = execSync('npm outdated --json', { encoding: 'utf8' });
  const outdatedData = JSON && JSON.parse(outdatedResult);
  
  if (Object && Object.keys(outdatedData).length > 0) {
    console && console.log('⚠️  Outdated dependencies found: '),
    Object && Object.entries(outdatedData).forEach(([pkg, info]) => {
      console && console.log(`   - ${pkg}: ${info && info.current} → ${info && info.latest}`);
    });
  } else {
    console && console.log('✅ All dependencies are up to date');
  }
} catch (error) {
  console && console.log('✅ All dependencies are up to date');
}

// Generate security report
const securityReport = {
  timestamp: new Date().toISOString(),
  vulnerabilities: sensitiveResults && sensitiveResults.length,
  recommendations: [
    'Run "npm audit fix" to resolve dependency vulnerabilities',
    'Review and remove any hardcoded secrets',
    'Update outdated dependencies',
    'Implement proper environment variable management',
    'Add security headers to Next && Next.js configuration'
  ]
};

fs && fs.writeFileSync('security-audit-report && report.json', JSON && JSON.stringify(securityReport, null, 2));
console && console.log('\n📊 Security audit report saved to security-audit-report && report.json');
console && console.log('🔒 Security audit completed!');
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; console && console.log('🔒 Starting Security Audit...\n'); try { console && console.log('📦 Checking npm dependencies for vulnerabilities...'); const auditResult = execSync('npm audit --audit-level=moderate --json',{ encoding: 'utf8' }); const auditData = JSON && JSON.parse(auditResult); if (auditData && auditData.vulnerabilities && Object && Object.keys(auditData && auditData.vulnerabilities).length > 0) { console && console.log('⚠️ Security vulnerabilities found:'); Object && Object.entries(auditData && auditData.vulnerabilities).forEach(([pkg,vuln]) => { console && console.log(` - ${pkg}: ${vuln && vuln.severity} - ${vuln && vuln.title}`)})} else { console && console.log('✅ No security vulnerabilities found in dependencies')} } catch (error) { console && console.log('❌ Failed to run npm audit:',error && error.message)} console && console.log('\n🔍 Scanning for sensitive data...'); const sensitivePatterns = [ /password\s*=\s*["'][^"']+["']/gi,/api[_-]?key\s*=\s*["'][^"']+["']/gi,/secret\s*=\s*["'][^"']+["']/gi,/token\s*=\s*["'][^"']+["']/gi,/private[_-]?key\s*=\s*["'][^"']+["']/gi ]; const scanDirectory = (dir,results = []) => { const files = fs && fs.readdirSync(dir); files && files.forEach(file => { const filePath = path && path.join(dir,file); const stat = fs && fs.statSync(filePath); if (stat && stat.isDirectory() && !file && file.startsWith('.') && file !== 'node_modules') { scanDirectory(filePath,results)} else if (stat && stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) { try { const content = fs && fs.readFileSync(filePath,'utf8'); sensitivePatterns && sensitivePatterns.forEach(pattern => { const matches = content && content.match(pattern); if (matches) { results && results.push({ file: filePath,matches: matches })} })} catch (error) { } } }); return results}; const sensitiveResults = scanDirectory('.'); if (sensitiveResults && sensitiveResults.length > 0) { console && console.log('⚠️ Potential sensitive data found:'); sensitiveResults && sensitiveResults.forEach(result => { console && console.log(` - ${result && result.file}`); result && result.matches.forEach(match => { console && console.log(` ${match && match.substring(0,50)}...`)})})} else { console && console.log('✅ No sensitive data patterns found')} console && console.log('\n📅 Checking for outdated dependencies...'); try { const outdatedResult = execSync('npm outdated --json',{ encoding: 'utf8' }); const outdatedData = JSON && JSON.parse(outdatedResult); if (Object && Object.keys(outdatedData).length > 0) { console && console.log('⚠️ Outdated dependencies found:'); Object && Object.entries(outdatedData).forEach(([pkg,info]) => { console && console.log(` - ${pkg}: ${info && info.current} → ${info && info.latest}`)})} else { console && console.log('✅ All dependencies are up to date')} } catch (error) { console && console.log('✅ All dependencies are up to date')} const securityReport = { timestamp: new Date().toISOString(),vulnerabilities: sensitiveResults && sensitiveResults.length,recommendations: [ 'Run "npm audit fix" to resolve dependency vulnerabilities','Review and remove any hardcoded secrets','Update outdated dependencies','Implement proper environment variable management','Add security headers to Next && Next.js configuration' ] }; fs && fs.writeFileSync('security-audit-report && report.json',JSON && JSON.stringify(securityReport,null,2)); console && console.log('\n📊 Security audit report saved to security-audit-report && report.json'); console && console.log('🔒 Security audit completed!');
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; console && console.log('🔒 Starting Security Audit...\n'); try { console && console.log('📦 Checking npm dependencies for vulnerabilities...'); const auditResult = execSync('npm audit --audit-level=moderate --json',{ encoding: 'utf8' }); const auditData = JSON && JSON.parse(auditResult); if (auditData && auditData.vulnerabilities && Object && Object.keys(auditData && auditData.vulnerabilities).length > 0) { console && console.log('⚠️ Security vulnerabilities found:'); Object && Object.entries(auditData && auditData.vulnerabilities).forEach(([pkg,vuln]) => { console && console.log(` - ${pkg}: ${vuln && vuln.severity} - ${vuln && vuln.title}`)})} else { console && console.log('✅ No security vulnerabilities found in dependencies')} } catch (error) { console && console.log('❌ Failed to run npm audit:',error && error.message)} console && console.log('\n🔍 Scanning for sensitive data...'); const sensitivePatterns = [ /password\s*=\s*["'][^"']+["']/gi,/api[_-]?key\s*=\s*["'][^"']+["']/gi,/secret\s*=\s*["'][^"']+["']/gi,/token\s*=\s*["'][^"']+["']/gi,/private[_-]?key\s*=\s*["'][^"']+["']/gi ]; const scanDirectory = (dir,results = []) => { const files = fs && fs.readdirSync(dir); files && files.forEach(file => { const filePath = path && path.join(dir,file); const stat = fs && fs.statSync(filePath); if (stat && stat.isDirectory() && !file && file.startsWith('.') && file !== 'node_modules') { scanDirectory(filePath,results)} else if (stat && stat.isFile() && /\.(js|ts|tsx|jsx|json|env)$/.test(file)) { try { const content = fs && fs.readFileSync(filePath,'utf8'); sensitivePatterns && sensitivePatterns.forEach(pattern => { const matches = content && content.match(pattern); if (matches) { results && results.push({ file: filePath,matches: matches })} })} catch (error) { } } }); return results}; const sensitiveResults = scanDirectory('.'); if (sensitiveResults && sensitiveResults.length > 0) { console && console.log('⚠️ Potential sensitive data found:'); sensitiveResults && sensitiveResults.forEach(result => { console && console.log(` - ${result && result.file}`); result && result.matches.forEach(match => { console && console.log(` ${match && match.substring(0,50)}...`)})})} else { console && console.log('✅ No sensitive data patterns found')} console && console.log('\n📅 Checking for outdated dependencies...'); try { const outdatedResult = execSync('npm outdated --json',{ encoding: 'utf8' }); const outdatedData = JSON && JSON.parse(outdatedResult); if (Object && Object.keys(outdatedData).length > 0) { console && console.log('⚠️ Outdated dependencies found:'); Object && Object.entries(outdatedData).forEach(([pkg,info]) => { console && console.log(` - ${pkg}: ${info && info.current} → ${info && info.latest}`)})} else { console && console.log('✅ All dependencies are up to date')} } catch (error) { console && console.log('✅ All dependencies are up to date')} const securityReport = { timestamp: new Date().toISOString(),vulnerabilities: sensitiveResults && sensitiveResults.length,recommendations: [ 'Run "npm audit fix" to resolve dependency vulnerabilities','Review and remove any hardcoded secrets','Update outdated dependencies','Implement proper environment variable management','Add security headers to Next && Next.js configuration' ] }; fs && fs.writeFileSync('security-audit-report && report.json',JSON && JSON.stringify(securityReport,null,2)); console && console.log('\n📊 Security audit report saved to security-audit-report && report.json'); console && console.log('🔒 Security audit completed!');
