<<<<<<< HEAD
const { spawn } = require($2);
console.log($2);
// Start the development server
const devProcess = spawn($2);
devProcess.on('error', (error) => {
  console.error('Error starting development server:', error)
}),
=======
<<<<<<< HEAD
const { spawn } = require ('child_process'),
console.log ('🚀 Starting development server...'),

const { spawn } = require ('child_process'),
console.log ('🚀 Starting development server...'),
=======
<<<<<<< HEAD
const { spawn } = require ('child_process'),
console.log ('🚀 Starting development server...'),

=======

const { spawn } = require ('child_process'),
console.log ('🚀 Starting development server...'),
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
<<<<<<< HEAD

const { spawn } = require('child_process');

console.log('🚀 Starting development server...');
// Start the development server;'
const devProcess = spawn('npm', ['rundev'], {stdio: 'inherit';
  shell: true;
});'
devProcess.on('error', (error) => {console.error('Error starting development server:', error);
});'`
devProcess.on('close', (code) => {console.log(`Development server exited with code ${code}`);
});
// Handle process termination;'
process.on('SIGINT', () => {console.log('Stopping development server...');'
  devProcess.kill('SIGINT');
  process.exit(0);
});'
process.on('SIGTERM', () => {console.log('Stopping development server...');'
  devProcess.kill('SIGTERM');
  process.exit(0);
});'
const { spawn } = require('child_process'),;'
const { spawn } = require('child_process');'
console.log('🚀 Starting development server...'),;
// Start the development server;'
const devProcess = spawn('npm', ['rundev'], {;'
  stdio: 'inherit',;
  shell: true;
}),;'
devProcess.on('error', (error) => {;'
  console.error('Error starting development server:', error);
}),;'
devProcess.on('close', (code) => {;`
  console.log(`Development server exited with code ${code}`);
}),;
// Handle process termination;'
process.on('SIGINT', () => {;'
  console.log('Stopping development server...'),;'
  devProcess.kill('SIGINT'),;
  process.exit(0);
}),;'
process.on('SIGTERM', () => {;'
  console.log('Stopping development server...'),;'

  devProcess.kill('SIGTERM'),;
  process.exit(0);

}),;

=======
<<<<<<< HEAD
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
process.on ('SIGINT', () => {
  console.log ('Stopping development server...'),

  dev_process.kill ('SIGINT'),
  process.exit (0);

  dev_process.kill ('SIGTERM'),
  process.exit (0);

}),
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621

devProcess.on('close', (code) => {
  console.log(`Development server exited with code ${code}`)
}),

<<<<<<< HEAD
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
=======
=======
const { spawn } = require('child_process');
;
console.log('🚀 Starting development server...');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
// Start the development server;
const devProcess = spawn('npm', ['run', 'dev'], {;
  stdio:'inherit',;
<<<<<<< HEAD
  shell:true;)
// Handle process termination;
  console.log('Stopping development server...');
=======
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
