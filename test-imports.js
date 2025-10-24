import fs from 'fs';

// Test if we can read the Navigation component
try {
  const navContent = fs.readFileSync('/workspace/app/components/Navigation.tsx', 'utf8');
  console.log('Navigation component exists and is readable');
  
  // Check for syntax issues
  if (navContent.includes('export default Navigation')) {
    console.log('Navigation has proper export');
  } else {
    console.log('Navigation missing export');
  }
  
  // Check for syntax errors
  if (navContent.includes(';;')) {
    console.log('Found double semicolons in Navigation');
  }
  
} catch (error) {
  console.error('Error reading Navigation:', error.message);
}

// Test if we can read the Footer component
try {
  const footerContent = fs.readFileSync('/workspace/app/components/Footer.tsx', 'utf8');
  console.log('Footer component exists and is readable');
  
  if (footerContent.includes('export default Footer')) {
    console.log('Footer has proper export');
  } else {
    console.log('Footer missing export');
  }
  
} catch (error) {
  console.error('Error reading Footer:', error.message);
}