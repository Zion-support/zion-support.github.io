<<<<<<< HEAD
const { spawn } = require('child_process');
=======
<<<<<<< HEAD
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3

console.log('🚀 Starting development server...');

// Start the development server
const devProcess = spawn('npm', ['run', 'dev'], {
  stdio: 'inherit',
  shell: true
});

devProcess.on('error', (error) => {
  console.error('Error starting development server:', error);
});

devProcess.on('close', (code) => {
  console.log(`Development server exited with code ${code}`);
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('Stopping development server...');
  devProcess.kill('SIGINT');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('Stopping development server...');
  devProcess.kill('SIGTERM');
  process.exit(0);
<<<<<<< HEAD
});
=======
});
const { spawn } = require('child_process'),;
const { spawn } = require('child_process');
console.log('🚀 Starting development server...'),;
// Start the development server;
const devProcess = spawn('npm', ['rundev'], {;
  stdio: 'inherit',;
  shell: true;
}),;
devProcess.on('error', (error) => {;
  console.error('Error starting development server:', error);
}),;
devProcess.on('close', (code) => {;
  console.log(`Development server exited with code ${code}`);
}),;
// Handle process termination;
process.on('SIGINT', () => {;
  console.log('Stopping development server...'),;
  devProcess.kill('SIGINT'),;
  process.exit(0);
}),;
process.on('SIGTERM', () => {;
  console.log('Stopping development server...'),;
  devProcess.kill('SIGTERM'),;
  process.exit(0);
}),;
=======
const { spawn } = require('child_process');

console.log('🚀 Starting development server...');

// Start the development server
const devProcess = spawn('npm', ['run', 'dev'], {
  stdio: 'inherit',
  shell: true
});

devProcess.on('error', (error) => {
  console.error('Error starting development server:', error);
});

devProcess.on('close', (code) => {
  console.log(`Development server exited with code ${code}`);
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('Stopping development server...');
  devProcess.kill('SIGINT');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('Stopping development server...');
  devProcess.kill('SIGTERM');
  process.exit(0);
});
>>>>>>> origin/main
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
