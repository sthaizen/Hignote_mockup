const fs = require('fs');
let content = fs.readFileSync('src/sections/OnePlatform.jsx', 'utf8');

// 1. Remove JSX comments: {/* ... */}
content = content.replace(/\{\/\*[\s\S]*?\*\/\}\n?/g, '');

// 2. Remove block comments: /* ... */
content = content.replace(/\/\*[\s\S]*?\*\/\n?/g, '');

// 3. Remove inline comments: // ...
content = content.replace(/^[ \t]*\/\/.*$\n?/gm, '');
content = content.replace(/[ \t]*\/\/.*$/gm, '');

// Clean up multiple empty lines
content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

fs.writeFileSync('src/sections/OnePlatform.jsx', content);
