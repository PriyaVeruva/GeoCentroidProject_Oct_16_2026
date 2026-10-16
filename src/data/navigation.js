export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services', mega: true },
  { label: 'Industries', to: '/industries' },
  { label: 'Projects', to: '/projects' },
  { label: 'About Us', to: '/about' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
]

export const megaMenu = [
  {
    title: 'BIM',
    icon: 'building',
    items: [
      { label: 'Structural', to: '/services/structural-bim' },
      { label: 'Architectural', to: '/services/architectural-bim' },
      { label: 'MEPF', to: '/services/mepf-bim' },
      { label: 'Asset Information Modeling (AIM)', to: '/services/aim' },
    ],
  },
  {
    title: 'Scan to BIM',
    icon: 'cube',
    items: [
      { label: 'Architectural', to: '/services/scan-to-bim' },
      { label: 'Structural', to: '/services/scan-to-bim' },
      { label: 'MEPF', to: '/services/scan-to-bim' },
    ],
  },
  {
    title: 'CAD Engineering',
    icon: 'compass',
    items: [
      { label: 'Scan to CAD', to: '/services/cad-engineering' },
      { label: 'Measurable Building Survey', to: '/services/cad-engineering' },
      { label: 'Utility Engineering', to: '/services/cad-engineering' },
      { label: 'Plant Modelling', to: '/services/cad-engineering' },
    ],
  },
  {
    title: 'Geospatial',
    icon: 'pin',
    items: [
      { label: 'Mobile Mapping', to: '/services' },
      { label: 'Photogrammetry', to: '/services' },
      { label: 'Ortho Processing', to: '/services' },
      { label: 'Utility Survey and Mapping', to: '/services' },
    ],
  },
  {
    title: 'Digital Twin',
    icon: 'layers',
    items: [
      { label: 'AR/VR', to: '/services' },
      { label: 'Visualisation', to: '/services' },
      { label: 'Simulation', to: '/services' },
    ],
  },
  {
    title: 'IT Services',
    icon: 'monitor',
    items: [
      { label: 'IT Consulting', to: '/services' },
      { label: 'Software Development', to: '/services' },
      { label: 'Quality & Support', to: '/services' },
    ],
  },
]

export const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Projects', to: '/projects' },
  { label: 'About Us', to: '/about' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
]

export const footerColumns = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Projects', to: '/projects' },
      { label: 'Industries', to: '/industries' },
      { label: 'Insights', to: '/insights' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Structural BIM', to: '/services/structural-bim' },
      { label: 'Architectural BIM', to: '/services/architectural-bim' },
      { label: 'MEPF BIM', to: '/services/mepf-bim' },
      { label: 'Scan to BIM', to: '/services/scan-to-bim' },
      { label: 'CAD Engineering', to: '/services/cad-engineering' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Asset Information Modelling', to: '/services/aim' },
      { label: 'Geospatial & GIS', to: '/services' },
      { label: 'Digital Twin', to: '/services' },
      { label: 'Request a Quote', to: '/quote' },
    ],
  },
]
