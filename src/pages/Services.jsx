import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "../components/Navbar";

const C = {
  pri: "#136360",
  priDark: "#0d4f4d",
  priLight: "#ECF6F6",
  bg: "#F7FBFB",
  text: "#1a1a2e",
  muted: "#6B7280",
  border: "#e5e7eb",
  white: "#ffffff",
};

function Reveal({ children, delay = 0, y = 30 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const IcoGlobe = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#136360"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 26, height: 26 }}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
const IcoFigma = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#136360"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 26, height: 26 }}
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
    stroke="#136360"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 26, height: 26 }}
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
const IcoBot = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#136360"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 26, height: 26 }}
  >
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4M8 14h.01M16 14h.01M8 18h8" />
    <path d="M2 14h1M21 14h1" />
  </svg>
);
const IcoArrow = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 16, height: 16 }}
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const SERVICES = [
  {
    icon: <IcoGlobe />,
    title: "Web Design",
    desc: "Modern and responsive website design that represents your brand and attracts users. We craft pixel-perfect layouts that convert visitors into clients.",
    tags: ["Responsive", "Brand-Focused", "SEO Ready"],
  },
  {
    icon: <IcoFigma />,
    title: "UI/UX Design",
    desc: "User-friendly interface design using modern design principles and Figma tools. Every screen is crafted around real user behavior and business goals.",
    tags: ["Figma", "Wireframes", "Prototyping"],
  },
  {
    icon: <IcoCode />,
    title: "Web Development",
    desc: "High performance websites and web applications built with modern technologies. Clean, scalable code that is fast, secure, and easy to maintain.",
    tags: ["React", "Next.js", "Node.js"],
  },
  {
    icon: <IcoBot />,
    title: "AI Automation",
    desc: "Automate business processes using AI tools and smart workflows. Save hours every week and let intelligent systems handle the repetitive work.",
    tags: ["GPT-4", "Workflows", "Integration"],
  },
];

const PROCESS = [
  { num: 1, title: "Discovery", desc: "Understand your goals & requirements" },
  { num: 2, title: "Design", desc: "Wireframes, prototypes & UI design" },
  { num: 3, title: "Development", desc: "Clean code & modern tech stack" },
  { num: 4, title: "Testing", desc: "QA across all devices & browsers" },
  { num: 5, title: "Delivery", desc: "Launch, deploy & ongoing support" },
];

const TECH = [
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Python",
  "Figma",
  "GPT-4 / AI",
  "Tailwind CSS",
  "PostgreSQL",
  "AWS",
  "Docker",
  "FastAPI",
];

export default function ServicesPage() {
  return (
    <>
      <Navbar activePage="Services" />

      {/* ── HERO ── */}
      <section className="srv-hero">
        <div className="srv-hero-grid" />
        <div
          className="srv-hero-blob"
          style={{ width: 320, height: 320, top: -90, right: -90 }}
        />
        <div
          className="srv-hero-blob"
          style={{
            width: 200,
            height: 200,
            bottom: -50,
            left: 80,
            opacity: 0.4,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 680,
            margin: "0 auto",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="srv-label wh">What We Offer</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px,5vw,54px)",
              color: "white",
              lineHeight: 1.15,
              letterSpacing: -1.5,
              marginBottom: 20,
            }}
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.75,
              maxWidth: 500,
              margin: "0 auto",
            }}
          >
            We help businesses build modern websites, user interfaces, and
            AI‑powered automation tools that drive real results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              marginTop: 36,
              flexWrap: "wrap",
            }}
          >
            {[
              "120+ Projects Delivered",
              "98% Client Satisfaction",
              "4 Core Services",
            ].map((s) => (
              <span
                key={s}
                style={{
                  padding: "8px 18px",
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 100,
                  color: "rgba(255,255,255,0.9)",
                  fontSize: 13,
                  fontFamily: "'Poppins',sans-serif",
                  fontWeight: 600,
                }}
              >
                {s}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section className="srv-cards-sec">
        <div className="container">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <span className="srv-label">Core Services</span>
              <h2 className="srv-h2">What We Build For You</h2>
              <p className="srv-sub">
                Four focused services — each delivered with precision, modern
                tools, and a commitment to quality.
              </p>
            </div>
          </Reveal>
          <div className="srv-cards-grid">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="srv-card">
                  <div className="srv-card-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="srv-card-tags">
                    {s.tags.map((t) => (
                      <span key={t} className="srv-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div style={{ textAlign: "center", marginTop: 48 }}>
              <a
                href="/contact"
                style={{
                  color: C.pri,
                  fontFamily: "'Poppins',sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  borderBottom: "2px solid rgba(19,99,96,0.2)",
                  paddingBottom: 3,
                }}
              >
                Discuss your project with us <IcoArrow />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WORK PROCESS ── */}
      <section className="srv-process-sec">
        <div className="container">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <span className="srv-label">How We Work</span>
              <h2 className="srv-h2">Our Process</h2>
              <p className="srv-sub">
                A transparent, structured approach — so you always know what's
                happening at every stage.
              </p>
            </div>
          </Reveal>
          <div className="srv-steps-row">
            {PROCESS.map((step, i) => (
              <div key={step.title} className="srv-step-cell">
                <Reveal delay={i * 0.1} y={20}>
                  <div className="srv-step">
                    <div className="srv-step-num">{step.num}</div>
                    <div className="srv-step-title">{step.title}</div>
                    <div className="srv-step-desc">{step.desc}</div>
                  </div>
                </Reveal>
                {i < PROCESS.length - 1 && (
                  <div className="srv-step-arrow">›</div>
                )}
              </div>
            ))}
          </div>
          <div className="srv-detail-grid">
            {PROCESS.map((step, i) => (
              <Reveal key={step.title + "d"} delay={0.2 + i * 0.08}>
                <div className="srv-detail-card">
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: C.priLight,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 10,
                      fontFamily: "'Poppins',sans-serif",
                      fontWeight: 800,
                      fontSize: 12,
                      color: C.pri,
                    }}
                  >
                    {step.num}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontWeight: 700,
                      fontSize: 13,
                      color: C.text,
                      marginBottom: 5,
                    }}
                  >
                    {step.title}
                  </div>
                  <div
                    style={{ fontSize: 12, color: C.muted, lineHeight: 1.6 }}
                  >
                    {step.desc}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGIES ── */}
      <section className="srv-tech-sec">
        <div className="container">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <span className="srv-label">Our Stack</span>
              <h2 className="srv-h2">Technologies We Use</h2>
              <p className="srv-sub">
                Modern, battle-tested tools — chosen for performance,
                scalability, and developer experience.
              </p>
            </div>
          </Reveal>
          <div className="srv-tech-wrap">
            {TECH.map((t, i) => (
              <motion.div
                key={t}
                className="srv-tech-pill"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.045, duration: 0.32 }}
              >
                <span className="srv-tech-dot" />
                {t}
              </motion.div>
            ))}
          </div>
          <Reveal delay={0.3}>
            <p
              style={{
                textAlign: "center",
                marginTop: 36,
                fontSize: 13,
                color: C.muted,
                fontStyle: "italic",
              }}
            >
              + Many more tools and integrations depending on your project needs
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="srv-cta-sec">
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 640,
            margin: "0 auto",
          }}
        >
          <Reveal>
            <span className="srv-label wh">Let's Work Together</span>
            <h2
              style={{
                fontFamily: "'Poppins',sans-serif",
                fontWeight: 800,
                fontSize: "clamp(28px,4.5vw,46px)",
                color: "white",
                lineHeight: 1.2,
                letterSpacing: -1,
                marginBottom: 16,
                marginTop: 8,
              }}
            >
              Have a project in mind?
            </h2>
            <p
              style={{
                fontSize: 18,
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.75,
                maxWidth: 460,
                margin: "0 auto 40px",
              }}
            >
              Let's build something amazing together. Share your idea and we'll
              turn it into reality.
            </p>
            <div
              style={{
                display: "flex",
                gap: 14,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a href="/contact" className="srv-cta-btn">
                Start a Project <IcoArrow />
              </a>
              <a
                href="mailto:affordableai.tech@gmail.com"
                className="srv-cta-btn-ghost"
              >
                affordableai.tech@gmail.com
              </a>
            </div>
            <div
              style={{
                display: "flex",
                gap: 24,
                justifyContent: "center",
                marginTop: 48,
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
                    color: "rgba(255,255,255,0.75)",
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 11,
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
