import Button from './Button.jsx'

export default function CtaBanner({ title, text, action, to = '/quote' }) {
  return (
    <section className="cta-banner">
      <div className="container row">
        <div>
          <h2>{title}</h2>
          {text ? <p>{text}</p> : null}
        </div>
        <Button to={to}>{action}</Button>
      </div>
    </section>
  )
}
