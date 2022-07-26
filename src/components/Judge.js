import React from "react";
import JudgePin from "./JudgePin";

export default function Judge() {
  return (
    <div className="board-row-judge m-2 p-2 w-1/5">
      <div className="board-judge-holes grid grid-cols-2 justify-items-center gap-4">
        <span className="board-judge-hole">
          <JudgePin />
        </span>
        <span className="board-judge-hole">
          <JudgePin />
        </span>
        <span className="board-judge-hole">
          <JudgePin />
        </span>
        <span className="board-judge-hole">
          <JudgePin />
        </span>
      </div>
    </div>
  );
}
