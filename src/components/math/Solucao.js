import React from 'react'

export default function Solucao({children}) {
  return (
    <div style={{
      borderLeft: "6px solid #e55353",
      background: "#fff5f5",
      padding: "1rem",
      margin: "1.5rem 0"
    }}>
      <strong>Solução</strong>
      <div>{children}</div>
    </div>
  )
}