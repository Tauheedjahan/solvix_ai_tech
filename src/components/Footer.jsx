import { motion } from "framer-motion";

// ── Theme ──────────────────────────────────────────────────────
const C = {
  pri: "#136360", // Primary Teal color used for 'AI'
  white: "#ffffff",
  darkBg: "#0f2e2d",
  darkText: "#B5C4C3",
};

// ── Flattened Navigation for Footer (Right Side) ───────────────
const FOOTER_NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const LEGAL_LINKS = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

export default function Footer() {
  return (
    <footer
      style={{
        background: C.darkBg,
        padding: "80px 24px 40px",
        color: C.darkText,
      }}
    >
      <div className="container">
        {/* ── Main Flex Container (Left Branding | Right Nav) ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap", // For responsiveness
            gap: 40,
            marginBottom: 60,
          }}
        >
          {/* LEFT SIDE: Branding (Big & Bold Text Only) */}
          <div style={{ flex: "1 1 350px" }}>
            <a
              href="/"
              style={{
                textDecoration: "none",
                display: "block",
                marginBottom: 20,
              }}
            >
              {/* BIG and BOLD Company Name */}
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 800, // Extra Bold
                  fontSize: 76, // Big Size
                  color: C.white,
                  letterSpacing: -1.5,
                  lineHeight: 1.1,
                }}
              >
                Solvix<span style={{ color: C.pri }}>AI</span>Tech
              </div>
            </a>

            <p style={{ fontSize: 14, lineHeight: 1.8, maxWidth: 320 }}>
              Building world-class web and AI solutions for ambitious businesses
              worldwide.
            </p>
            {/* Social icons deleted from here */}
          </div>

          {/* RIGHT SIDE: Horizontal Navbar */}
          <nav
            style={{
              display: "flex",
              gap: 32,
              flexWrap: "wrap",
              marginTop: 10, // Approximate alignment with top of text
            }}
          >
            {FOOTER_NAV.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  textDecoration: "none",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  color: C.white,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.pri)}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.white)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* ── Bottom Bar ── */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 30,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <p style={{ fontSize: 13, color: "rgba(181,196,195,0.4)" }}>
            © {new Date().getFullYear()} SolvixAITech. All rights reserved.
          </p>

          <div style={{ display: "flex", gap: 24 }}>
            {LEGAL_LINKS.map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  fontSize: 13,
                  color: "rgba(181,196,195,0.4)",
                  textDecoration: "none",
                }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
