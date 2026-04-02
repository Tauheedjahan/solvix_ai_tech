import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";

// ── Real project images ──────────────────────────────────────
import ecommerceStore from "../assets/images/ecommerce-store.png";
import healthcare from "../assets/images/health-care.png";
import healthfood from "../assets/images/health-food.png";
import artmuseum from "../assets/images/art-museum.png";
import carcity from "../assets/images/car-city.png";
import jobportal from "../assets/images/job-portal.png";

const C = {
  pri: "#136360",
  muted: "#6B7280",
  white: "#ffffff",
};

// ── Animation Helper ─────────────────────────────────────────
function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ── Icons ────────────────────────────────────────────────────
const IcoExtLink = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 18, height: 18 }}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

// ── Projects Data (24 Projects) ─────────────────────────────
const PROJECTS = [
  {
    id: 1,
    cat: "Landing Pages",
    img: healthcare,
    link: "https://www.template-helpandcare.de.rs/",
  },
  {
    id: 2,
    cat: "Landing Pages",
    img: healthfood,
    link: "https://www.template-healthandfood.de.rs/",
  },
  {
    id: 3,
    cat: "Landing Pages",
    img: artmuseum,
    link: "https://www.template-artmuseum.de.rs/",
  },
  {
    id: 4,
    cat: "Landing Pages",
    img: ecommerceStore,
    link: "https://www.template-ashop.de.rs/",
  },
  {
    id: 5,
    cat: "Landing Pages",
    img: carcity,
    link: "https://www.template-carcity.de.rs/",
  },
  {
    id: 6,
    cat: "Landing Pages",
    img: jobportal,
    link: "https://www.template-careerjobs.de.rs/",
  },
  {
    id: 7,
    cat: "Business Websites",
    img: ecommerceStore,
    link: "https://www.template-ashop.de.rs/",
  },
  {
    id: 8,
    cat: "Business Websites",
    img: artmuseum,
    link: "https://www.template-artmuseum.de.rs/",
  },
  {
    id: 9,
    cat: "Business Websites",
    img: healthcare,
    link: "https://www.template-helpandcare.de.rs/",
  },
  {
    id: 10,
    cat: "Business Websites",
    img: healthfood,
    link: "https://www.template-healthandfood.de.rs/",
  },
  {
    id: 11,
    cat: "Business Websites",
    img: carcity,
    link: "https://www.template-carcity.de.rs/",
  },
  {
    id: 12,
    cat: "Business Websites",
    img: jobportal,
    link: "https://www.template-careerjobs.de.rs/",
  },
  {
    id: 13,
    cat: "Web Applications",
    img: artmuseum,
    link: "https://www.template-artmuseum.de.rs/",
  },
  {
    id: 14,
    cat: "Web Applications",
    img: ecommerceStore,
    link: "https://www.template-ashop.de.rs/",
  },
  {
    id: 15,
    cat: "Web Applications",
    img: healthcare,
    link: "https://www.template-helpandcare.de.rs/",
  },
  {
    id: 16,
    cat: "Web Applications",
    img: healthfood,
    link: "https://www.template-healthandfood.de.rs/",
  },
  {
    id: 17,
    cat: "Web Applications",
    img: carcity,
    link: "https://www.template-carcity.de.rs/",
  },
  {
    id: 18,
    cat: "Web Applications",
    img: jobportal,
    link: "https://www.template-careerjobs.de.rs/",
  },
  {
    id: 19,
    cat: "UI/UX Design",
    img: artmuseum,
    link: "https://www.template-artmuseum.de.rs/",
  },
  {
    id: 20,
    cat: "UI/UX Design",
    img: ecommerceStore,
    link: "https://www.template-ashop.de.rs/",
  },
  {
    id: 21,
    cat: "UI/UX Design",
    img: healthcare,
    link: "https://www.template-helpandcare.de.rs/",
  },
  {
    id: 22,
    cat: "UI/UX Design",
    img: healthfood,
    link: "https://www.template-healthandfood.de.rs/",
  },
  {
    id: 23,
    cat: "UI/UX Design",
    img: carcity,
    link: "https://www.template-carcity.de.rs/",
  },
  {
    id: 24,
    cat: "UI/UX Design",
    img: jobportal,
    link: "https://www.template-careerjobs.de.rs/",
  },
];

const CATEGORIES = [
  "All",
  "Landing Pages",
  "Business Websites",
  "Web Applications",
  "UI/UX Design",
];

// ── Single Full-Image Card ──────────────────────────────────
function PfCard({ p, i }) {
  return (
    <motion.a
      href={p.link}
      target="_blank"
      rel="noopener noreferrer"
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
      className="pf-full-card"
    >
      <div className="pf-img-container">
        <img src={p.img} alt="Project" className="pf-main-img" />

        {/* Hover Overlay */}
        <motion.div
          className="pf-hover-overlay"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="pf-hover-content">
            <span className="pf-hover-text">Click to view project</span>
            <IcoExtLink />
          </div>
        </motion.div>
      </div>
    </motion.a>
  );
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.cat === activeFilter);

  return (
    <div className="pf-page-wrapper">
      <Navbar activePage="Portfolio" />

      {/* Hero Section */}
      <section className="pf-hero-minimal">
        <Reveal>
          <h1 className="pf-hero-title">Our Work</h1>
          <p className="pf-hero-subtitle">
            Visual showcase of our latest digital solutions.
          </p>
        </Reveal>
      </section>

      {/* Filter Bar */}
      <section className="pf-filter-section">
        <div className="container">
          <div className="pf-filter-bar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`pf-filter-btn ${activeFilter === cat ? "active" : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="pf-count">
            Showing <b>{filtered.length}</b> projects
          </p>
        </div>
      </section>

      {/* Full Image Grid */}
      <section className="pf-grid-section">
        <div className="container">
          <div className="pf-image-grid">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <PfCard key={p.id} p={p} i={i} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="pf-footer-cta">
        <Reveal>
          <h2>Ready to start yours?</h2>
          <a href="/contact" className="pf-btn-primary">
            Get in Touch
          </a>
        </Reveal>
      </section>

      {/* ── STYLES ── */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .pf-page-wrapper { background: #F7FBFB; min-height: 100vh; font-family: 'Poppins', sans-serif; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        
        /* Hero */
        .pf-hero-minimal { background: #136360; padding: 100px 20px 60px; text-align: center; color: white; }
        .pf-hero-title { font-size: clamp(32px, 5vw, 54px); font-weight: 800; margin-bottom: 10px; }
        .pf-hero-subtitle { opacity: 0.8; font-size: 18px; }

        /* Filters */
        .pf-filter-section { padding: 40px 0 20px; text-align: center; }
        .pf-filter-bar { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-bottom: 20px; }
        .pf-filter-btn { padding: 8px 20px; border-radius: 50px; border: 1px solid #e5e7eb; background: white; cursor: pointer; transition: 0.3s; font-weight: 500; color: #6B7280; }
        .pf-filter-btn.active { background: #136360; color: white; border-color: #136360; }
        .pf-count { font-size: 13px; color: #6B7280; }

        /* Grid Logic */
        .pf-image-grid { 
            display: grid; 
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); 
            gap: 20px; 
            padding-bottom: 80px;
        }

        .pf-full-card { 
            display: block; 
            border-radius: 12px; 
            overflow: hidden; 
            aspect-ratio: 16 / 11; 
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            background: #eee;
        }

        .pf-img-container { position: relative; width: 100%; height: 100%; }
        .pf-main-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .pf-full-card:hover .pf-main-img { transform: scale(1.08); }

        /* Hover Overlay */
        .pf-hover-overlay { 
            position: absolute; 
            top: 0; left: 0; width: 100%; height: 100%; 
            background: rgba(19, 99, 96, 0.85); 
            display: flex; align-items: center; justify-content: center; 
            backdrop-filter: blur(4px);
        }
        .pf-hover-content { display: flex; align-items: center; gap: 12px; color: white; }
        .pf-hover-text { font-weight: 600; font-size: 16px; letter-spacing: 0.5px; }

        /* CTA */
        .pf-footer-cta { background: #136360; padding: 80px 20px; text-align: center; color: white; }
        .pf-footer-cta h2 { font-size: 32px; margin-bottom: 25px; }
        .pf-btn-primary { padding: 14px 32px; background: white; color: #136360; border-radius: 8px; text-decoration: none; font-weight: 700; transition: 0.3s; }
        .pf-btn-primary:hover { opacity: 0.9; transform: translateY(-3px); }

        @media (max-width: 600px) {
            .pf-image-grid { grid-template-columns: 1fr; }
        }
      `,
        }}
      />
    </div>
  );
}
