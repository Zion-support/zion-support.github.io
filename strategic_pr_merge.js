#!/usr/bin/env node
import { execSync } from 'child_process';
import https from 'https';

// GitHub API configuration
const REPO_OWNER = 'Zion-Holdings';
const REPO_NAME = 'zion.app';

function makeGitHubRequest(endpoint, method = 'GET', data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: endpoint,
      method: method,
      headers: {
        'User-Agent': 'Zion-App-Automation',
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      }
    };

    if (data) {
      options.headers['Content-Length'] = Buffer.byteLength(data);
    }

    const req = https.request(options, (res) => {
      let responseData = '';
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      res.on('end', () => {
        try {
          const jsonData = JSON.parse(responseData);
          resolve({ data: jsonData, status: res.statusCode });
        } catch (error) {
          resolve({ data: responseData, status: res.statusCode });
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    if (data) {
      req.write(data);
    }

    req.end();
  });
}

async function getOpenPRs() {
  try {
    console.log('🔍 Fetching open pull requests...');
    const response = await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=open&sort=created&direction=desc`);
    return response.data.filter(pr => pr.base.ref === 'main');
  } catch (error) {
    console.error('❌ Error fetching PRs:', error.message);
    return [];
  }
}

async function closePR(prNumber, reason = 'Superseded by newer changes') {
  try {
    console.log(`🔒 Closing PR #${prNumber} - ${reason}`);
    
    const data = JSON.stringify({
      state: 'closed',
      body: `This PR has been closed automatically: ${reason}`
    });
    
    const response = await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${prNumber}`, 'PATCH', data);
    
    if (response.status === 200) {
      console.log(`✅ Successfully closed PR #${prNumber}`);
      return true;
    } else {
      console.log(`❌ Failed to close PR #${prNumber}: ${response.status}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error closing PR #${prNumber}:`, error.message);
    return false;
  }
}

async function mergePR(prNumber, title) {
  try {
    console.log(`\n🔄 Attempting to merge PR #${prNumber}: ${title}`);
    
    // Fetch the PR branch
    const branchName = `cursor/fix-errors-and-merge-to-main-${prNumber.toString().slice(-4)}`;
    execSync(`git fetch origin ${branchName}`, { stdio: 'inherit' });
    
    // Create a temporary branch
    const tempBranch = `temp-merge-${prNumber}`;
    execSync(`git checkout -b ${tempBranch}`, { stdio: 'inherit' });
    
    try {
      // Try to merge with strategy
      execSync(`git merge origin/${branchName} --no-ff -X theirs -m "Merge PR #${prNumber}: ${title}"`, { stdio: 'inherit' });
      
      console.log(`✅ Successfully merged PR #${prNumber}`);
      
      // Merge into main
      execSync(`git checkout main`, { stdio: 'inherit' });
      execSync(`git merge ${tempBranch} --no-ff -m "Merge PR #${prNumber}: ${title}"`, { stdio: 'inherit' });
      execSync(`git push origin main`, { stdio: 'inherit' });
      
      console.log(`✅ Successfully pushed PR #${prNumber} to main`);
      
      // Clean up
      execSync(`git branch -D ${tempBranch}`, { stdio: 'inherit' });
      
      return { success: true, pr: prNumber };
      
    } catch (mergeError) {
      console.log(`⚠️  Could not merge PR #${prNumber}, will close it`);
      
      // Clean up and close the PR
      execSync(`git checkout main`, { stdio: 'inherit' });
      execSync(`git branch -D ${tempBranch}`, { stdio: 'inherit' });
      
      await closePR(prNumber, 'Could not be merged due to conflicts');
      return { success: false, pr: prNumber, closed: true };
    }
    
  } catch (error) {
    console.error(`❌ Error processing PR #${prNumber}:`, error.message);
    await closePR(prNumber, 'Error during processing');
    return { success: false, pr: prNumber, error: error.message, closed: true };
  }
}

async function main() {
  try {
    console.log('🚀 Starting strategic PR merge process...');
    
    // Get all open PRs targeting main, sorted by creation date (newest first)
    const prs = await getOpenPRs();
    
    if (prs.length === 0) {
      console.log('✅ No open PRs targeting main branch found.');
      return;
    }
    
    console.log(`📋 Found ${prs.length} PR(s) targeting main branch`);
    
    // Sort PRs by creation date (newest first)
    prs.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    
    const results = [];
    let mergedCount = 0;
    const maxMergeAttempts = 3; // Only try to merge the 3 most recent PRs
    
    // Process PRs
    for (let i = 0; i < prs.length; i++) {
      const pr = prs[i];
      
      if (i < maxMergeAttempts) {
        // Try to merge the most recent PRs
        const result = await mergePR(pr.number, pr.title);
        results.push(result);
        
        if (result.success) {
          mergedCount++;
        }
      } else {
        // Close older PRs as they're likely superseded
        const closed = await closePR(pr.number, 'Superseded by newer changes');
        results.push({ success: false, pr: pr.number, closed });
      }
      
      // Small delay between operations
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
    
    // Summary
    console.log('\n📊 Strategic Merge Summary:');
    const successful = results.filter(r => r.success);
    const closed = results.filter(r => r.closed);
    const failed = results.filter(r => !r.success && !r.closed);
    
    console.log(`✅ Successfully merged: ${successful.length}`);
    console.log(`🔒 Closed (superseded): ${closed.length}`);
    console.log(`❌ Failed: ${failed.length}`);
    
    if (successful.length > 0) {
      console.log('\n✅ Merged PRs:');
      successful.forEach(s => console.log(`   PR #${s.pr}`));
    }
    
    if (closed.length > 0) {
      console.log('\n🔒 Closed PRs:');
      closed.forEach(c => console.log(`   PR #${c.pr}`));
    }
    
    console.log(`\n🎉 Strategic merge completed! Merged ${mergedCount} PR(s) and closed ${closed.length} outdated PR(s).`);
    
  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  }
}

main();