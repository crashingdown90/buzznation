import { articles } from "@/data/articles";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default async function CategoryPage(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params;
  
  if (!params.slug) {
    return notFound();
  }

  // Format the title correctly based on the slug array
  const formatTitle = (slugArray: string[]) => {
    return slugArray.map(s => s.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')).join(' - ');
  };

  const categoryName = formatTitle(params.slug);
  const slugJoined = params.slug.join('/'); // e.g. "tech-hack" atau "tech-hack/tutorial"
  
  // Ambil artikel yang sesuai dengan slug kategori penuh
  let categoryArticles = articles.filter(a => a.slugCategory === slugJoined);
  
  // Fallback: Jika list kosong (subkategori tidak ada artikel), ambil dari parent kategori saja.
  if (categoryArticles.length === 0 && params.slug.length > 1) {
     const parentSlug = params.slug[0];
     categoryArticles = articles.filter(a => a.slugCategory === parentSlug);
  }

  return (
    <main className="main-content">
      <div className="section-header" style={{ marginTop: "20px" }}>
        <h1 className="section-title">Kategori: {categoryName}</h1>
      </div>
      
      <p style={{ marginBottom: "30px", color: "var(--text-secondary)" }}>
        Menampilkan semua artikel dan berita terbaru dalam kategori <strong>{categoryName}</strong>.
      </p>

      {categoryArticles.length > 0 ? (
        <div className="grid-standard">
          {categoryArticles.map((article) => (
            <article key={article.id} className="card">
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
                  <span className="badge">{article.category}</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="card-title">
                  <a href={article.slug}>{article.title}</a>
                </h3>
                <p className="card-excerpt">{article.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "50px 0", border: "1px dashed var(--border-color)", borderRadius: "8px" }}>
          <h3>Belum ada artikel di kategori ini.</h3>
          <p style={{ color: "var(--text-secondary)", marginTop: "10px" }}>Kami sedang menyiapkan konten menarik untuk Anda. Silakan kembali lagi nanti!</p>
          <Link href="/" className="btn-primary" style={{ marginTop: "20px" }}>Kembali ke Beranda</Link>
        </div>
      )}
    </main>
  );
}
