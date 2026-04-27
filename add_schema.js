const fs = require('fs');
const path = require('path');

const articlesDataPath = path.join(__dirname, 'src', 'data', 'articles.ts');
let articlesDataContent = fs.readFileSync(articlesDataPath, 'utf-8');

// Regex to extract all objects from articles.ts
const articleRegex = /title:\s*"(.*?)",\s*excerpt:\s*"(.*?)",\s*category:\s*"(.*?)",\s*slugCategory:\s*".*?",\s*date:\s*"(.*?)",\s*imageUrl:\s*"(.*?)",\s*featured:\s*(true|false),\s*slug:\s*"(.*?)"/g;

const articles = [];
let match;
while ((match = articleRegex.exec(articlesDataContent)) !== null) {
  articles.push({
    title: match[1],
    excerpt: match[2],
    category: match[3],
    date: match[4],
    imageUrl: match[5],
    slug: match[7]
  });
}

const baseUrl = 'https://buzznation.com';
let count = 0;

articles.forEach(article => {
  // slug is e.g. /artikel/judul
  const folder = article.slug.replace('/artikel/', '');
  const pagePath = path.join(__dirname, 'src', 'app', 'artikel', folder, 'page.tsx');
  
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf-8');
    
    // Check if JSON-LD already exists
    if (!content.includes('application/ld+json')) {
      const isoDate = new Date(article.date).toISOString();
      const schema = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": article.title,
        "image": [
          article.imageUrl.startsWith('http') ? article.imageUrl : `${baseUrl}${article.imageUrl}`
        ],
        "datePublished": isoDate,
        "dateModified": isoDate,
        "author": [{
            "@type": "Person",
            "name": "Redaksi BuzzNation",
            "url": `${baseUrl}/redaksi`
        }],
        "publisher": {
            "@type": "Organization",
            "name": "BuzzNation",
            "logo": {
                "@type": "ImageObject",
                "url": `${baseUrl}/icon.svg`
            }
        },
        "description": article.excerpt
      };

      const schemaString = JSON.stringify(schema, null, 2);
      const schemaElement = `
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(${schemaString}) }}
      />`;

      // Inject right after <article className="container"...>
      const injectRegex = /(<article className="container"[^>]*>)/;
      if (injectRegex.test(content)) {
        content = content.replace(injectRegex, `$1\n${schemaElement}`);
        fs.writeFileSync(pagePath, content, 'utf-8');
        count++;
      }
    }
  }
});

console.log(`Injected JSON-LD Schema into ${count} article pages.`);
