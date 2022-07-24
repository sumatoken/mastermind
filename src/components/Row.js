import React, { useEffect, useState } from "react";
import Pin from "./Pin";

function renderPin(color) {
  return <Pin color={color} width="26" height="33" />;
}

export default function Row() {
  const [colors, setColors] = useState(["red", "green", "yellow", "white"]);

  return (
    <div className="board-row m-2 p-2 w-4/5">
      <div className="board-row-holes  flex flex-row justify-center gap-8">
        <span className="board-hole">
          {colors[0] ? renderPin(colors[0]) : ""}
        </span>
        <span className="board-hole">
          {colors[1] ? renderPin(colors[1]) : ""}
        </span>
        <span className="board-hole">
          {colors[2] ? renderPin(colors[2]) : ""}
        </span>
        <span className="board-hole">
          {colors[3] ? renderPin(colors[3]) : ""}
        </span>
      </div>
    </div>
  );
}
