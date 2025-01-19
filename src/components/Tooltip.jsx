import { useState } from "react";

const Tooltip = ({ children, text, position = "top" }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {isVisible && (
        <div
          className={`absolute whitespace-nowrap bg-black text-white text-sm py-1 px-2 rounded shadow-lg z-10 ${positionClasses[position]}`}
        >
          {text}
          <div
            className={`absolute w-2 h-2 bg-black rotate-45 ${getArrowPosition(
              position
            )}`}
          />
        </div>
      )}
    </div>
  );
};

const getArrowPosition = (position) => {
  switch (position) {
    case "top":
      return "bottom-[-4px] left-1/2 transform -translate-x-1/2";
    case "right":
      return "left-[-4px] top-1/2 transform -translate-y-1/2";
    case "bottom":
      return "top-[-4px] left-1/2 transform -translate-x-1/2";
    case "left":
      return "right-[-4px] top-1/2 transform -translate-y-1/2";
    default:
      return "";
  }
};

export default Tooltip;
