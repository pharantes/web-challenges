import React from "react";

export function Greeting({ name }) {
  return <div>Hello, {name == "Coach" ? "Coach" : name}</div>;
}
