import puppeteer from 'puppeteer';

(async () => {
  try {
    console.log('Starting browser test...');
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    // Listen to console messages
    page.on('console', msg => {
      console.log('BROWSER CONSOLE:', msg.type(), msg.text());
    });
    
    // Listen to page errors
    page.on('pageerror', error => {
      console.log('PAGE ERROR:', error.message);
    });
    
    // Listen to request failures
    page.on('requestfailed', request => {
      console.log('REQUEST FAILED:', request.url(), request.failure().errorText);
    });
    
    console.log('Navigating to localhost:3000...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 10000 });
    
    // Wait a bit for React to render
    await page.waitForTimeout(2000);
    
    // Check if the root div has content
    const rootContent = await page.$eval('#root', el => el.innerHTML);
    console.log('Root content length:', rootContent.length);
    console.log('Root content preview:', rootContent.substring(0, 200));
    
    await browser.close();
    console.log('Test completed!');
  } catch (error) {
    console.error('Error:', error.message);
  }
})();