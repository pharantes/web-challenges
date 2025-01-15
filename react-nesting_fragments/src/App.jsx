import React from "react";
import "./styles.css";
import Box from "./components/Box";
import { Fragment } from "react";

export default function App() {
  return (
    <main className="flex-container">
      <Boxes />
    </main>
  );
}
import React from 'react'

export default function Boxes() {
  return (
    <Fragment>
      <Box color="#007bff" />
      <Box color="#fc3" />
      <Box color="#ff3333" />
    </Fragment>
  )
}
