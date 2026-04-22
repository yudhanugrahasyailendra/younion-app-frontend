'use client';

import {
  Camera, MapPin, Calendar, MoreHorizontal, Heart, MessageSquare, Share2, Sparkles, BookOpen
} from 'lucide-react';

function CreatePost() {
  return (
    <div className="bg-white dark:bg-slate-900 p-4 md:p-5 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-800/50 transition-colors">
      <div className="flex gap-3 md:gap-4">
        <img src="https://i.pravatar.cc/150?u=yudha" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shrink-0 border border-slate-100 dark:border-slate-700 shadow-inner" alt="Yudha" />
        <div className="flex-1">
          <textarea
            placeholder="Bagikan momen hangat dengan yang lain..."
            className="w-full bg-slate-50 dark:bg-slate-800 border border-transparent rounded-2xl px-4 py-3 md:px-5 md:py-4 focus:ring-2 focus:ring-sky-100 dark:focus:ring-sky-900/50 focus:bg-white dark:focus:bg-slate-800 outline-none resize-none text-slate-700 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all text-sm"
            rows={2}
          ></textarea>
          <div className="flex justify-between items-center mt-2 md:mt-3 px-1 md:px-2">
            <div className="flex gap-1 md:gap-2">
              <button className="p-2 text-sky-500 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/30 rounded-full transition-colors flex items-center gap-2 text-[13px] md:text-sm font-bold">
                <Camera size={18} /> <span className="hidden sm:inline">Foto</span>
              </button>
              <button className="p-2 text-orange-500 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/30 rounded-full transition-colors flex items-center gap-2 text-[13px] md:text-sm font-bold">
                <MapPin size={18} /> <span className="hidden sm:inline">Lokasi</span>
              </button>
            </div>
            <button className="bg-blue-900 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-500 text-white px-5 py-2 md:px-6 md:py-2.5 rounded-xl text-sm font-bold transition-transform active:scale-95 shadow-md shadow-blue-900/20">
              Posting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface FeedPostProps {
  authorName: string;
  authorAvatar: string;
  badge: string;
  timeAgo: string;
  classOf: string;
  content: React.ReactNode;
  imageUrl: string;
  imageAlt: string;
  likeCount: number;
  commentCount: number;
}

function FeedPost({
  authorName,
  authorAvatar,
  badge,
  timeAgo,
  classOf,
  content,
  imageUrl,
  imageAlt,
  likeCount,
  commentCount,
}: FeedPostProps) {
  return (
    <div className="bg-white dark:bg-slate-900 p-5 md:p-6 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-800/50 group transition-colors">
      {/* Post Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="relative cursor-pointer hover:scale-105 transition-transform">
            <img src={authorAvatar} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover ring-2 ring-sky-50 dark:ring-slate-800 shadow-sm" alt={authorName} />
            <div className="absolute -bottom-1 -right-1 bg-white dark:bg-slate-900 p-0.5 rounded-full">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full border border-white dark:border-slate-900" />
            </div>
          </div>
          <div>
            <h3 className="font-extrabold text-slate-800 dark:text-slate-100 text-sm md:text-base flex items-center gap-1.5 cursor-pointer hover:underline">
              {authorName}
              <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-[9px] md:text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">{badge}</span>
            </h3>
            <p className="text-[11px] md:text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-medium mt-0.5">
              <Calendar size={12} /> {timeAgo} • {classOf}
            </p>
          </div>
        </div>
        <button className="text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 p-2 rounded-full transition-colors">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Post Content */}
      <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed text-[13px] md:text-sm font-medium">
        {content}
      </p>

      {/* Post Image */}
      <div className="rounded-2xl overflow-hidden mb-5 border border-slate-100 dark:border-slate-800 shadow-sm">
        <img src={imageUrl} alt={imageAlt} className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-700" />
      </div>

      {/* Post Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800/50 text-slate-500 dark:text-slate-400 text-xs md:text-sm font-semibold">
        <div className="flex gap-1 md:gap-2 w-full justify-between sm:w-auto sm:justify-start">
          <button className="flex items-center justify-center flex-1 sm:flex-none gap-2 hover:text-rose-500 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/30 py-2 rounded-xl transition-all">
            <Heart size={18} className="text-rose-400 dark:text-rose-500 fill-rose-500/20 dark:fill-rose-500/30" /> <span>{likeCount}</span>
          </button>
          <button className="flex items-center justify-center flex-1 sm:flex-none gap-2 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/30 py-2 rounded-xl transition-all">
            <MessageSquare size={18} /> <span>{commentCount}</span>
          </button>
          <button className="flex items-center justify-center flex-1 sm:hidden gap-2 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 py-2 rounded-xl transition-all">
            <Share2 size={18} /> <span>Share</span>
          </button>
        </div>
        <button className="hidden sm:flex items-center gap-2 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 px-3 py-2 rounded-xl transition-all">
          <Share2 size={18} /> <span>Share</span>
        </button>
      </div>
    </div>
  );
}

function EventWidget() {
  return (
    <div className="bg-gradient-to-br from-orange-500 to-amber-500 dark:from-orange-700 dark:to-orange-900 p-5 md:p-6 rounded-3xl shadow-[0_4px_24px_rgba(249,115,22,0.25)] dark:shadow-none border border-transparent text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full blur-3xl -mr-16 -mt-16" />
      <h3 className="font-extrabold text-lg mb-4 flex items-center gap-2 tracking-tight">
        <Sparkles size={20} className="text-yellow-200" /> Prom Nite '26
      </h3>
      <div className="bg-white/15 dark:bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/30 dark:border-white/10">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-white dark:bg-slate-800 text-orange-600 dark:text-orange-400 font-extrabold px-3 py-1.5 rounded-xl text-center shadow-inner">
            <span className="block text-[9px] uppercase tracking-wider opacity-80">Okt</span>
            <span className="block text-xl">28</span>
          </div>
          <div>
            <p className="font-bold text-sm tracking-tight text-white">Grand Ballroom</p>
            <p className="text-xs text-orange-100 dark:text-orange-200/70 flex items-center gap-1 mt-0.5"><MapPin size={12} /> Hotel Mulia, Jkt</p>
          </div>
        </div>
        <button className="w-full mt-3 bg-white dark:bg-slate-800 text-orange-600 dark:text-orange-400 font-bold py-2.5 rounded-xl hover:bg-orange-50 dark:hover:bg-slate-700 transition-colors active:scale-95 text-sm shadow-md">
          Dapatkan Tiket
        </button>
      </div>
    </div>
  );
}

interface SpotlightWidgetProps {
  onViewAll: () => void;
}

function SpotlightWidget({ onViewAll }: SpotlightWidgetProps) {
  return (
    <div className="bg-white dark:bg-slate-900 p-5 md:p-6 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-800/50 relative overflow-hidden group transition-colors">
      <div className="absolute top-0 right-0 p-4 opacity-[0.03] dark:opacity-[0.05] group-hover:scale-110 group-hover:opacity-[0.08] dark:group-hover:opacity-10 transition-all duration-500 text-green-600 dark:text-green-400">
        <BookOpen size={100} />
      </div>
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-5">
          <h3 className="font-bold text-slate-800 dark:text-slate-100 text-[15px] md:text-lg flex items-center gap-2">
            Spotlights
          </h3>
          <button onClick={onViewAll} className="text-green-600 dark:text-green-400 text-xs md:text-sm font-bold hover:underline">Lihat Semua</button>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-3 gap-2 md:gap-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className={`group/avatar cursor-pointer ${i > 3 ? 'hidden md:block' : ''}`}>
              <div className="aspect-square rounded-2xl overflow-hidden mb-1 relative border border-slate-100 dark:border-slate-800 shadow-sm">
                <img
                  src={`https://i.pravatar.cc/150?img=${15 + i}`}
                  alt={`Alumni ${i}`}
                  className="w-full h-full object-cover group-hover/avatar:scale-110 group-hover/avatar:rotate-1 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent opacity-0 group-hover/avatar:opacity-100 transition-opacity flex items-end p-2 text-white text-[10px] font-bold">
                  Profil
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface HomeContentProps {
  onNavigateToYearbook: () => void;
}

export default function HomeContent({ onNavigateToYearbook }: HomeContentProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 fade-in-up">

      {/* Left Column / Feed */}
      <div className="lg:col-span-2 space-y-4 md:space-y-6">
        <CreatePost />

        <FeedPost
          authorName="Alex Pratama"
          authorAvatar="https://i.pravatar.cc/150?img=33"
          badge="Alumni"
          timeAgo="2 jam lalu"
          classOf="Class of '23"
          content={
            <>
              Siapa yang kangen kantin sekolah lama? 😭 Barusan nemu foto jadul waktu kita kelas 12 lagi bolos di kantin bu Evi. <span className="text-orange-500 dark:text-orange-400 font-bold">Good times! 🔥</span>
            </>
          }
          imageUrl="https://images.unsplash.com/photo-1577884879007-885e3cd58dd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          imageAlt="School Canteen"
          likeCount={128}
          commentCount={32}
        />
      </div>

      {/* Right Column / Widgets */}
      <div className="space-y-4 md:space-y-6">
        <EventWidget />
        <SpotlightWidget onViewAll={onNavigateToYearbook} />
      </div>

    </div>
  );
}
