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
    to: '/services/bim',
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
    to: '/services/scan-to-bim',
    items: [
      { label: 'Architectural', to: '/services/scan-to-bim-architectural' },
      { label: 'Structural', to: '/services/scan-to-bim-structural' },
      { label: 'MEPF', to: '/services/scan-to-bim-mepf' },
    ],
  },
  {
    title: 'CAD Engineering',
    icon: 'compass',
    to: '/services/cad-engineering',
    items: [
      { label: 'Scan to CAD', to: '/services/scan-to-cad' },
      { label: 'Measurable Building Survey', to: '/services/measurable-building-survey' },
      { label: 'Utility Engineering', to: '/services/utility-engineering' },
      { label: 'Plant Modelling', to: '/services/plant-modelling' },
    ],
  },
  {
    title: 'Geospatial',
    icon: 'pin',
    to: '/services/geospatial',
    items: [
      { label: 'Mobile Mapping', to: '/services/mobile-mapping' },
      { label: 'Photogrammetry', to: '/services/photogrammetry' },
      { label: 'Ortho Processing', to: '/services/ortho-processing' },
      { label: 'Utility Survey and Mapping', to: '/services/utility-survey' },
      { label: 'UAV & Drone Mapping', to: '/services/uav-drone-mapping' },
    ],
  },
  {
    title: 'Digital Twin',
    icon: 'layers',
    to: '/services/digital-twin',
    items: [
      { label: 'AR/VR', to: '/services/ar-vr' },
      { label: 'Visualisation', to: '/services/visualisation' },
      { label: 'Simulation', to: '/services/simulation' },
    ],
  },
  {
    title: 'IT Services',
    icon: 'monitor',
    to: '/services/it-services',
    items: [
      { label: 'IT Consulting', to: '/services/it-consulting' },
      { label: 'Software Development', to: '/services/software-development' },
      { label: 'Quality & Support', to: '/services/quality-support' },
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
      { label: 'BIM Modelling', to: '/services/bim' },
      { label: 'Scan to BIM', to: '/services/scan-to-bim' },
      { label: 'CAD Engineering', to: '/services/cad-engineering' },
      { label: 'Geospatial', to: '/services/geospatial' },
      { label: 'Digital Twin', to: '/services/digital-twin' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Asset Information Modelling', to: '/services/aim' },
      { label: 'IT Services', to: '/services/it-services' },
      { label: 'UAV & Drone Mapping', to: '/services/uav-drone-mapping' },
      { label: 'Request a Quote', to: '/quote' },
    ],
  },
]
