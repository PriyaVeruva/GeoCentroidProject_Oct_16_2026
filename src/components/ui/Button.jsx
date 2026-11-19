import { Link } from 'react-router-dom'
import { Icon } from './Icons.jsx'

export default function Button({
  to,
  href,
  children,
  variant = 'primary',
  type = 'button',
  onClick,
  withArrow = true,
  disabled = false,
  className = '',
}) {
  const classes = `btn btn-${variant} ${className}`.trim()
  const content = (
    <>
      {children}
      {withArrow ? <Icon name="arrow" size={16} /> : null}
    </>
  )

  if (to) return <Link className={classes} to={to} onClick={onClick}>{content}</Link>
  if (href) return <a className={classes} href={href} onClick={onClick}>{content}</a>
  return (
    <button className={classes} type={type} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  )
}
