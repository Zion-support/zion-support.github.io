/usr/bin/
    for: (const file of srcFiles) { const content = fs && fs.readFileSync(file,'utf8')'; const matches = content && content.match(/console\.(log|warn|error|info)/