const { spawn } = require ('child_process'),
console.log ('🚀 Starting development server...'),


console.log('🚀 Starting development server...'),;

// Start the development server;
const dev_process = spawn ('npm', ['rundev'], {
  stdio: 'inherit',
  shell: true;
}),
dev_process.on ('error', (error) => {
  console.error ('Error starting development server:', error);
}),
dev_process.on ('close', (code) => {
  console.log (`Development server exited with code ${code}`);
}),
// Handle process termination;
// Handle process termination
process.on('SIGINT', () => {
  console.log('Stopping development server...');
  devProcess.kill('SIGINT');
process.on('SIGINT', () => {;
  console.log('Stopping development server...'),;
  devProcess.kill('SIGINT'),;  process.exit(0);
}),;
process.on('SIGTERM', () => {;
  console.log('Stopping development server...'),;
  devProcess.kill('SIGTERM'),;
  process.exit(0);
});
