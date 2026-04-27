import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import ProgressBar from "@/components/ProgressBar";

export const metadata: Metadata = {
  title: "BuzzNation | Portal Berita Teknologi Terkini 2026",
  description: "Dapatkan berita terbaru seputar teknologi, gadget, games, esports, finansial, dan crypto hanya di BuzzNation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
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
                  <li><a href="/tentang-kami">Tentang Kami</a></li>
                  <li><a href="/redaksi">Redaksi</a></li>
                  <li><a href="/pedoman-media-siber">Pedoman Media Siber</a></li>
                  <li><a href="/proses-penulisan">Proses Penulisan Artikel</a></li>
                  <li><a href="/kontak">Saran & Kritik</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Kategori Unggulan</h4>
                <ul className="footer-links">
                  <li><a href="/kategori/tech-hack">Tech Hack</a></li>
                  <li><a href="/kategori/games">Games</a></li>
                  <li><a href="/kategori/apps">Apps</a></li>
                  <li><a href="/kategori/hiburan">Hiburan</a></li>
                  <li><a href="/kategori/finansial">Finansial</a></li>
                  <li><a href="/kategori/penghasil-uang">Penghasil Uang</a></li>
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
