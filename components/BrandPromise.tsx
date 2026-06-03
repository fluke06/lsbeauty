const PROMISE = [
  { title: 'Unhurried time', body: 'We answer every question and ease every worry — for as long as you need.' },
  { title: 'Clear guidance', body: 'Plain language, no jargon — explained with visuals so you always understand.' },
  { title: 'Real choices', body: 'Options matched to your lifestyle, never a single hard-sell path.' },
  { title: 'No pressure', body: 'Your decision comes first, always. Advice that respects your pace.' },
]

export default function BrandPromise() {
  return (
    <section className="promise" id="promise">
      <img className="twinkle" src="/images/sparkle-blue.png" alt="" aria-hidden="true"
        style={{ width: 26, right: '6%', top: '50px', animationDelay: '0.4s' }} />
      <img className="twinkle" src="/images/sparkle-blue.png" alt="" aria-hidden="true"
        style={{ width: 18, left: '5%', bottom: '60px', animationDelay: '1.2s' }} />
      <div className="wrap-wide">
        <div className="sechead reveal">
          <span className="wm">Promise</span>
          <span className="en">
            <img src="/images/sparkle-blue.png" alt="" />
            Promise
          </span>
          <h2>What we <em>promise</em> you</h2>
          <p className="sub">Beauty care should feel safe, clear and kind. Every consultation is grounded in four commitments.</p>
        </div>
        <div className="promise-grid">
          {PROMISE.map((p, i) => (
            <div key={p.title} className="pms reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="pms-ico">
                <img src="/images/sparkle-blue.png" alt="" />
              </div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
