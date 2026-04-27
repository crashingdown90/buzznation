export default function Kontak() {
  return (
    <main className="main-content" style={{ padding: "4rem 0" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <h1 className="hero-title" style={{ fontSize: "3rem", marginBottom: "2rem", textAlign: "left" }}>Hubungi <span className="text-gradient">Kami</span></h1>
        
        <div className="article-layout" style={{ marginBottom: "2rem" }}>
          <p style={{ marginBottom: "2rem" }}>
            Kami selalu terbuka untuk mendengar dari Anda. Apakah Anda memiliki pertanyaan, umpan balik, atau tertarik untuk menjalin kerja sama bisnis dengan BuzzNation? Jangan ragu untuk menghubungi kami melalui informasi di bawah ini.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div>
              <h3 style={{ color: "var(--accent-secondary)", marginBottom: "0.5rem" }}>Email</h3>
              <p>Untuk pertanyaan umum: <strong>info@buzznation.com</strong></p>
              <p>Untuk kerja sama/iklan: <strong>partners@buzznation.com</strong></p>
            </div>

            <div>
              <h3 style={{ color: "var(--accent-secondary)", marginBottom: "0.5rem" }}>Media Sosial</h3>
              <p>Ikuti kami dan kirimkan pesan langsung melalui:</p>
              <ul style={{ listStyle: "inside", marginTop: "0.5rem", color: "var(--text-secondary)" }}>
                <li>Instagram: @buzznation_id</li>
                <li>Twitter/X: @buzznation_id</li>
                <li>LinkedIn: BuzzNation Digital</li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: "var(--accent-secondary)", marginBottom: "0.5rem" }}>Alamat Kantor</h3>
              <p>
                Gedung Cyber, Lt. 12<br/>
                Jl. Kuningan Barat No. 8<br/>
                Jakarta Selatan, 12710<br/>
                Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
