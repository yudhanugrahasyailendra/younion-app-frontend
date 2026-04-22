import { BookOpen } from 'lucide-react';

export default function YearbookContent() {
  return (
    <div className="fade-in-up">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 md:mb-8 gap-4 bg-white dark:bg-slate-900 p-5 md:p-6 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] border-l-4 border-l-green-500 border border-slate-100 dark:border-slate-800/50 transition-colors">
        <div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-800 dark:text-slate-100 mb-1 md:mb-2 flex items-center gap-2 tracking-tight">
            <BookOpen className="text-green-500" size={28} /> Digital Yearbook
          </h2>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium">Jelajahi kenangan dan terhubung kembali dengan angkatanmu.</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto mt-2 sm:mt-0">
          <select className="flex-1 sm:flex-none bg-slate-50 dark:bg-slate-800 border text-xs md:text-sm border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 md:px-4 md:py-2.5 font-bold text-slate-700 dark:text-slate-200 outline-none hover:border-green-400 dark:hover:border-green-500 focus:ring-2 focus:ring-green-100 dark:focus:ring-green-900/50 transition-all cursor-pointer shadow-sm">
            <option>Class of 2026</option>
            <option>Class of 2025</option>
            <option>Class of 2024</option>
          </select>
          <select className="flex-1 sm:flex-none bg-slate-50 dark:bg-slate-800 border text-xs md:text-sm border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 md:px-4 md:py-2.5 font-bold text-slate-700 dark:text-slate-200 outline-none hover:border-green-400 dark:hover:border-green-500 focus:ring-2 focus:ring-green-100 dark:focus:ring-green-900/50 transition-all cursor-pointer shadow-sm">
            <option>IPA (Science)</option>
            <option>IPS (Social)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl md:rounded-3xl p-4 md:p-5 text-center shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-800/50 hover:shadow-xl dark:hover:shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:-translate-y-1 md:hover:-translate-y-2 hover:border-green-200 dark:hover:border-green-800/50 transition-all duration-300 group cursor-pointer flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-3 md:mb-4 relative">
                <img
                  src={`https://i.pravatar.cc/150?img=${i + 40}`}
                  className="w-full h-full object-cover rounded-full ring-4 ring-slate-50 dark:ring-slate-800 group-hover:ring-green-100 dark:group-hover:ring-green-900 transition-all duration-300 shadow-sm"
                  alt={`Student ${i}`}
                />
                <div className="absolute -bottom-2 right-1/4 translate-x-1/2 bg-green-500 dark:bg-green-600 text-white text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white dark:border-slate-900 md:opacity-0 group-hover:opacity-100 transition-opacity md:translate-y-2 group-hover:translate-y-0 shadow-sm">
                  {i % 2 === 0 ? 'IPA' : 'IPS'}
                </div>
              </div>
              <h3 className="font-bold text-slate-800 dark:text-slate-100 text-xs md:text-sm mb-1 truncate">Student Name {i + 1}</h3>
              <p className="text-[10px] md:text-[11px] text-slate-400 dark:text-slate-500 mb-3 px-1 md:px-2 line-clamp-2 italic font-medium">"It always seems impossible until it's done."</p>
            </div>

            <button className="w-full bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-green-500 dark:group-hover:bg-green-600 group-hover:text-white dark:group-hover:text-white font-bold py-1.5 md:py-2 rounded-lg md:rounded-xl text-[10px] md:text-xs transition-colors md:opacity-0 group-hover:opacity-100 mt-auto">
              Lihat Profil
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
