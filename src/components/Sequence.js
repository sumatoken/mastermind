import React, { useState } from "react";
import Pin from "./Pin";
function renderPin(color) {
  return <Pin color={color} width="26" height="33" />;
}
export default function Sequence() {
  const [colors, setColors] = useState(["red", "green", "yellow", "white"]);

  return (
    <div className="board-sequence m-2 p-0">
      <div className="m-2 p-2">
        <div className=" flex flex-row justify-center gap-14 lg:gap-8 md:gap-12">
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
    </div>
  );
}
