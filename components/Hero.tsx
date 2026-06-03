'use client'
import { useState, useEffect } from 'react'

const SLIDES = [
  { img: '/images/treat-facial.jpg', pos: 'center' },
  { img: '/images/treat-redlight.jpg', pos: 'center' },
  { img: '/images/treat-pigment.jpg', pos: 'center' },
]

const scrollText = 'SCROLL · LS BEAUTY · GUIDING YOU · '

interface HeroProps {
  onBook: () => void
}

export default function Hero({ onBook }: HeroProps) {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setSlide((p) => (p + 1) % SLIDES.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero-oval" id="top">
      {/* Video background with tint overlay */}
      <video className="ho-bg-video" autoPlay muted loop playsInline poster="/images/texture-gradient.jpg">
        <source src="/images/hero.mp4" type="video/mp4" />
      </video>
      <div className="ho-bg-tint" />

      {/* Decorative brush */}
      <img className="ho-brush float" src="/images/brush-vertical.png" alt="" aria-hidden="true" />

      {/* Scattered twinkles */}
      <img className="twinkle" src="/images/sparkle-blue.png" alt="" aria-hidden="true"
        style={{ width: 38, left: '30%', top: '16%', animationDelay: '0.4s' }} />
      <img className="twinkle" src="/images/sparkle-blue.png" alt="" aria-hidden="true"
        style={{ width: 18, right: '30%', top: '46%', animationDelay: '0.8s' }} />
      <img className="twinkle" src="/images/sparkle-blue.png" alt="" aria-hidden="true"
        style={{ width: 22, left: '12%', bottom: '20%', animationDelay: '1.3s' }} />

      <div className="ho-wrap">
        {/* Left panel */}
        <div className="ho-left">
          <span className="eyebrow">
            <img src="/images/sparkle-blue.png" alt="" />
            Guiding you to expert beauty care
          </span>
          <img className="ho-logo" src="/images/logo-primary-blue.png" alt="LS Beauty" />
          <p className="ho-lead">
            Your modern beauty concierge — connecting you with expert clinics for personalized, transformative care.
          </p>
          <div className="ho-cta">
            <button className="btn btn-primary" onClick={onBook}>
              Book a consultation
              <img src="/images/sparkle-white.png" alt="" />
            </button>
          </div>
          <div className="ho-review">
            <div className="av">P</div>
            <div>
              <div className="stars">★★★★★</div>
              <div className="rv-t">&ldquo;Matched perfectly on my first visit — my skin has never looked better.&rdquo;</div>
            </div>
          </div>
        </div>

        {/* Oval slideshow */}
        <div className="ho-ovalwrap">
          <div className="ho-oval">
            {SLIDES.map((s, idx) => (
              <div key={idx} className={`ho-slide${idx === slide ? ' on' : ''}`}>
                <div className="kb" style={{ backgroundImage: `url(${s.img})`, backgroundPosition: s.pos }} />
              </div>
            ))}
          </div>
          {/* Rotating scroll badge */}
          <div className="ho-scroll" aria-hidden="true">
            <svg className="ring" viewBox="0 0 86 86">
              <defs>
                <path id="scrollpath" d="M43,43 m-32,0 a32,32 0 1,1 64,0 a32,32 0 1,1 -64,0" />
              </defs>
              <text>
                <textPath href="#scrollpath" startOffset="0">{scrollText}</textPath>
              </text>
            </svg>
            <div className="knob">
              <svg className="ar" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="ho-right">
          <img className="ho-illu" src="/images/sparkle-orbit.png" alt="" aria-hidden="true" />
          <div className="ho-quote">
            <b>Elegant · Expert · Radiant</b>
            Evoke your most radiant self — beauty care that feels like a life-changing experience.
          </div>
        </div>
      </div>
    </section>
  )
}
