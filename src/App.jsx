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
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-0 md:p-6 font-sans">
      <div className="w-full max-w-5xl h-screen md:h-[85vh] bg-white md:rounded-2xl md:border md:border-slate-200 md:shadow-xl overflow-hidden relative flex flex-col">
        {!isBotLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-20 gap-4">
            <div className="w-10 h-10 border-4 border-slate-200 border-t-[#0F3B3D] rounded-full animate-spin"></div>
            <p className="text-sm font-medium text-slate-500 animate-pulse">Loading Bitzsol Care Bot.......</p>
          </div>
        )}

        {/* Target element for Botpress */}
        <div
          id="bp-embedded-webchat"
          className="w-full h-full transition-all duration-300"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
}


