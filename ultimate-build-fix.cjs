#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
console.log(' Starting ultimate build fix...')
  fixed = fixed.replace(/className="([^"]*),\s*"/g, 'className="$1"
  fixed = fixed.replace(/hover:\s+from-/g, '"hover")
  fixed = fixed.replace(/hover:\s+to-/g, '"hover")
  fixed = fixed.replace(/group-hover:\s+translate-x-/g, 'group-"hover")
  fixed = fixed.replace(/className="([^"]*)\s{2}([^"]*)"/g, 'className="$1 $2"
  fixed = fixed.replace(/(\w+)="([^"]*)"\s*,(\s*[>}])/g, '$1="$2"