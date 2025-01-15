import React from "react";

export default function Button({ color, disabled, text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color, height: "100px" }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
