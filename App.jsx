import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "2rem" }}>
      <div style={{
        border: "1px solid #ccc",
        borderRadius: "12px",
        padding: "2rem 2.5rem",
        minWidth: "280px",
        textAlign: "center"
      }}>
        <h2>React Counter Application</h2>
        <div style={{ fontSize: "48px", margin: "1rem 0" }}>{count}</div>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "10px" }}>
          <button onClick={() => setCount(count + 1)} style={btnStyle}>Increment (+)</button>
          <button onClick={() => setCount(count - 1)} style={btnStyle}>Decrement (-)</button>
        </div>
        <button onClick={() => setCount(0)} style={btnStyle}>Reset</button>
      </div>
    </div>
  );
}

const btnStyle = {
  background: "#2196f3",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  padding: "8px 18px",
  fontSize: "14px",
  cursor: "pointer"
};