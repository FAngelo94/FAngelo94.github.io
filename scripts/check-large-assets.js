const fs = require('fs');
const path = require('path');

// Directories to scan (adjust if you store large assets elsewhere)
const scanDirs = [path.join(__dirname, '../src/assets'), path.join(__dirname, '../public')];
const MAX_BYTES = 500 * 1024; // 500 KB

function scanDir(dir) {
  if (!fs.existsSync(dir)) return [];
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      results.push(...scanDir(full));
    } else {
      try {
        const stat = fs.statSync(full);
        if (stat.size > MAX_BYTES) {
          results.push({ file: full, size: stat.size });
        }
      } catch (err) {
        // ignore
      }
    }
  }
  return results;
}

const all = scanDirs.flatMap(scanDir);
if (all.length > 0) {
  console.error('Error: Found oversized assets (>500KB):');
  all.forEach(a => console.error(` - ${a.file} (${(a.size / 1024).toFixed(1)} KB)`));
  console.error('\nPlease optimize or move these assets out of the bundle (use public/ or generate smaller SVG/PNG).');
  process.exit(1);
}

console.log('check-large-assets: OK');
process.exit(0);
