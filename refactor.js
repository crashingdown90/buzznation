const fs = require('fs');
const path = require('path');

// Setup
const artikelDir = path.join(__dirname, 'src', 'app', 'artikel');
const articlesDataPath = path.join(__dirname, 'src', 'data', 'articles.ts');

// Read articles data to map slugs to categories
let articlesDataContent = fs.readFileSync(articlesDataPath, 'utf-8');
const articleRegex = /title:\s*".*?",\s*excerpt:\s*".*?",\s*category:\s*"(.*?)",\s*slugCategory:\s*".*?",\s*date:\s*".*?",\s*imageUrl:\s*".*?",\s*featured:\s*(true|false),\s*slug:\s*"(.*?)"/g;

const categoryMap = {};
let match;
while ((match = articleRegex.exec(articlesDataContent)) !== null) {
  const category = match[1];
  const slug = match[3];
  categoryMap[slug] = category;
}

// Read all subdirectories in artikel
const folders = fs.readdirSync(artikelDir);

let count = 0;

folders.forEach(folder => {
  const pagePath = path.join(artikelDir, folder, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf-8');
    
    let modified = false;
    const slug = `/artikel/${folder}`;
    const category = categoryMap[slug] || "Tech Hack";

    // 1. Prepend imports if missing
    if (!content.includes('import Image')) {
      content = `import Image from "next/image";\n` + content;
      modified = true;
    }
    if (!content.includes('import RelatedPosts')) {
      content = `import RelatedPosts from "@/components/RelatedPosts";\n` + content;
      modified = true;
    }

    // 2. Replace <img> with <Image>
    // Format: <img src="..." alt="..." />
    const imgRegex = /<img\s+src="([^"]+)"\s+alt="([^"]+)"\s*(?:\/)?>/g;
    if (imgRegex.test(content)) {
      content = content.replace(imgRegex, `<Image src="$1" alt="$2" width={1200} height={675} style={{ width: '100%', height: 'auto' }} />`);
      modified = true;
    }

    // 3. Inject <RelatedPosts /> before closing </article>
    if (!content.includes('<RelatedPosts')) {
      const injectRegex = /<\/div>\s*<\/article>/;
      if (injectRegex.test(content)) {
        content = content.replace(injectRegex, `</div>\n\n        <RelatedPosts currentSlug="${slug}" category="${category}" />\n      </article>`);
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(pagePath, content, 'utf-8');
      count++;
    }
  }
});

console.log(`Refactored ${count} article pages successfully.`);
