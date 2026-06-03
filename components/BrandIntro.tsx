export default function Message() {
  return (
    <section className="message wrap" id="message">
      <div className="reveal" style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
        <span className="eyebrow">
          <img src="/images/sparkle-blue.png" alt="" />
          How we show up
        </span>
        <p className="lead">
          LS Beauty bridges the gap between skilled clinicians and clients —
          a beauty concierge rooted in <b>trust and expertise</b>, making personalized
          care simple, accessible, and effortless.
        </p>
        <div className="sig">— Where beauty meets trusted guidance</div>
      </div>
    </section>
  )
}
