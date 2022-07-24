import React from "react";
import Pin from "./Pin";

export default function Row() {
  return (
    <div className="board-row m-2 p-2 w-4/5">
      <div className="board-row-holes  flex flex-row justify-center gap-8">
        <span className="board-hole">
          <Pin width="26" height="33" />
        </span>
        <span className="board-hole">
          <Pin width="26" height="33" />
        </span>
        <span className="board-hole">
          <Pin width="26" height="33" />
        </span>
        <span className="board-hole">
          <Pin width="26" height="33" />
        </span>
      </div>
    </div>
  );
}
