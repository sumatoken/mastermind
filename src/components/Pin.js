import React from "react";

export default function Pin({ height, width }) {
  return (
    <svg
      className="pin"
      width={width}
      height={height}
      viewBox="0 0 26 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="12.5" cy="23" rx="8.5" ry="10" fill="#C93131" />
      <ellipse cx="13" cy="13.5" rx="13" ry="13.5" fill="#FF0000" />
    </svg>
  );
}
