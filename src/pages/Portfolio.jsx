import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";

function Reveal({ children, delay = 0, y = 28 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
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

const IcoArrow = ({ white = false }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke={white ? "white" : "currentColor"}
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 16, height: 16 }}
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const IcoLink = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 14, height: 14 }}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
const IcoEye = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 14, height: 14 }}
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// ── 24 projects, 6 per category ─────────────────────────────
const PROJECTS = [
  {
    id: 1,
    cat: "E-Commerce Websites",
    title: "Skincare Website",
    img: "/images/ecommerce_1.png",
    link: "https://govind-ecommerce.netlify.app/",
  },
  {
    id: 2,
    cat: "UI/UX Design",
    title: "Grocery Template",
    img: "/images/uiux_2.png",
    link: "https://chal-dal.vercel.app/",
  },
  {
    id: 3,
    cat: "UI/UX Design",
    title: "Apparel Brand",
    img: "/images/uiux_1.png",
    link: "https://avnish344.github.io/Ecommerce-Website/",
  },
  {
    id: 4,
    cat: "Business Websites",
    title: "Performance",
    img: "/images/business_3.png",
    link: "https://avnish344.github.io/Ecommerce-Website/",
  },
  {
    id: 5,
    cat: "Business Websites",
    title: "Studio",
    img: "/images/business_4.png",
    link: "https://olliestudio.framer.website/",
  },
  {
    id: 6,
    cat: "Web Applications",
    title: "Jewelry Web App",
    img: "/images/webapp_1.png",
    link: "https://templatemo.com/live/templatemo_611_maison_doree",
  },
  {
    id: 7,
    cat: "Web Applications",
    title: "Chain App",
    img: "/images/webapp_2.png",
    link: "https://templatemo.com/live/templatemo_570_chain_app_dev",
  },
  {
    id: 7,
    cat: "Web Applications",
    title: "Bakery Web App",
    img: "/images/webapp_3.png",
    link: "https://templatemo.com/live/templatemo_613_frost_bakery",
  },
  {
    id: 8,
    cat: "Business Websites",
    title: "Travel Agency",
    img: "/images/business_5.png",
    link: "https://www.tooplate.com/live/2095_level",
  },
];

const CATEGORIES = [
  "All",
  "E-Commerce Websites",
  "Business Websites",
  "Web Applications",
  "UI/UX Design",
];

// ── Project Card ─────────────────────────────────────────────
function PfCard({ p, i }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.4,
        delay: (i % 6) * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="pf-card"
    >
      {/* Image */}
      <div className="pf-card-img-wrap">
        <img src={p.img} alt={p.title} className="pf-card-img" />
        {/* Hover overlay */}
        <div className="pf-card-overlay">
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="pf-overlay-btn"
          >
            <IcoLink /> Live Demo
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="pf-card-body">
        {/* Category badge */}
        {/* Title */}
        <div className="pf-card-title">{p.title}</div>
        {/* Buttons */}
        <div className="pf-card-btns">
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="pf-btn-view"
          >
            <IcoEye /> View Project
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.cat === activeFilter);

  return (
    <>
      <Navbar activePage="Portfolio" />

      {/* ══ HERO ══ */}
      <section className="pf-hero">
        <div className="pf-hero-grid" />
        <div
          className="pf-blob"
          style={{ width: 400, height: 400, top: -120, right: -120 }}
        />
        <div
          className="pf-blob"
          style={{
            width: 240,
            height: 240,
            bottom: -80,
            left: 60,
            opacity: 0.3,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 640,
            margin: "0 auto",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="pf-label pf-label-dark">Case Studies</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px,5vw,56px)",
              color: "white",
              lineHeight: 1.12,
              letterSpacing: -2,
              marginBottom: 18,
            }}
          >
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.78)",
              lineHeight: 1.85,
              maxWidth: 480,
              margin: "0 auto 32px",
            }}
          >
            Explore our latest projects across design and development — built
            for real businesses, delivering real results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              { label: "24+", sub: "Projects" },
              { label: "100+", sub: "Delivered" },
              { label: "4", sub: "Specialities" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  padding: "12px 22px",
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  borderRadius: 12,
                  textAlign: "center",
                  minWidth: 90,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Poppins',sans-serif",
                    fontWeight: 800,
                    fontSize: 22,
                    color: "white",
                    lineHeight: 1,
                  }}
                >
                  {s.label}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.7)",
                    marginTop: 4,
                    fontWeight: 500,
                  }}
                >
                  {s.sub}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ FILTER + GRID ══ */}
      <section className="pf-grid-sec">
        <div className="container">
          {/* Heading */}
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span className="pf-label pf-label-light">All Projects</span>
              <h2 className="pf-sec-h2" style={{ marginTop: 10 }}>
                Projects We've Built
              </h2>
              <p className="pf-sec-sub">
                Real solutions, real results — delivered for clients across
                industries worldwide.
              </p>
            </div>
          </Reveal>

          {/* Filter tabs */}
          <Reveal delay={0.08}>
            <div className="pf-filter-wrap">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`pf-filter-btn${activeFilter === cat ? " active" : ""}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                  {/* count badge */}
                  <span className="pf-filter-count">
                    {cat === "All"
                      ? PROJECTS.length
                      : PROJECTS.filter((p) => p.cat === cat).length}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>

          {/* Result label */}
          <Reveal delay={0.1}>
            <p
              style={{
                textAlign: "center",
                fontSize: 13,
                color: "#6b7280",
                marginBottom: 36,
                fontWeight: 500,
              }}
            >
              Showing{" "}
              <strong style={{ color: "#136360" }}>{filtered.length}</strong>{" "}
              projects
              {activeFilter !== "All" && (
                <>
                  {" "}
                  in{" "}
                  <strong style={{ color: "#136360" }}>{activeFilter}</strong>
                </>
              )}
            </p>
          </Reveal>

          {/* Cards grid */}
          <div className="pf-grid">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <PfCard key={p.id} p={p} i={i} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="pf-cta-sec">
        <div className="pf-cta-sec-bg" />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 620,
            margin: "0 auto",
          }}
        >
          <Reveal>
            <span className="pf-label pf-label-dark">Next Could Be Yours</span>
            <h2
              style={{
                fontFamily: "'Poppins',sans-serif",
                fontWeight: 800,
                fontSize: "clamp(28px,4.5vw,48px)",
                color: "white",
                lineHeight: 1.18,
                letterSpacing: -1.2,
                marginBottom: 16,
                marginTop: 10,
              }}
            >
              Have a project in mind?
            </h2>
            <p
              style={{
                fontSize: 17,
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.85,
                maxWidth: 440,
                margin: "0 auto 40px",
              }}
            >
              Let's work together. Tell us about your idea and we'll turn it
              into something remarkable.
            </p>
            <div
              style={{
                display: "flex",
                gap: 16,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a href="/contact" className="pf-cta-btn-primary">
                Contact Us <IcoArrow white />
              </a>
              <a href="/services" className="pf-cta-btn-ghost">
                Our Services
              </a>
            </div>
            <div
              style={{
                display: "flex",
                gap: 28,
                justifyContent: "center",
                marginTop: 44,
                flexWrap: "wrap",
              }}
            >
              {[
                "Free consultation",
                "Fast turnaround",
                "Long-term support",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    color: "rgba(255,255,255,0.72)",
                    fontSize: 13,
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 10,
                      color: "white",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
