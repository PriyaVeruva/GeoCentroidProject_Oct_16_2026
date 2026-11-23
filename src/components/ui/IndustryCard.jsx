import { Link } from 'react-router-dom'
import { Icon } from './Icons.jsx'

export default function IndustryCard({ item, variant = 'compact' }) {
  const media = (
    <div className="industry-card-media">
      <img src={item.image} alt={item.title} />
      <div className="industry-card-caption">
        <span className="el-icon" aria-hidden="true">
          <Icon name={item.icon} size={18} />
        </span>
        <h3>{item.title}</h3>
      </div>
    </div>
  )

  const href = item.href || `/industries#${item.slug}`

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
          <Link className="link-arrow" to={item.href || '/quote'}>
            {item.href ? 'Explore this sector →' : 'Discuss this sector →'}
          </Link>
        </div>
      </article>
    )
  }

  return (
    <Link className="industry-card" to={href}>
      {media}
      <div className="industry-card-body">
        <p>{item.text}</p>
        <span className="link-arrow">Explore sector →</span>
      </div>
    </Link>
  )
}
