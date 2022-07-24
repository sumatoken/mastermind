import { useDrag } from "react-dnd";

function parseColor(color) {
  let frColor;
  let bgColor;
  switch (color) {
    case "red":
      frColor = "#FF0000";
      bgColor = "#C93131";
      break;
    case "blue":
      frColor = "#0047FF";
      bgColor = "#6100FF";
      break;
    case "green":
      frColor = "#00A41A";
      bgColor = "#4D774C";
      break;
    case "white":
      frColor = "#fff";
      bgColor = "#DDE7DD";
      break;
    case "purple":
      frColor = "#FF00E5";
      bgColor = "#8C1A73";
      break;
    case "yellow":
      frColor = "#EBFF00";
      bgColor = "#AFCB00";
      break;
    case "pink":
      frColor = "pink";
      bgColor = "#FAA1B1";
      break;
    case "orange":
      frColor = "#FF7A00";
      bgColor = "#DA7600";
      break;
  }
  return [frColor, bgColor];
}

export default function Pin({ height, width, color }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "pin",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.8 : 1,
        cursor: "move",
      }}
    >
      <svg
        className="pin"
        width={width}
        height={height}
        viewBox="0 0 26 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="12.5"
          cy="23"
          rx="8.5"
          ry="10"
          fill={parseColor(color)[1]}
        />
        <ellipse
          cx="13"
          cy="13.5"
          rx="13"
          ry="13.5"
          fill={parseColor(color)[0]}
        />
      </svg>
    </div>
  );
}
