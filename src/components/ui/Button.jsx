import { Link } from 'react-router-dom'
import { Icon } from './Icons.jsx'

export default function Button({ to, href, children, variant = 'primary', type = 'button', onClick, withArrow = true }) {
  const className = `btn btn-${variant}`
  const content = (
    <>
      {children}
      {withArrow ? <Icon name="arrow" size={16} /> : null}
    </>
  )

  if (to) return <Link className={className} to={to}>{content}</Link>
  if (href) return <a className={className} href={href}>{content}</a>
  return (
    <button className={className} type={type} onClick={onClick}>
      {content}
    </button>
  )
}
