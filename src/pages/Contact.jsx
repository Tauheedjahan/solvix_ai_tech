import { useState } from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Contact() {
  useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function update(e) { setForm(f => ({ ...f, [e.target.name]: e.target.value })) }

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1500)
  }

  const [openFaq, setOpenFaq] = useState(null)
  const faqs = [
    { q: 'How long does a project typically take?', a: 'Most projects take 2–6 weeks depending on complexity and scope. A simple website redesign may take 2 weeks, while a full custom web application with AI automation can take 4–8 weeks. We\'ll provide a detailed timeline in your project proposal.' },
    { q: 'Do you work with international clients?', a: 'Yes! SolvixAI Tech works with clients globally. We\'re based in Varanasi, India, but serve businesses across the US, UK, Europe, Southeast Asia, and beyond. Our team communicates effectively across time zones.' },
    { q: 'Do you provide AI automation services?', a: 'Yes, AI automation is one of our core specialties. We build custom AI chatbots, workflow automation systems, data analysis tools, and smart dashboards tailored to your specific business processes.' },
    { q: 'Can you redesign an existing website?', a: 'Absolutely. We specialise in website redesigns — improving visual design, user experience, performance, and conversion rates. We\'ll audit your current site and provide a full redesign proposal.' },
    { q: 'What technologies do you work with?', a: 'We work with React, Next.js, Node.js, Python, MongoDB, WordPress, TensorFlow, LangChain, and more. We choose the best technology stack for your specific project requirements.' },
    { q: 'Do you provide post-launch support?', a: 'Yes, all our projects include 30 days of free post-launch support. We also offer ongoing maintenance and support packages for clients who need long-term technical assistance.' },
  ]

  return (
    <>
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-blob b1" /><div className="hero-blob b2" />
        <div className="hero-grid" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="hero-text">
            <div className="hero-crumb">Home <span className="sep"> / </span><span className="cur">Contact</span></div>
            <h1 className="hero-h1">Let's Build Something <span className="ital">Powerful Together</span></h1>
            <p className="hero-p">Have a project in mind? SolvixAI Tech helps businesses grow with modern websites, stunning UI/UX, and powerful AI automation solutions.</p>
            <div className="hero-acts">
              <a href="#contact-form" className="btn btn-p" onClick={e => { e.preventDefault(); document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' }) }}>Start Your Project →</a>
              <a href="tel:+91XXXXXXXXXX" className="btn btn-o">Schedule a Call</a>
            </div>
          </div>
          {/* visual */}
          <div style={{ position: 'relative' }}>
            <div className="mock-float top"><span className="fi">⚡</span><div><div>Fast Response</div><div className="fs">Reply within 24 hours</div></div></div>
            <div className="mock-card">
              <div className="mock-topbar">
                <div className="mock-dots">
                  <div className="mock-dot" style={{ background: '#FF5F57' }} />
                  <div className="mock-dot" style={{ background: '#FEBC2E' }} />
                  <div className="mock-dot" style={{ background: '#28C840' }} />
                </div>
                <div className="mock-bar" /><div className="mock-tag">Team</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 14 }}>
                {[{ icon: '👩‍💻', bg: 'var(--blue-lt)' }, { icon: '👨‍💻', bg: 'var(--purple-lt)' }, { icon: '🤖', bg: '#ECFDF5' }].map((a, i) => (
                  <div key={i} style={{ background: a.bg, borderRadius: 10, padding: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: 6 }}>{a.icon}</div>
                    <div style={{ height: 4, borderRadius: 100, background: 'rgba(35,81,229,.2)', marginBottom: 3 }} />
                    <div style={{ height: 4, borderRadius: 100, background: 'rgba(35,81,229,.1)', width: '60%', margin: '0 auto' }} />
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
                {[{ text: 'Hi! Tell us about your project 👋', align: 'flex-start', bg: 'var(--blue-lt)', color: 'var(--text-mid)', br: '12px 12px 12px 3px' }, { text: 'We need a new website + AI automation', align: 'flex-end', bg: 'var(--grad)', color: '#fff', br: '12px 12px 3px 12px' }, { text: 'Perfect! Let\'s schedule a discovery call. ✨', align: 'flex-start', bg: 'var(--blue-lt)', color: 'var(--text-mid)', br: '12px 12px 12px 3px' }].map((b, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: b.align }}>
                    <div style={{ padding: '9px 13px', borderRadius: b.br, background: b.bg, color: b.color, fontSize: '.72rem', lineHeight: 1.5, maxWidth: '80%' }}>{b.text}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mock-float bottom"><span className="fi">✅</span><div><div>120+ Projects Delivered</div><div className="fs">98% client satisfaction</div></div></div>
          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section style={{ background: '#fff', padding: '60px 0' }}>
        <div className="wrap">
          <div className="info-cards-grid" style={{ maxWidth: 900, margin: '0 auto' }}>
            {[{ icon: '📍', bg: 'var(--blue-lt)', title: 'Location', content: (<><div>Varanasi, India</div><div style={{ fontSize: '.8rem', color: 'var(--blue)', marginTop: 4 }}>Remote services worldwide</div></>) },
              { icon: '📧', bg: 'var(--purple-lt)', title: 'Email Us', content: (<><a href="mailto:contact@solvixaitech.com">contact@solvixaitech.com</a><div style={{ fontSize: '.78rem', color: 'var(--text-soft)', marginTop: 4 }}>We reply within 24 hours</div></>) },
              { icon: '📞', bg: '#ECFDF5', title: 'Call Us', content: (<><a href="tel:+91XXXXXXXXXX">+91 XXX XXX XXXX</a><div style={{ fontSize: '.78rem', color: 'var(--text-soft)', marginTop: 4 }}>Mon–Sat, 9 AM – 7 PM IST</div></>) },
            ].map((c, i) => (
              <div key={c.title} className={`info-card rv d${i + 1}`}>
                <div className="info-card-icon" style={{ background: c.bg }}>{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact-form" className="contact-section">
        <div className="wrap">
          <div className="contact-grid">
            {/* left */}
            <div className="rv">
              <div className="chip">Get In Touch</div>
              <h2 className="h2">Start Your Project <em>With Us</em></h2>
              <p className="sub">Tell us about your project and our team will get back to you within 24 hours.</p>
              <div className="contact-features">
                {['Free initial consultation', 'Detailed project proposal within 48 hours', 'Clear timelines and transparent pricing', 'Dedicated project manager assigned', 'Post-launch support included'].map(f => (
                  <div key={f} className="contact-feat"><div className="contact-check">✓</div>{f}</div>
                ))}
              </div>
              <div style={{ background: '#fff', border: '1.5px solid var(--border)', borderRadius: 'var(--r)', padding: '1.5rem' }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: '2.5rem', background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: .8, marginBottom: '.6rem' }}>"</div>
                <p style={{ fontSize: '.88rem', color: 'var(--text-mid)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1rem' }}>SolvixAI Tech responded within hours and delivered our entire platform in three weeks. Incredible team to work with.</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div className="blog-av" style={{ width: 38, height: 38, background: 'linear-gradient(135deg,#2351E5,#7B2FF7)', fontSize: '.75rem' }}>RK</div>
                  <div><div style={{ fontWeight: 600, fontSize: '.85rem' }}>Rahul Kumar</div><div style={{ fontSize: '.75rem', color: 'var(--text-soft)' }}>CEO, LogiTech Solutions</div></div>
                </div>
              </div>
            </div>

            {/* right - form */}
            <div className="contact-form-card rv d1">
              <h3>Send Us a Message</h3>
              <p className="form-sub">Fill in the details below and we'll get back to you within 24 hours.</p>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                  <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.4rem', marginBottom: '.6rem' }}>Message Sent!</h3>
                  <p style={{ fontSize: '.9rem', color: 'var(--text-soft)', lineHeight: 1.7 }}>Thank you! Our team will get back to you within 24 hours.</p>
                  <button className="btn btn-p" style={{ marginTop: '1.5rem' }} onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' }) }}>Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group"><label>Full Name *</label><input name="name" value={form.name} onChange={update} placeholder="Your full name" required /></div>
                    <div className="form-group"><label>Email Address *</label><input name="email" type="email" value={form.email} onChange={update} placeholder="your@email.com" required /></div>
                  </div>
                  <div className="form-row">
                    <div className="form-group"><label>Phone Number</label><input name="phone" type="tel" value={form.phone} onChange={update} placeholder="+91 XXXXX XXXXX" /></div>
                    <div className="form-group"><label>Company Name</label><input name="company" value={form.company} onChange={update} placeholder="Your company" /></div>
                  </div>
                  <div className="form-group">
                    <label>Service Interested In *</label>
                    <select name="service" value={form.service} onChange={update} required>
                      <option value="" disabled>Select a service…</option>
                      {['Web Design', 'UI/UX Design', 'Web Development', 'AI Automation Tools', 'Full Digital Solution'].map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Project Budget</label>
                    <select name="budget" value={form.budget} onChange={update}>
                      <option value="" disabled>Select your budget…</option>
                      {['Under ₹50,000', '₹50,000 – ₹1,00,000', '₹1,00,000 – ₹3,00,000', '₹3,00,000+', 'Let\'s discuss'].map(b => <option key={b}>{b}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Tell Us About Your Project *</label>
                    <textarea name="message" value={form.message} onChange={update} placeholder="Describe your project, goals, and requirements…" required />
                  </div>
                  <button type="submit" className="btn-submit" disabled={loading}>
                    {loading ? 'Sending…' : 'Send Message →'}
                  </button>
                  <p className="form-note">🔒 Your information is secure and never shared.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: '#fff', padding: '90px 0' }}>
        <div className="wrap">
          <div className="section-head">
            <div className="chip rv">What's Next</div>
            <h2 className="h2 rv d1" style={{ textAlign: 'center' }}>What Happens After <em>You Contact Us</em></h2>
            <p className="sub rv d2" style={{ textAlign: 'center', maxWidth: 540, margin: '1rem auto 0' }}>A simple, transparent process from first message to project launch.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', maxWidth: 900, margin: '0 auto' }}>
            {[['📩', 'Project Review', 'We carefully analyse your requirements and understand your business goals.'], ['📞', 'Discovery Call', 'We schedule a call to discuss your goals, timeline, and project strategy.'], ['🧠', 'Strategy Planning', 'Our experts create a detailed project roadmap, timeline, and proposal.'], ['🚀', 'Project Kickoff', 'Design and development begin — with regular updates every step of the way.']].map(([icon, title, desc], i) => (
              <div key={title} className={`rv d${i + 1}`} style={{ textAlign: 'center' }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', margin: '0 auto 1.25rem', background: 'var(--blue-lt)', border: '2px solid var(--blue-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', position: 'relative', transition: 'all .3s' }}>
                  {icon}
                  <div style={{ position: 'absolute', top: -8, right: -4, width: 22, height: 22, borderRadius: '50%', background: 'var(--grad)', color: '#fff', fontSize: '.65rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</div>
                </div>
                <h4 style={{ fontFamily: "'Fraunces', serif", fontSize: '1rem', fontWeight: 600, marginBottom: '.4rem' }}>{title}</h4>
                <p style={{ fontSize: '.82rem', color: 'var(--text-soft)', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#F8FAFF', padding: '90px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 5%' }}>
          <div className="section-head">
            <div className="chip rv">FAQ</div>
            <h2 className="h2 rv d1" style={{ textAlign: 'center' }}>Frequently Asked <em>Questions</em></h2>
            <p className="sub rv d2" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>Everything you need to know before we start working together.</p>
          </div>
          <div>
            {faqs.map((f, i) => (
              <div key={i} className="rv" style={{ border: `1.5px solid ${openFaq === i ? 'var(--blue-md)' : 'var(--border)'}`, borderRadius: 'var(--r-sm)', marginBottom: '.85rem', overflow: 'hidden', boxShadow: openFaq === i ? 'var(--s-sm)' : 'none', transition: 'border-color .25s, box-shadow .25s' }}>
                <div
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.5rem', cursor: 'pointer', fontSize: '.95rem', fontWeight: 600, color: openFaq === i ? 'var(--blue)' : 'var(--text)', userSelect: 'none' }}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {f.q}
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: openFaq === i ? 'var(--blue)' : 'var(--border)', color: openFaq === i ? '#fff' : 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.8rem', transition: 'all .3s', transform: openFaq === i ? 'rotate(45deg)' : 'none', flexShrink: 0 }}>+</div>
                </div>
                <div style={{ maxHeight: openFaq === i ? 200 : 0, overflow: 'hidden', transition: 'max-height .38s ease' }}>
                  <div style={{ padding: '0 1.5rem 1.25rem', fontSize: '.9rem', color: 'var(--text-soft)', lineHeight: 1.75 }}>{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-ring r1" /><div className="cta-ring r2" /><div className="cta-ring r3" />
        <div className="cta-inner rv">
          <div className="cta-chip">Let's Get Started</div>
          <h2 className="cta-heading">Ready to Transform Your <em>Digital Presence?</em></h2>
          <p className="cta-text">Let SolvixAI Tech build powerful digital solutions for your business. From beautiful design to intelligent automation — we handle it all.</p>
          <div className="cta-acts">
            <a href="#contact-form" className="btn btn-w" onClick={e => { e.preventDefault(); document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' }) }}>Start Your Project →</a>
            <Link to="/services" className="btn-wo">View Our Services</Link>
          </div>
          <p className="cta-note">Free consultation · No commitment required · 24-hour response</p>
        </div>
      </section>
    </>
  )
}
