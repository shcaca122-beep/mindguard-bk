export default function FormKonseling() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-emerald-600 p-8 text-white">
          <h2 className="text-2xl font-bold">Form Konseling Mindguard</h2>
          <p className="text-emerald-100 mt-2">Ceritakan apa yang kamu rasakan, kami siap mendengarkan.</p>
        </div>
        
        <form className="p-8 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Subjek Masalah</label>
            <input 
              type="text" 
              placeholder="Contoh: Susah belajar, Masalah pertemanan"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Ceritakan Detailnya</label>
            <textarea 
              rows={4}
              placeholder="Tuliskan keluh kesahmu di sini..."
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Pilih Tanggal Bertemu</label>
            <input 
              type="date" 
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
            />
          </div>

          <button 
            type="button"
            className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl hover:bg-emerald-700 transition shadow-lg shadow-emerald-100"
          >
            Kirim Permohonan Konseling
          </button>
          
          <p className="text-center text-xs text-slate-400">
            Identitasmu akan dijaga kerahasiaannya oleh Guru BK.
          </p>
        </form>
      </div>
    </div>
  );
}