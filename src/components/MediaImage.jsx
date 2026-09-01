// src/components/MediaImage.jsx — replace the whole file
import { useState } from 'react'

// Turns "/images/foo.jpg" into "/shrimponi-website/images/foo.jpg" (matching
// the `base` set in vite.config.js) so images resolve correctly once the
// site is deployed under a subpath, like on GitHub Pages. Paths that are
// already full URLs (http...) or imported modules are left untouched.
function resolveSrc(src) {
  if (!src || !src.startsWith('/') || src.startsWith('//')) return src
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return base + src
}

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

  return <img src={resolveSrc(src)} alt={alt} className={className} onError={() => setFailed(true)} />
}