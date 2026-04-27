const fs = require('fs');
const path = require('path');

const categories = {
  'tech-hack': {
    name: 'Tech Hack',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
    titles: [
      "Cara Mengatasi Laptop Lemot Windows 10/11 Tanpa Install Ulang",
      "Trik Rahasia Mempercepat Koneksi WiFi di HP dan PC",
      "Cara Mengembalikan File yang Terhapus Permanen di Flashdisk",
      "Review Spesifikasi Minimal PC untuk Editing Video 4K",
      "Cara Aman Menghapus Virus Malware dari Komputer"
    ]
  },
  'games': {
    name: 'Games',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1000&auto=format&fit=crop',
    titles: [
      "5 Game MMORPG Android Terbaik 2026 Grafis Setara PC",
      "Review Lengkap Fitur Terbaru Game RPG Konsol 2026",
      "Cara Menaikkan Rank Mobile Legends Cepat ke Mythic",
      "Game Open World RPG Paling Ringan untuk HP RAM 3GB",
      "Tips Jago Bermain PUBG Mobile Khusus Pemula"
    ]
  },
  'apps': {
    name: 'Apps',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
    titles: [
      "10 Aplikasi Edit Video Terbaik di Android Tanpa Watermark",
      "Aplikasi Kamera Terbaik Pengganti Gcam untuk Foto Jernih",
      "Rekomendasi Aplikasi Pembuat Logo Gratis di HP",
      "Aplikasi Kasir Gratis untuk UMKM Berbasis Android",
      "Aplikasi Belajar Bahasa Asing Gratis dengan Fitur AI"
    ]
  },
  'hiburan': {
    name: 'Hiburan',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000&auto=format&fit=crop',
    titles: [
      "Rekomendasi 10 Anime Action Terbaik Sepanjang Masa",
      "Film Netflix Terbaru Bulan Ini yang Wajib Ditonton",
      "5 Drama Korea Romantis Rating Tertinggi Tahun 2026",
      "Urutan Nonton Film Superhero Cinematic Terlengkap",
      "Situs Baca Komik dan Manhwa Legal Berbahasa Indonesia"
    ]
  },
  'finansial': {
    name: 'Finansial',
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1000&auto=format&fit=crop',
    titles: [
      "Cara Membuka Rekening Saham Sekuritas Secara Online",
      "Perbedaan Reksadana Saham dan Pasar Uang Bagi Pemula",
      "Tips Mengelola Gaji UMR Agar Bisa Menabung Tiap Bulan",
      "Daftar Pinjaman Online Bunga Rendah Terdaftar di OJK",
      "Cara Cek Skor BI Checking Secara Online Lewat HP"
    ]
  },
  'penghasil-uang': {
    name: 'Penghasil Uang',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop',
    titles: [
      "Aplikasi Nonton Video Dibayar Saldo DANA Ratusan Ribu",
      "Cara Menghasilkan Uang dari Affiliate Tanpa Wajah",
      "Game Ternak Virtual yang Membayar Pemainnya",
      "Situs Freelance Terbaik untuk Penulis Artikel Pemula",
      "Cara Daftar Affiliate dan Trik Dapat Komisi Besar"
    ]
  }
};

const toSlug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

let currentId = 20;
let newArticlesData = [];

for (const [slugCat, data] of Object.entries(categories)) {
  data.titles.forEach(title => {
    const slug = toSlug(title);
    const date = "27 Apr 2026";
    const excerpt = "Informasi lengkap dan panduan komprehensif mengenai " + title.toLowerCase() + " yang wajib Anda ketahui di tahun 2026.";
    const articlePath = `/artikel/${slug}`;
    
    newArticlesData.push(`
  {
    id: ${currentId},
    title: "${title}",
    excerpt: "${excerpt}",
    category: "${data.name}",
    slugCategory: "${slugCat}",
    date: "${date}",
    imageUrl: "${data.image}",
    featured: false,
    slug: "${articlePath}"
  }`);

    // Create the page file
    const dirPath = path.join(__dirname, 'src', 'app', 'artikel', slug);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    const componentContent = `export default function ArticlePage() {
  return (
    <main className="main-content article-layout">
      <article className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        <header className="article-header">
          <div style={{ marginBottom: "15px" }}>
            <span className="badge">${data.name}</span>
          </div>
          <h1 className="article-title">
            ${title}
          </h1>
          <div className="article-meta-info">
            <div className="article-author">Oleh: Redaksi BuzzNation</div>
            <span>•</span>
            <span>${date}</span>
          </div>
        </header>

        <div className="article-body">
          <figure className="article-image-container">
            <img src="${data.image}" alt="${title}" />
          </figure>

          <p>Selamat datang di ulasan mendalam mengenai <strong>${title}</strong>. Topik ini sangat sering dibicarakan belakangan ini, dan kami telah merangkum informasi terbaik khusus untuk Anda.</p>

          <p>${excerpt}</p>

          <h2>Panduan dan Informasi Lengkap</h2>
          <p>Dalam dunia digital yang bergerak serba cepat, mendapatkan informasi yang akurat adalah sebuah keharusan. Artikel ini dirancang untuk memberikan sudut pandang objektif mengenai tren, tips, dan panduan praktis yang relevan dengan kebutuhan sehari-hari Anda.</p>

          <div className="article-highlight">
            <strong>Catatan Penting:</strong> Pastikan Anda selalu mengikuti pembaruan terbaru di situs resmi atau sumber terpercaya agar tidak tertinggal informasi krusial terkait topik ini.
          </div>

          <h2>Kesimpulan</h2>
          <p>Menerapkan tips yang telah dibahas di atas dapat meningkatkan produktivitas dan pemahaman Anda secara signifikan. Jangan lupa untuk membagikan artikel ini ke media sosial jika dirasa bermanfaat!</p>
        </div>
      </article>
    </main>
  );
}
`;

    fs.writeFileSync(path.join(dirPath, 'page.tsx'), componentContent);
    currentId++;
  });
}

// Append to articles.ts
const articlesPath = path.join(__dirname, 'src', 'data', 'articles.ts');
let articlesContent = fs.readFileSync(articlesPath, 'utf8');

// We need to inject the new elements into the articles array.
// The file exports an array: export const articles = [ ... ];
// We can just replace the last "];" with our new items + "];"

const insertionPoint = articlesContent.lastIndexOf('];');
if (insertionPoint !== -1) {
  const before = articlesContent.substring(0, insertionPoint);
  const after = articlesContent.substring(insertionPoint);
  
  // Create comma separated string of new objects
  const newObjectsString = "," + newArticlesData.join(',') + "\n";
  fs.writeFileSync(articlesPath, before + newObjectsString + after);
  console.log('Successfully added 30 new articles!');
} else {
  console.error('Failed to parse articles.ts');
}
