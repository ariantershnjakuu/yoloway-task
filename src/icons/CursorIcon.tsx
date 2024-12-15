import React from "react";

interface IconProps {
  className?: string;
}

const CursorIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.86917 11.4364L3.59103 12.7145M3.45747 8.02758H1.6499M3.59103 3.34147L4.86917 4.61962M8.27797 1.3999V3.20747M12.9641 3.34147L11.6859 4.61962M15.2675 14.9954L19.8698 13.3888C20.7324 13.0877 20.7658 11.8797 19.9208 11.5443L9.39127 7.87744C8.59974 7.56332 7.80383 8.33978 8.09805 9.13904L11.5459 19.9618C11.8599 20.8146 13.0673 20.812 13.3904 19.9576L15.2675 14.9954Z"
      stroke="currentColor"
      className={className}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default CursorIcon;
