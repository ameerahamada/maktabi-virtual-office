/* Shared SVG icon set. Single component, switch by `name`.
   Keeps JSX in feature components clean. */
const P = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }

const paths = {
  chevronStart: <path d="M15 6l-6 6 6 6" {...P} />,
  chevronDown: <path d="M6 9l6 6 6-6" {...P} />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" {...P} />
      <path d="M20 20l-3-3" {...P} />
    </>
  ),
  bell: (
    <>
      <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" {...P} />
      <path d="M13.7 21a2 2 0 01-3.4 0" {...P} />
    </>
  ),
  check: <path d="M5 12l5 5 9-9" {...P} strokeWidth={2.4} />,
  building: <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-5h6v5" {...P} />,
  square: <rect x="3" y="3" width="18" height="18" rx="3" {...P} />,
  squareLine: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" {...P} />
      <path d="M3 9h18" {...P} />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" {...P} />
      <path d="M8 11V8a4 4 0 018 0v3" {...P} />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" {...P} />
      <path d="M12 8h.01M11 12h1v4h1" {...P} />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="9" r="3" {...P} />
      <path d="M3 19c0-2.5 2.7-4 6-4s6 1.5 6 4" {...P} />
      <path d="M16 6a3 3 0 010 6" {...P} />
    </>
  ),
  userSingle: (
    <>
      <circle cx="12" cy="8" r="4" {...P} />
      <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" {...P} />
    </>
  ),
  board: (
    <>
      <path d="M4 5h16v11H4z" {...P} />
      <path d="M8 21h8M12 16v5" {...P} />
    </>
  ),
  focus: (
    <>
      <path d="M12 3a7 7 0 00-4 12.7V18h8v-2.3A7 7 0 0012 3z" {...P} />
      <path d="M9 21h6" {...P} />
    </>
  ),
  desktop: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" {...P} />
      <path d="M3 20h18" {...P} />
    </>
  ),
  sofa: <path d="M4 11V8a2 2 0 012-2h12a2 2 0 012 2v3M3 11h18v6H3zM6 17v2M18 17v2" {...P} />,
  plus: <path d="M12 5v14M5 12h14" {...P} />,
  minus: <path d="M5 12h14" {...P} />,
  target: (
    <>
      <circle cx="12" cy="12" r="3" {...P} />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" {...P} />
    </>
  ),
  mic: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" {...P} />
      <path d="M6 11a6 6 0 0012 0M12 17v4M9 21h6" {...P} />
    </>
  ),
  micSmall: (
    <>
      <rect x="9" y="3" width="6" height="10" rx="3" {...P} />
      <path d="M6 11a6 6 0 0012 0" {...P} />
    </>
  ),
  micOff: <path d="M9 9v2a3 3 0 004.5 2.6M15 11V6a3 3 0 00-5.8-1M6 11a6 6 0 009 5.2M12 19v2M4 4l16 16" {...P} />,
  cam: (
    <>
      <rect x="3" y="6" width="13" height="12" rx="2" {...P} />
      <path d="M16 10l5-3v10l-5-3" {...P} />
    </>
  ),
  screen: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" {...P} />
      <path d="M12 8v5M9.5 10.5L12 8l2.5 2.5M8 21h8" {...P} />
    </>
  ),
  hand: <path d="M8 11V5.5a1.5 1.5 0 013 0V11m0-1V4.5a1.5 1.5 0 013 0V11m0-.5V6a1.5 1.5 0 013 0v7a6 6 0 01-6 6h-1.2a4 4 0 01-3-1.4L5 14a1.6 1.6 0 012.4-2L8 12.5" {...P} />,
  chat: <path d="M4 5h16v11H9l-4 3v-3H4z" {...P} />,
  leave: <path d="M14 4h4a2 2 0 012 2v12a2 2 0 01-2 2h-4M10 8l-4 4 4 4M6 12h11" {...P} />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" {...P} />,
  smile: (
    <>
      <circle cx="12" cy="12" r="9" {...P} />
      <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" {...P} />
    </>
  ),
  send: <path d="M20 4L3 11l6 2 2 6 9-15z" {...P} />,
}

export default function Icon({ name, size = 20, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...rest}>
      {paths[name]}
    </svg>
  )
}
