const fs = require('fs');
const path = require('path');

// 1. Load articles from articles.ts
const articlesPath = path.join(__dirname, '../src/data/articles.ts');
const articlesContent = fs.readFileSync(articlesPath, 'utf8');
// Convert ESM to CJS temporarily to load it
const cjsContent = articlesContent.replace('export const articles =', 'module.exports =');
const tempFile = path.join(__dirname, 'temp_articles.js');
fs.writeFileSync(tempFile, cjsContent, 'utf8');
const articles = require(tempFile);
fs.unlinkSync(tempFile);

console.log(`Loaded ${articles.length} articles from articles.ts`);

// 2. Helper to find article page.tsx recursively
function findPageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findPageFiles(filePath, fileList);
    } else if (file === 'page.tsx') {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const artikelDir = path.join(__dirname, '../src/app/artikel');
const pageFiles = findPageFiles(artikelDir);
console.log(`Found ${pageFiles.length} page.tsx files in src/app/artikel`);

// Helper to determine high authority outbound link based on category
function getOutboundLink(category) {
  const cat = (category || '').toLowerCase();
  if (cat.includes('saham') || cat.includes('finansial') || cat.includes('investasi') || cat.includes('pinjol') || cat.includes('crypto')) {
    return {
      url: 'https://www.ojk.go.id',
      text: 'Otoritas Jasa Keuangan (OJK)'
    };
  }
  if (cat.includes('film') || cat.includes('hiburan') || cat.includes('anime') || cat.includes('series')) {
    return {
      url: 'https://www.imdb.com',
      text: 'IMDb (Internet Movie Database)'
    };
  }
  if (cat.includes('uang') || cat.includes('freelance') || cat.includes('affiliate')) {
    return {
      url: 'https://play.google.com',
      text: 'Google Play Store'
    };
  }
  // Default for tech, gadgets, apps, internet, tutorial
  return {
    url: 'https://support.google.com',
    text: 'Google Support'
  };
}

let modifiedCount = 0;

for (const filePath of pageFiles) {
  // Determine slug from file path
  // Example path: src/app/artikel/(hiburan)/situs-nonton-film-gratis/page.tsx
  // The directory name containing page.tsx matches the slug suffix
  const dirName = path.basename(path.dirname(filePath));
  
  // Find matching article in data
  const article = articles.find(a => {
    const slugSuffix = a.slug.split('/').pop();
    return slugSuffix === dirName;
  });

  if (!article) {
    console.warn(`No article data found for directory: ${dirName} (${filePath})`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // 1. Add/Verify import Link from "next/link"
  if (!content.includes('import Link from "next/link"') && !content.includes("import Link from 'next/link'")) {
    // Inject import Link at the top
    content = `import Link from "next/link";\n` + content;
    modified = true;
  }

  // 2. Add/Verify metadata export
  if (!content.includes('export const metadata =')) {
    // Generate optimized title (max 60 chars)
    let seoTitle = article.title;
    if (seoTitle.length > 60) {
      // Find a clean cut point
      const cut = seoTitle.substring(0, 57);
      seoTitle = cut.substring(0, Math.min(cut.length, cut.lastIndexOf(' '))) + '...';
    }
    
    const metadataBlock = `export const metadata = {
  title: "${seoTitle.replace(/"/g, '\\"')}",
  description: "${article.excerpt.replace(/"/g, '\\"')}",
};\n\n`;

    // Inject before export default function
    const funcIndex = content.indexOf('export default function');
    if (funcIndex !== -1) {
      content = content.slice(0, funcIndex) + metadataBlock + content.slice(funcIndex);
      modified = true;
    }
  }

  // 3. Inject internal/outbound link if not already injected
  if (!content.includes('Baca juga artikel menarik lainnya di portal')) {
    const outbound = getOutboundLink(article.category);
    
    // Clean category slug for Link
    let cleanCatSlug = article.slugCategory || 'tech-hack';
    // Remove group directories like (hiburan) if present, though slugCategory is usually clean
    cleanCatSlug = cleanCatSlug.replace(/^\(.*?\)\//, '');

    const linkParagraph = `\n          <p style={{ marginTop: '20px', fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            Baca juga artikel menarik lainnya di portal <Link href="/">BuzzNation</Link>. Temukan juga informasi ter-update seputar kategori <Link href="/kategori/${cleanCatSlug}">${article.category}</Link> kami. Untuk referensi resmi dan terpercaya, Anda juga dapat mengunjungi <a href="${outbound.url}" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>${outbound.text}</a>.
          </p>\n`;

    // Regex to match the end of article-body before RelatedPosts
    // It looks for the closing </div> of article-body before RelatedPosts
    const relatedPostsRegex = /(<\/div>\s*(?:\{\/\*\s*RELATED POSTS SECTION\s*\*\/\}|\s)*\s*<RelatedPosts)/;
    
    if (relatedPostsRegex.test(content)) {
      content = content.replace(relatedPostsRegex, (match) => {
        return linkParagraph + '        ' + match;
      });
      modified = true;
    } else {
      console.warn(`Could not find insertion point for links in ${filePath}`);
    }
  }

  // 4. Update image alt tags to include article subject if they are generic
  // Look for alt="Saldo DANA" or similar in <Image alt="..." />
  const imageRegex = /<Image\s+([^>]*?)alt=["']([^"']*)["']([^>]*?)\/>/g;
  content = content.replace(imageRegex, (match, p1, p2, p3) => {
    // If alt is empty or very short, make it descriptive
    if (!p2 || p2.length < 5 || p2 === 'Gambar' || p2 === 'Image') {
      modified = true;
      return `<Image ${p1}alt="${article.title.replace(/"/g, '\\"')}"${p3}/>`;
    }
    return match;
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedCount++;
  }
}

console.log(`Successfully optimized ${modifiedCount} article pages for Yoast SEO.`);
