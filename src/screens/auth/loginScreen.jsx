import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import LiquidGlass from '../../components/LiquidGlass';

export default function LoginScreen() {
  const [showForm, setShowForm] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="login-screen fixed inset-0 w-full h-full z-[9999] bg-white overflow-hidden">
      <div className="spline-wrapper spline-full absolute inset-0">
        <Spline scene="https://prod.spline.design/8Ew6x4KBrv8H8LeZ/scene.splinecode" />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Header Container */}
        <header className="absolute top-0 left-0 p-6 md:p-8 pointer-events-auto">
          <div className="w-[190px] h-[64px] relative">
            <LiquidGlass 
              mode="prominent"
              style={{ position: 'absolute', top: '50%', left: '50%' }}
              cornerRadius={16} 
              padding="12px 16px"
            >
              <div className="flex flex-col items-start whitespace-nowrap">
                <span className="font-audiowide font-bold text-base md:text-lg tracking-[0.2em] text-[#0a0a0a]">
                  HITYAM AI
                </span>
                <p className="font-audiowide font-bold text-[9px] text-[#0a0a0a]/50 tracking-[0.25em] mt-1">
                  // NEURAL INTERFACE
                </p>
              </div>
            </LiquidGlass>
          </div>
        </header>

        {/* Auth Form Container */}
        <div 
          className={`absolute right-8 md:right-16 top-1/2 -translate-y-1/2 pointer-events-auto transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
            showForm ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-110 translate-x-12 pointer-events-none'
          }`}
        >
          <div className="w-[400px] h-[540px] relative">
            <LiquidGlass
              mode="prominent"
              style={{ position: 'absolute', top: '50%', left: '50%' }}
              cornerRadius={32}
              padding="40px 32px"
            >
              <div className="flex flex-col w-[340px] h-full text-[#0a0a0a] py-2">
                {/* Header Section */}
                <div className="mb-8 w-full text-left relative pl-1">
                  <div className="absolute left-0 top-1 bottom-1 w-1 bg-[#0a0a0a] rounded-full opacity-80"></div>
                  <h2 className="text-4xl font-black font-audiowide tracking-[0.15em] mb-2 text-[#0a0a0a] leading-tight uppercase ml-4">
                    {isLogin ? 'Sign In' : 'Sign Up'}
                  </h2>
                  <div className="flex items-center gap-2 ml-4 mt-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a]/80 animate-pulse"></div>
                    <p className="text-[9px] font-extrabold text-[#0a0a0a]/60 tracking-[0.25em] uppercase">
                      {isLogin ? 'Access your interface' : 'Create new interface'}
                    </p>
                  </div>
                </div>

                {/* Form Section */}
                <form className="flex flex-col gap-6 flex-1 w-full" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex flex-col gap-2.5 group">
                    <label className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-black text-[#0a0a0a]/70 ml-1 transition-colors group-focus-within:text-[#0a0a0a]">
                      <span className="w-3 h-[2px] bg-[#0a0a0a]/30 group-focus-within:bg-[#0a0a0a] transition-colors rounded-full"></span>
                      Email / Username
                    </label>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Enter identity" 
                        className="w-full bg-[#0a0a0a]/[0.03] border-2 border-[#0a0a0a]/10 rounded-2xl px-5 py-4 text-sm outline-none focus:border-[#0a0a0a]/40 focus:bg-[#0a0a0a]/[0.06] transition-all duration-300 placeholder:text-[#0a0a0a]/30 text-[#0a0a0a] font-bold tracking-wide shadow-sm focus:shadow-md"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5 group">
                    <label className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-black text-[#0a0a0a]/70 ml-1 transition-colors group-focus-within:text-[#0a0a0a]">
                      <span className="w-3 h-[2px] bg-[#0a0a0a]/30 group-focus-within:bg-[#0a0a0a] transition-colors rounded-full"></span>
                      Security Key
                    </label>
                    <div className="relative">
                      <input 
                        type="password" 
                        placeholder="••••••••" 
                        className="w-full bg-[#0a0a0a]/[0.03] border-2 border-[#0a0a0a]/10 rounded-2xl px-5 py-4 text-sm outline-none focus:border-[#0a0a0a]/40 focus:bg-[#0a0a0a]/[0.06] transition-all duration-300 placeholder:text-[#0a0a0a]/30 text-[#0a0a0a] font-black tracking-[0.3em] shadow-sm focus:shadow-md"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-[#0a0a0a] to-[#2a2a2a] text-white rounded-2xl py-4 text-xs font-black tracking-[0.25em] uppercase hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] active:translate-y-0"
                    >
                      {isLogin ? 'Initialize' : 'Register'}
                    </button>
                  </div>
                </form>

                {/* Footer Section */}
                <div className="mt-auto pt-6 text-center flex justify-center">
                  <button 
                    onClick={() => setIsLogin(!isLogin)}
                    className="group flex flex-col items-center gap-1.5"
                  >
                    <span className="text-[9px] font-extrabold text-[#0a0a0a]/50 tracking-[0.2em] uppercase transition-colors group-hover:text-[#0a0a0a]/80">
                      {isLogin ? 'Need an account?' : 'Already have access?'}
                    </span>
                    <span className="text-[11px] font-black text-[#0a0a0a] tracking-[0.25em] uppercase relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-[#0a0a0a] after:scale-x-0 after:origin-right group-hover:after:scale-x-100 group-hover:after:origin-left after:transition-transform after:duration-300">
                      {isLogin ? 'Sign Up' : 'Sign In'}
                    </span>
                  </button>
                </div>
              </div>
            </LiquidGlass>
          </div>
        </div>
      </div>
    </div>
  );
}
