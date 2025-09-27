#!/usr/bin/env node

const fs = require('fs');

console.log('🔧 Starting ultimate syntax cleanup...');

// Fix about.tsx
const aboutTsxPath = 'pages/about.tsx';
if (fs.existsSync(aboutTsxPath)) {
  let content = fs.readFileSync(aboutTsxPath, 'utf8');
  
  // Fix useEffect syntax
  content = content.replace(
    /  }, \[\]\);/g,
    '  }, []);'
  );
  
  fs.writeFileSync(aboutTsxPath, content);
  console.log('✅ Fixed about.tsx');
}

// Fix analytics.tsx
const analyticsTsxPath = 'pages/analytics.tsx';
if (fs.existsSync(analyticsTsxPath)) {
  let content = fs.readFileSync(analyticsTsxPath, 'utf8');
  
  // Fix JSX structure
  content = content.replace(
    /export default function AnalyticsPage\(\) \{\n  return \(\n    <>/g,
    'export default function AnalyticsPage() {\n  return (\n    <>'
  );
  
  // Fix meta description
  content = content.replace(
    /content="Comprehensive website analytics dashboard for performance, accessibility and SEO monitoring\."" \/>/g,
    'content="Comprehensive website analytics dashboard for performance, accessibility and SEO monitoring." />'
  );
  
  // Fix robots meta
  content = content.replace(
    /content="noindexnofollow" \/>/g,
    'content="noindex,nofollow" />'
  );
  
  fs.writeFileSync(analyticsTsxPath, content);
  console.log('✅ Fixed analytics.tsx');
}

// Fix blog.tsx
const blogTsxPath = 'pages/blog.tsx';
if (fs.existsSync(blogTsxPath)) {
  let content = fs.readFileSync(blogTsxPath, 'utf8');
  
  // Fix object properties
  content = content.replace(
    /i d: 1/g,
    'id: 1'
  );
  
  content = content.replace(
    /ti t l e: 'Th e Fut u r e o f A I i n Busin e s s: Tre n d s an d Predicti o n s fo r 2 0 2 4'/g,
    "title: 'The Future of AI in Business: Trends and Predictions for 2024'"
  );
  
  content = content.replace(
    /exce r p t: 'Expl o r e th e lat e s t A I tre n d s sha p i n g th e busin e s s landsc a p e an d ho w compan i e s ar e leverag i n g artific i a l intellige n c e fo r competit i v e advant a g e\.'/g,
    "excerpt: 'Explore the latest AI trends shaping the business landscape and how companies are leveraging artificial intelligence for competitive advantage.'"
  );
  
  content = content.replace(
    /aut h o r: 'Sa r a h John s o n'/g,
    "author: 'Sarah Johnson'"
  );
  
  fs.writeFileSync(blogTsxPath, content);
  console.log('✅ Fixed blog.tsx');
}

// Fix contact.tsx
const contactTsxPath = 'pages/contact.tsx';
if (fs.existsSync(contactTsxPath)) {
  let content = fs.readFileSync(contactTsxPath, 'utf8');
  
  // Fix object properties
  content = content.replace(
    /subj e c t: ''/g,
    "subject: '',"
  );
  
  content = content.replace(
    /mess a g e: ''/g,
    "message: ''"
  );
  
  // Fix useState syntax
  content = content.replace(
    /const \[isSubmitt i n g setIsSubmitt i n g\] = useState\(false\);/g,
    'const [isSubmitting, setIsSubmitting] = useState(false);'
  );
  
  fs.writeFileSync(contactTsxPath, content);
  console.log('✅ Fixed contact.tsx');
}

// Fix dashboard.tsx
const dashboardTsxPath = 'pages/dashboard.tsx';
if (fs.existsSync(dashboardTsxPath)) {
  let content = fs.readFileSync(dashboardTsxPath, 'utf8');
  
  // Fix useState syntax
  content = content.replace(
    /const \[activeTab setActiveTab\] = useState\('comprehensive'\);/g,
    "const [activeTab, setActiveTab] = useState('comprehensive');"
  );
  
  content = content.replace(
    /const \[isRealTime setIsRealTime\] = useState\(false\);/g,
    'const [isRealTime, setIsRealTime] = useState(false);'
  );
  
  content = content.replace(
    /const \[isLoading setIsLoading\] = useState\(false\);/g,
    'const [isLoading, setIsLoading] = useState(false);'
  );
  
  content = content.replace(
    /const \[error setError\] = useState<string \| null>\(null\);/g,
    'const [error, setError] = useState<string | null>(null);'
  );
  
  fs.writeFileSync(dashboardTsxPath, content);
  console.log('✅ Fixed dashboard.tsx');
}

console.log('🎉 Ultimate syntax cleanup completed!');