import Link from 'next/link';
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar Sederhana */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-emerald-600">Mindguard.</h1>
        <button className="bg-emerald-600 text-white px-6 py-2 rounded-full font-medium hover:bg-emerald-700 transition">
          Login Siswa
        </button>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-20 pb-32 flex flex-col items-center text-center">
        <span className="bg-emerald-50 text-emerald-700 px-4 py-1 rounded-full text-sm font-semibold mb-6">
          Solusi Kesehatan Mental Sekolah
        </span>
        <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
          Bercerita Lebih Aman, <br /> 
          <span className="text-emerald-600">Hati Lebih Tenang.</span>
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl mb-10">
          Mindguard membantu siswa berkonsultasi dengan guru BK secara privat, cepat, dan terorganisir. Tidak perlu lagi merasa canggung untuk meminta bantuan.
        </p>
        
        <div className="flex gap-4">
          <Link href="/konseling">
          <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-emerald-200 hover:scale-105 transition">
            Mulai Konseling Sekarang
          </button>
          <button className="bg-white text-slate-600 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition">
            Pelajari Fitur
          </button>
          </Link>
        </div>

        {/* Preview Statis */}
        <div className="mt-20 w-full max-w-4xl border border-slate-100 rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-slate-800 p-2 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="bg-slate-50 p-12 text-slate-400 italic">
             [ Tampilan Dashboard Siswa Akan Muncul Di Sini ]
          </div>
        </div>
      </main>
    </div>
  );
}