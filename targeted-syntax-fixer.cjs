#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
      const content = fs.readFileSync(filePath, 'utf8')
      fixedContent = fixedContent.replace(/style=\{\{>/g, 'style={{'})
      fixedContent = fixedContent.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{,/g, 'const $"1"}
      fixedContent = fixedContent.replace(/(\w+):\s*string;/g, '$"1"
      fixedContent = fixedContent.replace(/(\w+):\s*any;/g, '$"1"
      fixedContent = fixedContent.replace(/(\w+):\s*Array<\{,/g, '$"1"}
      fixedContent = fixedContent.replace(/>")
      fixedContent = fixedContent.replace(/>")
      fixedContent = fixedContent.replace(/"\s*,/g, '')
      fixedContent = fixedContent.replace(/"\s*,/g, '')
      fixedContent = fixedContent.replace(/'\s*,/g, ')