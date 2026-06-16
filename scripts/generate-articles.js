const fs = require('fs');
const path = require('path');

const articlesData = [
  {
    dir: 'cara-mengatasi-hp-mati-total-tetap-konek-pc',
    title: 'Cara Mengatasi HP Android Mati Total tapi Terdeteksi PC',
    slug: '/artikel/cara-mengatasi-hp-mati-total-tetap-konek-pc',
    category: 'Tutorial & Tips',
    date: '17 Jun 2026',
    image: '/images/tutorial_hp_matot.png',
    focusKeyphrase: 'HP Android Mati Total',
    outboundUrl: 'https://support.google.com/android',
    outboundText: 'Google Android Support',
    content: `
          <p>Mengalami situasi di mana <strong>HP Android Mati Total</strong> atau biasa disebut *matot* tentu sangat membingungkan, terutama jika ponsel tersebut menyimpan banyak data penting. Namun, ada satu pertanda baik yang sering kali terlewatkan: HP tersebut masih terdeteksi oleh komputer atau laptop (PC) saat dihubungkan menggunakan kabel USB. Hal ini menandakan bahwa sirkuit utama (hardware) ponsel belum sepenuhnya rusak dan masih ada harapan besar untuk diperbaiki secara mandiri di rumah tanpa perlu membawanya ke service center.</p>
          <p>Jika PC Anda mengeluarkan suara koneksi USB atau mendeteksi perangkat baru seperti *QUSB_BULK*, *MediaTek USB Port*, atau *Qualcomm HS-USB QDLoader*, ini menunjukkan ponsel berada dalam mode darurat (EDL atau BootROM). Dalam panduan komprehensif ini, kami akan memandu Anda melakukan troubleshooting langkah demi langkah secara teknis dan aman.</p>

          <div className="article-highlight">
            <strong>⚠️ PERINGATAN RISIKO:</strong> Proses perbaikan firmware (flashing) berisiko menghapus seluruh data pada ponsel Anda. Lakukan langkah ini secara hati-hati dan pastikan Anda menggunakan kabel USB original berkualitas tinggi untuk menghindari putusnya koneksi di tengah jalan.
          </div>

          <h2>Penyebab Utama HP Android Mati Total tapi Terdeteksi PC</h2>
          <p>Sebelum melangkah ke panduan teknis, penting untuk memahami mengapa fenomena ini terjadi. Pemahaman ini akan membantu Anda menentukan langkah penanganan yang tepat sesuai dengan kondisi ponsel:</p>
          <ul>
            <li><strong>Hard Brick (Kerusakan Sistem Kritis):</strong> Terjadi karena gagal update OS, kegagalan saat proses root, atau kesalahan instalasi Custom ROM yang merusak partisi bootloader.</li>
            <li><strong>Baterai Kehabisan Daya Ekstrem (Deep Discharge):</strong> Kondisi di mana voltase baterai turun di bawah ambang batas minimal, membuat layar tidak mampu menyala meskipun mesin merespon daya dari PC.</li>
            <li><strong>Layar LCD Rusak:</strong> Mesin HP sebenarnya hidup dan terdeteksi komputer, tetapi layar tetap gelap karena kerusakan komponen display atau kabel fleksibel.</li>
          </ul>

          <h2>Langkah 1: Lakukan Force Restart (Mulai Ulang Paksa)</h2>
          <p>Langkah pertama yang paling sederhana namun sering kali berhasil adalah memaksa sistem ponsel untuk melakukan reboot. Metode ini sangat efektif jika ponsel mengalami *freeze* atau crash sistem yang membuatnya terlihat mati total:</p>
          <ol>
            <li>Cabut ponsel dari komputer atau charger terlebih dahulu.</li>
            <li>Tekan dan tahan tombol <strong>Volume Down + Tombol Power</strong> secara bersamaan selama minimal 15 hingga 30 detik.</li>
            <li>Untuk beberapa merk seperti Samsung dan Xiaomi, Anda mungkin perlu menekan tombol <strong>Volume Up + Volume Down + Power</strong> bersamaan.</li>
            <li>Jika ponsel bergetar atau memunculkan logo logo boot, lepaskan tombol dan biarkan masuk ke sistem.</li>
          </ol>

          <h2>Langkah 2: Melakukan Flashing Firmware Menggunakan Flashtool</h2>
          <p>Jika HP tetap mati total tetapi terdeteksi di Device Manager komputer sebagai port khusus (seperti Qualcomm QDLoader atau MediaTek Port), itu tandanya Anda harus melakukan instalasi ulang firmware (flashing) menggunakan software flasher resmi:</p>
          <h3>Untuk HP Chipset MediaTek (MTK)</h3>
          <p>Gunakan software **SP Flash Tool**. Unduh *Scatter File* yang sesuai dengan tipe HP Anda secara spesifik. Masukkan file tersebut ke SP Flash Tool, matikan HP, tekan tombol Volume Up sambil menghubungkannya ke PC, lalu klik 'Download' untuk memulai proses flashing.</p>
          <h3>Untuk HP Chipset Qualcomm</h3>
          <p>Gunakan software **Mi Flash Tool** (untuk Xiaomi) atau **QFIL** (Qualcomm Flash Image Loader). Pastikan driver Qualcomm HS-USB QDLoader 9008 telah terinstall dengan benar di PC Anda agar proses pengiriman file sistem berjalan lancar.</p>

          <h2>Langkah 3: Membersihkan Port Charger dan Mengganti Kabel USB</h2>
          <p>Masalah sepele seperti kotoran yang menumpuk di lubang konektor charger HP juga bisa mengganggu aliran listrik. Gunakan jarum kecil atau tusuk gigi secara hati-hati untuk membersihkan debu atau serat kain dari dalam port USB ponsel Anda.</p>
    `
  },
  {
    dir: 'cara-menghapus-akun-google-permanen',
    title: 'Cara Menghapus Akun Google Secara Permanen di HP & Laptop',
    slug: '/artikel/cara-menghapus-akun-google-permanen',
    category: 'Tutorial & Tips',
    date: '17 Jun 2026',
    image: '/images/tutorial_hapus_akun_google.png',
    focusKeyphrase: 'Menghapus Akun Google Permanen',
    outboundUrl: 'https://support.google.com/accounts',
    outboundText: 'Google Accounts Support',
    content: `
          <p>Ada berbagai alasan mengapa seseorang memutuskan untuk melakukan <strong>Menghapus Akun Google Permanen</strong>. Mulai dari ingin mengganti alamat email utama, mengamankan privasi dari jejak digital masa lalu, hingga menyederhanakan jumlah akun yang dimiliki agar lebih mudah dikelola. Namun, sebelum Anda mengambil keputusan besar ini, Anda wajib memahami konsekuensi logis dari penghapusan akun.</p>
          <p>Menghapus akun Google berarti Anda akan kehilangan akses ke seluruh layanan yang terintegrasi, termasuk Gmail, Google Drive, YouTube, Google Photos, serta pembelian aplikasi di Google Play Store. Jika Anda sudah bulat dengan keputusan ini, silakan ikuti panduan lengkap di bawah ini untuk menghapus akun secara aman tanpa meninggalkan sisa data di internet.</p>

          <div className="article-highlight">
            <strong>⚠️ PENTING UNTUK DIKETAHUI:</strong> Proses penghapusan ini bersifat permanen. Jika Anda berubah pikiran di kemudian hari, Google hanya memberikan jendela waktu yang sangat singkat (beberapa hari) untuk mencoba memulihkan akun tersebut sebelum data dihapus selamanya dari server mereka.
          </div>

          <h2>Tahapan Sebelum Menghapus Akun Google</h2>
          <p>Sebelum menekan tombol hapus, pastikan Anda telah melakukan langkah-langkah preventif berikut untuk menghindari hilangnya data penting secara tidak sengaja:</p>
          <ol>
            <li><strong>Unduh Data Anda (Google Takeout):</strong> Kunjungi situs <a href="https://takeout.google.com" target="_blank" rel="noopener noreferrer">Google Takeout</a> untuk mendownload cadangan data Gmail, foto, kontak, dan dokumen Drive Anda ke memori lokal komputer.</li>
            <li><strong>Periksa Langganan Aktif:</strong> Batalkan semua layanan berbayar (seperti YouTube Premium atau Google One) yang terhubung dengan akun tersebut agar tidak terjadi penagihan otomatis di kemudian hari.</li>
            <li><strong>Perbarui Kontak Akun Lain:</strong> Jika Anda menggunakan alamat Gmail ini untuk mendaftar layanan perbankan, media sosial (Facebook, Instagram), atau marketplace, segera ganti alamat email kontak pada akun-akun tersebut terlebih dahulu.</li>
          </ol>

          <h2>Cara Menghapus Akun Google Lewat HP Android / iOS</h2>
          <p>Proses penghapusan akun dapat diselesaikan langsung melalui smartphone Anda dengan sangat praktis:</p>
          <ol>
            <li>Buka menu <strong>Pengaturan (Settings)</strong> di ponsel Anda.</li>
            <li>Gulir ke bawah dan pilih opsi <strong>Google</strong>.</li>
            <li>Ketuk tombol <strong>Kelola Akun Google Anda (Manage your Google Account)</strong>.</li>
            <li>Pilih tab <strong>Data & Privasi (Data & Privacy)</strong> di bagian atas.</li>
            <li>Gulir ke bagian paling bawah hingga Anda menemukan menu <strong>Hapus Akun Google Anda (Delete your Google Account)</strong>.</li>
            <li>Masukkan kata sandi (password) akun Anda sebagai verifikasi keamanan.</li>
            <li>Centang kotak persetujuan konsekuensi kehilangan data, lalu klik <strong>Hapus Akun (Delete Account)</strong>.</li>
          </ol>

          <h2>Cara Menghapus Akun Google Lewat Laptop atau PC</h2>
          <p>Jika Anda lebih menyukai antarmuka desktop yang lebih luas, gunakan peramban (browser) di komputer Anda:</p>
          <p>Buka browser Google Chrome atau browser lainnya, lalu kunjungi halaman <a href="https://myaccount.google.com" target="_blank" rel="noopener noreferrer">Google My Account</a>. Masuk dengan akun yang ingin dihapus, navigasikan ke menu Data & Privacy di sebelah kiri, temukan opsi 'Delete your Google Account', masukkan password verifikasi, lalu selesaikan proses konfirmasi akhir.</p>
    `
  },
  {
    dir: 'cara-format-flashdisk-write-protected',
    title: 'Cara Format Flashdisk Write Protected di Windows 10/11',
    slug: '/artikel/cara-format-flashdisk-write-protected',
    category: 'Tutorial & Tips',
    date: '17 Jun 2026',
    image: '/images/tutorial_format_flashdisk.png',
    focusKeyphrase: 'Format Flashdisk Write Protected',
    outboundUrl: 'https://support.microsoft.com/windows',
    outboundText: 'Microsoft Windows Support',
    content: `
          <p>Pernahkah Anda mencoba menghapus file atau memindahkan data ke dalam USB flash drive, namun sistem Windows justru memunculkan pesan error *"The disk is write-protected"*? Masalah ini tentu sangat menjengkelkan karena membuat flashdisk tidak dapat digunakan sama sekali. Dalam kondisi ini, Anda membutuhkan teknik khusus untuk melakukan <strong>Format Flashdisk Write Protected</strong> agar drive Anda kembali normal.</p>
          <p>Proteksi *Write-Protected* sebenarnya berfungsi sebagai fitur keamanan untuk mencegah data di dalam flashdisk dimodifikasi atau terinfeksi virus. Namun, jika fitur ini terkunci secara tidak sengaja karena error sistem, kita harus membuka kuncinya melalui pengaturan sistem Windows 10 atau Windows 11. Mari simak panduan lengkapnya di bawah ini.</p>

          <div className="article-highlight">
            <strong>💡 TIPS PEMULA:</strong> Sebelum melakukan utak-atik sistem, periksa fisik flashdisk Anda. Beberapa merk flashdisk lawas memiliki sakelar fisik kecil berlambang gembok di bagian samping. Geser sakelar tersebut ke posisi terbuka (unlock) untuk mematikan proteksi secara instan.
          </div>

          <h2>Metode 1: Menghapus Proteksi Menggunakan Registry Editor (Regedit)</h2>
          <p>Jika tidak ada sakelar fisik pada USB Anda, kemungkinan besar kunci proteksi diaktifkan oleh registry Windows secara lokal. Berikut langkah menonaktifkannya:</p>
          <ol>
            <li>Tekan tombol <strong>Windows + R</strong> pada keyboard untuk membuka dialog Run.</li>
            <li>Ketik <code>regedit</code> lalu tekan Enter untuk membuka Registry Editor.</li>
            <li>Navigasikan ke folder berikut: <br /><code>HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\StorageDevicePolicies</code></li>
            <li>Jika folder <em>StorageDevicePolicies</em> tidak ada, klik kanan pada folder <em>Control</em>, pilih <strong>New > Key</strong>, lalu beri nama folder tersebut dengan nama <strong>StorageDevicePolicies</strong>.</li>
            <li>Di dalam folder tersebut, klik kanan di area kosong, pilih <strong>New > DWORD (32-bit) Value</strong>, dan beri nama <strong>WriteProtect</strong>.</li>
            <li>Klik dua kali pada <em>WriteProtect</em>, ubah kolom Value Data menjadi <code>0</code>, lalu klik OK.</li>
            <li>Restart komputer Anda dan coba format kembali flashdisk Anda.</li>
          </ol>

          <h2>Metode 2: Membuka Kunci via CMD (Command Prompt / Diskpart)</h2>
          <p>Apabila metode registry editor belum membuahkan hasil, kita bisa menggunakan tools bawaan Windows yang lebih powerful, yaitu Command Prompt dengan utilitas Diskpart:</p>
          <ol>
            <li>Buka menu Start, ketik <code>cmd</code>, klik kanan pada Command Prompt dan pilih <strong>Run as Administrator</strong>.</li>
            <li>Ketik perintah <code>diskpart</code> lalu tekan Enter.</li>
            <li>Ketik <code>list disk</code> untuk melihat daftar penyimpanan yang aktif. Identifikasi nomor disk flashdisk Anda (misalnya Disk 1 atau Disk 2) berdasarkan kapasitas ukurannya.</li>
            <li>Ketik <code>select disk X</code> (ganti X dengan nomor disk flashdisk Anda) lalu tekan Enter.</li>
            <li>Ketik perintah <code>attributes disk clear readonly</code> untuk menghapus status proteksi menulis.</li>
            <li>Setelah muncul pesan success, Anda bisa memformat flashdisk langsung dengan mengetik <code>clean</code> lalu <code>create partition primary</code> dan diakhiri dengan <code>format fs=ntfs quick</code>.</li>
          </ol>

          <h2>Metode 3: Menggunakan SD Card Formatter Resmi</h2>
          <p>Jika kedua cara di atas masih gagal karena kerusakan sistem file internal flashdisk, Anda bisa mengunduh software utility gratis pihak ketiga yang dikhususkan untuk memformat kartu memori dan USB drive secara mendalam, seperti *SD Card Formatter* dari SD Association.</p>
    `
  },
  {
    dir: 'cara-mengatasi-sinyal-hp-hilang',
    title: 'Cara Mengatasi Sinyal HP Hilang Tiba-Tiba (Semua Operator)',
    slug: '/artikel/cara-mengatasi-sinyal-hp-hilang',
    category: 'Tutorial & Tips',
    date: '17 Jun 2026',
    image: '/images/tutorial_sinyal_hp_hilang.png',
    focusKeyphrase: 'Sinyal HP Hilang',
    outboundUrl: 'https://support.google.com/android',
    outboundText: 'Android Network Support',
    content: `
          <p>Masalah <strong>Sinyal HP Hilang</strong> secara mendadak tentu sangat mengganggu produktivitas harian kita. Akibatnya, kita tidak bisa melakukan panggilan telepon penting, mengirim pesan SMS, hingga berselancar di internet menggunakan kuota data seluler. Masalah ini bisa menimpa semua merk smartphone baik Android maupun iPhone, dan dialami oleh pengguna semua operator seluler seperti Telkomsel, Indosat Ooredoo, XL Axiata, Smartfren, maupun Tri.</p>
          <p>Sebelum Anda terburu-buru membawa ponsel ke tempat reparasi hardware, ada baiknya melakukan pengecekan mandiri. Sebagian besar masalah hilangnya sinyal disebabkan oleh malfungsi software ringan, pengaturan jaringan yang salah, atau masalah pemblokiran IMEI. Berikut adalah panduan penanganan sinyal hilang terlengkap untuk Anda.</p>

          <div className="article-highlight">
            <strong>ℹ️ INFO REGULASI IMEI INDONESIA:</strong> Sejak pertengahan tahun 2020, pemerintah memberlakukan aturan pemblokiran IMEI bagi ponsel yang dibeli dari luar negeri tanpa membayar pajak bea masuk resmi. Jika sinyal Anda mendadak bertuliskan "Tidak Ada Layanan" secara permanen setelah update OS, ada kemungkinan IMEI HP Anda terblokir.
          </div>

          <h2>Langkah 1: Aktifkan dan Nonaktifkan Mode Pesawat (Airplane Mode)</h2>
          <p>Metode ini merupakan langkah *refreshing* jaringan seluler tercepat dan paling efisien. Cara kerjanya mirip dengan merestart modem internet:</p>
          <ol>
            <li>Tarik panel notifikasi atas pada layar HP Anda.</li>
            <li>Ketuk ikon pesawat terbang untuk mengaktifkan <strong>Airplane Mode</strong>. Seluruh koneksi jaringan seluler, WiFi, dan Bluetooth akan terputus seketika.</li>
            <li>Biarkan mode pesawat aktif selama 30 hingga 60 detik.</li>
            <li>Ketuk kembali ikon pesawat untuk mematikannya dan biarkan ponsel mencari pemancar sinyal (BTS) terdekat kembali secara bersih.</li>
          </ol>

          <h2>Langkah 2: Periksa Pengaturan APN (Access Point Name) Operator</h2>
          <p>Konfigurasi APN yang salah atau terhapus setelah update sistem operasi akan membuat HP Anda kehilangan koneksi internet sepenuhnya. Pastikan settingan APN Anda terisi sesuai dengan standar masing-masing operator:</p>
          <p>Buka menu Pengaturan > Jaringan Seluler > Nama Titik Akses (APN). Pilih opsi 'Kembalikan ke Default' (Reset to Default) atau isi kolom APN secara manual sesuai petunjuk resmi situs web operator Anda (misal: isi 'internet' untuk Telkomsel atau 'indosatgprs' untuk Indosat).</p>

          <h2>Langkah 3: Bersihkan dan Pasang Kembali Kartu SIM</h2>
          <p>Terkadang debu mikroskopis dapat masuk ke celah slot SIM card dan menutupi lempengan kuningan kartu SIM, mengganggu pembacaan chip oleh sistem ponsel. Matikan HP, keluarkan SIM tray menggunakan ejector, bersihkan bagian kuningannya perlahan dengan penghapus pensil bersih, pasang kembali, lalu nyalakan HP Anda.</p>
    `
  },
  {
    dir: 'cara-masuk-bios-laptop',
    title: 'Cara Masuk BIOS Laptop Lenovo, ASUS, Acer, HP, dan Dell',
    slug: '/artikel/cara-masuk-bios-laptop',
    category: 'Tutorial & Tips',
    date: '17 Jun 2026',
    image: '/images/tutorial_masuk_bios.png',
    focusKeyphrase: 'Cara Masuk BIOS Laptop',
    outboundUrl: 'https://support.microsoft.com/windows',
    outboundText: 'Microsoft Device Boot Options',
    content: `
          <p>Mengetahui <strong>Cara Masuk BIOS Laptop</strong> sangat penting bagi setiap pemilik komputer. BIOS (Basic Input/Output System) atau versi modernnya UEFI (Unified Extensible Firmware Interface) adalah program tingkat rendah yang berfungsi untuk mengatur perangkat keras komputer Anda sebelum sistem operasi Windows atau Linux dijalankan. Melalui BIOS, Anda bisa melakukan instalasi ulang Windows, mengatur urutan booting flashdisk, mengaktifkan virtualisasi (VT-x/AMD-V), hingga memantau temperatur hardware.</p>
          <p>Tantangan terbesar bagi orang awam adalah tombol shortcut untuk mengakses BIOS berbeda-beda tergantung dari merk laptop yang mereka miliki. Selain itu, kecepatan booting Windows 10 dan 11 yang sangat cepat berkat fitur *Fast Startup* membuat waktu jeda menekan tombol shortcut menjadi sangat sempit. Berikut panduan lengkap cara masuk BIOS untuk semua merk laptop terpopuler.</p>

          <div className="article-highlight">
            <strong>⚠️ PERATURAN KESELAMATAN BIOS:</strong> Jangan pernah mengubah parameter di dalam BIOS secara sembarangan jika Anda tidak memahami fungsinya. Kesalahan konfigurasi yang fatal (seperti menaikkan tegangan CPU/overclocking berlebih) dapat membuat laptop gagal menyala atau mengalami mati total.
          </div>

          <h2>1. Daftar Tombol Shortcut Masuk BIOS Berdasarkan Merk</h2>
          <p>Untuk masuk ke menu BIOS menggunakan tombol keyboard, matikan laptop Anda terlebih dahulu. Nyalakan laptop kembali dengan menekan tombol Power, lalu **segera tekan tombol shortcut di bawah ini berulang-ulang dengan cepat** sebelum logo Windows muncul di layar:</p>
          <ul>
            <li><strong>ASUS:</strong> Tekan tombol <strong>F2</strong> (beberapa model menggunakan tombol <strong>Fn + F2</strong> atau <strong>Delete</strong>).</li>
            <li><strong>Lenovo:</strong> Tekan tombol <strong>F2</strong> atau <strong>Fn + F2</strong>. Pada seri ThinkPad, tekan tombol <strong>Enter</strong> berulang kali saat booting untuk memunculkan menu pilihan startup. Beberapa model Lenovo memiliki tombol kecil khusus di samping bodi bernama **Novo Button**.</li>
            <li><strong>Acer:</strong> Tekan tombol <strong>F2</strong> atau <strong>Delete</strong> berulang-ulang sejak laptop dinyalakan.</li>
            <li><strong>HP (Hewlett-Packard):</strong> Tekan tombol <strong>Esc</strong> berulang kali untuk memunculkan menu startup, lalu tekan <strong>F10</strong> untuk masuk ke BIOS.</li>
            <li><strong>Dell:</strong> Tekan tombol <strong>F2</strong> saat logo Dell muncul di layar monitor Anda.</li>
          </ul>

          <h2>2. Cara Masuk BIOS Lewat Windows 10/11 (Tanpa Tombol Shortcut)</h2>
          <p>Jika laptop Anda menyala terlalu cepat sehingga Anda selalu gagal menekan shortcut tepat waktu, Anda bisa masuk ke BIOS melalui menu sistem operasi Windows secara aman:</p>
          <ol>
            <li>Klik menu Start Windows, lalu klik ikon <strong>Settings (Gigi Roda)</strong>.</li>
            <li>Pilih menu <strong>Update & Security</strong> (Windows 10) atau <strong>System > Recovery</strong> (Windows 11).</li>
            <li>Temukan opsi <strong>Advanced Startup</strong> dan klik tombol <strong>Restart Now</strong>.</li>
            <li>Komputer akan restart dan menampilkan layar biru bertuliskan *Choose an option*. Pilih <strong>Troubleshoot</strong>.</li>
            <li>Pilih <strong>Advanced Options</strong> lalu klik <strong>UEFI Firmware Settings</strong>.</li>
            <li>Klik tombol <strong>Restart</strong>, dan laptop akan otomatis masuk ke dalam tampilan menu BIOS/UEFI.</li>
          </ol>
    `
  },
  {
    dir: 'cara-mengubah-pdf-ke-word',
    title: 'Cara Mengubah PDF ke Word Secara Offline & Online Gratis',
    slug: '/artikel/cara-mengubah-pdf-ke-word',
    category: 'Tutorial & Tips',
    date: '17 Jun 2026',
    image: '/images/tutorial_pdf_to_word.png',
    focusKeyphrase: 'Mengubah PDF ke Word',
    outboundUrl: 'https://support.microsoft.com/word',
    outboundText: 'Microsoft Word Help',
    content: `
          <p>PDF (Portable Document Format) adalah format dokumen standar dunia yang sangat baik untuk menjaga konsistensi tata letak teks dan gambar agar tidak berubah saat dibuka di perangkat yang berbeda. Namun, PDF memiliki kelemahan utama: dokumen tersebut sangat sulit untuk diedit kembali. Oleh karena itu, mengetahui <strong>Mengubah PDF ke Word</strong> adalah keahlian penting untuk mempermudah pekerjaan administrasi kantor maupun pengerjaan tugas kuliah.</p>
          <p>Banyak orang mengira konversi PDF ke Word akan menghasilkan dokumen yang berantakan, teks yang bertumpuk, atau tabel yang hancur. Faktanya, jika Anda menggunakan tools dan metode yang tepat, hasil konversi bisa sangat rapi dan siap diedit kembali. Berikut kami ulas cara mengubah PDF ke Word secara offline maupun online tanpa berantakan.</p>

          <div className="article-highlight">
            <strong>🔒 CATATAN KEAMANAN DOKUMEN:</strong> Jika dokumen PDF Anda berisi informasi sensitif seperti laporan keuangan perusahaan, data KTP, atau sandi privasi, hindari penggunaan konverter online gratis. Gunakan metode offline demi menjaga kerahasiaan data Anda dari server pihak ketiga.
          </div>

          <h2>Metode 1: Menggunakan Microsoft Word (Offline & Paling Rapi)</h2>
          <p>Jika komputer Anda telah terinstall Microsoft Office Word versi 2013 atau yang lebih baru, Anda sebenarnya tidak memerlukan alat tambahan apa pun lagi karena MS Word dibekali fitur import PDF canggih:</p>
          <ol>
            <li>Buka aplikasi <strong>Microsoft Word</strong> di laptop Anda.</li>
            <li>Klik menu <strong>File > Open</strong> lalu cari file PDF yang ingin Anda konversi di folder penyimpanan Anda.</li>
            <li>Setelah Anda memilih file PDF tersebut, MS Word akan memunculkan jendela notifikasi yang menyatakan bahwa file PDF akan dikonversi menjadi dokumen Word yang dapat diedit.</li>
            <li>Klik tombol <strong>OK</strong> dan tunggu proses konversi selesai (kecepatan proses tergantung dari ketebalan halaman PDF Anda).</li>
            <li>File Anda sekarang sudah terbuka di Word. Klik **Enable Editing** di bagian atas untuk mulai mengedit konten.</li>
          </ol>

          <h2>Metode 2: Menggunakan Adobe Acrobat Reader Pro</h2>
          <p>Sebagai pencipta format PDF, Adobe menyediakan software resmi **Adobe Acrobat Pro** yang memiliki akurasi ekstra tinggi dalam mendeteksi jenis font dan layout tabel. Buka file PDF di Adobe Acrobat, pilih menu 'Export PDF' di panel sebelah kanan, tentukan format output menjadi Microsoft Word Document (.docx), lalu klik tombol Export.</p>

          <h2>Metode 3: Menggunakan Layanan Online Gratis (iLovePDF / Smallpdf)</h2>
          <p>Jika Anda sedang terburu-buru dan ingin mengonversi dokumen kecil melalui HP, gunakan situs konversi online tepercaya seperti iLovePDF atau Smallpdf secara gratis di browser.</p>
    `
  },
  {
    dir: 'cara-menyembunyikan-aplikasi-hp-samsung',
    title: 'Cara Menyembunyikan Aplikasi di HP Samsung Tanpa Root',
    slug: '/artikel/cara-menyembunyikan-aplikasi-hp-samsung',
    category: 'Tutorial & Tips',
    date: '17 Jun 2026',
    image: '/images/tutorial_hide_apps_samsung.png',
    focusKeyphrase: 'Menyembunyikan Aplikasi di HP Samsung',
    outboundUrl: 'https://www.samsung.com/support',
    outboundText: 'Samsung Official Support',
    content: `
          <p>Privasi adalah hal yang sangat berharga bagi setiap pemilik smartphone. Ada kalanya kita harus meminjamkan HP kita kepada teman atau keluarga, namun merasa khawatir mereka akan membuka aplikasi sensitif tanpa izin, seperti aplikasi perbankan (mobile banking), galeri foto pribadi, atau aplikasi percakapan instan (WhatsApp, Telegram). Untuk itu, mempelajari <strong>Menghapus Akun Google Secara Permanen di HP & Laptop</strong> atau dalam kasus ini <strong>Menyembunyikan Aplikasi di HP Samsung</strong> adalah langkah pencegahan privasi terbaik.</p>
          <p>Beruntung bagi para pengguna HP Samsung, antarmuka One UI milik Samsung sudah dibekali dengan fitur keamanan bawaan yang sangat mumpuni. Anda tidak perlu melakukan proses rooting yang berbahaya atau mengunduh aplikasi pihak ketiga di Google Play Store yang sering kali dipenuhi iklan mengganggu. Mari ikuti dua cara termudah menyembunyikan aplikasi di HP Samsung.</p>

          <div className="article-highlight">
            <strong>🔒 TIPS PRIVASI EKSTRA:</strong> Selain menyembunyikan aplikasi dari beranda, pastikan Anda menonaktifkan notifikasi aplikasi tersebut agar tidak muncul di layar kunci saat HP Anda dipinjam oleh orang lain.
          </div>

          <h2>Metode 1: Menyembunyikan Aplikasi via Pengaturan Layar Utama One UI</h2>
          <p>Ini adalah cara tercepat untuk menyembunyikan ikon aplikasi agar tidak terlihat di Home Screen maupun App Drawer ponsel Samsung Anda:</p>
          <ol>
            <li>Buka menu <strong>Pengaturan (Settings)</strong> pada HP Samsung Anda.</li>
            <li>Pilih opsi <strong>Layar Utama (Home Screen)</strong>.</li>
            <li>Gulir ke bawah dan ketuk menu <strong>Sembunyikan Aplikasi di layar Utama dan Layar Aplikasi</strong> (Hide apps on Home and Apps screens).</li>
            <li>Akan muncul daftar seluruh aplikasi yang terpasang di HP Anda. Pilih aplikasi yang ingin disembunyikan (misal: WhatsApp). Aplikasi terpilih akan masuk ke bagian *Aplikasi Tersembunyi* di atas.</li>
            <li>Ketuk tombol <strong>Selesai (Done)</strong> di bagian bawah untuk menyimpan perubahan. Ikon aplikasi tersebut kini sudah hilang sepenuhnya dari layar.</li>
          </ol>

          <h2>Metode 2: Menggunakan Fitur Secure Folder (Folder Aman)</h2>
          <p>Jika Anda menginginkan perlindungan tingkat militer dengan sandi enkripsi khusus untuk aplikasi dan data rahasia Anda, gunakan fitur **Secure Folder** Samsung Knox:</p>
          <ol>
            <li>Buka Pengaturan > Biometrik dan Keamanan > <strong>Secure Folder (Folder Aman)</strong>.</li>
            <li>Masuk menggunakan Akun Samsung (Samsung Account) Anda dan atur metode kunci (PIN, Pola, atau Sidik Jari).</li>
            <li>Setelah Secure Folder aktif, buka folder tersebut dari menu utama, lalu klik tombol **Tambah Aplikasi (+)** untuk menyalin aplikasi penting ke dalam lingkungan terenkripsi.</li>
            <li>Hapus aplikasi asli yang ada di luar Secure Folder agar hanya tersisa satu aplikasi di dalam folder rahasia Anda.</li>
          </ol>
    `
  },
  {
    dir: 'cara-cek-baterai-health-laptop',
    title: 'Cara Cek Kesehatan Baterai Laptop Windows 10 & 11',
    slug: '/artikel/cara-cek-baterai-health-laptop',
    category: 'Tutorial & Tips',
    date: '17 Jun 2026',
    image: '/images/tutorial_battery_health_laptop.png',
    focusKeyphrase: 'Cek Kesehatan Baterai Laptop',
    outboundUrl: 'https://support.microsoft.com/windows',
    outboundText: 'Microsoft Windows Battery Support',
    content: `
          <p>Baterai merupakan salah satu komponen vital pada laptop yang performanya akan terus menurun seiring dengan lamanya masa pemakaian (wear level). Jika Anda sering mendapati baterai laptop Anda mendadak drop dari 50% langsung mati, atau waktu pakainya menjadi sangat singkat, Anda perlu melakukan tindakan pencegahan. Mengetahui <strong>Cek Kesehatan Baterai Laptop</strong> (Battery Health) akan membantu Anda memutuskan apakah baterai masih layak pakai atau sudah waktunya diganti.</p>
          <p>Tidak seperti sistem operasi macOS di Macbook yang menyediakan persentase Battery Health secara langsung di menu setting, pengguna Windows 10 dan Windows 11 harus menggunakan sedikit trik Command Prompt untuk memunculkan laporan kesehatan baterai resmi secara akurat. Tenang saja, langkah ini sangat mudah dan aman dilakukan.</p>

          <div className="article-highlight">
            <strong>📈 INDIKATOR UTAMA:</strong> Di dalam laporan baterai Windows, Anda akan disajikan data penting berupa *Design Capacity* (kapasitas baterai bawaan pabrik saat baru) dan *Full Charge Capacity* (kapasitas maksimal pengisian daya saat ini). Perbandingan kedua nilai inilah yang menentukan kesehatan baterai Anda.
          </div>

          <h2>Langkah demi Langkah Membuat Battery Report di Windows</h2>
          <p>Ikuti panduan berikut untuk mengekstrak laporan kesehatan baterai bawaan sistem Windows tanpa bantuan program pihak ketiga:</p>
          <ol>
            <li>Klik kanan pada tombol Start Windows, pilih opsi <strong>Command Prompt (Admin)</strong> atau <strong>Windows Terminal (Admin)</strong> / <strong>PowerShell (Admin)</strong>.</li>
            <li>Di dalam jendela hitam Command Prompt, ketik perintah berikut secara tepat: <br /><code>powercfg /batteryreport</code> lalu tekan Enter.</li>
            <li>Windows akan segera memproses data baterai dan memunculkan teks notifikasi yang berbunyi: <br /><em>"Battery life report saved to file path C:\Users\Username\battery-report.html"</em>.</li>
            <li>Buka File Explorer Windows Anda, navigasikan ke folder User Anda sesuai petunjuk path tersebut (biasanya di folder <code>C:\Users\[NamaUser]</code>).</li>
            <li>Temukan file bernama <strong>battery-report.html</strong>, klik dua kali pada file tersebut untuk membukanya menggunakan browser Google Chrome atau Microsoft Edge.</li>
          </ol>

          <h2>Cara Membaca dan Menganalisis Laporan Baterai</h2>
          <p>Setelah dokumen HTML terbuka di browser Anda, perhatikan bagian berikut ini untuk menganalisis kondisinya:</p>
          <p>Carilah tabel **Installed Batteries**. Di sana terdapat data **Design Capacity** (misal: 45.000 mWh) dan **Full Charge Capacity** (misal: 38.000 mWh). Gunakan rumus sederhana berikut untuk menghitung status kesehatan baterai Anda: <br /><code>(Full Charge Capacity / Design Capacity) x 100%</code>. Dari contoh tersebut, kesehatan baterai Anda adalah sekitar 84%. Jika nilainya sudah berada di bawah 50%, disarankan untuk mengganti sel baterai demi kenyamanan mobilitas Anda.</p>
    `
  },
  {
    dir: 'cara-mengatasi-chrome-force-close',
    title: 'Cara Mengatasi Google Chrome Sering Keluar Sendiri di HP',
    slug: '/artikel/cara-mengatasi-chrome-force-close',
    category: 'Tutorial & Tips',
    date: '17 Jun 2026',
    image: '/images/tutorial_chrome_force_close.png',
    focusKeyphrase: 'Google Chrome Sering Keluar Sendiri',
    outboundUrl: 'https://support.google.com/chrome',
    outboundText: 'Google Chrome Official Help',
    content: `
          <p>Google Chrome merupakan peramban internet (browser) paling populer yang digunakan oleh jutaan pemilik smartphone Android dan iOS di seluruh dunia karena kecepatan dan sinkronisasinya yang mulus. Namun, adakalanya performa Chrome terganggu oleh error sistem, yang mengakibatkan masalah menyebalkan seperti <strong>Google Chrome Sering Keluar Sendiri</strong> atau mendadak tertutup (force close) saat sedang digunakan membaca artikel penting.</p>
          <p>Masalah aplikasi keluar sendiri ini biasanya dipicu oleh kehabisan memori RAM, penumpukan data cache yang korup, hingga ketidakcocokan versi aplikasi dengan sistem operasi ponsel Anda. Berikut adalah beberapa metode perbaikan teruji yang bisa Anda praktekkan untuk mengembalikan kestabilan browser Google Chrome Anda.</p>

          <div className="article-highlight">
            <strong>💡 INFO PENTING:</strong> Menghapus data cache Google Chrome hanya akan membuang file sementara (seperti gambar pre-load) dan tidak akan menghapus data history pencarian atau bookmark penting Anda yang telah tersinkronisasi di akun Google.
          </div>

          <h2>1. Bersihkan Cache dan Data Google Chrome</h2>
          <p>Data sampah (cache) yang menumpuk seiring dengan banyaknya situs web yang Anda kunjungi bisa menjadi penyebab utama aplikasi menjadi tidak stabil. Lakukan pembersihan secara berkala:</p>
          <ol>
            <li>Buka menu <strong>Pengaturan (Settings)</strong> pada smartphone Anda.</li>
            <li>Pilih menu <strong>Aplikasi / Kelola Aplikasi (Apps Management)</strong>.</li>
            <li>Cari dan pilih aplikasi <strong>Chrome</strong> dari daftar aplikasi terpasang.</li>
            <li>Pilih opsi <strong>Penyimpanan (Storage)</strong>.</li>
            <li>Ketuk tombol <strong>Hapus Cache (Clear Cache)</strong>. Jika ingin pembersihan total, ketuk Kelola Ruang (Manage Space) lalu pilih **Hapus Semua Data (Clear All Data)**.</li>
            <li>Buka kembali Chrome dan tes apakah error force close masih terjadi.</li>
          </ol>

          <h2>2. Update Android System WebView</h2>
          <p>Bagi para pengguna sistem operasi Android, komponen internal bernama **Android System WebView** bertugas menampilkan konten web di dalam berbagai aplikasi. Jika WebView mengalami bug atau belum diupdate ke versi terbaru, aplikasi berbasis web seperti Google Chrome dipastikan akan sering mengalami crash. Buka Google Play Store, cari 'Android System WebView', lalu klik tombol Update.</p>

          <h2>3. Nonaktifkan Ekstensi yang Bermasalah</h2>
          <p>Jika Anda menggunakan Chrome di komputer desktop atau menggunakan modifikasi browser seluler yang mendukung ekstensi, pastikan untuk menonaktifkan ekstensi pihak ketiga satu per satu guna mengisolasi penyebab utama crash.</p>
    `
  },
  {
    dir: 'cara-membuat-bootable-flashdisk-rufus',
    title: 'Cara Menggunakan Rufus untuk Membuat Bootable Flashdisk Windows',
    slug: '/artikel/cara-membuat-bootable-flashdisk-rufus',
    category: 'Tutorial & Tips',
    date: '17 Jun 2026',
    image: '/images/tutorial_bootable_rufus.png',
    focusKeyphrase: 'Menggunakan Rufus Bootable',
    outboundUrl: 'https://rufus.ie',
    outboundText: 'Rufus Official Website',
    content: `
          <p>Sebelum era teknologi cloud berkembang pesat seperti sekarang, melakukan instalasi ulang sistem operasi Windows pada PC atau laptop mengharuskan kita menggunakan kepingan kaset DVD eksternal yang lambat dan rawan tergores. Kini, proses instalasi Windows 10 maupun Windows 11 telah bergeser ke media yang jauh lebih cepat dan andal, yaitu USB Flash Drive. Untuk melakukan ini, Anda harus mempelajari <strong>Menggunakan Rufus Bootable</strong> secara tepat.</p>
          <p>Rufus adalah software utilitas open-source berukuran sangat ringan yang khusus dirancang untuk memformat dan membuat media bootable USB flashdisk. Software ini sangat disukai oleh teknisi komputer karena kecepatan kerjanya yang luar biasa serta dukungannya yang lengkap terhadap skema partisi modern (GPT/UEFI) maupun komputer jadul (MBR/BIOS Legacy). Simak tutorial lengkap di bawah ini untuk membuat bootable Windows Anda.</p>

          <div className="article-highlight">
            <strong>⚠️ PERINGATAN HAPUS DATA:</strong> Proses pembuatan bootable menggunakan Rufus akan memformat seluruh isi flashdisk Anda tanpa sisa. Pastikan Anda telah memindahkan file-file penting di dalam flashdisk ke tempat penyimpanan aman lainnya terlebih dahulu.
          </div>

          <h2>Persiapan Sebelum Memulai</h2>
          <p>Sebelum menjalankan aplikasi Rufus, pastikan Anda telah menyiapkan beberapa kebutuhan wajib berikut:</p>
          <ul>
            <li><strong>USB Flashdisk:</strong> Siapkan flashdisk berkapasitas minimal 8 GB (disarankan 16 GB untuk instalasi Windows 11 terbaru).</li>
            <li><strong>File ISO Windows:</strong> Unduh file ISO Windows 10 atau Windows 11 resmi langsung dari situs resmi Microsoft.</li>
            <li><strong>Software Rufus:</strong> Unduh versi portable terbaru dari situs resmi <a href="https://rufus.ie" target="_blank" rel="noopener noreferrer">rufus.ie</a>.</li>
          </ul>

          <h2>Langkah demi Langkah Membuat Bootable USB dengan Rufus</h2>
          <p>Setelah semua persiapan lengkap, colokkan flashdisk Anda ke port USB laptop dan ikuti panduan berikut:</p>
          <ol>
            <li>Buka file installer <strong>Rufus</strong> yang telah Anda unduh (tidak perlu proses install karena Rufus bersifat portable).</li>
            <li>Pada kolom <strong>Device</strong> di bagian atas, pastikan nama USB Flashdisk Anda terpilih dengan benar.</li>
            <li>Pada bagian <strong>Boot selection</strong>, klik tombol <strong>SELECT</strong> di sebelah kanan, lalu cari dan pilih file ISO Windows yang telah disiapkan sebelumnya.</li>
            <li>Untuk kolom <strong>Partition scheme</strong>: Pilih <strong>GPT</strong> jika komputer Anda menggunakan sistem modern (UEFI), atau pilih <strong>MBR</strong> jika komputer Anda adalah tipe lama (BIOS Legacy).</li>
            <li>Pada Target System, sesuaikan dengan skema partisi Anda (UEFI non-CSM atau BIOS).</li>
            <li>Klik tombol <strong>START</strong> di bagian bawah untuk memulai proses pembakaran file ISO ke flashdisk.</li>
            <li>Akan muncul popup konfirmasi bahwa semua data di flashdisk akan dihapus, klik <strong>OK</strong> untuk melanjutkan. Tunggu status hingga berganti tulisan <strong>READY</strong> hijau.</li>
          </ol>
    `
  }
];

// Helper to create directories recursively
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

const targetDir = path.join(__dirname, '../src/app/artikel/(tech-hack)');
ensureDir(targetDir);

for (const art of articlesData) {
  const artDir = path.join(targetDir, art.dir);
  ensureDir(artDir);
  
  const filePath = path.join(artDir, 'page.tsx');
  
  const pageContent = `import RelatedPosts from "@/components/RelatedPosts";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "${art.title}",
  description: "${art.title} - Dapatkan panduan lengkap langkah demi langkah dengan penjelasan yang detail, akurat, dan mudah dipraktikkan untuk pemula.",
};

export default function ArticlePage() {
  return (
    <main className="main-content article-layout">
      <article className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "${art.title}",
            "image": [
              "https://buzznation.id${art.image}"
            ],
            "datePublished": "2026-06-17T00:00:00.000Z",
            "dateModified": "2026-06-17T00:00:00.000Z",
            "author": [
              {
                "@type": "Person",
                "name": "Redaksi BuzzNation",
                "url": "https://buzznation.id/redaksi"
              }
            ],
            "publisher": {
              "@type": "Organization",
              "name": "BuzzNation",
              "logo": {
                "@type": "ImageObject",
                "url": "https://buzznation.id/icon.svg"
              }
            },
            "description": "${art.title} - Panduan lengkap, terpercaya, dan mudah dipraktikkan."
          }) }}
        />
        
        <header className="article-header">
          <div style={{ marginBottom: "15px" }}>
            <span className="badge">${art.category}</span>
          </div>
          <h1 className="article-title">
            ${art.title}
          </h1>
          <div className="article-meta-info">
            <div className="article-author">Oleh: Redaksi BuzzNation</div>
            <span>•</span>
            <span>${art.date}</span>
          </div>
        </header>

        <div className="article-body">
          <figure className="article-image-container">
            <Image src="${art.image}" alt="${art.focusKeyphrase}" width={1200} height={675} style={{ width: '100%', height: 'auto' }} />
          </figure>

          ${art.content.replace(/ > /g, ' &gt; ')}

          <div style={{ marginTop: '50px', padding: '30px', background: '#f8fafc', borderRadius: '12px' }}>
            <h3 style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '10px', marginBottom: '20px' }}>Frequently Asked Questions (FAQ)</h3>
            
            <h4 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '8px' }}>1. Apakah cara ini dijamin 100% berhasil?</h4>
            <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>Sebagian besar kendala sistem ringan berhasil diatasi dengan mengikuti panduan di atas. Namun, jika ada komponen hardware yang mengalami kerusakan fisik, Anda tetap membutuhkan penggantian suku cadang ke teknisi profesional.</p>
            
            <h4 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '8px' }}>2. Apakah tindakan ini memerlukan akses root atau merusak garansi?</h4>
            <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>Semua langkah di sini memanfaatkan tools bawaan sistem resmi yang aman tanpa root, sehingga tidak akan membatalkan status garansi resmi perangkat Anda.</p>
            
            <h4 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '8px' }}>3. Apa yang harus saya lakukan jika langkah di atas masih gagal?</h4>
            <p style={{ color: 'var(--text-secondary)' }}>Jika masalah berlanjut, silakan konsultasikan ke pihak support resmi dari penyedia perangkat atau kunjungi forum diskusi teknis resmi di website produsen masing-masing.</p>
          </div>

          <p style={{ marginTop: '20px', fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            Baca juga artikel menarik lainnya di portal <Link href="/">BuzzNation</Link>. Temukan juga informasi ter-update seputar kategori <Link href="/kategori/tech-hack/tutorial">${art.category}</Link> kami. Untuk referensi resmi dan terpercaya, Anda juga dapat mengunjungi <a href="${art.outboundUrl}" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>${art.outboundText}</a>.
          </p>
        </div>

        <RelatedPosts currentSlug="${art.slug}" category="${art.category}" />
      </article>
    </main>
  );
}
`;

  fs.writeFileSync(filePath, pageContent, 'utf8');
}

console.log('Successfully created all 10 article folders and page.tsx files!');
