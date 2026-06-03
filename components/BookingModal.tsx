'use client'
import { useState } from 'react'

const GOALS = [
  { ot: 'Glow & Radiance', os: 'Brighten and illuminate' },
  { ot: 'Acne & Clarity', os: 'Clear breakouts, repair skin' },
  { ot: 'Anti-aging', os: 'Firm, smooth, restore' },
  { ot: 'Body & Wellness', os: 'Contour, relax, renew' },
  { ot: 'Post-pregnancy', os: 'Gentle recovery care' },
  { ot: 'Not sure yet', os: 'We\'ll help you figure it out' },
]

const VISITS = [
  { ot: 'First time', os: 'New to clinic care' },
  { ot: 'Occasional', os: 'A few times a year' },
  { ot: 'Regular', os: 'Monthly or more' },
  { ot: 'Switching clinics', os: 'Looking for something better' },
]

interface BookingModalProps {
  open: boolean
  onClose: () => void
}

export default function BookingModal({ open, onClose }: BookingModalProps) {
  const [step, setStep] = useState(0)
  const [goal, setGoal] = useState('')
  const [visit, setVisit] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [done, setDone] = useState(false)

  const reset = () => { setStep(0); setGoal(''); setVisit(''); setName(''); setEmail(''); setPhone(''); setDone(false) }
  const close = () => { onClose(); setTimeout(reset, 300) }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return
    setDone(true)
  }

  const steps = ['Goal', 'Experience', 'Details', 'Confirm']

  return (
    <div className={`ov${open ? ' open' : ''}`} onClick={(e) => e.target === e.currentTarget && close()}>
      <div className="modal" role="dialog" aria-modal="true" aria-label="Book a consultation">
        <div className="modal-head">
          <div>
            <span className="eyebrow">
              <img src="/images/sparkle-blue.png" alt="" />
              Concierge Booking
            </span>
            {!done && <h3>{step === 0 ? 'What\'s your goal?' : step === 1 ? 'Your experience' : step === 2 ? 'A little about you' : 'Review & confirm'}</h3>}
          </div>
          <button className="modal-close" onClick={close} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {!done && (
          <div className="modal-steps">
            {steps.map((_, i) => (
              <div key={i} className={`dot${i <= step ? ' on' : ''}`} />
            ))}
          </div>
        )}

        <div className="modal-body">
          {done ? (
            <div className="confirm">
              <div className="confirm-ico">
                <img src="/images/sparkle-burst.png" alt="" style={{ width: '100%' }} />
              </div>
              <h3>You&apos;re matched!</h3>
              <p>We&apos;ll reach out to {name.split(' ')[0]} shortly to confirm your consultation. Get ready to glow.</p>
              <div className="summary">
                <div className="srow"><span>Goal</span><span>{goal}</span></div>
                <div className="srow"><span>Experience</span><span>{visit}</span></div>
                <div className="srow"><span>Contact</span><span>{email}</span></div>
              </div>
            </div>
          ) : step === 0 ? (
            <div className="opt-grid">
              {GOALS.map((g) => (
                <button key={g.ot} className={`opt${goal === g.ot ? ' sel' : ''}`} onClick={() => setGoal(g.ot)}>
                  <div className="ot">{g.ot}</div>
                  <div className="os">{g.os}</div>
                </button>
              ))}
            </div>
          ) : step === 1 ? (
            <div className="opt-grid">
              {VISITS.map((v) => (
                <button key={v.ot} className={`opt${visit === v.ot ? ' sel' : ''}`} onClick={() => setVisit(v.ot)}>
                  <div className="ot">{v.ot}</div>
                  <div className="os">{v.os}</div>
                </button>
              ))}
            </div>
          ) : step === 2 ? (
            <form id="bk-form" onSubmit={submit}>
              <div className="field">
                <label htmlFor="bk-name">Full name</label>
                <input id="bk-name" type="text" placeholder="Ana Santos" value={name} onChange={e => setName(e.target.value)} required />
              </div>
              <div className="field">
                <label htmlFor="bk-email">Email address</label>
                <input id="bk-email" type="email" placeholder="ana@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
              </div>
              <div className="field">
                <label htmlFor="bk-phone">Phone <span style={{ opacity: .5, fontWeight: 400 }}>(optional)</span></label>
                <input id="bk-phone" type="tel" placeholder="+63 9xx xxx xxxx" value={phone} onChange={e => setPhone(e.target.value)} />
              </div>
            </form>
          ) : (
            <div className="summary">
              <div className="srow"><span>Goal</span><span>{goal || '—'}</span></div>
              <div className="srow"><span>Experience</span><span>{visit || '—'}</span></div>
              <div className="srow"><span>Name</span><span>{name || '—'}</span></div>
              <div className="srow"><span>Email</span><span>{email || '—'}</span></div>
            </div>
          )}
        </div>

        {!done && (
          <div className="modal-foot">
            {step > 0 ? (
              <button className="btn-text" onClick={() => setStep(s => s - 1)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Back
              </button>
            ) : <span />}

            {step < 2 ? (
              <button
                className="btn btn-primary btn-sm"
                onClick={() => setStep(s => s + 1)}
                disabled={step === 0 ? !goal : !visit}
              >
                Next
              </button>
            ) : step === 2 ? (
              <button className="btn btn-primary btn-sm" form="bk-form" type="submit">
                Review
              </button>
            ) : (
              <button className="btn btn-primary btn-sm" onClick={() => setDone(true)}>
                Confirm & match me
                <img src="/images/sparkle-blue.png" alt="" style={{ width: 14, height: 14 }} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
