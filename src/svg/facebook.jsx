import * as React from "react";
const SVGComponent = (props) => (
  <svg
    fill="#000000"
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    id="facebook-circle"
    data-name="Flat Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-color"
    {...props}
  >
    <circle
      id="primary"
      cx={12}
      cy={12}
      r={10}
      style={{
        fill: "white",
      }}
    />
    <path
      id="secondary"
      d="M17,9a1,1,0,0,1-1,1H14a1,1,0,0,0-1,1v2h2a1,1,0,0,1,0,2H13v7c-.33,0-.66.05-1,.05s-.67,0-1-.05V15H9a1,1,0,0,1,0-2h2V11a3,3,0,0,1,3-3h2A1,1,0,0,1,17,9Z"
      style={{
        fill: "#000000",
      }}
    />
  </svg>
);
export default SVGComponent;
