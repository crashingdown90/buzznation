"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-brand">
          <Link href="/" className="logo text-gradient" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Image src="/icon.svg" alt="BuzzNation Logo" width={36} height={36} />
            BuzzNation
          </Link>
          <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            <span className={`bar ${isOpen ? "open" : ""}`}></span>
            <span className={`bar ${isOpen ? "open" : ""}`}></span>
            <span className={`bar ${isOpen ? "open" : ""}`}></span>
          </button>
        </div>
        
        <div className={`nav-menu ${isOpen ? "show" : ""}`}>
          <ul className="nav-links">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Beranda</Link></li>
            <li className="dropdown">
              <Link href="/kategori/tech-hack">Tech Hack ▾</Link>
              <div className="dropdown-menu">
                <Link href="/kategori/tech-hack/tutorial" onClick={() => setIsOpen(false)}>Tutorial & Tips</Link>
                <Link href="/kategori/tech-hack/internet" onClick={() => setIsOpen(false)}>Internet & Jaringan</Link>
                <Link href="/kategori/tech-hack/gadget" onClick={() => setIsOpen(false)}>Review Gadget</Link>
              </div>
            </li>
            <li className="dropdown">
              <Link href="/kategori/games">Games ▾</Link>
              <div className="dropdown-menu">
                <Link href="/kategori/games/android" onClick={() => setIsOpen(false)}>Android Games</Link>
                <Link href="/kategori/games/pc" onClick={() => setIsOpen(false)}>PC & Console Games</Link>
                <Link href="/kategori/games/esports" onClick={() => setIsOpen(false)}>Berita Esports</Link>
              </div>
            </li>
            <li className="dropdown">
              <Link href="/kategori/apps">Apps ▾</Link>
              <div className="dropdown-menu">
                <Link href="/kategori/apps/android" onClick={() => setIsOpen(false)}>Android Apps</Link>
                <Link href="/kategori/apps/ios" onClick={() => setIsOpen(false)}>iOS Apps</Link>
                <Link href="/kategori/apps/pc" onClick={() => setIsOpen(false)}>PC Software</Link>
              </div>
            </li>
            <li className="dropdown">
              <Link href="/kategori/hiburan">Hiburan ▾</Link>
              <div className="dropdown-menu">
                <Link href="/kategori/hiburan/film" onClick={() => setIsOpen(false)}>Film & Series</Link>
                <Link href="/kategori/hiburan/anime" onClick={() => setIsOpen(false)}>Anime</Link>
                <Link href="/kategori/hiburan/musik" onClick={() => setIsOpen(false)}>Musik</Link>
              </div>
            </li>
            <li className="dropdown">
              <Link href="/kategori/finansial">Finansial ▾</Link>
              <div className="dropdown-menu">
                <Link href="/kategori/finansial/investasi" onClick={() => setIsOpen(false)}>Investasi Saham</Link>
                <Link href="/kategori/finansial/crypto" onClick={() => setIsOpen(false)}>Crypto</Link>
                <Link href="/kategori/finansial/pinjol" onClick={() => setIsOpen(false)}>Pinjol Legal</Link>
              </div>
            </li>
            <li><Link href="/kategori/penghasil-uang" onClick={() => setIsOpen(false)}>Penghasil Uang</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
