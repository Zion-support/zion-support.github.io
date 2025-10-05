#!/bin/bash

echo "=== Testing Build and Committing Changes ==="

# Test the build
echo "Testing build..."
npm run build

if [ $? -eq 0 ]; then
    echo "Build successful!"
    
    # Add all changes
    echo "Adding all changes..."
    git add .
    
    # Commit changes
    echo "Committing changes..."
    git commit -m "Resolve all merge conflicts and clean up repository
    
    - Resolved merge conflicts in app/page.tsx
    - Cleaned up merge conflict markers across all files
    - Maintained all new services and improvements
    - Ensured build passes successfully
    - Ready for production deployment"
    
    echo "Changes committed successfully!"
    
    # Push to main branch
    echo "Pushing to main branch..."
    git push origin main
    
    echo "=== All Changes Successfully Pushed to Main ==="
else
    echo "Build failed! Please check for errors."
    exit 1
fi