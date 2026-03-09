import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import ServiceCard from '../components/ServiceCard'
import BlogCard from '../components/BlogCard'
import useScrollReveal from '../hooks/useScrollReveal'

const services = [
  { icon: '🎨', title: 'Web Design', iconBg: 'var(--blue-lt)', desc: 'Visually stunning, brand-aligned websites designed to attract and convert your ideal customers.' },
  { icon: '✦', title: 'UI/UX Design', iconBg: 'var(--purple-lt)', desc: 'Research-backed user interfaces that are intuitive, engaging, and optimised for real human behaviour.' },
  { icon: '⚡', title: 'Web Development', iconBg: '#ECFDF5', desc: 'Fast, secure, and scalable web applications built with modern full-stack technologies.' },
  { icon: '🤖', title: 'AI Automation', iconBg: '#FFF7ED', desc: 'Intelligent automation systems that streamline workflows and eliminate time-consuming manual tasks.' },
]

const blogs = [
  {
    emoji: '🎨', imgBg: 'linear-gradient(135deg,#dbeafe,#ede9fe)',
    tags: [{ label: 'Web Design', color: 'blue' }, { label: '2026 Trends', color: 'purple' }],
    title: 'Web Design Trends in 2026 You Need to Know',
    desc: 'Discover the modern web design trends shaping digital experiences this year.',
    authorInitials: 'PS', authorName: 'Priya Sharma', authorBg: 'linear-gradient(135deg,#2351E5,#7B2FF7)',
    date: 'Feb 28, 2026', readTime: '5 min',
  },
  {
    emoji: '🤖', imgBg: 'linear-gradient(135deg,#FFF7ED,#FEF3C7)',
    tags: [{ label: 'AI Automation', color: 'amber' }, { label: 'Business', color: 'green' }],
    title: 'How AI Automation Is Transforming Modern Businesses',
    desc: 'AI is fundamentally changing how businesses operate — here is how to leverage it.',
    authorInitials: 'AM', authorName: 'Arjun Mehta', authorBg: 'linear-gradient(135deg,#D97706,#DC2626)',
    date: 'Feb 14, 2026', readTime: '7 min',
  },
  {
    emoji: '✦', imgBg: 'linear-gradient(135deg,#f3e8ff,#e0e7ff)',
    tags: [{ label: 'UI/UX', color: 'purple' }, { label: 'Startups', color: 'green' }],
    title: 'Best UI/UX Practices for Startups in 2026',
    desc: 'Great design improves customer experience and increases business conversions.',
    authorInitials: 'PS', authorName: 'Priya Sharma', authorBg: 'linear-gradient(135deg,#059669,#0284C7)',
    date: 'Jan 30, 2026', readTime: '6 min',
  },
]

export default function Home() {
  useScrollReveal()
  const navigate = useNavigate()

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="hero-blob b1" />
        <div className="hero-blob b2" />
        <div className="hero-grid">
          <div className="hero-text">
            <div className="chip" style={{ animation: 'fadeUp .6s ease both' }}>India's Digital Growth Partner</div>
            <h1 className="hero-h1">
              Building <span className="ital">Intelligent</span><br />Digital Solutions
            </h1>
            <p className="hero-p">
              We design modern websites, create powerful user experiences, develop scalable platforms, and build AI automation systems that help businesses grow.
            </p>
            <div className="hero-acts">
              <Link to="/contact" className="btn btn-p">Start Your Project →</Link>
              <Link to="/services" className="btn btn-o">View Services</Link>
            </div>
            <div style={{ display: 'flex', gap: '2rem', marginTop: '2.5rem', animation: 'fadeUp .65s .4s ease both', flexWrap: 'wrap' }}>
              {[['120+', 'Projects Delivered'], ['98%', 'Client Satisfaction'], ['3+', 'Years Experience']].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: "'Fraunces', serif", fontSize: '1.8rem', fontWeight: 700, background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: '.75rem', color: 'var(--text-soft)', marginTop: 3 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mock visual */}
          <div style={{ position: 'relative' }}>
            <div className="mock-float top"><span className="fi">🏆</span><div><div>Top-Rated Agency</div><div className="fs">5.0 ★ avg rating</div></div></div>
            <div className="mock-card">
              <div className="mock-topbar">
                <div className="mock-dots">
                  <div className="mock-dot" style={{ background: '#FF5F57' }} />
                  <div className="mock-dot" style={{ background: '#FEBC2E' }} />
                  <div className="mock-dot" style={{ background: '#28C840' }} />
                </div>
                <div className="mock-bar" />
                <div className="mock-tag">SolvixAI</div>
              </div>
              <div className="mock-stats">
                {[['120+', 'Projects'], ['98%', 'Satisfied'], ['4', 'Services']].map(([n, l]) => (
                  <div key={l} className="mock-stat">
                    <div className="mock-stat-n">{n}</div>
                    <div className="mock-stat-l">{l}</div>
                  </div>
                ))}
              </div>
              <div className="mock-progress-wrap">
                <div className="mock-progress-label"><span>Client satisfaction</span><span>98%</span></div>
                <div className="mock-progress-bar"><div className="mock-progress-fill" style={{ width: '98%' }} /></div>
              </div>
              <div className="mock-progress-wrap" style={{ marginTop: 8 }}>
                <div className="mock-progress-label"><span>On-time delivery</span><span>95%</span></div>
                <div className="mock-progress-bar"><div className="mock-progress-fill" style={{ width: '95%' }} /></div>
              </div>
            </div>
            <div className="mock-float bottom"><span className="fi">🚀</span><div><div>Founded 2022</div><div className="fs">India · Global reach</div></div></div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="stats-bar">
        <div className="stats-grid wrap">
          {[['120+', 'Projects Delivered'], ['98%', 'Client Satisfaction'], ['3+', 'Years of Excellence'], ['4', 'Core Services']].map(([v, l]) => (
            <div key={l} className="rv">
              <div className="stat-val">{v}</div>
              <div className="stat-lbl">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section style={{ background: '#fff' }}>
        <div className="wrap">
          <div className="section-head">
            <div className="chip rv">What We Do</div>
            <h2 className="h2 rv d1">Our Core <em>Services</em></h2>
            <p className="sub rv d2">Four specialised service areas, delivered with precision and passion by our expert team.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem' }}>
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} delay={`d${i + 1}`} onLearnMore={() => navigate('/services')} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section style={{ background: '#F8FAFF' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div className="rv">
            <div className="chip">About Us</div>
            <h2 className="h2">Who We <em>Are</em></h2>
            <p className="sub">SolvixAI Tech is a digital technology agency focused on building modern websites and AI automation solutions for businesses. Based in Varanasi, India — serving clients globally.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.85rem', margin: '1.75rem 0 2rem' }}>
              {['Quality over quantity — we deliver brilliance', 'Transparent in every client relationship', 'Innovation-first approach in every project', 'Long-term partnerships, not transactions'].map(v => (
                <div key={v} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '.9rem', fontWeight: 500, color: 'var(--text-mid)' }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--blue-lt)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.6rem', color: 'var(--blue)', fontWeight: 700, flexShrink: 0 }}>✓</div>
                  {v}
                </div>
              ))}
            </div>
            <Link to="/about" className="btn btn-p">Learn More About Us →</Link>
          </div>
          <div className="rv d1">
            <div style={{ background: 'linear-gradient(135deg,#EEF2FF,#F3EBFF)', borderRadius: 'var(--r)', padding: '2.5rem', border: '1.5px solid var(--blue-md)' }}>
              <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.5rem', fontWeight: 600, marginBottom: '.5rem' }}>Built on <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--blue)' }}>Values</em></h3>
              <p style={{ fontSize: '.92rem', color: 'var(--text-soft)', lineHeight: 1.75, marginBottom: '1.5rem' }}>The principles that guide every project, every decision, every line of code we write.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[['🎨', 'Design', 'Pixel-perfect design in every project'], ['⚡', 'Speed', 'Fast delivery without sacrificing quality'], ['🤖', 'AI-First', 'Intelligent thinking in every solution'], ['🤝', 'Trust', 'Transparent and honest partnerships']].map(([icon, label, desc]) => (
                  <div key={label} style={{ background: '#fff', borderRadius: 12, padding: '1rem', border: '1px solid var(--border)' }}>
                    <div style={{ fontSize: '1.4rem', marginBottom: 6 }}>{icon}</div>
                    <div style={{ fontWeight: 700, fontSize: '.88rem', marginBottom: 3 }}>{label}</div>
                    <div style={{ fontSize: '.78rem', color: 'var(--text-soft)', lineHeight: 1.5 }}>{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <section style={{ background: '#fff' }}>
        <div className="wrap">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="chip rv">Latest Insights</div>
              <h2 className="h2 rv d1">From Our <em>Blog</em></h2>
            </div>
            <Link to="/blog" className="btn-ghost rv d2">View All Articles →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {blogs.map((b, i) => <BlogCard key={b.title} {...b} delay={`d${i + 1}`} />)}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-ring r1" /><div className="cta-ring r2" /><div className="cta-ring r3" />
        <div className="cta-inner rv">
          <div className="cta-chip">Get Started Today</div>
          <h2 className="cta-heading">Let's Build Your <em>Digital Future</em></h2>
          <p className="cta-text">Partner with SolvixAI Tech to design, develop, and automate your digital success. From first concept to intelligent, scalable product.</p>
          <div className="cta-acts">
            <Link to="/contact" className="btn btn-w">Contact Us →</Link>
            <Link to="/services" className="btn-wo">View Services</Link>
          </div>
          <p className="cta-note">Free consultation · No commitment · 24-hour response</p>
        </div>
      </section>
    </>
  )
}
