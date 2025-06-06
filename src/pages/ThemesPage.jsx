import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderGreen from '../components/HeaderGreen';
import {
  Zap,
  Target,
  Lightbulb,
  Globe,
  CheckCircle,
  Rocket
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ThemesPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, delay: 100 });
  }, []);

  const brandingBoards = [
    { title: "Maryan Herbal", image: "/images/board-1.png", id: "board1" },
    { title: "Keyla", image: "/images/board-2.png", id: "board2" },
    { title: "Surf Mania", image: "/images/board-3.png", id: "board3" },
    { title: "Tropicana Treasure", image: "/images/board-4.png", id: "board4" },
    { title: "Miyagi Sushi", image: "/images/board-5.png", id: "board5" },
    { title: "Ethereal Glow", image: "/images/board-6.png", id: "board6" }
  ];

  const whyBrandingPoints = [
    { text: "Visually differentiate in a crowded digital landscape.", aosDelay: "100" },
    { text: "Build emotional connections and lasting recognition through consistency.", aosDelay: "200" },
    { text: "Accelerate trust and shorten sales cycles in both B2B & B2C.", aosDelay: "300" },
    { text: "Attract investment with a confident, clearly defined brand vision.", aosDelay: "400" }
  ];

  const aiAdvantages = [
    {
      title: "Instant Generation",
      desc: "Enter your idea and let AI create logos, palettes, and entire brand boards in mere seconds.",
      icon: <Zap className="w-7 h-7 text-amber-400" />,
      aosDelay: "100"
    },
    {
      title: "Brand Consistency",
      desc: "No more mismatched styles. Get cohesive visual systems designed for all your platforms.",
      icon: <Target className="w-7 h-7 text-amber-400" />,
      aosDelay: "200"
    },
    {
      title: "Startup-Ready",
      desc: "Perfect for MVP launches, compelling pitch decks, and crucial investor meetings.",
      icon: <Lightbulb className="w-7 h-7 text-amber-400" />,
      aosDelay: "300"
    },
    {
      title: "Scales With You",
      desc: "From local businesses to global enterprises, update or pivot your brand's look instantly.",
      icon: <Globe className="w-7 h-7 text-amber-400" />,
      aosDelay: "400"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0a0c10] text-[#E0E0E0] font-sans overflow-x-hidden relative">
      {/* Enhanced Background Glows - fixed position to stay in background */}
      <div className="hidden sm:block fixed -top-1/3 -left-1/4 w-[65vw] h-[65vw] bg-gradient-radial from-amber-600/15 via-amber-600/5 to-transparent blur-3xl rounded-full animate-pulse-slow pointer-events-none z-0 opacity-70" />
      <div className="hidden sm:block fixed -bottom-1/3 -right-1/4 w-[65vw] h-[65vw] bg-gradient-radial from-sky-600/15 via-sky-600/5 to-transparent blur-3xl rounded-full animate-pulse-slow animation-delay-2000 pointer-events-none z-0 opacity-70" />

      <div className="flex-1 w-full relative z-10"> {/* Content wrapper with higher z-index */}
        <HeaderGreen />
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-24">

          {/* Intro Section */}
          <section className="text-center mb-16 sm:mb-24" data-aos="fade-down">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-transparent bg-clip-text mb-6 leading-tight tracking-tight">
              AI Branding Boards
            </h1>
            <p className="text-neutral-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Instantly generate world-class branding kits powered by AI – crafted to make your startup or enterprise unforgettable.
            </p>
          </section>

          {/* Branding Boards Section - Enhanced Cards */}
          <section className="mb-20 sm:mb-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {brandingBoards.map((board, idx) => (
                <div
                  key={board.id}
                  data-aos="fade-up"
                  data-aos-delay={`${idx * 100}`}
                  className="bg-neutral-800/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl group border border-neutral-700/70 hover:border-amber-500/50 transition-all duration-300 ease-in-out transform hover:scale-[1.03] hover:shadow-amber-500/20"
                >
                  <div className="relative overflow-hidden h-56 sm:h-64"> {/* Increased height slightly */}
                    <img
                      src={board.image}
                      alt={board.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                      <Link
                        to={`/themes/${board.id}`}
                        className="text-xs sm:text-sm bg-amber-400 text-slate-900 px-5 py-2.5 rounded-full font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-amber-300"
                      >
                        View Board
                      </Link>
                    </div>
                  </div>
                  <div className="p-5 bg-neutral-800/80"> {/* Slightly different bg for text area */}
                    <h3 className="text-lg sm:text-xl font-semibold text-amber-300 group-hover:text-amber-200 transition-colors">
                      {board.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Branding Section */}
          <section className="mb-20 sm:mb-28 max-w-4xl mx-auto text-center" data-aos="fade-up" data-aos-duration="800">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-400 mb-6 tracking-tight">
              Why Branding Matters – Especially Now
            </h2>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-10">
              In today’s saturated markets, branding isn’t just a visual layer – it’s your first impression, your story, and your positioning strategy rolled into one.
            </p>
            <ul className="space-y-5 text-left px-2 sm:px-6">
              {whyBrandingPoints.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start text-base sm:text-lg text-neutral-200"
                  data-aos="fade-left"
                  data-aos-delay={point.aosDelay}
                >
                  <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-sky-400 mr-3.5 mt-0.5 flex-shrink-0" />
                  <span>{point.text}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* AI Advantage Section */}
          <section className="mb-20 sm:mb-28 max-w-5xl mx-auto text-center" data-aos="fade-up" data-aos-duration="800">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-400 mb-6 tracking-tight">
              How AI Supercharges Your Design Workflow
            </h2>
            <p className="text-neutral-300 text-base sm:text-lg mb-12 leading-relaxed max-w-3xl mx-auto">
              Traditional branding takes weeks and thousands of dollars. With our AI engine, get polished, pitch-ready branding kits in minutes – zero design skills required.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-left">
              {aiAdvantages.map((adv, idx) => (
                <div
                  key={idx}
                  data-aos="zoom-in"
                  data-aos-delay={adv.aosDelay}
                  className="bg-neutral-800/60 backdrop-blur-md border border-neutral-700/70 rounded-xl p-6 md:p-8 group hover:border-amber-500/40 transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3.5 bg-amber-400/10 rounded-lg group-hover:bg-amber-400/20 transition-colors duration-300">
                      {adv.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-amber-300 group-hover:text-amber-200 transition-colors">
                      {adv.title}
                    </h4>
                  </div>
                  <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">{adv.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section
            className="bg-gradient-to-r from-amber-500/15 via-yellow-400/10 to-amber-500/15 backdrop-blur-lg p-8 sm:p-12 md:p-16 rounded-3xl text-center shadow-2xl border border-amber-500/40"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <Rocket className="w-12 h-12 sm:w-16 sm:h-16 text-amber-400 mx-auto mb-8" />
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent mb-6 tracking-tight">
              Design Your Brand in 60 Seconds
            </h3>
            <p className="text-neutral-300 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Founders, marketers, and designers: jumpstart your next venture with the power of AI. No guesswork, no delays — just pure creative acceleration.
            </p>
            <Link
              to="/create-brand-kit" // Example: more descriptive link
              className="inline-flex items-center justify-center gap-3 bg-amber-400 text-slate-900 font-bold px-8 py-3.5 rounded-full text-base sm:text-lg hover:bg-amber-300 transition-all duration-300 shadow-xl hover:shadow-amber-400/50 transform hover:scale-105 group"
            >
              <Rocket size={22} className="transition-transform duration-300 group-hover:rotate-[15deg]" />
              Generate My Brand Kit
            </Link>
          </section>
        </main>
      </div>

      {/* The <style jsx global> tag is specific to Next.js or requires a Babel plugin for other React setups.
        If you are NOT using Next.js, these styles should be moved to a global CSS file (e.g., index.css or App.css).
        The @keyframes, .animate-pulse-slow, .animation-delay-2000, and .bg-gradient-radial classes would then be defined there.
      */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.08; transform: scale(0.95); } /* Slightly more visible base opacity */
          50% { opacity: 0.20; transform: scale(1.05); } /* Slightly more visible pulse opacity */
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2.5s;
        }
        .bg-gradient-radial { /* Used by the fixed background glows */
          background-image: radial-gradient(circle, var(--tw-gradient-from) 0%, var(--tw-gradient-via) 30%, var(--tw-gradient-to) 70%);
        }
      `}</style>
    </div>
  );
}
