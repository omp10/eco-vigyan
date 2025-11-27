"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FramerAnimation from "@/components/FramerAnimation";
import AnimatedHeroText from "@/components/AnimatedHeroText"; // Assuming this handles text transition
import {
  BookOpen,
  Heart,
  CheckCircle,
  Map as MapIcon,
  Sprout,
  ArrowRight,
  Leaf,
  Users,
  TrendingUp,
  Activity
} from "lucide-react";
import Footer from "@/components/Footer";

function HeroSection() {
  const heroImages = [
    "/icons/img1.jpg",
    "/icons/img2.jpg",
    "/icons/img3.webp",
  ];

  const [currentImage, setCurrentImage] = React.useState(0);

  // Keep background animation isolated so the rest of the page
  // does not re-render on each slide change (reduces scroll stutter).
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden will-change-transform">
      {heroImages.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out transform ${
            idx === currentImage ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>

      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <AnimatedHeroText 
          onTextChange={(index) => setCurrentImage(index % heroImages.length)} 
        />
      </div>

      <div className="absolute bottom-10 flex space-x-3 z-30 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`h-2 rounded-full transition-all duration-500 ${
              idx === currentImage ? "w-8 bg-orange-500" : "w-2 bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen font-sans bg-stone-50 text-slate-800 selection:bg-orange-500 selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <HeroSection />

      {/* --- ABOUT / MISSION --- */}
      <section id="about" className="py-24 bg-stone-50 relative scroll-mt-24">
        {/* Decorative background blob */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FramerAnimation delay={0.2}>
            <div className="text-center mb-16">
              <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">Who We Are</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Eco Vigyan for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Underprivileged Children</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-300 mx-auto mt-6 rounded-full"></div>
              
              <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Eco Vigyan Trust creates pathways for orphans and at-risk children to experience new opportunities through holistic education and environmental stewardship.
              </p>
            </div>
          </FramerAnimation>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Side */}
            <FramerAnimation delay={0.3}>
              <div className="space-y-8">
                <p className="text-lg text-slate-700 leading-relaxed font-light">
                  <strong className="font-bold text-slate-900">Eco Vigyan</strong> is a Shimla-based NGO bridging the gap between child rights and sustainable development. Founded by educators and environmentalists, we believe that <span className="italic text-emerald-700 font-medium">nature is the best classroom.</span>
                </p>
                
                <div className="relative pl-8 border-l-4 border-orange-500 py-2">
                  <p className="text-lg text-slate-800 font-serif italic relative z-10">
                    "One of the best NGOs in Shimla, Eco Vigyan addresses children's unique needs; giving them a healthy start and protection from harm."
                  </p>
                  <div className="absolute -top-4 -left-3 text-6xl text-orange-200 opacity-50 z-0 select-none">"</div>
                </div>

                <Link href="/about" className="group inline-flex items-center text-orange-600 font-bold hover:text-orange-700 transition">
                  <span className="border-b-2 border-transparent group-hover:border-orange-600 transition-all duration-300">Read our full story</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FramerAnimation>

            {/* Video/Image Side */}
            <FramerAnimation delay={0.4}>
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-emerald-500 rounded-2xl opacity-20 group-hover:opacity-40 blur-lg transition duration-500"></div>
                <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl bg-slate-900">
                  <img
                    src="https://img.youtube.com/vi/8WLk2mX7uBw/maxresdefault.jpg"
                    alt="Eco Vigyan Activity"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                      <div className="ml-1 w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-orange-600 border-b-[10px] border-b-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </FramerAnimation>
          </div>
        </div>
      </section>

      {/* --- WHAT WE DO (Dark Elegance) --- */}
      <section className="py-24 bg-emerald-950 text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-800 rounded-full mix-blend-overlay filter blur-[100px] opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900 rounded-full mix-blend-overlay filter blur-[100px] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* LEFT COLUMN (Header) */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <FramerAnimation delay={0.2}>
                <div className="inline-block px-3 py-1 mb-4 rounded-full bg-emerald-800/50 border border-emerald-700 backdrop-blur-sm">
                   <p className="text-xs font-bold tracking-widest text-emerald-300 uppercase">Our Pillars</p>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 tracking-tight">
                  Empowering the <br />
                  <span className="text-emerald-400">Future Generation.</span>
                </h2>
                <p className="text-emerald-100/80 text-lg mb-8 leading-relaxed">
                  Eco Vigyan was formed in 2002 with its flagship program "Mission Education". We integrate standard curriculum with environmental stewardship.
                </p>
                <Link href="/programs" className="w-fit px-8 py-4 bg-white text-emerald-900 font-bold rounded-lg shadow-lg hover:bg-emerald-50 transition transform hover:-translate-y-1">
                  View All Programs
                </Link>
              </FramerAnimation>
            </div>

            {/* RIGHT SIDE CARDS (Glassmorphism) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <FramerAnimation delay={0.3}>
                <div className="group h-full p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-orange-500/50 hover:bg-white/10 transition duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-orange-500/20 rounded-full blur-xl group-hover:bg-orange-500/40 transition"></div>
                  <BookOpen className="w-10 h-10 text-orange-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-3">Education</h3>
                  <p className="text-emerald-100/70 mb-6 text-sm leading-relaxed">
                    Bridge courses and remedial education for dropouts. We ensure no child is left behind due to circumstances.
                  </p>
                  <Link href="/education" className="flex items-center text-orange-400 text-sm font-bold group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </FramerAnimation>

              <FramerAnimation delay={0.4}>
                <div className="group h-full p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-pink-500/50 hover:bg-white/10 transition duration-300 relative overflow-hidden">
                   <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl group-hover:bg-pink-500/40 transition"></div>
                  <Heart className="w-10 h-10 text-pink-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-3">Health & Nutrition</h3>
                  <p className="text-emerald-100/70 mb-6 text-sm leading-relaxed">
                    Combating malnutrition through regular health camps, hygiene workshops, and mid-day meal supplements.
                  </p>
                  <Link href="/health" className="flex items-center text-pink-400 text-sm font-bold group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </FramerAnimation>

              <FramerAnimation delay={0.5}>
                <div className="group h-full p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-green-400/50 hover:bg-white/10 transition duration-300 relative overflow-hidden sm:col-span-2">
                  <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-green-500/20 rounded-full blur-xl group-hover:bg-green-500/40 transition"></div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <Leaf className="w-12 h-12 text-green-400 shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Eco-Sustainability</h3>
                      <p className="text-emerald-100/70 mb-4 text-sm max-w-2xl">
                        Teaching children to live in harmony with nature through waste management workshops, upcycling projects, and organic gardening.
                      </p>
                    </div>
                  </div>
                </div>
              </FramerAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* --- MUSHROOM MAPPING INITIATIVE --- */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-100/50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-b from-yellow-200 to-green-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-pulse-slow"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <FramerAnimation delay={0.2}>
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <span className="flex items-center space-x-2 bg-white px-4 py-1.5 rounded-full shadow-sm border border-green-100">
                    <Sprout className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-bold tracking-wider text-green-800 uppercase">Citizen Science</span>
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                  Mapping Nature's <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-600">Hidden Treasures</span>
                </h2>
                
                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  A digital initiative to map wild mushroom varieties across Shimla's forests. This project identifies edible sources for nutrition while educating children about local biodiversity.
                </p>
                
                <ul className="space-y-4 mb-10">
                  {['Identify Local Fungi Species', 'Track Climate Change Impact', 'Community Foraging Walks'].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700 font-medium p-3 bg-white/60 rounded-lg border border-white/50 shadow-sm">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/map" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-green-700 text-white font-bold rounded-xl shadow-lg shadow-green-700/30 hover:bg-green-800 transform hover:-translate-y-1 transition duration-300"
                  >
                    <MapIcon className="w-5 h-5 mr-2" />
                    Open Mushroom Map
                  </Link>
                </div>
              </div>
            </FramerAnimation>

            {/* Enhanced Map Visual */}
            <FramerAnimation delay={0.4}>
              <Link href="/map" className="group block relative perspective-1000">
                {/* Decorative Back Layers */}
                <div className="absolute inset-0 bg-green-600 rounded-3xl rotate-3 opacity-20 group-hover:rotate-6 transition duration-500 blur-sm"></div>
                <div className="absolute inset-0 bg-yellow-500 rounded-3xl -rotate-2 opacity-20 group-hover:-rotate-3 transition duration-500 blur-sm"></div>
                
                {/* Main Card */}
                <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] group-hover:-translate-y-2 transition duration-500 transform-style-3d">
                  {/* Map Texture */}
                  <div className="absolute inset-0 opacity-40 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center invert filter hue-rotate-90"></div>
                  
                  {/* Grid Lines Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                  {/* Animated Pins */}
                  <div className="absolute top-1/4 left-1/4 animate-bounce delay-75 group-hover:scale-125 transition">
                    <div className="w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)]"></div>
                    <div className="w-1 h-6 bg-slate-400 mx-auto opacity-50"></div>
                  </div>
                  
                  <div className="absolute bottom-1/3 right-1/3 animate-bounce delay-150 group-hover:scale-125 transition">
                     <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.8)]"></div>
                     <div className="w-1 h-6 bg-slate-400 mx-auto opacity-50"></div>
                  </div>
                  
                  <div className="absolute top-1/2 right-1/4 animate-bounce group-hover:scale-125 transition">
                     <div className="w-4 h-4 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.8)]"></div>
                     <div className="w-1 h-6 bg-slate-400 mx-auto opacity-50"></div>
                  </div>

                  {/* Glass Overlay UI */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 flex justify-between items-center">
                    <div>
                      <h3 className="text-white font-bold flex items-center gap-2">
                        <Activity className="w-4 h-4 text-green-400" /> Live Tracker
                      </h3>
                      <p className="text-slate-300 text-xs mt-1">50+ Species identified today</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </Link>
            </FramerAnimation>
          </div>
        </div>
      </section>

      {/* --- IMPACT SECTION --- */}
      <section className="py-24 bg-white text-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FramerAnimation delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Our Impact in 2024</h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                Thanks to donors like you, we continue to bridge the gap between poverty and opportunity.
              </p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Stat 1 */}
              <div className="p-8 bg-orange-50 rounded-2xl border border-orange-100 text-center hover:shadow-lg transition duration-300 flex flex-col items-center justify-center">
                <Users className="w-8 h-8 text-orange-400 mb-4" />
                <p className="text-5xl font-black text-slate-800">350k<span className="text-orange-500">+</span></p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-2">Children Impacted</p>
              </div>

              {/* Stat 2 */}
              <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100 text-center hover:shadow-lg transition duration-300 flex flex-col items-center justify-center">
                <BookOpen className="w-8 h-8 text-blue-400 mb-4" />
                <p className="text-5xl font-black text-slate-800">120</p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-2">Schools Partnered</p>
              </div>

              {/* Stat 3 */}
              <div className="p-8 bg-yellow-50 rounded-2xl border border-yellow-100 text-center hover:shadow-lg transition duration-300 flex flex-col items-center justify-center">
                <Heart className="w-8 h-8 text-yellow-500 mb-4" />
                <p className="text-5xl font-black text-slate-800">2.5k</p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-2">Families Fed</p>
              </div>

              {/* Stat 4 */}
              <div className="p-8 bg-purple-50 rounded-2xl border border-purple-100 text-center hover:shadow-lg transition duration-300 flex flex-col items-center justify-center">
                <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
                <p className="text-5xl font-black text-slate-800">50+</p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-2">Species Mapped</p>
              </div>

              {/* Call to Action - Spans Full Width on mobile/tablet, centered on large */}
              <div className="mt-8 md:col-span-2 lg:col-span-4 rounded-3xl overflow-hidden shadow-2xl relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 transition-transform duration-500 group-hover:scale-105"></div>
                <div className="relative p-12 flex flex-col md:flex-row items-center justify-between gap-8 z-10">
                  <div className="text-center md:text-left">
                     <h3 className="text-3xl font-bold text-white mb-2">Be Part of the Change</h3>
                     <p className="text-orange-100">Your contribution directly supports our mushroom mapping & education kits.</p>
                  </div>
                  <Link href="/donate" className="flex-shrink-0 px-8 py-4 bg-white text-red-600 font-bold rounded-full shadow-lg hover:bg-stone-100 hover:scale-105 transition-all flex items-center">
                    Donate Now <Heart className="ml-2 w-5 h-5 fill-current" />
                  </Link>
                </div>
              </div>
            </div>
          </FramerAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
}