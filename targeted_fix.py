#!/usr/bin/env python3
"""
Targeted syntax error fixer for specific patterns
"""

import os
import re
import glob
from pathlib import Path

def fix_import_statements(content):
    """Fix malformed import statements"""
    # Fix imports that are concatenated without proper separation
    content = re.sub(r'import\s+([^;]+);import\s+([^;]+);', r'import \1;\nimport \2;', content)
    
    # Fix imports with extra semicolons and spaces
    content = re.sub(r'import\s+([^;]+)\s+from\s+["\']([^"\']+)["\'];', r'import \1 from "\2";', content)
    
    # Fix "use client" placement
    content = re.sub(r'import\s+([^;]+);"use client"', r'"use client"\nimport \1;', content)
    content = re.sub(r'"use client"import\s+([^;]+);', r'"use client"\nimport \1;', content)
    
    return content

def fix_component_structure(content):
    """Fix component structure issues"""
    # Fix malformed component declarations
    content = re.sub(r'const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{\s*,\s*', 
                     r'const \1: React.FC = () => {\n  ', content)
    
    # Fix malformed return statements
    content = re.sub(r'return\s*\(\s*<div\s*>\s*</div>\s*,\s*', r'return (\n    <div>\n      ', content)
    
    # Fix duplicate return statements
    content = re.sub(r'return\s*\(\s*<div\s*>\s*</div>\s*,\s*return\s+null;', r'return (\n    <div>\n      \n    </div>\n  );', content)
    
    # Fix malformed JSX closing
    content = re.sub(r'</div>\s*,\s*return\s+null;\s*</div>', r'</div>\n  );', content)
    
    return content

def fix_duplicate_exports(content):
    """Fix duplicate export statements"""
    lines = content.split('\n')
    seen_exports = set()
    fixed_lines = []
    
    for line in lines:
        if line.strip().startswith('export default'):
            export_name = line.strip().split()[-1].rstrip(';')
            if export_name in seen_exports:
                continue
            seen_exports.add(export_name)
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def fix_jsx_syntax(content):
    """Fix JSX syntax issues"""
    # Fix malformed JSX fragments
    content = re.sub(r'<>\s*([^<]+)\s*</>', r'<>\n        \1\n      </>', content)
    
    # Fix unclosed JSX tags
    content = re.sub(r'<(\w+)\s*([^>]*)\s*>\s*$', r'<\1 \2>\n        </\1>', content, flags=re.MULTILINE)
    
    return content

def fix_object_literals(content):
    """Fix object literal syntax"""
    # Fix missing commas in arrays and objects
    content = re.sub(r'(\w+):\s*([^,}\n]+)\s*\n(\s*[a-zA-Z])', r'\1: \2,\n\3', content)
    
    # Fix malformed object properties
    content = re.sub(r'{\s*([^}]*)\s*}\s*$', lambda m: f'{{\n  {m.group(1).strip()}\n}}', content, flags=re.MULTILINE)
    
    return content

def fix_typescript_syntax(content):
    """Fix TypeScript specific issues"""
    # Fix malformed type declarations
    content = re.sub(r'type\s+(\w+)\s*=\s*([^;]+);?\s*$', r'type \1 = \2;', content, flags=re.MULTILINE)
    
    # Fix interface declarations
    content = re.sub(r'interface\s+(\w+)\s*{\s*([^}]*)\s*}\s*$', 
                     lambda m: f'interface {m.group(1)} {{\n  {m.group(2).strip()}\n}}', content, flags=re.MULTILINE)
    
    return content

def fix_file(file_path):
    """Fix a single file with targeted fixes"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply targeted fixes
        content = fix_import_statements(content)
        content = fix_component_structure(content)
        content = fix_duplicate_exports(content)
        content = fix_jsx_syntax(content)
        content = fix_object_literals(content)
        content = fix_typescript_syntax(content)
        
        # Clean up extra whitespace and fix common patterns
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        content = re.sub(r',\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'{\s*,\s*', '{\n  ', content)
        content = re.sub(r',\s*}', '\n}', content)
        
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
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all files"""
    # Get all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        'api/**/*.ts',
        'api/**/*.js',
        '__tests__/**/*.tsx',
        '__tests__/**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Remove duplicates and sort
    files_to_fix = sorted(list(set(files_to_fix)))
    
    print(f"Found {len(files_to_fix)} files to check")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            if fix_file(file_path):
                fixed_count += 1
    
    print(f"\nFixed {fixed_count} files out of {len(files_to_fix)} checked")

if __name__ == "__main__":
    main()