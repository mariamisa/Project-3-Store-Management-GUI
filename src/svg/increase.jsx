import * as React from "react";
const SVGComponent = (props) => (
  <svg
    fill="#3333"
    width="500px"
    height="500px"
    viewBox="0 0 24 24"
    id="plus"
    data-name="Flat Line"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-line"
    {...props}
  >
    <path
      id="primary"
      d="M5,12H19M12,5V19"
      style={{
        fill: "none",
        stroke: "rgb(0, 0, 0)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </svg>
);
export default SVGComponent;
