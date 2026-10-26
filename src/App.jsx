import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import {
  Menu, X, GraduationCap, Users, Phone, Mail, Clock, Award,
  BookOpen, Star, ChevronRight, Home, Info, CheckCircle,
  MessageCircle, School, FlaskConical, Bot, Rocket,
  PlayCircle, ArrowRight, MapPin, Quote, Trophy, Target,
  Sparkles, Compass, Cpu, Brain, LineChart, Plane, Camera, Maximize2,
  Code, Calendar, Building2, ShieldCheck
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
  phone: '+91 99450 88254',
  email: 'info@eduratnam.com',
  address: 'Bangalore, Karnataka, India',
  social: {
    facebook: 'https://www.facebook.com/eduratnam',
    instagram: 'https://www.instagram.com/eduratnam/',
    youtube: 'https://www.youtube.com/@eduratnam',
    whatsapp: '919945088254'
  },
};

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Courses', path: '/courses' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Blog', path: '/blog' },
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

      .anim-float   { animation: float 6s ease-in-out infinite; }
      .anim-aurora  { animation: aurora 20s ease-in-out infinite; }
      .anim-blink   { animation: blink 1.5s ease-in-out infinite; }
      .marquee-track{ display:flex; width:max-content; animation: marquee 40s linear infinite; will-change:transform; }
      .marquee-track:hover{ animation-play-state:paused; }
      .btn-shine    { position:relative; overflow:hidden; }
      .btn-shine::after{ content:''; position:absolute; inset:0; background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,.35) 50%,transparent 70%); transform:translateX(-100%); animation:shine 3.5s ease-in-out infinite; }
      .grid-bg      { background-image:linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px); background-size:50px 50px; }
      .gradient-brand{ background:linear-gradient(135deg,#00E5FF 0%,#7C3AED 50%,#FF2EC4 100%); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; color:transparent; }
      .card-lift    { transition:transform .4s cubic-bezier(.2,.8,.2,1), box-shadow .4s; }
      .card-lift:hover { transform:translateY(-8px); }
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
   🖼️ LOGO
   ============================================================ */
function Logo() {
  return (
    <div className="flex items-center">
      <div className="h-12 md:h-14 w-auto flex items-center justify-center overflow-hidden rounded-lg bg-white p-1.5 shadow-sm border border-gray-100">
        <img 
          src={logo} 
          alt="EduRatnam Logo" 
          className="h-full w-auto object-contain"
        />
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

          <nav className="hidden lg:flex items-center gap-2">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.path} to={l.path}
                className={({ isActive }) => `px-4 py-2 rounded-lg font-medium text-sm transition-all ${isActive ? 'text-[#00E5FF] bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/5'}`}>
                {l.name}
              </NavLink>
            ))}
            <div className="w-px h-6 bg-white/10 mx-2" />
            <Link to="/contact"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#1E40AF] to-[#7C3AED] text-white font-bold px-5 py-2.5 rounded-lg hover:shadow-lg hover:shadow-[#7C3AED]/30 transition text-sm btn-shine">
              Enroll Now <ArrowRight size={13} />
            </Link>
          </nav>

          <button className="lg:hidden text-white text-2xl p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0B1120] border-t border-[#00E5FF]/20 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col p-4 gap-1.5">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.path} to={l.path} onClick={() => setOpen(false)}
                className={({ isActive }) => `px-4 py-3 rounded-xl font-medium text-sm text-left ${isActive ? 'bg-[#00E5FF]/10 text-[#00E5FF]' : 'text-white/70 hover:bg-white/5'}`}>
                {l.name}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1E40AF] to-[#7C3AED] text-white font-bold px-5 py-3 rounded-xl shadow-lg text-sm">
              Get Started <ArrowRight size={12} />
            </Link>
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

function SchoolPartnershipBanner() {
  return (
    <section className="bg-[#1E40AF] py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_100%)] bg-[length:20px_20px]" />
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0">
            <Building2 size={32} />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-display mb-2">For Schools & Colleges</h2>
            <p className="text-white/80 text-sm md:text-base max-w-xl">Bring world-class AI & Robotics labs directly to your campus. Partner with us for curriculum integration and teacher training.</p>
          </div>
        </div>
        <Link to="/contact" className="bg-white text-[#1E40AF] font-bold px-8 py-3.5 rounded-xl hover:shadow-xl hover:-translate-y-0.5 transition shrink-0">
          Request Proposal
        </Link>
      </div>
    </section>
  );
}

function SchoolWhyChoose() {
  const items = [
    { icon: Target, title: 'CBSE/ICSE Aligned', desc: 'Curriculum seamlessly integrates with your existing academic structure.' },
    { icon: ShieldCheck, title: 'Safe & Secure', desc: 'All equipment and labs are child-safe with strict supervision protocols.' },
    { icon: Users, title: 'Teacher Training', desc: 'We train your faculty to independently run and manage the STEM labs.' },
  ];

  return (
    <section className="bg-[#F8FAFC] py-24 relative overflow-hidden border-b border-gray-200">
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-[#7C3AED]/15 border border-[#7C3AED]/40 text-[#7C3AED] font-bold px-4 py-2 rounded-full text-xs mono mb-4 uppercase tracking-wider">
              <School size={12} /> // SCHOOL PARTNERSHIPS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1120] font-display mb-4">
              Why Schools Partner With Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We don't just provide equipment; we provide a complete, managed ecosystem for your school's tech education.</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center card-lift hover:border-[#7C3AED]/40 transition group">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-[#7C3AED]/10 text-[#7C3AED] flex items-center justify-center mb-6 group-hover:scale-110 transition">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-bold text-lg text-[#0B1120] mb-3 font-display">{it.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{it.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
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
    points:['Core syntax & data structures','OOP and functions','Libraries: NumPy, Pandas'] 
  },
  { 
    id:'genai', color:'#A855F7', img: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=600&q=80',
    title:'Generative AI', tag:'Trending', 
    desc:'Generative AI opens career paths in content creation, product design, and AI engineering — letting you build systems that produce text, images, and code across industries.', 
    points:['LLMs & prompt engineering','Diffusion models','Project: custom AI assistant'] 
  },
  { 
    id:'robotics', color:'#EF4444', img: 'https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?w=600&q=80',
    title:'Robotics', tag:'Hands-On', 
    desc:'Robotics expertise opens doors to cutting-edge careers in automation, manufacturing, and intelligent systems — empowering you to design and program machines that operate in the real world.', 
    points:['Sensors & actuators','Arduino & Raspberry Pi','Project: autonomous bot'] 
  },
  { 
    id:'deep', color:'#00E5FF', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80',
    title:'Deep Learning', tag:'Advanced', 
    desc:'Deep learning expertise fuels careers in computer vision, NLP, and AI research — equipping you to design neural networks that power the world\'s most advanced AI applications.', 
    points:['CNNs & RNNs','Transformers','TensorFlow & PyTorch'] 
  },
  { 
    id:'ml', color:'#22C55E', img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80',
    title:'Machine Learning', tag:'High Demand', 
    desc:'Machine learning proficiency unlocks high-demand roles in data science, predictive analytics, and AI product development — driving decisions across finance, healthcare, and tech.', 
    points:['Supervised learning','Model evaluation','Project: predictive model'] 
  },
  { 
    id:'drone', color:'#F59E0B', img: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80',
    title:'Drone Technology', tag:'DGCA Aligned', 
    desc:'Drone technology expertise opens careers in aerial mapping, surveillance, agriculture, and defence — empowering you to build and fly intelligent UAVs.', 
    points:['UAV components & flight dynamics','DGCA regulations & safety','Aerial mapping'] 
  },
];

function CoursesList() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {COURSES.map((p, i) => {
        return (
          <Reveal key={p.id} delay={i * 60} direction="zoom">
            <div className="bg-[#0F172A] border border-white/10 hover:border-[#00E5FF]/50 rounded-3xl overflow-hidden card-lift transition group relative flex flex-col h-full">
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-60 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent" />
                <span className="absolute top-4 right-4 text-[9px] font-bold px-2.5 py-1 rounded-full mono uppercase tracking-wider"
                      style={{ background:`${p.color}20`, color:p.color, border:`1px solid ${p.color}55` }}>
                  {p.tag}
                </span>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-1 relative">
                <h3 className="font-bold text-xl text-white font-display mb-2 group-hover:text-[#F59E0B] transition">{p.title}</h3>
                <p className="text-white/50 text-sm flex-1 mb-4 leading-relaxed">{p.desc}</p>
                <ul className="space-y-2 mb-6">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-[12px] text-white/70">
                      <CheckCircle size={12} style={{ color: p.color }} />
                      {pt}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-flex items-center justify-between w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#F59E0B]/40 text-white font-semibold px-4 py-3 rounded-xl transition text-sm group-hover:gap-3">
                  <span>Enroll Now</span><ArrowRight size={14} />
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
   ❓ FAQ
   ============================================================ */
function FAQList() {
  const faqs = [
    { q: 'What courses do you offer?', a: 'We offer a diverse range of courses spanning various subjects, from technology to arts and sciences.' },
    { q: 'How do I enroll?', a: 'Enrollment is simple! Visit our website, choose your desired course, and follow the easy registration process.' },
    { q: 'How long are the courses?', a: 'Course durations vary. Check the course details for specific information on the duration of each program.' },
    { q: 'Do you offer discounts?', a: 'Yes, we frequently offer discounts and promotions. Keep an eye on our website and social media for updates.' },
    { q: 'What do I get after enrolling?', a: 'Once enrolled, you\'ll gain access to our online learning platform, where you can find all course materials.' },
  ];
  const [open, setOpen] = useState(0);

  return (
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
  );
}

function HomeFAQ() {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1120] font-display mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Our FAQ section to get quick answers about our courses, enrollment process, support services, refunds, and more.</p>
          </div>
        </Reveal>
        <FAQList />
      </div>
    </section>
  );
}

/* ============================================================
   📸 GALLERY
   ============================================================ */
function GalleryGrid() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((i) => (i + 1) % GALLERY_IMAGES.length);
      if (e.key === 'ArrowLeft') setLightbox((i) => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {GALLERY_IMAGES.map((img, i) => (
          <Reveal key={i} delay={(i % 4) * 50} direction="zoom">
            <div 
              onClick={() => setLightbox(i)}
              className="relative overflow-hidden rounded-2xl border border-white/10 hover:border-[#00E5FF]/60 transition-all cursor-pointer group aspect-square"
            >
              <img src={img} alt={`Gallery ${i + 1}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                <span className="text-white text-xs font-bold flex items-center gap-2 mono bg-black/50 px-3 py-1.5 rounded-full backdrop-blur">
                  <Maximize2 size={12} /> VIEW
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-[#050510]/98 flex items-center justify-center p-4 cursor-pointer backdrop-blur-sm" onClick={() => setLightbox(null)}>
          <button className="absolute top-5 right-5 text-white text-2xl w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition z-50" onClick={() => setLightbox(null)}>
            <X size={24} />
          </button>
          <button className="absolute left-4 md:left-8 text-white text-3xl w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition z-50" onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length); }}>
            ‹
          </button>
          <img src={GALLERY_IMAGES[lightbox]} alt={`Gallery ${lightbox + 1}`} className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl border border-white/20" onClick={(e) => e.stopPropagation()} />
          <button className="absolute right-4 md:right-8 text-white text-3xl w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition z-50" onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i + 1) % GALLERY_IMAGES.length); }}>
            ›
          </button>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-[#0A0A1F] border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-xl mono">
            {lightbox + 1} / {GALLERY_IMAGES.length}
          </div>
        </div>
      )}
    </>
  );
}

function HomeGallery() {
  return (
    <section className="bg-[#0B1120] text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-[#00E5FF]/15 border border-[#00E5FF]/40 text-[#00E5FF] font-bold px-4 py-2 rounded-full text-xs mono mb-4 uppercase tracking-wider">
              <Camera size={12} /> // GALLERY
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display mb-4">
              Moments of Joy & <span className="gradient-brand">Learning</span>
            </h2>
          </div>
        </Reveal>
        <GalleryGrid />
      </div>
    </section>
  );
}

/* ============================================================
   📞 CONTACT
   ============================================================ */
function ContactForm() {
  const [form, setForm] = useState({ name:'', phone:'', course:'Python Programming', message:'' });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
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
        {sent ? (<><CheckCircle size={16} /> Sent Successfully</>) : (<>Send Message <ArrowRight size={14} /></>)}
      </button>
    </form>
  );
}

function ContactInfo() {
  return (
    <div className="space-y-3">
      {[
        { icon: Phone,  label:'CALL US',     value: BRAND.phone,          color:'#F59E0B', href:`tel:${BRAND.phone}` },
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
   📝 BLOG SECTION
   ============================================================ */
const BLOG_POSTS = [
  { id: 1, title: 'Why Generative AI Is the Career Skill of 2025', date: 'Oct 12, 2025', tag: 'AI Trends', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80', desc: 'From prompt engineering to building RAG systems — here\'s how to break into the fastest-growing AI field.' },
  { id: 2, title: 'Build Your First Autonomous Robot in 30 Days', date: 'Oct 05, 2025', tag: 'Robotics', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80', desc: 'A step-by-step roadmap from Arduino basics to a self-driving bot — with project files included.' },
  { id: 3, title: 'DGCA Drone Rules 2025: What Every Pilot Must Know', date: 'Sep 28, 2025', tag: 'Drone Tech', img: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80', desc: 'A plain-English breakdown of India\'s drone regulations, licences, and safe flying zones.' },
];

function BlogGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {BLOG_POSTS.map((post, i) => (
        <Reveal key={post.id} delay={i * 100}>
          <div className="bg-[#0F172A] border border-white/10 hover:border-[#00E5FF]/50 rounded-3xl overflow-hidden card-lift transition group relative flex flex-col h-full">
            <div className="relative h-48 overflow-hidden">
              <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-60 group-hover:opacity-100" />
              <span className="absolute top-4 left-4 bg-[#0B1120]/80 backdrop-blur text-[#00E5FF] text-[9px] font-bold px-2.5 py-1 rounded-full mono uppercase tracking-wider border border-[#00E5FF]/30">
                {post.tag}
              </span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-[10px] text-white/40 mono mb-2 flex items-center gap-2"><Calendar size={12} /> {post.date}</p>
              <h3 className="font-bold text-lg text-white font-display mb-3 group-hover:text-[#F59E0B] transition leading-snug">{post.title}</h3>
              <p className="text-white/50 text-sm mb-6 flex-1">{post.desc}</p>
              <button className="inline-flex items-center gap-2 text-[#00E5FF] font-semibold text-xs group-hover:gap-3 transition-all self-start mono uppercase tracking-wider">
                Read More <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ============================================================
   📄 PAGES
   ============================================================ */

function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <SchoolPartnershipBanner />
      <SchoolWhyChoose />
      <HomeCourses />
      <HomeGallery />
      <HomeTestimonials />
      <HomeFAQ />
      <HomeContact />
    </>
  );
}

function AboutPage() {
  return (
    <div className="bg-[#0B1120] min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white font-display mb-6">
            About <span className="gradient-brand">EduRatnam</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            EduRatnam is a premier technology training institute specializing in AI, Robotics, and Drone Technology. We partner with schools, colleges, and individuals to deliver world-class, hands-on education.
          </p>
        </Reveal>
      </div>
      <HomeAbout />
      <HomeTestimonials />
    </div>
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

function GalleryPage() {
  return (
    <div className="bg-[#0B1120] min-h-screen pt-20 pb-24 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white font-display mb-6">
              Our <span className="gradient-brand">Gallery</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto">Glimpses of laughter, learning and little adventures at EduRatnam.</p>
          </div>
        </Reveal>
        <GalleryGrid />
      </div>
    </div>
  );
}

function BlogPage() {
  return (
    <div className="bg-[#0B1120] min-h-screen pt-20 pb-24 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white font-display mb-6">
              Latest <span className="gradient-brand">Insights</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto">News, guides, and trends from the EduRatnam team.</p>
          </div>
        </Reveal>
        <BlogGrid />
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
   🦶 FOOTER
   ============================================================ */
function Footer() {
  return (
    <footer className="bg-[#05080F] text-white relative overflow-hidden border-t border-[#1E40AF]/25">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <AuroraBG variant="brand" />
      <div className="relative max-w-7xl mx-auto px-6 pt-12 pb-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="inline-block mb-4">
              <Logo />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              India's hands-on training hub for AI, Robotics and Drone Technology.
            </p>
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
                    <Icon size={13} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm mono text-[#00E5FF] mb-4 uppercase tracking-widest">Explore</h4>
            <ul className="space-y-2.5 text-white/50 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="hover:text-white transition flex items-center gap-1.5">
                    <ChevronRight size={10} className="opacity-40" /> {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mono text-[#7C3AED] mb-4 uppercase tracking-widest">Courses</h4>
            <ul className="space-y-2.5 text-white/50 text-sm">
              {COURSES.map((p) => (
                <li key={p.id}>
                  <Link to="/courses" className="hover:text-white transition flex items-center gap-1.5">
                    <ChevronRight size={10} className="opacity-40" /> {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mono text-[#F59E0B] mb-4 uppercase tracking-widest">Reach Us</h4>
            <ul className="space-y-3 text-white/50 text-sm">
              <li className="flex gap-2.5"><MapPin className="mt-0.5 text-[#F59E0B] shrink-0" size={12} /><span>{BRAND.address}</span></li>
              <li className="flex gap-2.5"><Phone  className="mt-0.5 text-[#F59E0B] shrink-0" size={12} /><a href={`tel:${BRAND.phone}`} className="hover:text-white">{BRAND.phone}</a></li>
              <li className="flex gap-2.5"><Mail   className="mt-0.5 text-[#F59E0B] shrink-0" size={12} /><a href={`mailto:${BRAND.email}`} className="hover:text-white break-all">{BRAND.email}</a></li>
              <li className="flex gap-2.5"><Clock  className="mt-0.5 text-[#F59E0B] shrink-0" size={12} /><span>Mon–Sat, 9 AM – 7 PM</span></li>
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
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}