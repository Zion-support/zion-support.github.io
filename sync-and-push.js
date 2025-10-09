import { execSync } from 'child_process';

function runCommand(command) {
  try {
    return execSync(command, { encoding: 'utf8', stdio: 'pipe' });
  } catch (error) {
    return { error: error.message, stdout: error.stdout, stderr: error.stderr };
  }
}

function main() {
  console.log('🚀 Syncing with remote and pushing changes...');
  
  try {
    // First, fetch the latest changes
    console.log('📥 Fetching latest changes...');
    const fetchResult = runCommand('git fetch origin');
    
    if (fetchResult.error) {
      console.log('❌ Error fetching:', fetchResult.stderr);
      return false;
    }
    
    console.log('✅ Fetched latest changes');
    
    // Try to pull with rebase to integrate changes
    console.log('🔄 Pulling with rebase...');
    const pullResult = runCommand('git pull --rebase origin main');
    
    if (pullResult.error) {
      console.log('⚠️  Rebase failed, trying merge...');
      
      // Try merge instead
      const mergeResult = runCommand('git pull origin main');
      
      if (mergeResult.error) {
        console.log('❌ Merge also failed:', mergeResult.stderr);
        return false;
      }
      
      console.log('✅ Successfully merged with remote');
    } else {
      console.log('✅ Successfully rebased with remote');
    }
    
    // Now push the changes
    console.log('📤 Pushing changes...');
    const pushResult = runCommand('git push origin main');
    
    if (pushResult.error) {
      console.log('❌ Error pushing:', pushResult.stderr);
      return false;
    }
    
    console.log('✅ Successfully pushed to main branch');
    
    // Check final status
    console.log('📊 Final status:');
    const statusResult = runCommand('git status');
    console.log(statusResult);
    
    console.log('🎉 All changes successfully synced and pushed!');
    return true;
    
  } catch (error) {
    console.log('❌ Error syncing and pushing:', error.message);
    return false;
  }
}
