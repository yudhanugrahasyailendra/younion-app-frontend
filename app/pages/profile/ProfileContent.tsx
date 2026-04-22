import { Camera, GraduationCap } from 'lucide-react';

export default function ProfileContent() {
  return (
    <div className="fade-in-up">
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-slate-100 dark:border-slate-800/50 overflow-hidden transition-colors">
        {/* Cover */}
        <div className="h-32 md:h-56 bg-gradient-to-r from-blue-900 via-sky-800 to-indigo-900 relative group/cover">
          <button className="absolute bottom-3 right-3 md:bottom-4 md:right-4 bg-black/20 hover:bg-black/40 backdrop-blur-md text-white text-[10px] md:text-xs font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-xl transition-colors md:opacity-0 group-hover/cover:opacity-100 flex items-center gap-1.5 md:gap-2 shadow-sm">
            <Camera size={14} /> Ubah Sampul
          </button>
        </div>
        {/* Info */}
        <div className="px-5 pb-6 md:px-10 md:pb-10">
          <div className="relative flex flex-col md:flex-row justify-between items-center md:items-end mb-4 md:mb-6 -mt-16 md:-mt-20">
            <div className="relative group/avatar">
              <img src="https://i.pravatar.cc/150?u=yudha" className="w-28 h-28 md:w-40 md:h-40 rounded-full border-4 md:border-[6px] border-white dark:border-slate-900 shadow-xl object-cover bg-white dark:bg-slate-900 transition-colors" alt="Profile" />
              <button className="absolute bottom-1 right-1 md:bottom-2 md:right-2 bg-blue-900 dark:bg-blue-700 border-2 md:border-4 border-white dark:border-slate-900 text-white p-1.5 md:p-2.5 text-xs rounded-full hover:bg-sky-500 dark:hover:bg-sky-500 transition-all md:opacity-0 group-hover/avatar:opacity-100 scale-90 group-hover/avatar:scale-100 shadow-md">
                <Camera size={16} className="md:w-[18px] md:h-[18px]" />
              </button>
            </div>
            <button className="mt-4 md:mt-0 w-full md:w-auto bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 font-bold px-6 py-2.5 md:py-3 rounded-xl transition-colors text-sm shadow-sm">
              Edit Profil
            </button>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-black text-blue-950 dark:text-slate-100 flex flex-col md:flex-row items-center gap-2 md:gap-3 justify-center md:justify-start tracking-tight">
              Yudha Nugraha
              <span className="bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/50 text-[10px] md:text-xs px-3 py-1.5 rounded-lg uppercase tracking-wider font-bold shadow-sm inline-flex items-center gap-1.5 transition-colors mt-1 md:mt-0">
                <GraduationCap size={14} /> Class of '26
              </span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base mt-2 md:mt-3 font-semibold">Science Major • Student Council President</p>
            <p className="text-slate-600 dark:text-slate-300 mt-4 md:mt-6 mx-auto md:mx-0 max-w-3xl leading-relaxed text-xs md:text-sm bg-slate-50 dark:bg-slate-800/50 p-4 md:p-5 rounded-2xl border border-slate-100 dark:border-slate-800/50 transition-colors text-left font-medium">
              Passionate about technology and web development. Currently learning React, Next.js, dan membangun aplikasi *"scalable"*. Sangat menantikan kelulusan dan melanjutkan studi Ilmu Komputer! 🚀 Mari terhubung jika tertarik di bidang Tech atau ingin berkolaborasi!
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 md:gap-4 mt-6 md:mt-8 pt-5 md:pt-8 border-t border-slate-100 dark:border-slate-800/50 transition-colors">
            <div className="text-center p-3 md:p-4 rounded-2xl hover:bg-sky-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors group/stat">
              <h4 className="text-xl md:text-3xl font-black text-slate-800 dark:text-slate-100 group-hover/stat:text-sky-600 transition-colors">124</h4>
              <p className="text-[10px] md:text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1 md:mt-2">Koneksi</p>
            </div>
            <div className="text-center p-3 md:p-4 rounded-2xl hover:bg-green-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors border-x border-slate-100 dark:border-slate-800/50 group/stat">
              <h4 className="text-xl md:text-3xl font-black text-slate-800 dark:text-slate-100 group-hover/stat:text-green-500 transition-colors">45</h4>
              <p className="text-[10px] md:text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1 md:mt-2">Foto</p>
            </div>
            <div className="text-center p-3 md:p-4 rounded-2xl hover:bg-orange-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors group/stat">
              <h4 className="text-xl md:text-3xl font-black text-slate-800 dark:text-slate-100 group-hover/stat:text-orange-500 transition-colors">12</h4>
              <p className="text-[10px] md:text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1 md:mt-2">Postingan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
