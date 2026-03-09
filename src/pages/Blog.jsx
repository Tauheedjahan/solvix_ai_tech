import { useState } from 'react'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import useScrollReveal from '../hooks/useScrollReveal'

const allPosts = [
  { id: 1, emoji: '🎨', imgBg: 'linear-gradient(135deg,#dbeafe,#ede9fe)', tags: [{ label: 'Web Design', color: 'blue' }, { label: '2026 Trends', color: 'purple' }], title: 'Web Design Trends in 2026 You Need to Know', desc: 'Discover the modern web design trends shaping digital experiences this year — from glassmorphism to AI-generated layouts and beyond.', authorInitials: 'PS', authorName: 'Priya Sharma', authorBg: 'linear-gradient(135deg,#2351E5,#7B2FF7)', date: 'Feb 28, 2026', readTime: '5 min', cat: 'webdesign' },
  { id: 2, emoji: '✦', imgBg: 'linear-gradient(135deg,#f3e8ff,#e0e7ff)', tags: [{ label: 'UI/UX Design', color: 'purple' }, { label: 'Startups', color: 'green' }], title: 'Why Every Startup Needs Great UI/UX Design', desc: 'Great design improves customer experience and increases business conversions. Here\'s why startups should invest in UI/UX from day one.', authorInitials: 'PS', authorName: 'Priya Sharma', authorBg: 'linear-gradient(135deg,#059669,#0284C7)', date: 'Feb 20, 2026', readTime: '6 min', cat: 'uiux' },
  { id: 3, emoji: '🤖', imgBg: 'linear-gradient(135deg,#FFF7ED,#FEF3C7)', tags: [{ label: 'AI Automation', color: 'amber' }, { label: 'Business', color: 'green' }], title: 'Top AI Automation Tools for Small Businesses', desc: 'AI tools are helping businesses automate repetitive tasks and save dozens of hours every week. Here are the best tools for 2026.', authorInitials: 'AM', authorName: 'Arjun Mehta', authorBg: 'linear-gradient(135deg,#D97706,#DC2626)', date: 'Feb 14, 2026', readTime: '7 min', cat: 'ai' },
  { id: 4, emoji: '⚡', imgBg: 'linear-gradient(135deg,#ECFDF5,#D1FAE5)', tags: [{ label: 'Digital Growth', color: 'green' }, { label: 'SEO', color: 'blue' }], title: 'How Fast Websites Improve SEO Rankings', desc: 'Website speed plays a critical role in user experience and search engine rankings. Learn the key optimisations that make a real difference.', authorInitials: 'PS', authorName: 'Priya Sharma', authorBg: 'linear-gradient(135deg,#059669,#0284C7)', date: 'Feb 7, 2026', readTime: '4 min', cat: 'growth' },
  { id: 5, emoji: '💻', imgBg: 'linear-gradient(135deg,#EEF2FF,#E0E7FF)', tags: [{ label: 'Web Development', color: 'blue' }, { label: 'Startups', color: 'green' }], title: 'Best Web Development Technologies for Startups in 2026', desc: 'Explore the best frameworks and tools for building scalable web applications — React, Next.js, Node.js, and what works best when.', authorInitials: 'AM', authorName: 'Arjun Mehta', authorBg: 'linear-gradient(135deg,#2351E5,#7B2FF7)', date: 'Jan 30, 2026', readTime: '8 min', cat: 'webdev' },
  { id: 6, emoji: '💬', imgBg: 'linear-gradient(135deg,#F3EBFF,#E9D5FF)', tags: [{ label: 'AI Automation', color: 'purple' }, { label: 'Support', color: 'amber' }], title: 'AI Chatbots for Customer Support: Complete Guide', desc: 'Learn how AI chatbots can automate customer support, improve response time, and boost satisfaction — with real implementation steps.', authorInitials: 'AM', authorName: 'Arjun Mehta', authorBg: 'linear-gradient(135deg,#7B2FF7,#2351E5)', date: 'Jan 22, 2026', readTime: '6 min', cat: 'ai' },
  { id: 7, emoji: '🎯', imgBg: 'linear-gradient(135deg,#FFF7ED,#FDE68A)', tags: [{ label: 'Digital Growth', color: 'amber' }, { label: 'Strategy', color: 'blue' }], title: 'Digital Marketing Strategy for Tech Startups', desc: 'How to build a digital marketing strategy that attracts clients and establishes your brand as a technology authority.', authorInitials: 'PS', authorName: 'Priya Sharma', authorBg: 'linear-gradient(135deg,#2351E5,#7B2FF7)', date: 'Jan 15, 2026', readTime: '5 min', cat: 'growth' },
  { id: 8, emoji: '🔒', imgBg: 'linear-gradient(135deg,#ECFDF5,#D1FAE5)', tags: [{ label: 'Web Development', color: 'blue' }, { label: 'Security', color: 'green' }], title: 'Web Security Best Practices Every Developer Should Know', desc: 'Protect your web applications from common vulnerabilities with these essential security practices and tools for 2026.', authorInitials: 'AM', authorName: 'Arjun Mehta', authorBg: 'linear-gradient(135deg,#059669,#047857)', date: 'Jan 8, 2026', readTime: '7 min', cat: 'webdev' },
  { id: 9, emoji: '📊', imgBg: 'linear-gradient(135deg,#EEF2FF,#C7D2FE)', tags: [{ label: 'AI Automation', color: 'purple' }, { label: 'Analytics', color: 'blue' }], title: 'Building AI-Powered Dashboards for Business Intelligence', desc: 'Transform raw data into actionable insights with AI-powered analytics dashboards built for modern businesses.', authorInitials: 'AM', authorName: 'Arjun Mehta', authorBg: 'linear-gradient(135deg,#7B2FF7,#2351E5)', date: 'Dec 30, 2025', readTime: '9 min', cat: 'ai' },
]

const cats = [
  { id: 'all', label: 'All Topics', icon: '📋' },
  { id: 'webdesign', label: 'Web Design', icon: '🎨' },
  { id: 'uiux', label: 'UI/UX Design', icon: '✦' },
  { id: 'webdev', label: 'Web Development', icon: '⚡' },
  { id: 'ai', label: 'AI Automation', icon: '🤖' },
  { id: 'growth', label: 'Digital Growth', icon: '📈' },
]

export default function Blog() {
  const [activeCat, setActiveCat] = useState('all')
  const [nlEmail, setNlEmail] = useState('')
  const [nlDone, setNlDone] = useState(false)
  useScrollReveal()

  const featured = allPosts[0]
  const filtered = activeCat === 'all' ? allPosts : allPosts.filter(p => p.cat === activeCat)

  function subscribe() {
    if (!nlEmail.includes('@')) return
    setNlDone(true)
    setNlEmail('')
  }

  return (
    <>
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-blob b1" /><div className="hero-blob b2" />
        <div className="hero-grid" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="hero-text">
            <div className="hero-crumb">Home <span className="sep"> / </span><span className="cur">Blog & Insights</span></div>
            <h1 className="hero-h1">SolvixAI Tech <span className="ital">Insights</span></h1>
            <p className="hero-p">Expert insights on web design, UI/UX, development, and AI automation to help businesses grow with modern technology.</p>
            <p style={{ fontSize: '.9rem', color: 'var(--text-soft)', lineHeight: 1.7, marginBottom: '2rem', animation: 'fadeUp .65s .25s ease both' }}>Explore our latest articles, guides, and industry insights created by our technology experts.</p>
            <div className="hero-acts">
              <a href="#blog-grid" className="btn btn-p" onClick={e => { e.preventDefault(); document.getElementById('blog-grid')?.scrollIntoView({ behavior: 'smooth' }) }}>Explore Articles →</a>
              <a href="#newsletter" className="btn btn-o" onClick={e => { e.preventDefault(); document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' }) }}>Subscribe</a>
            </div>
            <div style={{ display: 'flex', gap: '2rem', marginTop: '2.5rem', animation: 'fadeUp .65s .4s ease both' }}>
              {[['40+', 'Articles'], ['6', 'Categories'], ['2k+', 'Readers']].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: "'Fraunces', serif", fontSize: '1.8rem', fontWeight: 700, background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: '.75rem', color: 'var(--text-soft)', marginTop: 3 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          {/* visual */}
          <div style={{ position: 'relative' }}>
            <div className="mock-float top"><span className="fi">📖</span><div><div>New Article</div><div className="fs">Published today</div></div></div>
            <div className="mock-card">
              <div className="mock-topbar">
                <div className="mock-dots">
                  <div className="mock-dot" style={{ background: '#FF5F57' }} />
                  <div className="mock-dot" style={{ background: '#FEBC2E' }} />
                  <div className="mock-dot" style={{ background: '#28C840' }} />
                </div>
                <div className="mock-bar" /><div className="mock-tag">Blog</div>
              </div>
              <div style={{ background: 'linear-gradient(135deg,var(--blue-lt),var(--purple-lt))', borderRadius: 10, padding: '1.5rem', textAlign: 'center', marginBottom: 12 }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>🤖</div>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: '.9rem', fontWeight: 600 }}>AI Automation Guide 2026</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {[{ icon: '🎨', bg: 'var(--blue-lt)' }, { icon: '⚡', bg: 'var(--purple-lt)' }].map((b, i) => (
                  <div key={i} style={{ background: b.bg, borderRadius: 10, padding: '1rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.25rem', marginBottom: 6 }}>{b.icon}</div>
                    <div style={{ height: 5, borderRadius: 100, background: 'rgba(35,81,229,.2)', marginBottom: 4 }} />
                    <div style={{ height: 5, borderRadius: 100, background: 'rgba(35,81,229,.1)', width: '60%', margin: '0 auto' }} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mock-float bottom"><span className="fi">✨</span><div><div>40+ Articles</div><div className="fs">Design · Dev · AI</div></div></div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div><div className="chip rv" style={{ marginBottom: '.6rem' }}>Featured Article</div><h2 className="h2 rv d1">Editor's <em>Pick</em></h2></div>
            <button className="btn-ghost rv d2" onClick={() => document.getElementById('blog-grid')?.scrollIntoView({ behavior: 'smooth' })}>View All Articles →</button>
          </div>
          <div className="rv" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 0, borderRadius: 'var(--r)', overflow: 'hidden', border: '1.5px solid var(--border)', boxShadow: 'var(--s-lg)', transition: 'box-shadow .3s' }}>
            <div style={{ background: 'linear-gradient(135deg,var(--blue-lt),var(--purple-lt))', minHeight: 320, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '4.5rem', marginBottom: 12 }}>{featured.emoji}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 140 }}>
                  {[1, .65, 1, .5].map((w, i) => <div key={i} style={{ height: 6, borderRadius: 100, background: i % 2 === 0 ? 'var(--grad)' : 'rgba(35,81,229,.2)', width: `${w * 100}%` }} />)}
                </div>
              </div>
            </div>
            <div style={{ padding: '2.75rem', background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', gap: 8, marginBottom: '1.2rem', flexWrap: 'wrap' }}>
                {featured.tags.map(t => <span key={t.label} className={`blog-tag ${t.color}`}>{t.label}</span>)}
              </div>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.4rem,2.5vw,1.9rem)', fontWeight: 600, lineHeight: 1.2, letterSpacing: '-.02em', marginBottom: '1rem' }}>How AI Automation Is Transforming Modern Businesses in 2026</h2>
              <p style={{ fontSize: '.93rem', color: 'var(--text-soft)', lineHeight: 1.75, marginBottom: '1.75rem' }}>Artificial intelligence is fundamentally changing the way businesses operate. In this comprehensive guide, we explore how AI automation improves efficiency, reduces costs, and drives productivity.</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.5rem' }}>
                <div className="blog-av" style={{ width: 34, height: 34, background: 'linear-gradient(135deg,#2351E5,#7B2FF7)' }}>AM</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '.85rem' }}>Arjun Mehta</div>
                  <div style={{ fontSize: '.75rem', color: 'var(--text-soft)' }}>March 1, 2026 · ⏱ 8 min read</div>
                </div>
              </div>
              <button className="btn btn-p">Read Full Article →</button>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <div style={{ padding: '40px 0', background: '#F8FAFF', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ fontSize: '.78rem', fontWeight: 700, color: 'var(--text-soft)', letterSpacing: '.08em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Filter by:</div>
          <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap' }}>
            {cats.map(c => (
              <button
                key={c.id}
                onClick={() => setActiveCat(c.id)}
                style={{ padding: '8px 18px', borderRadius: 100, fontSize: '.82rem', fontWeight: 600, cursor: 'pointer', border: `1.5px solid ${activeCat === c.id ? 'var(--blue)' : 'var(--border)'}`, background: activeCat === c.id ? 'var(--blue-lt)' : '#fff', color: activeCat === c.id ? 'var(--blue)' : 'var(--text-mid)', transition: 'all .22s', fontFamily: "'Outfit', sans-serif", display: 'flex', alignItems: 'center', gap: 7 }}
              >
                <span>{c.icon}</span> {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* BLOG GRID */}
      <section id="blog-grid" style={{ background: '#fff', padding: '80px 0' }}>
        <div className="wrap">
          <div style={{ marginBottom: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div><div className="chip rv" style={{ marginBottom: '.6rem' }}>Latest Articles</div><h2 className="h2 rv d1">Read, Learn, <em>Grow</em></h2></div>
            <span style={{ fontSize: '.85rem', color: 'var(--text-soft)' }}>{filtered.length} article{filtered.length !== 1 ? 's' : ''}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {filtered.map((p, i) => (
              <BlogCard key={p.id} {...p} delay={`d${(i % 3) + 1}`} />
            ))}
          </div>
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-soft)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📭</div>
              <p>No articles found in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="newsletter" className="newsletter-section">
        <div className="newsletter-inner">
          <div className="nl-icon rv">📬</div>
          <h2 className="nl-h rv d1">Stay Updated With <em>Technology Insights</em></h2>
          <p className="nl-p rv d2">Subscribe to our newsletter and receive the latest insights on web development, design, and AI automation — delivered weekly.</p>
          {nlDone ? (
            <div className="rv" style={{ background: '#fff', borderRadius: 'var(--r-sm)', padding: '1.25rem 2rem', display: 'inline-flex', alignItems: 'center', gap: 10, fontWeight: 600, color: '#059669', border: '1.5px solid #A7F3D0' }}>
              ✅ You're subscribed! Welcome to the community.
            </div>
          ) : (
            <div className="nl-form rv d3">
              <input type="email" className="nl-input" placeholder="Enter your email address" value={nlEmail} onChange={e => setNlEmail(e.target.value)} onKeyDown={e => e.key === 'Enter' && subscribe()} />
              <button className="nl-btn" onClick={subscribe}>Subscribe →</button>
            </div>
          )}
          <p className="rv d4" style={{ fontSize: '.75rem', color: 'var(--text-soft)', marginTop: '1rem' }}>🔒 No spam, ever. Unsubscribe any time. Join 2,000+ readers.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-ring r1" /><div className="cta-ring r2" /><div className="cta-ring r3" />
        <div className="cta-inner rv">
          <div className="cta-chip">Work With Us</div>
          <h2 className="cta-heading">Need Help With Your <em>Digital Project?</em></h2>
          <p className="cta-text">SolvixAI Tech helps businesses build powerful websites and AI automation solutions. Let's turn your vision into reality.</p>
          <div className="cta-acts">
            <Link to="/contact" className="btn btn-w">Start Your Project →</Link>
            <Link to="/services" className="btn-wo">View Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
