export default function ServiceCard({ icon, title, desc, iconBg, delay = '', onLearnMore }) {
  return (
    <div className={`service-card rv ${delay}`}>
      <div className="service-icon" style={{ background: iconBg || 'var(--blue-lt)' }}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
      {onLearnMore && (
        <button className="sc-link" onClick={onLearnMore}>Learn More →</button>
      )}
    </div>
  )
}
