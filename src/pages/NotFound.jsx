import Button from '../components/ui/Button.jsx'

export default function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 className="section-title">Page not found</h1>
        <p className="section-lead" style={{ margin: '12px auto 20px' }}>The page you requested is not available.</p>
        <Button to="/">Back to Home</Button>
      </div>
    </section>
  )
}
