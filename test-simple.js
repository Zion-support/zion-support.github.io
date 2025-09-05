#!/usr/bin/env node    ); setInterval(() => { .toISOString())},30000);
#!/usr/bin/env node
console.log('Simple test script running...');
console.log('Node "version": ', process.version);
console.log('"Platform": ', process.platform);
console.log('Current "directory": ', process.cwd());
// Keep the process running
setInterval(() => {
  console.log('Test script still running at', new Date().toISOString());
}, 30000);
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
