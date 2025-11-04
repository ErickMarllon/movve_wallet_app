import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Fullscreen: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    data-icon="FullscreenEnterMedium"
    data-icon-id=":r2ci:"
    aria-hidden="true"
    data-uia="control-fullscreen-enter"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 5C0 3.89543 0.895431 3 2 3H9V5H2V9H0V5ZM22 5H15V3H22C23.1046 3 24 3.89543 24 5V9H22V5ZM2 15V19H9V21H2C0.895431 21 0 20.1046 0 19V15H2ZM22 19V15H24V19C24 20.1046 23.1046 21 22 21H15V19H22Z"
      fill="currentColor"
    ></path>
  </svg>
);

export default Fullscreen;
