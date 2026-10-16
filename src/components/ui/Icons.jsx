export function Icon({ name, size = 22 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.8',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  const paths = {
    building: <path d="M4 21V5a1 1 0 0 1 1-1h6v17M11 21h9V9a1 1 0 0 0-1-1h-8M8 8h1M8 12h1M8 16h1M16 12h1M16 16h1" />,
    cube: <path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3ZM4 7.5l8 4.5 8-4.5M12 12v9" />,
    compass: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m15.5 8.5-2 6-6 2 2-6 6-2Z" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.2" />
      </>
    ),
    layers: <path d="m12 3 9 5-9 5-9-5 9-5ZM3 13l9 5 9-5M3 17l9 5 9-5" />,
    monitor: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
      </>
    ),
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="M6 6l12 12M18 6 6 18" />,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    check: <path d="M5 12.5 9.5 17 19 7.5" />,
    linkedin: <path d="M6 9v10M6 5.5v.5M11 19V12a3 3 0 0 1 6 0v7" />,
    youtube: <><rect x="3" y="6" width="18" height="12" rx="3" /><path d="m10 9 6 3-6 3V9Z" /></>,
    x: <path d="M5 5l14 14M19 5 5 19" />,
    phone: <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3A2 2 0 0 1 18.5 19 15.5 15.5 0 0 1 5 5.5a2 2 0 0 1 1.5-2Z" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    loc: <><path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" /><circle cx="12" cy="10" r="2" /></>,
    shield: <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />,
    users: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.2" /><path d="M4 19a5 5 0 0 1 10 0M14.5 19a4 4 0 0 1 5.5-3.7" /></>,
    clock: <><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></>,
    target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /></>,
    gear: <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8-3a1.5 1.5 0 0 0-.3-1l1.5-1.2-1.6-2.8-1.9.5a7 7 0 0 0-1.7-1L16 4h-3.2l-.3 2.5a7 7 0 0 0-1.7 1l-1.9-.5L7.3 9.8 8.8 11a1.5 1.5 0 0 0 0 2l-1.5 1.2 1.6 2.8 1.9-.5a7 7 0 0 0 1.7 1l.3 2.5H16l.3-2.5a7 7 0 0 0 1.7-1l1.9.5 1.6-2.8L19.7 13c.2-.3.3-.6.3-1Z" />,
    foundation: <path d="M4 19h16M6 19V9l6-4 6 4v10M9 19v-5h6v5" />,
    column: <path d="M5 5h14M7 5v14M17 5v14M4 19h16" />,
    slab: <path d="M4 8h16v4H4zM7 12v7M17 12v7M4 19h16" />,
    truss: <path d="M4 19 12 5l8 14M4 19h16M8 12h8" />,
    hvac: <path d="M4 10h16M4 14h16M8 7v10M16 7v10" />,
    elec: <path d="M13 3 6 14h6l-1 7 8-12h-6l1-6Z" />,
    plumb: <path d="M8 4h8v4H8zM12 8v4M7 12h10v8H7z" />,
    fire: <path d="M12 21a6 6 0 0 0 6-6c0-4-4-6-4-10 0 0-2 2-4 4-2 3-4 5-4 8a6 6 0 0 0 6 4Z" />,
    scan: <path d="M5 8V5h3M16 5h3v3M19 16v3h-3M8 19H5v-3M5 12h14" />,
    cloud: <path d="M7 18h10a4 4 0 0 0 0-8 5.5 5.5 0 0 0-10.4-1.5A3.5 3.5 0 0 0 7 18Z" />,
    draft: <path d="M14 4H6v16h12V8l-4-4ZM14 4v4h4" />,
    survey: <path d="M12 21V8M8 12l4-4 4 4M5 21h14" />,
    infra: <path d="M4 18 12 6l8 12H4Z" />,
    arch: <path d="M4 20V10l8-6 8 6v10H4Zm8 0v-6" />,
    transport: <path d="M4 16h16l-2-7H6L4 16Zm2 3h2m8 0h2M7 9V6h10" />,
    energy: <path d="M13 2 4 14h7l-1 8 10-14h-7l0-6Z" />,
    oil: <path d="M8 21h8M12 3c4 6 6 9 6 12a6 6 0 1 1-12 0c0-3 2-6 6-12Z" />,
    factory: <path d="M3 21h18V11l-6 3V11l-6 3V8H3v13Z" />,
    heritage: <path d="M4 20h16M6 20V10l6-5 6 5v10M10 20v-5h4v5" />,
    equip: <rect x="4" y="8" width="16" height="10" rx="2" />,
    download: <path d="M12 4v10m0 0 4-4m-4 4-4-4M5 19h14" />,
    chevron: <path d="m6 9 6 6 6-6" />,
    eye: (
      <>
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 3 3.8 6 3.8 9s-1.3 6-3.8 9c-2.5-3-3.8-6-3.8-9S9.5 6 12 3Z" />
      </>
    ),
    chip: (
      <>
        <rect x="7" y="7" width="10" height="10" rx="1.5" />
        <path d="M9 7V4M12 7V4M15 7V4M9 20v-3M12 20v-3M15 20v-3M7 9H4M7 12H4M7 15H4M20 9h-3M20 12h-3M20 15h-3" />
      </>
    ),
    handshake: (
      <>
        <path d="M8 11 4.5 8.5 8 6l3 2.5M16 11l3.5-2.5L16 6l-3 2.5" />
        <path d="M4 14.5 8 18l4-3 4 3 4-3.5" />
        <path d="M8 18v3M16 18v3" />
      </>
    ),
  }

  return (
    <svg {...common} aria-hidden="true">
      {paths[name] || paths.cube}
    </svg>
  )
}

export function Logo({ light = false }) {
  return (
    <span className="logo">
      <svg className="logo-mark" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="22" stroke={light ? '#7eb0ff' : '#1d6ef5'} strokeWidth="2.4" />
        <path
          d="M16 24c0-5.5 4.5-10 10-10h3v5.2h-3a4.8 4.8 0 100 9.6h8.4V34H26c-5.5 0-10-4.5-10-10z"
          fill={light ? '#5aa0ff' : '#1d6ef5'}
        />
      </svg>
      <span className="logo-text">
        <strong>GEOCENTROID</strong>
        <span>Engineering · Geospatial · Digital</span>
      </span>
    </span>
  )
}
