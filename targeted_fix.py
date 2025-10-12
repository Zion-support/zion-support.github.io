#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts_safely(file_path):
    """Fix merge conflicts by keeping HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
            
        # Split by merge conflict markers
        lines = content.split('\n')
        new_lines = []
        in_conflict = False
        keep_head = True
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                in_conflict = True
                keep_head = True
                continue
            elif line.strip() == '=======':
                keep_head = False
                continue
            elif line.strip().startswith('>>>>>>>'):
                in_conflict = False
                continue
            elif in_conflict and not keep_head:
                # Skip lines from the other branch
                continue
            else:
                new_lines.append(line)
        
        # Write the cleaned content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))
        
        print(f"Fixed merge conflicts in {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def fix_common_syntax_errors(file_path):
    """Fix common syntax errors without being too aggressive"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix specific patterns that are safe to fix
        content = re.sub(r'bg-gradient-to-brfrom-', 'bg-gradient-to-br from-', content)
        content = re.sub(r'mx-autopx-', 'mx-auto px-', content)
        content = re.sub(r'font-boldtext-', 'font-bold text-', content)
        content = re.sub(r'text-lgtext-', 'text-lg text-', content)
        content = re.sub(r'mb-8max-w-', 'mb-8 max-w-', content)
        content = re.sub(r'from-cyan-500to-', 'from-cyan-500 to-', content)
        content = re.sub(r'hover:from-cyan-600hover:to-', 'hover:from-cyan-600 hover:to-', content)
        content = re.sub(r'w-5 h-5ml-', 'w-5 h-5 ml-', content)
        content = re.sub(r'text-4xlmd:text-6xlfont-bold', 'text-4xl md:text-6xl font-bold', content)
        content = re.sub(r'text-xl text-gray-300mb-8', 'text-xl text-gray-300 mb-8', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed syntax in {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing syntax in {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/TSX files with merge conflicts
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                # Fix merge conflicts first
                if fix_merge_conflicts_safely(file_path):
                    files_fixed += 1
                    # Then fix syntax
                    fix_common_syntax_errors(file_path)
    
    print(f"Fixed {files_fixed} files with merge conflicts")

if __name__ == "__main__":
    main()
