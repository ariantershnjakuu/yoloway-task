function UploadIcon({ className }: { className: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.89286 11.4289C2.29518 11.4289 1 10.4291 1 8.96313C1 7.49716 2.29518 6.30876 3.89286 6.30876C4.0015 6.30876 4.10875 6.31425 4.21429 6.32496V6.30876H4.25407C4.22781 6.11552 4.21429 5.91866 4.21429 5.71889C4.21429 3.11272 6.51682 1 9.35714 1C11.2805 1 12.9573 1.96881 13.8395 3.40361C14.0551 3.37452 14.2756 3.35945 14.5 3.35945C16.9853 3.35945 19 5.20808 19 7.48848C19 9.36568 17.6348 10.7967 15.7656 11.2684M9.85797 15V8.22581M9.85797 8.22581L6.90625 11.0196M9.85797 8.22581L12.8125 11.0196"
        stroke="currentColor"
        className={className}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default UploadIcon;
