const fs = require('fs');
const path = require('path');

// Find all .tsx files in app directory
function getAllTsxFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllTsxFiles(fullPath, files);
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  return files;
}

const appDir = path.join(__dirname, 'app');
const files = getAllTsxFiles(appDir);

let totalChanges = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changes = 0;
  const originalContent = content;

  // Fix shadows - standard size (8px)
  // Black shadow
  content = content.replace(
    /boxShadow: '8px 8px 0 0 #000000'(?!\s*,\s*0)/g,
    "boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)'"
  );

  // Lime shadow (uppercase)
  content = content.replace(
    /boxShadow: '8px 8px 0 0 #CCFF00'(?!\s*,\s*0)/g,
    "boxShadow: '8px 8px 0 0 #CCFF00, 0 20px 50px rgba(204, 255, 0, 0.35)'"
  );

  // Lime shadow (lowercase)
  content = content.replace(
    /boxShadow: '8px 8px 0 0 #ccff00'(?!\s*,\s*0)/g,
    "boxShadow: '8px 8px 0 0 #CCFF00, 0 20px 50px rgba(204, 255, 0, 0.35)'"
  );

  // Fix shadows - large size (12px)
  // Black shadow large
  content = content.replace(
    /boxShadow: '12px 12px 0 0 #000000'(?!\s*,\s*0)/g,
    "boxShadow: '12px 12px 0 0 #000000, 0 25px 60px rgba(0, 0, 0, 0.3)'"
  );

  // Lime shadow large
  content = content.replace(
    /boxShadow: '12px 12px 0 0 #CCFF00'(?!\s*,\s*0)/g,
    "boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)'"
  );

  // Fix shadows - small size (6px)
  content = content.replace(
    /boxShadow: '6px 6px 0 0 #CCFF00'(?!\s*,\s*0)/g,
    "boxShadow: '6px 6px 0 0 #CCFF00, 0 15px 40px rgba(204, 255, 0, 0.3)'"
  );

  content = content.replace(
    /boxShadow: '6px 6px 0 0 #000000'(?!\s*,\s*0)/g,
    "boxShadow: '6px 6px 0 0 #000000, 0 15px 40px rgba(0, 0, 0, 0.2)'"
  );

  // Fix transitions - replace duration-300 with premium timing
  content = content.replace(
    /transition-all duration-300(?! ease-\[)/g,
    'transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]'
  );

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    const relativePath = path.relative(__dirname, file);
    console.log(`Updated: ${relativePath}`);
    totalChanges++;
  }
});

console.log(`\nTotal files updated: ${totalChanges}`);
