"use client";

import { useState } from "react";
import { articles } from "@/data/articles";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [subscribeMessage, setSubscribeMessage] = useState("");

  // Filter and select articles for layout
  const featuredArticles = articles.filter(a => a.featured);
  const techHackArticles = articles.filter(a => a.slugCategory.startsWith('tech-hack'));
  const appsHiburanArticles = articles.filter(a => ['apps', 'games', 'hiburan'].some(cat => a.slugCategory.startsWith(cat)));
  const finansialArticles = articles.filter(a => ['finansial', 'penghasil-uang', 'crypto', 'investasi'].some(cat => a.slugCategory.startsWith(cat)));

  // Trending articles (simulated based on IDs or featured flags)
  const trendingArticles = [...articles]
    .sort((a, b) => b.id - a.id) // Newer/higher ID articles trending
    .slice(0, 5);

  // Ticker articles (recent news)
  const tickerArticles = articles.slice(0, 6);

  // Handle newsletter subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribeMessage("Terima kasih! Anda telah berlangganan newsletter kami.");
      setEmailInput("");
      setTimeout(() => setSubscribeMessage(""), 5000);
    }
  };

  // Filtered articles based on search query
  const filteredArticles = searchQuery
    ? articles.filter(a => 
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        a.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Helper component for Standard Article Card (Grid view)
  const ArticleCard = ({ article }: { article: any }) => (
    <article className="card">
      <div className="card-img-wrapper">
        <Link href={article.slug}>
          <Image 
            src={article.imageUrl} 
            alt={article.title} 
            width={400} 
            height={250} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Link>
      </div>
      <div className="card-content">
        <div className="card-meta">
          <span className="badge" data-category={article.category}>{article.category}</span>
          <span>{article.date}</span>
        </div>
        <h3 className="card-title">
          <Link href={article.slug}>{article.title}</Link>
        </h3>
        <p className="card-excerpt">{article.excerpt}</p>
      </div>
    </article>
  );

  // Helper component for Horizontal Article Card (List view)
  const HorizontalCard = ({ article }: { article: any }) => (
    <article className="horizontal-card">
      <div className="card-img-wrapper">
        <Link href={article.slug}>
          <Image 
            src={article.imageUrl} 
            alt={article.title} 
            width={300} 
            height={180} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Link>
      </div>
      <div className="card-content">
        <div className="card-meta">
          <span className="badge" data-category={article.category}>{article.category}</span>
          <span>{article.date}</span>
        </div>
        <h3 className="card-title">
          <Link href={article.slug}>{article.title}</Link>
        </h3>
        <p className="card-excerpt" style={{ fontSize: '13px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {article.excerpt}
        </p>
      </div>
    </article>
  );

  return (
    <main className="main-content">
      {/* Headline / Hero Section */}
      <div className="section-header">
        <h2 className="section-title">Berita Utama</h2>
      </div>

      <div className="grid-featured">
        {/* Left: Main Featured Article */}
        {featuredArticles[0] && (
          <article className="card featured">
            <div className="card-img-wrapper" style={{ aspectRatio: '16/10' }}>
              <Link href={featuredArticles[0].slug}>
                <Image 
                  src={featuredArticles[0].imageUrl} 
                  alt={featuredArticles[0].title} 
                  width={800} 
                  height={500} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  priority
                />
              </Link>
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="badge badge-red">{featuredArticles[0].category}</span>
                <span>{featuredArticles[0].date}</span>
              </div>
              <h3 className="card-title" style={{ fontSize: '28px' }}>
                <Link href={featuredArticles[0].slug}>{featuredArticles[0].title}</Link>
              </h3>
              <p className="card-excerpt">{featuredArticles[0].excerpt}</p>
            </div>
          </article>
        )}

        {/* Right: Two Stacked Featured Articles */}
        <div className="featured-side-grid">
          {featuredArticles.slice(1, 3).map((article, index) => article && (
            <article key={article.id || index} className="card">
              <div className="card-img-wrapper" style={{ aspectRatio: '16/9' }}>
                <Link href={article.slug}>
                  <Image 
                    src={article.imageUrl} 
                    alt={article.title} 
                    width={400} 
                    height={225} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Link>
              </div>
              <div className="card-content" style={{ padding: '20px' }}>
                <div className="card-meta" style={{ marginBottom: '8px' }}>
                  <span className="badge" data-category={article.category}>{article.category}</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="card-title" style={{ fontSize: '16px', marginBottom: '0' }}>
                  <Link href={article.slug}>{article.title}</Link>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Main 2-Column Portal Section */}
      <div className="portal-layout">
        {/* Left Column (Main Content) */}
        <div className="portal-main">
          {/* Search Result Header */}
          {searchQuery && (
            <div style={{ marginBottom: '40px' }}>
              <div className="section-header">
                <h2 className="section-title">Hasil Pencarian: &quot;{searchQuery}&quot;</h2>
                <button 
                  onClick={() => setSearchQuery("")}
                  style={{ background: 'none', border: 'none', color: 'var(--accent-primary)', cursor: 'pointer', fontWeight: 600 }}
                >
                  Clear &times;
                </button>
              </div>
              {filteredArticles.length > 0 ? (
                <div className="list-layout">
                  {filteredArticles.map(article => (
                    <HorizontalCard key={article.id} article={article} />
                  ))}
                </div>
              ) : (
                <p style={{ color: 'var(--text-secondary)' }}>Tidak ada artikel yang cocok dengan pencarian Anda.</p>
              )}
            </div>
          )}

          {/* Latest News (List layout like real news portal) */}
          <div className="section-header">
            <h2 className="section-title">Kabar Terbaru</h2>
          </div>
          <div className="list-layout" style={{ marginBottom: '50px' }}>
            {articles.slice(3, 8).map((article) => (
              <HorizontalCard key={article.id} article={article} />
            ))}
          </div>

          {/* Tech Hack & Tutorial Section */}
          <div className="section-header">
            <h2 className="section-title">Tech Hack & Tutorial</h2>
            <Link href="/kategori/tech-hack" style={{ fontSize: "14px", fontWeight: 600, color: "var(--accent-primary)" }}>Lihat Semua &rarr;</Link>
          </div>
          <div className="grid-standard" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '50px' }}>
            {techHackArticles.slice(0, 4).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {/* Apps, Games & Hiburan Section */}
          <div className="section-header">
            <h2 className="section-title">Apps, Games & Hiburan</h2>
            <Link href="/kategori/apps" style={{ fontSize: "14px", fontWeight: 600, color: "var(--accent-primary)" }}>Lihat Semua &rarr;</Link>
          </div>
          <div className="grid-standard" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '50px' }}>
            {appsHiburanArticles.slice(0, 4).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {/* Finansial & Penghasil Uang Section */}
          <div className="section-header">
            <h2 className="section-title">Finansial & Penghasil Uang</h2>
            <Link href="/kategori/finansial" style={{ fontSize: "14px", fontWeight: 600, color: "var(--accent-primary)" }}>Lihat Semua &rarr;</Link>
          </div>
          <div className="grid-standard" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            {finansialArticles.slice(0, 4).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        {/* Right Column (Sidebar / Winged Layout) */}
        <aside className="sidebar">
          {/* Widget: Search */}
          <div className="widget">
            <h3 className="widget-title">Cari Artikel</h3>
            <div className="search-box">
              <input 
                type="text" 
                placeholder="Masukkan kata kunci..." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="search-button">
                🔍
              </button>
            </div>
          </div>

          {/* Widget: Trending / Populer */}
          <div className="widget">
            <h3 className="widget-title">Populer & Trending</h3>
            <div className="trending-list">
              {trendingArticles.map((article, idx) => (
                <div key={article.id} className="trending-item">
                  <span className="trending-number">0{idx + 1}</span>
                  <div>
                    <div className="trending-meta">{article.category}</div>
                    <h4 className="trending-title">
                      <Link href={article.slug}>{article.title}</Link>
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Widget: Jelajahi Kategori */}
          <div className="widget">
            <h3 className="widget-title">Jelajahi Kategori</h3>
            <div className="categories-list">
              <Link href="/kategori/tech-hack" className="category-tag">Tech Hack</Link>
              <Link href="/kategori/apps" className="category-tag">Apps</Link>
              <Link href="/kategori/games" className="category-tag">Games</Link>
              <Link href="/kategori/hiburan" className="category-tag">Hiburan</Link>
              <Link href="/kategori/finansial" className="category-tag">Finansial</Link>
              <Link href="/kategori/penghasil-uang" className="category-tag">Penghasil Uang</Link>
            </div>
          </div>

          {/* Widget: Newsletter */}
          <div className="widget">
            <h3 className="widget-title">Langganan Update</h3>
            <p className="newsletter-desc">
              Dapatkan tutorial teknologi terbaru dan info aplikasi penghasil uang langsung ke email Anda.
            </p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Alamat Email Anda" 
                className="newsletter-input"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                Berlangganan
              </button>
            </form>
            {subscribeMessage && (
              <p style={{ marginTop: '12px', fontSize: '13px', color: 'var(--accent-primary)', fontWeight: 600 }}>
                {subscribeMessage}
              </p>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}
