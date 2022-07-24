import React, { useState } from "react";
import ColorPalette from "./ColorPalette";
import Judge from "./Judge";
import Row from "./Row";
import Sequence from "./Sequence";
const Board = () => {
  const pins = Array.from(Array(48).keys());
  const rows = Array.from(Array(12).keys());
  const [step, setStep] = useState(2);
  console.log(pins);
  return (
    <div className="board-container p-2 flex flex-col-reverse w-full md:w-64 lg:w-72">
      <Sequence />
      {rows.map((row, key) => (
        <div className="flex flex-row h-12" key={key}>
          <Row />
          {step === key ? <ColorPalette /> : <Judge />}
        </div>
      ))}
    </div>
  );
};

export default Board;
