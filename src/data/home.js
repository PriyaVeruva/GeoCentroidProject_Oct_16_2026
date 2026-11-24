import { megaMenu, primaryServiceGroups } from './navigation.js'
import { projects } from './projects.js'

const solutionMeta = {
  BIM: {
    text: 'Architectural, structural, MEPF and AIM modelling and coordination.',
    image: '/images/capabilities/home-bim.png',
  },
  'Scan to BIM': {
    text: 'Point clouds and laser scans turned into intelligent 3D BIM models.',
    image: '/images/capabilities/home-scan-to-bim.png',
  },
  'CAD Engineering': {
    text: 'Scan to CAD, measurable surveys, utility and plant documentation.',
    image: '/images/capabilities/home-cad.png',
  },
  Geospatial: {
    text: 'Mapping, photogrammetry, ortho processing, utility and UAV surveys.',
    image: '/images/capabilities/home-geospatial.png',
  },
  'Digital Twin': {
    text: 'AR/VR, visualisation and simulation for smarter operations.',
    image: '/images/capabilities/home-digital-twin.png',
  },
}

export const heroPills = megaMenu.map((group) => ({
  label: group.title,
  to: group.to,
}))

export const solutions = primaryServiceGroups.map((group) => ({
  title: group.title,
  to: group.to,
  text: solutionMeta[group.title]?.text || group.items.map((item) => item.label).join(', ') + '.',
  image: solutionMeta[group.title]?.image || '/images/image8.jpeg',
}))

export const featuredProjects = projects.slice(0, 4)

export const industries = [
  { label: 'Infrastructure', icon: 'infra' },
  { label: 'Architecture & Construction', icon: 'arch' },
  { label: 'Energy & Utilities', icon: 'energy' },
  { label: 'Oil & Gas', icon: 'oil' },
  { label: 'Manufacturing', icon: 'factory' },
  { label: 'Heritage & Conservation', icon: 'heritage' },
]

export const whyUs = [
  {
    title: 'Proven Experience',
    text: 'Successful projects across global markets.',
    icon: 'target',
  },
  {
    title: 'Advanced Technology',
    text: 'Latest tools and innovative BIM approach.',
    icon: 'layers',
  },
  {
    title: 'Quality & Accuracy',
    text: 'Rigorous processes and quality checks.',
    icon: 'check',
  },
  {
    title: 'Data Security',
    text: 'Your data, our priority.',
    icon: 'shield',
  },
  {
    title: 'Skilled Team',
    text: 'Expertise across disciplines.',
    icon: 'users',
  },
]
