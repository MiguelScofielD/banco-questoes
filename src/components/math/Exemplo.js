import react from 'react';

function Exemplo({children}) {
  return (
    <div
    style={{
        borderLeft: "6px solid #1976d2",
        background: "#f4f9ff",
        padding: "1rem",
        margin: "1.5rem 0",
        borderRadius: "6px"
    }}
    >
      <strong>Exemplo</strong>

      <div>{children}</div>
    </div>
  );
}

export default Exemplo;