const STEPS = [
  {
    ico: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    n: 'Step 01',
    title: 'Share your goals',
    body: 'Tell us what you\'re hoping to change — skin, confidence, wellness. A few questions, no pressure.',
  },
  {
    ico: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    n: 'Step 02',
    title: 'Get matched',
    body: 'We pair you with a vetted clinic and the right specialist for your needs and your timeline.',
  },
  {
    ico: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="m9 16 2 2 4-4"/>
      </svg>
    ),
    n: 'Step 03',
    title: 'Book & glow',
    body: 'Confirm your visit in seconds and step into your most radiant, confident self.',
  },
]

export default function HowItWorks() {
  return (
    <section className="concierge" id="concierge">
      <div className="wrap-wide">
        <div className="sechead reveal">
          <span className="wm">Concierge</span>
          <span className="en">
            <img src="/images/sparkle-blue.png" alt="" />
            How It Works
          </span>
          <h2>Your concierge, in <em>three steps</em></h2>
          <p className="sub">From first hello to glowing — booking expert care has never felt this calm.</p>
        </div>

        <div className="steps">
          {STEPS.map((s, i) => (
            <div key={s.n} className="step reveal" style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="step-ico">{s.ico}</div>
              <div className="step-n">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
