// ------------------------------------------------------------
// design-platform UI kit — sample content (props-driven).
// Indonesian copy, generic "Rupa" brand. Screens read from here;
// no strings are hardcoded inside the reusable components.
// ------------------------------------------------------------

export const brand = { name: "Rupa", initial: "R" };

export const nav = {
  main: [
    { key: "create", icon: "+", label: "Buat", accent: true, overlay: "create" },
    { key: "home", icon: "B", label: "Beranda", route: "home" },
    { key: "projects", icon: "P", label: "Proyek", route: "projects" },
    { key: "templates", icon: "T", label: "Template", route: "templates" },
    { key: "brand", icon: "M", label: "Merek", crown: true, route: "brand" },
    { key: "ai", icon: "Ai", label: "AI Rupa", crown: true, route: "ai" },
    { key: "print", icon: "C", label: "Cetak", route: "print" },
    { key: "more", icon: "⋯", label: "Lainnya", overlay: "more" },
  ],
  dock: [
    { key: "notif", icon: "◻", label: "Notifikasi", overlay: "notif" },
    { key: "account", icon: "RF", label: "Akun", avatar: true, overlay: "account" },
  ],
};

const mo = "bulan yang lalu";
export const files = [
  { key: "f1", name: "Unggahan", owner: "Private", type: "Folder", edited: "10 " + mo },
  { key: "f2", name: "Presentasi Peluncuran Produk", owner: "Private", type: "Presentasi (16:9)", edited: "2 " + mo },
  { key: "f3", name: "Konten Instagram Promo Akhir Pekan", owner: "Private", type: "Konten Instagram (4:5)", edited: "7 " + mo },
  { key: "f4", name: "Proposal Kerja Sama.pdf", owner: "Private", type: "Dokumen (A4)", edited: "3 " + mo },
  { key: "f5", name: "Materi Rapat Tim.pdf", owner: "—", sub: "Unggahan", type: "A4", edited: "10 " + mo },
];

export const rowMenu = [
  { label: "Ganti nama" }, { label: "Duplikat" }, { label: "Bagikan" },
  { label: "Pindahkan" }, { label: "Bintangi" }, { divider: true }, { label: "Hapus", danger: true },
];

export const recent = [
  "Presentasi Kuartal 3", "Konten Instagram Promo",
  "Proposal Klien", "Invoice Bulanan", "Poster Acara Komunitas", "Banner Diskon", "Undangan Webinar",
].map((title, i) => ({ key: "r" + i, title, edited: "Diedit 7 bulan lalu" }));

export const home = {
  hero: "Mau desain apa hari ini?",
  searchPh: "Cari desain, folder, dan unggahan",
  cats: [
    { key: "tpl", label: "Template" }, { key: "magic", label: "Lapisan Ajaib", badge: "Baru" },
    { key: "pres", label: "Presentasi" }, { key: "social", label: "Media sosial" },
    { key: "video", label: "Video" }, { key: "print", label: "Katalog Cetak" },
    { key: "doc", label: "Doc" }, { key: "wb", label: "Papan Tulis" },
    { key: "sheet", label: "Spreadsheet" }, { key: "code", label: "Kode", badge: "Baru" },
    { key: "web", label: "Situs web" }, { key: "email", label: "Email" },
  ],
  recentTitle: "Desain Terbaru",
  filters: [
    { key: "owner", label: "Pemilik", options: ["Siapa saja", "Dimiliki saya"] },
    { key: "type", label: "Semua jenis", options: ["Semua", "Presentasi", "Video", "Doc"] },
  ],
  ai: {
    title: "Dapatkan bantuan apa pun tentang Rupa",
    sub: "Ajukan pertanyaan. Temukan jawaban. Lanjutkan desain.",
    input: "Ada yang bisa saya bantu?",
    disc: "AI bisa membuat kesalahan. Periksa kembali untuk memastikan keakuratannya.",
  },
};

export const projects = {
  title: "Semua proyek",
  searchPh: "Cari di semua konten",
  recentTitle: "Desain Terbaru",
  filters: [
    { key: "jenis", label: "Jenis", options: ["Semua", "Presentasi", "Doc", "Video"] },
    { key: "kategori", label: "Kategori", options: ["Semua", "Bisnis", "Pribadi"] },
    { key: "pemilik", label: "Pemilik", options: ["Siapa saja", "Dimiliki saya", "Dibagikan"] },
    { key: "tanggal", label: "Tanggal diubah", options: ["Kapan saja", "7 hari terakhir", "30 hari terakhir"] },
  ],
};

export const templates = {
  title: "Template",
  searchPh: "Cari dari jutaan template",
  subnav: [
    { key: "template", label: "Template" }, { key: "foto", label: "Foto" },
    { key: "grafis", label: "Grafis" }, { key: "kreator", label: "Kreator" },
    { key: "star", label: "Konten berbintang" },
  ],
  chips: ["Bisnis", "Video", "Media sosial", "Pustaka Edukasi"],
  exploreTitle: "Jelajahi template",
  tiles: ["Presentasi", "Poster", "CV Resume Riwayat…", "Email", "Undangan", "Konten Instagram", "Cerita Instagram", "Video Horizontal", "Menulis kode", "Tautan di Bio"],
  aiTitle: "Inilah efek video AI",
};

export const brandKit = {
  crumb: "Semua Template Merek",
  kit: "Kit Merek",
  title: "Kit Merek",
  subnav: [
    { key: "all", label: "Semua aset" }, { key: "guide", label: "Pedoman" },
    { key: "tpl", label: "Template Merek", badge: "Baru" }, { key: "logo", label: "Logo" },
    { key: "warna", label: "Warna" }, { key: "font", label: "Font" },
    { key: "tone", label: "Nada komunikasi" }, { key: "foto", label: "Foto" },
    { key: "grafis", label: "Grafis" }, { key: "ikon", label: "Ikon" }, { key: "bagan", label: "Bagan" },
  ],
  promoTitle: "Visual dengan gaya khas merek usaha",
  promoBody: "Siapkan semua aset dan pedoman merek Anda di Kit Merek. Membuat desain keren dengan gaya khas merek jadi lebih mudah.",
  cta1: "Coba gratis selama 30 hari",
  cta2: "Mulai dengan 3 warna gratis",
  assets: ["Template Merek", "Logo", "Warna", "Font", "Nada komunikasi", "Foto", "Grafis", "Ikon"],
};

export const print = {
  title: "Selamat datang di Katalog Cetak",
  searchPh: "Cari produk cetak",
  subnav: [
    { key: "template", label: "Template" }, { key: "foto", label: "Foto" },
    { key: "grafis", label: "Grafis" }, { key: "kreator", label: "Kreator" }, { key: "star", label: "Konten berbintang" },
  ],
  stepsTitle: "Cara kerja",
  steps: [
    { kicker: "LANGKAH 1", label: "Pilih produk" },
    { kicker: "LANGKAH 2", label: "Sesuaikan desain Anda" },
    { kicker: "LANGKAH 3", label: "Nikmati ongkir gratis dan cepat!" },
  ],
  tryTitle: "Coba yang ini!",
  products: ["Poster", "Selebaran", "Undangan", "Kartu Nama Bisnis"],
};

export const ai = {
  newChat: "Obrolan baru",
  histTitle: "Semua obrolan Anda akan ditayangkan di sini",
  histBody: "Ayo mulai desain bersama AI dengan memulai obrolan baru dan menjelaskan ide Anda.",
  hero: "Mau desain apa hari ini?",
  inputPh: "Jelaskan ide Anda, lalu nanti akan saya wujudkan",
  modes: [
    { label: "Desain", badge: "Baru" }, { label: "Gambar" }, { label: "Doc" }, { label: "Kode" }, { label: "Klip video" },
  ],
};

export const createModal = {
  title: "Buat desain",
  searchPh: "Apa yang ingin Anda buat?",
  catNav: [
    "Untuk Anda", "Presentasi", "Media sosial", "Editor foto", "Video", "Cetak",
    "Docs", "Papan Tulis Online", "Spreadsheets", "Kode", "Situs web", "Email", "Ukuran kustom", "Unggah",
  ],
  quickTitle: "Tindakan cepat",
  quick: [
    { label: "Lapisan Ajaib", badge: "Baru" }, { label: "Perekam Layar" },
    { label: "Program Rupa", badge: "Baru" }, { label: "Tulisan Ajaib" }, { label: "Penghapus Latar" },
  ],
  popTitle: "Populer di Rupa",
  popular: ["Presentasi", "Konten Instagram (4:5)", "Dokumen (A4)", "Selebaran (A4)", "Banner"],
  tryTitle: "Coba hal baru",
  tryNew: ["Doc (Digital)", "Situs Web", "Video Horizontal", "Agenda", "Doc (A4)"],
};

export const accountMenu = {
  header: "Akun",
  user: { name: "Nadia Pratama", email: "nadia@rupa.design", initials: "NP" },
  team: { name: "Tim Rupa", meta: "Gratis • 8 anggota" },
  items: [
    { label: "Akun Anda", icon: "◦" }, { label: "Pengaturan", icon: "◦" },
    { label: "Tema", icon: "◦", chevron: true, action: "theme" },
    { label: "Bantuan dan sumber informasi", icon: "◦", chevron: true },
    { label: "Alat lanjutan", icon: "◦", badge: "Beta", chevron: true },
    { label: "Paket dan harga", icon: "◦" },
    { divider: true },
    { label: "Dapatkan Aplikasi Rupa", icon: "◦" },
    { divider: true },
    { label: "Keluar dari semua akun", icon: "◦" },
  ],
};

export const moreMenu = [
  { label: "Aplikasi", desc: "Sambungkan alat desain dan produktivitas…" },
  { label: "Marketing", desc: "Alat AI untuk mengembangkan pemasaran…" },
  { label: "Perencanaan Konten", desc: "Kendalikan media sosial Anda." },
  { label: "Design School", desc: "Pelajari cara mendesain dengan Rupa." },
  { label: "Lab Imajinasi", badge: "Baru", desc: "Buat gambar buatan AI dengan mudah." },
];

export const proTrial = "Coba Pro gratis";
