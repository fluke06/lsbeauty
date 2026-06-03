const EXPERT = {
  name: 'Dr. Lena Sato',
  role: 'Lead Aesthetic Director · LS Beauty Network',
  bio: 'Every LS Beauty partner is hand-selected and overseen by our clinical board — led by specialists with 10+ years in aesthetic and dermatological care. From your first consultation to aftercare, you\'re guided by genuine expertise.',
  creds: ['10+ years aesthetic & dermatology', 'Board-reviewed partner clinics', 'Personalized, results-led plans'],
}

export default function Stories() {
  return (
    <section className="experts" id="experts">
      <div className="wrap-wide experts-inner">
        <div className="experts-media reveal">
          <div className="arch">
            <div className="zoom" style={{ backgroundImage: 'url(/images/treat-redlight.jpg)' }} />
          </div>
          <img className="experts-spark" src="/images/sparkle-blue.png" alt="" aria-hidden="true" />
        </div>
        <div className="experts-body reveal">
          <div className="sechead left">
            <span className="wm">Experts</span>
            <span className="en">
              <img src="/images/sparkle-blue.png" alt="" />
              Our Experts
            </span>
            <h2>Care led by <em>real</em> expertise</h2>
          </div>
          <div className="experts-name">{EXPERT.name}</div>
          <div className="experts-role">{EXPERT.role}</div>
          <p className="experts-bio">{EXPERT.bio}</p>
          <ul className="experts-creds">
            {EXPERT.creds.map((c) => (
              <li key={c}>
                <img src="/images/sparkle-blue.png" alt="" />
                {c}
              </li>
            ))}
          </ul>
          <a className="btn-text" href="#reasons">
            <span className="u">Meet the network</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
