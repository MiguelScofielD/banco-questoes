import React from "react";

function Dica({ children }) {
  return (
    <details
      style={{
        borderLeft: "6px solid #ff9800",
        background: "#fff9e6",
        margin: "1.5rem 0",
        borderRadius: "6px",
      }}
    >
      <summary
        style={{
          padding: "1rem",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        💡 Dica — clique para visualizar
      </summary>

      <div
        style={{
          padding: "0 1rem 1rem 1rem",
        }}
      >
        {children}
      </div>
    </details>
  );
}

export default Dica;