#!/usr/bin/env node

console.log('Simple test script running...');
console.log('Node version:', process.version);
console.log('Platform:', process.platform);
console.log('Current directory:', process.cwd());

// Keep the process running
setInterval(() => {
  console.log('Test script still running at', new Date().toISOString());
}, 30000);=======
}, 30000);>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
