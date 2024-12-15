function PencilIcon({ className }: { className: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5499 14.5999L7.7499 18.1999M2.9499 14.5999L14.7813 2.35533C16.0552 1.08143 18.1206 1.08143 19.3945 2.35533C20.6684 3.62923 20.6684 5.69463 19.3945 6.96853L7.1499 18.7999L1.1499 20.5999L2.9499 14.5999Z"
        stroke="currentColor"
        className={className}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default PencilIcon;
