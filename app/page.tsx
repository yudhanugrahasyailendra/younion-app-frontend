'use client';

import { useState, useEffect } from 'react';
import {
  Home, BookOpen, Briefcase, Users, User, Search,
  Bell, MessageSquare, Heart, Share2, MoreHorizontal,
  MapPin, GraduationCap, Calendar, Camera, Sun, Moon,
  Sparkles
} from 'lucide-react';
import HomeContent from './pages/home/HomeContent';
import YearbookContent from './pages/yearbook/YearbookContent';
import JobsContent from './pages/jobs/JobsContent';
import NetworkContent from './pages/network/NetworkContent';
import ProfileContent from './pages/profile/ProfileContent';

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
      <aside className="w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex-col justify-between hidden md:flex shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-20 transition-colors duration-300 overflow-y-auto custom-scrollbar flex-shrink-0">
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
              <h4 className="font-bold mb-1 flex items-center gap-1.5"><Sparkles size={16} className="text-orange-400" /> Reuni Akbar</h4>
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
            <button className="relative text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group">
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

            {/* ================= REUNI AKBAR MOBILE ================= */}
            {activeTab === 'home' && (
              <div className="md:hidden mb-6">
                <div className="bg-gradient-to-br from-blue-900 to-indigo-900 dark:from-slate-800 dark:to-slate-900 p-5 rounded-2xl border border-blue-800 dark:border-slate-800 relative overflow-hidden group shadow-[0_8px_24px_rgba(30,58,138,0.2)]">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/20 dark:bg-sky-400/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700" />
                  <div className="relative z-10 text-white">
                    <h4 className="font-bold mb-1 flex items-center gap-1.5"><Sparkles size={16} className="text-orange-400" /> Reuni Akbar</h4>
                    <p className="text-xs text-blue-200/80 dark:text-slate-400 mb-3 leading-relaxed">Persiapkan kelasmu, pastikan teman-temanmu hadir!</p>
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold py-2.5 rounded-xl transition-all shadow-md shadow-orange-500/30 active:scale-95">
                      Cek Detail
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ================= HOME ================= */}
            {activeTab === 'home' && (
              <HomeContent onNavigateToYearbook={() => setActiveTab('yearbook')} />
            )}

            {/* ================= YEARBOOK ================= */}
            {activeTab === 'yearbook' && (
              <YearbookContent />
            )}

            {/* Placeholder for Jobs */}
            {activeTab === 'jobs' && (
              <JobsContent />
            )}

            {/* Placeholder for Network */}
            {activeTab === 'network' && (
              <NetworkContent />
            )}

            {/* Placeholder for Profile */}
            {activeTab === 'profile' && (
              <ProfileContent />
            )}

          </div>
        </main>
      </div>
    </div>
  );
}
