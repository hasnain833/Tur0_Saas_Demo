import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const navRef = useRef(null);

  // Initialize SaaS Widget Script
  useEffect(() => {
    if (!document.getElementById('turo-widget-script')) {
      const script = document.createElement('script');
      script.id = 'turo-widget-script';
      script.src = 'https://main.dz0zmw5vumgnh.amplifyapp.com/widget.js';
      script.setAttribute('data-api-key', '65f58d9cdf7f5d09253348b046cfacdc');
      script.setAttribute('data-target-id', 'turo-inline-widget');
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Initialize GSAP & Navbar Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navRef.current?.classList.remove('py-6');
        navRef.current?.classList.add('py-4', 'bg-white/90', 'backdrop-blur-md', 'shadow-sm');
      } else {
        navRef.current?.classList.remove('py-4', 'bg-white/90', 'backdrop-blur-md', 'shadow-sm');
        navRef.current?.classList.add('py-6');
      }
    };
    window.addEventListener('scroll', handleScroll);

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      });
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 py-6" id="main-nav">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass rounded-2xl md:rounded-[2.5rem] px-6 md:px-10 h-20 md:h-24 flex items-center justify-between shadow-lg border-[#121214]/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#583CFA] rounded-xl flex items-center justify-center text-white shadow-xl group cursor-pointer overflow-hidden relative">
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <span className="text-xl md:text-2xl font-black font-outfit tracking-tighter text-[#121214] block leading-none">Elite Rides</span>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-10 text-sm font-bold text-gray-700">
              <a href="#fleet" className="hover:text-[#583CFA] transition-colors">Fleet</a>
              <a href="#experience" className="hover:text-[#583CFA] transition-colors">Experience</a>
              <a href="#locations" className="hover:text-[#583CFA] transition-colors">Locations</a>
              <a href="#contact" className="hover:text-[#583CFA] transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-4">
              <button data-turo-car-id="69c63a8a1ce7dd66af778545" className="btn-gradient text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm hover:shadow-2xl transition-all active:scale-95 shadow-md border border-[#472dd6]">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-[#583CFA]/10 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-[#583CFA]/5 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="space-y-10 reveal flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#583CFA]/10 text-[#583CFA] border border-[#583CFA]/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#583CFA]/50 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#583CFA]"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest leading-none mt-0.5">Live in 50+ Cities</span>
            </div>
            <h1 className="text-6xl md:text-[5.5rem] font-black font-outfit tracking-tighter text-[#121214] leading-[0.9] md:leading-[0.95]">
              The Journey <br />
              Is The <span className="text-[#583CFA] border-b-8 border-[#583CFA]/20">Destination.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
              Unleash the extraordinary. Access a curated fleet of the world's most desirable vehicles, booked directly through our seamless interface.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a href="#fleet" className="btn-gradient text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-[#583CFA]/30 transition-all flex items-center justify-center gap-3 group border border-[#472dd6]">
                Browse Fleet
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <button
                data-turo-car-id="69c63a8a1ce7dd66af778545"
                className="bg-white/50 backdrop-blur-md px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all border border-gray-200 text-[#121214]">
                Quick Booking
              </button>
            </div>
            <div className="pt-10 flex items-center justify-center gap-6">
              <div className="flex -space-x-4">
                <img src="https://i.pravatar.cc/100?u=1" className="w-12 h-12 rounded-full border-4 border-white object-cover" alt="User" />
                <img src="https://i.pravatar.cc/100?u=2" className="w-12 h-12 rounded-full border-4 border-white object-cover" alt="User" />
                <img src="https://i.pravatar.cc/100?u=3" className="w-12 h-12 rounded-full border-4 border-white object-cover" alt="User" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-[#583CFA]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-sm font-bold text-[#121214] mt-1">4.9/5 from 2,800+ riders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Widget Section */}
      <section id="booking" className="py-32 bg-[#f9f8ff] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-20 reveal">
            <h2 className="text-[#583CFA] text-sm font-black uppercase tracking-widest">Seamless Booking</h2>
            <h3 className="text-5xl md:text-7xl font-black font-outfit tracking-tighter text-black leading-[1.1]">
              Find Your <span className="text-gradient">Experience</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto my-4 text-lg">Use our unified digital platform to search availability across all locations and instantly reserve your next vehicle.</p>
          </div>
          <div className="reveal delay-200 shadow-2xl shadow-[#583CFA]/10">
            <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden widget-container relative transition-all duration-300">
              <div className="min-h-[600px] relative bg-white transition-all duration-300">
                {/* Native Script Widget Target container */}
                <div id="turo-inline-widget"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#121214] text-gray-400 py-24 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="space-y-8">
              <div className="flex items-center gap-3"><div className="w-10 h-10 bg-[#583CFA] rounded-xl flex items-center justify-center text-white"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div><span className="text-2xl font-black font-outfit tracking-tighter text-white">ELITE RIDES</span></div>
              <p className="text-sm font-medium leading-relaxed">Leading the evolution of modern mobility. We provide luxury experiences for travelers globally.</p>
            </div>
            <div className="space-y-8"><h4 className="text-white font-black font-outfit uppercase tracking-widest text-[10px]">For Drivers</h4><ul className="space-y-4 text-sm font-bold"><li><a href="#" className="hover:text-[#583CFA] transition-colors">The Fleet</a></li><li><a href="#" className="hover:text-[#583CFA] transition-colors">Safety Standard</a></li><li><a href="#" className="hover:text-[#583CFA] transition-colors">Delivery Hubs</a></li></ul></div>
            <div className="space-y-8"><h4 className="text-white font-black font-outfit uppercase tracking-widest text-[10px]">Support</h4><ul className="space-y-4 text-sm font-bold"><li><a href="#" className="hover:text-[#583CFA] transition-colors">FAQ</a></li><li><a href="#" className="hover:text-[#583CFA] transition-colors">Contact Us</a></li><li><a href="#" className="hover:text-[#583CFA] transition-colors">Roadside Assistance</a></li></ul></div>
            <div className="space-y-8"><h4 className="text-white font-black font-outfit uppercase tracking-widest text-[10px]">Office</h4><p className="text-sm font-medium leading-relaxed">125 Luxury Way, Suite 400<br />Beverly Hills, CA 90210<br />contact@eliterides.com</p></div>
          </div>
          <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500"><p>© 2026 Elite Rides Mobility Group. Powered by Turo SaaS.</p><div className="flex gap-10"><a href="#" className="hover:text-white transition-colors">Privacy</a><a href="#" className="hover:text-white transition-colors">Terms</a><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></div></div>
        </div>
      </footer>
    </>
  );
}
