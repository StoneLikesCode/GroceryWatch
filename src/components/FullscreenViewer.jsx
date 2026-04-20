import React, { useState, useEffect } from 'react'

export default function FullscreenViewer({ src, alt, title }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  if (!src) return null

  return (
    <>
      <div style={{ position: 'relative' }}>
        <img
          src={src}
          alt={alt}
          style={{ width: '100%', cursor: 'zoom-in' }}
          onClick={() => setOpen(true)}
        />
        <button
          onClick={() => setOpen(true)}
          style={{
            position: 'absolute',
            right: 8,
            bottom: 8,
            padding: '6px 10px',
            borderRadius: 6,
            border: 'none',
            background: 'rgba(0,0,0,0.6)',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Fullscreen
        </button>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: 20,
          }}
        >
          <img
            src={src}
            alt={alt}
            title={title}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
