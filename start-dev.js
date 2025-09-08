<<<<<<< HEAD



'
console.log('🚀 Starting development server...'),;

// Start the development server;'
const dev_process = spawn ('npm', ['rundev'], {'
  stdio: 'inherit',
  shell: true;
}),'
dev_process.on ('error', (error) => {'
  console.error ('Error starting development server:', error);
}),'
dev_process.on ('close', (code) => {}

  console.log (`Development server exited with code ${code}`);
// Handle process termination;


process.on ('SIGINT', () => {
  console.log ('Stopping development server...'),

  dev_process.kill ('SIGINT'),
  process.exit (0);

  dev_process.kill ('SIGTERM'),
  process.exit (0);

}),


=======
const { spawn } = require($2);
console.log($2);
// Start the development server
const devProcess = spawn($2);
devProcess.on('error', (error) => {
  console.error('Error starting development server:', error)
}),
>>>>>>> origin/cursor/delete-old-data-records-6bba

devProcess.on('close', (code) => {
  console.log(`Development server exited with code ${code}`)
}),

<<<<<<< HEAD




=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
