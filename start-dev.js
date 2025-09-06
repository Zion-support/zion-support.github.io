const { spawn } = require('child_process'
console.log(' Starting development server...'
const devProcess = spawn('npm', ['rundev'], {stdio: any
devProcess.on('error', (error) => {console.error('Error starting development server: any
devProcess.on('close'
process.on('SIGINT', () => {console.log('Stopping development server...'
  devProcess.kill('SIGINT'
process.on('SIGTERM', () => {console.log('Stopping development server...'
  devProcess.kill('SIGTERM'