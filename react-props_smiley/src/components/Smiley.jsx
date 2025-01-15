import React from "react";

export default function Smiley({ isHappy }) {
  return <div>{isHappy ? "=)" : "=("}</div>;
}
