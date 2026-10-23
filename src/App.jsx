import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Link, NavLink, useLocation, useParams } from "react-router-dom";
import {
  FaBars, FaTimes, FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube,
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaRobot, FaBrain,
  FaPython, FaMicrochip, FaCogs, FaHeart, FaStar, FaArrowRight, FaArrowLeft,
  FaCheckCircle, FaUsers, FaAward, FaBookOpen, FaCalendarAlt, FaQuoteLeft,
  FaPlus, FaMinus, FaCamera, FaPhone, FaVideo, FaPlay, FaUser,
  FaClock, FaGraduationCap, FaSchool, FaPaperPlane, FaComments, FaChartLine,
  FaLaptopCode, FaRocket, FaShieldAlt, FaCertificate, FaChalkboardTeacher,
  FaDownload, FaBell, FaSearch, FaHome, FaSignOutAlt, FaMoon, FaSun,
  FaPlane, FaBolt, FaGlobe, FaCode, FaCrown, FaFire, FaLayerGroup,
  FaLongArrowAltRight, FaExternalLinkAlt, FaLock, FaCheck,
  FaTrophy, FaLightbulb, FaCompass, FaAtom, FaSatellite, FaGem,
  FaInfinity, FaStream, FaThLarge, FaMousePointer, FaGamepad,
  FaReact, FaNodeJs, FaGitAlt, FaTerminal, FaCheckDouble, FaRegClock,
  FaChevronRight, FaDotCircle, FaProjectDiagram, FaHandshake, FaNetworkWired,
  FaClipboardCheck, FaPenFancy, FaLifeRing, FaTicketAlt, FaMoneyBillWave,
  FaTools, FaSitemap, FaLandmark, FaUniversity, FaMapMarkedAlt, FaBuilding,
} from "react-icons/fa";

/* ✅ Gallery Images (assets/gallery 1-14) */
import g1 from "./assets/gallery/1.jpeg";
import g2 from "./assets/gallery/2.jpeg";
import g3 from "./assets/gallery/3.jpeg";
import g4 from "./assets/gallery/4.jpeg";
import g5 from "./assets/gallery/5.jpeg";
import g6 from "./assets/gallery/6.jpeg";
import g7 from "./assets/gallery/7.jpeg";
import g8 from "./assets/gallery/8.jpeg";
import g9 from "./assets/gallery/9.jpeg";
import g10 from "./assets/gallery/10.jpeg";
import g11 from "./assets/gallery/11.jpeg";
import g12 from "./assets/gallery/12.jpeg";
import g13 from "./assets/gallery/13.jpeg";
import g14 from "./assets/gallery/14.jpeg";

const GALLERY = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14];

/* ============================================================
   🔗 CONFIG
   ============================================================ */
const SOCIAL = {
  facebook: "https://www.facebook.com/eduratnam",
  instagram: "https://www.instagram.com/eduratnam/",
  youtube: "https://www.youtube.com/@eduratnam",
  whatsapp: "919945088254",
  phone: "+919945088254",
  phoneDisplay: "099450 88254",
  email: "info@eduratnam.com",
  address: "Bangalore, Karnataka, India",
};

const IMG = {
  hero1: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=80",
  hero2: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80",
  hero3: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&q=80",
  hero4: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=900&q=80",
  robotics: "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?w=800&q=80",
  drone: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80",
  python: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80",
  genai: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&q=80",
  deep: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
  ml: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
  iot: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  t1: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80",
  t2: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
  t3: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80",
  t4: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
  t5: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80",
  blog1: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
  blog2: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
  blog3: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80",
  s1: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80",
  s2: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80",
  s3: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&q=80",
  mentor1: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80",
  mentor2: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
  mentor3: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  mentor4: "https://images.unsplash.com/photo-1531727991582-cfd25ce79613?w=400&q=80",
};

/* ============================================================
   📚 DATA
   ============================================================ */
const COURSES = [
  { id: "python", slug: "python-programming", name: "Python Programming", icon: <FaPython />, tagline: "The foundation for every AI & Robotics engineer", img: IMG.python, accent: "#3776AB", accentTo: "#00D4FF", duration: "8 Weeks", level: "Beginner", price: "₹6,999", badge: "Most Popular",
    desc: "Python proficiency opens doors to lucrative career opportunities in software development, data analysis, and automation.",
    points: ["Core syntax & data structures", "OOP and functions", "Libraries: NumPy, Pandas", "Project: automation scripts"] },
  { id: "genai", slug: "generative-ai", name: "Generative AI", icon: <FaBrain />, tagline: "Build systems that create text, images & code", img: IMG.genai, accent: "#A855F7", accentTo: "#EC4899", duration: "10 Weeks", level: "Intermediate", price: "₹9,999", badge: "Trending",
    desc: "Generative AI opens career paths in content creation, product design, and AI engineering.",
    points: ["LLMs & prompt engineering", "Diffusion models", "RAG & vector databases", "Project: custom AI assistant"] },
  { id: "robotics", slug: "robotics", name: "Robotics", icon: <FaRobot />, tagline: "Design & program machines that operate in the real world", img: IMG.robotics, accent: "#EF4444", accentTo: "#F97316", duration: "12 Weeks", level: "Intermediate", price: "₹12,999", badge: "Hands-On",
    desc: "Robotics expertise opens doors to cutting-edge careers in automation, manufacturing, and intelligent systems.",
    points: ["Sensors & actuators", "Arduino & Raspberry Pi", "ROS fundamentals", "Project: autonomous bot"] },
  { id: "drone", slug: "drone-technology", name: "Drone Technology", icon: <FaPlane />, tagline: "Master UAV flight, mapping & aerial intelligence", img: IMG.drone, accent: "#F97316", accentTo: "#FACC15", duration: "10 Weeks", level: "Beginner to Advanced", price: "₹14,999", badge: "DGCA Aligned",
    desc: "Drone technology expertise opens careers in aerial mapping, surveillance, agriculture, and defence.",
    points: ["UAV components & flight dynamics", "DGCA regulations & safety", "Aerial mapping & photogrammetry", "Project: autonomous drone mission"] },
  { id: "deep", slug: "deep-learning", name: "Deep Learning", icon: <FaLayerGroup />, tagline: "Design neural networks powering advanced AI", img: IMG.deep, accent: "#00D4FF", accentTo: "#6366F1", duration: "12 Weeks", level: "Advanced", price: "₹13,999", badge: "Advanced",
    desc: "Deep learning expertise fuels careers in computer vision, NLP, and AI research.",
    points: ["CNNs & RNNs", "Transformers", "TensorFlow & PyTorch", "Project: image classifier"] },
  { id: "ml", slug: "machine-learning", name: "Machine Learning", icon: <FaChartLine />, tagline: "Unlock predictive analytics & AI product roles", img: IMG.ml, accent: "#22C55E", accentTo: "#06B6D4", duration: "10 Weeks", level: "Intermediate", price: "₹10,999", badge: "High Demand",
    desc: "Machine learning proficiency unlocks high-demand roles in data science, predictive analytics.",
    points: ["Supervised & unsupervised learning", "Model evaluation", "Scikit-learn", "Project: predictive model"] },
  { id: "iot", slug: "iot-smart-systems", name: "IoT & Smart Systems", icon: <FaMicrochip />, tagline: "Connect devices, sensors and the cloud", img: IMG.iot, accent: "#8B5CF6", accentTo: "#EC4899", duration: "8 Weeks", level: "Beginner", price: "₹7,999", badge: "New",
    desc: "IoT skills open careers in smart cities, industrial automation and connected devices.",
    points: ["ESP32 & sensors", "MQTT & cloud dashboards", "Edge computing basics", "Project: smart home node"] },
];

const SCHOOLS = [
  { id: 1, name: "Greenwood High", location: "Bengaluru", students: 42, courses: ["Python", "Robotics", "Drone Technology"], img: IMG.s1 },
  { id: 2, name: "Delhi Public School", location: "Bengaluru South", students: 38, courses: ["Python", "Generative AI", "Machine Learning"], img: IMG.s2 },
  { id: 3, name: "National Public School", location: "Indiranagar", students: 55, courses: ["Robotics", "IoT & Smart Systems", "Drone Technology"], img: IMG.s3 },
];

const MENTORS = [
  { name: "Kumar Sir", role: "Lead AI & Robotics Mentor", exp: "12+ yrs", img: IMG.mentor1, tags: ["Python", "AI", "Robotics"] },
  { name: "Priya Sharma", role: "Drone Technology Specialist", exp: "8+ yrs", img: IMG.mentor2, tags: ["Drones", "DGCA", "Mapping"] },
  { name: "Rahul Verma", role: "Deep Learning Engineer", exp: "10+ yrs", img: IMG.mentor3, tags: ["TensorFlow", "CV", "NLP"] },
  { name: "Anjali Mehta", role: "IoT & Embedded Systems", exp: "7+ yrs", img: IMG.mentor4, tags: ["ESP32", "MQTT", "Edge"] },
];

const TECH_STACK = [
  { name: "Python", icon: <FaPython />, color: "#3776AB" },
  { name: "TensorFlow", icon: <FaBrain />, color: "#FF6F00" },
  { name: "PyTorch", icon: <FaFire />, color: "#EE4C2C" },
  { name: "Arduino", icon: <FaMicrochip />, color: "#00979D" },
  { name: "Raspberry Pi", icon: <FaLaptopCode />, color: "#C51A4A" },
  { name: "ROS", icon: <FaRobot />, color: "#22314E" },
  { name: "OpenCV", icon: <FaCamera />, color: "#5C3EE8" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { name: "Linux", icon: <FaTerminal />, color: "#FCC624" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "MQTT", icon: <FaNetworkWired />, color: "#660066" },
];

const STUDY_MATERIAL = [
  { id: 1, subject: "Python", title: "Variables & Data Types", type: "PDF", size: "2.4 MB", date: "Mar 12, 2025", icon: <FaBookOpen />, accent: "#3776AB" },
  { id: 2, subject: "Robotics", title: "Arduino Servo Control", type: "Video", size: "18 min", date: "Mar 10, 2025", icon: <FaVideo />, accent: "#EF4444" },
  { id: 3, subject: "Drone", title: "Flight Safety Checklist", type: "PDF", size: "1.1 MB", date: "Mar 08, 2025", icon: <FaShieldAlt />, accent: "#F97316" },
  { id: 4, subject: "Generative AI", title: "Prompt Engineering Guide", type: "PDF", size: "3.2 MB", date: "Mar 05, 2025", icon: <FaBrain />, accent: "#A855F7" },
  { id: 5, subject: "Python", title: "OOP Practice Notebook", type: "Notebook", size: "540 KB", date: "Mar 02, 2025", icon: <FaLaptopCode />, accent: "#3776AB" },
  { id: 6, subject: "Drone", title: "Photogrammetry Basics", type: "Video", size: "26 min", date: "Feb 28, 2025", icon: <FaVideo />, accent: "#F97316" },
];

const BLOG_POSTS = [
  { id: 1, img: IMG.blog1, tag: "AI Trends", title: "Why Generative AI Is the Career Skill of 2025", desc: "From prompt engineering to building RAG systems — here's how to break into the fastest-growing AI field.", date: "Mar 15, 2025", author: "Kumar Sir", readTime: "6 min read",
    content: [
      "Generative AI has moved from research labs to mainstream products in under two years. Companies across finance, healthcare, media and education are hiring engineers who can build with large language models.",
      "At EduRatnam, our Generative AI track starts with prompt engineering fundamentals and builds up to retrieval-augmented generation (RAG) pipelines, vector databases, and custom AI assistants.",
      "The best part: you don't need a PhD. A solid foundation in Python, curiosity, and hands-on project work is enough to land your first role.",
      "We pair every student with a mentor and real client-style projects so you graduate with a portfolio, not just a certificate.",
    ] },
  { id: 2, img: IMG.blog2, tag: "Robotics", title: "Build Your First Autonomous Robot in 30 Days", desc: "A step-by-step roadmap from Arduino basics to a self-driving bot — with project files included.", date: "Mar 08, 2025", author: "Kumar Sir", readTime: "5 min read",
    content: [
      "Building your first autonomous robot is one of the most satisfying experiences in tech. The good news: you can go from zero to a working bot in about a month.",
      "Weeks 1–2: Learn Arduino, sensors (ultrasonic, IR), and motor drivers. Weeks 3–4: Add a microcontroller with Wi-Fi (ESP32) and implement obstacle avoidance and line following.",
      "At EduRatnam, students build and test their bots in our lab, with mentors guiding every step.",
      "Final project: a bot that navigates a maze, detects obstacles, and streams sensor data to a cloud dashboard.",
    ] },
  { id: 3, img: IMG.blog3, tag: "Drone Tech", title: "DGCA Drone Rules 2025: What Every Pilot Must Know", desc: "A plain-English breakdown of India's drone regulations, licences, and safe flying zones.", date: "Feb 28, 2025", author: "Kumar Sir", readTime: "7 min read",
    content: [
      "India's drone ecosystem is booming, and the DGCA has simplified rules significantly — but every pilot must still know the basics.",
      "Key points: drones under 250g need no licence for recreational use; commercial operations require a Remote Pilot Certificate; no-fly zones include airports, military areas, and eco-sensitive zones.",
      "Our Drone Technology course includes DGCA-aligned safety training and hands-on flight hours.",
      "Stay updated on the Digital Sky platform for airspace maps and permission requests before every commercial flight.",
    ] },
];

/* ============================================================
   🎨 GLOBAL STYLES
   ============================================================ */
function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap');
      * { font-family: 'Outfit', system-ui, sans-serif; }
      h1,h2,h3,h4,h5,h6, .font-display { font-family: 'Space Grotesk', system-ui, sans-serif; letter-spacing: -0.02em; }
      .mono { font-family: 'JetBrains Mono', monospace; }

      @keyframes marqueeScroll { 0% { transform: translate3d(0,0,0); } 100% { transform: translate3d(-50%,0,0); } }
      @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-18px); } }
      @keyframes floatSlow { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(16px,-20px) scale(1.06); } }
      @keyframes aurora { 0%,100% { transform: translate(0,0) rotate(0deg); } 33% { transform: translate(40px,-40px) rotate(120deg); } 66% { transform: translate(-30px,30px) rotate(240deg); } }
      @keyframes pulseGlow { 0%,100% { box-shadow: 0 0 20px 0 rgba(255,46,196,0.5); } 50% { box-shadow: 0 0 40px 10px rgba(255,46,196,0); } }
      @keyframes pulseGlowCyan { 0%,100% { box-shadow: 0 0 20px 0 rgba(0,229,255,0.5); } 50% { box-shadow: 0 0 40px 10px rgba(0,229,255,0); } }
      @keyframes pulseGlowGreen { 0%,100% { box-shadow: 0 0 20px 0 rgba(37,211,102,0.5); } 50% { box-shadow: 0 0 40px 10px rgba(37,211,102,0); } }
      @keyframes typing { 0%,60%,100% { transform: translateY(0); opacity: .4; } 30% { transform: translateY(-6px); opacity: 1; } }
      @keyframes shine { 0% { transform: translateX(-100%); } 60%,100% { transform: translateX(100%); } }
      @keyframes rotateSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
      @keyframes scanline { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }

      .marquee-track { display: flex; width: max-content; animation: marqueeScroll 42s linear infinite; will-change: transform; }
      .marquee-track:hover { animation-play-state: paused; }
      .marquee-item { flex-shrink: 0; padding: 0 2.5rem; }
      a, button, [role="button"], select, summary { cursor: pointer; }

      .anim-float { animation: float 6s ease-in-out infinite; }
      .anim-float-slow { animation: floatSlow 9s ease-in-out infinite; }
      .anim-aurora { animation: aurora 20s ease-in-out infinite; }
      .anim-pulse-neon { animation: pulseGlow 2.5s ease-out infinite; }
      .anim-pulse-cyan { animation: pulseGlowCyan 2.5s ease-out infinite; }
      .anim-pulse-green { animation: pulseGlowGreen 2.5s ease-out infinite; }
      .anim-rotate-slow { animation: rotateSlow 40s linear infinite; }
      .anim-blink { animation: blink 1.5s ease-in-out infinite; }

      .dot-typing span { display: inline-block; width: 6px; height: 6px; margin: 0 1.5px; border-radius: 50%; background: currentColor; animation: typing 1.2s infinite; }
      .dot-typing span:nth-child(2) { animation-delay: .2s; }
      .dot-typing span:nth-child(3) { animation-delay: .4s; }

      .grid-bg { background-image: linear-gradient(rgba(0,229,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.08) 1px, transparent 1px); background-size: 50px 50px; }
      .grid-bg-dark { background-image: linear-gradient(rgba(255,46,196,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,46,196,0.06) 1px, transparent 1px); background-size: 50px 50px; }
      .grid-bg-light { background-image: linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px); background-size: 50px 50px; }

      .glass { background: rgba(255,255,255,0.04); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid rgba(255,255,255,0.08); }
      .glass-neon { background: rgba(10,10,31,0.6); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid rgba(0,229,255,0.2); }

      .gradient-cyan-magenta { background: linear-gradient(135deg, #00E5FF 0%, #FF2EC4 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent; }
      .gradient-lime-cyan { background: linear-gradient(135deg, #B4FF3A 0%, #00E5FF 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent; }

      .btn-shine { position: relative; overflow: hidden; }
      .btn-shine::after { content: ''; position: absolute; inset: 0; background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%); transform: translateX(-100%); animation: shine 3.5s ease-in-out infinite; }

      .card-lift { transition: transform .4s cubic-bezier(.2,.8,.2,1), box-shadow .4s; }
      .card-lift:hover { transform: translateY(-10px); }

      .scan-line { position: absolute; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, #00E5FF, transparent); animation: scanline 4s linear infinite; }

      .scrollbar-hide::-webkit-scrollbar { display: none; }
      .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    `}</style>
  );
}

/* ============================================================
   🎬 HOOKS
   ============================================================ */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.05 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "", direction = "up" }) {
  const [ref, visible] = useReveal();
  const dir = { up: "translate-y-10", left: "-translate-x-10", right: "translate-x-10", zoom: "scale-90" }[direction];
  return (
    <div ref={ref}
      className={`${className} transition-all duration-700 ease-out ${visible ? "opacity-100 translate-x-0 translate-y-0 scale-100" : `opacity-0 ${dir}`}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Counter({ end, duration = 1800, suffix = "", decimals = 0 }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useReveal();
  useEffect(() => {
    if (!visible) return;
    let s = 0;
    const step = end / (duration / 16);
    const t = setInterval(() => {
      s += step;
      if (s >= end) { setCount(end); clearInterval(t); }
      else setCount(decimals ? parseFloat(s.toFixed(decimals)) : Math.floor(s));
    }, 16);
    return () => clearInterval(t);
  }, [visible, end, duration, decimals]);
  return <span ref={ref}>{decimals ? count.toFixed(decimals) : count}{suffix}</span>;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [pathname]);
  return null;
}

/* ============================================================
   🔮 AURORA BG
   ============================================================ */
function AuroraBG({ variant = "default" }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className={`absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full blur-3xl anim-aurora opacity-30 ${
        variant === "cyan" ? "bg-[#00E5FF]" : variant === "magenta" ? "bg-[#FF2EC4]" : "bg-gradient-to-br from-[#00E5FF] to-[#8B5CF6]"
      }`}></div>
      <div className={`absolute -bottom-1/2 -right-1/4 w-[700px] h-[700px] rounded-full blur-3xl anim-aurora opacity-25 ${
        variant === "cyan" ? "bg-[#8B5CF6]" : variant === "magenta" ? "bg-[#00E5FF]" : "bg-gradient-to-br from-[#FF2EC4] to-[#FF7A00]"
      }`} style={{ animationDelay: "-8s" }}></div>
    </div>
  );
}

/* ============================================================
   🟠 MARQUEE (no dots)
   ============================================================ */
function WelcomeMarquee() {
  const items = [
    "🚀 Admissions Open 2025",
    "🤖 1200+ Students Trained",
    "🎓 Certified Courses",
    "📞 Limited Seats",
    "🛸 DGCA-Aligned Drone Training",
    "🧠 Generative AI • Deep Learning • IoT",
    "⭐ 4.9/5 Average Rating",
    "💼 Job Assistance Available",
  ];
  return (
    <div className="bg-[#0A0A1F] border-b border-[#00E5FF]/20 py-2 overflow-hidden relative">
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="marquee-track relative">
        {[0, 1].map((g) => (
          <div key={g} className="flex items-center">
            {items.map((t, i) => (
              <span key={`${g}-${i}`} className="marquee-item text-xs md:text-sm font-medium tracking-wide text-white/70">
                {t}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   🖼️ LOGO
   ============================================================ */
function Logo({ light = false, size = "md" }) {
  const iconSize = size === "lg" ? "w-12 h-12" : "w-10 h-10";
  const textSize = size === "lg" ? "text-xl" : "text-lg";
  return (
    <div className="flex items-center gap-2.5">
      <div className={`${iconSize} rounded-xl bg-gradient-to-br from-[#00E5FF] to-[#FF2EC4] flex items-center justify-center text-[#050510] shadow-lg relative overflow-hidden`}>
        <FaAtom size={size === "lg" ? 22 : 18} className="relative z-10 anim-rotate-slow" />
      </div>
      <div className="leading-tight">
        <p className={`font-extrabold ${textSize} font-display ${light ? "text-white" : "text-[#050510]"}`}>EduRatnam</p>
        <p className="text-[9px] tracking-[0.25em] text-[#00E5FF] font-bold mono">AI / ROBOTICS / DRONES</p>
      </div>
    </div>
  );
}

/* ============================================================
   🏛️ TRUST BADGE (Government of Bihar)
   ============================================================ */
function TrustBadge({ variant = "dark" }) {
  const isDark = variant === "dark";
  return (
    <div className={`inline-flex items-center gap-2 ${isDark ? "bg-[#B4FF3A]/10 border-[#B4FF3A]/40" : "bg-[#B4FF3A]/20 border-[#B4FF3A]/50"} border rounded-full px-3.5 py-1.5 backdrop-blur`}>
      <FaLandmark className={`${isDark ? "text-[#B4FF3A]" : "text-[#1A1530]"}`} size={11} />
      <span className={`text-[10px] font-bold mono uppercase tracking-wider ${isDark ? "text-[#B4FF3A]" : "text-[#1A1530]"}`}>
        Recognised by Government of Bihar
      </span>
    </div>
  );
}

/* ============================================================
   🟣 NAVBAR
   ============================================================ */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/courses", label: "Courses" },
    { to: "/robotics", label: "Robotics" },
    { to: "/drone", label: "Drone" },
    { to: "/gallery", label: "Gallery" },
    { to: "/blog", label: "Blog" },
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50">
      <WelcomeMarquee />
      <div className={`transition-all duration-300 ${scrolled ? "bg-[#050510]/90 backdrop-blur-2xl border-b border-[#00E5FF]/20" : "bg-[#050510] border-b border-white/5"}`}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-2">
          <Link to="/" className="shrink-0"><Logo light /></Link>
          <nav className="hidden lg:flex items-center gap-0.5">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg font-medium transition-all text-sm relative ${isActive ? "text-[#00E5FF]" : "text-white/60 hover:text-white"}`}>
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-[#00E5FF] to-[#FF2EC4] rounded-full"></span>}
                  </>
                )}
              </NavLink>
            ))}
            <div className="w-px h-6 bg-white/10 mx-2" />
            <Link to="/dashboard" className="inline-flex items-center gap-1.5 border border-[#00E5FF]/40 text-[#00E5FF] hover:bg-[#00E5FF]/10 font-medium px-4 py-2 rounded-lg transition text-sm">
              <FaGraduationCap size={13} /> Login
            </Link>
            <Link to="/contact" className="ml-1 inline-flex items-center gap-1.5 bg-gradient-to-r from-[#00E5FF] to-[#FF2EC4] text-[#050510] font-bold px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-[#FF2EC4]/30 transition text-sm btn-shine">
              Enroll <FaArrowRight size={11} />
            </Link>
          </nav>
          <button className="lg:hidden text-white text-2xl p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-[#0A0A1F] border-t border-[#00E5FF]/20 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col p-4 gap-1.5">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl font-medium text-sm ${isActive ? "bg-gradient-to-r from-[#00E5FF]/20 to-[#FF2EC4]/20 text-[#00E5FF] border border-[#00E5FF]/30" : "text-white/70 hover:bg-white/5"}`}>
                {l.label}
              </NavLink>
            ))}
            <Link to="/dashboard" onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-2 border border-[#00E5FF]/40 text-[#00E5FF] font-medium px-5 py-3 rounded-xl text-sm">
              <FaGraduationCap size={14} /> Student Login
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00E5FF] to-[#FF2EC4] text-[#050510] font-bold px-5 py-3 rounded-xl shadow-lg text-sm">
              Enroll Now <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

/* ============================================================
   📞 FLOATING
   ============================================================ */
function FloatingButtons() {
  const waMsg = encodeURIComponent("Hi EduRatnam! I'd like to know more about AI, Robotics & Drone Technology courses.");
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
      <a href={`tel:${SOCIAL.phone}`} aria-label="Call"
        className="group relative bg-[#050510] border-2 border-[#00E5FF] text-[#00E5FF] w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-all anim-pulse-cyan">
        <FaPhone size={18} />
        <span className="absolute right-full mr-3 bg-[#050510] border border-[#00E5FF]/40 text-[#00E5FF] text-xs font-semibold px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">Call Us</span>
      </a>
      <a href={`https://wa.me/${SOCIAL.whatsapp}?text=${waMsg}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
        className="group relative bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-all anim-pulse-green">
        <FaWhatsapp size={30} />
        <span className="absolute inline-flex h-full w-full rounded-2xl bg-[#25D366] opacity-30 animate-ping"></span>
        <span className="absolute right-full mr-3 bg-[#050510] border border-[#25D366]/40 text-white text-xs font-semibold px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">Chat on WhatsApp</span>
      </a>
    </div>
  );
}

/* ============================================================
   🤖 AI CHATBOT
   ============================================================ */
function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! 👋 I'm EduBot — your AI learning assistant. Ask me about courses, fees, or study material. Type 'teacher' to connect with a mentor." },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, open, typing]);

  const botReply = (q) => {
    const t = q.toLowerCase();
    if (t.includes("teacher") || t.includes("mentor") || t.includes("human")) return "Connecting you to a teacher 👨‍🏫 — a mentor will respond within 10 minutes.";
    if (t.includes("fee") || t.includes("cost") || t.includes("price")) return "Course fees: Python ₹6,999 • Generative AI ₹9,999 • Robotics ₹12,999 • Drone ₹14,999. EMI available.";
    if (t.includes("drone")) return "Drone Technology covers UAV components, DGCA rules, aerial mapping & autonomous missions. 10 weeks, ₹14,999.";
    if (t.includes("robot")) return "Robotics is a 12-week hands-on track: sensors, Arduino, Raspberry Pi, ROS, autonomous bot. ₹12,999.";
    if (t.includes("ai") || t.includes("generative")) return "Generative AI (10 weeks) and Deep Learning (12 weeks) both start with Python.";
    if (t.includes("bihar") || t.includes("government")) return "🏛️ EduRatnam is recognised by the Government of Bihar and incubated at IIT Patna. We've delivered pilot projects in 3 Bihar districts.";
    if (t.includes("iit")) return "🎓 We're incubated at IIT Patna — one of India's premier technology institutes.";
    if (t.includes("material") || t.includes("notes")) return "All study material lives in your Student Dashboard → Study Material tab.";
    if (t.includes("enrol") || t.includes("join")) return "Enrol via the Contact page or visit our Bangalore centre.";
    return "Thanks! Type 'teacher' for human support, or explore the Courses page.";
  };

  const send = (text) => {
    const msg = text ?? input;
    if (!msg.trim()) return;
    setMessages((m) => [...m, { from: "user", text: msg }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { from: "bot", text: botReply(msg) }]);
    }, 900);
  };

  const quick = ["Course fees?", "Bihar recognition?", "Talk to teacher", "Study material"];

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] bg-[#0A0A1F] border border-[#00E5FF]/30 rounded-3xl shadow-2xl overflow-hidden flex flex-col" style={{ height: "500px", boxShadow: "0 0 60px rgba(0,229,255,0.2)" }}>
          <div className="bg-gradient-to-r from-[#00E5FF]/20 via-[#8B5CF6]/20 to-[#FF2EC4]/20 border-b border-[#00E5FF]/30 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#00E5FF] to-[#FF2EC4] flex items-center justify-center relative">
                <FaRobot size={20} className="text-[#050510]" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#B4FF3A] border-2 border-[#0A0A1F] anim-blink"></span>
              </div>
              <div>
                <p className="font-bold text-sm font-display">EduBot Assistant</p>
                <p className="text-[11px] text-[#00E5FF] mono">ONLINE • Instant replies</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white p-1" aria-label="Close"><FaTimes /></button>
          </div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  m.from === "user" ? "bg-gradient-to-br from-[#00E5FF] to-[#8B5CF6] text-[#050510] rounded-br-md font-medium" : "bg-white/5 text-white/85 border border-white/10 rounded-bl-md"
                }`}>{m.text}</div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-md px-4 py-3 text-[#00E5FF] dot-typing">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
          </div>
          <div className="px-3 pt-2 flex gap-1.5 flex-wrap border-t border-white/5 bg-[#050510]">
            {quick.map((q) => (
              <button key={q} onClick={() => send(q)} className="text-[11px] font-semibold bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] px-2.5 py-1 rounded-full hover:bg-[#00E5FF]/20 transition">{q}</button>
            ))}
          </div>
          <div className="p-3 flex items-center gap-2 bg-[#050510]">
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask anything…" className="flex-1 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 focus:border-[#00E5FF] text-white placeholder:text-white/30 outline-none text-sm" />
            <button onClick={() => send()} className="bg-gradient-to-r from-[#00E5FF] to-[#FF2EC4] text-[#050510] w-10 h-10 rounded-full flex items-center justify-center shrink-0 hover:shadow-lg transition" aria-label="Send">
              <FaPaperPlane size={13} />
            </button>
          </div>
        </div>
      )}
      <button onClick={() => setOpen(!open)} aria-label="AI Chat"
        className="fixed bottom-6 left-6 z-50 bg-[#050510] border-2 border-[#FF2EC4] text-[#FF2EC4] w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-all anim-pulse-neon">
        {open ? <FaTimes size={22} /> : <FaComments size={24} />}
        {!open && <span className="absolute -top-2 -right-2 bg-[#B4FF3A] text-[#050510] text-[9px] font-bold px-1.5 py-0.5 rounded-full mono">AI</span>}
      </button>
    </>
  );
}

/* ============================================================
   🦶 FOOTER
   ============================================================ */
function Footer() {
  return (
    <footer className="bg-[#050510] text-white relative overflow-hidden border-t border-[#00E5FF]/20">
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <AuroraBG variant="cyan" />
      <div className="relative max-w-7xl mx-auto px-6 pt-12 pb-8">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#B4FF3A]/10 border border-[#B4FF3A]/40 rounded-full px-4 py-2">
            <FaLandmark className="text-[#B4FF3A]" size={12} />
            <span className="text-[11px] font-bold mono uppercase tracking-wider text-[#B4FF3A]">Recognised by Government of Bihar</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-[#00E5FF]/10 border border-[#00E5FF]/40 rounded-full px-4 py-2">
            <FaUniversity className="text-[#00E5FF]" size={12} />
            <span className="text-[11px] font-bold mono uppercase tracking-wider text-[#00E5FF]">Incubated at IIT Patna</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-[#FF2EC4]/10 border border-[#FF2EC4]/40 rounded-full px-4 py-2">
            <FaMapMarkedAlt className="text-[#FF2EC4]" size={12} />
            <span className="text-[11px] font-bold mono uppercase tracking-wider text-[#FF2EC4]">Pilot Projects in 3 Bihar Districts</span>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <Logo light size="lg" />
            <p className="text-sm text-white/50 leading-relaxed mt-5 max-w-xs">
              India's hands-on training hub for AI, Robotics and Drone Technology — recognised by the Government of Bihar.
            </p>
            <div className="flex gap-2 mt-6">
              {[
                { icon: <FaFacebookF size={13} />, href: SOCIAL.facebook, hover: "hover:bg-[#1877F2]" },
                { icon: <FaInstagram size={13} />, href: SOCIAL.instagram, hover: "hover:bg-[#E4405F]" },
                { icon: <FaYoutube size={13} />, href: SOCIAL.youtube, hover: "hover:bg-[#FF0000]" },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-lg bg-white/5 border border-white/10 ${s.hover} hover:border-transparent hover:scale-110 flex items-center justify-center transition`}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-sm mono text-[#00E5FF] mb-4 uppercase tracking-widest">Explore</h4>
            <ul className="space-y-2.5 text-white/50 text-sm">
              {[["/", "Home"], ["/courses", "All Courses"], ["/robotics", "Robotics Training"], ["/drone", "Drone Technology"], ["/gallery", "Gallery"], ["/blog", "Blog"], ["/faq", "FAQ"], ["/contact", "Contact"]].map(([to, label]) => (
                <li key={to}><Link to={to} className="hover:text-[#00E5FF] transition flex items-center gap-1.5"><FaLongArrowAltRight size={9} className="opacity-40" /> {label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mono text-[#FF2EC4] mb-4 uppercase tracking-widest">Courses</h4>
            <ul className="space-y-2.5 text-white/50 text-sm">
              {COURSES.map((c) => (
                <li key={c.id}><Link to={`/courses/${c.slug}`} className="hover:text-[#FF2EC4] transition flex items-center gap-1.5"><FaLongArrowAltRight size={9} className="opacity-40" /> {c.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mono text-[#B4FF3A] mb-4 uppercase tracking-widest">Reach Us</h4>
            <ul className="space-y-3 text-white/50 text-sm">
              <li className="flex gap-2.5"><FaMapMarkerAlt className="mt-0.5 text-[#B4FF3A] shrink-0" size={12} /><span>{SOCIAL.address}</span></li>
              <li className="flex gap-2.5"><FaPhoneAlt className="mt-0.5 text-[#B4FF3A] shrink-0" size={12} /><a href={`tel:${SOCIAL.phone}`} className="hover:text-white">{SOCIAL.phoneDisplay}</a></li>
              <li className="flex gap-2.5"><FaEnvelope className="mt-0.5 text-[#B4FF3A] shrink-0" size={12} /><a href={`mailto:${SOCIAL.email}`} className="hover:text-white break-all">{SOCIAL.email}</a></li>
              <li className="flex gap-2.5"><FaGraduationCap className="mt-0.5 text-[#B4FF3A] shrink-0" size={12} /><Link to="/dashboard" className="hover:text-white">Student Dashboard</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/5 py-6 text-center text-xs text-white/30 mono">
        © 2025 EDURATNAM <span className="text-[#00E5FF]">●</span> AI / ROBOTICS / DRONES <span className="text-[#FF2EC4]">●</span> ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}

/* ============================================================
   🎨 PAGE HERO
   ============================================================ */
function PageHero({ title, subtitle, accent = "cyan" }) {
  return (
    <section className="bg-[#050510] text-white py-24 text-center relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40"></div>
      <AuroraBG variant={accent} />
      <div className="scan-line" style={{ top: "20%" }}></div>
      <Reveal className="relative max-w-3xl mx-auto px-6">
        <div className="flex justify-center mb-6"><TrustBadge /></div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 font-display">
          <span className="gradient-cyan-magenta">{title}</span>
        </h1>
        <p className="text-lg md:text-xl text-white/60">{subtitle}</p>
      </Reveal>
    </section>
  );
}

/* ============================================================
   📞 CONTACT FORM
   ============================================================ */
function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", course: "Python Programming", message: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi EduRatnam! I'd like to enquire.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0ACourse: ${form.course}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${SOCIAL.whatsapp}?text=${text}`, "_blank");
  };
  return (
    <form onSubmit={handleSubmit} className="bg-[#0A0A1F] border border-[#00E5FF]/20 rounded-3xl p-7 space-y-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF2EC4]/10 rounded-full blur-3xl"></div>
      <div className="relative">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-[#B4FF3A]"></span>
          <span className="text-xs mono text-[#00E5FF] font-bold">CONTACT_FORM</span>
        </div>
        <h2 className="text-2xl font-extrabold text-white font-display mb-1">Talk To Our Expert</h2>
        <p className="text-sm text-white/40">We reply within 10 minutes.</p>
      </div>
      {[
        { key: "name", label: "Full Name", type: "text", placeholder: "e.g., Aarav Sharma" },
        { key: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210" },
      ].map((f) => (
        <div key={f.key} className="relative">
          <label className="block text-xs mono text-[#00E5FF] mb-1.5 uppercase tracking-wider">{f.label}</label>
          <input required type={f.type} value={form[f.key]} placeholder={f.placeholder}
            onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#00E5FF] text-white placeholder:text-white/30 outline-none transition" />
        </div>
      ))}
      <div className="relative">
        <label className="block text-xs mono text-[#00E5FF] mb-1.5 uppercase tracking-wider">Course Interested In</label>
        <select value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#00E5FF] text-white outline-none transition">
          {COURSES.map((c) => <option key={c.id} className="bg-[#0A0A1F]">{c.name}</option>)}
        </select>
      </div>
      <div className="relative">
        <label className="block text-xs mono text-[#00E5FF] mb-1.5 uppercase tracking-wider">Message</label>
        <textarea rows="3" value={form.message} placeholder="Tell us what you're looking for…"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#00E5FF] text-white placeholder:text-white/30 outline-none transition resize-none"></textarea>
      </div>
      <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00E5FF] to-[#FF2EC4] text-[#050510] font-bold px-6 py-3.5 rounded-xl hover:shadow-lg hover:shadow-[#FF2EC4]/30 transition btn-shine">
        Send via WhatsApp <FaWhatsapp size={16} />
      </button>
    </form>
  );
}

/* ============================================================
   ❓ FAQ — WHITE BACKGROUND
   ============================================================ */
function FAQSection() {
  const faqs = [
    { q: "What courses do you offer?", a: "We offer a diverse range of courses spanning AI, Robotics, Drone Technology, Python, Generative AI, Deep Learning, Machine Learning and IoT." },
    { q: "Is EduRatnam government recognised?", a: "Yes! EduRatnam is recognised by the Government of Bihar, incubated at IIT Patna, and has delivered pilot projects with Government of Bihar's schools across 3 districts." },
    { q: "How do I enroll?", a: "Enrollment is simple! Visit our website, choose your desired course, and follow the easy registration process. Schools can also enrol entire batches through the Student Dashboard." },
    { q: "How long are the courses?", a: "Course durations vary from 8 to 12 weeks. Check each course's detail page for specific duration and level information." },
    { q: "What do I get after enrolling?", a: "Once enrolled, you gain access to our online learning platform (Student Dashboard) where you'll find all course materials, videos, notebooks and mentor support." },
    { q: "Is there teacher support?", a: "Absolutely. You can chat with our AI assistant 24/7, and request a teacher response anytime — mentors reply within 10 minutes during working hours." },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-light opacity-60"></div>
      <div className="relative max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-[#FF2EC4]/10 border border-[#FF2EC4]/30 text-[#FF2EC4] font-bold px-4 py-2 rounded-full text-xs mono mb-4 uppercase tracking-wider">// FAQ</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1530] font-display mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Quick answers about our courses, enrollment, support services, refunds and more.</p>
          </div>
        </Reveal>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className={`rounded-2xl border transition-all overflow-hidden ${open === i ? "bg-gradient-to-r from-[#00E5FF]/10 to-[#FF2EC4]/10 border-[#00E5FF]/40 shadow-lg" : "bg-gray-50 border-gray-200 hover:border-gray-300"}`}>
                <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="font-bold text-base text-[#1A1530] pr-4">{f.q}</span>
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all ${open === i ? "bg-gradient-to-br from-[#00E5FF] to-[#FF2EC4] text-white rotate-180" : "bg-white border border-gray-200 text-[#1A1530]"}`}>
                    {open === i ? <FaMinus size={11} /> : <FaPlus size={11} />}
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

/* ============================================================
   💬 TESTIMONIALS — WHITE BACKGROUND
   ============================================================ */
function Testimonials() {
  const reviews = [
    { name: "Bharti Kumari", role: "AI Foundations Graduate", text: "One of the best AI and Robotics training providers. Almost all classes are practical, hands-on — thank you EduRatnam!", img: IMG.t1 },
    { name: "Sanjeet Ranjan", role: "Robotics Student", text: "I highly recommend this course for anyone interested in a career in robotics and coding. The lessons are well-structured and the practical applications make it invaluable.", img: IMG.t2 },
    { name: "Aryan Raj", role: "Drone Technology Student", text: "EduRatnam is the best place to join advanced AI courses — online or offline. Kumar sir taught each topic clearly and supported us in daily assignments.", img: IMG.t3 },
    { name: "Anumita", role: "Generative AI Learner", text: "AI and drone skills can help you grow and understand business faster and better. The courses are excellent and very current.", img: IMG.t4 },
    { name: "Rohit Ranjan", role: "Python & ML Student", text: "I thoroughly enjoyed the Python and ML classes! The content was insightful, the instructor engaging, and the practical exercises helped me apply concepts effectively.", img: IMG.t5 },
  ];
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-light opacity-60"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#00E5FF]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#FF2EC4]/5 rounded-full blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] font-bold px-4 py-2 rounded-full text-xs mono mb-4 uppercase tracking-wider">// TESTIMONIALS</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1530] font-display mb-4">Loved by Learners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Real feedback from students who built careers with EduRatnam.</p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((r, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="bg-white border border-gray-200 rounded-3xl p-7 h-full flex flex-col hover:border-[#00E5FF]/50 hover:shadow-xl transition group relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00E5FF]/5 rounded-full blur-2xl group-hover:bg-[#FF2EC4]/10 transition"></div>
                <FaQuoteLeft className="text-2xl text-[#00E5FF] mb-4 relative" />
                <p className="text-gray-700 leading-relaxed mb-6 flex-1 relative">{r.text}</p>
                <div className="flex items-center gap-3 pt-5 border-t border-gray-100 relative">
                  <img src={r.img} alt={r.name} className="w-11 h-11 rounded-lg object-cover border-2 border-[#00E5FF]" />
                  <div>
                    <p className="font-bold text-[#1A1530] text-sm">{r.name}</p>
                    <p className="text-[10px] text-gray-500 mono">{r.role}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5 text-[#FFB800]">{[...Array(5)].map((_, j) => <FaStar key={j} size={10} />)}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {reviews.slice(3).map((r, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="bg-white border border-gray-200 rounded-3xl p-7 h-full flex flex-col hover:border-[#FF2EC4]/50 hover:shadow-xl transition group relative overflow-hidden">
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#FF2EC4]/5 rounded-full blur-2xl group-hover:bg-[#FF2EC4]/10 transition"></div>
                <FaQuoteLeft className="text-2xl text-[#FF2EC4] mb-4 relative" />
                <p className="text-gray-700 leading-relaxed mb-6 flex-1 relative">{r.text}</p>
                <div className="flex items-center gap-3 pt-5 border-t border-gray-100 relative">
                  <img src={r.img} alt={r.name} className="w-11 h-11 rounded-lg object-cover border-2 border-[#FF2EC4]" />
                  <div>
                    <p className="font-bold text-[#1A1530] text-sm">{r.name}</p>
                    <p className="text-[10px] text-gray-500 mono">{r.role}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5 text-[#FFB800]">{[...Array(5)].map((_, j) => <FaStar key={j} size={10} />)}</div>
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
   📚 COURSE CARD
   ============================================================ */
function CourseCard({ c }) {
  return (
    <div className="bg-[#0A0A1F] border border-white/10 hover:border-[#00E5FF]/50 rounded-3xl overflow-hidden h-full flex flex-col group card-lift transition-all duration-300 relative">
      <div className="relative h-48 overflow-hidden">
        <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A1F] via-[#0A0A1F]/50 to-transparent"></div>
        <span className="absolute top-4 left-4 text-[9px] font-bold px-2.5 py-1 rounded-full bg-[#050510] border uppercase tracking-wider mono" style={{ borderColor: c.accent, color: c.accent }}>{c.level}</span>
        <span className="absolute top-4 right-4 bg-white/95 text-[#050510] text-[9px] font-bold px-2 py-1 rounded mono uppercase tracking-wider">{c.badge}</span>
        <div className="absolute -bottom-6 left-4 w-12 h-12 rounded-xl flex items-center justify-center text-[#050510] shadow-xl" style={{ background: `linear-gradient(135deg, ${c.accent}, ${c.accentTo})` }}>{c.icon}</div>
      </div>
      <div className="p-5 pt-8 flex flex-col flex-1">
        <h3 className="font-bold text-lg text-white font-display mb-1 group-hover:text-[#00E5FF] transition">{c.name}</h3>
        <p className="text-[11px] mb-3 font-medium" style={{ color: c.accentTo }}>{c.tagline}</p>
        <p className="text-white/50 text-xs mb-4 flex-1 line-clamp-3">{c.desc}</p>
        <div className="flex items-center justify-between text-[10px] text-white/40 mono mb-4 uppercase tracking-wider">
          <span className="flex items-center gap-1"><FaRegClock /> {c.duration}</span>
          <span className="flex items-center gap-1"><FaBolt /> {c.price}</span>
        </div>
        <Link to={`/courses/${c.slug}`} className="inline-flex items-center justify-between w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00E5FF]/40 text-white font-semibold px-4 py-2.5 rounded-xl transition text-xs group-hover:gap-3">
          <span>View Course</span><FaArrowRight size={10} />
        </Link>
      </div>
    </div>
  );
}

/* ============================================================
   🏛️ TRUST BAND — Government recognition
   ============================================================ */
function TrustBand() {
  const items = [
    { icon: <FaLandmark />, title: "Recognised by Government of Bihar", desc: "Officially recognised education provider", color: "#B4FF3A" },
    { icon: <FaUniversity />, title: "Incubated at IIT Patna", desc: "Backed by India's premier tech institute", color: "#00E5FF" },
    { icon: <FaMapMarkedAlt />, title: "Pilot Projects in 3 Bihar Districts", desc: "Deployed in Government of Bihar's schools", color: "#FF2EC4" },
  ];
  return (
    <section className="bg-[#0A0A1F] py-16 relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 grid-bg-dark opacity-30"></div>
      <AuroraBG variant="cyan" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 100} direction="zoom">
              <div className="bg-[#050510] border border-white/10 hover:border-white/30 rounded-2xl p-6 h-full group relative overflow-hidden card-lift transition">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition" style={{ background: t.color }}></div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 relative group-hover:scale-110 group-hover:rotate-6 transition"
                  style={{ background: `${t.color}15`, color: t.color, border: `1px solid ${t.color}40` }}>
                  {t.icon}
                </div>
                <h3 className="font-bold text-base mb-1.5 text-white font-display relative leading-snug">{t.title}</h3>
                <p className="text-white/50 text-sm relative">{t.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   🆕 TECH STACK
   ============================================================ */
function TechStackSection() {
  return (
    <section className="bg-[#050510] py-16 border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-xs mono text-[#00E5FF] uppercase tracking-[0.3em] mb-2">// TOOLS & TECHNOLOGIES</p>
        <h3 className="text-2xl md:text-3xl font-extrabold text-white font-display">Learn the <span className="gradient-lime-cyan">Industry Stack</span></h3>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex gap-4 marquee-track" style={{ animationDuration: "35s" }}>
          {[0, 1].map((g) => (
            <div key={g} className="flex gap-4 shrink-0">
              {TECH_STACK.map((t, i) => (
                <div key={`${g}-${i}`} className="flex items-center gap-2.5 bg-[#0A0A1F] border border-white/10 hover:border-white/30 rounded-xl px-4 py-3 transition group shrink-0">
                  <span className="text-xl group-hover:scale-110 transition" style={{ color: t.color }}>{t.icon}</span>
                  <span className="text-sm font-bold text-white/80 whitespace-nowrap">{t.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   🆕 MENTORS
   ============================================================ */
function MentorsSection() {
  return (
    <section className="bg-[#0A0A1F] py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-30"></div>
      <AuroraBG variant="cyan" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-[#B4FF3A]/10 border border-[#B4FF3A]/30 text-[#B4FF3A] font-bold px-4 py-2 rounded-full text-xs mono mb-4 uppercase tracking-wider">// MENTORS</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-4">Learn From Industry Experts</h2>
            <p className="text-white/50 max-w-2xl mx-auto">Real engineers, real projects — mentors who've deployed AI and robotics in production.</p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {MENTORS.map((m, i) => (
            <Reveal key={m.name} delay={i * 80} direction="zoom">
              <div className="bg-[#050510] border border-white/10 hover:border-[#B4FF3A]/40 rounded-2xl overflow-hidden card-lift transition group relative">
                <div className="relative h-56 overflow-hidden">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent"></div>
                  <span className="absolute top-3 right-3 bg-[#B4FF3A]/20 border border-[#B4FF3A]/40 text-[#B4FF3A] text-[9px] font-bold px-2 py-1 rounded mono">{m.exp}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-base text-white font-display mb-0.5">{m.name}</h3>
                  <p className="text-[11px] text-[#00E5FF] mb-3">{m.role}</p>
                  <div className="flex flex-wrap gap-1">
                    {m.tags.map((t) => (
                      <span key={t} className="text-[9px] bg-white/5 border border-white/10 text-white/60 px-2 py-0.5 rounded mono">{t}</span>
                    ))}
                  </div>
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
   🆕 LEARNING PATH
   ============================================================ */
function LearningPathSection() {
  const steps = [
    { n: "01", icon: <FaClipboardCheck />, title: "Enroll & Assess", desc: "Choose your track. Take a quick skill assessment.", color: "#00E5FF" },
    { n: "02", icon: <FaBookOpen />, title: "Learn Fundamentals", desc: "Python, math, and core concepts — guided by mentors.", color: "#B4FF3A" },
    { n: "03", icon: <FaTools />, title: "Build Projects", desc: "Real robots, drones, and AI apps. 50+ projects per year.", color: "#FF2EC4" },
    { n: "04", icon: <FaTrophy />, title: "Certify & Launch", desc: "Get certified. Portfolio review. Job assistance.", color: "#8B5CF6" },
  ];
  return (
    <section className="bg-[#050510] py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <AuroraBG variant="magenta" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#8B5CF6] font-bold px-4 py-2 rounded-full text-xs mono mb-4 uppercase tracking-wider">// LEARNING PATH</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-4">Your 4-Step Journey</h2>
            <p className="text-white/50 max-w-2xl mx-auto">From beginner to job-ready — a proven path with mentors at every step.</p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#00E5FF] via-[#B4FF3A] via-[#FF2EC4] to-[#8B5CF6] opacity-40"></div>
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100} direction="zoom">
              <div className="relative text-center group">
                <div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center text-3xl mb-4 relative z-10 group-hover:scale-110 group-hover:rotate-6 transition"
                  style={{ background: `${s.color}15`, color: s.color, border: `1px solid ${s.color}40`, boxShadow: `0 0 30px ${s.color}30` }}>
                  {s.icon}
                </div>
                <p className="text-[10px] mono font-bold tracking-widest mb-1" style={{ color: s.color }}>STEP {s.n}</p>
                <h3 className="font-bold text-base text-white mb-2 font-display">{s.title}</h3>
                <p className="text-white/50 text-sm">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   📸 GALLERY SECTION (uses local assets/gallery 1-14)
   ============================================================ */
function GallerySection({ limit }) {
  const pics = limit ? GALLERY.slice(0, limit) : GALLERY;
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i + 1) % pics.length);
      if (e.key === "ArrowLeft") setLightbox((i) => (i - 1 + pics.length) % pics.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, pics.length]);

  return (
    <section className="bg-[#0A0A1F] py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-30"></div>
      <AuroraBG variant="cyan" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-[#B4FF3A]/10 border border-[#B4FF3A]/30 text-[#B4FF3A] font-bold px-4 py-2 rounded-full text-xs mono mb-4 uppercase tracking-wider">
              <FaCamera /> // GALLERY
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-4">Moments of Joy</h2>
            <p className="text-white/50 max-w-2xl mx-auto">Glimpses of laughter, learning and little adventures at EduRatnam. ({GALLERY.length} photos)</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {pics.map((p, i) => (
            <Reveal key={i} delay={(i % 8) * 60} direction="zoom">
              <div onClick={() => setLightbox(i)}
                className="relative overflow-hidden rounded-2xl border border-white/10 hover:border-[#00E5FF]/60 transition-all cursor-pointer group aspect-square">
                <img src={p} alt={`Gallery ${i + 1}`} loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                  <span className="text-white text-xs font-bold flex items-center gap-2 mono"><FaCamera /> VIEW</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        {limit && (
          <Reveal delay={300}>
            <div className="text-center mt-12">
              <Link to="/gallery" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00E5FF] to-[#FF2EC4] text-[#050510] font-bold px-8 py-3.5 rounded-xl shadow-xl hover:shadow-[#00E5FF]/30 hover:-translate-y-1 transition">
                View Full Gallery <FaCamera size={13} />
              </Link>
            </div>
          </Reveal>
        )}
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-[#050510]/98 flex items-center justify-center p-4 cursor-pointer" onClick={() => setLightbox(null)}>
          <button className="absolute top-5 right-5 text-white text-2xl w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition"
            onClick={() => setLightbox(null)} aria-label="Close"><FaTimes /></button>
          <button className="absolute left-4 md:left-8 text-white text-3xl w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition"
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i - 1 + pics.length) % pics.length); }} aria-label="Previous">‹</button>
          <img src={pics[lightbox]} alt={`Gallery ${lightbox + 1}`}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()} />
          <button className="absolute right-4 md:right-8 text-white text-3xl w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition"
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i + 1) % pics.length); }} aria-label="Next">›</button>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-[#0A0A1F] border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-xl mono">
            {lightbox + 1} / {pics.length}
          </div>
        </div>
      )}
    </section>
  );
}

/* ============================================================
   📱 DASHBOARD PREVIEW
   ============================================================ */
function DashboardPreview() {
  return (
    <section className="py-24 bg-[#050510] text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40"></div>
      <AuroraBG variant="cyan" />
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        <Reveal direction="left">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs mono mb-5">
            <FaGraduationCap size={11} className="text-[#00E5FF]" />
            <span className="text-white/60">STUDENT.DASHBOARD</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5 font-display">Your Learning,<br /><span className="gradient-cyan-magenta">All in One Place</span></h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Every enrolled student gets a personal dashboard — school-wise enrolment, class-wise study material, progress tracking, and instant AI support.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "School-wise & class-wise enrolment", "Study material: PDFs, videos, notebooks",
              "AI chatbot + teacher support", "Progress tracking & certificates", "Mobile app experience",
            ].map((p) => (
              <li key={p} className="flex items-center gap-3 text-white/80">
                <span className="w-6 h-6 rounded-md bg-[#B4FF3A]/15 border border-[#B4FF3A]/30 flex items-center justify-center shrink-0">
                  <FaCheckCircle className="text-[#B4FF3A]" size={11} />
                </span>
                <span className="text-sm">{p}</span>
              </li>
            ))}
          </ul>
          <Link to="/dashboard" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00E5FF] to-[#FF2EC4] text-[#050510] font-bold px-7 py-3.5 rounded-xl shadow-xl hover:shadow-[#00E5FF]/40 hover:-translate-y-1 transition btn-shine">
            Open Student Dashboard <FaArrowRight size={13} />
          </Link>
        </Reveal>
        <Reveal delay={150} direction="right">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/20 to-[#FF2EC4]/20 blur-2xl rounded-3xl"></div>
            <div className="relative bg-[#0A0A1F] border border-[#00E5FF]/30 rounded-3xl p-3 max-w-sm mx-auto shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="bg-[#050510] rounded-2xl p-4 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00E5FF] to-[#FF2EC4] flex items-center justify-center text-xs font-bold text-[#050510]">A</div>
                    <div>
                      <p className="text-xs font-bold">Aarav Sharma</p>
                      <p className="text-[9px] text-white/40 mono">GREENWOOD • CLASS 8</p>
                    </div>
                  </div>
                  <FaBell className="text-white/30" size={12} />
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 mb-3">
                  <p className="text-[9px] text-white/40 mono mb-1">CURRENT COURSE</p>
                  <p className="text-xs font-bold">Robotics — Level 2</p>
                  <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="w-2/3 h-1.5 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#FF2EC4]"></div>
                  </div>
                  <p className="text-[9px] text-white/40 mt-1 mono">68% COMPLETE</p>
                </div>
                <div className="space-y-1.5">
                  {[
                    { t: "Arduino Servo Control", i: <FaVideo size={10} />, c: "#00E5FF" },
                    { t: "Python OOP Notes", i: <FaBookOpen size={10} />, c: "#B4FF3A" },
                    { t: "Drone Safety PDF", i: <FaShieldAlt size={10} />, c: "#FF2EC4" },
                  ].map((m) => (
                    <div key={m.t} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-2">
                      <div className="w-6 h-6 rounded flex items-center justify-center shrink-0" style={{ background: `${m.c}20`, color: m.c, border: `1px solid ${m.c}40` }}>{m.i}</div>
                      <p className="text-[10px] font-medium flex-1 truncate">{m.t}</p>
                      <FaDownload className="text-white/20" size={9} />
                    </div>
                  ))}
                </div>
                <div className="mt-3 bg-gradient-to-r from-[#00E5FF]/15 to-[#FF2EC4]/15 border border-[#00E5FF]/30 rounded-lg p-2 flex items-center gap-2">
                  <FaRobot size={12} className="text-[#00E5FF]" />
                  <p className="text-[10px] flex-1 text-white/60">Ask EduBot anything…</p>
                  <FaPaperPlane size={9} className="text-[#FF2EC4]" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   🎓 DASHBOARD
   ============================================================ */
function Dashboard() {
  const [tab, setTab] = useState("overview");
  const [school, setSchool] = useState(SCHOOLS[0]);

  const tabs = [
    { id: "overview", label: "Overview", icon: <FaHome /> },
    { id: "material", label: "Study Material", icon: <FaBookOpen /> },
    { id: "support", label: "AI Support", icon: <FaComments /> },
    { id: "schools", label: "Schools", icon: <FaSchool /> },
  ];

  return (
    <div className="min-h-screen bg-[#050510] text-white relative">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>
      <div className="bg-[#0A0A1F] border-b border-[#00E5FF]/20 sticky top-0 z-30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Logo light />
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 rounded-lg px-3 py-1.5 bg-white/5 border border-white/10">
              <FaSearch className="text-white/40" size={11} />
              <input placeholder="Search…" className="bg-transparent text-xs outline-none w-28 text-white placeholder:text-white/40" />
            </div>
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00E5FF] to-[#FF2EC4] flex items-center justify-center text-[#050510] text-sm font-bold">A</div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-6 grid lg:grid-cols-4 gap-6">
        <aside className="lg:col-span-1 space-y-4">
          <div className="bg-[#0A0A1F] border border-white/10 rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00E5FF] to-[#FF2EC4] flex items-center justify-center text-[#050510] text-lg font-bold">A</div>
              <div>
                <p className="font-bold text-sm text-white">Aarav Sharma</p>
                <p className="text-[10px] text-white/40 mono">CLASS 8 • ROLL 214</p>
              </div>
            </div>
            <div className="flex gap-1.5 flex-wrap">
              {["Robotics", "Python", "Drone"].map((c) => (
                <span key={c} className="text-[10px] font-semibold bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] px-2 py-0.5 rounded-full mono">{c}</span>
              ))}
            </div>
          </div>

          <div className="bg-[#0A0A1F] border border-white/10 rounded-2xl p-2 space-y-1">
            {tabs.map((t) => (
              <button key={t.id} onClick={() => setTab(t.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-sm transition ${
                  tab === t.id ? "bg-gradient-to-r from-[#00E5FF]/20 to-[#FF2EC4]/20 text-[#00E5FF] border border-[#00E5FF]/30" : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}>
                {t.icon} {t.label}
              </button>
            ))}
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-sm text-red-400 hover:bg-red-500/10">
              <FaSignOutAlt /> Logout
            </button>
          </div>

          <div className="bg-gradient-to-br from-[#00E5FF]/15 via-[#8B5CF6]/15 to-[#FF2EC4]/15 border border-[#00E5FF]/30 rounded-2xl p-5 relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#00E5FF]/20 rounded-full blur-2xl"></div>
            <FaRocket className="text-2xl mb-2 text-[#B4FF3A] relative" />
            <p className="font-bold text-sm mb-1 relative">Need help?</p>
            <p className="text-[11px] text-white/60 mb-3 relative">Chat with EduBot or request a teacher.</p>
            <button onClick={() => setTab("support")} className="w-full bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg py-2 text-[11px] font-bold transition relative">Open AI Support</button>
          </div>
        </aside>

        <main className="lg:col-span-3 space-y-5">
          {tab === "overview" && <DashOverview />}
          {tab === "material" && <DashMaterial />}
          {tab === "support" && <DashSupport />}
          {tab === "schools" && <DashSchools school={school} setSchool={setSchool} />}
        </main>
      </div>
    </div>
  );
}

function DashOverview() {
  return (
    <>
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { label: "Courses Enrolled", value: "3", icon: <FaBookOpen />, color: "#00E5FF" },
          { label: "Avg. Progress", value: "68%", icon: <FaChartLine />, color: "#FF2EC4" },
          { label: "Certificates", value: "2", icon: <FaAward />, color: "#B4FF3A" },
        ].map((s) => (
          <div key={s.label} className="bg-[#0A0A1F] border border-white/10 rounded-2xl p-5 relative overflow-hidden group hover:border-white/30 transition">
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition" style={{ background: s.color }}></div>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg mb-3 relative" style={{ background: `${s.color}15`, color: s.color, border: `1px solid ${s.color}40` }}>{s.icon}</div>
            <p className="text-3xl font-extrabold font-display relative" style={{ color: s.color }}>{s.value}</p>
            <p className="text-[10px] text-white/40 mono uppercase tracking-widest relative">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#0A0A1F] border border-white/10 rounded-2xl p-6">
        <h3 className="font-bold text-base mb-4 font-display flex items-center gap-2">
          <span className="w-1 h-4 bg-gradient-to-b from-[#00E5FF] to-[#FF2EC4] rounded"></span>Continue Learning
        </h3>
        <div className="space-y-3">
          {COURSES.slice(0, 3).map((c, i) => (
            <div key={c.id} className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-[#050510]" style={{ background: `linear-gradient(135deg, ${c.accent}, ${c.accentTo})` }}>{c.icon}</div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm truncate text-white">{c.name}</p>
                <div className="w-full h-1.5 rounded-full mt-2 overflow-hidden bg-white/10">
                  <div className="h-1.5 rounded-full transition-all" style={{ width: `${[68, 45, 30][i]}%`, background: `linear-gradient(90deg, ${c.accent}, ${c.accentTo})` }}></div>
                </div>
              </div>
              <span className="text-xs font-bold shrink-0 mono" style={{ color: c.accentTo }}>{[68, 45, 30][i]}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#0A0A1F] border border-white/10 rounded-2xl p-6">
        <h3 className="font-bold text-base mb-4 font-display flex items-center gap-2">
          <span className="w-1 h-4 bg-gradient-to-b from-[#B4FF3A] to-[#00E5FF] rounded"></span>Upcoming Live Class
        </h3>
        <div className="flex items-center gap-4 bg-gradient-to-r from-[#00E5FF]/10 to-[#8B5CF6]/10 border border-[#00E5FF]/30 rounded-xl p-5">
          <div className="bg-[#00E5FF]/20 border border-[#00E5FF]/40 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 text-[#00E5FF]"><FaVideo size={16} /></div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm">Robotics — Servo Motor Control</p>
            <p className="text-[11px] text-white/50 mono">TODAY 4:00 PM • KUMAR SIR</p>
          </div>
          <button className="bg-gradient-to-r from-[#00E5FF] to-[#FF2EC4] text-[#050510] font-bold text-xs px-4 py-2 rounded-lg shrink-0 hover:shadow-lg transition">Join</button>
        </div>
      </div>
    </>
  );
}

function DashMaterial() {
  const [filter, setFilter] = useState("All");
  const subs = ["All", ...new Set(STUDY_MATERIAL.map((m) => m.subject))];
  const list = filter === "All" ? STUDY_MATERIAL : STUDY_MATERIAL.filter((m) => m.subject === filter);
  return (
    <div className="bg-[#0A0A1F] border border-white/10 rounded-2xl p-6">
      <h3 className="font-bold text-base mb-4 font-display flex items-center gap-2">
        <span className="w-1 h-4 bg-gradient-to-b from-[#00E5FF] to-[#FF2EC4] rounded"></span>Study Material
      </h3>
      <div className="flex gap-2 flex-wrap mb-4">
        {subs.map((s) => (
          <button key={s} onClick={() => setFilter(s)}
            className={`text-[11px] font-semibold px-3 py-1.5 rounded-full transition mono ${filter === s ? "bg-gradient-to-r from-[#00E5FF] to-[#FF2EC4] text-[#050510]" : "bg-white/5 border border-white/10 text-white/60 hover:text-white"}`}>{s}</button>
        ))}
      </div>
      <div className="space-y-2.5">
        {list.map((m) => (
          <div key={m.id} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${m.accent}20`, color: m.accent, border: `1px solid ${m.accent}40` }}>{m.icon}</div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm truncate text-white">{m.title}</p>
              <p className="text-[10px] text-white/40 mono">{m.subject} • {m.type} • {m.size} • {m.date}</p>
            </div>
            <button className="bg-gradient-to-r from-[#00E5FF] to-[#FF2EC4] text-[#050510] w-9 h-9 rounded-lg flex items-center justify-center shrink-0 hover:shadow-lg transition" aria-label="Download">
              <FaDownload size={11} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashSupport() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi Aarav! 👋 I'm EduBot. Ask me about your study material, doubts, or type 'teacher' to reach a mentor." },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const ref = useRef(null);
  useEffect(() => { if (ref.current) ref.current.scrollTop = ref.current.scrollHeight; }, [messages, typing]);

  const send = () => {
    if (!input.trim()) return;
    const q = input;
    setMessages((m) => [...m, { from: "user", text: q }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      const t = q.toLowerCase();
      let reply = "I've noted that. A teacher will review and respond shortly. Meanwhile, check your Study Material tab.";
      if (t.includes("teacher") || t.includes("mentor")) reply = "👨‍🏫 A teacher has been notified and will respond here within 10 minutes.";
      else if (t.includes("arduino") || t.includes("robot")) reply = "In Robotics Level 2, week 4 covers servo control. Open Study Material → Robotics → 'Arduino Servo Control' video.";
      else if (t.includes("drone")) reply = "Your Drone Safety PDF is in Study Material. DGCA rules are on page 6.";
      else if (t.includes("python")) reply = "Your Python OOP Notebook is in Study Material. Try the practice exercises!";
      setMessages((m) => [...m, { from: "bot", text: reply }]);
    }, 900);
  };

  return (
    <div className="bg-[#0A0A1F] border border-white/10 rounded-2xl overflow-hidden flex flex-col" style={{ height: "600px" }}>
      <div className="bg-gradient-to-r from-[#00E5FF]/20 via-[#8B5CF6]/20 to-[#FF2EC4]/20 border-b border-[#00E5FF]/30 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00E5FF] to-[#FF2EC4] flex items-center justify-center text-[#050510]"><FaRobot size={16} /></div>
          <div>
            <p className="font-bold text-sm font-display">EduBot — AI Assistant</p>
            <p className="text-[10px] mono text-[#00E5FF] flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#B4FF3A]"></span> ONLINE • TEACHERS AVAILABLE</p>
          </div>
        </div>
        <span className="text-[9px] bg-white/10 border border-white/20 px-2.5 py-1 rounded mono font-bold">24/7</span>
      </div>
      <div ref={ref} className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
              m.from === "user" ? "bg-gradient-to-br from-[#00E5FF] to-[#8B5CF6] text-[#050510] rounded-br-md font-medium" : "bg-white/5 text-white/85 border border-white/10 rounded-bl-md"
            }`}>{m.text}</div>
          </div>
        ))}
        {typing && (
          <div className="flex justify-start">
            <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-md px-4 py-3 text-[#00E5FF] dot-typing"><span></span><span></span><span></span></div>
          </div>
        )}
      </div>
      <div className="p-3 flex items-center gap-2 border-t border-white/10">
        <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Ask a doubt or type 'teacher'…"
          className="flex-1 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 focus:border-[#00E5FF] text-white placeholder:text-white/30 outline-none text-sm" />
        <button onClick={send} className="bg-gradient-to-r from-[#00E5FF] to-[#FF2EC4] text-[#050510] w-10 h-10 rounded-full flex items-center justify-center shrink-0 hover:shadow-lg transition"><FaPaperPlane size={12} /></button>
      </div>
    </div>
  );
}

function DashSchools({ school, setSchool }) {
  return (
    <>
      <div className="bg-[#0A0A1F] border border-white/10 rounded-2xl p-6">
        <h3 className="font-bold text-base mb-4 font-display flex items-center gap-2">
          <span className="w-1 h-4 bg-gradient-to-b from-[#00E5FF] to-[#FF2EC4] rounded"></span>Your School
        </h3>
        <div className="grid sm:grid-cols-3 gap-3">
          {SCHOOLS.map((s) => (
            <button key={s.id} onClick={() => setSchool(s)}
              className={`text-left rounded-xl overflow-hidden transition ${school.id === s.id ? "ring-2 ring-[#00E5FF] shadow-lg shadow-[#00E5FF]/20" : "ring-1 ring-white/10 hover:ring-white/30"}`}>
              <img src={s.img} alt={s.name} className="w-full h-24 object-cover opacity-70" />
              <div className="p-3 bg-white/[0.02]">
                <p className="font-bold text-xs text-white">{s.name}</p>
                <p className="text-[10px] text-white/40 mono">{s.location}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-[#0A0A1F] border border-white/10 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-base font-display">{school.name}</h3>
          <span className="bg-[#B4FF3A]/15 border border-[#B4FF3A]/30 text-[#B4FF3A] text-[10px] font-bold px-3 py-1 rounded-full mono">{school.students} STUDENTS</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {school.courses.map((c) => (
            <span key={c} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] mono">{c}</span>
          ))}
        </div>
        <div className="space-y-2">
          {["Class 6 — Batch A", "Class 7 — Batch B", "Class 8 — Batch A", "Class 9 — Batch C"].map((b, i) => (
            <div key={b} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <p className="text-sm font-semibold text-white">{b}</p>
              <span className="text-[10px] text-white/40 mono">{[12, 10, 14, 6][i]} STUDENTS</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ============================================================
   📚 COURSES SECTION
   ============================================================ */
function CoursesSection({ limit }) {
  const list = limit ? COURSES.slice(0, limit) : COURSES;
  return (
    <section id="courses" className="bg-[#050510] py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <AuroraBG />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-[#B4FF3A]/10 border border-[#B4FF3A]/30 text-[#B4FF3A] font-bold px-4 py-2 rounded-full text-xs mono mb-4 uppercase tracking-wider">// COURSES</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-4">Expand Your Career Horizons</h2>
            <p className="text-white/50 max-w-2xl mx-auto">Hands-on training in AI, Robotics and Drone Technology — from beginner to advanced.</p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {list.map((c, i) => (
            <Reveal key={c.id} delay={i * 60} direction="zoom"><CourseCard c={c} /></Reveal>
          ))}
        </div>
        {limit && (
          <Reveal delay={300}>
            <div className="text-center mt-12">
              <Link to="/courses" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00E5FF] to-[#FF2EC4] text-[#050510] font-bold px-8 py-3.5 rounded-xl shadow-xl hover:shadow-[#00E5FF]/30 hover:-translate-y-1 transition">
                View All Courses <FaArrowRight size={13} />
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/* ============================================================
   🏠 HOME
   ============================================================ */
function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative bg-[#050510] text-white overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40"></div>
        <AuroraBG />
        <div className="scan-line" style={{ top: "30%" }}></div>
        <div className="scan-line" style={{ top: "70%", animationDelay: "-2s" }}></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-14 items-center">
          <Reveal direction="left">
            <div className="flex flex-wrap gap-2 mb-5">
              <div className="inline-flex items-center gap-2 bg-[#B4FF3A]/10 border border-[#B4FF3A]/40 rounded-full px-3.5 py-1.5">
                <FaLandmark className="text-[#B4FF3A]" size={10} />
                <span className="text-[9px] font-bold mono uppercase tracking-wider text-[#B4FF3A]">Recognised by Govt. of Bihar</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#00E5FF]/10 border border-[#00E5FF]/40 rounded-full px-3.5 py-1.5">
                <FaUniversity className="text-[#00E5FF]" size={10} />
                <span className="text-[9px] font-bold mono uppercase tracking-wider text-[#00E5FF]">IIT Patna Incubated</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.02] mb-6 font-display">
              Master <span className="gradient-cyan-magenta">AI, Robotics</span><br />& Drone Tech
            </h1>
            <p className="text-lg text-white/60 mb-8 max-w-lg leading-relaxed">
              Industry-grade, hands-on training for students, schools and professionals. Build real projects, earn certificates, and launch your tech career.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Link to="/courses" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00E5FF] to-[#FF2EC4] text-[#050510] font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-[#00E5FF]/40 hover:-translate-y-0.5 transition btn-shine">
                Explore Courses <FaArrowRight size={13} />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00E5FF]/40 text-white font-bold px-7 py-3.5 rounded-xl transition hover:-translate-y-0.5">
                <FaPhone size={13} /> Talk To Expert
              </Link>
            </div>
            <div className="flex flex-wrap gap-8 text-sm">
              {[
                { v: "4.9", s: "★", l: "RATING" }, { v: "1200", s: "+", l: "STUDENTS" },
                { v: "45", s: "+", l: "SCHOOLS" }, { v: "7", s: "", l: "TRACKS" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-2xl font-extrabold font-display gradient-cyan-magenta">{s.v}<span className="text-xs">{s.s}</span></p>
                  <p className="text-white/40 text-[10px] mono tracking-widest mt-0.5">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={200} direction="right">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img src={IMG.hero1} alt="Robotics" className="rounded-2xl h-52 md:h-64 w-full object-cover border border-[#00E5FF]/30 shadow-[0_0_30px_rgba(0,229,255,0.2)]" />
                <img src={IMG.hero2} alt="AI" className="rounded-2xl h-52 md:h-64 w-full object-cover mt-10 border border-[#FF2EC4]/30 shadow-[0_0_30px_rgba(255,46,196,0.2)]" />
                <img src={IMG.hero3} alt="Drone" className="rounded-2xl h-52 md:h-64 w-full object-cover -mt-4 border border-[#B4FF3A]/30 shadow-[0_0_30px_rgba(180,255,58,0.2)]" />
                <img src={IMG.hero4} alt="Coding" className="rounded-2xl h-52 md:h-64 w-full object-cover mt-4 border border-[#8B5CF6]/30 shadow-[0_0_30px_rgba(139,92,246,0.2)]" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#0A0A1F] border border-[#00E5FF]/40 rounded-xl p-3.5 flex items-center gap-2.5 anim-float shadow-xl">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00E5FF] to-[#B4FF3A] flex items-center justify-center text-[#050510]"><FaCertificate size={16} /></div>
                <div>
                  <p className="text-[9px] text-[#00E5FF] mono font-bold">CERTIFIED</p>
                  <p className="text-xs font-extrabold text-white">Industry Recognized</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#0A0A1F] border border-[#FF2EC4]/40 rounded-xl p-3.5 flex items-center gap-2.5 anim-float-slow shadow-xl">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF2EC4] to-[#8B5CF6] flex items-center justify-center text-white"><FaRocket size={16} /></div>
                <div>
                  <p className="text-[9px] text-[#FF2EC4] mono font-bold">50+ PROJECTS</p>
                  <p className="text-xs font-extrabold text-white">Every Year</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST BAND — Government recognition */}
      <TrustBand />

      {/* TECH STACK */}
      <TechStackSection />

      {/* STATS */}
      <section className="bg-gradient-to-r from-[#00E5FF]/10 via-[#8B5CF6]/10 to-[#FF2EC4]/10 py-16 relative overflow-hidden border-y border-white/10">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { v: "1200", s: "+", l: "Students Trained", c: "#00E5FF" },
              { v: "45", s: "+", l: "Partner Schools", c: "#FF2EC4" },
              { v: "4.9", s: "★", l: "Avg Rating", c: "#B4FF3A" },
              { v: "3", s: "", l: "Bihar Districts", c: "#8B5CF6" },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 80} direction="zoom">
                <div className="text-center p-4 rounded-2xl bg-[#0A0A1F]/60 backdrop-blur border border-white/10 hover:border-white/30 transition">
                  <p className="text-4xl md:text-5xl font-extrabold font-display mb-1" style={{ color: s.c, textShadow: `0 0 30px ${s.c}50` }}>
                    <Counter end={parseFloat(s.v)} suffix={s.s} decimals={s.v.includes(".") ? 1 : 0} />
                  </p>
                  <p className="text-[10px] mono tracking-widest uppercase text-white/50">{s.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <CoursesSection limit={8} />

      {/* LEARNING PATH */}
      <LearningPathSection />

      {/* WHY US */}
      <section className="py-24 bg-[#0A0A1F] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark opacity-40"></div>
        <AuroraBG variant="magenta" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#8B5CF6] font-bold px-4 py-2 rounded-full text-xs mono mb-4 uppercase tracking-wider">// WHY US</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-4">Why Learn With EduRatnam?</h2>
              <p className="text-white/50 max-w-2xl mx-auto">Practical, project-first learning with industry mentors.</p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <FaCogs />, color: "#00E5FF", title: "100% Hands-On", desc: "Build real robots, drones and AI apps — not just theory." },
              { icon: <FaChalkboardTeacher />, color: "#FF2EC4", title: "Industry Mentors", desc: "Learn from engineers with real-world deployment experience." },
              { icon: <FaCertificate />, color: "#B4FF3A", title: "Certified Tracks", desc: "Earn certificates recognised by schools and employers." },
              { icon: <FaRocket />, color: "#8B5CF6", title: "Career Support", desc: "Portfolio reviews, mock interviews and job assistance." },
            ].map((f, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-[#050510] border border-white/10 hover:border-white/30 rounded-2xl p-6 h-full group card-lift relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-20" style={{ background: f.color }}></div>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 relative group-hover:scale-110 group-hover:rotate-6 transition"
                    style={{ background: `${f.color}15`, color: f.color, border: `1px solid ${f.color}40` }}>{f.icon}</div>
                  <h3 className="font-bold text-base mb-2 text-white font-display relative">{f.title}</h3>
                  <p className="text-white/50 text-sm relative">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MENTORS */}
      <MentorsSection />

      {/* DASHBOARD PREVIEW */}
      <DashboardPreview />

      {/* GALLERY PREVIEW */}
      <GallerySection limit={8} />

      {/* TESTIMONIALS — WHITE */}
      <Testimonials />

      {/* BLOG */}
      <BlogSection limit={3} />

      {/* FAQ — WHITE */}
      <FAQSection />

      {/* CONTACT */}
      <section id="contact-section" className="py-24 bg-[#050510] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <AuroraBG variant="cyan" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] font-bold px-4 py-2 rounded-full text-xs mono mb-4 uppercase tracking-wider">// CONTACT</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-4">Talk To Our Expert</h2>
              <p className="text-white/50 max-w-2xl mx-auto">We'd love to help you choose the right career track.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal direction="left">
              <div className="space-y-3">
                {[
                  { icon: <FaMapMarkerAlt />, label: "ADDRESS", value: SOCIAL.address, color: "#00E5FF" },
                  { icon: <FaPhoneAlt />, label: "PHONE", value: SOCIAL.phoneDisplay, href: `tel:${SOCIAL.phone}`, color: "#FF2EC4" },
                  { icon: <FaEnvelope />, label: "EMAIL", value: SOCIAL.email, href: `mailto:${SOCIAL.email}`, color: "#B4FF3A" },
                  { icon: <FaWhatsapp />, label: "WHATSAPP", value: "Chat with us", href: `https://wa.me/${SOCIAL.whatsapp}`, color: "#25D366" },
                ].map((c, i) => (
                  <a key={i} href={c.href || "#"} target={c.href?.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer"
                    className="flex gap-4 items-start bg-[#0A0A1F] border border-white/10 hover:border-white/30 rounded-2xl p-4 transition group">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-base shrink-0 group-hover:scale-110 transition"
                      style={{ background: `${c.color}15`, color: c.color, border: `1px solid ${c.color}40` }}>{c.icon}</div>
                    <div className="min-w-0">
                      <p className="text-[10px] mono font-bold tracking-widest" style={{ color: c.color }}>{c.label}</p>
                      <p className="text-white text-sm font-medium break-words mt-0.5">{c.value}</p>
                    </div>
                  </a>
                ))}
                <div className="flex gap-2 pt-2">
                  <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition"><FaFacebookF size={13} /></a>
                  <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-yellow-400 text-white flex items-center justify-center hover:scale-110 transition"><FaInstagram size={13} /></a>
                  <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center hover:scale-110 transition"><FaYoutube size={13} /></a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150} direction="right"><ContactForm /></Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============================================================
   📚 PAGES
   ============================================================ */
function CoursesPage() {
  return (
    <div>
      <PageHero title="Our Courses" subtitle="AI, Robotics & Drone Technology career tracks." />
      <CoursesSection />
      <FAQSection />
    </div>
  );
}

function CourseDetail() {
  const { slug } = useParams();
  const course = COURSES.find((c) => c.slug === slug);
  const related = COURSES.filter((c) => c.slug !== slug).slice(0, 3);

  if (!course) {
    return (
      <div className="py-32 text-center bg-[#050510]">
        <h1 className="text-6xl font-extrabold text-white mb-4 font-display">404</h1>
        <p className="text-white/50 mb-6">Course not found.</p>
        <Link to="/courses" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00E5FF] to-[#FF2EC4] text-[#050510] font-bold px-6 py-3 rounded-xl"><FaArrowLeft /> Back to Courses</Link>
      </div>
    );
  }

  return (
    <div className="bg-[#050510] text-white">
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img src={course.img} alt={course.name} className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-[#050510]/90 to-[#050510]/40"></div>
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="relative max-w-5xl mx-auto px-6 h-full flex flex-col justify-end pb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-lg mono uppercase tracking-wider" style={{ background: `${course.accent}20`, color: course.accent, border: `1px solid ${course.accent}60` }}>
              {course.icon} {course.level}
            </span>
            <span className="bg-white/10 border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-lg mono uppercase tracking-wider">{course.badge}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3 font-display" style={{ textShadow: `0 0 40px ${course.accent}40` }}>{course.name}</h1>
          <p className="text-white/60 text-lg">{course.tagline}</p>
          <div className="flex flex-wrap gap-5 mt-6 text-sm mono">
            <span className="flex items-center gap-2"><FaClock style={{ color: course.accent }} /> {course.duration}</span>
            <span className="flex items-center gap-2"><FaCertificate style={{ color: course.accent }} /> Certificate</span>
            <span className="flex items-center gap-2"><FaBolt style={{ color: course.accent }} /> {course.price}</span>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <Link to="/courses" className="inline-flex items-center gap-2 font-semibold mb-8 hover:gap-3 transition mono text-xs uppercase tracking-wider" style={{ color: course.accent }}>
          <FaArrowLeft size={10} /> Back to Courses
        </Link>
        <p className="text-white/70 leading-relaxed mb-8 text-lg">{course.desc}</p>
        <h2 className="text-2xl font-extrabold mb-5 font-display flex items-center gap-2">
          <span className="w-1 h-6 rounded" style={{ background: `linear-gradient(180deg, ${course.accent}, ${course.accentTo})` }}></span>
          What You'll Learn
        </h2>
        <div className="grid sm:grid-cols-2 gap-3 mb-10">
          {course.points.map((p, j) => (
            <div key={j} className="flex gap-3 items-start p-4 bg-white/[0.02] border border-white/10 rounded-xl hover:border-white/20 transition">
              <span className="w-6 h-6 rounded-md flex items-center justify-center shrink-0" style={{ background: `${course.accent}20`, border: `1px solid ${course.accent}40`, color: course.accent }}>
                <FaCheckCircle size={11} />
              </span>
              <span className="text-white/70 text-sm">{p}</span>
            </div>
          ))}
        </div>
        <div className="p-7 rounded-3xl flex flex-wrap items-center justify-between gap-5 relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${course.accent}15, ${course.accentTo}15)`, border: `1px solid ${course.accent}40` }}>
          <div className="absolute inset-0 grid-bg opacity-20"></div>
          <div className="relative">
            <p className="font-bold text-lg font-display">Ready to start this track?</p>
            <p className="text-white/50 text-sm">Join 1200+ students already learning with EduRatnam.</p>
          </div>
          <div className="flex gap-3 relative">
            <Link to="/contact" className="inline-flex items-center gap-2 text-[#050510] font-bold px-6 py-3 rounded-xl hover:shadow-xl transition" style={{ background: `linear-gradient(135deg, ${course.accent}, ${course.accentTo})` }}>
              Enroll Now <FaArrowRight size={11} />
            </Link>
            <Link to="/dashboard" className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-xl transition">Login</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#0A0A1F] py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10 font-display">Related Courses</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((c) => <CourseCard key={c.id} c={c} />)}
          </div>
        </div>
      </section>
    </div>
  );
}

function RoboticsPage() {
  return (
    <div className="bg-[#050510] text-white">
      <PageHero title="Robotics Training" subtitle="Design, build and program intelligent machines." />
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center relative">
        <AuroraBG variant="magenta" />
        <Reveal direction="left">
          <div className="relative">
            <img src={IMG.robotics} alt="Robotics" className="rounded-3xl w-full h-96 object-cover border border-[#EF4444]/40 shadow-2xl shadow-[#EF4444]/20" />
            <div className="absolute -bottom-4 -right-4 bg-[#0A0A1F] border border-[#EF4444]/40 rounded-xl p-3.5 anim-float flex items-center gap-2.5">
              <FaRobot className="text-2xl text-[#EF4444]" />
              <div>
                <p className="text-[9px] text-[#EF4444] mono font-bold">HANDS-ON</p>
                <p className="text-sm font-extrabold">12 Weeks</p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120} direction="right">
          <span className="inline-block bg-[#EF4444]/10 border border-[#EF4444]/30 text-[#EF4444] font-bold px-4 py-2 rounded-full text-xs mb-4 mono uppercase tracking-wider">🤖 ROBOTICS TRACK</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5 font-display">Become a Robotics Engineer</h2>
          <p className="text-white/60 leading-relaxed mb-6">
            Robotics expertise opens doors to cutting-edge careers in automation, manufacturing, and intelligent systems — empowering you to design and program machines that operate in the real world.
          </p>
          <ul className="space-y-3 mb-8">
            {["Sensors, actuators & microcontrollers", "Arduino & Raspberry Pi projects", "ROS (Robot Operating System) fundamentals", "Build an autonomous robot from scratch"].map((p) => (
              <li key={p} className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-md bg-[#B4FF3A]/15 border border-[#B4FF3A]/30 flex items-center justify-center shrink-0"><FaCheckCircle className="text-[#B4FF3A]" size={11} /></span>
                <span className="text-white/70">{p}</span>
              </li>
            ))}
          </ul>
          <Link to="/courses/robotics" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#EF4444] to-[#F97316] text-white font-bold px-7 py-3.5 rounded-xl shadow-xl hover:-translate-y-0.5 transition">View Robotics Course <FaArrowRight size={13} /></Link>
        </Reveal>
      </section>
      <CoursesSection limit={4} />
    </div>
  );
}

function DronePage() {
  return (
    <div className="bg-[#050510] text-white">
      <PageHero title="Drone Technology Training" subtitle="Master UAV flight, mapping & aerial intelligence." />
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center relative">
        <AuroraBG variant="cyan" />
        <Reveal direction="left">
          <span className="inline-block bg-[#F97316]/10 border border-[#F97316]/30 text-[#F97316] font-bold px-4 py-2 rounded-full text-xs mb-4 mono uppercase tracking-wider">🛸 DRONE TRACK</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5 font-display">Fly Into the Future</h2>
          <p className="text-white/60 leading-relaxed mb-6">
            Drone technology expertise opens careers in aerial mapping, surveillance, agriculture, and defence — empowering you to build and fly intelligent UAVs for real-world missions.
          </p>
          <ul className="space-y-3 mb-8">
            {["UAV components & flight dynamics", "DGCA regulations & safety protocols", "Aerial mapping & photogrammetry", "Autonomous drone mission project"].map((p) => (
              <li key={p} className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-md bg-[#B4FF3A]/15 border border-[#B4FF3A]/30 flex items-center justify-center shrink-0"><FaCheckCircle className="text-[#B4FF3A]" size={11} /></span>
                <span className="text-white/70">{p}</span>
              </li>
            ))}
          </ul>
          <Link to="/courses/drone-technology" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F97316] to-[#FACC15] text-[#050510] font-bold px-7 py-3.5 rounded-xl shadow-xl hover:-translate-y-0.5 transition">View Drone Course <FaArrowRight size={13} /></Link>
        </Reveal>
        <Reveal delay={120} direction="right">
          <div className="relative">
            <img src={IMG.drone} alt="Drone" className="rounded-3xl w-full h-96 object-cover border border-[#F97316]/40 shadow-2xl shadow-[#F97316]/20" />
            <div className="absolute -bottom-4 -left-4 bg-[#0A0A1F] border border-[#F97316]/40 rounded-xl p-3.5 anim-float flex items-center gap-2.5">
              <FaPlane className="text-2xl text-[#F97316]" />
              <div>
                <p className="text-[9px] text-[#F97316] mono font-bold">DGCA ALIGNED</p>
                <p className="text-sm font-extrabold">Certified</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
      <CoursesSection limit={4} />
    </div>
  );
}

function BlogCard({ post }) {
  return (
    <Link to={`/blog/${post.id}`} className="block group">
      <article className="bg-[#0A0A1F] border border-white/10 hover:border-[#00E5FF]/50 rounded-3xl overflow-hidden card-lift h-full flex flex-col transition-all duration-300 relative">
        <div className="relative overflow-hidden h-52">
          <img src={post.img} alt={post.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A1F] via-transparent to-transparent"></div>
          <span className="absolute top-4 left-4 bg-[#050510] border border-[#00E5FF]/40 text-[#00E5FF] text-[10px] font-bold px-2.5 py-1 rounded mono uppercase tracking-wider">{post.tag}</span>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <p className="text-[10px] text-white/40 font-semibold mb-2 flex items-center gap-2 mono"><FaCalendarAlt /> {post.date} • {post.readTime}</p>
          <h3 className="font-bold text-lg text-white mb-3 leading-snug font-display group-hover:text-[#00E5FF] transition">{post.title}</h3>
          <p className="text-white/50 text-sm mb-4 flex-1">{post.desc}</p>
          <span className="inline-flex items-center gap-2 text-[#00E5FF] font-semibold text-xs group-hover:gap-3 transition-all self-start mono uppercase tracking-wider">
            Read More <FaArrowRight size={9} />
          </span>
        </div>
      </article>
    </Link>
  );
}

function BlogSection({ limit }) {
  const posts = limit ? BLOG_POSTS.slice(0, limit) : BLOG_POSTS;
  return (
    <section className="bg-[#0A0A1F] py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-40"></div>
      <AuroraBG variant="magenta" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#8B5CF6] font-bold px-4 py-2 rounded-full text-xs mono mb-4 uppercase tracking-wider">// BLOG</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-4">Latest Stories & Guides</h2>
            <p className="text-white/50 max-w-2xl mx-auto">Insights on AI, robotics, drones and careers from the EduRatnam team.</p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((b, i) => (
            <Reveal key={b.id} delay={i * 100}><BlogCard post={b} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogDetail() {
  const { id } = useParams();
  const post = BLOG_POSTS.find((p) => p.id === parseInt(id));
  const related = BLOG_POSTS.filter((p) => p.id !== parseInt(id)).slice(0, 2);

  if (!post) {
    return (
      <div className="py-32 text-center bg-[#050510]">
        <h1 className="text-6xl font-extrabold text-white mb-4 font-display">404</h1>
        <p className="text-white/50 mb-6">Blog post not found.</p>
        <Link to="/blog" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00E5FF] to-[#FF2EC4] text-[#050510] font-bold px-6 py-3 rounded-xl"><FaArrowLeft /> Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="bg-[#050510] text-white">
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img src={post.img} alt={post.title} className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-[#050510]/90 to-[#050510]/40"></div>
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="relative max-w-4xl mx-auto px-6 h-full flex flex-col justify-end pb-12">
          <span className="inline-block bg-[#050510] border border-[#00E5FF]/40 text-[#00E5FF] text-[10px] font-bold px-3 py-1.5 rounded self-start mb-4 mono uppercase tracking-wider">{post.tag}</span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight font-display">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-white/50 mono uppercase tracking-wider">
            <span className="flex items-center gap-2"><FaUser /> {post.author}</span>
            <span className="flex items-center gap-2"><FaCalendarAlt /> {post.date}</span>
            <span className="flex items-center gap-2"><FaClock /> {post.readTime}</span>
          </div>
        </div>
      </section>
      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link to="/blog" className="inline-flex items-center gap-2 text-[#00E5FF] font-semibold mb-8 hover:gap-3 transition mono text-xs uppercase tracking-wider"><FaArrowLeft size={10} /> Back to Blog</Link>
        {post.content.map((para, i) => (
          <p key={i} className="text-white/70 leading-relaxed mb-5 text-lg">{para}</p>
        ))}
        <div className="mt-10 p-7 bg-gradient-to-br from-[#00E5FF]/10 to-[#FF2EC4]/10 border border-[#00E5FF]/30 rounded-3xl">
          <p className="font-bold text-lg mb-3 font-display">Ready to start learning?</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/courses" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00E5FF] to-[#FF2EC4] text-[#050510] font-semibold px-5 py-2.5 rounded-lg text-sm">Explore Courses <FaArrowRight size={10} /></Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-5 py-2.5 rounded-lg text-sm">Contact Us</Link>
          </div>
        </div>
      </article>
      <section className="bg-[#0A0A1F] py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark opacity-40"></div>
        <div className="relative max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-white text-center mb-8 font-display">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {related.map((b) => <BlogCard key={b.id} post={b} />)}
          </div>
        </div>
      </section>
    </div>
  );
}

function BlogPage() {
  return (
    <div>
      <PageHero title="Blog" subtitle="Insights on AI, robotics, drones & careers." />
      <BlogSection />
    </div>
  );
}

function FAQPage() {
  return (
    <div>
      <PageHero title="FAQ" subtitle="Quick answers about courses, enrollment & support." />
      <FAQSection />
    </div>
  );
}

function GalleryPage() {
  return (
    <div>
      <PageHero title="Our Gallery" subtitle="14 moments of joy, laughter and learning." accent="cyan" />
      <GallerySection />
    </div>
  );
}

function Contact() {
  return (
    <div className="bg-[#050510] text-white">
      <PageHero title="Talk To Our Expert" subtitle="We'd love to help you choose the right career track." />
      <section className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
        <AuroraBG variant="cyan" />
        <Reveal direction="left">
          <div className="space-y-3 relative">
            <h2 className="text-3xl font-extrabold mb-4 font-display flex items-center gap-2">
              <span className="w-1 h-8 bg-gradient-to-b from-[#00E5FF] to-[#FF2EC4] rounded"></span>Get In Touch
            </h2>
            {[
              { icon: <FaMapMarkerAlt />, label: "ADDRESS", value: SOCIAL.address, color: "#00E5FF" },
              { icon: <FaPhoneAlt />, label: "PHONE", value: SOCIAL.phoneDisplay, href: `tel:${SOCIAL.phone}`, color: "#FF2EC4" },
              { icon: <FaEnvelope />, label: "EMAIL", value: SOCIAL.email, href: `mailto:${SOCIAL.email}`, color: "#B4FF3A" },
              { icon: <FaWhatsapp />, label: "WHATSAPP", value: "Chat with us", href: `https://wa.me/${SOCIAL.whatsapp}`, color: "#25D366" },
            ].map((c, i) => (
              <a key={i} href={c.href || "#"} target={c.href?.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer"
                className="flex gap-4 items-start bg-[#0A0A1F] border border-white/10 hover:border-white/30 rounded-2xl p-4 transition group">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition" style={{ background: `${c.color}15`, color: c.color, border: `1px solid ${c.color}40` }}>{c.icon}</div>
                <div className="min-w-0">
                  <p className="text-[10px] mono font-bold tracking-widest" style={{ color: c.color }}>{c.label}</p>
                  <p className="text-white text-sm font-medium break-words mt-0.5">{c.value}</p>
                </div>
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition"><FaFacebookF size={13} /></a>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-yellow-400 text-white flex items-center justify-center hover:scale-110 transition"><FaInstagram size={13} /></a>
              <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center hover:scale-110 transition"><FaYoutube size={13} /></a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={150} direction="right"><ContactForm /></Reveal>
      </section>
    </div>
  );
}

/* ============================================================
   🚀 MAIN APP
   ============================================================ */
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050510]">
      <GlobalStyles />
      <ScrollToTop />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={
          <>
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/courses/:slug" element={<CourseDetail />} />
                <Route path="/robotics" element={<RoboticsPage />} />
                <Route path="/drone" element={<DronePage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={
                  <div className="py-32 text-center bg-[#050510]">
                    <h1 className="text-6xl font-extrabold text-white mb-4 font-display">404</h1>
                    <Link to="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00E5FF] to-[#FF2EC4] text-[#050510] font-bold px-6 py-3 rounded-xl">Go Home</Link>
                  </div>
                } />
              </Routes>
            </main>
            <FloatingButtons />
            <AIChatbot />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}