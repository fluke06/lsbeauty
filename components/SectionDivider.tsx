export default function SectionDivider() {
  return (
    <div className="wrap-wide" aria-hidden="true">
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '4px 0' }}>
        <img src="/images/sparkle-blue.png" alt="" style={{ width: 14, height: 14, opacity: .55 }} />
        <div style={{ flex: 1, height: 1, background: 'var(--line)' }} />
      </div>
    </div>
  )
}
