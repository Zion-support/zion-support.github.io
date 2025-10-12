#!/usr/bin/env python3
"""
Ultimate fix for all remaining parsing errors
"""

import os
import re
import glob

def fix_all_remaining_issues(file_path):
    """Fix all remaining parsing issues"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix spaces in function names
        content = re.sub(r'function ([A-Za-z]+) ([A-Za-z]+) ([A-Za-z]+) ([A-Za-z]+)', r'function \1\2\3\4', content)
        content = re.sub(r'function ([A-Za-z]+) ([A-Za-z]+) ([A-Za-z]+)', r'function \1\2\3', content)
        content = re.sub(r'function ([A-Za-z]+) ([A-Za-z]+)', r'function \1\2', content)
        
        # Fix spaces in JSX elements
        content = re.sub(r'<([A-Za-z]+) ([A-Za-z]+) ([A-Za-z]+) ([A-Za-z]+)', r'<\1\2\3\4', content)
        content = re.sub(r'<([A-Za-z]+) ([A-Za-z]+) ([A-Za-z]+)', r'<\1\2\3', content)
        content = re.sub(r'<([A-Za-z]+) ([A-Za-z]+)', r'<\1\2', content)
        
        # Fix spaces in closing tags
        content = re.sub(r'</([A-Za-z]+) ([A-Za-z]+) ([A-Za-z]+) ([A-Za-z]+)>', r'</\1\2\3\4>', content)
        content = re.sub(r'</([A-Za-z]+) ([A-Za-z]+) ([A-Za-z]+)>', r'</\1\2\3>', content)
        content = re.sub(r'</([A-Za-z]+) ([A-Za-z]+)>', r'</\1\2>', content)
        
        # Fix spaces in className attributes
        content = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])', r'className="\1\2\3', content)
        content = re.sub(r'class Name="([^"]*?)([a-zA-Z])([a-zA-Z])', r'className="\1\2\3', content)
        
        # Fix spaces in other attributes
        content = re.sub(r'(\w)([A-Z])', r'\1\2', content)
        
        # Fix spaces in text content
        content = re.sub(r'5 G', '5G', content)
        content = re.sub(r'([0-9]+) G', r'\1G', content)
        
        # Fix malformed JSX fragments
        content = re.sub(r'^\s*<>\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^\s*</>\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'\s*<>\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^\s*</>\s*', '', content, flags=re.MULTILINE)
        
        # Fix malformed JSX tags
        content = re.sub(r'<([^>]*?)([a-zA-Z])([a-zA-Z])([^>]*?)>', r'<\1\2\3\4>', content)
        
        # Fix broken imports
        content = re.sub(r'^import\s+from\s+[^;]+;?\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^import\s+{\s*}\s+from\s+[^;]+;?\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^import\s+,\s+from\s+[^;]+;?\s*$', '', content, flags=re.MULTILINE)
        
        # Fix spaces in JSX attributes
        content = re.sub(r'c lass Name', 'className', content)
        content = re.sub(r'pc lass Name', 'p className', content)
        content = re.sub(r'h1 c lass Name', 'h1 className', content)
        content = re.sub(r'd iv', 'div', content)
        content = re.sub(r't itle', 'title', content)
        content = re.sub(r'H elmet', 'Helmet', content)
        content = re.sub(r'm in-h-screen', 'min-h-screen', content)
        content = re.sub(r'm ax-w-7xl', 'max-w-7xl', content)
        content = re.sub(r't ext-4xl', 'text-4xl', content)
        content = re.sub(r't ext-lg', 'text-lg', content)
        content = re.sub(r't ext-center', 'text-center', content)
        content = re.sub(r'whitemb-6', 'white mb-6', content)
        content = re.sub(r'gray-300mb-8', 'gray-300 mb-8', content)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\n\n+', '\n\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all remaining issues"""
    # Get all page files
    patterns = [
        'app/**/page.tsx',
        'app/**/page.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next', 'out']):
                continue
                
            files_processed += 1
            if fix_all_remaining_issues(file_path):
                files_fixed += 1
                print(f"Fixed issues in: {file_path}")
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed issues in {files_fixed} files")

if __name__ == "__main__":
    main()