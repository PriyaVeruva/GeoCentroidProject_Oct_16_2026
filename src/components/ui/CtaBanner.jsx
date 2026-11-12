import Button from './Button.jsx'

export default function CtaBanner({ title, text, action, to = '/quote', pdfHref }) {
  return (
    <section className="cta-banner">
      <div className="container row">
        <div>
          <h2>{title}</h2>
          {text ? <p>{text}</p> : null}
        </div>
        <div className="cta-actions">
          <Button to={to}>{action}</Button>
          {pdfHref ? (
            <Button href={pdfHref} variant="outline" withArrow={false}>
              Download company profile
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  )
}
