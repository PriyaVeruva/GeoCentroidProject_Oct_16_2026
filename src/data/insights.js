export const insights = [
  {
    slug: 'scan-to-bim-reduces-rework',
    title: 'How Scan to BIM reduces rework on renovation projects',
    tag: 'BIM',
    date: '12 Mar 2025',
    image: '/images/image13.jpeg',
    excerpt: 'When existing drawings are wrong, the cheapest place to find out is in the point cloud — not on site.',
    body: [
      'Renovation and retrofit work fails most often because the team is designing against drawings that no longer match the building. Walls have moved, services have been added, and as-built records were never updated.',
      'Scan to BIM starts from registered laser scan data. Architectural, structural and MEPF geometry is modelled only where the cloud supports it, to an agreed LOD. That gives design and contractor teams a shared as-built model before they commit to demolition or new services.',
      'The saving is practical: fewer site RFIs, fewer fabrication clashes, and a clearer handover model for facilities. GeoCentroid typically combines capture, modelling and a short coordination pass so the model is usable, not just visually complete.',
    ],
    relatedService: { label: 'Scan to BIM', to: '/services/scan-to-bim' },
  },
  {
    slug: 'what-lod-really-means',
    title: 'What LOD really means for structural and MEP coordination',
    tag: 'Coordination',
    date: '4 Feb 2025',
    image: '/images/image6.jpeg',
    excerpt: 'LOD is a scope decision, not a quality slogan. Agree what will be modelled before production starts.',
    body: [
      'LOD (and LOI) describe how much geometry and information a model should carry. On structural and MEPF work, “LOD 300” without a written list of elements usually means different things to the modeller, the engineer and the installer.',
      'A useful BEP names the elements, the source drawings or scans, and what is excluded. Reinforcement, hangers, insulation and connection details should be in or out by agreement — not discovered in a clash meeting.',
      'GeoCentroid models to the LOD written into the order. That keeps files lighter, coordination honest, and deliverables reviewable against a checklist instead of an opinion.',
    ],
    relatedService: { label: 'MEPF BIM', to: '/services/mepf-bim' },
  },
  {
    slug: 'point-cloud-to-digital-twin',
    title: 'From point cloud to digital twin: a practical delivery path',
    tag: 'Digital Twin',
    date: '21 Jan 2025',
    image: '/images/image21.jpeg',
    excerpt: 'A twin is not a render. It is a coordinated model, ready for visualisation, simulation and later operational data.',
    body: [
      'Many teams ask for a digital twin when they actually need an as-built model they can walk through. The useful path is still the same: capture or BIM, federate, visualise, then decide which operational layers are worth connecting.',
      'Start with geometry you trust — scan, BIM or GIS — in one coordinate system. Add visualisation or AR/VR so stakeholders can review. Only then attach IoT, FM or simulation data, or you will be dressing an inaccurate model.',
      'GeoCentroid builds that foundation: reality capture, BIM/GIS context, visualisation and simulation-ready structure, so the twin can grow without rebuilding the asset every year.',
    ],
    relatedService: { label: 'Digital Twin', to: '/services/digital-twin' },
  },
]
