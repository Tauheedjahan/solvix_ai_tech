import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'

const services = [
  {
    icon: '🎨', title: 'Web Design', iconBg: 'var(--blue-lt)',
    desc: 'We create visually stunning, brand-aligned websites that attract your ideal customers and convert visitors into clients. Every design is crafted with your business goals in mind — beautiful, functional, and memorable.',
    features: ['Custom brand-aligned design', 'Mobile-first responsive layouts', 'Fast loading & performance optimised', 'SEO-friendly structure'],
    tag: 'blue',
  },
  {
    icon: '✦', title: 'UI/UX Design', iconBg: 'var(--purple-lt)',
    desc: 'Our research-backed UI/UX design process ensures every interface is intuitive, engaging, and optimised for real human behaviour. We turn complex systems into simple, delightful experiences your users will love.',
    features: ['User research & personas', 'Wireframing & prototyping', 'Usability testing', 'Design system creation'],
    tag: 'purple',
  },
  {
    icon: '⚡', title: 'Web Development', iconBg: '#ECFDF5',
    desc: 'We build fast, secure, and scalable web applications using modern full-stack technologies. From simple websites to complex SaaS platforms — our code is clean, maintainable, and built to grow with your business.',
    features: ['React, Next.js, Node.js', 'Scalable cloud architecture', 'API development & integration', 'E-commerce & SaaS platforms'],
    tag: 'green',
  },
  {
    icon: '🤖', title: 'AI Automation', iconBg: '#FFF7ED',
    desc: 'We build intelligent automation systems powered by AI that eliminate repetitive tasks, streamline workflows, and drive productivity. From AI chatbots to smart data pipelines — we make your business work smarter.',
    features: ['AI chatbots & virtual assistants', 'Workflow automation systems', 'Machine learning integration', 'Data intelligence dashboards'],
    tag: 'amber',
  },
]

const techStack = ['React', 'Next.js', 'Node.js', 'Python', 'TensorFlow', 'MongoDB', 'TypeScript', 'WordPress', 'Docker', 'AWS', 'LangChain', 'Figma']

export default function Services() {
  useScrollReveal()

  return (
    <>
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-blob b1" /><div className="hero-blob b2" />
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <div className="hero-crumb" style={{ justifyContent: 'center' }}>Home <span className="sep"> / </span><span className="cur">Services</span></div>
          <h1 className="hero-h1" style={{ textAlign: 'center' }}>Our <span className="ital">Services</span></h1>
          <p className="hero-p" style={{ maxWidth: 600, margin: '1.2rem auto 2.4rem' }}>Four core service areas, each delivered with exceptional expertise and a commitment to your business growth.</p>
          <div className="hero-acts" style={{ justifyContent: 'center' }}>
            <Link to="/contact" className="btn btn-p">Start Your Project →</Link>
            <Link to="/about" className="btn btn-o">About Our Team</Link>
          </div>
        </div>
      </section>

      {/* SERVICES DETAILED */}
      <section style={{ background: '#fff', padding: '90px 0' }}>
        <div className="wrap">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="rv"
              style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                gap: '4rem',
                alignItems: 'center',
                marginBottom: i < services.length - 1 ? '5rem' : 0,
              }}
            >
              {/* Text side */}
              <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                <div className={`chip${s.tag === 'purple' ? ' purple' : ''}`} style={s.tag === 'green' ? { color: '#059669', background: '#ECFDF5' } : s.tag === 'amber' ? { color: '#D97706', background: '#FFF7ED' } : {}}>
                  {s.icon} {s.title}
                </div>
                <h2 className="h2" style={{ marginBottom: '1rem' }}>{s.title}</h2>
                <p style={{ fontSize: '.97rem', color: 'var(--text-soft)', lineHeight: 1.82, marginBottom: '1.5rem' }}>{s.desc}</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '.7rem', marginBottom: '1.75rem' }}>
                  {s.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '.9rem', fontWeight: 500, color: 'var(--text-mid)' }}>
                      <span style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--blue-lt)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.6rem', color: 'var(--blue)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-p">Get Started →</Link>
              </div>
              {/* Visual side */}
              <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                <div style={{ background: 'linear-gradient(135deg, var(--blue-lt), var(--purple-lt))', borderRadius: 'var(--r)', padding: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 260, border: '1.5px solid var(--blue-md)' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '4.5rem', marginBottom: '1rem' }}>{s.icon}</div>
                    <div style={{ fontFamily: "'Fraunces', serif", fontSize: '1.3rem', fontWeight: 600, color: 'var(--blue)' }}>{s.title}</div>
                    <div style={{ fontSize: '.85rem', color: 'var(--text-soft)', marginTop: '.4rem' }}>SolvixAI Tech</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section style={{ background: '#F8FAFF', padding: '80px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap">
          <div className="section-head">
            <div className="chip rv">Technologies</div>
            <h2 className="h2 rv d1">Our Tech <em>Stack</em></h2>
            <p className="sub rv d2">We work with the best modern technologies to deliver scalable, high-performance solutions.</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.85rem', justifyContent: 'center' }}>
            {techStack.map((t, i) => (
              <div
                key={t}
                className={`rv d${(i % 6) + 1}`}
                style={{ padding: '10px 22px', borderRadius: 100, background: '#fff', border: '1.5px solid var(--border)', fontSize: '.88rem', fontWeight: 600, color: 'var(--text-mid)', cursor: 'default', transition: 'all .25s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--blue)'; e.currentTarget.style.color = 'var(--blue)'; e.currentTarget.style.background = 'var(--blue-lt)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-mid)'; e.currentTarget.style.background = '#fff'; }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-ring r1" /><div className="cta-ring r2" /><div className="cta-ring r3" />
        <div className="cta-inner rv">
          <div className="cta-chip">Ready to Start?</div>
          <h2 className="cta-heading">Let's Build Something <em>Powerful</em></h2>
          <p className="cta-text">Get in touch with our team and let's discuss how we can help your business grow with modern design, development, and AI automation.</p>
          <div className="cta-acts">
            <Link to="/contact" className="btn btn-w">Start Your Project →</Link>
            <Link to="/about" className="btn-wo">Meet Our Team</Link>
          </div>
        </div>
      </section>
    </>
  )
}
