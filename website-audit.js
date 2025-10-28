#!/usr/bin/env node
import https from 'https'
import http from 'http'
import { URL } from 'url'
import fs from 'fs'
// List of all routes from App.tsx
function checkUrl(url) {
  return new Promise((resolve) => {
    const parsedUrl = new URL(url)
    const client = parsedUrl.protocol === 'https: ' ? https : http
    const options = {
      hostname: parsedUrl.hostname
      port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80)
      path: parsedUrl.pathname + parsedUrl.search
      method: 'HEAD',
      timeout: 10000,
      headers: {,
        'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAudit/1.0)'};
    }

     i < routes.length; i++) {
    