'use client';

import { useState, useEffect } from 'react';
import {
  Home, BookOpen, Briefcase, Users, User, Search,
  Bell, MessageSquare, Heart, Share2, MoreHorizontal,
  MapPin, GraduationCap, Calendar, Camera, Sun, Moon
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
    { id: 'beranda', label: 'Beranda', icon: Home },
    { id: 'bukutahunan', label: 'Buku Tahunan', icon: BookOpen },
    { id: 'karir', label: 'Karir', icon: Briefcase },
    { id: 'jaringanalumni', label: 'Jaringan Alumni', icon: Users },
    { id: 'profil', label: 'Profil', icon: User },
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
              className="w-40 h-auto object-contain drop-shadow-md dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all hover:scale-105"
            />
          </div>

          {/* NAV */}
          <nav className="px-4 space-y-1">
            <p className="px-4 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">Menu</p>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full group flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 relative overflow-hidden ${isActive
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold'
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-800 dark:hover:text-slate-100'
                    }`}
                >
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 dark:bg-blue-400 rounded-r-full" />
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
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-blue-900/30 p-5 rounded-2xl border border-blue-100 dark:border-blue-800/50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700" />
            <div className="relative z-10">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-1">Class of '26</h4>
              <p className="text-sm text-blue-700/80 dark:text-blue-200/80 mb-3">Reunion is coming up!</p>
              <button className="w-full bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white text-sm font-medium py-2 rounded-xl transition-colors shadow-sm shadow-blue-200 dark:shadow-blue-900">
                RSVP Now
              </button>
            </div>
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-500 text-center mt-6">© Younion App 2026</p>
        </div>
      </aside>

      {/* MOBILE BOTTOM NAV */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 z-50 flex justify-around items-center p-2 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] transition-colors duration-300 shadow-[0_-4px_24px_rgba(0,0,0,0.05)] dark:shadow-none">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          // Display short label for mobile
          const shortLabel = item.label.split(' ')[0];
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center w-16 p-2 rounded-xl transition-all ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
            >
              <Icon size={isActive ? 24 : 22} className={`transition-transform duration-300 ${isActive ? 'scale-110 mb-1' : ''}`} />
              <span className={`text-[10px] font-semibold transition-all ${isActive ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                {shortLabel === 'Digital' ? 'Yearbook' : shortLabel === 'Career' ? 'Jobs' : shortLabel === 'Alumni' ? 'Network' : shortLabel === 'My' ? 'Profile' : shortLabel}
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
          <div className={`flex items-center bg-slate-100 dark:bg-slate-800 rounded-full px-4 py-2 md:py-2.5 transition-all duration-300 border border-transparent ${isSearchFocused ? 'w-full md:w-96 bg-white dark:bg-slate-900 border-blue-300 dark:border-blue-500 ring-4 ring-blue-50 dark:ring-blue-500/20' : 'flex-1 md:flex-none md:w-72 border-transparent dark:border-slate-700'
            }`}>
            <Search size={18} className={`${isSearchFocused ? 'text-blue-500 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'}`} />
            <input
              type="text"
              placeholder="Search alumni..."
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="bg-transparent w-full ml-2 md:ml-3 outline-none text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-700 dark:text-slate-100"
            />
          </div>

          <div className="flex items-center gap-2 md:gap-6 ml-3">
            <button
              onClick={toggleDarkMode}
              className="text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 p-2 rounded-full transition-colors group"
            >
              {isDarkMode ? <Sun size={20} className="group-hover:animate-[spin_3s_linear_infinite]" /> : <Moon size={20} className="group-hover:animate-swing origin-top" />}
            </button>
            <button className="relative text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group hidden sm:block">
              <Bell size={20} className="group-hover:animate-swing origin-top" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
            <div className="h-6 md:h-8 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>
            <button className="flex items-center gap-3 group">
              <div className="text-right hidden md:block">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Yudha Nugraha</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Class of '26</p>
              </div>
              <img
                src="https://i.pravatar.cc/150?u=yudha"
                alt="Profile"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover ring-2 ring-white dark:ring-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm group-hover:ring-blue-100 dark:group-hover:ring-blue-900/50 transition-all"
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
                      <img src="https://i.pravatar.cc/150?u=yudha" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shrink-0 border border-slate-100 dark:border-slate-700" alt="Yudha" />
                      <div className="flex-1">
                        <textarea
                          placeholder="Share a memory with your alumni..."
                          className="w-full bg-slate-50 dark:bg-slate-800 border border-transparent rounded-2xl px-4 py-3 md:px-5 md:py-4 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/50 focus:bg-white dark:focus:bg-slate-800 outline-none resize-none text-slate-700 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all text-sm"
                          rows={2}
                        ></textarea>
                        <div className="flex justify-between items-center mt-2 md:mt-3 px-1 md:px-2">
                          <div className="flex gap-1 md:gap-2">
                            <button className="p-2 text-blue-500 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full transition-colors flex items-center gap-2 text-[13px] md:text-sm font-semibold">
                              <Camera size={18} /> <span className="hidden sm:inline">Photo</span>
                            </button>
                            <button className="p-2 text-rose-500 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-full transition-colors flex items-center gap-2 text-[13px] md:text-sm font-semibold">
                              <MapPin size={18} /> <span className="hidden sm:inline">Location</span>
                            </button>
                          </div>
                          <button className="bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white px-5 py-2 md:px-6 md:py-2.5 rounded-xl text-sm font-semibold transition-transform active:scale-95 shadow-sm">
                            Post
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
                          <img src="https://i.pravatar.cc/150?img=33" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover ring-2 ring-blue-50 dark:ring-slate-800" alt="Alex" />
                          <div className="absolute -bottom-1 -right-1 bg-white dark:bg-slate-900 p-0.5 rounded-full">
                            <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full border border-white dark:border-slate-900"></div>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm md:text-base flex items-center gap-1.5 cursor-pointer hover:underline">
                            Alex Pratama
                            <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 text-[9px] md:text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Alumni</span>
                          </h3>
                          <p className="text-[11px] md:text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                            <Calendar size={12} /> 2 hrs ago • Class of '23
                          </p>
                        </div>
                      </div>
                      <button className="text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 p-2 rounded-full transition-colors">
                        <MoreHorizontal size={20} />
                      </button>
                    </div>

                    <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed text-[13px] md:text-sm">
                      Siapa yang kangen kantin sekolah lama? 😭 Barusan nemu foto jadul waktu kita kelas 12 lagi bolos di kantin bu Evi. Good times! 🔥
                    </p>

                    <div className="rounded-2xl overflow-hidden mb-5 border border-slate-100 dark:border-slate-800">
                      <img src="https://images.unsplash.com/photo-1577884879007-885e3cd58dd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="School Canteen" className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-700" />
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800/50 text-slate-500 dark:text-slate-400 text-xs md:text-sm font-medium">
                      <div className="flex gap-1 md:gap-2 w-full justify-between sm:w-auto sm:justify-start">
                        <button className="flex items-center justify-center flex-1 sm:flex-none gap-2 hover:text-rose-500 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/30 py-2 rounded-xl transition-all">
                          <Heart size={18} className="text-rose-400 dark:text-rose-500 fill-rose-400/20 dark:fill-rose-500/20" /> <span>128</span>
                        </button>
                        <button className="flex items-center justify-center flex-1 sm:flex-none gap-2 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 py-2 rounded-xl transition-all">
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
                  {/* Upcoming Events Event - Moved up on mobile */}
                  <div className="bg-gradient-to-br from-indigo-600 to-blue-700 dark:from-indigo-900 dark:to-blue-900 p-5 md:p-6 rounded-3xl shadow-lg border border-transparent text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16" />
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      ✨ Prom Nite '26
                    </h3>
                    <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/20 dark:border-white/10">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-white dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 font-bold px-3 py-1.5 rounded-lg text-center leading-tight">
                          <span className="block text-[10px] uppercase">Oct</span>
                          <span className="block text-xl">28</span>
                        </div>
                        <div>
                          <p className="font-semibold text-sm">Grand Ballroom</p>
                          <p className="text-xs text-indigo-100 dark:text-indigo-200/70 flex items-center gap-1 mt-0.5"><MapPin size={12} /> Hotel Mulia, Jkt</p>
                        </div>
                      </div>
                      <button className="w-full mt-3 bg-white dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 font-bold py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors active:scale-95 text-sm shadow-md">
                        Get Tickets
                      </button>
                    </div>
                  </div>

                  {/* Mini Yearbook Widget */}
                  <div className="bg-white dark:bg-slate-900 p-5 md:p-6 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-800/50 relative overflow-hidden group transition-colors">
                    <div className="absolute top-0 right-0 p-4 opacity-5 dark:opacity-10 group-hover:scale-110 group-hover:opacity-10 dark:group-hover:opacity-20 transition-all duration-500 text-slate-800 dark:text-slate-300">
                      <BookOpen size={100} />
                    </div>
                    <div className="relative z-10">
                      <div className="flex justify-between items-center mb-5">
                        <h3 className="font-bold text-slate-800 dark:text-slate-100 text-[15px] md:text-lg">Spotlights</h3>
                        <button onClick={() => setActiveTab('yearbook')} className="text-blue-600 dark:text-blue-400 text-xs md:text-sm font-semibold hover:underline">View All</button>
                      </div>
                      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-3 gap-2 md:gap-3">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                          <div key={i} className={`group/avatar cursor-pointer ${i > 3 ? 'hidden md:block' : ''}`}>
                            <div className="aspect-square rounded-2xl overflow-hidden mb-1 relative border border-slate-100 dark:border-slate-800">
                              <img
                                src={`https://i.pravatar.cc/150?img=${10 + i}`}
                                alt={`Alumni ${i}`}
                                className="w-full h-full object-cover group-hover/avatar:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/avatar:opacity-100 transition-opacity flex items-end p-2 text-white text-[10px] font-bold">
                                Profile
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
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 md:mb-8 gap-4 bg-white dark:bg-slate-900 p-5 md:p-6 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-slate-100 dark:border-slate-800/50 transition-colors">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-800 dark:text-slate-100 mb-1 md:mb-2 flex items-center gap-2">
                      <BookOpen className="text-blue-600 dark:text-blue-500" size={24} /> Digital Yearbook
                    </h2>
                    <p className="text-sm md:text-base text-slate-500 dark:text-slate-400">Explore memories and connect with your classmates.</p>
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                    <select className="flex-1 sm:flex-none bg-slate-50 dark:bg-slate-800 border text-xs md:text-sm border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 md:px-4 md:py-2.5 font-medium text-slate-700 dark:text-slate-200 outline-none hover:border-blue-400 dark:hover:border-blue-500 transition-all cursor-pointer">
                      <option>Class of 2026</option>
                      <option>Class of 2025</option>
                      <option>Class of 2024</option>
                    </select>
                    <select className="flex-1 sm:flex-none bg-slate-50 dark:bg-slate-800 border text-xs md:text-sm border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 md:px-4 md:py-2.5 font-medium text-slate-700 dark:text-slate-200 outline-none hover:border-blue-400 dark:hover:border-blue-500 transition-all cursor-pointer">
                      <option>Science</option>
                      <option>Social</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl md:rounded-3xl p-4 md:p-5 text-center shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-800/50 hover:shadow-xl dark:hover:shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300 group cursor-pointer flex flex-col justify-between">
                      <div>
                        <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-3 md:mb-4 relative">
                          <img
                            src={`https://i.pravatar.cc/150?img=${i + 40}`}
                            className="w-full h-full object-cover rounded-full ring-4 ring-slate-50 dark:ring-slate-800 group-hover:ring-blue-100 dark:group-hover:ring-blue-900 transition-all duration-300"
                            alt={`Student ${i}`}
                          />
                          <div className="absolute -bottom-2 right-1/4 translate-x-1/2 bg-blue-500 dark:bg-blue-600 text-white text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white dark:border-slate-900 md:opacity-0 group-hover:opacity-100 transition-opacity md:translate-y-2 group-hover:translate-y-0">
                            {i % 2 === 0 ? 'Sci' : 'Soc'}
                          </div>
                        </div>
                        <h3 className="font-bold text-slate-800 dark:text-slate-100 text-xs md:text-sm mb-1 truncate">Student Name {i + 1}</h3>
                        <p className="text-[10px] md:text-[11px] text-slate-400 dark:text-slate-500 mb-3 px-1 md:px-2 line-clamp-2 italic">"It always seems impossible until it's done."</p>
                      </div>

                      <button className="w-full bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white font-semibold py-1.5 md:py-2 rounded-lg md:rounded-xl text-[10px] md:text-xs transition-colors md:opacity-0 group-hover:opacity-100 mt-auto">
                        View Profile
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Placeholder for Jobs */}
            {activeTab === 'jobs' && (
              <div className="fade-in-up text-center py-16 md:py-20 bg-white dark:bg-slate-900 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-800/50 transition-colors px-4">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-50 dark:bg-blue-900/20 text-blue-500 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6">
                  <Briefcase size={36} className="md:w-[40px] md:h-[40px]" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">Career Board</h2>
                <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mb-6 max-w-md mx-auto">Discover opportunities shared exclusively within our alumni network.</p>
                <button className="bg-blue-600 dark:bg-blue-500 text-white text-sm md:text-base font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-lg shadow-blue-200 dark:shadow-blue-900 active:scale-95">
                  Post a Job Listing
                </button>
              </div>
            )}

            {/* Placeholder for Network */}
            {activeTab === 'network' && (
              <div className="fade-in-up text-center py-16 md:py-20 bg-white dark:bg-slate-900 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-800/50 transition-colors px-4">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-500 dark:text-indigo-400 rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6">
                  <Users size={36} className="md:w-[40px] md:h-[40px]" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">Alumni Directory</h2>
                <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mb-6 max-w-md mx-auto">Expand your professional network by connecting with seniors and peers.</p>
                <button className="bg-indigo-600 dark:bg-indigo-500 text-white text-sm md:text-base font-semibold px-6 py-3 rounded-xl hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-200 dark:shadow-indigo-900 active:scale-95">
                  Find Mentors
                </button>
              </div>
            )}

            {/* Placeholder for Profile */}
            {activeTab === 'profile' && (
              <div className="fade-in-up">
                <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-800/50 overflow-hidden transition-colors">
                  {/* Cover */}
                  <div className="h-32 md:h-48 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 dark:from-blue-600 dark:via-indigo-700 dark:to-purple-700 relative group/cover">
                    <button className="absolute bottom-3 right-3 md:bottom-4 md:right-4 bg-black/20 hover:bg-black/40 backdrop-blur-md text-white text-[10px] md:text-xs font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-xl transition-colors md:opacity-0 group-hover/cover:opacity-100 flex items-center gap-1.5 md:gap-2">
                      <Camera size={14} /> Edit Cover
                    </button>
                  </div>
                  {/* Info */}
                  <div className="px-5 pb-6 md:px-8 md:pb-8">
                    <div className="relative flex flex-col md:flex-row justify-between items-center md:items-end mb-4 md:mb-6 -mt-16 md:-mt-16">
                      <div className="relative group/avatar">
                        <img src="https://i.pravatar.cc/150?u=yudha" className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white dark:border-slate-900 shadow-xl object-cover bg-white dark:bg-slate-900 transition-colors" alt="Profile" />
                        <button className="absolute bottom-1 right-1 md:bottom-0 md:right-0 bg-slate-900 dark:bg-slate-700 border-2 border-white dark:border-slate-900 text-white p-1.5 md:p-2 text-xs rounded-full hover:bg-blue-600 dark:hover:bg-blue-500 transition-all md:opacity-0 group-hover/avatar:opacity-100 scale-90 group-hover/avatar:scale-100 shadow-md">
                          <Camera size={14} />
                        </button>
                      </div>
                      <button className="mt-4 md:mt-0 w-full md:w-auto bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm">
                        Edit Profile
                      </button>
                    </div>

                    <div className="text-center md:text-left">
                      <h2 className="text-2xl md:text-3xl font-black text-slate-800 dark:text-slate-100 flex flex-col md:flex-row items-center gap-2 md:gap-3 justify-center md:justify-start">
                        Yudha Nugraha
                        <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/50 text-[10px] md:text-xs px-2.5 py-1 rounded-lg uppercase tracking-wider font-bold shadow-sm inline-flex items-center gap-1 transition-colors mt-1 md:mt-0">
                          <GraduationCap size={14} /> Class of '26
                        </span>
                      </h2>
                      <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base mt-2 md:mt-2 font-medium">Science Major • Student Council President</p>
                      <p className="text-slate-600 dark:text-slate-300 mt-4 md:mt-5 mx-auto md:mx-0 max-w-3xl leading-relaxed text-xs md:text-sm bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/50 transition-colors text-left">
                        Passionate about technology and web development. Currently learning React, Next.js, and how to build scalable applications. Looking forward to graduating and studying Computer Science! 🚀 Let's connect if you're interested in tech or looking to collaborate on projects.
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 md:gap-4 mt-6 md:mt-8 pt-5 md:pt-6 border-t border-slate-100 dark:border-slate-800/50 transition-colors">
                      <div className="text-center p-3 md:p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors">
                        <h4 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100">124</h4>
                        <p className="text-[10px] md:text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-1">Connections</p>
                      </div>
                      <div className="text-center p-3 md:p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors border-x border-slate-100 dark:border-slate-800/50">
                        <h4 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100">45</h4>
                        <p className="text-[10px] md:text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-1">Photos</p>
                      </div>
                      <div className="text-center p-3 md:p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors">
                        <h4 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100">12</h4>
                        <p className="text-[10px] md:text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-1">Posts</p>
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
