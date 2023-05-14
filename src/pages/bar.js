import Tooltip from "./tooltip";

export default function Bar({ day, amount }) {
  const barHeight = amount * 2.5;
  const backgroundColor =
    day === "wed" ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)";
  const classBar = {
    background: backgroundColor,
    borderRadius: "5px",
    width: "40px",
    height: `${barHeight}px`,
  };
  return (
    <div className="cursor-pointer">
      <Tooltip content={`$${amount}`}>
        <div style={classBar} className="hover:opacity-50"></div>
        <div
          className="text-center text-xs mt-2"
          style={{ color: "hsl(28, 10%, 53%)" }}
        >
          {day}{" "}
        </div>
      </Tooltip>
    </div>
  );
}
