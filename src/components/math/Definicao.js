import React from 'react'

export default function Definicao({children}) {
  return (
    <div style={{
      borderLeft: "6px solid #3578e5",
      background: "#f5f8ff",
      padding: "1rem",
      margin: "1.5rem 0"
    }}>
      <strong>Definição</strong>
      <div>{children}</div>
    </div>
  )
}