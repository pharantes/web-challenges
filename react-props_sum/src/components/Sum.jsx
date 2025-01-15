import React from "react";

export default function Sum({ a, b }) {
  return (
    <div>
      {a} + {b} = {parseInt(a) + parseInt(b)}
    </div>
  );
}
