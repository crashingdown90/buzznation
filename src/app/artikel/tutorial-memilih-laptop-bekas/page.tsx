import RelatedPosts from "@/components/RelatedPosts";
import Image from "next/image";
export default function ArticlePage() {
  return (
    <main className="main-content article-layout">
      <article className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "Cara Memilih Laptop Bekas Terbaik 2026: Tutorial Lengkap Anti Tertipu",
  "image": [
    "https://buzznation.com/images/inspect_laptop_1777281460939.png"
  ],
  "datePublished": "2026-04-26T17:00:00.000Z",
  "dateModified": "2026-04-26T17:00:00.000Z",
  "author": [
    {
      "@type": "Person",
      "name": "Redaksi BuzzNation",
      "url": "https://buzznation.com/redaksi"
    }
  ],
  "publisher": {
    "@type": "Organization",
    "name": "BuzzNation",
    "logo": {
      "@type": "ImageObject",
      "url": "https://buzznation.com/icon.svg"
    }
  },
  "description": "Panduan teknis memeriksa baterai, layar, dan spesifikasi asli laptop bekas agar tidak menyesal setelah membeli."
}) }}
      />
        
        <header className="article-header">
          <div style={{ marginBottom: "15px" }}>
            <span className="badge">Tech Hack / Tutorial</span>
          </div>
          <h1 className="article-title">
            Cara Memilih Laptop Bekas Terbaik 2026: Tutorial Lengkap Anti Tertipu
          </h1>
          <div className="article-meta-info">
            <div className="article-author">Oleh: Redaksi BuzzNation</div>
            <span>•</span>
            <span>27 Apr 2026</span>
          </div>
        </header>

        <div className="article-body">
          <figure className="article-image-container">
            <Image src="/images/inspect_laptop_1777281460939.png" alt="Laptop Bekas" width={1200} height={675} style={{ width: '100%', height: 'auto' }} />
            <figcaption className="article-caption">Pemeriksaan fisik adalah langkah pertama dalam membeli laptop bekas.</figcaption>
          </figure>

          <p>Membeli laptop bekas memang menggiurkan karena harganya yang jauh lebih terjangkau dibandingkan unit baru. Namun, jika Anda tidak berhati-hati, Anda bisa saja membawa pulang "barang rongsokan" yang justru akan menguras dompet Anda untuk biaya perbaikan.</p>

          <p>Agar Anda terhindar dari penipuan penjual nakal, BuzzNation telah merangkum tutorial teknis lengkap mengenai komponen apa saja yang wajib dicek sebelum Anda mentransfer uang atau melakukan transaksi <em>Cash on Delivery</em> (COD).</p>

          <div className="article-highlight">
            <strong>Aturan Emas:</strong> Jangan pernah mentransfer uang di awal (DP) jika Anda berbelanja melalui Facebook Marketplace atau platform yang tidak memiliki sistem rekening bersama (Rekber). Selalu utamakan COD atau marketplace resmi!
          </div>

          <h2>1. Periksa Fisik dan Layar (Dead Pixel)</h2>
          <p>Langkah paling awal adalah memeriksa kondisi fisik. Pastikan tidak ada retak pada casing, terutama di bagian engsel (hinge) yang sering kali rentan patah. Setelah itu, nyalakan laptop dan periksa layarnya:</p>
          <ul>
            <li>Buka situs pencari <em>Dead Pixel Test</em> di browser (atau gunakan gambar berlatar belakang hitam pekat, merah, biru, dan putih full screen).</li>
            <li>Perhatikan dengan seksama apakah ada titik terang (white spot) atau titik mati berwarna hitam pada layar.</li>
          </ul>

          <h2>2. Cek Kesehatan Baterai (Battery Health)</h2>
          <p>Baterai adalah komponen yang paling cepat rusak pada laptop bekas. Pada Windows 10 atau 11, Anda bisa mengecek kapasitas aslinya tanpa aplikasi tambahan melalui <strong>Command Prompt</strong>:</p>
          <ol>
            <li>Buka <em>Command Prompt</em> (CMD) dan jalankan sebagai Administrator.</li>
            <li>Ketik perintah: <code>powercfg /batteryreport</code> lalu tekan Enter.</li>
            <li>Buka file HTML yang dihasilkan (biasanya tersimpan di <code>C:\Windows\System32\battery-report.html</code>).</li>
            <li>Bandingkan angka <strong>Design Capacity</strong> dengan <strong>Full Charge Capacity</strong>. Jika Full Charge sudah di bawah 50% dari Design Capacity, itu tandanya baterai sudah bocor parah (drop).</li>
          </ol>

          <figure className="article-image-container">
            <Image src="/images/test_keyboard_1777281477245.png" alt="Papan Ketik Laptop" width={1200} height={675} style={{ width: '100%', height: 'auto' }} />
            <figcaption className="article-caption">Selalu tes seluruh tombol keyboard satu per satu.</figcaption>
          </figure>

          <h2>3. Uji Keyboard dan Trackpad</h2>
          <p>Kerusakan keyboard sangat umum terjadi. Buka situs seperti <em>KeyboardTester.com</em> dan tekan setiap tombol dari A sampai Z, angka, tombol Fungsi (F1-F12), hingga spasi dan enter. Pastikan semua tombol merespons dengan cepat dan tidak menempel (nyangkut).</p>

          <h2>4. Periksa Spesifikasi Asli vs Tulisan</h2>
          <p>Jangan mudah percaya dengan stiker Core i7 yang menempel di body laptop. Selalu cek spesifikasi asli sistem tersebut dengan membuka <strong>Task Manager</strong> atau <strong>DxDiag</strong>.</p>
          <ul>
            <li>Tekan tombol <code>Windows + R</code>, lalu ketik <code>dxdiag</code> dan tekan Enter.</li>
            <li>Lihat di bagian <em>Processor</em> dan <em>Memory</em> (RAM).</li>
            <li>Pindah ke tab <em>Display</em> untuk mengecek keaslian kartu grafis (VGA).</li>
          </ul>

          <h2>Kesimpulan</h2>
          <p>Membeli laptop bekas membutuhkan kesabaran dan ketelitian. Dengan menerapkan empat langkah teknis di atas, Anda bisa menyaring 90% laptop bermasalah dan mendapatkan unit bekas berkualitas yang siap mendukung produktivitas Anda di tahun 2026 ini!</p>
        </div>

        <RelatedPosts currentSlug="/artikel/tutorial-memilih-laptop-bekas" category="Tutorial & Tips" />
      </article>
    </main>
  );
}
