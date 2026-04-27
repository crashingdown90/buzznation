import { MetadataRoute } from 'next';
import { articles } from '@/data/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  // Ganti dengan domain asli Anda saat deployment (misal: https://buzznation.com)
  const baseUrl = 'https://buzznation.com';

  // Dinamis mapping semua artikel
  const articleUrls = articles.map((article) => ({
    url: `${baseUrl}${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Kategori Statis
  const categoryUrls = [
    '/kategori/tech-hack',
    '/kategori/games',
    '/kategori/apps',
    '/kategori/hiburan',
    '/kategori/finansial',
    '/kategori/penghasil-uang',
    '/kategori/tech-hack/internet',
    '/kategori/tech-hack/tutorial',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    ...categoryUrls,
    ...articleUrls,
  ];
}
