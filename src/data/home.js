import { projects } from './projects.js'

export const heroPills = [
  { label: 'BIM & CAD', to: '/services/bim' },
  { label: 'Geospatial', to: '/services/geospatial' },
  { label: 'LiDAR & Reality Capture', to: '/services/scan-to-bim' },
  { label: 'Digital Twin', to: '/services/digital-twin' },
  { label: 'UAV & 3D Visualization', to: '/services/visualisation' },
  { label: 'LiDAR & Drone Mapping', to: '/services/uav-drone-mapping' },
]

export const solutions = [
  {
    title: 'BIM & CAD Engineering',
    text: '3D modelling, coordination and engineering documentation.',
    image: '/images/image8.jpeg',
    to: '/services/bim',
  },
  {
    title: 'Geospatial & GIS',
    text: 'Mapping, spatial analysis, remote sensing and GIS solutions.',
    image: '/images/image16.jpeg',
    to: '/services/geospatial',
  },
  {
    title: 'LiDAR & Reality Capture',
    text: '3D laser scanning, point clouds and Scan-to-BIM.',
    image: '/images/image6.jpeg',
    to: '/services/scan-to-bim',
  },
  {
    title: 'Digital Twin & Visualization',
    text: '3D models, simulation, AR/VR and immersive experiences.',
    image: '/images/image21.jpeg',
    to: '/services/digital-twin',
  },
  {
    title: 'UAV & Drone Mapping',
    text: 'Aerial surveys, orthomosaics, inspection and monitoring.',
    image: '/images/image14.jpeg',
    to: '/services/uav-drone-mapping',
  },
]

export const featuredProjects = projects.slice(0, 4)

export const industries = [
  { label: 'Infrastructure', icon: 'infra' },
  { label: 'Architecture & Construction', icon: 'arch' },
  { label: 'Transportation', icon: 'transport' },
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
