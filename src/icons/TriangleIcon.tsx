function TriangleIcon({ className }: { className: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.2499 1.6001L20.8499 18.4001H1.6499L11.2499 1.6001Z"
        stroke="currentColor"
        className={className}
        stroke-width="2"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default TriangleIcon;
