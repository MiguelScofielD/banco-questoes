import React from "react";

function Dica({ children }) {
  return (
    <div
      style={{
        borderLeft: "6px solid #ff9800",
        background: "#fff9e6",
        padding: "1rem",
        margin: "1.5rem 0",
        borderRadius: "6px"
      }}
    >
      <strong>💡 Dica</strong>

      <div>{children}</div>
    </div>
  );
}

export default Dica;