import { useEffect, useState } from 'react';

export default function App() {
  const [isBotLoaded, setIsBotLoaded] = useState(false);

  useEffect(() => {
    // Check if Botpress webchat is initialized and loaded
    const checkInterval = setInterval(() => {
      const bp = window.botpressWebChat || window.botpressWebchat || window.botpress;
      if (bp) {
        setIsBotLoaded(true);
        clearInterval(checkInterval);
      }
    }, 100);

    return () => clearInterval(checkInterval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-slate-50 flex flex-col items-center justify-center p-4 md:p-8 font-sans relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>

      {/* Background blobs for premium depth */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float"></div>
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Header/Logo Area */}
      <div className="mb-8 flex items-center gap-2 select-none animate-pulse-subtle">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#583CFA] to-[#7d65fc] flex items-center justify-center shadow-lg shadow-indigo-200">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <span className="text-xl font-bold tracking-tight text-slate-800 font-outfit">Aiforhomebuilder</span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-50 text-[#583CFA] font-medium border border-indigo-100">Care</span>
      </div>

      {/* Main Content Card */}
      <div className="w-full max-w-xl bg-white/80 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-[0_20px_50px_rgba(8,11,40,0.06)] border border-slate-100/80 text-center relative z-10">

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-outfit">
          How can we help <span className="text-gradient bg-clip-text">you today?</span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-600 text-base md:text-lg max-w-md mx-auto mb-8 leading-relaxed">
          Welcome to the Aiforhomebuilder Homeowner Portal. Chat with our intelligent assistant to manage warranty claims, log service requests, or troubleshoot household items.
        </p>

        {/* Feature quick links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-left">
          <div className="p-3.5 rounded-2xl bg-slate-50/50 border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/20 transition-all duration-300 group">
            <span className="text-xl mb-1.5 block">📄</span>
            <h3 className="font-semibold text-sm text-slate-800 mb-0.5 group-hover:text-[#583CFA]">File Claims</h3>
            <p className="text-xs text-slate-500 leading-snug">Quick submissions for warranty care.</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50/50 border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/20 transition-all duration-300 group">
            <span className="text-xl mb-1.5 block">🛠️</span>
            <h3 className="font-semibold text-sm text-slate-800 mb-0.5 group-hover:text-[#583CFA]">Maintenance</h3>
            <p className="text-xs text-slate-500 leading-snug">Guides and diagnostic checklists.</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50/50 border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/20 transition-all duration-300 group">
            <span className="text-xl mb-1.5 block">⚡</span>
            <h3 className="font-semibold text-sm text-slate-800 mb-0.5 group-hover:text-[#583CFA]">Service Hub</h3>
            <p className="text-xs text-slate-500 leading-snug">Direct contact for certified repairs.</p>
          </div>
        </div>
      </div>

      {/* Floating Corner Arrow pointing directly to the Botpress chat widget launcher button */}
      <div className="absolute bottom-28 right-8 md:right-24 flex flex-col items-end gap-2 pointer-events-none select-none max-w-[240px] z-20">
        <div className="bg-slate-900 text-white text-xs font-semibold px-4 py-2.5 rounded-2xl shadow-xl border border-slate-800 text-center animate-bounce">
          Chat assistant is right here! 👇
        </div>
        <div className="mr-8">
          <svg className="w-14 h-14 text-[#583CFA] animate-draw-attention" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12C32 12 56 24 60 60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 6" />
            <path d="M44 56L60 60L56 44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}



