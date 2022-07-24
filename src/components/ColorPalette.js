import React from "react";
import Pin from "./Pin";

export default function ColorPalette() {
  return (
    <div className="board-row-judge m-2 p-2 w-1/5">
      <div className="board-judge-holes grid grid-cols-2 justify-items-center gap-4">
        <span className="board-judge-hole">
          <Pin width="13" height="16" />
        </span>
        <span className="board-judge-hole">
          <Pin width="13" height="16" />
        </span>
        <span className="board-judge-hole">
          <Pin width="13" height="16" />
        </span>
        <span className="board-judge-hole">
          <Pin width="13" height="16" />
        </span>
      </div>
    </div>
  );
}
