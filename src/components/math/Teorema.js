import React from 'react'

export default function Teorema({children}) {
  return (
    <div style={{
      borderLeft: "6px solid #2e8555",
      background: "#f6fff8",
      padding: "1rem",
      margin: "1.5rem 0"
    }}>
      <strong>Teorema</strong>
      <div>{children}</div>
    </div>
  )
}