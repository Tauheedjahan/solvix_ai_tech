import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "../components/Navbar";
import aboutMaine from "../assets/images/about-.png";

// Team member images
import shobakiFull from "../assets/images/shobaki.png";
import arshiDesign from "../assets/images/arshi.png";
import nishaWeb from "../assets/images/nisha.png";
import ankitAuto from "../assets/images/ankit.png";
import yusufPro from "../assets/images/yusuf-pro.png";
import raufBusiness from "../assets/images/rauf-business.png";
import sheebaOperation from "../assets/images/sheeba-operation.png";
import tauheedLead from "../assets/images/tauheed-lead.png";

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

// ── Icons ──────────────────────────────────────────────────────
const IcoCheck = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke={C.pri}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 14, height: 14 }}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
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
const IcoStar = () => (
  <svg
    viewBox="0 0 24 24"
    fill={C.pri}
    style={{ width: 14, height: 14, opacity: 0.7 }}
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

// ── Team Illustrations (for members without photos) ────────────
const TeamIllustrations = {
  Operations: () => (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <rect
        x="20"
        y="30"
        width="80"
        height="50"
        rx="8"
        fill="#136360"
        fillOpacity="0.1"
        stroke="#136360"
        strokeWidth="1.8"
      />
      <rect
        x="20"
        y="30"
        width="80"
        height="14"
        rx="8"
        fill="#136360"
        fillOpacity="0.2"
      />
      <rect
        x="30"
        y="52"
        width="24"
        height="18"
        rx="4"
        fill="#136360"
        fillOpacity="0.15"
      />
      <rect
        x="60"
        y="52"
        width="30"
        height="8"
        rx="3"
        fill="#136360"
        fillOpacity="0.2"
      />
      <rect
        x="60"
        y="64"
        width="20"
        height="8"
        rx="3"
        fill="#136360"
        fillOpacity="0.12"
      />
      <circle cx="28" cy="37" r="3" fill="#ff5f57" />
      <circle cx="36" cy="37" r="3" fill="#febc2e" />
      <circle cx="44" cy="37" r="3" fill="#28c840" />
    </svg>
  ),
  Technical: () => (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <rect
        x="20"
        y="28"
        width="80"
        height="52"
        rx="6"
        fill="#136360"
        fillOpacity="0.12"
        stroke="#136360"
        strokeWidth="2"
      />
      <rect
        x="20"
        y="28"
        width="80"
        height="12"
        rx="6"
        fill="#136360"
        fillOpacity="0.25"
      />
      <circle cx="28" cy="34" r="2.5" fill="#ff5f57" />
      <circle cx="36" cy="34" r="2.5" fill="#febc2e" />
      <circle cx="44" cy="34" r="2.5" fill="#28c840" />
      <path
        d="M42 52l-8 6 8 6"
        stroke="#136360"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M78 52l8 6-8 6"
        stroke="#136360"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M65 48l-10 20"
        stroke="#0d4f4d"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  Business: () => (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <rect
        x="25"
        y="35"
        width="70"
        height="45"
        rx="6"
        fill="#136360"
        fillOpacity="0.1"
        stroke="#136360"
        strokeWidth="1.8"
      />
      <path
        d="M40 35V28a8 8 0 0 1 16 0v7"
        stroke="#136360"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="60"
        cy="55"
        r="8"
        fill="#136360"
        fillOpacity="0.2"
        stroke="#136360"
        strokeWidth="1.5"
      />
      <path
        d="M57 55l2 2 4-4"
        stroke="#136360"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="35"
        y="68"
        width="50"
        height="5"
        rx="2.5"
        fill="#136360"
        fillOpacity="0.15"
      />
    </svg>
  ),
  ProjectMgr: () => (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <rect
        x="15"
        y="25"
        width="90"
        height="60"
        rx="7"
        fill="#136360"
        fillOpacity="0.08"
        stroke="#136360"
        strokeWidth="1.8"
      />
      <rect
        x="25"
        y="35"
        width="40"
        height="5"
        rx="2.5"
        fill="#136360"
        fillOpacity="0.35"
      />
      <rect
        x="25"
        y="45"
        width="30"
        height="4"
        rx="2"
        fill="#136360"
        fillOpacity="0.2"
      />
      <rect
        x="25"
        y="53"
        width="50"
        height="4"
        rx="2"
        fill="#136360"
        fillOpacity="0.2"
      />
      <rect
        x="25"
        y="61"
        width="20"
        height="4"
        rx="2"
        fill="#136360"
        fillOpacity="0.15"
      />
      <circle
        cx="85"
        cy="45"
        r="14"
        fill="#ECF6F6"
        stroke="#136360"
        strokeWidth="1.5"
      />
      <path
        d="M79 45h12M85 39v12"
        stroke="#136360"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  FullStack: () => (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <rect
        x="20"
        y="28"
        width="80"
        height="52"
        rx="6"
        fill="#136360"
        fillOpacity="0.12"
        stroke="#136360"
        strokeWidth="2"
      />
      <rect
        x="20"
        y="28"
        width="80"
        height="12"
        rx="6"
        fill="#136360"
        fillOpacity="0.25"
      />
      <circle cx="28" cy="34" r="2.5" fill="#ff5f57" />
      <circle cx="36" cy="34" r="2.5" fill="#febc2e" />
      <circle cx="44" cy="34" r="2.5" fill="#28c840" />
      <path
        d="M42 52l-8 6 8 6"
        stroke="#136360"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M78 52l8 6-8 6"
        stroke="#136360"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M65 48l-10 20"
        stroke="#0d4f4d"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <rect
        x="44"
        y="80"
        width="32"
        height="5"
        rx="2.5"
        fill="#136360"
        fillOpacity="0.2"
      />
    </svg>
  ),
  UIUXDesigner: () => (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <rect
        x="15"
        y="20"
        width="55"
        height="68"
        rx="5"
        fill="#136360"
        fillOpacity="0.1"
        stroke="#136360"
        strokeWidth="1.8"
      />
      <rect
        x="22"
        y="30"
        width="41"
        height="6"
        rx="3"
        fill="#136360"
        fillOpacity="0.3"
      />
      <rect
        x="22"
        y="42"
        width="28"
        height="4"
        rx="2"
        fill="#136360"
        fillOpacity="0.2"
      />
      <rect
        x="22"
        y="50"
        width="35"
        height="4"
        rx="2"
        fill="#136360"
        fillOpacity="0.2"
      />
      <rect
        x="22"
        y="68"
        width="41"
        height="10"
        rx="3"
        fill="#136360"
        fillOpacity="0.18"
      />
      <circle
        cx="90"
        cy="38"
        r="18"
        fill="#ECF6F6"
        stroke="#136360"
        strokeWidth="1.8"
      />
      <path
        d="M83 38h14M90 31v14"
        stroke="#136360"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="90" cy="38" r="4" fill="#136360" fillOpacity="0.3" />
    </svg>
  ),
  WebDesigner: () => (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <rect
        x="10"
        y="22"
        width="100"
        height="65"
        rx="7"
        fill="#136360"
        fillOpacity="0.1"
        stroke="#136360"
        strokeWidth="2"
      />
      <rect
        x="10"
        y="22"
        width="100"
        height="14"
        rx="7"
        fill="#136360"
        fillOpacity="0.2"
      />
      <circle cx="22" cy="29" r="3" fill="#ff5f57" />
      <circle cx="32" cy="29" r="3" fill="#febc2e" />
      <circle cx="42" cy="29" r="3" fill="#28c840" />
      <rect
        x="22"
        y="44"
        width="35"
        height="22"
        rx="4"
        fill="#136360"
        fillOpacity="0.15"
        stroke="#136360"
        strokeWidth="1.2"
      />
      <rect
        x="65"
        y="44"
        width="33"
        height="9"
        rx="3"
        fill="#136360"
        fillOpacity="0.2"
      />
      <rect
        x="65"
        y="57"
        width="33"
        height="9"
        rx="3"
        fill="#136360"
        fillOpacity="0.12"
      />
      <circle cx="30" cy="74" r="5" fill="#136360" fillOpacity="0.7" />
      <circle cx="44" cy="74" r="5" fill="#0d4f4d" fillOpacity="0.5" />
      <circle cx="58" cy="74" r="5" fill="#136360" fillOpacity="0.3" />
    </svg>
  ),
  AIEngineer: () => (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <circle
        cx="60"
        cy="42"
        r="22"
        fill="#136360"
        fillOpacity="0.12"
        stroke="#136360"
        strokeWidth="2"
      />
      <circle cx="51" cy="38" r="4" fill="#136360" fillOpacity="0.5" />
      <circle cx="69" cy="38" r="4" fill="#136360" fillOpacity="0.5" />
      <path
        d="M52 50c2 3 5 5 8 5s6-2 8-5"
        stroke="#136360"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="60"
        y1="20"
        x2="60"
        y2="14"
        stroke="#136360"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="60" cy="12" r="3" fill="#136360" fillOpacity="0.4" />
      <line
        x1="38"
        y1="42"
        x2="32"
        y2="42"
        stroke="#136360"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="82"
        y1="42"
        x2="88"
        y2="42"
        stroke="#136360"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="28"
        y="38"
        width="8"
        height="8"
        rx="2"
        fill="#136360"
        fillOpacity="0.25"
      />
      <rect
        x="84"
        y="38"
        width="8"
        height="8"
        rx="2"
        fill="#136360"
        fillOpacity="0.25"
      />
      <path
        d="M46 64l-8 14h44l-8-14"
        fill="#136360"
        fillOpacity="0.12"
        stroke="#136360"
        strokeWidth="1.5"
      />
    </svg>
  ),
};

// ── Data ───────────────────────────────────────────────────────
const WHY_US = [
  {
    title: "Modern & Responsive Design",
    desc: "Every project is built to look and perform perfectly on all screen sizes.",
  },
  {
    title: "Clean & Scalable Code",
    desc: "We write maintainable code that grows with your business.",
  },
  {
    title: "Fast Project Delivery",
    desc: "Structured sprints ensure on-time delivery without sacrificing quality.",
  },
  {
    title: "Focus on User Experience",
    desc: "Design decisions are always driven by real user needs and behavior.",
  },
  {
    title: "Reliable Communication",
    desc: "You're always in the loop — regular updates, no surprises.",
  },
];

const STATS = [
  { num: "100", suffix: "+", label: "Projects Delivered" },
  { num: "98", suffix: "%", label: "Client Satisfaction" },
  { num: "6", suffix: "+", label: "Years Experience" },
  { num: "4", suffix: "", label: "Core Services" },
];

// ── Top row: Leadership ──
const leadershipMembers = [
  {
    name: "Sheeba",
    role: "Operations Director",
    img: sheebaOperation,
    IllustrationComp: TeamIllustrations.Operations,
  },
  {
    name: "Rauf",
    role: "Business Development Manager",
    img: raufBusiness,
    IllustrationComp: TeamIllustrations.Business,
  },
  {
    name: "Tauheed",
    role: "Technical Lead",
    img: tauheedLead,
    IllustrationComp: TeamIllustrations.Technical,
  },
  {
    name: "Yusuf",
    role: "Project Manager",
    img: yusufPro,
    IllustrationComp: TeamIllustrations.ProjectMgr,
  },
];

// ── Bottom row: Core Team ──
const coreTeamMembers = [
  {
    name: "Shobaki",
    role: "Full Stack Developer",
    img: shobakiFull,
    IllustrationComp: TeamIllustrations.FullStack,
  },
  {
    name: "Nisha",
    role: "UI/UX Designer",
    img: nishaWeb,
    IllustrationComp: TeamIllustrations.UIUXDesigner,
  },
  {
    name: "Arshi",
    role: "Web Designer",
    img: arshiDesign,
    IllustrationComp: TeamIllustrations.WebDesigner,
  },
  {
    name: "Ankit",
    role: "AI Automation Engineer",
    img: ankitAuto,
    IllustrationComp: TeamIllustrations.AIEngineer,
  },
];

// Shared TeamCard component
function TeamCard({ m, delay }) {
  return (
    <Reveal delay={delay}>
      <motion.div whileHover={{ y: -6 }} className="team-card">
        <div className="team-card-img-wrap">
          {m.img ? (
            <img src={m.img} alt={m.name} className="team-card-img" />
          ) : (
            <div className="team-card-placeholder">
              <div className="team-card-illus">
                <m.IllustrationComp />
              </div>
              <div className="team-card-initial">
                {m.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            </div>
          )}
        </div>
        <div className="team-card-body">
          <div className="team-card-name">{m.name}</div>
          <div className="team-card-role">{m.role}</div>
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar activePage="About" />

      {/* ── HERO ── */}
      <section className="ab-hero">
        <div className="ab-hero-grid" />
        <div
          className="ab-blob"
          style={{ width: 360, height: 360, top: -100, right: -100 }}
        />
        <div
          className="ab-blob"
          style={{
            width: 220,
            height: 220,
            bottom: -60,
            left: 60,
            opacity: 0.35,
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="ab-label ab-label-dark">Who We Are</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(30px,5vw,54px)",
              color: "white",
              lineHeight: 1.15,
              letterSpacing: -1.5,
              marginBottom: 20,
            }}
          >
            About SolvixAiTech
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.8,
              maxWidth: 500,
              margin: "0 auto",
            }}
          >
            We create modern websites, user-friendly interfaces, and AI‑powered
            solutions to help businesses grow.
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
            {["100+ Projects", "98% Satisfaction", "6+ Years"].map((s) => (
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

      {/* ── OUR STORY ── */}
      <section className="ab-story-sec">
        <div className="container">
          <div className="ab-story-grid">
            <Reveal y={30}>
              <div className="ab-story-img-wrap">
                <div className="ab-story-img-box">
                  <img
                    src={aboutMaine}
                    alt="SolvixAiTech team"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "16px",
                    }}
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.12} y={28}>
              <div>
                <span className="ab-label ab-label-light">Our Story</span>
                <h2 className="ab-sec-h2" style={{ marginTop: 0 }}>
                  How SolvixAiTech Began
                </h2>
                <p
                  style={{
                    fontSize: 16,
                    color: C.muted,
                    lineHeight: 1.85,
                    marginBottom: 20,
                  }}
                >
                  SolvixAiTech was created with a clear vision — to help
                  businesses build modern, powerful digital solutions without
                  the complexity. We saw that many companies struggled to find a
                  reliable partner who understood both design and technology
                  equally.
                </p>
                <p
                  style={{
                    fontSize: 16,
                    color: C.muted,
                    lineHeight: 1.85,
                    marginBottom: 32,
                  }}
                >
                  So we built one. We focus on web design, user experience,
                  development, and AI automation to deliver real results, not
                  just beautiful pixels.
                </p>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 0 }}
                >
                  {[
                    {
                      year: "2023",
                      text: "SolvixAiTech helps businesses grow with modern web, design, and AI solutions.",
                    },
                    {
                      year: "2024",
                      text: "Expanded to UI/UX and AI automation services",
                    },
                    {
                      year: "2025",
                      text: "Crossed 80+ projects across 10+ industries",
                    },
                    {
                      year: "2026",
                      text: "100+ projects delivered, growing globally",
                    },
                  ].map((item, i, arr) => (
                    <div
                      key={item.year}
                      style={{ display: "flex", gap: 18, position: "relative" }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: 34,
                            height: 34,
                            borderRadius: "50%",
                            background:
                              i === arr.length - 1 ? C.pri : C.priLight,
                            border: `2px solid ${i === arr.length - 1 ? C.pri : C.border}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "'Poppins',sans-serif",
                            fontWeight: 700,
                            fontSize: 10,
                            color: i === arr.length - 1 ? "white" : C.pri,
                            flexShrink: 0,
                            zIndex: 1,
                          }}
                        >
                          {item.year.slice(2)}
                        </div>
                        {i < arr.length - 1 && (
                          <div
                            style={{
                              width: 2,
                              flex: 1,
                              background: C.border,
                              minHeight: 28,
                            }}
                          />
                        )}
                      </div>
                      <div
                        style={{
                          paddingBottom: i < arr.length - 1 ? 20 : 0,
                          paddingTop: 6,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Poppins',sans-serif",
                            fontSize: 12,
                            fontWeight: 700,
                            color: C.pri,
                            display: "block",
                            marginBottom: 2,
                          }}
                        >
                          {item.year}
                        </span>
                        <span
                          style={{
                            fontSize: 14,
                            color: C.text,
                            fontWeight: 500,
                          }}
                        >
                          {item.text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          MEET THE TEAM — 8 cards (4+4 layout)
      ══════════════════════════════════════════════════ */}
      <section className="sec" style={{ background: C.bg }}>
        <div className="container">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <span className="ab-label ab-label-light">Our People</span>
              <h2 className="ab-sec-h2">Meet the Team</h2>
              <p className="ab-sec-sub">
                The talented people behind every project we deliver.
              </p>
            </div>
          </Reveal>

          {/* Leadership row */}
          <Reveal delay={0.05}>
            <p
              style={{
                fontFamily: "'Poppins',sans-serif",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: 1.4,
                textTransform: "uppercase",
                color: C.pri,
                textAlign: "center",
                marginBottom: 20,
              }}
            >
              Leadership
            </p>
          </Reveal>
          <div className="g-team" style={{ marginBottom: 48 }}>
            {leadershipMembers.map((m, i) => (
              <TeamCard key={m.name} m={m} delay={i * 0.09} />
            ))}
          </div>

          {/* Core team row */}
          <Reveal delay={0.05}>
            <p
              style={{
                fontFamily: "'Poppins',sans-serif",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: 1.4,
                textTransform: "uppercase",
                color: C.pri,
                textAlign: "center",
                marginBottom: 20,
              }}
            >
              Core Team
            </p>
          </Reveal>
          <div className="g-team">
            {coreTeamMembers.map((m, i) => (
              <TeamCard key={m.name} m={m} delay={i * 0.09} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="ab-why-sec">
        <div className="container">
          <div className="ab-why-wrap">
            <Reveal y={28}>
              <div>
                <span className="ab-label ab-label-light">Our Advantage</span>
                <h2
                  style={{
                    fontFamily: "'Poppins',sans-serif",
                    fontSize: 36,
                    fontWeight: 800,
                    color: C.text,
                    letterSpacing: -0.5,
                    lineHeight: 1.2,
                    marginBottom: 14,
                  }}
                >
                  Why Choose Us?
                </h2>
                <p
                  style={{
                    fontSize: 15,
                    color: C.muted,
                    lineHeight: 1.8,
                    marginBottom: 32,
                  }}
                >
                  We combine technical expertise with genuine care for our
                  clients.
                </p>
                <div className="ab-why-list">
                  {WHY_US.map((item, i) => (
                    <Reveal key={item.title} delay={i * 0.08} y={16}>
                      <div className="ab-why-item">
                        <div className="ab-why-item-icon">
                          <IcoCheck />
                        </div>
                        <div>
                          <div className="ab-why-item-title">{item.title}</div>
                          <div className="ab-why-item-desc">{item.desc}</div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15} y={28}>
              <div>
                <div className="ab-why-stats">
                  {STATS.map((s, i) => (
                    <motion.div
                      key={s.label}
                      className="ab-stat-card"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.45 }}
                    >
                      <div className="ab-stat-num">
                        {s.num}
                        {s.suffix}
                      </div>
                      <div className="ab-stat-lbl">{s.label}</div>
                    </motion.div>
                  ))}
                </div>
                <div
                  style={{
                    marginTop: 20,
                    background: C.white,
                    border: `1.5px solid ${C.border}`,
                    borderRadius: 16,
                    padding: "22px 24px",
                  }}
                >
                  <div style={{ display: "flex", gap: 2, marginBottom: 12 }}>
                    {[...Array(5)].map((_, i) => (
                      <IcoStar key={i} />
                    ))}
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      color: C.text,
                      lineHeight: 1.75,
                      fontStyle: "italic",
                      marginBottom: 14,
                    }}
                  >
                    "SolvixAiTech delivered our platform in record time. The AI
                    automation they built saved us 30+ hours every week."
                  </p>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: `linear-gradient(135deg,${C.pri},${C.priDark})`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontFamily: "'Poppins',sans-serif",
                        fontWeight: 700,
                        fontSize: 13,
                      }}
                    >
                      SM
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Poppins',sans-serif",
                          fontWeight: 700,
                          fontSize: 13,
                          color: C.text,
                        }}
                      >
                        Sarah Mitchell
                      </div>
                      <div style={{ fontSize: 12, color: C.muted }}>
                        Business Owner
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ab-cta-sec">
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 580,
            margin: "0 auto",
          }}
        >
          <Reveal>
            <span className="ab-label ab-label-dark">Let's Build Together</span>
            <h2
              style={{
                fontFamily: "'Poppins',sans-serif",
                fontWeight: 800,
                fontSize: "clamp(26px,4vw,44px)",
                color: "white",
                lineHeight: 1.2,
                letterSpacing: -1,
                marginBottom: 16,
                marginTop: 8,
              }}
            >
              Have a project idea?
            </h2>
            <p
              style={{
                fontSize: 17,
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.8,
                maxWidth: 420,
                margin: "0 auto 40px",
              }}
            >
              Let's build something amazing together.
            </p>
            <a href="/contact" className="ab-cta-btn">
              <IcoArrow white />
              Start Your Project
            </a>
            <div
              style={{
                display: "flex",
                gap: 24,
                justifyContent: "center",
                marginTop: 44,
                flexWrap: "wrap",
              }}
            >
              {[
                "Free consultation",
                "No commitment needed",
                "Reply within 24h",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    color: "rgba(255,255,255,0.7)",
                    fontSize: 13,
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.15)",
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
