import { useState, useRef } from "react";
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

function Reveal({ children, delay = 0, y = 28 }) {
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

const IcoEmail = ({ size = 24, white = false }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke={white ? "white" : C.pri}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="ct-icon-svg"
    style={{ width: size, height: size }}
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
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
const IcoSend = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 16, height: 16 }}
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);
const IcoCheck = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke={C.pri}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 48, height: 48 }}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
const IcoClock = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke={C.pri}
    strokeWidth="1.8"
    strokeLinecap="round"
    style={{ width: 18, height: 18 }}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    details: "",
  });
  const [status, setStatus] = useState("idle");
  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // ─────────────────────────────────────────────────────────────
  const FORMSPREE_ID = "xojknezw"; // 👈 SIRF YE CHANGE KARO

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          service: form.service,
          message: form.details,
          _subject: `New Project Inquiry from ${form.name} — SolvixAiTech`,
        }),
      });
      if (res.ok) setStatus("done");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Navbar activePage="Contact" />

      {/* ── HERO ── */}
      <section className="ct-hero">
        <div className="ct-hero-grid" />
        <div
          className="ct-hero-blob"
          style={{ width: 340, height: 340, top: -100, right: -100 }}
        />
        <div
          className="ct-hero-blob"
          style={{
            width: 200,
            height: 200,
            bottom: -50,
            left: 60,
            opacity: 0.35,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="ct-label ct-label-dark">Get In Touch</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(30px,5vw,52px)",
              color: "white",
              lineHeight: 1.15,
              letterSpacing: -1.5,
              marginBottom: 18,
            }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.8,
              maxWidth: 460,
              margin: "0 auto",
            }}
          >
            Have a project in mind? Let's discuss how we can help you build it.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            style={{ marginTop: 28, display: "flex", justifyContent: "center" }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 20px",
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 100,
                color: "rgba(255,255,255,0.85)",
                fontSize: 13,
                fontFamily: "'Poppins',sans-serif",
                fontWeight: 600,
              }}
            >
              <IcoClock /> We respond within 24 hours
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT OPTIONS ── */}
      <section className="ct-options-sec">
        <div className="container">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <span className="ct-label ct-label-light">Reach Us Directly</span>
              <h2
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(24px,3.5vw,34px)",
                  color: C.text,
                  letterSpacing: -0.5,
                  marginBottom: 10,
                }}
              >
                Choose How to Connect
              </h2>
              <p
                style={{
                  fontSize: 15,
                  color: C.muted,
                  maxWidth: 400,
                  margin: "0 auto",
                  lineHeight: 1.75,
                }}
              >
                Pick the channel that works best for you.
              </p>
            </div>
          </Reveal>
          <div className="ct-options-grid">
            <Reveal delay={0.05}>
              <div className="ct-option-card">
                <div className="ct-option-icon">
                  <IcoEmail />
                </div>
                <div className="ct-option-label">Email</div>
                <div className="ct-option-value">
                  affordableai.tech@gmail.com
                </div>
                <div className="ct-option-desc">
                  Send us your requirements and we'll get back to you within 24
                  hours.
                </div>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=affordableai.tech@gmail.com&su=Project%20Inquiry%20%E2%80%94%20SolvixAiTech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ct-opt-btn ct-opt-btn-pri"
                >
                  <IcoEmail size={14} white />
                  Send Email
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="ct-option-card">
                <div className="ct-option-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#25D366"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ct-icon-svg"
                    style={{ width: 24, height: 24 }}
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <div className="ct-option-label">WhatsApp</div>
                <div className="ct-option-value">Chat with us instantly</div>
                <div className="ct-option-desc">
                  Prefer a quick chat? Message us on WhatsApp for a fast
                  response.
                </div>
                <a
                  href="https://wa.me/918707500643?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ct-opt-btn ct-opt-btn-green"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: 14, height: 14 }}
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  Start WhatsApp Chat
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section className="ct-form-sec">
        <div className="container">
          <div className="ct-form-wrap">
            <Reveal y={24}>
              <div className="ct-form-left">
                <span className="ct-label ct-label-light">Send a Message</span>
                <h2>Tell Us About Your Project</h2>
                <p>
                  Fill in the form and our team will get back to you with a
                  tailored proposal within 24 hours.
                </p>
                {[
                  {
                    icon: <IcoEmail size={18} />,
                    label: "Email",
                    val: "affordableai.tech@gmail.com",
                  },
                  {
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={C.pri}
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ width: 18, height: 18 }}
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="18" cy="6" r="1" />
                      </svg>
                    ),
                    label: "Instagram",
                    val: (
                      <a
                        href="https://www.instagram.com/solvixaitech/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: C.pri, textDecoration: "none" }}
                      >
                        @solvixaitech
                      </a>
                    ),
                  },
                  {
                    icon: <IcoClock />,
                    label: "Response Time",
                    val: "Within 24 hours",
                  },
                ].map((row) => (
                  <div key={row.label} className="ct-info-row">
                    <div className="ct-info-icon">{row.icon}</div>
                    <div>
                      <div className="ct-info-label">{row.label}</div>
                      <div className="ct-info-val">{row.val}</div>
                    </div>
                  </div>
                ))}
                <div
                  style={{
                    marginTop: 40,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {[
                    "Free project consultation",
                    "Transparent pricing",
                    "No commitment required",
                  ].map((item) => (
                    <div
                      key={item}
                      style={{ display: "flex", alignItems: "center", gap: 10 }}
                    >
                      <span
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          background: C.priLight,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={C.pri}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ width: 11, height: 11 }}
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                      <span
                        style={{ fontSize: 14, color: C.text, fontWeight: 500 }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1} y={24}>
              <div className="ct-form-card">
                {status === "error" ? (
                  <div className="ct-success">
                    <div style={{ marginBottom: 18, color: "#ef4444" }}>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ width: 48, height: 48 }}
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m15 9-6 6M9 9l6 6" />
                      </svg>
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        fontWeight: 700,
                        fontSize: 20,
                        color: "#1a1a2e",
                        marginBottom: 10,
                      }}
                    >
                      Something went wrong
                    </h3>
                    <p
                      style={{
                        fontSize: 14,
                        color: "#6b7280",
                        lineHeight: 1.75,
                        marginBottom: 24,
                      }}
                    >
                      Please try again, or email us directly at{" "}
                      <a
                        href="mailto:affordableai.tech@gmail.com"
                        style={{ color: "#136360" }}
                      >
                        affordableai.tech@gmail.com
                      </a>
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      style={{
                        background: "none",
                        border: "1.5px solid #e5e7eb",
                        borderRadius: 8,
                        padding: "10px 22px",
                        fontFamily: "'Poppins',sans-serif",
                        fontWeight: 600,
                        fontSize: 14,
                        color: "#6b7280",
                        cursor: "pointer",
                      }}
                    >
                      Try Again
                    </button>
                  </div>
                ) : status === "done" ? (
                  <div className="ct-success">
                    <div style={{ marginBottom: 18 }}>
                      <IcoCheck />
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        fontWeight: 700,
                        fontSize: 22,
                        color: C.text,
                        marginBottom: 10,
                      }}
                    >
                      Message Sent!
                    </h3>
                    <p
                      style={{
                        fontSize: 15,
                        color: C.muted,
                        lineHeight: 1.75,
                        marginBottom: 24,
                      }}
                    >
                      Thank you for reaching out. We'll review your project
                      details and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setStatus("idle");
                        setForm({
                          name: "",
                          email: "",
                          service: "",
                          details: "",
                        });
                      }}
                      style={{
                        background: "none",
                        border: `1.5px solid ${C.border}`,
                        borderRadius: 8,
                        padding: "10px 22px",
                        fontFamily: "'Poppins',sans-serif",
                        fontWeight: 600,
                        fontSize: 14,
                        color: C.muted,
                        cursor: "pointer",
                      }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        fontWeight: 700,
                        fontSize: 18,
                        color: C.text,
                        marginBottom: 6,
                      }}
                    >
                      Start a Conversation
                    </div>
                    <p
                      style={{
                        fontSize: 13,
                        color: C.muted,
                        marginBottom: 28,
                        lineHeight: 1.6,
                      }}
                    >
                      Fill in the details below and we'll reach out shortly.
                    </p>
                    <div className="ct-form-row">
                      <div className="ct-field">
                        <label>
                          Full Name <span>*</span>
                        </label>
                        <input
                          className="ct-input"
                          type="text"
                          name="name"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="ct-field">
                        <label>
                          Email Address <span>*</span>
                        </label>
                        <input
                          className="ct-input"
                          type="email"
                          name="email"
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="ct-field">
                      <label>
                        Service Required <span>*</span>
                      </label>
                      <select
                        className="ct-select"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Select a service...
                        </option>
                        <option value="web-design">Web Design</option>
                        <option value="ui-ux">UI/UX Design</option>
                        <option value="web-dev">Web Development</option>
                        <option value="ai-automation">AI Automation</option>
                      </select>
                    </div>
                    <div className="ct-field">
                      <label>
                        Project Details <span>*</span>
                      </label>
                      <textarea
                        className="ct-textarea"
                        name="details"
                        placeholder="Describe your project — goals, timeline, budget..."
                        value={form.details}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="ct-submit"
                      disabled={status === "sending"}
                    >
                      {status === "sending" ? (
                        <>
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            style={{
                              width: 16,
                              height: 16,
                              animation: "spin 0.8s linear infinite",
                            }}
                          >
                            <path d="M21 12a9 9 0 1 1-6.22-8.56" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <IcoSend />
                          Send Message
                        </>
                      )}
                    </button>
                    <p
                      style={{
                        fontSize: 12,
                        color: C.muted,
                        textAlign: "center",
                        marginTop: 14,
                        lineHeight: 1.6,
                      }}
                    >
                      By submitting you agree to our{" "}
                      <a href="/privacy" style={{ color: C.pri }}>
                        Privacy Policy
                      </a>
                      . We never share your data.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="ct-cta-sec">
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          <Reveal>
            <span className="ct-label ct-label-dark">Let's Build Together</span>
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
              Ready to start your project?
            </h2>
            <p
              style={{
                fontSize: 17,
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.8,
                maxWidth: 440,
                margin: "0 auto 40px",
              }}
            >
              Let's build something amazing together.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&to=affordableai.tech@gmail.com&su=Project%20Inquiry%20%E2%80%94%20SolvixAiTech"
              target="_blank"
              rel="noopener noreferrer"
              className="ct-cta-btn"
            >
              <IcoArrow white />
              Start Your Project
            </a>
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
                "Reply within 24h",
                "No commitment needed",
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
