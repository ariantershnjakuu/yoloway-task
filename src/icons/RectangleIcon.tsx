function RectangleIcon({ className }: { className: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4999 1.3999C19.4881 1.3999 21.0999 3.01168 21.0999 4.9999V17C21.0999 18.9882 19.4881 20.6 17.4999 20.6H5.4999C3.51168 20.6 1.8999 18.9882 1.8999 17L1.8999 4.9999C1.8999 3.01168 3.51168 1.3999 5.4999 1.3999L17.4999 1.3999Z"
        stroke="currentColor"
        className={className}
        stroke-width="2"
      />
    </svg>
  );
}

export default RectangleIcon;
