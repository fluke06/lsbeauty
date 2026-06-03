const LINKS = [
  { label: 'Our Experts', href: '#experts' },
  { label: 'Treatments', href: '#menu' },
  { label: 'Reviews', href: '#reviews-row' },
]

interface FooterProps {
  onBook: () => void
}

export default function Footer({ onBook }: FooterProps) {
  return (
    <footer className="ftr" id="contact">
      <div className="ftr-contact wrap">
        <img className="ftr-spark" src="/images/sparkle-white.png" alt="" aria-hidden="true" />
        <span className="eyebrow on-dark" style={{ justifyContent: 'center' }}>Contact</span>
        <h2 className="ftr-ctitle">
          Your concierge is here<br />whenever you&apos;re <em>ready</em>
        </h2>
        <div className="ftr-actions">
          <button className="btn btn-primary" onClick={onBook}>
            Book a consultation
            <img src="/images/sparkle-white.png" alt="" style={{ width: 16, height: 16 }} />
          </button>
          <a className="ftr-tel" href="tel:+639171234567">
            <span>Or call our concierge</span>
            <b>+63 917 123 4567</b>
          </a>
        </div>
        <div className="ftr-hours">Concierge hours · Mon–Sat · 9:00–18:00</div>
      </div>

      <div className="ftr-bar wrap-wide">
        <img className="ftr-logo" src="/images/logo-horizontal-white.png" alt="LS Beauty" />
        <nav className="ftr-links">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="ftr-social">
          {/* Instagram */}
          <a href="https://www.instagram.com/lsbeauty.ph" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" stroke="none">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          {/* Facebook */}
          <a href="https://www.facebook.com/lsbeautyph/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" stroke="none">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          {/* Mail */}
          <a href="mailto:hello@lsbeauty.ph" aria-label="Email">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="ftr-legal wrap-wide">
        <span>© 2026 LS Beauty · Guiding you to expert beauty care</span>
        <div className="ftr-legal-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}
