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
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-md rounded-3xl shadow-[0_20px_50px_rgba(8,11,40,0.08)] border border-slate-100/80 text-center relative z-10 overflow-hidden">

        {/* Embedded fullscreen widget */}
        <div className="w-full" style={{ height: '600px' }}>
          <iframe
            src="https://ai4home-portal.vercel.app/widget/cmpuvkvgs0000wkj1846j5mqo?mode=fullscreen"
            style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            title="AI Chat Assistant"
            allow="microphone"
          />
        </div>
      </div>


    </div>
  );
}



