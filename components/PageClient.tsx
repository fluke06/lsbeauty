'use client'
import { useState, useEffect } from 'react'
import Nav from './Nav'
import Hero from './Hero'
import BookingRail from './BookingRail'
import BrandIntro from './BrandIntro'
import WhyLSBeauty from './WhyLSBeauty'
import BrandPromise from './BrandPromise'
import Stories from './Stories'
import HowItWorks from './HowItWorks'
import Treatments from './Treatments'
import Consultation from './Consultation'
import Footer from './Footer'
import BookingModal from './BookingModal'
import Animations from './Animations'

/* Inline Recommend + Audiences sections (small components) */

const RECOMMEND = [
  { n: '01', tags: ['Acne', 'Breakouts', 'Texture'], title: 'Acne Clarity', body: 'Clinical breakout control and early skin repair for clearer, calmer days.', img: '/images/treat-laser.jpg' },
  { n: '02', tags: ['Dullness', 'Dark spots', 'Glow'], title: 'Radiance Facials', body: 'Brighten, even and illuminate with treatments tailored to your skin.', img: '/images/treat-facial.jpg' },
  { n: '03', tags: ['Fine lines', 'Firmness', 'Lift'], title: 'Age Gracefully', body: 'Preventive, natural anti-aging that firms and restores youthful bounce.', img: '/images/treat-redlight.jpg' },
]

function Recommend() {
  return (
    <section className="recommend" id="recommend">
      <div className="wrap-wide">
        <div className="sechead reveal">
          <span className="wm">Start</span>
          <span className="en">
            <img src="/images/sparkle-blue.png" alt="" />
            Recommend
          </span>
          <h2>New to clinic care? <em>Start here</em></h2>
          <p className="sub">Three gentle, popular places to begin your journey — chosen for first-timers.</p>
        </div>
        <div className="rec-grid">
          {RECOMMEND.map((r, i) => (
            <article key={r.n} className="rec reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="rec-bg" style={{ backgroundImage: `url(${r.img})` }} />
              <span className="rn">{r.n}</span>
              <div className="tags">{r.tags.map((tg) => <span key={tg} className="tag">#{tg}</span>)}</div>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
              <a className="rec-link" href="#menu">See treatments</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const AUDIENCES = [
  {
    k: 'The Glowgetters', age: 'Ages 18–25 · Gen Z',
    body: 'Discovering professional skincare for the first time — bold, expressive, and always chasing that next glow-up moment.',
    points: ['First-time clinic guidance', 'Acne & early skin repair', 'Trend-inspired aesthetics'],
  },
  {
    k: 'The Skin-Invested', age: 'Ages 26–45 · Professionals',
    body: 'Career-driven and self-aware. They treat skincare as an investment, not an indulgence, and expect measurable results.',
    points: ['Anti-aging & prevention', 'Premium facials & body', 'Seamless clinic booking'],
  },
  {
    k: 'The Radiant Moms', age: 'Ages 28–50 · Moms & more',
    body: 'She gives everything to her family — and it\'s finally her turn to invest in herself, without guilt or complication.',
    points: ['Post-pregnancy recovery', 'Relaxation & self-care', 'Hormonal skin concerns'],
  },
]

function Audiences() {
  return (
    <section className="aud" id="audiences">
      <div className="wrap-wide">
        <div className="sechead reveal">
          <span className="wm">For You</span>
          <span className="en">
            <img src="/images/sparkle-blue.png" alt="" />
            Who We Serve
          </span>
          <h2>Beauty care for <em>every</em> chapter</h2>
          <p className="sub">Whoever you are and wherever you&apos;re starting, there&apos;s a path here that fits your life.</p>
        </div>
        <div className="aud-grid">
          {AUDIENCES.map((a, i) => (
            <article key={a.k} className="aud-card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="k">{a.k}</div>
              <div className="age">{a.age}</div>
              <p>{a.body}</p>
              <ul>
                {a.points.map((p) => (
                  <li key={p}>
                    <img src="/images/sparkle-blue.png" alt="" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function PageClient() {
  const [bookingOpen, setBookingOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = bookingOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [bookingOpen])

  const openBook = () => setBookingOpen(true)
  const closeBook = () => setBookingOpen(false)

  return (
    <>
      <Animations />
      <Nav onBook={openBook} />
      <BookingRail onBook={openBook} />
      <main>
        <Hero onBook={openBook} />
        <BrandIntro />
        <WhyLSBeauty />
        <BrandPromise />
        <Stories />
        <Recommend />
        <Audiences />
        <Treatments onBook={openBook} />
        <HowItWorks />
        <Consultation />
      </main>
      <Footer onBook={openBook} />
      <BookingModal open={bookingOpen} onClose={closeBook} />
    </>
  )
}
