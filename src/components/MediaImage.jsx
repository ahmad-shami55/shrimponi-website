import { useState } from 'react'

// Renders a real <img>. If the file isn't there yet (404), it falls back to a
// clean labeled placeholder instead of the browser's broken-image icon, so
// the layout still looks intentional while photos are being added.
export default function MediaImage({ src, alt, className = '', label }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={`${className} media-fallback`} role="img" aria-label={alt}>
        <span>{label || alt}</span>
      </div>
    )
  }

  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />
}
