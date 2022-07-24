import Pin from "./Pin";

/*
@ This component is based on the Judge component.
** Added 4 Pins.
** 8 Pins in total.
*/
export default function ColorPalette() {
  return (
    <div className="board-row-judge m-2 p-1 w-1/5">
      <div className="board-judge-holes grid grid-cols-4 justify-items-center gap-3 color-palette">
        <span className="board-judge-hole">
          <Pin width="13" height="16" color="white" />
        </span>
        <span className="board-judge-hole">
          <Pin width="13" height="16" color="pink" />
        </span>
        <span className="board-judge-hole">
          <Pin width="13" height="16" color="green" />
        </span>
        <span className="board-judge-hole">
          <Pin width="13" height="16" color="red" />
        </span>
        <span className="board-judge-hole">
          <Pin width="13" height="16" color="purple" />
        </span>
        <span className="board-judge-hole">
          <Pin width="13" height="16" color="blue" />
        </span>
        <span className="board-judge-hole">
          <Pin width="13" height="16" color="orange" />
        </span>
        <span className="board-judge-hole">
          <Pin width="13" height="16" color="yellow" />
        </span>
      </div>
    </div>
  );
}
