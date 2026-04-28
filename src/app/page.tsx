import { articles } from "@/data/articles";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const featuredArticles = articles.filter(a => a.featured);
  const techHackArticles = articles.filter(a => a.slugCategory === 'tech-hack' && !a.featured);
  const appsHiburanArticles = articles.filter(a => ['apps', 'games', 'hiburan'].includes(a.slugCategory) && !a.featured);
  const finansialArticles = articles.filter(a => ['finansial', 'penghasil-uang'].includes(a.slugCategory) && !a.featured);

  // Helper component for Article Card
  const ArticleCard = ({ article }: { article: any }) => (
    <article className="card">
      <div className="card-img-wrapper">
        <a href={article.slug}>
          <Image 
            src={article.imageUrl} 
            alt={article.title} 
            width={400} 
            height={250} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </a>
      </div>
      <div className="card-content">
        <div className="card-meta">
          <span className="badge" data-category={article.category}>{article.category}</span>
          <span>{article.date}</span>
        </div>
        <h3 className="card-title">
          <a href={article.slug}>{article.title}</a>
        </h3>
        <p className="card-excerpt">{article.excerpt}</p>
      </div>
    </article>
  );

  return (
    <main className="main-content">
      {/* Featured / Headline Section */}
      <div className="section-header" style={{ marginTop: "20px" }}>
        <h2 className="section-title">Berita Utama</h2>
      </div>
      
      <div className="grid-featured">
        {/* Left: Main Featured Article */}
        {featuredArticles[0] && (
          <article className="card featured">
            <div className="card-img-wrapper">
              <a href={featuredArticles[0].slug}>
                <Image 
                  src={featuredArticles[0].imageUrl} 
                  alt={featuredArticles[0].title} 
                  width={800} 
                  height={500} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  priority
                />
              </a>
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="badge badge-red">{featuredArticles[0].category}</span>
                <span>{featuredArticles[0].date}</span>
              </div>
              <h3 className="card-title" style={{ fontSize: '32px' }}>
                <a href={featuredArticles[0].slug}>{featuredArticles[0].title}</a>
              </h3>
              <p className="card-excerpt" style={{ fontSize: '16px' }}>{featuredArticles[0].excerpt}</p>
            </div>
          </article>
        )}

        {/* Right: Two Stacked Articles */}
        <div className="featured-side-grid">
          {[techHackArticles[0], appsHiburanArticles[0]].map((article, index) => article && (
            <article key={article.id || index} className="card">
              <div className="card-img-wrapper" style={{ aspectRatio: '16/9' }}>
                <a href={article.slug}>
                  <Image 
                    src={article.imageUrl} 
                    alt={article.title} 
                    width={400} 
                    height={225} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </a>
              </div>
              <div className="card-content" style={{ padding: '20px' }}>
                <div className="card-meta" style={{ marginBottom: '8px' }}>
                  <span className="badge" data-category={article.category}>{article.category}</span>
                </div>
                <h3 className="card-title" style={{ fontSize: '18px', marginBottom: '8px' }}>
                  <a href={article.slug}>{article.title}</a>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Tech Hack & Tutorial Section */}
      <div className="section-header" style={{ marginTop: "40px" }}>
        <h2 className="section-title">Tech Hack & Tutorial</h2>
        <Link href="/kategori/tech-hack" style={{ fontSize: "14px", fontWeight: 600, color: "var(--accent-primary)" }}>Lihat Semua &rarr;</Link>
      </div>
      <div className="grid-standard">
        {techHackArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {/* Apps, Games & Hiburan Section */}
      <div className="section-header" style={{ marginTop: "40px" }}>
        <h2 className="section-title">Apps, Games & Hiburan</h2>
        <Link href="/kategori/apps" style={{ fontSize: "14px", fontWeight: 600, color: "var(--accent-primary)" }}>Lihat Semua &rarr;</Link>
      </div>
      <div className="grid-standard">
        {appsHiburanArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {/* Finansial & Penghasil Uang Section */}
      <div className="section-header" style={{ marginTop: "40px" }}>
        <h2 className="section-title">Finansial & Penghasil Uang</h2>
        <Link href="/kategori/finansial" style={{ fontSize: "14px", fontWeight: 600, color: "var(--accent-primary)" }}>Lihat Semua &rarr;</Link>
      </div>
      <div className="grid-standard">
        {finansialArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </main>
  );
}
