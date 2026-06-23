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

    </div>
  );
}


