// src/components/icons/Icons.jsx
// Minimal line-icon set used for UI chrome only (navbar, cart, buttons).
// Kept deliberately plain — real dish/category photography is used everywhere
// food itself needs to be represented.

const base = {
  width: '1em',
  height: '1em',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function HomeIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 10v9a1 1 0 0 0 1 1H9a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1v-9" />
    </svg>
  )
}

export function DineInIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 3v7a2 2 0 0 1-2 2v9" />
      <path d="M7 3v18M11 3v9" />
      <path d="M9 3v7" />
      <path d="M17 3c-1.4 0-2.5 1.5-2.5 4.5S15.6 12 17 12s2.5-1.7 2.5-4.5S18.4 3 17 3Z" />
      <path d="M17 12v9" />
    </svg>
  )
}

export function DeliveryIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="8" width="11" height="8" rx="1.2" />
      <path d="M13.5 11h3.4l3.1 3v2a1 1 0 0 1-1 1H19" />
      <circle cx="7" cy="18.5" r="1.6" />
      <circle cx="17" cy="18.5" r="1.6" />
    </svg>
  )
}

export function AboutIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5.5" />
      <circle cx="12" cy="7.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function MapPinIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  )
}

export function ChevronLeftIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m14 6-6 6 6 6" />
    </svg>
  )
}

export function ChevronDownIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export function BagIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 8h12l1 12.2a1.5 1.5 0 0 1-1.5 1.8H6.5A1.5 1.5 0 0 1 5 20.2L6 8Z" />
      <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
    </svg>
  )
}

export function CloseIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function TrashIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16" />
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
      <path d="M6.5 7 7.3 19a1.5 1.5 0 0 0 1.5 1.4h6.4a1.5 1.5 0 0 0 1.5-1.4L17.5 7" />
      <path d="M10.2 11v6M13.8 11v6" />
    </svg>
  )
}

export function SendIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M21 3 3 10.5l7 2.5" />
      <path d="M21 3 13.5 21l-3.5-8" />
      <path d="M10 12.5 21 3" />
    </svg>
  )
}

export function EmptyPlateIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.2" />
    </svg>
  )
}