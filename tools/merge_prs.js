#!/usr/bin/env node
const {execSync} = require(child_process);
function sh(cmd){return execSync(cmd,{stdio:pipe,encoding:utf8}).trim()}
const remote=sh(git
