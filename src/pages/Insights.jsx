import CtaBanner from '../components/ui/CtaBanner.jsx'
import '../styles/pages.css'

const posts = [
  { title: 'How Scan to BIM reduces rework on renovation projects', tag: 'BIM' },
  { title: 'What LOD really means for structural and MEP coordination', tag: 'Coordination' },
  { title: 'From point cloud to digital twin: a practical delivery path', tag: 'Digital Twin' },
]

export default function Insights() {
  return (
    <>
      <section className="dark-hero">
        <div className="container">
          <p className="eyebrow" style={{ color: '#8cbcff' }}>Insights</p>
          <h1>Ideas, methods and project lessons</h1>
          <p>Practical writing on BIM, geospatial workflows and digital engineering delivery.</p>
        </div>
      </section>
      <section className="section">
        <div className="container card-grid">
          {posts.map((post) => (
            <article className="overview-card" key={post.title}>
              <p className="eyebrow">{post.tag}</p>
              <h3>{post.title}</h3>
              <p className="section-lead">Read how GeoCentroid approaches accuracy, coordination and handover on live projects.</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBanner title="Have a question for our specialists?" text="Talk to the team about your next BIM, CAD or Scan-to-BIM assignment." action="Contact Us" to="/contact" />
    </>
  )
}
