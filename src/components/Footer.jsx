import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">Solvix<em>AI</em> Tech</div>
          <p className="footer-desc">Smart Design. Powerful Development. Intelligent Automation. Your end-to-end digital partner based in India.</p>
          <div className="footer-socials">
            <div className="soc-btn" title="LinkedIn">in</div>
            <div className="soc-btn" title="Instagram">ig</div>
            <div className="soc-btn" title="Twitter">𝕏</div>
            <div className="soc-btn" title="GitHub">gh</div>
          </div>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">Web Design</Link></li>
            <li><Link to="/services">UI/UX Design</Link></li>
            <li><Link to="/services">Web Development</Link></li>
            <li><Link to="/services">AI Automation</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:contact@solvixaitech.com">contact@solvixaitech.com</a></li>
            <li><a href="tel:+91XXXXXXXXXX">+91 XXX XXX XXXX</a></li>
            <li><span style={{ color: 'rgba(255,255,255,.55)' }}>Varanasi, India</span></li>
            <li><a href="https://solvix-ai.in">solvix-ai.in</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 SolvixAI Tech. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
        <div className="footer-badge">Made with ♥ in India</div>
      </div>
    </footer>
  )
}
