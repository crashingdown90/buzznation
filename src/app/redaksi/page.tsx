export default function RedaksiPage() {
  return (
    <main className="main-content">
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 24px' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '30px', fontWeight: 800, letterSpacing: '-0.03em' }}>
          Susunan Redaksi BuzzNation
        </h1>
        
        <div style={{ lineHeight: '1.8', fontSize: '18px', color: 'var(--text-secondary)' }}>
          <p style={{ marginBottom: '20px' }}>
            Kami adalah tim yang terdiri dari jurnalis teknologi, gamer, dan praktisi industri kreatif yang berdedikasi tinggi untuk memberikan informasi yang paling akurat dan tajam bagi pembaca Indonesia.
          </p>

          <h2 style={{ fontSize: '24px', color: 'var(--text-primary)', marginTop: '40px', marginBottom: '16px' }}>Pimpinan Redaksi</h2>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
            <li style={{ marginBottom: '8px' }}><strong>Ahmad Fikri</strong> - Editor in Chief (Fokus pada Hardware & Tech News)</li>
          </ul>

          <h2 style={{ fontSize: '24px', color: 'var(--text-primary)', marginTop: '40px', marginBottom: '16px' }}>Tim Jurnalis & Editor</h2>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
            <li style={{ marginBottom: '8px' }}><strong>Sarah Wijaya</strong> - Senior Writer (Games & Esports)</li>
            <li style={{ marginBottom: '8px' }}><strong>Budi Santoso</strong> - Technical Writer (Software & Tutorial)</li>
            <li style={{ marginBottom: '8px' }}><strong>Diana Putri</strong> - Content Creator (Hiburan & Pop Culture)</li>
            <li style={{ marginBottom: '8px' }}><strong>Rizky Ramadhan</strong> - Financial Analyst (Finansial & Crypto)</li>
          </ul>

          <h2 style={{ fontSize: '24px', color: 'var(--text-primary)', marginTop: '40px', marginBottom: '16px' }}>IT & Pengembangan</h2>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
            <li style={{ marginBottom: '8px' }}><strong>Reza Pahlevi</strong> - Lead Web Developer</li>
          </ul>

          <div style={{ padding: '24px', background: '#f8fafc', borderRadius: '12px', marginTop: '40px' }}>
            <p style={{ margin: 0 }}>
              Ingin bergabung dengan tim redaksi kami? Kirimkan portofolio penulisan Anda ke <strong>karir@buzznation.com</strong>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
