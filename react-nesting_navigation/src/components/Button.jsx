import React from "react";

export default function Button({ children, onClick, ariaLabel, type }) {
  return (
    <button type={type} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </button>
  );
}
