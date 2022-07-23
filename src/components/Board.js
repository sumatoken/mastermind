import React from "react";
import Judge from "./Judge";
import Pin from "./Pin";
const Board = () => {
  const pins = Array.from(Array(48).keys());
  const cols = Array.from(Array(12).keys());
  console.log(pins);
  return (
    <div className="board-container p-2 flex flex-col w-full md:w-64 lg:w-72">
      <div className="board-sequence m-2 p-4"></div>
      {cols.map((col, key) => (
        <div className="flex flex-row h-12" key={key}>
          <div className="board-row m-2 p-2 w-4/5">
            <div className="board-row-holes  flex flex-row justify-center gap-8">
              <span className="board-hole">
                <Pin />
              </span>
              <span className="board-hole"></span>
              <span className="board-hole"></span>
              <span className="board-hole"></span>
            </div>
          </div>
          <div className="board-row-judge m-2 p-2 w-1/5">
            <div className="board-judge-holes grid grid-cols-2 justify-items-center gap-4">
              <span className="board-judge-hole">
                <Judge />
              </span>
              <span className="board-judge-hole"></span>
              <span className="board-judge-hole"></span>
              <span className="board-judge-hole"></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Board;
