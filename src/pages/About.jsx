import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'

const founders = [
  {
    avatar: '👩‍💻', avatarBg: 'linear-gradient(135deg,#EEF2FF,#C7D2FE)',
    name: 'Priya Sharma', role: 'Co-Founder & Software Engineer', roleClass: '',
    bio1: 'Priya Sharma is a passionate software engineer with expertise in modern web technologies and user-focused digital solutions. She specialises in building responsive websites, scalable web applications, and intuitive user interfaces.',
    bio2: 'With strong experience in frontend development, UI/UX design, and modern web frameworks, Priya focuses on creating digital products that are both visually appealing and highly functional.',
    skills: ['Web Development', 'UI/UX Design', 'Frontend Engineering', 'Responsive Design', 'SaaS Interfaces'],
    skillClass: '',
  },
  {
    avatar: '👨‍💻', avatarBg: 'linear-gradient(135deg,#F3EBFF,#DDD6FE)',
    name: 'Arjun Mehta', role: 'Co-Founder & AI Automation Specialist', roleClass: 'purple',
    bio1: 'Arjun Mehta is an AI automation expert focused on building intelligent systems that help businesses automate processes and improve efficiency. He specialises in AI-powered tools, workflow automation, machine learning integration, and data-driven solutions.',
    bio2: 'At SolvixAI Tech, Arjun leads the development of advanced automation systems and AI-powered platforms that help businesses scale faster and reduce manual workload.',
    skills: ['AI Automation', 'Machine Learning', 'Workflow Automation', 'Data Intelligence', 'AI Chatbots'],
    skillClass: 'purple',
  },
]

const expertise = [
  { icon: '🎨', title: 'Web Design', bg: 'var(--blue-lt)' },
  { icon: '✦', title: 'UI/UX Design', bg: 'var(--purple-lt)' },
  { icon: '⚡', title: 'Web Development', bg: '#ECFDF5' },
  { icon: '🤖', title: 'AI Automation', bg: '#FFF7ED' },
  { icon: '📱', title: 'SaaS Development', bg: 'var(--blue-lt)' },
  { icon: '📊', title: 'Data Intelligence', bg: 'var(--purple-lt)' },
]

export default function About() {
  useScrollReveal()

  return (
    <>
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-blob b1" /><div className="hero-blob b2" />
        <div className="hero-grid" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="hero-text">
            <div className="hero-crumb">Home <span className="sep"> / </span><span className="cur">About Us</span></div>
            <h1 className="hero-h1">About <span className="ital">SolvixAI Tech</span></h1>
            <p className="hero-p">SolvixAI Tech is a modern digital technology agency helping businesses grow with innovative design, powerful development, and intelligent automation solutions.</p>
            <div className="hero-acts">
              <Link to="/contact" className="btn btn-p">Start a Project →</Link>
              <Link to="/services" className="btn btn-o">Our Services</Link>
            </div>
          </div>
          {/* mini visual */}
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
                <div className="mock-tag">Team</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
                {[{ icon: '👩‍💻', bg: 'var(--blue-lt)', label: 'Priya Sharma' }, { icon: '👨‍💻', bg: 'var(--purple-lt)', label: 'Arjun Mehta' }].map(f => (
                  <div key={f.label} style={{ background: f.bg, borderRadius: 12, padding: '1rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.8rem', marginBottom: 6 }}>{f.icon}</div>
                    <div style={{ fontSize: '.7rem', fontWeight: 600, color: 'var(--text-mid)' }}>{f.label}</div>
                  </div>
                ))}
              </div>
              <div className="mock-progress-wrap">
                <div className="mock-progress-label"><span>98% Client Satisfaction</span><span>98%</span></div>
                <div className="mock-progress-bar"><div className="mock-progress-fill" style={{ width: '98%' }} /></div>
              </div>
            </div>
            <div className="mock-float bottom"><span className="fi">🚀</span><div><div>3+ Years</div><div className="fs">Building digital futures</div></div></div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stats-grid wrap">
          {[['120+', 'Projects Delivered'], ['98%', 'Client Satisfaction'], ['3+', 'Years of Excellence'], ['4', 'Core Services']].map(([v, l]) => (
            <div key={l} className="rv"><div className="stat-val">{v}</div><div className="stat-lbl">{l}</div></div>
          ))}
        </div>
      </div>

      {/* STORY */}
      <section style={{ background: '#fff', padding: '90px 0' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '5rem', alignItems: 'center' }}>
          <div className="rv">
            <div className="chip">Our Story</div>
            <h2 className="h2">How We <em>Began</em></h2>
            <div style={{ marginTop: '1.25rem' }}>
              {['SolvixAI Tech was founded with a clear mission: to help businesses build powerful digital products and automate their workflows using modern technology.',
                'We combine creative design, advanced development, and AI-powered automation to deliver solutions that improve efficiency and drive measurable growth — not just beautiful interfaces, but systems that genuinely work.',
                'Our team focuses on building scalable, user-friendly, and high-performance digital platforms. Every project we take on is an opportunity to push what\'s possible and deliver something our clients are genuinely proud of.'].map((p, i) => (
                <p key={i} style={{ fontSize: '.97rem', color: 'var(--text-mid)', lineHeight: 1.82, marginBottom: '1.25rem' }}>{p}</p>
              ))}
            </div>
            <Link to="/contact" className="btn btn-p" style={{ marginTop: '.5rem' }}>Start a Project →</Link>
          </div>
          <div className="rv d1">
            <div style={{ background: 'linear-gradient(135deg,#EEF2FF,#F3EBFF)', borderRadius: 'var(--r)', padding: '2.5rem', border: '1.5px solid var(--blue-md)' }}>
              <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.5rem', fontWeight: 600, marginBottom: '.5rem' }}>Built on <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--blue)' }}>Values</em></h3>
              <p style={{ fontSize: '.92rem', color: 'var(--text-soft)', lineHeight: 1.75, marginBottom: '2rem' }}>The principles that guide every project and every decision.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.85rem' }}>
                {['Quality over quantity — we\'d rather do fewer projects brilliantly', 'Transparency in every client relationship, start to finish', 'Innovation-first — we stay ahead so our clients stay ahead', 'Long-term partnerships, not transactional projects', 'AI-augmented thinking built into every solution'].map(v => (
                  <div key={v} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '.9rem', fontWeight: 500, color: 'var(--text-mid)' }}>
                    <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--blue-lt)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.6rem', color: 'var(--blue)', fontWeight: 700, flexShrink: 0 }}>✓</div>
                    {v}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section style={{ background: '#F8FAFF', padding: '90px 0' }}>
        <div className="wrap">
          <div className="section-head">
            <div className="chip rv" style={{ justifyContent: 'center' }}>Meet the Team</div>
            <h2 className="h2 rv d1" style={{ textAlign: 'center' }}>The Founders Behind <em>SolvixAI Tech</em></h2>
            <p className="sub rv d2" style={{ textAlign: 'center', maxWidth: 560, margin: '1rem auto 0' }}>Two specialists. One shared vision. Building the future of digital business.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: 900, margin: '0 auto' }}>
            {founders.map((f, i) => (
              <div key={f.name} className={`founder-card rv d${i + 1}`}>
                <div className="founder-header">
                  <div className="founder-avatar" style={{ background: f.avatarBg }}>{f.avatar}</div>
                  <div className="founder-name">{f.name}</div>
                  <div style={{ marginTop: 8 }}>
                    <span className={`founder-role ${f.roleClass}`}>{f.role}</span>
                  </div>
                </div>
                <div className="founder-body">
                  <p className="founder-bio">{f.bio1}</p>
                  <p className="founder-bio">{f.bio2}</p>
                  <div className="founder-skills">
                    {f.skills.map(s => <span key={s} className={`founder-skill ${f.skillClass}`}>{s}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section style={{ padding: '90px 0', background: 'linear-gradient(135deg,#1635BB,#5C15D4)', position: 'relative', overflow: 'hidden' }}>
        <div className="cta-ring r1" /><div className="cta-ring r2" />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto', padding: '0 5%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div className="rv">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,255,255,.12)', color: 'rgba(255,255,255,.9)', padding: '5px 14px', borderRadius: 100, fontSize: '.72rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,.2)', marginBottom: '1.25rem' }}>Our Mission</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 600, color: '#fff', lineHeight: 1.1, letterSpacing: '-.025em', marginBottom: '1.25rem' }}>Empowering Businesses Through <em style={{ fontStyle: 'italic', fontWeight: 300, opacity: .82 }}>Intelligent</em> Tech</h2>
            <p style={{ color: 'rgba(255,255,255,.72)', fontSize: '1rem', lineHeight: 1.78 }}>Our mission is to empower businesses with modern digital solutions that combine design, technology, and artificial intelligence — creating products that perform exceptionally and scale effortlessly.</p>
            <Link to="/contact" className="btn" style={{ marginTop: '2rem', background: 'rgba(255,255,255,.15)', color: '#fff', border: '1.5px solid rgba(255,255,255,.3)', backdropFilter: 'blur(8px)' }}>Start Your Project →</Link>
          </div>
          <div className="rv d1" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[['🎨', 'Design Excellence', 'Beautiful, user-centred design that converts visitors into customers.'], ['⚡', 'Powerful Development', 'High-performance code built with modern technologies.'], ['🤖', 'Intelligent Automation', 'AI-powered systems that free your team to focus on growth.'], ['🤝', 'Long-Term Partnership', 'We\'re your committed partner from day one and beyond.']].map(([icon, title, desc]) => (
              <div key={title} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', background: 'rgba(255,255,255,.08)', borderRadius: 'var(--r-sm)', padding: '1.4rem', border: '1px solid rgba(255,255,255,.1)' }}>
                <div style={{ width: 42, height: 42, flexShrink: 0, borderRadius: 11, background: 'rgba(255,255,255,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.15rem' }}>{icon}</div>
                <div><div style={{ fontWeight: 700, fontSize: '.92rem', color: '#fff', marginBottom: 3 }}>{title}</div><div style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.65)', lineHeight: 1.55 }}>{desc}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section style={{ background: '#fff', padding: '90px 0' }}>
        <div className="wrap">
          <div className="section-head">
            <div className="chip rv">What We Do Best</div>
            <h2 className="h2 rv d1" style={{ textAlign: 'center' }}>Our Areas of <em>Expertise</em></h2>
            <p className="sub rv d2" style={{ textAlign: 'center', maxWidth: 520, margin: '1rem auto 0' }}>Six core capability areas where we consistently deliver exceptional results.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', maxWidth: 1000, margin: '0 auto' }}>
            {expertise.map((e, i) => (
              <div
                key={e.title}
                className={`service-card rv d${(i % 3) + 1}`}
                style={{ textAlign: 'center' }}
              >
                <div className="service-icon" style={{ background: e.bg, margin: '0 auto 1.25rem' }}>{e.icon}</div>
                <h3 style={{ fontFamily: "'Fraunces', serif" }}>{e.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-ring r1" /><div className="cta-ring r2" /><div className="cta-ring r3" />
        <div className="cta-inner rv">
          <div className="cta-chip">Let's Work Together</div>
          <h2 className="cta-heading">Let's Build the Future <em>Together</em></h2>
          <p className="cta-text">Partner with SolvixAI Tech to design, develop, and automate your digital success.</p>
          <div className="cta-acts">
            <Link to="/contact" className="btn btn-w">Start Your Project →</Link>
            <Link to="/services" className="btn-wo">View Services</Link>
          </div>
          <p className="cta-note">Free consultation · No commitment required</p>
        </div>
      </section>
    </>
  )
}
