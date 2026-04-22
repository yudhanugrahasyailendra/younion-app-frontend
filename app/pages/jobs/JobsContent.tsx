import { Briefcase } from 'lucide-react';

export default function JobsContent() {
  return (
    <div className="fade-in-up text-center py-16 md:py-24 bg-white dark:bg-slate-900 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border-t-4 border-t-orange-500 border border-slate-100 dark:border-slate-800/50 transition-colors px-4 relative overflow-hidden group">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-1000" />
      <div className="w-20 h-20 md:w-24 md:h-24 bg-orange-50 dark:bg-orange-900/20 text-orange-500 dark:text-orange-400 rounded-3xl flex items-center justify-center mx-auto mb-5 md:mb-6 rotate-3 group-hover:rotate-0 transition-transform">
        <Briefcase size={36} className="md:w-[40px] md:h-[40px]" />
      </div>
      <h2 className="text-2xl md:text-3xl font-black text-slate-800 dark:text-slate-100 mb-3 tracking-tight">Papan Karir</h2>
      <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto font-medium">Temukan peluang kerja dan kolaborasi yang dibagikan secara eksklusif dalam jaringan alumni.</p>
      <button className="bg-orange-500 dark:bg-orange-600 text-white text-sm md:text-base font-bold px-8 py-3.5 rounded-xl hover:bg-orange-600 dark:hover:bg-orange-500 transition-colors shadow-lg shadow-orange-500/30 active:scale-95">
        Pasang Lowongan
      </button>
    </div>
  );
}
