import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// ── Theme ──────────────────────────────────────────────────────
const C = {
  pri: "#136360",
  priDark: "#0d4f4d",
  text: "#1a1a2e",
  white: "#ffffff",
  border: "#e5e7eb",
  muted: "#6B7280",
};

// ── Icons ──────────────────────────────────────────────────────
const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 15, height: 15 }}
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const MenuIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    style={{ width: 24, height: 24 }}
  >
    <path d="M3 12h18M3 6h18M3 18h18" />
  </svg>
);

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    style={{ width: 24, height: 24 }}
  >
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

// ── Nav links config ───────────────────────────────────────────
//  href  → where the link goes
//         • Same-page anchor  → "#services"
//         • Another page      → "/services"  (adjust to your router)
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// ── Component ──────────────────────────────────────────────────
export default function Navbar({ activePage = "Home" }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close drawer on resize to desktop
  useEffect(() => {
    const fn = () => {
      if (window.innerWidth > 600) setMobileOpen(false);
    };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: 70,
        background: C.white,
        boxShadow: scrolled
          ? "0 4px 20px rgba(0,0,0,0.09)"
          : "0 4px 20px rgba(0,0,0,0.05)",
        display: "flex",
        alignItems: "center",
        transition: "box-shadow 0.3s",
      }}
    >
      <div
        className="container"
        style={{
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        {/* ── Logo ── */}
        <a
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexShrink: 0,
          }}
        >
          <img
            src="/images/logo.PNG" // {logoM} ki jagah ye string likhein
            alt="SolvixAiTech"
            style={{
              width: 304,
              height: 434,
              objectFit: "contain",
            }}
          />
          <span
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 800,
              fontSize: 19,
              color: C.pri,
              letterSpacing: -0.5,
            }}
          >
            {/*if you want then add company remove logo use this line*/}
            {/*Solvix<span style={{ color: C.text }}>Ai</span>Tech*/}
          </span>
        </a>

        {/* ── Desktop links ── */}
        <div className="nav-desktop" style={{ gap: 28, alignItems: "center" }}>
          {NAV_LINKS.map((link) => {
            const isActive = activePage === link.label;
            return (
              <a
                key={link.label}
                href={link.href}
                style={{
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: 15,
                  color: isActive ? C.pri : "#374151",
                  transition: "color 0.2s",
                  position: "relative",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.pri)}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = isActive ? C.pri : "#374151")
                }
              >
                {link.label}
                {/* Active underline dot */}
                {isActive && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: -4,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: C.pri,
                    }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* ── Right: CTA + Hamburger ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: C.pri,
              color: C.white,
              textDecoration: "none",
              borderRadius: 6,
              padding: "10px 18px",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: 14,
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              whiteSpace: "nowrap",
            }}
          >
            Start Project <ArrowIcon />
          </motion.a>

          {/* Hamburger — visible on mobile via CSS */}
          <button
            className="nav-burger"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: C.text,
              padding: 4,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              top: 70,
              left: 0,
              right: 0,
              background: C.white,
              padding: "16px 24px 24px",
              boxShadow: "0 24px 48px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              zIndex: 999,
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  textDecoration: "none",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: 16,
                  color: activePage === link.label ? C.pri : C.text,
                  padding: "12px 0",
                  borderBottom: `1px solid ${C.border}`,
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              onClick={() => setMobileOpen(false)}
              style={{
                marginTop: 14,
                background: C.pri,
                color: C.white,
                textDecoration: "none",
                padding: "13px 20px",
                borderRadius: 8,
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: 15,
                textAlign: "center",
              }}
            >
              Start Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
