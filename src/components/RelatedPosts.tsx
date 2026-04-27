import { articles } from "@/data/articles";
import Link from "next/link";
import Image from "next/image";

interface RelatedPostsProps {
  currentSlug: string;
  category: string;
}

export default function RelatedPosts({ currentSlug, category }: RelatedPostsProps) {
  // Find articles in the same category, excluding the current one
  // If we only have category like "Tutorial & Tips", we match that.
  const related = articles
    .filter((a) => a.category === category && a.slug !== currentSlug)
    .sort(() => 0.5 - Math.random()) // Shuffle
    .slice(0, 3); // Take 3

  if (related.length === 0) return null;

  return (
    <div className="related-posts" style={{ marginTop: '60px', borderTop: '2px solid var(--border-color)', paddingTop: '40px' }}>
      <h3 style={{ fontSize: '24px', marginBottom: '24px', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
        Artikel Terkait
      </h3>
      <div className="grid-standard" style={{ marginBottom: '0' }}>
        {related.map((article) => (
          <article key={article.id} className="card">
            <div className="card-img-wrapper">
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
            <div className="card-content" style={{ padding: '16px' }}>
              <div className="card-meta" style={{ marginBottom: '8px' }}>
                <span className="badge" style={{ fontSize: '10px', padding: '2px 8px' }}>{article.category}</span>
              </div>
              <h4 className="card-title" style={{ fontSize: '15px', marginBottom: '8px', lineHeight: '1.4' }}>
                <Link href={article.slug}>{article.title}</Link>
              </h4>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
