import heroImg from './assets/hero.png'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <a href="#home" className="text-xl font-semibold tracking-tight text-slate-900">
            KMIPN Menu
          </a>
          <nav>
            <ul className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-600">
              <li><a href="#home" className="rounded-full px-3 py-2 hover:bg-slate-100 hover:text-slate-900 transition">Home</a></li>
              <li><a href="#menu" className="rounded-full px-3 py-2 hover:bg-slate-100 hover:text-slate-900 transition">Menu</a></li>
              <li><a href="#about" className="rounded-full px-3 py-2 hover:bg-slate-100 hover:text-slate-900 transition">About</a></li>
              <li><a href="#contact" className="rounded-full px-3 py-2 hover:bg-slate-100 hover:text-slate-900 transition">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10">
        <section id="home" className="mb-10 rounded-3xl bg-gradient-to-r from-sky-500 to-indigo-600 p-8 text-white shadow-xl shadow-slate-200/50">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-sky-100">Selamat datang</p>
              <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Pilihan menu utama</h1>
              <p className="mt-4 max-w-xl text-slate-100/90">
                Temukan menu favorit dengan tampilan sederhana dan responsif menggunakan HTML semantik dan Tailwind CSS.
              </p>
            </div>
            <div className="flex justify-center">
              <img src={heroImg} alt="Hero" className="h-64 w-full max-w-md rounded-3xl object-cover shadow-2xl shadow-slate-900/20" />
            </div>
          </div>
        </section>

        <section id="menu" className="mb-10">
          <header className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900">Daftar Menu</h2>
            <p className="mt-2 text-slate-600">Pilih kategori makanan atau minuman yang tersedia.</p>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Sarapan', description: 'Nasi goreng, roti bakar, dan kopi hangat.' },
              { title: 'Makan Siang', description: 'Ayam panggang, sayur, dan sup segar.' },
              { title: 'Makan Malam', description: 'Steak, salad, dan minuman spesial.' },
            ].map((item) => (
              <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.description}</p>
                <button className="mt-5 inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">Lihat detail</button>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="mb-10 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Tentang</h2>
          <p className="mt-3 text-slate-600">
            Menu ini menggunakan elemen semantik seperti nav, main, section, dan article untuk struktur yang jelas.
          </p>
        </section>

        <section id="contact" className="rounded-3xl bg-slate-900 p-8 text-slate-100">
          <h2 className="text-2xl font-semibold text-white">Kontak</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Hubungi kami jika Anda memerlukan bantuan atau ingin menambahkan menu baru.
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
