const fs = require('fs');
const path = require('path');

const articlesDataPath = path.join(__dirname, 'src', 'data', 'articles.ts');
const artikelDir = path.join(__dirname, 'src', 'app', 'artikel');

// Read articles data to map slugs to categories
let articlesDataContent = fs.readFileSync(articlesDataPath, 'utf-8');
const articleRegex = /title:\s*".*?",\s*excerpt:\s*".*?",\s*category:\s*"(.*?)",\s*slugCategory:\s*"(.*?)",\s*date:\s*".*?",\s*imageUrl:\s*".*?",\s*featured:\s*(true|false),\s*slug:\s*"(.*?)"/g;

const categoryMap = {};
let match;
while ((match = articleRegex.exec(articlesDataContent)) !== null) {
  const slugCategory = match[2]; // e.g. "penghasil-uang", "tech-hack/tutorial"
  const slug = match[4]; // e.g. "/artikel/12-apk-penghasil-saldo-dana-gratis"
  const folderName = slug.replace('/artikel/', '');
  categoryMap[folderName] = slugCategory;
}

// Read all items in artikel directory
const items = fs.readdirSync(artikelDir);

let count = 0;

items.forEach(item => {
  const itemPath = path.join(artikelDir, item);
  
  // Skip if it's already a route group (starts with '(') or not a directory
  if (fs.statSync(itemPath).isDirectory() && !item.startsWith('(')) {
    const slugCategory = categoryMap[item];
    
    if (slugCategory) {
      // Use the first part of slugCategory if it has a slash (e.g. "tech-hack" from "tech-hack/tutorial")
      const topCategory = slugCategory.split('/')[0];
      const groupFolderName = `(${topCategory})`;
      const groupPath = path.join(artikelDir, groupFolderName);
      
      // Create group folder if it doesn't exist
      if (!fs.existsSync(groupPath)) {
        fs.mkdirSync(groupPath, { recursive: true });
      }
      
      const newPath = path.join(groupPath, item);
      
      // Move the folder
      fs.renameSync(itemPath, newPath);
      count++;
      console.log(`Moved ${item} to ${groupFolderName}`);
    } else {
      console.log(`Warning: No category found for ${item}`);
    }
  }
});

console.log(`Successfully organized ${count} articles into route groups.`);
