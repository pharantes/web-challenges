import React from "react";

export default function Link({ children, href }) {
  return (
    <a className="navigation__link" href={href}>
      {children}
    </a>
  );
}
