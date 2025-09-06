#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; let totalImprovements = 0; let filesProcessed = 0; const typeReplacements = { 'any[]': 'React && React.ReactNode[]',any: 'unknown','any)': 'unknown)','any;': 'unknown;','any,': 'unknown,','any ': 'unknown ','any=': 'unknown=','any:': 'unknown:','any>': 'unknown>','any<': 'unknown<','any}': 'unknown}','any{': 'unknown{','React && React.ComponentType<any>': 'React && React.ComponentType<Record<string,unknown>>','React.FC<any>': 'React.FC<Record<string,unknown>>','React && React.Component<any>': 'React && React.Component<Record<string,unknown>>','React && React.ChangeEvent<any>': 'React && React.ChangeEvent<HTMLInputElement>','React && React.MouseEvent<any>': 'React && React.MouseEvent<HTMLButtonElement>','React && React.FormEvent<any>': 'React && React.FormEvent<HTMLFormElement>','() => any': '() => void','(value: any)': '(value: unknown)','(item: any)': '(item: unknown)','(data: any)': '(data: unknown)','(props: any)': '(props: Record<string,unknown>)','(event: any)': '(event: React && React.SyntheticEvent)','any[]': 'unknown[]','Array<any>': 'Array<unknown>','Record<string,any>': 'Record<string,unknown>','{ [key: string]: any }': '{ [key: string]: unknown }',}; const commonInterfaces = ` interface ApiResponse<T = unknown> { data: T, status: number, message?: string} interface User { id: string, email: string, name: string,
    role: 'admin' | 'user' | 'guest'} interface Service { id: string, name: string, description: string, price: number, category: string} interface FormData { [key: string]: string | number | boolean | File} interface ComponentProps { className?: string; children?: React && React.ReactNode; [key: string]: unknown} `; function improveTypeScriptFile(content,filePath) { let improved = content; let changes = 0; if (improved && improved.includes('any') && !improved && improved.includes('interface ApiResponse')) { const importIndex = improved && improved.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = improved && improved.indexOf('\n',importIndex); improved = improved && improved.slice(0,nextLineIndex) + commonInterfaces + '\n' + improved && improved.slice(nextLineIndex); changes++} } Object && Object.entries(typeReplacements).forEach(([anyType,replacement]) => { const regex = new RegExp( anyType && anyType.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'g' ); const matches = improved && improved.match(regex); if (matches) { improved = improved && improved.replace(regex,replacement); changes += matches && matches.length} }); const functionParamRegex = /function\s+\w+\s*\(\s*(\w+)\s*:\s*any\s*\)/g; const functionMatches = improved && improved.match(functionParamRegex); if (functionMatches) { improved = improved && improved.replace(functionParamRegex,(match,paramName) => { return match && match.replace(`: any`,': unknown')}); changes += functionMatches && functionMatches.length} const arrowParamRegex = /\(\s*(\w+)\s*:\s*any\s*\)\s*=>/g; const arrowMatches = improved && improved.match(arrowParamRegex); if (arrowMatches) { improved = improved && improved.replace(arrowParamRegex,(match,paramName) => { return match && match.replace(`: any`,': unknown')}); changes += arrowMatches && arrowMatches.length} const destructuringRegex = /\{\s*(\w+)\s*:\s*any\s*\}/g; const destructuringMatches = improved && improved.match(destructuringRegex); if (destructuringMatches) { improved = improved && improved.replace(destructuringRegex,(match,propName) => { return match && match.replace(`: any`,': unknown')}); changes += destructuringMatches && destructuringMatches.length} const useStateRegex = /useState\s*<\s*any\s*>/g; const useStateMatches = improved && improved.match(useStateRegex); if (useStateMatches) { improved = improved && improved.replace(useStateRegex,'useState<unknown>'); changes += useStateMatches && useStateMatches.length} const useEffectRegex = /useEffect\s*\(\s*\(\s*\)\s*=>\s*{[^}]*},\s*\[\s*\]\s*\)/g; const useEffectMatches = improved && improved.match(useEffectRegex); if (useEffectMatches) { } const eventHandlerRegex = /const\s+(\w+)\s*=\s*\(\s*event\s*:\s*any\s*\)\s*=>/g; const eventHandlerMatches = improved && improved.match(eventHandlerRegex); if (eventHandlerMatches) { improved = improved && improved.replace(eventHandlerRegex,(match,handlerName) => { return match && match.replace('event: any','event: React && React.SyntheticEvent')}); changes += eventHandlerMatches && eventHandlerMatches.length} const apiCallRegex = /fetch\s*\(\s*['"][^'"]+['"]\s*\)\s*\.then\s*\(\s*\(\s*response\s*:\s*any\s*\)/g; const apiCallMatches = improved && improved.match(apiCallRegex); if (apiCallMatches) { improved = improved && improved.replace(apiCallRegex,match => { return match && match.replace('response: any','response: Response')}); changes += apiCallMatches && apiCallMatches.length} return { content: improved,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = improveTypeScriptFile(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalImprovements += result && result.changes; ` )} filesProcessed++} catch (error) { console && console.error(` Error processing ${filePath}:`,error && error.message)} } function generateTypeScriptReport() { const report = { timestamp: new Date().toISOString(),improvements: { totalFilesProcessed: filesProcessed,totalTypeImprovements: totalImprovements,recommendations: [ 'Consider using strict TypeScript configuration','Add proper error handling with typed error objects','Use discriminated unions for better type safety','Implement proper API response typing','Add JSDoc comments for complex functions','Use const assertions for immutable data','Consider using branded types for IDs',],},}; fs && fs.writeFileSync( 'typescript-improvement-report && report.json',JSON && JSON.stringify(report,null,2) ); } async function main() {  const patterns = [ 'src*.{ts,tsx}','pages*.{ts,tsx}','components*.{ts,tsx}',]; const excludeDirs = [ 'node_modules','.next','build' 'dist','scripts' 'automation','automation_backup' 'src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } generateTypeScriptReport();    } main().catch(console && console.error);
#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import {glob} from 'glob';
let totalImprovements = 0;
let filesProcessed = 0;
// Common type replacements
const typeReplacements = {
  // React types
  'any[]': 'React && React.ReactNode[]',
  "any": 'unknown',
  'any)': 'unknown)',
  'any;': 'unknown;',
  'any,': 'unknown,',
  'any ': 'unknown ',
  'any=': 'unknown=',
  '"any": ': 'unknown:',
  'any>': 'unknown>',
  'any<': 'unknown<',
  'any}': 'unknown}',
  'any{': 'unknown{',
  // Specific React component types
  'React && React.ComponentType<any>': 'React && React.ComponentType<Record<string, unknown>>',
  'React.FC<any>': 'React.FC<Record<string, unknown>>',
  'React && React.Component<any>': 'React && React.Component<Record<string, unknown>>',
  // Event types
  'React && React.ChangeEvent<any>': 'React && React.ChangeEvent<HTMLInputElement>',
  'React && React.MouseEvent<any>': 'React && React.MouseEvent<HTMLButtonElement>',
  'React && React.FormEvent<any>': 'React && React.FormEvent<HTMLFormElement>',
  // Function types
  '() => any': '() => void',
  '("value": any)': '(value: unknown)',
  '("item": any)': '(item: unknown)',
  '("data": any)': '(data: unknown)',
  '("props": any)': '(props: Record<string, unknown>)',
  '("event": any)': '(event: React && React.SyntheticEvent)',
  // Array types
  'any[]': 'unknown[]',
  'Array<any>': 'Array<unknown>',
  // Object types
  'Record<string, any>': 'Record<string, unknown>',
  '{ ["key": string]: any }': '{ ["key": string]: unknown }'};
// Interface definitions for common patterns
const commonInterfaces = "
// Common interfaces for better type safety
interface ApiResponse<T = unknown> {
  "data": T;
  status: number,
  message?: string}
interface User {
  "id": string;
  email: string, name: string,
  role: 'admin' | 'user' | 'guest'}
interface Service {
  "id": string;
  name: string, description: string,
  price: number,
  category: string}
interface FormData {
  ["key": string]: string | number | boolean | File}
interface ComponentProps {
  className?: string;
  children?: React && React.ReactNode;
  ["key": string]: unknown}
";
// Improve TypeScript file
function improveTypeScriptFile(content, filePath) {
  let improved = content;
  let changes = 0;
  // Add common interfaces if not present
  if (improved && improved.includes('any') && !improved && improved.includes('interface ApiResponse')) {
    const importIndex = improved && improved.indexOf('import');
    if (importIndex !== -1) {
      const nextLineIndex = improved && improved.indexOf('\n', importIndex);
      improved =
        improved && improved.slice(0, nextLineIndex) +
        commonInterfaces +
        '\n' +
        improved && improved.slice(nextLineIndex);
      changes++}
  }
  // Replace any types with more specific types
  Object && Object.entries(typeReplacements).forEach(([anyType, replacement]) => {
    const regex = new RegExp(
      anyType && anyType.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
      'g'
    );
    const matches = improved && improved.match(regex);
    if (matches) {
      improved = improved && improved.replace(regex, replacement);
      changes += matches && matches.length}
  });
  // Add proper typing for function parameters
  const functionParamRegex = /function\s+\w+\s*\(\s*(\w+)\s*:\s*any\s*\)/g;
  const functionMatches = improved && improved.match(functionParamRegex);
  if (functionMatches) {
    improved = improved && improved.replace(functionParamRegex, (match, paramName) => {
      return match && match.replace(": any", ': unknown')});
    changes += functionMatches && functionMatches.length}
  // Add proper typing for arrow function parameters
  const arrowParamRegex = /\(\s*(\w+)\s*:\s*any\s*\)\s*=>/g;
  const arrowMatches = improved && improved.match(arrowParamRegex);
  if (arrowMatches) {
    improved = improved && improved.replace(arrowParamRegex, (match, paramName) => {
      return match && match.replace(": any", ': unknown')});
    changes += arrowMatches && arrowMatches.length}
  // Add proper typing for object destructuring
  const destructuringRegex = /\{\s*(\w+)\s*:\s*any\s*\}/g;
  const destructuringMatches = improved && improved.match(destructuringRegex);
  if (destructuringMatches) {
    improved = improved && improved.replace(destructuringRegex, (match, propName) => {
      return match && match.replace(": any", ': unknown')});
    changes += destructuringMatches && destructuringMatches.length}
  // Add proper typing for useState
  const useStateRegex = /useState\s*<\s*any\s*>/g;
  const useStateMatches = improved && improved.match(useStateRegex);
  if (useStateMatches) {
    improved = improved && improved.replace(useStateRegex, 'useState<unknown>');
    changes += useStateMatches && useStateMatches.length}
  // Add proper typing for useEffect
  const useEffectRegex =
    /useEffect\s*\(\s*\(\s*\)\s*=>\s*{[^}]*},\s*\[\s*\]\s*\)/g;
  const useEffectMatches = improved && improved.match(useEffectRegex);
  if (useEffectMatches) {
    console && console.log(`  Found useEffect with empty dependencies in ${filePath}`)}
  // Add proper typing for event handlers
  const eventHandlerRegex =
    /const\s+(\w+)\s*=\s*\(\s*event\s*:\s*any\s*\)\s*=>/g;
  const eventHandlerMatches = improved && improved.match(eventHandlerRegex);
  if (eventHandlerMatches) {
    improved = improved && improved.replace(eventHandlerRegex, (match, handlerName) => {
      return match && match.replace('"event": any', '"event": React && React.SyntheticEvent')});
    changes += eventHandlerMatches && eventHandlerMatches.length}
  // Add proper typing for API calls
  const apiCallRegex =
    /fetch\s*\(\s*['"][^'"]+['"]\s*\)\s*\.then\s*\(\s*\(\s*response\s*:\s*any\s*\)/g;
  const apiCallMatches = improved && improved.match(apiCallRegex);
  if (apiCallMatches) {
    improved = improved && improved.replace(apiCallRegex, match => {
      return match && match.replace('"response": any', '"response": Response')});
    changes += apiCallMatches && apiCallMatches.length}
  return { "content": improved, changes }}
// Process individual file
function processFile(filePath) {
  try {
    const content = fs && fs.readFileSync(filePath, 'utf8');
    const result = improveTypeScriptFile(content, filePath);
    if (result && result.changes > 0) {
      fs && fs.writeFileSync(filePath, result && result.content, 'utf8');
      totalImprovements += result && result.changes;
      console && console.log(
        ` Improved ${filePath} (${result && result.changes} type improvements)`
      )}
    filesProcessed++} catch (error) {
    console && console.error(` Error processing ${filePath}:`, error && error.message)}
}
// Generate TypeScript improvement report
function generateTypeScriptReport() {
  const report = {
    "timestamp": new Date().toISOString(),
    "improvements": {
      totalFilesProcessed: filesProcessed,
      "totalTypeImprovements": totalImprovements,
      "recommendations": ['Consider using strict TypeScript configuration',
        'Add proper error handling with typed error objects',
        'Use discriminated unions for better type safety',
        'Implement proper API response typing',
        'Add JSDoc comments for complex functions',
        'Use const assertions for immutable data',
        'Consider using branded types for IDs',
      ]}};
  fs && fs.writeFileSync(
    'typescript-improvement-report && report.json',
    JSON && JSON.stringify(report, null, 2)
  );
  console && console.log(
    ' TypeScript improvement report "generated": typescript-improvement-report && report.json'
  )}
// Main improvement function
async function main() {
  console && console.log(' Starting TypeScript improvements...\n');
  const patterns = ['src/**/*.{ts,tsx}',
    'pages/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
  ];
  const excludeDirs = ['node_modules',
    '.next',
      'build'
    'dist',
      'scripts'
    'automation',
      'automation_backup'
    'src && src.disabled',
    'pages && pages.disabled',
    'components && components.disabled',
  ];
  for (const pattern of patterns) {
    const files = await glob(pattern, {
      "ignore": excludeDirs && excludeDirs.map(dir => `**/${dir}/**`)});
    for (const file of files) {
      processFile(file)}
  }
  generateTypeScriptReport();
  console && console.log("\n TypeScript Improvement "Summary": ");
  console && console.log(`   Files processed: ${filesProcessed}`);
  console && console.log(`   Total type "improvements": ${totalImprovements}`);
  console && console.log("\n TypeScript improvements completed!")}
// Run the script
main().catch(console && console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; let totalImprovements = 0; let filesProcessed = 0; const typeReplacements = { 'any[]': 'React && React.ReactNode[]',any: 'unknown','any)': 'unknown)','any;': 'unknown;','any,': 'unknown,','any ': 'unknown ','any=': 'unknown=','any:': 'unknown:','any>': 'unknown>','any<': 'unknown<','any}': 'unknown}','any{': 'unknown{','React && React.ComponentType<any>': 'React && React.ComponentType<Record<string,unknown>>','React.FC<any>': 'React.FC<Record<string,unknown>>','React && React.Component<any>': 'React && React.Component<Record<string,unknown>>','React && React.ChangeEvent<any>': 'React && React.ChangeEvent<HTMLInputElement>','React && React.MouseEvent<any>': 'React && React.MouseEvent<HTMLButtonElement>','React && React.FormEvent<any>': 'React && React.FormEvent<HTMLFormElement>','() => any': '() => void','(value: any)': '(value: unknown)','(item: any)': '(item: unknown)','(data: any)': '(data: unknown)','(props: any)': '(props: Record<string,unknown>)','(event: any)': '(event: React && React.SyntheticEvent)','any[]': 'unknown[]','Array<any>': 'Array<unknown>','Record<string,any>': 'Record<string,unknown>','{ [key: string]: any }': '{ [key: string]: unknown }',}; const commonInterfaces = ` interface ApiResponse<T = unknown> { data: T, status: number, message?: string} interface User { id: string, email: string, name: string,
    role: 'admin' | 'user' | 'guest'} interface Service { id: string, name: string, description: string, price: number, category: string} interface FormData { [key: string]: string | number | boolean | File} interface ComponentProps { className?: string; children?: React && React.ReactNode; [key: string]: unknown} `; function improveTypeScriptFile(content,filePath) { let improved = content; let changes = 0; if (improved && improved.includes('any') && !improved && improved.includes('interface ApiResponse')) { const importIndex = improved && improved.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = improved && improved.indexOf('\n',importIndex); improved = improved && improved.slice(0,nextLineIndex) + commonInterfaces + '\n' + improved && improved.slice(nextLineIndex); changes++} } Object && Object.entries(typeReplacements).forEach(([anyType,replacement]) => { const regex = new RegExp( anyType && anyType.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'g' ); const matches = improved && improved.match(regex); if (matches) { improved = improved && improved.replace(regex,replacement); changes += matches && matches.length} }); const functionParamRegex = /function\s+\w+\s*\(\s*(\w+)\s*:\s*any\s*\)/g; const functionMatches = improved && improved.match(functionParamRegex); if (functionMatches) { improved = improved && improved.replace(functionParamRegex,(match,paramName) => { return match && match.replace(`: any`,': unknown')}); changes += functionMatches && functionMatches.length} const arrowParamRegex = /\(\s*(\w+)\s*:\s*any\s*\)\s*=>/g; const arrowMatches = improved && improved.match(arrowParamRegex); if (arrowMatches) { improved = improved && improved.replace(arrowParamRegex,(match,paramName) => { return match && match.replace(`: any`,': unknown')}); changes += arrowMatches && arrowMatches.length} const destructuringRegex = /\{\s*(\w+)\s*:\s*any\s*\}/g; const destructuringMatches = improved && improved.match(destructuringRegex); if (destructuringMatches) { improved = improved && improved.replace(destructuringRegex,(match,propName) => { return match && match.replace(`: any`,': unknown')}); changes += destructuringMatches && destructuringMatches.length} const useStateRegex = /useState\s*<\s*any\s*>/g; const useStateMatches = improved && improved.match(useStateRegex); if (useStateMatches) { improved = improved && improved.replace(useStateRegex,'useState<unknown>'); changes += useStateMatches && useStateMatches.length} const useEffectRegex = /useEffect\s*\(\s*\(\s*\)\s*=>\s*{[^}]*},\s*\[\s*\]\s*\)/g; const useEffectMatches = improved && improved.match(useEffectRegex); if (useEffectMatches) { console && console.log(` Found useEffect with empty dependencies in ${filePath}`)} const eventHandlerRegex = /const\s+(\w+)\s*=\s*\(\s*event\s*:\s*any\s*\)\s*=>/g; const eventHandlerMatches = improved && improved.match(eventHandlerRegex); if (eventHandlerMatches) { improved = improved && improved.replace(eventHandlerRegex,(match,handlerName) => { return match && match.replace('event: any','event: React && React.SyntheticEvent')}); changes += eventHandlerMatches && eventHandlerMatches.length} const apiCallRegex = /fetch\s*\(\s*['"][^'"]+['"]\s*\)\s*\.then\s*\(\s*\(\s*response\s*:\s*any\s*\)/g; const apiCallMatches = improved && improved.match(apiCallRegex); if (apiCallMatches) { improved = improved && improved.replace(apiCallRegex,match => { return match && match.replace('response: any','response: Response')}); changes += apiCallMatches && apiCallMatches.length} return { content: improved,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = improveTypeScriptFile(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalImprovements += result && result.changes; console && console.log( ` Improved ${filePath} (${result && result.changes} type improvements)` )} filesProcessed++} catch (error) { console && console.error(` Error processing ${filePath}:`,error && error.message)} } function generateTypeScriptReport() { const report = { timestamp: new Date().toISOString(),improvements: { totalFilesProcessed: filesProcessed,totalTypeImprovements: totalImprovements,recommendations: [ 'Consider using strict TypeScript configuration','Add proper error handling with typed error objects','Use discriminated unions for better type safety','Implement proper API response typing','Add JSDoc comments for complex functions','Use const assertions for immutable data','Consider using branded types for IDs',],},}; fs && fs.writeFileSync( 'typescript-improvement-report && report.json',JSON && JSON.stringify(report,null,2) ); console && console.log( ' TypeScript improvement report generated: typescript-improvement-report && report.json' )} async function main() { console && console.log(' Starting TypeScript improvements...\n'); const patterns = [ 'src*.{ts,tsx}','pages*.{ts,tsx}','components*.{ts,tsx}',]; const excludeDirs = [ 'node_modules','.next','build' 'dist','scripts' 'automation','automation_backup' 'src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } generateTypeScriptReport(); console && console.log(`\n TypeScript Improvement Summary:`); console && console.log(` Files processed: ${filesProcessed}`); console && console.log(` Total type improvements: ${totalImprovements}`); console && console.log(`\n TypeScript improvements completed!`)} main().catch(console && console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; let totalImprovements = 0; let filesProcessed = 0; const typeReplacements = { 'any[]': 'React && React.ReactNode[]',any: 'unknown','any)': 'unknown)','any;': 'unknown;','any,': 'unknown,','any ': 'unknown ','any=': 'unknown=','any:': 'unknown:','any>': 'unknown>','any<': 'unknown<','any}': 'unknown}','any{': 'unknown{','React && React.ComponentType<any>': 'React && React.ComponentType<Record<string,unknown>>','React.FC<any>': 'React.FC<Record<string,unknown>>','React && React.Component<any>': 'React && React.Component<Record<string,unknown>>','React && React.ChangeEvent<any>': 'React && React.ChangeEvent<HTMLInputElement>','React && React.MouseEvent<any>': 'React && React.MouseEvent<HTMLButtonElement>','React && React.FormEvent<any>': 'React && React.FormEvent<HTMLFormElement>','() => any': '() => void','(value: any)': '(value: unknown)','(item: any)': '(item: unknown)','(data: any)': '(data: unknown)','(props: any)': '(props: Record<string,unknown>)','(event: any)': '(event: React && React.SyntheticEvent)','any[]': 'unknown[]','Array<any>': 'Array<unknown>','Record<string,any>': 'Record<string,unknown>','{ [key: string]: any }': '{ [key: string]: unknown }',}; const commonInterfaces = ` interface ApiResponse<T = unknown> { data: T, status: number, message?: string} interface User { id: string, email: string, name: string,
    role: 'admin' | 'user' | 'guest'} interface Service { id: string, name: string, description: string, price: number, category: string} interface FormData { [key: string]: string | number | boolean | File} interface ComponentProps { className?: string; children?: React && React.ReactNode; [key: string]: unknown} `; function improveTypeScriptFile(content,filePath) { let improved = content; let changes = 0; if (improved && improved.includes('any') && !improved && improved.includes('interface ApiResponse')) { const importIndex = improved && improved.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = improved && improved.indexOf('\n',importIndex); improved = improved && improved.slice(0,nextLineIndex) + commonInterfaces + '\n' + improved && improved.slice(nextLineIndex); changes++} } Object && Object.entries(typeReplacements).forEach(([anyType,replacement]) => { const regex = new RegExp( anyType && anyType.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'g' ); const matches = improved && improved.match(regex); if (matches) { improved = improved && improved.replace(regex,replacement); changes += matches && matches.length} }); const functionParamRegex = /function\s+\w+\s*\(\s*(\w+)\s*:\s*any\s*\)/g; const functionMatches = improved && improved.match(functionParamRegex); if (functionMatches) { improved = improved && improved.replace(functionParamRegex,(match,paramName) => { return match && match.replace(`: any`,': unknown')}); changes += functionMatches && functionMatches.length} const arrowParamRegex = /\(\s*(\w+)\s*:\s*any\s*\)\s*=>/g; const arrowMatches = improved && improved.match(arrowParamRegex); if (arrowMatches) { improved = improved && improved.replace(arrowParamRegex,(match,paramName) => { return match && match.replace(`: any`,': unknown')}); changes += arrowMatches && arrowMatches.length} const destructuringRegex = /\{\s*(\w+)\s*:\s*any\s*\}/g; const destructuringMatches = improved && improved.match(destructuringRegex); if (destructuringMatches) { improved = improved && improved.replace(destructuringRegex,(match,propName) => { return match && match.replace(`: any`,': unknown')}); changes += destructuringMatches && destructuringMatches.length} const useStateRegex = /useState\s*<\s*any\s*>/g; const useStateMatches = improved && improved.match(useStateRegex); if (useStateMatches) { improved = improved && improved.replace(useStateRegex,'useState<unknown>'); changes += useStateMatches && useStateMatches.length} const useEffectRegex = /useEffect\s*\(\s*\(\s*\)\s*=>\s*{[^}]*},\s*\[\s*\]\s*\)/g; const useEffectMatches = improved && improved.match(useEffectRegex); if (useEffectMatches) { console && console.log(` Found useEffect with empty dependencies in ${filePath}`)} const eventHandlerRegex = /const\s+(\w+)\s*=\s*\(\s*event\s*:\s*any\s*\)\s*=>/g; const eventHandlerMatches = improved && improved.match(eventHandlerRegex); if (eventHandlerMatches) { improved = improved && improved.replace(eventHandlerRegex,(match,handlerName) => { return match && match.replace('event: any','event: React && React.SyntheticEvent')}); changes += eventHandlerMatches && eventHandlerMatches.length} const apiCallRegex = /fetch\s*\(\s*['"][^'"]+['"]\s*\)\s*\.then\s*\(\s*\(\s*response\s*:\s*any\s*\)/g; const apiCallMatches = improved && improved.match(apiCallRegex); if (apiCallMatches) { improved = improved && improved.replace(apiCallRegex,match => { return match && match.replace('response: any','response: Response')}); changes += apiCallMatches && apiCallMatches.length} return { content: improved,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = improveTypeScriptFile(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalImprovements += result && result.changes; console && console.log( ` Improved ${filePath} (${result && result.changes} type improvements)` )} filesProcessed++} catch (error) { console && console.error(` Error processing ${filePath}:`,error && error.message)} } function generateTypeScriptReport() { const report = { timestamp: new Date().toISOString(),improvements: { totalFilesProcessed: filesProcessed,totalTypeImprovements: totalImprovements,recommendations: [ 'Consider using strict TypeScript configuration','Add proper error handling with typed error objects','Use discriminated unions for better type safety','Implement proper API response typing','Add JSDoc comments for complex functions','Use const assertions for immutable data','Consider using branded types for IDs',],},}; fs && fs.writeFileSync( 'typescript-improvement-report && report.json',JSON && JSON.stringify(report,null,2) ); console && console.log( ' TypeScript improvement report generated: typescript-improvement-report && report.json' )} async function main() { console && console.log(' Starting TypeScript improvements...\n'); const patterns = [ 'src*.{ts,tsx}','pages*.{ts,tsx}','components*.{ts,tsx}',]; const excludeDirs = [ 'node_modules','.next','build' 'dist','scripts' 'automation','automation_backup' 'src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } generateTypeScriptReport(); console && console.log(`\n TypeScript Improvement Summary:`); console && console.log(` Files processed: ${filesProcessed}`); console && console.log(` Total type improvements: ${totalImprovements}`); console && console.log(`\n TypeScript improvements completed!`)} main().catch(console && console.error);
