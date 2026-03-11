import React from 'react'

export default function Exercicio({children}) {
  return (
    <div style={{
      borderLeft: "6px solid #f0ad4e",
      background: "#fffaf3",
      padding: "1rem",
      margin: "1.5rem 0"
    }}>
      <strong>Exercício</strong>
      <div>{children}</div>
    </div>
  )
}