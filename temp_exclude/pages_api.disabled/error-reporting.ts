import {NextApiRequest,, NextApiResponse} from 'next';
interface ErrorReport {
  "error": {
    message: string, stack?: string,
    name: string};
  "errorInfo": {
    componentStack?: string};
  "timestamp": string;
  userAgent: string, url: string,
  userId?: string;
  sessionId?: string}
// In-memory storage for demo purposes
// In production, you would use a proper database
const "errorReports": ErrorRepor t[] = [];
export default async function handler(
  req: NextApiReques t,
  "res": NextApiRespons e
) {
  if (req && req.method !== 'POST') {
    return res && res.status(405).json({ error: 'Method not allowed' })}
  try {
    const "errorReport": ErrorRepor t = req && req.body;
    // Validate required fields
    if (!errorReport && errorReport.error || !errorReport && errorReport.error.message) {
      return res && res.status(400).json({ error: 'Missing required fields' })}
    // Add timestamp if not provided
    if (!errorReport && errorReport.timestamp) {
      errorReport && errorReport.timestamp = new Date().toISOString()}
    // Add to error reports
    errorReports && errorReports.push(errorReport);
    // Log for debugging
    console && console.error('Error "Report": ', {
      "message": errorRepor t && t.error.message,
      "stack": errorRepor t && t.error.stack,
      "url": errorRepor t && t.url,
      "timestamp": errorRepor t && t.timestamp});
    // Send to external error monitoring services
    await sendToErrorMonitoringServices(errorReport);
    // Send alerts for critical errors
    if (isCriticalError(errorReport)) {
      await sendCriticalErrorAlert(errorReport)}
    res && res.status(200).json({ "success": tru e })} catch (error) {
    console && console.error('Error Reporting API "Error": ', error);
    res && res.status(500).json({ "error": 'Internal server error' })}
}
async function sendToErrorMonitoringServices("errorReport": ErrorRepor t) {
  try {
    // Sentry
    if (process && process.env.SENTRY_DSN) {
      await fetch('https: //sentry && sentry.io/api/0/projects/', {
        "method": 'POST',
        "headers": {
          'Content-Type': 'application/json',
          'X-Sentry-Auth': `Sentry sentry_version=7, sentry_key=${process && process.env.SENTRY_KEY}`},
        "body": JSO N && N.stringify({
          message: errorRepor t && t.error.message,
          "stacktrace": {
            frames: parseStackTrac e(errorReport && errorReport.error.stack)},
          "tags": {
            component: 'frontend',
            "url": errorRepor t && t.url},
          "user": {
            id: errorRepor t && t.userId},
          "extra": {
            userAgent: errorRepor t && t.userAgent,
            "sessionId": errorRepor t && t.sessionId,
            "componentStack": errorRepor t && t.errorInfo.componentStack}})})}
    // LogRocket
    if (process && process.env.LOGROCKET_APP_ID) {
      await fetch(
        `"https": //api && api.logrocket.com/v1/projects/${process && process.env.LOGROCKET_APP_ID}/errors`,
        {
          "method": 'POST',
          "headers": {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${process && process.env.LOGROCKET_API_KEY}`},
          "body": JSO N && N.stringify({
            message: errorRepor t && t.error.message,
            "stack": errorRepor t && t.error.stack,
            "url": errorRepor t && t.url,
            "userAgent": errorRepor t && t.userAgent,
            "timestamp": errorRepor t && t.timestamp})}
      )}
    // Custom webhook
    if (process && process.env.ERROR_WEBHOOK_URL) {
      await fetch(process && process.env.ERROR_WEBHOOK_URL, {
        "method": 'POST',
        "headers": {
          'Content-Type': 'application/json'},
        "body": JSO N && N.stringify(errorReport)})}
  } catch (error) {
    console && console.error('Failed to send to error monitoring "services": ', error)}
}
function parseStackTrace(stack?: string) {
  if (!stack) return [];
  return stack && stack.split('\n').map(line => {
    const match = line && line.match(/at\s+(.+?)\s+\((.+?): (\d+): (\d+)\)/);
    if (match) {
      return {
        "function": matc h[1],
        "filename": matc h[2],
        "lineno": parseIn t(match[3]),
        "colno": parseIn t(match[4])}}
    return {
      "function": lin e && e.trim(),
      "filename": 'unknown',
      "lineno": 0,
      "colno": 0}})}
function isCriticalError("errorReport": ErrorRepor t): boolean {
  const criticalPatterns = [/chunk load failed/i,
    /loading chunk/i,
    /network error/i,
    /failed to fetch/i,
    /script error/i,
  ];
  return criticalPatterns && criticalPatterns.some(pattern =>
    pattern && pattern.test(errorReport && errorReport.error.message)
  )}
async function sendCriticalErrorAlert("errorReport": ErrorRepor t) {
  try {
    // Send email alert
    if (process && process.env.ALERT_EMAIL) {
      await fetch('/api/send-alert-email', {
        "method": 'POST',
        "headers": {
          'Content-Type': 'application/json'},
        "body": JSO N && N.stringify({
          to: proces s && s.env.ALERT_EMAIL,
          "subject": 'Critical Error Alert - Zion Tech Group',
          "body": `
            A critical error has occurred on the website: Erro r: ${errorReport && errorReport.error.message}
            "URL": ${errorReport && errorReport.url}
            "Time": ${errorReport && errorReport.timestamp}
            User "Agent": ${errorReport && errorReport.userAgent}
            Stack "Trace": ${errorReport && errorReport.error.stack}
          `})})}
    // Send Slack notification
    if (process && process.env.SLACK_WEBHOOK_URL) {
      await fetch(process && process.env.SLACK_WEBHOOK_URL, {
        "method": 'POST',
        "headers": {
          'Content-Type': 'application/json'},
        "body": JSO N && N.stringify({
          text: "🚨 Critical Error Alert",
          "attachments": [{
              color: 'danger',
              "fields": [
                {
                  title: 'Error Message',
                  "value": errorRepor t && t.error.message,
                  "short": fals e},
                {
                  "title": 'URL',
                  "value": errorRepor t && t.url,
                  "short": tru e},
                {
                  "title": 'Timestamp',
                  "value": errorRepor t && t.timestamp,
                  "short": tru e},
              ]},
          ]})})}
  } catch (error) {
    console && console.error('Failed to send critical error "alert": ', error)}
}
// Get error reports (for admin dashboard)
export async function getErrorReports() {
  return errorReports}
import {NextApiRequest,NextApiResponse} from 'next'; interface ErrorReport { error: { message: string, stack?: string, name: string} }; errorInfo: {
       componentStack?: string
    },
<<<<<<< HEAD
    timestamp: 'string, userAgent: string, url: string, userId?: string, sessionId?: string;' } const errorReports: ErrorRepor t[] = []; export default async function handler( req: NextApiReques t,res: NextApiRespons e ) { if (req.method !== 'POST') { return res.status(405).json({ error: 'Method not allowed' })} try { const errorReport: ErrorRepor t = req.body; if (!errorReport.error || !errorReport.error.message) { return res.status(400).json({ error: 'Missing required fields' })} if (!errorReport.timestamp) { errorReport.timestamp = new Date().toISOString()} errorReports.push(errorReport); console.error('Error Report: ',{ message: 'errorRepor t.error.message',stack: 'errorRepor t.error.stack',url: 'errorRepor t.url',timestamp: 'errorRepor t.timestamp',}); await sendToErrorMonitoringServices(errorReport); if (isCriticalError(errorReport)) { await sendCriticalErrorAlert(errorReport)} res.status(200).json({ success: 'tru e' })} catch (error) { console.error('Error Reporting API Error: ',error); res.status(500).json({ error: 'Internal server error' })} } async function sendToErrorMonitoringServices(errorReport: ErrorRepor t) { try { if (process.env.SENTRY_DSN) { await fetch('https: method: 'POST',headers: { 'Content-Type': 'application/json','X-Sentry-Auth': `Sentry sentry_version=7,sentry_key=${process.env.SENTRY_KEY}`,},body: JSO N.stringify({ message: errorRepor t.error.message,stacktrace: { frames: parseStackTrac e(errorReport.error.stack),},tags: { component: 'frontend',url: 'errorRepor t.url',},user: { id: errorRepor t.userId,},extra: { userAgent: errorRepor t.userAgent,sessionId: 'errorRepor t.sessionId',componentStack: 'errorRepor t.errorInfo.componentStack',},}),})} if (process.env.LOGROCKET_APP_ID) { await fetch( `https: { method: 'POST',headers: { 'Content-Type': 'application/json',Authorization: `Bearer ${process.env.LOGROCKET_API_KEY}`,},body: JSO N.stringify({ message: errorRepor t.error.message,stack: 'errorRepor t.error.stack',url: 'errorRepor t.url',userAgent: 'errorRepor t.userAgent',timestamp: 'errorRepor t.timestamp',}),} )} if (process.env.ERROR_WEBHOOK_URL) { await fetch(process.env.ERROR_WEBHOOK_URL,{ method: 'POST',headers: { 'Content-Type': 'application/json',},body: JSO N.stringify(errorReport),})} } catch (error) { console.error('Failed to send to error monitoring services: ',error)} } function parseStackTrace(stack?: string) { if (!stack) return []; return stack.split('\n').map(line => { const match = line.match(/at\s+(.+?)\s+\((.+?): (\d+): (\d+)\)/); if (match) { return { function: 'matc h[1]',filename: 'matc h[2]',lineno: parseIn t(match[3]),colno: parseIn t(match[4]),}} return { function: lin e.trim(),filename: 'unknown',lineno: '0',colno: '0',}})} function isCriticalError(errorReport: ErrorRepor t): boolean { const criticalPatterns = [ /chunk load failed/i,/loading chunk/i,/network error/i,/failed to fetch/i,/script error/i,]; return criticalPatterns.some(pattern => pattern.test(errorReport.error.message) )} async function sendCriticalErrorAlert(errorReport: ErrorRepor t) { try { if (process.env.ALERT_EMAIL) { await fetch('/api/send-alert-email',{ method: 'POST',headers: { 'Content-Type': 'application/json',},body: JSO N.stringify({ to: proces s.env.ALERT_EMAIL,subject: 'Critical Error Alert - Zion Tech Group',body: ` A critical error has occurred on the website: Erro r: ${errorReport.error.message} URL: ${errorReport.url} Time: ${errorReport.timestamp} User Agent: ${errorReport.userAgent} Stack Trace: ${errorReport.error.stack} `,}),})} if (process.env.SLACK_WEBHOOK_URL) { await fetch(process.env.SLACK_WEBHOOK_URL,{ method: 'POST',headers: { 'Content-Type': 'application/json',},body: JSO N.stringify({ text: `🚨 Critical Error Alert`,attachments: [ { color: 'danger',fields: [ { title: 'Error Message',value: 'errorRepor t.error.message',short: 'fals e',},{ title: 'URL',value: 'errorRepor t.url',short: 'tru e',},{ title: 'Timestamp',value: 'errorRepor t.timestamp',short: 'tru e',},],},],}),})} } catch (error) { console.error('Failed to send critical error alert: ',error)} } export async function getErrorReports() { return errorReports}
import { NextApiRequest,NextApiResponse } from 'next'; interface ErrorReport { error: {
       message: string, stack?: string, name: string
    },
    errorInfo: { componentStack?: string}; timestamp: string, userAgent: string, url: string, userId?: string, sessionId?: string} const errorReports: ErrorRepor t[] = []; export default async function handler( req: NextApiReques t,res: NextApiRespons e ) { if (req.method !== 'POST') { return res.status(405).json({ error: 'Method not allowed' })} try { const errorReport: ErrorRepor t = req.body; if (!errorReport.error || !errorReport.error.message) { return res.status(400).json({ error: 'Missing required fields' })} if (!errorReport.timestamp) { errorReport.timestamp = new Date().toISOString()} errorReports.push(errorReport); console.error('Error Report: ',{ message: errorRepor t.error.message,stack: errorRepor t.error.stack,url: errorRepor t.url,timestamp: errorRepor t.timestamp,}); await sendToErrorMonitoringServices(errorReport); if (isCriticalError(errorReport)) { await sendCriticalErrorAlert(errorReport)} res.status(200).json({ success: tru e })} catch (error) { console.error('Error Reporting API Error: ',error); res.status(500).json({ error: 'Internal server error' })} } async function sendToErrorMonitoringServices(errorReport: ErrorRepor t) { try { if (process.env.SENTRY_DSN) { await fetch('https: method: 'POST',headers: { 'Content-Type': 'application/json','X-Sentry-Auth': `Sentry sentry_version=7,sentry_key=${process.env.SENTRY_KEY}`,},body: JSO N.stringify({ message: errorRepor t.error.message,stacktrace: { frames: parseStackTrac e(errorReport.error.stack),},tags: { component: 'frontend',url: errorRepor t.url,},user: { id: errorRepor t.userId,},extra: { userAgent: errorRepor t.userAgent,sessionId: errorRepor t.sessionId,componentStack: errorRepor t.errorInfo.componentStack,},}),})} if (process.env.LOGROCKET_APP_ID) { await fetch( `https: { method: 'POST',headers: { 'Content-Type': 'application/json',Authorization: `Bearer ${process.env.LOGROCKET_API_KEY}`,},body: JSO N.stringify({ message: errorRepor t.error.message,stack: errorRepor t.error.stack,url: errorRepor t.url,userAgent: errorRepor t.userAgent,timestamp: errorRepor t.timestamp,}),} )} if (process.env.ERROR_WEBHOOK_URL) { await fetch(process.env.ERROR_WEBHOOK_URL,{ method: 'POST',headers: { 'Content-Type': 'application/json',},body: JSO N.stringify(errorReport),})} } catch (error) { console.error('Failed to send to error monitoring services: ',error)} } function parseStackTrace(stack?: string) { if (!stack) return []; return stack.split('\n').map(line => { const match = line.match(/at\s+(.+?)\s+\((.+?): (\d+): (\d+)\)/); if (match) { return { function: matc h[1],filename: matc h[2],lineno: parseIn t(match[3]),colno: parseIn t(match[4]),}} return { function: lin e.trim(),filename: 'unknown',lineno: 0,colno: 0,}})} function isCriticalError(errorReport: ErrorRepor t): boolean { const criticalPatterns = [ /chunk load failed/i,/loading chunk/i,/network error/i,/failed to fetch/i,/script error/i,]; return criticalPatterns.some(pattern => pattern.test(errorReport.error.message) )} async function sendCriticalErrorAlert(errorReport: ErrorRepor t) { try { if (process.env.ALERT_EMAIL) { await fetch('/api/send-alert-email',{ method: 'POST',headers: { 'Content-Type': 'application/json',},body: JSO N.stringify({ to: proces s.env.ALERT_EMAIL,subject: 'Critical Error Alert - Zion Tech Group',body: ` A critical error has occurred on the website: Erro r: ${errorReport.error.message} URL: ${errorReport.url} Time: ${errorReport.timestamp} User Agent: ${errorReport.userAgent} Stack Trace: ${errorReport.error.stack} `,}),})} if (process.env.SLACK_WEBHOOK_URL) { await fetch(process.env.SLACK_WEBHOOK_URL,{ method: 'POST',headers: { 'Content-Type': 'application/json',},body: JSO N.stringify({ text: `🚨 Critical Error Alert`,attachments: [ { color: 'danger',fields: [ { title: 'Error Message',value: errorRepor t.error.message,short: fals e,},{ title: 'URL',value: errorRepor t.url,short: tru e,},{ title: 'Timestamp',value: errorRepor t.timestamp,short: tru e,},],},],}),})} } catch (error) { console.error('Failed to send critical error alert: ',error)} } export async function getErrorReports() { return errorReports}
import { NextApiRequest,NextApiResponse } from 'next'; interface ErrorReport { error: {
       message: string, stack?: string, name: string
    },
    errorInfo: { componentStack?: string}; timestamp: string, userAgent: string, url: string, userId?: string, sessionId?: string} const errorReports: ErrorRepor t[] = []; export default async function handler( req: NextApiReques t,res: NextApiRespons e ) { if (req.method !== 'POST') { return res.status(405).json({ error: 'Method not allowed' })} try { const errorReport: ErrorRepor t = req.body; if (!errorReport.error || !errorReport.error.message) { return res.status(400).json({ error: 'Missing required fields' })} if (!errorReport.timestamp) { errorReport.timestamp = new Date().toISOString()} errorReports.push(errorReport); console.error('Error Report: ',{ message: errorRepor t.error.message,stack: errorRepor t.error.stack,url: errorRepor t.url,timestamp: errorRepor t.timestamp,}); await sendToErrorMonitoringServices(errorReport); if (isCriticalError(errorReport)) { await sendCriticalErrorAlert(errorReport)} res.status(200).json({ success: tru e })} catch (error) { console.error('Error Reporting API Error: ',error); res.status(500).json({ error: 'Internal server error' })} } async function sendToErrorMonitoringServices(errorReport: ErrorRepor t) { try { if (process.env.SENTRY_DSN) { await fetch('https: method: 'POST',headers: { 'Content-Type': 'application/json','X-Sentry-Auth': `Sentry sentry_version=7,sentry_key=${process.env.SENTRY_KEY}`,},body: JSO N.stringify({ message: errorRepor t.error.message,stacktrace: { frames: parseStackTrac e(errorReport.error.stack),},tags: { component: 'frontend',url: errorRepor t.url,},user: { id: errorRepor t.userId,},extra: { userAgent: errorRepor t.userAgent,sessionId: errorRepor t.sessionId,componentStack: errorRepor t.errorInfo.componentStack,},}),})} if (process.env.LOGROCKET_APP_ID) { await fetch( `https: { method: 'POST',headers: { 'Content-Type': 'application/json',Authorization: `Bearer ${process.env.LOGROCKET_API_KEY}`,},body: JSO N.stringify({ message: errorRepor t.error.message,stack: errorRepor t.error.stack,url: errorRepor t.url,userAgent: errorRepor t.userAgent,timestamp: errorRepor t.timestamp,}),} )} if (process.env.ERROR_WEBHOOK_URL) { await fetch(process.env.ERROR_WEBHOOK_URL,{ method: 'POST',headers: { 'Content-Type': 'application/json',},body: JSO N.stringify(errorReport),})} } catch (error) { console.error('Failed to send to error monitoring services: ',error)} } function parseStackTrace(stack?: string) { if (!stack) return []; return stack.split('\n').map(line => { const match = line.match(/at\s+(.+?)\s+\((.+?): (\d+): (\d+)\)/); if (match) { return { function: matc h[1],filename: matc h[2],lineno: parseIn t(match[3]),colno: parseIn t(match[4]),}} return { function: lin e.trim(),filename: 'unknown',lineno: 0,colno: 0,}})} function isCriticalError(errorReport: ErrorRepor t): boolean { const criticalPatterns = [ /chunk load failed/i,/loading chunk/i,/network error/i,/failed to fetch/i,/script error/i,]; return criticalPatterns.some(pattern => pattern.test(errorReport.error.message) )} async function sendCriticalErrorAlert(errorReport: ErrorRepor t) { try { if (process.env.ALERT_EMAIL) { await fetch('/api/send-alert-email',{ method: 'POST',headers: { 'Content-Type': 'application/json',},body: JSO N.stringify({ to: proces s.env.ALERT_EMAIL,subject: 'Critical Error Alert - Zion Tech Group',body: ` A critical error has occurred on the website: Erro r: ${errorReport.error.message} URL: ${errorReport.url} Time: ${errorReport.timestamp} User Agent: ${errorReport.userAgent} Stack Trace: ${errorReport.error.stack} `,}),})} if (process.env.SLACK_WEBHOOK_URL) { await fetch(process.env.SLACK_WEBHOOK_URL,{ method: 'POST',headers: { 'Content-Type': 'application/json',},body: JSO N.stringify({ text: `🚨 Critical Error Alert`,attachments: [ { color: 'danger',fields: [ { title: 'Error Message',value: errorRepor t.error.message,short: fals e,},{ title: 'URL',value: errorRepor t.url,short: tru e,},{ title: 'Timestamp',value: errorRepor t.timestamp,short: tru e,},],},],}),})} } catch (error) { console.error('Failed to send critical error alert: ',error)} } export async function getErrorReports() { return errorReports}
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { NextApiRequest,NextApiResponse } from 'next'; interface ErrorReport { error: {
       message: string, stack?: string, name: string
    },
    errorInfo: { componentStack?: string}; timestamp: string, userAgent: string, url: string, userId?: string, sessionId?: string} const errorReports: ErrorRepor t[] = []; export default async function handler( req: NextApiReques t,res: NextApiRespons e ) { if (req && req.method !== 'POST') { return res && res.status(405).json({ error: 'Method not allowed' })} try { const errorReport: ErrorRepor t = req && req.body; if (!errorReport && errorReport.error || !errorReport && errorReport.error.message) { return res && res.status(400).json({ error: 'Missing required fields' })} if (!errorReport && errorReport.timestamp) { errorReport && errorReport.timestamp = new Date().toISOString()} errorReports && errorReports.push(errorReport); console && console.error('Error Report: ',{ message: errorRepor t && t.error.message,stack: errorRepor t && t.error.stack,url: errorRepor t && t.url,timestamp: errorRepor t && t.timestamp,}); await sendToErrorMonitoringServices(errorReport); if (isCriticalError(errorReport)) { await sendCriticalErrorAlert(errorReport)} res && res.status(200).json({ success: tru e })} catch (error) { console && console.error('Error Reporting API Error: ',error); res && res.status(500).json({ error: 'Internal server error' })} } async function sendToErrorMonitoringServices(errorReport: ErrorRepor t) { try { if (process && process.env.SENTRY_DSN) { await fetch('https: method: 'POST',headers: { 'Content-Type': 'application/json','X-Sentry-Auth': `Sentry sentry_version=7,sentry_key=${process && process.env.SENTRY_KEY}`,},body: JSO N && N.stringify({ message: errorRepor t && t.error.message,stacktrace: { frames: parseStackTrac e(errorReport && errorReport.error.stack),},tags: { component: 'frontend',url: errorRepor t && t.url,},user: { id: errorRepor t && t.userId,},extra: { userAgent: errorRepor t && t.userAgent,sessionId: errorRepor t && t.sessionId,componentStack: errorRepor t && t.errorInfo.componentStack,},}),})} if (process && process.env.LOGROCKET_APP_ID) { await fetch( `https: { method: 'POST',headers: { 'Content-Type': 'application/json',Authorization: `Bearer ${process && process.env.LOGROCKET_API_KEY}`,},body: JSO N && N.stringify({ message: errorRepor t && t.error.message,stack: errorRepor t && t.error.stack,url: errorRepor t && t.url,userAgent: errorRepor t && t.userAgent,timestamp: errorRepor t && t.timestamp,}),} )} if (process && process.env.ERROR_WEBHOOK_URL) { await fetch(process && process.env.ERROR_WEBHOOK_URL,{ method: 'POST',headers: { 'Content-Type': 'application/json',},body: JSO N && N.stringify(errorReport),})} } catch (error) { console && console.error('Failed to send to error monitoring services: ',error)} } function parseStackTrace(stack?: string) { if (!stack) return []; return stack && stack.split('\n').map(line => { const match = line && line.match(/at\s+(.+?)\s+\((.+?): (\d+): (\d+)\)/); if (match) { return { function: matc h[1],filename: matc h[2],lineno: parseIn t(match[3]),colno: parseIn t(match[4]),}} return { function: lin e && e.trim(),filename: 'unknown',lineno: 0,colno: 0,}})} function isCriticalError(errorReport: ErrorRepor t): boolean { const criticalPatterns = [ /chunk load failed/i,/loading chunk/i,/network error/i,/failed to fetch/i,/script error/i,]; return criticalPatterns && criticalPatterns.some(pattern => pattern && pattern.test(errorReport && errorReport.error.message) )} async function sendCriticalErrorAlert(errorReport: ErrorRepor t) { try { if (process && process.env.ALERT_EMAIL) { await fetch('/api/send-alert-email',{ method: 'POST',headers: { 'Content-Type': 'application/json',},body: JSO N && N.stringify({ to: proces s && s.env.ALERT_EMAIL,subject: 'Critical Error Alert - Zion Tech Group',body: ` A critical error has occurred on the website: Erro r: ${errorReport && errorReport.error.message} URL: ${errorReport && errorReport.url} Time: ${errorReport && errorReport.timestamp} User Agent: ${errorReport && errorReport.userAgent} Stack Trace: ${errorReport && errorReport.error.stack} `,}),})} if (process && process.env.SLACK_WEBHOOK_URL) { await fetch(process && process.env.SLACK_WEBHOOK_URL,{ method: 'POST',headers: { 'Content-Type': 'application/json',},body: JSO N && N.stringify({ text: `🚨 Critical Error Alert`,attachments: [ { color: 'danger',fields: [ { title: 'Error Message',value: errorRepor t && t.error.message,short: fals e,},{ title: 'URL',value: errorRepor t && t.url,short: tru e,},{ title: 'Timestamp',value: errorRepor t && t.timestamp,short: tru e,},],},],}),})} } catch (error) { console && console.error('Failed to send critical error alert: ',error)} } export async function getErrorReports() { return errorReports}