import React from "react";

function Icon({...props}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="21"
      fill="none"
      viewBox="0 0 22 21"
      {...props}
    >
      <path
        fill="#090"
        d="M11 16.71l6.695 4.04-1.777-7.616 5.915-5.124-7.789-.66L11 .166 7.956 7.349l-7.79.661 5.916 5.124-1.777 7.616L11 16.71z"
      ></path>
    </svg>
  );
}

export default Icon;
