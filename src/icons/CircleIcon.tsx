function CircleIcon({ className }: { className: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.5999 10.9999C20.5999 16.3018 16.3018 20.5999 10.9999 20.5999C5.69797 20.5999 1.3999 16.3018 1.3999 10.9999C1.3999 5.69797 5.69797 1.3999 10.9999 1.3999C16.3018 1.3999 20.5999 5.69797 20.5999 10.9999Z"
        stroke="currentColor"
        className={className}
        stroke-width="2"
      />
    </svg>
  );
}

export default CircleIcon;
