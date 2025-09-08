


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






