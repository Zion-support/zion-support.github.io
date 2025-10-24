#!/usr/bin/env python3
"""
Ultimate comprehensive fix for all remaining syntax errors.
"""

import os
import re
import glob
from pathlib import Path

def fix_broken_classnames(content):
    """Fix broken className attributes with spaces in the middle."""
    # Fix className attributes with spaces in the middle
    content = re.sub(r'className="([^"]*?)\s+([^"]*?)"', r'className="\1\2"', content)
    
    # Fix specific broken patterns
    content = re.sub(r'className="m i n-h-s creenbg-', r'className="min-h-screen bg-', content)
    content = re.sub(r'className="c o n tainermx-auto', r'className="container mx-auto', content)
    content = re.sub(r'className="t e x t-4xlfont-bold', r'className="text-4xl font-bold', content)
    content = re.sub(r'className="t e x t-lgtext-gray-300', r'className="text-lg text-gray-300', content)
    content = re.sub(r'className="i n l ine-flexitems-center', r'className="inline-flex items-center', content)
    content = re.sub(r'className="m l-2h-4', r'className="ml-2 h-4', content)
    
    # Fix any remaining broken patterns
    content = re.sub(r'className="([^"]*?)\s+([a-zA-Z])', r'className="\1\2', content)
    
    return content

def fix_jsx_syntax(content):
    """Fix JSX syntax issues."""
    # Fix return statement syntax
    content = re.sub(r'return\s*\(\s*<>\s*;\s*$', 'return (\n    <>', content, flags=re.MULTILINE)
    
    # Fix function closing
    content = re.sub(r'}\s*;\s*$', '}', content, flags=re.MULTILINE)
    
    # Fix JSX closing tags
    content = re.sub(r'</>\s*;\s*$', '</>', content, flags=re.MULTILINE)
    
    return content

def fix_meta_tags(content):
    """Fix meta tag issues."""
    # Fix duplicate meta tags
    content = re.sub(r'<meta name="description"[^>]*/>\s*<meta name="description"[^>]*/>', r'<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />', content)
    
    return content

def process_file(file_path):
    """Process a single file to fix all syntax errors."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply all fixes
        content = fix_broken_classnames(content)
        content = fix_jsx_syntax(content)
        content = fix_meta_tags(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        else:
            print(f"No changes needed: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files."""
    # Get all TypeScript/TSX files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if process_file(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed {files_fixed} files")

if __name__ == "__main__":
    main()