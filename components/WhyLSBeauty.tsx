const REASONS = [
  {
    en: 'Reason',
    title: 'Vetted clinics, <em>trusted</em> expertise',
    body: 'Every partner clinic is screened for clinical excellence and credentials. From first consultation to aftercare, your beauty journey stays in qualified, caring hands — so you can relax and simply glow.',
    img: '/images/treat-facial.jpg',
  },
  {
    en: 'Reason',
    title: 'Guidance that\'s truly <em>personal</em>',
    body: 'A modern beauty concierge that learns your goals and matches you to the right treatment and specialist. No guesswork, no overwhelm — just clarity, tailored entirely to you.',
    img: '/images/portrait-client.jpg',
  },
  {
    en: 'Reason',
    title: 'Effortless from first <em>hello</em>',
    body: 'Discover, compare and book in one calm place. Seamless scheduling, transparent pricing, and a concierge by your side at every step of the way.',
    img: '/images/treat-body.jpg',
  },
]

export default function WhyLSBeauty() {
  return (
    <section className="reasons2" id="reasons">
      <div className="wrap-wide">
        <div className="sechead reveal">
          <span className="wm">Reason</span>
          <span className="en">
            <img src="/images/sparkle-blue.png" alt="" />
            Why LS Beauty
          </span>
          <h2>The reasons clients <em>stay</em></h2>
          <p className="sub">Experienced specialists and a concierge who genuinely cares — here&apos;s what keeps our clients radiant and coming back.</p>
        </div>

        {REASONS.map((r, i) => (
          <div key={i} className={`rsn reveal${i % 2 ? ' flip' : ''}`}>
            <div className="rsn-media">
              <span className="rsn-num">{'0' + (i + 1)}</span>
              <div className="frame">
                <div className="zoom" style={{ backgroundImage: `url(${r.img})` }} />
              </div>
            </div>
            <div className="rsn-body">
              <span className="en">
                <img src="/images/sparkle-blue.png" alt="" />
                {r.en} {'0' + (i + 1)}
              </span>
              <h3 dangerouslySetInnerHTML={{ __html: r.title }} />
              <p>{r.body}</p>
              <a className="btn-text" href="#menu">
                <span className="u">See treatments</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
