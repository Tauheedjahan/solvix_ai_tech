export default function BlogCard({ emoji, imgBg, tags, title, desc, authorInitials, authorName, authorBg, date, readTime, delay = '' }) {
  return (
    <article className={`blog-card rv ${delay}`}>
      <div className="blog-card-img" style={{ background: imgBg || 'linear-gradient(135deg,var(--blue-lt),var(--purple-lt))' }}>
        <span style={{ fontSize: '2.5rem' }}>{emoji}</span>
        <div className="blog-card-img-overlay">
          <div className="blog-overlay-label">Read Article</div>
        </div>
      </div>
      <div className="blog-card-body">
        <div className="blog-tags">
          {tags.map((t, i) => (
            <span key={i} className={`blog-tag ${t.color}`}>{t.label}</span>
          ))}
        </div>
        <h2 className="blog-card-title">{title}</h2>
        <p className="blog-card-desc">{desc}</p>
        <div className="blog-card-footer">
          <div className="blog-author">
            <div className="blog-av" style={{ background: authorBg || 'linear-gradient(135deg,#2351E5,#7B2FF7)' }}>
              {authorInitials}
            </div>
            <div>
              <div className="blog-author-name">{authorName}</div>
              <div className="blog-date">{date}</div>
            </div>
          </div>
          <div className="blog-read-time">⏱ {readTime}</div>
        </div>
      </div>
    </article>
  )
}
