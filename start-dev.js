const { spawn } = require($2);
console.log($2);
// Start the development server
const devProcess = spawn($2);
devProcess.on('error', (error) => {
  console.error('Error starting development server:', error)
}),

devProcess.on('close', (code) => {
  console.log(`Development server exited with code ${code}`)
}),

// Handle process termination
process.on('SIGINT', () => {
  console.log($2);
  devProcess.kill($2);
  process.exit(0)
}),

process.on('SIGTERM', () => {
  console.log($2);
  devProcess.kill($2);
  process.exit(0)
}),