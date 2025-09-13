// Minimal performance monitor: logs memory usage and uptime

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const value = bytes / Math.pow(1024, i);
  return `${value.toFixed(2)} ${units[i]}`;
}

const mem = process.memoryUsage();
const report = {
  rss: formatBytes(mem.rss),
  heapTotal: formatBytes(mem.heapTotal),
  heapUsed: formatBytes(mem.heapUsed),
  external: formatBytes(mem.external || 0),
  arrayBuffers: formatBytes(mem.arrayBuffers || 0),
  uptimeSeconds: process.uptime().toFixed(2),
};

console.log('[Performance Monitor]');
console.log(JSON.stringify(report, null, 2));

process.exit(0);
