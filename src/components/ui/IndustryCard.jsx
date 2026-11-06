import { Link } from 'react-router-dom'
import { Icon } from './Icons.jsx'

export default function IndustryCard({ item, variant = 'compact' }) {
  const media = (
    <div className="industry-card-media">
      <img src={item.image} alt="" />
      <div className="industry-card-caption">
        <span className="el-icon" aria-hidden="true">
          <Icon name={item.icon} size={18} />
        </span>
        <h3>{item.title}</h3>
      </div>
    </div>
  )

  if (variant === 'detail') {
    return (
      <article className="industry-card industry-card-detail" id={item.slug}>
        {media}
        <div className="industry-card-body">
          <p>{item.text}</p>
          <div className="industry-tags">
            {item.points.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
          <Link className="link-arrow" to="/quote">Discuss this sector →</Link>
        </div>
      </article>
    )
  }

  return (
    <Link className="industry-card" to={`/industries#${item.slug}`}>
      {media}
      <div className="industry-card-body">
        <p>{item.text}</p>
        <span className="link-arrow">Explore sector →</span>
      </div>
    </Link>
  )
}
