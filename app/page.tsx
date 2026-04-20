'use client';

import { useState, useEffect } from 'react';
import {
  Home, BookOpen, Briefcase, Users, User, Search,
  Bell, MessageSquare, Heart, Share2, MoreHorizontal,
  MapPin, GraduationCap, Calendar, Camera, Sun, Moon,
  Sparkles
} from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('home');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'dark' || (!savedMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  const navItems = [
    { 
      id: 'home', label: 'Beranda', icon: Home, 
      colors: { bg: 'bg-sky-50 dark:bg-sky-900/30', text: 'text-sky-600 dark:text-sky-400', bar: 'bg-sky-500' }
    },
    { 
      id: 'yearbook', label: 'Buku Tahunan', icon: BookOpen, 
      colors: { bg: 'bg-green-50 dark:bg-green-900/20', text: 'text-green-600 dark:text-green-400', bar: 'bg-green-500' }
    },
    { 
      id: 'jobs', label: 'Karir', icon: Briefcase, 
      colors: { bg: 'bg-orange-50 dark:bg-orange-900/20', text: 'text-orange-600 dark:text-orange-400', bar: 'bg-orange-500' }
    },
    { 
      id: 'network', label: 'Jaringan Alumni', icon: Users, 
      colors: { bg: 'bg-blue-50 dark:bg-blue-900/30', text: 'text-blue-600 dark:text-blue-400', bar: 'bg-blue-500' }
    },
    { 
      id: 'profile', label: 'Profil', icon: User, 
      colors: { bg: 'bg-slate-100 dark:bg-slate-800/60', text: 'text-slate-800 dark:text-slate-100', bar: 'bg-slate-700 dark:bg-slate-300' }
    },
  ];

  return (
    <div className="flex bg-slate-50 dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-50 w-full h-screen overflow-hidden custom-scrollbar transition-colors duration-300">

      {/* DESKTOP SIDEBAR */}
      <aside className="w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex-col justify-between hidden md:flex shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-20 transition-colors duration-300">
        <div>
          {/* LOGO */}
          <div className="p-8 flex justify-center w-full">
            <img
              src="/images/logo_younion.png"
              alt="Younion Logo"
              className="w-40 h-auto object-contain drop-shadow-md dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* NAV */}
          <nav className="px-4 space-y-1.5">
            <p className="px-4 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Navigasi Utama</p>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full group flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 relative overflow-hidden ${isActive
                    ? `${item.colors.bg} ${item.colors.text} font-bold shadow-sm dark:shadow-none`
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-800 dark:hover:text-slate-100 font-medium'
                    }`}
                >
                  {isActive && (
                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${item.colors.bar} rounded-r-full shadow-[0_0_8px_currentColor] opacity-70`} />
                  )}
                  <Icon
                    size={20}
                    className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* SIDEBAR BOTTOM WIDGET */}
        <div className="p-6">
          <div className="bg-gradient-to-br from-blue-900 to-indigo-900 dark:from-slate-800 dark:to-slate-900 p-5 rounded-2xl border border-blue-800 dark:border-slate-800 relative overflow-hidden group shadow-[0_8px_24px_rgba(30,58,138,0.2)]">
            <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/20 dark:bg-sky-400/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700" />
            <div className="relative z-10 text-white">
              <h4 className="font-bold mb-1 flex items-center gap-1.5"><Sparkles size={16} className="text-orange-400"/> Reuni Akbar</h4>
              <p className="text-xs text-blue-200/80 dark:text-slate-400 mb-3 leading-relaxed">Persiapkan kelasmu, pastikan teman-temanmu hadir!</p>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold py-2.5 rounded-xl transition-all shadow-md shadow-orange-500/30 active:scale-95">
                Cek Detail
              </button>
            </div>
          </div>
          <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-600 text-center mt-6 uppercase tracking-wider">© Younion App 2026</p>
        </div>
      </aside>

      {/* MOBILE BOTTOM NAV */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 z-50 flex justify-around items-center p-2 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] transition-colors duration-300 shadow-[0_-4px_24px_rgba(0,0,0,0.05)] dark:shadow-none">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          const shortLabel = item.label.split(' ')[0];
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center w-16 p-2 rounded-xl transition-all ${isActive ? `${item.colors.text}` : 'text-slate-400 dark:text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
            >
              <Icon size={isActive ? 24 : 22} className={`transition-transform duration-300 ${isActive ? 'scale-110 mb-1' : ''}`} />
              <span className={`text-[10px] font-bold transition-all ${isActive ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                {shortLabel === 'Digital' ? 'Yearbook' : shortLabel === 'Buku' ? 'Tahunan' : shortLabel === 'Jaringan' ? 'Network' : shortLabel}
              </span>
            </button>
          );
        })}
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden bg-slate-50 dark:bg-slate-950 relative transition-colors duration-300">

        {/* TOPBAR */}
        <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-4 md:px-8 py-3 md:py-4 flex justify-between items-center sticky top-0 z-10 transition-colors duration-300">

          {/* MOBILE LOGO (Only shown on mobile) */}
          <div className="md:hidden flex items-center flex-shrink-0 mr-3">
            <img
              src="/images/logo_younion.png"
              alt="Younion Logo"
              className="w-10 h-auto object-contain drop-shadow-md dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
            />
          </div>

          {/* SEARCH */}
          <div className={`flex items-center bg-slate-100 dark:bg-slate-800 rounded-full px-4 py-2 md:py-2.5 transition-all duration-300 border border-transparent ${isSearchFocused ? 'w-full md:w-96 bg-white dark:bg-slate-900 border-sky-400 dark:border-sky-500 ring-4 ring-sky-100 dark:ring-sky-500/20 shadow-md' : 'flex-1 md:flex-none md:w-80 border-transparent dark:border-slate-700'
            }`}>
            <Search size={18} className={`transition-colors ${isSearchFocused ? 'text-sky-500' : 'text-slate-400 dark:text-slate-500'}`} />
            <input
              type="text"
              placeholder="Cari teman alumni, jurusan..."
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="bg-transparent w-full ml-2 md:ml-3 outline-none text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-700 dark:text-slate-100"
            />
          </div>

          <div className="flex items-center gap-2 md:gap-6 ml-3">
            <button
              onClick={toggleDarkMode}
              className="text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800 p-2 rounded-full transition-colors group"
            >
              {isDarkMode ? <Sun size={20} className="group-hover:animate-[spin_3s_linear_infinite]" /> : <Moon size={20} className="group-hover:animate-swing origin-top" />}
            </button>
            <button className="relative text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group hidden sm:block">
              <Bell size={20} className="group-hover:animate-swing origin-top" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-orange-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
            <div className="h-6 md:h-8 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>
            <button className="flex items-center gap-3 group">
              <div className="text-right hidden md:block">
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors tracking-tight">Yudha Nugraha</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Class of '26</p>
              </div>
              <img
                src="https://i.pravatar.cc/150?u=yudha"
                alt="Profile"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover ring-2 ring-white dark:ring-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm group-hover:ring-sky-200 dark:group-hover:ring-sky-900/50 transition-all"
              />
            </button>
          </div>
        </header>

        {/* CONTENT AREA */}
        <main className="flex-1 overflow-y-auto w-full p-4 md:p-8 scroll-smooth custom-scrollbar">
          <div className="max-w-6xl mx-auto pb-28 md:pb-20">

            {/* ================= HOME ================= */}
            {activeTab === 'home' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 fade-in-up">

                <div className="lg:col-span-2 space-y-4 md:space-y-6">
                  {/* Create Post */}
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

                  {/* Feed Post */}
                  <div className="bg-white dark:bg-slate-900 p-5 md:p-6 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-800/50 group transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className="relative cursor-pointer hover:scale-105 transition-transform">
                          <img src="https://i.pravatar.cc/150?img=33" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover ring-2 ring-sky-50 dark:ring-slate-800 shadow-sm" alt="Alex" />
                          <div className="absolute -bottom-1 -right-1 bg-white dark:bg-slate-900 p-0.5 rounded-full">
                            <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full border border-white dark:border-slate-900" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-extrabold text-slate-800 dark:text-slate-100 text-sm md:text-base flex items-center gap-1.5 cursor-pointer hover:underline">
                            Alex Pratama
                            <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-[9px] md:text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Alumni</span>
                          </h3>
                          <p className="text-[11px] md:text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-medium mt-0.5">
                            <Calendar size={12} /> 2 jam lalu • Class of '23
                          </p>
                        </div>
                      </div>
                      <button className="text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 p-2 rounded-full transition-colors">
                        <MoreHorizontal size={20} />
                      </button>
                    </div>

                    <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed text-[13px] md:text-sm font-medium">
                      Siapa yang kangen kantin sekolah lama? 😭 Barusan nemu foto jadul waktu kita kelas 12 lagi bolos di kantin bu Evi. <span className="text-orange-500 dark:text-orange-400 font-bold">Good times! 🔥</span>
                    </p>

                    <div className="rounded-2xl overflow-hidden mb-5 border border-slate-100 dark:border-slate-800 shadow-sm">
                      <img src="https://images.unsplash.com/photo-1577884879007-885e3cd58dd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="School Canteen" className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-700" />
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800/50 text-slate-500 dark:text-slate-400 text-xs md:text-sm font-semibold">
                      <div className="flex gap-1 md:gap-2 w-full justify-between sm:w-auto sm:justify-start">
                        <button className="flex items-center justify-center flex-1 sm:flex-none gap-2 hover:text-rose-500 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/30 py-2 rounded-xl transition-all">
                          <Heart size={18} className="text-rose-400 dark:text-rose-500 fill-rose-500/20 dark:fill-rose-500/30" /> <span>128</span>
                        </button>
                        <button className="flex items-center justify-center flex-1 sm:flex-none gap-2 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/30 py-2 rounded-xl transition-all">
                          <MessageSquare size={18} /> <span>32</span>
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
                </div>

                {/* Right Column / Widgets */}
                <div className="space-y-4 md:space-y-6">
                  {/* Upcoming Events Event */}
                  <div className="bg-gradient-to-br from-orange-500 to-amber-500 dark:from-orange-700 dark:to-orange-900 p-5 md:p-6 rounded-3xl shadow-[0_4px_24px_rgba(249,115,22,0.25)] dark:shadow-none border border-transparent text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full blur-3xl -mr-16 -mt-16" />
                    <h3 className="font-extrabold text-lg mb-4 flex items-center gap-2 tracking-tight">
                      <Sparkles size={20} className="text-yellow-200"/> Prom Nite '26
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

                  {/* Mini Yearbook Widget */}
                  <div className="bg-white dark:bg-slate-900 p-5 md:p-6 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-800/50 relative overflow-hidden group transition-colors">
                    <div className="absolute top-0 right-0 p-4 opacity-[0.03] dark:opacity-[0.05] group-hover:scale-110 group-hover:opacity-[0.08] dark:group-hover:opacity-10 transition-all duration-500 text-green-600 dark:text-green-400">
                      <BookOpen size={100} />
                    </div>
                    <div className="relative z-10">
                      <div className="flex justify-between items-center mb-5">
                        <h3 className="font-bold text-slate-800 dark:text-slate-100 text-[15px] md:text-lg flex items-center gap-2">
                          Spotlights
                        </h3>
                        <button onClick={() => setActiveTab('yearbook')} className="text-green-600 dark:text-green-400 text-xs md:text-sm font-bold hover:underline">Lihat Semua</button>
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
                </div>

              </div>
            )}

            {/* ================= YEARBOOK ================= */}
            {activeTab === 'yearbook' && (
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
            )}

            {/* Placeholder for Jobs */}
            {activeTab === 'jobs' && (
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
            )}

            {/* Placeholder for Network */}
            {activeTab === 'network' && (
              <div className="fade-in-up text-center py-16 md:py-24 bg-white dark:bg-slate-900 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border-t-4 border-t-sky-500 border border-slate-100 dark:border-slate-800/50 transition-colors px-4 relative overflow-hidden group">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-500/5 dark:bg-sky-500/10 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-1000" />
                <div className="w-20 h-20 md:w-24 md:h-24 bg-sky-50 dark:bg-sky-900/20 text-sky-500 dark:text-sky-400 rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6 group-hover:scale-110 transition-transform">
                  <Users size={36} className="md:w-[40px] md:h-[40px]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-800 dark:text-slate-100 mb-3 tracking-tight">Direktori Alumni</h2>
                <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto font-medium">Kembangkan jaringan profesionalmu dengan terhubung bersama senior dan angkatan sejawat.</p>
                <button className="bg-sky-500 dark:bg-sky-600 text-white text-sm md:text-base font-bold px-8 py-3.5 rounded-xl hover:bg-sky-600 dark:hover:bg-sky-500 transition-colors shadow-lg shadow-sky-500/30 active:scale-95">
                  Cari Mentor
                </button>
              </div>
            )}

            {/* Placeholder for Profile */}
            {activeTab === 'profile' && (
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
            )}

          </div>
        </main>
      </div>
    </div>
  );
}
