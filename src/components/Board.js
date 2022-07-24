import React from "react";
import ColorPalette from "./ColorPalette";
import Judge from "./Judge";
import Row from "./Row";
import Sequence from "./Sequence";
const Board = () => {
  const pins = Array.from(Array(48).keys());
  const cols = Array.from(Array(12).keys());
  console.log(pins);
  return (
    <div className="board-container p-2 flex flex-col w-full md:w-64 lg:w-72">
      <Sequence />
      {cols.map((col, key) => (
        <div className="flex flex-row h-12" key={key}>
          <Row />
          <ColorPalette />
        </div>
      ))}
    </div>
  );
};

export default Board;
