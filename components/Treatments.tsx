'use client'
import { useState } from 'react'

const TREATMENTS = [
  { cat: 'Facial', name: 'Signature Glow Facial', desc: 'Deep-cleanse, exfoliation and a luminous finish tailored to your skin.', img: '/images/treat-facial.jpg', pos: 'center 32%' },
  { cat: 'Anti-aging', name: 'Collagen Renewal', desc: 'Targeted treatment to firm, smooth and restore youthful bounce.', img: '/images/treat-redlight.jpg', pos: 'center 38%' },
  { cat: 'Body', name: 'Body Wellness Ritual', desc: 'Full-body contouring and lymphatic care for head-to-toe radiance.', img: '/images/treat-body.jpg', pos: 'center 45%' },
  { cat: 'Facial', name: 'Acne Clarity Program', desc: 'Clinical breakout control and early skin repair for clearer days.', img: '/images/treat-laser.jpg', pos: 'center 52%' },
  { cat: 'Wellness', name: 'Restorative Escape', desc: 'A calming wellness session — self-care as essential, not indulgent.', img: '/images/treat-pigment.jpg', pos: 'center 52%' },
  { cat: 'Anti-aging', name: 'Preventive Maintenance', desc: 'Keep skin resilient with a personalized, results-led maintenance plan.', img: '/images/treat-redlight.jpg', pos: 'center 38%' },
]

const CATEGORIES = ['All', 'Facial', 'Anti-aging', 'Body', 'Wellness']

interface TreatmentsProps {
  onBook: () => void
}

export default function Treatments({ onBook }: TreatmentsProps) {
  const [cat, setCat] = useState('All')
  const items = TREATMENTS.filter((t) => cat === 'All' || t.cat === cat)

  return (
    <section className="menu" id="menu">
      <div className="wrap-wide">
        <div className="sechead reveal">
          <span className="wm">Menu</span>
          <span className="en">
            <img src="/images/sparkle-blue.png" alt="" />
            The Menu
          </span>
          <h2>Treatments, <em>tailored</em> to you</h2>
          <p className="sub">Facial, body, anti-aging and wellness — a considered menu, matched to what you actually need.</p>
        </div>

        <div className="menu-filters reveal" style={{ justifyContent: 'center' }}>
          {CATEGORIES.map((c) => (
            <button key={c} className={`fchip${cat === c ? ' active' : ''}`} onClick={() => setCat(c)}>
              {c}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {items.map((t) => (
            <article key={t.name} className="mcard">
              <div className="zoom" style={{ backgroundImage: `url(${t.img})`, backgroundPosition: t.pos }} />
              <div className="mcard-shade" />
              <div className="mcard-content">
                <h3>{t.name}</h3>
                <p>{t.desc}</p>
                <div className="mcard-chips">
                  <span className="chip">
                    <b>4.9</b>
                    <span className="stars">★★★★★</span>
                  </span>
                  <span className="chip">{t.cat}</span>
                </div>
                <button className="mcard-book" onClick={onBook}>Book now</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
