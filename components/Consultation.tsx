const REVIEWS = [
  { name: 'Priya N.', meta: 'Glowgetter · 2024', text: 'I was so nervous for my first clinic visit, but LS Beauty matched me perfectly. The team was kind and my skin has never looked better!' },
  { name: 'Mara L.', meta: 'Skin-Invested · 2023', text: 'Finally a concierge that respects my time. Researched, booked and glowing in one afternoon. Real, measurable results.' },
  { name: 'Sofia R.', meta: 'Radiant Mom · 2025', text: 'Post-pregnancy, I\'d forgotten what "me time" felt like. My treatment was pure self-care — I left feeling like myself again.' },
]

export default function Consultation() {
  return (
    <>
      {/* Reviews Row */}
      <section className="reviews" id="reviews-row">
        <div className="reviews-head wrap">
          <div className="sechead reveal">
            <span className="wm">Loved</span>
            <span className="en">
              <img src="/images/sparkle-blue.png" alt="" />
              Glowing Voices
            </span>
            <h2>Loved by every <em>kind</em> of beauty</h2>
          </div>
        </div>
        <div className="review-row wrap-wide">
          {REVIEWS.map((r, i) => (
            <div className="rev reveal" key={i} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="stars">★★★★★</div>
              <p>&ldquo;{r.text}&rdquo;</p>
              <div className="who">
                <span className="av">{r.name[0]}</span>
                <div>
                  <b>{r.name}</b>
                  <span>{r.meta}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote section */}
      <section className="quote">
        <video className="quote-video" autoPlay muted loop playsInline poster="/images/texture-gradient.jpg">
          <source src="/images/hero.mp4" type="video/mp4" />
        </video>
        <div className="quote-tint" />
        <img className="quote-spark" src="/images/sparkle-burst.png" alt="" aria-hidden="true" style={{ left: '7%', top: '16%' }} />
        <img className="quote-spark" src="/images/sparkle-orbit.png" alt="" aria-hidden="true" style={{ right: '8%', bottom: '14%', width: 130 }} />
        <div className="wrap">
          <img className="quote-mark" src="/images/sparkle-blue.png" alt="" aria-hidden="true" />
          <span className="eyebrow">The sparkle promise</span>
          <blockquote>
            The moment a client crosses the threshold from uncertainty to
            <em> empowerment</em> — brighter confidence, transformative beauty,
            accessible self-care, illuminated.
          </blockquote>
          <div className="by"><b>Priya N.</b> · radiant since 2024</div>
        </div>
      </section>
    </>
  )
}
