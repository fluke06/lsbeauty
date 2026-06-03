'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const NAV = [
  { label: 'Our Experts', href: '#experts' },
  { label: 'First Visit', href: '#recommend' },
  { label: 'Treatments', href: '#menu' },
  { label: 'Reviews', href: '#reviews-row' },
]

interface NavProps {
  onBook: () => void
}

export default function Nav({ onBook }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`hdr${scrolled ? ' scrolled' : ''}`}>
      <div className="hdr-inner wrap-wide">
        <a href="#top" className="hdr-logo-link" aria-label="LS Beauty home">
          <Image
            src="/images/logo-horizontal-blue.png"
            alt="LS Beauty"
            width={130}
            height={42}
            priority
            className="hdr-logo"
            style={{ objectFit: 'contain', objectPosition: 'left center', height: '42px', width: 'auto' }}
          />
        </a>

        <nav className="hdr-nav">
          {NAV.map((n) => (
            <a key={n.label} href={n.href}>{n.label}</a>
          ))}
        </nav>

        <div className="hdr-right">
          <label className="hdr-search">
            <span className="mag">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </span>
            <input type="text" placeholder="search..." aria-label="Search" />
          </label>
          <a className="hdr-tel" href="tel:+639171234567">
            <b>+63 917 123 4567</b>
            <span>Concierge · 9:00–18:00</span>
          </a>
        </div>

        <button className="hdr-burger" onClick={() => setOpen(true)} aria-label="Open menu">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`mmenu${open ? ' open' : ''}`}>
        <div className="mmenu-top">
          <Image src="/images/logo-horizontal-blue.png" alt="LS Beauty" width={110} height={36} style={{ height: '30px', width: 'auto' }} />
          <button className="modal-close" onClick={() => setOpen(false)} aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <nav>
          {NAV.map((n) => (
            <a key={n.label} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
          ))}
        </nav>
        <button className="btn btn-primary" style={{ marginTop: 28 }} onClick={() => { setOpen(false); onBook() }}>
          Book a consultation
        </button>
      </div>
    </header>
  )
}
