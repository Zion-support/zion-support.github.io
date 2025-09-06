<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:start-dev.js
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/start-dev.js
const { spawn } = require ('child_process'),
console.log ('🚀 Starting development server...'),
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
const { spawn } = require('child_process');
console.log('🚀 Starting development server...');
// Start the development server;
const devProcess = spawn('npm', ['rundev'], {stdio: 'inherit';
  shell: true;
});
devProcess.on('error', (error) => {console.error('Error starting development server:', error);
});
devProcess.on('close', (code) => {console.log(`Development server exited with code ${code}`);
});
// Handle process termination;
process.on('SIGINT', () => {console.log('Stopping development server...');
  devProcess.kill('SIGINT');
  process.exit(0);
});
process.on('SIGTERM', () => {console.log('Stopping development server...');
  devProcess.kill('SIGTERM');
  process.exit(0);
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
process.on ('SIGINT', () => {
  console.log ('Stopping development server...'),
  dev_process.kill ('SIGINT'),
  process.exit (0);
}),
process.on ('SIGTERM', () => {
  console.log ('Stopping development server...'),
  dev_process.kill ('SIGTERM'),
  process.exit (0);
}),
<<<<<<<< HEAD:start-dev.js
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
const { spawn } = require('child_process');
;
console.log('🚀 Starting development server...');
;
// Start the development server;
const devProcess = spawn('npm', ['run', 'dev'], {;
  stdio:'inherit',;
  shell:true;
});
;
devProcess.on('error', (error) => {;
  console.error('Error starting development server:', error);
});
;
devProcess.on('close', (code) => {;
  console.log(`Development server exited with code ${code}`);
});
;
// Handle process termination;
process.on('SIGINT', () => {;
  console.log('Stopping development server...');
  devProcess.kill('SIGINT');
  process.exit(0);
});
;
process.on('SIGTERM', () => {;
  console.log('Stopping development server...');
  devProcess.kill('SIGTERM');
  process.exit(0);
});
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/start-dev.js
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
