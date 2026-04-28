import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import ProgressBar from "@/components/ProgressBar";

export const metadata: Metadata = {
  title: "BuzzNation | Portal Berita Teknologi Terkini 2026",
  description: "Dapatkan berita terbaru seputar teknologi, gadget, games, esports, finansial, dan crypto hanya di BuzzNation.",
  other: {
    "google-adsense-account": "ca-pub-9806436984867634",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9806436984867634"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </head>
      <body>
        <ProgressBar />
        <Navbar />
        
        <div className="container">
          {children}
        </div>

        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-col">
                <div className="logo text-gradient" style={{marginBottom: "1rem"}}>BuzzNation</div>
                <p style={{color: "#475569", marginBottom: "1.5rem", maxWidth: "300px", lineHeight: "1.6"}}>
                  Solusi Lengkap Download Aplikasi dan Games, Informasi Teknologi, Lifestyle dan Gadget
                </p>
                <div style={{color: "#475569", lineHeight: "1.6", marginTop: "20px"}}>
                  <strong>Redaksi BuzzNation</strong><br />
                  Gedung Office Tower<br />
                  Jl. Teknologi No. 10,<br />
                  Jakarta Selatan, DKI Jakarta 12240
                </div>
              </div>
              <div className="footer-col">
                <h4>Tentang BuzzNation</h4>
                <ul className="footer-links">
                  <li><Link href="/tentang-kami">Tentang Kami</Link></li>
                  <li><Link href="/redaksi">Redaksi</Link></li>
                  <li><Link href="/pedoman-media-siber">Pedoman Media Siber</Link></li>
                  <li><Link href="/proses-penulisan">Proses Penulisan Artikel</Link></li>
                  <li><Link href="/kontak">Saran & Kritik</Link></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Kategori Unggulan</h4>
                <ul className="footer-links">
                  <li><Link href="/kategori/tech-hack">Tech Hack</Link></li>
                  <li><Link href="/kategori/games">Games</Link></li>
                  <li><Link href="/kategori/apps">Apps</Link></li>
                  <li><Link href="/kategori/hiburan">Hiburan</Link></li>
                  <li><Link href="/kategori/finansial">Finansial</Link></li>
                  <li><Link href="/kategori/penghasil-uang">Penghasil Uang</Link></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              &copy; {new Date().getFullYear()} BuzzNation. Hak Cipta Dilindungi Undang-Undang.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
