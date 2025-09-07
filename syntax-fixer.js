}
    
    // Fix malformed metadata objects
    if (content.includes(',}')) {
      content = content.replace(/,\s*}/g, '\n}');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
    }
    
    return modified;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }