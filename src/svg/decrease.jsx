const SVGComponent = (props) => (
  <svg
    width="600px"
    height="600px"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <style>
        {
          ".cls-1{fill:none;stroke:#333;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}"
        }
      </style>
    </defs>
    <title />
    <g id="minus">
      <line className="cls-1" x1={7} x2={25} y1={16} y2={16} />
    </g>
  </svg>
);
export default SVGComponent;
