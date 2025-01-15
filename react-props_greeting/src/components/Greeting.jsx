import React from "react";
// aligment
export function Greeting({ name }) {
  return <div>Hello, {name == "Coach" ? "Coach" : name}</div>;
}
