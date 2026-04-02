import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import "../styles/style.css";

import ecommerceStore from "../assets/images/ecommerce-store.png";
import healthcare from "../assets/images/health-care.png";
import healthfood from "../assets/images/health-food.png";
import artmuseum from "../assets/images/art-museum.png";
import carcity from "../assets/images/car-city.png";
import jobportal from "../assets/images/job-portal.png";
import aboutMain from "../assets/images/about-main.png";
import aboutInset from "../assets/images/about-inset.png";

import Navbar from "../components/Navbar";

// ── SVG Icons ──────────────────────────────────────────────────
const Icons = {
  LaptopCode: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: 36, height: 36 }}
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <path d="M8 8l2 2-2 2M13 10h3" />
    </svg>
  ),
  PaintBrush: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: 36, height: 36 }}
    >
      <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
      <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
    </svg>
  ),
  Globe: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: 36, height: 36 }}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  Robot: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: 36, height: 36 }}
    >
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4M8 14h.01M16 14h.01M8 18h8" />
      <path d="M2 14h1M21 14h1" />
    </svg>
  ),
  CheckCircle: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: 20, height: 20 }}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Star: () => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ width: 16, height: 16 }}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  Quote: () => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ width: 28, height: 28, opacity: 0.1 }}
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  ),
  Arrow: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: 16, height: 16 }}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  ),
  Layers: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: 14, height: 14 }}
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
};

// ── Service Section Icons (matching ServicesPage style) ────────
const IcoGlobe = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 28, height: 28 }}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
const IcoFigma = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 28, height: 28 }}
  >
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 0 1-7 0z" />
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
  </svg>
);
const IcoCode = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 28, height: 28 }}
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
const IcoBot = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 28, height: 28 }}
  >
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4M8 14h.01M16 14h.01M8 18h8" />
    <path d="M2 14h1M21 14h1" />
  </svg>
);

// ── Utilities ──────────────────────────────────────────────────
function Reveal({ children, delay = 0, y = 36 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Counter({ end, suffix = "" }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let v = 0;
    const step = (end / 1800) * 16;
    const t = setInterval(() => {
      v += step;
      if (v >= end) {
        setN(end);
        clearInterval(t);
      } else setN(Math.floor(v));
    }, 16);
    return () => clearInterval(t);
  }, [inView, end]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

// ── Page Data ──────────────────────────────────────────────────
const ABOUT_MAIN = aboutMain;
const ABOUT_INSET = aboutInset;
const CTA_BG_IMG = "";

const services = [
  {
    icon: <IcoCode />,
    title: "Web Development",
    desc: "Fast, responsive, pixel-perfect websites built with React, Next.js, and Node.js.",
  },
  {
    icon: <IcoFigma />,
    title: "UI/UX Design",
    desc: "Intuitive interfaces crafted with deep user empathy — from wireframes to prototypes.",
  },
  {
    icon: <IcoGlobe />,
    title: "Web Design",
    desc: "Modern and responsive website designs that represent your brand and attract users.",
  },
  {
    icon: <IcoBot />,
    title: "AI Automation",
    desc: "Intelligent automation that streamlines operations, reduces costs, and unlocks business value.",
  },
];

const portfolioItems = [
  {
    title: "Ecommerce Clothing Store",
    tech: "Next.js · Stripe · Tailwind",
    tag: "E-Commerce",
    img: ecommerceStore,
    link: "https://www.template-ashop.de.rs/",
  },
  {
    title: "Art Museum Explorer",
    tech: "React · Node.js · Maps API",
    tag: "Travel",
    img: artmuseum,
    link: "https://www.template-artmuseum.de.rs/",
  },
  {
    title: "Help & Care",
    tag: "Healthcare",
    img: healthcare,
    link: "https://www.template-helpandcare.de.rs/",
  },
  {
    title: "Health & Food",
    tag: "Healthfood",
    img: healthfood,
    link: "https://www.template-healthandfood.de.rs/",
  },
  {
    title: "Carcity",
    tech: "Next.js · MongoDB · AWS",
    tag: "Travel",
    img: carcity,
    link: "https://www.template-carcity.de.rs/",
  },
  {
    title: "Job Portal",
    tech: "React · Framer · Vite",
    tag: "Web App",
    img: jobportal,
    link: "https://www.template-careerjobs.de.rs/",
  },
];

const processSteps = [
  {
    title: "Discovery",
    desc: "Dive deep into your goals, users, and constraints to define the right problem.",
    img: "",
  },
  {
    title: "Planning",
    desc: "Roadmap and sprint planning crafted for maximum velocity and clarity.",
    img: "",
  },
  {
    title: "Development",
    desc: "Clean, scalable code written with modern best practices.",
    img: "",
  },
  {
    title: "Testing",
    desc: "Rigorous QA across devices, browsers, and edge cases.",
    img: "",
  },
  {
    title: "Launch",
    desc: "Smooth deployment, monitoring, and post-launch support.",
    img: "",
  },
];

const testimonials = [
  {
    name: "Sarah",
    role: "Business Owner",
    review:
      "SolvixAiTech transformed our platform in record time. The AI automation they built saved us 30+ hours per week. Truly exceptional work.",
    avatar: "",
  },
  {
    name: "James Okafor",
    role: "Product Manager",
    review:
      "Professional, communicative, and technically brilliant. They delivered a dashboard product that our clients absolutely love.",
    avatar: "",
  },
  {
    name: "Priya Nair",
    role: "CTO",
    review:
      "The attention to detail in both UI/UX and backend architecture was impressive. They feel like an extension of our own team.",
    avatar: "",
  },
];

const aboutFeatures = [
  "Clean and scalable code",
  "Modern technologies",
  "Transparent communication",
  "Long-term support",
];

// ── Component ──────────────────────────────────────────────────
export default function HomePage() {
  const [activeTag, setActiveTag] = useState("All");
  const tags = [
    "All",
    "E-Commerce",
    "Travel",
    "Healthcare",
    "Real Estate",
    "Portfolio",
    "Business",
  ];
  const filtered =
    activeTag === "All"
      ? portfolioItems
      : portfolioItems.filter((p) => p.tag === activeTag);

  return (
    <>
      <Navbar activePage="Home" />

      {/* ══ HERO ══ */}
      <section id="home" className="hero-section">
        <div className="hero-blob-tr" />
        <div className="hero-blob-bl" />

        <div className="container g-hero hero-inner">
          {/* Left — text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <span className="hero-badge">
                <Icons.Layers /> Web &amp; AI Solutions
              </span>
            </motion.div>

            <motion.h1
              className="hero-h1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ color: "#1a1a2e", marginBottom: 20 }}
            >
              Build Smart Web &amp; AI Solutions{" "}
              <span style={{ color: "#136360" }}>for Modern Businesses</span>
            </motion.h1>

            <motion.p
              className="hero-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              SolvixAiTech helps startups and businesses build modern websites,
              scalable web applications, and intelligent AI automation
              solutions.
            </motion.p>

            <motion.div
              className="hero-btns"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.a
                href="/contact"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="btn-pri"
              >
                Start Your Project <Icons.Arrow />
              </motion.a>
              <motion.a
                href="/portfolio"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline"
              >
                View Portfolio
              </motion.a>
            </motion.div>

            <motion.div
              className="g-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { num: 120, suf: "+", label: "Projects" },
                { num: 98, suf: "%", label: "Satisfaction" },
                { num: 3, suf: "+", label: "Years Exp." },
              ].map((s) => (
                <div key={s.label} className="stat-box">
                  <div className="stat-num">
                    <Counter end={s.num} suffix={s.suf} />
                  </div>
                  <div className="stat-lbl">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — dashboard mock */}
          <motion.div
            className="hero-right"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div style={{ width: "100%", maxWidth: 430 }}>
              <div className="dash-card">
                <div className="dash-header">
                  <div className="dash-dots">
                    {["#ff5f57", "#febc2e", "#28c840"].map((col) => (
                      <div
                        key={col}
                        className="dash-dot"
                        style={{ background: col }}
                      />
                    ))}
                  </div>
                  <div className="dash-title">AI-Powered Dashboard</div>
                  <div className="dash-sub">
                    Real-time analytics · Predictive insights
                  </div>
                </div>
                <div className="dash-body">
                  <div className="dash-bars">
                    {[45, 72, 58, 91, 63, 85, 70, 95, 78, 88].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{
                          delay: 0.6 + i * 0.05,
                          duration: 0.5,
                          ease: "easeOut",
                        }}
                        style={{
                          flex: 1,
                          background:
                            i % 3 === 0
                              ? "#136360"
                              : i % 3 === 1
                                ? "rgba(19,99,96,0.38)"
                                : "rgba(19,99,96,0.15)",
                          borderRadius: "3px 3px 0 0",
                        }}
                      />
                    ))}
                  </div>
                  <div className="dash-metrics">
                    {[
                      { l: "Revenue", v: "$142K", up: true },
                      { l: "Users", v: "8,432", up: true },
                      { l: "Conversion", v: "3.8%", up: false },
                      { l: "Avg Session", v: "4m 12s", up: true },
                    ].map((m) => (
                      <div key={m.l} className="dash-metric">
                        <div className="dash-metric-lbl">{m.l}</div>
                        <div className="dash-metric-val">{m.v}</div>
                        <div
                          className={m.up ? "dash-metric-up" : "dash-metric-dn"}
                        >
                          {m.up ? "↑ +12%" : "↓ -2%"}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge top-right */}
              <motion.div
                className="float-badge"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                style={{ top: -18, right: -18, gap: 9 }}
              >
                <div className="float-badge-icon">
                  <Icons.Robot />
                </div>
                <div>
                  <div className="float-badge-title">AI Automation</div>
                  <div className="float-badge-sub">Active</div>
                </div>
              </motion.div>

              {/* Floating badge bottom-left */}
              <motion.div
                className="float-badge"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3.5,
                  ease: "easeInOut",
                  delay: 1,
                }}
                style={{ bottom: 28, left: -22, gap: 8 }}
              >
                <div className="float-dot" />
                <div className="float-sat">98% Client Satisfaction</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section id="services" className="sec" style={{ background: "#ffffff" }}>
        <div className="container">
          <Reveal>
            <div className="sec-title-wrap">
              <span className="badge">What We Do</span>
              <h2
                className="sec-h2"
                style={{ marginTop: 14, marginBottom: 12, color: "#1a1a2e" }}
              >
                Our Services
              </h2>
              <p>
                End-to-end digital solutions crafted to turn your vision into a
                competitive advantage.
              </p>
            </div>
          </Reveal>
          <div className="g-services">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.09}>
                <motion.div
                  className="service-card"
                  whileHover={{
                    y: -8,
                    boxShadow: "0 14px 32px rgba(0,0,0,0.08)",
                  }}
                >
                  <div className="service-card-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PORTFOLIO ══ */}
      <section id="portfolio" className="sec" style={{ background: "#F7FBFB" }}>
        <div className="container">
          <Reveal>
            <div className="sec-title-wrap">
              <span className="badge">Case Studies</span>
              <h2
                className="sec-h2"
                style={{ marginTop: 14, marginBottom: 12, color: "#1a1a2e" }}
              >
                Our Work
              </h2>
              <p>
                Some of the projects and website concepts I have built and
                designed.
              </p>
            </div>
          </Reveal>

          {/* Filter bar */}
          <div className="g-portfolio">
            {filtered.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 0.08}>
                <motion.div className="portfolio-card" whileHover="hover">
                  <a
                    href={item.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-img-wrap"
                  >
                    {item.img ? (
                      <motion.img
                        variants={{ hover: { scale: 1.06 } }}
                        transition={{ duration: 0.4 }}
                        src={item.img}
                        alt={item.title}
                        className="portfolio-img"
                      />
                    ) : (
                      <div className="portfolio-placeholder">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#136360"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          style={{ width: 28, height: 28, opacity: 0.4 }}
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="m21 15-5-5L5 21" />
                        </svg>
                      </div>
                    )}
                    <div className="portfolio-overlay">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ width: 28, height: 28 }}
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      <span className="portfolio-overlay-text">
                        View Project
                      </span>
                    </div>
                  </a>
                  <div className="portfolio-card-body">
                    <div>
                      <div className="portfolio-card-title">{item.title}</div>
                      <div className="portfolio-card-tech">{item.tech}</div>
                    </div>
                    <span className="portfolio-tag">{item.tag}</span>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section id="about" className="sec" style={{ background: "#ffffff" }}>
        <div className="container">
          <div className="g-about" style={{ marginBottom: 72 }}>
            <Reveal y={30}>
              <div className="about-img-wrap">
                <div className="about-main-img">
                  <img
                    src={ABOUT_MAIN}
                    alt="About"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
                <div className="about-inset-img">
                  <img
                    src={ABOUT_INSET}
                    alt="About inset"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
                <div className="about-badge-count">
                  <div className="about-badge-num">120+</div>
                  <div className="about-badge-lbl">Projects Delivered</div>
                </div>
              </div>
            </Reveal>

            <Reveal y={30} delay={0.1}>
              <div className="about-text">
                <span className="badge">Our Story</span>
                <h2 className="sec-h2" style={{ color: "#1a1a2e" }}>
                  About SolvixAiTech
                </h2>
                <p>
                  SolvixAiTech was founded on a simple belief: technology should
                  empower businesses, not overwhelm them. Our mission is to
                  bridge the gap between cutting-edge AI and practical,
                  real-world solutions.
                </p>
                <div className="about-features">
                  {aboutFeatures.map((f) => (
                    <div key={f} className="about-feature-row">
                      <span>
                        <Icons.CheckCircle />
                      </span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <motion.a
                  href="/contact"
                  whileHover={{ y: -3 }}
                  className="about-cta-btn"
                >
                  Learn More About Us <Icons.Arrow />
                </motion.a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ PROCESS ══ */}
      <section className="sec" style={{ background: "#F7FBFB" }}>
        <div className="container">
          <Reveal>
            <div className="sec-title-wrap">
              <span className="badge">How We Work</span>
              <h2
                className="sec-h2"
                style={{ marginTop: 14, color: "#1a1a2e" }}
              >
                Our Development Process
              </h2>
            </div>
          </Reveal>
          <div className="g-process" style={{ position: "relative" }}>
            <div className="process-line" />
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1}>
                <div className="process-step">
                  <div
                    className="process-circle"
                    style={{
                      border: `3px solid ${i === 0 ? "#136360" : "rgba(19,99,96,0.22)"}`,
                      boxShadow: `0 7px 20px rgba(19,99,96,${i === 0 ? 0.22 : 0.08})`,
                    }}
                  >
                    {step.img ? (
                      <img
                        src={step.img}
                        alt={step.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <div
                        className="process-circle-inner"
                        style={{
                          background: `linear-gradient(135deg, ${i === 0 ? "#136360" : "#e5f3f2"}, ${i === 0 ? "#0d4f4d" : "#ECF6F6"})`,
                        }}
                      >
                        <span
                          className="process-num"
                          style={{ color: i === 0 ? "#ffffff" : "#136360" }}
                        >
                          {i + 1}
                        </span>
                      </div>
                    )}
                    <div className="process-badge">{i + 1}</div>
                  </div>
                  <div className="process-title">{step.title}</div>
                  <div className="process-desc">{step.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="sec" style={{ background: "#ffffff" }}>
        <div className="container">
          <Reveal>
            <div className="sec-title-wrap">
              <span className="badge">Client Stories</span>
              <h2
                className="sec-h2"
                style={{ marginTop: 14, color: "#1a1a2e" }}
              >
                What Clients Say
              </h2>
            </div>
          </Reveal>
          <div className="g-testi">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className="testi-card">
                  <div className="testi-quote-icon">
                    <Icons.Quote />
                  </div>
                  <div className="testi-stars">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} style={{ color: "#f59e0b" }}>
                        <Icons.Star />
                      </span>
                    ))}
                  </div>
                  <p className="testi-review">"{t.review}"</p>
                  <div className="testi-author">
                    <div className="testi-avatar">
                      {t.avatar ? (
                        <img
                          src={t.avatar}
                          alt={t.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <div className="testi-avatar-fallback">
                          {t.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="testi-name">{t.name}</div>
                      <div className="testi-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section id="contact" className="cta-section">
        <div className="cta-bg">
          {CTA_BG_IMG && (
            <>
              <img src={CTA_BG_IMG} alt="" className="cta-bg-img" />
              <div className="cta-bg-overlay" />
            </>
          )}
        </div>
        <div className="cta-inner">
          <div className="cta-content">
            <Reveal>
              <span className="badge badge-white">Let's Build Together</span>
              <h2
                className="cta-h2"
                style={{ color: "#ffffff", marginTop: 18, marginBottom: 16 }}
              >
                Ready to Start Your Project?
              </h2>
              <p
                style={{
                  fontSize: 17,
                  color: "rgba(255,255,255,0.77)",
                  marginBottom: 38,
                  lineHeight: 1.75,
                }}
              >
                Let's turn your vision into reality. Our team is ready to help
                you build something extraordinary.
              </p>
              <motion.a
                href="https://mail.google.com/mail/?view=cm&to=affordableai.tech@gmail.com&su=Project%20Inquiry%20%E2%80%94%20SolvixAiTech"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn pulse"
                whileHover={{ scale: 1.06, y: -3 }}
              >
                Contact Us <Icons.Arrow />
              </motion.a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
