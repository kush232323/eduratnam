import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, NavLink, useLocation, useParams } from 'react-router-dom';
import {
  Menu, X, GraduationCap, Users, Phone, Mail, Clock, Award,
  BookOpen, Star, ChevronRight, Home, Info, CheckCircle,
  MessageCircle, School, FlaskConical, Bot, Rocket,
  PlayCircle, ArrowRight, ArrowLeft, MapPin, Quote, Trophy, Target,
  Sparkles, Compass, Cpu, Brain, LineChart, Plane, Camera, Maximize2,
  Code, Calendar, Building2, ShieldCheck, Video, CheckCircle2, ChevronDown,
  CreditCard, Heart, Briefcase, FileText, Zap, XCircle, Send, Monitor, Sun, Cloud, PenTool,
  Percent, Gift
} from 'lucide-react';

import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

// ✅ Local Logo Import
import logo from './assets/logo.png';

// ✅ Import all 16 Gallery Images
import g1 from './assets/gallery/1.jpeg';
import g2 from './assets/gallery/2.jpeg';
import g3 from './assets/gallery/3.jpeg';
import g4 from './assets/gallery/4.jpeg';
import g5 from './assets/gallery/5.jpeg';
import g6 from './assets/gallery/6.jpeg';
import g7 from './assets/gallery/7.jpeg';
import g8 from './assets/gallery/8.jpeg';
import g9 from './assets/gallery/9.jpeg';
import g10 from './assets/gallery/10.jpeg';
import g11 from './assets/gallery/11.jpeg';
import g12 from './assets/gallery/12.jpeg';
import g13 from './assets/gallery/13.jpeg';
import g14 from './assets/gallery/14.jpeg';
import g15 from './assets/gallery/15.jpeg';
import g16 from './assets/gallery/16.jpeg';

const GALLERY_IMAGES = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16];

/* ============================================================
   🎨 BRAND CONFIG
   ============================================================ */
const BRAND = {
  name: 'EduRatnam',
  tagline: 'AI • ROBOTICS • DRONES',
  phone1: '+91-6200601678',
  phone2: '+91-8069645442',
  email: 'conatct@eduratnam.com',
  address: 'Bengaluru, Bihar',
  social: {
    facebook: 'https://www.facebook.com/eduratnam',
    instagram: 'https://www.instagram.com/eduratnam/',
    youtube: 'https://www.youtube.com/@eduratnam',
    whatsapp: '916200601678'
  },
};

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { 
    name: 'Courses', 
    path: '/courses',
    isDropdown: true,
    subItems: [
      { name: 'Python Programming', path: '/courses/python' },
      { name: 'Generative AI', path: '/courses/genai' },
      { name: 'Digital Marketing with AI', path: '/courses/digital-marketing-ai' },
      { name: 'Robotics', path: '/courses/robotics' },
      { name: 'Deep Learning', path: '/courses/deep' },
      { name: 'Machine Learning', path: '/courses/ml' },
      { name: 'Drone Technology', path: '/courses/drone' },
      { name: 'UI/UX Design', path: '/courses/uiux' },
      { name: 'Cloud Computing', path: '/courses/cloud' },
    ]
  },
  { name: 'NanhiCode', path: '/nanhicode' },
  { name: 'Training', path: '/training' },
  { name: 'Career Support', path: '/career-support' },
  { name: 'Contact', path: '/contact' },
];

/* ============================================================
   🎬 HERO SLIDES
   ============================================================ */
const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600&q=80',
    badge: '🤖 FUTURE SKILLS FOR CLASS 3 - 12',
    heading: 'Master AI, Robotics & Drone Tech',
    sub: 'Industry-grade, hands-on training for students, schools, and professionals. Build real projects and launch your tech career.',
    accent: '#00E5FF',
  },
  {
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80',
    badge: '🏫 TRUSTED BY 45+ SCHOOLS',
    heading: 'Empowering the Next Generation',
    sub: 'We partner with schools and colleges to deliver cutting-edge STEM, AI, and Robotics labs directly to your campus.',
    accent: '#A855F7',
  },
  {
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1600&q=80',
    badge: '🚀 DGCA-ALIGNED DRONE TRAINING',
    heading: 'Fly Into the Future',
    sub: 'Learn UAV flight dynamics, aerial mapping, and photogrammetry from certified industry experts.',
    accent: '#F59E0B',
  },
];

/* ============================================================
   🌍 GLOBAL STYLES
   ============================================================ */
function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap');
      * { font-family: 'Outfit', system-ui, sans-serif; }
      h1,h2,h3,h4,h5,h6,.font-display { font-family:'Space Grotesk',system-ui,sans-serif; letter-spacing:-0.02em; }
      .mono { font-family:'JetBrains Mono',monospace; }
      html { scroll-behavior: smooth; }

      @keyframes marquee { 0%{transform:translate3d(0,0,0)} 100%{transform:translate3d(-50%,0,0)} }
      @keyframes float   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
      @keyframes aurora  { 0%,100%{transform:translate(0,0) rotate(0)} 33%{transform:translate(40px,-40px) rotate(120deg)} 66%{transform:translate(-30px,30px) rotate(240deg)} }
      @keyframes shine   { 0%{transform:translateX(-100%)} 60%,100%{transform:translateX(100%)} }
      @keyframes blink   { 0%,100%{opacity:1} 50%{opacity:.3} }
      @keyframes type    { from { width: 0 } to { width: 100% } }
      @keyframes sunPulse { 0%, 100% { box-shadow: 0 0 30px #F59E0B; transform: scale(1); } 50% { box-shadow: 0 0 60px #F59E0B; transform: scale(1.05); } }

      .anim-float   { animation: float 6s ease-in-out infinite; }
      .anim-aurora  { animation: aurora 20s ease-in-out infinite; }
      .anim-blink   { animation: blink 1.5s ease-in-out infinite; }
      .anim-sun     { animation: sunPulse 3s infinite; }
      .marquee-track{ display:flex; width:max-content; animation: marquee 40s linear infinite; will-change:transform; }
      .marquee-track:hover{ animation-play-state:paused; }
      .btn-shine    { position:relative; overflow:hidden; }
      .btn-shine::after{ content:''; position:absolute; inset:0; background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,.35) 50%,transparent 70%); transform:translateX(-100%); animation:shine 3.5s ease-in-out infinite; }
      .grid-bg      { background-image:linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px); background-size:50px 50px; }
      .gradient-brand{ background:linear-gradient(135deg,#00E5FF 0%,#7C3AED 50%,#FF2EC4 100%); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; color:transparent; }
      .card-lift    { transition:transform .4s cubic-bezier(.2,.8,.2,1), box-shadow .4s; }
      .card-lift:hover { transform:translateY(-8px); }
      .typewriter    { overflow: hidden; white-space: nowrap; border-right: 2px solid #00E5FF; animation: type 3.5s steps(40, end), blink .75s step-end infinite; }
    `}</style>
  );
}

/* ============================================================
   🔮 AURORA BACKGROUND
   ============================================================ */
function AuroraBG({ variant = 'brand' }) {
  const map = {
    brand:  ['#00E5FF', '#7C3AED'],
    amber:  ['#F59E0B', '#EF4444'],
    emerald:['#10B981', '#1E40AF'],
  };
  const [c1, c2] = map[variant] || map.brand;
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full blur-3xl anim-aurora opacity-20"
           style={{ background: c1 }} />
      <div className="absolute -bottom-1/2 -right-1/4 w-[700px] h-[700px] rounded-full blur-3xl anim-aurora opacity-15"
           style={{ background: c2, animationDelay: '-8s' }} />
    </div>
  );
}

/* ============================================================
   🪄 ANIMATION HELPERS
   ============================================================ */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.05 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, className = '', direction = 'up' }) {
  const [ref, visible] = useReveal();
  const dir = { up:'translate-y-10', left:'-translate-x-10', right:'translate-x-10', zoom:'scale-90' }[direction];
  return (
    <div ref={ref} className={`${className} transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : `opacity-0 ${dir}`}`}
         style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Counter({ end, duration = 1800, suffix = '', decimals = 0 }) {
  const [n, setN] = useState(0);
  const [ref, visible] = useReveal();
  useEffect(() => {
    if (!visible) return;
    let s = 0;
    const step = end / (duration / 16);
    const t = setInterval(() => {
      s += step;
      if (s >= end) { setN(end); clearInterval(t); }
      else setN(decimals ? parseFloat(s.toFixed(decimals)) : Math.floor(s));
    }, 16);
    return () => clearInterval(t);
  }, [visible, end, duration, decimals]);
  return <span ref={ref}>{decimals ? n.toFixed(decimals) : n}{suffix}</span>;
}

/* ============================================================
   🔔 WELCOME POP-UP MODAL
   ============================================================ */
function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds on load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative bg-[#0F172A] border border-[#00E5FF]/40 rounded-3xl max-w-md w-full p-8 text-center shadow-2xl animate-[float_6s_ease-in-out_infinite]">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#1E40AF] to-[#7C3AED] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#7C3AED]/30">
          <Gift size={40} className="text-white" />
        </div>

        <h2 className="text-3xl font-extrabold text-white font-display mb-3">
          Welcome to <span className="gradient-brand">EduRatnam!</span>
        </h2>
        <p className="text-white/70 mb-8">
          Get <strong className="text-[#F59E0B]">20% OFF</strong> on your first course. Limited time offer!
        </p>

        <div className="flex flex-col gap-3">
          <Link 
            to="/courses" 
            onClick={() => setIsOpen(false)}
            className="w-full bg-gradient-to-r from-[#1E40AF] to-[#7C3AED] text-white font-bold py-3.5 rounded-xl hover:shadow-lg transition btn-shine"
          >
            Explore Courses
          </Link>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-full text-white/50 hover:text-white text-sm font-medium py-2 transition"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   🖼️ LOGO
   ============================================================ */
function Logo() {
  return (
    <div className="flex items-center">
      <div className="h-12 md:h-14 w-auto flex items-center justify-center overflow-hidden rounded-lg bg-white p-1.5 shadow-sm border border-gray-100">
        <img src={logo} alt="EduRatnam Logo" className="h-full w-auto object-contain" />
      </div>
    </div>
  );
}

/* ============================================================
   🟨 MARQUEE
   ============================================================ */
function Marquee() {
  const items = [
    '🚀 Admissions Open 2025',
    '🤖 1200+ Students Trained',
    '🎓 Certified Courses',
    '📞 Limited Seats',
    '🛸 DGCA-Aligned Drone Training',
    '🧠 Generative AI • Deep Learning • IoT',
    '⭐ 4.9/5 Average Rating',
    '💼 Job Assistance Available',
  ];
  return (
    <div className="bg-[#05080F] border-b border-[#00E5FF]/20 py-2 overflow-hidden relative">
      <div className="marquee-track relative">
        {[0,1].map(g => (
          <div key={g} className="flex items-center">
            {items.map((t,i) => (
              <span key={`${g}-${i}`} className="px-10 text-xs md:text-sm font-medium tracking-wide text-white/70 whitespace-nowrap">{t}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   🟦 NAVBAR
   ============================================================ */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className={`transition-all duration-300 overflow-hidden ${scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'}`}>
        <Marquee />
      </div>

      <div className={`transition-all duration-300 ${scrolled ? 'bg-[#0B1120]/95 backdrop-blur-2xl border-b border-[#00E5FF]/20 shadow-lg' : 'bg-[#0B1120] border-b border-white/5'}`}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-2">
          
          <Link to="/" className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              l.isDropdown ? (
                <div key={l.name} className="relative group">
                  <button className="px-3 py-2 rounded-lg font-medium text-sm transition-all text-white/70 hover:text-white hover:bg-white/5 flex items-center gap-1">
                    {l.name} <ChevronDown size={12} className="group-hover:rotate-180 transition-transform" />
                  </button>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-64 z-50">
                    <div className="bg-[#0F172A] border border-white/10 rounded-xl shadow-2xl overflow-hidden py-2">
                      {l.subItems.map((sub) => (
                        <Link key={sub.name} to={sub.path} className="block px-4 py-2.5 text-sm text-white/70 hover:text-[#00E5FF] hover:bg-white/5 transition">
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink key={l.path} to={l.path}
                  className={({ isActive }) => `px-3 py-2 rounded-lg font-medium text-sm transition-all ${isActive ? 'text-[#00E5FF] bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/5'}`}>
                  {l.name}
                </NavLink>
              )
            ))}
            
            <div className="w-px h-6 bg-white/10 mx-2" />
            
            <Link to="/pay" className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold px-4 py-2 rounded-lg transition text-sm">
              <CreditCard size={14} /> Pay Now
            </Link>
            <Link to="/contact"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#1E40AF] to-[#7C3AED] text-white font-bold px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-[#7C3AED]/30 transition text-sm btn-shine">
              Enroll Now <ArrowRight size={13} />
            </Link>
          </nav>

          <button className="lg:hidden text-white text-2xl p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0B1120] border-t border-[#00E5FF]/20 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col p-4 gap-1.5">
            {NAV_LINKS.map((l) => (
              <div key={l.name}>
                {l.isDropdown ? (
                  <div className="flex flex-col">
                    <button onClick={() => setDropdownOpen(!dropdownOpen)} className="px-4 py-3 rounded-xl font-medium text-sm text-white/70 hover:bg-white/5 flex items-center justify-between text-left">
                      {l.name} <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {dropdownOpen && (
                      <div className="pl-4 py-2 flex flex-col gap-1 border-l-2 border-[#00E5FF]/30 ml-4">
                        {l.subItems.map((sub) => (
                          <Link key={sub.name} to={sub.path} onClick={() => setOpen(false)} className="px-4 py-2 text-sm text-white/60 hover:text-[#00E5FF]">
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink to={l.path} onClick={() => setOpen(false)}
                    className={({ isActive }) => `block px-4 py-3 rounded-xl font-medium text-sm text-left ${isActive ? 'bg-[#00E5FF]/10 text-[#00E5FF]' : 'text-white/70 hover:bg-white/5'}`}>
                    {l.name}
                  </NavLink>
                )}
              </div>
            ))}
            
            <div className="flex gap-2 mt-4 pt-4 border-t border-white/10">
              <Link to="/pay" onClick={() => setOpen(false)} className="flex-1 inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-bold px-4 py-3 rounded-xl text-sm">
                <CreditCard size={14} /> Pay Now
              </Link>
              <Link to="/contact" onClick={() => setOpen(false)} className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1E40AF] to-[#7C3AED] text-white font-bold px-4 py-3 rounded-xl shadow-lg text-sm">
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ============================================================
   🎬 HOME PAGE COMPONENTS
   ============================================================ */
function HomeHero() {
  const [idx, setIdx] = useState(0);
  const [anim, setAnim] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setAnim(false);
      setTimeout(() => { setIdx(p => (p + 1) % HERO_SLIDES.length); setAnim(true); }, 500);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const s = HERO_SLIDES[idx];

  return (
    <section className="relative bg-[#0B1120] text-white overflow-hidden min-h-[90vh] flex items-center">
      {HERO_SLIDES.map((slide, index) => (
        <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === idx ? 'opacity-100' : 'opacity-0'}`}>
          <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full z-10 flex items-center">
        <div className="max-w-3xl">
          <Reveal direction="left">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 border rounded-full px-4 py-2 backdrop-blur"
                    style={{ background:`${s.accent}20`, borderColor:`${s.accent}60`, color:s.accent }}>
                <Sparkles size={12} />
                <span className="text-[10px] font-bold mono uppercase tracking-wider">{s.badge}</span>
              </span>
            </div>

            <h1 className={`text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6 font-display transition-all duration-700 ${anim ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {s.heading.split(' ').map((w, i) => (
                <span key={i} className={i < 3 ? 'gradient-brand' : ''}>{w} </span>
              ))}
            </h1>

            <p className={`text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed transition-all duration-700 ${anim ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {s.sub}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1E40AF] to-[#7C3AED] text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-[#7C3AED]/40 hover:-translate-y-0.5 transition btn-shine">
                Enroll Now <ArrowRight size={16} />
              </Link>
              <Link to="/courses"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 hover:border-[#00E5FF]/40 text-white font-bold px-8 py-4 rounded-xl transition hover:-translate-y-0.5">
                <PlayCircle size={16} /> Explore Courses
              </Link>
            </div>

            <div className="flex flex-wrap gap-10 text-sm">
              {[
                { v: '45', s: '+', l: 'SCHOOLS' },
                { v: '12', s: 'K+', l: 'STUDENTS' },
                { v: '250', s: '+', l: 'LIVE EXAMS' },
                { v: '4.9', s: '★', l: 'RATING', d: 1 },
              ].map((x, i) => (
                <div key={i}>
                  <p className="text-3xl font-extrabold font-display gradient-brand">
                    <Counter end={parseFloat(x.v)} suffix={x.s} decimals={x.d || 0} />
                  </p>
                  <p className="text-white/60 text-[10px] mono tracking-widest mt-1">{x.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   🏫 ABOUT SECTION
   ============================================================ */
function HomeAbout() {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60" />
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        <Reveal direction="left">
          <span className="inline-flex items-center gap-2 bg-[#1E40AF]/10 border border-[#1E40AF]/30 text-[#1E40AF] font-bold px-4 py-2 rounded-full text-xs mono mb-4 uppercase tracking-wider">
            <Info size={12} /> // ABOUT EDURATNAM
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1120] font-display mb-5">
            Building India's Next Generation of <span className="gradient-brand">Tech Leaders</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            EduRatnam is a premier technology training institute specializing in AI, Robotics, and Drone Technology. We partner with schools, colleges, and individuals to deliver world-class, hands-on education.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            From Class 3 students building their first robots to professionals mastering Deep Learning, our curriculum is designed by industry experts to bridge the gap between academia and real-world tech.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 font-bold text-[#1E40AF] hover:text-[#7C3AED] transition">
            Read More About Us <ArrowRight size={16} />
          </Link>
        </Reveal>

        <Reveal direction="right" delay={120}>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-[#1E40AF] to-[#7C3AED] rounded-2xl p-6 text-white h-44 flex flex-col justify-between shadow-xl">
              <School size={28} />
              <div>
                <p className="text-3xl font-extrabold font-display"><Counter end={45} suffix="+" /></p>
                <p className="text-xs text-white/70 mono tracking-widest mt-1">PARTNER SCHOOLS</p>
              </div>
            </div>
            <div className="bg-[#F59E0B] rounded-2xl p-6 text-white h-44 flex flex-col justify-between mt-8 shadow-xl">
              <Trophy size={28} />
              <div>
                <p className="text-3xl font-extrabold font-display"><Counter end={1200} suffix="+" /></p>
                <p className="text-xs text-white/80 mono tracking-widest mt-1">STUDENTS TRAINED</p>
              </div>
            </div>
            <div className="bg-[#10B981] rounded-2xl p-6 text-white h-44 flex flex-col justify-between -mt-4 shadow-xl">
              <CheckCircle size={28} />
              <div>
                <p className="text-3xl font-extrabold font-display"><Counter end={100} suffix="%" /></p>
                <p className="text-xs text-white/80 mono tracking-widest mt-1">HANDS-ON LEARNING</p>
              </div>
            </div>
            <div className="bg-[#0B1120] rounded-2xl p-6 text-white h-44 flex flex-col justify-between mt-4 shadow-xl border border-white/10">
              <Star size={28} className="text-[#F59E0B] fill-[#F59E0B]" />
              <div>
                <p className="text-3xl font-extrabold font-display text-[#F59E0B]"><Counter end={4.9} suffix="★" decimals={1} /></p>
                <p className="text-xs text-white/60 mono tracking-widest mt-1">PARENT RATING</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   📚 COURSES DATA & COMPONENT
   ============================================================ */
const COURSES = [
  { 
    id:'python', color:'#3776AB', img: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&q=80',
    title:'Python Programming', tag:'Beginner', 
    desc:'Python proficiency opens doors to lucrative career opportunities in software development, data analysis, and automation, making it a must-have skill for aspiring tech professionals worldwide.', 
    points:['Core syntax & data structures','OOP and functions','Libraries: NumPy, Pandas'],
    overview: 'This course is designed for absolute beginners and those looking to solidify their coding foundation. You will learn to think like a programmer, solve real-world problems, and write clean, efficient Python code.',
    curriculum: [
      { week: 'Module 1', title: 'Python Basics', topics: 'Variables, Data Types, Operators, Input/Output' },
      { week: 'Module 2', title: 'Control Flow', topics: 'If-Else statements, Loops (For/While), Break/Continue' },
      { week: 'Module 3', title: 'Data Structures', topics: 'Lists, Tuples, Dictionaries, Sets' },
      { week: 'Module 4', title: 'Functions & OOP', topics: 'Defining functions, Classes, Objects, Inheritance' },
      { week: 'Module 5', title: 'Libraries & Projects', topics: 'NumPy, Pandas basics, File Handling, Final Project' },
    ],
    benefits: ['High demand in the job market', 'Basis for AI and Data Science', 'Automate repetitive tasks']
  },
  { 
    id:'genai', color:'#A855F7', img: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=600&q=80',
    title:'Generative AI', tag:'Trending', 
    desc:'Generative AI opens career paths in content creation, product design, and AI engineering — letting you build systems that produce text, images, and code across industries.', 
    points:['LLMs & prompt engineering','Diffusion models','Project: custom AI assistant'],
    overview: 'Dive deep into the world of Large Language Models (LLMs) and image generation. Learn how to harness the power of OpenAI, Stable Diffusion, and LangChain to build next-generation AI applications.',
    curriculum: [
      { week: 'Module 1', title: 'Intro to GenAI', topics: 'How LLMs work, Tokens, Transformers architecture' },
      { week: 'Module 2', title: 'Prompt Engineering', topics: 'Zero-shot, Few-shot, Chain-of-Thought prompting' },
      { week: 'Module 3', title: 'Image Generation', topics: 'Diffusion models, Midjourney, Stable Diffusion' },
      { week: 'Module 4', title: 'Building Apps', topics: 'LangChain, RAG (Retrieval-Augmented Generation), Vector DBs' },
      { week: 'Module 5', title: 'Capstone Project', topics: 'Building a custom AI chatbot or content generator' },
    ],
    benefits: ['Create your own AI SaaS', 'Automate content creation', 'Become a Prompt Engineer']
  },
  { 
    id:'digital-marketing-ai', color:'#F59E0B', img: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&q=80',
    title:'Digital Marketing with AI Tools', tag:'New', 
    desc:'Master the future of marketing by integrating AI tools into your campaigns. Learn SEO, content generation, and data-driven advertising.', 
    points:['AI Copywriting & Design','SEO Automation','Performance Marketing with AI'],
    overview: 'Traditional digital marketing is evolving. This course teaches you how to 10x your productivity and campaign results by using AI tools for copywriting, graphic design, video creation, and data analysis.',
    curriculum: [
      { week: 'Module 1', title: 'Marketing Fundamentals', topics: 'Funnels, Target Audience, Buyer Personas' },
      { week: 'Module 2', title: 'AI Content Creation', topics: 'ChatGPT for copywriting, Midjourney for ads, AI video tools' },
      { week: 'Module 3', title: 'SEO with AI', topics: 'Keyword research, AI blog writing, technical SEO basics' },
      { week: 'Module 4', title: 'Paid Ads (Meta/Google)', topics: 'Campaign setup, AI audience targeting, budget optimization' },
      { week: 'Module 5', title: 'Analytics & Automation', topics: 'Google Analytics 4, Email automation with AI' },
    ],
    benefits: ['Run campaigns faster', 'Reduce ad spend waste', 'High demand for AI-savvy marketers']
  },
  { 
    id:'robotics', color:'#EF4444', img: 'https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?w=600&q=80',
    title:'Robotics', tag:'Hands-On', 
    desc:'Robotics expertise opens doors to cutting-edge careers in automation, manufacturing, and intelligent systems — empowering you to design and program machines that operate in the real world.', 
    points:['Sensors & actuators','Arduino & Raspberry Pi','Project: autonomous bot'],
    overview: 'Get your hands dirty with hardware! This practical course takes you from understanding basic electronics to building and programming your own autonomous robots using Arduino and ROS.',
    curriculum: [
      { week: 'Module 1', title: 'Electronics Basics', topics: 'Voltage, Current, Resistors, Breadboarding' },
      { week: 'Module 2', title: 'Arduino Programming', topics: 'Digital/Analog I/O, PWM, Servo control' },
      { week: 'Module 3', title: 'Sensors & Motors', topics: 'Ultrasonic, IR, DC Motors, Motor Drivers' },
      { week: 'Module 4', title: 'ROS Fundamentals', topics: 'Nodes, Topics, Publisher/Subscriber (Python)' },
      { week: 'Module 5', title: 'Final Build', topics: 'Obstacle avoidance bot / Line follower bot' },
    ],
    benefits: ['Physical world interaction', 'Core skill for Industry 4.0', 'Perfect for engineering students']
  },
  { 
    id:'deep', color:'#00E5FF', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80',
    title:'Deep Learning', tag:'Advanced', 
    desc:'Deep learning expertise fuels careers in computer vision, NLP, and AI research — equipping you to design neural networks that power the world\'s most advanced AI applications.', 
    points:['CNNs & RNNs','Transformers','TensorFlow & PyTorch'],
    overview: 'Go beyond basic machine learning. Master the deep neural networks that power self-driving cars, facial recognition, and ChatGPT. Built for future AI researchers and engineers.',
    curriculum: [
      { week: 'Module 1', title: 'Neural Networks', topics: 'Perceptrons, Activation Functions, Backpropagation' },
      { week: 'Module 2', title: 'Computer Vision (CNNs)', topics: 'Convolution layers, Pooling, Image Classification' },
      { week: 'Module 3', title: 'Sequence Models', topics: 'RNNs, LSTMs for time-series and text' },
      { week: 'Module 4', title: 'Transformers', topics: 'Attention mechanism, BERT, GPT architecture' },
      { week: 'Module 5', title: 'Deployment', topics: 'TensorFlow/PyTorch model saving and APIs' },
    ],
    benefits: ['Work on cutting-edge AI', 'High salary potential', 'Prerequisite for AI research']
  },
  { 
    id:'ml', color:'#22C55E', img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80',
    title:'Machine Learning', tag:'High Demand', 
    desc:'Machine learning proficiency unlocks high-demand roles in data science, predictive analytics, and AI product development — driving decisions across finance, healthcare, and tech.', 
    points:['Supervised learning','Model evaluation','Project: predictive model'],
    overview: 'Learn how to make machines learn from data. This course covers statistical models, data preprocessing, and algorithms to build predictive systems.',
    curriculum: [
      { week: 'Module 1', title: 'Data Preprocessing', topics: 'Pandas, Handling missing data, Feature scaling' },
      { week: 'Module 2', title: 'Supervised Learning', topics: 'Linear Regression, Logistic Regression, Decision Trees' },
      { week: 'Module 3', title: 'Unsupervised Learning', topics: 'K-Means Clustering, PCA (Dimensionality Reduction)' },
      { week: 'Module 4', title: 'Model Evaluation', topics: 'Confusion Matrix, Precision/Recall, Cross-validation' },
      { week: 'Module 5', title: 'Kaggle Project', topics: 'Solving a real-world dataset problem end-to-end' },
    ],
    benefits: ['Data-driven decision making', 'Core skill for Data Scientists', 'Versatile across industries']
  },
  { 
    id:'drone', color:'#F59E0B', img: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80',
    title:'Drone Technology', tag:'DGCA Aligned', 
    desc:'Drone technology expertise opens careers in aerial mapping, surveillance, agriculture, and defence — empowering you to build and fly intelligent UAVs.', 
    points:['UAV components & flight dynamics','DGCA regulations & safety','Aerial mapping'],
    overview: 'The sky is no longer the limit. Learn everything about drones—from assembling the hardware and understanding flight controllers to flying legally in India and capturing professional aerial data.',
    curriculum: [
      { week: 'Module 1', title: 'Drone Anatomy', topics: 'Frames, Motors, ESCs, Propellers, Flight Controllers' },
      { week: 'Module 2', title: 'Flight Dynamics', topics: 'Pitch, Roll, Yaw, PID tuning basics' },
      { week: 'Module 3', title: 'DGCA Rules', topics: 'Drone categories, No-fly zones, Pilot licensing' },
      { week: 'Module 4', title: 'Aerial Mapping', topics: 'Photogrammetry, Waypoint missions (Mission Planner)' },
      { week: 'Module 5', title: 'Practical Flying', topics: 'Simulator training, Live flight sessions, Maintenance' },
    ],
    benefits: ['Lucrative career in surveying/agri', 'Legal DGCA certification prep', 'Hands-on hardware assembly']
  },
  { 
    id:'uiux', color:'#FF2EC4', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
    title:'UI/UX Design', tag:'Creative', 
    desc:'Master the art of creating intuitive, beautiful, and user-centric digital experiences. Learn Figma, wireframing, prototyping, and user research.', 
    points:['Figma & Prototyping','User Research & Testing','Design Systems & UI Kits'],
    overview: 'This course is perfect for aspiring designers. You will learn the complete UI/UX process from understanding user needs to creating high-fidelity interactive prototypes.',
    curriculum: [
      { week: 'Module 1', title: 'Design Thinking', topics: 'Empathy maps, User Personas, Journey Mapping' },
      { week: 'Module 2', title: 'Wireframing', topics: 'Low-fidelity sketches, Information Architecture' },
      { week: 'Module 3', title: 'Figma Mastery', topics: 'Auto-layout, Components, Variants' },
      { week: 'Module 4', title: 'Visual Design', topics: 'Color theory, Typography, Spacing' },
      { week: 'Module 5', title: 'Prototyping', topics: 'Interactive prototypes, Usability testing' },
    ],
    benefits: ['High demand for UI/UX designers', 'Freelance friendly', 'Creative and strategic work']
  },
  { 
    id:'cloud', color:'#0EA5E9', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80',
    title:'Cloud Computing', tag:'Enterprise', 
    desc:'Become a cloud architect. Learn AWS, Azure, and Google Cloud to deploy, manage, and scale applications securely in the cloud.', 
    points:['AWS & Azure Fundamentals','Cloud Security','DevOps & Deployment'],
    overview: 'Cloud computing is the backbone of modern IT. This course covers cloud architecture, deployment models, and hands-on labs to prepare you for cloud certifications.',
    curriculum: [
      { week: 'Module 1', title: 'Cloud Basics', topics: 'IaaS, PaaS, SaaS, Virtualization' },
      { week: 'Module 2', title: 'AWS Core Services', topics: 'EC2, S3, VPC, IAM' },
      { week: 'Module 3', title: 'Azure & GCP', topics: 'Azure VMs, Google App Engine' },
      { week: 'Module 4', title: 'DevOps in Cloud', topics: 'CI/CD pipelines, Docker, Kubernetes' },
      { week: 'Module 5', title: 'Cloud Security', topics: 'Identity management, Compliance, Monitoring' },
    ],
    benefits: ['High paying IT roles', 'Essential for modern IT infrastructure', 'Certification preparation']
  },
];

function CoursesList() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {COURSES.map((p, i) => {
        return (
          <Reveal key={p.id} delay={i * 60} direction="zoom">
            <div className="bg-[#0F172A] border border-white/10 hover:border-[#00E5FF]/50 rounded-3xl overflow-hidden card-lift transition group relative flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-60 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent" />
                <span className="absolute top-4 right-4 text-[9px] font-bold px-2.5 py-1 rounded-full mono uppercase tracking-wider"
                      style={{ background:`${p.color}20`, color:p.color, border:`1px solid ${p.color}55` }}>
                  {p.tag}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1 relative">
                <h3 className="font-bold text-xl text-white font-display mb-2 group-hover:text-[#F59E0B] transition">{p.title}</h3>
                <p className="text-white/50 text-sm flex-1 mb-4 leading-relaxed line-clamp-3">{p.desc}</p>
                <ul className="space-y-2 mb-6">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-[12px] text-white/70">
                      <CheckCircle size={12} style={{ color: p.color }} />
                      {pt}
                    </li>
                  ))}
                </ul>
                <Link to={`/courses/${p.id}`} className="inline-flex items-center justify-between w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#F59E0B]/40 text-white font-semibold px-4 py-3 rounded-xl transition text-sm group-hover:gap-3">
                  <span>View Course</span><ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

function HomeCourses() {
  return (
    <section className="bg-[#0B1120] text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <AuroraBG variant="brand" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-[#7C3AED]/15 border border-[#7C3AED]/40 text-[#A78BFA] font-bold px-4 py-2 rounded-full text-xs mono mb-4 uppercase tracking-wider">
              <BookOpen size={12} /> // OUR COURSES
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display mb-4">
              Expand Your <span className="gradient-brand">Career Horizons</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">Hands-on training in AI, Robotics and Drone Technology — from beginner to advanced.</p>
          </div>
        </Reveal>

        <CoursesList />

        <div className="text-center mt-12">
          <Link to="/courses" className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold px-8 py-4 rounded-xl transition">
            View All Courses <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   🌅 HAPPY WAKE SECTION
   ============================================================ */
function HappyWake() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const hour = time.getHours();
  let greeting = "Hello";
  let sub = "Welcome to EduRatnam";
  let Icon = Sun;
  let color = "#F59E0B";

  if (hour < 12) {
    greeting = "Good Morning!";
    sub = "Start your day with new skills.";
    Icon = Sun;
    color = "#F59E0B";
  } else if (hour < 18) {
    greeting = "Good Afternoon!";
    sub = "Keep pushing your boundaries.";
    Icon = Sun;
    color = "#00E5FF";
  } else {
    greeting = "Good Evening!";
    sub = "Perfect time to learn something new.";
    Icon = Sun;
    color = "#A855F7";
  }

  return (
    <section className="bg-[#0B1120] text-white py-20 relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <AuroraBG variant="amber" />
      
      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        <Reveal direction="zoom">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#0F172A] border border-white/10 mb-6 relative">
            <div className="absolute inset-0 rounded-full blur-xl opacity-40 animate-pulse" style={{ background: color }}></div>
            <Icon size={48} style={{ color }} className="relative z-10 anim-float" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold font-display mb-4">
            {greeting.split(' ')[0]} <span style={{ color }}>{greeting.split(' ')[1]}</span>
          </h2>
          <p className="text-xl text-white/60 mb-8">{sub}</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/courses" className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-white font-bold px-8 py-4 rounded-xl transition hover:-translate-y-1">
              Explore Courses <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1E40AF] to-[#7C3AED] text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-[#7C3AED]/40 transition hover:-translate-y-1 btn-shine">
              Talk To Expert
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   💬 TESTIMONIALS
   ============================================================ */
function TestimonialsList() {
  const reviews = [
    { name: 'Bharti Kumari', role: 'AI Foundations Graduate', text: 'One of the best digital marketing training provider in Bangalore, Almost all practical classes provided by eduratnam. thank you!!', color: '#1E40AF' },
    { name: 'Sanjeet Ranjan', role: 'Robotics Student', text: 'I highly recommend this course for anyone interested in a career in digital marketing and coding. The lessons are well-structured, easy to follow, and the practical applications make it an invaluable learning experience.', color: '#7C3AED' },
    { name: 'Aryan Raj', role: 'Drone Tech Student', text: 'Eduratan is the best place to join Advanced digital marketing courses in Bangalore, you can take online or offline both type of classes. Learning was very practical throughout the course. Kumar sir taught each topic clearly.', color: '#F59E0B' },
    { name: 'Anumita', role: 'Generative AI Student', text: 'Digital marketing can help you develop a diverse set of skills valuable in current job market. This help you grow and understand business and customer faster and better. Digital marketing course are excellent.', color: '#10B981' },
    { name: 'Rohit Ranjan', role: 'Python Student', text: 'I thoroughly enjoyed the digital marketing class! The content was insightful, the instructor was engaging, and the practical exercises helped me apply concepts effectively. Highly recommend!', color: '#00E5FF' },
    { name: 'Sneha Patel', role: 'Machine Learning Student', text: 'The hands-on approach at EduRatnam is unmatched. Building real projects instead of just watching tutorials gave me the confidence to apply for ML roles immediately.', color: '#EC4899' },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((r, i) => (
        <Reveal key={i} delay={i * 100}>
          <div className="bg-white border border-gray-200 hover:border-[#1E40AF]/40 rounded-3xl p-7 h-full flex flex-col transition group relative overflow-hidden shadow-sm">
            <Quote size={28} className="mb-4" style={{ color: r.color }} />
            <p className="text-gray-700 leading-relaxed mb-6 flex-1 relative text-sm">{r.text}</p>
            <div className="flex items-center gap-3 pt-5 border-t border-gray-200 relative">
              <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold shrink-0" style={{ background: r.color }}>
                {r.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-[#0B1120] text-sm">{r.name}</p>
                <p className="text-[10px] text-gray-500 mono">{r.role}</p>
              </div>
              <div className="ml-auto flex gap-0.5 text-[#F59E0B]">
                {[...Array(5)].map((_, j) => <Star key={j} size={11} className="fill-current" />)}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function HomeTestimonials() {
  return (
    <section className="bg-[#F8FAFC] py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-[#10B981]/15 border border-[#10B981]/40 text-[#047857] font-bold px-4 py-2 rounded-full text-xs mono mb-4 uppercase tracking-wider">
              <Quote size={12} /> // TESTIMONIALS
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1120] font-display mb-4">What Our Students Say</h2>
          </div>
        </Reveal>
        <TestimonialsList />
      </div>
    </section>
  );
}

/* ============================================================
   📞 CONTACT FORM & INFO
   ============================================================ */
function ContactForm() {
  const [form, setForm] = useState({ name:'', phone:'', course:'Python Programming', message:'' });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    console.log("Saving to Dashboard:", form);
    const emailSubject = encodeURIComponent(`New Enquiry from ${form.name} - ${form.course}`);
    const emailBody = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nCourse: ${form.course}\nMessage: ${form.message}`);
    window.location.href = `mailto:${BRAND.email}?subject=${emailSubject}&body=${emailBody}`;
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <form onSubmit={submit} className="bg-[#0F172A] border border-[#F59E0B]/25 rounded-3xl p-7 space-y-4 relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-40 h-40 bg-[#F59E0B]/10 rounded-full blur-3xl" />
      <div className="relative">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-[#10B981] anim-blink" />
          <span className="text-xs mono text-[#F59E0B] font-bold">FAST_RESPONSE</span>
        </div>
        <h3 className="text-2xl font-extrabold text-white font-display mb-1">Get In Touch</h3>
        <p className="text-sm text-white/40">We reply within 30 minutes.</p>
      </div>

      {[
        { k:'name',  label:'Full Name',    type:'text', ph:'e.g., Aarav Sharma' },
        { k:'phone', label:'Phone Number', type:'tel',  ph:'+91 98765 43210' },
      ].map((f) => (
        <div key={f.k} className="relative">
          <label className="block text-xs mono text-[#F59E0B] mb-1.5 uppercase tracking-wider">{f.label}</label>
          <input required type={f.type} value={form[f.k]} placeholder={f.ph}
            onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#F59E0B] text-white placeholder:text-white/30 outline-none transition" />
        </div>
      ))}

      <div className="relative">
        <label className="block text-xs mono text-[#F59E0B] mb-1.5 uppercase tracking-wider">Course Interested</label>
        <select value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#F59E0B] text-white outline-none transition">
          {COURSES.map(c => (
            <option key={c.id} value={c.title} className="bg-[#0F172A]">{c.title}</option>
          ))}
        </select>
      </div>

      <div className="relative">
        <label className="block text-xs mono text-[#F59E0B] mb-1.5 uppercase tracking-wider">Message</label>
        <textarea rows="3" value={form.message} placeholder="Tell us what you need…"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#F59E0B] text-white placeholder:text-white/30 outline-none transition resize-none" />
      </div>

      <button type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1E40AF] to-[#7C3AED] text-white font-bold px-6 py-3.5 rounded-xl hover:shadow-lg hover:shadow-[#7C3AED]/30 transition btn-shine">
        {sent ? (<><CheckCircle size={16} /> Saved & Email Opened</>) : (<>Send Message <ArrowRight size={14} /></>)}
      </button>
    </form>
  );
}

function ContactInfo() {
  return (
    <div className="space-y-3">
      {[
        { icon: Phone,  label:'CALL US',     value: BRAND.phone1,          color:'#F59E0B', href:`tel:${BRAND.phone1}` },
        { icon: Phone,  label:'TECH SUPPORT',value: BRAND.phone2,          color:'#F59E0B', href:`tel:${BRAND.phone2}` },
        { icon: Mail,   label:'EMAIL US',    value: BRAND.email,          color:'#7C3AED', href:`mailto:${BRAND.email}` },
        { icon: MapPin, label:'VISIT US',    value: BRAND.address,        color:'#1E40AF' },
        { icon: Clock,  label:'WORKING HRS', value:'Mon–Sat, 9 AM – 7 PM', color:'#10B981' },
      ].map((c, i) => {
        const Icon = c.icon;
        const Wrap = c.href ? 'a' : 'div';
        return (
          <Wrap key={i} href={c.href} target={c.href?.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer"
            className="flex gap-4 items-start bg-[#0F172A] border border-white/10 hover:border-white/25 rounded-2xl p-4 transition group">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition"
                 style={{ background:`${c.color}20`, color:c.color, border:`1px solid ${c.color}55` }}>
              <Icon size={16} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] mono font-bold tracking-widest" style={{ color:c.color }}>{c.label}</p>
              <p className="text-white text-sm font-medium break-words mt-0.5">{c.value}</p>
            </div>
          </Wrap>
        );
      })}
      
      <div className="flex gap-2 mt-6">
        {[
          { icon: FaFacebookF,  href: BRAND.social.facebook,  bg:'#1877F2' },
          { icon: FaInstagram,  href: BRAND.social.instagram, bg:'#E4405F' },
          { icon: FaYoutube,    href: BRAND.social.youtube,   bg:'#FF0000' },
          { icon: FaWhatsapp,   href: `https://wa.me/${BRAND.social.whatsapp}`, bg:'#25D366' },
        ].map((s, i) => {
          const Icon = s.icon;
          return (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
               className="w-10 h-10 rounded-lg text-white flex items-center justify-center hover:scale-110 transition"
               style={{ background: s.bg }}>
              <Icon size={13} />
            </a>
          );
        })}
      </div>
    </div>
  );
}

function HomeContact() {
  return (
    <section className="bg-[#0B1120] text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <AuroraBG variant="amber" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-[#F59E0B]/15 border border-[#F59E0B]/40 text-[#F59E0B] font-bold px-4 py-2 rounded-full text-xs mono mb-4 uppercase tracking-wider">
              <MessageCircle size={12} /> // CONTACT US
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display mb-4">
              Talk To Our <span className="gradient-brand">Expert</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">We'd love to help you choose the right career track.</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10">
          <Reveal direction="left">
            <ContactInfo />
          </Reveal>
          <Reveal direction="right" delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   📝 NEW SECTIONS (NanhiCode, Training, Career Support, Pay)
   ============================================================ */

function NanhiCodePage() {
  const nanhiCourses = [
    "AI & Coding Grandmaster", "AI & Coding Prodigy", "Game Development for Kids",
    "App Development for Kids", "AI & Data Science for Teens", "Variables and data types",
    "HTML/CSS/JavaScript/Bootstrap", "Web Development", "Python", "GitHub"
  ];

  return (
    <div className="bg-[#0B1120] min-h-screen pt-20 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <AuroraBG variant="brand" />
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <Reveal>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-[#F59E0B]/15 border border-[#F59E0B]/40 text-[#F59E0B] font-bold px-4 py-2 rounded-full text-xs mono mb-6 uppercase tracking-wider">
              <Heart size={12} /> // NANHICODE INITIATIVE
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white font-display mb-6">
              Coding for <span className="gradient-brand">Little Minds</span>
            </h1>
            <p className="text-white/60 text-lg max-w-3xl mx-auto">
              One to One and Group Classes available for all the Courses.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {nanhiCourses.map((course, i) => (
              <div key={i} className="bg-[#0F172A] border border-white/10 rounded-xl p-4 text-center card-lift hover:border-[#F59E0B]/50 transition">
                <div className="w-12 h-12 mx-auto bg-[#F59E0B]/10 rounded-full flex items-center justify-center mb-3">
                  <Code className="text-[#F59E0B]" size={20} />
                </div>
                <p className="text-white font-bold text-sm mb-1">{course}</p>
                <p className="text-[10px] text-[#00E5FF] font-mono">EduRatnam Online</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function TrainingPage() {
  const trainingCourses = [
    "Python", "Java", "Node Js", "PHP", "Wordpress Basics",
    "Wordpress with Ecommerce", "HTML/CSS/JavaScript/Bootstrap", "React Js",
    "Flutter", "React Native", "C/C++", "Android", "R Language",
    "Excel For Beginners", "Software Testing"
  ];

  return (
    <div className="bg-[#0B1120] min-h-screen pt-20 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <AuroraBG variant="emerald" />
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <Reveal>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-[#10B981]/15 border border-[#10B981]/40 text-[#10B981] font-bold px-4 py-2 rounded-full text-xs mono mb-6 uppercase tracking-wider">
              <Briefcase size={12} /> // CORPORATE & SCHOOL TRAINING
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white font-display mb-6">
              Amplify Your Skills with <span className="gradient-brand">Industry Experts</span>
            </h1>
            <p className="text-white/60 text-lg max-w-4xl mx-auto mb-4">
              IT training and certifications offer numerous benefits, including skill enhancement, career advancement, industry recognition, specialization, staying updated, networking opportunities, job security, and improved problem-solving abilities.
            </p>
            <p className="text-[#00E5FF] font-mono text-sm mb-12">
              * One to One and Group Classes available for all the Courses.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {trainingCourses.map((course, i) => (
              <div key={i} className="bg-[#0F172A] border border-white/10 rounded-xl p-4 text-center card-lift hover:border-[#10B981]/50 transition">
                <div className="w-12 h-12 mx-auto bg-[#10B981]/10 rounded-full flex items-center justify-center mb-3">
                  <Monitor className="text-[#10B981]" size={20} />
                </div>
                <p className="text-white font-bold text-sm mb-1">{course}</p>
                <p className="text-[10px] text-[#00E5FF] font-mono">EduRatnam Online</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function CareerSupportPage() {
  return (
    <div className="bg-[#0B1120] min-h-screen pt-20 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <AuroraBG variant="amber" />
      <div className="relative max-w-7xl mx-auto px-6 text-center py-20">
        <Reveal>
          <span className="inline-flex items-center gap-2 bg-[#F59E0B]/15 border border-[#F59E0B]/40 text-[#F59E0B] font-bold px-4 py-2 rounded-full text-xs mono mb-6 uppercase tracking-wider">
            <Briefcase size={12} /> // CAREER SUPPORT
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white font-display mb-6">
            Land Your <span className="gradient-brand">Dream Job</span>
          </h1>
          <p className="text-white/60 text-lg max-w-3xl mx-auto mb-12">
            Education is only half the battle. Our dedicated career support team helps you with portfolio reviews, mock interviews, and direct referrals to our partner companies.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            {[
              { title: 'Resume & Portfolio', desc: 'We help you build a project portfolio that stands out to recruiters.', icon: FileText },
              { title: 'Mock Interviews', desc: '1-on-1 technical mock interviews with industry experts.', icon: MessageCircle },
              { title: 'Job Referrals', desc: 'Direct referrals to 50+ hiring partners in our network.', icon: Building2 },
              { title: 'Freelance Guidance', desc: 'Learn how to pitch clients and win freelance projects.', icon: Zap },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-[#0F172A] border border-white/10 p-6 rounded-2xl card-lift">
                  <Icon size={28} className="text-[#F59E0B] mb-4" />
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function PayNowPage() {
  return (
    <div className="bg-[#0B1120] min-h-screen pt-20 pb-24 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <AuroraBG variant="brand" />
      <Reveal>
        <div className="relative bg-[#0F172A] border border-white/10 p-10 rounded-3xl max-w-md w-full mx-4 text-center shadow-2xl">
          <div className="w-20 h-20 bg-[#00E5FF]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CreditCard size={40} className="text-[#00E5FF]" />
          </div>
          <h1 className="text-2xl font-bold text-white font-display mb-2">Pay Course Fees</h1>
          <p className="text-white/50 text-sm mb-8">Enter your details to proceed to the secure payment gateway.</p>
          
          <form className="space-y-4 text-left" onSubmit={(e) => { e.preventDefault(); alert("Redirecting to Secure Payment Gateway..."); }}>
            <div>
              <label className="text-xs mono text-white/60 mb-1 block">STUDENT NAME</label>
              <input type="text" required placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#00E5FF]" />
            </div>
            <div>
              <label className="text-xs mono text-white/60 mb-1 block">COURSE</label>
              <select className="w-full bg-[#0B1120] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#00E5FF]">
                {COURSES.map(c => <option key={c.id}>{c.title}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs mono text-white/60 mb-1 block">AMOUNT</label>
              <input type="text" disabled value="₹ 9,999" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-bold outline-none" />
            </div>
            <button className="w-full mt-4 bg-gradient-to-r from-[#1E40AF] to-[#7C3AED] text-white font-bold py-3.5 rounded-xl hover:shadow-lg transition">
              Proceed to Pay
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
}

/* ============================================================
   📄 DYNAMIC COURSE DETAIL PAGE
   ============================================================ */
function CourseDetailPage() {
  const { id } = useParams();
  const course = COURSES.find(c => c.id === id);
  
  if (!course) return <div className="min-h-screen pt-32 text-center text-white">Course Not Found</div>;

  const hasVideo = course.id === 'robotics' || course.id === 'drone';
  const isAI = course.id === 'genai' || course.id === 'deep' || course.id === 'ml';

  return (
    <div className="bg-[#0B1120] min-h-screen text-white pt-20">
      
      {/* Dynamic Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={course.img} alt={course.title} className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/80 to-transparent" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <AuroraBG variant={isAI ? "brand" : "amber"} />
        
        <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-12">
          <Link to="/courses" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-6 transition">
            <ArrowLeft size={16} /> Back to Courses
          </Link>
          <span className="inline-block text-[10px] font-bold px-3 py-1 rounded-full mono uppercase tracking-wider self-start mb-4"
                style={{ background:`${course.color}20`, color:course.color, border:`1px solid ${course.color}55` }}>
            {course.tag}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-display mb-4">
            {course.title}
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">{course.desc}</p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        
        {/* Left Column: Details & Curriculum */}
        <div className="md:col-span-2 space-y-12">
          
          {isAI && (
            <div className="p-6 rounded-2xl bg-[#0F172A] border border-[#00E5FF]/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/10 rounded-full blur-2xl" />
              <h3 className="text-xl font-bold font-display mb-4 flex items-center gap-2 text-[#00E5FF]">
                <Bot size={20} /> Enter the AI World
              </h3>
              <p className="text-[#00E5FF]/80 mono text-sm typewriter mb-2">
                Initializing neural networks... Loading datasets... Training models...
              </p>
              <div className="flex gap-2 mt-4">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] anim-blink"></span>
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] anim-blink" style={{animationDelay:'0.2s'}}></span>
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] anim-blink" style={{animationDelay:'0.4s'}}></span>
              </div>
            </div>
          )}

          <div>
            <h2 className="text-2xl font-bold font-display mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full" style={{ background: course.color }}></span>
              Course Overview
            </h2>
            <p className="text-white/70 leading-relaxed text-lg">{course.overview}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full" style={{ background: course.color }}></span>
              Curriculum Breakdown
            </h2>
            <div className="space-y-4">
              {course.curriculum.map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/30 transition">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold mono uppercase tracking-wider px-2 py-1 rounded bg-[#0B1120] text-white/60 w-fit">
                      {item.week}
                    </span>
                    <h4 className="font-bold text-lg text-white font-display">{item.title}</h4>
                  </div>
                  <p className="text-sm text-white/50">{item.topics}</p>
                </div>
              ))}
            </div>
          </div>

          {hasVideo && (
            <div>
              <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 rounded-full" style={{ background: course.color }}></span>
                Course Showcase Video
              </h2>
              <div className="rounded-2xl overflow-hidden border border-white/20 relative aspect-video bg-black flex items-center justify-center group cursor-pointer shadow-2xl">
                <img src={course.img} alt="Video placeholder" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition duration-500" />
                <div className="relative z-10 w-20 h-20 rounded-full bg-white/20 backdrop-blur border border-white/40 flex items-center justify-center group-hover:scale-110 transition">
                  <PlayCircle size={40} className="text-white ml-1" />
                </div>
                <p className="absolute bottom-4 left-4 text-xs font-mono text-white/70 bg-black/60 px-3 py-1.5 rounded backdrop-blur">
                  Play Demo Video
                </p>
              </div>
            </div>
          )}

          <div>
            <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full" style={{ background: course.color }}></span>
              Why Take This Course?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {course.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                  <CheckCircle2 size={20} style={{ color: course.color }} className="shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-white/80">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Sticky Enquiry Form */}
        <div>
          <div className="sticky top-28">
            <div className="bg-[#0F172A] border border-white/10 rounded-3xl p-6 shadow-2xl">
              <h3 className="text-xl font-bold font-display mb-2 text-white">Enquire About This Course</h3>
              <p className="text-sm text-white/50 mb-6">Fill out the form below and our experts will get back to you shortly.</p>
              <ContactForm />
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

/* ============================================================
   📄 ABOUT PAGE (From your text)
   ============================================================ */
function AboutPage() {
  return (
    <div className="bg-[#0B1120] min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-6">
            Empower Your IT Journey: Access Cutting-Edge Training at <span className="gradient-brand">Eduratnam Online!</span>
          </h1>
          <div className="text-white/70 space-y-6 text-lg leading-relaxed">
            <p>At Eduratnam, we believe in empowering individuals with the knowledge and skills they need to thrive in the ever-evolving landscape of Information Technology. Established with a vision to revolutionize online learning, we are committed to delivering cutting-edge IT training programs that equip our students with the expertise demanded by today's digital world.</p>
            
            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Who We Are:</h3>
            <p>Eduratnam is a leading institute dedicated to providing comprehensive IT training solutions tailored to meet the diverse needs of learners worldwide. With a team of seasoned professionals and industry experts, we offer a dynamic learning environment where innovation, collaboration, and excellence converge.</p>
            
            <h3 className="text-2xl font-bold text-white mt-8 mb-4">What We Offer:</h3>
            <p>Our extensive IT & Digital Marketing training courses cover a wide spectrum of technologies, platforms, and domains. Whether you're a beginner looking to kickstart your IT career or an experienced professional seeking to enhance your skills, we have the perfect program. From programming languages and software development to digital marketing, cloud computing, data science, and beyond, we ensure that our curriculum aligns with the latest industry trends and best practices.</p>
            
            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Our Commitment to Excellence:</h3>
            <p>At Eduratnam, excellence is not just a goal; it's our standard. We are dedicated to providing unparalleled quality education, ensuring that every student receives the guidance, support, and resources needed to achieve their learning objectives and succeed in their IT endeavors.</p>
            
            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Join Us Today:</h3>
            <p>Embark on your journey to IT excellence with Eduratnam. Explore our diverse range of courses, engage with our vibrant learning community, and unlock your full potential in Information Technology. Whether you're pursuing a career in programming, digital marketing, data science, or any other IT field, we're here to help you thrive. Enroll now and take the first step towards a brighter future in technology.</p>
          </div>
        </Reveal>
      </div>
      <HomeTestimonials />
    </div>
  );
}

/* ============================================================
   📄 FAQ & BLOG SECTIONS
   ============================================================ */
function HomeFAQ() {
  const faqs = [
    { q: 'What courses do you offer?', a: 'We offer a diverse range of courses spanning various subjects, from technology to arts and sciences.' },
    { q: 'How do I enroll?', a: 'Enrollment is simple! Visit our website, choose your desired course, and follow the easy registration process.' },
    { q: 'How long are the courses?', a: 'Course durations vary. Check the course details for specific information on the duration of each program.' },
    { q: 'Do you offer discounts?', a: 'Yes, we frequently offer discounts and promotions. Keep an eye on our website and social media for updates.' },
    { q: 'What do I get after enrolling?', a: 'Once enrolled, you\'ll gain access to our online learning platform, where you can find all course materials.' },
  ];
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1120] font-display mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Our FAQ section to get quick answers about our courses, enrollment process, support services, refunds, and more.</p>
          </div>
        </Reveal>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className={`rounded-2xl border transition-all overflow-hidden ${open === i ? "bg-white border-[#1E40AF]/40 shadow-lg" : "bg-gray-50 border-gray-200 hover:border-gray-300"}`}>
                <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="font-bold text-base text-[#0B1120] pr-4">{f.q}</span>
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all ${open === i ? "bg-[#1E40AF] text-white rotate-180" : "bg-white text-[#0B1120] border border-gray-200"}`}>
                    {open === i ? <X size={14} /> : <ChevronRight size={14} />}
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${open === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="px-5 pb-5 text-gray-600 leading-relaxed text-sm">{f.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeBlog() {
  const posts = [
    { id: 1, title: 'Why Generative AI Is the Career Skill of 2025', date: 'Oct 12, 2025', tag: 'AI Trends', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80', desc: 'From prompt engineering to building RAG systems — here\'s how to break into the fastest-growing AI field.' },
    { id: 2, title: 'Build Your First Autonomous Robot in 30 Days', date: 'Oct 05, 2025', tag: 'Robotics', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80', desc: 'A step-by-step roadmap from Arduino basics to a self-driving bot — with project files included.' },
    { id: 3, title: 'DGCA Drone Rules 2025: What Every Pilot Must Know', date: 'Sep 28, 2025', tag: 'Drone Tech', img: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80', desc: 'A plain-English breakdown of India\'s drone regulations, licences, and safe flying zones.' },
  ];

  return (
    <section className="bg-[#F8FAFC] py-24 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-[#1E40AF]/10 border border-[#1E40AF]/30 text-[#1E40AF] font-bold px-4 py-2 rounded-full text-xs mono mb-4 uppercase tracking-wider">
              <FileText size={12} /> // LATEST BLOGS
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1120] font-display mb-4">Our Blog</h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <Reveal key={post.id} delay={i * 100}>
              <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition group">
                <div className="relative h-48 overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                </div>
                <div className="p-6">
                  <p className="text-[10px] text-gray-500 mono mb-2">{post.date} • {post.tag}</p>
                  <h3 className="font-bold text-lg text-[#0B1120] mb-3 leading-snug group-hover:text-[#1E40AF] transition">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.desc}</p>
                  <span className="text-[#1E40AF] text-xs font-bold uppercase tracking-wider flex items-center gap-1">Read More <ArrowRight size={12} /></span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   📄 POLICY & LEGAL PAGES
   ============================================================ */
function PolicyPage({ title, content }) {
  return (
    <div className="bg-[#0B1120] min-h-screen pt-20 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white font-display mb-8 border-b border-white/10 pb-4">
          {title}
        </h1>
        <div className="text-white/70 space-y-4 leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );
}

function PrivacyPolicy() {
  return <PolicyPage title="Privacy Policy" content={
    <>
      <p>At EduRatnam, we value your privacy. This policy outlines how we collect, use, and protect your personal information.</p>
      <h3 className="text-white text-xl font-bold mt-6 mb-2">1. Information We Collect</h3>
      <p>We collect information you provide directly to us, such as your name, email address, phone number, and payment details when you enroll in a course or contact us.</p>
      <h3 className="text-white text-xl font-bold mt-6 mb-2">2. How We Use It</h3>
      <p>Your information is used to process enrollments, provide customer support, send updates about your course, and improve our services.</p>
      <h3 className="text-white text-xl font-bold mt-6 mb-2">3. Data Security</h3>
      <p>We implement appropriate security measures to protect your personal information from unauthorized access or disclosure.</p>
    </>
  } />;
}

function TermsPage() {
  return <PolicyPage title="Terms & Conditions" content={
    <>
      <p>By accessing and using the EduRatnam website and services, you agree to comply with the following terms and conditions.</p>
      <h3 className="text-white text-xl font-bold mt-6 mb-2">1. Use of Services</h3>
      <p>You agree to use our services for lawful purposes only and in a way that does not infringe on the rights of others.</p>
      <h3 className="text-white text-xl font-bold mt-6 mb-2">2. Course Access</h3>
      <p>Upon successful enrollment and payment, you are granted a personal, non-transferable license to access the course materials.</p>
      <h3 className="text-white text-xl font-bold mt-6 mb-2">3. Intellectual Property</h3>
      <p>All course content, including videos, text, and assignments, is the intellectual property of EduRatnam and may not be reproduced or distributed without permission.</p>
    </>
  } />;
}

function RefundPolicy() {
  return <PolicyPage title="Refund Policy" content={
    <>
      <p>We strive to ensure your satisfaction with our courses. However, if you are not completely satisfied, please review our refund policy.</p>
      <h3 className="text-white text-xl font-bold mt-6 mb-2">1. Eligibility</h3>
      <p>Refund requests must be made within 7 days of enrollment. The refund will only be processed if less than 20% of the course content has been accessed.</p>
      <h3 className="text-white text-xl font-bold mt-6 mb-2">2. Processing Time</h3>
      <p>Approved refunds will be processed within 7-10 business days and will be credited back to the original method of payment.</p>
    </>
  } />;
}

function Cancellation() {
  return <PolicyPage title="Cancellation Policy" content={
    <>
      <p>We understand that plans change. Here is how you can cancel your enrollment.</p>
      <h3 className="text-white text-xl font-bold mt-6 mb-2">1. How to Cancel</h3>
      <p>To cancel your enrollment, please contact our support team at contact@eduratnam.com or call us at +91-6200601678.</p>
      <h3 className="text-white text-xl font-bold mt-6 mb-2">2. Cancellation Charges</h3>
      <p>Cancellations made within 48 hours of enrollment will not incur any charges (if no content was accessed). After 48 hours, standard refund policies apply.</p>
    </>
  } />;
}

/* ============================================================
   🦶 FOOTER
   ============================================================ */
function Footer() {
  return (
    <footer className="bg-[#05080F] text-white relative overflow-hidden border-t border-[#1E40AF]/25">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <AuroraBG variant="brand" />
      
      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Contact Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <Logo />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-sm mb-6">
              Dive into our extensive training courses covering both IT and Digital Marketing, where you will gain expertise in coding and strategic marketing strategies essential for success in the modern digital world.
            </p>
            
            <div className="space-y-3 text-sm text-white/60">
              <p className="flex items-center gap-2"><MapPin size={16} className="text-[#F59E0B]"/> Bengaluru, Bihar</p>
              <p className="flex items-center gap-2"><Phone size={16} className="text-[#F59E0B]"/> <a href="tel:+916200601678" className="hover:text-white transition">+91-6200601678</a></p>
              <p className="flex items-center gap-2"><Phone size={16} className="text-[#F59E0B]"/> <span className="text-white/40 text-xs">Technical Support:</span> <a href="tel:+918069645442" className="hover:text-white transition">+91-8069645442</a></p>
              <p className="flex items-center gap-2"><Mail size={16} className="text-[#F59E0B]"/> <a href="mailto:conatct@eduratnam.com" className="hover:text-white transition">conatct@eduratnam.com</a></p>
            </div>

            <div className="flex gap-2 mt-6">
              {[
                { icon: FaFacebookF,  href: BRAND.social.facebook,  hover: 'hover:bg-[#1877F2]' },
                { icon: FaInstagram,  href: BRAND.social.instagram, hover: 'hover:bg-[#E4405F]' },
                { icon: FaYoutube,    href: BRAND.social.youtube,   hover: 'hover:bg-[#FF0000]' },
                { icon: FaWhatsapp,   href: `https://wa.me/${BRAND.social.whatsapp}`, hover: 'hover:bg-[#25D366]' },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                     className={`w-9 h-9 rounded-lg bg-white/5 border border-white/10 ${s.hover} hover:border-transparent hover:scale-110 flex items-center justify-center transition`}>
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm mono text-[#00E5FF] mb-4 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2.5 text-white/50 text-sm">
              {['Home', 'About', 'Courses', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="hover:text-white transition flex items-center gap-1.5">
                    <ChevronRight size={10} className="opacity-40" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Policies */}
          <div>
            <h4 className="font-bold text-sm mono text-[#7C3AED] mb-4 uppercase tracking-widest">Policies</h4>
            <ul className="space-y-2.5 text-white/50 text-sm">
              {[
                { name: 'Privacy Policy', path: '/privacy-policy' },
                { name: 'Terms & Conditions', path: '/terms' },
                { name: 'Refund Policy', path: '/refund-policy' },
                { name: 'Cancellation', path: '/cancellation' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-white transition flex items-center gap-1.5">
                    <ChevronRight size={10} className="opacity-40" /> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses & NanhiCode */}
          <div>
            <h4 className="font-bold text-sm mono text-[#F59E0B] mb-4 uppercase tracking-widest">Courses</h4>
            <ul className="space-y-2.5 text-white/50 text-sm mb-6">
              {['IT & Software', 'Interview Preparation', 'Digital Marketing', 'UI/UX Design', 'Artificial Intelligence'].map((item) => (
                <li key={item}>
                  <Link to="/courses" className="hover:text-white transition flex items-center gap-1.5">
                    <ChevronRight size={10} className="opacity-40" /> {item}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-bold text-sm mono text-[#10B981] mb-4 uppercase tracking-widest">NanhiCode</h4>
            <ul className="space-y-2.5 text-white/50 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><ChevronRight size={10} className="opacity-40" /> Home</Link>
              </li>
              <li>
                <Link to="/nanhicode" className="hover:text-white transition flex items-center gap-1.5"><ChevronRight size={10} className="opacity-40" /> NanhiCode</Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition flex items-center gap-1.5"><ChevronRight size={10} className="opacity-40" /> eduact</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
      
      {/* Footer Bottom / Credits */}
      <div className="relative border-t border-white/5 py-6 flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto px-6">
        <p className="text-xs text-white/30 mono text-center md:text-left">
          © 2025 {BRAND.name.toUpperCase()} <span className="text-[#F59E0B]">●</span> AI / ROBOTICS / DRONES <span className="text-[#7C3AED]">●</span> ALL RIGHTS RESERVED
        </p>
        <p className="text-xs text-white/40 font-medium text-center md:text-right">
          Design and developed by{' '}
          <a href="https://ficuslot.com/" target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] hover:text-white transition underline decoration-[#00E5FF]/30 underline-offset-4">
            Ficuslot Innovation Pvt Ltd
          </a>
        </p>
      </div>
    </footer>
  );
}

/* ============================================================
   📄 MAIN PAGES (Home, About, Courses, Contact)
   ============================================================ */

function HomePage() {
  return (
    <>
      <WelcomePopup />
      <HomeHero />
      <HomeAbout />
      <HomeCourses />
      <HomeTestimonials />
      <HomeFAQ />
      <HomeBlog />
      <HappyWake />
      <HomeContact />
    </>
  );
}

function CoursesPage() {
  return (
    <div className="bg-[#0B1120] min-h-screen pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white font-display mb-6">
              Our <span className="gradient-brand">Courses</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto">Hands-on training in AI, Robotics and Drone Technology — from beginner to advanced.</p>
          </div>
        </Reveal>
        <CoursesList />
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="bg-[#0B1120] min-h-screen pt-20 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <AuroraBG variant="amber" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <Reveal direction="left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-5">
              Talk To Our <span className="gradient-brand">Expert</span>
            </h1>
            <p className="text-white/60 mb-8">We'd love to help you choose the right career track.</p>
            <ContactInfo />
          </Reveal>
          <Reveal direction="right" delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   🚀 MAIN APP (Routes Only)
   ============================================================ */
export default function App() {
  return (
    <>
      <GlobalStyles />
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#0B1120]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:id" element={<CourseDetailPage />} />
            <Route path="/nanhicode" element={<NanhiCodePage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/career-support" element={<CareerSupportPage />} />
            <Route path="/pay" element={<PayNowPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Policy Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/cancellation" element={<Cancellation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}