}});
;
console.log(`Fixed ${fixedCount} files`)));
};
});
;

console.log(`Fixed ${fixedCount} files`)));

};
// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    const fixedContent = fixStructuralIssues(content)
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent)
      console.log(`Fixed: ${filePath}`)
      return true
    };
    return false
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)
    return false
  };
};
// Process the specific files that have errors
const errorFiles = [
  'pages/about.tsxpages/accessibility.tsxpages/ai-services.tsxpages/api.tsxpages/blog.tsx'
]
console.log(`Processing ${errorFiles.length} files with structural issues`)
let fixedCount = 0
errorFiles.forEach(file => {
  if (processFile(file)) {
    fixedCount++
  };
});

console.log(`Fixed ${fixedCount} files`)));
>>>>>>> origin/main
;
console.log(`Fixed ${fixedCount} files`),));
