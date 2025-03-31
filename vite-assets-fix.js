#!/usr/bin/env node

/**
 * This script fixes the paths for assets in the build output
 */
const fs = require('fs');
const path = require('path');

const basePath = '/My-Portfolio/';
const distDir = path.join(__dirname, 'dist');

// Function to replace asset references in HTML files
function fixHtmlFiles() {
  const htmlFiles = fs.readdirSync(distDir).filter(file => file.endsWith('.html'));
  
  htmlFiles.forEach(file => {
    const filePath = path.join(distDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix asset references
    content = content.replace(/src="\//g, `src="${basePath}`);
    content = content.replace(/href="\//g, `href="${basePath}`);
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed asset references in ${file}`);
  });
}

// Execute
fixHtmlFiles();
console.log('Asset references fixed successfully!'); 